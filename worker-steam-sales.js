/**
 * Worker: steam-specials
 * ============================================================
 * Fa da tramite tra il sito e l'endpoint pubblico di Steam per gli
 * sconti in corso (store.steampowered.com/api/featuredcategories),
 * che non espone header CORS: chiamato direttamente dal browser del
 * sito, il fetch verrebbe bloccato. Il Worker lo interroga lato
 * server (dove CORS non si applica) e restituisce solo i campi che
 * servono davvero, con gli header CORS aggiunti.
 *
 * Non e' stato ancora distribuito da Claude: questo file va
 * pubblicato a mano (dashboard Cloudflare o `wrangler deploy`),
 * esattamente come gli altri Worker gia' in uso sul sito (quello dei
 * "mi piace", quello del report bug). Una volta pubblicato, l'URL
 * assegnato va incollato in cima a script-officina.js, nella
 * costante STEAM_SPECIALS_WORKER_URL - finche' resta il valore
 * segnaposto, il sito usa automaticamente il pool statico di
 * riserva (vedi commento li' nello script).
 *
 * Endpoint esposto: GET /  (nessun parametro necessario)
 * Risposta:
 *   { "items": [ { "appid": 1174180, "title": "...", "discountPercent": 67,
 *                  "finalPriceCents": 1979, "currency": "EUR",
 *                  "cover": "https://...header.jpg" }, ... ],
 *     "updatedAt": 1755... }
 * In caso di errore: status 502, { "items": [], "error": "..." }
 *
 * Cache: 5 minuti (Cache-Control + cache Cloudflare stessa), stesso
 * ritmo del refresh lato sito - non ha senso interrogare Steam piu'
 * spesso di quanto il sito lo richieda davvero.
 * ============================================================
 */

const STEAM_ENDPOINT = "https://store.steampowered.com/api/featuredcategories?cc=IT&l=italian";
const CACHE_SECONDS = 300; // 5 minuti, stesso ritmo del refresh lato sito

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type"
};

export default {
  async fetch(request, env, ctx) {
    if (request.method === "OPTIONS") {
      return new Response(null, { headers: CORS_HEADERS });
    }

    // Cache Cloudflare integrata: se qualcuno ha gia' chiamato questo
    // Worker negli ultimi CACHE_SECONDS, risponde da li' senza
    // nemmeno interrogare Steam di nuovo - importante perche' Steam
    // stessa limita gli abusi (circa 200 richieste ogni 5 minuti per
    // IP, secondo la documentazione non ufficiale: con la cache,
    // il Worker ne fa al massimo una ogni 5 minuti in totale, non
    // una per ogni visitatore del sito).
    const cache = caches.default;
    const cacheKey = new Request(request.url, request);
    const cached = await cache.match(cacheKey);
    if (cached) return cached;

    try {
      const steamRes = await fetch(STEAM_ENDPOINT, {
        headers: { "Accept": "application/json" }
      });
      if (!steamRes.ok) throw new Error("Steam ha risposto " + steamRes.status);
      const data = await steamRes.json();

      const rawItems = (data.specials && data.specials.items) || [];
      const items = rawItems
        .filter(g => g.discounted && g.discount_percent > 0)
        .slice(0, 40) // margine oltre i 10 mostrati, cosi' il sito puo' pescarne a caso senza richiamare il Worker
        .map(g => ({
          appid: g.id,
          title: g.name,
          discountPercent: g.discount_percent,
          finalPriceCents: g.final_price,
          currency: g.currency || "EUR",
          cover: g.large_capsule_image || g.header_image ||
            `https://cdn.cloudflare.steamstatic.com/steam/apps/${g.id}/header.jpg`
        }));

      const body = JSON.stringify({ items, updatedAt: Date.now() });
      const response = new Response(body, {
        headers: {
          ...CORS_HEADERS,
          "Content-Type": "application/json",
          "Cache-Control": `public, max-age=${CACHE_SECONDS}`
        }
      });

      ctx.waitUntil(cache.put(cacheKey, response.clone()));
      return response;

    } catch (err) {
      return new Response(JSON.stringify({ items: [], error: String(err) }), {
        status: 502,
        headers: { ...CORS_HEADERS, "Content-Type": "application/json" }
      });
    }
  }
};

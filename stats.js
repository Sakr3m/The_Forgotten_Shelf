// ============================================================
// Ping di tracciamento visite verso il Worker Cloudflare
// (the-forgotten-shelf.sl-eternal-lux.workers.dev). Invisibile
// all'utente, non blocca il caricamento della pagina (fetch
// asincrono, nessun await), fallisce in silenzio se il Worker non
// risponde (es. offline) senza rompere nulla sul sito.
// ============================================================
(function () {
  var STATS_ENDPOINT = "https://the-forgotten-shelf.sl-eternal-lux.workers.dev/track";
  var page = location.pathname.split("/").pop() || "index.html";

  fetch(STATS_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ page: page }),
  }).catch(function () {
    // silenzioso: il tracciamento non deve mai interferire con la
    // normale fruizione del sito.
  });
})();

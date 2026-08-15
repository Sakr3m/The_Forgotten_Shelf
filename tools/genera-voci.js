#!/usr/bin/env node
/**
 * tools/genera-voci.js
 * ============================================================
 * Genera una pagina HTML statica e indicizzabile per ogni singola
 * voce di contenuto del sito (racconti, capitoli dei libri, teorie,
 * recensioni, ogni titolo di ogni saga sulla Timeline) — risolve il
 * problema per cui, oggi, nessuna voce ha un URL proprio: tutto vive
 * solo nello stato JS della pagina interattiva.
 *
 * USO:
 *   node tools/genera-voci.js
 * Nessuna dipendenza esterna: solo i moduli core di Node (fs, path,
 * vm). Va rilanciato ogni volta che cambia un file dati o questo
 * stesso script - vedi il workflow GitHub Actions che lo fa in
 * automatico ad ogni push.
 *
 * REGOLA DA NON DIMENTICARE: non editare mai a mano un file dentro
 * /voci/. Qualunque modifica manuale sparisce al prossimo rilancio
 * dello script. Per cambiare il contenuto di una voce, si modifica
 * il file dati di origine (data.js, data-racconti.js, ecc.) o
 * diari_di_gioco.html per le recensioni. Per cambiare l'aspetto di
 * TUTTE le pagine generate, si modifica tools/template-voce.html e
 * si rilancia lo script - non serve mai toccare le pagine una a una.
 * ============================================================
 */

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.join(__dirname, "..");
const VOCI_DIR = path.join(ROOT, "voci");
const TEMPLATE_PATH = path.join(__dirname, "template-voce.html");
const SITE_URL = "https://sakr3m.github.io/The_Forgotten_Shelf/";
const SITEMAP_PATH = path.join(ROOT, "sitemap.xml");

const TEMPLATE = fs.readFileSync(TEMPLATE_PATH, "utf-8");

// ---------------------------------------------------------
// Caricamento dati: stesso ordine di caricamento usato da
// storie_senza_cornice.html (l'unica pagina che li carica tutti
// insieme), in un unico contesto vm condiviso — esattamente come
// farebbe il browser con piu' <script> in sequenza uno dopo l'altro.
// Nessuna modifica ai file dati originali: vengono solo letti ed
// eseguiti in sandbox, mai riscritti.
// ---------------------------------------------------------
function caricaDatiCondivisi(){
  const sandbox = {};
  vm.createContext(sandbox);
  const files = [
    "data.js",
    "data-shared-tracks.js",
    "data-storie-teorie.js",
    "data-diari-tracks.js",
    "data-racconti.js"
  ];
  for(const file of files){
    const code = fs.readFileSync(path.join(ROOT, file), "utf-8");
    vm.runInContext(code, sandbox, { filename: file });
  }
  // 'const' dentro vm.runInContext non si espone come proprieta' del
  // sandbox (succede solo con 'var') - cattura esplicita necessaria,
  // eseguita nello STESSO contesto cosi' i nomi restano risolvibili.
  vm.runInContext(
    "this.__EXPORTED__ = { RACCONTI, LIBRI, TEORIE, STORIE, GAMES, GAME_ORDER };",
    sandbox
  );
  return sandbox.__EXPORTED__;
}

// ---------------------------------------------------------
// Utility di rendering
// ---------------------------------------------------------
function escapeHtml(str){
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function stripHtml(str){
  return String(str).replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
}

function truncate(str, maxLen){
  if(str.length <= maxLen) return str;
  return str.slice(0, maxLen - 1).trimEnd() + "…";
}

// I testi lunghi (RACCONTI/LIBRI/TEORIE) sono paragrafi separati da
// una riga vuota dentro un'unica stringa; i testi delle sinossi di
// Timeline sono gia' un paragrafo unico piu' breve. Stessa funzione
// per entrambi: se non ci sono righe vuote, esce un solo <p>.
function paragrafiHtml(testo){
  return testo
    .split(/\n{2,}/)
    .map(p => p.trim())
    .filter(Boolean)
    .map(p => `<p>${escapeHtml(p)}</p>`)
    .join("\n      ");
}

const generatedUrls = [];

function scriviPagina(outPath, vars){
  const depth = path.relative(VOCI_DIR, path.dirname(outPath)).split(path.sep).filter(Boolean).length + 1;
  const root = "../".repeat(depth);
  let html = TEMPLATE;
  const allVars = { ...vars, ROOT: root };
  for(const [key, value] of Object.entries(allVars)){
    html = html.split(`{{${key}}}`).join(value);
  }
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, html, "utf-8");
  const relUrl = path.relative(ROOT, outPath).split(path.sep).join("/");
  generatedUrls.push(SITE_URL + relUrl);
}

// ============================================================
// SEZIONE 1 — Storie Senza Cornice (Racconti + Libri)
// ============================================================
function generaStorieSenzaCornice(dati){
  const outDir = path.join(VOCI_DIR, "storie-senza-cornice");
  const backHref = "../../storie_senza_cornice.html";
  let count = 0;

  function generaVoce(id, item){
    if(!item.body || !item.body.it || !item.body.it.trim()) return; // niente testo, niente pagina
    const titoloOpera = item.gameLabel.it;
    const capitolo = item.dropdownLabel ? item.dropdownLabel.it : null;
    const titoloPagina = capitolo ? `${titoloOpera} — ${capitolo}` : titoloOpera;

    scriviPagina(path.join(outDir, `${id}.html`), {
      LANG: "it",
      TITLE: escapeHtml(titoloPagina),
      PAGE_TITLE: escapeHtml(`${titoloPagina} | The Forgotten Shelf`),
      DESCRIPTION: escapeHtml(truncate(stripHtml(item.body.it), 155)),
      CANONICAL: `${SITE_URL}voci/storie-senza-cornice/${id}.html`,
      SECTION_LABEL: "Storie Senza Cornice",
      BACK_HREF: backHref,
      BACK_LABEL: "Storie Senza Cornice",
      SUBTITLE_HTML: item.tag
        ? `<p class="subtitle">${escapeHtml(item.tag.it)}</p>`
        : "",
      BODY_HTML: paragrafiHtml(item.body.it),
      CTA_LABEL: "Leggi tutte le opere su Storie Senza Cornice →"
    });
    count++;
  }

  Object.entries(dati.RACCONTI).forEach(([id, item]) => generaVoce(id, item));
  Object.entries(dati.LIBRI).forEach(([id, item]) => generaVoce(id, item));
  return count;
}

// ============================================================
// SEZIONE 2 — Il Filo Nascosto (Teorie + Storie Nascoste)
// ============================================================
function generaFiloNascosto(dati){
  const outDir = path.join(VOCI_DIR, "il-filo-nascosto");
  const backHref = "../../il_filo_nascosto.html";
  let count = 0;

  function generaVoce(id, item){
    if(!item.body || !item.body.it || !item.body.it.trim()) return;

    scriviPagina(path.join(outDir, `${id}.html`), {
      LANG: "it",
      TITLE: escapeHtml(`${item.title.it} — ${item.gameLabel.it}`),
      PAGE_TITLE: escapeHtml(`${item.title.it} — ${item.gameLabel.it} | The Forgotten Shelf`),
      DESCRIPTION: escapeHtml(truncate(stripHtml(item.body.it), 155)),
      CANONICAL: `${SITE_URL}voci/il-filo-nascosto/${id}.html`,
      SECTION_LABEL: "Il Filo Nascosto",
      BACK_HREF: backHref,
      BACK_LABEL: "Il Filo Nascosto",
      SUBTITLE_HTML: `<p class="subtitle">${escapeHtml(item.gameLabel.it)}</p>`,
      BODY_HTML: paragrafiHtml(item.body.it),
      CTA_LABEL: "Leggi tutte le teorie su Il Filo Nascosto →"
    });
    count++;
  }

  Object.entries(dati.TEORIE).forEach(([id, item]) => generaVoce(id, item));
  Object.entries(dati.STORIE).forEach(([id, item]) => generaVoce(id, item));
  return count;
}

// ============================================================
// SEZIONE 3 — Diari di Gioco (recensioni)
// Caso diverso dagli altri: qui il contenuto NON vive in un file
// dati JS, e' gia' HTML statico scritto direttamente dentro
// diari_di_gioco.html (nascosto con l'attributo hidden). Lo si
// estrae da li' invece che da un oggetto dati.
// ============================================================
// Estrae il contenuto di un elemento aperto in `openTagMatch` (deve
// includere il tag di apertura completo, es. '<div class="deep" ...>'),
// bilanciando correttamente i tag annidati dello stesso nome - non un
// semplice indexOf del prossimo tag di chiusura, che si fermerebbe al
// primo </div> interno invece che a quello che chiude davvero questo
// elemento.
function estraiContenutoBilanciato(html, openTagMatch, tagName){
  const contentStart = openTagMatch.index + openTagMatch[0].length;
  const tagRe = new RegExp(`<${tagName}\\b[^>]*>|</${tagName}>`, "g");
  tagRe.lastIndex = contentStart;
  let depth = 1;
  let m;
  while((m = tagRe.exec(html)) !== null){
    if(m[0].startsWith("</")) depth--;
    else depth++;
    if(depth === 0) return html.slice(contentStart, m.index);
  }
  return null; // tag non bilanciato, l'elemento non si chiude mai correttamente
}

function generaDiariDiGioco(){
  const htmlPath = path.join(ROOT, "diari_di_gioco.html");
  const pageHtml = fs.readFileSync(htmlPath, "utf-8");
  const outDir = path.join(VOCI_DIR, "diari-di-gioco");
  const backHref = "../../diari_di_gioco.html";
  let count = 0;

  const articleRe = /<article class="review-entry" id="([a-zA-Z0-9]+)"[^>]*>/g;
  let match;
  while((match = articleRe.exec(pageHtml)) !== null){
    const domId = match[1];
    const id = domId.replace(/^review/, "").replace(/^./, c => c.toLowerCase());
    const articleHtml = estraiContenutoBilanciato(pageHtml, match, "article");
    if(!articleHtml) continue;

    // Titolo vero (non quello del DOM): dentro entry-header__title.
    const titleMatch = articleHtml.match(/entry-header__title">([^<]+)</);
    const titolo = titleMatch ? titleMatch[1].trim() : id;

    // Tag (genere/piattaforme/ore): tutti gli span title-tag dentro
    // entry-header__meta, uniti con un separatore leggibile.
    const metaMatch = articleHtml.match(/entry-header__meta">([\s\S]*?)<\/div>/);
    let sottotitolo = "";
    if(metaMatch){
      const tags = [...metaMatch[1].matchAll(/title-tag[^>]*>([^<]+)</g)].map(m => m[1].trim());
      sottotitolo = tags.join(" · ");
    }

    // Assaggio veloce (quick-take): sempre visibile a pagina intera,
    // niente spoiler - coppie h2/p su Narrativa, Gameplay, Comparto
    // Tecnico.
    const quickTakeOpenMatch = articleHtml.match(/<div class="quick-take">/);
    let quickTakeHtml = "";
    if(quickTakeOpenMatch){
      const quickTakeContent = estraiContenutoBilanciato(articleHtml, quickTakeOpenMatch, "div");
      if(quickTakeContent){
        const pairs = [...quickTakeContent.matchAll(/<h2[^>]*>([^<]+)<\/h2>\s*<p[^>]*>([^<]+)<\/p>/g)];
        quickTakeHtml = pairs.map(([, h, p]) =>
          `<p><strong>${escapeHtml(h.trim())}</strong><br>${escapeHtml(p.trim())}</p>`
        ).join("\n      ");
      }
    }

    // Recensione completa "seria" (non quella "senza freni", ancora
    // segnaposto in tutte e 4 le recensioni attuali - non ha senso
    // indicizzare un placeholder). Individuata per esclusione: tra i
    // due div "deep" di ogni recensione, quello il cui id NON
    // contiene "Goofy" - il nome esatto dell'id varia da voce a voce
    // (es. FFVIII non ha suffisso, le altre si'), quindi non ci si
    // affida al pattern del nome.
    const deepDivRe = /<div class="deep" id="([^"]*)">/g;
    let deepMatch;
    let recensioneSeria = "";
    while((deepMatch = deepDivRe.exec(articleHtml)) !== null){
      if(deepMatch[1].includes("Goofy")) continue;
      const deepContent = estraiContenutoBilanciato(articleHtml, deepMatch, "div");
      if(!deepContent) continue;
      const paragrafi = [...deepContent.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/g)].map(m => m[1].trim());
      recensioneSeria = paragrafi
        .filter(p => stripHtml(p).length > 0)
        .map(p => `<p>${stripHtml(p)}</p>`)
        .join("\n      ");
      break; // trovato quello giusto, non serve continuare
    }

    const testoCompleto = stripHtml(quickTakeHtml) + " " + stripHtml(recensioneSeria);
    if(!testoCompleto.trim()) continue; // niente testo reale da nessuna delle due parti, salta

    scriviPagina(path.join(outDir, `${id}.html`), {
      LANG: "it",
      TITLE: escapeHtml(`Recensione ${titolo}`),
      PAGE_TITLE: escapeHtml(`Recensione ${titolo} | The Forgotten Shelf`),
      DESCRIPTION: escapeHtml(truncate(testoCompleto, 155)),
      CANONICAL: `${SITE_URL}voci/diari-di-gioco/${id}.html`,
      SECTION_LABEL: "Diari di Gioco",
      BACK_HREF: backHref,
      BACK_LABEL: "Diari di Gioco",
      SUBTITLE_HTML: sottotitolo ? `<p class="subtitle">${escapeHtml(sottotitolo)}</p>` : "",
      BODY_HTML: quickTakeHtml + (recensioneSeria ? "\n      <hr style=\"border-color:#1f2738; margin:32px 0;\">\n      " + recensioneSeria : ""),
      CTA_LABEL: "Leggi tutte le recensioni su Diari di Gioco →"
    });
    count++;
  }
  return count;
}

// ============================================================
// SEZIONE 4 — La Traccia del Tempo (ogni titolo di ogni saga)
// Annidata per saga (GAMES[sagaId]): a differenza delle altre tre
// sezioni, qui esistono ID uguali tra saghe diverse (es.
// "revelations" e' sia in Assassin's Creed che in Resident Evil) -
// un unico spazio piatto avrebbe creato collisioni vere, verificate
// prima di scrivere questo script.
// ============================================================
function generaTimeline(dati){
  const backHrefBase = "../../../la_traccia_del_tempo.html";
  let count = 0;

  dati.GAME_ORDER.forEach(sagaId => {
    const saga = dati.GAMES[sagaId];
    if(!saga || !saga.universes) return; // saghe noTimeline (Doom, Pokemon, ecc.) non hanno voci singole
    const outDir = path.join(VOCI_DIR, "la-traccia-del-tempo", sagaId);
    const nomeSaga = saga.listTitle.it;

    saga.universes.forEach(universo => {
      (universo.entries || []).forEach(entry => {
        if(!entry.synopsis || !entry.synopsis.it || !entry.synopsis.it.trim()) return;

        scriviPagina(path.join(outDir, `${entry.id}.html`), {
          LANG: "it",
          TITLE: escapeHtml(`${entry.title.it} — ${nomeSaga}`),
          PAGE_TITLE: escapeHtml(`${entry.title.it} — ${nomeSaga} | The Forgotten Shelf`),
          DESCRIPTION: escapeHtml(truncate(stripHtml(entry.synopsis.it), 155)),
          CANONICAL: `${SITE_URL}voci/la-traccia-del-tempo/${sagaId}/${entry.id}.html`,
          SECTION_LABEL: `La Traccia del Tempo — ${nomeSaga}`,
          BACK_HREF: backHrefBase,
          BACK_LABEL: "La Traccia del Tempo",
          SUBTITLE_HTML: `<p class="subtitle">${escapeHtml(entry.type)} — ${escapeHtml(entry.year)}</p>`,
          BODY_HTML: paragrafiHtml(entry.synopsis.it),
          CTA_LABEL: `Esplora tutta la linea temporale di ${escapeHtml(nomeSaga)} →`
        });
        count++;
      });
    });
  });
  return count;
}

// ============================================================
// SITEMAP — rigenerata da zero ad ogni lancio: le URL statiche del
// sito (index, le 5 pagine principali) restano quelle gia' presenti
// nel file originale, sotto ci si aggiungono tutte le voci generate.
// ============================================================
// ============================================================
// SITEMAP — le voci statiche gia' presenti (index, le pagine di
// sezione, con i loro <priority>/<lastmod> originali) restano
// intatte, byte per byte: non vengono mai ricostruite a mano, solo
// preservate. Si tolgono unicamente i <url> di un run precedente di
// questo stesso script (quelli con /voci/ nel loc) e si rimettono
// quelli freschi. Se il file non esiste ancora, si parte da un
// urlset vuoto.
// ============================================================
function aggiornaSitemap(){
  const oggi = new Date().toISOString().slice(0, 10);
  let existingStatic = [];

  if(fs.existsSync(SITEMAP_PATH)){
    const currentXml = fs.readFileSync(SITEMAP_PATH, "utf-8");
    const urlBlocks = currentXml.match(/<url>[\s\S]*?<\/url>/g) || [];
    existingStatic = urlBlocks.filter(block => !block.includes("/voci/"));
  }

  const voceEntries = generatedUrls.map(u => `  <url>
    <loc>${u}</loc>
    <lastmod>${oggi}</lastmod>
    <changefreq>monthly</changefreq>
  </url>`);

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${existingStatic.join("\n")}
${voceEntries.join("\n")}
</urlset>
`;
  fs.writeFileSync(SITEMAP_PATH, xml, "utf-8");
}

// ============================================================
// AVVIO
// ============================================================
function main(){
  console.log("Carico i dati condivisi...");
  const dati = caricaDatiCondivisi();

  if(fs.existsSync(VOCI_DIR)){
    fs.rmSync(VOCI_DIR, { recursive: true, force: true });
  }

  const n1 = generaStorieSenzaCornice(dati);
  console.log(`Storie Senza Cornice: ${n1} pagine`);

  const n2 = generaFiloNascosto(dati);
  console.log(`Il Filo Nascosto: ${n2} pagine`);

  const n3 = generaDiariDiGioco();
  console.log(`Diari di Gioco: ${n3} pagine`);

  const n4 = generaTimeline(dati);
  console.log(`La Traccia del Tempo: ${n4} pagine`);

  aggiornaSitemap();
  console.log(`Sitemap aggiornata (${generatedUrls.length} voci + pagine fisse).`);

  console.log(`\nTotale: ${n1 + n2 + n3 + n4} pagine generate.`);
}

main();

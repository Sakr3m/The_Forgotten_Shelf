// Generatore pagine statiche indicizzabili per Storie Senza Cornice
// (Racconti = colonna "teorie" nei dati, Libri = colonna "storie").
//
// Legge data-racconti.js, per ogni voce clona storie_senza_cornice.html
// e produce un file autonomo con:
//  - title/meta description/canonical unici
//  - il contenuto della voce gia' scritto nell'HTML (non iniettato da JS)
//  - stesso identico script/CSS del sito, con un flag __PRERENDER__ che fa
//    aprire l'app direttamente su quella voce (vedi script-racconti.js)
//
// Uso: node tools/generate-entry-pages.js

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.join(__dirname, "..");
const BASE_URL = "https://sakr3m.github.io/The_Forgotten_Shelf";

// --- 1. carica i dati eseguendo data-racconti.js in un contesto isolato ---
const dataSrc = fs.readFileSync(path.join(ROOT, "data-racconti.js"), "utf8");
const sandbox = {};
vm.createContext(sandbox);
vm.runInContext(dataSrc, sandbox, { filename: "data-racconti.js" });
// top-level const/let dentro vm.runInContext non diventano proprieta'
// enumerabili di sandbox: si rileggono con un'altra runInContext nello
// stesso contesto.
const RACCONTI = vm.runInContext("RACCONTI", sandbox);
const RACCONTI_ORDER = vm.runInContext("RACCONTI_ORDER", sandbox);
const LIBRI = vm.runInContext("LIBRI", sandbox);
const LIBRI_ORDER = vm.runInContext("LIBRI_ORDER", sandbox);

// --- 2. template di partenza ---
const template = fs.readFileSync(path.join(ROOT, "storie_senza_cornice.html"), "utf8");

function escapeHtml(s){
  return String(s || "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function escapeAttr(s){
  return escapeHtml(s).replace(/\n/g, " ");
}

// entry.body/title/tag sono oggetti {it, en}; qui generiamo la versione IT
// (lang="it" e' gia' il default del sito, l'EN resta gestita da JS via
// data-i18n una volta che l'app e' idratata).
function buildEntryHtml(entry){
  const title = escapeHtml(entry.title.it);
  const tag = entry.tag ? `<p class="entry-tag">${escapeHtml(entry.tag.it)}</p>` : "";
  // il body nei dati e' gia' testo con \n\n tra paragrafi: lo split in <p>
  // qui non serve, il template originale lo mette tutto in un unico blocco
  // dentro <span class="text-highlight"> con gli a-capo gestiti da CSS
  // (white-space) - manteniamo la stessa struttura per fedelta' visiva.
  const body = escapeHtml(entry.body.it).replace(/\n/g, "<br>");
  return [
    `<h1 class="entry-title">${title}</h1>`,
    `<p class="entry-copyright">\u00A9 2026 Sakrem \u2014 Tutti i diritti riservati</p>`,
    tag,
    `<p class="entry-body"><span class="text-highlight">${body}</span></p>`
  ].join("\n    ");
}

function generatePage(column, id, entry, tableLabel){
  const slugPrefix = column === "teorie" ? "racconto" : "libro";
  const fileName = `${slugPrefix}-${id}.html`;
  const url = `${BASE_URL}/${fileName}`;
  const metaTitle = `${entry.title.it} \u2014 The Forgotten Shelf`;
  const metaDesc = entry.tag && entry.tag.it
    ? `${entry.tag.it}. ${entry.title.it}, un ${slugPrefix === "racconto" ? "racconto" : "libro"} originale di Sakrem su The Forgotten Shelf.`
    : `${entry.title.it}, un ${slugPrefix === "racconto" ? "racconto" : "libro"} originale di Sakrem su The Forgotten Shelf.`;

  let html = template;

  // title
  html = html.replace(
    /<title>[^<]*<\/title>/,
    `<title>${escapeHtml(metaTitle)}</title>`
  );
  // meta description
  html = html.replace(
    /<meta name="description" content="[^"]*">/,
    `<meta name="description" content="${escapeAttr(metaDesc)}">`
  );
  // canonical (la pagina landing ce l'ha gia', lo sostituiamo col proprio)
  html = html.replace(
    /<link rel="canonical" href="[^"]*">/,
    `<link rel="canonical" href="${url}">`
  );
  // flag di prerender, iniettato PRIMA di data-racconti.js/script-racconti.js
  html = html.replace(
    '<script src="data-racconti.js"></script>',
    `<script>window.__PRERENDER__ = { column: "${column}", id: "${id}" };</script>\n  <script src="data-racconti.js"></script>`
  );
  // body: parte gia' in vista voce, non landing (coerenza visiva prima
  // che lo script giri; lo script stesso confermera' questo stato)
  html = html.replace('data-state="landing"', 'data-state="entry"');
  // landing nascosta, pannello voce visibile di default
  html = html.replace('<section class="landing" id="landingPanel">', '<section class="landing" id="landingPanel" hidden>');
  html = html.replace('<section class="entry-panel" id="entryPanel" hidden>', '<section class="entry-panel" id="entryPanel">');
  // contenuto vero, scritto subito nell'HTML
  html = html.replace(
    '<div class="entry-content" id="entryContent"></div>',
    `<div class="entry-content" id="entryContent">\n    ${buildEntryHtml(entry)}\n  </div>`
  );

  fs.writeFileSync(path.join(ROOT, fileName), html, "utf8");
  return { fileName, url };
}

const generated = [];
RACCONTI_ORDER.forEach(id => generated.push(generatePage("teorie", id, RACCONTI[id])));
LIBRI_ORDER.forEach(id => generated.push(generatePage("storie", id, LIBRI[id])));

console.log(`Generate ${generated.length} pagine:`);
generated.forEach(g => console.log(" -", g.fileName));

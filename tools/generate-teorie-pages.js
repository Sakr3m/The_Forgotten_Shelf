// Stessa logica di generate-entry-pages.js, applicata a Il Filo
// Nascosto (data-storie-teorie.js). Voci TEORIE (colonna "teorie");
// STORIE_ORDER e' ancora vuoto, quindi per ora non genera nulla li',
// ma il ciclo e' gia' pronto per quando ci saranno voci.
//
// Uso: node tools/generate-teorie-pages.js

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.join(__dirname, "..");
const BASE_URL = "https://sakr3m.github.io/The_Forgotten_Shelf";

const dataSrc = fs.readFileSync(path.join(ROOT, "data-storie-teorie.js"), "utf8");
const sandbox = {};
vm.createContext(sandbox);
vm.runInContext(dataSrc, sandbox, { filename: "data-storie-teorie.js" });
const TEORIE = vm.runInContext("TEORIE", sandbox);
const TEORIE_ORDER = vm.runInContext("TEORIE_ORDER", sandbox);
const STORIE = vm.runInContext("STORIE", sandbox);
const STORIE_ORDER = vm.runInContext("STORIE_ORDER", sandbox);

const template = fs.readFileSync(path.join(ROOT, "il_filo_nascosto.html"), "utf8");

function escapeHtml(s){
  return String(s || "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function escapeAttr(s){ return escapeHtml(s).replace(/\n/g, " "); }

function buildEntryHtml(entry, column){
  const title = escapeHtml(entry.title.it);
  const copyright = column === "teorie" ? `<p class="entry-copyright">\u00A9 2026 Sakrem \u2014 Tutti i diritti riservati</p>` : "";
  const body = escapeHtml(entry.body.it).replace(/\n/g, "<br>");
  return [
    `<h1 class="entry-title">${title}</h1>`,
    copyright,
    `<p class="entry-body">${body}</p>`
  ].filter(Boolean).join("\n    ");
}

function generatePage(column, id, entry){
  const slugPrefix = column === "teorie" ? "teoria" : "storia-nascosta";
  const fileName = `${slugPrefix}-${id.replace(/_/g, "-")}.html`;
  const url = `${BASE_URL}/${fileName}`;
  const metaTitle = `${entry.title.it} \u2014 The Forgotten Shelf`;
  const metaDesc = `Teoria fan su ${entry.gameLabel.it}: ${entry.title.it}. Interpretazione approfondita su The Forgotten Shelf.`;

  let html = template;
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${escapeHtml(metaTitle)}</title>`);
  html = html.replace(/<meta name="description" content="[^"]*">/, `<meta name="description" content="${escapeAttr(metaDesc)}">`);
  html = html.replace(/<link rel="canonical" href="[^"]*">/, `<link rel="canonical" href="${url}">`);
  html = html.replace(
    '<script src="data-storie-teorie.js"></script>',
    `<script>window.__PRERENDER__ = { column: "${column}", id: "${id}" };</script>\n  <script src="data-storie-teorie.js"></script>`
  );
  html = html.replace('data-state="landing"', 'data-state="entry"');
  html = html.replace('<section class="landing" id="landingPanel">', '<section class="landing" id="landingPanel" hidden>');
  html = html.replace('<section class="entry-panel" id="entryPanel" hidden>', '<section class="entry-panel" id="entryPanel">');
  html = html.replace(
    '<div class="entry-content" id="entryContent"></div>',
    `<div class="entry-content" id="entryContent">\n    ${buildEntryHtml(entry, column)}\n  </div>`
  );

  fs.writeFileSync(path.join(ROOT, fileName), html, "utf8");
  return { fileName, url };
}

const generated = [];
TEORIE_ORDER.forEach(id => generated.push(generatePage("teorie", id, TEORIE[id])));
STORIE_ORDER.forEach(id => generated.push(generatePage("storie", id, STORIE[id])));

console.log(`Generate ${generated.length} pagine:`);
generated.forEach(g => console.log(" -", g.fileName));

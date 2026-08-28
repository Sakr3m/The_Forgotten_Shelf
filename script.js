// ============================================================
// L'ARCHIVIO — logica di stato e rendering
// ============================================================

// Il titolo "La Traccia del Tempo" (.landing-title) usa JetBrains
// Mono peso 700 fin dal primissimo istante (e' il titolo della
// home, visibile subito, non nascosto come su Storie Senza
// Cornice/Il Filo Nascosto) - qui il salto di layout font di
// riserva -> font vero sarebbe ancora piu' visibile che altrove.
// .brand-text usa Inter peso 800, ma solo dentro una saga/voce (in
// home e' nascosto) - stesso identico caso delle pagine gemelle,
// stesso preload. document.fonts.load() forza l'intera pipeline di
// caricamento (fetch + decodifica + registrazione) subito via JS,
// piu' aggressivo del solo <link rel="preload"> nell'head.
if(document.fonts && document.fonts.load){
  document.fonts.load("700 36px 'JetBrains Mono'").catch(() => {});
  document.fonts.load("800 1.32rem Inter").catch(() => {});
}

const STRINGS = {
  it: {
    brand: "La Traccia del Tempo",
    brandMobile: "La Traccia\ndel Tempo",
    sidebarEyebrow: "Libreria Timeline",
    landingEyebrow: "Benvenuto nell'archivio\nTimeline",
    landingTitle: "La Traccia del Tempo",
    landingIntro: "Le linee temporali di alcune delle saghe videoludiche più amate, con l'ordine cronologico degli eventi ricostruito capitolo per capitolo. Un archivio pensato per chi vuole i fatti, in ordine, senza perdersi tra spin-off, reboot e universi paralleli.",
    spoilerAlert: "Ogni pagina contiene sinossi dettagliate delle trame, inclusi finali e colpi di scena. Procedi solo se hai già completato i titoli o non temi gli spoiler.",
    // Solo mobile: versione corta, presa identica da Il Filo Nascosto
    // (mancava qui - la pagina ricadeva sulla versione lunga da
    // desktop anche su schermi piccoli, dove serve piu' spazio).
    spoilerAlertMobile: "Contiene spoiler: procedi solo se hai già finito i titoli o non te ne importa.",
    landingSub: "Seleziona un titolo dalla libreria a sinistra per esplorarne la linea temporale.",
    // Solo mobile: qui la tabella si apre a destra (carosello a 2
    // tappe, vedi #stage{order:-1} in CSS), non a sinistra come su
    // desktop - meccanismo gia' pronto in paintStaticText() per le
    // chiavi con suffisso "Mobile".
    landingSubMobile: "Seleziona un titolo dalla libreria a destra per esplorarne la linea temporale.",
    kofiLabel: "Sostienimi su Ko-fi",
    backToIndexLabel: "Torna all'index",
    universeLabel: "Universo",
    backToTimeline: "Indietro",
    backToGamePrefix: "Torna a",
    canonTitlesLabel: "La progressione più accreditata segue questi titoli, nell'ordine:",
    canonNoTimelineLabel: "Nessuna timeline ufficiale",
    factReleaseDate: "Uscita",
    titleDateSetting: "Ambientato",
    leaveALike: "Lascia un like",
    reportBtnLabel: "Segnala bug",
    reportTitle: "Segnala un problema",
    reportIntro: "Hai trovato qualcosa che non funziona? Descrivi cosa è successo qui sotto: la descrizione è obbligatoria, l'immagine è facoltativa ma aiuta molto.",
    reportDescLabel: "Descrizione",
    reportDescPlaceholder: "Cosa è successo, e in quale pagina?",
    reportImageLabel: "Immagine (facoltativa)",
    reportChooseFile: "Scegli file",
    reportNoFile: "Nessun file scelto",
    reportSend: "Invia",
    reportCancel: "Annulla",
    reportSending: "Invio in corso...",
    reportThanks: "Grazie, segnalazione ricevuta.",
    reportError: "Qualcosa è andato storto, riprova più tardi.",
    reportNeedDescription: "Descrivi prima il problema.",
    reportProcessingImage: "Elaborazione immagine...",
    reportInvalidImage: "Non è stato possibile leggere quell'immagine, provane un'altra.",
    reportSelectImage: "Seleziona un file immagine."
  },
  en: {
    brand: "The Trace of Time",
    brandMobile: "The Trace\nof Time",
    sidebarEyebrow: "Timeline Library",
    landingEyebrow: "Welcome to the\nTimeline archive",
    landingTitle: "The Trace of Time",
    landingIntro: "The timelines of some of the most beloved video game sagas, with the chronological order of events reconstructed chapter by chapter. An archive built for anyone who wants the facts, in order, without getting lost among spin-offs, reboots, and parallel universes.",
    spoilerAlert: "Every page contains detailed plot synopses, including endings and twists. Proceed only if you've already finished the games or aren't worried about spoilers.",
    spoilerAlertMobile: "Contains spoilers: proceed only if you've finished the games or don't mind.",
    landingSub: "Select a title from the library on the left to explore its timeline.",
    landingSubMobile: "Select a title from the library on the right to explore its timeline.",
    kofiLabel: "Support me on Ko-fi",
    backToIndexLabel: "Back to index",
    universeLabel: "Universe",
    backToTimeline: "Back",
    backToGamePrefix: "Back to",
    canonTitlesLabel: "The most widely accepted progression follows these titles, in order:",
    canonNoTimelineLabel: "No official timeline",
    factReleaseDate: "Released",
    titleDateSetting: "Set in",
    leaveALike: "Leave a like",
    reportBtnLabel: "Report bug",
    reportTitle: "Report an issue",
    reportIntro: "Found something broken? Describe what happened below — description required, image optional but helps a lot.",
    reportDescLabel: "Description",
    reportDescPlaceholder: "What happened, and on which page?",
    reportImageLabel: "Image (optional)",
    reportChooseFile: "Choose file",
    reportNoFile: "No file chosen",
    reportSend: "Send",
    reportCancel: "Cancel",
    reportSending: "Sending...",
    reportThanks: "Thanks, report received.",
    reportError: "Something went wrong, please try again later.",
    reportNeedDescription: "Please describe the issue first.",
    reportProcessingImage: "Processing image...",
    reportInvalidImage: "Could not read that image, try another one.",
    reportSelectImage: "Please select an image file."
  }
};

const state = {
  lang: "en",
  view: "landing",     // landing | game | title
  gameId: null,
  universeIndex: 0,
  entryId: null,
  musicOn: true,
  trackIndex: 0
};

const LARGE_UNIVERSE_THRESHOLD = 10; // sopra questa soglia di voci per
  // universo, niente piu' interruttore ne' paginazione: la riga intera va
  // sempre trascinata (era illeggibile stiparle tutte, e paginare rompeva
  // il gradiente colore dei pallini, coerente solo sull'intero universo,
  // non sulla singola pagina - vedi Resident Evil, 28 voci in un unico
  // universo).

let resumedPersistedTrack = false; // vedi blocco ascolto persistente
  // piu' sotto - dichiarata qui perche' letta gia' da updateMusicPlayback,
  // molto prima di dove la logica vera e propria e' definita

const el = {
  body: document.body,
  reportBugBtn: document.getElementById("reportBugBtn"),
  brandBtn: document.getElementById("brandBtn"),
  brand: document.querySelector(".brand"),
  socialLinks: document.querySelector(".social-links"),
  stageControls: document.querySelector(".stage-controls"),
  kofiLink: document.querySelector(".kofi-link"),
  discordLink: document.querySelector(".discord-link"),
  sidebar: document.querySelector(".sidebar"),
  musicControl: document.getElementById("musicControl"),
  langSwitch: document.getElementById("langSwitch"),
  panelToggle: document.getElementById("panelToggle"),
  musicToggle: document.getElementById("musicToggle"),
  bgMusic: document.getElementById("bgMusic"),
  trackInfo: document.getElementById("trackInfo"),
  trackTitle: document.getElementById("trackTitle"),
  trackGame: document.getElementById("trackGame"),
  trackSkipBtn: document.getElementById("trackSkipBtn"),
  trackPersistBtn: document.getElementById("trackPersistBtn"),
  trackProgressFill: document.getElementById("trackProgressFill"),
  volumeSlider: document.getElementById("volumeSlider"),
  gameList: document.getElementById("gameList"),
  landingPanel: document.getElementById("landingPanel"),
  gamePanel: document.getElementById("gamePanel"),
  universeTimelinePanel: document.getElementById("universeTimelinePanel"),
  universeTimelineTrack: document.getElementById("universeTimelineTrack"),
  gameHeader: document.getElementById("gameHeader"),
  gameHeaderBar: document.getElementById("gameHeaderBar"),
  universesRow: document.getElementById("universesRow"),
  dragHintLeft: document.getElementById("dragHintLeft"),
  dragHintRight: document.getElementById("dragHintRight"),
  canonPages: document.getElementById("canonPages"),
  titlePanel: document.getElementById("titlePanel"),
  titleContent: document.getElementById("titleContent"),
  timelineRail: document.getElementById("timelineRail"),
  railLabel: document.getElementById("railLabel"),
  railTrack: document.getElementById("railTrack"),
  watermarkBrightness: document.getElementById("watermarkBrightness"),
  watermarkPresets: document.getElementById("watermarkPresets"),
  watermarkBrightnessSlider: document.getElementById("watermarkBrightnessSlider"),
};

// Spostato qui in cima (prima serviva piu' in basso nel file, ma
// veniva letto anche da codice a livello principale eseguito PRIMA
// di quel punto — es. il volume iniziale della musica — causando un
// errore "Cannot access before initialization" che bloccava tutto
// lo script a meta', prima ancora di disegnare le liste laterali).
const mobileBreakpoint = window.matchMedia("(max-width:900px)");

// ---------------------------------------------------------
// Volume e stato on/off condivisi tra le pagine (Timeline, Storie &
// Teorie, Racconti) tramite localStorage: letti qui, PRIMA di
// qualunque render iniziale, cosi' lo stato ripristinato e' quello
// visto fin dal primo disegno della pagina, non solo dopo. Scritti
// a ogni modifica (vedi piu' sotto), cosi' restano coerenti
// passando da una pagina all'altra (es. muto qui, resta muto li').
// ---------------------------------------------------------
const MUSIC_ON_KEY = "tfs-music-on";
const VOLUME_KEY = "tfs-volume";
const LANG_KEY = "tfs-lang";
const storedMusicOn = localStorage.getItem(MUSIC_ON_KEY);
if(storedMusicOn !== null) state.musicOn = storedMusicOn === "true";
const storedVolume = localStorage.getItem(VOLUME_KEY);
if(storedVolume !== null) el.volumeSlider.value = storedVolume;
const storedLang = localStorage.getItem(LANG_KEY);
if(storedLang === "it" || storedLang === "en") state.lang = storedLang;

// Tabella a comparsa (sidebar sempre aperta di default, oppure
// nascosta finche' non ci si passa sopra col mouse): stessa chiave
// condivisa con Storie Senza Cornice/Il Filo Nascosto
// (tfs-panels-hover) - attivarla su una pagina la attiva su tutte.
// Applicato subito, non dopo, cosi' la pagina non mostra per un
// istante lo stato sbagliato prima di passare a quello salvato.
const PANELS_HOVER_KEY = "tfs-panels-hover";
if(localStorage.getItem(PANELS_HOVER_KEY) === "true"){
  document.body.dataset.panels = "hover";
  if(el.panelToggle) el.panelToggle.setAttribute("aria-pressed", "true");
}

// "Gradiometro" — moltiplicatore di luminosità per le filigrane.
// Stessa identica logica di storie_senza_cornice.html (curva a due fasi +
// 3 preset per-voce): prima condivisa con un'unica chiave, poi
// diventata per-voce anche li', ora portata pari pari qui. La
// "voce" qui è il gioco/saga corrente (g.id), dato che la filigrana
// è tipicamente legata al franchise, non alla singola voce della
// timeline. Il preset attivo (WATERMARK_ACTIVE_SLOT_KEY) usa la
// stessa chiave letterale di storie_senza_cornice.html: cambiarlo su una
// pagina lo cambia anche sull'altra (rappresenta "che schermo stai
// usando ora", non qualcosa di specifico a questa pagina).
const WATERMARK_BRIGHTNESS_KEY_PREFIX = "tfs-watermark-brightness:";
const WATERMARK_ACTIVE_SLOT_KEY = "tfs-watermark-active-slot";
let watermarkBrightness = 1;
let currentWatermarkEntryKey = null;
let activeWatermarkSlot = localStorage.getItem(WATERMARK_ACTIVE_SLOT_KEY) || "1";

function watermarkBrightnessKeyFor(id){
  return WATERMARK_BRIGHTNESS_KEY_PREFIX + (id || "default") + ":" + activeWatermarkSlot;
}

// Curva a due fasi per lo slider 0-1: prima meta' (0-0.5) controlla
// l'opacita' da 0 a 1; seconda meta' (0.5-1) tiene l'opacita' ferma
// a 1 e fa salire filter:brightness() da 1 (normale) fino al tetto
// WATERMARK_BRIGHTNESS_MAX (2 = doppia luminosita'), perche' CSS
// opacity da sola non puo' andare oltre 1.
const WATERMARK_BRIGHTNESS_MAX = 2;
// Trova l'elemento filigrana davvero attivo in base alla vista
// corrente, invece di affidarsi a un querySelector "al buio" sul
// documento intero. Prima funzionava per caso: la filigrana canon
// (Doom) esisteva nel DOM solo per il tempo in cui la vedevi
// (creata via innerHTML al click). Da quando le canon-page sono
// costruite una volta sola al boot e restano sempre nel DOM
// (nascoste, per Google), quella di Doom c'era sempre - e stando
// prima nell'ordine del documento, document.querySelector(".title-
// watermark, .canon-watermark") trovava sempre lei anche mentre si
// guardava un titolo qualsiasi di un altro gioco, lasciando la
// filigrana vera senza luminosita' applicata.
function currentWatermarkElement(){
  if(state.view === "title" && el.titlePanel){
    return el.titlePanel.querySelector(".title-watermark");
  }
  if(state.view === "game" && canonPanels[state.gameId]){
    return canonPanels[state.gameId].querySelector(".canon-watermark");
  }
  return null;
}

function applyWatermarkVisual(value){
  const liveWatermark = currentWatermarkElement();
  if(!liveWatermark) return;
  if(value <= 0.5){
    liveWatermark.style.opacity = value * 2;
    liveWatermark.style.filter = "";
  } else {
    liveWatermark.style.opacity = 1;
    const extra = (value - 0.5) * 2; // 0..1 nella seconda meta'
    const brightness = 1 + extra * (WATERMARK_BRIGHTNESS_MAX - 1);
    liveWatermark.style.filter = `brightness(${brightness})`;
  }
}

function updateWatermarkPresetButtons(){
  if(!el.watermarkPresets) return;
  el.watermarkPresets.querySelectorAll(".watermark-brightness-line__preset").forEach(btn => {
    btn.classList.toggle("is-active", btn.dataset.preset === activeWatermarkSlot);
  });
}

// Ricarica il valore salvato (preset attivo) per il gioco/voce
// corrente e lo applica: usata sia al render (game/title) sia al
// cambio preset, cosi' la logica resta in un unico posto. "id" è
// tipicamente g.id (il gioco/saga corrente).
function loadWatermarkForId(id){
  currentWatermarkEntryKey = watermarkBrightnessKeyFor(id);
  const stored = localStorage.getItem(currentWatermarkEntryKey);
  watermarkBrightness = stored !== null ? parseFloat(stored) : 0.5;
  if(el.watermarkBrightnessSlider) el.watermarkBrightnessSlider.value = String(watermarkBrightness);
  applyWatermarkVisual(watermarkBrightness);
  updateWatermarkPresetButtons();
}

// Drag-to-scroll for the horizontal timeline, active only when the manual
// scroll toggle is on. Attached once here (not per-render) to avoid piling
// up duplicate window/document listeners every time the panel re-renders;
// the actual timeline element is swapped in via dragState.el on mousedown.
const dragState = { active: false, el: null, startX: 0, startScrollLeft: 0, moved: false };
document.addEventListener("mousemove", (e) => {
  if(!dragState.active || !dragState.el) return;
  e.preventDefault();
  const dx = e.pageX - dragState.startX;
  if(Math.abs(dx) > 5) dragState.moved = true;
  dragState.el.scrollLeft = dragState.startScrollLeft - dx;
});
document.addEventListener("mouseup", () => {
  if(dragState.el) dragState.el.classList.remove("is-dragging");
  dragState.active = false;
  dragState.el = null;
});

function t(key){ return STRINGS[state.lang][key]; }

function heartIcon(){
  return `<svg viewBox="0 0 20 18" class="title-like__icon" aria-hidden="true">
    <path d="M10 17C10 17 1.5 12.1 1.5 6.2C1.5 3.3 3.7 1.2 6.4 1.2C8 1.2 9.3 1.9 10 3.1C10.7 1.9 12 1.2 13.6 1.2C16.3 1.2 18.5 3.3 18.5 6.2C18.5 12.1 10 17 10 17Z"
      stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" fill="none"/>
  </svg>`;
}

// Cuoricino "mi piace", sempre in fondo al contenuto (dopo l'ultimo
// elemento, prima di navigazione/pulsanti che seguono) — stessa
// funzione per ogni pagina/vista che lo usa, cambia solo il
// contenitore e l'id dell'opera. Toglie sempre un vecchio cuore
// eventualmente gia' presente nello stesso contenitore prima di
// aggiungerne uno nuovo (nessun doppione cambiando voce).
function appendLikeWidget(container, workId){
  if(!container || !window.ForgottenShelfLikes) return;
  const old = container.querySelector(".title-like");
  if(old) old.remove();
  container.insertAdjacentHTML("beforeend", `
    <div class="title-like" id="likeWidget-${workId}">
      <span class="title-like__label">${t("leaveALike")}</span>
      <button type="button" class="title-like__btn" aria-label="Mi piace">${heartIcon()}</button>
      <span class="title-like__count"></span>
    </div>
  `);
  const widget = container.querySelector(".title-like");
  const likeBtn = widget.querySelector(".title-like__btn");
  const countEl = widget.querySelector(".title-like__count");
  const alreadyLikedBefore = ForgottenShelfLikes.hasLiked(workId);
  if(alreadyLikedBefore){
    widget.classList.add("is-liked");
    likeBtn.disabled = true;
  }
  let justLikedNow = false;
  // Bug reale trovato (25/08): la richiesta di rete per il totale
  // vero (getTotal) e' asincrona - se il click sul cuoricino arriva
  // PRIMA che risponda (tipico sulla primissima voce aperta in una
  // visita, quando la richiesta e' ancora in corso), il click
  // aggiorna subito il numero a +1, ma quando la risposta di rete
  // arriva DOPO sovrascrive countEl col totale vecchio del server
  // (che non sa ancora nulla del click appena fatto) - il numero
  // torna a 0 davanti agli occhi dell'utente. Sulle voci aperte dopo
  // funzionava perche' quella richiesta era gia' in cache, risolta
  // all'istante, prima di qualunque click possibile. Corretto
  // aggiungendo 1 al totale ricevuto SOLO se il click e' avvenuto
  // durante QUESTA visita alla pagina (justLikedNow) - non se il
  // "mi piace" risale a una visita precedente (alreadyLikedBefore),
  // il cui +1 e' gia' incluso nel totale del server, altrimenti
  // conterebbe due volte.
  ForgottenShelfLikes.getTotal(workId).then(total => {
    countEl.textContent = justLikedNow ? total + 1 : total;
  });
  likeBtn.addEventListener("click", () => {
    const result = ForgottenShelfLikes.like(workId);
    if(result.ok){
      justLikedNow = true;
      widget.classList.add("is-liked");
      likeBtn.disabled = true;
      const current = parseInt(countEl.textContent, 10) || 0;
      countEl.textContent = current + 1;
    }
  });
}
function tf(field){ return field ? (field[state.lang] || field.en || field.it || "") : ""; }
function monogram(str){ return (str || "?").trim().charAt(0).toUpperCase(); }

// Contenuto di un riquadro avatar (linea temporale desktop/mobile E
// rail verticale nella pagina voce, stesso identico markup nei due
// posti): immagine vera se c'e', altrimenti monogramma - a meno che
// l'immagine sia segnata come "in arrivo" (imagePending, es. Ace
// Combat 8 prima del lancio), nel qual caso il riquadro diventa
// rosso e mostra la data di uscita al suo posto, promemoria visivo
// di quello che manca invece di un monogramma qualunque che
// nasconderebbe il problema.
function tileInnerHTML(entry){
  if(entry.imagePending){
    return `<span class="tile-missing">${tf(entry.releaseDateShort)}</span>`;
  }
  return entry.image ? `<img src="${entry.image}" alt="">` : `<span class="monogram">${monogram(tf(entry.title))}</span>`;
}
function tileMissingClass(entry, base){
  return entry.imagePending ? ` ${base}--missing` : "";
}

// Dot color follows position along the sequence (like the line's own gradient),
// not the media type — cyan -> magenta -> orange across the whole timeline.
const DEFAULT_PALETTE = ["#00f0ff", "#ff2ec4", "#a742ff"];
const DEFAULT_ACCENT = "#6b7280"; // fallback per giochi senza accento proprio in lista
const LANDING_COLOR = "#ffffff"; // colore della schermata Home

function hexToRgb(hex){
  const n = parseInt(hex.replace("#",""), 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

function currentGradientStops(){
  const g = currentGame();
  const palette = (g && g.palette) || DEFAULT_PALETTE;
  return [
    { p: 0,    c: hexToRgb(palette[0]) },
    { p: 0.55, c: hexToRgb(palette[1]) },
    { p: 1,    c: hexToRgb(palette[2]) }
  ];
}

function applyPaletteToCSS(){
  const g = currentGame();
  const palette = (g && g.palette) || DEFAULT_PALETTE;
  document.body.style.setProperty("--tl-1", palette[0]);
  document.body.style.setProperty("--tl-2", palette[1]);
  document.body.style.setProperty("--tl-3", palette[2]);
  document.body.style.setProperty("--gradient", `linear-gradient(90deg, ${palette[0]}, ${palette[1]} 55%, ${palette[2]})`);
  document.body.style.setProperty("--cyan", g ? (g.accentColor || DEFAULT_ACCENT) : LANDING_COLOR);
  const bannerOffset = (g && g.bannerOffset != null) ? g.bannerOffset : 125;
  document.body.style.setProperty("--banner-x-offset", bannerOffset + "px");
}

function gradientColorAt(t){
  const stops = currentGradientStops();
  for(let i = 0; i < stops.length - 1; i++){
    const a = stops[i], b = stops[i+1];
    if(t >= a.p && t <= b.p){
      const lt = (t - a.p) / (b.p - a.p);
      const r = a.c[0] + (b.c[0]-a.c[0])*lt;
      const g = a.c[1] + (b.c[1]-a.c[1])*lt;
      const bch = a.c[2] + (b.c[2]-a.c[2])*lt;
      return `rgb(${Math.round(r)}, ${Math.round(g)}, ${Math.round(bch)})`;
    }
  }
  const last = stops[stops.length-1].c;
  return `rgb(${last[0]}, ${last[1]}, ${last[2]})`;
}

function currentGame(){ return state.gameId ? GAMES[state.gameId] : null; }
function currentUniverse(){
  const g = currentGame();
  if(!g) return null;
  return g.universes[state.universeIndex] || g.universes[0];
}
function findEntry(game, entryId){
  for(const u of game.universes){
    const found = u.entries.find(e => e.id === entryId);
    if(found) return { entry: found, universe: u };
  }
  return null;
}

// ---------------------------------------------------------
// Static text (i18n) painting
// ---------------------------------------------------------
function paintStaticText(){
  document.querySelectorAll("[data-i18n]").forEach(node => {
    const key = node.getAttribute("data-i18n");
    const mobileKey = key + "Mobile";
    const useMobile = mobileBreakpoint.matches && STRINGS[state.lang][mobileKey];
    node.textContent = useMobile ? t(mobileKey) : t(key);
  });
  document.documentElement.lang = state.lang;
  el.langSwitch.querySelectorAll(".lang-option").forEach(opt => {
    opt.classList.toggle("is-active", opt.dataset.langOption === state.lang);
  });
}

// ---------------------------------------------------------
// Sidebar
// ---------------------------------------------------------
function renderSidebar(){
  el.gameList.innerHTML = "";
  GAME_ORDER.forEach(id => {
    const g = GAMES[id];
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.type = "button";
    btn.textContent = tf(g.listTitle);
    btn.classList.toggle("is-active", state.gameId === id);
    btn.dataset.gameId = id; // per la delega eventi qui sotto, mai
      // piu' un addEventListener per pulsante ricreato ad ogni render
    li.style.setProperty("--item-accent", g.accentColor || "#6b7280"); /* sul
      <li> (il genitore), non solo sul bottone: la regola condivisa
      del box-shadow su hover/is-active (styles.css) legge la
      variabile dal <li> stesso - impostarla solo sul figlio non
      basta, le custom property CSS non risalgono dal figlio al
      genitore. Stesso identico pattern gia' in uso su Storie Senza
      Cornice/Il Filo Nascosto (li.style.setProperty, non
      btn.style.setProperty) - qui mancava, la striscia sull'hover
      ricadeva sul colore di fallback (--cyan, chiaro/bianco) invece
      del colore proprio di ciascun gioco. */
    btn.style.setProperty("--item-accent", g.accentColor || "#6b7280");
    li.appendChild(btn);
    el.gameList.appendChild(li);
  });
}
// ---------------------------------------------------------
// Delega eventi (26/08, ricostruzione della logica di navigazione
// mobile dopo un ritorno a "landing" segnalato piu' volte e mai
// riprodotto nei test): UN SOLO listener permanente su el.gameList
// (mai ricreato), invece di un addEventListener per ogni singolo
// pulsante ricostruito ad ogni chiamata di renderSidebar() -
// elimina alla radice qualunque possibile inconsistenza tra
// "elemento davvero cliccato sullo schermo" e "listener che
// effettivamente reagisce", dato che qui il listener vive UNA volta
// sola sul contenitore stabile, non su elementi che vengono distrutti
// e ricreati in continuazione.
// ---------------------------------------------------------
el.gameList.addEventListener("click", ev => {
  const btn = ev.target.closest("button[data-game-id]");
  if(btn) selectGame(btn.dataset.gameId);
});

// ---------------------------------------------------------
function selectUniverse(idx){
  state.universeIndex = idx;
  if(state.view === "title"){
    // switching universe from the title view: jump to that universe's first entry
    const g = currentGame();
    const u = g.universes[idx];
    if(u.entries.length) selectEntry(u.entries[0].id);
  } else {
    renderGamePanel();
  }
}

function buildUniverseTrack(uni, prevBtn, nextBtn){
  const track = document.createElement("div");
  track.className = "u-track";
  track.innerHTML = `
    <div class="u-track__head"></div>
    <div class="timeline-viewport"><div class="h-timeline"></div></div>
  `;
  const head = track.querySelector(".u-track__head");
  if(prevBtn) head.appendChild(prevBtn);

  const nameBlock = document.createElement("div");
  nameBlock.className = "u-track__name-block";
  nameBlock.innerHTML = `
    <p class="u-track__name">${tf(uni.name)}</p>
    <p class="u-track__span">${tf(uni.span)}</p>
  `;
  if(mobileBreakpoint.matches){
    // Solo mobile: qui il blocco nome vive in cima a LT (nessuna
    // freccia prev/next, quella e' solo desktop) - un tap ci riporta
    // a Saga, richiesto esplicitamente come modo per tornare
    // indietro di un livello (LT->Saga), alternativo al pulsante
    // "La Traccia del Tempo" che invece torna sempre fino alla Home.
    nameBlock.style.cursor = "pointer";
    nameBlock.addEventListener("click", () => setState("game"));
  }
  head.appendChild(nameBlock);

  if(nextBtn) head.appendChild(nextBtn);

  const timeline = track.querySelector(".h-timeline");

  const total = uni.entries.length;

  uni.entries.forEach((entry, i) => {
    const node = document.createElement("a");
    const tileDown = i % 2 === 0; // alternates which side the cover sits on
    node.href = `voci/la-traccia-del-tempo/${state.gameId}/${entry.id}.html`;
    node.className = "h-node " + (tileDown ? "h-node--down" : "h-node--up");

    const t = total > 1 ? i / (total - 1) : 0;
    const color = gradientColorAt(t);
    node.style.setProperty("--dot-color", color);

    const hasAvatar = !entry.noAvatar;
    const tileSpan = hasAvatar
      ? `<span class="h-node__tile${tileMissingClass(entry, "h-node__tile")}">${tileInnerHTML(entry)}</span>`
      : "";

    // "up": avatar (farthest from line) -> title (text top-aligned, touching avatar) -> [reserved empty 2nd line, touching line] -> line
    // "down": line -> [reserved empty 2nd line, touching line] -> title (text bottom-aligned, touching avatar) -> avatar (farthest from line)
    const titleUp = `<span class="h-node__title${hasAvatar ? " h-node__title--top" : ""}">${tf(entry.title)}</span>`;
    const titleDown = `<span class="h-node__title${hasAvatar ? " h-node__title--bottom" : ""}">${tf(entry.title)}</span>`;

    const topContent = tileDown ? "" : (tileSpan + titleUp);
    const bottomContent = tileDown ? (titleDown + tileSpan) : "";

    node.innerHTML = `
      <span class="h-node__top">${topContent}</span>
      <span class="h-node__marker"><span class="h-node__dot"></span></span>
      <span class="h-node__bottom">${bottomContent}</span>
    `;
    node.dataset.entryId = entry.id; // per la delega eventi, vedi
      // i due listener permanenti aggiunti dopo buildUniverseTrack
      // (uno per il contenitore desktop, uno per quello mobile -
      // questa funzione costruisce nodi per entrambi)
    timeline.appendChild(node);
  });

  return track;
}
// Delega eventi (stesso schema di el.gameList/el.universesRow sopra)
// per i nodi della linea temporale (.h-node, costruiti da
// buildUniverseTrack qui sopra): due listener permanenti, uno per
// contenitore, dato che la stessa funzione popola contenitori diversi
// a seconda del breakpoint - desktop usa el.universesRow (carosello
// con frecce), mobile usa el.universeTimelineTrack (Screen LT a se'
// stante). Ciascuno trova solo i nodi che gli competono davvero.
function handleTimelineNodeClick(ev){
  const node = ev.target.closest("a.h-node[data-entry-id]");
  if(node){ ev.preventDefault(); selectEntry(node.dataset.entryId); }
}
el.universesRow.addEventListener("click", handleTimelineNodeClick);
if(el.universeTimelineTrack) el.universeTimelineTrack.addEventListener("click", handleTimelineNodeClick);

// ---------------------------------------------------------
// Posizionamento verticale della linea temporale, SOLO MOBILE: line
// runs top-to-bottom, nodes stacked, avatar/title alternating left/
// right of it instead of above/below. Estratta da renderGamePanel
// (dove viveva prima che Screen B smettesse di mostrare la linea
// temporale direttamente) - ora chiamata da renderUniverseTimelinePanel,
// l'unico posto dove la linea temporale vive davvero su mobile.
// ---------------------------------------------------------
function positionVerticalTimeline(liveTimeline){
  liveTimeline.style.setProperty("--avatar-scale", "1.000");
  liveTimeline.style.setProperty("--dot-scale", "0.625"); // 15px dot
  // The page itself already scrolls vertically, so there's no need
  // for any of the desktop's width-fitting/overlap/scroll-toggle
  // machinery — just a comfortable fixed gap between stacked nodes.
  liveTimeline.style.justifyContent = "";
  liveTimeline.style.gap = "0px";
  liveTimeline.style.overflowX = "";
  liveTimeline.style.flexGrow = "";
  liveTimeline.style.flexShrink = "";
  liveTimeline.style.flexBasis = "";
  liveTimeline.style.width = "";
  liveTimeline.classList.remove("is-scrollable");
  Array.from(liveTimeline.querySelectorAll(".h-node")).forEach(node => { node.style.marginLeft = ""; });

  // Il marker (pallino+trattino) va allineato al centro dell'AVATAR,
  // non al centro dell'intero blocco avatar+titolo: quel blocco ha
  // altezza variabile a seconda di quanto è lungo il titolo, quindi
  // un centraggio CSS statico (grid align-self:center sull'intera
  // riga) punta al centro del blocco, non dell'avatar. Qui si
  // corregge nodo per nodo misurando la differenza reale.
  liveTimeline.querySelectorAll(".h-node").forEach(node => {
    const tile = node.querySelector(".h-node__tile");
    const marker = node.querySelector(".h-node__marker");
    if(!tile || !marker){ if(marker) marker.style.transform = ""; return; }
    const nodeRect = node.getBoundingClientRect();
    const tileCenter = tile.getBoundingClientRect().top + tile.getBoundingClientRect().height / 2 - nodeRect.top;
    marker.style.transform = "";
    const markerRect = marker.getBoundingClientRect();
    const markerCenter = markerRect.top + markerRect.height / 2 - nodeRect.top;
    const delta = tileCenter - markerCenter;
    marker.style.transform = Math.abs(delta) > 0.5 ? `translateY(${delta.toFixed(2)}px)` : "";
  });

  // Distanza tra i pallini SEMPRE uguale, anche quando un nodo non
  // ha immagine (e quindi e' molto piu' basso del normale): un
  // margine fisso uguale per tutti sballava in quei casi. Qui si
  // misura la posizione vera di ogni pallino (dopo il centraggio
  // sopra) e si sposta ogni nodo, uno alla volta in ordine, cosi'
  // la distanza dal pallino precedente sia sempre la stessa,
  // qualunque sia l'altezza reale del nodo.
  const nodeEls = Array.from(liveTimeline.querySelectorAll(".h-node"));
  const targetDotGap = 90; // px tra un pallino e il successivo
  nodeEls.forEach(node => { node.style.marginTop = ""; });
  let prevDotY = null;
  nodeEls.forEach(node => {
    const dot = node.querySelector(".h-node__dot");
    if(!dot) return;
    const r = dot.getBoundingClientRect();
    const dotY = r.top + r.height / 2;
    if(prevDotY !== null){
      const actualGap = dotY - prevDotY;
      const delta = targetDotGap - actualGap;
      node.style.marginTop = delta.toFixed(2) + "px";
    }
    // Rimisuro dopo l'eventuale aggiustamento, cosi' il nodo
    // successivo parte dalla posizione vera, non da quella di
    // prima della correzione.
    const r2 = dot.getBoundingClientRect();
    prevDotY = r2.top + r2.height / 2;
  });

  const dots = liveTimeline.querySelectorAll(".h-node__dot");
  if(dots.length){
    const timelineRect = liveTimeline.getBoundingClientRect();
    const firstDot = dots[0].getBoundingClientRect();
    const lastDot = dots[dots.length - 1].getBoundingClientRect();
    const lineTop = (firstDot.top + firstDot.bottom) / 2 - timelineRect.top;
    const lineBottom = (lastDot.top + lastDot.bottom) / 2 - timelineRect.top;
    liveTimeline.style.setProperty("--tl-line-top", lineTop.toFixed(2) + "px");
    liveTimeline.style.setProperty("--tl-line-height", Math.max(0, lineBottom - lineTop).toFixed(2) + "px");
  }
}

// ---------------------------------------------------------
// Screen C, SOLO MOBILE: apre la linea temporale di UN solo
// universo (scelto dall'elenco di Screen B). Riusa buildUniverseTrack
// senza prevBtn/nextBtn (la scelta dell'universo e' gia' avvenuta
// nell'elenco, niente piu' frecce per cambiarlo sulla stessa vista).
// ---------------------------------------------------------
function openUniverseTimeline(idx){
  state.universeIndex = idx;
  setState("universe");
  window.scrollTo(0, 0);
  const stage = document.querySelector(".stage");
  if(stage) stage.scrollTop = 0;
}
// Delega eventi (stesso schema di el.gameList sopra): un solo
// listener permanente su el.universesRow, che su mobile ospita
// l'elenco nomi universo (ricostruito ad ogni renderGamePanel) - su
// desktop lo stesso contenitore ospita tutt'altro (la linea
// temporale con le frecce prev/next), il selettore qui sotto
// semplicemente non trova mai nulla li' e non interferisce.
el.universesRow.addEventListener("click", ev => {
  const btn = ev.target.closest("button.universe-name-list__item[data-universe-idx]");
  if(btn) openUniverseTimeline(Number(btn.dataset.universeIdx));
});

function renderUniverseTimelinePanel(){
  const g = currentGame();
  if(!g) return;
  const uni = g.universes[state.universeIndex];
  if(!uni) return;

  el.universeTimelineTrack.innerHTML = "";
  el.universeTimelineTrack.appendChild(buildUniverseTrack(uni, null, null));

  const liveTimeline = el.universeTimelineTrack.querySelector(".h-timeline");
  if(liveTimeline) positionVerticalTimeline(liveTimeline);
}

function arrowIcon(direction){
  const d = direction === "left" ? "M11 2L4 9L11 16" : "M5 2L12 9L5 16";
  return `<svg viewBox="0 0 16 18" class="carousel-arrow__icon" aria-hidden="true"><path d="${d}" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
}

// ---------------------------------------------------------
// Game panel (header + single centered timeline + carousel)
// ---------------------------------------------------------
// ---------------------------------------------------------
// Pannelli intestazione gioco (blurb) e canon-page, sempre nel DOM
// nascosti - stesso motivo delle voci titolo qui sopra: oggi quel
// testo compare solo al click su un gioco, Google non lo legge mai.
// Nota: universesRow (la visualizzazione della linea temporale con
// pallini/avatar) resta invece dinamica come prima, di proposito -
// non e' testo indicizzabile, e' un widget di navigazione i cui
// calcoli a runtime (getBoundingClientRect) non funzionerebbero su
// un elemento nascosto.
// ---------------------------------------------------------
const gameHeaderPanels = {}; // gameId -> elemento
const canonPanels = {};      // gameId -> elemento (solo giochi noTimeline)

function updateGameHeaderPanelText(gameId){
  const panel = gameHeaderPanels[gameId];
  if(!panel) return;
  const g = GAMES[gameId];
  panel.innerHTML = `
    ${g.banner ? `<div class="game-header__banner" style="background-image:url('${g.banner}')"></div><div class="game-header__banner-overlay"></div>` : ""}
    <div class="game-header__top-row">
      <div class="game-header__cover">${g.avatar ? `<img src="${g.avatar}" alt="">` : `<span class="monogram">${monogram(tf(g.title))}</span>`}</div>
    </div>
    <div class="game-header__info">
      <h2 class="game-header__title">${tf(g.title)}</h2>
      <p class="game-header__blurb">${tf(g.blurb)}</p>
    </div>
  `;
}

function buildAllGameHeaderPanels(){
  GAME_ORDER.forEach(gameId => {
    const panel = document.createElement("div");
    panel.className = "game-header-item";
    panel.id = `gameHeaderItem-${gameId}`;
    panel.hidden = true;
    el.gameHeader.appendChild(panel);
    gameHeaderPanels[gameId] = panel;
    updateGameHeaderPanelText(gameId);
  });
}

function updateAllGameHeaderPanelsText(){
  Object.keys(gameHeaderPanels).forEach(updateGameHeaderPanelText);
}

function updateCanonPanelText(gameId){
  const panel = canonPanels[gameId];
  if(!panel) return;
  const g = GAMES[gameId];
  let canonWatermarkExtraStyle = "";
  if(g.watermarkBottomFade){
    const fadeMask = "linear-gradient(90deg, transparent, black 22%), linear-gradient(180deg, black 75%, transparent)";
    canonWatermarkExtraStyle = `-webkit-mask-image:${fadeMask};mask-image:${fadeMask};mask-composite:intersect;`;
  }
  panel.innerHTML = `
    ${g.watermark ? `<div class="canon-watermark" style="background-image:url('${g.watermark}');${g.watermarkSize ? `background-size:${g.watermarkSize};` : ""}${g.watermarkPosition ? `background-position:${g.watermarkPosition};` : ""}${canonWatermarkExtraStyle}"></div>` : ""}
    <div class="canon-note">
      <p class="canon-note__eyebrow">${t("canonNoTimelineLabel")}</p>
      <p>${tf(g.canonNote.intro)}</p>
      <p class="canon-note__titles-label">${t("canonTitlesLabel")}</p>
      <p class="canon-note__titles">${tf(g.canonNote.titles)}</p>
      <p>${tf(g.canonNote.outro)}</p>
    </div>
  `;
  appendLikeWidget(panel, gameId);
}

function buildAllCanonPanels(){
  GAME_ORDER.forEach(gameId => {
    const g = GAMES[gameId];
    if(!g.noTimeline || !g.canonNote) return;
    const panel = document.createElement("div");
    panel.className = "canon-page";
    panel.id = `canonItem-${gameId}`;
    panel.hidden = true;
    el.canonPages.appendChild(panel);
    canonPanels[gameId] = panel;
    updateCanonPanelText(gameId);
  });
}

function updateAllCanonPanelsText(){
  Object.keys(canonPanels).forEach(updateCanonPanelText);
}

function renderGamePanel(){
  const g = currentGame();
  if(!g) return;

  Object.entries(gameHeaderPanels).forEach(([id, panel]) => {
    panel.hidden = id !== state.gameId;
  });
  const activeHeaderPanel = gameHeaderPanels[state.gameId];

  // Solo mobile: avatar e pulsante musica posizionati con numeri
  // fissi, NON piu' misurati sul banner a runtime (il banner puo'
  // anche non esserci, non cambia nulla): top:65px = meta' dei 130px
  // noti di altezza del banner (vedi .game-header__banner in
  // la_traccia_del_tempo.css). Il volume si sposta fisicamente dentro
  // al game-header (altrimenti resta nella stage-topbar); il suo
  // bordo destro e' 16px fisso, lo stesso valore/criterio degli
  // elementi condivisi con Diari di Gioco (switch lingua, Ko-fi,
  // Discord — tutti a 16px dal bordo nella stage-topbar), affidabile
  // ora che .stage non ruba piu' spazio con la sua scrollbar.
  const cover = activeHeaderPanel ? activeHeaderPanel.querySelector(".game-header__cover") : null;
  if(mobileBreakpoint.matches){
    // Riscritto (25/08, su richiesta esplicita): niente piu'
    // posizionamento assoluto centrato su un banner "fantasma" (il
    // banner vero e' display:none su mobile, ma i vecchi numeri
    // fissi facevano finta che ci fosse comunque, lasciando un vuoto
    // enorme sopra avatar/musica). Avatar e pulsante musica tornano
    // in flusso normale, affiancati in un contenitore dedicato
    // (.game-header__top-row, gia' nel markup - vedi
    // updateGameHeaderPanelText) invece che affidarsi a un trucco
    // flex-wrap sull'intero .game-header-item: il tentativo
    // precedente con flex-wrap si comportava in modo imprevedibile
    // (la musica finiva comunque su una riga propria anche forzando
    // flex-wrap:nowrap in prova), un contenitore vero e proprio
    // toglie ogni ambiguita'. "top"/"transform"/"position" JS di
    // prima azzerati esplicitamente (altrimenti, essendo inline,
    // vincerebbero comunque su qualunque regola CSS).
    if(cover){
      cover.style.position = "";
      cover.style.top = "";
      cover.style.left = "";
      cover.style.transform = "";
    }
    if(el.musicControl && activeHeaderPanel){
      const topRow = activeHeaderPanel.querySelector(".game-header__top-row");
      if(topRow) topRow.appendChild(el.musicControl);
      el.musicControl.style.position = "";
      el.musicControl.style.left = "";
      el.musicControl.style.right = "";
      el.musicControl.style.top = "";
      el.musicControl.style.zIndex = "";
      el.musicControl.style.transform = "";
    }
  } else if(el.discordLink){
    // Allineamento reale (desktop): #gameHeaderBar e #gameHeader
    // (quindi l'avatar) devono iniziare esattamente dove sta Discord
    // in topbar - misurato col browser (getBoundingClientRect), non
    // calcolato a mano dal CSS. Il calcolo a mano fatto in precedenza
    // (.stage 25px + .game-panel 25px = 50px dalla sidebar) si e'
    // rivelato sbagliato, come dimostrato dalla stessa tecnica gia'
    // corretta sulla timeline: la vera posizione di Discord e'
    // un'altra, e ora la si usa direttamente invece di ricalcolarla.
    // margin-left (non transform): il bordo destro di questi due
    // elementi e' gia' corretto per conto suo (CSS, margin-right:375px,
    // calcolato dal bordo destro di .stage - non dipende dal lato
    // sinistro sbagliato) - un transform sposterebbe l'intero box,
    // rompendo anche quel bordo destro gia' giusto. Con width:auto e
    // margin-right gia' impostato, aggiungere margin-left sposta solo
    // il bordo sinistro, lasciando intatto quello destro.
    const discordRect = el.discordLink.getBoundingClientRect();
    [el.gameHeaderBar, el.gameHeader].forEach(elRef => {
      if(!elRef) return;
      elRef.style.marginLeft = "0px";
      const rect = elRef.getBoundingClientRect();
      const delta = discordRect.left - rect.left;
      elRef.style.marginLeft = delta.toFixed(2) + "px";
    });

    // Blurb centrato VERAMENTE a meta' tra la fine del titolo e il
    // fondo dell'avatar (segnalato con screenshot: stava incollato
    // al titolo, molto piu' in alto del centro reale) - non un
    // margine fisso indovinato (il titolo puo' andare su una riga
    // sola o su due a seconda della lunghezza, quindi un margine
    // fisso funziona solo per caso su alcuni titoli). Misurato a
    // runtime: punto medio tra il bordo inferiore del titolo e il
    // bordo inferiore della copertina (140px, sempre la stessa),
    // poi il blurb viene spostato in modo che il SUO centro (non il
    // suo bordo superiore) cada esattamente li'.
    const titleEl = activeHeaderPanel ? activeHeaderPanel.querySelector(".game-header__title") : null;
    const blurbEl = activeHeaderPanel ? activeHeaderPanel.querySelector(".game-header__blurb") : null;
    if(titleEl && blurbEl && cover){
      blurbEl.style.marginTop = "";
      const titleRect = titleEl.getBoundingClientRect();
      const coverRect = cover.getBoundingClientRect();
      const blurbRect = blurbEl.getBoundingClientRect();
      const midpoint = (titleRect.bottom + coverRect.bottom) / 2;
      const desiredTop = midpoint - blurbRect.height / 2;
      const delta = desiredTop - blurbRect.top;
      const baseMarginTop = parseFloat(getComputedStyle(blurbEl).marginTop) || 0;
      blurbEl.style.marginTop = (baseMarginTop + delta).toFixed(2) + "px";
    }
  }

  if(g.noTimeline){
    el.universesRow.hidden = true;
    el.universesRow.innerHTML = "";
    el.canonPages.hidden = false;
    Object.entries(canonPanels).forEach(([id, panel]) => {
      panel.hidden = id !== state.gameId;
    });
    if(g.watermark) loadWatermarkForId(g.id);
    el.watermarkBrightness.hidden = !g.watermark;
    el.watermarkBrightness.style.top = ""; /* posizione standard (CSS, riga dell'header) */
    el.watermarkBrightness.style.right = "25px"; /* qui il rail non c'è (display:none),
      il contenuto si estende fino al vero margine destro (25px), non fino a
      var(--rail-width) come nelle pagine con rail visibile */

    // Il testo delle pagine "nessuna timeline" (es. Doom) partiva
    // 50px prima del bordo sinistro vero (Discord) - segnalato con
    // screenshot: a differenza dell'header/blurb (allineato a Discord
    // qualche riga sopra), questo contenitore non riceveva mai lo
    // stesso allineamento a runtime, restando fermo alla propria
    // posizione statica di CSS (25px dal bordo di .game-panel, non
    // da Discord). Stessa identica tecnica di allineamento gia' usata
    // per l'header: si misura dove sta davvero Discord e si sposta
    // il contenitore di conseguenza.
    if(el.discordLink && !mobileBreakpoint.matches){
      const discordRect = el.discordLink.getBoundingClientRect();
      el.canonPages.style.marginLeft = "0px";
      const canonRect = el.canonPages.getBoundingClientRect();
      const delta = discordRect.left - canonRect.left;
      el.canonPages.style.marginLeft = delta.toFixed(2) + "px";
    }

    // Le freccette animate di trascinamento (drag-hint) appartengono
    // solo alle timeline con scorrimento libero (universi con piu' di
    // 10 voci, vedi isLargeUniverse) - segnalato con screenshot:
    // arrivando da una di quelle pagine (es. Ace Combat) restavano
    // visibili anche su Doom, perche' il loro stato "hidden" viene
    // deciso solo nel ramo normale della funzione (piu' sotto), che
    // qui non viene mai raggiunto per via del return anticipato. Vanno
    // quindi nascoste esplicitamente anche in questo ramo.
    if(el.dragHintLeft) el.dragHintLeft.hidden = true;
    if(el.dragHintRight) el.dragHintRight.hidden = true;

    // Pagine senza timeline (es. Doom): la filigrana di sfondo aveva
    // posizione fissa indovinata (top:245px in CSS, right:0 fino al
    // vero bordo della finestra) - sconfinava nella riga dell'header/
    // blurb invece di restare sotto di essa, e superava il confine
    // destro vero (switch lingua) invece di fermarsi li'. Corretto
    // misurando a runtime il fondo reale dell'header e il bordo destro
    // reale dello switch lingua - stessa identica logica di
    // allineamento gia' usata in tutto il resto del sito.
    // Larghezza: NON piu' calcolata a partire dalla proporzione reale
    // del file (un giro precedente ci aveva provato con un Image() di
    // appoggio asincrono, ma il caricamento poteva risolversi in un
    // momento diverso dal render, congelando una larghezza sbagliata
    // rispetto all'altezza nel frattempo aggiornata) - qui si usa
    // invece lo stesso trattamento, piu' semplice e gia' collaudato,
    // delle filigrane interne alle voci (.title-watermark): una
    // larghezza fissa in vw e background-size:contain, che per
    // costruzione non taglia mai l'immagine qualunque sia la sua
    // proporzione reale (mostra sempre tutta l'immagine, lasciando
    // eventualmente un margine invece di tagliarla).
    // Eccezione dichiarata dall'utente fin dal primo messaggio su
    // questa filigrana: a differenza di tutto il resto del sito, QUI
    // il bordo destro non deve fermarsi allo switch lingua, ma a un
    // margine fisso di 300px dal bordo vero della finestra - un
    // margine indipendente da dove sta lo switch lingua, non
    // agganciato a quel confine come invece fa correttamente tutto il
    // resto del sito. Confermato con screenshot: il confronto era
    // proprio tra la fine della filigrana e lo switch lingua (che
    // combaciavano) contro il margine di 300px che l'utente chiede
    // invece di usare.
    const activeCanonPanel = canonPanels[state.gameId];
    if(activeCanonPanel && !mobileBreakpoint.matches){
      const watermarkEl = activeCanonPanel.querySelector(".canon-watermark");
      const headerBottomEl = activeHeaderPanel;
      if(watermarkEl && headerBottomEl && g.watermark){
        const headerRect = headerBottomEl.getBoundingClientRect();
        const top = headerRect.bottom;
        const rightOffset = 300;
        const availableHeight = window.innerHeight - top - 40;
        watermarkEl.style.top = top.toFixed(2) + "px";
        watermarkEl.style.right = rightOffset.toFixed(2) + "px";
        watermarkEl.style.height = availableHeight.toFixed(2) + "px";
      }
    }
    return;
  }

  el.canonPages.hidden = true;
  Object.values(canonPanels).forEach(panel => { panel.hidden = true; });
  el.universesRow.hidden = false;
  el.watermarkBrightness.hidden = true;
  el.watermarkBrightness.style.top = "";
  el.watermarkBrightness.style.right = "";

  const universes = g.universes;
  const idx = state.universeIndex;
  const uni = universes[idx];
  const multi = universes.length > 1;

  el.universesRow.innerHTML = "";

  // ===========================================================
  // MOBILE: Screen B mostra solo l'elenco dei nomi degli universi
  // (con distanza uguale tra loro, vedi CSS justify-content:
  // space-evenly su .universes-row) - niente linea temporale diretta
  // qui, quella vive nella sua sotto-schermata a se' stante
  // (openUniverseTimeline/renderUniverseTimelinePanel piu' sotto).
  // Il carosello con le frecce prev/next resta invece SOLO desktop
  // (ramo sotto, invariato).
  // ===========================================================
  if(mobileBreakpoint.matches){
    el.universesRow.className = "universes-row";
    universes.forEach((u, i) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "universe-name-list__item";
      btn.dataset.universeIdx = i; // per la delega eventi, vedi sotto
      btn.innerHTML = `
        <span class="universe-name-list__name">${tf(u.name)}</span>
        <span class="universe-name-list__span">${tf(u.span)}</span>
      `;
      el.universesRow.appendChild(btn);
    });
    return;
  }

  el.universesRow.className = "universe-stage" + (multi ? "" : " single");

  let prevBtn = null, nextBtn = null;
  if(multi){
    const prevIdx = (idx - 1 + universes.length) % universes.length;
    const nextIdx = (idx + 1) % universes.length;

    prevBtn = document.createElement("button");
    prevBtn.type = "button";
    prevBtn.className = "carousel-arrow carousel-arrow--prev";
    prevBtn.setAttribute("aria-label", tf(universes[prevIdx].name));
    prevBtn.innerHTML = `${arrowIcon("left")}<span class="carousel-arrow__label">${tf(universes[prevIdx].name)}</span>`;
    prevBtn.addEventListener("click", () => selectUniverse(prevIdx));

    nextBtn = document.createElement("button");
    nextBtn.type = "button";
    nextBtn.className = "carousel-arrow carousel-arrow--next";
    nextBtn.setAttribute("aria-label", tf(universes[nextIdx].name));
    nextBtn.innerHTML = `<span class="carousel-arrow__label">${tf(universes[nextIdx].name)}</span>${arrowIcon("right")}`;
    nextBtn.addEventListener("click", () => selectUniverse(nextIdx));
  }

  el.universesRow.appendChild(buildUniverseTrack(uni, prevBtn, nextBtn));

  // Pulsanti prev/next dell'universo posizionati a runtime, 100px
  // esatti dal bordo del blocco nome (non dal centro del
  // contenitore) - il nome stesso resta un blocco normale, sempre
  // centrato per conto suo (vedi CSS, .u-track__head ora usa
  // position:absolute sui pulsanti apposta per questo). Misurato con
  // getBoundingClientRect dopo l'inserimento nel DOM, non calcolato
  // a mano: la larghezza del nome (quindi anche quella dei pulsanti,
  // diversi da un universo all'altro) varia da saga a saga. Solo
  // desktop: su mobile questi due pulsanti non esistono nel markup.
  if(prevBtn && nextBtn && !mobileBreakpoint.matches){
    const headEl = el.universesRow.querySelector(".u-track__head");
    const nameBlockEl = el.universesRow.querySelector(".u-track__name-block");
    if(headEl && nameBlockEl){
      prevBtn.style.left = "";
      nextBtn.style.left = "";
      const headRect = headEl.getBoundingClientRect();
      const nameRect = nameBlockEl.getBoundingClientRect();
      const prevWidth = prevBtn.getBoundingClientRect().width;
      const GAP = 100;
      prevBtn.style.left = (nameRect.left - headRect.left - GAP - prevWidth).toFixed(2) + "px";
      nextBtn.style.left = (nameRect.right - headRect.left + GAP).toFixed(2) + "px";
    }
  }

  const isLargeUniverse = uni.entries.length > LARGE_UNIVERSE_THRESHOLD;

  // Le due freccette animate e non cliccabili (solo un promemoria visivo
  // che la riga si trascina) vivono fisse nell'HTML, non ricreate ad ogni
  // render: qui si mostrano o nascondono in base alla soglia.
  if(el.dragHintLeft) el.dragHintLeft.hidden = !isLargeUniverse;
  if(el.dragHintRight) el.dragHintRight.hidden = !isLargeUniverse;

  const liveTimeline = el.universesRow.querySelector(".h-timeline");
  if(liveTimeline){
    const avatarScale = 1;
    const dotScale = 0.625; // 15px dot
    liveTimeline.style.setProperty("--avatar-scale", avatarScale.toFixed(3));
    liveTimeline.style.setProperty("--dot-scale", dotScale.toFixed(3));

    // Larghezza e posizione del contenitore (.timeline-viewport)
    // calcolate dalla posizione REALE di Discord (sinistra) e dello
    // switch lingua (destra), misurata a runtime - non piu' un
    // margine/larghezza CSS indovinati a mano. 50px extra per lato
    // (tornati, 25/08 - idea del cliente): il contenitore stesso e'
    // ora la zona "larga" per le voci (titoli/immagini), che possono
    // toccare/sporgere fino a questo bordo. La riga vera invece
    // sparisce prima (bordo "stretto", esattamente Discord/switch
    // lingua) grazie a una maschera sagomata (clip-path) piu' sotto,
    // non piu' al bordo del contenitore stesso - un contenitore solo,
    // con due punti di sparizione diversi per voci/riga, cosa
    // impossibile con un overflow rettangolare unico (da qui il bug
    // precedente: sparivano sempre insieme, un rientro sul singolo
    // nodo iniziale/finale spariva anche lui alla stessa distanza,
    // niente affatto "due tempi diversi"). I nodi si distribuiscono
    // ora in modo semplice (flush ai due bordi larghi, senza margini
    // fittizi extra): il pallino cade gia' da solo 50px dentro,
    // esattamente sul bordo stretto, perche' e' li' che la maschera
    // taglia la riga.
    const viewportEl = liveTimeline.closest(".timeline-viewport");
    if(viewportEl && el.discordLink && el.langSwitch){
      viewportEl.style.transform = "none";
      viewportEl.style.width = "";
      const viewportRect = viewportEl.getBoundingClientRect();
      const discordRect = el.discordLink.getBoundingClientRect();
      const langRect = el.langSwitch.getBoundingClientRect();
      const targetLeft = discordRect.left - 50;
      const targetRight = langRect.right + 50;
      const newWidth = Math.max(0, targetRight - targetLeft);
      viewportEl.style.width = newWidth.toFixed(2) + "px";
      viewportEl.style.transform = `translateX(${(targetLeft - viewportRect.left).toFixed(2)}px)`;
    }

    // Vecchia regola dei 42px superata (25/08): la posizione del
    // contenitore stesso e' ora governata qui sopra (100px dalla
    // sidebar vera a sinistra tramite il pallino, mai oltre lo switch
    // lingua a destra) - RIGHT_INSET qui aggiungeva un ulteriore
    // rientro asimmetrico (solo a destra), pensato per il vecchio
    // layout, ridondante ora. Nessun inset aggiuntivo da fare qui.
    const RIGHT_INSET = 0;
    const naturalWidth = liveTimeline.clientWidth;
    const availableWidth = Math.max(0, naturalWidth - RIGHT_INSET);

    // Fino a 10 voci: la linea resta sempre alla stessa lunghezza di ogni
    // altra timeline (i 42px di regola, senza tagli) - i pallini non sono
    // mai spostati artificialmente, sono ancorati alla loro posizione
    // vera renderizzata sotto, quindi non possono mai disallinearsi dalla
    // riga. Sopra le 10 voci: niente vincolo di larghezza, la riga cresce
    // alla sua dimensione naturale e si trascina per vedere il resto -
    // sempre, senza eccezioni, anche perche' cosi' il gradiente colore dei
    // pallini copre sempre l'intero universo su un'unica striscia, mai
    // spezzato a meta'.
    const freeScrollMode = isLargeUniverse;

    const nodes = Array.from(liveTimeline.querySelectorAll(".h-node"));
    if(freeScrollMode){
      // Free/breathing spacing: the gap is sized so at most 8 nodes are
      // visible in the available width at once — everything past that
      // scrolls. Never smaller than the normal minimum gap, so on a narrow
      // desktop window it doesn't accidentally cram in more than 8.
      liveTimeline.style.justifyContent = "";
      const minGap = 26 * dotScale;
      const gapFor8 = (availableWidth - 8 * 100) / 7;
      liveTimeline.style.gap = Math.max(minGap, gapFor8).toFixed(2) + "px";
      nodes.forEach(node => { node.style.marginLeft = ""; });
    } else {
      // Sizes are fixed (100px avatar/node), but titles alternate above/below
      // the line, so adjacent nodes never actually collide even when their
      // boxes overlap horizontally. So: every entry is spaced out evenly
      // across the exact same line length as always — first node flush at
      // the start (il bordo LARGO del contenitore, non un margine fittizio:
      // con la maschera qui sotto il pallino cade gia' da solo sul bordo
      // stretto, 50px piu' dentro), each next one placed via an explicit
      // margin (negative when the count is high enough that nodes must
      // overlap to all fit), rather than leaving anything to an automatic
      // gap or to scrolling.
      liveTimeline.style.justifyContent = "flex-start";
      liveTimeline.style.gap = "0px";
      // DOT_RADIUS: meta' del diametro reale del pallino (15px, vedi
      // .h-node__dot in styles.css) - segnalato con forza, piu' e
      // piu' volte: TUTTO cio' che costruiamo in queste pagine deve
      // stare DENTRO i confini Discord (sinistra) <-> switch lingua
      // (destra), mai oltre - le uniche eccezioni sono quelle
      // esplicitamente concordate (qui: copertina/titolo, che possono
      // sporgere un po', vedi EXTRA piu' sotto). Il pallino NON e'
      // una di quelle eccezioni: deve restare dentro, toccando il
      // confine con il proprio bordo esterno, non superandolo mai
      // nemmeno di un pixel col proprio centro (come negli ultimi due
      // giri, entrambi sbagliati - allargare il contenitore per fare
      // spazio al pallino invece di stringere lo spazio tra i
      // pallini era esattamente l'errore da non fare). Qui il centro
      // di ogni pallino viene spostato verso l'interno di questo
      // raggio ad entrambi gli estremi, cosi' e' il bordo ESTERNO del
      // pallino - non il suo centro - a toccare esattamente Discord/
      // switch lingua.
      const DOT_RADIUS = 8;
      // TRACK_OVERFLOW: scarto strutturale, misurato (non indovinato):
      // .h-node e' una grid a colonna singola, larga 100px per
      // dichiarazione esplicita - ma .h-node__title e' largo 130px
      // (.h-node__title, styles.css), e la colonna implicita della
      // grid si dimensiona sul figlio piu' largo (130px), non sulla
      // dichiarazione esplicita del contenitore. Risultato verificato
      // con getBoundingClientRect: sia la copertina che il pallino
      // (entrambi piu' stretti di 130px) risultano centrati su
      // quella colonna larga 130px, il cui bordo sinistro coincide
      // col bordo sinistro del nodo (nessuna centratura li') - quindi
      // il loro centro reale cade 15px (= (130-100)/2) piu' a destra
      // del centro "teorico" della casella 100px, in OGNI nodo,
      // sempre. Il giro precedente ignorava questo scarto e
      // posizionava i pallini 15px oltre il previsto in entrambi gli
      // estremi.
      const TRACK_OVERFLOW = (130 - 100) / 2;
      const spacing = nodes.length > 1
        ? (availableWidth - 100 - 2 * DOT_RADIUS) / (nodes.length - 1)
        : 0;
      nodes.forEach((node, i) => {
        node.style.marginLeft = i === 0
          ? (DOT_RADIUS - TRACK_OVERFLOW).toFixed(2) + "px"
          : (spacing - 100).toFixed(2) + "px";
      });
    }

    // Scrolling only ever exists while the manual switch is on: no automatic
    // resolution-based trigger, no trace of it (scrollbar, cursor, anything)
    // when it's off.
    liveTimeline.style.overflowX = freeScrollMode ? "auto" : "visible";
    liveTimeline.classList.toggle("is-scrollable", freeScrollMode);

    // Constrain the box itself to that same final width so the nodes
    // (space-between) pack exactly into it, first flush left / last flush
    // right, instead of stretching to fill the container's full natural width.
    liveTimeline.style.flexGrow = "0";
    liveTimeline.style.flexShrink = "0";
    liveTimeline.style.flexBasis = availableWidth.toFixed(2) + "px";
    liveTimeline.style.width = availableWidth.toFixed(2) + "px";

    liveTimeline.addEventListener("mousedown", (e) => {
      if(!freeScrollMode) return;
      dragState.active = true;
      dragState.el = liveTimeline;
      dragState.startX = e.pageX;
      dragState.startScrollLeft = liveTimeline.scrollLeft;
      dragState.moved = false;
      liveTimeline.classList.add("is-dragging");
    });

    // A drag that actually moved the mouse shouldn't also count as a click
    // on whichever title happens to be under the cursor on release —
    // capture phase, so it stops the node's own click handler before it runs.
    liveTimeline.addEventListener("click", (e) => {
      if(dragState.moved){
        e.stopPropagation();
        e.preventDefault();
        dragState.moved = false;
      }
    }, true);

    liveTimeline.style.setProperty("--tl-content-width", liveTimeline.scrollWidth + "px");

    // Anchor the line directly to the real, rendered dots instead of trusting
    // a hand-derived pixel formula to stay in sync with them: measure the
    // actual center of the first and last dot and pin the line exactly there.
    const dots = liveTimeline.querySelectorAll(".h-node__dot");
    if(dots.length){
      const timelineRect = liveTimeline.getBoundingClientRect();
      const firstDot = dots[0].getBoundingClientRect();
      const lastDot = dots[dots.length - 1].getBoundingClientRect();
      const lineLeft = (firstDot.left + firstDot.right) / 2 - timelineRect.left;
      const lineRight = (lastDot.left + lastDot.right) / 2 - timelineRect.left;
      liveTimeline.style.setProperty("--tl-line-left", lineLeft.toFixed(2) + "px");
      liveTimeline.style.setProperty("--tl-line-width", Math.max(0, lineRight - lineLeft).toFixed(2) + "px");

      // --- Maschera sagomata (idea del cliente, 25/08): un solo
      // contenitore, ma due punti di sparizione diversi per voci e
      // riga - impossibile con un semplice overflow rettangolare
      // (taglia sempre tutto alla stessa distanza). clip-path invece
      // puo' avere una forma qualunque: qui una fascia centrale
      // "stretta" (INSET px in meno per lato, esattamente dove sta
      // la riga con i pallini) dentro a un contenitore "largo" (dove
      // vivono invece titoli/immagini). Applicata al contenitore
      // stesso (liveTimeline): la sua "scatola" resta ferma mentre
      // il contenuto scorre dentro, quindi la maschera taglia sempre
      // negli stessi due punti a schermo, qualunque sia lo scroll.
      // bandHalf = meta' altezza della fascia stretta: copre il
      // pallino (22px) piu' il trattino e il suo distacco (10+5px)
      // per lato, con un margine di sicurezza. --- */
      const INSET = 50;
      const bandHalf = 40;
      // EXTRA: margine di sicurezza aggiuntivo SOLO per le zone
      // sopra/sotto la riga (dove vivono copertina e titolo, la sola
      // eccezione concordata che PUO' sporgere un po' oltre Discord/
      // switch lingua) - non per la riga o i pallini stessi, che
      // restano dentro per costruzione (vedi DOT_RADIUS qui sopra,
      // dove i pallini vengono gia' posizionati con il proprio bordo
      // esterno esattamente sul confine, mai oltre). Titolo (130px,
      // .h-node__title) piu' largo della propria copertina (100px,
      // .h-node__tile): quando la copertina e' gia' a ridosso del
      // bordo, il titolo sporgerebbe fino a 30px oltre - EXTRA da'
      // spazio a questo, con margine.
      const EXTRA = 40;
      const lineY = (firstDot.top + firstDot.bottom) / 2 - timelineRect.top;
      const lineTop = Math.max(0, lineY - bandHalf);
      const lineBottom = lineY + bandHalf;
      const W = timelineRect.width;
      const H = timelineRect.height;
      const L = -EXTRA;
      const R = W + EXTRA;
      liveTimeline.style.clipPath = `polygon(
        ${L}px 0px, ${R}px 0px,
        ${R}px ${lineTop.toFixed(2)}px, ${(W - INSET).toFixed(2)}px ${lineTop.toFixed(2)}px,
        ${(W - INSET).toFixed(2)}px ${lineBottom.toFixed(2)}px, ${R}px ${lineBottom.toFixed(2)}px,
        ${R}px ${H}px, ${L}px ${H}px,
        ${L}px ${lineBottom.toFixed(2)}px, ${INSET}px ${lineBottom.toFixed(2)}px,
        ${INSET}px ${lineTop.toFixed(2)}px, ${L}px ${lineTop.toFixed(2)}px
      )`;

      // Le freccette animate (solo sopra soglia, isLargeUniverse):
      // 50px a sinistra/destra di Discord/switch lingua (il bordo
      // "stretto" dove sparisce la riga, per via della maschera qui
      // sopra - non piu' il bordo del contenitore stesso, che ora e'
      // di nuovo "largo" per fare spazio alle voci). Non piu'
      // calcolate sul primo/ultimo pallino renderizzato (lineLeft/
      // lineRight): in un universo con scroll libero (tanti titoli)
      // l'ultimo pallino puo' trovarsi molto oltre il bordo destro
      // dello schermo, spingendo la freccetta fuori vista - qui
      // Discord e lo switch lingua sono invece sempre veri elementi
      // fissi in schermo, mai fuori vista. Stessa altezza della riga
      // (il centro verticale del primo/ultimo pallino). Il meccanismo
      // di accensione/spegnimento (solo la direzione in cui si puo'
      // ancora scorrere resta accesa/animata) resta identico a prima,
      // invariato.
      if(isLargeUniverse && el.dragHintLeft && el.dragHintRight && el.discordLink && el.langSwitch){
        const discordRect = el.discordLink.getBoundingClientRect();
        const langRect = el.langSwitch.getBoundingClientRect();
        const dotCenterY = (firstDot.top + firstDot.bottom) / 4 + (lastDot.top + lastDot.bottom) / 4;
        el.dragHintLeft.style.top = dotCenterY.toFixed(2) + "px";
        el.dragHintRight.style.top = dotCenterY.toFixed(2) + "px";
        el.dragHintLeft.style.left = (discordRect.left - 50).toFixed(2) + "px";
        el.dragHintRight.style.right = (window.innerWidth - (langRect.right + 50)).toFixed(2) + "px";

        // Si spengono da sole quando non c'e' piu' nulla da vedere in
        // quella direzione (riga gia' tutta a sinistra/destra), invece
        // di restare sempre accese a prescindere. Controllo subito e
        // ad ogni scroll/trascinamento della riga.
        const updateDragHintsState = () => {
          const atStart = liveTimeline.scrollLeft <= 1;
          const atEnd = liveTimeline.scrollLeft + liveTimeline.clientWidth >= liveTimeline.scrollWidth - 1;
          el.dragHintLeft.classList.toggle("is-disabled", atStart);
          el.dragHintRight.classList.toggle("is-disabled", atEnd);
        };
        updateDragHintsState();
        liveTimeline.addEventListener("scroll", updateDragHintsState);
      }
    }
  }
}

// ---------------------------------------------------------
// Title panel (detail) + vertical rail
// ---------------------------------------------------------
// ---------------------------------------------------------
// Pannelli voce (title) SEMPRE presenti nel DOM (nascosti finche' non
// selezionati), stesso pattern gia' applicato a Storie Senza Cornice
// e Il Filo Nascosto: la sinossi di ogni titolo va letta da Google
// anche se non e' mai stata cliccata, non solo iniettata al volo.
// prev/next si possono precalcolare una volta sola al boot: dipendono
// solo dalla posizione della voce nel suo universo, mai dal percorso
// di navigazione con cui ci si arriva.
// ---------------------------------------------------------
const titlePanels = {}; // entryId -> { panel, entry, game, universe, prevEntry, nextEntry }

function updateTitlePanelText(entryId){
  const rec = titlePanels[entryId];
  if(!rec) return;
  const { entry, game: g, universe, prevEntry, nextEntry } = rec;
  const yearLabel = state.lang === "it" ? entry.year : (entry.yearEn || entry.year);
  const releaseLabel = state.lang === "it" ? entry.releaseYear : (entry.releaseYearEn || entry.releaseYear);
  const typeLabel = state.lang === "it" ? entry.type : (entry.typeEn || entry.type);
  rec.panel.innerHTML = `
    <h2 class="title-name">${tf(entry.title)}</h2>
    <div class="title-meta"><span class="title-tag">${typeLabel}</span></div>
    ${releaseLabel ? `<p class="title-date title-date--release">${t("factReleaseDate")}: ${releaseLabel}</p>` : ""}
    ${yearLabel ? `<p class="title-date title-date--story">${t("titleDateSetting")}: ${yearLabel}</p>` : ""}
    ${entry.synopsis ? `<p class="title-synopsis"><span class="text-highlight">${tf(entry.synopsis)}</span></p>` : ""}
    ${entry.note ? `<p class="title-note">${tf(entry.note)}</p>` : ""}
    <div class="title-nav">
      ${prevEntry ? `<button type="button" class="title-nav__side title-nav__side--prev">${arrowIcon("left")}<span>${tf(prevEntry.title)}</span></button>` : `<span class="title-nav__spacer"></span>`}
      <button type="button" class="title-back">${t("backToTimeline")}</button>
      ${nextEntry ? `<button type="button" class="title-nav__side title-nav__side--next"><span>${tf(nextEntry.title)}</span>${arrowIcon("right")}</button>` : `<span class="title-nav__spacer"></span>`}
    </div>
  `;
  // gli elementi sono nuovi ad ogni chiamata (innerHTML riscritto),
  // quindi i listener vanno riagganciati ogni volta - query con
  // querySelector scoped al pannello, mai document.getElementById:
  // con 59 pannelli lo stesso id ("titleBackBtn" ecc.) esisterebbe
  // 59 volte, e getElementById prenderebbe sempre il primo.
  rec.panel.querySelector(".title-back").addEventListener("click", () => {
    const target = mobileBreakpoint.matches ? "universe" : "game"; // su
      // mobile LT e' una schermata a se' (nuovo modello, 27/08); su
      // desktop non e' mai esistita separata da "game" (la timeline
      // e' gia' li' dentro, col carosello prev/next) - tornare a
      // "universe" li' non avrebbe alcun trattamento CSS dedicato.
    state.view = target;
    setState(target);
    scrollCarouselToStage(); // vedi nota storica sotto in setState
  });
  const prevBtn = rec.panel.querySelector(".title-nav__side--prev");
  if(prevBtn) prevBtn.addEventListener("click", () => selectEntry(prevEntry.id));
  const nextBtn = rec.panel.querySelector(".title-nav__side--next");
  if(nextBtn) nextBtn.addEventListener("click", () => selectEntry(nextEntry.id));

  appendLikeWidget(rec.panel, entry.id);
}

function updateAllTitlePanelsText(){
  Object.keys(titlePanels).forEach(updateTitlePanelText);
}

function buildAllTitlePanels(){
  GAME_ORDER.forEach(gameId => {
    const g = GAMES[gameId];
    (g.universes || []).forEach(universe => {
      const entries = universe.entries || [];
      entries.forEach((entry, idx) => {
        const prevEntry = idx > 0 ? entries[idx - 1] : null;
        const nextEntry = idx < entries.length - 1 ? entries[idx + 1] : null;
        const panel = document.createElement("div");
        panel.className = "title-content-item";
        panel.id = `titleItem-${entry.id}`;
        panel.hidden = true;
        el.titleContent.appendChild(panel);
        titlePanels[entry.id] = { panel, entry, game: g, universe, prevEntry, nextEntry };
        updateTitlePanelText(entry.id);
      });
    });
  });
}

function renderTitlePanel(){
  const g = currentGame();
  const found = findEntry(g, state.entryId);
  if(!found) return;
  const { entry, universe } = found;

  Object.entries(titlePanels).forEach(([id, rec]) => {
    rec.panel.hidden = id !== entry.id;
  });
  const activeRec = titlePanels[entry.id];
  if(!activeRec) return;

  // Larghezza e posizione del box di testo (#titleContent, contiene
  // tutti i pannelli .title-content-item) calcolate dalla posizione
  // REALE di Discord (sinistra) e dello switch lingua (destra),
  // misurata a runtime - stessa tecnica gia' robusta usata per
  // #gameHeaderBar/#gameHeader/#universesRow nella vista "game",
  // qui applicata al box di testo della vista "title". Solo
  // desktop: su mobile il layout e' tutt'altra cosa.
  if(!mobileBreakpoint.matches && el.discordLink && el.langSwitch && el.titleContent){
    el.titleContent.style.marginLeft = "0px";
    el.titleContent.style.width = "";
    const contentRect = el.titleContent.getBoundingClientRect();
    const discordRect = el.discordLink.getBoundingClientRect();
    const langRect = el.langSwitch.getBoundingClientRect();
    const delta = discordRect.left - contentRect.left;
    el.titleContent.style.marginLeft = delta.toFixed(2) + "px";
    el.titleContent.style.width = (langRect.right - discordRect.left).toFixed(2) + "px";

    // Larghezza REALE di .title-nav allineata al testo della sinossi,
    // non al box fisso al 70% (segnalato con screenshot: il pulsante
    // "voce successiva" sporgeva oltre il margine destro del testo,
    // perche' la sinossi quasi mai riempie tutta la larghezza
    // disponibile fino in fondo sull'ultima riga). .title-synopsis ha
    // ora width:fit-content (CSS) quindi si stringe alla riga piu'
    // lunga davvero renderizzata - ma il box misurabile e' quello di
    // .text-highlight al suo interno, non del paragrafo: .text-highlight
    // ha un padding orizzontale di 0.3em (per lo sfondo morbido dietro
    // al testo) che sporge oltre l'ultimo carattere vero su entrambi i
    // lati, quindi va sottratto per trovare il margine destro REALE del
    // testo visibile (misurato via getComputedStyle, non ricalcolato a
    // mano dall'em - un valore fisso sarebbe sbagliato ad ogni cambio
    // di font-size). Il lato sinistro non serve: .title-nav parte gia'
    // dallo stesso punto del testo visibile (il -0.3em di margin-left
    // sulla sinossi compensa esattamente il padding sinistro di
    // .text-highlight, vedi sopra), quindi qui basta la larghezza.
    const highlightEl = activeRec.panel.querySelector(".title-synopsis .text-highlight");
    const navEl = activeRec.panel.querySelector(".title-nav");
    if(highlightEl && navEl){
      const hlRect = highlightEl.getBoundingClientRect();
      const hlStyle = getComputedStyle(highlightEl);
      const paddingRight = parseFloat(hlStyle.paddingRight) || 0;
      const textRight = hlRect.right - paddingRight;
      const navWidth = textRight - navEl.getBoundingClientRect().left;
      navEl.style.width = navWidth > 0 ? navWidth.toFixed(2) + "px" : "";
    }

    // "Indietro" centrato DAVVERO tra prev e next (segnalato
    // esplicitamente: deve restare centrale ai due pulsanti laterali),
    // non solo al centro geometrico del box .title-nav: left:50% (CSS)
    // centra sul box, ma prev e next quasi mai hanno la stessa
    // larghezza tra loro (i titoli di voce precedente/successiva sono
    // testi diversi) - un box centrato non e' lo stesso di un punto
    // equidistante dai due VERI bordi interni dei pulsanti vicini.
    // Calcolato qui il punto medio reale tra il bordo destro di prev e
    // il bordo sinistro di next (quando uno dei due manca, cioe' e'
    // il primo o l'ultimo titolo dell'universo, si usa il bordo del
    // box .title-nav al suo posto, dato che li' lo spaziatore e'
    // display:none e non occupa spazio).
    if(navEl){
      const backEl = navEl.querySelector(".title-back");
      const prevSide = navEl.querySelector(".title-nav__side--prev");
      const nextSide = navEl.querySelector(".title-nav__side--next");
      if(backEl){
        const navRect = navEl.getBoundingClientRect();
        const innerLeft = prevSide ? prevSide.getBoundingClientRect().right : navRect.left;
        const innerRight = nextSide ? nextSide.getBoundingClientRect().left : navRect.right;
        const midpoint = (innerLeft + innerRight) / 2;
        const backLeftPx = midpoint - navRect.left;
        backEl.style.left = backLeftPx.toFixed(2) + "px";
      }
    }
  }

  // Solo mobile: il pulsante musica si sposta dentro alla pagina
  // titolo, PRIMA del titolo stesso (sinistra, sopra - richiesto
  // esplicitamente, prima stava sulla riga tag/anno). Il
  // centraggio verticale via CSS non serve piu' qui: e' un elemento
  // normale nel flusso, non piu' absolute/transform.
  if(mobileBreakpoint.matches && el.musicControl){
    const titleName = activeRec.panel.querySelector(".title-name");
    if(titleName && titleName.parentElement){
      titleName.parentElement.insertBefore(el.musicControl, titleName);
      // Ripulisco gli stili in linea eventualmente rimasti da
      // un'altra vista (es. quella "gioco", che li imposta a mano):
      // altrimenti vincerebbero loro sulla nuova regola CSS qui
      // sopra, che deve gestire tutto da sola.
      el.musicControl.style.cssText = "";
    }
  }

  let watermark = el.titlePanel.querySelector(".title-watermark");
  const watermarkSrc = g.watermark || entry.image;
  if(watermarkSrc){
    if(!watermark){
      watermark = document.createElement("div");
      watermark.className = "title-watermark";
      el.titlePanel.insertBefore(watermark, el.titleContent);
    }
    watermark.style.backgroundImage = `url('${watermarkSrc}')`;
    watermark.style.backgroundSize = g.watermarkSize || "";
    watermark.style.backgroundPosition = g.watermarkPosition || "";
    loadWatermarkForId(g.id);
    if(g.watermarkBottomFade){
      // Combina la sfumatura orizzontale di sempre con una verticale
      // in più, verso il basso: ammorbidisce il taglio netto in
      // fondo all'immagine invece di lasciarlo di scatto.
      const fadeMask = "linear-gradient(90deg, transparent, black 35%), linear-gradient(180deg, black 75%, transparent)";
      watermark.style.webkitMaskImage = fadeMask; /* fallback Safari piu' vecchie senza mask-image non prefissata */
      watermark.style.maskImage = fadeMask;
      watermark.style.maskComposite = "intersect";
    } else {
      watermark.style.webkitMaskImage = "";
      watermark.style.maskImage = "";
      watermark.style.maskComposite = "";
    }
  } else if(watermark){
    watermark.remove();
  }
  // Filigrana: il "top" NON serve piu' misurarlo a runtime (rischio
  // di timing legato allo scroll, vedi commento in selectEntry) - a
  // differenza di Discord/switch lingua (larghezza variabile), qui
  // l'altezza della barra header e' sempre una costante fissa (15px
  // di topbar + 65px di barra = 80px), mai dipendente dal contenuto.
  // Il valore vero (80 + 12.5 di meta' strada = 92.5px) e' impostato
  // direttamente in CSS, vedi la_traccia_del_tempo.css.

  // Barra di luminosita': da sotto Discord a sotto lo switch lingua,
  // come su Storie Senza Cornice - misurata a runtime sulla
  // posizione REALE dei due pulsanti (stessa tecnica robusta gia' in
  // uso per il box di testo qui sopra), non piu' un left/right fisso
  // nel CSS. left/right qui sono style inline diretti (l'elemento e'
  // gia' position:fixed via CSS condiviso).
  if(!mobileBreakpoint.matches && el.discordLink && el.langSwitch && el.watermarkBrightness){
    const discordRect = el.discordLink.getBoundingClientRect();
    const langRect = el.langSwitch.getBoundingClientRect();
    el.watermarkBrightness.style.left = discordRect.left.toFixed(2) + "px";
    el.watermarkBrightness.style.right = (window.innerWidth - langRect.right).toFixed(2) + "px";
  }
  el.watermarkBrightness.hidden = !watermarkSrc;
  // "0px dalla linea dell'header" = esattamente al bordo basso della
  // barra header (15px di topbar + 65px di barra = 80px), non piu'
  // il vecchio "97px" (calcolato per il vecchio top:70px della
  // filigrana, ormai superato). left/right impostati qui sopra -
  // NON vanno piu' azzerati qui sotto: un residuo del vecchio codice
  // (style.right = "") sovrascriveva ogni volta il valore appena
  // calcolato da Discord/switch lingua, riportando la barra al
  // fallback CSS (300px, fino quasi al bordo della tabella destra) -
  // esattamente il "piu' lunga di quanto chiesto" segnalato.
  el.watermarkBrightness.style.top = watermarkSrc ? "80px" : "";

  // restart entrance animation
  activeRec.panel.style.animation = "none";
  void activeRec.panel.offsetWidth;
  activeRec.panel.style.animation = "";
}

function renderRail(){
  const g = currentGame();
  const u = currentUniverse();
  if(!g || !u) return;
  el.railLabel.textContent = tf(u.name);
  el.railTrack.innerHTML = "";
  u.entries.forEach(entry => {
    const node = document.createElement("a");
    node.href = `voci/la-traccia-del-tempo/${state.gameId}/${entry.id}.html`;
    node.className = "v-node" + (entry.id === state.entryId ? " is-active" : "");
    const yearLabel = state.lang === "it" ? entry.year : (entry.yearEn || entry.year);
    node.innerHTML = `
      <span class="v-node__tile${tileMissingClass(entry, "v-node__tile")}">${tileInnerHTML(entry)}</span>
      <span class="v-node__meta">
        <span class="v-node__year">${yearLabel}</span><br>
        <span class="v-node__title">${tf(entry.title)}</span>
      </span>
    `;
    node.addEventListener("click", (ev) => { ev.preventDefault(); selectEntry(entry.id); });
    el.railTrack.appendChild(node);
  });
}

// ---------------------------------------------------------
// State transitions
// ---------------------------------------------------------
function setState(view){
  if(view === "landing" && state.view && state.view !== "landing"){
    // Diagnostica permanente (26/08): il ritorno a "landing" segnalato
    // piu' volte non e' mai stato riprodotto nei test automatici - se
    // succede di nuovo, questo dice ESATTAMENTE da dove parte la
    // chiamata, invece di continuare a supporre. console.trace() stampa
    // la pila di chiamata intera nella developer console del browser.
    console.warn("[diagnostica] setState('landing') chiamato da stato:", state.view);
    console.trace();
  }
  state.view = view;
  el.body.dataset.state = view;

  // Ko-fi/Discord: nella home restano dove sono sempre stati
  // (.stage-controls); in "game"/"title" (equivalente qui della
  // vista voce delle altre pagine) si spostano dentro .brand, al
  // posto della tazzina - stessa tecnica di Storie Senza Cornice/Il
  // Filo Nascosto. Solo desktop, .social-links su mobile non si
  // tocca (ha gia' un trattamento suo separato).
  if(!mobileBreakpoint.matches && el.socialLinks){
    if(view === "landing" && el.stageControls && el.socialLinks.parentElement !== el.stageControls){
      el.stageControls.insertBefore(el.socialLinks, el.stageControls.firstChild);
    } else if(view !== "landing" && el.brand && el.brandBtn && el.socialLinks.parentElement !== el.brand){
      el.brand.insertBefore(el.socialLinks, el.brandBtn);
    }
  }

  el.landingPanel.hidden = view !== "landing";
  el.gamePanel.hidden = view !== "game";
  el.universeTimelinePanel.hidden = view !== "universe";
  el.titlePanel.hidden = view !== "title";

  if(view === "landing"){
    state.gameId = null; state.universeIndex = 0; state.entryId = null;
    document.body.style.setProperty("--tl-1", DEFAULT_PALETTE[0]);
    document.body.style.setProperty("--tl-2", DEFAULT_PALETTE[1]);
    document.body.style.setProperty("--tl-3", DEFAULT_PALETTE[2]);
    document.body.style.setProperty("--gradient", `linear-gradient(90deg, ${DEFAULT_PALETTE[0]}, ${DEFAULT_PALETTE[1]} 55%, ${DEFAULT_PALETTE[2]})`);
    document.body.style.setProperty("--cyan", LANDING_COLOR);
    renderSidebar();
  } else if(view === "game"){
    state.entryId = null;
    applyPaletteToCSS();
    renderSidebar();
    renderGamePanel();
  } else if(view === "universe"){
    // SOLO MOBILE: sotto-schermata Screen C (linea temporale di un
    // solo universo). Niente timelineRail qui (quello e' solo per la
    // vista "title" desktop) - su mobile e' comunque sempre nascosto.
    state.entryId = null;
    applyPaletteToCSS();
    renderSidebar();
    renderUniverseTimelinePanel();
  } else if(view === "title"){
    applyPaletteToCSS();
    renderSidebar();
    // Cruciale: rivelare la tabella destra PRIMA di renderTitlePanel,
    // non dopo. renderTitlePanel misura la posizione reale di
    // Discord/switch lingua per calcolare la larghezza del box di
    // testo - se la tabella e' ancora nascosta in quel momento,
    // .stage e' ancora largo come in stato "game"/"landing" (niente
    // rail a rubargli 300px), e lo switch lingua viene misurato
    // molto piu' a destra di dove finira' per davvero. Risultato:
    // il box calcolato risultava troppo largo, ben oltre lo switch
    // lingua vero - esattamente il problema segnalato.
    el.timelineRail.hidden = false;
    renderTitlePanel();
    renderRail();
  }
  if(view !== "title") el.timelineRail.hidden = true;
  updateMusicPlayback();
  // Aggiorna anche l'alert spoiler (e gli altri elementi legati a
  // "inStage" qui dentro) - senza questa chiamata, cambiare stato
  // interno (landing->game->universe->title) senza un vero scroll
  // esterno non ricalcolava mai la loro visibilita', lasciando
  // l'alert visibile anche fuori dalla home vera.
  updateSwipeHints();
}

function selectGame(id){
  resumedPersistedTrack = false; // scelta esplicita di un gioco: la
    // traccia ripresa da un'altra pagina lascia il posto alla scaletta
    // normale di questo, come ci si aspetta cliccando in giro
  if(state.gameId !== id) state.trackIndex = 0;
  state.gameId = id;
  state.universeIndex = 0;
  setState("game");
  closeMobileSidebar();
  window.scrollTo(0, 0);
  const stage = document.querySelector(".stage");
  if(stage) stage.scrollTop = 0;
}

function selectEntry(entryId){
  const found = findEntry(currentGame(), entryId);
  if(!found) return;
  state.entryId = entryId;
  state.universeIndex = currentGame().universes.indexOf(found.universe);
  // Scroll azzerato PRIMA di setState/renderTitlePanel, non dopo:
  // #titleHeaderBar e' sticky, la sua posizione (misurata a runtime
  // per la filigrana, vedi renderTitlePanel) dipende da quanto la
  // pagina e' scorsa in quel momento. Passando da una voce all'altra
  // (avanti/indietro) senza mai tornare alla vista "game", la pagina
  // poteva restare scorsa dalla voce precedente proprio nell'istante
  // della misurazione - risultato, la filigrana finiva ancorata a un
  // punto sbagliato (troppo in alto, quasi al livello del titolo).
  window.scrollTo(0, 0);
  const stage = document.querySelector(".stage");
  if(stage) stage.scrollTop = 0;
  setState("title");
}

// ---------------------------------------------------------
// Tabella a comparsa (mostra/nascondi la sidebar finche' non ci si
// passa sopra col mouse) - stessa meccanica di Storie Senza
// Cornice/Il Filo Nascosto.
// ---------------------------------------------------------
if(el.panelToggle){
  el.panelToggle.addEventListener("click", () => {
    const acceso = document.body.dataset.panels === "hover";
    if(acceso){
      delete document.body.dataset.panels;
      el.panelToggle.setAttribute("aria-pressed", "false");
      localStorage.setItem(PANELS_HOVER_KEY, "false");
    } else {
      document.body.dataset.panels = "hover";
      el.panelToggle.setAttribute("aria-pressed", "true");
      localStorage.setItem(PANELS_HOVER_KEY, "true");
    }
  });
}

// ---------------------------------------------------------
// Language switch
// ---------------------------------------------------------
el.langSwitch.addEventListener("click", () => {
  state.lang = state.lang === "it" ? "en" : "it";
  localStorage.setItem(LANG_KEY, state.lang);
  paintStaticText();
  updateAllTitlePanelsText();
  updateAllGameHeaderPanelsText();
  updateAllCanonPanelsText();
  if(state.view === "landing"){ renderSidebar(); }
  else if(state.view === "game"){ renderSidebar(); renderGamePanel(); }
  else if(state.view === "title"){ renderSidebar(); renderTitlePanel(); renderRail(); }
  const reportBtn = document.getElementById("reportBugBtn");
  if(reportBtn) reportBtn.setAttribute("aria-label", t("reportBtnLabel"));
  const reportDesc = document.getElementById("reportDescription");
  if(reportDesc) reportDesc.placeholder = t("reportDescPlaceholder");
  const reportFileName = document.getElementById("reportFileName");
  if(reportFileName && !reportFileName.textContent.includes(".")) reportFileName.textContent = t("reportNoFile");
});

// ---------------------------------------------------------
// Background music — game pages only, never autoplays with sound,
// user must opt in via the toggle; browsers block autoplay-with-audio anyway.
// ---------------------------------------------------------
function getTrackList(g){
  if(!g) return [];
  if(g.tracks && g.tracks.length) return g.tracks;
  if(g.music) return [{ src: g.music, title: null, game: null }];
  return [];
}

function updateMusicPlayback(){
  if(resumedPersistedTrack) return; // traccia ripresa da un'altra pagina:
    // resta cosi' finche' l'utente non sceglie esplicitamente un gioco
    // (selectGame azzera il flag), non la tocca la logica normale qui sotto.
  const g = currentGame();
  // "universe" (Screen C, solo mobile) NON ha il pulsante musica -
  // richiesto esplicitamente, "non avra' pulsanti" - ma l'audio
  // continua a suonare lo stesso (quello scelto/avviato su Screen B),
  // quindi va incluso in hasTracks/pausa ma non in inGamePages (che
  // controlla solo la VISIBILITA' del pulsante).
  const inGamePages = state.view === "game" || state.view === "title";
  const audioAllowedPages = inGamePages || state.view === "universe";
  el.musicToggle.hidden = !inGamePages;
  el.musicToggle.setAttribute("aria-pressed", String(state.musicOn));

  const tracks = getTrackList(g);
  const hasTracks = audioAllowedPages && tracks.length > 0;

  if(!hasTracks || !state.musicOn){
    el.bgMusic.pause();
    el.trackInfo.hidden = true;
    return;
  }

  if(state.trackIndex >= tracks.length) state.trackIndex = 0;
  const track = tracks[state.trackIndex];

  if(track.title){
    el.trackInfo.hidden = false;
    el.trackTitle.textContent = track.title;
    el.trackGame.textContent = track.game || "";
    el.trackSkipBtn.hidden = tracks.length <= 1;
  } else {
    el.trackInfo.hidden = true;
  }

  if(!el.bgMusic.src || !el.bgMusic.src.endsWith(track.src)){
    el.bgMusic.src = track.src;
  }
  el.bgMusic.play().catch(() => { /* blocked until a user gesture; toggle click itself counts as one */ });
}

function advanceTrack(){
  const g = currentGame();
  const tracks = getTrackList(g);
  if(tracks.length === 0) return;
  state.trackIndex = (state.trackIndex + 1) % tracks.length;
  updateMusicPlayback();
}
el.bgMusic.addEventListener("ended", advanceTrack);
el.bgMusic.addEventListener("timeupdate", () => {
  if(el.bgMusic.duration && !isScrubbingProgress){
    el.trackProgressFill.style.width = (el.bgMusic.currentTime / el.bgMusic.duration * 100) + "%";
  }
});
el.bgMusic.addEventListener("loadedmetadata", () => {
  el.trackProgressFill.style.width = "0%";
});
el.trackSkipBtn.addEventListener("click", advanceTrack);

// Scrubbing della barra di riproduzione (20/08) - stessa tecnica e
// stesso codice di script-racconti.js/script-storie-teorie.js
// (mancava qui, segnalato come discrepanza di funzionalita' tra
// pagine: tutti i lettori con pulsante+nuvoletta+barra dovrebbero
// condividere le stesse funzioni, non solo il colore/le tracce).
const trackProgressEl = el.trackProgressFill.parentElement;
let isScrubbingProgress = false;

function seekFromPointerEvent(e){
  if(!el.bgMusic.duration) return;
  const rect = trackProgressEl.getBoundingClientRect();
  const ratio = Math.min(1, Math.max(0, (e.clientX - rect.left) / rect.width));
  el.bgMusic.currentTime = ratio * el.bgMusic.duration;
  el.trackProgressFill.style.width = (ratio * 100) + "%";
}

trackProgressEl.addEventListener("mousedown", (e) => {
  if(!el.bgMusic.duration) return;
  isScrubbingProgress = true;
  trackProgressEl.classList.add("is-scrubbing");
  seekFromPointerEvent(e);
  e.preventDefault();
});
window.addEventListener("mousemove", (e) => {
  if(!isScrubbingProgress) return;
  seekFromPointerEvent(e);
});
window.addEventListener("mouseup", () => {
  if(!isScrubbingProgress) return;
  isScrubbingProgress = false;
  trackProgressEl.classList.remove("is-scrubbing");
});

function seekFromTouch(touch){
  seekFromPointerEvent({ clientX: touch.clientX });
}
trackProgressEl.addEventListener("touchstart", (e) => {
  if(!el.bgMusic.duration) return;
  isScrubbingProgress = true;
  trackProgressEl.classList.add("is-scrubbing");
  seekFromTouch(e.touches[0]);
}, { passive:true });
trackProgressEl.addEventListener("touchmove", (e) => {
  if(!isScrubbingProgress) return;
  seekFromTouch(e.touches[0]);
}, { passive:true });
trackProgressEl.addEventListener("touchend", () => {
  if(!isScrubbingProgress) return;
  isScrubbingProgress = false;
  trackProgressEl.classList.remove("is-scrubbing");
});

const LONG_PRESS_MS = 1000;
function attachProgressLongPressHandoff(btn){
  if(!btn) return;
  let timer = null;
  let handedOff = false;
  let startTouch = null;

  btn.addEventListener("touchstart", (e) => {
    handedOff = false;
    startTouch = e.touches[0];
    timer = setTimeout(() => {
      if(!el.bgMusic.duration) return;
      handedOff = true;
      isScrubbingProgress = true;
      trackProgressEl.classList.add("is-scrubbing");
      seekFromTouch(startTouch);
    }, LONG_PRESS_MS);
  }, { passive:true });

  btn.addEventListener("touchmove", (e) => {
    if(!handedOff) return;
    seekFromTouch(e.touches[0]);
  }, { passive:true });

  btn.addEventListener("touchend", (e) => {
    clearTimeout(timer);
    if(handedOff){
      isScrubbingProgress = false;
      trackProgressEl.classList.remove("is-scrubbing");
      e.preventDefault();
    }
  });

  btn.addEventListener("touchcancel", () => {
    clearTimeout(timer);
    if(handedOff){
      isScrubbingProgress = false;
      trackProgressEl.classList.remove("is-scrubbing");
    }
  });
}
attachProgressLongPressHandoff(el.trackSkipBtn);
attachProgressLongPressHandoff(el.trackPersistBtn);

// ---------------------------------------------------------
// Ascolto persistente (pulsante a puntina in track-info, dal lato
// opposto del salta-traccia): quando attivo, la traccia in corso
// continua anche cambiando pagina del sito (sito multi-pagina, non
// un'app singola: il caricamento della pagina nuova comunque azzera
// tutto, ma qui la si fa ripartire subito dallo stesso punto, un
// piccolo vuoto di silenzio nel mezzo e' inevitabile) e non si mette
// piu' in pausa mettendo la scheda in background.
// ---------------------------------------------------------
const MUSIC_PERSIST_KEY = "tfsMusicPersistOn";
const MUSIC_STATE_KEY = "tfsMusicPersistState";

function isMusicPersistOn(){
  return localStorage.getItem(MUSIC_PERSIST_KEY) === "1";
}

function saveMusicPersistState(){
  if(!isMusicPersistOn() || !el.bgMusic.src || el.bgMusic.paused) return;
  try {
    localStorage.setItem(MUSIC_STATE_KEY, JSON.stringify({
      src: el.bgMusic.src,
      title: el.trackTitle.textContent,
      game: el.trackGame.textContent,
      time: el.bgMusic.currentTime
    }));
  } catch(e) { /* storage pieno o bloccato dal browser, pazienza */ }
}

if(el.trackPersistBtn){
  el.trackPersistBtn.setAttribute("aria-pressed", String(isMusicPersistOn()));
  el.trackPersistBtn.addEventListener("click", () => {
    const next = !isMusicPersistOn();
    localStorage.setItem(MUSIC_PERSIST_KEY, next ? "1" : "0");
    el.trackPersistBtn.setAttribute("aria-pressed", String(next));
    if(next) saveMusicPersistState();
    else localStorage.removeItem(MUSIC_STATE_KEY);
  });
}

// Salvataggio periodico della posizione (non ad ogni istante: timeupdate
// spara diverse volte al secondo, qui basta ogni 2s), piu' un salvataggio
// finale quando la pagina sta per essere lasciata/ricaricata.
let lastPersistSave = 0;
el.bgMusic.addEventListener("timeupdate", () => {
  const now = Date.now();
  if(now - lastPersistSave > 2000){
    lastPersistSave = now;
    saveMusicPersistState();
  }
});
window.addEventListener("pagehide", saveMusicPersistState);

// ---------------------------------------------------------
// Standby/scheda non in primo piano: la musica si mette in pausa,
// tranne quando l'ascolto persistente e' attivo (in quel caso resta
// in riproduzione, e' proprio lo scopo del pulsante).
// ---------------------------------------------------------
let musicWasPlayingBeforeHidden = false;
document.addEventListener("visibilitychange", () => {
  if(document.hidden){
    if(isMusicPersistOn()) return;
    musicWasPlayingBeforeHidden = !el.bgMusic.paused;
    el.bgMusic.pause();
  } else if(musicWasPlayingBeforeHidden){
    el.bgMusic.play().catch(() => {});
  }
});

// ---------------------------------------------------------
// UI tap sound — plays on every button press, site-wide.
// A fresh Audio instance per click so rapid successive taps
// can overlap instead of cutting each other off.
// ---------------------------------------------------------
// ---------------------------------------------------------
// Suono UI al tap. Selettore allargato oltre ai soli <button>:
// kofi/discord/index-link sono <a>, non <button>, restavano esclusi
// prima. Lo skip del brano (.track-skip) è l'unica eccezione voluta,
// escluso esplicitamente.
// ---------------------------------------------------------
// Suono UI al tap, stesso comportamento di la_traccia_del_tempo.html.
// Selettore allargato oltre ai soli <button>: kofi/discord/index-link
// sono <a>, non <button>, restavano esclusi prima. Lo skip del brano
// (.track-skip) è l'unica eccezione voluta, escluso esplicitamente.
//
// Il suono viene scaricato e DECODIFICATO una sola volta, in idle
// time al caricamento pagina, invece di creare un nuovo Audio() (rete
// + decodifica da zero) ad ogni singolo click: prima il tempismo
// variava sensibilmente click dopo click (~85% delle volte suonava,
// ma mai esattamente nello stesso istante), perché ogni click
// dipendeva da quanto velocemente rete/decoder rispondevano in quel
// momento. Con il buffer già pronto in memoria, avviarlo tramite Web
// Audio API è immediato e sempre identico: nessuna rete, nessuna
// decodifica al momento del click, solo la riproduzione di un buffer
// già pronto.
// ---------------------------------------------------------
const TAP_SOUND_URL = "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Tap.mp3";
let tapAudioCtx = null;
let tapBuffer = null;
(window.requestIdleCallback || (cb => setTimeout(cb, 1)))(() => {
  try {
    tapAudioCtx = new (window.AudioContext || window.webkitAudioContext)();
    fetch(TAP_SOUND_URL)
      .then(r => r.arrayBuffer())
      .then(data => tapAudioCtx.decodeAudioData(data))
      .then(buffer => { tapBuffer = buffer; })
      .catch(() => { /* silent: on failure, the fallback below still covers it */ });
  } catch(e) { /* Web Audio unavailable: no problem, the fallback below still covers it */ }
});
// Browsers create the AudioContext already "suspended" until there is
// a real user interaction (anti-autoplay policy): it's created here
// in idle time, with no gesture at all, so it's almost always born
// suspended. This listener wakes it up on the very first tap/click
// anywhere on the page, not just on the sound-triggering buttons - so
// by the time a real button click happens, the context is already
// awake most of the time, instead of being discovered suspended right
// at that moment.
document.addEventListener("pointerdown", () => {
  if(tapAudioCtx && tapAudioCtx.state === "suspended") tapAudioCtx.resume();
}, { once: true });
function suonaTap(volume, onAvviato){
  if(tapAudioCtx && tapBuffer){
    const durata = tapBuffer.duration * 1000; // exact duration in ms, read from the buffer - not a guess
    const avvia = () => {
      const source = tapAudioCtx.createBufferSource();
      source.buffer = tapBuffer;
      const gain = tapAudioCtx.createGain();
      gain.gain.value = volume;
      source.connect(gain).connect(tapAudioCtx.destination);
      source.start(0);
      if(onAvviato) onAvviato(durata); // called NOW, not before: if resume was
        // needed, this is the true moment the sound actually starts
    };
    if(tapAudioCtx.state === "suspended"){
      // resume() is async: starting the sound right after without
      // waiting for it risks silently losing it exactly when the
      // early wake-up above didn't have time to run yet (typically
      // the very first click of the session).
      tapAudioCtx.resume().then(avvia);
    } else {
      avvia();
    }
  } else {
    // Buffer not ready yet (rare: only if clicked before preload
    // finishes) - same old method as a safety net.
    const tap = new Audio(TAP_SOUND_URL);
    tap.volume = volume;
    tap.play().catch(() => {});
    if(onAvviato) onAvviato(null); // duration unknown in advance with this method
  }
}
document.addEventListener("click", (e) => {
  // a.index-link excluded here: it has its own dedicated handling
  // below, which needs the sound's exact duration to delay
  // navigation by the right amount (not a guessed number) - if it
  // stayed here too, the sound would fire twice on the same click.
  const target = e.target.closest("button, a.kofi-link, a.discord-link");
  if(target && !target.classList.contains("track-skip")){
    suonaTap(mobileBreakpoint.matches ? 0.3 : 0.1);
  }
});

el.bgMusic.volume = mobileBreakpoint.matches ? 1 : parseFloat(el.volumeSlider.value);
el.volumeSlider.addEventListener("input", () => {
  el.bgMusic.volume = parseFloat(el.volumeSlider.value);
  localStorage.setItem(VOLUME_KEY, el.volumeSlider.value);
});

if(el.watermarkBrightnessSlider){
  el.watermarkBrightnessSlider.addEventListener("input", () => {
    watermarkBrightness = parseFloat(el.watermarkBrightnessSlider.value);
    if(currentWatermarkEntryKey){
      localStorage.setItem(currentWatermarkEntryKey, el.watermarkBrightnessSlider.value);
    }
    applyWatermarkVisual(watermarkBrightness);
  });
}

if(el.watermarkPresets){
  el.watermarkPresets.querySelectorAll(".watermark-brightness-line__preset").forEach(btn => {
    btn.addEventListener("click", () => {
      activeWatermarkSlot = btn.dataset.preset;
      localStorage.setItem(WATERMARK_ACTIVE_SLOT_KEY, activeWatermarkSlot);
      const g = currentGame();
      if(g) loadWatermarkForId(g.id);
    });
  });
  updateWatermarkPresetButtons();
}

el.musicToggle.addEventListener("click", () => {
  state.musicOn = !state.musicOn;
  localStorage.setItem(MUSIC_ON_KEY, String(state.musicOn));
  updateMusicPlayback();
});

// ---------------------------------------------------------
// Mobile: niente più hamburger/cassetto. Sidebar e stage sono due
// pannelli affiancati (vedi CSS, scroll-snap orizzontale); questa
// funzione riporta lo scroll sullo stage, es. dopo aver scelto un
// gioco dalla sidebar. Inerte su desktop (il layout lì non scrolla).
// ---------------------------------------------------------
const stageEl = document.getElementById("stage");

function scrollCarouselToStage(){
  if(!mobileBreakpoint.matches) return;
  stageEl.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
}
function closeMobileSidebar(){ scrollCarouselToStage(); }

// Freccette di swipe: nascosta quella che punta verso un bordo già
// raggiunto (non c'è altro da quel lato), visibile l'altra.
const layoutEl = document.querySelector(".layout");
const swipeLeftEl = document.querySelector(".swipe-hint--left");
const swipeRightEls = document.querySelectorAll(".swipe-hint--right");
const spoilerAlertEl = document.querySelector(".spoiler-alert");
function updateSwipeHints(){
  if(!mobileBreakpoint.matches || !layoutEl) return;
  const w = window.innerWidth;
  const maxScroll = layoutEl.scrollWidth - w;
  if(swipeLeftEl) swipeLeftEl.style.visibility = layoutEl.scrollLeft <= w * 0.5 ? "hidden" : "visible";
  const nascondiDestra = layoutEl.scrollLeft >= maxScroll - w * 0.5;
  swipeRightEls.forEach(elFreccia => { elFreccia.style.visibility = nascondiDestra ? "hidden" : "visible"; });
  if(stageEl){
    // "in stage" = confronto diretto con la posizione vera di stageEl,
    // non aritmetica basata su "centrale" o "non ai bordi" - qui stage
    // e' il PRIMO pannello (order:-1), non uno in mezzo ad altri due.
    const inStage = Math.abs(layoutEl.scrollLeft - stageEl.offsetLeft) < w * 0.5;
    if(el.reportBugBtn) el.reportBugBtn.style.display = inStage ? "" : "none";
    // L'alert spoiler (position:fixed, vedi HTML/CSS) deve vedersi
    // solo sulla home vera, non scorrendo verso la tabella - senza
    // questo, restando fixed rispetto al viewport (non a .layout),
    // sarebbe rimasto visibile sopra alla lista anche li'. In PIU',
    // richiesto esplicitamente dopo averlo trovato su Saga/LT/Titolo:
    // "inStage" da solo non basta, resta vero anche dentro quelle 3
    // schermate (tutte vivono nello stesso .stage della vera home) -
    // serve anche il controllo dello stato interno.
    if(spoilerAlertEl) spoilerAlertEl.style.display = (inStage && state.view === "landing") ? "" : "none";
  }
}
if(layoutEl) layoutEl.addEventListener("scroll", updateSwipeHints, { passive: true });

el.brandBtn.addEventListener("click", () => {
  setState("landing");
  // Stesso fix gia' fatto per Storie Senza Cornice: riporta sempre
  // allo stage indipendentemente da dove ci si trova nel carosello.
  scrollCarouselToStage();
});

// Le freccette animate di LT/Titolo (#universeTimelineSwipeHint,
// #titleSwipeHint) restano solo un'indicazione visiva "si continua da
// questa parte" - nessuna interazione di ritorno agganciata a loro:
// il modello di navigazione e' stato semplificato a un unico percorso
// in avanti, sempre verso destra (Home -> Tabella -> Saga -> LT ->
// Titolo), niente piu' swipe/tap per tornare indietro (il precedente
// tentativo di swipe a destra per tornare indietro causava piu'
// problemi di quanti ne risolvesse, tra cui la regressione sulla
// selezione dalla Tabella - rimosso interamente su richiesta esplicita).

// ---------------------------------------------------------
// Boot
// ---------------------------------------------------------
paintStaticText();
buildAllTitlePanels();
buildAllGameHeaderPanels();
buildAllCanonPanels();
setState("landing");
if(mobileBreakpoint.matches) stageEl.scrollIntoView({ behavior: "instant", inline: "start", block: "nearest" });
updateSwipeHints();
// La pagina (su mobile, in home) resta invisibile finche' questo
// punto non viene raggiunto - vedi la_traccia_del_tempo.css e il
// piccolo script di sicurezza in testa alla pagina. Stessa tecnica
// adottata su Storie Senza Cornice, per lo stesso bug (sidebar vuota
// mostrata per un attimo prima della home su connessioni lente).
document.body.classList.add("tfs-ready");
// Su desktop, l'intera pagina resta invisibile finche' non sono
// pronti SIA questo avvio SIA i font veri (probabile causa dei
// riposizionamenti che si "auto-correggono" in vista) - document.
// fonts.ready e' una vera API del browser, si risolve solo quando i
// font sono davvero caricati e applicati. Stessa tecnica di Storie
// Senza Cornice/Il Filo Nascosto. Controllo di sicurezza per browser
// che non la supportano (rara, ma meglio non rischiare una pagina
// bloccata invisibile per sempre su quei casi).
if(document.fonts && document.fonts.ready){
  document.fonts.ready.then(() => {
    document.body.classList.add("tfs-desktop-ready");
  });
} else {
  document.body.classList.add("tfs-desktop-ready");
}

// FIX: rimossa resumePersistedMusic - faceva ripartire la musica
// automaticamente su OGNI pagina nuova caricata (se l'interruttore
// era attivo), un comportamento mai voluto: il pulsante serve solo a
// non mettere in pausa la musica quando la scheda va in background o
// si passa a un'ALTRA scheda di un ALTRO sito, non a farla risuonare
// su una pagina diversa dello stesso sito.

// ---------------------------------------------------------
// "Torna all'index" naviga verso index.html: il ritardo prima di
// navigare non e' piu' un numero indovinato ne' parte dal momento del
// click, ma dal momento in cui il suono del tap e' DAVVERO partito
// (via la callback onAvviato di suonaTap, che scatta dopo l'eventuale
// resume() del contesto audio se era sospeso) - cosi' anche nel raro
// caso in cui serva svegliare il contesto, il conto alla rovescia non
// parte in anticipo rispetto al suono vero. Da quel momento, si
// aspetta il MASSIMO tra due valori:
// - la durata esatta del suono (letta dal buffer gia' decodificato),
//   cosi' la pagina non cambia mai prima che il suono sia davvero
//   finito, qualunque sia la sua durata vera;
// - 1 secondo netto (1000ms) fisso, un pavimento minimo cosi' la
//   pagina corrente resta visibile un tempo dignitoso anche se il
//   suono fosse piu' corto.
// Se il buffer non e' ancora pronto (raro), la durata e' null e si
// ricade sul solo pavimento di 1 secondo.
// ---------------------------------------------------------
document.querySelectorAll("a.index-link").forEach(link => {
  link.addEventListener("click", (ev) => {
    ev.preventDefault();
    suonaTap(mobileBreakpoint.matches ? 0.3 : 0.1, (durataSuono) => {
      const attesa = Math.max(1000, durataSuono || 0);
      setTimeout(() => { window.location.href = link.href; }, attesa);
    });
  });
});

// ---------------------------------------------------------
// Popup "Segnala un problema" — stessa funzione identica di
// script-racconti.js/script-storie-teorie.js.
// ---------------------------------------------------------
function initReportModal(){
  const btn = document.getElementById("reportBugBtn");
  const overlay = document.getElementById("reportModalOverlay");
  if(!btn || !overlay) return;
  const closeBtn = document.getElementById("reportModalClose");
  const cancelBtn = document.getElementById("reportCancelBtn");
  const submitBtn = document.getElementById("reportSubmitBtn");
  const descEl = document.getElementById("reportDescription");
  const imageInput = document.getElementById("reportImageInput");
  const imagePreview = document.getElementById("reportImagePreview");
  const fileNameEl = document.getElementById("reportFileName");
  const noteEl = document.getElementById("reportNote");
  let imageBlob = null;

  function resetForm(){
    descEl.value = "";
    imageInput.value = "";
    imageBlob = null;
    imagePreview.src = "";
    imagePreview.classList.remove("visible");
    fileNameEl.textContent = t("reportNoFile");
    descEl.placeholder = t("reportDescPlaceholder");
    noteEl.textContent = "";
    submitBtn.disabled = false;
    submitBtn.textContent = t("reportSend");
  }

  function openModal(){
    resetForm();
    overlay.classList.add("visible");
  }
  function closeModal(){ overlay.classList.remove("visible"); }

  btn.setAttribute("aria-label", t("reportBtnLabel"));
  btn.addEventListener("click", openModal);
  closeBtn.addEventListener("click", closeModal);
  cancelBtn.addEventListener("click", closeModal);
  overlay.addEventListener("click", (e) => { if(e.target === overlay) closeModal(); });

  function compressImage(file){
    return new Promise((resolve, reject) => {
      const img = new Image();
      const url = URL.createObjectURL(file);
      img.onload = () => {
        const maxSide = 1600;
        let { width, height } = img;
        if(width > maxSide || height > maxSide){
          const scale = maxSide / Math.max(width, height);
          width = Math.round(width * scale);
          height = Math.round(height * scale);
        }
        const canvas = document.createElement("canvas");
        canvas.width = width; canvas.height = height;
        canvas.getContext("2d").drawImage(img, 0, 0, width, height);
        canvas.toBlob((blob) => {
          URL.revokeObjectURL(url);
          if(blob) resolve(blob); else reject(new Error("compressione fallita"));
        }, "image/jpeg", 0.82);
      };
      img.onerror = () => { URL.revokeObjectURL(url); reject(new Error("immagine non valida")); };
      img.src = url;
    });
  }

  imageInput.addEventListener("change", async () => {
    const file = imageInput.files[0];
    if(!file) return;
    if(!file.type.startsWith("image/")){
      noteEl.textContent = t("reportSelectImage");
      imageInput.value = "";
      fileNameEl.textContent = t("reportNoFile");
      return;
    }
    fileNameEl.textContent = file.name;
    noteEl.textContent = t("reportProcessingImage");
    try {
      imageBlob = await compressImage(file);
      imagePreview.src = URL.createObjectURL(imageBlob);
      imagePreview.classList.add("visible");
      noteEl.textContent = "";
    } catch(e){
      noteEl.textContent = t("reportInvalidImage");
      imageBlob = null;
    }
  });

  submitBtn.addEventListener("click", async () => {
    const description = descEl.value.trim();
    if(!description){
      noteEl.textContent = t("reportNeedDescription");
      return;
    }
    submitBtn.disabled = true;
    submitBtn.textContent = t("reportSending");
    noteEl.textContent = "";

    const formData = new FormData();
    formData.append("description", description);
    formData.append("page", window.location.pathname);
    formData.append("userAgent", navigator.userAgent);
    if(imageBlob) formData.append("image", imageBlob, "report.jpg");

    try {
      const res = await fetch("https://the-forgotten-shelf.sl-eternal-lux.workers.dev/report-bug", {
        method: "POST",
        body: formData
      });
      if(!res.ok) throw new Error("bad status " + res.status);
      noteEl.textContent = t("reportThanks");
      setTimeout(closeModal, 1200);
    } catch(e){
      noteEl.textContent = t("reportError");
      submitBtn.disabled = false;
      submitBtn.textContent = t("reportSend");
    }
  });
}
initReportModal();

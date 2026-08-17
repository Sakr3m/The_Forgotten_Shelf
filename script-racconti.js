// ============================================================
// RACCONTI — logica di stato e rendering
// ============================================================

// Disattiva il ripristino automatico della posizione di scroll del
// browser al refresh/tasto indietro. Senza questo, su mobile (dove
// il carosello sidebar/stage/side-rail scorre orizzontalmente) il
// browser puo' provare a "ricordare" da solo dove si era arrivati
// con lo scroll orizzontale e ripristinarlo DOPO che il nostro
// scrollCarouselToStage verso la home (vedi fondo file, dopo setState
// ("landing")) ha gia' fatto il suo lavoro - il ripristino nativo del
// browser arriva piu' tardi e vince lui, mostrando l'ultimo pannello
// visitato (es. Racconti Brevi) invece della home al refresh.
if("scrollRestoration" in history){
  history.scrollRestoration = "manual";
}

// Il titolo "Storie Senza Cornice" (.brand-text) e altri elementi
// usano peso 800, che il resto della home non tocca mai (li' il
// titolo e' nascosto) - risultato: il browser scopre di aver bisogno
// del file del font peso 800 solo nell'istante esatto in cui si apre
// una voce, causando un salto di layout visibile (font di riserva ->
// font vero, con metriche diverse) proprio quando il testo diventa
// visibile. Il <link rel="preload"> nell'head aiuta gia' (richiesta
// di rete anticipata), ma qui si forza anche l'intera pipeline di
// caricamento (fetch + decodifica + registrazione) il piu' presto
// possibile via JS, non solo la richiesta di rete: document.fonts.load()
// e' piu' aggressivo di un preload passivo.
if(document.fonts && document.fonts.load){
  document.fonts.load("800 1.32rem Inter").catch(() => {});
}

const STRINGS = {
  it: {
    brand: "Storie Senza Cornice",
    brandMobile: "Storie\nSenza Cornice",
    sidebarEyebrow: "Racconti brevi",
    railLabel: "Libri",
    landingEyebrow: "Benvenuto nell'archivio\ndi libri e racconti brevi",
    landingTitle: "Storie Senza Cornice",
    landingIntro: "Un archivio di storie che non chiedono permesso: racconti brevi pensati per colpire in poche righe, libri a capitoli per chi non vuole più uscirne. Horror psicologico, dark fantasy, elegia e altro ancora, tutto scritto per restarti addosso.",
    landingSub: "Seleziona una voce dalla colonna Racconti brevi o da quella dei Libri per approfondire.",
    landingSubMobile: "Seleziona una voce dalla finestra Racconti brevi o da quella dei Libri per approfondire.",
    landingVideoBtn: "Riproduci video",
    landingVideoNotReady: "Shh... il video sta ancora dormendo. Ripassa più avanti 👀",
    kofiLabel: "Sostienimi su Ko-fi",
    backToIndexLabel: "Torna all'index",
    entryCopyright: "© 2026 Sakrem — Tutti i diritti riservati",
    entryReadTime: "Durata media di lettura: %s min",
    entryReadTimeUnderMin: "Durata media di lettura: meno di 1 min",
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
    brand: "Unframed Stories",
    brandMobile: "Unframed\nStories",
    sidebarEyebrow: "Short Stories",
    railLabel: "Books",
    landingEyebrow: "Welcome to the archive\nof books and short stories",
    landingTitle: "Unframed Stories",
    landingIntro: "An archive of stories that don't ask permission — short stories built to land in a handful of lines, chaptered books for those who don't want to leave. Psychological horror, dark fantasy, elegy, and more, all written to stick with you.",
    landingSub: "Select an entry from the Short Stories column or from the Books column to dive in.",
    landingSubMobile: "Select an entry from the Short Stories screen or from the Books screen to dive in.",
    landingVideoBtn: "Play video",
    landingVideoNotReady: "Shh... the video is still asleep. Check back later 👀",
    kofiLabel: "Support me on Ko-fi",
    backToIndexLabel: "Back to index",
    entryCopyright: "© 2026 Sakrem — All rights reserved",
    entryReadTime: "Estimated reading time: %s min",
    entryReadTimeUnderMin: "Estimated reading time: under 1 min",
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
  view: "landing",   // landing | entry
  column: null,      // teorie | storie
  entryId: null,
  mobileTable: "teorie", // teorie | storie - quale lista popola la
    // tabella unica mobile (vedi setMobileTable). Non riguarda
    // desktop, dove le due tabelle restano entrambe visibili sempre.
  textSizeIndex: 0, // 0=X1, 1=X1.5, 2=X2 - vedi TEXT_SIZES e
    // cycleTextSize. Persistito in localStorage (TEXT_SIZE_KEY).
  musicOn: false,    // parte sempre muto: va scelta una playlist dal popup
  playlist: null,    // { label:{it,en}, tracks:[...] } scelta dal popup del volume
  trackIndex: 0
};

const el = {
  body: document.body,
  reportBugBtn: document.getElementById("reportBugBtn"),
  brandBtn: document.getElementById("brandBtn"),
  brand: document.querySelector(".brand"),
  socialLinks: document.querySelector(".social-links"),
  stageControls: document.querySelector(".stage-controls"),
  langSwitch: document.getElementById("langSwitch"),
  mobileTableToggle: document.getElementById("mobileTableToggle"),
  landingVideoBtn: document.getElementById("landingVideoBtn"),
  textSizeToggle: document.getElementById("textSizeToggle"),
  textSizeLabel: document.getElementById("textSizeLabel"),
  panelToggle: document.getElementById("panelToggle"),
  teorieList: document.getElementById("teorieList"),
  storieList: document.getElementById("storieList"),
  columnLockTeorie: document.getElementById("columnLockTeorie"),
  columnLockStorie: document.getElementById("columnLockStorie"),
  landingPanel: document.getElementById("landingPanel"),
  entryPanel: document.getElementById("entryPanel"),
  entryContent: document.getElementById("entryContent"),
  pageHeaderBanner: document.getElementById("pageHeaderBanner"),
  entryWatermark: document.getElementById("entryWatermark"),
  bgMusic: document.getElementById("bgMusic"),
  trackInfo: document.getElementById("trackInfo"),
  trackTitle: document.getElementById("trackTitle"),
  trackGame: document.getElementById("trackGame"),
  trackSkipBtn: document.getElementById("trackSkipBtn"),
  trackPersistBtn: document.getElementById("trackPersistBtn"),
  trackProgressFill: document.getElementById("trackProgressFill"),
  volumeSlider: document.getElementById("volumeSlider"),
  musicToggle: document.getElementById("musicToggle"),
  playlistMenu: document.getElementById("playlistMenu"),
  entryGamePicker: document.getElementById("entryGamePicker"),
  entryGameTrigger: document.getElementById("entryGameTrigger"),
  entryGameTriggerLabel: document.getElementById("entryGameTriggerLabel"),
  entryGameMenu: document.getElementById("entryGameMenu"),
  musicControl: document.getElementById("musicControl"),
  watermarkBrightness: document.getElementById("watermarkBrightness"),
  watermarkBrightnessSlider: document.getElementById("watermarkBrightnessSlider"),
  watermarkPresets: document.getElementById("watermarkPresets"),
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
// qualunque render iniziale. Scritti a ogni modifica (vedi piu'
// sotto), cosi' restano coerenti passando da una pagina all'altra.
// ---------------------------------------------------------
const MUSIC_ON_KEY = "tfs-music-on";
const VOLUME_KEY = "tfs-volume";
const LANG_KEY = "tfs-lang";
const PANELS_HOVER_KEY = "tfs-panels-hover";
const TEXT_SIZE_KEY = "tfs-text-size";
const storedMusicOn = localStorage.getItem(MUSIC_ON_KEY);
if(storedMusicOn !== null) state.musicOn = storedMusicOn === "true";
const storedVolume = localStorage.getItem(VOLUME_KEY);
if(storedVolume !== null) el.volumeSlider.value = storedVolume;
const storedLang = localStorage.getItem(LANG_KEY);
if(storedLang === "it" || storedLang === "en") state.lang = storedLang;
const storedTextSize = parseInt(localStorage.getItem(TEXT_SIZE_KEY), 10);
if(storedTextSize === 0 || storedTextSize === 1 || storedTextSize === 2) state.textSizeIndex = storedTextSize;
// Applicato subito, non dopo, cosi' la pagina non mostra per un
// istante lo stato sbagliato (tabelle aperte) prima di passare a
// quello salvato (a comparsa) un attimo dopo.
if(localStorage.getItem(PANELS_HOVER_KEY) === "true"){
  document.body.dataset.panels = "hover";
  el.panelToggle.setAttribute("aria-pressed", "true");
}

// "Gradiometro" — moltiplicatore di luminosità per le filigrane.
// Prima era un'unica chiave condivisa con la_traccia_del_tempo.html (stesso
// valore per tutte le voci). Poi (04/08) diventata per-voce. Ora,
// ulteriore livello: 3 preset (1/2/3), pensati per schermi diversi
// con luminosità diversa — ogni preset e' un salvataggio indipendente
// PER VOCE (es. "1" su Cinere puo' valere 0.45 e "1" su L'Ultimo
// Piano puo' valere 0.5). Il preset attivo e' globale (rappresenta
// "che schermo stai usando ora"), ricordato tra le voci e tra i
// caricamenti di pagina; cambiare voce non lo tocca, cambiare
// preset sì. Scala 0-1 (0=buio totale, 1=opacita' piena) con curva
// a due fasi (vedi applyWatermarkVisual).
const WATERMARK_BRIGHTNESS_KEY_PREFIX = "tfs-watermark-brightness:";
const WATERMARK_ACTIVE_SLOT_KEY = "tfs-watermark-active-slot";
let watermarkBrightness = 1;
let currentWatermarkBaseOpacity = null;
let currentWatermarkEntryKey = null;
let activeWatermarkSlot = localStorage.getItem(WATERMARK_ACTIVE_SLOT_KEY) || "1";
let resumedPersistedTrack = false; // vedi blocco ascolto persistente
  // piu' sotto - dichiarata qui perche' letta gia' da updateMusicPlayback,
  // molto prima di dove la logica vera e propria e' definita

function watermarkBrightnessKeyFor(entry){
  return WATERMARK_BRIGHTNESS_KEY_PREFIX + (entry && entry.game ? entry.game : "default") + ":" + activeWatermarkSlot;
}

// Curva a due fasi per lo slider 0-1: prima meta' (0-0.5) controlla
// l'opacita' da 0 a 1; seconda meta' (0.5-1) tiene l'opacita' ferma
// a 1 e fa salire filter:brightness() da 1 (normale) fino al tetto
// WATERMARK_BRIGHTNESS_MAX (2 = doppia luminosita'), perche' CSS
// opacity da sola non puo' andare oltre 1.
const WATERMARK_BRIGHTNESS_MAX = 2;
function applyWatermarkVisual(value){
  if(value <= 0.5){
    el.entryWatermark.style.opacity = value * 2;
    el.entryWatermark.style.filter = "";
  } else {
    el.entryWatermark.style.opacity = 1;
    const extra = (value - 0.5) * 2; // 0..1 nella seconda meta'
    const brightness = 1 + extra * (WATERMARK_BRIGHTNESS_MAX - 1);
    el.entryWatermark.style.filter = `brightness(${brightness})`;
  }
}

function updateWatermarkPresetButtons(){
  if(!el.watermarkPresets) return;
  el.watermarkPresets.querySelectorAll(".watermark-brightness-line__preset").forEach(btn => {
    btn.classList.toggle("is-active", btn.dataset.preset === activeWatermarkSlot);
  });
}

// Ricarica il valore salvato (preset attivo) per la voce corrente e
// lo applica: usata sia al cambio voce sia al cambio preset, cosi'
// la logica resta in un unico posto.
let currentRenderedEntry = null;
function loadWatermarkForCurrentEntry(){
  if(!currentRenderedEntry || !currentRenderedEntry.filigrana){
    if(el.entryWatermark){ el.entryWatermark.style.opacity = ""; el.entryWatermark.style.filter = ""; }
    return;
  }
  currentWatermarkEntryKey = watermarkBrightnessKeyFor(currentRenderedEntry);
  const stored = localStorage.getItem(currentWatermarkEntryKey);
  watermarkBrightness = stored !== null ? parseFloat(stored) : 0.5;
  if(el.watermarkBrightnessSlider) el.watermarkBrightnessSlider.value = String(watermarkBrightness);
  applyWatermarkVisual(watermarkBrightness);
  updateWatermarkPresetButtons();
}

// On mobile, the entry view puts the game picker and the music control
// in a row above the text (tendina left, volume right) instead of their
// normal spots (header / top bar). Neither is a descendant of #entryPanel
// in the markup, so they're physically moved there for that one case and
// moved back everywhere else — desktop's own layout/CSS is never touched.
const mobileEntryRowHomes = {
  gamePicker: { parent: el.entryGamePicker ? el.entryGamePicker.parentNode : null, next: el.entryGamePicker ? el.entryGamePicker.nextSibling : null },
  musicControl: { parent: el.musicControl ? el.musicControl.parentNode : null, next: el.musicControl ? el.musicControl.nextSibling : null }
};
function positionMobileEntryRow(){
  const picker = el.entryGamePicker, mc = el.musicControl, panel = el.entryPanel;
  if(!picker || !mc || !panel) return;
  const isMobileEntry = window.matchMedia("(max-width:900px)").matches && state.view === "entry";
  if(isMobileEntry){
    panel.insertBefore(picker, panel.firstChild);
    panel.insertBefore(mc, panel.firstChild);
  } else {
    const gp = mobileEntryRowHomes.gamePicker;
    const mcHome = mobileEntryRowHomes.musicControl;
    if(gp.parent && picker.parentNode !== gp.parent) gp.parent.insertBefore(picker, gp.next);
    if(mcHome.parent && mc.parentNode !== mcHome.parent) mcHome.parent.insertBefore(mc, mcHome.next);
  }
}
window.addEventListener("resize", () => {
  positionMobileEntryRow();
  if(state.view === "entry") renderEntry();
});

function t(key){ return STRINGS[state.lang][key]; }

function heartIcon(){
  return `<svg viewBox="0 0 20 18" class="title-like__icon" aria-hidden="true">
    <path d="M10 17C10 17 1.5 12.1 1.5 6.2C1.5 3.3 3.7 1.2 6.4 1.2C8 1.2 9.3 1.9 10 3.1C10.7 1.9 12 1.2 13.6 1.2C16.3 1.2 18.5 3.3 18.5 6.2C18.5 12.1 10 17 10 17Z"
      stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" fill="none"/>
  </svg>`;
}

// Cuoricino "mi piace", sempre in fondo al contenuto. Toglie sempre
// un vecchio cuore eventualmente gia' presente nello stesso
// contenitore prima di aggiungerne uno nuovo (nessun doppione
// cambiando voce).
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
  if(ForgottenShelfLikes.hasLiked(workId)){
    widget.classList.add("is-liked");
    likeBtn.disabled = true;
  }
  ForgottenShelfLikes.getTotal(workId).then(total => { countEl.textContent = total; });
  likeBtn.addEventListener("click", () => {
    const result = ForgottenShelfLikes.like(workId);
    if(result.ok){
      widget.classList.add("is-liked");
      likeBtn.disabled = true;
      const current = parseInt(countEl.textContent, 10) || 0;
      countEl.textContent = current + 1;
    }
  });
}
function tf(field){ return field ? (field[state.lang] || field.en || field.it || "") : ""; }

// Tempo di lettura stimato: 200 parole al minuto (standard editoriale
// comune), calcolato dal testo vero dell'opera nella lingua attuale -
// dinamico, si aggiorna da solo se il testo cambia in futuro, non
// serve ricalcolare a mano ogni volta.
const WORDS_PER_MINUTE = 200;
function estimateReadingTime(entry){
  const text = tf(entry.body);
  if(!text) return "";
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.round(words / WORDS_PER_MINUTE);
  if(minutes < 1) return t("entryReadTimeUnderMin");
  return t("entryReadTime").replace("%s", minutes);
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
// Colonne Teorie / Storie Nascoste
// ---------------------------------------------------------
// Pulsante lucchetto per voce: compare solo in hover/focus su quella
// riga precisa (CSS, non JS - vedi racconti.css), contorno colorato
// con l'accento della voce corrispondente (ereditato dal li tramite
// --item-accent). Spento di default: per ora non cambia alcun
// comportamento, la funzione vera arriva in seguito - qui c'e' solo
// il toggle visivo (aria-pressed) pronto per quando servira'.
// Elemento fratello dell'anchor, non annidato al suo interno, per
// evitare due elementi interattivi uno dentro l'altro (non valido).
const LOCK_KEY_PREFIX = "tfs-lock-"; // + id della voce, es. "tfs-lock-cinere"
function creaLucchetto(id){
  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = "row-lock";
  const acceso = localStorage.getItem(LOCK_KEY_PREFIX + id) === "true";
  btn.setAttribute("aria-pressed", acceso ? "true" : "false");
  btn.setAttribute("aria-label", "Blocca/sblocca l'animazione di apertura per questa voce");
  btn.innerHTML = `<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4.5 7V5a3.5 3.5 0 0 1 7 0v2" stroke="currentColor" stroke-width="1.3" fill="none" stroke-linecap="round"/><rect x="3" y="7" width="10" height="7" rx="1.5" stroke="currentColor" stroke-width="1.3" fill="none"/></svg>`;
  btn.addEventListener("click", (ev) => {
    ev.preventDefault();
    ev.stopPropagation();
    const accesoOra = btn.getAttribute("aria-pressed") === "true";
    const nuovoStato = !accesoOra;
    btn.setAttribute("aria-pressed", nuovoStato ? "true" : "false");
    localStorage.setItem(LOCK_KEY_PREFIX + id, nuovoStato ? "true" : "false");
    // Un click col mouse lascia il fuoco (focus) sul pulsante, che lo
    // terrebbe visibile anche dopo aver allontanato il mouse grazie a
    // :focus-within (necessario invece per chi naviga da tastiera).
    // event.detail e' 0 solo per un'attivazione da tastiera (Invio/
    // Spazio su un elemento gia' focalizzato), quindi qui si toglie
    // il fuoco solo per i click veri col mouse - l'accessibilita' da
    // tastiera resta intatta.
    if(ev.detail !== 0) btn.blur();
  });
  return btn;
}
function renderLists(){
  // L'evidenziazione va confrontata sul campo "game" (condiviso da
  // tutti i capitoli di una stessa opera), non sull'id esatto:
  // altrimenti aprendo un capitolo diverso dal primo tramite la
  // tendina (es. l-ora-sbagliata-2), nessuna voce della sidebar
  // risulta piu' selezionata, dato che li' e' elencato solo il primo
  // capitolo (l-ora-sbagliata).
  const currentGame = state.entryId ? (currentEntry() || {}).game : null;

  el.teorieList.innerHTML = "";
  RACCONTI_ORDER.forEach(id => {
    const item = RACCONTI[id];
    const li = document.createElement("li");
    li.className = "game-list__row";
    li.style.setProperty("--item-accent", item.accentColor || "#6b7280");
    const btn = document.createElement("a");
    btn.href = `voci/storie-senza-cornice/${id}.html`;
    btn.textContent = tf(item.gameLabel);
    btn.classList.toggle("is-active", state.column === "teorie" && currentGame != null && item.game === currentGame);
    btn.addEventListener("click", (ev) => { ev.preventDefault(); selectEntry("teorie", id); });
    li.appendChild(btn);
    li.appendChild(creaLucchetto(item.game));
    el.teorieList.appendChild(li);
  });

  el.storieList.innerHTML = "";
  LIBRI_ORDER.forEach(id => {
    const item = LIBRI[id];
    const li = document.createElement("li");
    li.className = "game-list__row";
    li.style.setProperty("--item-accent", item.accentColor || "#6b7280");
    const btn = document.createElement("a");
    btn.href = `voci/storie-senza-cornice/${id}.html`;
    btn.textContent = tf(item.gameLabel);
    btn.classList.toggle("is-active", state.column === "storie" && currentGame != null && item.game === currentGame);
    btn.addEventListener("click", (ev) => { ev.preventDefault(); selectEntry("storie", id); });
    li.appendChild(btn);
    li.appendChild(creaLucchetto(item.game));
    el.storieList.appendChild(li);
  });

  aggiornaLucchettoColonna(el.columnLockTeorie, RACCONTI_ORDER, RACCONTI);
  aggiornaLucchettoColonna(el.columnLockStorie, LIBRI_ORDER, LIBRI);
}

// Lucchetto "master" per colonna: acceso (tutte bloccate) solo se
// OGNI opera della colonna ha il proprio lucchetto acceso - basta
// una sola voce sbloccata perche' il master risulti spento. Ogni
// voce nell'ORDER corrisponde gia' a un'opera diversa (item.game),
// nessun duplicato da filtrare.
function aggiornaLucchettoColonna(btn, order, data){
  if(!btn) return;
  const tutteBloccate = order.every(id => localStorage.getItem(LOCK_KEY_PREFIX + data[id].game) === "true");
  btn.setAttribute("aria-pressed", tutteBloccate ? "true" : "false");
}

// Click sul lucchetto master: non e' un semplice toggle del proprio
// stato, impone lo STESSO stato a tutte le opere della colonna (le
// voci gia' nello stato giusto non cambiano nulla, si riscrive lo
// stesso valore che avevano gia'). Poi si richiama renderLists() per
// aggiornare subito anche i lucchetti delle singole voci in lista.
function collegaLucchettoColonna(btn, order, data){
  if(!btn) return;
  btn.addEventListener("click", (ev) => {
    ev.preventDefault();
    const nuovoStato = btn.getAttribute("aria-pressed") !== "true";
    order.forEach(id => {
      localStorage.setItem(LOCK_KEY_PREFIX + data[id].game, nuovoStato ? "true" : "false");
    });
    renderLists();
    if(ev.detail !== 0) btn.blur();
  });
}
collegaLucchettoColonna(el.columnLockTeorie, RACCONTI_ORDER, RACCONTI);
collegaLucchettoColonna(el.columnLockStorie, LIBRI_ORDER, LIBRI);

function currentEntry(){
  if(!state.entryId) return null;
  const table = state.column === "teorie" ? RACCONTI : LIBRI;
  return table[state.entryId] || null;
}

// ---------------------------------------------------------
// Pannelli voce SEMPRE presenti nel DOM (nascosti finche' non
// selezionati), invece di scrivere il testo solo al click.
// Stesso pattern gia' in uso su diari_di_gioco.html: contenuto
// reale gia' nell'HTML dietro un'interazione vera (tab/accordion),
// non iniettato al volo - Google lo legge comunque, un click
// normale lo mostra all'utente. Costruiti una sola volta al boot,
// il click si limita a mostrare/nascondere invece di riscrivere.
// ---------------------------------------------------------
const entryPanels = {}; // "teorie:cinere" -> { panel, textWrap, entry }

function panelKey(column, id){ return `${column}:${id}`; }

function updatePanelText(key){
  const rec = entryPanels[key];
  if(!rec) return;
  const entry = rec.entry;
  rec.textWrap.innerHTML = `
    <p class="entry-copyright">${t("entryCopyright")}</p>
    <h1 class="entry-title">${tf(entry.title)}</h1>
    <p class="entry-readtime">${estimateReadingTime(entry)}</p>
    ${entry.tag ? `<p class="entry-tag">${tf(entry.tag)}</p>` : ""}
    <div class="entry-body"><span class="text-highlight">${tf(entry.body)}</span></div>
  `;
  // l'etichetta del cuoricino ("Lascia un like"/"Leave a like") va
  // ricostruita anche lei al cambio lingua, appendLikeWidget rimuove
  // da solo quello vecchio prima di aggiungerne uno nuovo, quindi e'
  // sicuro richiamarla di nuovo qui. Aggiunta DENTRO .entry-body (non
  // piu' su rec.panel, il pannello intero): su Storie Senza Cornice
  // .entry-body e' ora l'unica area scorrevole della voce (titolo/tag/
  // copyright restano fermi) - se il like resta fuori da li' finisce
  // tagliato sotto il bordo bloccato della pagina, mai raggiungibile.
  // Dentro .entry-body invece scorre insieme al testo, come dovrebbe.
  const bodyEl = rec.textWrap.querySelector(".entry-body");
  appendLikeWidget(bodyEl || rec.panel, rec.id);
}

function updateAllPanelsText(){
  Object.keys(entryPanels).forEach(updatePanelText);
}

function buildEntryPanelContent(column, id, entry){
  const panel = document.createElement("div");
  panel.className = "entry-content-item";
  panel.id = `entryItem-${column}-${id}`;
  panel.hidden = true;
  const textWrap = document.createElement("div");
  textWrap.className = "entry-content-text";
  panel.appendChild(textWrap);
  el.entryContent.appendChild(panel);
  entryPanels[panelKey(column, id)] = { panel, textWrap, entry, id };
  updatePanelText(panelKey(column, id));
}

function buildAllEntryPanels(){
  // Object.keys, non gli *_ORDER: un capitolo puo' esistere nei dati
  // senza comparire come voce a se' nella sidebar (es. "Il Chiamato",
  // dove solo il capitolo 1 e' elencato ma capitolo 2/3/4 restano
  // raggiungibili dalla tendina in alto - vedi getEntriesForGame).
  Object.keys(RACCONTI).forEach(id => buildEntryPanelContent("teorie", id, RACCONTI[id]));
  Object.keys(LIBRI).forEach(id => buildEntryPanelContent("storie", id, LIBRI[id]));
}

// Legge lo stato salvato del lucchetto per la voce che si sta per
// aprire e attiva/disattiva la sequenza di comparsa (vedi le regole
// body[data-entry-animate="true"] in racconti.css). LOGICA: lucchetto
// SPENTO (default, il caso normale finche' l'utente non lo accende
// per quella voce) = l'animazione si vede; lucchetto ACCESO = niente
// animazione, la voce carica diretta com'era prima di questa feature.
// Il removeAttribute + reflow forzato (void ...offsetWidth) prima di
// riaggiungere l'attributo serve a far ripartire l'animazione da capo
// anche passando da una voce animata a un'altra voce anch'essa
// animata - senza, il browser non noterebbe alcun cambiamento (stesso
// valore dell'attributo di prima) e le regole non si riattiverebbero.
function applicaAnimazioneVoce(entry){
  // Su mobile niente lucchetto, quindi niente animazione: le voci
  // caricano sempre dirette, a prescindere da qualunque stato salvato
  // in precedenza (es. da una sessione desktop sullo stesso browser).
  if(mobileBreakpoint.matches){
    document.body.removeAttribute("data-entry-animate");
    return;
  }
  const acceso = localStorage.getItem(LOCK_KEY_PREFIX + entry.game) === "true";
  document.body.removeAttribute("data-entry-animate");
  if(!acceso){
    void document.body.offsetWidth;
    document.body.setAttribute("data-entry-animate", "true");
  }
}
function renderEntry(){
  const entry = currentEntry();
  if(!entry){
    Object.values(entryPanels).forEach(rec => { rec.panel.hidden = true; });
    return;
  }

  applicaAnimazioneVoce(entry);

  el.body.style.setProperty("--item-accent", entry.accentColor || "#6b7280");
  const isMobile = window.matchMedia("(max-width:900px)").matches;
  const bannerUrl = (isMobile && entry.mobileBanner) ? entry.mobileBanner : entry.banner;
  el.pageHeaderBanner.style.backgroundImage = bannerUrl ? `url('${bannerUrl}')` : "";
  el.pageHeaderBanner.style.backgroundPosition = entry.bannerPosition || "";
  el.entryWatermark.style.backgroundImage = entry.filigrana ? `url('${entry.filigrana}')` : "";
  currentWatermarkBaseOpacity = entry.filigranaOpacity != null ? entry.filigranaOpacity : 0.35;
  currentRenderedEntry = entry;
  loadWatermarkForCurrentEntry();
  el.watermarkBrightness.hidden = !entry.filigrana;
  el.entryWatermark.style.backgroundPosition = entry.filigranaPosition || "";
  const fadeLayers = ["linear-gradient(90deg, transparent, black 35%)"];
  // Sfumatura sotto RIMOSSA (04/08): l'immagine ora e' ancorata al
  // fondo del box (background-position:center bottom in racconti.css)
  // e il box stesso tocca gia' il bordo pagina, quindi non serve piu'
  // una maschera artificiale per "far sparire" la parte inferiore.
  // Resta solo la sfumatura sinistra qui sotto. I campi
  // filigranaBottomFade/filigranaBottomLevel restano nei dati (non
  // rimossi entry per entry) ma non hanno piu' alcun effetto.
  if(entry.filigranaLeftFade){
    // Seconda sfumatura orizzontale, più ampia e a un ritmo diverso
    // da quella di sempre: la scomparsa a sinistra risulta più
    // graduale e meno uniforme di un singolo taglio netto.
    // Livello personalizzabile per singola voce (04/08), stesso
    // criterio della sfumatura sotto: prima era un valore unico
    // condiviso da tutte (12/60 -> alleggerito a 8/42), ora ogni
    // voce puo' avere i suoi due estremi tramite filigranaLeftStart
    // (dove finisce la trasparenza piena) e filigranaLeftEnd (dove
    // inizia il nero/opaco pieno). Default 8/42, invariato per tutte
    // le voci finche' non specificato.
    const leftStart = entry.filigranaLeftStart != null ? entry.filigranaLeftStart : 10;
    const leftEnd = entry.filigranaLeftEnd != null ? entry.filigranaLeftEnd : 30;
    fadeLayers.push(`linear-gradient(90deg, transparent ${leftStart}%, black ${leftEnd}%)`);
  }
  if(fadeLayers.length > 1){
    const fadeMask = fadeLayers.join(", ");
    el.entryWatermark.style.webkitMaskImage = fadeMask;
    el.entryWatermark.style.maskImage = fadeMask;
    el.entryWatermark.style.maskComposite = "intersect";
  } else {
    el.entryWatermark.style.webkitMaskImage = "";
    el.entryWatermark.style.maskImage = "";
    el.entryWatermark.style.maskComposite = "";
  }
  el.body.style.setProperty("--banner-x-offset", (entry.bannerOffset != null ? entry.bannerOffset : 125) + "px");

  // mostra solo il pannello della voce corrente, nasconde tutti gli altri
  const activeKey = panelKey(state.column, state.entryId);
  Object.entries(entryPanels).forEach(([key, rec]) => {
    rec.panel.hidden = key !== activeKey;
  });
  const activeRec = entryPanels[activeKey];

  // riavvia l'animazione d'ingresso
  if(activeRec){
    activeRec.panel.style.animation = "none";
    void activeRec.panel.offsetWidth;
    activeRec.panel.style.animation = "";
  }

  renderGamePicker(entry);
}

// ---------------------------------------------------------
// Menu a tendina con le altre teorie/storie dello stesso gioco
// (per ora una sola voce per gioco, pronto per quando ce ne
// saranno di più).
// ---------------------------------------------------------
function getEntriesForGame(gameId){
  const list = [];
  // Scansiona le chiavi delle tabelle (non i *_ORDER): un capitolo
  // può esistere nei dati senza comparire come voce a sé nella
  // sidebar (es. "Il Chiamato", dove solo il capitolo 1 è elencato
  // ma capitolo 2/3/4 restano raggiungibili dalla tendina).
  Object.keys(RACCONTI).forEach(id => {
    if(RACCONTI[id].game === gameId) list.push({ column: "teorie", id, title: RACCONTI[id].dropdownLabel || RACCONTI[id].title });
  });
  Object.keys(LIBRI).forEach(id => {
    if(LIBRI[id].game === gameId) list.push({ column: "storie", id, title: LIBRI[id].dropdownLabel || LIBRI[id].title });
  });
  return list;
}

function renderGamePicker(entry){
  const related = getEntriesForGame(entry.game);

  // La tendina ha senso solo se ci sono altre voci collegate allo
  // stesso "game" (es. più capitoli di uno stesso racconto/libro);
  // per una voce isolata come "Cinere" resta nascosta. Una voce può
  // forzarne comunque la comparsa (entry.forceGamePicker) anche da
  // sola, in previsione di futuri capitoli collegati (es. "L'Ora
  // Sbagliata", pensata come "versione 1.0" di più varianti).
  const showPicker = related.length > 1 || entry.forceGamePicker;
  el.entryGamePicker.classList.toggle("is-single-entry", !showPicker);
  if(!showPicker) return;

  el.entryGameTriggerLabel.textContent = tf(entry.gameLabel);

  el.entryGameMenu.innerHTML = "";
  related.forEach(item => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.type = "button";
    btn.setAttribute("role", "option");
    btn.classList.toggle("is-active", item.column === state.column && item.id === state.entryId);
    btn.textContent = tf(item.title);
    btn.addEventListener("click", () => {
      closeGameMenu();
      selectEntry(item.column, item.id);
    });
    li.appendChild(btn);
    el.entryGameMenu.appendChild(li);
  });

  // Voce finale non cliccabile ("in arrivo"/"coming soon"), per
  // capitoli futuri non ancora pubblicati collegati allo stesso
  // "game" (es. "Il Chiamato").
  if(entry.comingSoon){
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.className = "entry-game-menu__coming-soon";
    span.textContent = tf(entry.comingSoon);
    li.appendChild(span);
    el.entryGameMenu.appendChild(li);
  }
}

function openGameMenu(){
  const rect = el.entryGameTrigger.getBoundingClientRect();
  el.entryGameMenu.style.top = (rect.bottom + 8).toFixed(2) + "px";
  el.entryGameMenu.style.right = (document.documentElement.clientWidth - rect.right).toFixed(2) + "px";
  el.entryGameMenu.hidden = false;
  el.entryGamePicker.classList.add("is-open");
  el.entryGameTrigger.setAttribute("aria-expanded", "true");
}
function closeGameMenu(){
  el.entryGameMenu.hidden = true;
  el.entryGamePicker.classList.remove("is-open");
  el.entryGameTrigger.setAttribute("aria-expanded", "false");
}
window.addEventListener("scroll", () => { if(!el.entryGameMenu.hidden) closeGameMenu(); }, true);
el.entryGameTrigger.addEventListener("click", () => {
  el.entryGameMenu.hidden ? openGameMenu() : closeGameMenu();
});
document.addEventListener("click", (ev) => {
  if(!el.entryGamePicker.contains(ev.target)) closeGameMenu();
});

// ---------------------------------------------------------
// Transizioni di stato
// ---------------------------------------------------------
function setState(view){
  state.view = view;
  el.body.dataset.state = view;
  if(view === "landing"){
    state.column = null; state.entryId = null;
    state.musicOn = false; state.playlist = null; state.trackIndex = 0;
    closePlaylistMenu();
    el.body.style.removeProperty("--item-accent");
    el.body.style.setProperty("--cyan", "#ffffff");
    // Bug: la filigrana veniva impostata all'apertura di una voce ma
    // mai ripulita tornando alla home — restava visibile li' sopra
    // (l'elemento e' sempre display:block su desktop, position:fixed,
    // solo il background-image la rende visibile o meno).
    if(el.entryWatermark) el.entryWatermark.style.backgroundImage = "";
    // Stesso identico bug, sul pannello di controllo della luminosita'
    // (le tre preimpostazioni + il cursore): mostrato all'apertura di
    // una voce con filigrana (riga piu' sotto, entro renderEntry),
    // mai nascosto di nuovo tornando alla home.
    if(el.watermarkBrightness) el.watermarkBrightness.hidden = true;
    // Ko-fi/Discord tornano al loro posto originale (dentro
    // .stage-controls, prima di tutto il resto) - li' dove stavano
    // prima di essere spostati dentro .brand per la vista voce.
    // Solo desktop: su mobile .social-links non viene mai spostato
    // (ha gia' un suo trattamento apposito, diverso, in vista voce).
    if(!mobileBreakpoint.matches && el.stageControls && el.socialLinks && el.socialLinks.parentElement !== el.stageControls){
      el.stageControls.insertBefore(el.socialLinks, el.stageControls.firstChild);
    }
  } else {
    el.body.style.removeProperty("--cyan");
    // Solo desktop, solo vista voce: la tazzina (icona Ko-fi dentro
    // .brand) lascia il posto ai pulsanti veri di Ko-fi e Discord -
    // spostati fisicamente dentro .brand (prima della scritta), dato
    // che vivono in un contenitore diverso (.stage-controls) e un
    // semplice riordino CSS non basterebbe a farli comparire li'.
    // Su mobile .social-links resta dov'e' (trattamento diverso,
    // gia' costruito a parte per quella vista).
    if(!mobileBreakpoint.matches && el.brand && el.socialLinks && el.brandBtn && el.socialLinks.parentElement !== el.brand){
      el.brand.insertBefore(el.socialLinks, el.brandBtn);
    }
  }

  el.landingPanel.hidden = view !== "landing";
  el.entryPanel.hidden = view !== "entry";

  renderLists();
  if(view === "entry") renderEntry();
  updateMusicPlayback();
  positionMobileEntryRow();
}

function selectEntry(column, id){
  resumedPersistedTrack = false; // scelta esplicita di una voce: la
    // traccia ripresa da un'altra pagina lascia il posto alla scaletta
    // normale di questa
  state.column = column;
  state.entryId = id;
  setMobileTable(column); // il toggle mobile resta coerente con la
    // voce aperta, qualunque sia il modo in cui e' stata scelta -
    // cosi' se si torna alla home e poi alla tabella, si ritrova la
    // lista giusta. Inerte su desktop (l'attributo che imposta non
    // tocca nessuna regola CSS li').
  setState("entry");
  closeMobileSidebar();
  closeRailDrawer();
  // Torna in cima ad ogni nuova voce, invece di restare dov'era
  // scorsa la voce precedente: window.scrollTo per desktop, .stage
  // per mobile (il vero contenitore che scorre li', non la finestra).
  window.scrollTo(0, 0);
  const stage = document.querySelector(".stage");
  if(stage) stage.scrollTop = 0;
}

// ---------------------------------------------------------
// Musica di sottofondo — playlist globale, indipendente dalla
// singola voce. Parte sempre muta: il pulsante apre un popup con
// tutte le playlist disponibili (Saghe da Timeline, Titoli
// videoludici da Storie & Teorie), raggruppate per provenienza.
// Una volta scelta, la musica prosegue cambiando voce fra Racconti
// brevi e Libri; si ferma solo tornando alla home o rispegnendo il
// pulsante — e in quel caso va riscelta da capo. Non autoparte mai
// con l'audio: i browser bloccherebbero comunque l'autoplay con
// suono, e il click del pulsante/popup è di per sé un gesto utente.
// ---------------------------------------------------------
function buildPlaylistLibrary(){
  const groups = [];

  const saghe = [];
  if(typeof GAME_ORDER !== "undefined" && typeof GAMES !== "undefined"){
    GAME_ORDER.forEach(id => {
      const g = GAMES[id];
      if(g && g.tracks && g.tracks.length) saghe.push({ label: g.listTitle || g.title, tracks: g.tracks });
    });
  }
  if(saghe.length) groups.push({ label: { it: "Saghe", en: "Sagas" }, items: saghe });

  const titoli = [];
  const seen = new Set();
  const collectFrom = (order, table) => {
    if(typeof order === "undefined" || typeof table === "undefined") return;
    order.forEach(id => {
      const it = table[id];
      if(!it || !it.tracks || !it.tracks.length) return;
      const key = it.game || id;
      if(seen.has(key)) return;
      seen.add(key);
      titoli.push({ label: it.gameLabel, tracks: it.tracks });
    });
  };
  collectFrom(typeof TEORIE_ORDER !== "undefined" ? TEORIE_ORDER : undefined, typeof TEORIE !== "undefined" ? TEORIE : undefined);
  collectFrom(typeof STORIE_ORDER !== "undefined" ? STORIE_ORDER : undefined, typeof STORIE !== "undefined" ? STORIE : undefined);
  // Diari di Gioco (recensioni Final Fantasy VII/VIII/IX): dati in
  // data-diari-tracks.js, con lo stesso slug "game" usato sopra per
  // Il Filo Nascosto, cosi' un titolo gia' presente (es. Final
  // Fantasy VIII, stessa playlist condivisa) non viene duplicato.
  if(typeof DIARI_TRACKS !== "undefined"){
    DIARI_TRACKS.forEach(entry => {
      const key = entry.game || entry.label.it;
      if(seen.has(key)) return;
      seen.add(key);
      titoli.push(entry);
    });
  }
  if(titoli.length) groups.push({ label: { it: "Titoli videoludici", en: "Video Game Titles" }, items: titoli });

  return groups;
}

function renderPlaylistMenu(){
  el.playlistMenu.innerHTML = "";
  buildPlaylistLibrary().forEach(group => {
    const groupLabel = document.createElement("li");
    groupLabel.className = "playlist-menu__group-label";
    groupLabel.textContent = tf(group.label);
    el.playlistMenu.appendChild(groupLabel);

    group.items.forEach(item => {
      const li = document.createElement("li");
      const btn = document.createElement("button");
      btn.type = "button";
      btn.setAttribute("role", "option");
      btn.textContent = tf(item.label);
      btn.addEventListener("click", () => choosePlaylist(item));
      li.appendChild(btn);
      el.playlistMenu.appendChild(li);
    });
  });
}

function openPlaylistMenu(){
  renderPlaylistMenu();
  const rect = el.musicToggle.getBoundingClientRect();
  el.playlistMenu.style.top = (rect.bottom + 8).toFixed(2) + "px";
  el.playlistMenu.style.right = (document.documentElement.clientWidth - rect.right).toFixed(2) + "px";
  el.playlistMenu.hidden = false;
  el.musicToggle.setAttribute("aria-expanded", "true");
}
function closePlaylistMenu(){
  if(!el.playlistMenu) return;
  el.playlistMenu.hidden = true;
  el.musicToggle.setAttribute("aria-expanded", "false");
}
window.addEventListener("scroll", (ev) => {
  // "scroll" non risale nella fase normale di bubble, ma passa
  // comunque dai genitori nella fase di cattura (true qui sotto) -
  // quindi anche lo scroll INTERNO del menu stesso (le sue voci)
  // arrivava fin qui e lo richiudeva all'istante, un attimo dopo
  // averlo aperto: bastava provare a scorrerlo per vederselo sparire
  // sotto al mouse. Ora si chiude solo se a scorrere e' qualcos'altro,
  // non il menu (o una sua voce interna).
  if(el.playlistMenu.hidden) return;
  if(ev.target === el.playlistMenu || el.playlistMenu.contains(ev.target)) return;
  closePlaylistMenu();
}, true);

// Scorrendo con la rotella (o le frecce) sopra il controllo musica -
// volume, riquadro titolo/gioco, pulsante che apre il menu - niente
// di tutto questo ha un suo scroll interno, quindi il movimento
// "passava attraverso" fino al pannello sotto (la storia aperta) e
// lo faceva scorrere lui al posto loro. Bloccato qui alla radice,
// su tutto il controllo insieme, invece che pannello per pannello.
if(el.musicControl){
  el.musicControl.addEventListener("wheel", ev => ev.preventDefault(), { passive:false });
}
// Stesso principio sul menu della playlist quando è aperto: scorre
// se stesso (manualmente, via scrollTop), ma non lascia mai passare
// il movimento oltre se' - a differenza di overscroll-behavior da
// solo, questo copre il caso anche se il browser non lo rispettasse
// del tutto su un elemento position:fixed come questo.
if(el.playlistMenu){
  el.playlistMenu.addEventListener("wheel", ev => {
    el.playlistMenu.scrollTop += ev.deltaY;
    ev.preventDefault();
  }, { passive:false });
}
document.addEventListener("click", (ev) => {
  if(el.playlistMenu.hidden) return;
  if(!el.playlistMenu.contains(ev.target) && !el.musicToggle.contains(ev.target)) closePlaylistMenu();
});

function choosePlaylist(item){
  state.playlist = item;
  state.trackIndex = 0;
  state.musicOn = true;
  localStorage.setItem(MUSIC_ON_KEY, "true");
  closePlaylistMenu();
  updateMusicPlayback();
}

function updateMusicPlayback(){
  if(resumedPersistedTrack) return; // traccia ripresa da un'altra pagina:
    // resta cosi' finche' l'utente non sceglie esplicitamente una voce
  const inEntryView = state.view === "entry";
  el.musicToggle.hidden = !inEntryView;
  el.musicToggle.setAttribute("aria-pressed", String(state.musicOn));
  if(!inEntryView) closePlaylistMenu();

  const tracks = state.playlist ? state.playlist.tracks : [];
  const hasTracks = inEntryView && state.musicOn && tracks.length > 0;

  if(!hasTracks){
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
  el.bgMusic.play().catch(() => { /* bloccato finché non c'è un gesto utente; il click del toggle/popup stesso lo è */ });
}

function advanceTrack(){
  const tracks = state.playlist ? state.playlist.tracks : [];
  if(tracks.length === 0) return;
  state.trackIndex = (state.trackIndex + 1) % tracks.length;
  updateMusicPlayback();
}
el.bgMusic.addEventListener("ended", advanceTrack);
el.bgMusic.addEventListener("timeupdate", () => {
  if(el.bgMusic.duration){
    el.trackProgressFill.style.width = (el.bgMusic.currentTime / el.bgMusic.duration * 100) + "%";
  }
});
el.bgMusic.addEventListener("loadedmetadata", () => {
  el.trackProgressFill.style.width = "0%";
});
el.trackSkipBtn.addEventListener("click", advanceTrack);

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
    if(currentWatermarkBaseOpacity != null){
      applyWatermarkVisual(watermarkBrightness);
    }
  });
}

if(el.watermarkPresets){
  el.watermarkPresets.querySelectorAll(".watermark-brightness-line__preset").forEach(btn => {
    btn.addEventListener("click", () => {
      activeWatermarkSlot = btn.dataset.preset;
      localStorage.setItem(WATERMARK_ACTIVE_SLOT_KEY, activeWatermarkSlot);
      loadWatermarkForCurrentEntry();
    });
  });
  updateWatermarkPresetButtons();
}

el.musicToggle.addEventListener("click", (ev) => {
  ev.stopPropagation();
  if(state.musicOn){
    // Spegnimento: la playlist si "dimentica", la prossima riattivazione
    // richiede una nuova scelta dal popup.
    state.musicOn = false;
    localStorage.setItem(MUSIC_ON_KEY, "false");
    state.playlist = null;
    state.trackIndex = 0;
    closePlaylistMenu();
    updateMusicPlayback();
  } else {
    el.playlistMenu.hidden ? openPlaylistMenu() : closePlaylistMenu();
  }
});

// ---------------------------------------------------------
// Tabelle a comparsa (sidebar + side-rail sempre aperte di default,
// oppure nascoste finche' non ci si passa sopra col mouse)
// ---------------------------------------------------------
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

// ---------------------------------------------------------
// Cambio lingua
// ---------------------------------------------------------
el.langSwitch.addEventListener("click", () => {
  state.lang = state.lang === "it" ? "en" : "it";
  localStorage.setItem(LANG_KEY, state.lang);
  paintStaticText();
  updateAllPanelsText();
  renderLists();
  if(state.view === "entry") renderEntry();
  const reportBtn = document.getElementById("reportBugBtn");
  if(reportBtn) reportBtn.setAttribute("aria-label", t("reportBtnLabel"));
  const reportDesc = document.getElementById("reportDescription");
  if(reportDesc) reportDesc.placeholder = t("reportDescPlaceholder");
  const reportFileName = document.getElementById("reportFileName");
  if(reportFileName && !reportFileName.textContent.includes(".")) reportFileName.textContent = t("reportNoFile");
});

// ---------------------------------------------------------
// Pulsante "Riproduci video" (solo desktop, su mobile e' eliminato):
// il video vero non e' ancora agganciato, per ora un messaggio
// scherzoso al posto della riproduzione.
// ---------------------------------------------------------
if(el.landingVideoBtn){
  el.landingVideoBtn.addEventListener("click", () => {
    alert(t("landingVideoNotReady"));
  });
}

// ---------------------------------------------------------
// Dimensione testo (X1 -> X1.5 -> X2 -> di nuovo X1 ad ogni click):
// imposta un attributo su <body>, letto dal CSS per scalare il
// font-size di .entry-body (vedi racconti.css). Persistito in
// localStorage, stessa convenzione delle altre preferenze (lingua,
// volume, ecc.).
// ---------------------------------------------------------
const TEXT_SIZES = ["1", "1.5", "2"]; // indice 0,1,2 - anche
  // l'etichetta del pulsante (con "X" davanti, vedi applyTextSize).
function applyTextSize(){
  const livello = TEXT_SIZES[state.textSizeIndex];
  document.body.dataset.textSize = livello;
  if(el.textSizeLabel) el.textSizeLabel.textContent = "X" + livello;
}
function cycleTextSize(){
  state.textSizeIndex = (state.textSizeIndex + 1) % TEXT_SIZES.length;
  localStorage.setItem(TEXT_SIZE_KEY, String(state.textSizeIndex));
  applyTextSize();
}
if(el.textSizeToggle){
  el.textSizeToggle.addEventListener("click", cycleTextSize);
}
applyTextSize(); // stato iniziale coerente con quanto gia' ripristinato da localStorage

// ---------------------------------------------------------
// Toggle Racconti/Libri (SOLO MOBILE - su desktop questo elemento e'
// nascosto via CSS e la funzione, anche se chiamata, non cambia
// niente di visibile: l'attributo che imposta serve solo alle regole
// dentro @media(max-width:900px), inerte altrove).
// ---------------------------------------------------------
function setMobileTable(quale){
  // quale: "teorie" (Racconti) o "storie" (Libri)
  state.mobileTable = quale;
  el.body.dataset.mobileTable = quale;
  if(el.mobileTableToggle){
    el.mobileTableToggle.querySelectorAll("[data-table-option]").forEach(opt => {
      opt.classList.toggle("is-active", opt.dataset.tableOption === quale);
    });
  }
}
if(el.mobileTableToggle){
  el.mobileTableToggle.querySelectorAll("[data-table-option]").forEach(opt => {
    opt.addEventListener("click", () => setMobileTable(opt.dataset.tableOption));
  });
}
setMobileTable(state.mobileTable); // stato iniziale coerente con l'attributo sul body

// ---------------------------------------------------------
// Mobile: niente più hamburger/cassetti. Teorie, stage e Storie
// Nascoste sono tre pannelli affiancati (vedi CSS, scroll-snap
// orizzontale); questa funzione riporta lo scroll sullo stage,
// es. dopo aver scelto una voce da uno dei due elenchi laterali.
// Inerte su desktop (il layout lì non scrolla).
// ---------------------------------------------------------
const stageEl = document.getElementById("stage");
const layoutEl = document.querySelector(".layout");

// scrollIntoView() e' notoriamente inaffidabile insieme a
// scroll-snap-type:mandatory (impostato su .layout) su diversi
// browser mobili reali - sembra funzionare su desktop ma su alcuni
// telefoni puo' non spostare affatto la posizione, lasciando visibile
// il primo pannello (sidebar) invece dello stage. scrollTo/scrollLeft
// diretti sulla posizione calcolata (stageEl.offsetLeft) non dipendono
// da quel comportamento incerto.
function scrollCarouselToStage(smooth){
  if(!mobileBreakpoint.matches || !layoutEl || !stageEl) return;
  if(smooth) layoutEl.scrollTo({ left: stageEl.offsetLeft, behavior: "smooth" });
  else layoutEl.scrollLeft = stageEl.offsetLeft;
}
function closeMobileSidebar(){ scrollCarouselToStage(true); }
function closeRailDrawer(){ /* stesso pannello stage, nessuna azione separata */ }

// FIX: la causa vera del bug "vedo sempre Racconti Brevi" non era il
// refresh in se', ma il passaggio DA desktop A mobile SENZA ricaricare
// la pagina (es. lo strumento "vista mobile" del browser, attivato su
// una pagina desktop gia' aperta). Il codice che riporta lo scroll
// sullo stage girava una sola volta, all'apertura iniziale dello
// script - se in quel momento si era ancora in versione desktop (dove
// il carosello non esiste nemmeno, tutto affiancato normalmente),
// non c'era nulla da correggere. Quando poi si passava a mobile in
// corsa, il carosello nasceva li' per la prima volta, partendo dal
// primo pannello (sidebar) di default - e nessun codice interveniva
// mai a correggerlo, perche' quello scritto scattava solo
// all'apertura, non al cambio di vista. Ora riascolta anche quello.
mobileBreakpoint.addEventListener("change", () => {
  paintStaticText();
  scrollCarouselToStage(false);
});

// Freccette di swipe: nascosta quella che punta verso un bordo già
// raggiunto (non c'è altro da quel lato), visibile l'altra.
const swipeLeftEl = document.querySelector(".swipe-hint--left");
const swipeRightEls = document.querySelectorAll(".swipe-hint--right");
function updateSwipeHints(){
  if(!mobileBreakpoint.matches || !layoutEl) return;
  const w = window.innerWidth;
  const maxScroll = layoutEl.scrollWidth - w;
  if(swipeLeftEl) swipeLeftEl.style.visibility = layoutEl.scrollLeft <= w * 0.5 ? "hidden" : "visible";
  const nascondiDestra = layoutEl.scrollLeft >= maxScroll - w * 0.5;
  swipeRightEls.forEach(elFreccia => { elFreccia.style.visibility = nascondiDestra ? "hidden" : "visible"; });
  // Il pulsante "Segnala bug" e' position:fixed, quindi normalmente
  // resterebbe a galla anche scorrendo verso le tabelle laterali del
  // carosello mobile, invece di sparire con loro come il resto della
  // home. Lo nascondo a mano quando lo stage (la vera home) non e' la
  // schermata in vista - controllo diretto sulla posizione di scroll
  // di stageEl stesso, non piu' aritmetica basata sul presupposto che
  // stage fosse il pannello CENTRALE (vero nel vecchio carosello a 3
  // pannelli, sidebar-stage-rail - falso ora che stage e' il PRIMO
  // pannello, order:-1, per il nuovo carosello a 2 tappe Home+Tabella).
  // Funziona a prescindere da quanti pannelli ci sono o in che ordine
  // stanno, dato che confronta la posizione vera invece di calcolarla.
  if(el.reportBugBtn && stageEl){
    const inStage = Math.abs(layoutEl.scrollLeft - stageEl.offsetLeft) < w * 0.5;
    el.reportBugBtn.style.display = inStage ? "" : "none";
  }
}
if(layoutEl) layoutEl.addEventListener("scroll", updateSwipeHints, { passive: true });

el.brandBtn.addEventListener("click", () => {
  setState("landing");
  // Riporta sempre alla home vera, indipendentemente da dove ci si
  // trova nel carosello in quel momento: se nel frattempo si era
  // scorso verso una delle due tabelle (restando comunque in vista
  // voce, .layout resta un carosello anche li'), altrimenti il
  // pulsante cambiava lo stato ma lasciava lo scroll orizzontale
  // dov'era, "restituendo" la tabella invece della home.
  scrollCarouselToStage(true);
});

// ---------------------------------------------------------
// Suono UI al tap, stesso comportamento di la_traccia_del_tempo.html.
// Selettore allargato oltre ai soli <button>: kofi/discord/index-link
// sono <a>, non <button>, restavano esclusi prima. Lo skip del brano
// (.track-skip) è l'unica eccezione voluta, escluso esplicitamente.
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
      .catch(() => { /* silenzioso: se fallisce, resta solo il fallback piu' sotto */ });
  } catch(e) { /* Web Audio non disponibile: nessun problema, resta solo il fallback */ }
});
// I browser creano l'AudioContext gia' "sospeso" finche' non c'e' una
// vera interazione dell'utente (policy anti-autoplay): qui viene
// creato in idle time, senza alcun gesto, quindi nasce quasi sempre
// sospeso. Questo listener lo risveglia al primissimo tocco/click su
// TUTTA la pagina, non solo sui pulsanti col suono - cosi', quando
// arriva il click vero su un pulsante, il contesto e' gia' sveglio
// nella grande maggioranza dei casi, invece di scoprirlo sospeso
// proprio in quel momento.
document.addEventListener("pointerdown", () => {
  if(tapAudioCtx && tapAudioCtx.state === "suspended") tapAudioCtx.resume();
}, { once: true });
function suonaTap(volume, onAvviato){
  if(tapAudioCtx && tapBuffer){
    const durata = tapBuffer.duration * 1000; // durata esatta in ms, letta dal buffer - non una stima
    const avvia = () => {
      const source = tapAudioCtx.createBufferSource();
      source.buffer = tapBuffer;
      const gain = tapAudioCtx.createGain();
      gain.gain.value = volume;
      source.connect(gain).connect(tapAudioCtx.destination);
      source.start(0);
      if(onAvviato) onAvviato(durata); // chiamato ORA, non prima: se serviva il
        // resume, questo e' il vero momento in cui il suono parte per davvero
    };
    if(tapAudioCtx.state === "suspended"){
      // resume() e' asincrono: senza aspettarlo, avviare il suono
      // subito dopo rischia di perderlo in silenzio proprio nei casi
      // in cui il risveglio anticipato qui sopra non ha fatto in
      // tempo (tipicamente il primissimo click della sessione).
      tapAudioCtx.resume().then(avvia);
    } else {
      avvia();
    }
  } else {
    // Buffer non ancora pronto (raro: solo se si clicca prima che il
    // pre-caricamento finisca) - stesso vecchio metodo come riserva.
    const tap = new Audio(TAP_SOUND_URL);
    tap.volume = volume;
    tap.play().catch(() => {});
    if(onAvviato) onAvviato(null); // durata non nota in anticipo con questo metodo
  }
}
document.addEventListener("click", (e) => {
  // a.index-link escluso qui: ha la propria gestione dedicata piu'
  // sotto, che deve conoscere la durata esatta del suono per
  // ritardare la navigazione della quantita' giusta (non un numero
  // indovinato) - se restasse anche qui, il suono partirebbe due
  // volte allo stesso click.
  const target = e.target.closest("button, a.kofi-link, a.discord-link");
  if(target && !target.classList.contains("track-skip")){
    suonaTap(mobileBreakpoint.matches ? 0.3 : 0.1);
  }
});

// ---------------------------------------------------------
// Boot
// ---------------------------------------------------------
paintStaticText();
buildAllEntryPanels();
setState("landing");
scrollCarouselToStage(false);
// Rinforzo: history.scrollRestoration=manual (vedi inizio file) non
// basta da solo in alcuni casi (alcuni browser mobili sembrano avere
// una propria memoria della posizione di scroll, separata da quella
// normale della pagina, che puo' intervenire dopo il nostro codice) -
// impongo la posizione corretta anche con un piccolo ritardo e di
// nuovo al "load" della finestra, cosi' vinco anche su un eventuale
// ripristino che arrivasse piu' tardi. scrollCarouselToStage(false)
// usa scrollLeft diretto (vedi sopra) - NON scrollIntoView, che e'
// notoriamente inaffidabile insieme a scroll-snap:mandatory su
// diversi browser mobili reali (causa sospetta originale del bug).
function forzaScrollHome(){
  scrollCarouselToStage(false);
}
setTimeout(forzaScrollHome, 50);
setTimeout(forzaScrollHome, 300);
setTimeout(forzaScrollHome, 3000); // oltre il caso peggiore di 2.5s
  // di tfs-ready, per coprire margine ancora piu' ampio su reti lente
window.addEventListener("load", forzaScrollHome);
updateSwipeHints();
// Su mobile, le tabelle laterali (sidebar/side-rail) restano
// invisibili finche' questo punto non viene raggiunto - vedi
// racconti.css e il piccolo script di sicurezza in testa alla
// pagina. Qui la correzione dello scroll qui sopra e' gia' avvenuta,
// quindi e' sicuro rivelarle.
document.body.classList.add("tfs-ready");
// Su desktop, l'intera pagina resta invisibile finche' non sono
// pronti SIA questo avvio SIA i font veri (probabile causa dei
// riposizionamenti che si "auto-correggono" in vista) - document.
// fonts.ready e' una vera API del browser, si risolve solo quando i
// font sono davvero caricati e applicati. Controllo di sicurezza per
// browser che non la supportano (rara, ma meglio non rischiare una
// pagina bloccata invisibile per sempre su quei casi).
if(document.fonts && document.fonts.ready){
  document.fonts.ready.then(() => {
    document.body.classList.add("tfs-desktop-ready");
  });
} else {
  document.body.classList.add("tfs-desktop-ready");
}

// Ripresa dell'ascolto persistente: solo se l'interruttore era attivo
// e c'e' uno stato salvato da un'altra pagina. Scavalca la selezione
// normale della voce (che qui non esiste ancora, la pagina si e'
// appena caricata) mostrando titolo/gioco salvati cosi' come sono;
// niente pulsante salta, non c'e' una scaletta nota in questo contesto.
(function resumePersistedMusic(){
  if(!isMusicPersistOn()) return;
  let saved;
  try { saved = JSON.parse(localStorage.getItem(MUSIC_STATE_KEY)); } catch(e) { return; }
  if(!saved || !saved.src) return;
  resumedPersistedTrack = true;
  el.bgMusic.src = saved.src;
  el.bgMusic.currentTime = saved.time || 0;
  el.trackInfo.hidden = false;
  el.trackTitle.textContent = saved.title || "";
  el.trackGame.textContent = saved.game || "";
  el.trackSkipBtn.hidden = true;
  el.bgMusic.play().catch(() => {});
})();

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
// Popup "Segnala un problema" — stesso Worker/schema di invio
// gia' in uso su Mathemory (descrizione + immagine opzionale,
// inoltrate a un webhook Discord), qui riadattato: niente nota
// finale sul nickname (non ha senso su questo sito), stesso
// nome di endpoint sul Worker gia' in uso per like/statistiche.
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

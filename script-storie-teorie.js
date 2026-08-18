// ============================================================
// STORIE & TEORIE — logica di stato e rendering
// ============================================================

// Disattiva il ripristino automatico della posizione di scroll del
// browser al refresh/tasto indietro - stesso fix di Storie Senza
// Cornice, stessa causa (il carosello mobile che scorre in
// orizzontale puo' essere ripristinato dal browser in un punto
// diverso da quello che imposta il nostro codice).
if("scrollRestoration" in history){
  history.scrollRestoration = "manual";
}

const STRINGS = {
  it: {
    brand: "Il Filo Nascosto",
    brandMobile: "Il Filo\nNascosto",
    sidebarEyebrow: "Teorie",
    railLabel: "Storie Nascoste",
    landingEyebrow: "Benvenuto nell'archivio\ndi storie nascoste e teorie",
    landingTitle: "Il Filo Nascosto",
    landingIntro: "Riflessioni, teorie dei fan e retroscena nascosti dentro alcune delle saghe videoludiche più amate: dettagli che sfuggono a una prima lettura, indizi lasciati dagli sviluppatori, ipotesi che il tempo non ha ancora del tutto confermato né smentito. Un angolo pensato per chi ama guardare oltre la superficie della trama.",
    spoilerAlert: "Ogni pagina contiene sinossi dettagliate delle trame, inclusi finali e colpi di scena. Procedi solo se hai già completato i titoli o non temi gli spoiler.",
    landingSub: "Seleziona una voce dalla colonna Teorie o da quella delle Storie Nascoste per approfondire.",
    landingSubMobile: "Seleziona una voce dalla finestra Teorie o da quella delle Storie Nascoste per approfondire.",
    kofiLabel: "Sostienimi su Ko-fi",
    backToIndexLabel: "Torna all'index",
    entryCopyright: "© 2026 Sakrem — Analisi e testo originali",
    entryReadTime: "Durata media di lettura: %s min",
    entryReadTimeUnderMin: "Durata media di lettura: meno di 1 min",
    landingVideoBtn: "Riproduci video",
    landingVideoNotReady: "Shh... il video sta ancora dormendo. Ripassa più avanti 👀",
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
    brand: "The Hidden Thread",
    brandMobile: "The Hidden\nThread",
    sidebarEyebrow: "Theories",
    railLabel: "Hidden Stories",
    landingEyebrow: "Welcome to the archive\nof hidden stories and theories",
    landingTitle: "The Hidden Thread",
    landingIntro: "Fan theories, reflections, and hidden details buried inside some of the most beloved video game sagas — clues that slip past a first playthrough, threads left behind by developers, ideas time hasn't fully confirmed or debunked. A corner built for anyone who loves looking past the surface of the plot.",
    spoilerAlert: "Every page contains detailed plot synopses, including endings and twists. Proceed only if you've already finished the games or aren't worried about spoilers.",
    landingSub: "Select an entry from the Theories column or from the Hidden Stories column to dive in.",
    landingSubMobile: "Select an entry from the Theories screen or from the Hidden Stories screen to dive in.",
    kofiLabel: "Support me on Ko-fi",
    backToIndexLabel: "Back to index",
    entryCopyright: "© 2026 Sakrem — Original analysis and text",
    entryReadTime: "Estimated reading time: %s min",
    entryReadTimeUnderMin: "Estimated reading time: under 1 min",
    landingVideoBtn: "Play video",
    landingVideoNotReady: "Shh... the video is still asleep. Check back later 👀",
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
    // tabella unica mobile (vedi setMobileTable).
  textSizeIndex: 0, // 0=X1, 1=X1.5, 2=X2 - vedi TEXT_SIZES e
    // cycleTextSize.
  musicOn: true,
  trackIndex: 0
};

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
  langSwitch: document.getElementById("langSwitch"),
  teorieList: document.getElementById("teorieList"),
  storieList: document.getElementById("storieList"),
  landingPanel: document.getElementById("landingPanel"),
  entryPanel: document.getElementById("entryPanel"),
  entryContent: document.getElementById("entryContent"),
  pageHeaderBanner: document.getElementById("pageHeaderBanner"),
  bgMusic: document.getElementById("bgMusic"),
  trackInfo: document.getElementById("trackInfo"),
  trackTitle: document.getElementById("trackTitle"),
  trackGame: document.getElementById("trackGame"),
  trackSkipBtn: document.getElementById("trackSkipBtn"),
  trackPersistBtn: document.getElementById("trackPersistBtn"),
  trackProgressFill: document.getElementById("trackProgressFill"),
  volumeSlider: document.getElementById("volumeSlider"),
  musicToggle: document.getElementById("musicToggle"),
  entryGamePicker: document.getElementById("entryGamePicker"),
  entryGameTrigger: document.getElementById("entryGameTrigger"),
  entryGameTriggerLabel: document.getElementById("entryGameTriggerLabel"),
  entryGameMenu: document.getElementById("entryGameMenu"),
  musicControl: document.getElementById("musicControl"),
  mobileTableToggle: document.getElementById("mobileTableToggle"),
  textSizeToggle: document.getElementById("textSizeToggle"),
  textSizeLabel: document.getElementById("textSizeLabel"),
  landingVideoBtn: document.getElementById("landingVideoBtn"),
  panelToggle: document.getElementById("panelToggle"),
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
const MOBILE_TABLE_KEY = "tfs-mobile-table"; // teorie | storie -
  // ultima tabella mostrata nel toggle mobile (Teorie/Storie
  // Nascoste). Stessa chiave, stesso significato di Storie Senza
  // Cornice - condivisa tra le pagine come lingua/musica/volume qui
  // sopra.
const storedMusicOn = localStorage.getItem(MUSIC_ON_KEY);
if(storedMusicOn !== null) state.musicOn = storedMusicOn === "true";
const storedVolume = localStorage.getItem(VOLUME_KEY);
if(storedVolume !== null) el.volumeSlider.value = storedVolume;
const storedLang = localStorage.getItem(LANG_KEY);
if(storedLang === "it" || storedLang === "en") state.lang = storedLang;
const storedTextSize = parseInt(localStorage.getItem(TEXT_SIZE_KEY), 10);
if(storedTextSize === 0 || storedTextSize === 1 || storedTextSize === 2) state.textSizeIndex = storedTextSize;
const storedMobileTable = localStorage.getItem(MOBILE_TABLE_KEY);
if(storedMobileTable === "teorie" || storedMobileTable === "storie") state.mobileTable = storedMobileTable;
if(localStorage.getItem(PANELS_HOVER_KEY) === "true"){
  document.body.dataset.panels = "hover";
  if(el.panelToggle) el.panelToggle.setAttribute("aria-pressed", "true");
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

// Tempo di lettura stimato: 200 parole al minuto, calcolato dal testo
// vero dell'opera nella lingua attuale - dinamico, si aggiorna da
// solo se il testo cambia in futuro.
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
function renderLists(){
  const currentGame = state.entryId ? (currentEntry() || {}).game : null;

  el.teorieList.innerHTML = "";
  const seenTeorieGames = new Set();
  TEORIE_ORDER.forEach(id => {
    const item = TEORIE[id];
    if(seenTeorieGames.has(item.game)) return; // una sola riga per gioco: le voci extra si raggiungono dal menu a tendina
    seenTeorieGames.add(item.game);
    const li = document.createElement("li");
    const btn = document.createElement("a");
    btn.href = `voci/il-filo-nascosto/${id}.html`;
    btn.textContent = tf(item.gameLabel);
    btn.classList.toggle("is-active", state.column === "teorie" && currentGame != null && item.game === currentGame);
    btn.style.setProperty("--item-accent", item.accentColor || "#6b7280");
    btn.addEventListener("click", (ev) => { ev.preventDefault(); selectEntry("teorie", id); });
    li.appendChild(btn);
    el.teorieList.appendChild(li);
  });

  el.storieList.innerHTML = "";
  const seenStorieGames = new Set();
  STORIE_ORDER.forEach(id => {
    const item = STORIE[id];
    if(seenStorieGames.has(item.game)) return; // stessa logica della colonna Teorie
    seenStorieGames.add(item.game);
    const li = document.createElement("li");
    const btn = document.createElement("a");
    btn.href = `voci/il-filo-nascosto/${id}.html`;
    btn.textContent = tf(item.gameLabel);
    btn.classList.toggle("is-active", state.column === "storie" && currentGame != null && item.game === currentGame);
    btn.style.setProperty("--item-accent", item.accentColor || "#6b7280");
    btn.addEventListener("click", (ev) => { ev.preventDefault(); selectEntry("storie", id); });
    li.appendChild(btn);
    el.storieList.appendChild(li);
  });
}

const entryPanels = {}; // "teorie:cinere" -> { panel, textWrap, entry, id }

function panelKey(column, id){ return `${column}:${id}`; }

function updatePanelText(key){
  const rec = entryPanels[key];
  if(!rec) return;
  const entry = rec.entry;
  const column = key.split(":")[0];
  rec.textWrap.innerHTML = `
    ${column === "teorie" ? `<p class="entry-copyright">${t("entryCopyright")}</p>` : ""}
    <h1 class="entry-title">${tf(entry.title)}</h1>
    <p class="entry-readtime">${estimateReadingTime(entry)}</p>
    <div class="entry-body">${tf(entry.body)}</div>
    <div class="entry-body-scrollbar" aria-hidden="true"><div class="entry-body-scrollbar__thumb"></div></div>
  `;
  // FIX: il cuoricino va DENTRO .entry-body (il box che scorre
  // davvero), non nel pannello intero (rec.panel) - senza, restava
  // oltre il bordo bloccato della pagina, mai raggiungibile
  // nemmeno scorrendo fino in fondo. Stesso bug gia' trovato e
  // corretto oggi su Storie Senza Cornice (script-racconti.js), non
  // ancora portato qui quando ho integrato ieri.
  const bodyEl = rec.textWrap.querySelector(".entry-body");
  appendLikeWidget(bodyEl || rec.panel, rec.id);
  if(bodyEl) setupCustomScrollbar(bodyEl);
}

function updateAllPanelsText(){
  Object.keys(entryPanels).forEach(updatePanelText);
}

// Scrollbar finta per .entry-body - stessa tecnica, stesso motivo e
// stesso codice di script-racconti.js (vedi il commento esteso li'):
// sostituisce il vecchio trucco direction:rtl che rompeva la
// selezione del testo col mouse nel margine a sinistra della
// primissima riga.
let scrollDragState = null;

function setupCustomScrollbar(bodyEl){
  const bar = bodyEl.nextElementSibling;
  if(!bar || !bar.classList.contains("entry-body-scrollbar")) return;
  const thumb = bar.querySelector(".entry-body-scrollbar__thumb");
  const wrap = bodyEl.closest(".entry-content-text");
  if(!thumb || !wrap) return;

  function layout(){
    const wrapRect = wrap.getBoundingClientRect();
    const bodyRect = bodyEl.getBoundingClientRect();
    bar.style.left = (bodyRect.left - wrapRect.left) + "px";
    bar.style.top = (bodyRect.top - wrapRect.top) + "px";
    bar.style.height = bodyRect.height + "px";
    updateThumb();
  }
  function updateThumb(){
    const sh = bodyEl.scrollHeight, ch = bodyEl.clientHeight, st = bodyEl.scrollTop;
    if(sh <= ch + 1){ bar.style.display = "none"; return; }
    bar.style.display = "block";
    const thumbH = Math.max(30, ch * (ch / sh));
    const maxTop = ch - thumbH;
    const top = maxTop * (st / (sh - ch));
    thumb.style.height = thumbH + "px";
    thumb.style.transform = `translateY(${top}px)`;
  }

  bodyEl.addEventListener("scroll", updateThumb);
  bodyEl.addEventListener("mouseenter", () => bar.classList.add("is-hover"));
  bodyEl.addEventListener("mouseleave", () => {
    if(!scrollDragState || scrollDragState.bar !== bar) bar.classList.remove("is-hover");
  });

  thumb.addEventListener("mousedown", (e) => {
    scrollDragState = {
      bodyEl, bar,
      startY: e.clientY,
      startScrollTop: bodyEl.scrollTop,
      trackHeight: bodyEl.clientHeight,
      thumbHeight: thumb.offsetHeight
    };
    bar.classList.add("is-hover", "is-dragging");
    document.body.style.userSelect = "none";
    e.preventDefault();
  });

  new ResizeObserver(layout).observe(bodyEl);
  new ResizeObserver(layout).observe(wrap);
  bodyEl._scrollbarLayout = layout;
  layout();
}

window.addEventListener("mousemove", (e) => {
  if(!scrollDragState) return;
  const { bodyEl, startY, startScrollTop, trackHeight, thumbHeight } = scrollDragState;
  const maxTop = trackHeight - thumbHeight;
  if(maxTop <= 0) return;
  const deltaScroll = ((e.clientY - startY) / maxTop) * (bodyEl.scrollHeight - bodyEl.clientHeight);
  bodyEl.scrollTop = startScrollTop + deltaScroll;
});
window.addEventListener("mouseup", () => {
  if(!scrollDragState) return;
  const { bar, bodyEl } = scrollDragState;
  bar.classList.remove("is-dragging");
  if(!bodyEl.matches(":hover")) bar.classList.remove("is-hover");
  document.body.style.userSelect = "";
  scrollDragState = null;
});
window.addEventListener("resize", () => {
  document.querySelectorAll(".entry-body").forEach(b => { if(b._scrollbarLayout) b._scrollbarLayout(); });
});

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
  // Object.keys, non gli *_ORDER: stessa cautela presa su
  // script-racconti.js, per quando in futuro Storie Nascoste avrà
  // voci con più capitoli raggiungibili solo dalla tendina.
  Object.keys(TEORIE).forEach(id => buildEntryPanelContent("teorie", id, TEORIE[id]));
  Object.keys(STORIE).forEach(id => buildEntryPanelContent("storie", id, STORIE[id]));
}

function currentEntry(){
  if(!state.entryId) return null;
  const table = state.column === "teorie" ? TEORIE : STORIE;
  return table[state.entryId] || null;
}

function renderEntry(){
  const entry = currentEntry();
  if(!entry){
    Object.values(entryPanels).forEach(rec => { rec.panel.hidden = true; });
    return;
  }

  el.body.style.setProperty("--item-accent", entry.accentColor || "#6b7280");
  const isMobile = window.matchMedia("(max-width:900px)").matches;
  const bannerUrl = (isMobile && entry.mobileBanner) ? entry.mobileBanner : entry.banner;
  el.pageHeaderBanner.style.backgroundImage = bannerUrl ? `url('${bannerUrl}')` : "";
  el.body.style.setProperty("--banner-x-offset", (entry.bannerOffset != null ? entry.bannerOffset : 125) + "px");

  const activeKey = panelKey(state.column, state.entryId);
  Object.entries(entryPanels).forEach(([key, rec]) => {
    rec.panel.hidden = key !== activeKey;
  });
  const activeRec = entryPanels[activeKey];

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
  TEORIE_ORDER.forEach(id => {
    if(TEORIE[id].game === gameId) list.push({ column: "teorie", id, title: TEORIE[id].title });
  });
  STORIE_ORDER.forEach(id => {
    if(STORIE[id].game === gameId) list.push({ column: "storie", id, title: STORIE[id].title });
  });
  return list;
}

function renderGamePicker(entry){
  el.entryGameTriggerLabel.textContent = tf(entry.gameLabel);

  el.entryGameMenu.innerHTML = "";
  getEntriesForGame(entry.game).forEach(item => {
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
    el.body.style.removeProperty("--item-accent");
    el.body.style.setProperty("--cyan", "#ffffff");
    // Ko-fi/Discord tornano al loro posto originale (dentro
    // .stage-controls), stessa tecnica di Storie Senza Cornice.
    // Solo desktop: su mobile .social-links non viene mai spostato.
    if(!mobileBreakpoint.matches && el.stageControls && el.socialLinks && el.socialLinks.parentElement !== el.stageControls){
      el.stageControls.insertBefore(el.socialLinks, el.stageControls.firstChild);
    }
  } else {
    el.body.style.removeProperty("--cyan");
    // Solo desktop, solo vista voce: la tazzina lascia il posto ai
    // pulsanti veri Ko-fi+Discord, spostati dentro .brand.
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
  if(state.column !== column || state.entryId !== id) state.trackIndex = 0;
  state.column = column;
  state.entryId = id;
  setMobileTable(column); // il toggle mobile resta coerente con la
    // voce aperta, qualunque sia il modo in cui e' stata scelta.
  setState("entry");
  closeMobileSidebar();
  closeRailDrawer();
  window.scrollTo(0, 0);
  const stage = document.querySelector(".stage");
  if(stage) stage.scrollTop = 0;
}

// ---------------------------------------------------------
// Musica di sottofondo — solo nella pagina della voce, non
// autoparte mai con l'audio, l'utente deve attivarla col toggle;
// i browser bloccherebbero comunque l'autoplay con suono.
// ---------------------------------------------------------
function getTrackList(entry){
  if(!entry || !entry.tracks || !entry.tracks.length) return [];
  return entry.tracks;
}

function updateMusicPlayback(){
  if(resumedPersistedTrack) return; // traccia ripresa da un'altra pagina:
    // resta cosi' finche' l'utente non sceglie esplicitamente una voce
  const entry = currentEntry();
  const inEntryView = state.view === "entry";
  el.musicToggle.hidden = !inEntryView;
  el.musicToggle.setAttribute("aria-pressed", String(state.musicOn));

  const tracks = getTrackList(entry);
  const hasTracks = inEntryView && tracks.length > 0;

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
  el.bgMusic.play().catch(() => { /* bloccato finché non c'è un gesto utente; il click del toggle stesso lo è */ });
}

function advanceTrack(){
  const tracks = getTrackList(currentEntry());
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

el.musicToggle.addEventListener("click", () => {
  state.musicOn = !state.musicOn;
  localStorage.setItem(MUSIC_ON_KEY, String(state.musicOn));
  updateMusicPlayback();
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
// Mobile: niente più hamburger/cassetti. Teorie, stage e Storie
// Nascoste sono tre pannelli affiancati (vedi CSS, scroll-snap
// orizzontale); questa funzione riporta lo scroll sullo stage,
// es. dopo aver scelto una voce da uno dei due elenchi laterali.
// Inerte su desktop (il layout lì non scrolla).
// ---------------------------------------------------------
mobileBreakpoint.addEventListener("change", () => {
  paintStaticText();
  scrollCarouselToStage(false);
});
const stageEl = document.getElementById("stage");
const layoutEl = document.querySelector(".layout");

// scrollIntoView() e' notoriamente inaffidabile insieme a
// scroll-snap-type:mandatory su diversi browser mobili reali (causa
// vera del bug della sidebar vuota mostrata al posto della home,
// isolata su Storie Senza Cornice). scrollTo/scrollLeft diretti sulla
// posizione calcolata (stageEl.offsetLeft) non dipendono da quel
// comportamento incerto.
function scrollCarouselToStage(smooth){
  if(!layoutEl || !stageEl) return;
  if(smooth) layoutEl.scrollTo({ left: stageEl.offsetLeft, behavior: "smooth" });
  else layoutEl.scrollLeft = stageEl.offsetLeft;
}
function closeMobileSidebar(){ scrollCarouselToStage(true); }
function closeRailDrawer(){ /* stesso pannello stage, nessuna azione separata */ }

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
  // "in stage" = confronto diretto con la posizione vera di stageEl,
  // non piu' aritmetica basata sul presupposto che stage fosse il
  // pannello CENTRALE (falso ora che stage e' il PRIMO pannello,
  // order:-1, nel nuovo carosello mobile a 2 tappe).
  if(el.reportBugBtn && stageEl){
    const inStage = Math.abs(layoutEl.scrollLeft - stageEl.offsetLeft) < w * 0.5;
    el.reportBugBtn.style.display = inStage ? "" : "none";
  }
}
if(layoutEl) layoutEl.addEventListener("scroll", updateSwipeHints, { passive: true });

el.brandBtn.addEventListener("click", () => {
  setState("landing");
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
// Toggle Teorie/Storie Nascoste (SOLO MOBILE - su desktop questo
// elemento e' nascosto via CSS e la funzione, anche se chiamata, non
// cambia niente di visibile).
// ---------------------------------------------------------
function setMobileTable(quale){
  // quale: "teorie" (Teorie) o "storie" (Storie Nascoste)
  state.mobileTable = quale;
  localStorage.setItem(MOBILE_TABLE_KEY, quale);
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
setMobileTable(state.mobileTable);

// ---------------------------------------------------------
// Dimensione testo (X1 -> X1.5 -> X2 -> di nuovo X1 ad ogni click).
// ---------------------------------------------------------
const TEXT_SIZES = ["1", "1.5", "2"];
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
applyTextSize();

// Il pulsante dimensione testo viene spostato DAVVERO nel DOM: dentro
// #musicControl su mobile (diventa un figlio vero della sua riga
// flex), torna al suo posto originale in .stage-controls su desktop.
function posizionaTextSizeToggle(){
  if(!el.textSizeToggle || !el.musicControl || !el.stageControls || !el.panelToggle) return;
  if(mobileBreakpoint.matches){
    if(el.textSizeToggle.parentElement !== el.musicControl){
      el.musicControl.appendChild(el.textSizeToggle);
    }
  } else {
    if(el.textSizeToggle.parentElement !== el.stageControls){
      el.stageControls.insertBefore(el.textSizeToggle, el.panelToggle);
    }
  }
}
posizionaTextSizeToggle();
mobileBreakpoint.addEventListener("change", posizionaTextSizeToggle);

// ---------------------------------------------------------
// Tabelle a comparsa (sidebar + side-rail sempre aperte di default,
// oppure nascoste finche' non ci si passa sopra col mouse) - SOLO
// DESKTOP.
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
// Boot
// ---------------------------------------------------------
paintStaticText();
buildAllEntryPanels();
setState("landing");
scrollCarouselToStage(false);
// Rinforzo (stesso fix di Storie Senza Cornice): un solo tentativo
// puo' arrivare troppo presto, prima che il browser abbia finito di
// assestare il layout mobile. overflow-anchor:none (vedi CSS) sul
// carosello impedisce anche allo "scroll anchoring" nativo del
// browser di annullare questi tentativi piu' tardi.
function forzaScrollHome(){
  scrollCarouselToStage(false);
}
setTimeout(forzaScrollHome, 50);
setTimeout(forzaScrollHome, 300);
setTimeout(forzaScrollHome, 3000);
window.addEventListener("load", forzaScrollHome);
updateSwipeHints();
// La pagina (su mobile, in home) resta invisibile finche' questo
// punto non viene raggiunto - vedi storie-teorie.css e il piccolo
// script di sicurezza in testa alla pagina. Stessa tecnica adottata
// su Storie Senza Cornice, per lo stesso bug (sidebar vuota mostrata
// per un attimo prima della home su connessioni lente).
document.body.classList.add("tfs-ready");

// FIX CRITICO: questo pezzo mancava del tutto - senza, la pagina
// restava SEMPRE bloccata invisibile per 2.5 secondi pieni (il timer
// di sicurezza nell'HTML), ad ogni singolo caricamento, perche' nulla
// aggiungeva mai tfs-desktop-ready per la via veloce. document.fonts.
// ready e' una vera API del browser, si risolve solo quando i font
// sono davvero caricati e applicati (di norma una questione di
// decine di millisecondi, non secondi). Controllo di sicurezza per
// browser che non la supportano (rara, ma meglio non rischiare una
// pagina bloccata invisibile per sempre su quei casi). Stesso pezzo
// gia' presente in script-racconti.js, qui dimenticato durante
// l'integrazione.
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
// script-racconti.js, vedi commento lì per il contesto.
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

// ============================================================
// RACCONTI — logica di stato e rendering
// ============================================================

const STRINGS = {
  it: {
    brand: "Storie Senza Cornice",
    brandMobile: "Storie\nSenza Cornice",
    sidebarEyebrow: "Racconti brevi",
    railLabel: "Libri",
    landingEyebrow: "Benvenuto nell'archivio\ndi libri e racconti brevi",
    landingTitle: "The Forgotten Shelf",
    landingIntro: "The Forgotten Shelf raccoglie racconti brevi originali — storie nate per esistere e basta, solo un'idea portata fino in fondo — e libri a capitoli per chi cerca qualcosa di più esteso: horror psicologico, dark fantasy, elegia e altro ancora.",
    landingSub: "Seleziona una voce dalla colonna Racconti brevi o da quella dei Libri per approfondire.",
    landingSubMobile: "Seleziona una voce dalla finestra Racconti brevi o da quella dei Libri per approfondire.",
    kofiLabel: "Sostienimi su Ko-fi",
    backToIndexLabel: "Torna all'index",
    entryCopyright: "© 2026 Sakrem — Tutti i diritti riservati",
    leaveALike: "Lascia un like",
    reportBtnLabel: "Segnala bug",
    reportTitle: "Segnala un problema",
    reportIntro: "Hai trovato qualcosa che non funziona? Descrivi cosa è successo qui sotto — la descrizione è obbligatoria, l'immagine è facoltativa ma aiuta molto.",
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
    landingTitle: "The Forgotten Shelf",
    landingIntro: "The Forgotten Shelf collects original short stories — stories born to exist and nothing more, just an idea taken all the way — and chaptered books for those looking for something longer: psychological horror, dark fantasy, elegy, and more.",
    landingSub: "Select an entry from the Short Stories column or from the Books column to dive in.",
    landingSubMobile: "Select an entry from the Short Stories screen or from the Books screen to dive in.",
    kofiLabel: "Support me on Ko-fi",
    backToIndexLabel: "Back to index",
    entryCopyright: "© 2026 Sakrem — All rights reserved",
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
  teorieList: document.getElementById("teorieList"),
  storieList: document.getElementById("storieList"),
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
const mobileBreakpoint = window.matchMedia("(hover:none) and (pointer:coarse)");

// ---------------------------------------------------------
// Volume e stato on/off condivisi tra le pagine (Timeline, Storie &
// Teorie, Racconti) tramite localStorage: letti qui, PRIMA di
// qualunque render iniziale. Scritti a ogni modifica (vedi piu'
// sotto), cosi' restano coerenti passando da una pagina all'altra.
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
  const isMobileEntry = window.matchMedia("(hover:none) and (pointer:coarse)").matches && state.view === "entry";
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
    const btn = document.createElement("button");
    btn.type = "button";
    btn.textContent = tf(item.gameLabel);
    btn.classList.toggle("is-active", state.column === "teorie" && currentGame != null && item.game === currentGame);
    btn.style.setProperty("--item-accent", item.accentColor || "#6b7280");
    btn.addEventListener("click", () => selectEntry("teorie", id));
    li.appendChild(btn);
    el.teorieList.appendChild(li);
  });

  el.storieList.innerHTML = "";
  LIBRI_ORDER.forEach(id => {
    const item = LIBRI[id];
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.type = "button";
    btn.textContent = tf(item.gameLabel);
    btn.classList.toggle("is-active", state.column === "storie" && currentGame != null && item.game === currentGame);
    btn.style.setProperty("--item-accent", item.accentColor || "#6b7280");
    btn.addEventListener("click", () => selectEntry("storie", id));
    li.appendChild(btn);
    el.storieList.appendChild(li);
  });
}

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
    <h1 class="entry-title">${tf(entry.title)}</h1>
    <p class="entry-copyright">${t("entryCopyright")}</p>
    ${entry.tag ? `<p class="entry-tag">${tf(entry.tag)}</p>` : ""}
    <p class="entry-body"><span class="text-highlight">${tf(entry.body)}</span></p>
  `;
  // l'etichetta del cuoricino ("Lascia un like"/"Leave a like") va
  // ricostruita anche lei al cambio lingua, appendLikeWidget rimuove
  // da solo quello vecchio prima di aggiungerne uno nuovo, quindi e'
  // sicuro richiamarla di nuovo qui.
  appendLikeWidget(rec.panel, rec.id);
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

function renderEntry(){
  const entry = currentEntry();
  if(!entry){
    Object.values(entryPanels).forEach(rec => { rec.panel.hidden = true; });
    return;
  }

  el.body.style.setProperty("--item-accent", entry.accentColor || "#6b7280");
  const isMobile = window.matchMedia("(hover:none) and (pointer:coarse)").matches;
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
  state.column = column;
  state.entryId = id;
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
window.addEventListener("scroll", () => { if(!el.playlistMenu.hidden) closePlaylistMenu(); }, true);
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
// Standby/scheda non in primo piano: la musica va sempre in pausa
// (non solo mobile — vale anche cambiando scheda su desktop).
// Niente ripresa automatica al ritorno.
// ---------------------------------------------------------
let musicWasPlayingBeforeHidden = false;
document.addEventListener("visibilitychange", () => {
  if(document.hidden){
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
mobileBreakpoint.addEventListener("change", paintStaticText);
const stageEl = document.getElementById("stage");

function scrollCarouselToStage(){
  if(!mobileBreakpoint.matches) return;
  stageEl.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
}
function closeMobileSidebar(){ scrollCarouselToStage(); }
function closeRailDrawer(){ /* stesso pannello stage, nessuna azione separata */ }

// Freccette di swipe: nascosta quella che punta verso un bordo già
// raggiunto (non c'è altro da quel lato), visibile l'altra.
const layoutEl = document.querySelector(".layout");
const swipeLeftEl = document.querySelector(".swipe-hint--left");
const swipeRightEl = document.querySelector(".swipe-hint--right");
function updateSwipeHints(){
  if(!mobileBreakpoint.matches || !layoutEl) return;
  const w = window.innerWidth;
  const maxScroll = layoutEl.scrollWidth - w;
  if(swipeLeftEl) swipeLeftEl.style.visibility = layoutEl.scrollLeft <= w * 0.5 ? "hidden" : "visible";
  if(swipeRightEl) swipeRightEl.style.visibility = layoutEl.scrollLeft >= maxScroll - w * 0.5 ? "hidden" : "visible";
  // Il pulsante "Segnala bug" e' position:fixed, quindi normalmente
  // resterebbe a galla anche scorrendo verso le tabelle laterali del
  // carosello mobile (sidebar/rail), invece di sparire con loro come
  // il resto della home. Lo nascondo a mano quando lo stage (quello
  // centrale, la vera home) non e' la schermata in vista.
  if(el.reportBugBtn){
    // "in stage" = non al pannello piu a sinistra (sidebar) ne, se esiste,
    // a quello piu a destra (rail): funziona sia con 2 pannelli (Timeline,
    // niente rail in home) sia con 3 (Racconti/Teorie, sidebar+stage+rail).
    const pastSidebar = layoutEl.scrollLeft > w * 0.5;
    const beforeRail = maxScroll <= w || layoutEl.scrollLeft < maxScroll - w * 0.5;
    el.reportBugBtn.style.display = (pastSidebar && beforeRail) ? "" : "none";
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
  scrollCarouselToStage();
});

// ---------------------------------------------------------
// Suono UI al tap, stesso comportamento di la_traccia_del_tempo.html.
// Selettore allargato oltre ai soli <button>: kofi/discord/index-link
// sono <a>, non <button>, restavano esclusi prima. Lo skip del brano
// (.track-skip) è l'unica eccezione voluta, escluso esplicitamente.
// ---------------------------------------------------------
const TAP_SOUND_URL = "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Tap.mp3";
document.addEventListener("click", (e) => {
  const target = e.target.closest("button, a.kofi-link, a.discord-link, a.index-link");
  if(target && !target.classList.contains("track-skip")){
    const tap = new Audio(TAP_SOUND_URL);
    tap.volume = mobileBreakpoint.matches ? 0.3 : 0.1;
    tap.play().catch(() => { /* bloccato finché non c'è un gesto utente; il click stesso lo è, quindi è solo un fallback */ });
  }
});

// ---------------------------------------------------------
// Boot
// ---------------------------------------------------------
paintStaticText();
buildAllEntryPanels();
setState("landing");
if(mobileBreakpoint.matches) stageEl.scrollIntoView({ behavior: "instant", inline: "start", block: "nearest" });
updateSwipeHints();

// ---------------------------------------------------------
// "Torna all'index" naviga verso index.html: senza un piccolo
// ritardo il browser cambia pagina prima che il suono del tap (gia'
// gestito dal listener generico qui sopra) faccia in tempo a
// partire, tagliandolo via. Qui si ritarda solo la navigazione vera
// e propria, non si ripete il suono.
// ---------------------------------------------------------
document.querySelectorAll("a.index-link").forEach(link => {
  link.addEventListener("click", (ev) => {
    ev.preventDefault();
    setTimeout(() => { window.location.href = link.href; }, 550);
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

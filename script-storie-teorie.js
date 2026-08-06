// ============================================================
// STORIE & TEORIE — logica di stato e rendering
// ============================================================

const STRINGS = {
  it: {
    brand: "Il Filo Nascosto",
    brandMobile: "Il Filo\nNascosto",
    sidebarEyebrow: "Teorie",
    railLabel: "Storie Nascoste",
    landingEyebrow: "Benvenuto nell'archivio\ndi storie nascoste e teorie",
    landingTitle: "The Forgotten Shelf",
    landingIntro: "The Forgotten Shelf raccoglie riflessioni, teorie dei fan e retroscena nascosti dentro alcune delle saghe videoludiche più amate: dettagli che sfuggono a una prima lettura, indizi lasciati dagli sviluppatori, ipotesi che il tempo non ha ancora del tutto confermato né smentito. Un angolo pensato per chi ama guardare oltre la superficie della trama.",
    spoilerAlert: "Ogni pagina contiene sinossi dettagliate delle trame, inclusi finali e colpi di scena. Procedi solo se hai già completato i titoli o non temi gli spoiler.",
    landingSub: "Seleziona una voce dalla colonna Teorie o da quella delle Storie Nascoste per approfondire.",
    landingSubMobile: "Seleziona una voce dalla finestra Teorie o da quella delle Storie Nascoste per approfondire.",
    kofiLabel: "Sostienimi su Ko-fi",
    backToIndexLabel: "Torna all'index",
    entryCopyright: "© 2026 Sakrem — Analisi e testo originali"
  },
  en: {
    brand: "The Hidden Thread",
    brandMobile: "The Hidden\nThread",
    sidebarEyebrow: "Theories",
    railLabel: "Hidden Stories",
    landingEyebrow: "Welcome to the archive\nof hidden stories and theories",
    landingTitle: "The Forgotten Shelf",
    landingIntro: "The Forgotten Shelf collects fan theories, reflections, and hidden details buried inside some of the most beloved video game sagas — clues that slip past a first playthrough, threads left behind by developers, ideas time hasn't fully confirmed or debunked. A corner built for anyone who loves looking past the surface of the plot.",
    spoilerAlert: "Every page contains detailed plot synopses, including endings and twists. Proceed only if you've already finished the games or aren't worried about spoilers.",
    landingSub: "Select an entry from the Theories column or from the Hidden Stories column to dive in.",
    landingSubMobile: "Select an entry from the Theories screen or from the Hidden Stories screen to dive in.",
    kofiLabel: "Support me on Ko-fi",
    backToIndexLabel: "Back to index",
    entryCopyright: "© 2026 Sakrem — Original analysis and text"
  }
};

const state = {
  lang: "it",
  view: "landing",   // landing | entry
  column: null,      // teorie | storie
  entryId: null,
  musicOn: true,
  trackIndex: 0
};

const el = {
  body: document.body,
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
  trackProgressFill: document.getElementById("trackProgressFill"),
  volumeSlider: document.getElementById("volumeSlider"),
  musicToggle: document.getElementById("musicToggle"),
  entryGamePicker: document.getElementById("entryGamePicker"),
  entryGameTrigger: document.getElementById("entryGameTrigger"),
  entryGameTriggerLabel: document.getElementById("entryGameTriggerLabel"),
  entryGameMenu: document.getElementById("entryGameMenu"),
  musicControl: document.getElementById("musicControl"),
};

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
  el.teorieList.innerHTML = "";
  TEORIE_ORDER.forEach(id => {
    const item = TEORIE[id];
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.type = "button";
    btn.textContent = tf(item.gameLabel);
    btn.classList.toggle("is-active", state.column === "teorie" && state.entryId === id);
    btn.style.setProperty("--item-accent", item.accentColor || "#6b7280");
    btn.addEventListener("click", () => selectEntry("teorie", id));
    li.appendChild(btn);
    el.teorieList.appendChild(li);
  });

  el.storieList.innerHTML = "";
  STORIE_ORDER.forEach(id => {
    const item = STORIE[id];
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.type = "button";
    btn.textContent = tf(item.gameLabel);
    btn.classList.toggle("is-active", state.column === "storie" && state.entryId === id);
    btn.style.setProperty("--item-accent", item.accentColor || "#6b7280");
    btn.addEventListener("click", () => selectEntry("storie", id));
    li.appendChild(btn);
    el.storieList.appendChild(li);
  });
}

function currentEntry(){
  if(!state.entryId) return null;
  const table = state.column === "teorie" ? TEORIE : STORIE;
  return table[state.entryId] || null;
}

function renderEntry(){
  const entry = currentEntry();
  if(!entry){ el.entryContent.innerHTML = ""; return; }

  el.body.style.setProperty("--item-accent", entry.accentColor || "#6b7280");
  const isMobile = window.matchMedia("(hover:none) and (pointer:coarse)").matches;
  const bannerUrl = (isMobile && entry.mobileBanner) ? entry.mobileBanner : entry.banner;
  el.pageHeaderBanner.style.backgroundImage = bannerUrl ? `url('${bannerUrl}')` : "";
  el.body.style.setProperty("--banner-x-offset", (entry.bannerOffset != null ? entry.bannerOffset : 125) + "px");
  el.entryContent.innerHTML = `
    <h1 class="entry-title">${tf(entry.title)}</h1>
    ${state.column === "teorie" ? `<p class="entry-copyright">${t("entryCopyright")}</p>` : ""}
    <p class="entry-body">${tf(entry.body)}</p>
  `;

  // riavvia l'animazione d'ingresso
  el.entryContent.style.animation = "none";
  void el.entryContent.offsetWidth;
  el.entryContent.style.animation = "";

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
  if(state.column !== column || state.entryId !== id) state.trackIndex = 0;
  state.column = column;
  state.entryId = id;
  setState("entry");
  closeMobileSidebar();
  closeRailDrawer();
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

el.bgMusic.volume = parseFloat(el.volumeSlider.value);
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
  renderLists();
  if(state.view === "entry") renderEntry();
});

// ---------------------------------------------------------
// Mobile: niente più hamburger/cassetti. Teorie, stage e Storie
// Nascoste sono tre pannelli affiancati (vedi CSS, scroll-snap
// orizzontale); questa funzione riporta lo scroll sullo stage,
// es. dopo aver scelto una voce da uno dei due elenchi laterali.
// Inerte su desktop (il layout lì non scrolla).
// ---------------------------------------------------------
const mobileBreakpoint = window.matchMedia("(hover:none) and (pointer:coarse)");
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
}
if(layoutEl) layoutEl.addEventListener("scroll", updateSwipeHints, { passive: true });

el.brandBtn.addEventListener("click", () => {
  setState("landing");
  // Stesso fix gia' fatto per Storie Senza Cornice: riporta sempre
  // allo stage indipendentemente da dove ci si trova nel carosello.
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
    tap.volume = 0.12;
    tap.play().catch(() => { /* bloccato finché non c'è un gesto utente; il click stesso lo è, quindi è solo un fallback */ });
  }
});

// ---------------------------------------------------------
// Boot
// ---------------------------------------------------------
paintStaticText();
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

// ============================================================
// RACCONTI — logica di stato e rendering
// ============================================================

const STRINGS = {
  it: {
    brand: "Racconti Brevi\n& Libri",
    sidebarEyebrow: "Racconti brevi",
    railLabel: "Libri",
    landingEyebrow: "Benvenuto nell'archivio\ndi storie nascoste e teorie",
    landingTitle: "The Forgotten Shelf",
    landingIntro: "Storie & Teorie raccoglie riflessioni, teorie dei fan e retroscena nascosti dentro alcune delle saghe videoludiche più amate: dettagli che sfuggono a una prima lettura, indizi lasciati dagli sviluppatori, ipotesi che il tempo non ha ancora del tutto confermato né smentito. Un angolo pensato per chi ama guardare oltre la superficie della trama.",
    spoilerAlert: "Ogni pagina contiene sinossi dettagliate delle trame, inclusi finali e colpi di scena. Procedi solo se hai già completato i titoli o non temi gli spoiler.",
    landingSub: "Seleziona una voce dalla colonna Racconti brevi o da quella dei Libri per approfondire.",
    landingSubMobile: "Seleziona una voce dalla finestra Racconti brevi o da quella dei Libri per approfondire.",
    kofiLabel: "Sostienimi su Ko-fi",
    backToIndexLabel: "Torna all'index"
  },
  en: {
    brand: "Short Stories\n& Books",
    sidebarEyebrow: "Short Stories",
    railLabel: "Books",
    landingEyebrow: "Welcome to the archive\nof hidden stories and theories",
    landingTitle: "The Forgotten Shelf",
    landingIntro: "Stories & Theories collects fan theories, reflections, and hidden details buried inside some of the most beloved video game sagas — clues that slip past a first playthrough, threads left behind by developers, ideas time hasn't fully confirmed or debunked. A corner built for anyone who loves looking past the surface of the plot.",
    spoilerAlert: "Every page contains detailed plot synopses, including endings and twists. Proceed only if you've already finished the games or aren't worried about spoilers.",
    landingSub: "Select an entry from the Short Stories column or from the Books column to dive in.",
    landingSubMobile: "Select an entry from the Short Stories screen or from the Books screen to dive in.",
    kofiLabel: "Support me on Ko-fi",
    backToIndexLabel: "Back to index"
  }
};

const state = {
  lang: "it",
  view: "landing",   // landing | entry
  column: null,      // teorie | storie
  entryId: null,
  musicOn: false,    // parte sempre muto: va scelta una playlist dal popup
  playlist: null,    // { label:{it,en}, tracks:[...] } scelta dal popup del volume
  trackIndex: 0
};

const el = {
  body: document.body,
  brandBtn: document.getElementById("brandBtn"),
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
  playlistMenu: document.getElementById("playlistMenu"),
  entryGamePicker: document.getElementById("entryGamePicker"),
  entryGameTrigger: document.getElementById("entryGameTrigger"),
  entryGameTriggerLabel: document.getElementById("entryGameTriggerLabel"),
  entryGameMenu: document.getElementById("entryGameMenu"),
  musicControl: document.getElementById("musicControl"),
};

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
  const isMobileEntry = window.matchMedia("(max-width:760px)").matches && state.view === "entry";
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
  RACCONTI_ORDER.forEach(id => {
    const item = RACCONTI[id];
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
  LIBRI_ORDER.forEach(id => {
    const item = LIBRI[id];
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
  const table = state.column === "teorie" ? RACCONTI : LIBRI;
  return table[state.entryId] || null;
}

function renderEntry(){
  const entry = currentEntry();
  if(!entry){ el.entryContent.innerHTML = ""; return; }

  el.body.style.setProperty("--item-accent", entry.accentColor || "#6b7280");
  const isMobile = window.matchMedia("(max-width:760px)").matches;
  const bannerUrl = (isMobile && entry.mobileBanner) ? entry.mobileBanner : entry.banner;
  el.pageHeaderBanner.style.backgroundImage = bannerUrl ? `url('${bannerUrl}')` : "";
  el.body.style.setProperty("--banner-x-offset", (entry.bannerOffset != null ? entry.bannerOffset : 125) + "px");
  el.entryContent.innerHTML = `
    <h1 class="entry-title">${tf(entry.title)}</h1>
    ${entry.tag ? `<p class="entry-tag">${tf(entry.tag)}</p>` : ""}
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
  } else {
    el.body.style.removeProperty("--cyan");
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

el.bgMusic.volume = parseFloat(el.volumeSlider.value);
el.volumeSlider.addEventListener("input", () => {
  el.bgMusic.volume = parseFloat(el.volumeSlider.value);
});

el.musicToggle.addEventListener("click", (ev) => {
  ev.stopPropagation();
  if(state.musicOn){
    // Spegnimento: la playlist si "dimentica", la prossima riattivazione
    // richiede una nuova scelta dal popup.
    state.musicOn = false;
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
const mobileBreakpoint = window.matchMedia("(max-width:760px)");
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

el.brandBtn.addEventListener("click", () => setState("landing"));

// ---------------------------------------------------------
// Suono UI al tap, stesso comportamento di timeline.html
// ---------------------------------------------------------
const TAP_SOUND_URL = "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Tap.mp3";
document.addEventListener("click", (e) => {
  if(e.target.closest("button")){
    const tap = new Audio(TAP_SOUND_URL);
    tap.volume = 0.2;
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

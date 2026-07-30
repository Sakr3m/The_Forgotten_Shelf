// ============================================================
// STORIE & TEORIE — logica di stato e rendering
// ============================================================

const STRINGS = {
  it: {
    brand: "Storie & Teorie",
    sidebarEyebrow: "Teorie",
    railLabel: "Storie Nascoste",
    landingEyebrow: "Benvenuto nell'archivio",
    landingTitle: "The Forgotten Shelf",
    landingIntro: "The Forgotten Shelf raccoglie e riordina le linee temporali di alcune delle saghe videoludiche più amate, ricostruendo l'ordine cronologico degli eventi capitolo per capitolo — tra continuità ufficiali e progressioni ricostruite dai fan quando un canon dichiarato non esiste. Un archivio pensato per chi vuole orientarsi tra spin-off, reboot e universi paralleli senza perdersi.",
    spoilerAlert: "Ogni pagina contiene sinossi dettagliate delle trame, inclusi finali e colpi di scena. Procedi solo se hai già completato i titoli o non temi gli spoiler.",
    landingSub: "Seleziona una voce dalla colonna Teorie o da quella delle Storie Nascoste per approfondire.",
    kofiLabel: "Sostienimi su Ko-fi",
    backLabel: "Torna all'archivio",
    tagTeoria: "Teoria",
    tagStoria: "Storia Nascosta"
  },
  en: {
    brand: "Stories & Theories",
    sidebarEyebrow: "Theories",
    railLabel: "Hidden Stories",
    landingEyebrow: "Welcome to the archive",
    landingTitle: "The Forgotten Shelf",
    landingIntro: "The Forgotten Shelf collects and reorders the timelines of some of the most beloved video game sagas, reconstructing the chronological order of events chapter by chapter — spanning official continuities and fan-reconstructed progressions where no declared canon exists. An archive built for anyone who wants to navigate spin-offs, reboots, and parallel universes without getting lost.",
    spoilerAlert: "Every page contains detailed plot synopses, including endings and twists. Proceed only if you've already finished the games or aren't worried about spoilers.",
    landingSub: "Select an entry from the Theories column or from the Hidden Stories column to dive in.",
    kofiLabel: "Support me on Ko-fi",
    backLabel: "Back to the archive",
    tagTeoria: "Theory",
    tagStoria: "Hidden Story"
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
  langSwitch: document.getElementById("langSwitch"),
  teorieList: document.getElementById("teorieList"),
  storieList: document.getElementById("storieList"),
  landingPanel: document.getElementById("landingPanel"),
  entryPanel: document.getElementById("entryPanel"),
  entryContent: document.getElementById("entryContent"),
  bgMusic: document.getElementById("bgMusic"),
  trackInfo: document.getElementById("trackInfo"),
  trackTitle: document.getElementById("trackTitle"),
  trackGame: document.getElementById("trackGame"),
  trackSkipBtn: document.getElementById("trackSkipBtn"),
  trackProgressFill: document.getElementById("trackProgressFill"),
  volumeSlider: document.getElementById("volumeSlider"),
  musicToggle: document.getElementById("musicToggle"),
};

function t(key){ return STRINGS[state.lang][key]; }
function tf(field){ return field ? (field[state.lang] || field.en || field.it || "") : ""; }

function arrowIcon(dir){
  return dir === "left"
    ? `<svg viewBox="0 0 12 10" aria-hidden="true"><path d="M5 1L1 5l4 4M1.4 5H11" stroke="currentColor" stroke-width="1.4" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>`
    : `<svg viewBox="0 0 12 10" aria-hidden="true"><path d="M7 1l4 4-4 4M10.6 5H1" stroke="currentColor" stroke-width="1.4" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
}

// ---------------------------------------------------------
// Static text (i18n) painting
// ---------------------------------------------------------
function paintStaticText(){
  document.querySelectorAll("[data-i18n]").forEach(node => {
    node.textContent = t(node.getAttribute("data-i18n"));
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
    btn.textContent = tf(item.title);
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
    btn.textContent = tf(item.title);
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
  const tag = state.column === "teorie" ? t("tagTeoria") : t("tagStoria");

  el.body.style.setProperty("--item-accent", entry.accentColor || "#6b7280");
  el.entryContent.innerHTML = `
    <span class="entry-tag">${tag}</span>
    <h1 class="entry-title">${tf(entry.title)}</h1>
    <p class="entry-body">${tf(entry.body)}</p>
    <div class="entry-back">
      <button type="button" class="title-back" id="entryBackBtn">${arrowIcon("left")}<span>${t("backLabel")}</span></button>
    </div>
  `;
  document.getElementById("entryBackBtn").addEventListener("click", () => setState("landing"));

  // riavvia l'animazione d'ingresso
  el.entryContent.style.animation = "none";
  void el.entryContent.offsetWidth;
  el.entryContent.style.animation = "";
}

// ---------------------------------------------------------
// Transizioni di stato
// ---------------------------------------------------------
function setState(view){
  state.view = view;
  el.body.dataset.state = view;
  if(view === "landing"){
    state.column = null; state.entryId = null;
    el.body.style.removeProperty("--item-accent");
  }

  el.landingPanel.hidden = view !== "landing";
  el.entryPanel.hidden = view !== "entry";

  renderLists();
  if(view === "entry") renderEntry();
  updateMusicPlayback();
}

function selectEntry(column, id){
  if(state.column !== column || state.entryId !== id) state.trackIndex = 0;
  state.column = column;
  state.entryId = id;
  setState("entry");
  closeMobileSidebar();
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

el.bgMusic.volume = parseFloat(el.volumeSlider.value);
el.volumeSlider.addEventListener("input", () => {
  el.bgMusic.volume = parseFloat(el.volumeSlider.value);
});

el.musicToggle.addEventListener("click", () => {
  state.musicOn = !state.musicOn;
  updateMusicPlayback();
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
// Drawer mobile (hamburger) — controlla solo la colonna Teorie,
// la colonna Storie Nascoste diventa una striscia sotto lo stage.
// ---------------------------------------------------------
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const sidebarBackdrop = document.getElementById("sidebarBackdrop");

function openMobileSidebar(){
  el.body.classList.add("sidebar-open");
  sidebarBackdrop.hidden = false;
  mobileMenuBtn.setAttribute("aria-expanded", "true");
}
function closeMobileSidebar(){
  el.body.classList.remove("sidebar-open");
  sidebarBackdrop.hidden = true;
  mobileMenuBtn.setAttribute("aria-expanded", "false");
}
mobileMenuBtn.addEventListener("click", () => {
  el.body.classList.contains("sidebar-open") ? closeMobileSidebar() : openMobileSidebar();
});
sidebarBackdrop.addEventListener("click", closeMobileSidebar);

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

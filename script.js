// ============================================================
// L'ARCHIVIO — logica di stato e rendering
// ============================================================

const STRINGS = {
  it: {
    brand: "Timeline",
    sidebarEyebrow: "Libreria Timeline",
    sidebarNote: "— altri titoli in arrivo —",
    landingEyebrow: "Benvenuto su Timeline",
    landingTitle: "Scegli un titolo",
    landingSub: "Ogni titolo custodisce una o più linee temporali. Selezionane uno per aprirlo.",
    universeLabel: "Universo",
    backToTimeline: "← Torna alla linea temporale"
  },
  en: {
    brand: "Timeline",
    sidebarEyebrow: "Timeline Library",
    sidebarNote: "— more titles coming soon —",
    landingEyebrow: "Welcome to Timeline",
    landingTitle: "Choose a title",
    landingSub: "Every title holds one or more timelines. Select one to open it.",
    universeLabel: "Universe",
    backToTimeline: "← Back to the timeline"
  }
};

const state = {
  lang: "it",
  view: "landing",     // landing | game | title
  gameId: null,
  universeIndex: 0,
  entryId: null
};

const el = {
  body: document.body,
  brandBtn: document.getElementById("brandBtn"),
  langSwitch: document.getElementById("langSwitch"),
  universePicker: document.getElementById("universePicker"),
  universeTrigger: document.getElementById("universeTrigger"),
  universeTriggerLabel: document.getElementById("universeTriggerLabel"),
  universeMenu: document.getElementById("universeMenu"),
  gameList: document.getElementById("gameList"),
  caseGrid: document.getElementById("caseGrid"),
  landingPanel: document.getElementById("landingPanel"),
  gamePanel: document.getElementById("gamePanel"),
  gameHeader: document.getElementById("gameHeader"),
  universesRow: document.getElementById("universesRow"),
  titlePanel: document.getElementById("titlePanel"),
  titleContent: document.getElementById("titleContent"),
  timelineRail: document.getElementById("timelineRail"),
  railLabel: document.getElementById("railLabel"),
  railTrack: document.getElementById("railTrack"),
};

function t(key){ return STRINGS[state.lang][key]; }
function tf(field){ return field ? (field[state.lang] || field.en || field.it || "") : ""; }
function monogram(str){ return (str || "?").trim().charAt(0).toUpperCase(); }

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
    node.textContent = t(node.getAttribute("data-i18n"));
  });
  document.documentElement.lang = state.lang;
  el.langSwitch.querySelectorAll(".lang-option").forEach(opt => {
    opt.classList.toggle("is-active", opt.dataset.langOption === state.lang);
  });
}

// ---------------------------------------------------------
// Sidebar + landing case grid
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
    btn.addEventListener("click", () => selectGame(id));
    li.appendChild(btn);
    el.gameList.appendChild(li);
  });
}

function renderCaseGrid(){
  el.caseGrid.innerHTML = "";
  GAME_ORDER.forEach(id => {
    const g = GAMES[id];
    const card = document.createElement("button");
    card.type = "button";
    card.className = "case-card";
    const uCount = g.universes.length;
    const uLabel = uCount === 1
      ? (state.lang === "it" ? "1 continuità" : "1 continuity")
      : (state.lang === "it" ? uCount + " universi" : uCount + " universes");
    card.innerHTML = `
      <span class="seal" aria-hidden="true"><span class="seal__crack"></span></span>
      <h3>${tf(g.listTitle)}</h3>
      <p class="case-count">${uLabel}</p>
      <p class="case-blurb">${tf(g.blurb)}</p>
    `;
    card.addEventListener("click", () => selectGame(id));
    el.caseGrid.appendChild(card);
  });
}

// ---------------------------------------------------------
// Universe picker (top bar)
// ---------------------------------------------------------
function renderUniversePicker(){
  const g = currentGame();
  if(!g){ el.universePicker.hidden = true; return; }
  el.universePicker.hidden = false;
  const u = currentUniverse();
  el.universeTriggerLabel.textContent = tf(u.name);

  el.universeMenu.innerHTML = "";
  g.universes.forEach((uni, idx) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.type = "button";
    btn.setAttribute("role", "option");
    btn.classList.toggle("is-active", idx === state.universeIndex);
    btn.innerHTML = `${tf(uni.name)}<span class="u-span">${tf(uni.span)}</span>`;
    btn.addEventListener("click", () => {
      closeUniverseMenu();
      selectUniverse(idx);
    });
    li.appendChild(btn);
    el.universeMenu.appendChild(li);
  });
}

function openUniverseMenu(){
  el.universeMenu.hidden = false;
  el.universePicker.classList.add("is-open");
  el.universeTrigger.setAttribute("aria-expanded", "true");
}
function closeUniverseMenu(){
  el.universeMenu.hidden = true;
  el.universePicker.classList.remove("is-open");
  el.universeTrigger.setAttribute("aria-expanded", "false");
}

el.universeTrigger.addEventListener("click", () => {
  el.universeMenu.hidden ? openUniverseMenu() : closeUniverseMenu();
});
document.addEventListener("click", (ev) => {
  if(!el.universePicker.contains(ev.target)) closeUniverseMenu();
});

function selectUniverse(idx){
  state.universeIndex = idx;
  if(state.view === "title"){
    // switching universe from the title view: jump to that universe's first entry
    const g = currentGame();
    const u = g.universes[idx];
    if(u.entries.length) selectEntry(u.entries[0].id);
  } else {
    renderUniversePicker();
    renderGamePanel();
  }
}

// ---------------------------------------------------------
// Game panel (header + proportional horizontal timelines)
// ---------------------------------------------------------
function renderGamePanel(){
  const g = currentGame();
  if(!g) return;

  el.gameHeader.innerHTML = `
    <div class="game-header__cover"><span class="monogram">${monogram(tf(g.title))}</span></div>
    <div>
      <p class="game-header__eyebrow">${tf(g.eyebrow)}</p>
      <h2 class="game-header__title">${tf(g.title)}</h2>
      <p class="game-header__blurb">${tf(g.blurb)}</p>
    </div>
  `;

  el.universesRow.innerHTML = "";
  el.universesRow.className = "universes-row count-" + g.universes.length;

  g.universes.forEach((uni) => {
    const track = document.createElement("div");
    track.className = "u-track";
    track.innerHTML = `
      <div class="u-track__head">
        <p class="u-track__name">${tf(uni.name)}</p>
        <p class="u-track__span">${tf(uni.span)}</p>
      </div>
      <div class="h-timeline"></div>
    `;
    const timeline = track.querySelector(".h-timeline");
    uni.entries.forEach(entry => {
      const node = document.createElement("button");
      node.type = "button";
      node.className = "h-node";
      const yearLabel = state.lang === "it" ? entry.year : (entry.yearEn || entry.year);
      node.innerHTML = `
        <span class="h-node__tile">${entry.image ? `<img src="${entry.image}" alt="">` : `<span class="monogram">${monogram(tf(entry.title))}</span>`}</span>
        <span class="h-node__year">${yearLabel}</span>
        <span class="h-node__title">${tf(entry.title)}</span>
      `;
      node.addEventListener("click", () => selectEntry(entry.id));
      timeline.appendChild(node);
    });
    el.universesRow.appendChild(track);
  });
}

// ---------------------------------------------------------
// Title panel (detail) + vertical rail
// ---------------------------------------------------------
function renderTitlePanel(){
  const g = currentGame();
  const found = findEntry(g, state.entryId);
  if(!found) return;
  const { entry, universe } = found;

  const yearLabel = state.lang === "it" ? entry.year : (entry.yearEn || entry.year);
  const typeLabel = state.lang === "it" ? entry.type : (entry.typeEn || entry.type);

  el.titleContent.innerHTML = `
    <div>
      <span class="title-tag">${typeLabel}</span>
      <span class="title-year">${yearLabel}</span>
    </div>
    <h2 class="title-name">${tf(entry.title)}</h2>
    <p class="title-universe-of">${tf(g.title)} — ${tf(universe.name)}</p>
    ${entry.image ? `<div class="title-media"><img src="${entry.image}" alt=""></div>` : ""}
    <p class="title-synopsis">${tf(entry.synopsis)}</p>
    ${entry.note ? `<p class="title-note">${tf(entry.note)}</p>` : ""}
    <button type="button" class="title-back" id="titleBackBtn">${t("backToTimeline")}</button>
  `;
  document.getElementById("titleBackBtn").addEventListener("click", () => {
    state.view = "game";
    setState("game");
  });

  // restart entrance animation
  el.titleContent.style.animation = "none";
  void el.titleContent.offsetWidth;
  el.titleContent.style.animation = "";
}

function renderRail(){
  const g = currentGame();
  const u = currentUniverse();
  if(!g || !u) return;
  el.railLabel.textContent = tf(u.name);
  el.railTrack.innerHTML = "";
  u.entries.forEach(entry => {
    const node = document.createElement("button");
    node.type = "button";
    node.className = "v-node" + (entry.id === state.entryId ? " is-active" : "");
    const yearLabel = state.lang === "it" ? entry.year : (entry.yearEn || entry.year);
    node.innerHTML = `
      <span class="v-node__tile">${entry.image ? `<img src="${entry.image}" alt="">` : `<span class="monogram">${monogram(tf(entry.title))}</span>`}</span>
      <span class="v-node__meta">
        <span class="v-node__year">${yearLabel}</span><br>
        <span class="v-node__title">${tf(entry.title)}</span>
      </span>
    `;
    node.addEventListener("click", () => selectEntry(entry.id));
    el.railTrack.appendChild(node);
  });
}

// ---------------------------------------------------------
// State transitions
// ---------------------------------------------------------
function setState(view){
  state.view = view;
  el.body.dataset.state = view;

  el.landingPanel.hidden = view !== "landing";
  el.gamePanel.hidden = view !== "game";
  el.titlePanel.hidden = view !== "title";

  if(view === "landing"){
    state.gameId = null; state.universeIndex = 0; state.entryId = null;
    renderSidebar();
    renderCaseGrid();
    renderUniversePicker();
  } else if(view === "game"){
    state.entryId = null;
    renderSidebar();
    renderUniversePicker();
    renderGamePanel();
  } else if(view === "title"){
    renderSidebar();
    renderUniversePicker();
    renderTitlePanel();
    renderRail();
    el.timelineRail.hidden = false;
  }
  if(view !== "title") el.timelineRail.hidden = true;
}

function selectGame(id){
  state.gameId = id;
  state.universeIndex = 0;
  setState("game");
}

function selectEntry(entryId){
  const found = findEntry(currentGame(), entryId);
  if(!found) return;
  state.entryId = entryId;
  state.universeIndex = currentGame().universes.indexOf(found.universe);
  setState("title");
}

// ---------------------------------------------------------
// Language switch
// ---------------------------------------------------------
el.langSwitch.addEventListener("click", () => {
  state.lang = state.lang === "it" ? "en" : "it";
  paintStaticText();
  if(state.view === "landing"){ renderSidebar(); renderCaseGrid(); }
  else if(state.view === "game"){ renderSidebar(); renderUniversePicker(); renderGamePanel(); }
  else if(state.view === "title"){ renderSidebar(); renderUniversePicker(); renderTitlePanel(); renderRail(); }
});

el.brandBtn.addEventListener("click", () => setState("landing"));

// ---------------------------------------------------------
// Boot
// ---------------------------------------------------------
paintStaticText();
setState("landing");

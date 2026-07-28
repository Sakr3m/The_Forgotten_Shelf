// ============================================================
// L'ARCHIVIO — logica di stato e rendering
// ============================================================

const STRINGS = {
  it: {
    brand: "Timeline",
    sidebarEyebrow: "Libreria Timeline",
    landingSub: "Ogni titolo custodisce una o più linee temporali. Selezionane uno per aprirlo.",
    universeLabel: "Universo",
    backToTimeline: "Torna alla linea temporale"
  },
  en: {
    brand: "Timeline",
    sidebarEyebrow: "Timeline Library",
    landingSub: "Every title holds one or more timelines. Select one to open it.",
    universeLabel: "Universe",
    backToTimeline: "Back to the timeline"
  }
};

const state = {
  lang: "it",
  view: "landing",     // landing | game | title
  gameId: null,
  universeIndex: 0,
  entryId: null,
  musicOn: false
};

const el = {
  body: document.body,
  brandBtn: document.getElementById("brandBtn"),
  langSwitch: document.getElementById("langSwitch"),
  musicToggle: document.getElementById("musicToggle"),
  bgMusic: document.getElementById("bgMusic"),
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
function stripLinks(html){
  const div = document.createElement("div");
  div.innerHTML = html;
  div.querySelectorAll("a").forEach(a => { a.replaceWith(document.createTextNode(a.textContent)); });
  return div.innerHTML;
}

// Dot color follows position along the sequence (like the line's own gradient),
// not the media type — cyan -> magenta -> orange across the whole timeline.
const DEFAULT_PALETTE = ["#00f0ff", "#ff2ec4", "#a742ff"];

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
      <p class="case-blurb">${stripLinks(tf(g.blurb))}</p>
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
    const count = uni.entries.length;
    const countLabel = state.lang === "it"
      ? `${count} ${count === 1 ? "episodio" : "episodi"}`
      : `${count} ${count === 1 ? "episode" : "episodes"}`;
    btn.innerHTML = `${tf(uni.name)} · ${countLabel}<span class="u-span">${tf(uni.span)}</span>`;
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
  head.appendChild(nameBlock);

  if(nextBtn) head.appendChild(nextBtn);

  const timeline = track.querySelector(".h-timeline");

  const total = uni.entries.length;
  uni.entries.forEach((entry, i) => {
    const node = document.createElement("button");
    const tileDown = i % 2 === 0; // alternates which side the cover sits on
    node.type = "button";
    node.className = "h-node " + (tileDown ? "h-node--down" : "h-node--up");

    const t = total > 1 ? i / (total - 1) : 0;
    const color = gradientColorAt(t);
    node.style.setProperty("--dot-color", color);

    const tileSpan = `<span class="h-node__tile">${entry.image ? `<img src="${entry.image}" alt="">` : `<span class="monogram">${monogram(tf(entry.title))}</span>`}</span>`;

    // "up": avatar (farthest from line) -> title (text top-aligned, touching avatar) -> [reserved empty 2nd line, touching line] -> line
    // "down": line -> [reserved empty 2nd line, touching line] -> title (text bottom-aligned, touching avatar) -> avatar (farthest from line)
    const titleUp = `<span class="h-node__title h-node__title--top">${tf(entry.title)}</span>`;
    const titleDown = `<span class="h-node__title h-node__title--bottom">${tf(entry.title)}</span>`;

    const topContent = tileDown ? "" : (tileSpan + titleUp);
    const bottomContent = tileDown ? (titleDown + tileSpan) : "";

    node.innerHTML = `
      <span class="h-node__top">${topContent}</span>
      <span class="h-node__marker"><span class="h-node__dot"></span></span>
      <span class="h-node__bottom">${bottomContent}</span>
    `;
    node.addEventListener("click", () => selectEntry(entry.id));
    timeline.appendChild(node);
  });
  return track;
}

function arrowIcon(direction){
  const d = direction === "left" ? "M11 2L4 9L11 16" : "M5 2L12 9L5 16";
  return `<svg viewBox="0 0 16 18" class="carousel-arrow__icon" aria-hidden="true"><path d="${d}" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
}

// ---------------------------------------------------------
// Game panel (header + single centered timeline + carousel)
// ---------------------------------------------------------
function renderGamePanel(){
  const g = currentGame();
  if(!g) return;

  el.gameHeader.innerHTML = `
    ${g.banner ? `<div class="game-header__banner" style="background-image:url('${g.banner}')"></div><div class="game-header__banner-overlay"></div>` : ""}
    <div class="game-header__cover">${g.avatar ? `<img src="${g.avatar}" alt="">` : `<span class="monogram">${monogram(tf(g.title))}</span>`}</div>
    <div class="game-header__info">
      <h2 class="game-header__title">${tf(g.title)}</h2>
      <p class="game-header__blurb">${tf(g.blurb)}</p>
    </div>
  `;

  const universes = g.universes;
  const idx = state.universeIndex;
  const uni = universes[idx];
  const multi = universes.length > 1;

  el.universesRow.innerHTML = "";
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

  const idx = universe.entries.findIndex(e => e.id === entry.id);
  const prevEntry = idx > 0 ? universe.entries[idx - 1] : null;
  const nextEntry = idx < universe.entries.length - 1 ? universe.entries[idx + 1] : null;

  el.titleContent.innerHTML = `
    <div>
      <span class="title-tag">${typeLabel}</span>
      <span class="title-year">${yearLabel}</span>
    </div>
    <h2 class="title-name">${tf(entry.title)}</h2>
    <p class="title-universe-of">${tf(g.title)} — ${tf(universe.name)}</p>
    <p class="title-synopsis">${tf(entry.synopsis)}</p>
    ${entry.note ? `<p class="title-note">${tf(entry.note)}</p>` : ""}
    <div class="title-nav">
      ${prevEntry ? `<button type="button" class="title-nav__side title-nav__side--prev" id="titlePrevBtn">${arrowIcon("left")}<span>${tf(prevEntry.title)}</span></button>` : `<span class="title-nav__spacer"></span>`}
      <button type="button" class="title-back" id="titleBackBtn">${t("backToTimeline")}</button>
      ${nextEntry ? `<button type="button" class="title-nav__side title-nav__side--next" id="titleNextBtn"><span>${tf(nextEntry.title)}</span>${arrowIcon("right")}</button>` : `<span class="title-nav__spacer"></span>`}
    </div>
  `;
  document.getElementById("titleBackBtn").addEventListener("click", () => {
    state.view = "game";
    setState("game");
  });
  if(prevEntry) document.getElementById("titlePrevBtn").addEventListener("click", () => selectEntry(prevEntry.id));
  if(nextEntry) document.getElementById("titleNextBtn").addEventListener("click", () => selectEntry(nextEntry.id));

  let watermark = el.titlePanel.querySelector(".title-watermark");
  const watermarkSrc = g.watermark || entry.image;
  if(watermarkSrc){
    if(!watermark){
      watermark = document.createElement("div");
      watermark.className = "title-watermark";
      el.titlePanel.insertBefore(watermark, el.titleContent);
    }
    watermark.style.backgroundImage = `url('${watermarkSrc}')`;
  } else if(watermark){
    watermark.remove();
  }

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
    document.body.style.setProperty("--tl-1", DEFAULT_PALETTE[0]);
    document.body.style.setProperty("--tl-2", DEFAULT_PALETTE[1]);
    document.body.style.setProperty("--tl-3", DEFAULT_PALETTE[2]);
    document.body.style.setProperty("--gradient", `linear-gradient(90deg, ${DEFAULT_PALETTE[0]}, ${DEFAULT_PALETTE[1]} 55%, ${DEFAULT_PALETTE[2]})`);
    renderSidebar();
    renderCaseGrid();
    renderUniversePicker();
  } else if(view === "game"){
    state.entryId = null;
    applyPaletteToCSS();
    renderSidebar();
    renderUniversePicker();
    renderGamePanel();
  } else if(view === "title"){
    applyPaletteToCSS();
    renderSidebar();
    renderUniversePicker();
    renderTitlePanel();
    renderRail();
    el.timelineRail.hidden = false;
  }
  if(view !== "title") el.timelineRail.hidden = true;
  updateMusicPlayback();
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

// ---------------------------------------------------------
// Background music — game pages only, never autoplays with sound,
// user must opt in via the toggle; browsers block autoplay-with-audio anyway.
// ---------------------------------------------------------
function updateMusicPlayback(){
  const g = currentGame();
  const inGamePages = state.view === "game" || state.view === "title";
  el.musicToggle.hidden = !inGamePages;
  el.musicToggle.setAttribute("aria-pressed", String(state.musicOn));

  if(!inGamePages || !state.musicOn || !g || !g.music){
    el.bgMusic.pause();
    return;
  }
  const wantedSrc = g.music;
  if(!el.bgMusic.src || !el.bgMusic.src.endsWith(wantedSrc)){
    el.bgMusic.src = wantedSrc;
  }
  el.bgMusic.play().catch(() => { /* blocked until a user gesture; toggle click itself counts as one */ });
}

el.musicToggle.addEventListener("click", () => {
  state.musicOn = !state.musicOn;
  updateMusicPlayback();
});

el.brandBtn.addEventListener("click", () => setState("landing"));

// ---------------------------------------------------------
// Boot
// ---------------------------------------------------------
paintStaticText();
setState("landing");

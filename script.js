// ============================================================
// L'ARCHIVIO — logica di stato e rendering
// ============================================================

const STRINGS = {
  it: {
    brand: "La Traccia del Tempo",
    brandMobile: "La Traccia\ndel Tempo",
    sidebarEyebrow: "Libreria Timeline",
    landingEyebrow: "Benvenuto nell'archivio\nTimeline",
    landingTitle: "The Forgotten Shelf",
    landingIntro: "The Forgotten Shelf raccoglie le linee temporali di alcune delle saghe videoludiche più amate, con l'ordine cronologico degli eventi ricostruito capitolo per capitolo. Un archivio pensato per chi vuole i fatti, in ordine, senza perdersi tra spin-off, reboot e universi paralleli.",
    spoilerAlert: "Ogni pagina contiene sinossi dettagliate delle trame, inclusi finali e colpi di scena. Procedi solo se hai già completato i titoli o non temi gli spoiler.",
    landingSub: "Seleziona un titolo dalla libreria a sinistra per esplorarne la linea temporale.",
    kofiLabel: "Sostienimi su Ko-fi",
    backToIndexLabel: "Torna all'index",
    universeLabel: "Universo",
    backToTimeline: "Torna alla linea temporale",
    canonTitlesLabel: "La progressione più accreditata segue questi titoli, nell'ordine:",
    timelineScrollToggle: "Attiva/disattiva lo scorrimento della linea temporale"
  },
  en: {
    brand: "The Trace of Time",
    brandMobile: "The Trace\nof Time",
    sidebarEyebrow: "Timeline Library",
    landingEyebrow: "Welcome to the\nTimeline archive",
    landingTitle: "The Forgotten Shelf",
    landingIntro: "The Forgotten Shelf collects the timelines of some of the most beloved video game sagas, with the chronological order of events reconstructed chapter by chapter. An archive built for anyone who wants the facts, in order, without getting lost among spin-offs, reboots, and parallel universes.",
    spoilerAlert: "Every page contains detailed plot synopses, including endings and twists. Proceed only if you've already finished the games or aren't worried about spoilers.",
    landingSub: "Select a title from the library on the left to explore its timeline.",
    kofiLabel: "Support me on Ko-fi",
    backToIndexLabel: "Back to index",
    universeLabel: "Universe",
    backToTimeline: "Back to the timeline",
    canonTitlesLabel: "The most widely accepted progression follows these titles, in order:",
    timelineScrollToggle: "Toggle timeline scrolling"
  }
};

const state = {
  lang: "it",
  view: "landing",     // landing | game | title
  gameId: null,
  universeIndex: 0,
  entryId: null,
  musicOn: true,
  trackIndex: 0,
  timelineScrollMode: false   // PC only: off = fit everything on screen, on = free spacing + drag-to-scroll
};

const el = {
  body: document.body,
  brandBtn: document.getElementById("brandBtn"),
  brand: document.querySelector(".brand"),
  socialLinks: document.querySelector(".social-links"),
  stageControls: document.querySelector(".stage-controls"),
  langSwitch: document.getElementById("langSwitch"),
  musicToggle: document.getElementById("musicToggle"),
  bgMusic: document.getElementById("bgMusic"),
  trackInfo: document.getElementById("trackInfo"),
  trackTitle: document.getElementById("trackTitle"),
  trackGame: document.getElementById("trackGame"),
  trackSkipBtn: document.getElementById("trackSkipBtn"),
  trackProgressFill: document.getElementById("trackProgressFill"),
  volumeSlider: document.getElementById("volumeSlider"),
  gameList: document.getElementById("gameList"),
  landingPanel: document.getElementById("landingPanel"),
  gamePanel: document.getElementById("gamePanel"),
  gameHeader: document.getElementById("gameHeader"),
  universesRow: document.getElementById("universesRow"),
  titlePanel: document.getElementById("titlePanel"),
  titleContent: document.getElementById("titleContent"),
  timelineRail: document.getElementById("timelineRail"),
  railLabel: document.getElementById("railLabel"),
  railTrack: document.getElementById("railTrack"),
  watermarkBrightness: document.getElementById("watermarkBrightness"),
  watermarkBrightnessSlider: document.getElementById("watermarkBrightnessSlider"),
};

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

// "Gradiometro" — moltiplicatore di luminosità per le filigrane,
// una prova richiesta dall'utente: condiviso con storie_senza_cornice.html
// tramite la stessa chiave, cosi' regolarlo su una pagina vale
// anche sull'altra.
const WATERMARK_BRIGHTNESS_KEY = "tfs-watermark-brightness";
const storedWatermarkBrightness = localStorage.getItem(WATERMARK_BRIGHTNESS_KEY);
let watermarkBrightness = storedWatermarkBrightness !== null ? parseFloat(storedWatermarkBrightness) : 0.5;
if(el.watermarkBrightnessSlider) el.watermarkBrightnessSlider.value = String(watermarkBrightness);

// Applica il moltiplicatore all'opacità base di una filigrana
// (clampata a 1 come massimo reale, l'opacità CSS non va oltre).
// currentWatermarkBaseOpacity tiene traccia dell'ultima base usata,
// cosi' quando si muove lo slider si può ricalcolare senza dover
// rifare tutto il render del pannello.
let currentWatermarkBaseOpacity = null;
function computeWatermarkOpacity(baseOpacity){
  const base = baseOpacity != null ? baseOpacity : 0.16;
  currentWatermarkBaseOpacity = base;
  // Il moltiplicatore reale è il doppio del valore dello slider: a
  // 0.5 (25% della barra, che va da 0 a 2) il moltiplicatore è
  // esattamente 1, cioè "usa il valore già impostato per la voce,
  // invariato" — i valori dati finora per ogni filigrana sono
  // pensati per stare lì, non a metà barra.
  return Math.min(1, base * (watermarkBrightness * 2));
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
function tf(field){ return field ? (field[state.lang] || field.en || field.it || "") : ""; }
function monogram(str){ return (str || "?").trim().charAt(0).toUpperCase(); }

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
    btn.style.setProperty("--item-accent", g.accentColor || "#6b7280");
    btn.addEventListener("click", () => selectGame(id));
    li.appendChild(btn);
    el.gameList.appendChild(li);
  });
}

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

    const hasAvatar = !entry.noAvatar;
    const tileSpan = hasAvatar
      ? `<span class="h-node__tile">${entry.image ? `<img src="${entry.image}" alt="">` : `<span class="monogram">${monogram(tf(entry.title))}</span>`}</span>`
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

  if(g.noTimeline){
    el.universesRow.className = "universe-stage no-timeline";
    let canonWatermarkExtraStyle = "";
    if(g.watermarkBottomFade){
      // Combina la sfumatura orizzontale di sempre (quella di
      // .canon-watermark, 22%) con una verticale in più, verso il
      // basso: stessa tecnica usata per Dragon Quest.
      const fadeMask = "linear-gradient(90deg, transparent, black 22%), linear-gradient(180deg, black 75%, transparent)";
      canonWatermarkExtraStyle = `-webkit-mask-image:${fadeMask};mask-image:${fadeMask};mask-composite:intersect;`;
    }
    el.universesRow.innerHTML = `
      <div class="canon-page">
        ${g.watermark ? `<div class="canon-watermark" style="background-image:url('${g.watermark}');${g.watermarkSize ? `background-size:${g.watermarkSize};` : ""}${g.watermarkPosition ? `background-position:${g.watermarkPosition};` : ""}opacity:${computeWatermarkOpacity(g.watermarkOpacity)};${canonWatermarkExtraStyle}"></div>` : ""}
        <div class="canon-note">
          <p>${tf(g.canonNote.intro)}</p>
          <p class="canon-note__titles-label">${t("canonTitlesLabel")}</p>
          <p class="canon-note__titles">${tf(g.canonNote.titles)}</p>
          <p>${tf(g.canonNote.outro)}</p>
        </div>
      </div>
    `;
    el.watermarkBrightness.hidden = !g.watermark;
    el.watermarkBrightness.style.top = ""; /* posizione standard (CSS, riga dell'header) */
    el.watermarkBrightness.style.right = "25px"; /* qui il rail non c'è (display:none),
      il contenuto si estende fino al vero margine destro (25px), non fino a
      var(--rail-width) come nelle pagine con rail visibile */
    return;
  }

  el.watermarkBrightness.hidden = true;
  el.watermarkBrightness.style.top = "";
  el.watermarkBrightness.style.right = "";

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

  const scrollToggle = document.createElement("button");
  scrollToggle.type = "button";
  scrollToggle.className = "timeline-scroll-toggle";
  scrollToggle.setAttribute("aria-pressed", String(state.timelineScrollMode));
  scrollToggle.setAttribute("aria-label", t("timelineScrollToggle"));
  scrollToggle.innerHTML = `<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M2 10h16M2 10l4-4M2 10l4 4M18 10l-4-4M18 10l-4 4" stroke="currentColor" stroke-width="1.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  scrollToggle.addEventListener("click", () => {
    state.timelineScrollMode = !state.timelineScrollMode;
    renderGamePanel();
  });
  el.universesRow.appendChild(scrollToggle);

  // Verticale: stessa altezza della riga del carosello universi
  // (.u-track__head), misurata a runtime così resta corretta anche
  // per i giochi a universo singolo, dove le frecce non esistono.
  // L'orizzontale è fisso via CSS (right:100px, vedi styles.css).
  const panelRect = el.gamePanel.getBoundingClientRect();
  const trackHead = el.universesRow.querySelector(".u-track__head");
  const headRect = trackHead ? trackHead.getBoundingClientRect() : panelRect;
  const headCenterY = (headRect.top + headRect.bottom) / 2;
  scrollToggle.style.top = (headCenterY - panelRect.top).toFixed(2) + "px";
  scrollToggle.style.transform = "translateY(-50%)";

  const liveTimeline = el.universesRow.querySelector(".h-timeline");
  if(liveTimeline){
    const isDesktop = window.matchMedia("(hover:hover), (pointer:fine)").matches;
    const avatarScale = 1;
    const dotScale = 0.625; // 15px dot
    liveTimeline.style.setProperty("--avatar-scale", avatarScale.toFixed(3));
    liveTimeline.style.setProperty("--dot-scale", dotScale.toFixed(3));

    if(!isDesktop){
      // Mobile: the timeline is vertical (line runs top-to-bottom, nodes
      // stacked, avatar/title alternating left/right of it instead of
      // above/below). The page itself already scrolls vertically, so there's
      // no need for any of the desktop's width-fitting/overlap/scroll-toggle
      // machinery — just a comfortable fixed gap between stacked nodes.
      liveTimeline.style.justifyContent = "";
      liveTimeline.style.gap = "36px";
      liveTimeline.style.overflowX = "";
      liveTimeline.style.flexGrow = "";
      liveTimeline.style.flexShrink = "";
      liveTimeline.style.flexBasis = "";
      liveTimeline.style.width = "";
      liveTimeline.classList.remove("is-scrollable");
      Array.from(liveTimeline.querySelectorAll(".h-node")).forEach(node => { node.style.marginLeft = ""; });

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
      return;
    }

    // Fixed rail rule: 42px in from the sidebar's game-list rows on the left
    // (already true as-is: h-timeline sits flush at the stage's own content
    // edge, which is naturally 42px from the sidebar rows) and 42px in from
    // the stage's content edge on the right too. So the usable width is
    // simply the natural full width minus that 42px right inset.
    const RIGHT_INSET = 42;
    const naturalWidth = liveTimeline.clientWidth;
    const availableWidth = Math.max(0, naturalWidth - RIGHT_INSET);

    // PC-only manual switch (button above): OFF (default) keeps the line at
    // exactly the same length as every other timeline (the full 42px-ruled
    // width, no cut) — the dots are never artificially moved to make this
    // true, they're anchored to their own real rendered position below, so
    // this can never leave them misaligned with the line. ON drops the
    // width constraint entirely, letting the row grow to its natural size
    // and switches on drag-to-scroll for whatever doesn't fit.
    const freeScrollMode = state.timelineScrollMode;

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
      // the start, each next one placed via an explicit margin (negative
      // when the count is high enough that nodes must overlap to all fit),
      // rather than leaving anything to an automatic gap or to scrolling.
      liveTimeline.style.justifyContent = "flex-start";
      liveTimeline.style.gap = "0px";
      const spacing = nodes.length > 1 ? (availableWidth - 100) / (nodes.length - 1) : 0;
      nodes.forEach((node, i) => {
        node.style.marginLeft = i === 0 ? "0px" : (spacing - 100).toFixed(2) + "px";
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
    }
  }
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
    watermark.style.backgroundSize = g.watermarkSize || "";
    watermark.style.backgroundPosition = g.watermarkPosition || "";
    watermark.style.opacity = computeWatermarkOpacity(g.watermarkOpacity);
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
  el.watermarkBrightness.hidden = !watermarkSrc;
  // Qui non c'è una riga di header a cui appoggiarsi (a differenza
  // di Doom): la barra segue invece dove finisce, in alto, la
  // filigrana stessa (stesso valore del suo "top" in CSS).
  el.watermarkBrightness.style.top = watermarkSrc ? "97px" : ""; /* 70 di base
    +10px (stima dell'utente: l'immagine reale non è misurabile da qui, la
    rete del sandbox non arriva al bucket Cloudflare) +1px (stesso
    aggiustamento universale delle altre viste) */
  el.watermarkBrightness.style.right = "";

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
  } else if(view === "title"){
    applyPaletteToCSS();
    renderSidebar();
    renderTitlePanel();
    renderRail();
    el.timelineRail.hidden = false;
  }
  if(view !== "title") el.timelineRail.hidden = true;
  updateMusicPlayback();
}

function selectGame(id){
  if(state.gameId !== id) state.trackIndex = 0;
  state.gameId = id;
  state.universeIndex = 0;
  setState("game");
  closeMobileSidebar();
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
  localStorage.setItem(LANG_KEY, state.lang);
  paintStaticText();
  if(state.view === "landing"){ renderSidebar(); }
  else if(state.view === "game"){ renderSidebar(); renderGamePanel(); }
  else if(state.view === "title"){ renderSidebar(); renderTitlePanel(); renderRail(); }
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
  const g = currentGame();
  const inGamePages = state.view === "game" || state.view === "title";
  el.musicToggle.hidden = !inGamePages;
  el.musicToggle.setAttribute("aria-pressed", String(state.musicOn));

  const tracks = getTrackList(g);
  const hasTracks = inGamePages && tracks.length > 0;

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
const TAP_SOUND_URL = "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Tap.mp3";
document.addEventListener("click", (e) => {
  const target = e.target.closest("button, a.kofi-link, a.discord-link, a.index-link");
  if(target && !target.classList.contains("track-skip")){
    const tap = new Audio(TAP_SOUND_URL);
    tap.volume = 0.2;
    tap.play().catch(() => { /* blocked until a user gesture; the click itself is one, so this is just a safety net */ });
  }
});

el.bgMusic.volume = parseFloat(el.volumeSlider.value);
el.volumeSlider.addEventListener("input", () => {
  el.bgMusic.volume = parseFloat(el.volumeSlider.value);
  localStorage.setItem(VOLUME_KEY, el.volumeSlider.value);
});

if(el.watermarkBrightnessSlider){
  el.watermarkBrightnessSlider.addEventListener("input", () => {
    watermarkBrightness = parseFloat(el.watermarkBrightnessSlider.value);
    localStorage.setItem(WATERMARK_BRIGHTNESS_KEY, el.watermarkBrightnessSlider.value);
    if(currentWatermarkBaseOpacity != null){
      const liveWatermark = document.querySelector(".title-watermark, .canon-watermark");
      if(liveWatermark) liveWatermark.style.opacity = Math.min(1, currentWatermarkBaseOpacity * (watermarkBrightness * 2));
    }
  });
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
const mobileBreakpoint = window.matchMedia("(hover:none) and (pointer:coarse)");
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

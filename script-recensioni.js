// ============================================================
// RECENSIONI — per ora solo la home + il "carrello" con la
// griglia (solo PC). Stessa logica minima di i18n/cambio lingua
// delle altre pagine leggere del sito (Officina).
// ============================================================

const STRINGS = {
  it: {
    brand: "Diari di Gioco",
    brandMobile: "Diari\ndi Gioco",
    landingEyebrow: "Benvenuto nelle recensioni",
    landingTitle: "The Forgotten Shelf",
    landingIntro: "The Forgotten Shelf raccoglie anche impressioni oneste sui giochi che ho giocato — completati, platinati o amati senza motivo — senza pretese di essere una guida.",
    kofiLabel: "Sostienimi su Ko-fi",
    backToIndexLabel: "Torna all'index",
    backToHomeLabel: "Torna alla home",
    gateToggleLabel: "Apri l'elenco delle recensioni",
    gateToggleLabelClose: "Chiudi l'elenco delle recensioni",
    placeholderTile: "Titolo in arrivo",
    spoilerAlert: "Le recensioni possono contenere dettagli sulla trama, inclusi finali e colpi di scena. Procedi solo se hai già completato i giochi o non temi gli spoiler.",
    gateSideToggleOff: "Mostra il carrello da sinistra",
    gateSideToggleOn: "Mostra il carrello da destra",
    ffviiiHours: "~40 ore (storia) / 80-100+ ORE (completo)",
    factsLabel: "Scheda",
    factDeveloper: "Sviluppatore",
    factRelease: "Uscita originale/Remastered",
    factReleaseOriginal: "Uscita originale",
    factCompleted: "Completato",
    ffviiiCompleted: "Sì, 100%",
    quickReadLabel: "Recensione veloce · spoiler minimi o assenti",
    thresholdText: "Attenzione: la recensione completa può contenere spoiler pesanti, finale incluso.",
    thresholdBtn: "Leggi recensione completa",
    ffviiiDeepTitle1: "La trama, nel dettaglio",
    ffviiiDeep1: "Testo segnaposto per l'analisi vera: eventi chiave, colpi di scena, scelte di scrittura specifiche.",
    noteLabel: "Nota personale: qui puoi isolare una riflessione più soggettiva, staccata dal corpo principale del testo.",
    ffviiiDeepTitle2: "Personaggi e scelte di design",
    ffviiiDeep2: "Seconda sezione: cosa avresti cambiato, cosa ti ha sorpreso, cosa non ha funzionato secondo te.",
    ffviiiDeepTitle3: "Il finale",
    ffviiiDeep3: "Paragrafo dedicato esplicitamente al finale, isolato con il suo titolo.",
    ffviiHours: "~38 ore (storia) / 80-100+ ORE (completo)",
    ffviiCompleted: "Sì, 100%",
    ffviiDeepTitle1: "La trama, nel dettaglio",
    ffviiDeep1: "Testo segnaposto per l'analisi vera: eventi chiave, colpi di scena, scelte di scrittura specifiche.",
    ffviiDeepTitle2: "Personaggi e scelte di design",
    ffviiDeep2: "Seconda sezione: cosa avresti cambiato, cosa ti ha sorpreso, cosa non ha funzionato secondo te.",
    ffviiDeepTitle3: "Il finale",
    ffviiDeep3: "Paragrafo dedicato esplicitamente al finale, isolato con il suo titolo.",
    ffixHours: "~38 ore (storia) / 80-100+ ORE (completo)",
    ffixCompleted: "Sì",
    ffixDeepTitle1: "La trama, nel dettaglio",
    ffixDeep1: "Testo segnaposto per l'analisi vera: eventi chiave, colpi di scena, scelte di scrittura specifiche.",
    ffixDeepTitle2: "Personaggi e scelte di design",
    ffixDeep2: "Seconda sezione: cosa avresti cambiato, cosa ti ha sorpreso, cosa non ha funzionato secondo te.",
    ffixDeepTitle3: "Il finale",
    ffixDeep3: "Paragrafo dedicato esplicitamente al finale, isolato con il suo titolo."
  },
  en: {
    brand: "Game Diaries",
    brandMobile: "Game\nDiaries",
    landingEyebrow: "Welcome to the reviews",
    landingTitle: "The Forgotten Shelf",
    landingIntro: "The Forgotten Shelf also collects honest impressions on the games I've played — completed, platinumed, or loved for no good reason — with no pretense of being a guide.",
    kofiLabel: "Support me on Ko-fi",
    backToIndexLabel: "Back to index",
    backToHomeLabel: "Back to home",
    gateToggleLabel: "Open the reviews list",
    gateToggleLabelClose: "Close the reviews list",
    placeholderTile: "Title coming soon",
    spoilerAlert: "Reviews may contain plot details, including endings and twists. Proceed only if you've already finished the games or aren't worried about spoilers.",
    gateSideToggleOff: "Show the cart from the left",
    gateSideToggleOn: "Show the cart from the right",
    ffviiiHours: "~40 hours (story) / 80-100+ HOURS (100%)",
    factsLabel: "Facts",
    factDeveloper: "Developer",
    factRelease: "Original/Remastered release",
    factReleaseOriginal: "Original release",
    factCompleted: "Completed",
    ffviiiCompleted: "Yes, 100%",
    quickReadLabel: "Quick review · minimal or no spoilers",
    thresholdText: "Warning: the full review may contain heavy spoilers, including the ending.",
    thresholdBtn: "Read the full review",
    ffviiiDeepTitle1: "The plot, in detail",
    ffviiiDeep1: "Placeholder text for the real analysis: key events, twists, specific writing choices.",
    noteLabel: "Personal note: here you can isolate a more subjective reflection, separate from the main body of the text.",
    ffviiiDeepTitle2: "Characters and design choices",
    ffviiiDeep2: "Second section: what you'd have changed, what surprised you, what didn't work for you.",
    ffviiiDeepTitle3: "The ending",
    ffviiiDeep3: "Paragraph explicitly dedicated to the ending, isolated with its own heading.",
    ffviiHours: "~38 hours (story) / 80-100+ HOURS (100%)",
    ffviiCompleted: "Yes, 100%",
    ffviiDeepTitle1: "The plot, in detail",
    ffviiDeep1: "Placeholder text for the real analysis: key events, twists, specific writing choices.",
    ffviiDeepTitle2: "Characters and design choices",
    ffviiDeep2: "Second section: what you'd have changed, what surprised you, what didn't work for you.",
    ffviiDeepTitle3: "The ending",
    ffviiDeep3: "Paragraph explicitly dedicated to the ending, isolated with its own heading.",
    ffixHours: "~38 hours (story) / 80-100+ HOURS (100%)",
    ffixCompleted: "Yes",
    ffixDeepTitle1: "The plot, in detail",
    ffixDeep1: "Placeholder text for the real analysis: key events, twists, specific writing choices.",
    ffixDeepTitle2: "Characters and design choices",
    ffixDeep2: "Second section: what you'd have changed, what surprised you, what didn't work for you.",
    ffixDeepTitle3: "The ending",
    ffixDeep3: "Paragraph explicitly dedicated to the ending, isolated with its own heading."
  }
};

const state = { lang: "it", activeSide: "right", view: "landing", musicOn: false, trackIndex: 0 };

// Stessa playlist usata per la voce "Final Fantasy VIII" in Il Filo
// Nascosto (data-storie-teorie.js) — stesso gioco, stessi brani.
const FFVIII_TRACKS = [
  { src: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Final%20Fantasy%208%20Liberi%20Fatali.mp3", title: "Liberi Fatali", game: "Final Fantasy VIII" },
  { src: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Final%20Fantasy%208%20Eyes%20on%20Me.mp3", title: "Eyes on Me", game: "Final Fantasy VIII" },
  { src: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Final%20Fantasy%208%20The%20Man%20with%20the%20Machine%20Gun.mp3", title: "The Man with the Machine Gun", game: "Final Fantasy VIII" }
];
// Playlist di Final Fantasy VII: vuota per ora, nessun brano
// assegnato ancora — il controllo musica resta funzionante ma senza
// niente da riprodurre finche' non arrivano i brani veri.
const FFVII_TRACKS = [];
// Playlist di Final Fantasy IX: vuota per ora, come FFVII.
const FFIX_TRACKS = [];
const REVIEW_TRACKS = { ffvii: FFVII_TRACKS, ffviii: FFVIII_TRACKS, ffix: FFIX_TRACKS };

// Lingua condivisa con le altre pagine tramite localStorage: letta
// prima di qualunque render iniziale.
const LANG_KEY = "tfs-lang";
const storedLang = localStorage.getItem(LANG_KEY);
if(storedLang === "it" || storedLang === "en") state.lang = storedLang;

// Musica/volume condivisi con le altre pagine (stessa chiave usata
// da Teorie, Timeline, Racconti): stesso stato acceso/spento e
// stesso livello passando da una pagina all'altra.
const MUSIC_ON_KEY = "tfs-music-on";
const VOLUME_KEY = "tfs-volume";
const storedMusicOn = localStorage.getItem(MUSIC_ON_KEY);
if(storedMusicOn !== null) state.musicOn = storedMusicOn === "true";

// Lato del carrello (destra/sinistra): salvato per singolo
// dispositivo, ricordato tra le visite. Letto qui, prima del primo
// paint, cosi' la pagina si apre gia' nel lato giusto invece di
// mostrare prima quello di default e poi saltare.
const GATE_SIDE_KEY = "tfs-recensioni-gate-side";
const storedGateSide = localStorage.getItem(GATE_SIDE_KEY);
if(storedGateSide === "left" || storedGateSide === "right") state.activeSide = storedGateSide;

const el = {
  body: document.body,
  brandBtn: document.getElementById("brandBtn"),
  langSwitch: document.getElementById("langSwitch"),
  indexLink: document.getElementById("indexLink"),
  gateSideToggle: document.getElementById("gateSideToggle"),
  layout: document.querySelector(".layout"),
  mobileGenreBar: document.getElementById("mobileGenreBar"),
  mobileGenreTable: document.getElementById("mobileGenreTable"),
  mobileGenreListTitle: document.getElementById("mobileGenreListTitle"),
  mobileGenreListItems: document.getElementById("mobileGenreListItems"),
  gateToggleRight: document.getElementById("gateToggleRight"),
  reviewsGateRight: document.getElementById("reviewsGateRight"),
  gateToggleLeft: document.getElementById("gateToggleLeft"),
  reviewsGateLeft: document.getElementById("reviewsGateLeft"),
  landingPanel: document.getElementById("landingPanel"),
  reviewFfvii: document.getElementById("reviewFfvii"),
  reviewFfviii: document.getElementById("reviewFfviii"),
  reviewFfix: document.getElementById("reviewFfix"),
  musicControl: document.getElementById("musicControl"),
  musicSlotFfvii: document.getElementById("musicSlotFfvii"),
  musicSlotFfviii: document.getElementById("musicSlotFfviii"),
  musicSlotFfix: document.getElementById("musicSlotFfix"),
  bgMusic: document.getElementById("bgMusic"),
  musicToggle: document.getElementById("musicToggle"),
  volumeSlider: document.getElementById("volumeSlider"),
  trackInfo: document.getElementById("trackInfo"),
  trackTitle: document.getElementById("trackTitle"),
  trackGame: document.getElementById("trackGame"),
  trackSkipBtn: document.getElementById("trackSkipBtn"),
  trackProgressFill: document.getElementById("trackProgressFill")
};
if(el.volumeSlider){
  const storedVolume = localStorage.getItem(VOLUME_KEY);
  if(storedVolume !== null) el.volumeSlider.value = storedVolume;
}

// Mappa id-recensione -> elemento della voce corrispondente. Un solo
// titolo per ora; aggiungerne altri significa solo aggiungere una
// riga qui (e il markup nascosto della voce in diari_di_gioco.html).
const REVIEWS = {
  ffvii: el.reviewFfvii,
  ffviii: el.reviewFfviii,
  ffix: el.reviewFfix
};

// Slot dove va spostato il controllo musica condiviso quando quella
// recensione e' quella aperta.
const MUSIC_SLOTS = {
  ffvii: el.musicSlotFfvii,
  ffviii: el.musicSlotFfviii,
  ffix: el.musicSlotFfix
};

// ---------------------------------------------------------
// SOLO MOBILE: barra generi (header bassa in home) + tabella titoli
// (pannello del carosello a sinistra, come .sidebar nelle altre
// pagine). Stesso schema di navigazione gia' usato e collaudato su
// Officina: niente swipe col dito (.layout ha touch-action:none),
// solo pulsanti che chiamano goToScreen(). Un solo posto dove
// aggiungere un genere in futuro (qui), niente da toccare
// nell'HTML. Le card vengono lette direttamente dal carrello
// desktop (data-review + il testo della tile), cosi' le due liste
// (desktop e mobile) restano sempre sincronizzate da un'unica fonte
// invece di doverle mantenere doppie.
// ---------------------------------------------------------
function buildGenresFromDOM(){
  const genres = {}; // { "JRPG": [{id, title}, ...], ... }
  document.querySelectorAll(".reviews-gate--right .reviews-genre").forEach(genreBlock => {
    const label = genreBlock.querySelector(".reviews-genre__label");
    if(!label) return;
    const genreName = label.textContent.trim();
    const items = [];
    genreBlock.querySelectorAll("[data-review]").forEach(tile => {
      items.push({
        id: tile.dataset.review,
        title: tile.querySelector(".review-tile__title").textContent.trim()
      });
    });
    if(items.length) genres[genreName] = items;
  });
  return genres;
}
const GENRES = buildGenresFromDOM();

function renderMobileGenreBar(){
  if(!el.mobileGenreBar) return;
  el.mobileGenreBar.innerHTML = "";
  Object.keys(GENRES).forEach(genreName => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "mobile-genre-btn";
    btn.textContent = genreName;
    btn.addEventListener("click", () => openGenreTable(genreName));
    el.mobileGenreBar.appendChild(btn);
  });
}

// SCREEN_TABLE (0, sinistra) / SCREEN_STAGE (1, destra — home o
// recensione aperta, a seconda di cosa mostra .stage in quel
// momento). Stesso schema/nome di variabile di script-officina.js.
const SCREEN_TABLE = 0;
const SCREEN_STAGE = 1;
let currentMobileScreen = SCREEN_STAGE;

function goToMobileScreen(index, instant){
  if(!el.layout) return;
  currentMobileScreen = Math.max(SCREEN_TABLE, Math.min(SCREEN_STAGE, index));
  el.layout.scrollTo({ left: currentMobileScreen * window.innerWidth, behavior: instant ? "instant" : "smooth" });
}

// Popola la tabella e ci scivola sopra. La tabella e' sempre parte
// del carosello (mai display:none — vedi CSS), quindi lo scrollTo
// funziona sempre, dal primo tocco.
function openGenreTable(genreName){
  const items = GENRES[genreName];
  if(!items || !el.mobileGenreTable) return;
  el.mobileGenreListTitle.textContent = genreName;
  el.mobileGenreListItems.innerHTML = "";
  items.forEach(item => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.type = "button";
    btn.innerHTML = `<span>${item.title}</span><svg viewBox="0 0 20 20" aria-hidden="true"><path d="M7 4l6 6-6 6" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
    btn.addEventListener("click", () => {
      openReview(item.id);
      // Scivola dalla tabella verso lo stage, dove la recensione e'
      // appena apparsa.
      goToMobileScreen(SCREEN_STAGE);
    });
    li.appendChild(btn);
    el.mobileGenreListItems.appendChild(li);
  });
  goToMobileScreen(SCREEN_TABLE);
}

if(isMobileNav() && el.layout){
  goToMobileScreen(SCREEN_STAGE, true);
  // Solo ora, dopo aver posizionato il carosello sullo stage, la
  // tabella diventa visibile (CSS la tiene a visibility:hidden finche'
  // questa classe non compare) — stesso accorgimento gia' fatto per
  // Officina, evita lo sfarfallio del pannello sinistro di default
  // prima dello scrollTo.
  document.documentElement.classList.add("carousel-ready");
}

renderMobileGenreBar();

function t(key){ return STRINGS[state.lang][key]; }

// Vero solo su dispositivi touch senza hover (telefoni/tablet): usato
// per attivare il toggle di data-state SOLO li', mai su desktop.
function isMobileNav(){
  return window.matchMedia("(hover:none) and (pointer:coarse)").matches;
}

function paintStaticText(){
  document.querySelectorAll("[data-i18n]").forEach(node => {
    const key = node.getAttribute("data-i18n");
    const mobileKey = key + "Mobile";
    const useMobile = isMobileNav() && STRINGS[state.lang][mobileKey];
    node.textContent = useMobile ? t(mobileKey) : t(key);
  });
  document.documentElement.lang = state.lang;
  el.langSwitch.querySelectorAll(".lang-option").forEach(opt => {
    opt.classList.toggle("is-active", opt.dataset.langOption === state.lang);
  });
  [el.gateToggleRight, el.gateToggleLeft].forEach(btn => {
    const isOpen = btn.getAttribute("aria-expanded") === "true";
    btn.setAttribute("aria-label", isOpen ? t("gateToggleLabelClose") : t("gateToggleLabel"));
  });

  const isLeft = state.activeSide === "left";
  el.gateSideToggle.setAttribute("aria-pressed", String(isLeft));
  el.gateSideToggle.textContent = isLeft ? t("gateSideToggleOn") : t("gateSideToggleOff");

  updateIndexLink();
}
el.langSwitch.addEventListener("click", () => {
  state.lang = state.lang === "it" ? "en" : "it";
  localStorage.setItem(LANG_KEY, state.lang);
  el.body.dataset.lang = state.lang;
  paintStaticText();
});

// Solo mobile, solo a recensione aperta: la scritta "Diari di Gioco"
// (brand-text, al posto dell'icona casetta in quello stato) riporta
// alla home. In home stessa non fa nulla (e' l'icona index-link a
// occuparsene li', il brand-text in quel momento non e' visibile).
el.brandBtn.addEventListener("click", () => {
  if(state.view !== "landing") backToLanding();
});

// ---------------------------------------------------------
// Apertura/chiusura di UN carrello: stessa logica per quello di
// destra e quello di sinistra, richiamata due volte con i
// riferimenti giusti invece di duplicare il codice. Solo desktop
// (su mobile i pulsanti sono display:none via CSS, questi listener
// restano innocui se mai venissero cliccati). Espone anche una
// chiusura "programmatica" (closeGate), riusata quando si seleziona
// una card: il carrello si richiude da solo, non solo al click
// sulla sua maniglia.
// ---------------------------------------------------------
const gateFadeTimers = new WeakMap();

function closeGate(toggleBtn, gateEl){
  if(!toggleBtn || !gateEl) return;
  if(!gateEl.classList.contains("is-open")) return;
  const grid = gateEl.querySelector(".reviews-grid");
  gateEl.classList.remove("is-open");
  toggleBtn.setAttribute("aria-expanded", "false");
  gateEl.setAttribute("aria-hidden", "true");
  toggleBtn.setAttribute("aria-label", t("gateToggleLabel"));
  clearTimeout(gateFadeTimers.get(gateEl));
  grid.classList.remove("is-visible");
}

function setupGateToggle(toggleBtn, gateEl){
  if(!toggleBtn || !gateEl) return;
  const grid = gateEl.querySelector(".reviews-grid");
  toggleBtn.addEventListener("click", () => {
    const isOpen = gateEl.classList.toggle("is-open");
    toggleBtn.setAttribute("aria-expanded", String(isOpen));
    gateEl.setAttribute("aria-hidden", String(!isOpen));
    toggleBtn.setAttribute("aria-label", isOpen ? t("gateToggleLabelClose") : t("gateToggleLabel"));

    clearTimeout(gateFadeTimers.get(gateEl));
    if(isOpen){
      // Le card non si vedono mentre il carrello scorre: compaiono con
      // un fade solo mezzo secondo dopo, a battente già del tutto
      // aperto, invece di scorrere assieme a lui.
      gateFadeTimers.set(gateEl, setTimeout(() => {
        grid.classList.add("is-visible");
      }, 500));
    } else {
      grid.classList.remove("is-visible");
    }
  });
}
setupGateToggle(el.gateToggleRight, el.reviewsGateRight);
setupGateToggle(el.gateToggleLeft, el.reviewsGateLeft);

// ---------------------------------------------------------
// Selezione di una card dal carrello: il carrello attivo si chiude
// da solo (va riaperto a mano per scegliere un'altra voce), e
// l'area centrale (landing o un'altra recensione già aperta) fa un
// crossfade verso la recensione scelta — fade out 1s, mezzo
// secondo di pausa, fade in 1s. Il pulsantino del carrello resta
// al suo posto, non fa parte di questo crossfade.
// ---------------------------------------------------------
function currentCenterPanel(){
  return state.view === "landing" ? el.landingPanel : REVIEWS[state.view];
}

// Il link "Torna all'index/Torna alla home" in alto e' lo stesso
// elemento in entrambi i casi: sulla landing porta a index.html
// (comportamento normale del link), su una recensione aperta cambia
// testo e, invece di navigare, richiama il crossfade di ritorno.
function updateIndexLink(){
  const onReview = state.view !== "landing";
  const label = el.indexLink.querySelector("span");
  if(label) label.textContent = onReview ? t("backToHomeLabel") : t("backToIndexLabel");
  else el.indexLink.setAttribute("data-i18n", onReview ? "backToHomeLabel" : "backToIndexLabel");
}

el.indexLink.addEventListener("click", (ev) => {
  if(state.view !== "landing"){
    ev.preventDefault();
    backToLanding();
  }
  // altrimenti, lascia che il link navighi normalmente verso index.html
});

function crossfadeTo(showEl){
  const hideEl = currentCenterPanel();
  if(hideEl === showEl) return;

  hideEl.classList.add("is-fading");
  setTimeout(() => {
    hideEl.hidden = true;
    hideEl.classList.remove("is-fading");
    showEl.hidden = false;
    // Forza un reflow cosi' la transizione parte da opacity:0
    // invece di saltare direttamente a 1.
    showEl.classList.add("is-fading");
    void showEl.offsetWidth;
    showEl.classList.remove("is-fading");
  }, 500);
}

function openReview(id){
  const entryEl = REVIEWS[id];
  if(!entryEl) return;
  closeGate(el.gateToggleRight, el.reviewsGateRight);
  closeGate(el.gateToggleLeft, el.reviewsGateLeft);
  crossfadeTo(entryEl);
  state.view = id;
  state.trackIndex = 0; // si riparte dal primo brano della nuova playlist
  el.body.classList.add("is-review-open");
  // Solo mobile: la topbar passa al trattamento "vista voce" (scritta
  // a sinistra, tazza al centro, switch a destra — stesso stile delle
  // altre pagine). Su desktop data-state resta sempre "landing" di
  // proposito: la' Discord/Ko-fi/index-link devono restare visibili
  // anche a recensione aperta (gia' deciso in precedenza).
  if(isMobileNav()) el.body.dataset.state = "entry";
  const slot = MUSIC_SLOTS[id];
  if(slot && el.musicControl) slot.appendChild(el.musicControl);
  updateIndexLink();
  updateMusicPlayback();
}

function backToLanding(){
  crossfadeTo(el.landingPanel);
  state.view = "landing";
  el.body.classList.remove("is-review-open");
  // Solo mobile: se si stava guardando la tabella o una recensione,
  // torna a mostrare lo stage (home) nel carosello.
  goToMobileScreen(SCREEN_STAGE, true);
  if(isMobileNav()) el.body.dataset.state = "landing";
  updateIndexLink();
  updateMusicPlayback();
}

document.querySelectorAll("[data-review]").forEach(card => {
  card.addEventListener("click", (ev) => {
    ev.preventDefault();
    openReview(card.dataset.review);
  });
});

// Soglia spoiler: un solo pulsante rivela il contenuto approfondito,
// senza possibilita' di richiuderlo (come nel mockup di riferimento).
// Generalizzato per funzionare su ogni recensione (i suffissi negli id
// seguono lo stesso schema, es. "revealBtnFfvii"/"reviewThresholdFfvii").
function setupRevealButton(suffix){
  const btn = document.getElementById("revealBtn" + suffix);
  const threshold = document.getElementById("reviewThreshold" + suffix);
  const deep = document.getElementById("reviewDeepContent" + suffix);
  if(!btn || !threshold || !deep) return;
  btn.addEventListener("click", () => {
    threshold.classList.add("is-crossed");
    deep.classList.add("is-visible");
  });
}
setupRevealButton("Ffvii");
setupRevealButton("Ffix");
setupRevealButton("");

// ---------------------------------------------------------
// Toggle centrale: NON sposta piu' un unico carrello da un lato
// all'altro — decide quale dei due carrelli (destra/sinistra,
// entrambi sempre presenti nel DOM) e' visibile. Crossfade in due
// tempi: il carrello uscente sparisce con un fade da 0.5s, e SOLO
// dopo che quel fade e' completato (altri 0.5s dopo il click)
// inizia il fade in di quello entrante, anch'esso da 0.5s — mai
// sovrapposti. Destra e' il lato di default/visibile all'avvio
// (il sinistro parte con .side-hidden gia' nel markup).
// ---------------------------------------------------------
if(el.gateSideToggle){
  el.gateSideToggle.addEventListener("click", () => {
    const goingLeft = state.activeSide === "right";
    const outgoing = goingLeft ? el.reviewsGateRight : el.reviewsGateLeft;
    const incoming = goingLeft ? el.reviewsGateLeft : el.reviewsGateRight;

    outgoing.classList.add("side-hidden");
    setTimeout(() => {
      incoming.classList.remove("side-hidden");
    }, 500);

    state.activeSide = goingLeft ? "left" : "right";
    localStorage.setItem(GATE_SIDE_KEY, state.activeSide);
    el.gateSideToggle.setAttribute("aria-pressed", String(goingLeft));
    el.gateSideToggle.textContent = goingLeft ? t("gateSideToggleOn") : t("gateSideToggleOff");
  });
}

// Sincronizza subito i due pannelli con la preferenza salvata (se
// e' "left", il sinistro deve partire visibile e il destro nascosto
// — l'opposto del default nel markup), senza passare dal crossfade
// animato: solo al primo caricamento, deve essere istantaneo.
if(state.activeSide === "left"){
  el.reviewsGateRight.classList.add("side-hidden");
  el.reviewsGateLeft.classList.remove("side-hidden");
}

// ---------------------------------------------------------
// Musica di sottofondo — stessa playlist di FFVIII usata in Il Filo
// Nascosto. Solo nella pagina della recensione (non in landing), non
// autoparte mai con l'audio: l'utente deve attivarla col toggle, i
// browser bloccherebbero comunque l'autoplay con suono.
// ---------------------------------------------------------
function updateMusicPlayback(){
  if(!el.bgMusic) return;
  const inReview = state.view !== "landing";
  el.musicToggle.setAttribute("aria-pressed", String(state.musicOn));

  const tracks = inReview ? (REVIEW_TRACKS[state.view] || []) : [];

  if(tracks.length === 0 || !state.musicOn){
    el.bgMusic.pause();
    el.trackInfo.hidden = true;
    return;
  }

  if(state.trackIndex >= tracks.length) state.trackIndex = 0;
  const track = tracks[state.trackIndex];

  el.trackInfo.hidden = false;
  el.trackTitle.textContent = track.title;
  el.trackGame.textContent = track.game || "";
  el.trackSkipBtn.hidden = tracks.length <= 1;

  if(!el.bgMusic.src || !el.bgMusic.src.endsWith(track.src)){
    el.bgMusic.src = track.src;
  }
  el.bgMusic.play().catch(() => { /* bloccato finche' non c'e' un gesto utente; il click del toggle stesso lo e' */ });
}

function advanceTrack(){
  const tracks = state.view !== "landing" ? (REVIEW_TRACKS[state.view] || []) : [];
  if(tracks.length === 0) return;
  state.trackIndex = (state.trackIndex + 1) % tracks.length;
  updateMusicPlayback();
}

if(el.bgMusic){
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
    localStorage.setItem(VOLUME_KEY, el.volumeSlider.value);
  });
  el.musicToggle.addEventListener("click", () => {
    state.musicOn = !state.musicOn;
    localStorage.setItem(MUSIC_ON_KEY, String(state.musicOn));
    updateMusicPlayback();
  });
}

// Standby/scheda non in primo piano: la musica va sempre in pausa
// (non solo mobile — vale anche cambiando scheda su desktop).
// Niente ripresa automatica al ritorno.
let musicWasPlayingBeforeHidden = false;
document.addEventListener("visibilitychange", () => {
  if(!el.bgMusic) return;
  if(document.hidden){
    musicWasPlayingBeforeHidden = !el.bgMusic.paused;
    el.bgMusic.pause();
  } else if(musicWasPlayingBeforeHidden){
    el.bgMusic.play().catch(() => {});
  }
});

paintStaticText();

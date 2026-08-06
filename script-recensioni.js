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
    landingSubDesktop: "Apri il carrello qui sotto per sfogliare le recensioni disponibili.",
    gateSideToggleOff: "Mostra il carrello da sinistra",
    gateSideToggleOn: "Mostra il carrello da destra",
    ffviiiHours: "~40 ore (storia) / 80-100+ ORE (completo)",
    factsLabel: "Scheda",
    factDeveloper: "Sviluppatore",
    factRelease: "Uscita originale/Remastered",
    factReleaseOriginal: "Uscita originale",
    factCompleted: "Completato",
    ffviiiCompleted: "Sì, 100%",
    quickReadLabel: "Recensione veloce, sguardo d'insieme · spoiler minimi o assenti",
    ffviiiQuickNarrativeTitle: "Narrativa e Mondo",
    ffviiiQuickNarrativeText: "La storia si basa principalmente sui due personaggi principali, lasciando via via in disparte gli altri, membri del gruppo compresi. Presenta dei veri e propri buchi di trama in alcune parti, capaci di far impallidire persino un Dark Souls, ma questo non ha fermato i fan dal cercare risposte, e talvolta dal crearsele da soli. Il gioco ha comunque una storia davvero bella, con cambi di registro non indifferenti, e un'ambientazione fantasy affascinante, anche se scarna come quella dei videogiochi dell'epoca Playstation 1.",
    ffviiiQuickGameplayTitle: "Gameplay",
    ffviiiQuickGameplayText: "Un gioco di ruolo a turni alla giapponese in vecchio stile, dove le caratterizzazioni più peculiari non si trovano durante le battaglie ma fuori, nella pianificazione di esse. Il Junction è il sistema adottato da questo titolo, spesso amato, altre volte odiato dai giocatori, ma comunque rotto: in grado di trasformare i personaggi in veri e propri boss che camminano, se usato in modo professionale. Il resto del gameplay è rappresentato da un'esplorazione ben gestita e godibile.",
    ffviiiQuickTechTitle: "Comparto Tecnico e Artistico",
    ffviiiQuickTechText: "WOW! Non si può aggiungere molto altro. Per l'epoca, la grafica e le musiche di Final Fantasy VIII erano qualcosa di ineguagliabile. Oggi, ovviamente, non è più così, almeno per quanto riguarda la grafica, ma le cutscene rimangono ancora affascinanti e capaci di mettere in dubbio la loro provenienza dalla PS1. Sì, la remastered ha ritoccato poco e niente, giusto qualche sprite dei personaggi e in minima parte l'ambientazione.",
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
    landingSubDesktop: "Open the cart below to browse the available reviews.",
    gateSideToggleOff: "Show the cart from the left",
    gateSideToggleOn: "Show the cart from the right",
    ffviiiHours: "~40 hours (story) / 80-100+ HOURS (100%)",
    factsLabel: "Facts",
    factDeveloper: "Developer",
    factRelease: "Original/Remastered release",
    factReleaseOriginal: "Original release",
    factCompleted: "Completed",
    ffviiiCompleted: "Yes, 100%",
    quickReadLabel: "Quick review, overview · minimal or no spoilers",
    ffviiiQuickNarrativeTitle: "Story & World",
    ffviiiQuickNarrativeText: "The story focuses mainly on the two lead characters, gradually sidelining everyone else, party members included. It has genuine plot holes in places, bad enough to make even Dark Souls blush, but that hasn't stopped fans from hunting for answers, and sometimes making them up themselves. Still, the game tells a genuinely beautiful story, with some notable shifts in tone, and a fantasy setting that's compelling even if as sparse as you'd expect from a PlayStation 1-era title.",
    ffviiiQuickGameplayTitle: "Gameplay",
    ffviiiQuickGameplayText: "An old-school Japanese turn-based RPG, where the most distinctive choices happen not during battles but outside them, in planning for them. Junction is the system this title runs on, loved by some players and hated by others, but broken either way: capable of turning characters into walking bosses if used skillfully. The rest of the gameplay comes down to well-handled, enjoyable exploration.",
    ffviiiQuickTechTitle: "Technical & Artistic Side",
    ffviiiQuickTechText: "WOW! There's not much to add. For its time, Final Fantasy VIII's visuals and music were simply unmatched. That's obviously no longer true today, at least on the graphics side, but the cutscenes are still striking, enough to make you question whether they actually came from a PS1. Yes, the remaster barely touched anything, just a few character sprites and, to a lesser extent, the environments.",
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
  { src: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Final%20Fantasy%20VIII%20Balamb%20Garden.mp3", title: "Balamb Garden", game: "Final Fantasy VIII" },
  { src: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Final%20Fantasy%20VIII%20The%20Landing.mp3", title: "The Landing", game: "Final Fantasy VIII" },
  { src: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Final%20Fantasy%20VIII%20Force%20Your%20Way.mp3", title: "Force Your Way", game: "Final Fantasy VIII" },
  { src: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Final%20Fantasy%20VIII%20Premonition.mp3", title: "Premonition", game: "Final Fantasy VIII" },
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

// Colore proprio di ogni recensione (usato per bordi/icone di
// Ko-fi/Discord in vista voce, e per la voce corrispondente nella
// tabella genere su mobile). FFVIII riprende lo stesso rosso della
// sua voce "teoria" su Il Filo Nascosto (accentColor in
// data-storie-teorie.js), cosi' lo stesso gioco ha lo stesso colore
// su entrambe le pagine. Le altre, per ora, restano sul ciano di
// riserva (nessuna voce qui sotto).
const REVIEW_ACCENTS = {
  ffviii: "#ff3b30"
};

// ---------------------------------------------------------
// SOLO MOBILE: barra generi (header bassa in home) + tabella titoli
// (pannello del carosello a sinistra, come .sidebar nelle altre
// pagine). La tabella e' assente dal carosello finche' non si tocca
// un genere (niente da raggiungere scorrendo a sinistra dalla home
// per sbaglio): il tocco la rende presente (diventa il primo figlio
// vero di .layout, visibile subito perche' lo scrollLeft resta a 0)
// e da quel momento e' scorrevole col dito per tornare indietro
// (swipe vero, non un pulsante). Una volta tornati sullo stage
// torna assente, va ritoccato un genere per riaprirla. Un solo
// posto dove aggiungere un genere in futuro (qui), niente da
// toccare nell'HTML. Le card vengono lette direttamente dal
// carrello desktop (data-review + il testo della tile), cosi' le
// due liste (desktop e mobile) restano sempre sincronizzate da
// un'unica fonte invece di doverle mantenere doppie.
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

// Popola la tabella e la rende presente nel carosello. Nessuno
// scrollTo necessario per "entrarci": diventando il primo figlio
// vero di .layout, e lo scrollLeft essendo gia' a 0 (dove si stava
// guardando lo stage), la si vede gia' subito da sola.
function openGenreTable(genreName){
  const items = GENRES[genreName];
  if(!items || !el.mobileGenreTable) return;
  el.mobileGenreListTitle.textContent = genreName;
  el.mobileGenreListItems.innerHTML = "";
  items.forEach(item => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.type = "button";
    btn.textContent = item.title;
    if(REVIEW_ACCENTS[item.id]) btn.style.setProperty("--item-accent", REVIEW_ACCENTS[item.id]);
    btn.addEventListener("click", () => {
      openReview(item.id);
      // Scivola dalla tabella verso lo stage, dove la recensione e'
      // appena apparsa.
      if(el.layout) el.layout.scrollTo({ left: window.innerWidth, behavior: "smooth" });
    });
    li.appendChild(btn);
    el.mobileGenreListItems.appendChild(li);
  });
  document.documentElement.classList.add("mobile-table-open");
  // Rete di sicurezza oltre a overflow-anchor:none in CSS: forza la
  // posizione invece di sperare che resti a 0 da sola una volta che
  // la tabella diventa il primo figlio del carosello.
  if(el.layout) el.layout.scrollLeft = 0;
}

// Rilevamento "sono tornato sullo stage": quando lo scroll
// orizzontale si assesta sulla posizione dello stage (non piu' sulla
// tabella), la tabella ha fatto il suo dovere — la si toglie dal
// carosello, cosi' non e' piu' raggiungibile scorrendo a sinistra
// dalla home finche' non si riseleziona un genere.
let tableCollapseTimer = null;
if(el.layout){
  el.layout.addEventListener("scroll", () => {
    if(!document.documentElement.classList.contains("mobile-table-open")) return;
    clearTimeout(tableCollapseTimer);
    tableCollapseTimer = setTimeout(() => {
      if(el.layout.scrollLeft >= window.innerWidth - 10){
        document.documentElement.classList.remove("mobile-table-open");
        el.layout.scrollLeft = 0;
      }
    }, 150);
  });
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
  } else {
    // Naviga davvero verso index.html: senza un piccolo ritardo il
    // browser cambia pagina prima che il suono del tap (gia' gestito
    // dal listener generico piu' in basso) faccia in tempo a partire.
    ev.preventDefault();
    setTimeout(() => { window.location.href = el.indexLink.href; }, 550);
  }
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
  // Colore proprio della voce (bordo/icone Ko-fi-Discord in vista
  // voce mobile, e la voce corrispondente nella tabella genere).
  if(REVIEW_ACCENTS[id]){
    el.body.style.setProperty("--item-accent", REVIEW_ACCENTS[id]);
  } else {
    el.body.style.removeProperty("--item-accent");
  }
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
  el.body.style.removeProperty("--item-accent");
  // Solo mobile: se si stava guardando la tabella o una recensione,
  // torna a mostrare lo stage (home) nel carosello, e la tabella (se
  // era presente) torna assente — va ritoccato un genere per
  // riaprirla.
  if(el.layout) el.layout.scrollLeft = 0;
  document.documentElement.classList.remove("mobile-table-open");
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
  el.bgMusic.volume = isMobileNav() ? 1 : parseFloat(el.volumeSlider.value);
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

// ---------------------------------------------------------
// Suono UI al tap, stesso comportamento delle altre pagine. Lo skip
// del brano (.track-skip) è l'unica eccezione voluta, escluso
// esplicitamente.
// ---------------------------------------------------------
const TAP_SOUND_URL = "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Tap.mp3";
document.addEventListener("click", (e) => {
  const target = e.target.closest("button, a.kofi-link, a.discord-link, a.index-link, a.review-tile");
  if(target && !target.classList.contains("track-skip")){
    const tap = new Audio(TAP_SOUND_URL);
    tap.volume = isMobileNav() ? 0.3 : 0.1;
    tap.play().catch(() => { /* bloccato finché non c'è un gesto utente; il click stesso lo è, quindi è solo un fallback */ });
  }
});

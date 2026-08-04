// ============================================================
// RECENSIONI — per ora solo la home + il "carrello" con la
// griglia (solo PC). Stessa logica minima di i18n/cambio lingua
// delle altre pagine leggere del sito (Officina).
// ============================================================

const STRINGS = {
  it: {
    brand: "Diari di Gioco",
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
    ffviiiHours: "~40 ore / 80-100+ ORE (completo)",
    factsLabel: "Scheda",
    factDeveloper: "Sviluppatore",
    factRelease: "Uscita originale/Remastered",
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
    ffviiiDeep3: "Paragrafo dedicato esplicitamente al finale, isolato con il suo titolo."
  },
  en: {
    brand: "Game Diaries",
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
    ffviiiHours: "~40 hours / 80-100+ HOURS (100%)",
    factsLabel: "Facts",
    factDeveloper: "Developer",
    factRelease: "Original/Remastered release",
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
    ffviiiDeep3: "Paragraph explicitly dedicated to the ending, isolated with its own heading."
  }
};

const state = { lang: "it", activeSide: "right", view: "landing" };

// Lingua condivisa con le altre pagine tramite localStorage: letta
// prima di qualunque render iniziale.
const LANG_KEY = "tfs-lang";
const storedLang = localStorage.getItem(LANG_KEY);
if(storedLang === "it" || storedLang === "en") state.lang = storedLang;

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
  gateToggleRight: document.getElementById("gateToggleRight"),
  reviewsGateRight: document.getElementById("reviewsGateRight"),
  gateToggleLeft: document.getElementById("gateToggleLeft"),
  reviewsGateLeft: document.getElementById("reviewsGateLeft"),
  landingPanel: document.getElementById("landingPanel"),
  reviewFfviii: document.getElementById("reviewFfviii"),
  revealBtn: document.getElementById("revealBtn"),
  reviewThreshold: document.getElementById("reviewThreshold"),
  reviewDeepContent: document.getElementById("reviewDeepContent")
};

// Mappa id-recensione -> elemento della voce corrispondente. Un solo
// titolo per ora; aggiungerne altri significa solo aggiungere una
// riga qui (e il markup nascosto della voce in recensioni.html).
const REVIEWS = {
  ffviii: el.reviewFfviii
};

function t(key){ return STRINGS[state.lang][key]; }

function paintStaticText(){
  document.querySelectorAll("[data-i18n]").forEach(node => {
    const key = node.getAttribute("data-i18n");
    node.textContent = t(key);
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

// Nessuno stato diverso da "landing" esiste ancora: il brand qui
// non ha nulla da resettare, ma lascio l'handler per coerenza col
// resto del sito.
el.brandBtn.addEventListener("click", () => {});

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
  updateIndexLink();
}

function backToLanding(){
  crossfadeTo(el.landingPanel);
  state.view = "landing";
  updateIndexLink();
}

document.querySelectorAll("[data-review]").forEach(card => {
  card.addEventListener("click", (ev) => {
    ev.preventDefault();
    openReview(card.dataset.review);
  });
});

// Soglia spoiler: un solo pulsante rivela il contenuto approfondito,
// senza possibilita' di richiuderlo (come nel mockup di riferimento).
if(el.revealBtn){
  el.revealBtn.addEventListener("click", () => {
    el.reviewThreshold.classList.add("is-crossed");
    el.reviewDeepContent.classList.add("is-visible");
  });
}

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

paintStaticText();

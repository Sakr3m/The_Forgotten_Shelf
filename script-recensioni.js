// ============================================================
// RECENSIONI — per ora solo la home + il "cancello" con la
// griglia (solo PC). Stessa logica minima di i18n/cambio lingua
// delle altre pagine leggere del sito (Officina).
// ============================================================

const STRINGS = {
  it: {
    brand: "Recensioni",
    landingEyebrow: "Benvenuto nelle recensioni",
    landingTitle: "The Forgotten Shelf",
    landingIntro: "The Forgotten Shelf raccoglie anche pareri personali sui giochi che ho giocato: consigliati, con riserve, da evitare.",
    kofiLabel: "Sostienimi su Ko-fi",
    backToIndexLabel: "Torna all'index",
    gateToggleLabel: "Apri l'elenco delle recensioni",
    gateToggleLabelClose: "Chiudi l'elenco delle recensioni",
    placeholderTile: "Titolo in arrivo"
  },
  en: {
    brand: "Reviews",
    landingEyebrow: "Welcome to the reviews",
    landingTitle: "The Forgotten Shelf",
    landingIntro: "The Forgotten Shelf also collects personal opinions on the games I've played: recommended, mixed, or best avoided.",
    kofiLabel: "Support me on Ko-fi",
    backToIndexLabel: "Back to index",
    gateToggleLabel: "Open the reviews list",
    gateToggleLabelClose: "Close the reviews list",
    placeholderTile: "Title coming soon"
  }
};

const state = { lang: "it" };

const el = {
  body: document.body,
  brandBtn: document.getElementById("brandBtn"),
  langSwitch: document.getElementById("langSwitch"),
  gateToggle: document.getElementById("gateToggle"),
  reviewsGate: document.getElementById("reviewsGate"),
  reviewsGrid: document.querySelector(".reviews-grid")
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
  const isOpen = el.gateToggle.getAttribute("aria-expanded") === "true";
  el.gateToggle.setAttribute("aria-label", isOpen ? t("gateToggleLabelClose") : t("gateToggleLabel"));
}

el.langSwitch.addEventListener("click", () => {
  state.lang = state.lang === "it" ? "en" : "it";
  el.body.dataset.lang = state.lang;
  paintStaticText();
});

// Nessuno stato diverso da "landing" esiste ancora: il brand qui
// non ha nulla da resettare, ma lascio l'handler per coerenza col
// resto del sito.
el.brandBtn.addEventListener("click", () => {});

// ---------------------------------------------------------
// Il "cancello": un solo pulsante apre/chiude la tendina con la
// griglia. Solo desktop (su mobile il pulsante è display:none via
// CSS, questo listener resta innocuo se mai venisse cliccato).
// ---------------------------------------------------------
let gridFadeTimer = null;

el.gateToggle.addEventListener("click", () => {
  const isOpen = el.reviewsGate.classList.toggle("is-open");
  el.gateToggle.setAttribute("aria-expanded", String(isOpen));
  el.reviewsGate.setAttribute("aria-hidden", String(!isOpen));
  el.gateToggle.setAttribute("aria-label", isOpen ? t("gateToggleLabelClose") : t("gateToggleLabel"));

  clearTimeout(gridFadeTimer);
  if(isOpen){
    // Le card non si vedono mentre il cancello scorre: compaiono con
    // un fade solo mezzo secondo dopo, a battente già del tutto
    // aperto, invece di scorrere assieme a lui.
    gridFadeTimer = setTimeout(() => {
      el.reviewsGrid.classList.add("is-visible");
    }, 500);
  } else {
    el.reviewsGrid.classList.remove("is-visible");
  }
});

paintStaticText();

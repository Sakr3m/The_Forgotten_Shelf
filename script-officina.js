// ============================================================
// OFFICINA — per ora solo la home (stato landing): niente voci,
// niente colonne. Stessa logica minima di i18n/cambio lingua
// delle altre pagine, senza lo stato "entry" (qui non esiste
// ancora nulla da aprire).
// ============================================================

const STRINGS = {
  it: {
    brand: "Officina",
    landingEyebrow: "Benvenuto nell'officina",
    landingTitle: "The Forgotten Shelf",
    landingIntro: "The Forgotten Shelf raccoglie anche i progetti che vivono altrove: giochi e strumenti in lavorazione, collegati da qui.",
    kofiLabel: "Sostienimi su Ko-fi",
    backToIndexLabel: "Torna all'index"
  },
  en: {
    brand: "Workshop",
    landingEyebrow: "Welcome to the workshop",
    landingTitle: "The Forgotten Shelf",
    landingIntro: "The Forgotten Shelf also collects projects that live elsewhere: games and tools in progress, linked from here.",
    kofiLabel: "Support me on Ko-fi",
    backToIndexLabel: "Back to index"
  }
};

const state = { lang: "it" };

const el = {
  body: document.body,
  brandBtn: document.getElementById("brandBtn"),
  langSwitch: document.getElementById("langSwitch"),
  eratosteneAudio: document.getElementById("eratosteneAudio"),
  mathemoryPin: document.getElementById("mathemoryPin"),
  mobileAudioToggle: document.getElementById("mobileAudioToggle"),
  mathemoryPanelLeft: document.querySelector(".mathemory-panel--left"),
  mathemoryPanelRight: document.querySelector(".mathemory-panel--right")
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
}

el.langSwitch.addEventListener("click", () => {
  state.lang = state.lang === "it" ? "en" : "it";
  el.body.dataset.lang = state.lang;
  paintStaticText();
});

// Nessuno stato diverso da "landing" esiste ancora: il brand qui
// non ha nulla da resettare, ma lascio l'handler per coerenza col
// resto del sito (torna comunque utile quando arriverà "il resto").
el.brandBtn.addEventListener("click", () => {});

const mobileBreakpoint = window.matchMedia("(hover:none) and (pointer:coarse)");
const stageEl = document.getElementById("stage");

// ---------------------------------------------------------
// Audio "Eratostene" — anteprima sonora della card di Mathemory.
// PC: parte in hover sulla card, si ferma quando il mouse esce.
// Mobile: musica di sottofondo, con un pulsante on/off dedicato;
// quando attiva, segue la visualizzazione — suona solo mentre uno
// dei due pannelli di Mathemory è a schermo, si ferma altrove
// (es. tornando alla home).
// ---------------------------------------------------------
if(window.matchMedia("(hover:hover)").matches){
  el.mathemoryPin.addEventListener("mouseenter", () => {
    el.eratosteneAudio.currentTime = 0;
    el.eratosteneAudio.play().catch(() => {});
  });
  el.mathemoryPin.addEventListener("mouseleave", () => {
    el.eratosteneAudio.pause();
  });
}

if(mobileBreakpoint.matches && el.mobileAudioToggle){
  let mobileAudioOn = true; // sempre acceso appena si arriva sul pannello
  let mathemoryPanelVisible = false;
  let leftVisible = false, rightVisible = false;

  function setToggleUI(){
    el.mobileAudioToggle.setAttribute("aria-pressed", String(mobileAudioOn));
  }

  function syncMobileAudio(){
    // Visibile SOLO sui pannelli di Mathemory, mai sulla home — stesso
    // "hidden" usato per questo stesso pulsante nelle altre pagine.
    el.mobileAudioToggle.hidden = !mathemoryPanelVisible;
    if(mobileAudioOn && mathemoryPanelVisible){
      el.eratosteneAudio.play().catch(() => {});
    } else {
      el.eratosteneAudio.pause();
    }
  }

  el.mobileAudioToggle.addEventListener("click", () => {
    mobileAudioOn = !mobileAudioOn;
    setToggleUI();
    syncMobileAudio();
  });

  // Uso solo entry.isIntersecting/intersectionRatio, calcolati
  // dal browser contro il viewport reale — niente più
  // getBoundingClientRect()/window.innerWidth ricalcolati a mano:
  // su mobile vero 100vw (larghezza dei pannelli) e innerWidth
  // possono non coincidere esattamente, ed è lì che il calcolo
  // manuale sbagliava, lasciando il pulsante visibile sulla home.
  const panelObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const isVisible = entry.intersectionRatio >= 0.5;
      if(entry.target === el.mathemoryPanelLeft) leftVisible = isVisible;
      if(entry.target === el.mathemoryPanelRight) rightVisible = isVisible;
    });
    const anyVisible = leftVisible || rightVisible;
    const wasVisible = mathemoryPanelVisible;
    mathemoryPanelVisible = anyVisible;
    // Arrivo sul pannello (non ci si era prima): sempre acceso, a
    // prescindere da come l'avevi lasciato l'ultima volta.
    if(anyVisible && !wasVisible){
      mobileAudioOn = true;
      setToggleUI();
    }
    syncMobileAudio();
  }, { threshold: [0, 0.5, 1] });

  [el.mathemoryPanelLeft, el.mathemoryPanelRight].filter(Boolean).forEach(panel => panelObserver.observe(panel));

  setToggleUI();
}

paintStaticText();
if(mobileBreakpoint.matches) stageEl.scrollIntoView({ behavior: "instant", inline: "start", block: "nearest" });

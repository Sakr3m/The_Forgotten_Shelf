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
  let mobileAudioOn = false;
  let mathemoryPanelVisible = false;

  function syncMobileAudio(){
    if(mobileAudioOn && mathemoryPanelVisible){
      el.eratosteneAudio.play().catch(() => {});
    } else {
      el.eratosteneAudio.pause();
    }
  }

  el.mobileAudioToggle.addEventListener("click", () => {
    mobileAudioOn = !mobileAudioOn;
    el.mobileAudioToggle.setAttribute("aria-pressed", String(mobileAudioOn));
    syncMobileAudio();
  });

  const panelObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) mathemoryPanelVisible = true;
    });
    // Nessuno dei due pannelli Mathemory è abbastanza in vista: siamo
    // altrove (es. sulla home).
    const anyVisible = [el.mathemoryPanelLeft, el.mathemoryPanelRight]
      .filter(Boolean)
      .some(panel => {
        const r = panel.getBoundingClientRect();
        return r.width > 0 && r.left < window.innerWidth * 0.5 && r.right > window.innerWidth * 0.5;
      });
    mathemoryPanelVisible = anyVisible;
    syncMobileAudio();
  }, { threshold: [0, 0.5, 1] });

  [el.mathemoryPanelLeft, el.mathemoryPanelRight].filter(Boolean).forEach(panel => panelObserver.observe(panel));
}

paintStaticText();
if(mobileBreakpoint.matches) stageEl.scrollIntoView({ behavior: "instant", inline: "start", block: "nearest" });

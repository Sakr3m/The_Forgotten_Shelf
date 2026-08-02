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
  layout: document.querySelector(".layout"),
  screenPrevBtn: document.getElementById("screenPrevBtn"),
  screenNextBtn: document.getElementById("screenNextBtn"),
  mobileAudioBtns: document.querySelectorAll(".mobile-audio-btn")
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

if(mobileBreakpoint.matches && el.layout){
  const SCREEN_HOME = 1; // 0 = Mathemory sinistra, 1 = home, 2 = Mathemory destra
  let currentScreen = SCREEN_HOME;
  let mobileAudioOn = true;

  function setAudioBtnsUI(){
    el.mobileAudioBtns.forEach(btn => btn.setAttribute("aria-pressed", String(mobileAudioOn)));
  }

  function syncMobileAudio(){
    const onMathemory = currentScreen !== SCREEN_HOME;
    if(mobileAudioOn && onMathemory){
      el.eratosteneAudio.play().catch(() => {});
    } else {
      el.eratosteneAudio.pause();
    }
  }

  // Cambio schermata SOLO tramite queste due funzioni, chiamate
  // dai pulsanti freccia — .layout non è più scorrevole col dito
  // (touch-action:none in CSS), quindi questa è l'unica via.
  function goToScreen(index, instant){
    currentScreen = Math.max(0, Math.min(2, index));
    el.layout.scrollTo({ left: currentScreen * window.innerWidth, behavior: instant ? "instant" : "smooth" });
    // Arrivo su Mathemory (da un'altra schermata): sempre acceso,
    // a prescindere da come l'avevi lasciato l'ultima volta.
    if(currentScreen !== SCREEN_HOME) mobileAudioOn = true;
    setAudioBtnsUI();
    syncMobileAudio();
  }

  // Carosello "a cerchio": da qualunque pannello di Mathemory,
  // premere una freccia (destra o sinistra) torna sempre alla home;
  // dalla home, ogni freccia va verso il proprio Mathemory. Così
  // andando ripetutamente nella stessa direzione si alterna
  // all'infinito Home->Mathemory->Home->Mathemory->...
  el.screenPrevBtn.addEventListener("click", () => {
    goToScreen(currentScreen === SCREEN_HOME ? 0 : SCREEN_HOME);
  });
  el.screenNextBtn.addEventListener("click", () => {
    goToScreen(currentScreen === SCREEN_HOME ? 2 : SCREEN_HOME);
  });

  el.mobileAudioBtns.forEach(btn => {
    btn.addEventListener("click", (ev) => {
      ev.stopPropagation();
      mobileAudioOn = !mobileAudioOn;
      setAudioBtnsUI();
      syncMobileAudio();
    });
  });

  // Blocco extra dello swipe a livello JS (oltre a touch-action:none
  // in CSS): la navigazione deve avvenire SOLO tramite le frecce.
  el.layout.addEventListener("touchmove", (ev) => ev.preventDefault(), { passive: false });

  setAudioBtnsUI();
  goToScreen(SCREEN_HOME, true);
}

paintStaticText();

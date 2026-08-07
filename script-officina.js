// ============================================================
// OFFICINA — per ora solo la home (stato landing): niente voci,
// niente colonne. Stessa logica minima di i18n/cambio lingua
// delle altre pagine, senza lo stato "entry" (qui non esiste
// ancora nulla da aprire).
// ============================================================

const STRINGS = {
  it: {
    brand: "L'Officina Grezza",
    brandMobile: "L'Officina\nGrezza",
    landingEyebrow: "Benvenuto nell'officina",
    landingTitle: "The Forgotten Shelf",
    landingIntro: "The Forgotten Shelf raccoglie anche i progetti personali che vivono altrove: giochi e strumenti in lavorazione, collegati da qui.",
    showProjects: "Mostra progetti",
    landingSub: "Usa le frecce ai lati per esplorare i progetti disponibili.",
    landingSubDesktop: "Premi il pulsante per scoprire i progetti in lavorazione qui sotto.",
    kofiLabel: "Sostienimi su Ko-fi",
    backToIndexLabel: "Torna all'index",
    mathemoryCopyright: "© 2026 Sakrem"
  },
  en: {
    brand: "The Raw Workshop",
    brandMobile: "The Raw\nWorkshop",
    landingEyebrow: "Welcome to the workshop",
    landingTitle: "The Forgotten Shelf",
    landingIntro: "The Forgotten Shelf also collects personal projects that live elsewhere: games and tools in progress, linked from here.",
    showProjects: "Show projects",
    landingSub: "Use the side arrows to browse the available projects.",
    landingSubDesktop: "Press the button to reveal the projects in progress below.",
    kofiLabel: "Support me on Ko-fi",
    backToIndexLabel: "Back to index",
    mathemoryCopyright: "© 2026 Sakrem"
  }
};

const state = { lang: "en" };

// Lingua condivisa con le altre pagine (Timeline, Storie & Teorie,
// Racconti, Recensioni) tramite localStorage: letta qui, prima di
// qualunque render iniziale, cosi' lo stato ripristinato e' quello
// visto fin dal primo disegno della pagina.
const LANG_KEY = "tfs-lang";
const storedLang = localStorage.getItem(LANG_KEY);
if(storedLang === "it" || storedLang === "en") state.lang = storedLang;

const el = {
  body: document.body,
  brandBtn: document.getElementById("brandBtn"),
  langSwitch: document.getElementById("langSwitch"),
  eratosteneAudio: document.getElementById("eratosteneAudio"),
  mathemoryPin: document.getElementById("mathemoryPin"),
  showProjectsBtn: document.getElementById("showProjectsBtn"),
  desktopAudioToggle: document.getElementById("desktopAudioToggle"),
  desktopVolumeSlider: document.getElementById("desktopVolumeSlider"),
  layout: document.querySelector(".layout"),
  screenPrevBtn: document.getElementById("screenPrevBtn"),
  screenNextBtn: document.getElementById("screenNextBtn"),
  mobileAudioBtns: document.querySelectorAll(".mobile-audio-btn")
};

// ---------------------------------------------------------
// Volume e stato on/off condivisi con le altre pagine (Timeline,
// Storie & Teorie, Racconti) tramite localStorage: stesse chiavi,
// lette qui prima di qualunque logica audio. Qui non c'è un'unica
// "musica di sottofondo" continua come nelle altre pagine, ma due
// controlli distinti (hover PC, ambient mobile) che condividono lo
// stesso stato acceso/spento e lo stesso livello.
// ---------------------------------------------------------
const MUSIC_ON_KEY = "tfs-music-on";
const VOLUME_KEY = "tfs-volume";
const storedMusicOnRaw = localStorage.getItem(MUSIC_ON_KEY);
const sharedMusicOn = storedMusicOnRaw === null ? true : storedMusicOnRaw === "true";
const storedVolume = localStorage.getItem(VOLUME_KEY);
const sharedVolume = storedVolume !== null ? parseFloat(storedVolume) : 0.7;
el.eratosteneAudio.volume = sharedVolume;
if(el.desktopVolumeSlider) el.desktopVolumeSlider.value = String(sharedVolume);

function t(key){ return STRINGS[state.lang][key]; }

function paintStaticText(){
  document.querySelectorAll("[data-i18n]").forEach(node => {
    const key = node.getAttribute("data-i18n");
    const mobileKey = key + "Mobile";
    const useMobile = mobileBreakpoint.matches && STRINGS[state.lang][mobileKey];
    node.textContent = useMobile ? t(mobileKey) : t(key);
  });
  document.documentElement.lang = state.lang;
  el.body.dataset.lang = state.lang;
  el.langSwitch.querySelectorAll(".lang-option").forEach(opt => {
    opt.classList.toggle("is-active", opt.dataset.langOption === state.lang);
  });
}

el.langSwitch.addEventListener("click", () => {
  state.lang = state.lang === "it" ? "en" : "it";
  localStorage.setItem(LANG_KEY, state.lang);
  el.body.dataset.lang = state.lang;
  paintStaticText();
});

// Nessuno stato diverso da "landing" esiste ancora: il brand qui
// non ha nulla da resettare, ma lascio l'handler per coerenza col
// resto del sito (torna comunque utile quando arriverà "il resto").
el.brandBtn.addEventListener("click", () => {});

const mobileBreakpoint = window.matchMedia("(hover:none) and (pointer:coarse)");

// Scheda del browser non in primo piano (o dispositivo in standby):
// la musica va sempre in pausa, che sia l'anteprima hover PC o
// quella di sottofondo mobile — stesso elemento audio in entrambi
// i casi. Niente ripresa automatica al ritorno.
document.addEventListener("visibilitychange", () => {
  if(document.hidden) el.eratosteneAudio.pause();
});

// ---------------------------------------------------------
// Audio "Eratostene" — anteprima sonora della card di Mathemory.
// PC: parte in hover sulla card, si ferma quando il mouse esce.
// Mobile: musica di sottofondo, con un pulsante on/off dedicato;
// quando attiva, segue la visualizzazione — suona solo mentre uno
// dei due pannelli di Mathemory è a schermo, si ferma altrove
// (es. tornando alla home).
// ---------------------------------------------------------
if(window.matchMedia("(hover:hover)").matches){
  let desktopAudioOn = sharedMusicOn;
  el.desktopAudioToggle?.setAttribute("aria-pressed", String(desktopAudioOn));

  el.mathemoryPin.addEventListener("mouseenter", () => {
    if(!desktopAudioOn) return;
    el.eratosteneAudio.currentTime = 0;
    el.eratosteneAudio.play().catch(() => {});
  });
  el.mathemoryPin.addEventListener("mouseleave", () => {
    el.eratosteneAudio.pause();
  });

  // Pulsante volume della home: appena sotto "Mostra progetti",
  // non "a lato" come nelle altre pagine. Vero on/off (a differenza
  // del pulsante Mostra progetti, che è solo "on") — spegne anche
  // l'audio già in corso se lo si preme mentre il mouse è ancora
  // sopra la card. Condiviso con le altre pagine tramite
  // localStorage: muta qui, resta muto anche altrove (e viceversa).
  if(el.desktopAudioToggle){
    el.desktopAudioToggle.addEventListener("click", () => {
      desktopAudioOn = !desktopAudioOn;
      localStorage.setItem(MUSIC_ON_KEY, String(desktopAudioOn));
      el.desktopAudioToggle.setAttribute("aria-pressed", String(desktopAudioOn));
      if(!desktopAudioOn) el.eratosteneAudio.pause();
    });
  }

  // Barra del volume vera e propria, anche lei condivisa tramite
  // localStorage con le altre pagine.
  if(el.desktopVolumeSlider){
    el.desktopVolumeSlider.addEventListener("input", () => {
      el.eratosteneAudio.volume = parseFloat(el.desktopVolumeSlider.value);
      localStorage.setItem(VOLUME_KEY, el.desktopVolumeSlider.value);
    });
  }

  // La card parte trasparente: un semplice hover non è un gesto
  // abbastanza "esplicito" per alcuni browser, che bloccano
  // comunque l'audio finché non c'è un click vero da qualche
  // parte sulla pagina. Questo pulsante lo fornisce. Solo "on":
  // una volta rivelata la card, resta rivelata — nessuna logica
  // di spegnimento.
  if(el.showProjectsBtn){
    el.showProjectsBtn.addEventListener("click", () => {
      el.mathemoryPin.classList.add("is-revealed");
      el.showProjectsBtn.setAttribute("aria-pressed", "true");
    });
  }
}

if(mobileBreakpoint.matches && el.layout){
  const SCREEN_HOME = 1; // 0 = Mathemory sinistra, 1 = home, 2 = Mathemory destra
  let currentScreen = SCREEN_HOME;
  let mobileAudioOn = sharedMusicOn;

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

  // Ripresa al ritorno sulla scheda: la pausa la fa già il listener
  // globale qui sopra, qui basta ri-sincronizzare in base allo stato
  // attuale (mobileAudioOn + schermata corrente), che già sa da solo
  // se in quel momento dovrebbe suonare o no.
  document.addEventListener("visibilitychange", () => {
    if(!document.hidden) syncMobileAudio();
  });

  // Cambio schermata SOLO tramite queste due funzioni, chiamate
  // dai pulsanti freccia — .layout non è più scorrevole col dito
  // (touch-action:none in CSS), quindi questa è l'unica via.
  function goToScreen(index, instant){
    currentScreen = Math.max(0, Math.min(2, index));
    el.layout.scrollTo({ left: currentScreen * window.innerWidth, behavior: instant ? "instant" : "smooth" });
    // Solo la home vera (screen 1) mostra la casetta; sui due
    // pannelli Mathemory (0 e 2, e chi si aggiungera' in futuro)
    // torna la scritta a sinistra come nelle altre pagine.
    document.body.classList.toggle("mathemory-open", currentScreen !== SCREEN_HOME);
    // Non forza più acceso all'arrivo: rispetta lo stato condiviso
    // con le altre pagine (localStorage), muto se era stato mutato
    // altrove.
    setAudioBtnsUI();
    syncMobileAudio();
  }

  // La scritta "L'Officina Grezza" (al posto della casetta, quando
  // si e' su Mathemory) deve riportare alla home — prima non faceva
  // nulla (il listener vuoto piu' sotto era pensato per quando il
  // pulsante era sempre nascosto, ora invece compare davvero).
  el.brandBtn.addEventListener("click", () => goToScreen(SCREEN_HOME));

  // Carosello "a cerchio": premendo la STESSA freccia che ha
  // portato su un Mathemory, si continua nella stessa direzione
  // (salto istantaneo, invisibile, al pannello gemello — contenuto
  // identico — poi scorrimento morbido verso la home dall'altro
  // lato) invece di tornare indietro. Premendo la freccia opposta,
  // si torna semplicemente indietro verso la home.
  function jumpThenGoHome(mirrorIndex){
    currentScreen = mirrorIndex;
    el.layout.scrollTo({ left: mirrorIndex * window.innerWidth, behavior: "instant" });
    requestAnimationFrame(() => goToScreen(SCREEN_HOME));
  }

  el.screenPrevBtn.addEventListener("click", () => {
    if(currentScreen === SCREEN_HOME) goToScreen(0);
    else if(currentScreen === 0) jumpThenGoHome(2);
    else goToScreen(SCREEN_HOME);
  });
  el.screenNextBtn.addEventListener("click", () => {
    if(currentScreen === SCREEN_HOME) goToScreen(2);
    else if(currentScreen === 2) jumpThenGoHome(0);
    else goToScreen(SCREEN_HOME);
  });

  el.mobileAudioBtns.forEach(btn => {
    btn.addEventListener("click", (ev) => {
      ev.stopPropagation();
      mobileAudioOn = !mobileAudioOn;
      localStorage.setItem(MUSIC_ON_KEY, String(mobileAudioOn));
      setAudioBtnsUI();
      syncMobileAudio();
    });
  });

  // Blocco extra dello swipe a livello JS (oltre a touch-action:none
  // in CSS): la navigazione deve avvenire SOLO tramite le frecce.
  el.layout.addEventListener("touchmove", (ev) => ev.preventDefault(), { passive: false });

  setAudioBtnsUI();
  goToScreen(SCREEN_HOME, true);
  // Solo ora, dopo aver posizionato il carosello sulla home, i
  // pannelli laterali diventano visibili (CSS li tiene a
  // display:none finche' questa classe non compare) — evita lo
  // sfarfallio del pannello sinistro di default prima dello scrollTo.
  document.documentElement.classList.add("carousel-ready");
}

paintStaticText();

// ---------------------------------------------------------
// Suono UI al tap, stesso comportamento delle altre pagine. Nessuno
// skip brano da escludere qui (Officina non ha .track-skip - solo
// toggle acceso/spento).
// ---------------------------------------------------------
const TAP_SOUND_URL = "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Tap.mp3";
document.addEventListener("click", (e) => {
  if(e.target.closest("button, a.kofi-link, a.discord-link, a.index-link")){
    const tap = new Audio(TAP_SOUND_URL);
    tap.volume = mobileBreakpoint.matches ? 0.3 : 0.1;
    tap.play().catch(() => { /* bloccato finché non c'è un gesto utente; il click stesso lo è, quindi è solo un fallback */ });
  }
});

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

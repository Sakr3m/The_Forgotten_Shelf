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
    mathemoryCopyright: "© 2026 Sakrem",
    leaveALike: "Lascia un like",
    reportBtnLabel: "Segnala bug",
    reportTitle: "Segnala un problema",
    reportIntro: "Hai trovato qualcosa che non funziona? Descrivi cosa è successo qui sotto — la descrizione è obbligatoria, l'immagine è facoltativa ma aiuta molto.",
    reportDescLabel: "Descrizione",
    reportDescPlaceholder: "Cosa è successo, e in quale pagina?",
    reportImageLabel: "Immagine (facoltativa)",
    reportChooseFile: "Scegli file",
    reportNoFile: "Nessun file scelto",
    reportSend: "Invia",
    reportCancel: "Annulla",
    reportSending: "Invio in corso...",
    reportThanks: "Grazie, segnalazione ricevuta.",
    reportError: "Qualcosa è andato storto, riprova più tardi.",
    reportNeedDescription: "Descrivi prima il problema.",
    reportProcessingImage: "Elaborazione immagine...",
    reportInvalidImage: "Non è stato possibile leggere quell'immagine, provane un'altra.",
    reportSelectImage: "Seleziona un file immagine."
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
    mathemoryCopyright: "© 2026 Sakrem",
    leaveALike: "Leave a like",
    reportBtnLabel: "Report bug",
    reportTitle: "Report an issue",
    reportIntro: "Found something broken? Describe what happened below — description required, image optional but helps a lot.",
    reportDescLabel: "Description",
    reportDescPlaceholder: "What happened, and on which page?",
    reportImageLabel: "Image (optional)",
    reportChooseFile: "Choose file",
    reportNoFile: "No file chosen",
    reportSend: "Send",
    reportCancel: "Cancel",
    reportSending: "Sending...",
    reportThanks: "Thanks, report received.",
    reportError: "Something went wrong, please try again later.",
    reportNeedDescription: "Please describe the issue first.",
    reportProcessingImage: "Processing image...",
    reportInvalidImage: "Could not read that image, try another one.",
    reportSelectImage: "Please select an image file."
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
  mathemoryCardBody: document.getElementById("mathemoryCardBody"),
  mathemoryCardBodyLeft: document.getElementById("mathemoryCardBodyLeft"),
  mathemoryCardBodyRight: document.getElementById("mathemoryCardBodyRight"),
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

function heartIcon(){
  return `<svg viewBox="0 0 20 18" class="title-like__icon" aria-hidden="true">
    <path d="M10 17C10 17 1.5 12.1 1.5 6.2C1.5 3.3 3.7 1.2 6.4 1.2C8 1.2 9.3 1.9 10 3.1C10.7 1.9 12 1.2 13.6 1.2C16.3 1.2 18.5 3.3 18.5 6.2C18.5 12.1 10 17 10 17Z"
      stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" fill="none"/>
  </svg>`;
}

// Cuoricino "mi piace" per Mathemory: unico progetto in Officina per
// ora, quindi stesso workId "mathemory" ovunque — desktop e le due
// copie mobile (sinistra/destra del carosello "a cerchio") mostrano
// e aggiornano lo stesso conteggio, dato che rappresentano la stessa
// identica opera. idSuffix evita collisioni tra gli id delle tre
// copie. Sempre in fondo alla card, sempre visibile (niente piu'
// comparsa solo in hover).
function setupMathemoryLike(cardBody, idSuffix){
  if(!cardBody || !window.ForgottenShelfLikes) return;
  const workId = "mathemory";
  const widgetId = `mathemoryLikeWidget${idSuffix}`;
  if(document.getElementById(widgetId)) return; // gia' creato, non rifare nulla
  cardBody.insertAdjacentHTML("beforeend", `
    <div class="title-like" id="${widgetId}">
      <span class="title-like__label">${t("leaveALike")}</span>
      <button type="button" class="title-like__btn" id="mathemoryLikeBtn${idSuffix}" aria-label="Mi piace">${heartIcon()}</button>
      <span class="title-like__count" id="mathemoryLikeCount${idSuffix}"></span>
    </div>
  `);
  const widget = document.getElementById(widgetId);
  const likeBtn = document.getElementById(`mathemoryLikeBtn${idSuffix}`);
  const countEl = document.getElementById(`mathemoryLikeCount${idSuffix}`);
  if(ForgottenShelfLikes.hasLiked(workId)){
    widget.classList.add("is-liked");
    likeBtn.disabled = true;
  }
  ForgottenShelfLikes.getTotal(workId).then(total => { countEl.textContent = total; });
  likeBtn.addEventListener("click", (ev) => {
    ev.stopPropagation();
    const result = ForgottenShelfLikes.like(workId);
    if(result.ok){
      widget.classList.add("is-liked");
      likeBtn.disabled = true;
      const current = parseInt(countEl.textContent, 10) || 0;
      countEl.textContent = current + 1;
      document.querySelectorAll('[id^="mathemoryLikeWidget"]').forEach(w => {
        if(w === widget) return;
        w.classList.add("is-liked");
        const otherBtn = w.querySelector(".title-like__btn");
        const otherCount = w.querySelector(".title-like__count");
        if(otherBtn) otherBtn.disabled = true;
        if(otherCount) otherCount.textContent = current + 1;
      });
    }
  });
}

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
  const reportBtn = document.getElementById("reportBugBtn");
  if(reportBtn) reportBtn.setAttribute("aria-label", t("reportBtnLabel"));
  const reportDesc = document.getElementById("reportDescription");
  if(reportDesc) reportDesc.placeholder = t("reportDescPlaceholder");
  const reportFileName = document.getElementById("reportFileName");
  if(reportFileName && !reportFileName.textContent.includes(".")) reportFileName.textContent = t("reportNoFile");
});

// Nessuno stato diverso da "landing" esiste ancora: il brand qui
// non ha nulla da resettare, ma lascio l'handler per coerenza col
// resto del sito (torna comunque utile quando arriverà "il resto").
el.brandBtn.addEventListener("click", () => {});

const mobileBreakpoint = window.matchMedia("(hover:none) and (pointer:coarse), (max-width:767px)");

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

// Cuoricino "mi piace": sulla card di Mathemory, in tutte le sue
// copie (desktop + le due mobile) — sempre visibile, in fondo alla
// card.
setupMathemoryLike(el.mathemoryCardBody, "");
setupMathemoryLike(el.mathemoryCardBodyLeft, "Left");
setupMathemoryLike(el.mathemoryCardBodyRight, "Right");

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

// ---------------------------------------------------------
// Popup "Segnala un problema" — stessa funzione identica delle
// altre pagine.
// ---------------------------------------------------------
function initReportModal(){
  const btn = document.getElementById("reportBugBtn");
  const overlay = document.getElementById("reportModalOverlay");
  if(!btn || !overlay) return;
  const closeBtn = document.getElementById("reportModalClose");
  const cancelBtn = document.getElementById("reportCancelBtn");
  const submitBtn = document.getElementById("reportSubmitBtn");
  const descEl = document.getElementById("reportDescription");
  const imageInput = document.getElementById("reportImageInput");
  const imagePreview = document.getElementById("reportImagePreview");
  const fileNameEl = document.getElementById("reportFileName");
  const noteEl = document.getElementById("reportNote");
  let imageBlob = null;

  function resetForm(){
    descEl.value = "";
    imageInput.value = "";
    imageBlob = null;
    imagePreview.src = "";
    imagePreview.classList.remove("visible");
    fileNameEl.textContent = t("reportNoFile");
    descEl.placeholder = t("reportDescPlaceholder");
    noteEl.textContent = "";
    submitBtn.disabled = false;
    submitBtn.textContent = t("reportSend");
  }

  function openModal(){
    resetForm();
    overlay.classList.add("visible");
  }
  function closeModal(){ overlay.classList.remove("visible"); }

  btn.setAttribute("aria-label", t("reportBtnLabel"));
  btn.addEventListener("click", openModal);
  closeBtn.addEventListener("click", closeModal);
  cancelBtn.addEventListener("click", closeModal);
  overlay.addEventListener("click", (e) => { if(e.target === overlay) closeModal(); });

  function compressImage(file){
    return new Promise((resolve, reject) => {
      const img = new Image();
      const url = URL.createObjectURL(file);
      img.onload = () => {
        const maxSide = 1600;
        let { width, height } = img;
        if(width > maxSide || height > maxSide){
          const scale = maxSide / Math.max(width, height);
          width = Math.round(width * scale);
          height = Math.round(height * scale);
        }
        const canvas = document.createElement("canvas");
        canvas.width = width; canvas.height = height;
        canvas.getContext("2d").drawImage(img, 0, 0, width, height);
        canvas.toBlob((blob) => {
          URL.revokeObjectURL(url);
          if(blob) resolve(blob); else reject(new Error("compressione fallita"));
        }, "image/jpeg", 0.82);
      };
      img.onerror = () => { URL.revokeObjectURL(url); reject(new Error("immagine non valida")); };
      img.src = url;
    });
  }

  imageInput.addEventListener("change", async () => {
    const file = imageInput.files[0];
    if(!file) return;
    if(!file.type.startsWith("image/")){
      noteEl.textContent = t("reportSelectImage");
      imageInput.value = "";
      fileNameEl.textContent = t("reportNoFile");
      return;
    }
    fileNameEl.textContent = file.name;
    noteEl.textContent = t("reportProcessingImage");
    try {
      imageBlob = await compressImage(file);
      imagePreview.src = URL.createObjectURL(imageBlob);
      imagePreview.classList.add("visible");
      noteEl.textContent = "";
    } catch(e){
      noteEl.textContent = t("reportInvalidImage");
      imageBlob = null;
    }
  });

  submitBtn.addEventListener("click", async () => {
    const description = descEl.value.trim();
    if(!description){
      noteEl.textContent = t("reportNeedDescription");
      return;
    }
    submitBtn.disabled = true;
    submitBtn.textContent = t("reportSending");
    noteEl.textContent = "";

    const formData = new FormData();
    formData.append("description", description);
    formData.append("page", window.location.pathname);
    formData.append("userAgent", navigator.userAgent);
    if(imageBlob) formData.append("image", imageBlob, "report.jpg");

    try {
      const res = await fetch("https://the-forgotten-shelf.sl-eternal-lux.workers.dev/report-bug", {
        method: "POST",
        body: formData
      });
      if(!res.ok) throw new Error("bad status " + res.status);
      noteEl.textContent = t("reportThanks");
      setTimeout(closeModal, 1200);
    } catch(e){
      noteEl.textContent = t("reportError");
      submitBtn.disabled = false;
      submitBtn.textContent = t("reportSend");
    }
  });
}
initReportModal();

// ============================================================
// IL MURO DEI DESIDERI — per ora solo la home (stato landing):
// niente voci, niente colonne. Stessa logica minima di i18n/cambio
// lingua delle altre pagine, senza lo stato "entry" (qui non esiste
// ancora nulla da aprire). Nome file/asset (script-officina.js)
// rimasto invariato per non doverli rinominare ovunque sono
// referenziati — solo un dettaglio interno, non visibile all'utente.
// ============================================================

const STRINGS = {
  it: {
    brand: "Il Muro dei Desideri",
    brandMobile: "Il Muro\ndei Desideri",
    landingEyebrow: "In allestimento",
    landingTitle: "Il Muro dei Desideri",
    landingIntro: "Una bacheca di annunci: dicci cosa cerchi, lo Scaffale ti offre una risposta. Ogni post-it è un bisogno (dieci minuti da riempire, una serata da perdere, una paura da affrontare) e ogni bisogno porta dritto a un racconto, una teoria, una linea del tempo o un gioco che aspettava solo te.",
    landingSub: "Usa le frecce ai lati per esplorare i progetti disponibili.",
    wishSearchPlaceholder: "Cerca per tema (es. horror, teoria, viaggi nel tempo...)",
    wishSearchEmpty: "Nessun tema corrisponde a quello che hai scritto.",
    steamToggleLabel: "Sfoglia offerte Steam",
    landingVideoBtn: "Riproduci video",
    landingVideoNotReady: "Shh... il video sta ancora dormendo. Ripassa più avanti 👀",
    steamIndieEyebrow: "Piccole perle a prezzo bassissimo",
    steamSaleEyebrow: "In sconto proprio adesso",
    kofiLabel: "Sostienimi su Ko-fi",
    backToIndexLabel: "Torna all'index",
    mathemoryCopyright: "© 2026 Sakrem",
    leaveALike: "Lascia un like",
    reportBtnLabel: "Segnala bug",
    reportTitle: "Segnala un problema",
    reportIntro: "Hai trovato qualcosa che non funziona? Descrivi cosa è successo qui sotto: la descrizione è obbligatoria, l'immagine è facoltativa ma aiuta molto.",
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
    brand: "The Wall of Wishes",
    brandMobile: "The Wall\nof Wishes",
    landingEyebrow: "Work in progress",
    landingTitle: "The Wall of Wishes",
    landingIntro: "A bulletin board of classified ads: tell us what you're looking for, and the Shelf offers you an answer. Every note is a need — ten minutes to fill, an evening to lose, a fear to face — and every need leads straight to a story, a theory, a timeline, or a game that was waiting just for you.",
    landingSub: "Use the side arrows to browse the available projects.",
    wishSearchPlaceholder: "Search by theme (e.g. horror, theory, time travel...)",
    wishSearchEmpty: "No theme matches what you typed.",
    steamToggleLabel: "Browse Steam deals",
    landingVideoBtn: "Play video",
    landingVideoNotReady: "Shh... the video is still asleep. Check back later 👀",
    steamIndieEyebrow: "Tiny gems at a very low price",
    steamSaleEyebrow: "On sale right now",
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
  mathemoryCardBodyLeft: document.getElementById("mathemoryCardBodyLeft"),
  mathemoryCardBodyRight: document.getElementById("mathemoryCardBodyRight"),
  desktopAudioToggle: document.getElementById("desktopAudioToggle"),
  landingVideoBtn: document.getElementById("landingVideoBtn"),
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

// Cuoricino "mi piace" per Mathemory: unico progetto rimasto, solo
// nelle due copie mobile del carosello "a cerchio" (sinistra/destra),
// che mostrano e aggiornano lo stesso conteggio, dato che rappresentano
// la stessa identica opera. idSuffix evita collisioni tra gli id delle
// due copie. Sempre in fondo alla card, sempre visibile (niente piu'
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
  document.querySelectorAll("[data-i18n-placeholder]").forEach(node => {
    node.placeholder = t(node.getAttribute("data-i18n-placeholder"));
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
  applyWishNoteLanguage();
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

const mobileBreakpoint = window.matchMedia("(max-width:900px)");

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
// ---------------------------------------------------------
// Pulsante volume della home: tenuto anche se, tolta la card di
// Mathemory, non c'e' piu' nulla che lo faccia scattare in automatico
// (l'anteprima sonora al passaggio del mouse viveva sulla card
// rimossa). Resta comunque funzionante e condiviso con le altre
// pagine tramite localStorage, pronto per quando Il Muro dei Desideri
// avra' un proprio audio da controllare.
// ---------------------------------------------------------
// Pulsante "Riproduci video" - stesso messaggio scherzoso delle
// altre pagine (racconti.css/script-racconti.js), video vero non
// ancora agganciato.
if(el.landingVideoBtn){
  el.landingVideoBtn.addEventListener("click", () => {
    alert(t("landingVideoNotReady"));
  });
}

if(window.matchMedia("(hover:hover)").matches){
  let desktopAudioOn = sharedMusicOn;
  el.desktopAudioToggle?.setAttribute("aria-pressed", String(desktopAudioOn));

  if(el.desktopAudioToggle){
    el.desktopAudioToggle.addEventListener("click", () => {
      desktopAudioOn = !desktopAudioOn;
      localStorage.setItem(MUSIC_ON_KEY, String(desktopAudioOn));
      el.desktopAudioToggle.setAttribute("aria-pressed", String(desktopAudioOn));
      if(!desktopAudioOn) el.eratosteneAudio.pause();
    });
  }

  if(el.desktopVolumeSlider){
    el.desktopVolumeSlider.addEventListener("input", () => {
      el.eratosteneAudio.volume = parseFloat(el.desktopVolumeSlider.value);
      localStorage.setItem(VOLUME_KEY, el.desktopVolumeSlider.value);
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

  // La scritta "Il Muro dei Desideri" (al posto della casetta, quando
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

// Cuoricino "mi piace": sulle due copie mobile della card di
// Mathemory (la copia desktop e' stata rimossa insieme al resto
// della card, Il Muro dei Desideri non ha ancora contenuti propri
// da mettere a like).
setupMathemoryLike(el.mathemoryCardBodyLeft, "Left");
setupMathemoryLike(el.mathemoryCardBodyRight, "Right");

paintStaticText();

// ---------------------------------------------------------
// Suono UI al tap, stesso comportamento delle altre pagine. Nessuno
// skip brano da escludere qui (questa pagina non ha .track-skip - solo
// toggle acceso/spento).
// ---------------------------------------------------------
// Suono UI al tap.
//
// Il suono viene scaricato e DECODIFICATO una sola volta, in idle
// time al caricamento pagina, invece di creare un nuovo Audio() (rete
// + decodifica da zero) ad ogni singolo click: prima il tempismo
// variava sensibilmente click dopo click (~85% delle volte suonava,
// ma mai esattamente nello stesso istante), perché ogni click
// dipendeva da quanto velocemente rete/decoder rispondevano in quel
// momento. Con il buffer già pronto in memoria, avviarlo tramite Web
// Audio API è immediato e sempre identico: nessuna rete, nessuna
// decodifica al momento del click, solo la riproduzione di un buffer
// già pronto.
// ---------------------------------------------------------
const TAP_SOUND_URL = "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Tap.mp3";
let tapAudioCtx = null;
let tapBuffer = null;
(window.requestIdleCallback || (cb => setTimeout(cb, 1)))(() => {
  try {
    tapAudioCtx = new (window.AudioContext || window.webkitAudioContext)();
    fetch(TAP_SOUND_URL)
      .then(r => r.arrayBuffer())
      .then(data => tapAudioCtx.decodeAudioData(data))
      .then(buffer => { tapBuffer = buffer; })
      .catch(() => { /* silenzioso: se fallisce, resta solo il fallback piu' sotto */ });
  } catch(e) { /* Web Audio non disponibile: nessun problema, resta solo il fallback */ }
});
// I browser creano l'AudioContext gia' "sospeso" finche' non c'e' una
// vera interazione dell'utente (policy anti-autoplay): qui viene
// creato in idle time, senza alcun gesto, quindi nasce quasi sempre
// sospeso. Questo listener lo risveglia al primissimo tocco/click su
// TUTTA la pagina, non solo sui pulsanti col suono - cosi', quando
// arriva il click vero su un pulsante, il contesto e' gia' sveglio
// nella grande maggioranza dei casi, invece di scoprirlo sospeso
// proprio in quel momento.
document.addEventListener("pointerdown", () => {
  if(tapAudioCtx && tapAudioCtx.state === "suspended") tapAudioCtx.resume();
}, { once: true });
function suonaTap(volume, onAvviato){
  if(tapAudioCtx && tapBuffer){
    const durata = tapBuffer.duration * 1000; // durata esatta in ms, letta dal buffer - non una stima
    const avvia = () => {
      const source = tapAudioCtx.createBufferSource();
      source.buffer = tapBuffer;
      const gain = tapAudioCtx.createGain();
      gain.gain.value = volume;
      source.connect(gain).connect(tapAudioCtx.destination);
      source.start(0);
      if(onAvviato) onAvviato(durata); // chiamato ORA, non prima: se serviva il
        // resume, questo e' il vero momento in cui il suono parte per davvero
    };
    if(tapAudioCtx.state === "suspended"){
      // resume() e' asincrono: senza aspettarlo, avviare il suono
      // subito dopo rischia di perderlo in silenzio proprio nei casi
      // in cui il risveglio anticipato qui sopra non ha fatto in
      // tempo (tipicamente il primissimo click della sessione).
      tapAudioCtx.resume().then(avvia);
    } else {
      avvia();
    }
  } else {
    // Buffer non ancora pronto (raro: solo se si clicca prima che il
    // pre-caricamento finisca) - stesso vecchio metodo come riserva.
    const tap = new Audio(TAP_SOUND_URL);
    tap.volume = volume;
    tap.play().catch(() => {});
    if(onAvviato) onAvviato(null); // durata non nota in anticipo con questo metodo
  }
}
document.addEventListener("click", (e) => {
  // a.index-link escluso qui: ha la propria gestione dedicata piu'
  // sotto, che deve conoscere la durata esatta del suono per
  // ritardare la navigazione della quantita' giusta (non un numero
  // indovinato) - se restasse anche qui, il suono partirebbe due
  // volte allo stesso click.
  if(e.target.closest("button, a.kofi-link, a.discord-link")){
    suonaTap(mobileBreakpoint.matches ? 0.3 : 0.1);
  }
});

// ---------------------------------------------------------
// "Torna all'index" naviga verso index.html: il ritardo prima di
// navigare non e' piu' un numero indovinato ne' parte dal momento del
// click, ma dal momento in cui il suono del tap e' DAVVERO partito
// (via la callback onAvviato di suonaTap, che scatta dopo l'eventuale
// resume() del contesto audio se era sospeso) - cosi' anche nel raro
// caso in cui serva svegliare il contesto, il conto alla rovescia non
// parte in anticipo rispetto al suono vero. Da quel momento, si
// aspetta il MASSIMO tra due valori:
// - la durata esatta del suono (letta dal buffer gia' decodificato),
//   cosi' la pagina non cambia mai prima che il suono sia davvero
//   finito, qualunque sia la sua durata vera;
// - 1 secondo netto (1000ms) fisso, un pavimento minimo cosi' la
//   pagina corrente resta visibile un tempo dignitoso anche se il
//   suono fosse piu' corto.
// Se il buffer non e' ancora pronto (raro), la durata e' null e si
// ricade sul solo pavimento di 1 secondo.
// ---------------------------------------------------------
document.querySelectorAll("a.index-link").forEach(link => {
  link.addEventListener("click", (ev) => {
    ev.preventDefault();
    suonaTap(mobileBreakpoint.matches ? 0.3 : 0.1, (durataSuono) => {
      const attesa = Math.max(1000, durataSuono || 0);
      setTimeout(() => { window.location.href = link.href; }, attesa);
    });
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

// ---------------------------------------------------------
// Bacheca dei desideri: il pool (#wishPool) contiene TUTTE le
// varianti reali di ogni categoria, scritte per intero nell'HTML -
// non solo una a testa - cosi' restano tutte indicizzabili a
// prescindere da quale venga mostrata in un dato momento (vedi nota
// SEO piu' sopra nel markup). Ad ogni ciclo (primo caricamento, poi
// ogni 300 secondi netti) si pesca UNA voce a caso per ciascuna delle
// 6 categorie e la si sposta nella colonna giusta, con una posizione
// (altezza, profondita' orizzontale) e una rotazione anch'esse
// nuove ogni volta. Il ciclo salta se in quel momento c'e' un
// post-it aperto: cambiare tutto sotto gli occhi di chi sta
// leggendo sarebbe piu' fastidioso che utile.
// ---------------------------------------------------------
const WISH_CYCLE_MS = 300000; // 300 secondi netti

function scatterWishNotes(){
  const pool = document.getElementById("wishPool");
  const colLeft = document.getElementById("wishColumnLeft");
  const colRight = document.getElementById("wishColumnRight");
  if(!pool || !colLeft || !colRight) return;
  if(document.querySelector(".wish-note.is-open")) return; // non interrompere chi sta leggendo

  // Tutte le voci, ovunque si trovino ora (pool o colonne), tornano
  // nel pool prima di ripescare - cosi' il ciclo funziona identico al
  // primo giro e a quelli successivi.
  document.querySelectorAll(".wish-note").forEach(n => pool.appendChild(n));

  const categories = {};
  pool.querySelectorAll(".wish-note").forEach(n => {
    const cat = n.dataset.category;
    (categories[cat] = categories[cat] || []).push(n);
  });

  // Una pescata a caso per categoria.
  const chosen = Object.values(categories).map(list => list[Math.floor(Math.random() * list.length)]);

  // Fisher-Yates sull'ordine di uscita, cosi' non e' sempre la stessa
  // categoria a finire "prima a sinistra" ecc.
  for(let i = chosen.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    [chosen[i], chosen[j]] = [chosen[j], chosen[i]];
  }

  const half = Math.ceil(chosen.length / 2);

  // Coordinate in pixel VERI, misurate dal box reale (non piu' in
  // percentuale: .wish-note e' sempre position:fixed ora, le
  // percentuali risolverebbero sulla viewport intera, non sul box).
  const colLeftRect = colLeft.getBoundingClientRect();
  const colRightRect = colRight.getBoundingClientRect();
  const NOTE_H_ESTIMATE = 140; // altezza approssimativa di un post-it chiuso
  const MIN_GAP = 50; // distanza minima richiesta, mai meno

  // Una fascia verticale esclusiva per ciascun post-it del proprio
  // lato (indice 0,1,2... dentro quel lato, non l'indice globale):
  // cosi' la distanza minima e' garantita dalla costruzione stessa,
  // non affidata alla fortuna del numero casuale.
  let leftSeen = 0, rightSeen = 0;
  chosen.forEach((note, i) => {
    const isLeft = i < half;
    const col = isLeft ? colLeft : colRight;
    const rect = isLeft ? colLeftRect : colRightRect;
    const sideCount = isLeft ? half : (chosen.length - half);
    const bandIndex = isLeft ? leftSeen++ : rightSeen++;
    const bandHeight = rect.height / sideCount;
    const bandTop = rect.top + bandIndex * bandHeight;
    const maxOffset = Math.max(0, bandHeight - NOTE_H_ESTIMATE - MIN_GAP);
    const topPx = (bandTop + MIN_GAP / 2 + Math.random() * maxOffset).toFixed(1) + "px";

    const depthFraction = 0.06 + Math.random() * 0.56; // quanto si spinge verso il centro, 6%-62% della larghezza del box
    const rot = (Math.random() * 13 - 6.5).toFixed(1) + "deg";
    const NOTE_W_ESTIMATE = 190;

    note.style.setProperty("--top", topPx);
    note.style.setProperty("--rot", rot);
    // Sempre ENTRAMBE --left e --right, mai una delle due "auto": con
    // width esplicita, left vince sempre per il layout vero (regola
    // CSS quando tutte e tre le misure sono impostate), ma right deve
    // comunque avere un valore reale, non auto - altrimenti passare
    // da auto a un numero (aprendo un post-it della colonna destra)
    // non si anima mai in modo fluido, salta di colpo.
    let leftPx;
    if(isLeft){
      leftPx = rect.left + depthFraction * rect.width;
    } else {
      const rightEdge = (window.innerWidth - rect.right) + depthFraction * rect.width;
      leftPx = window.innerWidth - rightEdge - NOTE_W_ESTIMATE;
    }
    const rightPx = window.innerWidth - (leftPx + NOTE_W_ESTIMATE);
    note.style.setProperty("--left", leftPx.toFixed(1) + "px");
    note.style.setProperty("--right", rightPx.toFixed(1) + "px");
    note.dataset.homeColumn = col.id;
    col.appendChild(note);
  });
}

// I 26 post-it hanno domanda/risposta/link in italiano gia' scritti
// nell'HTML (per l'indicizzazione, come sempre su questa bacheca) piu'
// tre attributi data-ask-en/data-offer-en/data-link-en con la versione
// inglese. Al primo giro, il testo italiano gia' presente viene
// salvato negli stessi data-attribute (data-ask-it ecc.), cosi' si
// puo' tornare all'italiano anche dopo essere passati all'inglese
// senza doverlo riscrivere da capo. offer usa innerHTML (contiene
// <strong>), ask e link restano semplice testo.
function applyWishNoteLanguage(){
  document.querySelectorAll(".wish-note").forEach(note => {
    const ask = note.querySelector(".wish-note__ask");
    const offer = note.querySelector(".wish-note__offer");
    const link = note.querySelector(".wish-note__link");
    if(!ask || !offer || !link) return;

    if(!note.dataset.askIt){
      note.dataset.askIt = ask.textContent;
      note.dataset.offerIt = offer.innerHTML;
      note.dataset.linkIt = link.textContent;
    }

    if(state.lang === "en" && note.dataset.askEn){
      ask.textContent = note.dataset.askEn;
      offer.innerHTML = note.dataset.offerEn;
      link.textContent = note.dataset.linkEn;
    } else {
      ask.textContent = note.dataset.askIt;
      offer.innerHTML = note.dataset.offerIt;
      link.textContent = note.dataset.linkIt;
    }
  });
}

scatterWishNotes();
applyWishNoteLanguage();
setInterval(scatterWishNotes, WISH_CYCLE_MS);

// ---------------------------------------------------------
// Click su un post-it lo stacca dalla colonna e lo apre in overlay al
// centro (si raddrizza, mostra la risposta); un secondo click sullo
// stesso, un click sull'overlay scuro dietro, o l'apertura di un
// altro post-it lo richiude. Il link dentro la risposta e' un <a>
// vero: il click sul link naviga normalmente e non deve richiudere/
// riaprire nulla, quindi si ferma qui (stopPropagation) prima di
// raggiungere il pulsante che lo contiene.
// ---------------------------------------------------------
const wishOverlay = document.getElementById("wishOverlay");

function closeAllWishNotes(){
  document.querySelectorAll(".wish-note.is-open").forEach(n => {
    n.classList.remove("is-open");
    // Rimesso al suo posto (era stato spostato sotto <body> per
    // aprirsi sopra l'overlay per davvero, vedi il click listener
    // qui sotto): altrimenti, restando li', perderebbe la protezione
    // dello z-index della colonna e rischierebbe di finire sopra ad
    // altri elementi della pagina (es. la barra in alto) al
    // prossimo giro.
    const home = n.dataset.homeColumn && document.getElementById(n.dataset.homeColumn);
    if(home) home.appendChild(n);
  });
  if(wishOverlay) wishOverlay.classList.remove("is-visible");
}

document.querySelectorAll(".wish-note").forEach(note => {
  note.addEventListener("click", () => {
    const wasOpen = note.classList.contains("is-open");
    closeAllWishNotes();
    if(!wasOpen){
      // Cruciale: .wish-column ha un suo z-index (4), piu' basso di
      // quello dell'overlay (10). Anche con is-open a z-index piu'
      // alto, restando figlio della colonna il post-it non riesce a
      // "scappare" sopra l'overlay - il suo z-index conta solo
      // dentro al contenitore che lo contiene, mai oltre. Spostarlo
      // sotto <body> lo rende fratello vero dell'overlay, allo stesso
      // livello: solo cosi' il suo z-index piu' alto vince per
      // davvero, sia nel disegno che nei click (che altrimenti
      // finivano intercettati dall'overlay, sopra di lui solo in
      // apparenza).
      document.body.appendChild(note);
      note.classList.add("is-open");
      if(wishOverlay) wishOverlay.classList.add("is-visible");
    }
  });
  const link = note.querySelector(".wish-note__link");
  if(link) link.addEventListener("click", (ev) => ev.stopPropagation());
});

if(wishOverlay) wishOverlay.addEventListener("click", closeAllWishNotes);

// ---------------------------------------------------------
// Ricerca a tag: filtra su data-tags + data-category + il testo
// della domanda stessa (cosi' funziona anche digitando una parola
// che compare li' ma non e' un tag formale), su TUTTE le 26 varianti
// del pool - non solo le 6 mostrate in un dato momento. Fino a 10
// risultati, il resto resta semplicemente non mostrato (non e' un
// problema SEO: il testo di tutte e 26 e' comunque gia' nell'HTML a
// prescindere da questa ricerca, questa e' solo un filtro di
// visualizzazione). Click su un risultato naviga dritto al link
// reale di quella voce.
// ---------------------------------------------------------
(function initWishSearch(){
  const input = document.getElementById("wishSearchInput");
  const dropdown = document.getElementById("wishSearchDropdown");
  if(!input || !dropdown) return;

  // Etichette leggibili per le categorie (data-category), mostrate
  // tra parentesi accanto al titolo nel risultato di ricerca -
  // richiesto esplicitamente: titolo dell'opera in grande, "info"
  // piccola sotto, niente piu' la domanda del post-it (confondeva:
  // non si capiva a colpo d'occhio QUALE opera fosse il risultato).
  const CATEGORY_LABELS = {
    it: { "racconti-brevi": "racconto breve", teorie: "teoria", libri: "libro", diari: "diario di gioco", timeline: "timeline", mathemory: "mathemory" },
    en: { "racconti-brevi": "short story", teorie: "theory", libri: "book", diari: "game diary", timeline: "timeline", mathemory: "mathemory" }
  };

  function allNotesSearchable(){
    return Array.from(document.querySelectorAll(".wish-note")).map(note => {
      const offer = note.querySelector(".wish-note__offer")?.textContent || "";
      const link = note.querySelector(".wish-note__link");
      // Titolo dell'opera (dentro l'offer, es. "Offresi: <strong>Cinere</strong>")
      // aggiunto alla ricerca (18/08): prima si cercava solo per tag/
      // categoria/argomento, non per nome dell'opera - richiesto
      // esplicitamente di poter trovare le opere stesse digitandone
      // il titolo, non solo il tema.
      const title = note.querySelector(".wish-note__offer strong")?.textContent || "";
      const category = note.dataset.category || "";
      const categoryLabel = (CATEGORY_LABELS[state.lang] && CATEGORY_LABELS[state.lang][category]) || category;
      // Tag/categoria + titolo dell'opera, non il resto del testo di
      // domanda/risposta: altrimenti cercare "storia" o "gioco"
      // (parole comuni dentro le domande stesse) restituirebbe
      // risultati casuali invece di una vera ricerca per argomento/
      // genere/titolo.
      const haystack = ((note.dataset.tags || "") + " " + category + " " + title).toLowerCase();
      return { title, categoryLabel, href: link ? link.href : "#", haystack };
    });
  }

  function renderResults(query){
    const q = query.trim().toLowerCase();
    if(!q){ dropdown.hidden = true; dropdown.innerHTML = ""; return; }
    const matches = allNotesSearchable().filter(n => n.haystack.includes(q)).slice(0, 10);
    dropdown.innerHTML = "";
    if(matches.length === 0){
      const empty = document.createElement("p");
      empty.className = "wish-search__empty";
      empty.textContent = t("wishSearchEmpty");
      dropdown.appendChild(empty);
    } else {
      matches.forEach(m => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "wish-search__result";
        btn.innerHTML = `<p class="wish-search__result-title">${m.title}</p><p class="wish-search__result-category">(${m.categoryLabel})</p>`;
        btn.addEventListener("click", () => { window.location.href = m.href; });
        dropdown.appendChild(btn);
      });
    }
    dropdown.hidden = false;
  }

  input.addEventListener("input", () => renderResults(input.value));
  input.addEventListener("focus", () => { if(input.value.trim()) renderResults(input.value); });
  document.addEventListener("click", (ev) => {
    if(!ev.target.closest("#wishSearch")) dropdown.hidden = true;
  });
})();

// ---------------------------------------------------------
// Toggle Steam: i box ai lati mostrano le due liste (indie economici
// a sinistra, in sconto ora a destra) al posto dei post-it. Un
// secondo click torna alla bacheca. Non richiama mai scatterWishNotes:
// non conta come un refresh, i post-it restano esattamente dove
// erano quando si torna indietro.
//
// Le due liste si rinfrescano ogni 5 minuti netti (300000ms), a
// partire dal primo click sul toggle (non prima: se nessuno lo usa
// mai, non ha senso interrogare Steam in background). Indie: pesca
// 10 titoli a caso dal pool statico di 20 (i prezzi cambiano di rado,
// scriverli a mano qui e' onesto). Sconti: prova prima il Worker
// dedicato (worker-steam-sales.js - fa da tramite verso l'endpoint
// pubblico di Steam, che non ha header CORS e quindi non e'
// chiamabile direttamente dal browser), mostrando prezzo e sconto
// VERI presi da Steam in quel momento; se il Worker non risponde
// (non ancora pubblicato, o momentaneamente giu'), pesca 10 titoli a
// caso dal pool di riserva - senza alcun prezzo scritto a mano,
// solo titolo/copertina/link alla pagina Steam vera, dove il prezzo
// che la persona vede e' comunque sempre quello reale del momento.
// ---------------------------------------------------------

// Da sostituire con l'URL vero una volta pubblicato il Worker (vedi
// worker-steam-sales.js in cima alla repo per il codice e le
// istruzioni). Finche' resta questo valore, o se il fetch fallisce
// per qualunque motivo, si usa automaticamente il pool di riserva.
const STEAM_SPECIALS_WORKER_URL = "https://REPLACE-WITH-YOUR-WORKER-URL.workers.dev/";

function pickRandom(arr, n){
  const copy = arr.slice();
  for(let i = copy.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy.slice(0, n);
}

function refreshSteamIndie(){
  const pool = document.getElementById("steamIndiePool");
  const list = document.getElementById("steamIndieList");
  if(!pool || !list) return;
  const items = pickRandom(Array.from(pool.querySelectorAll(".steam-item")), 10);
  list.innerHTML = "";
  items.forEach(el => list.appendChild(el.cloneNode(true)));
}

function renderSteamFallbackSale(){
  const pool = document.getElementById("steamSaleFallbackPool");
  const list = document.getElementById("steamSaleList");
  if(!pool || !list) return;
  const items = pickRandom(Array.from(pool.querySelectorAll(".steam-item")), 10);
  list.innerHTML = "";
  items.forEach(el => list.appendChild(el.cloneNode(true)));
}

async function refreshSteamSale(){
  const list = document.getElementById("steamSaleList");
  if(!list) return;
  if(!STEAM_SPECIALS_WORKER_URL || STEAM_SPECIALS_WORKER_URL.includes("REPLACE-WITH")){
    renderSteamFallbackSale();
    return;
  }
  try {
    const res = await fetch(STEAM_SPECIALS_WORKER_URL);
    if(!res.ok) throw new Error("worker non disponibile");
    const data = await res.json();
    const items = pickRandom(data.items || [], 10);
    if(items.length === 0) throw new Error("nessun risultato dal worker");
    list.innerHTML = "";
    items.forEach(g => {
      const a = document.createElement("a");
      a.className = "steam-item";
      a.href = `https://store.steampowered.com/app/${g.appid}/`;
      a.target = "_blank";
      a.rel = "noopener";
      const priceStr = ((g.finalPriceCents || 0) / 100).toFixed(2).replace(".", ",") + " €";
      a.innerHTML = `
        <img class="steam-item__cover" src="${g.cover}" alt="" loading="lazy">
        <span class="steam-item__title">${g.title}</span>
        <span class="steam-item__price">${priceStr}${g.discountPercent ? ` <span class="steam-item__discount">-${g.discountPercent}%</span>` : ""}</span>
      `;
      list.appendChild(a);
    });
  } catch(e){
    renderSteamFallbackSale();
  }
}

const STEAM_REFRESH_MS = 300000; // 5 minuti netti
let steamRefreshStarted = false;

function refreshSteamLists(){
  refreshSteamIndie();
  refreshSteamSale();
}

(function initSteamToggle(){
  const btn = document.getElementById("wishSteamToggle");
  if(!btn) return;
  btn.addEventListener("click", () => {
    const isOn = document.body.classList.toggle("is-steam-mode");
    btn.setAttribute("aria-pressed", String(isOn));
    if(isOn && !steamRefreshStarted){
      steamRefreshStarted = true;
      refreshSteamLists();
      setInterval(refreshSteamLists, STEAM_REFRESH_MS);
    }
  });
})();

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
    landingSubDesktop: "Ancora in costruzione: torna presto a dare un'occhiata.",
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
    brand: "The Wall of Wishes",
    brandMobile: "The Wall\nof Wishes",
    landingEyebrow: "Coming soon",
    landingTitle: "The Wall of Wishes",
    landingIntro: "A bulletin board of classified ads: tell us what you're looking for, and the Shelf offers you an answer. Every note is a need — ten minutes to fill, an evening to lose, a fear to face — and every need leads straight to a story, a theory, a timeline, or a game that was waiting just for you.",
    landingSub: "Use the side arrows to browse the available projects.",
    landingSubDesktop: "Still under construction: check back soon.",
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
  chosen.forEach((note, i) => {
    const col = i < half ? colLeft : colRight;
    const side = i < half ? "left" : "right";
    const top = (5 + Math.random() * 83).toFixed(1) + "%";
    const depth = (6 + Math.random() * 62).toFixed(1) + "%"; // quanto si spinge verso il centro
    const rot = (Math.random() * 13 - 6.5).toFixed(1) + "deg";
    note.style.setProperty("--top", top);
    note.style.setProperty("--rot", rot);
    if(side === "left"){
      note.style.setProperty("--left", depth);
      note.style.removeProperty("--right");
    } else {
      note.style.setProperty("--right", depth);
      note.style.removeProperty("--left");
    }
    col.appendChild(note);
  });
}

scatterWishNotes();
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
  document.querySelectorAll(".wish-note.is-open").forEach(n => n.classList.remove("is-open"));
  if(wishOverlay) wishOverlay.classList.remove("is-visible");
}

document.querySelectorAll(".wish-note").forEach(note => {
  note.addEventListener("click", () => {
    const wasOpen = note.classList.contains("is-open");
    closeAllWishNotes();
    if(!wasOpen){
      note.classList.add("is-open");
      if(wishOverlay) wishOverlay.classList.add("is-visible");
    }
  });
  const link = note.querySelector(".wish-note__link");
  if(link) link.addEventListener("click", (ev) => ev.stopPropagation());
});

if(wishOverlay) wishOverlay.addEventListener("click", closeAllWishNotes);

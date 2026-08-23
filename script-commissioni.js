// ============================================================
// IL BANCO DELLE COMMISSIONI — home ridotta alla sola landing
// (niente carrello, niente card, niente voci, su richiesta
// esplicita). Stessa logica minima di i18n/cambio lingua delle
// altre pagine leggere del sito (Officina).
// ============================================================

const STRINGS = {
  it: {
    brand: "Il Banco delle Commissioni",
    backToIndexLabel: "Torna all'index",
    kofiLabel: "Sostienimi su Ko-fi",
    landingEyebrow: "Benvenuto nell'archivio\ndelle recensioni",
    landingIntro: "Impressioni oneste sui giochi che ho giocato, completati, platinati o amati senza motivo, senza pretese di essere una guida.",
    landingQuote: "Mentre gioco, non penso alla recensione che dovrò scrivere. Solo dopo, quando mi fermo a scriverla, capisco davvero quante cose ho vissuto, e quante parole servono per raccontarne anche solo la metà.",
    landingSignature: "— Sakrem",
    landingSubDesktop: "Apri il carrello laterale per sfogliare le recensioni disponibili.",
    landingTitle: "Il Banco delle Commissioni",
    reportBtnLabel: "Segnala bug",
    reportCancel: "Annulla",
    reportChooseFile: "Scegli file",
    reportDescLabel: "Descrizione",
    reportImageLabel: "Immagine (facoltativa)",
    reportIntro: "Hai trovato qualcosa che non funziona? Descrivi cosa è successo qui sotto: la descrizione è obbligatoria, l'immagine è facoltativa ma aiuta molto.",
    reportNoFile: "Nessun file scelto",
    reportSend: "Invia",
    reportTitle: "Segnala un problema",
    reportDescPlaceholder: "Cosa è successo, e in quale pagina?",
    reportError: "Qualcosa è andato storto, riprova più tardi.",
    reportInvalidImage: "Non è stato possibile leggere quell'immagine, provane un'altra.",
    reportNeedDescription: "Descrivi prima il problema.",
    reportProcessingImage: "Elaborazione immagine...",
    reportSelectImage: "Seleziona un file immagine.",
    reportSending: "Invio in corso...",
    reportThanks: "Grazie, segnalazione ricevuta.",
  },
  en: {
    brand: "The Commission Counter",
    backToIndexLabel: "Back to index",
    kofiLabel: "Support me on Ko-fi",
    landingEyebrow: "Welcome to the archive\nof reviews",
    landingIntro: "Honest impressions on the games I've played — completed, platinumed, or loved for no good reason — with no pretense of being a guide.",
    landingQuote: "While I'm playing, I don't think about the review I'll have to write. Only afterward, when I stop to write it, do I realize how much I've actually lived through, and how many words it takes to capture even half of it.",
    landingSignature: "— Sakrem",
    landingSubDesktop: "Open the side cart to browse the available reviews.",
    landingTitle: "The Commission Counter",
    reportBtnLabel: "Report bug",
    reportCancel: "Cancel",
    reportChooseFile: "Choose file",
    reportDescLabel: "Description",
    reportImageLabel: "Image (optional)",
    reportIntro: "Found something broken? Describe what happened below — description required, image optional but helps a lot.",
    reportNoFile: "No file chosen",
    reportSend: "Send",
    reportTitle: "Report an issue",
    reportDescPlaceholder: "What happened, and on which page?",
    reportError: "Something went wrong, please try again later.",
    reportInvalidImage: "Could not read that image, try another one.",
    reportNeedDescription: "Please describe the issue first.",
    reportProcessingImage: "Processing image...",
    reportSelectImage: "Please select an image file.",
    reportSending: "Sending...",
    reportThanks: "Thanks, report received.",
  }
};

const state = { lang: "en" };


// Lingua condivisa con le altre pagine tramite localStorage: letta
// prima di qualunque render iniziale.
const LANG_KEY = "tfs-lang";
const storedLang = localStorage.getItem(LANG_KEY);
if(storedLang === "it" || storedLang === "en") state.lang = storedLang;

const el = {
  body: document.body,
  brandBtn: document.getElementById("brandBtn"),
  brand: document.querySelector(".brand"),
  socialLinks: document.querySelector(".social-links"),
  stageControls: document.querySelector(".stage-controls"),
  langSwitch: document.getElementById("langSwitch"),
  indexLink: document.getElementById("indexLink"),
  layout: document.querySelector(".layout"),
  reportBugBtn: document.getElementById("reportBugBtn")
};

function t(key){ return STRINGS[state.lang][key]; }

// Vero solo su dispositivi touch senza hover (telefoni/tablet): usato
// per attivare il toggle di data-state SOLO li', mai su desktop.
function isMobileNav(){
  return window.matchMedia("(max-width:900px)").matches;
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

  updateIndexLink();
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

// Il link "Torna all'index" in alto naviga sempre verso index.html:
// nessuna voce/recensione da cui "tornare indietro" su questa
// pagina (ridotta alla sola landing), quindi niente piu' stato da
// controllare qui.
function updateIndexLink(){
  const label = el.indexLink.querySelector("span");
  if(label) label.textContent = t("backToIndexLabel");
  else el.indexLink.setAttribute("data-i18n", "backToIndexLabel");
}

el.indexLink.addEventListener("click", (ev) => {
  // Naviga davvero verso index.html: il ritardo prima di navigare
  // non e' piu' un numero indovinato ne' parte dal momento del
  // click, ma dal momento in cui il suono del tap e' DAVVERO
  // partito (via la callback onAvviato di suonaTap, che scatta dopo
  // l'eventuale resume() del contesto audio se era sospeso) - cosi'
  // anche nel raro caso in cui serva svegliare il contesto, il
  // conto alla rovescia non parte in anticipo rispetto al suono
  // vero. Da quel momento, si aspetta il MASSIMO tra due valori: la
  // durata esatta del suono (letta dal buffer gia' decodificato),
  // cosi' la pagina non cambia mai prima che il suono sia davvero
  // finito; e 1 secondo netto fisso, un pavimento minimo cosi' la
  // pagina corrente resta visibile un tempo dignitoso anche se il
  // suono fosse piu' corto. Se il buffer non e' ancora pronto
  // (raro), la durata e' null e si ricade sul solo pavimento di 1
  // secondo.
  ev.preventDefault();
  suonaTap(isMobileNav() ? 0.3 : 0.1, (durataSuono) => {
    const attesa = Math.max(1000, durataSuono || 0);
    setTimeout(() => { window.location.href = el.indexLink.href; }, attesa);
  });
});

paintStaticText();

// Su desktop, l'intera pagina resta invisibile finche' non sono
// pronti SIA questo avvio SIA i font veri (probabile causa dei
// riposizionamenti che si "auto-correggono" in vista) - document.
// fonts.ready e' una vera API del browser, si risolve solo quando i
// font sono davvero caricati e applicati. Controllo di sicurezza per
// browser che non la supportano (rara, ma meglio non rischiare una
// pagina bloccata invisibile per sempre su quei casi).
if(document.fonts && document.fonts.ready){
  document.fonts.ready.then(() => {
    document.body.classList.add("tfs-desktop-ready");
  });
} else {
  document.body.classList.add("tfs-desktop-ready");
}

// ---------------------------------------------------------
// Suono UI al tap, stesso comportamento delle altre pagine. Lo skip
// del brano (.track-skip) è l'unica eccezione voluta, escluso
// esplicitamente.
// ---------------------------------------------------------
// Suono UI al tap, stesso comportamento delle altre pagine. Lo skip
// del brano (.track-skip) è l'unica eccezione voluta, escluso
// esplicitamente.
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
  // in alto (el.indexLink), che deve conoscere la durata esatta del
  // suono per ritardare la navigazione della quantita' giusta (non un
  // numero indovinato) - se restasse anche qui, il suono partirebbe
  // due volte allo stesso click.
  const target = e.target.closest("button, a.kofi-link, a.discord-link");
  if(target){
    suonaTap(isMobileNav() ? 0.3 : 0.1);
  }
});

// ---------------------------------------------------------
// Popup "Segnala un problema" — stessa funzione identica delle
// altre pagine (script-racconti.js/script-storie-teorie.js/script.js).
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


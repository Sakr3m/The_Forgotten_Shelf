// ============================================================
// Modulo dati per i "mi piace" per opera, verso lo stesso Worker
// Cloudflare gia' usato per le visite
// (the-forgotten-shelf.sl-eternal-lux.workers.dev). Solo livello
// dati qui dentro — legge i totali, invia i like, ricorda nel
// browser se un'opera ha gia' ricevuto like da qui. Nessuna
// interfaccia grafica: il codice del cuoricino (aspetto, dove
// metterlo in pagina) usera' questa API quando sara' pronto.
//
// A PACCHETTI, non piu' un click = una richiesta: se in una visita
// Mario mette like a piu' opere, vengono raggruppate e mandate
// insieme (dopo un breve ritardo, o subito se la pagina si sta per
// chiudere) in un'unica richiesta — 1 scrittura sul Worker invece
// di una per ogni like, indipendentemente da quante ne mette.
//
// La coda in attesa di partire vive anche in localStorage (non solo
// in memoria): se la pagina si chiude prima che il pacchetto sia
// confermato, al prossimo caricamento del sito (qualunque pagina)
// il pacchetto rimasto in sospeso riparte da solo.
//
// Fallisce sempre in silenzio (come stats.js): se il Worker non
// risponde, il sito continua a funzionare normalmente.
// ============================================================
(function () {
  var LIKES_ENDPOINT = "https://the-forgotten-shelf.sl-eternal-lux.workers.dev/likes";
  var LIKE_BATCH_ENDPOINT = "https://the-forgotten-shelf.sl-eternal-lux.workers.dev/like-batch";
  var LIKED_KEY_PREFIX = "fs_liked:";
  var PENDING_QUEUE_KEY = "fs_pending_likes";
  var FLUSH_DELAY_MS = 1500; // quanto aspettare, dall'ultimo like aggiunto, prima di mandare il pacchetto

  var totalsPromise = null;
  var flushTimer = null;

  // --- localStorage, con gli stessi identici paracadute di prima
  // (modalita' privata rigida, ecc.): se non disponibile, tutto
  // degrada a "nessuna memoria tra una pagina e l'altra", non si
  // rompe nulla.
  function readPendingQueue() {
    try {
      var raw = localStorage.getItem(PENDING_QUEUE_KEY);
      var arr = raw ? JSON.parse(raw) : [];
      return Array.isArray(arr) ? arr : [];
    } catch (e) {
      return [];
    }
  }
  function writePendingQueue(arr) {
    try {
      localStorage.setItem(PENDING_QUEUE_KEY, JSON.stringify(arr));
    } catch (e) {
      // non disponibile: la coda resta solo in memoria per questa
      // visita, si perde alla chiusura pagina se non ancora inviata
      // — stesso rischio residuo gia' accettato altrove in questo
      // file per la modalita' privata rigida.
    }
  }

  function hasLiked(workId) {
    try {
      return localStorage.getItem(LIKED_KEY_PREFIX + workId) === "1";
    } catch (e) {
      return false;
    }
  }

  function markLiked(workId) {
    try {
      localStorage.setItem(LIKED_KEY_PREFIX + workId, "1");
    } catch (e) {
      // vedi hasLiked
    }
  }

  function fetchTotals() {
    if (totalsPromise) return totalsPromise;
    totalsPromise = fetch(LIKES_ENDPOINT)
      .then(function (res) {
        if (!res.ok) throw new Error("risposta non ok");
        return res.json();
      })
      .catch(function () {
        return {};
      });
    return totalsPromise;
  }

  function getTotal(workId) {
    return fetchTotals().then(function (totals) {
      return totals[workId] || 0;
    });
  }

  // Manda DAVVERO il pacchetto accumulato finora. Chiamata sia dal
  // timer di ritardo sia da chi vuole forzare l'invio subito (pagina
  // che si chiude). keepalive:true protegge la richiesta anche se
  // la pagina si chiude nello stesso istante in cui parte.
  function flushQueue() {
    if (flushTimer) {
      clearTimeout(flushTimer);
      flushTimer = null;
    }
    var queue = readPendingQueue();
    // tolti quelli che nel frattempo risultano gia' confermati (es.
    // un'altra scheda della stessa persona li ha gia' mandati)
    queue = queue.filter(function (id) { return !hasLiked(id); });
    if (queue.length === 0) {
      writePendingQueue([]);
      return Promise.resolve({ ok: true, sent: 0 });
    }

    return fetch(LIKE_BATCH_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ workIds: queue }),
      keepalive: true,
    })
      .then(function (res) {
        if (!res.ok) throw new Error("risposta non ok");
        return res.json();
      })
      .then(function (data) {
        // Confermato per davvero: SOLO ORA si segna ogni opera come
        // "gia' messo like", e si toglie dalla coda in sospeso.
        queue.forEach(markLiked);
        writePendingQueue(readPendingQueue().filter(function (id) { return queue.indexOf(id) === -1; }));
        return fetchTotals().then(function (totals) {
          queue.forEach(function (id) { totals[id] = (totals[id] || 0) + 1; });
          return { ok: true, sent: queue.length, batchId: data && data.batchId };
        });
      })
      .catch(function () {
        // Non confermato: la coda resta in localStorage cosi' com'e'
        // (non viene tolta nulla), recuperabile al prossimo tentativo
        // o al prossimo caricamento della pagina. Nessuna perdita
        // silenziosa: se non arriva conferma, resta "da mandare".
        return { ok: false, reason: "network-error" };
      });
  }

  function scheduleFlush() {
    if (flushTimer) clearTimeout(flushTimer);
    flushTimer = setTimeout(flushQueue, FLUSH_DELAY_MS);
  }

  // Aggiunge un'opera alla coda dei like da mandare (o segnala che
  // e' gia' stata messa/e' gia' in coda). Non manda nulla subito:
  // aspetta FLUSH_DELAY_MS dall'ULTIMO like aggiunto, cosi' piu'
  // like ravvicinati finiscono nello stesso pacchetto.
  function like(workId) {
    if (hasLiked(workId)) {
      return { ok: false, reason: "already-liked" };
    }
    var queue = readPendingQueue();
    if (queue.indexOf(workId) !== -1) {
      return { ok: false, reason: "already-pending" };
    }
    queue.push(workId);
    writePendingQueue(queue);
    scheduleFlush();
    return { ok: true, queued: true };
  }

  // Alla chiusura/cambio pagina, manda SUBITO quello che c'e' in
  // coda invece di aspettare il ritardo — altrimenti un like messo
  // pochi istanti prima di chiudere la scheda non partirebbe mai.
  if (typeof document !== "undefined" && typeof document.addEventListener === "function") {
    document.addEventListener("visibilitychange", function () {
      if (document.visibilityState === "hidden") flushQueue();
    });
  }
  if (typeof window !== "undefined" && typeof window.addEventListener === "function") {
    window.addEventListener("pagehide", flushQueue);
  }

  // All'apertura di QUALUNQUE pagina del sito: se c'e' una coda
  // rimasta in sospeso da una visita precedente (la pagina si era
  // chiusa prima che il pacchetto partisse, keepalive compreso — puo'
  // ancora succedere in casi limite, es. dispositivo spento di scatto),
  // ci si riprova subito, cosi' non resta persa per sempre.
  if (readPendingQueue().length > 0) {
    flushQueue();
  }

  window.ForgottenShelfLikes = {
    getTotal: getTotal,
    hasLiked: hasLiked,
    like: like,
    flushNow: flushQueue, // esposta se un domani il cuoricino vuole forzare l'invio subito invece di aspettare il ritardo
  };
})();

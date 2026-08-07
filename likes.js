// ============================================================
// Modulo dati per i "mi piace" per opera, verso lo stesso Worker
// Cloudflare gia' usato per le visite
// (the-forgotten-shelf.sl-eternal-lux.workers.dev). Solo livello
// dati qui dentro — legge i totali, invia i click, ricorda nel
// browser se un'opera ha gia' ricevuto like da qui. Nessuna
// interfaccia grafica: il codice del cuoricino (aspetto, dove
// metterlo in pagina) usera' questa API quando sara' pronto.
//
// Fallisce sempre in silenzio (come stats.js): se il Worker non
// risponde, il sito continua a funzionare normalmente, i totali
// restano semplicemente non disponibili per quella visita.
// ============================================================
(function () {
  var LIKES_ENDPOINT = "https://the-forgotten-shelf.sl-eternal-lux.workers.dev/likes";
  var LIKE_ENDPOINT = "https://the-forgotten-shelf.sl-eternal-lux.workers.dev/like";
  var LIKED_KEY_PREFIX = "fs_liked:";

  var totalsPromise = null;

  // Scarica i totali di TUTTE le opere in un'unica chiamata (lo
  // stesso Worker li tiene gia' in un'unica chiave coalesced), e la
  // tiene in cache per il resto della visita: pagine diverse che
  // chiamano getTotal() piu' volte non rifanno la richiesta da capo.
  function fetchTotals() {
    if (totalsPromise) return totalsPromise;
    totalsPromise = fetch(LIKES_ENDPOINT)
      .then(function (res) {
        if (!res.ok) throw new Error("risposta non ok");
        return res.json();
      })
      .catch(function () {
        return {}; // silenzioso: nessun totale disponibile per questa visita
      });
    return totalsPromise;
  }

  // true/false: questo browser ha gia' mandato un like per questa
  // opera? (non "l'opera ha dei like", quello e' getTotal — questo
  // e' "sono stato IO a mettercelo", per non far rimettere il like
  // due volte dalla stessa persona).
  function hasLiked(workId) {
    try {
      return localStorage.getItem(LIKED_KEY_PREFIX + workId) === "1";
    } catch (e) {
      // localStorage non disponibile (es. modalita' privata rigida
      // di alcuni browser): non puo' ricordare, quindi si comporta
      // come se non fosse mai stato messo — l'utente potrebbe
      // rimettere like piu' volte in quel caso specifico, rischio
      // accettato per un contatore di gradimento.
      return false;
    }
  }

  function markLiked(workId) {
    try {
      localStorage.setItem(LIKED_KEY_PREFIX + workId, "1");
    } catch (e) {
      // vedi hasLiked: se non si puo' scrivere, non si puo' nemmeno
      // ricordare — nessun danno oltre a quello gia' descritto sopra.
    }
  }

  // Numero di like attuali per una singola opera (0 se non ancora
  // disponibile o mai messo). Ritorna una Promise perche' la prima
  // chiamata deve aspettare la risposta del Worker.
  function getTotal(workId) {
    return fetchTotals().then(function (totals) {
      return totals[workId] || 0;
    });
  }

  // Invia un like per un'opera. Segna SUBITO "gia' messo like" nel
  // browser (prima ancora di sapere se il Worker ha risposto), cosi'
  // un doppio click veloce sul cuoricino non manda due segnali.
  // Aggiorna anche la cache locale dei totali (+1 ottimistico) cosi'
  // chi ha appena messo like vede il numero salire subito, anche se
  // il conteggio vero sul Worker si aggiornera' solo il giorno dopo
  // (vedi il Worker per il perche').
  function like(workId) {
    if (hasLiked(workId)) {
      return Promise.resolve({ ok: false, reason: "already-liked" });
    }
    markLiked(workId);

    return fetchTotals()
      .then(function (totals) {
        totals[workId] = (totals[workId] || 0) + 1;
      })
      .then(function () {
        return fetch(LIKE_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ workId: workId }),
        });
      })
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        return { ok: true, clickId: data && data.clickId };
      })
      .catch(function () {
        // Il segnale potrebbe non essere partito per davvero (es.
        // offline in quell'istante): il conteggio ottimistico locale
        // resta comunque cosi' com'e' mostrato, il Worker non lo
        // saprebbe mai. Rischio accettato per un contatore di
        // gradimento, non per qualcosa di critico.
        return { ok: false, reason: "network-error" };
      });
  }

  window.ForgottenShelfLikes = {
    getTotal: getTotal,
    hasLiked: hasLiked,
    like: like,
  };
})();

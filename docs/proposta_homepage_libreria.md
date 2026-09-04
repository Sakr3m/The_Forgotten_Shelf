# Proposta homepage "libreria" - note di lavoro

Stato: in sospeso, da riprendere appena possibile. Nessuna implementazione
ancora iniziata su `index.html`.

## Decisioni confermate

- **Niente riordino "in alto/in basso" dei pulsanti**: La Traccia del Tempo
  non deve finire né prima né ultima nell'ordine dei pulsanti. La gerarchia
  visiva va giocata su altro (vedi sotto), non sulla posizione in classifica.
- **Nuova struttura visiva della home**: sostituire l'attuale menu piatto a
  6 pulsanti con un'immagine di una libreria vecchia, a scaffali. Su ogni
  scaffale, un'immagine che richiama la sezione corrispondente; sotto ogni
  immagine, un pulsante simile nello stile a quelli attuali, ben posizionato.
  Deve avere impatto visivo, non essere solo decorativo.
- **Desktop**: pagina unica, tutte le sezioni visibili insieme in una sola
  schermata (idealmente above the fold, senza scroll).
- **Mobile**: scroll orizzontale a 3 facciate. La facciata centrale ospita
  2, massimo 3 pulsanti. La Traccia del Tempo, insieme alla futura sezione
  Macroverso, probabilmente andrà nella facciata/schermata principale
  (quando Macroverso esisterà davvero).
- **Favicon**: problema noto (non esiste su nessuna pagina del sito), ma
  resta consapevolmente rimandato. Non è nello scope di questa proposta.
- **Link precedente/successivo tra voci** (proposto dal Project Manager
  come punto 2 dell'analisi sito): scartato. Le pagine statiche trovate da
  Google devono restare un imbuto verso il sito vero (l'esperienza
  interattiva), non un percorso alternativo per consultare tutta la Traccia
  del Tempo restando fuori dall'hub principale.
- **Pagine EN generate per le 483 voci** (punto 1 dell'analisi sito):
  cancellato, non verrà seguito.

## Punti sospesi, da decidere quando si riprende il lavoro

- **Macroverso nella libreria**: la sezione non esiste ancora come live.
  Deciso di non includerla per ora nel disegno della libreria (niente
  scaffale placeholder/coming soon); entrerà quando la sezione sarà pronta
  davvero.
- **Distribuzione delle 6 sezioni esistenti sulle 3 facciate mobile**
  (Storie Senza Cornice, Il Filo Nascosto, La Traccia del Tempo, Diari di
  Gioco, Il Muro dei Desideri, Il Banco delle Commissioni): non ancora
  decisa, rimandata.

## Proposta di concept (avanzata da Claude, non ancora validata dall'utente)

Il criterio guida indicato dall'utente: non è solo un discorso di design o
struttura, ma di come rendere il sito il più appetibile possibile per uno o
più visitatori.

1. **Gerarchia per dimensione, non per posizione**: dare più peso visivo
   (immagine più grande) alle sezioni che si vogliono spingere di più
   (es. La Traccia del Tempo, Storie Senza Cornice), senza spostarle in
   cima/fondo nell'ordine.
2. **Ogni scaffale deve raccontare, non solo etichettare**: illustrazioni
   che comunicano il contenuto reale della sezione a colpo d'occhio (es.
   più universi che si intrecciano per la Traccia del Tempo - eventualmente
   allineate alle palette già in uso, coordinandosi con l'agente
   traccia-artista), non icone generiche.
3. **Un segnale di vita, non un'istantanea statica**: un piccolo elemento
   dinamico in home (es. "ultima voce aggiunta", citazione a rotazione presa
   da un contenuto reale via i dati esistenti) per comunicare che il
   progetto è seguito attivamente.
4. **Micro-interazione leggera all'hover**: uno scaffale che si illumina o
   un'immagine che si anima appena al passaggio del mouse, per invogliare
   l'esplorazione. Da tenere leggero per non appesantire il caricamento,
   specie su mobile.
5. **Vincolo above the fold su desktop**: le immagini devono essere
   abbastanza piccole da stare tutte in una schermata, ma abbastanza
   leggibili da comunicare cosa rappresentano.

## Altri interventi individuati (revisione Ace Combat / Alone in the Dark)

Emersi dalla revisione con verifica visiva reale (screenshot Playwright,
non solo lettura del codice) fatta da Analista, Project Manager e Web
Designer dopo la riscrittura dei tre agent. Riguardano nello specifico le
pagine voce statiche - quelle raggiunte da una ricerca Google, fuori
dall'esperienza interattiva - quindi il punto di contatto più probabile
per chi non conosce già il sito.

- **Avviso spoiler assente sulle pagine indicizzate**: l'avviso spoiler
  esiste solo nella schermata di benvenuto dell'hub interattivo
  (`la_traccia_del_tempo.html`). Le pagine voce statiche (es. la sinossi
  di Ace Combat 5, con trama e finale) non hanno alcun avviso, pur avendo
  tutto l'apparato SEO pensato per essere trovate da Google. Chi arriva da
  una ricerca su una singola voce senza aver finito il gioco/letto l'opera
  riceve lo spoiler senza preavviso.
- **Titoli annunciati-ma-non-usciti collegati a pagine inesistenti (404
  reale)**: verificato in prima persona dal Project Manager, il nodo
  "Ace Combat 8" nell'hub interattivo porta a un href reale
  (`voci/la-traccia-del-tempo/ace-combat/ace-8.html`) che restituisce un
  404 puro, senza stile né link di ritorno. Il gioco esce il 2 ottobre
  2026: il link è già rotto in produzione oggi, non è un'ipotesi. Da
  decidere se creare una pagina segnaposto coerente con lo stile del sito
  per i titoli annunciati-ma-non-usciti, invece di lasciare online un link
  rotto.
- **Revisione delle sinossi più lunghe (muro di testo)**: segnalato dal
  Web Designer su entrambe le saghe. Alcune sinossi molto lunghe (es.
  Ikaros in the Sky su Ace Combat, Alone in the Dark 3 e il capitolo
  originale su Alone in the Dark) sono un unico blocco di 14-15 righe
  senza pause, mentre altre di lunghezza comparabile (es. Ace Combat 3:
  Electrosphere) sono correttamente spezzate in più paragrafi con ritmo di
  lettura molto migliore. Da rivedere: segmentare in paragrafi tematici le
  sinossi lunghe che oggi restano un blocco unico.

## Prossimo passo quando si riprende

Prima di scrivere codice su `index.html`, produrre un mockup visivo del
concept (libreria, scaffali, gerarchia per dimensione, posizionamento
pulsanti) per validarlo con l'utente. Solo dopo approvazione del concept
visivo, passare la direzione tecnica al site-web-designer per
l'implementazione reale in HTML/CSS.

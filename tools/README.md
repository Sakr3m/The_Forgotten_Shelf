# Pagine indicizzabili per singola voce — come funziona

Questo sistema risolve un problema specifico: prima d'ora, nessuna
voce di contenuto (un racconto, un capitolo, una teoria, una
recensione, un titolo di una saga sulla Timeline) aveva un indirizzo
web proprio. Tutto viveva solo nello stato JavaScript delle pagine
interattive — Google non poteva far comparire "la recensione di Doom"
come risultato di una ricerca mirata, perché un indirizzo per quella
pagina non esisteva.

Ora esiste: ogni voce con del testo vero ha una sua pagina statica
dentro `/voci/`, generata automaticamente.

## La regola più importante

**Non editare mai a mano un file dentro `/voci/`.**

Ogni file li' dentro e' generato da uno script a partire dai dati
veri del sito (`data.js`, `data-racconti.js`, `data-storie-teorie.js`,
`diari_di_gioco.html`). Qualunque modifica manuale a un file generato
sparisce al prossimo rilancio dello script — che succede *da solo* ad
ogni push, tramite GitHub Actions (vedi sotto).

## Come si cambia il contenuto di una voce

Esattamente come si e' sempre fatto: si modifica il file dati di
origine (es. si corregge un refuso nella sinossi di un gioco dentro
`data.js`), si fa commit e push. Il resto è automatico: GitHub
rigenera da sola la pagina statica corrispondente, aggiorna la
sitemap, e fa un commit proprio con il risultato.

Non serve mai lanciare niente a mano, a meno che non si stia
lavorando in locale e si voglia vedere subito il risultato — in quel
caso: `node tools/genera-voci.js` dalla cartella principale del repo.
Nessuna installazione necessaria, usa solo funzionalità già incluse
in Node.

## Come si cambia l'ASPETTO di tutte le pagine generate

Si modifica un solo file, `tools/template-voce.html`, e si rilancia
lo script (a mano o via push, stesso discorso di sopra). Tutte le
pagine si rigenerano seguendo il nuovo template — non serve mai
toccare le singole pagine generate una per una.

## Dove vive ogni cosa

```
tools/
  genera-voci.js       <- lo script che fa tutto il lavoro
  template-voce.html   <- l'aspetto di ogni pagina generata (un solo file per tutte)
  README.md            <- questo file

voci/                  <- SOLO output generato, mai toccare a mano
  storie-senza-cornice/{id}.html
  il-filo-nascosto/{id}.html
  diari-di-gioco/{id}.html
  la-traccia-del-tempo/{saga}/{id}.html

.github/workflows/genera-voci.yml   <- il pezzo che lo fa scattare da solo ad ogni push
```

## Perché la Timeline è annidata per saga e le altre no

Le pagine di Storie Senza Cornice, Il Filo Nascosto e Diari di Gioco
vivono in un unico livello (`/voci/storie-senza-cornice/cinere.html`,
per dire). La Timeline invece è annidata per saga
(`/voci/la-traccia-del-tempo/resident-evil/revelations.html`) perché,
verificato prima di scrivere lo script, esistono id identici in saghe
diverse — per esempio "revelations" esiste sia in Assassin's Creed
che in Resident Evil. Senza l'annidamento, la generazione della
seconda avrebbe sovrascritto la prima.

## Se un giorno serve aggiungere una quinta sezione

Lo script è organizzato in una funzione per sezione
(`generaStorieSenzaCornice`, `generaFiloNascosto`,
`generaDiariDiGioco`, `generaTimeline`, tutte dentro
`genera-voci.js`). Per una sezione nuova, se i dati vivono in un
oggetto JS con la stessa forma delle altre (id, title, body in
italiano/inglese), si può copiare una delle funzioni esistenti come
modello e adattarla. Se il contenuto vive già come HTML scritto a
mano dentro una pagina (come succede per Diari di Gioco), si segue
invece il modello di `generaDiariDiGioco`, che estrae il contenuto
dall'HTML esistente invece che da un oggetto dati.

## Nota tecnica su come vengono letti i file dati

I file dati del sito (`data.js`, `data-racconti.js`, ecc.) sono
pensati per essere caricati nel browser tramite tag `<script>`, non
per essere importati in Node con `require()` — e uno di loro
(`data-storie-teorie.js`) dipende addirittura da variabili definite
in un altro file (`data-shared-tracks.js`), esattamente come succede
nel browser quando più `<script>` si caricano in sequenza e
condividono lo stesso ambiente globale.

Per leggerli senza doverli riscrivere o duplicare, lo script usa il
modulo `vm` di Node per eseguirli tutti insieme in un unico ambiente
condiviso — la stessa identica cosa che fa il browser, replicata in
Node. Questo significa che i file dati originali **non sono mai
stati modificati** per rendere possibile questo sistema: restano
identici a come erano, utilizzabili sia dal browser che dallo script.

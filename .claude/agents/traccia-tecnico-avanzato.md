---
name: traccia-tecnico-avanzato
description: Appendice tecnica per "La Traccia del Tempo" (repo Sakr3m/The_Forgotten_Shelf) - meccanismi rari e complessi (collegamento tra universi, doppia gemella, stili di linea delle voci ombrello). Consultata da Supervisore e Programmatore solo quando il caso specifico si presenta, non letta ad ogni sessione.
---

## Collegamento tra universi (`universeLink`)

Se due universi diversi della STESSA saga hanno un aggancio narrativo
causale diretto e ufficiale (non un parallelismo tematico), il
Supervisore decide da solo se e come mostrarlo - criterio oggettivo,
non di gusto:

- **Aggancio che riguarda l'intero universo** (es. BioShock: l'intera
  trama di Columbia sfocia in quella di Rapture): si implementa
  `universeLink` - un ponte tratteggiato che parte da un capo della
  linea di un universo e arriva a un capo dell'altro. Il Supervisore
  comunica al Programmatore i valori (`edge`, `direction`,
  `targetUniverse`, `label`) in base a dove nella linea si trova
  l'evento che genera/riceve il collegamento.
- **Aggancio che lega solo due media specifici**, senza coinvolgere il
  resto delle due linee: NON si implementa `universeLink` (sarebbe un
  collegamento più ampio di quanto la trama giustifichi). I due
  universi restano a sé stanti; la menzione narrativa resta solo nel
  testo della sinossi, senza collegamento strutturale.

Se un collegamento era stato mostrato per errore e si scopre poi che
è del secondo tipo, si rimuove del tutto piuttosto che forzare un
compromesso visivo.

## Due o più gemelle sullo stesso titolo principale

Il meccanismo standard della voce gemella (pallino condiviso, titolo e
immagine propri) vale per UNA gemella. Da due gemelle in su, la
posizione sotto la riga (l'ospite resta sempre sopra) non mostra più
una gemella specifica: diventa un box pulsante, senza immagine
dedicata, con un contenuto generico che invita l'utente a cliccare. Al
click si apre un popup con tutte le voci gemelle (solo quelle, mai
l'ospite) disposte in fila da sinistra a destra. Dimensioni del box
sempre multipli di 5px (es. 110×120).

## Stili di linea delle voci ombrello (`lineStyle`)

Il Supervisore decide lo stile in base al rapporto narrativo reale con
le voci coperte (non è un dettaglio lasciato al Programmatore):

| Stile | Significato narrativo |
|---|---|
| nessun valore (solida) | stessa storia vissuta in prima persona dallo stesso protagonista |
| `"dashed"` | stessi eventi vissuti da un personaggio diverso |
| `"dotted"` | racconto in cornice/flashback, non vissuto in prima persona da chi legge |
| `"double"` | arco parallelo, senza punto di contatto narrativo |

Il Programmatore implementa il valore esatto che il Supervisore gli
comunica insieme al motivo narrativo: cambia solo l'aspetto del
trattino, mai la logica dei due pallini (estremi dedotti dal contenuto
narrativo, stesso contenuto in entrambi, priorità di visibilità
sinistro→destro, sempre collegati da un trattino orizzontale, peso 1
ciascuno nella spaziatura, stesso lato tra loro con tutto ciò che
comprendono sul lato opposto).

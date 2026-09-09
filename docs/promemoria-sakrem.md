# Promemoria Sakrem

File di sola consultazione per Sakrem, mai letto dal sito. Non va confuso
con i pacchetti tecnici per il Programmatore: niente qui viene mai
applicato al sito finché non passa prima da una decisione esplicita di
Sakrem e poi dal normale processo (report + pacchetto + Programmatore).

Il file tiene insieme due tipi di contenuto, per saga:

1. **Proposte in sospeso** - le proposte della catena (Artista, Musicista,
   o chiunque altro) che Sakrem ha scelto di **non decidere subito**, per
   riprenderle con calma in una sessione futura, separata dal normale
   lavoro della catena su quella saga. Ogni voce resta qui finché non
   viene decisa (confermata o scartata) e poi **rimossa** in un cleanup
   successivo - questa parte del file non tiene uno storico delle
   decisioni già prese, solo quelle ancora aperte.
2. **Storico permanente musica/media aggiunti** - due elenchi per saga
   che, a differenza delle proposte in sospeso, **non vengono mai
   rimossi**, qualunque sia l'esito:
   - **Musica**: ogni cambiamento di tracce mai richiesto dal Musicista
     per quella saga (sostituzione o riordino), con lo stato reale
     (confermato / rifiutato / in attesa di decisione), aggiornato
     quando cambia ma mai cancellato dalla lista.
   - **Media aggiunti**: solo i nuovi media veri e propri entrati in
     quella saga durante il lavoro della catena - nuova voce a sé, nuova
     voce gemella/ombrello o nuovo universo - con la sessione/data in cui
     sono stati aggiunti. Non contiene mai note aggiunte a voci già
     pubblicate, correzioni di sinossi esistenti o riclassificazioni:
     quel materiale resta solo nel report una tantum, mai in questo
     storico permanente. Se una saga non ha nessuna voce per una di
     queste due liste, la sotto-sezione relativa viene omessa per quella
     saga (non si scrive "nessuno").

## Come aggiungere una voce

Una sezione `##` per ogni saga toccata. Dentro, fino a tre sotto-sezioni
`###`, solo quelle effettivamente popolate:

### In sospeso

Una sotto-sezione `####` per ogni proposta ancora da decidere, con questi
campi fissi:

- **Proposta**: cosa cambierebbe, in modo puntuale (valori prima/dopo).
- **Origine**: quale agente l'ha proposta (Artista, Musicista, ecc.).
- **Motivazione**: perché, in breve.
- **Data**: quando è stata segnalata la prima volta.
- **Stato**: `in attesa di decisione di Sakrem, non applicato` finché
  resta qui - è l'unico stato valido per una voce in questa
  sotto-sezione. Decisa (confermata o scartata), la voce va rimossa da
  qui in un cleanup successivo.

### Musica

Storico permanente, mai rimosso. Una sotto-sezione `####` per ogni
cambiamento di tracce mai proposto dal Musicista per questa saga, con
gli stessi campi fissi di sopra (Proposta/Origine/Motivazione/Data) più:

- **Stato**: il valore reale e aggiornato - `confermato e applicato`,
  `rifiutato, non applicato` oppure `in attesa di decisione di Sakrem,
  non applicato`. Quando lo stato cambia (es. da "in attesa" a
  "confermato"), si aggiorna il campo sul posto: la voce non si sposta
  mai nella sezione "In sospeso" né viene mai cancellata.

### Media aggiunti

Storico permanente, mai rimosso. Un elenco puntato, un punto per ogni
nuovo media vero e proprio entrato in pagina durante il lavoro della
catena (voce a sé, voce gemella/ombrello o nuovo universo - mai una nota
aggiunta a una voce già pubblicata, una correzione di sinossi esistente
o una riclassificazione), con questo formato:

- `id` (se applicabile) - Titolo - tipo (voce a sé / voce gemella /
  nuovo universo) - sessione/data di aggiunta.

---

## Ace Combat

### In sospeso

#### Cambio playlist - "Linkage" → "First Flight"

- **Proposta**: sostituire la traccia "Linkage" (dal gioco *Ace Combat 3:
  Electrosphere*) con "First Flight" (dal gioco *Ace Combat 5: The Unsung
  War*) nella playlist della saga.
- **Origine**: Musicista.
- **Motivazione**: fama pubblica nettamente superiore di "First Flight" -
  eseguita alle Olimpiadi di Tokyo 2020 - rispetto a "Linkage", che resta
  di nicchia hardcore. Verificato che nessuna traccia dello stesso gioco
  resterebbe adiacente in ordine dopo la sostituzione.
- **Data**: 2026-09-08.
- **Stato**: in attesa di decisione di Sakrem, non applicato.

### Musica

#### Cambio playlist - "Linkage" → "First Flight"

- **Proposta**: sostituire "Linkage" (*Ace Combat 3: Electrosphere*) con
  "First Flight" (*Ace Combat 5: The Unsung War*).
- **Origine**: Musicista.
- **Motivazione**: fama pubblica nettamente superiore (eseguita alle
  Olimpiadi di Tokyo 2020) rispetto a "Linkage", di nicchia hardcore.
- **Data**: 2026-09-08.
- **Stato**: in attesa di decisione di Sakrem, non applicato (stessa
  proposta ancora aperta in "In sospeso" sopra).

## Alone in the Dark

### In sospeso

#### Cambio playlist - "The Light Carrier Test" → "Who Am I?"

- **Proposta**: sostituire la traccia "The Light Carrier Test" con "Who Am
  I?" nella playlist della saga (entrambe da *Alone in the Dark*, 2008).
- **Origine**: Musicista.
- **Motivazione**: fonte critica esplicita (GamesRadar, rubrica "Game Music
  of the Day") che indica "Who Am I?" come il brano più prominente della
  OST di *Alone in the Dark* (2008), contro una posizione defilata (17ª su
  21 tracce) per l'attuale "The Light Carrier Test".
- **Data**: 2026-09-08.
- **Stato**: in attesa di decisione di Sakrem, non applicato. Bloccata
  anche tecnicamente a prescindere dal consenso: il file audio non è
  ancora stato caricato su R2.

### Musica

#### Cambio playlist - "The Light Carrier Test" → "Who Am I?"

- **Proposta**: sostituire "The Light Carrier Test" con "Who Am I?"
  (entrambe da *Alone in the Dark*, 2008).
- **Origine**: Musicista.
- **Motivazione**: fonte critica (GamesRadar) indica "Who Am I?" come
  brano più rilevante della OST 2008, contro la posizione 17/21 della
  traccia attuale.
- **Data**: 2026-09-08.
- **Stato**: in attesa di decisione di Sakrem, non applicato (stessa
  proposta ancora aperta in "In sospeso" sopra; bloccata anche
  tecnicamente in attesa del file audio su R2).

## Assassin's Creed

### In sospeso - immagini mancanti

Sezione diversa dalle altre: non è una proposta da confermare o
scartare, ma un semplice elenco di lavoro. Le 11 voci sotto sono ancora
prive dell'immagine/copertina corrispondente caricata su R2 da Sakrem (le
voci elencano già il campo `image` in `data.js` con l'URL atteso, in stile
segnaposto coerente con la convenzione di naming del bucket, ma il file
fisico non risulta ancora caricato). Stesso schema già discusso per Ace
Combat: quando Sakrem carica i file su R2, passa solo il nome file e la
voce esce da questo elenco.

Copertine mancanti per le 9 nuove voci pubblicate in questo ciclo:

1. `nexus-vr` - Assassin's Creed Nexus VR
2. `jack-the-ripper` - Assassin's Creed Syndicate: Jack the Ripper
3. `magus-conspiracy` - Assassin's Creed: La Cospirazione del Magus
4. `resurrection-plot` - Assassin's Creed: The Resurrection Plot
5. `last-descendants` - Assassin's Creed: Last Descendants
6. `geirmunds-saga` - Assassin's Creed Valhalla - La Saga di Geirmund
7. `song-of-glory` - Assassin's Creed Valhalla: Il Canto della Gloria
8. `conspiracies` - Assassin's Creed: Conspiracies
9. `bloodstone` - Assassin's Creed: Bloodstone

Copertina propria mancante per la voce gemella (le gemelle hanno sempre
immagine propria, distinta dall'ospite):

10. `blade-of-shao-jun` - Assassin's Creed: Blade of Shao Jun (gemella di
    `chronicles-china`)

Filigrana (watermark) mancante per il nuovo universo:

11. `novecento` - universo "Novecento" (unico, tra gli universi della
    saga, ancora privo del campo `watermark`)

- **Stato**: in attesa che Sakrem carichi i file su R2 e ne passi i nomi.

### Musica

#### Riordino playlist - "City of Rome" sopra "Bloodlines"

- **Proposta**: nessun cambio di traccia, solo riordino - "City of Rome"
  (*Assassin's Creed: Brotherhood*) spostata sopra "Bloodlines"
  (*Assassin's Creed: Syndicate*) nell'array delle tracce.
- **Origine**: Musicista.
- **Motivazione**: puro riordino della playlist esistente, nessuna nuova
  selezione musicale.
- **Data**: 2026-09-08.
- **Stato**: confermato e applicato. Trattandosi di un puro riordino (non
  di una nuova selezione musicale), la catena ha stabilito in questa
  stessa sessione che non richiede consenso esplicito di Sakrem -
  applicato direttamente nel pacchetto tecnico.

### Media aggiunti

- `nexus-vr` - Assassin's Creed Nexus VR - voce a sé (VIDEOGIOCO),
  ultima voce di Era Moderna - sessione 2026-09-08.
- `jack-the-ripper` - Assassin's Creed Syndicate: Jack the Ripper - voce
  a sé (VIDEOGIOCO/DLC), Epoca degli Imperi - sessione 2026-09-08.
- `magus-conspiracy` - Assassin's Creed: La Cospirazione del Magus - voce
  a sé (ROMANZO), Epoca degli Imperi - sessione 2026-09-08.
- `resurrection-plot` - Assassin's Creed: The Resurrection Plot - voce a
  sé (ROMANZO), Epoca degli Imperi - sessione 2026-09-08.
- `last-descendants` - Assassin's Creed: Last Descendants - voce unica
  (trilogia di romanzi), Era Moderna - sessione 2026-09-08.
- `geirmunds-saga` - Assassin's Creed Valhalla: La Saga di Geirmund -
  voce ombrello (`lineStyle: dashed`), Alto Medioevo - sessione
  2026-09-08.
- `song-of-glory` - Assassin's Creed Valhalla: Il Canto della Gloria -
  voce a sé (FUMETTO), Alto Medioevo - sessione 2026-09-08.
- `conspiracies` - Assassin's Creed: Conspiracies - voce a sé (FUMETTO),
  prima voce del nuovo universo Novecento - sessione 2026-09-08.
- `bloodstone` - Assassin's Creed: Bloodstone - voce a sé (FUMETTO),
  ultima voce del nuovo universo Novecento - sessione 2026-09-08.
- `blade-of-shao-jun` - Assassin's Creed: Blade of Shao Jun - voce
  gemella di `chronicles-china` (corretta da nota a voce gemella in
  revisione) - sessione 2026-09-08.
- Nuovo universo **Novecento** (Conspiracies → Bloodstone, span 1943 -
  1964) - sessione 2026-09-08.

## Baldur's Gate

### Musica

#### Tracklist completa saga (prima volta, saga interamente nuova)

- **Proposta**: creare il campo `tracks` della saga (nuova, quindi
  inesistente fino ad ora) e popolarlo con una playlist di 7 brani:
  Down by the River (*Baldur's Gate 3*), Baldur's Gate (Main Theme)
  (*Baldur's Gate*), Baldur's Gate II: Shadows of Amn (Main Theme)
  (*Baldur's Gate II: Shadows of Amn*), I Want to Live (*Baldur's Gate
  3*), Raphael's Final Act (*Baldur's Gate 3*), Main Titles (Dark
  Alliance Theme) (*Baldur's Gate: Dark Alliance*), Main Theme
  (*Baldur's Gate: Dark Alliance II*).
- **Origine**: Musicista.
- **Motivazione**: prima playlist della saga, selezione dei temi più
  iconici/riconoscibili a copertura sia dei CRPG classici sia di
  Baldur's Gate 3 sia degli spin-off Dark Alliance.
- **Data**: 2026-09-09 (sessione notturna, 9/12).
- **Stato**: in attesa - bloccata per asset mancante, tutti e 7 i file
  audio sono nuovi per il sito e da caricare su R2 (proposta già
  accettata nel merito, non in attesa di decisione di Sakrem: manca
  solo il file fisico). Il campo viene comunque creato dal
  Programmatore come `tracks: []`, non popolato, in attesa dei file.

### Media aggiunti

Saga interamente nuova: 2 nuovi universi e 17 nuove voci (più 3
gemelle nidificate nelle rispettive voci principali), tutte inserite
nella stessa sessione notturna, 2026-09-09.

- Nuovo universo **Costa della Spada** (`bg-promo-comic` → `bg3`,
  span Prima di Baldur's Gate – 1492 DR, 15 voci) - sessione notturna,
  2026-09-09.
- Nuovo universo **Dark Alliance** (`bg-dark-alliance` →
  `bg-dark-alliance-2`, span 1369 DR – 1372 DR, 2 voci) - sessione
  notturna, 2026-09-09.
- `bg-promo-comic` - Fumetto promozionale di Baldur's Gate (FUMETTO,
  1998) - voce a sé, prima voce della saga - sessione notturna,
  2026-09-09.
- `bg1` - Baldur's Gate (VIDEOGIOCO, 1998, include Tales of the Sword
  Coast) - voce a sé - sessione notturna, 2026-09-09.
- `bg1-novel` - Baldur's Gate (novelization, Philip Athans, 1999)
  (ROMANZO) - voce gemella di `bg1` - sessione notturna, 2026-09-09.
- `siege-of-dragonspear` - Baldur's Gate: Siege of Dragonspear
  (VIDEOGIOCO, 2016) - voce a sé - sessione notturna, 2026-09-09.
- `bg2` - Baldur's Gate II: Shadows of Amn (VIDEOGIOCO, 2000) - voce
  a sé - sessione notturna, 2026-09-09.
- `bg2-novel` - Baldur's Gate II: Shadows of Amn (novelization,
  Philip Athans, 2000) (ROMANZO) - voce gemella di `bg2` - sessione
  notturna, 2026-09-09.
- `throne-of-bhaal` - Baldur's Gate II: Throne of Bhaal (VIDEOGIOCO,
  2001) - voce a sé - sessione notturna, 2026-09-09.
- `throne-of-bhaal-novel` - Baldur's Gate II: Throne of Bhaal
  (novelization, Drew Karpyshyn, 2001) (ROMANZO) - voce gemella di
  `throne-of-bhaal` - sessione notturna, 2026-09-09.
- `murder-in-baldurs-gate` - Murder in Baldur's Gate (MODULO D&D,
  2013) - voce a sé, primo uso del nuovo tipo/tag "MODULO D&D" sul
  sito - sessione notturna, 2026-09-09.
- `legends-of-baldurs-gate` - Legends of Baldur's Gate (FUMETTO,
  2014-2015) - voce a sé - sessione notturna, 2026-09-09.
- `shadows-of-the-vampire` - Baldur's Gate: Shadows of the Vampire
  (FUMETTO, 2016) - voce a sé - sessione notturna, 2026-09-09.
- `frost-giants-fury` - Baldur's Gate: The Frost Giant's Fury
  (FUMETTO, 2017) - voce a sé - sessione notturna, 2026-09-09.
- `evil-at-baldurs-gate` - Evil at Baldur's Gate (FUMETTO, 2018) -
  voce a sé - sessione notturna, 2026-09-09.
- `infernal-tides` - Baldur's Gate: Infernal Tides (FUMETTO,
  2019-2020) - voce a sé - sessione notturna, 2026-09-09.
- `descent-into-avernus` - Baldur's Gate: Discesa nell'Avernus
  (MODULO D&D, 2019) - voce a sé - sessione notturna, 2026-09-09.
- `mindbreaker` - Baldur's Gate: Mindbreaker (FUMETTO, 2021-2022) -
  voce a sé - sessione notturna, 2026-09-09.
- `astarion-novel` - Astarion (ROMANZO, in uscita 29 settembre 2026,
  imagePending) - voce a sé, senza sinossi per policy titoli non
  ancora usciti - sessione notturna, 2026-09-09.
- `bg3` - Baldur's Gate 3 (VIDEOGIOCO, 2023) - voce a sé, ultima voce
  di Costa della Spada - sessione notturna, 2026-09-09.
- `bg-dark-alliance` - Baldur's Gate: Dark Alliance (VIDEOGIOCO,
  2001) - voce a sé, prima voce del nuovo universo Dark Alliance -
  sessione notturna, 2026-09-09.
- `bg-dark-alliance-2` - Baldur's Gate: Dark Alliance II (VIDEOGIOCO,
  2004) - voce a sé, ultima voce del nuovo universo Dark Alliance -
  sessione notturna, 2026-09-09.

## Battlefield

### Musica

#### Tracklist completa saga (prima volta, saga interamente nuova)

- **Proposta**: creare il campo `tracks` della saga (nuova, quindi
  inesistente fino ad ora) e popolarlo con una playlist di 7 brani:
  Battlefield 3 Main Theme (*Battlefield 3*), Battlefield 4 "Warsaw"
  Theme (Main Theme) (*Battlefield 4*), The Storm (Main Theme)
  (*Battlefield: Bad Company 2*), Battlefield 6 Main Theme
  (*Battlefield 6*), Battlefield 2042 (Main Theme) (*Battlefield
  2042*), Fortunate Son (Creedence Clearwater Revival) (*Battlefield:
  Bad Company 2*, radio in-game, espansione Vietnam), A Prelude to a
  Lost Cause (*Battlefield: Bad Company*).
- **Origine**: Musicista.
- **Motivazione**: prima playlist della saga, selezione dei temi
  principali più iconici/riconoscibili a copertura di più capitoli,
  incluso un brano radiofonico in-game (Fortunate Son) tra i momenti
  più citati della saga.
- **Data**: 2026-09-09 (sessione notturna, 10/12).
- **Stato**: in attesa - bloccata per asset mancante, tutte e 7 le
  tracce sono nuove per il sito e da caricare su R2 (proposta già
  accettata nel merito, non in attesa di decisione di Sakrem: manca
  solo il file fisico). Il campo viene comunque creato dal
  Programmatore come `tracks: []`, non popolato, in attesa dei file.

### Media aggiunti

Saga interamente nuova: 4 nuovi universi e 8 nuove voci (nessuna
gemella), tutte inserite nella stessa sessione notturna, 2026-09-09.

- Nuovo universo **Bad Company** (`bfbc1` → `bfbc2`, span 1944
  (prologo) – Guerra USA-Russia, 2 voci) - sessione notturna,
  2026-09-09.
- Nuovo universo **La Guerra del 2014** (`bf3` → `bf4-countdown-to-war`
  → `bf4`, span 2014 – 2020, 3 voci) - sessione notturna, 2026-09-09.
- Nuovo universo **La Guerra del 2042** (`exodus` → `bf2042`, span
  2042, 2 voci) - sessione notturna, 2026-09-09.
- Nuovo universo **Battlefield 6** (`bf6`, span 2027-2028, 1 voce) -
  sessione notturna, 2026-09-09.
- `bfbc1` - Battlefield: Bad Company (VIDEOGIOCO, 2008) - voce a sé,
  prima voce del nuovo universo Bad Company - sessione notturna,
  2026-09-09.
- `bfbc2` - Battlefield: Bad Company 2 (VIDEOGIOCO, 2010) - voce a sé,
  ultima voce del nuovo universo Bad Company - sessione notturna,
  2026-09-09.
- `bf3` - Battlefield 3 (VIDEOGIOCO, 2011) - voce a sé, prima voce del
  nuovo universo La Guerra del 2014 - sessione notturna, 2026-09-09.
- `bf4-countdown-to-war` - Battlefield 4: Countdown to War (ROMANZO,
  2013) - voce a sé - sessione notturna, 2026-09-09.
- `bf4` - Battlefield 4 (VIDEOGIOCO, 2013) - voce a sé, ultima voce del
  nuovo universo La Guerra del 2014 - sessione notturna, 2026-09-09.
- `exodus` - Exodus (CORTOMETRAGGIO, 2021) - voce a sé, prima voce del
  nuovo universo La Guerra del 2042 - sessione notturna, 2026-09-09.
- `bf2042` - Battlefield 2042 (VIDEOGIOCO, 2021) - voce a sé, ultima
  voce del nuovo universo La Guerra del 2042 - sessione notturna,
  2026-09-09.
- `bf6` - Battlefield 6 (VIDEOGIOCO, 2025) - voce a sé, unica voce del
  nuovo universo Battlefield 6 - sessione notturna, 2026-09-09.

## BioShock

### In sospeso

#### Cambio playlist - "Empty Houses" → "Beyond the Sea"

- **Proposta**: sostituire la traccia "Empty Houses" (*BioShock*) con
  "Beyond the Sea" (*BioShock*) nella playlist della saga.
- **Origine**: Musicista.
- **Motivazione**: "Beyond the Sea" è la traccia più iconica in assoluto
  della saga - usata nel trailer di annuncio del 2006 (diventato virale,
  tra i migliori trailer di sempre), nell'apertura e nel finale del gioco,
  ripresa anche in *Burial at Sea Episode 1* (*BioShock Infinite*). Nota
  aggiuntiva: se questa sostituzione viene rifiutata, *BioShock 2*
  resterebbe senza alcuna traccia genuinamente propria nella playlist,
  perché è emerso che "Empty Houses" (finora unico slot nominale per quel
  gioco) appartiene in realtà alla colonna sonora originale del primo
  *BioShock*, non di *BioShock 2* - correzione già applicata comunque
  nell'attribuzione tecnica del brano (game: "BioShock 2" → "BioShock"),
  indipendentemente da questa proposta di sostituzione.
- **Data**: 2026-09-08.
- **Stato**: in attesa di decisione di Sakrem, non applicato.

#### Cambio playlist - "Lighter Than Air" → "God Only Knows"

- **Proposta**: sostituire la traccia "Lighter Than Air" (*BioShock
  Infinite*) con "God Only Knows" (*BioShock Infinite*) nella playlist
  della saga.
- **Origine**: Musicista.
- **Motivazione**: "God Only Knows" è una cover eseguita in-game da un
  barbershop quartet, momento fortemente virale e ampiamente citato come
  uno dei più memorabili dell'intera saga, con riconoscibilità pubblica
  nettamente superiore.
- **Data**: 2026-09-08.
- **Stato**: in attesa di decisione di Sakrem, non applicato.

### Musica

#### Cambio playlist - "Empty Houses" → "Beyond the Sea"

- **Proposta**: sostituire "Empty Houses" (*BioShock*) con "Beyond the
  Sea" (*BioShock*).
- **Origine**: Musicista.
- **Motivazione**: traccia più iconica della saga (trailer 2006 virale,
  apertura/finale del gioco, ripresa in Burial at Sea Episode 1). Se
  rifiutata, BioShock 2 resterebbe senza traccia genuinamente propria in
  playlist (Empty Houses proviene in realtà dal primo BioShock).
- **Data**: 2026-09-08.
- **Stato**: in attesa di decisione di Sakrem, non applicato (stessa
  proposta ancora aperta in "In sospeso" sopra).

#### Cambio playlist - "Lighter Than Air" → "God Only Knows"

- **Proposta**: sostituire "Lighter Than Air" (*BioShock Infinite*) con
  "God Only Knows" (*BioShock Infinite*).
- **Origine**: Musicista.
- **Motivazione**: cover in-game del barbershop quartet, momento molto
  citato/virale, riconoscibilità pubblica nettamente superiore.
- **Data**: 2026-09-08.
- **Stato**: in attesa di decisione di Sakrem, non applicato (stessa
  proposta ancora aperta in "In sospeso" sopra).

## Call of Duty

### Musica

#### Tracklist completa saga (prima volta, saga interamente nuova)

- **Proposta**: creare il campo `tracks` della saga (nuova, quindi
  inesistente fino ad ora) e popolarlo con una playlist di 7 brani:
  Main Theme (*Call of Duty: Modern Warfare 2*, 2009, Hans Zimmer),
  Main Theme (*Call of Duty 4: Modern Warfare*, 2007), American Theme
  (Main Theme) (*Call of Duty: World at War*, 2008), Theme from Call
  of Duty: Black Ops II (*Black Ops II*, 2012, Trent Reznor), 115
  (*Call of Duty: Black Ops*, 2010, Zombies "Kino der Toten"), Modern
  Warfare Main Theme (*Call of Duty: Modern Warfare*, 2019, Sarah
  Schachner), A Brotherhood of Heroes (*Call of Duty: WWII*, 2017,
  Wilbert Roget II).
- **Origine**: Musicista.
- **Motivazione**: prima playlist della saga, selezione dei temi
  musicali più iconici/riconoscibili a copertura di più capitoli ed
  epoche della saga.
- **Data**: 2026-09-09 (sessione notturna, 8/12).
- **Stato**: in attesa - bloccata per asset mancante, tutti e 7 i file
  audio sono nuovi per il sito e da caricare su R2 (proposta già
  accettata nel merito, non in attesa di decisione di Sakrem: manca
  solo il file fisico). Il campo viene comunque creato dal
  Programmatore come `tracks: []`, non popolato, in attesa dei file.

### Media aggiunti

Saga interamente nuova: 5 nuovi universi e 23 nuove voci, tutte
inserite nella stessa sessione notturna, 2026-09-09.

- Nuovo universo **Universo Classico** (`cod1` → `cod2` → `cod3`, span
  1942 – 1944) - sessione notturna, 2026-09-09.
- Nuovo universo **L'Ombra di Makarov** (`mw-ghost` → `mw1` → `mw2` →
  `mw3`, span Prima di Modern Warfare – 2016) - sessione notturna,
  2026-09-09.
- Nuovo universo **Black Ops** (`waw` → `bo1` → `bo2` → `bo3` → `bo4`
  → `bo-cw` → `bo6` → `bo7`, span 1943 – 2035) - sessione notturna,
  2026-09-09.
- Nuovo universo **Task Force One** (`cod-wwii` → `vanguard-comic` →
  `vanguard`, span 1944 – 1945) - sessione notturna, 2026-09-09.
- Nuovo universo **Modern Warfare (2019)** (`mw2019` → `mw2022` →
  `mw2023` → `mw4` → `cod-film`, span Epoca contemporanea) - sessione
  notturna, 2026-09-09.
- `cod1` - Call of Duty (VIDEOGIOCO, 2003) - sessione notturna,
  2026-09-09.
- `cod2` - Call of Duty 2 (VIDEOGIOCO, 2005) - sessione notturna,
  2026-09-09.
- `cod3` - Call of Duty 3 (VIDEOGIOCO, 2006) - sessione notturna,
  2026-09-09.
- `mw-ghost` - Modern Warfare 2: Ghost (FUMETTO, 2009-2010) - sessione
  notturna, 2026-09-09.
- `mw1` - Call of Duty 4: Modern Warfare (VIDEOGIOCO, 2007) - sessione
  notturna, 2026-09-09.
- `mw2` - Call of Duty: Modern Warfare 2 (VIDEOGIOCO, 2009) - sessione
  notturna, 2026-09-09.
- `mw3` - Call of Duty: Modern Warfare 3 (VIDEOGIOCO, 2011) - sessione
  notturna, 2026-09-09.
- `waw` - Call of Duty: World at War (VIDEOGIOCO, 2008) - sessione
  notturna, 2026-09-09.
- `bo1` - Call of Duty: Black Ops (VIDEOGIOCO, 2010) - sessione
  notturna, 2026-09-09.
- `bo2` - Call of Duty: Black Ops II (VIDEOGIOCO, 2012) - sessione
  notturna, 2026-09-09.
- `bo3` - Call of Duty: Black Ops III (VIDEOGIOCO, 2015) - sessione
  notturna, 2026-09-09.
- `bo4` - Call of Duty: Black Ops 4 (VIDEOGIOCO, 2018) - sessione
  notturna, 2026-09-09.
- `bo-cw` - Call of Duty: Black Ops Cold War (VIDEOGIOCO, 2020) -
  sessione notturna, 2026-09-09.
- `bo6` - Call of Duty: Black Ops 6 (VIDEOGIOCO, 2024) - sessione
  notturna, 2026-09-09.
- `bo7` - Call of Duty: Black Ops 7 (VIDEOGIOCO, 2025) - sessione
  notturna, 2026-09-09.
- `cod-wwii` - Call of Duty: WWII (VIDEOGIOCO, 2017) - sessione
  notturna, 2026-09-09.
- `vanguard-comic` - Call of Duty: Vanguard (fumetto) (FUMETTO, 2021)
  - sessione notturna, 2026-09-09.
- `vanguard` - Call of Duty: Vanguard (VIDEOGIOCO, 2021) - sessione
  notturna, 2026-09-09.
- `mw2019` - Call of Duty: Modern Warfare (2019) (VIDEOGIOCO, 2019) -
  sessione notturna, 2026-09-09.
- `mw2022` - Call of Duty: Modern Warfare II (VIDEOGIOCO, 2022) -
  sessione notturna, 2026-09-09.
- `mw2023` - Call of Duty: Modern Warfare III (VIDEOGIOCO, 2023) -
  sessione notturna, 2026-09-09.
- `mw4` - Call of Duty: Modern Warfare 4 (VIDEOGIOCO, in uscita 23
  ottobre 2026, imagePending) - sessione notturna, 2026-09-09.
- `cod-film` - Call of Duty (film) (LIVE ACTION, in uscita 30 giugno
  2028, imagePending) - sessione notturna, 2026-09-09.

## Castlevania

### In sospeso

#### Cambio playlist - "The Gears Go Awry" → "Beginning"

- **Proposta**: sostituire la traccia "The Gears Go Awry" (*Castlevania:
  Portrait of Ruin*) con "Beginning" (*Castlevania: Dracula's Curse*)
  nella playlist della saga.
- **Origine**: Musicista.
- **Motivazione**: "Beginning" è il tema di Trevor Belmont, costantemente
  citato nelle classifiche di settore tra i brani più iconici della saga,
  presente nella Castlevania Sound Selection di *Super Smash Bros.
  Ultimate* (verificato in modo indipendente dal Supervisore).
- **Data**: 2026-09-08.
- **Stato**: in attesa di decisione di Sakrem, non applicato.

#### Cambio playlist - "Sorrow's Distortion" → "Divine Bloodlines"

- **Proposta**: sostituire la traccia "Sorrow's Distortion" (*Castlevania:
  Order of Ecclesia*) con "Divine Bloodlines" (*Castlevania: Rondo of
  Blood*) nella playlist della saga.
- **Origine**: Musicista.
- **Motivazione**: "Divine Bloodlines" è il tema di Richter Belmont,
  presente nella Castlevania Sound Selection di *Super Smash Bros.
  Ultimate* (verificato in modo indipendente dal Supervisore), costantemente
  citato tra i classici della saga.
- **Data**: 2026-09-08.
- **Stato**: in attesa di decisione di Sakrem, non applicato.

### Musica

#### Cambio playlist - "The Gears Go Awry" → "Beginning"

- **Proposta**: sostituire "The Gears Go Awry" (*Portrait of Ruin*) con
  "Beginning" (*Dracula's Curse*, tema di Trevor Belmont).
- **Origine**: Musicista.
- **Motivazione**: presente nella Castlevania Sound Selection di *Super
  Smash Bros. Ultimate*, fama nettamente superiore.
- **Data**: 2026-09-08.
- **Stato**: in attesa di decisione di Sakrem, non applicato (stessa
  proposta ancora aperta in "In sospeso" sopra).

#### Cambio playlist - "Sorrow's Distortion" → "Divine Bloodlines"

- **Proposta**: sostituire "Sorrow's Distortion" (*Order of Ecclesia*)
  con "Divine Bloodlines" (*Rondo of Blood*, tema di Richter Belmont).
- **Origine**: Musicista.
- **Motivazione**: presente nella Castlevania Sound Selection di *Super
  Smash Bros. Ultimate*, fama nettamente superiore.
- **Data**: 2026-09-08.
- **Stato**: in attesa di decisione di Sakrem, non applicato (stessa
  proposta ancora aperta in "In sospeso" sopra).

## Crash Bandicoot

### Musica

#### Tracklist completa saga (prima volta, saga interamente nuova)

- **Proposta**: creare il campo `tracks` della saga (nuova, quindi
  inesistente fino ad ora) e popolarlo con una playlist di 7 brani:
  Title ~ Map ~ N. Sanity Beach (Main Theme) (*Crash Bandicoot*), Cortex
  Boss Theme (*Crash Bandicoot 2: Il Ritorno di Cortex*), Boulders /
  Boulder Dash (*Crash Bandicoot*), Warp Room (*Crash Bandicoot 2: Il
  Ritorno di Cortex*), Slippery Climb / Stormy Ascent (*Crash
  Bandicoot*), Blizzard Bluff (*Crash Team Racing*), Future Frenzy,
  Gone Tomorrow (*Crash Bandicoot: Warped*).
- **Origine**: Musicista.
- **Motivazione**: prima playlist della saga, selezione dei temi più
  iconici/riconoscibili a copertura dei capitoli principali della
  Linea Principale (nessun brano dalla Linea Temporale Alternativa).
- **Data**: 2026-09-09 (sessione notturna, 11/12).
- **Stato**: in attesa - bloccata per asset mancante, tutti e 7 i file
  audio sono nuovi per il sito e da caricare su R2 (proposta già
  accettata nel merito, non in attesa di decisione di Sakrem: manca
  solo il file fisico). Il campo viene comunque creato dal
  Programmatore come `tracks: []`, non popolato, in attesa dei file.

### Media aggiunti

Saga interamente nuova: 2 nuovi universi e 23 nuove voci (22 con
sinossi + 1 senza, imagePending), tutte inserite nella stessa sessione
notturna, 2026-09-09.

- Nuovo universo **Linea Principale** (`crash-1` → `insanity-series`,
  span 1996 – 2026, 19 voci) - sessione notturna, 2026-09-09.
- Nuovo universo **Linea Temporale Alternativa** (`wrath-of-cortex` →
  `mind-over-mutant`, span 2001 – 2008, 4 voci) - sessione notturna,
  2026-09-09.
- `crash-1` - Crash Bandicoot (VIDEOGIOCO, 1996) - voce a sé, prima
  voce della saga - sessione notturna, 2026-09-09.
- `crash-1-manga` - Crash Bandicoot (manga, 1996-97) - voce a sé -
  sessione notturna, 2026-09-09.
- `crash-2` - Crash Bandicoot 2: Il Ritorno di Cortex (VIDEOGIOCO,
  1997) - voce a sé - sessione notturna, 2026-09-09.
- `crash-2-manga` - Crash Bandicoot: Dance! De Jump! Na Daibōken
  (manga, 1997-99) - voce a sé - sessione notturna, 2026-09-09.
- `warped` - Crash Bandicoot: Warped (VIDEOGIOCO, 1998) - voce a sé,
  punto di diramazione tra le due linee temporali - sessione notturna,
  2026-09-09.
- `ctr` - Crash Team Racing (VIDEOGIOCO, 1999) - voce a sé - sessione
  notturna, 2026-09-09.
- `spin-world-manga` - Crash Bandicoot: Kattobi! Spin World (manga,
  1999-2004) - voce a sé - sessione notturna, 2026-09-09.
- `crash-bash` - Crash Bash (VIDEOGIOCO PARTY, 2000) - voce a sé -
  sessione notturna, 2026-09-09.
- `huge-adventure` - Crash Bandicoot: The Huge Adventure (VIDEOGIOCO,
  2002) - voce a sé - sessione notturna, 2026-09-09.
- `n-tranced` - Crash Bandicoot 2: N-Tranced (VIDEOGIOCO, 2003) - voce
  a sé - sessione notturna, 2026-09-09.
- `nitro-kart` - Crash Nitro Kart (VIDEOGIOCO, 2003) - voce a sé -
  sessione notturna, 2026-09-09.
- `crash-fusion` - Crash Bandicoot: Fusion / Spyro: Fusion (VIDEOGIOCO
  CROSSOVER, 2004) - voce a sé - sessione notturna, 2026-09-09.
- `tag-team-racing` - Crash Tag Team Racing (VIDEOGIOCO, 2005) - voce
  a sé - sessione notturna, 2026-09-09.
- `boom-bang` - Crash Boom Bang! (VIDEOGIOCO PARTY, 2006) - voce a sé
  - sessione notturna, 2026-09-09.
- `nitro-kart-3d` - Crash Bandicoot Nitro Kart 3D (VIDEOGIOCO MOBILE,
  2008) - voce a sé - sessione notturna, 2026-09-09.
- `nitro-kart-2` - Crash Bandicoot Nitro Kart 2 (VIDEOGIOCO MOBILE,
  2010) - voce a sé - sessione notturna, 2026-09-09.
- `crash-4` - Crash Bandicoot 4: It's About Time (VIDEOGIOCO,
  2020-2021, include nota su Crash Team Rumble 2023) - voce a sé -
  sessione notturna, 2026-09-09.
- `on-the-run` - Crash Bandicoot: On the Run! (VIDEOGIOCO MOBILE,
  2021-2023) - voce a sé - sessione notturna, 2026-09-09.
- `insanity-series` - The Insanity Series (SERIE ANIMATA, 2026,
  imagePending, senza sinossi) - voce a sé, ultima voce della Linea
  Principale - sessione notturna, 2026-09-09.
- `wrath-of-cortex` - Crash Bandicoot: L'Ira di Cortex (VIDEOGIOCO,
  2001) - voce a sé, prima voce del nuovo universo Linea Temporale
  Alternativa - sessione notturna, 2026-09-09.
- `twinsanity` - Crash Twinsanity (VIDEOGIOCO, 2004) - voce a sé -
  sessione notturna, 2026-09-09.
- `crash-of-the-titans` - Crash of the Titans (VIDEOGIOCO, 2007,
  include nota sui cortometraggi promozionali) - voce a sé - sessione
  notturna, 2026-09-09.
- `mind-over-mutant` - Crash: Il Dominio sui Mutanti (VIDEOGIOCO,
  2008) - voce a sé, ultima voce della saga - sessione notturna,
  2026-09-09.

## Devil May Cry

### Musica

#### Riordino playlist per fama decrescente

- **Proposta**: riordinare le 7 tracce già esistenti (stesse tracce,
  nessuna sostituzione) nel nuovo ordine: Devil Trigger (DMC5) → Devils
  Never Cry (DMC3) → Bury the Light (DMC5) → Taste the Blood (DMC3) →
  Subhuman (DMC5) → Shall Never Surrender (DMC4) → Crimson Cloud (DMC5),
  al posto dell'ordine attualmente pubblicato.
- **Origine**: Musicista.
- **Motivazione**: fama decrescente delle tracce.
- **Data**: 2026-09-08.
- **Stato**: confermato e applicato. Puro riordino (stesse tracce,
  nessuna sostituzione): applicato direttamente senza consenso esplicito
  di Sakrem, secondo la regola stabilita l'08/09/2026.

## Dragon Quest

### In sospeso - immagini mancanti

Sezione diversa dalle altre: non è una proposta da confermare o
scartare, ma un semplice elenco di lavoro. Le voci sotto sono ancora
prive dell'immagine/copertina corrispondente caricata su R2 da Sakrem (i
campi `image` in `data.js` contengono già l'URL atteso in stile
segnaposto coerente con la convenzione di naming del bucket, ma il file
fisico non risulta ancora caricato). Stesso schema già discusso per
Assassin's Creed: quando Sakrem carica i file su R2, passa solo il nome
file e la voce esce da questo elenco.

Copertine mancanti per le nuove voci pubblicate in questo ciclo:

1. `seirei-rubiss-densetsu` - Dragon Quest: Seirei Rubiss Densetsu
   (romanzo)
2. `seirei-rubiss-densetsu-manga` - Dragon Quest: Seirei Rubiss Densetsu
   (manga, gemella)
3. `hero-avan-dark-lord-hellfire` - The Hero Avan and the Dark Lord of
   Hellfire
4. `dai-no-daibouken` - Dai no Daibouken (manga)
5. `dai-no-daibouken-anime-reboot` - Dai no Daibouken Reboot anime
   (gemella)
6. `dq7` - Dragon Quest VII
7. `warriors-of-eden` - Warriors of Eden (gemella)
8. `dragon-quest-builders-2` - Dragon Quest Builders 2
9. `dragon-quest-eden` - Dragon Quest Eden (manga, 2026-in corso)

Filigrane (watermark) mancanti per i due nuovi universi:

10. `dai` - Universo Dai (nessuna filigrana ancora caricata)
11. `eden` - Universo Eden (nessuna filigrana ancora caricata)

- **Stato**: in attesa che Sakrem carichi i file su R2 e ne passi i nomi.

### Musica

#### Riordino playlist per fama decrescente

- **Proposta**: riordinare le 7 tracce esistenti (Overture → Fighting
  Spirit → Unyielding Courage → Bridal Waltz → Wagon Wheel's March →
  Violent Enemies → Pegasus), al posto dell'ordine cronologico attuale
  per numero di capitolo.
- **Origine**: Musicista.
- **Motivazione**: l'ordine cronologico non riflette il gradimento/fama
  reale delle tracce.
- **Data**: 2026-09-08.
- **Stato**: confermato e applicato. Puro riordino (stesse tracce,
  nessuna sostituzione): applicato direttamente senza consenso esplicito
  di Sakrem, secondo la regola stabilita l'08/09/2026. Il Musicista ha
  inoltre verificato l'eventuale inclusione di tracce da Dragon Quest VII
  o Dragon Quest Builders 2 (i due nuovi titoli aggiunti in questo ciclo)
  ma non ne ha trovate di abbastanza iconiche: nessuna traccia aggiunta.

### Media aggiunti

- `hero-avan-dark-lord-hellfire` - The Hero Avan and the Dark Lord of
  Hellfire (manga, 2020-in corso) - voce a sé, prima voce del nuovo
  Universo Dai - sessione 2026-09-08.
- `dai-no-daibouken` - Dai no Daibouken (manga, 1989-1996) - voce a sé,
  voce principale del nuovo Universo Dai - sessione 2026-09-08.
- `dai-no-daibouken-anime-reboot` - Dai no Daibouken Reboot anime
  (Toei, 2020-2022) - voce gemella di `dai-no-daibouken` - sessione
  2026-09-08.
- `dq7` - Dragon Quest VII (videogioco, 2000) - voce a sé, voce
  principale del nuovo Universo Eden - sessione 2026-09-08.
- `warriors-of-eden` - Warriors of Eden (manga, 2001-2006) - voce
  gemella di `dq7` - sessione 2026-09-08.
- `seirei-rubiss-densetsu` - Dragon Quest: Seirei Rubiss Densetsu
  (romanzo, 1990) - voce a sé, nuova prima voce cronologica
  dell'Universo Erdrick - sessione 2026-09-08.
- `seirei-rubiss-densetsu-manga` - Dragon Quest: Seirei Rubiss Densetsu
  (manga, 1993-1995) - voce gemella di `seirei-rubiss-densetsu` -
  sessione 2026-09-08.
- `dragon-quest-builders-2` - Dragon Quest Builders 2 (videogioco,
  2018/2019) - voce a sé, inserita nell'Universo Erdrick dopo `dq2` -
  sessione 2026-09-08.
- Nuovo universo **Dai** (IT "Universo Dai") - sessione 2026-09-08.
- Nuovo universo **Eden** (IT "Universo Eden") - sessione 2026-09-08.
- `dragon-quest-eden` - Dragon Quest Eden (manga, 2026-in corso) - voce
  a sé, inserita nell'Universo Eden dopo `dq7` - sessione 2026-09-08.

## Dying Light

### Musica

Nessuna proposta del Musicista in nessuna delle due sessioni di questo
ciclo (2026-09-06 e 2026-09-08): la playlist a 7 tracce è stata creata
da zero nella sessione del 2026-09-06 (prima playlist della saga, non un
cambiamento di tracce già esistenti) e non più toccata in seguito.

### Media aggiunti

- `nightmare-row` - Nightmare Row (romanzo, Raymond Benson, 2016) - voce
  a sé, nuova prima voce della timeline - sessione 2026-09-06.

## Fallout

### Immagini/audio mancanti

Sezione di lavoro, non una proposta da confermare o scartare: elenco dei
file fisici ancora da caricare su R2 da parte di Sakrem per questo ciclo.

Copertina mancante per la nuova voce pubblicata in questo ciclo:

1. `fallout-tactics` - Fallout Tactics: Brotherhood of Steel

File audio mancanti per la tracklist proposta dal Musicista (playlist
mai popolata finora, vedi sotto in "Musica"):

2. Big Iron (*Fallout: New Vegas*, Marty Robbins)
3. I Don't Want to Set the World on Fire (*Fallout 3*, The Ink Spots)
4. Take Me Home, Country Roads (*Fallout 76*, cover in-game)
5. Maybe (*Fallout 3*, The Ink Spots)
6. Atom Bomb Baby (*Fallout: New Vegas*, The Five Stars)
7. Butcher Pete (*Fallout 4*, Roy Brown)
8. Jingle, Jangle, Jingle (*Fallout: New Vegas*, Kay Kyser)

- **Stato**: in attesa che Sakrem carichi i file su R2 e ne passi i nomi.

### Musica

#### Tracklist completa proposta (playlist mai popolata)

- **Proposta**: popolare da zero il campo `tracks` della saga (attualmente
  `[]`, mai popolato nonostante un riferimento fuorviante nel commento del
  file) con una playlist di 7 brani: Big Iron (*Fallout: New Vegas*, Marty
  Robbins), I Don't Want to Set the World on Fire (*Fallout 3*, The Ink
  Spots), Take Me Home, Country Roads (*Fallout 76*, cover in-game), Maybe
  (*Fallout 3*, The Ink Spots), Atom Bomb Baby (*Fallout: New Vegas*, The
  Five Stars), Butcher Pete (*Fallout 4*, Roy Brown), Jingle, Jangle,
  Jingle (*Fallout: New Vegas*, Kay Kyser).
- **Origine**: Musicista.
- **Motivazione**: prima playlist della saga, selezione di brani reali e
  iconici della OST/colonna sonora in-game per copertura equilibrata dei
  vari capitoli.
- **Data**: 2026-09-08.
- **Stato**: in attesa - bloccata per asset mancante, tutti e 7 i file
  audio da caricare su R2 (proposta già accettata nel merito, non in
  attesa di decisione di Sakrem: manca solo il file fisico).

### Media aggiunti

- `fallout-tactics` - Fallout Tactics: Brotherhood of Steel (VIDEOGIOCO,
  2001) - voce a sé, inserita nell'universo "Wasteland Americano" tra
  `fallout-1` e `fallout-2` - sessione notturna, 2026-09-08.

## Final Fantasy

### Musica

#### Tracklist completa saga (rifatta da capo)

- **Proposta**: sostituire integralmente la playlist della saga (`tracks:
  []`, mai popolata finora) con una nuova selezione di 7 brani: Aerith's
  Theme (*Final Fantasy VII*), To Zanarkand (*Final Fantasy X*),
  One-Winged Angel (*Final Fantasy VII*), Melodies of Life (*Final
  Fantasy IX*), Suteki Da Ne (Isn't It Wonderful) (*Final Fantasy X*),
  Stand By Me (*Final Fantasy XV*), Blinded by Light (*Final Fantasy
  XIII*).
- **Origine**: Musicista.
- **Motivazione**: selezione dei brani più iconici/riconoscibili della
  saga, a copertura di più capitoli, per popolare per la prima volta
  la playlist.
- **Data**: 2026-09-08 (sessione notturna).
- **Stato**: in attesa - bloccata per asset mancante, tutti e 7 i file
  audio sono nuovi per il sito e da caricare su R2 (proposta già
  accettata nel merito, non in attesa di decisione di Sakrem: manca
  solo il file fisico).

### Media aggiunti

- `vivi-grandpa-memories` - Vivi and Grandpa's Memories for the Sky
  (LIBRO ILLUSTRATO, 2025 Giappone / 2026 internazionale) - voce a sé,
  prima voce del nuovo universo Gaia - sessione notturna, 2026-09-08.
- `ffix` - Final Fantasy IX (VIDEOGIOCO, 2000) - voce a sé, seconda e
  ultima voce del nuovo universo Gaia - sessione notturna, 2026-09-08.
- `ffvii-revelation` - Final Fantasy VII Revelation (VIDEOGIOCO, in
  uscita 8 aprile 2027, imagePending) - voce a sé, inserita
  nell'universo Riunione dopo `ffvii-rebirth` - sessione notturna,
  2026-09-08.
- Nuovo universo **Gaia** (Vivi and Grandpa's Memories for the Sky →
  Final Fantasy IX, posizionato tra Riunione e Spira) - sessione
  notturna, 2026-09-08.

## Fire Emblem

### Musica

#### Tracklist completa saga (rifatta da capo)

- **Proposta**: sostituire integralmente la playlist della saga (`tracks:
  []`, mai popolata finora) con una nuova selezione di 7 brani: Lost in
  Thoughts All Alone (*Fire Emblem Fates*), Id (Purpose) (*Fire Emblem:
  Awakening*), The Edge of Dawn (*Fire Emblem: Three Houses*), Fire
  Emblem Theme (*Fire Emblem: Shadow Dragon and the Blade of Light*),
  Together We Ride (*Fire Emblem: The Blazing Blade*), The Devoted
  (*Fire Emblem: Radiant Dawn*), Lost in the Waves (*Fire Emblem
  Fates*).
- **Origine**: Musicista.
- **Motivazione**: selezione dei brani più iconici/riconoscibili della
  saga, a copertura di più universi/capitoli, per popolare per la prima
  volta la playlist.
- **Data**: 2026-09-08 (sessione notturna).
- **Stato**: in attesa - bloccata per asset mancante, tutti e 7 i file
  audio sono nuovi per il sito e da caricare su R2 (proposta già
  accettata nel merito, non in attesa di decisione di Sakrem: manca
  solo il file fisico).

### Media aggiunti

- `three-houses` - Fire Emblem: Three Houses (VIDEOGIOCO, 2019) - voce
  a sé, prima voce del nuovo universo Fódlan - sessione notturna,
  2026-09-08.
- `three-hopes` - Fire Emblem Warriors: Three Hopes (VIDEOGIOCO, 2022) -
  voce a sé, seconda voce del nuovo universo Fódlan - sessione notturna,
  2026-09-08.
- `fortune-s-weave` - Fire Emblem: Fortune's Weave (VIDEOGIOCO, in
  uscita 17 settembre 2026, imagePending) - voce a sé, terza e ultima
  voce del nuovo universo Fódlan - sessione notturna, 2026-09-08.
- Nuovo universo **Fódlan** (Three Houses → Fortune's Weave, quarto e
  ultimo universo della saga, dopo Tellius) - sessione notturna,
  2026-09-08.

## Gears of War

### Musica

#### Tracklist completa saga (rifatta da capo)

- **Proposta**: sostituire integralmente la playlist della saga (`tracks:
  []`, mai popolata finora) con una nuova selezione di 7 brani: Mad World
  (strumentale) (*Gears of War 3*), Hope Runs Deep (*Gears of War 2*),
  Return of the Omen (*Gears of War 3*), Kait's Theme (*Gears 5*),
  Finally a Tomorrow (*Gears of War 3*), Main Theme (*Gears of War 4*),
  14 Years After E-Day (*Gears of War*, 2006).
- **Origine**: Musicista.
- **Motivazione**: selezione dei brani più iconici/riconoscibili della
  saga, a copertura di più capitoli, per popolare per la prima volta la
  playlist.
- **Data**: 2026-09-08 (sessione notturna).
- **Stato**: in attesa - bloccata per asset mancante, tutti e 7 i file
  audio sono nuovi per il sito e da caricare su R2 (proposta già
  accettata nel merito, non in attesa di decisione di Sakrem: manca
  solo il file fisico).

Nota: nessuna sezione "Media aggiunti" per Gears of War in questa
sessione - il lavoro di questo ciclo è stato solo una correzione
urgente su `e-day` (già pubblicata, downgrade a titolo non ancora
uscito) e una nota aggiunta alla sinossi esistente di `gears-1`, mai un
nuovo media vero e proprio (vedi il report una tantum, punto 4, per i
dettagli).

## God of War

### Musica

#### Tracklist completa saga (rifatta da capo)

- **Proposta**: sostituire integralmente la playlist della saga (`tracks:
  []`, mai popolata finora) con una nuova selezione di 7 brani: Blood
  Upon the Snow (feat. Hozier) (*God of War Ragnarök*), Memories of
  Mother (*God of War*, 2018), The Vengeful Spartan (Tema Principale)
  (*God of War*, 2005), God of War (Tema Principale) (*God of War*,
  2018), Rage of Sparta (*God of War III*), Ragnarök (Tema del climax)
  (*God of War Ragnarök*), The End Begins (*God of War II*).
- **Origine**: Musicista.
- **Motivazione**: selezione dei brani più iconici/riconoscibili della
  saga, a copertura di più capitoli, per popolare per la prima volta la
  playlist.
- **Data**: 2026-09-08 (sessione notturna).
- **Stato**: in attesa - bloccata per asset mancante, tutti e 7 i file
  audio sono nuovi per il sito e da caricare su R2 (proposta già
  accettata nel merito, non in attesa di decisione di Sakrem: manca
  solo il file fisico).

### Media aggiunti

- `god-of-war-laufey` - God of War Laufey (VIDEOGIOCO, in uscita 16
  febbraio 2027, imagePending) - voce a sé, inserita in coda
  all'universo Saga Norrena dopo `ragnarok` (collocazione PROVVISORIA:
  quando il gioco uscirà con sinossi reale, la posizione cronologica
  potrebbe rivelarsi precedente a `god-of-war-2018`) - sessione
  notturna, 2026-09-08.

## Grand Theft Auto

### Musica

#### Tracklist completa saga (prima volta, campo da creare ex novo)

- **Proposta**: creare ex novo il campo `tracks` della saga (attualmente
  assente da `data.js`, nemmeno come array vuoto) e popolarlo con una
  playlist di 7 brani: Billie Jean (*GTA Vice City*, Flash FM), Welcome
  to the Jungle (*GTA San Andreas*, K-DST), Africa (*GTA Vice City*,
  Emotion 98.3), Wanted Dead or Alive (*GTA IV*, Liberty Rock Radio
  97.8), In the Air Tonight (*GTA Vice City*, Emotion 98.3), Express
  Yourself (*GTA San Andreas*, Radio Los Santos), I Ran (So Far Away)
  (*GTA Vice City*, Wave 103).
- **Origine**: Musicista.
- **Motivazione**: prima playlist della saga, selezione di brani reali
  delle radio in-game per copertura equilibrata di più capitoli.
- **Data**: 2026-09-09 (sessione notturna, 6/12).
- **Stato**: in attesa - bloccata per asset mancante, tutti e 7 i file
  audio sono nuovi per il sito e da caricare su R2 (proposta già
  accettata nel merito, non in attesa di decisione di Sakrem: manca
  solo il file fisico). Il campo viene comunque creato dal Programmatore
  come `tracks: []`, non popolato, in attesa dei file.

### Media aggiunti

- `gta1` - GTA (VIDEOGIOCO, 1997) - voce a sé, prima voce del nuovo
  universo 2D - sessione notturna, 2026-09-09.
- `gta2` - GTA 2 (VIDEOGIOCO, 1999) - voce a sé, seconda voce del nuovo
  universo 2D - sessione notturna, 2026-09-09.
- `gta-london-1969` - GTA: London 1969 (VIDEOGIOCO, 1999) - voce a sé,
  terza e ultima voce del nuovo universo 2D - sessione notturna,
  2026-09-09.
- `gta-vi` - GTA VI (VIDEOGIOCO, in uscita 19 novembre 2026,
  imagePending) - voce a sé, inserita in coda all'Universo HD dopo
  `gta5` - sessione notturna, 2026-09-09.
- Nuovo universo **2D** (IT "Universo 2D", GTA → London 1969, primo dei
  3 universi della saga, span 1997 – 1999) - sessione notturna,
  2026-09-09.

## Halo

### Musica

#### Tracklist completa saga (mai popolata)

- **Proposta**: popolare il campo `tracks` della saga (attualmente
  `[]`, mai popolato) con una playlist di 7 brani: Halo Theme (Opening
  Suite) (*Halo: Combat Evolved*), Peril (*Halo 2*), Never Forget
  (*Halo: Reach*), One Final Effort (*Halo 3*), Blow Me Away (*Halo
  2*), 117 (*Halo 4*), Zeta Halo (*Halo Infinite*).
- **Origine**: Musicista.
- **Motivazione**: selezione dei brani più iconici/riconoscibili della
  saga, a copertura di più capitoli, per popolare per la prima volta
  la playlist.
- **Data**: 2026-09-09 (sessione notturna, 7/12).
- **Stato**: in attesa - bloccata per asset mancante, tutti e 7 i file
  audio sono nuovi per il sito e da caricare su R2 (proposta già
  accettata nel merito, non in attesa di decisione di Sakrem: manca
  solo il file fisico).

### Media aggiunti

- `glasslands` - Halo: Glasslands (ROMANZO, 2011) - voce a sé, prima
  delle tre nuove voci finali de Il Ciclo degli Anelli (in coda dopo
  `halo-3`) - sessione notturna, 2026-09-09.
- `the-thursday-war` - Halo: The Thursday War (ROMANZO, 2012) - voce a
  sé, seconda delle tre nuove voci finali de Il Ciclo degli Anelli -
  sessione notturna, 2026-09-09.
- `mortal-dictata` - Halo: Mortal Dictata (ROMANZO, 2014) - voce a sé,
  ultima voce de Il Ciclo degli Anelli - sessione notturna, 2026-09-09.
- `halo-escalation` - Halo: Escalation (FUMETTO, 2013 – 2015) - voce a
  sé, inserita nella Saga del Reclamatore dopo `halo-4` - sessione
  notturna, 2026-09-09.
- `rise-of-atriox` - Halo: Rise of Atriox (FUMETTO, 2017) - voce a sé,
  inserita nella Saga del Reclamatore dopo `halo-5` - sessione
  notturna, 2026-09-09.
- `shadows-of-reach` - Halo: Shadows of Reach (ROMANZO, 2020) - voce a
  sé, inserita nella Saga del Reclamatore dopo `halo-wars-2` -
  sessione notturna, 2026-09-09.
- `divine-wind` - Halo: Divine Wind (ROMANZO, 2021) - voce a sé,
  inserita nella Saga del Reclamatore dopo `shadows-of-reach` (subito
  prima di `halo-infinite`) - sessione notturna, 2026-09-09.

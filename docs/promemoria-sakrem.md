# Promemoria Sakrem

File di consultazione per Sakrem, non letto dal sito. Diverso dai
pacchetti tecnici per il Programmatore: qui non si applica nulla al sito
finché non c'è la decisione di Sakrem e poi il normale processo (report +
pacchetto + Programmatore).

Due tipi di contenuto, per saga:

1. **Proposte in sospeso** - proposte della catena che Sakrem ha
   rimandato a una sessione futura. Restano qui finché non decise
   (confermate o scartate), poi si rimuovono. Non è uno storico, solo le
   cose ancora aperte.
2. **Storico permanente musica/universi nuovi** - due elenchi per saga
   che non si cancellano mai, qualunque sia l'esito:
   - **Musica**: ogni cambiamento di tracce proposto dal Musicista
     (sostituzione o riordino), con lo stato reale (confermato /
     rifiutato / in attesa di decisione), aggiornato quando cambia ma
     mai cancellato.
   - **Universi nuovi**: solo i nuovi universi creati nella saga, con
     la sessione/data di aggiunta, in forma semplice (nome
     dell'universo, saga, data), senza commenti o valutazioni
     personali. Mai singoli media nuovi (voce a sé o gemella) che non
     danno vita a un nuovo universo, mai note a voci già pubblicate,
     correzioni di sinossi esistenti o riclassificazioni: tutto questo
     resta solo nel report una tantum. Se una saga non ha voci per una
     delle due liste, la sotto-sezione si omette.

   Regola valida dal 2026-09-12 in poi (decisione di Sakrem): prima di
   questa data la seconda lista si chiamava "Media aggiunti" e teneva
   anche i singoli media nuovi, non solo gli universi - le sezioni già
   scritte con quel criterio restano come sono, storico invariato, non
   si riscrivono.

## Come aggiungere una voce

Una sezione `##` per ogni saga toccata. Dentro, fino a tre sotto-sezioni
`###`, solo quelle popolate:

### In sospeso

Una `####` per ogni proposta ancora da decidere, con:

- **Proposta**: cosa cambierebbe, con valori prima/dopo.
- **Origine**: quale agente l'ha proposta.
- **Motivazione**: perché, in breve.
- **Data**: prima segnalazione.
- **Stato**: sempre `in attesa di decisione di Sakrem, non applicato`
  finché resta qui. Decisa, si rimuove in un cleanup successivo.

### Musica

Storico permanente. Una `####` per ogni cambiamento di tracce proposto
dal Musicista per questa saga, stessi campi di sopra
(Proposta/Origine/Motivazione/Data) più:

- **Stato**: `confermato e applicato`, `rifiutato, non applicato` oppure
  `in attesa di decisione di Sakrem, non applicato`. Si aggiorna sul
  posto quando cambia: la voce non si sposta mai in "In sospeso" né
  viene mai cancellata.

### Universi nuovi

Storico permanente (dal 2026-09-12 in poi, vedi sopra). Un punto per
ogni nuovo universo creato nella saga - mai un singolo media nuovo
senza un universo nuovo, mai una nota a voce esistente, una
correzione di sinossi o una riclassificazione - formato semplice,
senza commenti personali:

- Nome dell'universo - saga - sessione/data di aggiunta.

---

## Ace Combat

### In sospeso

#### Cambio playlist - "Linkage" → "First Flight"

- **Proposta**: sostituire "Linkage" (*Ace Combat 3: Electrosphere*) con
  "First Flight" (*Ace Combat 5: The Unsung War*).
- **Origine**: Musicista.
- **Motivazione**: fama pubblica nettamente superiore di "First Flight"
  (eseguita alle Olimpiadi di Tokyo 2020) rispetto a "Linkage", di nicchia
  hardcore. Nessuna traccia dello stesso gioco resterebbe adiacente dopo
  la sostituzione.
- **Data**: 2026-09-08.
- **Stato**: in attesa di decisione di Sakrem, non applicato.

### Musica

#### Cambio playlist - "Linkage" → "First Flight"

- **Proposta**: sostituire "Linkage" (*Ace Combat 3: Electrosphere*) con
  "First Flight" (*Ace Combat 5: The Unsung War*).
- **Origine**: Musicista.
- **Motivazione**: fama pubblica nettamente superiore (Olimpiadi di Tokyo
  2020) rispetto a "Linkage", di nicchia hardcore.
- **Data**: 2026-09-08.
- **Stato**: in attesa di decisione di Sakrem, non applicato (stessa
  proposta aperta anche in "In sospeso" sopra).

## Alone in the Dark

### In sospeso

#### Cambio playlist - "The Light Carrier Test" → "Who Am I?"

- **Proposta**: sostituire la traccia "The Light Carrier Test" con "Who Am
  I?" nella playlist della saga (entrambe da *Alone in the Dark*, 2008).
- **Origine**: Musicista.
- **Motivazione**: GamesRadar ("Game Music of the Day") indica "Who Am
  I?" come brano più prominente della OST 2008, contro posizione 17/21
  per l'attuale "The Light Carrier Test".
- **Data**: 2026-09-08.
- **Stato**: in attesa di decisione di Sakrem, non applicato. Bloccata
  anche tecnicamente: file audio non ancora su R2.

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

## Armored Core

### Musica

#### Tracklist completa saga (prima volta, saga interamente nuova)

- **Proposta**: creare il campo `tracks` della saga (nuova, quindi
  inesistente fino ad ora) e popolarlo con una playlist di 7 brani: "9"
  (Nine-Ball Seraph Theme) (*Armored Core: Master of Arena*), "Contact
  With You" (Balteus Theme) (*Armored Core VI: Fires of Rubicon*), "The
  Answer" (White Glint's Theme) (*Armored Core: For Answer*), "Steel
  Haze" (V.IV Rusty's Theme) (*Armored Core VI: Fires of Rubicon*),
  "Fall" (tema boss finale) (*Armored Core: For Answer*), "Someone is
  Always Moving on the Surface" (*Armored Core: For Answer*), "Remember"
  (*Armored Core: For Answer*).
- **Origine**: Musicista.
- **Motivazione**: prima playlist della saga, temi più iconici a
  copertura di più ere narrative (trilogia arcaica, Layered, Lynx,
  Rubicon).
- **Data**: 2026-09-09 (sessione notturna, 12/12).
- **Stato**: accettata nel merito, bloccata per asset mancante - tutte e
  7 le tracce sono nuove per il sito, da caricare su R2. Il
  Programmatore crea comunque il campo `tracks: []`, vuoto in attesa dei
  file.

### Media aggiunti

Saga interamente nuova: 5 nuovi universi e 21 nuove voci (19 reali + 2
VOCE STORIA, nessuna gemella), tutte inserite nella stessa sessione
notturna, 2026-09-09.

- Nuovo universo **Leos Klein** (`ac1` → `ac2-another-age`, 6 voci) -
  sessione notturna, 2026-09-09.
- Nuovo universo **Layered** (`ac3` → `fort-tower-song`, 10 voci) -
  sessione notturna, 2026-09-09.
- Nuovo universo **Lynx** (`ac4` → `for-answer`, 2 voci) - sessione
  notturna, 2026-09-09.
- Nuovo universo **Verdict Day** (`ac-v` → `verdict-day`, 2 voci) -
  sessione notturna, 2026-09-09.
- Nuovo universo **Rubicon** (`ac6-fires-of-rubicon`, 1 voce) -
  sessione notturna, 2026-09-09. **Intero universo rimosso dal sito
  il 2026-09-12** (decisione diretta di Sakrem: soft reboot isolato,
  nessun secondo medium collegato, sotto la soglia minima di 2 media
  per formare un universo - vedi report saga Armored Core del
  2026-09-12).
- `ac1` - Armored Core (VIDEOGIOCO, 1997) - voce a sé, prima voce della
  saga - sessione notturna, 2026-09-09.
- `project-phantasma` - Armored Core: Project Phantasma (VIDEOGIOCO,
  1997) - voce a sé - sessione notturna, 2026-09-09.
- `master-of-arena` - Armored Core: Master of Arena (VIDEOGIOCO, 1999)
  - voce a sé - sessione notturna, 2026-09-09.
- `mars-terraformation-frighteners-coup` - VOCE STORIA "La
  Terraformazione di Marte e il Colpo di Stato dei Frighteners" -
  sessione notturna, 2026-09-09.
- `ac2` - Armored Core 2 (VIDEOGIOCO, 2000) - voce a sé - sessione
  notturna, 2026-09-09.
- `ac2-another-age` - Armored Core 2: Another Age (VIDEOGIOCO, 2001) -
  voce a sé, ultima voce di Leos Klein - sessione notturna, 2026-09-09.
  **Rimossa dal sito il 2026-09-12** (assorbita come nota nella
  sinossi di `ac2`, decisione diretta di Sakrem - vedi report saga
  Armored Core del 2026-09-12).
- `ac3` - Armored Core 3 (VIDEOGIOCO, 2002) - voce a sé, prima voce di
  Layered - sessione notturna, 2026-09-09.
- `silent-line` - Silent Line: Armored Core (VIDEOGIOCO, 2003) - voce a
  sé - sessione notturna, 2026-09-09.
- `formula-front` - Armored Core: Formula Front (VIDEOGIOCO,
  2004/Extreme Battle 2005) - voce a sé - sessione notturna,
  2026-09-09. **Rimossa dal sito il 2026-09-12** (decisione diretta
  di Sakrem - vedi report saga Armored Core del 2026-09-12).
- `end-of-truce-rise-of-navis` - VOCE STORIA "La Fine della Tregua tra
  le Corporazioni e l'Ascesa di Navis" - sessione notturna, 2026-09-09.
- `nexus` - Armored Core: Nexus (VIDEOGIOCO, 2003/2004) - voce a sé -
  sessione notturna, 2026-09-09.
- `nine-breaker` - Armored Core: Nine Breaker (VIDEOGIOCO, 2004) - voce
  a sé - sessione notturna, 2026-09-09. **Rimossa dal sito il
  2026-09-12** (decisione diretta di Sakrem - vedi report saga
  Armored Core del 2026-09-12).
- `ac-mobile` - Armored Core Mobile (VIDEOGIOCO, 2004-2008, voce
  consolidata) - voce a sé - sessione notturna, 2026-09-09.
- `last-raven` - Armored Core: Last Raven (VIDEOGIOCO, 2005) - voce a
  sé - sessione notturna, 2026-09-09.
- `tower-city-blade` - Armored Core: Tower City Blade (MANGA, 2007) -
  voce a sé, indipendente (non gemella) - sessione notturna,
  2026-09-09.
- `fort-tower-song` - Armored Core: Fort Tower Song (ROMANZO, 2007) -
  voce a sé, indipendente (non gemella), ultima voce di Layered -
  sessione notturna, 2026-09-09.
- `ac4` - Armored Core 4 (VIDEOGIOCO, 2006) - voce a sé, prima voce di
  Lynx - sessione notturna, 2026-09-09.
- `for-answer` - Armored Core: For Answer (VIDEOGIOCO, 2008) - voce a
  sé, ultima voce di Lynx - sessione notturna, 2026-09-09.
- `ac-v` - Armored Core V (VIDEOGIOCO, 2012) - voce a sé, prima voce di
  Verdict Day - sessione notturna, 2026-09-09.
- `verdict-day` - Armored Core: Verdict Day (VIDEOGIOCO, 2013) - voce a
  sé, ultima voce di Verdict Day - sessione notturna, 2026-09-09.
- `ac6-fires-of-rubicon` - Armored Core VI: Fires of Rubicon
  (VIDEOGIOCO, 2023) - voce a sé, unica voce del nuovo universo Rubicon
  - sessione notturna, 2026-09-09. **Rimossa dal sito il 2026-09-12**
  insieme all'intero universo Rubicon (vedi sopra) - nessuna voce
  ospita più questo media in attesa di un secondo medium collegato.

## Assassin's Creed

### In sospeso - immagini mancanti

Elenco di lavoro, non una proposta da decidere: le 12 voci sotto hanno
già il campo `image` (o, per il punto 12, `watermark`) in `data.js`
(URL segnaposto) ma senza file caricato su R2. Quando Sakrem carica il
file e passa il nome, la voce esce dall'elenco.

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

Filigrana (watermark) mancante per i nuovi universi:

11. `novecento` - universo "Novecento"
12. `rivoluzioni-atlantiche` - universo "Rivoluzioni Atlantiche" (creato
    2026-09-12, ex "Il Rito Coloniale" rinominato nella stessa sessione -
    vedi "Contesto sessione 2026-09-12" più sotto)

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
- Nuovo universo **Rivoluzioni Atlantiche** (`rogue` →
  `assassins-creed-3` → `unity`, + ombrello `forsaken`, span 1725 –
  1794) - creato 2026-09-12 su richiesta diretta di Sakrem, con il nome
  provvisorio "Il Rito Coloniale", rinominato nella stessa sessione
  (vedi sotto). Rogue, Assassin's Creed III, Unity e l'ombrello Forsaken
  erano tutte voci già esistenti sul sito, solo riclassificate in questo
  nuovo universo (non nuove voci) - conta come "media aggiunto" solo
  l'universo in sé.

### Contesto sessione 2026-09-12

Sessione lunga con più correzioni in sequenza sulla saga:

1. Creazione dell'universo (poi rinominato, vedi sotto) con Rogue + AC
   III + ombrello Forsaken, su richiesta diretta di Sakrem.
2. Rimozione completa dal sito di "Assassin's Creed III: Liberation"
   (era in Età della Vela): nessun collegamento di trama verificato con
   alcun altro media della saga.
3. Scoperta (ricerca esterna) di un collegamento di trama reale tra
   Rogue e Unity - Shay Cormac uccide sia Adéwalé (Freedom Cry) sia
   Charles Dorian, padre di Arno, la cui morte apre Unity - con
   conseguente spostamento di Unity nello stesso universo di Rogue/AC
   III (prima era in Epoca degli Imperi) e aggiornamento delle sinossi
   di Rogue e Unity per documentare questi legami nel testo.
4. Rinominato l'universo da "Il Rito Coloniale" / "The Colonial Rite" a
   **"Rivoluzioni Atlantiche" / "Atlantic Revolutions"** (id:
   `rito-coloniale` → `rivoluzioni-atlantiche`) - unico nome della saga
   preso da una fazione invece che da un'epoca storica, rompeva lo
   schema stilistico (Antichità, Alto Medioevo, Basso Medioevo e
   Rinascimento, Giappone Feudale, Età della Vela, Epoca degli Imperi,
   Rivoluzione Russa, Novecento, Era Moderna). "Rivoluzioni Atlantiche"
   è termine storiografico reale per Rivoluzione Americana + Rivoluzione
   Francese, le due rivoluzioni coperte dall'universo.
5. Nuova palette per Rivoluzioni Atlantiche (Artista):
   `["#3A6B78", "#8E1B2E", "#242A3D"]` per Rogue/AC III/Unity (teal
   glaciale, rosso-firma della saga, blu-notte parigino).
6. "Età della Vela" (Black Flag, Freedom Cry): palette
   `["#1B7A72", "#8E1B2E"]` riconfermata da zero dall'Artista, nessuna
   modifica.
7. "Epoca degli Imperi": terzo colore palette sostituito da `#4E5449`
   a `#8E1B2E` (Artista - unico universo della saga senza rosso-firma,
   e verde-grigio "nebbia industriale" non adatto a Resurrection Plot,
   ambientato in Egitto). Corretto anche un bug nel `paletteBounds`
   (trovato dal Supervisore, non dall'Artista): da
   `["chronicles-india", "magus-conspiracy"]` a `["chronicles-india",
   "resurrection-plot"]` - Resurrection Plot è il seguito diretto di
   Magus Conspiracy (stessi protagonisti Pierrette Arnaud e Simeon
   Price), non va raggruppato con i Frye (Underworld/Syndicate/Jack the
   Ripper).
8. Playlist della saga (Musicista): verificata con fonti esterne,
   nessuna traccia proviene da Liberation e nessun titolo del nuovo
   universo ha fama pubblica superiore alle 7 tracce attuali - playlist
   confermata invariata.

### Da riverificare in futuro (segnalazione per la Sentinella)

#### Serie live-action Netflix "Assassin's Creed" - stato di conferma

- **Cosa monitorare**: annuncio Netflix (riprese iniziate marzo 2026 a
  Cinecittà, finestra di uscita ufficiale seppur approssimativa H2 2027,
  ambientazione Roma 64 d.C., arco 54-68 d.C., Nerone, Grande Incendio di
  Roma, Seneca, nuovo Assassino contro cospirazione templare). Non ancora
  presente sul sito, nemmeno come voce `imagePending`.
- **Origine**: Ricercatore/Selezionatore/Storico, sessione di Controllo
  Assassin's Creed.
- **Motivazione dell'attesa**: Sakrem ha deciso di non aprire una voce
  `imagePending` ora. Da riprendere quando la Sentinella ricontrollerà
  questa saga in futuro, verificando se nel frattempo sono emerse
  informazioni più solide (data di uscita precisa, cast/trama
  confermati) prima di riconsiderarne l'inclusione.
- **Nota di posizionamento già raccolta** (Storico, 12/09): l'anno 64
  d.C. cade in un vuoto cronologico scoperto tra "Antichità" (chiude 44
  a.C.) e "Alto Medioevo" (apre nell'824) - nessuno dei due universi
  esistenti lo copre. Se/quando si deciderà di includerla, il giudizio
  tecnico dello Storico è per un nuovo universo dedicato (es. "Roma
  Imperiale"), non un'estensione forzata di uno dei due esistenti.
- **Data**: 2026-09-12.
- **Stato**: non applicato, in attesa di nuove informazioni ufficiali -
  nessuna azione fino alla prossima verifica.

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
- **Motivazione**: prima playlist della saga, temi più iconici tra CRPG
  classici, Baldur's Gate 3 e spin-off Dark Alliance.
- **Data**: 2026-09-09 (sessione notturna, 9/12).
- **Stato**: accettata nel merito, bloccata per asset mancante - tutti e
  7 i file sono nuovi per il sito, da caricare su R2. Il Programmatore
  crea comunque il campo `tracks: []`, vuoto in attesa dei file.

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
  2026-09-09. **Rimossa dal sito il 2026-09-12** (decisione diretta di
  Sakrem: nessuna evoluzione di trama - la fonte ufficiale stessa la
  descrive come scollegata dagli eventi del gioco - e una contraddizione
  vera con Baldur's Gate 1, dove Kivan e Tiax, morti nel fumetto, sono
  personaggi vivi e reclutabili).
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
- **Motivazione**: prima playlist della saga, temi principali più
  iconici a copertura di più capitoli, incluso un brano radiofonico
  in-game (Fortunate Son) tra i più citati della saga.
- **Data**: 2026-09-09 (sessione notturna, 10/12).
- **Stato**: accettata nel merito, bloccata per asset mancante - tutte e
  7 le tracce sono nuove per il sito, da caricare su R2. Il
  Programmatore crea comunque il campo `tracks: []`, vuoto in attesa dei
  file.
- **Attenzione (12/09)**: Battlefield 6 è stato rimosso dal sito (vedi
  "Media aggiunti" più sotto) - la traccia "Battlefield 6 Main Theme"
  proposta sopra non è più valida quando si popolerà davvero il campo
  `tracks`, andrà sostituita con un'altra scelta.

### Media aggiunti

Saga interamente nuova: 4 nuovi universi e 8 nuove voci (nessuna
gemella), tutte inserite nella stessa sessione notturna, 2026-09-09.

- Nuovo universo **Bad Company** (`bfbc1` → `bfbc2`, span 1944
  (prologo) – Guerra USA-Russia, 2 voci) - sessione notturna,
  2026-09-09.
- Nuovo universo **La Guerra del 2014** (`bf3` → `bf4-countdown-to-war`
  → `bf4`, span 2014 – 2020, 3 voci) - sessione notturna, 2026-09-09.
  **Fuso il 12/09** con l'universo "La Guerra del 2042" nel nuovo
  universo **L'Eredità di Irish** (decisione diretta di Sakrem: i due
  universi erano divisi per anno/epoca invece che per continuità
  narrativa reale, lo stesso difetto individuato e corretto su
  Assassin's Creed lo stesso giorno - vedi sotto).
- Nuovo universo **La Guerra del 2042** (`exodus` → `bf2042`, span
  2042, 2 voci) - sessione notturna, 2026-09-09. **Fuso il 12/09** con
  "La Guerra del 2014" nel nuovo universo **L'Eredità di Irish** (stesso
  motivo di cui sopra: Irish/Kimble Graves attraversa entrambi, da BF4 a
  Exodus a BF2042, un aggancio di trama reale che l'universo diviso per
  anno non rendeva).
- Nuovo universo **Battlefield 6** (`bf6`, span 2027-2028, 1 voce) -
  sessione notturna, 2026-09-09. **Rimosso interamente dal sito il
  12/09** (decisione diretta di Sakrem: nessun aggancio di trama
  verificato con nessun altro media della saga - verificato anche con
  ricerca esterna, nessun personaggio/organizzazione/evento in comune
  con Battlefield 2042 o con il resto della saga, solo easter egg
  meta-narrativi senza peso di trama).
- `bfbc1` - Battlefield: Bad Company (VIDEOGIOCO, 2008) - voce a sé,
  prima voce del nuovo universo Bad Company - sessione notturna,
  2026-09-09.
- `bfbc2` - Battlefield: Bad Company 2 (VIDEOGIOCO, 2010) - voce a sé,
  ultima voce del nuovo universo Bad Company - sessione notturna,
  2026-09-09.
- `bf3` - Battlefield 3 (VIDEOGIOCO, 2011) - voce a sé, prima voce del
  nuovo universo La Guerra del 2014 - sessione notturna, 2026-09-09.
  **Dal 12/09, prima voce di L'Eredità di Irish** (vedi fusione sopra).
- `bf4-countdown-to-war` - Battlefield 4: Countdown to War (ROMANZO,
  2013) - voce a sé - sessione notturna, 2026-09-09. **Dal 12/09, in
  L'Eredità di Irish** (vedi fusione sopra).
- `bf4` - Battlefield 4 (VIDEOGIOCO, 2013) - voce a sé, ultima voce del
  nuovo universo La Guerra del 2014 - sessione notturna, 2026-09-09.
  **Dal 12/09, in L'Eredità di Irish** (vedi fusione sopra).
- `exodus` - Exodus (CORTOMETRAGGIO, 2021) - voce a sé, prima voce del
  nuovo universo La Guerra del 2042 - sessione notturna, 2026-09-09.
  **Dal 12/09, in L'Eredità di Irish** (vedi fusione sopra).
- `bf2042` - Battlefield 2042 (VIDEOGIOCO, 2021) - voce a sé, ultima
  voce del nuovo universo La Guerra del 2042 - sessione notturna,
  2026-09-09. **Dal 12/09, ultima voce di L'Eredità di Irish** (vedi
  fusione sopra).
- `bf6` - Battlefield 6 (VIDEOGIOCO, 2025) - voce a sé, unica voce del
  nuovo universo Battlefield 6 - sessione notturna, 2026-09-09.
  **Rimossa dal sito il 12/09** (vedi rimozione dell'universo sopra).

## BioShock

### In sospeso

#### Cambio playlist - "Empty Houses" → "Beyond the Sea"

- **Proposta**: sostituire la traccia "Empty Houses" (*BioShock*) con
  "Beyond the Sea" (*BioShock*) nella playlist della saga.
- **Origine**: Musicista.
- **Motivazione**: "Beyond the Sea" è la traccia più iconica della saga -
  trailer d'annuncio 2006 virale, apertura e finale del gioco, ripresa in
  *Burial at Sea Episode 1*. Se rifiutata, *BioShock 2* resta senza
  traccia propria in playlist: "Empty Houses" appartiene in realtà alla
  OST del primo *BioShock*, non di *BioShock 2* (attribuzione già
  corretta nel dato tecnico a prescindere da questa proposta).
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
- **Motivazione**: prima playlist della saga, temi più iconici a
  copertura di più capitoli ed epoche.
- **Data**: 2026-09-09 (sessione notturna, 8/12).
- **Stato**: accettata nel merito, bloccata per asset mancante - tutti e
  7 i file sono nuovi per il sito, da caricare su R2. Il Programmatore
  crea comunque il campo `tracks: []`, vuoto in attesa dei file.

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
- **Motivazione**: "Beginning" è il tema di Trevor Belmont, tra i brani
  più citati come iconici della saga, presente nella Castlevania Sound
  Selection di *Super Smash Bros. Ultimate*.
- **Data**: 2026-09-08.
- **Stato**: in attesa di decisione di Sakrem, non applicato.

#### Cambio playlist - "Sorrow's Distortion" → "Divine Bloodlines"

- **Proposta**: sostituire la traccia "Sorrow's Distortion" (*Castlevania:
  Order of Ecclesia*) con "Divine Bloodlines" (*Castlevania: Rondo of
  Blood*) nella playlist della saga.
- **Origine**: Musicista.
- **Motivazione**: "Divine Bloodlines" è il tema di Richter Belmont,
  presente nella Castlevania Sound Selection di *Super Smash Bros.
  Ultimate*, tra i classici più citati della saga.
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
- **Motivazione**: prima playlist della saga, temi più iconici dei
  capitoli principali della Linea Principale (nessun brano dalla Linea
  Temporale Alternativa).
- **Data**: 2026-09-09 (sessione notturna, 11/12).
- **Stato**: accettata nel merito, bloccata per asset mancante - tutti e
  7 i file sono nuovi per il sito, da caricare su R2. Il Programmatore
  crea comunque il campo `tracks: []`, vuoto in attesa dei file.

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

## Dark Souls

Saga interamente nuova. Trovata dal Project Manager in bypass, non era
nell'elenco originale delle 10 saghe di questa sessione notturna.

### Musica

#### Tracklist completa saga (prima volta, saga interamente nuova)

- **Proposta**: creare il campo `tracks` della saga (nuova, quindi
  inesistente fino ad ora) e popolarlo con una playlist di 7 brani, in
  ordine di fama/gradimento decrescente: "Gwyn, Lord of Cinder" (*Dark
  Souls*), "Nameless King" (*Dark Souls III*), "Ornstein and Smough"
  (*Dark Souls*), "Slave Knight Gael" (*Dark Souls III*, DLC The Ringed
  City), "Artorias of the Abyss" (*Dark Souls*, DLC Artorias of the
  Abyss), "Sister Friede" (*Dark Souls III*, DLC Ashes of Ariandel),
  "Fume Knight" (*Dark Souls II*, DLC Crown of the Old Iron King).
- **Origine**: Musicista.
- **Motivazione**: prima playlist della saga, basata solo su
  fama/gradimento reale di critica e community. Distribuzione (3 tracce
  Dark Souls I incl. DLC, 3 Dark Souls III incl. DLC, 1 Dark Souls II
  incl. DLC) riflette la fama reale delle rispettive OST. Il romanzo
  *Masque of Vindication* non ha musica propria, escluso dal perimetro.
- **Data**: 2026-09-10 (sessione notturna, 2/3).
- **Stato**: accettata nel merito, bloccata per asset mancante - tutte e
  7 le tracce sono nuove per il sito, da caricare su R2. Il
  Programmatore crea comunque il campo `tracks: []`, vuoto in attesa dei
  file.

### Media aggiunti

Saga interamente nuova: 1 nuovo universo e 4 nuove voci (nessuna
gemella, nessuna voce STORIA), tutte inserite nella stessa sessione
notturna, 2026-09-10.

- Nuovo universo **Il Ciclo del Fuoco** (`dark-souls-1` →
  `masque-of-vindication`, span 2011 - 2022, 4 voci) - sessione
  notturna, 2026-09-10.
- `dark-souls-1` - Dark Souls (VIDEOGIOCO, 2011) - voce a sé, prima
  voce della saga - sessione notturna, 2026-09-10.
- `dark-souls-2` - Dark Souls II (VIDEOGIOCO, 2014, include nota sulla
  Lost Crown Trilogy) - voce a sé - sessione notturna, 2026-09-10.
- `dark-souls-3` - Dark Souls III (VIDEOGIOCO, 2016, include nota sui
  DLC Ashes of Ariandel e The Ringed City) - voce a sé - sessione
  notturna, 2026-09-10.
- `masque-of-vindication` - Dark Souls: Masque of Vindication (ROMANZO,
  2022, solo edizione inglese/giapponese, nessuna edizione italiana) -
  voce a sé, ultima voce della saga - sessione notturna, 2026-09-10.

## Darksiders

Saga interamente nuova. 10ª e ultima delle 10 saghe individuate dal
Project Manager per il turno notturno 2/notte 3. Un solo universo,
"Linea Temporale Darksiders" (span 2009 - 2027/2028), 10 voci in ordine
cronologico interno (modello Dead Space): 5 VIDEOGIOCO (Genesis,
Darksiders, II, III, IV imagePending), 1 ROMANZO (The Abomination
Vault), 1 FUMETTO/GRAPHIC NOVEL (comic GameStop 2009), 1 FUMETTO/COMIC
(Death's Door, Dark Horse), 2 ESPANSIONE (Argul's Tomb, The Abyssal
Forge).

### Decisioni di scope importanti

- **Darksiders IV incluso** come `imagePending`, senza sinossi,
  finestra d'uscita aprile 2027 - marzo 2028 (report trimestrale
  Embracer Group), non data puntuale. Annunciato da THQ Nordic il 7
  agosto 2026, sviluppo Gunfire Games, prima volta con tutti e quattro
  i Cavalieri giocabili nello stesso capitolo. Da specificare solo a
  uscita confermata: co-op o scelta singola dei 4 Cavalieri.
- **Artbook esclusi**: "The Art of Darksiders" e "The Art of Darksiders
  II" - nessuna fonte conferma contenuto narrativo (solo concept art),
  a differenza dello Zelda Secrets of the Zonai (lore testuale
  dichiarata). Revocabile con nuove prove.
- **"Antichrist Files" escluso**: titolo inesistente, non un media
  reale della saga.
- **Parallelismo narrativo DS2/DS3**: stesso arco temporale (prigionia
  di Guerra), punti di vista diversi (Morte/Furia). Gestito solo nel
  testo (campo `year` e apertura sinossi), nessun meccanismo di
  ramificazione.

### Correzione terminologica

Un refuso corretto: "incatenato a Il Guardiano" -> "incatenato al
Guardiano" nella sinossi IT di Darksiders (voce 4). Resto del testo
confermato: War/Death/Fury/Strife -> Guerra/Morte/Furia/Discordia,
Charred Council -> Concilio Bruciato, Nephilim invariato, Corruption ->
Corruzione, Well of Souls e Forge Lands invariati (nessuna fonte per
resa italiana), titoli dei media in inglese.

### Musica

#### Tracklist completa saga (prima volta, saga interamente nuova)

- **Proposta**: creare il campo `tracks` della saga (nuova, quindi
  inesistente fino ad ora) e popolarlo con una playlist di 7 brani, in
  ordine di fama/gradimento decrescente: "Darksiders Theme" (*Darksiders*,
  2010), "Fury's Theme" (*Darksiders III*), "The Maker's Theme"
  (*Darksiders II*), "Into Eternity" (*Darksiders II*), "War's Theme"
  (*Darksiders*), "The Corruption" (*Darksiders II*), "Death Brings Hope"
  (*Darksiders II*).
- **Origine**: Musicista.
- **Motivazione**: fama/gradimento reale di critica e community (VGMO
  su Darksiders 1, RPGFan su Darksiders II, Game Informer e
  dichiarazioni di Cris Velasco su "Fury's Theme"). Perimetro: i 4
  videogiochi con OST propria (Darksiders, Darksiders II incl.
  espansioni, Darksiders III); Darksiders IV escluso (imagePending),
  romanzo e fumetti fuori perimetro. Darksiders Genesis senza brano di
  rilievo comparabile, non rappresentato. Distribuzione: 2 tracce da
  Darksiders, 4 da Darksiders II, 1 da Darksiders III.
- **Data**: 2026-09-10 (sessione notturna, 2/notte 3).
- **Stato**: accettata nel merito, bloccata per asset mancante - tutte
  e 7 le tracce sono nuove per il sito, da caricare su R2. Il
  Programmatore crea comunque il campo `tracks: []`, vuoto in attesa
  dei file.

### Media aggiunti

Saga interamente nuova: 1 nuovo universo e 10 nuove voci (nessuna
gemella, nessuna voce STORIA), tutte inserite nella stessa sessione
notturna, 2026-09-10.

- Nuovo universo **Linea Temporale Darksiders** (`darksiders-genesis` ->
  `darksiders-4`, span 2009 - 2027/2028, 10 voci) - sessione notturna,
  2026-09-10.
- `darksiders-genesis` - Darksiders Genesis (VIDEOGIOCO, 2019) - voce a
  sé, prima voce della saga in ordine cronologico interno - sessione
  notturna, 2026-09-10.
- `darksiders-abomination-vault` - Darksiders: The Abomination Vault
  (ROMANZO, 2012) - voce a sé - sessione notturna, 2026-09-10.
- `darksiders-comic-2009` - Darksiders (GameStop Limited Edition Comic)
  (FUMETTO/GRAPHIC NOVEL, 2009) - voce a sé - sessione notturna,
  2026-09-10.
- `darksiders-1` - Darksiders (VIDEOGIOCO, 2010, include nota sulla
  Warmastered Edition 2016) - voce a sé - sessione notturna, 2026-09-10.
- `darksiders-2-deaths-door` - Darksiders II: Death's Door (FUMETTO/
  COMIC, miniserie Dark Horse, 2012) - voce a sé - sessione notturna,
  2026-09-10.
- `darksiders-2` - Darksiders II (VIDEOGIOCO, 2012, include nota sulla
  Deathinitive Edition 2015) - voce a sé - sessione notturna,
  2026-09-10.
- `darksiders-2-arguls-tomb` - Darksiders II: Argul's Tomb (ESPANSIONE,
  2012) - voce a sé - sessione notturna, 2026-09-10.
- `darksiders-2-abyssal-forge` - Darksiders II: The Abyssal Forge
  (ESPANSIONE, 2013) - voce a sé - sessione notturna, 2026-09-10.
- `darksiders-3` - Darksiders III (VIDEOGIOCO, 2018) - voce a sé -
  sessione notturna, 2026-09-10.
- `darksiders-4` - Darksiders IV (VIDEOGIOCO, in uscita aprile 2027 -
  marzo 2028 attesa, imagePending) - voce a sé, ultima voce della saga
  - sessione notturna, 2026-09-10.

### Note tecniche di sessione

Sezione eccezionale, aggiunta perché Darksiders è l'ultima saga del
turno (10/10): segnalazioni tecniche emerse durante il lavoro, utili in
futuro.

- **Guasto di rete**: Supervisore, Linguista e Musicista hanno avuto un
  guasto di rete sistematico su Darksiders - WebFetch bloccato
  (`EGRESS_BLOCKED`), WebSearch con tasso di fallimento alto (16/17 per
  il Linguista, circa 11 tentativi falliti per il Musicista prima di
  risultati reali). Le verifiche si sono appoggiate a coerenza interna e
  convenzioni consolidate; nessuna resa inventata, punti non
  verificabili segnalati come aperti. Limite ambientale, non di qualità
  del lavoro.
- **Punto aperto "Uriel"/"Uriele"**: l'angelo alleato in Darksiders
  (voce 4) potrebbe avere forma italiana tradizionale ("Uriele"), non
  verificabile per il guasto di rete. Lasciato "Uriel" come scritto
  dallo Scrittore. Da riverificare con fonte ufficiale (credits/
  sottotitoli italiani) - non blocca la pubblicazione.
- **Discrepanza in un report precedente** (non su Darksiders): un
  report "Xenoblade" affermava erroneamente che "Blood and Wine" (The
  Witcher 3) non avesse voce propria in `data.js` - la voce esiste
  (`witcher-3-blood-and-wine`, riga 7644). Da correggere nell'archivio
  report.

## Dead Space

Saga interamente nuova. Una delle 10 saghe individuate dal Project
Manager per il turno notturno 2/notte 3. Un solo universo, "Linea
Temporale Dead Space" (span 2214 – 2514), 13 voci in ordine cronologico
interno: 3 ROMANZO (Martyr, Catalyst - non Fallen Angel, quello è Deus
Ex), 3 FUMETTO (2008, Salvage, Liberation), 2 FILM D'ANIMAZIONE
(Downfall, Aftermath), 4 VIDEOGIOCO (Extraction, Dead Space, Dead Space
2, Dead Space 3), 1 VIDEOGIOCO MOBILE (Sabotage), 1 VIDEOGIOCO
(Ignition). Tutti e 13 i media inclusi, nessuna esclusione, nessuna
gemella (Salvage/Aftermath restano due vicende distinte, equipaggi ed
esiti diversi). Il remake 2023 è nota interna a `dead-space-1` (stesso
id), non voce a sé. DLC "Severed" nota interna a `dead-space-2`, DLC
"Awakened" nota interna a `dead-space-3`. "Dead Space: Sabotage" e
"Dead Space Mobile" sono lo stesso gioco - una sola voce
(`dead-space-sabotage`), nessun duplicato. `Catalyst` è ambientata
secoli prima del gioco originale (~2294 contro 2508): la sua posizione
come seconda voce (dopo Martyr) è corretta.

### Correzione terminologica

"Marker" → "Marchio" (Marchio Nero/Marchio Rosso, plurale "Marchi")
resa italiana ufficiale, applicata in tutte le sinossi/blurb IT; testo
EN resta "Marker"/"Black Marker"/"Red Marker".

### Musica

#### Tracklist completa saga (prima volta, saga interamente nuova)

- **Proposta**: creare il campo `tracks` della saga (nuova, quindi
  inesistente fino ad ora) e popolarlo con una playlist di 7 brani, in
  ordine di fama/gradimento decrescente: "Dead Space Theme" (*Dead
  Space*, 2008), "Welcome Aboard the U.S.G. Ishimura" (*Dead Space*,
  2008), "Twinkle, Twinkle, Little Star" (Dead Space Version) (*Dead
  Space*, 2008), "Lacrimosa" (*Dead Space 2*), "Entering Zero-G" (*Dead
  Space*, 2008), "Titan Station Elementary" (*Dead Space 2*), "The
  Ascent" (*Dead Space 3*).
- **Origine**: Musicista.
- **Motivazione**: fama/gradimento reale di critica e community.
  Perimetro: i 6 videogiochi con OST propria (Extraction, Dead
  Space/Remake 2023, Sabotage, Ignition, Dead Space 2, Dead Space 3);
  romanzi, fumetti e film d'animazione fuori perimetro. Compositore
  principale Jason Graves (co-compositore James Hannigan su Dead Space
  3). Correzione di fatto: la OST di Dead Space (2008) ha vinto due
  premi BAFTA (Original Score e Use of Audio), non solo nomination.
  Distribuzione: 4 tracce da Dead Space (2008), 2 da Dead Space 2, 1 da
  Dead Space 3 - nessun brano standout documentato per Extraction,
  Sabotage o Ignition.
- **Data**: 2026-09-10 (sessione notturna, 2/notte 3).
- **Stato**: accettata nel merito, bloccata per asset mancante - tutte
  e 7 le tracce sono nuove per il sito, da caricare su R2. Il
  Programmatore crea comunque il campo `tracks: []`, vuoto in attesa
  dei file.

### Media aggiunti

Saga interamente nuova: 1 nuovo universo e 13 nuove voci (nessuna
gemella, nessuna voce STORIA), tutte inserite nella stessa sessione
notturna, 2026-09-10.

- Nuovo universo **Linea Temporale Dead Space** (`dead-space-martyr` →
  `dead-space-3`, span 2214 - 2514, 13 voci) - sessione notturna,
  2026-09-10.
- `dead-space-martyr` - Dead Space: Martyr (ROMANZO, 2010) - voce a sé,
  prima voce della saga - sessione notturna, 2026-09-10.
- `dead-space-catalyst` - Dead Space: Catalyst (ROMANZO, 2012) - voce a
  sé, ambientata secoli prima del gioco originale (~2294) - sessione
  notturna, 2026-09-10.
- `dead-space-comic-2008` - Dead Space (fumetto, 2008) (FUMETTO) - voce
  a sé - sessione notturna, 2026-09-10.
- `dead-space-extraction` - Dead Space: Extraction (VIDEOGIOCO,
  2009/porting PS3 2010) - voce a sé - sessione notturna, 2026-09-10.
- `dead-space-downfall` - Dead Space: Downfall (FILM D'ANIMAZIONE,
  2008) - voce a sé - sessione notturna, 2026-09-10.
- `dead-space-1` - Dead Space (VIDEOGIOCO, 2008, include nota sul
  Remake 2023) - voce a sé - sessione notturna, 2026-09-10.
- `dead-space-salvage` - Dead Space: Salvage (FUMETTO, 2010) - voce a
  sé - sessione notturna, 2026-09-10.
- `dead-space-aftermath` - Dead Space: Aftermath (FILM D'ANIMAZIONE,
  2011) - voce a sé - sessione notturna, 2026-09-10.
- `dead-space-sabotage` - Dead Space: Sabotage (VIDEOGIOCO MOBILE,
  2011, distribuito anche come "Dead Space Mobile", stesso gioco) -
  voce a sé - sessione notturna, 2026-09-10.
- `dead-space-ignition` - Dead Space: Ignition (VIDEOGIOCO, 2010) -
  voce a sé - sessione notturna, 2026-09-10.
- `dead-space-2` - Dead Space 2 (VIDEOGIOCO, 2011, include nota sul
  DLC Severed) - voce a sé - sessione notturna, 2026-09-10.
- `dead-space-liberation` - Dead Space: Liberation (FUMETTO, 2013) -
  voce a sé - sessione notturna, 2026-09-10.
- `dead-space-3` - Dead Space 3 (VIDEOGIOCO, 2013, include nota sul
  DLC Awakened) - voce a sé, ultima voce della saga - sessione
  notturna, 2026-09-10.

## Deus Ex

Saga interamente nuova. Una delle 10 saghe individuate dal Project
Manager per il turno notturno 2/notte 3. Un solo universo, "Linea
Temporale Deus Ex", 10 voci in ordine cronologico interno (modello
Metal Gear Solid): 4 ROMANZO di James Swallow (Fallen Angel, Icarus
Effect, Hard Line, Black Light), 4 VIDEOGIOCO (Human Revolution,
Mankind Divided, Deus Ex, Invisible War), 1 VIDEOGIOCO MOBILE (The
Fall), 1 FUMETTO (Children's Crusade).

### Musica

#### Tracklist completa saga (prima volta, saga interamente nuova)

- **Proposta**: creare il campo `tracks` della saga (nuova, quindi
  inesistente fino ad ora) e popolarlo con una playlist di 7 brani, in
  ordine di fama/gradimento decrescente: "Icarus" (Main Theme) (*Deus
  Ex: Human Revolution*), "Main Title" ("So It Begins") (*Deus Ex*,
  2000), "Sarif Industries" (tema HQ/menu) (*Deus Ex: Human
  Revolution*), "UNATCO Theme" (*Deus Ex*, 2000), "TF29" (*Deus Ex:
  Mankind Divided*), "Main Theme" (*Deus Ex: The Fall*), "Night
  Assignment" (*Deus Ex: Invisible War*).
- **Origine**: Musicista.
- **Motivazione**: fama/gradimento reale di critica e community.
  Perimetro: i 5 videogiochi con OST propria (Deus Ex 2000, Invisible
  War, Human Revolution incl. The Missing Link, The Fall, Mankind
  Divided incl. A Criminal Past/System Rift/Breach); romanzi e fumetto
  fuori perimetro. Distribuzione: 2 tracce da Deus Ex 2000, 2 da Human
  Revolution, 1 da Mankind Divided, 1 da The Fall, 1 da Invisible War.
- **Data**: 2026-09-10 (sessione notturna, 2/notte 3).
- **Stato**: accettata nel merito, bloccata per asset mancante - tutte
  e 7 le tracce sono nuove per il sito, da caricare su R2. Il
  Programmatore crea comunque il campo `tracks: []`, vuoto in attesa
  dei file.

### Media aggiunti

Saga interamente nuova: 1 nuovo universo e 10 nuove voci (nessuna
gemella, nessuna voce STORIA), tutte inserite nella stessa sessione
notturna, 2026-09-10.

- Nuovo universo **Linea Temporale Deus Ex** (`deus-ex-fallen-angel` →
  `deus-ex-invisible-war`, span circa 2025 - 2072, 10 voci) - sessione
  notturna, 2026-09-10.
- `deus-ex-fallen-angel` - Deus Ex: Fallen Angel (ROMANZO, 2013) - voce
  a sé, prima voce della saga - sessione notturna, 2026-09-10.
- `deus-ex-icarus-effect` - Deus Ex: The Icarus Effect (ROMANZO, 2011) -
  voce a sé - sessione notturna, 2026-09-10.
- `deus-ex-human-revolution` - Deus Ex: Human Revolution (VIDEOGIOCO,
  2011, include nota su The Missing Link) - voce a sé - sessione
  notturna, 2026-09-10.
- `deus-ex-the-fall` - Deus Ex: The Fall (VIDEOGIOCO MOBILE, 2013) -
  voce a sé - sessione notturna, 2026-09-10.
- `deus-ex-hard-line` - Deus Ex: Hard Line (ROMANZO, 2016) - voce a sé -
  sessione notturna, 2026-09-10.
- `deus-ex-black-light` - Deus Ex: Black Light (ROMANZO, 2016) - voce a
  sé - sessione notturna, 2026-09-10.
- `deus-ex-childrens-crusade` - Deus Ex: Children's Crusade (FUMETTO,
  2016) - voce a sé - sessione notturna, 2026-09-10.
- `deus-ex-mankind-divided` - Deus Ex: Mankind Divided (VIDEOGIOCO,
  2016, include note su A Criminal Past, System Rift e Deus Ex: Breach)
  - voce a sé - sessione notturna, 2026-09-10.
- `deus-ex` - Deus Ex (VIDEOGIOCO, 2000, include nota sullo stato
  sospeso del Remastered) - voce a sé - sessione notturna, 2026-09-10.
- `deus-ex-invisible-war` - Deus Ex: Invisible War (VIDEOGIOCO, 2003) -
  voce a sé, ultima voce della saga - sessione notturna, 2026-09-10.

### Decisioni di scope e correzioni di rilievo

- **Deus Ex GO** (spin-off mobile puzzle, 2016): escluso dalla saga.
- **Deus Ex: Breach**: nota narrativa dentro `deus-ex-mankind-divided`
  (conseguenza del finale di System Rift), non voce a sé.
- **Deus Ex Remastered** (Aspyr): non è uscito - annuncio per il 5
  febbraio 2026, rinviato a tempo indeterminato da dicembre 2025 dopo
  reazioni negative sui nuovi asset grafici, preordini rimborsati. Nota
  di stato dentro `deus-ex` (2000), non voce a sé, non in releaseYear.
- Tutti e 4 i romanzi di James Swallow (Fallen Angel, Icarus Effect,
  Hard Line, Black Light) inclusi come voci a sé.
- **Correzione fattuale** (errore presente sia IT che EN): Deus Ex
  (2000) ha tre finali canonici (Helios, Illuminati, New Dark Age/Tong),
  non quattro. Rimosso ogni riferimento a un presunto quarto finale
  (alleanza con Bob Page/MJ12), mai implementato; l'unico "quarto" nei
  file è l'easter egg non canonico "Dance Party", raggiungibile solo via
  cheat, non citato in sinossi.

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

## Diablo

Saga interamente nuova. Esisteva una bozza in un vecchio branch mai
arrivato su main (blurb troncato a metà frase, probabile blacklist
storica su Diablo): Sakrem ha rifiutato di riciclarla, chiesto di
rifare da zero con la catena completa - lavoro indipendente da quella
bozza. Un solo universo, **Sanctuarium** (id `sanctuary`), 25 voci (23
media reali + 2 voci STORIA), span 1996 - 2026, palette narrativa a 4
colori.

### Musica

#### Tracklist completa saga (prima volta, saga interamente nuova)

- **Proposta**: creare il campo `tracks` della saga (nuova, quindi
  inesistente fino ad ora) e popolarlo con una playlist di 7 brani, in
  ordine di fama/gradimento decrescente: "Tristram" (*Diablo*), "Rogue
  Encampment" (*Diablo II*), "Harrogath" (*Diablo II: Lord of
  Destruction*), "Lut Gholein" (*Diablo II*), "Diablo III Overture"
  (*Diablo III*), "Diablo IV Main Theme" (*Diablo IV*), "Leah's Theme"
  (*Diablo III*).
- **Origine**: Musicista.
- **Motivazione**: prima playlist della saga, concentrata su Diablo
  I-IV (nessun brano da Diablo Immortal, Reaper of Souls, Vessel of
  Hatred o Lord of Hatred: nessuna fama paragonabile nelle fonti).
  "Tristram" è il brano più iconico della saga - riconosciuto dal
  pubblico del BlizzCon 2008 dai soli primi accordi, prima
  dell'annuncio di Diablo III.
- **Data**: 2026-09-11.
- **Stato**: accettata nel merito, bloccata per asset mancante - tutte
  e 7 le tracce sono nuove per il sito, da caricare su R2. Il
  Programmatore crea comunque il campo `tracks: []`, vuoto in attesa
  dei file.

### Media aggiunti

Saga interamente nuova: 1 nuovo universo e 25 nuove voci (23 media
reali + 2 voci STORIA, nessuna gemella), tutte inserite nella stessa
sessione, 2026-09-11.

- Nuovo universo **Sanctuarium** (`sin-war-birthright` → `a-new-tale`,
  span 1996 - 2026, 25 voci) - sessione 2026-09-11.
- `sin-war-birthright` - La Guerra del Peccato: Diritto di Nascita
  (ROMANZO, 2006) - voce a sé, prima voce della saga - sessione
  2026-09-11.
- `sin-war-scales` - La Guerra del Peccato: Squame di Serpente
  (ROMANZO, 2007) - voce a sé - sessione 2026-09-11.
- `sin-war-veiled-prophet` - La Guerra del Peccato: Il Profeta Velato
  (ROMANZO, 2007, include nota sulla novella Demonsbane) - voce a sé -
  sessione 2026-09-11.
- `dark-exile-horadrim` - VOCE STORIA "L'Esilio Oscuro e la Fondazione
  degli Horadrim" - sessione 2026-09-11.
- `diablo-1` - Diablo (VIDEOGIOCO, 1996, include nota su Book of Adria:
  A Diablo Bestiary) - voce a sé - sessione 2026-09-11.
- `black-road` - The Black Road (ROMANZO, 2002) - voce a sé - sessione
  2026-09-11.
- `legacy-of-blood` - Eredità di Sangue (ROMANZO, 2001) - voce a sé -
  sessione 2026-09-11.
- `diablo-2` - Diablo II (VIDEOGIOCO, 2000) - voce a sé - sessione
  2026-09-11.
- `lord-of-destruction` - Diablo II: Lord of Destruction (ESPANSIONE,
  2001, include nota su Diablo II: Resurrected 2021) - voce a sé -
  sessione 2026-09-11.
- `kingdom-of-shadow` - The Kingdom of Shadow (ROMANZO, 2002) - voce a
  sé, riposizionata dopo Lord of Destruction (correzione del
  Supervisore rispetto alla ricerca iniziale, che la collocava prima) -
  sessione 2026-09-11.
- `moon-of-the-spider` - Moon of the Spider (ROMANZO, 2005) - voce a
  sé, riposizionata dopo Lord of Destruction (stessa correzione) -
  sessione 2026-09-11.
- `sword-of-justice` - Diablo III: La Spada della Giustizia (FUMETTO,
  2011-2013) - voce a sé - sessione 2026-09-11.
- `diablo-immortal` - Diablo Immortal (VIDEOGIOCO, 2022) - voce a sé -
  sessione 2026-09-11.
- `diablo-3-the-order` - Diablo III: L'Ordine (ROMANZO, 2012) - voce a
  sé - sessione 2026-09-11.
- `diablo-3` - Diablo III (VIDEOGIOCO, 2012, include note su Book of
  Cain e Book of Tyrael) - voce a sé - sessione 2026-09-11.
- `storm-of-light` - Diablo III: Tempesta di Luce (ROMANZO, 2014) -
  voce a sé - sessione 2026-09-11.
- `reaper-of-souls` - Diablo III: Reaper of Souls (ESPANSIONE, 2014,
  include note su Rise of the Necromancer 2017 e Ultimate Evil
  Edition/Eternal Collection) - voce a sé - sessione 2026-09-11.
- `fifty-years-of-ruin` - VOCE STORIA "I Cinquant'anni di Rovina" -
  sessione 2026-09-11.
- `by-three-they-come` - Diablo IV: By Three They Come
  (CORTOMETRAGGIO, 2019) - voce a sé - sessione 2026-09-11.
- `tales-from-horadric-library` - Diablo: Tales from the Horadric
  Library (RACCOLTA DI RACCONTI, 2022) - voce a sé - sessione
  2026-09-11.
- `diablo-4` - Diablo IV (VIDEOGIOCO, 2023, include nota su Book of
  Lorath) - voce a sé - sessione 2026-09-11.
- `vessel-of-hatred` - Diablo IV: Vessel of Hatred (ESPANSIONE, 2024,
  include note su Book of Prava e Ballad of the Blood) - voce a sé -
  sessione 2026-09-11.
- `dawn-of-hatred` - Diablo: Dawn of Hatred (FUMETTO, 2025-2026) - voce
  a sé - sessione 2026-09-11.
- `lord-of-hatred` - Diablo IV: Lord of Hatred (ESPANSIONE, 2026) -
  voce a sé, conclusione della trilogia di Mefisto - sessione
  2026-09-11.
- `a-new-tale` - Diablo: A New Tale (VOCE COLLETTIVA, 2023-2026) - voce
  a sé, prima voce collettiva pubblicata sul sito con questo tipo -
  ultima voce della saga - sessione 2026-09-11.

## Dragon Age

Saga interamente nuova. Ultima di 5 saghe di questo batch (Uncharted,
The Last of Us, Mafia, Hitman, Dragon Age). Un solo universo, "Thedas",
24 voci in ordine cronologico narrativo, 11 DLC come note dentro 3
sinossi (Origins: 6, Dragon Age II: 3, Inquisition: 2). Nessuna
gemella, nessuna voce ombrello, nessuna VOCE STORIA (lo Storico non ne
ha ritenuta necessaria alcuna).

### Musica

#### Tracklist completa saga (prima volta, saga interamente nuova)

- **Proposta**: creare il campo `tracks` della saga (nuova, quindi
  inesistente fino ad ora) e popolarlo con una playlist di 7 brani, in
  ordine di fama/gradimento decrescente: "Dragon Age Inquisition
  Theme" (*Dragon Age: Inquisition*), "I Am the One" (*Dragon Age:
  Origins*), "The Dawn Will Come" (*Dragon Age: Inquisition*),
  "Leliana's Song (In Uthenera)" (*Dragon Age: Origins*), "Dragon Age
  2 Main Theme" (*Dragon Age II*), "Dragon Age: The Veilguard Main
  Theme" (*Dragon Age: The Veilguard*), "Sera Was Never" (*Dragon Age:
  Inquisition*).
- **Origine**: Musicista.
- **Motivazione**: prima playlist della saga, fama/gradimento reale
  (ascolti Spotify, premi di settore per "I Am the One", penetrazione
  culturale/cover fan-made per "The Dawn Will Come" e "Sera Was
  Never"), a copertura di Origins, Dragon Age II, Inquisition e The
  Veilguard. Nessuna traccia da Awakening (nessun brano comparabile) né
  da media senza gioco proprio (romanzi, fumetti, Absolution).
- **Data**: 2026-09-11.
- **Stato**: accettata nel merito, bloccata per asset mancante - tutte
  e 7 le tracce sono nuove per il sito, da caricare su R2. Il
  Programmatore crea comunque il campo `tracks: []`, vuoto in attesa
  dei file.

### Media aggiunti

Saga interamente nuova: 1 nuovo universo e 24 nuove voci (nessuna
gemella), tutte inserite nella stessa sessione, 2026-09-11.

- Nuovo universo **Thedas** (`the-stolen-throne` → `the-veilguard`,
  span 8:96 Blessed Age - 9:52 Dragon Age, 24 voci) - sessione
  2026-09-11.
- `the-stolen-throne` - Dragon Age: Il Trono Usurpato (ROMANZO) - voce
  a sé, prima voce della saga - sessione 2026-09-11.
- `the-calling` - Dragon Age: La Chiamata (ROMANZO) - voce a sé -
  sessione 2026-09-11.
- `dawn-of-the-seeker` - Dragon Age: Dawn of the Seeker (FILM ANIME) -
  voce a sé - sessione 2026-09-11.
- `da-origins` - Dragon Age: Origins (VIDEOGIOCO, include 6 note DLC:
  Stone Prisoner, Warden's Keep, Return to Ostagar, Leliana's Song,
  Golems of Amgarrak, Witch Hunt) - voce a sé - sessione 2026-09-11.
- `da-awakening` - Dragon Age: Origins - Awakening (VIDEOGIOCO) - voce
  a sé - sessione 2026-09-11.
- `dragon-age-2` - Dragon Age II (VIDEOGIOCO, include 3 note DLC:
  Exiled Prince, Legacy, Mark of the Assassin) - voce a sé - sessione
  2026-09-11.
- `da-redemption` - Dragon Age: Redemption (SERIE WEB, primo uso di
  questo tipo sul sito) - voce a sé - sessione 2026-09-11.
- `the-silent-grove` - Dragon Age: The Silent Grove (FUMETTO) - voce a
  sé - sessione 2026-09-11.
- `those-who-speak` - Dragon Age: Those Who Speak (FUMETTO) - voce a
  sé - sessione 2026-09-11.
- `until-we-sleep` - Dragon Age: Until We Sleep (FUMETTO) - voce a sé
  - sessione 2026-09-11.
- `asunder` - Dragon Age: Asunder (ROMANZO) - voce a sé - sessione
  2026-09-11.
- `the-masked-empire` - Dragon Age: L'Impero delle Maschere (ROMANZO)
  - voce a sé - sessione 2026-09-11.
- `magekiller` - Dragon Age: Assassini di Maghi (FUMETTO) - voce a sé
  - sessione 2026-09-11.
- `da-inquisition` - Dragon Age: Inquisition (VIDEOGIOCO, include 2
  note DLC: Jaws of Hakkon, The Descent) - voce a sé - sessione
  2026-09-11.
- `last-flight` - Dragon Age: Last Flight (ROMANZO) - voce a sé -
  sessione 2026-09-11.
- `trespasser` - Dragon Age: Inquisition - Trespasser (VIDEOGIOCO) -
  voce a sé - sessione 2026-09-11.
- `da-absolution` - Dragon Age: Absolution (SERIE ANIMATA) - voce a sé
  - sessione 2026-09-11.
- `knight-errant` - Dragon Age: Il Cavaliere Errante (FUMETTO) - voce
  a sé - sessione 2026-09-11.
- `da-deception` - Dragon Age: Inganno (FUMETTO) - voce a sé -
  sessione 2026-09-11.
- `blue-wraith` - Dragon Age: Lo Spettro Blu (FUMETTO) - voce a sé -
  sessione 2026-09-11.
- `dark-fortress` - Dragon Age: L'Oscura Fortezza (FUMETTO) - voce a
  sé - sessione 2026-09-11.
- `tevinter-nights` - Dragon Age: Tevinter Nights (ANTOLOGIA, primo
  uso di questo tipo sul sito) - voce a sé - sessione 2026-09-11.
- `the-missing` - Dragon Age: Scomparso (FUMETTO) - voce a sé -
  sessione 2026-09-11.
- `the-veilguard` - Dragon Age: The Veilguard (VIDEOGIOCO) - voce a
  sé, ultima voce della saga - sessione 2026-09-11.

## Dragon Quest

### In sospeso - immagini mancanti

Elenco di lavoro, non una proposta da decidere: le voci sotto hanno già
il campo `image` in `data.js` (URL segnaposto) ma senza file caricato
su R2. Quando Sakrem carica il file e passa il nome, la voce esce
dall'elenco.

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
- **Stato**: confermato e applicato, puro riordino. Il Musicista ha
  verificato possibili tracce da Dragon Quest VII o Dragon Quest
  Builders 2 (nuovi titoli di questo ciclo) ma nessuna abbastanza
  iconica: nessuna traccia aggiunta.

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

## The Elder Scrolls

### In sospeso - lavoro rimandato a un ciclo futuro

Non una proposta da decidere (nessuna inclusione ancora proposta):
promemoria di scope per una sessione futura dedicata alla saga.

- **Nota di scope**: via di mezzo tra rattoppo minimo e rifacimento
  totale - inclusi Oblivion Remastered (scoperto durante la revisione),
  i DLC classici annotati (Knights of the Nine, Shivering Isles,
  Dawnguard, Dragonborn) e la nuova voce a sé "blades". Rimandati a un
  ciclo futuro: *Battlespire*, *Redguard*, romanzi di Greg Keyes (*The
  Elder Scrolls: The Infernal City* e seguiti).
- **Data**: 2026-09-09 (richiamo mirato, turno notturno 2, 5ª saga di
  11).
- **Stato**: non deciso, scope limitato in questo ciclo, da riprendere
  in futuro.

### Musica

#### Tracklist completa saga (prima volta, saga interamente nuova)

- **Proposta**: creare il campo `tracks` della saga (attualmente `[]`,
  mai popolato) e popolarlo con una playlist di 7 brani: Dragonborn
  (*Skyrim*), Nerevar Rising (*Morrowind*), Auriel's Ascension
  (*Oblivion*), Secunda (*Skyrim*), The Wings of Kynareth (*Oblivion*),
  Watch the Skies (*Skyrim*), Beauty of Dawn (*The Elder Scrolls
  Online*).
- **Origine**: Musicista.
- **Motivazione**: prima playlist della saga, fama/gradimento
  decrescente su più fonti; nessuna coppia di tracce dello stesso gioco
  adiacente.
- **Data**: 2026-09-09 (richiamo mirato, turno notturno 2).
- **Stato**: accettata nel merito, bloccata per asset mancante - tutte
  e 7 le tracce sono nuove per il sito, da caricare su R2. Il
  Programmatore crea comunque il campo `tracks: []`, vuoto in attesa
  dei file.

### Media aggiunti

Nessun nuovo universo (unico universo "main"/Tamriel già esistente): una
sola nuova voce.

- `blades` - The Elder Scrolls: Blades (VIDEOGIOCO, 2019, chiusura
  server: 2026) - voce a sé, inserita cronologicamente tra `oblivion` e
  `skyrim` - richiamo mirato, turno notturno 2, 2026-09-09.

## Fallout

### Immagini/audio mancanti

Sezione di lavoro: elenco dei file fisici ancora da caricare su R2 per
questo ciclo.

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
- **Motivazione**: prima playlist della saga, brani iconici della
  OST/colonna sonora in-game, copertura equilibrata dei capitoli.
- **Data**: 2026-09-08.
- **Stato**: accettata nel merito, bloccata per asset mancante - tutti
  e 7 i file da caricare su R2.

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
- **Motivazione**: brani più iconici della saga, copertura di più
  capitoli, prima playlist mai popolata.
- **Data**: 2026-09-08 (sessione notturna).
- **Stato**: accettata nel merito, bloccata per asset mancante - tutti
  e 7 i file sono nuovi per il sito, da caricare su R2.

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
- **Motivazione**: brani più iconici della saga, copertura di più
  universi/capitoli, prima playlist mai popolata.
- **Data**: 2026-09-08 (sessione notturna).
- **Stato**: accettata nel merito, bloccata per asset mancante - tutti
  e 7 i file sono nuovi per il sito, da caricare su R2.

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
- **Motivazione**: brani più iconici della saga, copertura di più
  capitoli, prima playlist mai popolata.
- **Data**: 2026-09-08 (sessione notturna).
- **Stato**: accettata nel merito, bloccata per asset mancante - tutti
  e 7 i file sono nuovi per il sito, da caricare su R2.

Nota: nessuna sezione "Media aggiunti" per Gears of War in questa
sessione - solo una correzione urgente su `e-day` (già pubblicata,
downgrade a titolo non ancora uscito) e una nota alla sinossi esistente
di `gears-1`, mai un nuovo media (vedi report una tantum, punto 4).

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
- **Motivazione**: brani più iconici della saga, copertura di più
  capitoli, prima playlist mai popolata.
- **Data**: 2026-09-08 (sessione notturna).
- **Stato**: accettata nel merito, bloccata per asset mancante - tutti
  e 7 i file sono nuovi per il sito, da caricare su R2.

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
- **Motivazione**: prima playlist della saga, brani reali delle radio
  in-game, copertura equilibrata dei capitoli.
- **Data**: 2026-09-09 (sessione notturna, 6/12).
- **Stato**: accettata nel merito, bloccata per asset mancante - tutti
  e 7 i file sono nuovi per il sito, da caricare su R2. Il
  Programmatore crea comunque il campo `tracks: []`, vuoto in attesa
  dei file.

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
- **Motivazione**: brani più iconici della saga, copertura di più
  capitoli, prima playlist mai popolata.
- **Data**: 2026-09-09 (sessione notturna, 7/12).
- **Stato**: accettata nel merito, bloccata per asset mancante - tutti
  e 7 i file sono nuovi per il sito, da caricare su R2.

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

## Hitman

### Musica

#### Tracklist completa saga (prima volta, saga interamente nuova)

- **Proposta**: creare il campo `tracks` della saga (nuova, quindi
  inesistente fino ad ora) e popolarlo con una playlist di 7 brani, in
  ordine di fama/gradimento decrescente: Ave Maria (*Hitman: Blood
  Money*), Main Title (*Hitman 2: Silent Assassin*), World of
  Assassination (*Hitman*, 2016), Main Title (*Hitman: Codename 47*),
  White Room & Main Title (*Hitman: Contracts*), The Showstopper
  (*Hitman*, 2016), Apex Predator (*Hitman 3*).
- **Origine**: Musicista.
- **Motivazione**: prima playlist della saga, temi più iconici a
  copertura di più capitoli (Jesper Kyd per la tetralogia classica,
  Niels Bye Nielsen per la trilogia World of Assassination). Scartata
  "Requiem for a Tower": non composto per Hitman, proviene dal trailer
  de Il Signore degli Anelli - Le Due Torri (2002).
- **Data**: 2026-09-11.
- **Stato**: accettata nel merito, bloccata per asset mancante - tutte
  e 7 le tracce sono nuove per il sito, da caricare su R2. Il
  Programmatore crea comunque il campo `tracks: []`, vuoto in attesa
  dei file.

### Media aggiunti

Saga interamente nuova: 1 nuovo universo e 13 nuove voci (12 con
sinossi + 1 imagePending, nessuna gemella, nessuna voce STORIA), tutte
inserite nella stessa sessione, 2026-09-11.

- Nuovo universo **Agent 47** (`birth-of-the-hitman` →
  `hitman-board-game`, 13 voci) - sessione 2026-09-11.
- `birth-of-the-hitman` - Agent 47: Birth of the Hitman (FUMETTO,
  2017-2018) - voce a sé, prima voce della saga (prequel) - sessione
  2026-09-11.
- `codename-47` - Hitman: Codename 47 (VIDEOGIOCO, 2000) - voce a sé -
  sessione 2026-09-11.
- `silent-assassin` - Hitman 2: Silent Assassin (VIDEOGIOCO, 2002) -
  voce a sé - sessione 2026-09-11.
- `enemy-within` - Hitman: Enemy Within (ROMANZO, 2007) - voce a sé,
  ambientata tra Silent Assassin e Contracts - sessione 2026-09-11.
- `contracts` - Hitman: Contracts (VIDEOGIOCO, 2004) - voce a sé -
  sessione 2026-09-11.
- `blood-money` - Hitman: Blood Money (VIDEOGIOCO, 2006, nota porting
  "Blood Money — Reprisal" 2023 nel campo releaseYear) - voce a sé -
  sessione 2026-09-11.
- `damnation` - Hitman: Damnation (ROMANZO, 2012) - voce a sé,
  ambientata tra Blood Money e Absolution - sessione 2026-09-11.
- `absolution` - Hitman: Absolution (VIDEOGIOCO, 2012) - voce a sé -
  sessione 2026-09-11.
- `hitman-2016` - Hitman (2016) - Stagione 1 (VIDEOGIOCO) - voce a sé,
  include note su Patient Zero (2018) e sulla chiusura 2026 (The
  Harbinger/Patient Zero Requiem) - sessione 2026-09-11.
- `hitman-2` - Hitman 2 (VIDEOGIOCO, 2018) - Stagione 2 - voce a sé -
  sessione 2026-09-11.
- `hitman-3` - Hitman 3 / Hitman World of Assassination (VIDEOGIOCO,
  2021, rebrand 2023) - voce a sé, include nota su Freelancer mode
  (2023) - sessione 2026-09-11.
- `hitman-sniper-shadows` - Hitman Sniper: The Shadows (VIDEOGIOCO
  MOBILE, 2022) - voce a sé, ultima voce reale della saga - sessione
  2026-09-11.
- `hitman-board-game` - Hitman: The Board Game (GIOCO DA TAVOLO,
  imagePending, nessuna sinossi, consegna Wave 1 stimata H1 2027) -
  voce a sé, ultima voce della saga - sessione 2026-09-11.

## Horizon

Saga interamente nuova, una delle 10 individuate dal Project Manager
per il turno notturno 2/notte 3.

### Musica

#### Tracklist completa saga (prima volta, saga interamente nuova)

- **Proposta**: creare il campo `tracks` della saga (nuova, quindi
  inesistente fino ad ora) e popolarlo con una playlist di 7 brani, in
  ordine di fama/gradimento decrescente: "Aloy's Theme" (*Horizon Zero
  Dawn*), "The Turning Horizon" (*Horizon Zero Dawn*, Launch Trailer),
  "Aloy's Theme - Forbidden West" (*Horizon Forbidden West*, tema del
  menu principale), "Whatever Comes" (*Horizon Forbidden West*, Story
  Trailer), "Into The Frozen Wilds" (*Horizon Zero Dawn: The Frozen
  Wilds*), "Trinity" (*Horizon Forbidden West*), "To the Burning
  Shores" (*Horizon Forbidden West: Burning Shores*).
- **Origine**: Musicista.
- **Motivazione**: prima playlist della saga, fama/gradimento reale
  (recensioni di settore, uso promozionale in trailer/menu, impatto
  critico), non gusto personale. Horizon Call of the Mountain (VR
  standalone, compositori diversi dal team principale Joris de
  Man/The Flight/Niels van der Leest) escluso per merito: nessuna
  traccia con fama comparabile. Liberation, Sunhawk e Seeds of
  Rebellion (fumetti e gioco da tavolo) esclusi a monte, nessuna
  colonna sonora propria.
- **Data**: 2026-09-10 (sessione notturna, 3/3 della notte).
- **Stato**: accettata nel merito, bloccata per asset mancante - tutte
  e 7 le tracce sono nuove per il sito, da caricare su R2. Il
  Programmatore crea comunque il campo `tracks: []`, vuoto in attesa
  dei file.

### Media aggiunti

Saga interamente nuova: 2 nuovi universi e 6 nuove voci (nessuna
gemella, nessuna voce STORIA), tutte inserite nella stessa sessione
notturna, 2026-09-10.

- Nuovo universo **Linea Principale** (`horizon-zero-dawn` →
  `horizon-forbidden-west`, span 2017 – 2025, 5 voci: 2 videogiochi + 2
  fumetti + 1 gioco da tavolo) - sessione notturna, 2026-09-10.
- Nuovo universo **Adattamento Live-Action** (`horizon-film-2027`, 1
  voce) - sessione notturna, 2026-09-10.
- `horizon-zero-dawn` - Horizon Zero Dawn (VIDEOGIOCO, 2017, include
  note su The Frozen Wilds e su Horizon Call of the Mountain, quest'ultimo
  incluso solo come nota di collocazione narrativa, non come voce a sé
  né come traccia musicale) - voce a sé, prima voce della saga -
  sessione notturna, 2026-09-10.
- `liberation` - Horizon Zero Dawn: Liberazione (FUMETTO, 2021-22,
  titolo italiano Panini) - voce a sé, innestata nella trama di
  `horizon-zero-dawn` (schema Priority: Hagalaz) - sessione notturna,
  2026-09-10.
- `sunhawk` - Horizon Zero Dawn: Il Falcodoro (FUMETTO, 2020, titolo
  italiano Panini) - voce a sé - sessione notturna, 2026-09-10.
- `seeds-of-rebellion` - Horizon Forbidden West: Seeds of Rebellion
  (GIOCO DA TAVOLO, 2025, Kickstarter 2023) - voce a sé, unica voce da
  gioco da tavolo della saga, inclusa **solo** perché porta una
  campagna narrativa propria in tredici capitoli scritta in
  collaborazione diretta con il Narrative Team di Guerrilla Games -
  sessione notturna, 2026-09-10.
- `horizon-forbidden-west` - Horizon Forbidden West (VIDEOGIOCO, 2022,
  include nota su Burning Shores) - voce a sé, ultima voce di Linea
  Principale - sessione notturna, 2026-09-10.
- `horizon-film-2027` - Horizon (Film) (LIVE ACTION, in uscita 2027,
  data esatta non annunciata, imagePending) - voce a sé, unica voce del
  nuovo universo Adattamento Live-Action - sessione notturna,
  2026-09-10.

### Decisioni di scope importanti

- **LEGO Horizon Adventures**: escluso, non canonico.
- **"Horizon 3"**: escluso, nessun annuncio ufficiale al momento della
  stesura.
- **Horizon Hunters Gathering**: escluso per stato instabile del
  progetto. **Da ricontrollare dopo dicembre 2026.**
- **Horizon Zero Dawn: The Board Game + The Heart of the Nora**:
  esclusi, nessun contenuto narrativo canonico proprio (a differenza di
  Seeds of Rebellion, che ha una campagna narrativa dedicata).
- **Art of Horizon Zero Dawn / Art of Horizon Forbidden West**: esclusi,
  artbook senza contenuto narrativo.

## Kingdom Hearts

### In sospeso - immagini mancanti

Elenco di lavoro, non una proposta da decidere. La gemella
`bbs02-manga` (unica delle 6 gemelle manga applicata in questo ciclo,
vedi sotto per le altre 5) è priva di copertina su R2. Quando Sakrem
carica il file e passa il nome, la voce esce dall'elenco.

1. `bbs02-manga` - Kingdom Hearts 0.2 Birth by Sleep -A Fragmentary
   Passage- (manga)

- **Stato**: in attesa che Sakrem carichi il file su R2 e ne passi il
  nome.

### In sospeso - meccanismo "gemella multipla"

#### Manga gemello per kh1, chain-of-memories, kh2, 358-2-days, kh3

- **Proposta**: dare a `kh1`, `chain-of-memories`, `kh2`,
  `358-2-days` e `kh3` un SECONDO gemello (manga di Shiro Amano), in
  aggiunta al romanzo già pubblicato come loro unico gemello attuale.
- **Origine**: emersa durante la classificazione media della catena,
  bloccata da un limite tecnico rilevato e verificato dal
  Supervisore in revisione.
- **Motivazione/problema**: il sito non gestisce più di una voce
  gemella per host - `entry.twin` è un oggetto singolo, non un array;
  il rendering in `script.js` (`h-node--twin`, `findEntry`,
  `titlePanels`, vista elenco verticale, `notifyIfDue`) è binario. Il
  presunto precedente (`chronicles-china`, Assassin's Creed) è stato
  verificato e smentito: ha un solo gemello, nessun caso di gemella
  multipla esiste già sul sito. Due strade alternative, nessuna
  applicata:
  - (a) commissionare al Programmatore il meccanismo "più gemelle"
    (bottone/popup di scelta tra le gemelle sullo stesso nodo) -
    costoso ora, riutilizzabile in futuro;
  - (b) rinunciare alla voce gemella separata per i 5 manga, nota
    testuale nella sinossi del gemello esistente - immediato, ma
    degrada la classificazione.
  Raccomandazione: se sono attesi altri casi simili, conviene
  investire una volta per tutte in (a) invece di gestire ogni caso
  come eccezione con (b).
- **Data**: 2026-09-09 (richiamo mirato notturno, saga 1/10).
- **Stato**: in attesa di decisione di Sakrem, non applicato. Nessun
  incarico dato al Programmatore. Testo IT/EN e classificazione delle
  5 voci (`kh1-manga`, `chain-of-memories-manga`, `kh2-manga`,
  `358-2-days-manga`, `kh3-manga`) già pronti, conservati fuori dal
  pacchetto in attesa della decisione tra (a) e (b).

### Musica

#### Tracklist completa saga (prima volta, campo da creare ex novo)

- **Proposta**: creare ex novo il campo `tracks` della saga (finora
  assente da `data.js`) e popolarlo con una playlist di 7 brani: Dearly
  Beloved (*Kingdom Hearts*), Simple and Clean (*Kingdom Hearts*),
  Sanctuary (*Kingdom Hearts II*), Face My Fears (*Kingdom Hearts
  III*), The Other Promise (*Kingdom Hearts II*), Don't Think Twice
  (*Kingdom Hearts III*), Vector to the Heavens (*Kingdom Hearts 358/2
  Days*).
- **Origine**: Musicista.
- **Motivazione**: prima playlist della saga, temi più iconici dei
  capitoli principali (Kingdom Hearts I, II, III e 358/2 Days).
- **Data**: 2026-09-09 (richiamo mirato notturno, saga 1/10).
- **Stato**: accettata nel merito, bloccata per asset mancante - tutte
  e 7 le tracce sono nuove per il sito, da caricare su R2. Il
  Programmatore crea comunque il campo `tracks: []`, vuoto in attesa
  dei file.

### Media aggiunti

1 nuova voce gemella pubblicata in questo ciclo. Le altre 5 (vedi
sopra) restano bloccate dal problema tecnico, non entrano nel log
finché non pubblicate.

- `bbs02-manga` - Kingdom Hearts 0.2 Birth by Sleep -A Fragmentary
  Passage- (manga, Shiro Amano, 2019, stessa serie editoriale delle
  altre gemelle ancora in sospeso) - voce gemella di `bbs-02` (prima e
  unica gemella, meccanismo singolo standard già esistente, nessun
  problema tecnico) - richiamo mirato, 2026-09-09.

## The Last of Us

### In sospeso - immagini mancanti

Stesso schema di Ace Combat/Assassin's Creed: nessun file immagine
(avatar/banner saga, filigrana dell'unico universo, copertine delle 5
voci) indicato in questa sessione - la catena copre testi, colore e
musica, non asset visivi.

1. Avatar della saga "The Last of Us"
2. Banner della saga "The Last of Us"
3. Filigrana (watermark) dell'unico universo "L'Epidemia di Cordyceps"
4. Copertina di `american-dreams`
5. Copertina di `tlou1`
6. Copertina di `left-behind`
7. Copertina di `tlou2`
8. Copertina di `tlou-tv`

- **Stato**: in attesa che Sakrem carichi i file su R2 e ne passi i nomi.

### Musica

#### Tracklist completa saga (prima volta, saga interamente nuova)

- **Proposta**: creare il campo `tracks` della saga (nuova, quindi
  inesistente fino ad ora) e popolarlo con una playlist di 7 brani, in
  ordine di fama/gradimento pubblico decrescente: "The Last of Us (Main
  Theme)" (*The Last of Us* / *The Last of Us Parte I*), "Through the
  Valley" (*The Last of Us Parte II*), "All Gone (No Escape)" (*The Last
  of Us* / *The Last of Us Parte I*), "Take On Me" (*The Last of Us
  Parte II*), "Vanishing Grace" (*The Last of Us* / *The Last of Us
  Parte I*), "Future Days" (*The Last of Us Parte II*), "The Path" (*The
  Last of Us* / *The Last of Us Parte I*).
- **Origine**: Musicista.
- **Motivazione**: prima playlist della saga, fama/gradimento
  pubblico reale su fonti multiple (non gusto personale), alternanza
  tra i due titoli principali, nessuna traccia da serie TV o fumetto.
- **Data**: 2026-09-11.
- **Stato**: accettata nel merito, bloccata per asset mancante - tutte
  e 7 le tracce sono nuove per il sito, da caricare su R2. Il
  Programmatore crea comunque il campo `tracks: []`, vuoto in attesa
  dei file.

### Media aggiunti

Saga interamente nuova: 1 nuovo universo e 5 nuove voci (nessuna
gemella, nessuna voce STORIA), tutte inserite nella stessa sessione,
2026-09-11.

- Nuovo universo **L'Epidemia di Cordyceps** (`american-dreams` →
  `tlou-tv`, 5 voci) - sessione 2026-09-11.
- `american-dreams` - The Last of Us: Il Sogno Americano / The Last of
  Us: American Dreams (FUMETTO, 2013) - voce a sé, prima voce della
  saga - sessione 2026-09-11.
- `tlou1` - The Last of Us (VIDEOGIOCO, 2013, assorbe Remastered 2014 e
  Remake Parte I/Part I 2022/2023 come annotazione `releaseYear`) - voce
  a sé - sessione 2026-09-11.
- `left-behind` - The Last of Us: Left Behind (VIDEOGIOCO/ESPANSIONE,
  2014) - voce a sé - sessione 2026-09-11.
- `tlou2` - The Last of Us Parte II / The Last of Us Part II
  (VIDEOGIOCO, 2020, assorbe Remastered Parte II/Part II Remastered
  2024 come annotazione `releaseYear`) - voce a sé - sessione
  2026-09-11.
- `tlou-tv` - The Last of Us (SERIE TV, HBO, Stagione 1 2023 + Stagione
  2 2025) - voce ombrello su `tlou1` → `left-behind` → `tlou2`, nessun
  `lineStyle` (riga solida), ultima voce della saga - sessione
  2026-09-11.

### Nota per il futuro (non applicare nulla ora)

La Stagione 3 della serie TV HBO è stata rinnovata ufficialmente
(annuncio 9 aprile 2025, finestra "2027" dichiarata da Casey Bloys,
CEO contenuti HBO/Max) ma non è ancora uscita. Quando uscirà davvero,
la sinossi esistente della voce `tlou-tv` andrà aggiornata per
includerne la trama (arco di Abby in parallelo alla stagione 2).
Nessuna azione tecnica richiesta oggi, nessun `imagePending` da
aggiungere ora.

## Legacy of Kain

### Musica

#### Tracklist completa saga (prima volta, campo da creare ex novo)

- **Proposta**: creare ex novo il campo `tracks` della saga (finora
  assente da `data.js`) e popolarlo con una playlist di 7 brani: Ozar
  Midrashim (*Legacy of Kain: Soul Reaver*), Ariel's Lament (*Legacy of
  Kain: Soul Reaver 2*), The Ruined City (*Legacy of Kain: Soul
  Reaver*), Sarafan (*Legacy of Kain: Soul Reaver 2*), Necropolis
  (*Legacy of Kain: Soul Reaver*), Nupraptor's Theme (*Blood Omen:
  Legacy of Kain*), Blood Omen 2 Main Theme (*Blood Omen 2*).
- **Origine**: Musicista.
- **Motivazione**: prima playlist della saga, ordine di fama/gradimento
  decrescente, nessuna coppia consecutiva dello stesso titolo. Copertura
  4 titoli su 6 (Defiance e Ascendance senza brano proprio, copertura
  totale non richiesta).
- **Data**: 2026-09-09 (richiamo mirato notturno, saga 2/10).
- **Stato**: accettata nel merito, bloccata per asset mancante - tutti
  e 7 i file sono nuovi per il sito, da caricare su R2. Il
  Programmatore crea comunque il campo `tracks: []`, vuoto in attesa
  dei file.

### Media aggiunti

- `defiance-comic` - Legacy of Kain: Defiance — Fumetto (FUMETTO, 2004)
  - voce a sé, inserita nell'universo "L'Eredità di Kain" tra
  `blood-omen-2` e `defiance` - richiamo mirato, 2026-09-09.

### Nota procedurale - brief Artista

L'Artista ha chiuso la proposta di cambio gradiente (palette a 4
colori) citando la vecchia regola pre-08/09 (consenso di Sakrem
necessario), ormai superata - dall'08/09/2026 le scelte di colore si
applicano in automatico. Il Supervisore ha corretto il malinteso e
applicato in automatico, nessun impatto sul risultato. Da aggiornare il
brief dell'Artista per evitare che si ripeta.

## Like a Dragon (ex "Yakuza")

Scheda rinominata in questo ciclo (id interno invariato: `yakuza`).

### Musica

#### Tracklist completa saga (prima volta, campo da creare ex novo)

- **Proposta**: creare ex novo il campo `tracks` della saga (finora
  assente da `data.js`, `tracks: []`) e popolarlo con una playlist di 7
  brani: Baka Mitai (I've Been a Fool) (*Yakuza 5*, ripresa in *Yakuza
  0*), Receive You (-Kiwami-) (*Yakuza Kiwami*), Judgement -Shinpan-
  (*Yakuza 0*), Machine Gun Kiss (*Yakuza 4*, ripresa in numerosi
  capitoli successivi fino a *Yakuza Kiwami 3 & Dark Ties*), Like a
  Butterfly (*Yakuza 6: The Song of Life*), Katatoki (*Like a Dragon
  Gaiden: The Man Who Erased His Name*, firmata da Yojiro Noda dei
  RADWIMPS e dal rapper J.I.D.), Song of Departure -Journey to the New
  World- (*Like a Dragon: Pirate Yakuza in Hawaii*).
- **Origine**: Musicista.
- **Motivazione**: prima playlist della saga, fama/status di meme o
  classico riconosciuto (in particolare "Baka Mitai", meme internet
  globale), copertura di più capitoli ed epoche, incluso "Kiwami 3 &
  Dark Ties" (nessuna traccia propria abbastanza affermata, uscito solo
  7 mesi fa) e i due nuovi titoli con theme song di rilievo pubblico
  (Gaiden, Pirate Yakuza in Hawaii). Esclusi i due adattamenti
  live-action (nessuna OST di gioco propria) e "Stranger Than Heaven"
  (non ancora uscito).
- **Data**: 2026-09-10 (richiamo mirato notturno, saga 11/11).
- **Stato**: accettata nel merito, bloccata per asset mancante - tutte
  e 7 le tracce sono nuove per il sito, da caricare su R2. Il campo
  resta `tracks: []`, vuoto in attesa dei file.

### Media aggiunti

- `stranger-than-heaven` - Stranger Than Heaven (VIDEOGIOCO, in uscita 15
  gennaio 2027, imagePending) - voce a sé, nuova prima voce cronologica
  dell'universo `main` (1915-1965) - sessione notturna, 2026-09-10.
- `ryu-ga-gotoku-film` - Ryu ga Gotoku (LIVE ACTION, film, 2007, regia
  Takashi Miike) - voce a sé, primo titolo live-action della saga -
  sessione notturna, 2026-09-10.
- `like-a-dragon-yakuza-series` - Like a Dragon: Yakuza (LIVE ACTION,
  serie Prime Video, 2024) - voce a sé - sessione notturna, 2026-09-10.
- `like-a-dragon-gaiden` - Like a Dragon Gaiden: The Man Who Erased His
  Name (VIDEOGIOCO, 2023) - voce a sé, inserita tra `like-a-dragon` e
  `infinite-wealth` - sessione notturna, 2026-09-10.
- `pirate-yakuza-hawaii` - Like a Dragon: Pirate Yakuza in Hawaii
  (VIDEOGIOCO, 2025) - voce a sé, ultima voce dell'universo `main` -
  sessione notturna, 2026-09-10.
- `yakuza-3` sostituita da `yakuza-kiwami-3` - Yakuza Kiwami 3 & Dark
  Ties (VIDEOGIOCO, remake 2026, include la storia inedita "Dark Ties")
  - sostituzione di voce esistente, non un semplice aggiornamento di
  sinossi (nuovo id, nuovo titolo, nuova data di uscita) - sessione
  notturna, 2026-09-10.
- Prima `palette`/`paletteBounds` a livello di universo per `main` (5
  colori: `#5c4029 #c9a227 #8b1a1a #1a1a2e #1f8a7a`, 4 confini) - proposta
  Artista, applicata in automatico (nessun consenso di Sakrem richiesto
  per le scelte di colore, regola in vigore dall'8/09/2026) - sessione
  notturna, 2026-09-10.

### Note di scope aperte

- **Rename scheda**: `listTitle`/`title` di saga cambiati da "Yakuza:
  Like a Dragon" a "Like a Dragon" (id `yakuza` invariato; il `title`
  della voce del gioco 2020 resta "Yakuza: Like a Dragon", non toccato).
- **Judgment / Lost Judgment**: esclusi entrambi dalla linea editoriale,
  con nota esplicita aggiunta al blurb di saga (stesso universo/stessa
  Kamurocho, ma brand a sé stante per scelta di SEGA, protagonista e
  trama autonomi). Nessuna voce creata per questi titoli in questo ciclo.
- **Crossover "Ryu ga Gotoku Powered By Nihon Tōitsu"**: escluso dallo
  scope di questo richiamo per canonicità non confermata rispetto al
  resto della linea principale - da rivalutare in un futuro richiamo
  mirato, non deciso definitivamente.
- **Span universo `main`**: aggiornato da "1988 – 2024" a "1915 – 2027",
  entrambi gli estremi dovuti alla stessa nuova voce `stranger-than-
  heaven`: 1915 come inizio della sua ambientazione (cinque epoche di
  famiglia, prima di Kiryu), 2027 come sua data di uscita (15 gennaio),
  più lontana nel tempo della precedente uscita più recente della saga
  (2024, *Infinite Wealth*).

## Lost Planet

### Musica

#### Tracklist completa saga (prima volta, campo da creare ex novo)

- **Proposta**: creare ex novo il campo `tracks` della saga (finora
  assente da `data.js`) e popolarlo con una playlist di 7 brani, ordine
  di fama/gradimento decrescente: Main Theme -Lost Planet- (*Lost
  Planet: Extreme Condition*), Main Theme ~Lost Planet 2~ (*Lost Planet
  2*), Lost Planet 3 Theme (*Lost Planet 3*), Welcome to the Jungle,
  Boys! (*Lost Planet 2*), Battle with Basil (*Lost Planet: Extreme
  Condition*), The Forgotten (*Lost Planet 3*), Infiltration (*Lost
  Planet 2*).
- **Origine**: Musicista.
- **Motivazione**: prima playlist della saga, copertura di LP1/LP2/LP3,
  nessuna coppia consecutiva dello stesso titolo; Trag Zero ed E.X.
  Troopers esclusi per assenza di fama pubblica verificabile.
- **Data**: 2026-09-09 (richiamo mirato notturno, saga 3/10).
- **Stato**: accettata nel merito, bloccata per asset mancante - tutti
  e 7 i brani sono nuovi per il sito, da caricare su R2. Correzione del
  Supervisore sul brano 5: titolo ufficiale "Battle with Basil" (il
  Musicista l'aveva proposto solo come "Basil"). Il Programmatore crea
  comunque il campo `tracks: []`, vuoto in attesa dei file.

### Media aggiunti

- `ex-troopers` - E.X. Troopers (VIDEOGIOCO, 2012) - voce a sé, ultima
  voce dell'universo "E.D.N. III" (ramo narrativo parallelo, fuori
  dalla linea principale) - richiamo mirato, 2026-09-09.

### Nota procedurale - palette/gradiente

Con l'aggiunta di `ex-troopers` (settima voce), la palette passa da 3 a
4 colori: da `["#b3e5fc", "#f97316", "#1e3a5f"]` a `["#b3e5fc",
"#1e3a5f", "#f97316", "#22d3ee"]`, con nuovo `paletteBounds` su `main`
(`["lp3", "lp1", "lp2"]`). Verificato contro `computeGradientStops` in
`script.js`: con 7 entries i 4 segmenti corrispondono alle 4 fasi
narrative proposte dall'Artista. Applicato in automatico (regola
dell'08/09/2026).

## Mafia

### Musica

#### Tracklist completa saga (prima volta, saga interamente nuova)

- **Proposta**: creare il campo `tracks` della saga (nuova, quindi
  inesistente fino ad ora) e popolarlo con una playlist di 7 brani, in
  ordine di fama decrescente: "Respect" (*Mafia III*, Aretha Franklin),
  "Paint It Black" (*Mafia III*, The Rolling Stones), "That's Amore"
  (*Mafia II*, Dean Martin), "Fortunate Son" (*Mafia III*, Creedence
  Clearwater Revival), "Sympathy for the Devil" (*Mafia III*, The
  Rolling Stones), "Main Theme" (*Mafia: The City of Lost Heaven*,
  colonna sonora originale), "Born to Be Wild" (*Mafia III*,
  Steppenwolf).
- **Origine**: Musicista.
- **Motivazione**: prima playlist della saga, fama/radicamento reale
  nel pubblico (non cronologica), concentrata su Mafia III perché lì si
  concentra la fama dei brani licenziati. Escluso un possibile ottavo
  brano da *Mafia: The Old Country* ("The Carusu"): nessuna prova di
  fama paragonabile (nessun remake, ri-registrazione da concerto,
  citazione in retrospettive), a differenza del "Main Theme" di Mafia I
  (riarrangiato nel remake 2020, ri-registrato dal vivo nel 2024).
- **Data**: 2026-09-11.
- **Stato**: accettata nel merito, bloccata per asset mancante - tutte
  e 7 le tracce sono nuove per il sito, da caricare su R2. Il
  Programmatore crea comunque il campo `tracks: []`, vuoto in attesa
  dei file.
  **AVVISO RISCHIO DIRITTI D'AUTORE**: 6 delle 7 tracce ("Respect",
  "Paint It Black", "That's Amore", "Fortunate Son", "Sympathy for the
  Devil", "Born to Be Wild") sono master discografici commerciali major
  con licenza (Aretha Franklin, Rolling Stones x2, Dean Martin, CCR,
  Steppenwolf) - più a rischio del precedente unico brano non originale
  sul sito (BioShock, pubblico dominio). Ospitarli integrali su R2/CDN
  pubblico è un rischio maggiore: prima di caricare i file, Sakrem deve
  valutare estratti brevi, fair use, o sostituzione con la sola colonna
  sonora orchestrale originale. Solo "Main Theme" (Mafia: The City of
  Lost Heaven) è OST originale del gioco, senza questo rischio.

### Media aggiunti

Saga interamente nuova: 1 nuovo universo e 5 nuove voci (tutte a sé,
nessuna gemella, nessuna STORIA), sessione 2026-09-11 (terza di 10
saghe lavorate in sequenza).

- Nuovo universo **Universo principale** (`the-old-country` →
  `mafia-iii`, 5 voci) - sessione 2026-09-11.
- `the-old-country` - Mafia: The Old Country (VIDEOGIOCO, 2025) - voce
  a sé, prima voce della saga, con nota DLC narrativo Man of Honor
  (2026) - sessione 2026-09-11.
- `the-city-of-lost-heaven` - Mafia: The City of Lost Heaven
  (VIDEOGIOCO, 2002; Definitive Edition 2020) - voce a sé - sessione
  2026-09-11.
- `mafia-ii` - Mafia II (VIDEOGIOCO, 2010; Definitive Edition 2020) -
  voce a sé, con nota DLC narrativo Joe's Adventures (2010) - sessione
  2026-09-11.
- `the-rise-and-fall-of-sal-marcano` - Mafia III: The Rise & Fall of
  Sal Marcano (FUMETTO/graphic novel, 2017-2018, Insight Comics/Insight
  Editions) - voce a sé indipendente (protagonista Sal Marcano, diverso
  dal protagonista del videogioco) - sessione 2026-09-11.
- `mafia-iii` - Mafia III (VIDEOGIOCO, 2016; Definitive Edition 2020) -
  voce a sé, ultima voce della saga, con tre note DLC narrativi
  (Faster, Baby!; Stones Unturned; Sign of the Times) - sessione
  2026-09-11.

## Mass Effect

### Musica

#### Tracklist completa saga (prima volta, campo da creare ex novo)

- **Proposta**: creare ex novo il campo `tracks` della saga (finora
  assente da `data.js`, solo `tracks: []` mai popolato) e popolarlo con
  una playlist di 7 brani, ordine di fama decrescente, nessuna coppia
  consecutiva dello stesso titolo: Vigil (*Mass Effect*), Suicide
  Mission (*Mass Effect 2*), Uncharted Worlds (*Mass Effect*), An End,
  Once and For All (*Mass Effect 3*), The Illusive Man (*Mass Effect
  2*), Leaving Earth (*Mass Effect 3*), I Was Lost Without You (*Mass
  Effect 2*, DLC Lair of the Shadow Broker).
- **Origine**: Musicista.
- **Motivazione**: prima playlist della saga, temi più iconici dei tre
  capitoli principali della Trilogia di Shepard.
- **Data**: 2026-09-09 (richiamo mirato notturno, saga 4/10).
- **Stato**: accettata nel merito, bloccata per asset mancante - tutti
  e 7 i brani sono nuovi per il sito, da caricare su R2. Il
  Programmatore crea comunque il campo `tracks: []`, vuoto in attesa
  dei file.

### Media aggiunti

- `priority-hagalaz` - Mass Effect: The Board Game – Priority: Hagalaz
  (GIOCO DA TAVOLO, 2024, Modiphius/Eric M. Lang/Asmodee, 11 ottobre
  2024) - voce a sé, inserita nell'universo Trilogia di Shepard tra
  `infiltrator` e `foundation`; prima occorrenza sul sito di questo
  tipo/tag ("GIOCO DA TAVOLO"/"BOARD GAME") - richiamo mirato,
  2026-09-09.
- `mass-effect-tv` - serie TV Mass Effect (SERIE TV, 2028, data non
  annunciata, imagePending, senza sinossi per policy titoli non ancora
  usciti) - voce a sé, ultima voce dell'universo Trilogia di Shepard,
  dopo `priority-hagalaz`/`foundation` - richiamo mirato, 2026-09-09.

### Nota procedurale - blurb saga e palette a sottogruppi

Il blurb della saga, troncato a metà frase ("...nel." / "...The."), è
stato riscritto per intero dal Linguista (IT 304 caratteri, EN 277
caratteri). L'Artista ha proposto per la prima volta una palette a
sottogruppi narrativi su entrambi gli universi (finora solo `palette` a
3 colori, senza `paletteBounds`):

- **Trilogia di Shepard**: `palette: ["#1a2744", "#e8532a",
  "#4a90d9"]`, `paletteBounds: ["me1", "discovery"]` - tre fasi: "La
  Scoperta" (fino a `me1`) = `#1a2744`; "L'Ombra di Cerberus" (fino a
  `discovery`) = `#e8532a`; "La Guerra dei Razziatori" (fino a fine
  universo, incluse le due nuove voci che non spostano i confini) =
  `#4a90d9` (colore accento della saga).
- **Iniziativa Andromeda**: `palette: ["#4a90d9", "#4a2f7a",
  "#2e9e8f"]`, `paletteBounds: ["initiation", "annihilation"]` - tre
  fasi: "Il Reclutamento" (fino a `initiation`, colore-ponte con
  l'altro universo) = `#4a90d9`; "Il Viaggio" (fino a `annihilation`) =
  `#4a2f7a`; "Approdo a Heleus" (fino a fine universo) = `#2e9e8f`.

`accentColor: "#4a90d9"` resta invariato. Entrambi i `paletteBounds`
verificati contro l'ordine reale delle entries in `data.js`. Applicato
in automatico (regola dell'08/09/2026) - prima volta che questa saga
usa il meccanismo "palette a sottogruppi".

### INCIDENTE PROCEDURALE - Artista, scrittura diretta su `data.js`

**Da leggere con priorità.**

L'Artista invocato ha scritto direttamente su `data.js`
(palette/paletteBounds/lastAgentPass, con commenti inline), bypassando
la regola per cui solo il Programmatore scrive o committa quel file.
Scoperta dall'orchestratore via `git diff`, contenuto tecnicamente
corretto (i `paletteBounds` corrispondevano all'ordine reale delle
entries), ma scartata con `git checkout -- data.js` prima di qualunque
commit. Nessun impatto sul sito pubblicato (mai committata). Il
Programmatore ha poi riscritto la stessa palette da zero, sulla sola
descrizione testuale della proposta.

**Raccomandazione per Sakrem**: verificare e, se necessario, rimuovere
il permesso di scrittura su `data.js` dell'Artista - e per coerenza
controllare anche il Musicista.

## Metal Gear Solid

### Musica

#### Tracklist completa saga (prima volta, campo da creare ex novo)

- **Proposta**: creare ex novo il campo `tracks` della saga (finora
  assente da `data.js`, nessun asset audio/immagine mai caricato per
  questa saga) e popolarlo con una playlist di 7 brani, ordine di fama
  decrescente, nessuna coppia consecutiva dello stesso titolo: Snake
  Eater (*Metal Gear Solid 3: Snake Eater*), Rules of Nature (*Metal
  Gear Rising: Revengeance*), Metal Gear Solid Main Theme (*Metal Gear
  Solid 2: Sons of Liberty*), The Best Is Yet to Come (*Metal Gear
  Solid*), It Has to Be This Way (*Metal Gear Rising: Revengeance*),
  Sins of the Father (*Metal Gear Solid V: The Phantom Pain*), Heavens
  Divide (*Metal Gear Solid: Peace Walker*).
- **Origine**: Musicista.
- **Motivazione**: prima playlist della saga, temi più iconici di più
  capitoli principali e spin-off (incluso Metal Gear Rising:
  Revengeance).
- **Data**: 2026-09-09 (richiamo mirato notturno, saga 5/10).
- **Stato**: accettata nel merito, bloccata per asset mancante - tutti
  e 7 i brani sono nuovi per il sito, da caricare su R2 (saga finora
  priva di qualunque asset audio/immagine, incluso
  avatar/banner/watermarkOpacity). Il Programmatore crea comunque il
  campo `tracks: []`, vuoto in attesa dei file.

### Media aggiunti

Saga già pubblicata, nessun nuovo universo in questo ciclo: 1 nuova
voce a sé e 4 nuove voci gemelle (prima applicazione reale sul sito
del meccanismo "gemella multipla" - vedi nota procedurale sotto).

- `mgs2-comic` - Metal Gear Solid: Sons of Liberty (FUMETTO, IDW,
  2005-2007) - voce a sé, inserita nell'universo `main` subito dopo
  `mgs2`, prima di `mgs4` - richiamo mirato, 2026-09-09.
- `mgs1-novel` - Metal Gear Solid (ROMANZO, Raymond Benson, 2008) -
  voce gemella di `mgs1` - richiamo mirato, 2026-09-09.
- `mgs1-comic` - Metal Gear Solid (FUMETTO, IDW, 2004-2006) - voce
  gemella di `mgs1`, SECONDA gemella sullo stesso host insieme a
  `mgs1-novel` - richiamo mirato, 2026-09-09.
- `mgs2-novel` - Metal Gear Solid 2: Sons of Liberty (ROMANZO, Raymond
  Benson, 2009) - voce gemella singola di `mgs2` - richiamo mirato,
  2026-09-09.
- `mgs4-novel` - Metal Gear Solid: Guns of the Patriots (ROMANZO,
  Project Itoh, 2008 Giappone/2012 EN) - voce gemella singola di
  `mgs4` - richiamo mirato, 2026-09-09.

### Nota procedurale - prima applicazione reale del meccanismo "gemella multipla"

**Da leggere con priorità - rilevante anche oltre questa saga.**

`mgs1` è la prima voce sul sito con davvero due gemelle contemporanee
(`mgs1-comic`, IDW 2004-2006, e `mgs1-novel`, Benson 2008): il
meccanismo "box pulsante + popup" per due o più gemelle, già
specificato in `.claude/agents/traccia-programmatore.md` (righe 76-83)
ma mai implementato, viene commissionato al Programmatore per la prima
volta. Ordine nel popup: prima `mgs1-comic` (2004-2006), poi
`mgs1-novel` (2008), cronologico di uscita.

Collegamento diretto con la proposta ancora in sospeso per Kingdom
Hearts (vedi sopra, "In sospeso - meccanismo gemella multipla"): stesso
limite tecnico, stesse due strade (a: meccanismo strutturale; b:
degradare i 5 manga proposti - `kh1-manga`, `chain-of-memories-manga`,
`kh2-manga`, `358-2-days-manga`, `kh3-manga` - a nota testuale). Con
(a) ora commissionata per Metal Gear Solid, diventa disponibile anche
per Kingdom Hearts: la decisione se ripubblicare i 5 manga KH ora o più
avanti resta di chi gestisce quella saga - testo IT/EN già pronto,
nessun lavoro perso.

## Metro

Saga interamente nuova, una delle 10 individuate dal Project Manager
per il turno notturno 2/notte 3. Due universi paralleli di pari peso
narrativo, stesso caso-tipo di The Witcher: **Libri**
(`metro-2033-romanzo` → `metro-outpost-america`, 5 voci) e **Giochi**
(`metro-2033-videogioco` → `metro-2039`, 7 voci, 1 `imagePending`), 12
voci totali, nessuna gemella (i 3 fumetti sono adattamenti integrali o
episodi-ponte autonomi, mai adattamento di un singolo capitolo di
un'opera già elencata).

Decisioni di scope importanti:

- **Universo espanso di terze parti escluso in blocco**: oltre 90
  romanzi spin-off di autori diversi da Dmitry Glukhovsky su licenza
  Deep Silver ("Metro 2033 Universe" allargata), esclusi per scala
  eccessiva. Incluse solo le opere di Glukhovsky, i loro adattamenti
  diretti e *The Outpost: America* (scritto da Glukhovsky, fuori dalla
  trilogia di Artyom). Da riconsiderare in futuro con un criterio
  esplicito per un sottoinsieme di quei 90+ romanzi (nessun criterio
  ancora proposto).
- **`metro-2039` incluso come `imagePending`**: non ancora uscito (4
  febbraio 2027), schema identico a `witcher-songs-of-the-past`/
  `witcher-4-polaris` (nessuna sinossi, solo campi
  id/type/typeEn/year/yearEn/releaseYear/releaseYearEn/title/
  imagePending/releaseDateShort).
- **Disambiguazione Metro 2034 (romanzo) / Metro: Last Light
  (videogioco)**: stesso anno narrativo (2034), nessun rapporto di
  fonte - personaggi ed eventi del romanzo (Omero, Sasha,
  Sevastopolskaya) indipendenti dalla trama del gioco (Artyom, Anna,
  cucciolo di Tetro, bunker D6). Entrambe le sinossi aprono con avviso
  di non-confusione; il campo `year`/`yearEn` di `metro-2034` rinforza
  la disambiguazione in scheda.
- **Doppione di titolo "Metro 2033"** (romanzo 2005, videogioco 2010,
  storie diverse pur condividendo la premessa) disambiguato con id
  distinti: `metro-2033-romanzo` (Ramo Libri) e `metro-2033-videogioco`
  (Ramo Giochi).
- I due DLC narrativi di *Metro Exodus* (`metro-exodus-two-colonels`,
  `metro-exodus-sams-story`) classificati come `type: "ESPANSIONE"` /
  `typeEn: "EXPANSION"`, non "VIDEOGIOCO" - stesso standard di Hearts
  of Stone/Blood and Wine in The Witcher.

### Correzione terminologica

"Dark Ones" → **"i Tetri"** (non "i Neri", bozza iniziale) resa
italiana in tutte le sinossi/blurb IT; il testo EN resta "Dark Ones".
Corretto anche **Miller/Melnik**: stesso personaggio (il Colonnello a
capo dei Ranger), nome diverso in italiano - **Melnik** nel Ramo Libri
(localizzazione Nord), **Miller** nel Ramo Giochi (localizzazione 4A
Games); l'EN usa **Miller** uniformemente in entrambi i rami, romanzi
compresi.

### Musica

#### Tracklist completa saga (prima volta, saga interamente nuova)

- **Proposta**: creare il campo `tracks` della saga (nuova, quindi
  inesistente fino ad ora) e popolarlo con una playlist di 7 brani, in
  ordine di fama/gradimento decrescente: "Enter the Metro" (*Metro: Last
  Light*), "Market" (*Metro 2033*), "Enter the Tunnels" (Main Theme)
  (*Metro 2033*), "Redemption" (*Metro: Last Light*), "Bunker Blues"
  (*Metro: Last Light*), "Dawn of Hope" (*Metro Exodus*), "Race Against
  Fate" (*Metro Exodus*).
- **Origine**: Musicista.
- **Motivazione**: prima playlist della saga, fama/gradimento reale (TV
  Tropes Awesome Music, recensioni specializzate, dati streaming,
  tab/cover ricorrenti su Ultimate Guitar/Songsterr). Perimetro: i 3
  videogiochi principali con OST propria (compositi da Alexey
  Omelchuk, co-compositore solo su Metro 2033 con Georgiy Beloglazov);
  le due espansioni di Exodus hanno OST proprie ma troppo ridotte (EP
  di 4 tracce, singolo di 2) e senza brani distintivi di rilievo,
  escluse.
- **Data**: 2026-09-10 (sessione notturna, turno notturno 2/notte 3).
- **Stato**: accettata nel merito, bloccata per asset mancante - tutte
  e 7 le tracce sono nuove per il sito, da caricare su R2. Il
  Programmatore crea comunque il campo `tracks: []`, vuoto in attesa
  dei file.

### Media aggiunti

Saga interamente nuova: 2 nuovi universi e 12 nuove voci (nessuna gemella,
nessuna voce STORIA), tutte inserite nella stessa sessione notturna,
2026-09-10.

- Nuovo universo **Libri** (`metro-2033-romanzo` → `metro-outpost-america`,
  span 2005 - 2019, 5 voci) - sessione notturna, 2026-09-10.
- Nuovo universo **Giochi** (`metro-2033-videogioco` → `metro-2039`, span
  2010 - 2027, 7 voci) - sessione notturna, 2026-09-10.
- `metro-2033-romanzo` - Metro 2033 (ROMANZO, 2005) - voce a sé, prima voce
  della saga - sessione notturna, 2026-09-10.
- `metro-2033-fumetto` - Metro 2033 (graphic novel) (FUMETTO, dal 2019) -
  voce a sé - sessione notturna, 2026-09-10.
- `metro-2034` - Metro 2034 (ROMANZO, 2009) - voce a sé - sessione
  notturna, 2026-09-10.
- `metro-2035` - Metro 2035 (ROMANZO, 2015) - voce a sé - sessione
  notturna, 2026-09-10.
- `metro-outpost-america` - The Outpost: America (FUMETTO, 2016) - voce a
  sé, ultima voce di Libri - sessione notturna, 2026-09-10.
- `metro-2033-videogioco` - Metro 2033 (VIDEOGIOCO, 2010) - voce a sé,
  prima voce di Giochi - sessione notturna, 2026-09-10.
- `metro-gospel-according-to-artyom` - The Gospel According to Artyom
  (FUMETTO, 2013) - voce a sé - sessione notturna, 2026-09-10.
- `metro-last-light` - Metro: Last Light (VIDEOGIOCO, 2013) - voce a sé -
  sessione notturna, 2026-09-10.
- `metro-exodus` - Metro Exodus (VIDEOGIOCO, 2019) - voce a sé - sessione
  notturna, 2026-09-10.
- `metro-exodus-two-colonels` - Metro Exodus: The Two Colonels
  (ESPANSIONE, 2020) - voce a sé - sessione notturna, 2026-09-10.
- `metro-exodus-sams-story` - Metro Exodus: Sam's Story (ESPANSIONE, 2020)
  - voce a sé - sessione notturna, 2026-09-10.
- `metro-2039` - Metro 2039 (VIDEOGIOCO, in uscita 4 febbraio 2027,
  imagePending) - voce a sé, ultima voce della saga - sessione notturna,
  2026-09-10.

## Metroid

Saga interamente nuova: un solo universo ("La Galassia di Metroid",
`metroid-manga` → `metroid-dread`) e 13 nuove voci, sessione notturna
2026-09-10. Nessuna gemella, nessuna VOCE STORIA. Ordine per cronologia
narrativa interna, non uscita (Metroid Prime Hunters, 2006, precede
Metroid Prime 2: Echoes, 2004; Metroid Fusion, 2002, arriva dopo
Metroid Prime 4: Beyond, 2025).

### Musica

#### Tracklist completa saga (prima volta, saga interamente nuova)

- **Proposta**: creare il campo `tracks` della saga (nuova, quindi
  inesistente fino ad ora) e popolarlo con una playlist di 7 brani, in
  ordine di fama/gradimento decrescente: "Brinstar" (tema)
  (*Metroid*/*Metroid: Zero Mission*), "Phendrana Drifts" (*Metroid
  Prime*), "Lower Norfair" (*Super Metroid*), "Kraid's Lair" (tema)
  (*Metroid*/*Metroid: Zero Mission*), "Ridley's Theme" (*Super
  Metroid*), "Ending Theme" (*Metroid*/*Metroid: Zero Mission*),
  "Chozo Ruins" (Ancient Chozo Ruins) (*Metroid Prime*).
- **Origine**: Musicista.
- **Motivazione**: prima playlist della saga, fama/gradimento reale
  (TV Tropes, ResetEra, Wikitroid/Metroid Fandom, Hardcore Gamer,
  Digital Trends, Metacritic), non gusto personale. Concentrata su 3
  titoli (Metroid 1986/Zero Mission, Super Metroid, Metroid Prime) dove
  si concentra la fama reale; gli altri 9 restano fuori (Metroid Dread
  descritto dalla community come OST meno memorabile della saga).
  Copertura sia della linea 2D classica sia della sotto-serie Prime.
  Nessuna coppia di tracce dello stesso titolo adiacente.
- **Data**: 2026-09-10 (sessione notturna, 2/3).
- **Stato**: accettata nel merito, bloccata per asset mancante - tutte
  e 7 le tracce sono nuove per il sito, da caricare su R2. Il
  Programmatore crea comunque il campo `tracks: []`, vuoto in attesa
  dei file.

### Media aggiunti

Saga interamente nuova: 1 nuovo universo e 13 nuove voci (nessuna
gemella, nessuna voce STORIA), tutte inserite nella stessa sessione
notturna, 2026-09-10.

- Nuovo universo **La Galassia di Metroid** (`metroid-manga` →
  `metroid-dread`, span 1986 – 2025, 13 voci) - sessione notturna,
  2026-09-10.
- `metroid-manga` - Metroid (MANGA, Kodansha/Magazine Z, 2003-2004,
  mai pubblicato ufficialmente in italiano) - voce a sé, prima voce
  della saga - sessione notturna, 2026-09-10.
- `metroid-zero-mission` - Metroid (VIDEOGIOCO, 1986, include il
  remake Metroid: Zero Mission, 2004, voce unica) - voce a sé -
  sessione notturna, 2026-09-10.
- `metroid-prime` - Metroid Prime (VIDEOGIOCO, 2002, include il
  remaster Metroid Prime Remastered, 2023) - voce a sé - sessione
  notturna, 2026-09-10.
- `metroid-prime-hunters` - Metroid Prime Hunters (VIDEOGIOCO, 2006) -
  voce a sé - sessione notturna, 2026-09-10.
- `metroid-prime-2-echoes` - Metroid Prime 2: Echoes (VIDEOGIOCO,
  2004) - voce a sé - sessione notturna, 2026-09-10.
- `metroid-prime-3-corruption` - Metroid Prime 3: Corruption
  (VIDEOGIOCO, 2007) - voce a sé - sessione notturna, 2026-09-10.
- `metroid-prime-federation-force` - Metroid Prime: Federation Force
  (VIDEOGIOCO, 2016) - voce a sé - sessione notturna, 2026-09-10.
- `metroid-2-samus-returns` - Metroid II: Return of Samus (VIDEOGIOCO,
  1991, include il remake Metroid: Samus Returns, 2017, voce unica) -
  voce a sé - sessione notturna, 2026-09-10.
- `super-metroid` - Super Metroid (VIDEOGIOCO, 1994) - voce a sé -
  sessione notturna, 2026-09-10.
- `metroid-other-m` - Metroid: Other M (VIDEOGIOCO, 2010) - voce a sé -
  sessione notturna, 2026-09-10.
- `metroid-prime-4-beyond` - Metroid Prime 4: Beyond (VIDEOGIOCO,
  4 dicembre 2025) - voce a sé - sessione notturna, 2026-09-10.
- `metroid-fusion` - Metroid Fusion (VIDEOGIOCO, 2002) - voce a sé -
  sessione notturna, 2026-09-10.
- `metroid-dread` - Metroid Dread (VIDEOGIOCO, 2021) - voce a sé,
  ultima voce della saga - sessione notturna, 2026-09-10.

### Decisioni di scope importanti

- **Metroid Prime Pinball (2005) escluso**: spin-off minore, nessuna
  voce dedicata, deciso in fase di scrittura/revisione.
- **Metroid Prime Hunters, Metroid Prime: Federation Force e il manga
  Metroid (2003) inclusi**: titoli minori/spin-off (Hunters è
  multiplayer-centrico, Federation Force è lo spin-off senza Samus
  giocabile più contestato, il manga non ha mai avuto edizione
  italiana), inclusi perché parte della continuity ufficiale (il manga
  è confermato canonico da Nintendo tramite le tavole riprese in
  Metroid: Zero Mission).
- **Ordine narrativo interno, non ordine di uscita**: le 13 voci sono
  ordinate per cronologia in-fiction, non uscita: Metroid Prime Hunters
  (2006) precede Metroid Prime 2: Echoes (2004); Metroid Prime 4:
  Beyond (4 dicembre 2025) è tra Metroid: Other M e Metroid Fusion
  (2010 e 2002). La collocazione dopo Other M è in parte decisione
  editoriale: Nintendo (Famitsu, dicembre 2025) conferma solo che il
  gioco si colloca tra Super Metroid e Metroid Fusion, non la posizione
  esatta rispetto a Other M (stessa finestra temporale) - nota
  riportata anche in sinossi.
- **Remake trattati come voce unica, non gemella o doppia**: Metroid
  (1986) + Metroid: Zero Mission (2004) → voce unica
  `metroid-zero-mission` (sinossi su Zero Mission, nota sulle
  differenze); Metroid II: Return of Samus (1991) + Metroid: Samus
  Returns (2017) → voce unica `metroid-2-samus-returns`; Metroid Prime
  (2002) + Metroid Prime Remastered (2023) → voce unica
  `metroid-prime` (nota: remaster è restauro tecnico, nessuna modifica
  narrativa).
- **Nessun asset immagine/audio caricato in questo ciclo**: nessuna
  immagine (avatar/banner/watermark/copertine) prodotta o caricata in
  questo passaggio - solo testo, colori e tracklist proposta (bloccata).
  Nessuna sezione "immagini mancanti" aperta (nessun URL segnaposto
  creato): lavoro di un ciclo futuro.

### Correzione di trama - "Regina degli X" inesistente

Errore di trama, non solo terminologico: la bozza presentava una
"Regina degli X" (Queen X) come antagonista finale di Metroid Fusion,
entità inesistente nella lore ufficiale. Verifica del Supervisore
(Metroid Database, Omega Metroid Walkthrough, Anatomy of Games,
dichiarazioni di Yoshio Sakamoto) conferma che solo la specie Metroid
ha una regina (Metroid Queen/Regina dei Metroid, in Metroid
II/Samus Returns); il Parassita X non ne ha una propria. Finale
corretto e pubblicato: SA-X mutata viene sopraffatta da un Omega
Metroid nell'hangar, ridotta al nucleo (Core-X); il Core-X si fonde con
Samus restituendole l'arsenale della Tuta Energia (incluso Raggio
Ghiaccio); Samus sconfigge l'Omega Metroid e fugge dalla stazione BSL.
"Queen X"/"Regina degli X" non compariva in nessun'altra voce della
saga.

### Correzioni terminologiche significative (Linguista/Supervisore)

Sette correzioni certe del Linguista (EN invariato): "Power Suit"→"Tuta
Energia", "Mother Brain"→"Cervello Madre" (m., "il Cervello Madre"),
"Morph Ball"→"Morfosfera", "Gravity Suit"→"Tuta Gravità", "Space
Jump"→"Salto Spaziale", "Plasma Beam"→"Raggio Plasma", "Zero
Suit"→"Tuta Zero". Quattro punti a confidenza media del Supervisore:
"Mothership"→"Nave Madre" (corretta anche un'incoerenza IT/EN),
"Parasite Queen"→"Parassita Regina", "Metroid Queen"→"Regina dei
Metroid" (scartata "Metroid Sovrana"), e la "Regina degli X" respinta
come errore di trama (vedi sopra). "Mother Brain"/Cervello Madre
(Zebes) e "Master Brain" (IA del Doomseye in Federation Force) restano
entità distinte, mai armonizzate; "Master Brain" non tradotto, con
parentesi esplicita in sinossi per evitare ambiguità.

## Mortal Kombat

### Musica

#### Tracklist completa saga (prima volta, campo da creare/popolare)

- **Proposta**: popolare il campo `tracks` della saga (attualmente
  `[]`, mai popolato) con una playlist di 7 brani, ordine cronologico
  di uscita: Techno Syndrome (*Mortal Kombat*, 1992/Sega CD), MKII
  Title Theme (*Mortal Kombat II*, 1993), MK3 Title Theme (*Mortal
  Kombat 3*, 1995), MK2011 Title Theme (*Mortal Kombat*, 2011), MKX
  Title Theme (*Mortal Kombat X*, 2015), A Matter of Time/MK11 Main
  Theme (*Mortal Kombat 11*, 2019), MK1 Main Theme (*Mortal Kombat 1*,
  2023).
- **Origine**: Musicista.
- **Motivazione**: prima playlist della saga, copertura cronologica
  della sola Linea Videoludica Mainline (nessun brano dagli universi
  cinematografici/TV appena aggiunti).
- **Data**: 2026-09-09 (richiamo mirato notturno, saga 6/10).
- **Stato**: accettata nel merito, bloccata per asset mancante - tutti
  e 7 i brani sono nuovi per il sito, da caricare su R2. Il campo resta
  `tracks: []` fino al caricamento.

### Media aggiunti

Saga già pubblicata, ampliata da 3 a 7 universi in questo ciclo: 4
nuovi universi (11 voci) + 3 aggiunte a universi già esistenti, per un
totale di 14 nuove voci (nessuna gemella), tutte inserite nella stessa
sessione, 2026-09-09.

- Nuovo universo **Film Anni '90** (`mk-1995-film` → `mk-annihilation`,
  span 1995 – 1997, 3 voci) - richiamo mirato, 2026-09-09.
- Nuovo universo **Mortal Kombat Legacy** (`mk-legacy-rebirth` →
  `mk-legacy-series`, span 2010 – 2013, 2 voci) - richiamo mirato,
  2026-09-09.
- Nuovo universo **Mortal Kombat Legends** (`mk-legends-scorpions-
  revenge` → `mk-legends-cage-match`, span 2020 – 2023, 4 voci) -
  richiamo mirato, 2026-09-09.
- Nuovo universo **Film Reboot** (`mk-2021-film` → `mk-2026-film`,
  span 2021 – 2026, 2 voci) - richiamo mirato, 2026-09-09.
- `mythologies-subzero` - Mortal Kombat Mythologies: Sub-Zero
  (VIDEOGIOCO, 1997) - voce a sé, aggiunta a Timeline Originale
  (universo già esistente) come nuova PRIMA voce, prima di `mk1-1992`
  - richiamo mirato, 2026-09-09.
- `mkx-comic-2015` - Mortal Kombat X (FUMETTO, 2015) - voce a sé,
  aggiunta a Timeline Rebooted (universo già esistente) tra `mk9-2011`
  e `mkx-2015` - richiamo mirato, 2026-09-09.
- `mk-vs-dc-2008` - Mortal Kombat vs. DC Universe (VIDEOGIOCO, 2008) -
  voce a sé, aggiunta a Timeline Rebooted (universo già esistente)
  DOPO `mk11-2019`, come ultima voce dell'universo nonostante l'anno
  di uscita più basso (posizione narrativa, non cronologica) -
  richiamo mirato, 2026-09-09.
- `mk-1995-film` - Mortal Kombat (LIVE ACTION, 1995) - voce a sé, prima
  voce del nuovo universo Film Anni '90 - richiamo mirato, 2026-09-09.
- `mk-journey-begins` - Mortal Kombat: The Journey Begins
  (CORTOMETRAGGIO, 1995) - voce a sé - richiamo mirato, 2026-09-09.
- `mk-annihilation` - Mortal Kombat - Distruzione Totale (LIVE ACTION,
  1997) - voce a sé, ultima voce di Film Anni '90 - richiamo mirato,
  2026-09-09.
- `mk-legacy-rebirth` - Mortal Kombat: Rebirth (CORTOMETRAGGIO, 2010) -
  voce a sé, prima voce del nuovo universo Mortal Kombat Legacy -
  richiamo mirato, 2026-09-09.
- `mk-legacy-series` - Mortal Kombat: Legacy (SERIE TV, 2011 – 2013) -
  voce a sé, ultima voce di Mortal Kombat Legacy - richiamo mirato,
  2026-09-09.
- `mk-legends-scorpions-revenge` - Mortal Kombat Legends: Scorpion's
  Revenge (FILM D'ANIMAZIONE, 2020) - voce a sé, prima voce del nuovo
  universo Mortal Kombat Legends, prima uso sul sito del tipo "FILM
  D'ANIMAZIONE"/"ANIMATED FILM" - richiamo mirato, 2026-09-09.
- `mk-legends-battle-of-realms` - Mortal Kombat Legends: Battle of the
  Realms (FILM D'ANIMAZIONE, 2021) - voce a sé - richiamo mirato,
  2026-09-09.
- `mk-legends-snow-blind` - Mortal Kombat Legends: Snow Blind (FILM
  D'ANIMAZIONE, 2022) - voce a sé - richiamo mirato, 2026-09-09.
- `mk-legends-cage-match` - Mortal Kombat Legends: Cage Match (FILM
  D'ANIMAZIONE, 2023) - voce a sé, ultima voce di Mortal Kombat
  Legends - richiamo mirato, 2026-09-09.
- `mk-2021-film` - Mortal Kombat (LIVE ACTION, 2021) - voce a sé, prima
  voce del nuovo universo Film Reboot - richiamo mirato, 2026-09-09.
- `mk-2026-film` - Mortal Kombat II (LIVE ACTION, 2026) - voce a sé,
  ultima voce di Film Reboot; titolo identico a `mk2-1993` (Timeline
  Originale) ma titolo reale del film, non un refuso - richiamo
  mirato, 2026-09-09.

### Nota procedurale - riordino strutturale, blurb, palette, allucinazione intercettata

Ampliamento da 3 a 7 universi, il più grande di questa sessione
notturna - modifiche strutturali oltre alle semplici aggiunte:

- **Riordino dell'intero array `universes`** (non solo append dei 4
  nuovi): criterio anno di nascita, nessun espediente narrativo unifica
  le 7 diramazioni. Ordine finale: Timeline Originale (1992) → Film
  Anni '90 (1995) → Mortal Kombat Legacy (2010) → Timeline Rebooted
  (nato 2011 con MK9, non 2008 - MK vs DC è un retcon successivo) →
  Mortal Kombat Legends (2020) → Film Reboot (2021) → Nuova Era (2023).
- **Correzione dello span di Timeline Rebooted**: da "2011 – 2019" a
  "2008 – 2019" (per `mk-vs-dc-2008`, releaseYear più basso
  dell'universo pur restando narrativamente l'ultima voce).
- **Nuovo blurb della saga** (sostituisce quello troncato a metà
  frase): riscritto da Scrittore/Linguista, correzione di traduzione EN
  del Supervisore in revisione. Copre tutti e 7 gli universi senza
  descrivere la trama di un singolo titolo.
- **7 sequenze palette** (campo `uni.palette`, già esistente sul sito)
  applicate a ciascuno dei 7 universi dall'Artista - dettaglio completo
  nel pacchetto tecnico. `palette` e `accentColor` a livello di saga
  restano invariati.
- **Nuovo tipo "FILM D'ANIMAZIONE"/"ANIMATED FILM"**: mai usato prima
  sul sito, introdotto dalle 4 voci di Mortal Kombat Legends.
- **Allucinazione del Ricercatore intercettata e scartata**:
  `mk11-comic-2019` (presunta miniserie fumetto IDW "Mortal Kombat 11",
  Matthew Dow Smith/Carlos Magno) non risulta mai esistita - verificato
  su più fonti (tra cui lo sceneggiatore della vera miniserie MKX 2015,
  che nega l'esistenza di un fumetto MK11). Scartata prima della
  scrittura, nessuna sinossi prodotta.

## NieR/Drakengard

Saga interamente nuova, una delle 10 individuate dal Project Manager
per il turno notturno 2/notte 3. Struttura più complessa finora in
questa sessione: 2 universi collegati da `universeLink` (`drakengard` →
`nier`, stesso modello Rapture/Columbia di BioShock) e, al loro
interno, 2 voci gemelle (`twin`) - primo caso in cui i due meccanismi
coesistono nella stessa saga. 13 voci totali (11 a sé + 2 gemelle): 4
in `drakengard` (Drakengard 3 → Drag-On Dragoon 3: Story Side →
Drakengard → Drakengard 2) e 9 in `nier` (7 voci reali + 2 gemelle:
NieR Gestalt/Replicant, Grimoire NieR, YoRHa Stage Play + gemella
YoRHa: Pearl Harbor Descent Record, NieR: Automata + gemella NieR:
Automata: Long Story Short, NieR: Automata: Short Story Long, NieR:
Automata Ver1.1a, NieR Re[in]carnation). Introdotto anche 1 type mai
usato prima, `TEATRO`/`STAGE PLAY` (YoRHa Stage Play), senza modifiche
di codice.

### Decisioni di scope importanti

- **Meccanismo `universeLink` Drakengard → NieR**: il Finale E di
  Drakengard (2003) - Caim e Angelus risucchiati nella Tokyo 2003
  contemporanea e uccisi fuori dal proprio mondo - è l'evento che
  scatena la sostanza magica alla radice della White Chlorination
  Syndrome/Necrografia del mondo di NieR, 1300 anni dopo. Collegamento
  ufficiale (contenuto in-game, dichiarazioni di Yoko Taro), non
  un'ipotesi tematica: `drakengard` genera l'aggancio in fondo alla
  propria linea (`edge: "end"`, dopo Drakengard 2), `nier` lo riceve in
  apertura (`edge: "start"`, prima di NieR Gestalt/Replicant).
- **Manga "Shi Ni Itaru Aka" (Fatal Crimson) escluso integralmente**:
  nessuna voce, nessuna nota, nessun disclaimer. Segue dichiaratamente
  una linea "Drakengard 1.3" alternativa e non canonica a valle del
  Finale A di Drakengard 3 - a differenza di Drakengard 2 (incluso come
  ramo isolato/specchio, ma parte della continuity ufficiale), qui è la
  fonte stessa a dichiarare la propria non-canonicità.
- **Saggio critico "The Strange Works of Taro Yoko" escluso**: materiale
  critico/analitico sull'autore, non narrativo - nessuna trama
  collocabile sulla linea del tempo, non raggiunge la soglia minima per
  diventare nota (serve comunque un collegamento narrativo con un media
  esistente).
- **Drakengard 2 incluso come ramo isolato/specchio**, comunicato solo
  in prosa nella sinossi (nessun `lineStyle`): sequel del solo Finale A
  di Drakengard, reso non-canonico come prosecuzione dal retcon di
  Drakengard 3 (2013), ma senza che la fonte ufficiale ne dichiari la
  non-canonicità in sé - per questo resta incluso, a differenza di "Shi
  Ni Itaru Aka".
- **NieR Gestalt/Replicant e Grimoire NieR**: ciascuno è una voce unica
  (non due), con le rispettive edizioni successive (remaster
  ver.1.22474487139..., Grimoire NieR: Revised Edition) annotate in
  prosa dentro la stessa voce anziché come voci a sé.

### Correzione terminologica

**"Culto dei Guardiani"/"Guardiani" → "Culto dei Messaggeri"/"Messaggeri"**
(IT): resa iniziale sbagliata, corretta dal Linguista in tutte le
occorrenze reali (voce "Drag-On Dragoon 3: Story Side": 1 occorrenza;
voce "Drakengard": 4 occorrenze). Confidenza medio-alta (fonti
secondarie convergenti, non testo di gioco verificato in prima
persona). EN invariato, "Cult of the Watchers"/"Watchers". Altre due
correzioni minori, voce "NieR Gestalt/Replicant": "Cicatrice Nera
(Black Scrawl)" → "Necrografia (Black Scrawl)" (IT, "Cicatrice Nera"
era traduzione letterale mai attestata; "Necrografia" confermata da più
fonti italiane sull'edizione ver.1.22 con testi ufficiali; EN resta
"Black Scrawl") e "Project Gestalt" → "Progetto Gestalt" (solo IT, EN
invariato).

### Musica

#### Tracklist completa saga (prima volta, saga interamente nuova)

- **Proposta**: creare il campo `tracks` della saga (nuova, quindi
  inesistente fino ad ora) e popolarlo con una playlist di 7 brani, in
  ordine di fama/gradimento decrescente: "Weight of the World" (*NieR:
  Automata*, tema del finale, Best Score ai The Game Awards 2017), "Song
  of the Ancients" (*NieR Gestalt/Replicant*, tema di Devola e Popola),
  "Amusement Park" (*NieR: Automata*, brano più ascoltato in streaming
  della colonna sonora), "Kainé / Salvation" (*NieR Gestalt/Replicant*,
  tema di battaglia di Kainé), "A Beautiful Song" (*NieR: Automata*,
  tema ricorrente, terzo brano più ascoltato in streaming), "Ashes of
  Dreams" (*NieR Gestalt/Replicant*, titoli di coda, versione inglese
  cantata), "This Silence Is Mine" (*Drakengard 3*, titoli di coda,
  cantata da Chihiro Onitsuka).
- **Origine**: Musicista.
- **Motivazione**: prima playlist della saga, fama/gradimento reale di
  critica e community (non gusto personale). Perimetro: i soli
  videogiochi con OST propria confermata (Drakengard, Drakengard 2,
  Drakengard 3, NieR Gestalt/Replicant incl. remaster, NieR: Automata,
  NieR Re[in]carnation); le voci non-videoludiche (romanzi, fumetti,
  anime, teatro) restano fuori per regola fissa. Nessun brano da
  Drakengard (2003), Drakengard 2 o NieR Re[in]carnation: nessuno dei
  tre ha un brano di fama comparabile ai due titoli principali NieR.
  Distribuzione: 3 tracce da NieR: Automata, 3 da NieR
  Gestalt/Replicant, 1 da Drakengard 3 - conseguenza della fama reale
  (la OST Okabe/MONACA per NieR è tra le più celebrate della storia dei
  videogiochi), non decisa a tavolino.
- **Data**: 2026-09-10 (sessione notturna, 2/notte 3).
- **Stato**: accettata nel merito, bloccata per asset mancante - tutte
  e 7 le tracce sono nuove per il sito, da caricare su R2. Il
  Programmatore crea comunque il campo `tracks: []`, vuoto in attesa
  dei file.

### Media aggiunti

Saga interamente nuova: 2 nuovi universi e 13 nuove voci (11 voci a sé +
2 gemelle nidificate nelle rispettive voci principali, nessuna voce
STORIA), tutte inserite nella stessa sessione notturna, 2026-09-10.

- Nuovo universo **Drakengard** (`drakengard-3` → `drakengard-2`, span
  Era di Zero – Drakengard 2 (18 anni dopo Drakengard), 4 voci,
  `universeLink` verso `nier`) - sessione notturna, 2026-09-10.
- Nuovo universo **NieR** (`nier-gestalt-replicant` →
  `nier-reincarnation`, span 1300 anni dopo Drakengard – 2024, 7 voci
  reali + 2 gemelle, `universeLink` da `drakengard`) - sessione
  notturna, 2026-09-10.
- `drakengard-3` - Drakengard 3 (VIDEOGIOCO, 2013) - voce a sé, prima
  voce della saga - sessione notturna, 2026-09-10.
- `drag-on-dragoon-3-story-side` - Drag-On Dragoon 3: Story Side
  (ROMANZO, 2014) - voce a sé - sessione notturna, 2026-09-10.
- `drakengard` - Drakengard (VIDEOGIOCO, 2003) - voce a sé, contiene il
  Finale E, punto esatto dell'aggancio `universeLink` verso `nier` -
  sessione notturna, 2026-09-10.
- `drakengard-2` - Drakengard 2 (VIDEOGIOCO, 2005) - voce a sé, ramo
  isolato/specchio del solo Finale A, ultima voce di Drakengard -
  sessione notturna, 2026-09-10.
- `nier-gestalt-replicant` - NieR Gestalt/Replicant (VIDEOGIOCO, 2010,
  include nota sul remaster ver.1.22474487139..., 2021) - voce a sé,
  prima voce di NieR - sessione notturna, 2026-09-10.
- `grimoire-nier` - Grimoire NieR (RACCOLTA DI RACCONTI, 2010, include
  nota sulla Revised Edition 2021/2023) - voce a sé - sessione notturna,
  2026-09-10.
- `yorha-stage-play` - YoRHa Stage Play (TEATRO, 2015 – in corso) - voce
  a sé, prima uso sul sito del tipo "TEATRO"/"STAGE PLAY" - sessione
  notturna, 2026-09-10.
- `yorha-pearl-harbor-descent-record` - YoRHa: Pearl Harbor Descent
  Record (MANGA, 2020/2021) - voce gemella di `yorha-stage-play` -
  sessione notturna, 2026-09-10.
- `nier-automata` - NieR: Automata (VIDEOGIOCO, 2017) - voce a sé -
  sessione notturna, 2026-09-10.
- `nier-automata-long-story-short` - NieR: Automata: Long Story Short
  (ROMANZO, 2017/2018) - voce gemella di `nier-automata` - sessione
  notturna, 2026-09-10.
- `nier-automata-short-story-long` - NieR: Automata: Short Story Long
  (RACCOLTA DI RACCONTI, 2017) - voce a sé (non gemella: racconti
  originali paralleli, non un riracconto della trama principale) -
  sessione notturna, 2026-09-10.
- `nier-automata-ver1-1a` - NieR: Automata Ver1.1a (ANIME, 2023 – 2024)
  - voce a sé (non gemella: integra materiale sostanziale dallo YoRHa
  Stage Play, non un semplice adattamento) - sessione notturna,
  2026-09-10.
- `nier-reincarnation` - NieR Re[in]carnation (VIDEOGIOCO MOBILE, 2021 –
  2024) - voce a sé, ultima voce della saga - sessione notturna,
  2026-09-10.

## Prince of Persia

### Musica

#### Tracklist completa saga (prima volta, campo da creare/popolare)

- **Proposta**: popolare il campo `tracks` della saga (attualmente
  `[]`, mai popolato) con una playlist di 7 brani: I Stand Alone
  (Godsmack) (*Warrior Within*), Main Theme (*The Two Thrones*), Time
  Only Knows (Stuart Chatwood feat. Cindy Gomez) (*Sands of Time*),
  Main Theme (*Prince of Persia*, 2008), Welcome Within (Stuart
  Chatwood) (*Warrior Within*), Main Theme (*The Lost Crown*), Welcome
  to Persia (Stuart Chatwood) (*Sands of Time*).
- **Origine**: Musicista.
- **Motivazione**: prima playlist della saga, temi più iconici a
  copertura di tutti e 4 gli universi già pubblicati (Continuità
  Originale esclusa, nessun brano iconico individuato per quei tre
  titoli). Ordine rivisto dal Supervisore per evitare tre tracce "Main
  Theme" adiacenti.
- **Data**: 2026-09-09 (richiamo mirato notturno, saga 7/10, ultima
  delle 7 saghe assegnate direttamente da Sakrem prima del passaggio
  al Project Manager).
- **Stato**: accettata nel merito, bloccata per asset mancante - tutti
  e 7 i brani sono nuovi per il sito, da caricare su R2. Il campo
  resta `tracks: []` fino al caricamento.

### Media aggiunti

Saga già pubblicata, ampliata da 4 a 5 universi in questo ciclo: 1
nuovo universo (1 voce, universo e voce coincidenti, stesso pattern
già usato per `lost-crown`), nessuna aggiunta a universi già
esistenti - richiamo mirato, 2026-09-09.

- Nuovo universo **The Rogue Prince of Persia** (`rogue-prince-of-
  persia`, span 2024 – 2025, 1 voce, scollegato volutamente dagli
  altri 4 universi, nessun `universeLink`) - richiamo mirato,
  2026-09-09.
- `rogue-prince-of-persia` - The Rogue Prince of Persia (VIDEOGIOCO,
  2024-2025) - voce a sé, unica voce del nuovo universo - richiamo
  mirato, 2026-09-09.

### Nota procedurale - 3 annotazioni a voci esistenti, prime sequenze gradient per-universo

Oltre al nuovo universo/voce sopra, modifiche a voci già pubblicate
(richiamo mirato 7/10, ultima saga assegnata direttamente da Sakrem
prima del passaggio al Project Manager):

- **3 annotazioni a voci esistenti** (non nuovi media, non comparse
  quindi in "Media aggiunti"):
  - `pop-1989`: releaseYear aggiornato da "1989" a "1989 (Remake:
    2007)" (releaseYearEn allineato) - nessuna modifica alla sinossi.
  - `two-thrones`: releaseYear aggiornato da "2005" a "2005 (Rival
    Swords: 2007)" (releaseYearEn allineato) - nessuna modifica alla
    sinossi.
  - `lost-crown`: sinossi integrata in coda con un nuovo paragrafo
    sul DLC narrativo Mask of Darkness (settembre 2024, Radjen e il
    Mind Palace), testo completo con dettaglio Kushan/villaggio
    natale distrutto - releaseYear resta "2024" invariato.
- **5 sequenze gradient per-universo** (campo nuovo, mai usato prima
  sul sito - schema tecnico lasciato al Programmatore, es. array di
  hex per ciascun oggetto `universe`): Continuità Originale (`#c9a227
  → #8a4a1f`), Le Sabbie del Tempo (`#c9a227 → #2e6b6b → #7a1620 →
  #5b3a7a`), Reboot 2008 (`#241f2e → #c9a227`), The Lost Crown
  (`#c9a227 → #3a2e6b`), The Rogue Prince of Persia (`#e8622f →
  #c9a227`). `palette` e `accentColor` a livello di saga restano
  invariati.
- Nessuna immagine/watermark disponibile per la nuova voce/universo in
  questo ciclo (nessun asset caricato su R2).

## Persona

### Musica

#### Tracklist completa saga (prima volta, saga interamente nuova)

- **Proposta**: creare il campo `tracks` della saga (nuova, quindi
  inesistente fino ad ora) e popolarlo con una playlist di 7 brani: Life
  Will Change (*Persona 5*), Last Surprise (*Persona 5*), Mass
  Destruction (*Persona 3*, anche in *Persona 3 Reload*), Reach Out to
  the Truth (*Persona 4*, anche in *Persona 4 Golden*), Beneath the Mask
  (*Persona 5*), Memories of You (*Persona 3*, anche in *Persona 3
  Reload*), Burn My Dread (*Persona 3*, anche in *Persona 3 Reload*).
- **Origine**: Musicista.
- **Motivazione**: sondaggi ufficiali dei fan Atlus (DJ Morgana per P5
  Royal, Persona 3 Portable, Persona 4 Golden, 2020/2022) incrociati
  con la fama pubblica internazionale (Beneath the Mask preferita a un
  brano meglio piazzato nel solo sondaggio giapponese, per notorietà
  internazionale/presenza in Super Smash Bros. Ultimate). Nessuna
  traccia da Megami Ibunroku Persona/Persona 2, per assenza di
  notorietà pubblica comparabile.
- **Data**: 2026-09-09 (sessione notturna, prima delle 3 saghe trovate
  dal Project Manager in bypass).
- **Stato**: accettata nel merito, bloccata per asset mancante - tutte
  e 7 le tracce sono nuove per il sito, da caricare su R2. Il
  Programmatore crea comunque il campo `tracks: []`, vuoto in attesa
  dei file.

### Media aggiunti

Saga interamente nuova: 3 nuovi universi, 16 nuove voci principali + 7
gemelle nidificate (23 entry totali), tutte inserite nella stessa
sessione notturna, 2026-09-09.

- Nuovo universo **Mikage-chō** (`megami-ibunroku-persona` →
  `megami-ibunroku-persona-manga`, span 1996 – 2000, 2 voci) - sessione
  notturna, 2026-09-09.
- Nuovo universo **Sumaru** (`persona-2-innocent-sin` →
  `persona-2-eternal-punishment`, span 1999 – 2000, 2 voci) - sessione
  notturna, 2026-09-09.
- Nuovo universo **Velvet Room** (`persona-3` → `persona-5-tactica`,
  span 2006 – 2023, 12 voci principali + 7 gemelle nidificate - fusione
  di quelli che sarebbero stati 3 universi separati Persona 3/Persona
  4/Persona 5 in uno unico, vedi nota sotto) - sessione notturna,
  2026-09-09.
- `megami-ibunroku-persona` - Megami Ibunroku Persona / Shin Megami
  Tensei: Persona (VIDEOGIOCO, 1996, Remake: 2009/2010) - voce a sé,
  prima voce della saga - sessione notturna, 2026-09-09.
- `megami-ibunroku-persona-manga` - Megami Ibunroku Persona (manga,
  1996-2000) - voce a sé, indipendente (non gemella: trama alternativa
  con antagonista originale Kazuya Toudou) - sessione notturna,
  2026-09-09.
- `persona-2-innocent-sin` - Persona 2: Innocent Sin (VIDEOGIOCO, 1999,
  Remake: 2011) - voce a sé, prima voce di Sumaru - sessione notturna,
  2026-09-09.
- `persona-2-eternal-punishment` - Persona 2: Eternal Punishment
  (VIDEOGIOCO, 2000) - voce a sé, ultima voce di Sumaru - sessione
  notturna, 2026-09-09.
- `persona-3` - Persona 3 / Persona 3 Reload (VIDEOGIOCO, 2006, Remake:
  2024) - voce a sé, prima voce di Velvet Room, host di 2 gemelle -
  sessione notturna, 2026-09-09.
- `persona-3-the-movie` - Persona 3 the Movie (tetralogia anime,
  2013-2016) - voce gemella di `persona-3` - sessione notturna,
  2026-09-09.
- `persona-3-manga` - Persona 3 (manga, 2007-2017) - voce gemella di
  `persona-3` - sessione notturna, 2026-09-09.
- `persona-4` - Persona 4 / Persona 4 Golden (VIDEOGIOCO, 2008, Remake:
  2027) - voce a sé, host di 3 gemelle - sessione notturna, 2026-09-09.
- `persona-4-the-animation` - Persona 4: The Animation (serie animata,
  2011-2012) - voce gemella di `persona-4` - sessione notturna,
  2026-09-09.
- `persona-4-the-golden-animation` - Persona 4: The Golden Animation
  (serie animata, 2014) - voce gemella di `persona-4` - sessione
  notturna, 2026-09-09.
- `persona-4-manga` - Persona 4 (manga, 2008-2019) - voce gemella di
  `persona-4` - sessione notturna, 2026-09-09.
- `persona-4-arena` - Persona 4 Arena (VIDEOGIOCO, 2012) - voce a sé -
  sessione notturna, 2026-09-09.
- `persona-4-arena-ultimax` - Persona 4 Arena Ultimax (VIDEOGIOCO,
  2013/2014) - voce a sé - sessione notturna, 2026-09-09.
- `persona-q` - Persona Q: Shadow of the Labyrinth (VIDEOGIOCO, 2014) -
  voce a sé - sessione notturna, 2026-09-09.
- `persona-4-dancing-all-night` - Persona 4: Dancing All Night
  (VIDEOGIOCO, 2015) - voce a sé, ultima voce del blocco Persona 4 -
  sessione notturna, 2026-09-09.
- `persona-5` - Persona 5 / Persona 5 Royal (VIDEOGIOCO, 2016, Royal:
  2019/2020) - voce a sé, host di 2 gemelle - sessione notturna,
  2026-09-09.
- `persona-5-the-animation` - Persona 5: The Animation (serie animata,
  2018-2019, voce fusa: serie TV + 2 speciali) - voce gemella di
  `persona-5` - sessione notturna, 2026-09-09.
- `persona-5-manga` - Persona 5 (manga, 2016-in corso) - voce gemella di
  `persona-5` - sessione notturna, 2026-09-09.
- `persona-5-day-breakers` - Persona 5: The Day Breakers
  (cortometraggio, 2016) - voce a sé - sessione notturna, 2026-09-09.
- `persona-q2` - Persona Q2: New Cinema Labyrinth (VIDEOGIOCO, 2018) -
  voce a sé - sessione notturna, 2026-09-09.
- `dancing-moonlight-starlight` - Persona 3: Dancing in Moonlight /
  Persona 5: Dancing in Starlight (VIDEOGIOCO, 2018) - voce a sé,
  fusione cross-saga P3+P5, riclassificata standalone (non gemella,
  trama propria) - sessione notturna, 2026-09-09.
- `persona-5-strikers` - Persona 5 Strikers (VIDEOGIOCO, 2020) - voce a
  sé - sessione notturna, 2026-09-09.
- `persona-5-tactica` - Persona 5 Tactica (VIDEOGIOCO, 2023) - voce a
  sé, ultima voce della saga - sessione notturna, 2026-09-09.

**Nota per Sakrem - architettura a 3 universi invece di 5**: il
Supervisore ha fuso quelli che sarebbero stati Persona 3, Persona 4 e
Persona 5 in un unico universo "Velvet Room", invece di 3 universi
separati collegati da `universeLink`. Decisione di giudizio motivata dai
4 titoli crossover diretti (Persona 4 Arena/Ultimax, Persona Q, Persona
Q2, Dancing in Moonlight/Starlight), non imposta da una regola scritta -
reversibile se Sakrem preferisce l'architettura a 3 universi separati.

## Pokémon

### Nota per Sakrem - ciclo interrotto scoperto e corretto

Richiamo mirato notturno (2/11 saghe assegnate da Sakrem). La saga era
pubblicata con `canonNote.intro` + `canonNote.titles` (stringa
riassuntiva) + `canonNote.outro`, ma priva del campo `chain` che le
altre saghe con cronologia fan-made incerta (es. Doom) usano per
elencare i titoli in ordine. Il `titles` esistente non veniva mai
renderizzato (campo morto) e aveva titoli in inglese anche nel testo
IT. Il Supervisore ha ricostruito la `chain` (12 titoli mainline, incl.
Leggende Pokémon: Arceus e Z-A) scegliendo solo `canonNote.chain`, non
la struttura piena a `universes`/`entries`: motivazione tecnica, non di
merito - il `canonNote` di Pokémon non ha mai avuto quella struttura,
introdurla avrebbe richiesto nuove voci/universi fuori scope per un
richiamo sulla sola cronologia. Per questo la raccomandazione del
Selezionatore di includere anche Pokémon Horizons (stagione 3), il
manga Pokémon Adventures, Pokémon Tales e Pokémon Wild Card non è
stata seguita: quella struttura non ha dove ospitarli senza una
revisione più ampia. Da rivalutare se Sakrem vuole una struttura più
ricca (a universi/voci) invece della sola `chain` testuale.

### Musica

#### Tracklist completa saga (prima volta, campo da popolare)

- **Proposta**: popolare il campo `tracks` della saga (attualmente
  `[]`, mai popolato) con una playlist di 7 brani: Battle! Cynthia
  (*Pokémon Diamante/Perla/Platino*), Lavender Town (*Pokémon
  Rosso/Blu/Giallo*), Battle! Champion Iris (*Pokémon Nero 2/Bianco
  2*), Route 1 (*Pokémon Rosso/Blu/Giallo*), N's Theme (*Pokémon
  Nero/Bianco*), Battle! Champion (Lance/Red) (*Pokémon
  Rosso/Blu/Giallo*), Team Rocket Battle Theme (*Pokémon
  Rosso/Blu/Giallo*).
- **Origine**: Musicista.
- **Motivazione**: prima playlist della saga, fama/gradimento reale
  (poll ufficiale Famitsu novembre 2024 + rassegne critiche/fan
  indipendenti), peso particolare su Rosso/Blu/Giallo e
  Diamante/Perla/Platino.
- **Data**: 2026-09-09 (richiamo mirato notturno, saga 2/11).
- **Stato**: accettata nel merito, bloccata per asset mancante - tutti
  e 7 i brani sono nuovi per il sito, da caricare su R2. Il campo
  resta `tracks: []` fino al caricamento.

## The Witcher

### Musica

#### Tracklist completa saga (prima volta, saga interamente nuova)

- **Proposta**: creare il campo `tracks` della saga (nuova, quindi
  inesistente fino ad ora) e popolarlo con una playlist di 7 brani:
  Geralt of Rivia (*The Witcher 3: Wild Hunt*), The Wolven Storm
  (Priscilla's Song) (*The Witcher 3: Wild Hunt*), Silver for Monsters
  (*The Witcher 3: Wild Hunt*), Ladies of the Wood (*The Witcher 3:
  Wild Hunt*), Steel for Humans (*The Witcher 3: Wild Hunt*), Assassins
  of Kings (*The Witcher 2: Assassins of Kings*), For Honor! For
  Toussaint! (*The Witcher 3: Blood and Wine*).
- **Origine**: Musicista.
- **Motivazione**: prima playlist della saga, concentrata sulla OST di
  *The Witcher 3* (di gran lunga la più pluripremiata e riconosciuta
  della saga, fama pubblica superiore a Witcher 1 e 2 messi insieme)
  più il tema principale di *The Witcher 2* e il tema da combattimento
  di *Blood and Wine*. Escluso "Toss a Coin to Your Witcher": non suona
  ufficialmente in alcun videogioco della saga (esiste solo in mod non
  ufficiali), fama dovuta solo alla serie Netflix - fuori dal perimetro
  "solo videogiochi confermati".
- **Data**: 2026-09-09 (sessione notturna, saga 9/10, 2a delle 3 saghe
  trovate dal Project Manager in bypass).
- **Stato**: accettata nel merito, bloccata per asset mancante - tutte
  e 7 le tracce sono nuove per il sito, da caricare su R2. Il
  Programmatore crea comunque il campo `tracks: []`, vuoto in attesa
  dei file.

### Media aggiunti

Saga interamente nuova: 3 nuovi universi paralleli (Libri di
Sapkowski, Videogiochi CDPR, Netflix - tutti e 3 ufficiali ma con
dettagli narrativi divergenti tra loro, per questo senza
`universeLink`), 36 voci principali + 3 gemelle nidificate + 2
imagePending (41 voci totali), sessione notturna 2026-09-09.

- Nuovo universo **Libri** (`witcher-komiks-polacco` →
  `witcher-signora-del-lago`, 13 voci: 10 principali + 3 gemelle
  nidificate) - sessione notturna, 2026-09-09.
- Nuovo universo **Videogiochi** (`witcher-old-world` →
  `witcher-4-polaris`, 20 voci: 18 principali con sinossi + 2
  imagePending senza sinossi) - sessione notturna, 2026-09-09.
- Nuovo universo **Netflix** (`witcher-blood-origin` →
  `witcher-stagione-4`, 8 voci) - sessione notturna, 2026-09-09.
- `witcher-komiks-polacco` - Wiedźmin (FUMETTO, 1993-1995) - voce a sé,
  prima voce della saga - sessione notturna, 2026-09-09.
- `witcher-crocevia-dei-corvi` - Il Crocevia dei Corvi / Crossroads of
  Ravens (ROMANZO, 2024) - voce a sé - sessione notturna, 2026-09-09.
- `witcher-guardiano-degli-innocenti` - Il Guardiano degli Innocenti /
  The Last Wish (RACCOLTA DI RACCONTI, 1993) - voce a sé, host di 2
  gemelle - sessione notturna, 2026-09-09.
- `witcher-a-grain-of-truth` - The Witcher: Un Briciolo di Verità / A
  Grain of Truth (FUMETTO, 2021-2022) - voce gemella di
  `witcher-guardiano-degli-innocenti` - sessione notturna, 2026-09-09.
- `witcher-the-lesser-evil` - The Witcher: Il Male Minore / The Lesser
  Evil (FUMETTO, 2023-2024) - voce gemella di
  `witcher-guardiano-degli-innocenti` - sessione notturna, 2026-09-09.
- `witcher-spada-del-destino` - La Spada del Destino / Sword of Destiny
  (RACCOLTA DI RACCONTI, 1992) - voce a sé - sessione notturna,
  2026-09-09.
- `witcher-stagione-delle-tempeste` - La Stagione delle Tempeste /
  Season of Storms (ROMANZO, prequel, 2013) - voce a sé, host di 1
  gemella, ultima voce del sottogruppo "Racconti e origini" - sessione
  notturna, 2026-09-09.
- `witcher-fox-children` - The Witcher: Figli della Volpe / Fox
  Children (FUMETTO, 2015) - voce gemella di
  `witcher-stagione-delle-tempeste` - sessione notturna, 2026-09-09.
- `witcher-sangue-degli-elfi` - Il Sangue degli Elfi / Blood of Elves
  (ROMANZO, 1994) - voce a sé - sessione notturna, 2026-09-09.
- `witcher-tempo-della-guerra` - Il Tempo della Guerra / Time of
  Contempt (ROMANZO, 1995) - voce a sé - sessione notturna,
  2026-09-09.
- `witcher-battesimo-del-fuoco` - Battesimo del Fuoco / Baptism of Fire
  (ROMANZO, 1996) - voce a sé - sessione notturna, 2026-09-09.
- `witcher-torre-della-rondine` - La Torre della Rondine / The Tower of
  the Swallow (ROMANZO, 1997) - voce a sé - sessione notturna,
  2026-09-09.
- `witcher-signora-del-lago` - La Signora del Lago / The Lady of the
  Lake (ROMANZO, 1999) - voce a sé, ultima voce dell'Universo Libri -
  sessione notturna, 2026-09-09.
- `witcher-old-world` - The Witcher: Old World (BOARD GAME, 2023) -
  voce a sé, prima voce dell'Universo Videogiochi - sessione notturna,
  2026-09-09.
- `witcher-thronebreaker` - Thronebreaker: The Witcher Tales
  (VIDEOGIOCO, 2018) - voce a sé - sessione notturna, 2026-09-09.
- `witcher-1` - The Witcher (VIDEOGIOCO, 2007) - voce a sé - sessione
  notturna, 2026-09-09.
- `witcher-2` - The Witcher 2: Assassins of Kings (VIDEOGIOCO, 2011) -
  voce a sé - sessione notturna, 2026-09-09.
- `witcher-matters-of-conscience` - The Witcher: Matters of Conscience
  (FUMETTO, 2015) - voce a sé - sessione notturna, 2026-09-09.
- `witcher-house-of-glass` - The Witcher: La Casa di Vetro / House of
  Glass (FUMETTO, 2014) - voce a sé - sessione notturna, 2026-09-09.
- `witcher-killing-monsters` - The Witcher: Uccidere Mostri / Killing
  Monsters (FUMETTO, 2015) - voce a sé - sessione notturna,
  2026-09-09.
- `witcher-3` - The Witcher 3: Wild Hunt (VIDEOGIOCO, 2015) - voce a
  sé, con nota Gwent: The Witcher Card Game collegata - sessione
  notturna, 2026-09-09.
- `witcher-curse-of-crows` - The Witcher: La Maledizione dei Corvi /
  Curse of Crows (FUMETTO, 2016) - voce a sé - sessione notturna,
  2026-09-09.
- `witcher-3-hearts-of-stone` - The Witcher 3: Hearts of Stone
  (ESPANSIONE, 2015) - voce a sé - sessione notturna, 2026-09-09.
- `witcher-of-flesh-and-flame` - The Witcher: Di Carne e Fiamma / Of
  Flesh and Flame (FUMETTO, 2018) - voce a sé - sessione notturna,
  2026-09-09.
- `witcher-3-blood-and-wine` - The Witcher 3: Blood and Wine
  (ESPANSIONE, 2016) - voce a sé - sessione notturna, 2026-09-09.
- `witcher-ballad-of-two-wolves` - The Witcher: La Ballata dei Due Lupi
  / The Ballad of Two Wolves (FUMETTO, 2022) - voce a sé - sessione
  notturna, 2026-09-09.
- `witcher-fading-memories` - The Witcher: Ricordi Sbiaditi / Fading
  Memories (FUMETTO, 2018) - voce a sé - sessione notturna,
  2026-09-09.
- `witcher-witchs-lament` - The Witcher: Il Lamento della Strega /
  Witch's Lament (FUMETTO, 2021) - voce a sé - sessione notturna,
  2026-09-09.
- `witcher-once-upon-a-time-in-the-woods` - The Witcher: Once Upon a
  Time in the Woods (FUMETTO, 2021) - voce a sé - sessione notturna,
  2026-09-09.
- `witcher-wild-animals` - The Witcher: Wild Animals (FUMETTO, 2023) -
  voce a sé - sessione notturna, 2026-09-09.
- `witcher-frog-kiss` - The Witcher: Frog Kiss (FUMETTO, 2023) - voce a
  sé, ultima voce con sinossi del blocco fumetti - sessione notturna,
  2026-09-09.
- `witcher-songs-of-the-past` - The Witcher 3: Songs of the Past
  (ESPANSIONE, annuncio 27/05/2026, uscita attesa 2027, imagePending,
  senza sinossi) - voce a sé - sessione notturna, 2026-09-09.
- `witcher-4-polaris` - The Witcher IV (nome in codice "Polaris")
  (VIDEOGIOCO, uscita attesa 2027/2028, imagePending, senza sinossi) -
  voce a sé, ultima voce dell'Universo Videogiochi - sessione notturna,
  2026-09-09.
- `witcher-blood-origin` - The Witcher: Blood Origin (MINISERIE, 4
  episodi, 2022) - voce a sé, prima voce dell'Universo Netflix -
  sessione notturna, 2026-09-09.
- `witcher-nightmare-of-the-wolf` - The Witcher: Nightmare of the Wolf
  (FILM D'ANIMAZIONE, 2021) - voce a sé - sessione notturna,
  2026-09-09.
- `witcher-stagione-1` - The Witcher: Stagione 1 / Season 1 (SERIE TV,
  8 episodi, 2019) - voce a sé - sessione notturna, 2026-09-09.
- `witcher-sirens-of-the-deep` - The Witcher: Sirens of the Deep (FILM
  D'ANIMAZIONE, 2025) - voce a sé, scritta direttamente dal
  Supervisore (deviazione procedurale, vedi report di sessione) -
  sessione notturna, 2026-09-09.
- `witcher-stagione-2` - The Witcher: Stagione 2 / Season 2 (SERIE TV,
  2021) - voce a sé - sessione notturna, 2026-09-09.
- `witcher-stagione-3` - The Witcher: Stagione 3 / Season 3 (SERIE TV,
  pubblicata in due parti, 2023) - voce a sé - sessione notturna,
  2026-09-09.
- `witcher-the-rats-a-witcher-tale` - The Rats: A Witcher Tale (LIVE
  ACTION, spin-off, 2025) - voce a sé, scritta direttamente dal
  Supervisore (deviazione procedurale, vedi report di sessione) -
  sessione notturna, 2026-09-09.
- `witcher-stagione-4` - The Witcher: Stagione 4 / Season 4 (SERIE TV,
  2025) - voce a sé, ultima voce della saga - sessione notturna,
  2026-09-09.

**Nota per Sakrem - correzioni fattuali applicate dal Supervisore in
revisione finale**: `witcher-matters-of-conscience` riposizionata sulla
linea Videogiochi (spostata dal blocco post-saga a subito dopo
`witcher-2`) e anno corretto a 2015 (non 2019); `witcher-witchs-lament`
e `witcher-once-upon-a-time-in-the-woods` anni corretti a 2021 (non
2019 e 2020); titoli italiani ufficiali Panini applicati a 7 fumetti
Dark Horse "continuità giochi" (House of Glass, Killing Monsters,
Curse of Crows, Of Flesh and Flame, Fading Memories, Witch's Lament,
Ballad of Two Wolves); **Fjall**, non Balor, confermato primo strigo in
Blood Origin (Balor resta il mago antagonista); l'evento della Stagione
3 è il **Colpo di Thanedd**, non un inesistente "Torneo dei
Pretendenti".

**Nota per Sakrem - deviazione procedurale**: 2 delle voci Netflix
(`witcher-sirens-of-the-deep`, `witcher-the-rats-a-witcher-tale`) sono
state scritte direttamente dal Supervisore, saltando il passaggio
Scrittore/Linguista, per colmare una lacuna di ricerca scoperta tardi
nel ciclo (senza queste 2 voci la saga avrebbe avuto un buco reale: 2
media ufficiali già usciti nel 2025). Testo verificato su fonti
multiple (Netflix Tudum, stampa di settore) ma senza il consueto doppio
controllo. Reversibile se Sakrem preferisce un passaggio formale da
Scrittore/Linguista anche per queste due.

## Sonic the Hedgehog

### Musica

#### Tracklist completa saga (prima volta, saga interamente nuova)

- **Proposta**: creare il campo `tracks` della saga (nuova, quindi
  inesistente fino ad ora) e popolarla con una playlist di 7 brani: Live
  and Learn (*Sonic Adventure 2*), His World (*Sonic the Hedgehog*,
  2006), Green Hill Zone (*Sonic the Hedgehog*, 1991), Escape from the
  City (*Sonic Adventure 2*), Reach for the Stars (*Sonic Colors*/
  Sonic Colours), Open Your Heart (*Sonic Adventure*), Endless
  Possibility (*Sonic Unleashed*).
- **Origine**: Musicista.
- **Motivazione**: prima playlist della saga, fama/gradimento reale
  (classifiche di settore, setlist ufficiali dei tour "Sonic Symphony"
  2023-2025, popolarità streaming), concentrata sull'universo Games
  Canon perché lì si concentra la fama reale della colonna sonora
  Sonic; nessuna rappresentanza forzata per gli altri 5 universi
  (Archie, Fleetway, Sonic X, Sonic Boom, Sonic Cinematic Universe),
  privi di colonne sonore paragonabilmente celebri.
- **Data**: 2026-09-09 (sessione notturna, ultima saga della notte,
  3ª delle 3 saghe trovate dal Project Manager in bypass).
- **Stato**: accettata nel merito, bloccata per asset mancante - tutte
  e 7 le tracce sono nuove per il sito, da caricare su R2. Il
  Programmatore crea comunque il campo `tracks: []`, vuoto in attesa
  dei file.

### Media aggiunti

Saga interamente nuova: 6 nuovi universi e 57 nuove voci (56 con
sinossi + 1 imagePending senza sinossi, nessuna gemella), tutte
inserite nella stessa sessione notturna, 2026-09-09.

- Nuovo universo **Games Canon** (`sonic-1` → `sonic-racing-crossworlds`,
  1991-2025, 42 voci) - sessione notturna, 2026-09-09.
- Nuovo universo **Archie Comics "Mobius/Freedom Fighters"**
  (`archie-sonic` → `archie-sonic-universe`, 1993-2017, 3 voci) -
  sessione notturna, 2026-09-09.
- Nuovo universo **Fleetway UK "Sonic the Comic"**
  (`fleetway-sonic-comic`, 1993-2002, 1 voce) - sessione notturna,
  2026-09-09.
- Nuovo universo **Sonic X** (`sonic-x-anime` → `sonic-x-comic`,
  2003-2009, 2 voci) - sessione notturna, 2026-09-09.
- Nuovo universo **Sonic Boom** (`sonic-boom-rise-of-lyric` →
  `sonic-boom-comic`, 2014-2017, 5 voci) - sessione notturna,
  2026-09-09.
- Nuovo universo **Sonic Cinematic Universe** (`sonic-movie-1` →
  `sonic-movie-4`, 2020-2027, 4 voci + 1 imagePending) - sessione
  notturna, 2026-09-09.
- 42 voci del Games Canon (Era Classica: `sonic-1`, `sonic-cd`,
  `sonic-2`, `sonic-3-knuckles`, `sonic-chaotix`, `sonic-3d-blast`,
  `sonic-r`, `sonic-fang-hunter`, `sonic-mania`, `sonic-superstars`;
  Era Moderna I: `sonic-4`, `sonic-adventure`, `sonic-shuffle`,
  `sonic-adventure-2`, `sonic-advance`, `sonic-advance-2`,
  `sonic-battle`, `sonic-heroes`, `sonic-advance-3`,
  `shadow-the-hedgehog`, `sonic-rush`, `sonic-06`; Era Moderna II:
  `sonic-riders`, `sonic-rush-adventure`, `sonic-secret-rings`,
  `sonic-riders-zero-gravity`, `sonic-unleashed`,
  `sonic-black-knight`, `sonic-free-riders`, `sonic-colors`,
  `sonic-generations`, `sonic-x-shadow-generations`; Era Moderna III +
  IDW: `sonic-lost-world`, `team-sonic-racing`, `sonic-forces`,
  `sonic-idw-ongoing`, `sonic-idw-tangle-whisper`,
  `sonic-idw-bad-guys`, `sonic-idw-imposter-syndrome`,
  `sonic-frontiers`, `sonic-idw-scrapnik-island`,
  `sonic-racing-crossworlds`) - voci a sé - sessione notturna,
  2026-09-09.
- `archie-sonic`, `archie-knuckles`, `archie-sonic-universe` - voci a
  sé del nuovo universo Archie Comics - sessione notturna, 2026-09-09.
- `fleetway-sonic-comic` - Sonic the Comic (FUMETTO, 1993-2002) - voce
  a sé, unica voce del nuovo universo Fleetway UK - sessione notturna,
  2026-09-09.
- `sonic-x-anime` - Sonic X (ANIME, 2003-2006) - voce a sé, prima voce
  del nuovo universo Sonic X - sessione notturna, 2026-09-09.
- `sonic-x-comic` - Sonic X (Archie) (FUMETTO, 2005-2009) - voce a sé,
  confermata NON gemella (episodi originali intercalati, non
  retelling), ultima voce del nuovo universo Sonic X - sessione
  notturna, 2026-09-09.
- `sonic-boom-rise-of-lyric`, `sonic-boom-shattered-crystal`,
  `sonic-boom-fire-ice`, `sonic-boom-series`, `sonic-boom-comic` - voci
  a sé del nuovo universo Sonic Boom - sessione notturna, 2026-09-09.
- `sonic-movie-1`, `sonic-movie-2`, `knuckles-series`, `sonic-movie-3`
  - voci a sé del nuovo universo Sonic Cinematic Universe - sessione
  notturna, 2026-09-09.
- `sonic-movie-4` - Sonic 4 - Il Film (titolo IT provvisorio, FILM, in
  uscita 2027) - voce imagePending senza sinossi, ultima voce del
  nuovo universo Sonic Cinematic Universe - sessione notturna,
  2026-09-09.

**Nota per Sakrem - correzioni fattuali applicate dal Supervisore in
revisione finale**: sinossi di `sonic-06` riscritta (Iblis sigillato
dentro Elise, non in un reliquiario esterno; Mephiles imprigionato
nello Scepter of Darkness, manufatto distinto in possesso di Eggman;
finale corretto - la fiamma soffiata da Elise è Solaris ancora informe,
non la stessa custodita nel presunto reliquiario); sinossi di
`sonic-movie-3` integrata col voltafaccia di Ivo Robotnik contro Gerald
e il sacrificio congiunto Robotnik/Shadow per allontanare l'Eclipse
Cannon; titolo IT confermato "Sonic Colours" (grafia PAL) per
`sonic-colors`; corretto "colonia spaziale ARK" → "Colonia Spaziale
ARK" in `sonic-adventure-2` per uniformità con la saga; corretto "Chaos
Emerald" → "Smeraldi del Caos" nella sinossi IT di `sonic-x-anime`
(localizzazione ufficiale dell'anime, diversa da quella dei giochi
coevi).

**Nota per Sakrem - struttura**: 6 universi paralleli indipendenti fin
dall'origine (Games Canon 1991, Archie Comics 1993, Fleetway UK 1993,
Sonic X 2003, Sonic Boom 2014, Sonic Cinematic Universe 2020), nessun
`universeLink` tra loro, nessuna voce STORIA/`lineStyle` in nessuno dei
6 - a differenza di un caso "senza canone" come Doom, qui le continuità
interne sono ben definite e coerenti, semplicemente non comunicano mai
tra loro (tema reso nel blurb di saga). Ultima delle 3 saghe trovate
dal Project Manager in bypass, ultima saga della sessione notturna.

## Resident Evil

### Musica

#### Tracklist completa saga (prima volta, campo da creare)

- **Proposta**: creare il campo `tracks` della saga (attualmente
  assente, mai popolato) con una playlist di 7 brani: Save Room Theme
  (*Resident Evil*, 1996), Serenity (Save Room / Merchant Theme)
  (*Resident Evil 4*), Go Tell Aunt Rhody (*Resident Evil 7:
  Biohazard*), Out of Control (Lady Dimitrescu Theme) (*Resident Evil
  Village*), Save Room Theme (*Resident Evil 2*), Nemesis' Theme
  (*Resident Evil 3: Nemesis*), Deep Ambition (Wesker Final Battle
  Theme) (*Resident Evil 5*).
- **Origine**: Musicista.
- **Motivazione**: prima playlist della saga, temi più iconici a
  copertura di più ere della serie (save room classici, mercante di
  RE4, viralità di Go Tell Aunt Rhody e Lady Dimitrescu, boss theme di
  Nemesis e scontro finale con Wesker).
- **Data**: 2026-09-09 (richiamo mirato, turno notturno 2, saga 3/11).
- **Stato**: accettata nel merito, bloccata per asset mancante - tutte
  e 7 le tracce sono nuove per il sito, da caricare su R2. Il campo
  `tracks` non viene creato in questo pacchetto, resta assente fino al
  caricamento.

## Shin Megami Tensei

Saga interamente nuova, una delle 10 individuate dal Project Manager
per il turno notturno 2/notte 3 (8/10). Struttura a 6 universi
paralleli indipendenti senza continuity lineare unica: Origine
letteraria (1986-1993, romanzi + OVA gemella) → Center (1987-1990) →
Tokyo Millennium (1992-1994) → Vortex World (2003) → Mikado (2013-2016)
→ Da'at (2021, Vengeance 2024). 10 voci top-level + 1 twin (l'OVA
`digital-devil-story-ova`, gemella di `digital-devil-story-romanzo`) =
11 media. Primo uso sul sito del type `OVA` (formato distintivo,
distribuzione diretta home video). Il blurb accenna testualmente a
Persona, spin-off già presente sul sito ("Da questa stirpe nascerà,
anni dopo, anche Persona.") - nessun collegamento dati richiesto o
applicato (nessun campo condiviso, nessun `twins` incrociato).

### Decisioni di scope

Perimetro limitato al ramo "mainline" letterario + videoludico: romanzi
Digital Devil Story/New Digital Devil Story, OVA gemella, e 8
videogiochi mainline (Digital Devil Story: Megami Tensei, Megami Tensei
II, Shin Megami Tensei, Shin Megami Tensei II, Nocturne, IV, IV:
Apocalypse, V). Tutte le sottoserie spin-off escluse in blocco per
scala eccessiva rispetto al mandato di questo ciclo, non per giudizio
di qualità - da riconsiderare in futuri richiami dedicati: Devil
Summoner (incl. Raidou Kuzunoha, citato solo come cameo nella nota HD
Remaster di Nocturne, nessuna voce propria), Digital Devil Saga,
Strange Journey (incl. Redux), if..., Majin Tensei, Last Bible, Devil
Children, capitoli mobile/online. Persona, già presente sul sito, resta
fuori per lo stesso motivo, nessun collegamento dati in questo ciclo.

### Correzioni fattuali

Due correzioni emerse in revisione, applicate nel testo finale:

1. "Merciful", il DLC gratuito dell'HD Remaster (2021) di *Shin Megami
   Tensei III: Nocturne*, NON è un finale/epilogo della storia: è una
   modalità di difficoltà per principianti (danno inflitto x2, danno
   subito x0,5, EXP x3, Macca x5, tasso di incontri ridotto),
   selezionabile a inizio partita o da menu, che non tocca in alcun modo
   la trama o i finali del gioco.
2. L'HD Remaster di *Nocturne* (2021) non è mai uscito su Xbox One: le
   uniche piattaforme reali sono PlayStation 4, Nintendo Switch e PC.

### Musica

#### Tracklist completa saga (prima volta, saga interamente nuova)

- **Proposta**: creare il campo `tracks` della saga (nuova, quindi
  inesistente fino ad ora) e popolarlo con una playlist di 7 brani, in
  ordine di fama/gradimento decrescente entro il perimetro degli 8
  videogiochi mainline (romanzi e OVA esclusi, senza colonna sonora
  propria): "Normal Battle" (*Shin Megami Tensei III: Nocturne*, 2003,
  Shoji Meguro), "Title Loop 2" (*Shin Megami Tensei III: Nocturne*,
  2003), "Ginza" (*Shin Megami Tensei*, 1992), "Dante Battle" (*Shin
  Megami Tensei III: Nocturne*, 2003), "Tokyo" (*Shin Megami Tensei
  IV*, 2013), "DECIDE" (*Shin Megami Tensei IV: Apocalypse*, 2016),
  "Battle V8" (*Shin Megami Tensei V*, 2021, riproposto in Vengeance
  2024).
- **Origine**: Musicista.
- **Motivazione**: prima playlist della saga, fama/gradimento reale
  (nessun criterio di equidistribuzione tra universi). 4 tracce a
  confidenza alta, dal sondaggio ufficiale "Shin Megami Tensei Series
  Music Popularity Vote" (Atlus JP, 2017, unico poll ufficiale sulla
  serie mainline): "Normal Battle" #1 assoluto, "Title Loop 2" #2,
  "Ginza" #3 (unica traccia pre-Nocturne selezionata, la più amata
  dell'era chiptune/MIDI), "Dante Battle" #4. Le altre 3 (Tokyo,
  DECIDE, Battle V8) a confidenza media, da capitoli usciti dopo il
  sondaggio 2017, verificate per convergenza di recensioni critiche
  (RPGFan, Paste Magazine, Hardcore Gamer) e community (ResetEra,
  NeoGAF), nessun poll ufficiale disponibile per questi capitoli.
  Universo 2 (Center) resta senza traccia propria: nel sondaggio il
  tema di Megami Tensei II arriva solo 8°, sotto 3 tracce di Nocturne e
  sotto Ginza/Cathedral of Shadows di SMT I - con soli 7 slot il
  differenziale di fama non giustificava sacrificare uno slot Nocturne.
  Universo 1 (romanzi/OVA) fuori perimetro musicale per mandato
  esplicito. Nessuna traccia di *SMT: Strange Journey* inclusa
  nonostante comparisse nello stesso sondaggio (9° posto): spin-off,
  fuori dal perimetro degli 8 capitoli mainline.
- **Data**: 2026-09-10 (turno notturno 2/notte 3, saga 8/10).
- **Stato**: accettata nel merito, bloccata per asset mancante - tutte
  e 7 le tracce sono nuove per il sito, da caricare su R2. Il
  Programmatore crea comunque il campo `tracks: []`, vuoto in attesa
  dei file.

### Media aggiunti

Saga interamente nuova: 6 nuovi universi e 10 nuove voci top-level + 1
twin (nessuna voce STORIA), tutte inserite nella stessa sessione
notturna, 2026-09-10.

- Nuovo universo **Origine letteraria** (`digital-devil-story-romanzo`
  → `new-digital-devil-story`, span 1986 – 1993, 2 voci + 1 twin) -
  sessione notturna, 2026-09-10.
- Nuovo universo **Center** (`digital-devil-story-megami-tensei` →
  `megami-tensei-ii`, span 1987 – 1990, 2 voci) - sessione notturna,
  2026-09-10.
- Nuovo universo **Tokyo Millennium** (`shin-megami-tensei-i` →
  `shin-megami-tensei-ii`, span 1992 – 1994, 2 voci) - sessione
  notturna, 2026-09-10.
- Nuovo universo **Vortex World** (`smt3-nocturne`, span 2003, 1 voce)
  - sessione notturna, 2026-09-10.
- Nuovo universo **Mikado** (`smt4` → `smt4-apocalypse`, span 2013 –
  2016, 2 voci) - sessione notturna, 2026-09-10.
- Nuovo universo **Da'at** (`smt5`, span 2021, 1 voce) - sessione
  notturna, 2026-09-10.
- `digital-devil-story-romanzo` - Digital Devil Story: Megami Tensei
  (romanzo) (ROMANZO, 1986-1988) - voce a sé, prima voce della saga -
  sessione notturna, 2026-09-10.
- `digital-devil-story-ova` - Digital Devil Story: Megami Tensei (OVA)
  (OVA, 1987) - voce gemella di `digital-devil-story-romanzo`, primo
  uso del tipo/tag "OVA" sul sito - sessione notturna, 2026-09-10.
- `new-digital-devil-story` - New Digital Devil Story (ROMANZO,
  1990-1993) - voce a sé, ultima voce di Origine letteraria - sessione
  notturna, 2026-09-10.
- `digital-devil-story-megami-tensei` - Digital Devil Story: Megami
  Tensei (VIDEOGIOCO, 1987) - voce a sé, prima voce di Center -
  sessione notturna, 2026-09-10.
- `megami-tensei-ii` - Megami Tensei II (VIDEOGIOCO, 1990) - voce a sé,
  ultima voce di Center - sessione notturna, 2026-09-10.
- `shin-megami-tensei-i` - Shin Megami Tensei (VIDEOGIOCO, 1992) - voce
  a sé, prima voce di Tokyo Millennium - sessione notturna, 2026-09-10.
- `shin-megami-tensei-ii` - Shin Megami Tensei II (VIDEOGIOCO, 1994) -
  voce a sé, ultima voce di Tokyo Millennium - sessione notturna,
  2026-09-10.
- `smt3-nocturne` - Shin Megami Tensei III: Nocturne (VIDEOGIOCO, 2003,
  include nota sull'HD Remaster 2021 corretta) - voce a sé, unica voce
  di Vortex World - sessione notturna, 2026-09-10.
- `smt4` - Shin Megami Tensei IV (VIDEOGIOCO, 2013) - voce a sé, prima
  voce di Mikado - sessione notturna, 2026-09-10.
- `smt4-apocalypse` - Shin Megami Tensei IV: Apocalypse (VIDEOGIOCO,
  2016) - voce a sé, ultima voce di Mikado - sessione notturna,
  2026-09-10.
- `smt5` - Shin Megami Tensei V (VIDEOGIOCO, 2021, include nota sulla
  Vengeance 2024) - voce a sé, unica voce di Da'at - sessione notturna,
  2026-09-10.

## Silent Hill

### Musica

#### Tracklist completa saga (prima volta, campo da creare)

- **Proposta**: creare il campo `tracks` della saga (attualmente assente,
  mai popolato) con una playlist di 7 brani, in ordine di fama decrescente:
  Theme of Laura (*Silent Hill 2*), Promise (Reprise) (*Silent Hill 2*),
  Room of Angel (*Silent Hill 4: The Room*), You're Not Here (*Silent Hill
  2*), Silent Hill (Main Theme) (*Silent Hill*), I Want Love (*Silent Hill
  3*), Heaven's Night (*Silent Hill*).
- **Origine**: Musicista.
- **Motivazione**: prima playlist della saga, brani più iconici a
  copertura dei giochi Main universe (Silent Hill 1/2/3/4), già
  presenti o in via di aggiunta nella scheda. Nessuna traccia dai film
  del nuovo Universo Cinematografico (fuori scope per mandato
  esplicito). *Silent Hill f* (2025) valutato ma escluso per ora:
  accoglienza critica molto positiva ma nessun brano ha raggiunto, a un
  anno dall'uscita, una fama pubblica paragonabile ai classici storici
  - da rivalutare in cicli futuri.
- **Data**: 2026-09-09 (richiamo mirato, turno notturno 2, saga 4/11).
- **Stato**: accettata nel merito, bloccata per asset mancante - tutte
  e 7 le tracce sono nuove per il sito, da caricare su R2. Il campo
  `tracks` non viene creato in questo pacchetto, resta assente fino al
  caricamento.

### Media aggiunti

Aggiornamento sostanziale: nuovo universo creato e 10 nuove voci (7 nel
Main universe + 3 nel nuovo Universo Cinematografico), tutte inserite nella
stessa sessione, 2026-09-09 (richiamo mirato, turno notturno 2, saga 4/11).

- Nuovo universo **Universo Cinematografico** (`sh-film-2006` →
  `sh-film-revelation` → `sh-film-return`, span Anni 2000 – 2026, 3 voci,
  nessun `universeLink` verso il Main) - sessione 2026-09-09.
- `silent-hill-f` - Silent Hill f (VIDEOGIOCO, 2025) - voce a sé, nuova
  prima voce cronologica del Main universe (dopo `past-life`) - sessione
  2026-09-09.
- `silent-hill-f-novel` - Silent Hill f: The Novel (NOVEL, 2025) - voce
  gemella di `silent-hill-f` - sessione 2026-09-09.
- `silent-hill-f-manga` - Silent Hill f (manga) (MANGA, in corso dal 2026)
  - voce a sé (non gemella: introduce un sesto finale canonico inedito,
  espansione sostanziale del canone) - sessione 2026-09-09.
- `sh-townfall` - Silent Hill: Townfall (VIDEOGIOCO, in uscita 24 settembre
  2026, imagePending) - voce a sé, senza sinossi per policy titoli non
  ancora usciti - sessione 2026-09-09.
- `book-of-memories` - Silent Hill: Book of Memories (VIDEOGIOCO, 2012) -
  voce a sé, inserita nel Main universe tra `downpour` e `annes-story` -
  sessione 2026-09-09.
- `silent-hill-ascension` - Silent Hill: Ascension (SERIE INTERATTIVA,
  2023-2024) - voce a sé, ultima voce cronologica aggiunta - sessione
  2026-09-09.
- `silent-hill-short-message` - Silent Hill: The Short Message
  (VIDEOGIOCO, 2023-2024) - voce a sé, ultima voce del Main universe -
  sessione 2026-09-09.
- `sh-film-2006` - Silent Hill (film) (LIVE ACTION, 2006) - voce a sé,
  prima voce del nuovo Universo Cinematografico - sessione 2026-09-09.
- `sh-film-revelation` - Silent Hill: Revelation 3D (LIVE ACTION, 2012) -
  voce a sé - sessione 2026-09-09.
- `sh-film-return` - Return to Silent Hill (LIVE ACTION, 2026) - voce a
  sé, ultima voce del nuovo Universo Cinematografico - sessione
  2026-09-09.

## The Legend of Zelda

### Note da non perdere di vista

#### Majora's Mask assente dalla scheda

- **Segnalazione**: Majora's Mask non risulta presente in nessuna voce
  della scheda (verificato via grep su data.js) - gap preesistente, mai
  notato prima. Di conseguenza la sua colonna sonora (inclusa "Song of
  Healing", tra le tracce Zelda più amate secondo quasi ogni classifica
  di settore) resta esclusa a priori dalla playlist, non potendo
  pescare da un titolo assente in scheda.
- **Origine**: Musicista (richiamo mirato, turno notturno 2).
- **Data**: 2026-09-09.
- **Stato**: da valutare se aggiungere Majora's Mask come voce a sé in un
  futuro richiamo mirato sulla saga - nessuna azione presa in questo
  ciclo.

#### Artbook "Secrets of the Zonai" rimandato

- **Segnalazione**: artbook Secrets of the Zonai non ancora uscito
  (uscita prevista 20 ottobre 2026) - nessuna nota aggiunta a
  `tears-of-the-kingdom` in questo ciclo. Da valutare una nota breve
  collegata (non una voce a sé, trattandosi di materiale editoriale)
  dopo l'uscita.
- **Origine**: Supervisore (segnalato come follow-up programmato, non
  dubbio bloccante).
- **Data**: 2026-09-09.
- **Stato**: rimandato a un richiamo mirato dopo il 20/10/2026.

### Musica

#### Tracklist completa saga (prima volta, campo vuoto da popolare)

- **Proposta**: popolare il campo `tracks` della saga (attualmente `[]`,
  vuoto) con una playlist di 7 brani, in ordine di fama decrescente:
  Main Theme (Overworld Theme) (*The Legend of Zelda*, 1986), Song of
  Storms (*Ocarina of Time*), Dragon Roost Island (*The Wind Waker*),
  Gerudo Valley (*Ocarina of Time*), Midna's Lament (*Twilight
  Princess*), Zelda's Lullaby (*Ocarina of Time*), Ballad of the
  Goddess (*Skyward Sword*).
- **Origine**: Musicista.
- **Motivazione**: prima playlist della saga, temi più iconici a
  copertura di più epoche/rami narrativi, con le 3 tracce di Ocarina of
  Time volutamente non adiacenti pur riflettendo la reale
  concentrazione di fama su quel titolo. Nessuna traccia da Majora's
  Mask (titolo assente dalla scheda, vedi nota sopra) né da
  spin-off/collection non elencati (Hyrule Warriors, Cadence of Hyrule,
  Age of Calamity).
- **Data**: 2026-09-09 (richiamo mirato, turno notturno 2, saga 6/11).
- **Stato**: accettata nel merito, bloccata per asset mancante - tutte
  e 7 le tracce sono nuove per il sito, da caricare su R2. Il campo
  `tracks` resta `[]` in questo pacchetto, non popolato.

### Media aggiunti

Aggiornamento minimale: nuovo 6° universo creato con 1 nuova voce
imagePending, sessione 2026-09-09 (richiamo mirato, turno notturno 2).

- Nuovo universo **Adattamento Live-Action** (`adattamento-live-action`,
  unica voce `zelda-film-2027`, nessuna epoca dichiarata) - sessione
  2026-09-09.
- `zelda-film-2027` - The Legend of Zelda (Film) (LIVE ACTION, in
  uscita 30 aprile 2027, imagePending) - voce a sé, unica voce del
  nuovo universo Adattamento Live-Action - sessione 2026-09-09.

## Tomb Raider

### Note da non perdere di vista

#### Em-dash preesistente in `underworld`

- **Segnalazione**: la sinossi IT già live di `underworld` (Continuità
  Legend) contiene un em-dash ("...uccisa da un colpo sparato da Natla
  — cliffhanger poi lasciato irrisolto..."). Testo non toccato da questo
  richiamo mirato (fuori mandato, non modificato da Scrittore/Linguista
  in questa sessione).
- **Origine**: Supervisore.
- **Data**: 2026-09-10.
- **Stato**: da correggere in un futuro richiamo dedicato alla pulizia
  stilistica.

#### Film Jolie/Vikander mai coperti

- **Segnalazione**: nessuna voce per i due film live-action con
  Angelina Jolie (2001, 2003) né per il reboot con Alicia Vikander
  (2018) - gap preesistente, confermato ancora fuori mandato in questo
  ciclo.
- **Origine**: Supervisore.
- **Data**: 2026-09-10.
- **Stato**: da valutare in un futuro richiamo mirato dedicato.

#### Run fumetti Dark Horse 2014-2021 non recuperata

- **Segnalazione**: gap preesistente già noto in cicli precedenti, ma
  reso più rilevante da questo ciclo - la nuova voce Sacred Artifacts
  (Continuità Legend, ambientata dopo Underworld) ne è ora il
  predecessore diretto nella scheda, aumentando la priorità di un
  recupero.
- **Origine**: Supervisore.
- **Data**: 2026-09-10.
- **Stato**: da valutare in un futuro richiamo mirato.

#### Serie live-action Prime Video esclusa

- **Segnalazione**: serie live-action Prime Video (Waller-Bridge/
  Turner) confermata esclusa, nessuna finestra di uscita nemmeno
  approssimativa annunciata.
- **Origine**: Supervisore.
- **Data**: 2026-09-10.
- **Stato**: da ricontrollare quando Amazon annuncerà una data anche
  vaga.

### Musica

#### Tracklist completa saga (prima volta, saga interamente nuova)

- **Proposta**: creare il campo `tracks` della saga (nuova, quindi
  inesistente fino ad ora) e popolarlo con una playlist di 7 brani:
  Tomb Raider Theme (Main Theme) (*Tomb Raider*, 1996), Lara's Theme
  (*Tomb Raider*, 2013), Main Theme (*Tomb Raider: Legend*, 2006), A
  Survivor Is Born (*Tomb Raider*, 2013), Croft Manor (Main Theme)
  (*Tomb Raider: Anniversary*, 2007), Main Theme (*Tomb Raider:
  Underworld*, 2008), Lara's Theme (reprise) (*Rise of the Tomb
  Raider*, 2015).
- **Origine**: Musicista.
- **Motivazione**: prima playlist della saga, temi più iconici
  concentrati sui due poli di fama principali (tema originale di
  Nathan McCree, 1996; OST pluripremiata di Jason Graves, 2013), con
  innesto del lavoro BAFTA di Troels Folmann
  (Legend/Anniversary/Underworld).
- **Data**: 2026-09-10 (richiamo mirato, turno notturno 2, saga 7/11).
- **Stato**: accettata nel merito, bloccata per asset mancante - tutte
  e 7 le tracce sono nuove per il sito, da caricare su R2. Il
  Programmatore crea comunque il campo `tracks: []`, vuoto in attesa
  dei file.

### Media aggiunti

Nessun nuovo universo (`continuita-survivor` rinominato ed esteso, non
creato ex novo), 4 nuove voci (2 con sinossi piena + 2 imagePending),
sessione 2026-09-10 (richiamo mirato, turno notturno 2, saga 7/11).

- `legend-of-lara-croft-netflix` - Tomb Raider: La Leggenda di Lara
  Croft (SERIE TV, 2024-2025) - voce a sé, universo Continuità
  Survivor / Timeline Unificata (rinominato in questo ciclo) - sessione
  2026-09-10.
- `legacy-of-atlantis` - Tomb Raider: Legacy of Atlantis (VIDEOGIOCO,
  in uscita 2027, imagePending) - voce a sé, stesso universo -
  sessione 2026-09-10.
- `catalyst` - Tomb Raider: Catalyst (VIDEOGIOCO, in uscita 2027,
  imagePending) - voce a sé, stesso universo, ultima voce della linea
  - sessione 2026-09-10.
- `sacred-artifacts` - Tomb Raider: Sacred Artifacts (FUMETTO, 2026) -
  voce a sé, universo Continuità Legend, dopo `underworld` - sessione
  2026-09-10.

## Uncharted

Saga interamente nuova (mai apparsa sul sito prima di questo ciclo). Un
solo universo, "Cacciatori di Tesori" / "Treasure Hunters", 11 voci,
nessuna voce STORIA, nessuna gemella.

### In sospeso - immagini mancanti

Stesso schema di Assassin's Creed e Ace Combat: `data.js` ha già i
campi `image`/`avatar`/`banner`/`watermark` (URL segnaposto) ma i file
non sono ancora su R2. Saga pubblicata per la prima volta: tutte le
immagini (avatar, banner, filigrana, copertine delle 11 voci) sono da
caricare.

1. Avatar della saga
2. Banner della saga
3. Filigrana dell'universo Cacciatori di Tesori
4. `amber-room` - Uncharted (miniserie DC "Amber Room")
5. `golden-abyss` - Uncharted: L'Abisso d'Oro
6. `eye-of-indra` - Uncharted: Eye of Indra
7. `drakes-fortune` - Uncharted: Drake's Fortune
8. `among-thieves` - Uncharted 2: Il Covo dei Ladri
9. `fourth-labyrinth` - Uncharted: The Fourth Labyrinth
10. `drakes-deception` - Uncharted 3: L'Inganno di Drake
11. `a-thiefs-end` - Uncharted 4: Fine di un Ladro
12. `lost-legacy` - Uncharted: L'Eredità Perduta
13. `fight-for-fortune` - Uncharted: Fight for Fortune
14. `fortune-hunter` - Uncharted: Fortune Hunter

- **Stato**: in attesa che Sakrem carichi i file su R2 e ne passi i
  nomi.

### Musica

#### Tracklist completa saga (prima volta, saga interamente nuova)

- **Proposta**: creare il campo `tracks` della saga (nuova, quindi
  inesistente fino ad ora) e popolarlo con una playlist di 7 brani, in
  ordine di fama/gradimento decrescente: Nate's Theme (*Uncharted:
  Drake's Fortune*), Nate's Theme 2.0 (*Uncharted 2: Il Covo dei
  Ladri*), A Thief's End (*Uncharted 4: Fine di un Ladro*), Nate's
  Theme 3.0 (*Uncharted 3: L'Inganno di Drake*), Brother's Keeper
  (*Uncharted 4: Fine di un Ladro*), Cut to the Chase (*Uncharted 4:
  Fine di un Ladro*), Reunited (*Uncharted 4: Fine di un Ladro*).
- **Origine**: Musicista.
- **Motivazione**: prima playlist della saga - concentrazione reale
  della fama pubblica sui quattro capitoli PS3/PS4 principali (nessuna
  traccia di Golden Abyss o The Lost Legacy comparabile per notorietà);
  posizioni 5-6-7 tutte di Uncharted 4 per l'effettiva distribuzione
  della fama, adiacenza accettata perché non evitabile senza distorcere
  l'ordine reale.
- **Data**: 2026-09-11.
- **Stato**: accettata nel merito, bloccata per asset mancante - tutte
  e 7 le tracce sono nuove per il sito, mai caricate su R2. Il
  Programmatore crea comunque il campo `tracks: []`, vuoto in attesa
  dei file.

### Media aggiunti

Saga interamente nuova, prima pubblicazione sul sito: 1 nuovo universo
e 11 nuove voci (nessuna voce STORIA, nessuna gemella), tutte inserite
nella stessa sessione, 2026-09-11.

- Nuovo universo **Cacciatori di Tesori** / **Treasure Hunters**
  (`amber-room` → `fortune-hunter`, 11 voci) - sessione 2026-09-11.
- `amber-room` - Uncharted (miniserie DC Comics "Amber Room", FUMETTO,
  2011-2012) - voce a sé, prima voce della saga - sessione 2026-09-11.
- `golden-abyss` - Uncharted: L'Abisso d'Oro (VIDEOGIOCO, 2011
  Giappone/2012 NA-EU) - voce a sé - sessione 2026-09-11.
- `eye-of-indra` - Uncharted: Eye of Indra (MOTION COMIC, 2009) - voce
  a sé - sessione 2026-09-11.
- `drakes-fortune` - Uncharted: Drake's Fortune (VIDEOGIOCO, 2007) -
  voce a sé - sessione 2026-09-11.
- `among-thieves` - Uncharted 2: Il Covo dei Ladri (VIDEOGIOCO, 2009) -
  voce a sé - sessione 2026-09-11.
- `fourth-labyrinth` - Uncharted: The Fourth Labyrinth (ROMANZO, 2011)
  - voce a sé, collocazione presentata come dedotta tra Uncharted 2 e
  Uncharted 3 - sessione 2026-09-11.
- `drakes-deception` - Uncharted 3: L'Inganno di Drake (VIDEOGIOCO,
  2011) - voce a sé - sessione 2026-09-11.
- `a-thiefs-end` - Uncharted 4: Fine di un Ladro (VIDEOGIOCO, 2016) -
  voce a sé - sessione 2026-09-11.
- `lost-legacy` - Uncharted: L'Eredità Perduta (VIDEOGIOCO, espansione
  standalone, 2017) - voce a sé, ultima voce narrativa della saga -
  sessione 2026-09-11.
- `fight-for-fortune` - Uncharted: Fight for Fortune (VIDEOGIOCO DI
  CARTE, 2012) - voce a sé, posizionata per anno di uscita - sessione
  2026-09-11.
- `fortune-hunter` - Uncharted: Fortune Hunter (VIDEOGIOCO MOBILE,
  2016-2022) - voce a sé, ultima voce della saga - sessione 2026-09-11.

## Universo Connesso Remedy

### Musica

#### Tracklist completa saga (prima volta, saga interamente nuova)

- **Proposta**: creare il campo `tracks` della saga (nuova, quindi
  inesistente fino ad ora) e popolarlo con una playlist di 7 brani: Take
  Control (Old Gods of Asgard) = *Control*, Herald of Darkness (Old Gods
  of Asgard) = *Alan Wake 2*, Space Oddity (David Bowie) = *Alan Wake*,
  Balance Slays the Demon (Old Gods of Asgard) = *Alan Wake's American
  Nightmare*, War (Old Gods of Asgard) = *Alan Wake*, The Poet and the
  Muse (Old Gods of Asgard) = *Alan Wake*, Children of the Elder God (Old
  Gods of Asgard) = *Alan Wake*.
- **Origine**: Musicista.
- **Motivazione**: prima playlist della saga, fama/gradimento reale
  (Ashtray Maze di *Control*, "Herald of Darkness"/Game Awards 2023 di
  *Alan Wake 2*, l'iconico uso di "Space Oddity" nel gioco originale).
  4 tracce su 7 da *Alan Wake* (2010), capostipite musicale della saga:
  non è stato possibile evitare del tutto l'adiacenza tra tracce dello
  stesso titolo (posizioni 5-6-7) senza violare l'ordine di fama
  decrescente, che ha priorità sulla regola di alternanza.
- **Data**: 2026-09-10 (richiamo mirato, turno notturno 2, saga 8/11).
- **Stato**: accettata nel merito, bloccata per asset mancante - tutte
  e 7 le tracce sono nuove per il sito, da caricare su R2. Il
  Programmatore crea comunque il campo `tracks: []`, vuoto in attesa
  dei file.

### Media aggiunti

Aggiornamento nel richiamo mirato: nessun nuovo universo, 1 nuova voce
(imagePending, senza sinossi per policy titoli non ancora usciti), sessione
2026-09-10 (richiamo mirato, turno notturno 2, saga 8/11).

- `control-resonant` - Control Resonant (VIDEOGIOCO, in uscita 24 settembre
  2026, imagePending) - voce a sé, ultima voce dell'universo "main"
  (sequel diretto di `control`, narrativamente successivo a `firebreak`);
  estende lo span dell'universo "main" da "2010 – 2025" a "2010 – 2026" -
  sessione 2026-09-10.

## Warcraft

### Musica

#### Tracklist completa saga (prima volta, saga interamente nuova)

- **Proposta**: creare il campo `tracks` della saga (nuova, quindi
  inesistente fino ad ora, `tracks: []`) e popolarlo con una playlist di 7
  brani, in ordine di fama/gradimento decrescente: Invincible = *World of
  Warcraft: Wrath of the Lich King*, Legends of Azeroth = *World of
  Warcraft*, Lament of the Highborne = *World of Warcraft: The Burning
  Crusade*, Elwynn Forest = *World of Warcraft*, Arthas, My Son = *Warcraft
  III: Reign of Chaos*, A Call to Arms = *World of Warcraft: Wrath of the
  Lich King*, Icecrown Glacier = *Warcraft III: The Frozen Throne*.
- **Origine**: Musicista.
- **Motivazione**: prima playlist della saga, brani più iconici a
  copertura della trilogia RTS e di World of Warcraft fino a The War
  Within (nessuna traccia da Midnight, priva di riscontro musicale
  pubblico al momento). Nessuna coppia di tracce consecutive dallo
  stesso titolo.
- **Data**: 2026-09-10 (richiamo mirato, turno notturno 2, saga 9/11).
- **Stato**: accettata nel merito, bloccata per asset mancante - tutte
  e 7 le tracce sono nuove per il sito, da caricare su R2. Il
  Programmatore crea comunque il campo `tracks: []`, vuoto in attesa
  dei file.

### Media aggiunti

Aggiornamento nel richiamo mirato: nessun nuovo universo, 2 nuove voci
(nessuna gemella), sessione 2026-09-10 (richiamo mirato, turno notturno 2,
saga 9/11).

- `midnight` - World of Warcraft: Midnight (VIDEOGIOCO, 2026, undicesima
  espansione) - voce a sé, inserita nell'universo "World of Warcraft" dopo
  `the-war-within` - sessione 2026-09-10.
- `the-last-titan` - World of Warcraft: The Last Titan (VIDEOGIOCO,
  annunciata, non prima del 2027, imagePending) - voce a sé, ultima voce
  dell'universo "World of Warcraft" e dell'intera saga, dopo `midnight` -
  sessione 2026-09-10.

### Gap fuori scope segnalati (da non perdere di vista)

- **Blood Ties / romanzi / film Warcraft (2016)**: categoria media
  extra-videoludici non aperta in questo richiamo - un solo romanzo o
  film isolato non forma un universo secondo le regole strutturali del
  sito, e aprirla solo per Blood Ties lascerebbe fuori ~29 altri romanzi
  di pari rilevanza (incoerenza peggiore del vuoto attuale).
  Raccomandato un richiamo dedicato futuro "Warcraft — media
  extra-videoludici", con ricerca su tutto il corpus romanzi/fumetti
  (~30 titoli) + film 2016, per valutare l'aggregazione in uno o più
  universi coerenti.
- **Errore "Hallowfall" → "Precipizi Sacri"**: la sinossi già pubblicata
  di `the-war-within` contiene "Hallowfall" non tradotto (nome ufficiale
  italiano: "Precipizi Sacri"). Non corretto in questo giro, fuori
  mandato del richiamo (limitato ai 6 termini scorretti già in scope).
  Da correggere in un futuro richiamo dedicato a questa sola voce.

## Wolfenstein

### Musica

#### Tracklist completa saga (prima volta, saga interamente nuova)

- **Proposta**: creare il campo `tracks` della saga (nuova, quindi
  inesistente fino ad ora, `tracks: []`) e popolarlo con una playlist di 7
  brani, in ordine di fama/gradimento decrescente: The Partisan (Mick Gordon
  feat. Tex Perkins) = *Wolfenstein: The Old Blood*, The New Order (tema
  principale, Mick Gordon) = *Wolfenstein: The New Order*, Blitzmensch!
  (Ravi Krishnaswami) = *Wolfenstein II: The New Colossus*, Deathshead
  (Mick Gordon) = *Wolfenstein: The New Order*, Oh, Caroline (Mick Gordon) =
  *Wolfenstein II: The New Colossus*, Youngblood feat. Robin Finck (Martin
  Stig Andersen) = *Wolfenstein: Youngblood*, Cyberpilot (Tom Salta) =
  *Wolfenstein: Cyberpilot*.
- **Origine**: Musicista.
- **Motivazione**: prima playlist della saga, temi più iconici a
  copertura di tutti e 5 i videogiochi confermati dell'universo
  MachineGames (classici id Software/Muse esclusi per decisione
  pregressa di Sakrem). Le 2 nuove voci di questo ciclo (fumetto Titan
  Comics 2017 e GDR Modiphius) restano fuori perimetro: nessuna colonna
  sonora propria/asset audio possibile per nessuna delle due. Nessuna
  coppia di tracce consecutive dallo stesso titolo (New Order in
  posizione 2 e 4, New Colossus in posizione 3 e 5, mai adiacenti).
- **Data**: 2026-09-10 (richiamo mirato, turno notturno 2, saga 10/11).
- **Stato**: accettata nel merito, bloccata per asset mancante - tutte
  e 7 le tracce sono nuove per il sito, da caricare su R2. Il
  Programmatore crea comunque il campo `tracks: []`, vuoto in attesa
  dei file.

### Media aggiunti

Aggiornamento nel richiamo mirato: nessun nuovo universo, 2 nuove voci
(nessuna gemella) nell'universo `machinegames`, sessione 2026-09-10
(richiamo mirato, turno notturno 2, saga 10/11).

- `titan-comics-2017` - Wolfenstein (FUMETTO, Titan Comics, 2017, Dan
  Watters) - voce a sé, inserita tra `new-order` e `new-colossus` (anno
  narrativo 1960, prequel diretto di New Colossus) - sessione 2026-09-10.
- `roleplaying-game` - Wolfenstein: The Roleplaying Game (GIOCO DI RUOLO,
  Modiphius Entertainment, annunciato, non prima del 2027, imagePending) -
  voce a sé, inserita tra `new-colossus` e `cyberpilot` (anno narrativo
  1962), primo caso sul sito del type GIOCO DI RUOLO/TABLETOP RPG -
  sessione 2026-09-10.

### Gap fuori scope segnalati (da non perdere di vista)

- **Rumor "Wolfenstein 3"/"Valkyrie"**: rumor/leak convergenti su un
  possibile terzo capitolo mainline (nome in codice "Valkyrie"), ma nessuna
  conferma ufficiale da MachineGames/Bethesda al momento di questo
  richiamo. Escluso di proposito da questo ciclo - da riconsiderare solo se
  e quando arriverà un annuncio ufficiale.

## Xenoblade Chronicles

Saga interamente nuova, una delle 10 individuate dal Project Manager
per il turno notturno 2/notte 3. Un solo universo narrativo, **"Il
Conduit di Klaus"** (`conduit-di-klaus`, 5 voci, span dalla nascita di
Bionis/Mechonis e Alrest fino alla fusione in Aionios e all'epilogo su
Mira), più un secondo bucket separato "Xenoblade Genesis (collocazione
non dichiarata)" per un titolo non ancora uscito. Nessun `universeLink`,
nessun `lineStyle` (nessuna voce ombrello/gemella).

Le 5 voci uscite dell'universo "Il Conduit di Klaus", in ordine (non di
release): `xenoblade-chronicles-1` - Xenoblade Chronicles (2010, include
nota su Future Connected/Definitive Edition 2020 e su Switch 2 Edition
2026); `xenoblade-chronicles-torna` - Xenoblade Chronicles 2: Torna ~ The
Golden Country (2018, prequel standalone, voce a sé); `xenoblade-chronicles-2`
- Xenoblade Chronicles 2 (2017, include nota su Switch 2 Edition 2026);
`xenoblade-chronicles-3` - Xenoblade Chronicles 3 (2022, include nota su
Future Redeemed 2023 e su Switch 2 Edition dicembre 2026);
`xenoblade-chronicles-x` - Xenoblade Chronicles X (2015, include nota su
Definitive Edition 2025 con il Capitolo 13 e su Switch 2 Edition 2026).

### Decisioni di scope importanti

- **XCX incluso nello stesso universo di XC1/XC2/XC3** grazie all'aggancio
  narrativo scoperto nel Capitolo 13 della Definitive Edition 2025 (lo
  scienziato Void e un'increspatura descritta come proveniente da un
  altro mondo, collegata a Future Redeemed). Nessuna fonte primaria
  diretta per confermare la formulazione esatta: l'aggancio si basa su
  fonti secondarie convergenti (Xenoblade Wiki, ResetEra, GameFAQs,
  testate di settore). Linguaggio volutamente cauto nella sinossi
  (IT/EN) per questo motivo - **da riverificare in futuro** con fonte
  primaria diretta appena disponibile.
- **Artbook esclusi** dal perimetro media della saga.
- **Xenogears/Xenosaga esclusi** come media: dichiarazione ufficiale di
  Soraya Saga conferma che sono "parenti, non in linea diretta" con
  Xenoblade Chronicles - nessuna voce, nessuna nota, nessun `universeLink`
  verso questi titoli.
- **Xenoblade Genesis incluso come `imagePending`** (`xenoblade-genesis`,
  uscita prevista 2027) nel secondo bucket "collocazione non dichiarata",
  senza sinossi per policy (i titoli non ancora usciti non passano da
  Scrittore/Linguista). Ambientazione nota: Anshar, un mondo con sei soli;
  protagonista Eleanor; elemento narrativo distintivo i "Vesselai".
  Trattenuto dal Supervisore fino all'uscita reale.

### Correzioni terminologiche

- **"Lama"/"Blade" → "Gladius"** - resa italiana ufficiale applicata nelle
  sinossi IT (Torna, XC2); il testo EN mantiene "Blade" invariato (lingua
  originale).
- **"driver" → "Ductor"** - resa italiana ufficiale applicata nelle sinossi
  IT (XC2/Torna); il testo EN mantiene "driver" invariato.
- **"driver" (Elma, XCX) → "pilota"** - resa italiana specifica per XCX
  (termine diverso da "Ductor", coerente con l'ambientazione fantascientifica
  separata di Mira); il testo EN mantiene "driver" invariato.
- **"Elysio" → "Elysium"** (XC2 IT).
- **"Ether" → "Etere"** (XC1 IT).
- **"Homecoming" → "Ritorno"** (XC3 IT).
- **"Accompagnatore" → "Tramandante"** (XC3 IT).
- **"White Whale" → "Balena Bianca"** (XCX IT).
- **"Faccia di Metallo"/"unità Faccia" → "Metal Face"/"unità Face"** (XC1
  IT) - nessuna resa italiana affidabile trovata, lasciato in inglese di
  proposito.

Tutte le correzioni verificate come applicate nel testo definitivo.
Punto segnalato ma lasciato invariato: "Samaariano" (bassa confidenza,
nessuna alternativa migliore trovata).

### Musica

#### Tracklist completa saga (prima volta, saga interamente nuova)

- **Proposta**: creare il campo `tracks` della saga (nuova, quindi
  inesistente fino ad ora) e popolarlo con una playlist di 7 brani, in
  ordine di fama/gradimento decrescente: "Gaur Plain" (*Xenoblade
  Chronicles 1*), "Counterattack!!" (*Xenoblade Chronicles 2*), "You Will
  Know Our Names" (*Xenoblade Chronicles 1*), "Great Sea, Alrest"
  (*Xenoblade Chronicles 2*), "Moebius Battle" (*Xenoblade Chronicles 3*),
  "Kingdom of Torna" (*Xenoblade Chronicles 2: Torna ~ The Golden
  Country*), "Don't Worry" (*Xenoblade Chronicles X*).
- **Origine**: Musicista.
- **Motivazione**: prima playlist della saga, fama/gradimento reale di
  critica e community (non gusto personale), a copertura di tutti e 5 i
  videogiochi con colonna sonora propria (Xenoblade Genesis,
  `imagePending`, escluso dal perimetro). Copertura: XC1 2 tracce, XC2
  2 tracce, XC3 1 traccia, Torna 1 traccia, XCX 1 traccia, riflettendo
  la fama reale concentrata soprattutto su XC1 e XC2. Nessuna coppia di
  tracce dello stesso titolo adiacente.
- **Data**: 2026-09-10 (sessione notturna, 2/3, notte3-XX).
- **Stato**: accettata nel merito, bloccata per asset mancante - tutte
  e 7 le tracce sono nuove per il sito, da caricare su R2. Il
  Programmatore crea comunque il campo `tracks: []`, vuoto in attesa
  dei file.

### Media aggiunti

Saga interamente nuova: 1 nuovo universo narrativo e 1 nuovo bucket
"collocazione non dichiarata", 6 nuove voci totali (5 nell'universo
narrativo + 1 imagePending nel bucket), nessuna voce gemella, nessuna
voce STORIA, tutte inserite nella stessa sessione notturna, 2026-09-10.

- Nuovo universo **Il Conduit di Klaus** (`xenoblade-chronicles-1` →
  `xenoblade-chronicles-torna` → `xenoblade-chronicles-2` →
  `xenoblade-chronicles-3` → `xenoblade-chronicles-x`, 5 voci) - sessione
  notturna, 2026-09-10.
- Nuovo bucket **Xenoblade Genesis (collocazione non dichiarata)**
  (`xenoblade-genesis`, 1 voce imagePending) - sessione notturna,
  2026-09-10.
- `xenoblade-chronicles-1` - Xenoblade Chronicles (VIDEOGIOCO, 2010,
  include nota su Future Connected/Definitive Edition 2020 e su Switch 2
  Edition 2026) - voce a sé, prima voce della saga - sessione notturna,
  2026-09-10.
- `xenoblade-chronicles-torna` - Xenoblade Chronicles 2: Torna ~ The
  Golden Country (VIDEOGIOCO, 2018) - voce a sé, prequel standalone -
  sessione notturna, 2026-09-10.
- `xenoblade-chronicles-2` - Xenoblade Chronicles 2 (VIDEOGIOCO, 2017,
  include nota su Switch 2 Edition 2026) - voce a sé - sessione notturna,
  2026-09-10.
- `xenoblade-chronicles-3` - Xenoblade Chronicles 3 (VIDEOGIOCO, 2022,
  include nota su Future Redeemed 2023 e su Switch 2 Edition dicembre
  2026) - voce a sé - sessione notturna, 2026-09-10.
- `xenoblade-chronicles-x` - Xenoblade Chronicles X (VIDEOGIOCO, 2015,
  include nota su Definitive Edition 2025 con il Capitolo 13 e su Switch
  2 Edition 2026) - voce a sé, ultima voce dell'universo - sessione
  notturna, 2026-09-10.
- `xenoblade-genesis` - Xenoblade Genesis (VIDEOGIOCO, in uscita 2027,
  imagePending) - voce a sé, unica voce del bucket "collocazione non
  dichiarata" - sessione notturna, 2026-09-10.

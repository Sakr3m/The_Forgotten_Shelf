# Flusso di lavoro: La Traccia del Tempo

Questo file descrive il lavoro **nell'ordine in cui avviene davvero**
su una saga, non un elenco di agenti uno per uno. Il Supervisore
(l'agente centrale, quello che parla con Sakrem) compare solo nei
punti in cui rientra realmente in scena tra un passaggio e l'altro,
con il dettaglio di cosa decide in quel preciso momento: non c'è una
sezione a parte con "tutto quello che fa il Supervisore".

Fonte: i file in `.claude/agents/traccia-*.md`. Questo documento è
una fotografia dell'ordine di lavoro attuale, pensata come base di
discussione per la revisione della prossima settimana: non sostituisce
i file `.claude/agents/*.md`, che restano l'unica fonte tecnica
vincolante finché non vengono modificati.

---

## Fase 0: Sentinella (opzionale, solo su richiesta esplicita)

Si attiva **solo** se Sakrem lo ordina esplicitamente a inizio
sessione, indicando l'elenco preciso di voci/saghe già pubblicate da
controllare (una, due, dieci, quante ne indica lui). Se non viene
richiesta, si salta questa fase e si parte direttamente dalla Fase 1.

Quando lavora, legge prima il campo `lastAgentPass` di ogni saga
indicata (la data dell'ultimo ciclo completo di lavoro) e cerca solo
cosa è cambiato da quella data in poi: non un controllo aperto su
tutta la storia della saga. Cerca due tipi di cambiamento: nuovi media
usciti nel frattempo (DLC narrativo, remaster, sequel, spin-off) o
fatti ribaltati (una fonte ritrattata, qualcosa dichiarato canonico
che prima non lo era o viceversa, un titolo dato per cancellato che è
stato riesumato). È una ricerca mirata, non esaustiva come quella del
Ricercatore.

- **Non trova nulla** → lo dice chiaramente, e la sessione prosegue
  normale sul lavoro che Sakrem ha comunque assegnato.
- **Trova qualcosa** → segnala al Supervisore cosa e dove, senza
  lavorarci lei stessa. È il Supervisore a decidere se e come far
  ripartire la catena, e solo sulla parte che serve davvero (non
  necessariamente l'intera saga da capo). Quando lo fa, ci sono due
  differenze rispetto al lavoro normale: Artista e Musicista non
  vengono richiamati (una piccola aggiunta non giustifica rifare
  colori o playlist), e il lavoro di Ricercatore/Selezionatore/Storico/
  Scrittore/Linguista riguarda solo la scoperta della Sentinella, non
  l'intera saga da zero.

## Fase 1: Il Supervisore riceve la saga da Sakrem

Sakrem assegna esplicitamente una saga da lavorare (mai il Supervisore
di propria iniziativa, nemmeno per tornare su una saga già pubblicata
in passato: anche se, una volta assegnata, il Supervisore ha piena
autorità di rivedere qualunque decisione precedente, pubblicata
inclusa). Il Supervisore passa la mano al Ricercatore.

## Fase 2: Ricercatore

Cerca **tutti** i media della saga, senza eccezioni e senza filtrare
per dimensione o importanza: quello spetta al passo successivo. Per
ciascun media specifica: tipo (videogioco, romanzo, manga, anime,
fumetto, film, serie TV, mobile, eccetera), anno/i di uscita, **e
separatamente** l'anno di ambientazione narrativa (dove si colloca la
storia, non quando è uscito il media: è questo secondo dato che serve
poi a posizionarlo sulla linea del tempo). Controlla sempre anche
eventuali remaster/remake, verificando se l'anno di ambientazione
narrativa cambia rispetto alla versione originale.

I titoli annunciati ma non ancora usciti li include comunque,
segnalandoli come tali con la finestra di uscita più precisa
disponibile. Se una saga sembra non avere continuità ufficiale
dichiarata (tipo Doom), include nello stesso giro di ricerca anche
quali collegamenti "pseudo-validi" i fan citano spesso come prova di
continuità pur non essendolo davvero: servirà più avanti allo
Scrittore, se il Supervisore deciderà che è uno di questi casi.

Non giudica ufficialità, canonicità o rilevanza, e lavora sempre a
braccetto col Selezionatore, in sequenza (mai in contemporanea): finita
la sua ricerca, passa la lista grezza **direttamente** al Selezionatore
(il Supervisore non la vede in questo passaggio). Resta comunque
disponibile per una ricerca supplementare se il Selezionatore ha un
dubbio su un media specifico.

## Fase 3: Selezionatore

Riceve la lista intera dal Ricercatore ed esclude solo ed unicamente i
media che sono: non ufficiali, non canonici, o divergenti/incoerenti
con la linea narrativa dell'universo di appartenenza. Nessun altro
motivo di esclusione: anche un media piccolissimo resta se supera
questi tre criteri.

Un collegamento narrativo conta come valido solo se dichiarato
ufficialmente (intervista a sviluppatori, manuale di gioco, sito
ufficiale, materiale del publisher): una wiki da sola non basta mai,
salvo che citi essa stessa una di queste fonti. Un titolo cancellato
conta come inesistente anche se la sua trama era stata dichiarata
prima della cancellazione. Un titolo annunciato senza nessuna finestra
di uscita, nemmeno vaga, resta escluso per ora (va ricontrollato in
futuro); se invece esiste anche solo una finestra approssimativa, passa
comunque al Supervisore per la classificazione `imagePending`.

Se, applicando questi criteri, il Selezionatore non trova **nessun**
collegamento narrativo ufficialmente confermato tra nessuna coppia di
titoli di un'intera saga (non un titolo isolato: tutta la saga), lo
riporta al Supervisore: potrebbe essere un caso di saga senza universo
ufficiale (vedi sotto).

Comincia solo dopo che il Ricercatore ha finito del tutto: mai in
contemporanea. Riporta al Supervisore, mai a Sakrem direttamente:
l'elenco degli inclusi, eventuali rimozioni di voci già pubblicate che
non superano più i tre criteri, e i dubbi residui.

### ↳ Il Supervisore rientra in scena

Con l'elenco confermato dal Selezionatore, decide di persona (senza
più bisogno di chiedere a Sakrem, per nessuno di questi punti):

- **classificazione di ogni media**: videogiochi sempre voce a sé;
  manga/anime/fumetti/film/romanzi veri restano media indipendenti (la
  decisione finale gemella/voce a sé arriva solo più avanti, dopo
  Scrittore e Linguista); novellizzazioni sempre nota pura sul media
  che raccontano; il resto minore, nota se collegato a qualcosa,
  escluso se no;
- **numero e nomi degli universi** della saga, con la condizione
  minima perché un universo esista: almeno due media non-STORIA
  narrativamente distinti e collegati tra loro (una voce gemella non
  conta mai come secondo media a questo fine, esattamente come una
  voce STORIA);
- **titoli annunciati ma non usciti**: se il Selezionatore conferma che
  vanno tenuti, il Supervisore stesso tiene questa informazione
  (titolo, tipo, universo, data) mentre il resto della saga prosegue:
  non passano da Scrittore né Linguista, vanno dritti, tramite la
  Segretaria, al solo Programmatore;
- **rimozione di voci già pubblicate**: mai automatica: il Supervisore
  la valuta con cura prima che avvenga; se la conferma, la gestisce
  come `imagePending` (la tiene lui, non passa da Storico/Scrittore/
  Linguista) e la porta, tramite la Segretaria, al Programmatore;
- se qualcosa non convince, può richiamare il Selezionatore (che a sua
  volta può far rilavorare il Ricercatore da capo) prima di proseguire.

Se il Selezionatore ha segnalato l'assenza totale di collegamenti
ufficiali nell'intera saga, è qui che il Supervisore decide se
trattarla come saga senza universo ufficiale (pagina con solo un testo
esplicativo, niente linea temporale: stesso principio già in uso per
Doom).

Solo a questo punto passa al passo successivo.

## Fase 4: Storico

Crea le voci STORIA ovunque servano davvero nella linea temporale di
un universo: non solo per tappare un buco tra due media, ma dove la
narrazione ufficiale lo richiede: usando esclusivamente materiale
ufficiale già documentato altrove (mai wiki di fan, mai teorie, mai
inventato). Scrive il testo completo degli eventi, con la fonte
ufficiale, e decide lui stesso il titolo della voce. Non tocca mai
`data.js` o alcun file del sito, nemmeno per una correzione a una
voce già pubblicata: consegna sempre il testo, mai il file.

Regola fissa: mai due voci STORIA adiacenti, a meno che una faccia
parte di una voce ombrello (anche se quell'ombrello è esso stesso di
tipo STORIA). Sulle saghe senza universo ufficiale non ha nulla da
fare: senza una vera linea temporale non esistono buchi da coprire.

Riporta al Supervisore, mai a Sakrem: per ogni voce, titolo, universo,
posizione esatta, testo completo con fonte: oppure "nessun buco qui"
con motivo, o "buco reale ma nessuna fonte ufficiale esiste, resta
scoperto".

### ↳ Il Supervisore rientra in scena

Controllo veloce ma attento di conformità: verifica in particolare che
non ci siano due voci STORIA vicine senza l'eccezione dell'ombrello.
Se le trova, richiama lo Storico a correggere; se sono davvero vicine
senza eccezione, ordina la fusione (che scrive sempre lo Storico
stesso, essendo l'unico che ha scritto entrambi gli originali senza
perdere o alterare i fatti). Può ripetere questo controllo più volte,
quanto basta per correggere tutto perfettamente: specialmente dopo
che nota/ombrello sono state risolte più avanti nella catena, perché
la struttura finale potrebbe spostare i punti morti.

## Fase 5: Scrittore

Scrive il contenuto/trama delle sinossi IT/EN di ogni voce confermata
(incluse le note sui media minori): sempre il più completo ed
esaustivo possibile, mai un riassunto striminzito quando la trama
reale contiene di più. Soglia minima di lunghezza (mai per le note, che
restano sempre più corte per natura): 70 parole per media più vecchi o
di un genere che non regge una trama estesa, 100 parole per qualunque
altro media e per le voci STORIA. Solo trama, dall'inizio alla fine,
niente analisi o guide; tutti i finali possibili se sono multipli,
specificando quale è ufficiale se lo è. DLC/espansioni/remake che
ampliano davvero la trama entrano dentro la stessa sinossi, non
diventano una voce a parte.

Scrive anche il blurb della saga (il testo introduttivo in alto nella
pagina: il punto in comune tra gli universi, non la trama di uno
specifico, 275-333 caratteri) e, per le saghe senza universo ufficiale,
il testo esplicativo in due sole parti (`canonNote.intro`: perché non
esiste una linea ufficiale, con fonte; `canonNote.outro`: come i fan
hanno comunque provato a mettere ordine, su cosa si basa quell'ordine).

Regola fissa di stile: mai l'em-dash (—) nel testo italiano: virgola,
due punti, parentesi o due frasi separate da un punto al suo posto. In
inglese resta ammesso.

Passa tutto al Linguista, mai al Supervisore o a Sakrem direttamente.

## Fase 6: Linguista

Riceve le bozze **direttamente** dallo Scrittore (il Supervisore non
interviene in questo passaggio). Verifica e corregge ogni termine
tecnico, nome proprio, luogo o concetto specifico: non tocca la
trama. Controlla anche il titolo di ogni voce: localizzazione italiana
ufficiale se esiste, altrimenti forma originale, con la stessa regola
di priorità della terminologia (mai una traduzione propria solo perché
"suonerebbe meglio in italiano"). Verifica capitalizzazione del titolo
e l'assenza di date nel titolo stesso.

Rifinisce anche il blurb e il testo `canonNote` (segnalando al
Supervisore, senza tagliarlo di sua iniziativa, se trova una terza
parte estranea allo schema in due parti), e controlla che nessuna
sinossi di voce gemella cominci con "Nota:"/"Nota —" (deve essere prosa
naturale fin dalla prima parola). Controlla infine che il testo
italiano non contenga mai l'em-dash, sostituendolo se lo trova.

Non tocca mai `data.js`: il suo output è testo che consegna per
intero a chi lo ha invocato.

### ↳ Il Supervisore rientra in scena

Con le sinossi complete davanti, decide:

- se un manga/anime/romanzo/fumetto racconta la stessa identica storia
  di un titolo principale: se sì, resta **voce gemella** a tutti gli
  effetti strutturali (stesso pallino, titolo e immagine propri), ma
  con una sinossi condensata in prosa naturale invece che una
  narrazione completa; se no, resta voce a sé con sinossi invariata;
- lo **stile della riga** (`lineStyle`) per ogni voce ombrello, in base
  al rapporto narrativo reale con le voci coperte (solida = stessa
  storia in prima persona; `dashed` = stessi eventi da un personaggio
  diverso; `dotted` = racconto in cornice/flashback; `double` = arco
  parallelo senza alcun punto di contatto);
- se ogni sinossi rispetta la soglia minima di lunghezza (70 o 100
  parole a seconda del caso): sotto soglia, richiama Scrittore o
  Storico ad allungare con informazioni vere, mai inventate;
- il blurb della saga, verificando che descriva il punto in comune tra
  gli universi e resti nel range di caratteri consentito.

## Fase 7: Artista + Musicista (in parallelo, indipendenti tra loro)

**Artista**: propone UNA sola scelta di colore interfaccia per l'intera
saga e UNA sola sequenza di colori gradiente per ciascun universo (mai
un ventaglio di opzioni), costruita sui sottogruppi narrativi reali
della linea temporale: tanti colori quanti i sottogruppi trovati,
minimo due, mai monocromatico. Controlla prima le palette già
esistenti su tutte le saghe del sito per evitare duplicati. Presenta
sempre con anteprima visiva, mai solo codici colore. Lavora allo stesso
modo anche sulle saghe senza universo ufficiale (la sequenza riguarda
la saga intera invece di un singolo universo).

**Musicista**: sceglie 7 tracce totali per l'intera saga (non per
universo), solo in base a fama e gradimento reale del pubblico: mai
gusto personale. Ogni traccia deve suonare davvero in un videogioco
confermato della saga (qualunque universo, non serve rappresentanza per
ognuno): mai da romanzi, fumetti, anime o film anche se ufficiali.
Ordine per gradimento decrescente, non cronologico. Ogni traccia va
sempre presentata col gioco di appartenenza (es. "Eyes on Me = Final
Fantasy VIII").

Se uno dei due è sicuro della propria proposta al primo colpo, il
Supervisore la prende per buona subito. Se ha un dubbio reale, può
riflettere fino a un massimo di 3 volte nello stesso ciclo, poi la
scelta è comunque forzata. Anche se colori o musiche erano già stati
scelti in passato, il lavoro si rifà sempre per intero dall'inizio (mai
saltato): l'esito, coincida o no con la scelta precedente, si applica
sempre in automatico, senza bisogno di conferma di Sakrem (che lo legge
comunque nel report finale della Segretaria). L'unico blocco rimasto
per il Musicista è tecnico, non di consenso: una sostituzione con un
brano mai usato prima sul sito resta bloccata finché Sakrem non carica
lui stesso il file audio su R2.

## Fase 8: Revisione finale del Supervisore

Prima di passare qualunque cosa alla Segretaria, il Supervisore
ricontrolla personalmente **tutto** il lavoro di ogni agente per quella
saga, dall'inizio alla fine: non solo l'ultimo passaggio. Include una
verifica fattuale indipendente (date, nomi, dettagli di trama) contro
le fonti, non solo un controllo che i vari passaggi si incastrino bene
tra loro: è qui che si concentra la maggior parte dei richiami a un
nuovo ciclo di lavoro, su qualunque agente della catena (non solo
Scrittore/Linguista/Selezionatore/Storico, dove capita più spesso: un
richiamo è sempre possibile, un numero alto ma non infinito di volte).
Ogni volta che un richiamo porta a una correzione, il Supervisore non
si ferma lì: rifà da capo l'intera revisione (non solo sulla parte
corretta), perché una correzione può aver creato un nuovo contrasto
altrove. Solo quando è completamente sicuro che tutto sia corretto,
passa il resoconto completo alla Segretaria.

## Fase 9: Segretaria

Riceve dal Supervisore (il caso normale, a fine sessione su una saga),
oppure direttamente da Sakrem per direttive puntuali fuori catena
(es. un asset già caricato su R2 da collegare), oppure dal Project
Manager quando lavora senza bypass.

Per ogni saga toccata, aggiorna per prima cosa `docs/promemoria-
sakrem.md` (due elenchi permanenti mai svuotati: musica proposta per
quella saga, e media/universi nuovi aggiunti: correzioni a note o
riclassificazioni non entrano mai in questo storico permanente, restano
solo nel report una tantum). Solo dopo prepara, in parallelo tra loro,
il pacchetto tecnico per il Programmatore e il report completo per
Sakrem (un elenco sintetico: universi creati, media aggiunti/tolti,
voci STORIA aggiunte/tolte, modifiche alle note, proposte di
Artista/Musicista, dubbi irrisolti del Supervisore: mai un resoconto
di ogni singola decisione interna della catena).

Non ha un tool proprio per invocare il Programmatore e non scrive mai
lei stessa `data.js` o alcun file del sito: consegna il pacchetto per
intero a chi l'ha invocata.

## Fase 10: Programmatore

Prende il resoconto dalla Segretaria (mai istruzioni dirette da
Sakrem, mai dal Supervisore) e lo applica su `data.js`, `script.js`,
`tools/genera-voci.js` e file correlati: è l'unico autorizzato a
scrivere questi file e a fare commit/push, sempre diretti su `main`,
mai su un branch a parte. Nessuna voce in capitolo sul merito: non
giudica le decisioni narrative, di colore o di inclusione, già prese
da chi gli ha passato il lavoro. Procede un punto alla volta,
ricontrollando il pacchetto originale punto per punto dopo ciascuno e
a lavoro finito: non a memoria. Dopo ogni modifica, verifica la
sintassi dei file toccati. Aggiorna anche il campo `lastAgentPass`
della saga con la data del giorno, così la Sentinella saprà da dove
ripartire in futuro.

Non parla con Sakrem durante il lavoro. Unico output finale, dopo il
controllo completo e il push riusciti: **pubblicato**.

## Fase 11: Project Manager (opzionale, solo su richiesta esplicita)

Subito dopo che il Programmatore ha pubblicato il lavoro sulla saga
assegnata, il Supervisore chiama il Project Manager **solo** se Sakrem
lo ha ordinato esplicitamente a inizio sessione, specificando quante
saghe cercare e con quale criterio, e decidendo ogni volta se concedere
il bypass della sua conferma (mai un'autorizzazione permanente). Cerca
le saghe richieste secondo il criterio dato, escludendo sempre quelle
in blacklist (attualmente: Diablo), e le ordina per fama/priorità, non
a caso.

- **Senza bypass** → riporta l'elenco trovato direttamente alla
  Segretaria (non al Supervisore), che ne fa un piccolo report a parte
  per Sakrem.
- **Con bypass** → passa le saghe trovate al Supervisore, in ordine di
  priorità, e si riparte dalla Fase 1 per ciascuna, nello stesso
  ordine, nella stessa sessione.

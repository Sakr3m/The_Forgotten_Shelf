// ============================================================
// RECENSIONI — per ora solo la home + il "carrello" con la
// griglia (solo PC). Stessa logica minima di i18n/cambio lingua
// delle altre pagine leggere del sito (Officina).
// ============================================================

const STRINGS = {
  it: {
    brand: "Diari di Gioco",
    brandMobile: "Diari\ndi Gioco",
    landingEyebrow: "Benvenuto nell'archivio\ndelle recensioni",
    landingTitle: "Diari di Gioco",
    landingIntro: "Impressioni oneste sui giochi che ho giocato, completati, platinati o amati senza motivo, senza pretese di essere una guida.",
    kofiLabel: "Sostienimi su Ko-fi",
    backToIndexLabel: "Torna all'index",
    backToHomeLabel: "Torna alla home",
    gateToggleLabel: "Apri l'elenco delle recensioni",
    gateToggleLabelClose: "Chiudi l'elenco delle recensioni",
    placeholderTile: "Titolo in arrivo",
    spoilerAlert: "Ogni recensione contiene dettagli approfonditi sulla trama, inclusi finali e colpi di scena. Procedi solo se hai già completato i giochi o non temi gli spoiler.",
    spoilerAlertMobile: "Contiene spoiler: procedi solo se hai già finito i giochi o non te ne importa.",
    landingSubDesktop: "Apri il carrello per sfogliare le recensioni disponibili.",
    gateSideToggleOff: "Mostra il carrello da sinistra",
    gateSideToggleOn: "Mostra il carrello da destra",
    ffviiiHours: "~40 ore (storia) / 80-100+ ORE (completo)",
    factsLabel: "Scheda",
    factDeveloper: "Sviluppatore",
    factRelease: "Uscita originale/Remastered",
    factReleaseDate: "Uscita",
    factReleaseOriginal: "Uscita originale",
    factCompleted: "Completato",
    ffviiiCompleted: "Sì, 100%",
    verdictRecommended: "Consigliato",
    verdictMixed: "Non per tutti",
    verdictNotRecommended: "Sconsigliato",
    leaveALike: "Lascia un like",
    quickReadLabelPart1: "Recensione veloce, quadro generale",
    quickReadLabelPart2: "spoiler minimi o assenti",
    ffviiiQuickNarrativeTitle: "Narrativa e Mondo",
    ffviiiQuickNarrativeText: "La trama intreccia un'ambientazione scolastico-militare a elementi fantasy legati a streghe e poteri sovrannaturali, con più cambi di registro nel corso dell'avventura. È una delle storie più discusse della serie: apprezzata per l'atmosfera e i toni maturi che raggiunge in alcuni momenti, ma anche criticata da parte del pubblico per alcuni passaggi poco chiari nello sviluppo degli eventi.",
    ffviiiQuickGameplayTitle: "Gameplay",
    ffviiiQuickGameplayText: "Gioco di ruolo a turni alla giapponese, la cui particolarità sta più fuori dal campo di battaglia che dentro: il sistema Junction, che lega magie e Guardian Force alle statistiche dei personaggi, è generalmente considerato uno dei più originali (e sbilanciabili, se padroneggiato) della serie. Il resto dell'esperienza è arricchito da un'ampia mappa da esplorare e da un minigioco di carte collezionabili, il Triple Triad, spesso citato come uno dei migliori minigiochi mai inseriti in un Final Fantasy.",
    ffviiiQuickTechTitle: "Comparto Tecnico e Artistico",
    ffviiiQuickTechText: "Per gli standard del 1999, grafica e colonna sonora (quest'ultima firmata Nobuo Uematsu) sono ampiamente riconosciute come tra le più curate dell'epoca, con cutscene in computer grafica che hanno fatto scuola. Con gli anni la grafica ha inevitabilmente accusato il peso del tempo, mentre la componente artistica e musicale è tuttora considerata uno dei punti di forza del titolo. La versione Remastered del 2019 ha aggiornato principalmente i modelli dei personaggi, lasciando quasi invariati fondali e ambientazioni originali.",
    ffviiQuickNarrativeTitle: "Narrativa e Mondo",
    ffviiQuickNarrativeText: "La trama è ambientata in un mondo che fonde elementi fantasy e fantascientifici, con una città-stato controllata da una megacorporazione al centro della storia. È spesso citata come una delle narrazioni più influenti e maggiormente studiate della serie, apprezzata per la profondità dei temi trattati e per l'impatto che ha avuto sul genere JRPG a livello globale.",
    ffviiQuickGameplayTitle: "Gameplay",
    ffviiQuickGameplayText: "Gioco di ruolo a turni alla giapponese, con party selezionabile tra un ampio cast di personaggi giocabili. Il sistema Materia, che permette di equipaggiare e combinare magie e abilità in modo modulare sull'equipaggiamento dei personaggi, è generalmente considerato uno dei sistemi di personalizzazione più flessibili e influenti dell'epoca. Il titolo include inoltre diversi minigiochi opzionali e contenuti secondari particolarmente estesi per gli standard del periodo.",
    ffviiQuickTechTitle: "Comparto Tecnico e Artistico",
    ffviiQuickTechText: "Uscito nel 1997, è stato il primo capitolo della serie a utilizzare modelli poligonali 3D su sfondi pre-renderizzati e sequenze cinematiche in computer grafica, un salto tecnico enorme rispetto ai capitoli precedenti su Super Nintendo. La colonna sonora, composta da Nobuo Uematsu, è tra le più celebrate dell'intera serie. Non esiste una vera versione \"Remastered\" ufficiale: c'è una riedizione per PC del 2012 con alcuni miglioramenti tecnici, mentre Final Fantasy VII Remake (2020) è un progetto separato, una reinterpretazione action del gioco originale e non una semplice remaster.",
    ffixQuickNarrativeTitle: "Narrativa e Mondo",
    ffixQuickNarrativeText: "Ambientato in un mondo fantasy medievale chiamato Gaia, segna un ritorno consapevole allo stile classico dei primi capitoli della serie, dopo le ambientazioni più moderne e fantascientifiche di FFVII e FFVIII. È spesso indicato da critica e fan come uno dei capitoli più riusciti dell'intera saga, anche per il modo in cui omaggia la tradizione Final Fantasy pur introducendo elementi nuovi.",
    ffixQuickGameplayTitle: "Gameplay",
    ffixQuickGameplayText: "Gioco di ruolo a turni alla giapponese basato sul sistema ATB (Active Time Battle), con un party ampio e personaggi che, a differenza di altri capitoli, hanno abilità e ruoli più definiti e distinti tra loro. La crescita dei personaggi passa soprattutto per l'apprendimento di abilità tramite l'equipaggiamento indossato. Il titolo include inoltre un minigioco di carte collezionabili (Tetra Master) e diverse attività opzionali, tra cui la ricerca dei chocobo.",
    ffixQuickTechTitle: "Comparto Tecnico e Artistico",
    ffixQuickTechText: "Uscito nel 2000, sviluppato da Square, con la direzione di Hiroyuki Ito e la colonna sonora firmata Nobuo Uematsu (l'ultimo capitolo numerato principale composto da lui in solitaria). Graficamente più stilizzato rispetto a VII e VIII, con un'estetica volutamente più fiabesca. Detiene il punteggio Metacritic più alto tra i capitoli della serie. Una versione rimasterizzata in HD è disponibile dal 2016 su PC e mobile, poi estesa a PS4, Switch e Xbox One negli anni successivi.",
    thresholdText: "Attenzione: la recensione completa può contenere spoiler pesanti, finale incluso.",
    thresholdBtn: "Leggi recensione completa",
    thresholdBtnSerious: "Completa",
    thresholdBtnGoofy: "A caldo",
    ffviiiDeepMainTitlePart1: "Recensione completa, senza filtri",
    ffviiiDeepMainTitlePart2: "spoiler presenti",
    ffviiiDeepGoofyTitlePart1: "Recensione veloce, a caldo",
    ffviiiDeepGoofyTitlePart2: "spoiler limitati",
    ffviiiGoofyPlaceholder1: "Testo segnaposto per la versione senza freni: stessa trama, zero filtri sul turpiloquio e sulle battute fuori luogo.",
    ffviiiGoofyPlaceholder2: "Seconda sezione segnaposto: qui andrà il resto della versione cazzona, appena pronta.",
    ffviiiTheoryLinkLabel: "Vai alla teoria su Il Filo Nascosto",
    ffviiiFull01: "Parto subito con una confessione: Final Fantasy VIII è il mio videogioco preferito in assoluto, a prescindere dai suoi difetti e dalle critiche che ha ricevuto. Questo non significa che eviterò di parlare dei suoi aspetti fallaci, anche se la versione \"completa\" di queste recensioni lascia volutamente spazio a valutazioni soggettive, quindi preparatevi a un misto di analisi e innamoramento incondizionato.",
    ffviiiFull02: "Il gioco si apre subito con un filmato capace di far venire la pelle d'oca, il tipo di introduzione che vi pianta in testa l'idea di avere davanti qualcosa di magnifico ancora prima di aver toccato un tasto, indipendentemente da come poi lo giudicherete. Io personalmente amo quell'introduzione, e ogni volta che la rivedo ne resto ancora estasiato, come se fosse la prima.",
    ffviiiFull03: "*FITHOS...LUSEC...WECOS...VINOSEC!*",
    ffviiiFull04: "Squall Leonhart, il protagonista, all'inizio è il tipo di personaggio capace di far perdere la pazienza tanto ai giocatori quanto ad alcuni suoi stessi compagni, colpa di un carattere piuttosto ostico, a meno che il vostro non gli somigli; nel qual caso, ve lo sconsiglio vivamente, per il bene di tutti. Forse all'epoca gli somigliavo un po' anch'io, almeno nell'essere chiuso e a tratti solitario o lunatico, ed è per questo che riuscivo a tollerarlo; un caso da manuale di \"riconosco me stesso e non mi piace, ma continuo a guardare\". Non a caso, i fan lo hanno spesso accostato, per scherzo, all'ideologia e alla moda emo, complice anche il periodo di uscita del gioco: un colpo di fortuna storico che nessuno sceneggiatore avrebbe potuto prevedere. Eh no, io (come Squall) non sono mai stato emo.",
    ffviiiFull05: "Con il procedere della trama, però, quel carattere chiuso comincia ad aprirsi, merito soprattutto di Rinoa Heartilly e della sua personalità a volte forte, a volte fragile, capace di confondere la mente del nostro protagonista (ed anche la mia, se devo essere sincero). Certe volte l'apertura di Squall fa emergere una fragilità che può non piacere a tutti, ma in cambio regala al pubblico alcune scene romantiche davvero mozzafiato. Da replicare nella vita reale, sia chiaro, non tutte: la parte nello spazio, ad esempio, la trovo un pochino pericolosa, oltre che tecnicamente impossibile senza una tuta spaziale e un dottorato in astrofisica.",
    ffviiiFull06: "Parlando poi di Rinoa, la sua rivelazione come strega è un colpo di scena che mi ha lasciato esterrefatto, non tanto per la notizia in sé, quanto per tutte le conseguenze successive e per lo sblocco della nuova Limit da \"angioletto\", seppure, a mio parere, molto più scarsa di quella principale in cui usa il suo cane (una femmina di nome Angelo) in modi del tutto inusuali, roba da farsi qualche domanda sul benessere dell'animale. Così come il vedere un personaggio solare finire travolto da un susseguirsi di eventi duri e tristi, rendendo la sua felicità o infelicità quasi subordinata alla semplice presenza di Squall, man mano che si va avanti, un po' come se il gioco le avesse tolto il telecomando della propria vita. È sempre strano vedere il contrasto tra la ribelle dei Gufi del Bosco di Timber e la ragazza distesa inerme sul letto dopo lo scontro con Edea, fino alla sua totale impotenza nello spazio (la parte citata poco sopra) e, infine, alla strega imprigionata: una parabola che definire \"montagne russe emotive\" è quasi un eufemismo.",
    ffviiiFull07: "Gli altri personaggi giocabili invece finiscono un po' per eclissarsi dietro i due protagonisti, dimenticati dalla trama non troppo tempo dopo essere stati presentati, relegati in secondo piano o costretti a rimanere lì, con le loro evoluzioni comprensibili solo studiando i minimi dettagli; dei particolari che solo un fan accanito o uno psicopatico riesce a scorgere, e sinceramente non so in quale delle due categorie collocarmi.",
    ffviiiFull08: "Personalmente, non l'ho mai considerato un grosso problema. È una caratteristica reale, oltretutto molto criticata da alcuni fan e soprattutto dai non fan del titolo, ma credo comunque che sia stata gestita abbastanza bene da lasciar intravedere, anche in questi personaggi secondari, delle evoluzioni che meritano di non essere sottovalutate, anche quando il gioco sembra fare di tutto per farvele passare sotto il naso senza che ve ne accorgiate.",
    ffviiiFull09: "Uno dei casi su cui mi voglio soffermare è quello di Selphie Tilmitt: normalmente una ragazza allegra ed estroversa, amante del colore giallo e dei trenini gialli (una combo che dice già tutto sulla sua personalità), che dopo la visita al Garden di Trabia, distrutto da un attacco missilistico, sparisce per un po' dalla scena con la scusa di doversi riposare. Il gioco non lo mostra esplicitamente, ma non è affatto improbabile pensare che quell'evento abbia avuto delle vere ripercussioni su di lei, al punto da spingerla a chiudersi da sola in camera, magari per sfogarsi o piangere, cosa che il gioco preferisce lasciarvi immaginare invece di mostrarvela.",
    ffviiiFull10: "Anche Zell Dincht (il nostro procacciatore di panini della mensa, missione che porta a termine con più dedizione di qualsiasi compito ufficiale) cambia parecchio: da \"gallinaccio\" (come lo chiama Seifer Almasy) che smania per prendere il comando, a membro che impara a restare al proprio posto, ottenendo, per un periodo di tempo piccolissimo, un ruolo di responsabilità tutt'altro che da poco (capogruppo, nientemeno), proprio nel momento in cui ha finalmente accettato di maturare su quell'aspetto di sé.",
    ffviiiFull11: "Lo stesso vale per Quistis Trepe (sogno proibito di tanti maschietti dell'epoca, e onestamente li capisco) e Irvine Kinneas (del quale non so ancora la pronuncia vera del nome, quindi le uso tutte a rotazione, ed è simpatico quanto un negoziante che ti mette i prodotti al doppio del prezzo appena ti vede entrare), che non fanno eccezione.",
    ffviiiFull12: "Insomma, personaggi che non vanno semplicemente comandati, ma capiti.",
    ffviiiFull13: "Tra gli altri personaggi degni di nota rispetto al gruppo principale, troviamo il già citato Seifer, con le sue strane manie: il sogno di diventare a tutti i costi il cavaliere di una strega, salvo poi essere praticamente l'unico a non riuscirci, nonostante tutti gli sforzi, un fallimento talmente totale da risultare quasi ammirevole. Ideologie capaci di far venire una voglia matta di rifilargli, di tanto in tanto, una capocciata bella e buona, roba da seduta di terapia gratuita, e la sua eterna rivalità con Squall che sembra appianarsi solo a fine gioco, nei titoli di coda, non prima, perché ovviamente la riconciliazione va guadagnata soffrendo fino all'ultimo minuto. Sempre accompagnato dai suoi fidati Fujin e Raijin, una coppia di... bulli scolastici che sembrano vedere in Seifer una via di mezzo tra un caposquadra e un piccolo dittatore, e che lo seguirebbero probabilmente anche in un vulcano attivo.",
    ffviiiFull14: "Edea Kramer, la quale non si riesce ad odiare neanche impegnandovi, vista la sua condizione di marionetta, posseduta da una strega proveniente dal futuro: la scusa perfetta, se vogliamo, ma qui è pure vera. Non ho mai capito del tutto la mia posizione nei suoi confronti nemmeno dopo averla liberata dalla possessione; certe volte parla come se sapesse qualcosa, ma con un'iniziativa da Tonberry col coltello ancora abbassato: sai che prima o poi arriverà, ma intanto hai tutto il tempo per un caffè, farti una doccia e forse anche una vacanza.",
    ffviiiFull15: "Nei sogni, nel vero senso della parola, troviamo Laguna Loire e i suoi due fidi compagni, Kiros Seagul e Ward Zabak, tre soldati di Galbadia che ne combinano di tutti i colori, con una competenza professionale che definire \"opinabile\" è già generoso. Però devo ammettere che il coraggio non gli manca: buttarsi da una scogliera senza battere ciglio è quasi normale amministrazione, per loro. Anche se, a essere onesti, è stato Laguna a scaraventare giù sia loro due che se stesso, quindi forse il vero matto del terzetto è proprio lui, e gli altri due sono solo vittime collaterali della sua improvvisazione.",
    ffviiiFull16: "Quei sogni, tra l'altro, sono provocati da Ellione: il personaggio più misterioso del gioco, sedicente parente di Squall, nonché fuggiasca 24 ore su 24, con un'agenda talmente fitta da far invidia a un capo di stato in tournée.",
    ffviiiFull17: "E lasciatemi citare anche quei due pagliacci (non in senso letterale) di Wedge e Biggs, cognomi rimasti un mistero imperscrutabile: simpaticissimi, punto.",
    ffviiiFull18: "La storia, dal canto suo, parte come una specie di \"slice of life\" ambientato in una scuola, per quanto militare. Voglio soffermarmi proprio su questo \"militare\": vi ricordate l'età dei personaggi, vero? Una storia fatta di allenamenti in caverne anguste (e talvolta labirintiche) e missioni per salire di grado e promozioni. Quest'ultima parte è caratterizzata da test *facilissimi* per salire di grado SeeD, il nome del gruppo militare a cui appartengono i nostri personaggi, e guadagnare più soldi da poter spendere in tutti gli oggetti o i souvenir che ci viene voglia di comprare. Per poi trasformarsi, gradualmente, in una vera e propria caccia alle streghe, ma non con forconi e fiamme, sempre con lo stile tipico dei vecchi Final Fantasy.",
    ffviiiFull19: "So bene che cambi di registro come questo non piacciono a tutti, ma io l'ho amato proprio perché sembra una conseguenza naturale delle premesse: un \"dovevo arrivarci fin dall'inizio, solo che prima ero relegato a dimostrare quanto so maneggiare bene una gunblade\".",
    ffviiiFull20: "E a proposito di gunblade! Un'arma geniale, lo ammetto, una fusione, un po' come quella che si ottiene con i potara di Dragon Ball, tra una spada e una pistola/fucile, ma resta comunque bellissima, e in combattimento la sua meccanica rende benissimo l'idea, anche se in pratica si traduce nel premere un tasto a tempo mentre si prega silenziosamente di indovinare il tempismo ogni volta.",
    ffviiiFull21: "Man mano che si avanza, la trama si evolve in modo del tutto inaspettato: Squall, da semplice possessore e unico utilizzatore (insieme al rivale Seifer) della gunblade, diventa Comandante del Garden di Balamb, ma non prima di aver trascinato noi poveri giocatori attraverso diverse peripezie, tra cui: fuggire da una prigione di massima sicurezza pensata per essere inviolabile (spoiler: non lo è affatto), con le uscite continuamente sotterrate nella sabbia; sconfiggere in combattimento il vero proprietario del Garden di Balamb (il supremo Norg), che teneva sotto scacco il preside Cid Kramer; e svenire di tanto in tanto (grazie Ellione, davvero, un piacere), in luoghi non sempre gradevoli, per rivivere le missioni di Laguna Loire (padre di Squall) e dei suoi compagni, tra cui quella volta in cui gli venne un crampo proprio durante un flirt con una pianista destinata a diventare cantante (e madre di Rinoa): il tempismo peggiore della storia dei Final Fantasy, probabilmente.",
    ffviiiFull22: "Tutto questo porta i nostri personaggi ad affrontare Edea in una guerra stupenda contro Galbadia e il suo Garden, tra momenti che vi lasciano incollati allo schermo e video che vi fanno perfino posare il controller (o allontanare le mani da mouse e tastiera), per poi arrivare, nel futuro, tramite la compressione temporale, fino alle porte del castello di Artemisia, l'antagonista principale del gioco, e sconfiggerla.",
    ffviiiFull23: "Se non sapete cosa sia la compressione temporale, beh, è semplice: prendete passato, presente e futuro, li buttate in un frullatore, premete \"on\", ed ecco fatto, avete ottenuto \"la compressione temporale\", complimenti, ora siete pronti quanto lo ero io la prima volta (cioè per niente).",
    ffviiiFull24: "Che poi, nello stesso castello, non troviamo solo lei e i suoi guardiani, che ci tolgono funzioni sia di combattimento che di menù (come la possibilità di salvare, giusto per aggiungere ansia all'ansia), ma anche Omega Weapon, il boss opzionale più forte del gioco, persino più forte della stessa Artemisia; \"più forte\", però, non significa solo superiore agli altri nemici, ma una vera e propria sfida da battere, senza cedere all'ultimo per un minimo errore.",
    ffviiiFull25: "Ogni tappa di questo percorso è accompagnata da eventi e, soprattutto, scene e cutscene fantastiche, che da sole, senza bisogno di altre ricompense, varrebbero già la fatica.",
    ffviiiFull26: "Ah sì, l'avevo detto che si finisce anche nello spazio? Perché in caso non fosse chiaro: sì, letteralmente nello spazio.",
    ffviiiFull27: "Parlando di streghe e di spazio, apro una parentesi: Adele è un uomo, e non mi convincerete del contrario, potete anche provarci ma sto già scuotendo la testa.",
    ffviiiFull28: "C'è una leggenda, raccontata nel gioco, su Hyne, un grande essere che creò gli umani per farsi servire; quando questi si ribellarono e vollero i suoi poteri, lui glieli concesse, prima di scappare, ma solo alle donne, e solo ad alcune prescelte. Quindi Adel, o Adele, o comunque si chiami nella versione originale, dovrebbe essere una donna. Con quel petto, però? Non ho intenzione di crederci nemmeno sotto tortura. Giudicate voi stessi, io ho già le mie conclusioni belle e pronte.",
    ffviiiFull29: "Passando al sistema di combattimento, va detto subito che in battaglia non offre grandi particolarità, ma fuori dal campo di battaglia è tutta un'altra storia, un vero e proprio secondo gioco nascosto dentro il primo.",
    ffviiiFull30: "Il sistema di Junction è letteralmente sbroccato: se sapete come usarlo, potete seminare morte e distruzione tra le schiere dei vostri avversari senza nemmeno accorgervi della differenza tra un nemico normale e un boss finale. Beh, quasi: qualcuno riesce comunque a ricordarvi chi comanda, ma sono eccezioni, non la regola. Questo si lega a doppio filo con lo scaling del livello dei nemici: FFVIII dovrebbe adeguare la difficoltà dei mostri alla media del party, ma nella pratica, il più delle volte, la differenza è pressoché impercettibile.",
    ffviiiFull31: "Comunque sia, che siate novizi o esperti, vi basterà studiare per bene le armi a vostra disposizione per rendere i combattimenti fluidi, senza eccessive difficoltà, e con un pizzico di ottimizzazione potete letteralmente rompere il gioco a metà, nel modo più soddisfacente possibile.",
    ffviiiFull32: "Vogliamo parlare delle Tecniche Speciali? Serve avere i personaggi mezzi morti prima di poterle usare, il che già di per sé è una filosofia di combattimento tutta sua, ma sono davvero assurde. Sì, è bello vedere Squall che si lancia contro un nemico con furia (Cuore di Pietra), oppure sparare un raggio fotonico che supera l'atmosfera (Raggio Esplosivo, perché ovviamente in un momento di crisi la prima cosa sensata da fare è colpire lo spazio), o ancora Irvine che spara come se fosse al poligono di tiro (Shot), ma la vera protagonista è Selphie con The End. Nessuno può resisterle, fa fuori chiunque, chiudendo la partita immediatamente, come se il gioco stesso si arrendesse in suo onore; le uniche eccezioni sono i nemici con più fasi, dove fa saltare la fase invece che l'intero combattimento, meglio di niente no? Personalmente non ci riuscivo, e non ci riesco tuttora, a farla comparire: faccio prima a vincere la battaglia manualmente che a vederla apparire in lista; l'avrò vista pochissime volte, forse una o due, e ogni volta è stata più un miracolo che un evento di gioco.",
    ffviiiFull33: "Le magie, invece, se non fosse per il loro impiego nel Junction per potenziare le statistiche dei personaggi (che crescono anche naturalmente salendo di livello, ma molto meno), sarebbero completamente inutili, rimpiazzabili persino da un cane sparato come un proiettile da cannone; e non sto scherzando neanche un po': il cane di Rinoa può letteralmente fare questo, con più efficacia di mezzo elenco magie, il che la dice lunga sulla gerarchia di potere in questo gioco.",
    ffviiiFull34: "Qualche magia si salva comunque grazie alla sua utilità fuori scala, ma sono così poche da contarle sulla punta delle dita di una mano sola, e probabilmente vi avanzano pure delle dita.",
    ffviiiFull35: "Inoltre queste magie vanno assimilate dai nemici o da delle strane fonti rosa che spuntano dal terreno; sì, lo so, la seconda opzione suona ancora più assurda della prima, visto che dal terreno potrebbero tranquillamente uscire geyser, magma o chissà quali fumi misteriosi. Forse in realtà stiamo \"assimilando\", o meglio inalando, fumi allucinogeni che ci fanno credere di aver sbloccato la capacità di richiamare una gigantesca esplosione di fuoco sotto il sedere dell'avversario (Firaga) o rivivere i nostri compagni di squadra caduti (Areiz): spiegazione che, detta così, suona più plausibile del manuale ufficiale.",
    ffviiiFull36: "E poi ci sono i Guardian Force, entità evocabili dall'aspetto più vario, per lo più mostruoso, con l'eccezione di Shiva, che invece è bona, punto, senza bisogno di ulteriori argomentazioni. Anche Siren, dai, se la cava dignitosamente. Se evocati al momento giusto, questi esseri riscrivono completamente le sorti di uno scontro. Menzione d'onore per Odino, Gilgamesh e Fenice, che, indovinate un po', non si possono evocare manualmente e compaiono quando vogliono loro, con la puntualità di un autobus fantasma; la Fenice fa parzialmente eccezione, perché è possibile richiamarla anche tramite un oggetto (la Piuma di Fenice), ma la sua versione automatica resta la scelta migliore, capace com'è di salvarvi davvero dal Game Over. Un'altra citazione ad honorem va a Ifrid (così si chiama solo nella versione italiana; nell'originale, e in tutti gli altri Final Fantasy, è Ifrit, con la T), perché... nessun motivo specifico, è semplicemente il mio preferito in questo capitolo della serie, e no, non ho bisogno di giustificarmi ulteriormente.",
    ffviiiFull37: "Tornando ai Guardian Force: possono essere assimilati da boss o mostri, oppure trovati in vari luoghi segreti sparsi per il mondo.",
    ffviiiFull38: "E di posti così, sulla mappa, ce ne sono davvero tanti, sia per trovare i Guardian Force che per i minigiochi: rischiate di perdervi nel tentativo di scoprirli tutti, sul serio, non è un modo di dire. Se puntate al platino, procuratevi una guida, e forse anche un po' di pazienza extra.",
    ffviiiFull39: "Detto questo, escludendo questi luoghi segreti, le città e i villaggi \"normali\" non sono poi molti, e questo lascia il mondo di gioco un po' scarno. D'altronde parliamo dell'epoca PlayStation 1, quindi si può capire, e comunque nessuno gioca FFVIII per il turismo.",
    ffviiiFull40: "Il che non toglie nulla al piacere di girare in lungo e in largo per la mappa, prima con il Garden di Balamb in versione volante, poi con la Lagunarock. Infatti, a mio parere, Esthar e Deling City rimangono veramente uno spettacolo a livello di design (ma non di level design).",
    ffviiiFull41: "Scoprire i rifugi segreti dei Guardian Force, i minigiochi, la base di ricerca sottomarina, tutti i boschi dei chocobo, oppure andare ad allenarsi in luoghi chiamati \"isola più vicina all'inferno\" e \"isola più vicina al paradiso\", tra RubRum Dragon e Molboro: un sogno. Anzi no, aspettate, i Molboro sono più un incubo con i tentacoli: lasciamo perdere, e speriamo di non incontrarli mai più.",
    ffviiiFull42: "E poi, finalmente, si arriva a parlare del minigioco per eccellenza, la vera droga di questo titolo: il triple triad, un gioco di carte collezionabili giocabile contro gli npc (non tutti), su una griglia 3x3, cinque carte a testa, e regole che si fanno via via più cattive a seconda della località, quasi come se ogni città avesse deciso di inventarsi le proprie leggi del poker. Un minigioco davvero spassoso, oltretutto sorprendentemente facile da imparare; un po' meno facile è vincere, quando le regole cominciano a incattivirsi.",
    ffviiiFull43: "Benvenuti nel collezionismo di Final Fantasy VIII. Come dite, i Pokémon? Lasciate stare, passerete dietro a queste carte metà delle ore del vostro gameplay totale, senza nemmeno accorgervene. E se non vi piace, sono problemi vostri.",
    ffviiiFull44: "Insomma, questo videogioco è meraviglioso sotto moltissimi punti di vista.",
    ffviiiFull45: "Il comparto grafico delle cutscene riesce perfino a non sfigurare troppo con i giochi di oggi, con sequenze da paura e momenti che mettono davvero hype, capaci pure di far commuovere, un risultato niente male per un titolo di fine anni '90. La parte musicale invece è da urlo proprio. Musiche davvero fantantastiche; ecco scrivo pure male a pensare a quanto siano belle. E poi c'è Eyes on Me, la canzone di Julia cantata da Faye Wong: la prima volta che un Final Fantasy ha osato mettere una vera popstar dentro un videogioco, altro che \"sperimentazione moderna\", ci avevano già pensato loro prima di tutti. La scena dell'esame SeeD a Dollet è la prova dell'alto livello di entrambi i punti appena citati (grafica e musica). Io, quando la vedevo, ero già a posto così, per me l'esame era già passato a pieni voti, altro che punteggio ufficiale.",
    ffviiiFull46: "Ma uno degli aspetti più criticati resta quello dei buchi di trama, capaci di far impallidire persino un Dark Souls, che di buchi di trama vive e prospera; questo, però, non ha mai fermato i fan dal cercare risposte, e talvolta dal crearsele da soli, con teorie che spesso sono più elaborate della trama originale. Il finale, poi, è un discorso a parte: confusissimo, un vero e proprio trip di acidi, di quelli che ti lasciano a fissare lo schermo chiedendoti cosa sia appena successo.",
    ffviiiFull47: "Una delle questioni rimaste irrisolte ancora oggi, e che continua a far discutere tantissimi appassionati, riguarda la vera identità di Artemisia: essendo una strega proveniente dal futuro, si pensa possa in realtà coincidere con un personaggio già noto nell'epoca in cui si svolgono gli eventi di Final Fantasy VIII.",
    ffviiiFull48: "Tra i candidati proposti nel tempo ci sono Squall, Zell e la stessa Edea, ciascuno per motivazioni diverse, ma tutti puntualmente e clamorosamente smentiti, per ovvie ragioni. Ma oltre a loro, ce n'è una che ha fatto discutere per anni, raccontata nel dettaglio nella pagina delle teorie. E chissà, magari in futuro su quella stessa pagina troverete anche una teoria scritta di mio pugno: non è detto, e non so ancora quando succederà, ma diciamo che la tentazione c'è.",
    ffviiiFull49: "Nonostante tutte le imperfezioni, come i buchi di trama di cui non sento mai il peso, forse per la mia giovane età di allora (quando ci ho giocato la prima volta) o per la mia capacità di godermi il titolo anche oltre quella \"mancanza\", questo è un videogioco che non smetto mai di portarmi nel cuore, per gli eventi che mi hanno fatto e mi fanno ancora emozionare, e per tutta la parte romantica che mi ha sempre lasciato a bocca aperta; non parlo di scene \"belle\" come possiamo vedere anche in FFIX o FFX, due titoli ricchi di sentimentalismo grazie alle rispettive coppie di protagonisti, ma di situazioni realistiche e, talvolta, dure.",
    ffviiiFull50: "Come la parte in cui Squall si mette sulla schiena una Rinoa in coma e si fa tutto il viaggio da Fisherman's Horizon a Esthar a piedi, passando sui binari; mi lascia sempre a bocca aperta, facendomi domandare se anche io lo farei mai... o forse, se ci fosse mai una persona che merita davvero che io lo faccia.",
    ffviiiFull51: "Stupendo, sempre stupendo questo gioco.",
    ffviiiClosing: "Se un giorno vi capiterà di giocare per la prima volta, o di rigiocare per l'ennesima, a questo titolo stupendo, abbracciate i kyactus da parte mia ❤️.",
    noteLabel: "Nota personale: qui puoi isolare una riflessione più soggettiva, staccata dal corpo principale del testo.",
    ffviiHours: "~38 ore (storia) / 80-100+ ORE (completo)",
    ffviiCompleted: "Sì, 100%",
    ffviiDeepMainTitlePart1: "Recensione completa, senza filtri",
    ffviiDeepMainTitlePart2: "spoiler presenti",
    ffviiFull01: "La versione originale del settimo capitolo di questa famosissima saga... Sephiroth... è un videogioco davvero magnifico... Sephiroth... e che moltissimi, pur non avendolo mai giocato, ricorderanno comunque per il personaggio di SEPHIROTH!",
    ffviiFull02: "Scherzi a parte.",
    ffviiFull03: "Final Fantasy VII si concentra veramente tanto su Sephiroth: la sua vita, i suoi dilemmi, i suoi pensieri, la sua sconfitta, la sua rinascita, il suo piano, gli esperimenti fatti su di lui, sulla madre, sull'altra madre, sulla sua origine, su... vabbè dai, avete capito.",
    ffviiFull04: "L'intro che ci viene presentata appena premiamo \"nuova partita\" ci mostra subito la situazione a Midgar, la città iniziale del videogioco, e una fioraia (Aerith Gainsborough, il cognome è davvero complicato, chiedetelo a chi ha dovuto localizzarlo); poi, di colpo, si passa a saltare giù da un treno per combattere contro due puffi giganti armati di fucile.",
    ffviiFull05: "Dentro la battaglia, e subito dopo, prenderemo il controllo di Cloud Strife, il protagonista del titolo: un ex-SOLDIER che ora vive di mercenariato. Fin dall'inizio del gioco, infatti, lo troviamo già in combutta con una banda di rivoltosi, gli Avalanche, il cui obiettivo è distruggere uno dei reattori della città. Peccato che quella città, per quanto governata da un'azienda di \"pezzi di Shinra\", sia anche il posto dove loro stessi vivono: un piccolo dettaglio logistico che nessuno sembra voler affrontare a mente lucida.",
    ffviiFull06: "Personalmente non so bene cosa pensare di Cloud: come personaggio mi piace, ma certi frangenti, legati ai suoi problemi di personalità, mi fanno sperare che al suo posto ci fosse Zack Fair, la sua controparte in alcuni spin-off (videoludici e cinematografici) di FFVII: stessa scuola, personalità però più solare, moro anziché biondo, e per giunta ex fidanzato di Aerith. Dico ex perché, purtroppo, ci ha tirato le cuoia.",
    ffviiFull07: "Il gioco prende il giocatore da subito, e io non ho fatto eccezione. Quando mi sono ritrovato a combattere uno scorpione robotico gigante ero gasatissimo, e speravo bastassero le pozioni, oggetti che peraltro non amo usare. Poi ho scoperto che era scarso.",
    ffviiFull08: "Anche la sequenza subito dopo, quella della bomba da piazzare e della fuga, riesce a caricare di adrenalina e a trascinarvi dentro il ritmo serrato della storia, senza troppi convenevoli. Un inizio così l'ho apprezzato parecchio: mi ha tenuto incollato fino all'ultimo secondo, e non sempre ero così sicuro di voler aiutare Jessie con il piede incastrato tra le travi 😈",
    ffviiFull09: "Oltre a Cloud, lungo la storia si aggiungono altri personaggi, e lo fanno senza inviti velati o lunghe trattative per convincerli: come Tifa Lockhart, ad esempio, sulla quale potrei già fermarmi qui, tanto merita tutta l'attenzione possibile. Tifa è il terzo membro ad unirsi al gruppo, ma resta, a mio parere, forse il più importante di tutti dopo il biondo gelatinato che sfida la gravità con i capelli. E no, prima che iniziate a pensare a quali (due) motivi: parlo del suo ruolo nel gruppo.",
    ffviiFull10: "Ogni personaggio che si unirà in futuro porta con sé le proprie motivazioni e la propria storia; background che troveranno spazio via via nel corso del gioco. Oooh, la parte di Red XIII a Cosmo Canyon, che spettacolo: l'ho amata tantissimo. Quando l'avevo incontrato nella capsula come esperimento, a Midgar, non immaginavo che mi sarei ritrovato davanti un personaggio con un retroscena così ben costruito. La grotta dei Gi non era il massimo, lo ammetto, ma la ricompensa emotiva che arriva dopo ripaga ampiamente tutti quegli incontri casuali indesiderati. La scena in cui vediamo il padre di Red pietrificato, con la sua storia raccontata da Bugenhagen, è davvero commovente. E anche piuttosto triste, va detto, del tipo che ti fa fermare a fissare lo schermo per qualche secondo prima di andare avanti.",
    ffviiFull11: "Stesso discorso per quella di Barret Wallace, colui che \"spara dalla mano\": la trovo magnifica. Un padre che ritrova il vero padre di sua figlia, oltre che il suo migliore amico di un tempo che credeva morto. Beautiful, fatti da parte.",
    ffviiFull12: "La trama si concentra all'inizio sulla Shinra, dipinta come un antagonista davvero temibile, con un quartier generale che a prima vista sembra impossibile da espugnare. E invece, a mia sorpresa, ci entriamo senza il minimo problema, tanto che viene quasi da chiedersi chi abbia progettato la sicurezza di quel palazzo. Certo, veniamo poi catturati e rinchiusi in prigione, ma sono dettagli: era comunque scontato che saremmo stati liberati in qualche modo, anche se non esattamente in quel modo. Sì, perché a liberarci è... Sephiroth. Se avete la sensazione di aver già letto questo nome più volte in questa recensione, non vi state affatto sbagliando, e non è nemmeno finita qui.",
    ffviiFull13: "Da qui in poi il focus si sposta del tutto, indovinate un po', su Sephiroth, l'antagonista principale della storia. Penso che la sua fama sia meritatissima: per me un buon cattivo deve saper fare il cattivo, e lui ci riesce alla grande, seminando vittime più o meno importanti lungo tutto l'arco degli eventi, passati e presenti: gli abitanti di Nibelheim, il presidente Shinra, e la più importante di tutte, per ovvi motivi, Aerith. Eh sì, Aerith, la fioraia con un segreto dietro le spalle, lascerà il gruppo dopo essere stata trattata come uno spiedino dal nostro spadaccino dai lunghi capelli argentei, con una delicatezza pari a zero.",
    ffviiFull14: "Lei, essendo un'antica, era l'unica capace di preoccupare davvero Sephiroth, ostacolando i suoi piani. La scena della sua morte resta un colpo al cuore per chiunque, me compreso; però, a parte la perdita della migliore crocerossina del gruppo, non mi ha fatto poi così male. Aerith mi stava simpatica, ma non l'ho mai digerita del tutto come personaggio, per una serie di ragioni. Quello che davvero mi ha fatto arrabbiare è perderla dopo averla allenata così duramente. GIOCO, avvisami prima!",
    ffviiFull15: "Tutto questo, però, è solo il condimento di un lungo viaggio che parte da Midgar e attraversa varie zone e obiettivi, tra cui il mio amatissimo Gold Saucer (andateci, e capirete perché ci stravedo così tanto), fino ad arrivare al Northern Crater, dove un Sephiroth ormai completamente risvegliato, grazie a Cloud (bravo, davvero bravo, complimenti vivissimi), ci aspetta per il nostro ultimo incontro. Dico \"ultimo\" perché in realtà lo incontreremo più volte durante il viaggio, in forma fisica o meno; invece di affrontarci direttamente, spesso ci scaglia contro una parte di Jenova, il mostro alieno che gli fa anche da \"madre\". Onestamente non saprei dirvi cosa dovrebbe rappresentare ciascuna delle sue forme: so solo che sono tutte orripilantemente belle. I nomi, quelli sì, sono un altro discorso, carichi di significato per chi sa leggerli, io mi limito ad annuire con aria consapevole.",
    ffviiFull16: "Le zone visitabili sono davvero tante. Oltre al Gold Saucer, merita una menzione Wutai, una rivisitazione in salsa Final Fantasy di un villaggio giapponese di ninja. Mi piaceva, e mi piace tuttora, visitarlo, soprattutto per affrontare quello che propone: la ricerca di Yuffie Kisaragi, la ninja che dovremmo aver già reclutato in precedenza e che nel frattempo ci ha derubato di tutte le materie, oltre alla parentesi con Don Corneo (già incontrato a Midgar) insieme agli agenti della Shinra. Tra questi, Reno è senza dubbio il più simpatico; Elena un po' meno.",
    ffviiFull17: "E già che si parla di Yuffie, quella simpaticissima guastafeste: non so mai se apprezzarla o detestarla. Di certo, quando mi svuota le tasche, capirete da soli che la mia reazione non è mai quella positiva, ma piuttosto la voglia di tirarle addosso un albero, magari anche due per buona misura.",
    ffviiFull18: "Vabbè, non che \"Vincenzo Valentino\" (Vincent Valentine) sia messo tanto meglio: per convincerlo a uscire dalla bara e unirsi a noi servono sempre una decina di minuti buoni di chiacchiere, durante i quali continua imperterrito a recitare la parte del diffidente, salvo poi svegliarsi di colpo al solo sentire nominare Sephiroth e Lucrecia. Su Lucrecia non mi dilungo, sennò parte davvero la sigla di Beautiful.",
    ffviiFull19: "Molte delle altre zone, inoltre, offrono anche dei minigiochi, per quanto la maggior parte si concentri al Gold Saucer. I minigiochi sono belli, veramente belli, ma la fatica necessaria per procurarsi un chocobo d'oro tramite accoppiamento è un parto vero e proprio, in tutti i sensi della parola, con tanto di travaglio prolungato. Al solo pensiero di doverci arrivare in quel modo, mi viene voglia di lanciarmi direttamente contro la Ruby Weapon prima ancora delle battute finali del gioco: almeno lì si ottiene un oggetto scambiabile a Kalm con l'uccello leggendario (non fraintendetemi).",
    ffviiFull20: "La parte che però mi ha conquistato più di ogni altra è stata la caccia a TUTTE le materia. Quelle sfere magiche sparse per il mondo, alla base del sistema di combattimento, sono davvero numerosissime. Grazie a loro potete lanciare magie, usare comandi, richiamare evocazioni, potenziare le statistiche, ottenere bonus legati alle altre materie a cui sono agganciate, o farvi un caffè. No, aspettate, quest'ultima no. Alcune si ottengono in modi decisamente sgradevoli: tipo, appunto, allevando un chocobo d'oro, tanto per ribadire il concetto.",
    ffviiFull21: "Una volta ottenute tutte quante, però, e dopo aver speso 472 anni luce a portarle al massimo, mi sentivo praticamente invincibile. Comprese le materie \"figlie\": quando una materia raggiunge il livello più alto, \"partorisce\" infatti una copia di se stessa a livello 0 (Yeeeh…), pronta a sua volta per essere portata al massimo, un lavoro part-time che nessuno vi paga. Un'altra strada è battere Emerald Weapon, che tramite scambio garantisce le Master Materia.",
    ffviiFull22: "Trattare l'argomento dei combattimenti contro Ruby ed Emerald Weapon come se fosse una cosa semplice, in questa recensione, sarebbe un po' come dire che bere un bicchiere d'acqua sia facile: peccato che il bicchiere sia scheggiato e tagliente lungo tutto il bordo, e l'acqua sia quasi solida, al punto da non scendere nemmeno capovolgendolo. Una gradazione di difficoltà capace di far perdere l'equilibrio persino a un cavallo di Skyrim.",
    ffviiFull23: "Tra le tante località che attraversiamo, volenti o nolenti, c'è anche Rocket Town: una cittadina \"immobile\" (con pochi npc in movimento che provano a darle vita) la cui principale attrazione è un razzo storto. Affascinante, non c'è che dire, quasi commovente nella sua immobilità. Se non fosse per Cid Highwind, un pilota volgarissimo che più avanti nella storia diventerà anche capo del gruppo, proprio quando Cloud non sarà più in grado di esserlo (con mia grande gioia), e che ci trascinerà in uno scontro con la Shinra a causa dei suoi sogni, il posto sarebbe a malapena degno di nota.",
    ffviiFull24: "Vi rendete conto che tutto questo viaggio serve solo ad andare a picchiare Sephiroth? E la cosa buffa è che, nel frattempo, succede di tutto: la morte di Bugenhagen (un altro momento straziante del gioco); l'esplosione del tempio degli antichi (meglio non trovarsi lì dentro quando capita una cosa del genere); Mideel che esplode anch'essa, stavolta per colpa dell'Ultima Weapon (la più scarsa del trio dei 3 boss weapon opzionali di fine gioco che svolazzava da quelle parti), quindi occhio a far rifornimento lì prima che succeda, perché una volta esplosa la città non sarà più possibile, per ragioni che non credo di dover specificare; e ancora, una sessione di snowboard sulla neve, seguita da una zona enorme e labirintica vicino a Icicle Inn, tra ghiaccio, bufere e una montagna da scalare dove è letteralmente possibile svenire per il freddo. Insomma, un tour geografico delle catastrofi, praticamente.",
    ffviiFull25: "Ah sì, quasi dimenticavo: anche Cait Sith fa BOOM insieme al tempio degli antichi, dato che resta lì dentro fino alla fine; ma essendo un gatto robot (e un simpatico traditore), viene sostituito all'istante da una versione 2.0, identica in tutto e per tutto, come se il produttore ne avesse un magazzino intero. Un sospetto che avevo fin dall'inizio, e infatti era davvero una spia della Shinra. A differenza di Rufus Shinra, il figlio ed erede del presidente defunto (uno che si dà un'importanza tutta sua, e nemmeno troppo velatamente), e di Reno, Rude ed Elena, i simpaticoni che incrociamo spesso lungo il cammino e che ci combattono o meno a seconda di quanta voglia abbiano di seguire gli ordini, a comandare Cait Sith è Tseng, il capo di Reno e soci, che sembra nutrire una certa passione nell'aiutarci, sospettosamente.",
    ffviiFull26: "Tra gli altri membri della Shinra vale la pena citare Heidegger, un pagliaccio (non in senso figurato) al servizio dell'ex presidente, sempre bersaglio delle prese in giro di Rufus (vai Rufus!), e Scarlet: lei sì che è davvero antipatica. Dico sul serio, Sephiroth può pure farsi da parte: voglio che sia lei il vero nemico finale. Se Sephiroth se lo gioca a spadate uno contro uno con Cloud, io Scarlet la vorrei vedere affrontare Tifa a schiaffi, uno contro uno, proprio come succede sul cannone di Junon, e pagherei il biglietto intero per assistere.",
    ffviiFull27: "Detto questo, non resta che parlare del comparto grafico e musicale.",
    ffviiFull28: "Guardiamoci in faccia, per quanto sia impossibile farlo davvero: è un gioco del 1997, e a livello grafico i personaggi sembrano avere dei tumori ai muscoli, colpa dell'eccessiva poligonalità degli arti; le cutscene, ovviamente, non fanno eccezione, salvo rare occasioni. Quindi fidatevi: se decidete di giocarci, mettete subito in conto questo aspetto, e magari abbassate un po' le aspettative visive prima di iniziare.",
    ffviiFull29: "Sul fronte audio, invece, si cambia completamente registro: qui non ho proprio nulla di cui lamentarmi, è stupendo. La più amata, sia da me che dal pubblico in generale, resta senza dubbio One-Winged Angel, il tema della battaglia finale con Sephiroth. Ma è meravigliosa, cosa volete che vi dica, punto e basta.",
    ffviiFull30: "Se non ci avete mai giocato, e probabilmente non lo farete mai (almeno non nella versione originale), andate quantomeno a recuperarvi le musiche, in particolare il tema di Sephiroth: capirete subito di cosa sto parlando.",
    ffviiClosing: "Tornando seri per un momento, al di là dei limiti dovuti all'età del titolo, FFVII ha segnato la mia infanzia, e resta ancora oggi un gioco che porto nel cuore, per tantissimi aspetti e per le innumerevoli ore che ha riempito nelle mie giornate. Vivere, sì, vivere per davvero le vicende di Cloud e dei suoi compagni, tra momenti di vittoria e momenti di perdita, mi teneva incollato allo schermo allora e mi terrebbe incollato ancora oggi, senza possibilità di staccarmi fino ai titoli di coda, lasciandomi solo con un sorriso stampato in faccia.",
    ffviiDeepGoofyTitlePart1: "Recensione veloce, a caldo",
    ffviiDeepGoofyTitlePart2: "spoiler limitati",
    ffviiGoofyPlaceholder1: "Testo segnaposto per la versione senza freni: stessa trama, zero filtri sul turpiloquio e sulle battute fuori luogo.",
    ffviiGoofyPlaceholder2: "Seconda sezione segnaposto: qui andrà il resto della versione cazzona, appena pronta.",
    ffixHours: "~38 ore (storia) / 80-100+ ORE (completo)",
    ffixCompleted: "Sì",
    ffixDeepMainTitlePart1: "Recensione completa, senza filtri",
    ffixDeepMainTitlePart2: "spoiler presenti",
    ffixDeepGoofyTitlePart1: "Recensione veloce, a caldo",
    ffixDeepGoofyTitlePart2: "spoiler limitati",
    ffixGoofyPlaceholder1: "Testo segnaposto per la versione a caldo: stessa trama, tono più leggero e veloce.",
    ffixGoofyPlaceholder2: "Seconda sezione segnaposto: qui andrà il resto della versione a caldo, appena pronta.",
    ffixFull01: "\"Alone for a while I've been searching through the dark...\"",
    ffixFull02: "Chi conosce il titolo avrà sicuramente letto questa frase canticchiandola tra sé, magari stonando su \"dark\" come tutti noi. Chi invece sta ancora brancolando nel buio, per restare in tema, su cosa significhi o su cosa sia FFIX in generale, magari pensando a una torta o a una località del Belgio, può stare tranquillo: per voi non cambierà comunque nulla, procedete pure, nessun giudizio (quasi nessuno).",
    ffixFull03: "Questo gioco è, letteralmente, una favola. Un'atmosfera e uno stile grafico che gli conferiscono quell'aspetto fiabesco che mi piace, e allo stesso tempo non mi piace, di FFIX: sì, ho appena descritto un rapporto tossico con un videogioco, e no, non me ne pento. Ma la storia non è da meno, e lo si intuisce già dall'intro, che riesce a presentare in poche battute sia alcuni futuri membri del party, sia il protagonista, Zidane Tribal (Gidan, nella versione italiana). Non ho mai capito il motivo del cambio di nome. Capisco l'intenzione, evitare l'accostamento con l'ex calciatore francese, ma la capocciata ai mondiali non era ancora avvenuta quando il gioco è uscito, quindi quel \"disprezzo preventivo\" per l'accostamento mi resta un mistero irrisolto.",
    ffixFull04: "Comunque sia: noi siamo Goku da bambino... no, scusate, siamo Gidan, questo biondino con la coda da scimmia, membro di un gruppo di banditi impegnato a organizzare uno spettacolo teatrale nella grande città di Alexandria, spettacolo che serve solo da copertura per rapire la principessa Garnet. Piano infallibile, a prova di errore, cosa potrebbe mai andare storto. Garnet Til Alexandros, \"figlia\" della regina Brahne: si vede lontano un miglio che è adottata, tipo cartello al neon. Da una parte una ragazza carinissima (la principessa è seriamente bella), dall'altra parte... la regina. Non mi espongo oltre, non vorrei essere ricercato dalle sue guardie.",
    ffixFull05: "Se ve lo steste chiedendo, per chi non conosce la trama: sì, questo videogioco include anche una storia d'amore tra il bandito e la principessa appena nominati. Un tira e molla continuo, fatto di broncio da una parte e tentativi di riconquista dall'altra, o di un protagonista perso nei suoi pensieri e di una Garnet che fatica perfino a riconoscerlo, il che, diciamocelo, non è proprio il miglior biglietto da visita per una storia d'amore. Non le scene di coppia migliori che abbia visto, a dirla tutta: certi battibecchi mi hanno fatto solo desiderare che si tornasse al combattimento, all'esplorazione, letteralmente a qualsiasi altra cosa, persino a rivedere la regina Brahne ridere, e non ve lo dico come fosse un complimento. Ma nel finale, dopo che una scelta di Gidan li separa per un bel po' (lui deciso a salvare Kuja, l'antagonista principale, perché ovviamente il momento giusto per fare l'eroe è sempre quello meno opportuno), i due si riuniscono in una scena tanto commovente quanto romantica. Quella, ve lo confesso, l'ho amata senza riserve.",
    ffixFull06: "Tornando all'inizio: il filmato di apertura, dopo una breve presentazione dei Tantarus (lo scapestrato gruppo di banditi di Gidan) e uno strambo tutorial in cui affrontiamo il capobanda Kalò travestito con testa di drago (perché no), ci affida a Vivi Orunitia. Un maghetto così tenero da essere amato letteralmente da chiunque, fan, non fan, alieni compresi, me per primo (no, non sono un alieno, ma capisco il dubbio), il quale passa le prime scene a cercare disperatamente biglietti per uno spettacolo (proprio quello organizzato dai Tantarus), affidandosi a un \"amico\" conosciuto da cinque minuti con le sembianze di un topo. Ci riescono, va detto, con una facilità sospetta.",
    ffixFull07: "Menzione d'onore (soprattutto durante la recita) per Marcus, membro dei Tantarus che parla mezzo tedesco senza che nessuno gli abbia mai chiesto spiegazioni, e per Er Cina: il più grande, il migliore, il genialissimo tizio (anche lui della banda), vestito da indigeno per motivi che preferisco non indagare mai, in nessuna circostanza, e che parla un romanaccio stretto stretto. Eh no, noi romani non siamo indigeni né cannibali, giusto per chiarire una volta per tutte. Detto tra noi, Er Cina è il mio preferito dell'intero gruppo, se non si fosse capito.",
    ffixFull08: "Da qui in poi, però, la trama parte con il piede sbagliato, almeno per i miei gusti. La sezione della foresta maledetta, con Vivi prima e Garnet poi rapiti da una pianta ostile (una pianta, sì, avete letto bene), e Blank (altro Tantarus) pietrificato durante la fuga, è carina ma diventa presto stancante. Se fosse durata ancora un po', quello che sembra un'idea di design geniale si sarebbe rivelato semplicemente un test di pazienza.",
    ffixFull09: "Peccato per Blank, comunque: verrà liberato dalla pietrificazione solo verso fine gioco (quindi no, non è morto, tranquilli), ma mi sembrava avere il potenziale per un futuro membro del party, uno spadaccino niente male. Al suo posto ci ritroviamo con Adelbert Steiner, l'uomo di latta che passa il tempo a rompere le scatole a Gidan per il solo, unico, imperdonabile motivo che si avvicina troppo a Garnet. Vivi, ti prego, dagli qualche magia da masticare e tienilo buono, fallo per tutti noi.",
    ffixFull10: "E dopo la foresta maledetta arriva quella che ancora oggi detesto più di tutte: la caverna ghiacciata. Se non fosse per il tutorial che ti spiega come mandare i personaggi in trance (il nostro equivalente di \"diventare super sayan\", solo con meno urla), sarebbe una tortura pura, specialmente così presto nel gioco. Non credo di dover aggiungere altro su quanto quella sezione mi abbia annoiato.",
    ffixFull11: "La trama prosegue portandoci in località via via più memorabili: quella affascinante di Lindblum, con il suo simpaticissimo re trasformato in una specie di scarafaggio saltellante (uno Scaraburi, e no, non sto scherzando, è davvero un re-insetto e nessuno nella storia sembra trovarlo strano), oppure quella devastata di Burmesia, con tutto il background di Freija Crescent che sulla carta dovrebbe colpirmi al cuore, e che invece mi ha lasciato solo la fredda soddisfazione di aver reclutato un altro personaggio da tenere in panchina. Tutto questo per scoprire, alla fine, che la vera cattiva è proprio la regina Brahne: un personaggio abbastanza rilevante da scagliarci contro la sua fidata Beatrix (vi lascio un'immagine qui sotto, così capite quanto sia bella nonostante la grafica di FFIX) e i pagliacci Zon e Son, che fanno da carcerieri a Garnet per un breve tratto a metà gioco... e da pagliacci, ovviamente, tutte le volte che compaiono, senza mai un giorno di riposo dal ruolo.",
    ffixFull12: "A quel punto entra in scena Kuja, che dopo essersi finto alleato della regina (con la naturalezza di chi ha fatto pratica) evoca Bahamut e lo scaglia contro la splendida Alexandria, seminando distruzione per la città come se piovesse. Garnet ed Eiko Carol rispondono richiamando in soccorso Alexander, l'eidolon guardiano del regno, che spazza via Bahamut senza troppi complimenti, tipo buttafuori a fine serata. Peccato che, proprio quando la situazione sembra risolta, arrivi Garland a bordo dell'Invincible, la nave che lo stesso Kuja descrive come \"quel grande occhio nel cielo\": un nome che già da solo dovrebbe far scattare un campanello d'allarme. Quell'occhio spara un raggio talmente devastante da radere al suolo sia Alexander che gran parte della città, un fungo atomico in tutto tranne che nel nome, giusto per ricordare a tutti, Kuja compreso, chi comanda davvero. Garnet assiste alla scena da un luogo sicuro, e il trauma le fa perdere la voce. Pensavo, ingenuamente, che avrebbe finalmente detto meno sciocchezze; invece il suo \"dire\" si è trasformato in \"fare\", e le cose sono peggiorate ulteriormente (evvai...). State tranquilli comunque: riacquisterà la voce più o meno nel momento in cui deciderà di darsi una calmata, rendendo felici parecchi giocatori. Me incluso, e con gioia sincera.",
    ffixFull13: "Ah, dimenticavo: la regina Brahne muore. Sì, davvero, niente trucchi.",
    ffixFull14: "È forse proprio da qui che il vero viaggio inizia, con un team che si è già allargato ad Amarant Coral (un sicario che sbaglia il proprio duello contro Gidan, tanto quanto la sua compagna di crimini sbaglia la propria missione, il che la dice lunga sul loro tasso di professionalità) ed Eiko Carol, già citata poco sopra (che gran fantasia nei cognomi, eh: Coral e Carol, praticamente lo stesso identikit anagrammato), seconda evocatrice che finisce per fare, male, concorrenza a Garnet. Preferirei quasi non parlare di questi due: nella mia testa gareggiano costantemente, testa a testa, per il titolo di personaggio più antipatico del gioco.",
    ffixFull15: "Certo, a leggere fin qui sembra che nessuno mi sia simpatico, ma non è così: mi sono tenuto per ultima l'aggiunta che preferisco, Quina Quen. Una rana, sì, ma divertentissima, romanaccia pure lei, e ossessionata dal cibo in ogni singolo istante della sua esistenza, senza tregua né pause pranzo. Se fossi una rana femmina, sarei probabilmente identica a lei. O forse basterebbe essere femmina, punto, senza nemmeno la rana di mezzo.",
    ffixFull16: "Il viaggio, lunghissimo, ci porta a scoprire che Gidan proviene in realtà da un pianeta parallelo, Tera (mentre quello di partenza, dove si svolge quasi tutta la storia, è Gaia). Ci si arriva solo dopo aver sconfitto quattro guardiani che costringono il gruppo a dividersi, con Gidan e Quina in coppia in una scena stupenda, la classica accoppiata che nessuno si aspettava e che funziona alla perfezione. Su Tera scopriamo che Garland, un megalomane che non saprei descrivere meglio di così (e onestamente non ci provo nemmeno), ha creato un intero esercito di Genomi, cloni identici tra loro di cui lo stesso Gidan fa parte, motivo per cui te li ritrovi ovunque come se fosse un saldo di fine stagione. Kuja era il primo prototipo della serie, poi giudicato imperfetto: Gidan, semplicemente, è il modello arrivato dopo, quello riuscito meglio. La rivelazione manda in crisi la psiche di Gidan per un po', ma una volta ripresosi conduce il gruppo alla resa dei conti con Kuja, sconfiggendolo. Peccato solo che, appena battuto Kuja, si palesi Trivia: un'entità che si erge a giudice della vita e di tutto quanto, insomma una cosa davvero stupida, sbucata dal nulla come l'ospite indesiderato di una festa già finita. Non ho mai digerito né lui né la sua esistenza. Per come la vedo io, la storia doveva chiudersi con lo scontro contro un Kuja in trance, punto.",
    ffixFull17: "Passando al combattimento: il sistema è scandito quasi interamente dall'equipaggiamento indossato dai personaggi, da cui derivano tutte le abilità apprese. Vale per le mosse da ladro/guerriero di Gidan, per le magie nere di Vivi, e persino per le evocazioni di Garnet (ed Eiko, già che ci siamo, tanto per non farla sentire esclusa). La difficoltà maggiore, se puntate al completismo dell'arsenale, sta nel viaggiare in lungo e in largo, soprattutto verso Toleno e la sua famigerata (quanto amatissima, ammettiamolo) asta, per recuperare ogni pezzo di equipaggiamento necessario, spesso a suon di offerte assurde.",
    ffixFull18: "Conviene comunque prepararsi bene, tanto per le battute finali quanto per lo scontro opzionale contro Ozma: il boss più forte del gioco, una sfera fluttuante metà luce e metà oscurità nascosta nel Chocoaereoparco, raggiungibile solo dopo un'estenuante sidequest a base di chocobo. E se pensate che quello sia l'unico segreto ben nascosto del gioco, vi sbagliate di grosso: dentro la biblioteca del castello di Alexandria si cela un secondo boss opzionale, intrappolato letteralmente dentro un libro (un libro, sì, il posto più ovvio del mondo per un mostro), affrontabile solo in due finestre temporali brevissime nel corso della trama. Perdetele, e quel libro resterà chiuso per sempre, con tanti saluti al mostro dentro.",
    ffixFull19: "Tornando ad Ozma, per affrontare il pallone gigante al meglio tornerebbe utile l'Excalibur II, l'arma segreta di Steiner, ottenibile solo completando una vera e propria speedrun: bisogna arrivare a un passo dalle battaglie finali entro 12 ore di gioco. Immagino che ormai chiunque, me compreso, abbia già affrontato lo scontro opzionale (o abbia rinunciato all'impresa, per scelta o per pura, sana ignoranza).",
    ffixFull20: "Il mondo di gioco non merita di essere esplorato solo per questo, ma anche per l'infinità di minigiochi offerti: il Tetra Master, gioco di carte che prova a scimmiottare il ben più riuscito Triple Triad dell'ottavo capitolo (e fallisce, diciamocelo con sincerità); il quiz su un mostro già di per sé difficile da trovare, dove sbagliare significa ricominciare tutto da capo (procuratevi una guida, o i muri di casa vostra pagheranno le conseguenze); e il salto con la corda, 1000 salti consecutivi senza un solo errore, un livello di sadismo che rasenta l'arte. Questo gioco sembra non voler proprio farsi recensire: tre minigiochi su tre citati finora, li detesto con tutto il cuore. Soprattutto l'ultimo, che meriterebbe un girone infernale tutto suo. Ma tra tanti, uno salva la situazione: la chocografia! In pratica, andate in giro a catturare chocobo nei boschi (che vogliano venire con voi o meno, poco importa, il consenso non è previsto), li cavalcate, e usate il loro becco per scavare buche in tutto il mondo, peggio di un bambino con la paletta in spiaggia dopo tre gelati. Una vera caccia al tesoro, basata su mappe che si trovano in giro o proprio nei boschi dei chocobo stessi.",
    ffixFull21: "Parlare dell'aspetto grafico è al tempo stesso banale e complicato. Come accennato all'inizio, FFIX punta più di ogni altro capitolo a presentarsi come una favola, anche visivamente, e questa scelta lo rende più facile da apprezzare oggi, nonostante resti pur sempre un titolo PlayStation 1 con tutti i limiti dell'epoca. Davvero un bel vedere, altro che pixel sgraziati. Ancora meglio da ascoltare: le musiche sono composte con una tale maestria da farti vivere appieno tanto i momenti romantici quanto quelli tristi o malinconici, senza mai tradire l'atmosfera del momento, un equilibrista perfetto tra le emozioni. Le sequenze più dure, come la parziale distruzione di Alexandria (già citata) o quella totale di Cleyra, restano affascinanti proprio grazie alla colonna sonora, anche se nulla raggiunge il livello toccato dalla scena con Garnet e \"Melodies of Life\", la stessa canzone che ho citato in apertura di questa recensione e che, se siete arrivati fin qui senza andarla a riascoltare almeno una volta, rimediate subito.",
    ffixClosing: "Insomma, con questo gioco vivo un continuo tira e molla tra amore e odio: momenti che mi hanno fatto sognare, altri in cui avrei dato qualunque cosa per un tasto \"salta scena\" da premere con rabbia. Ma nessuno di questi alti e bassi mi impedisce di dire che FFIX resta un'esperienza meravigliosa da vivere, anche solo per scoprire le origini di Vivi o trovare il segretissimo villaggio dei maghi neri. Un viaggio, un videogioco che all'inizio può far storcere il naso, ma che alla fine lascia sempre, senza eccezioni, un ricordo di piena soddisfazione.",
    shadyQuickNarrativeTitle: "Narrativa e Mondo",
    shadyQuickNarrativeText: "Il gioco racconta la storia di una bambina e della sua ombra, rinchiuse in un istituto, alle prese con ricordi ed emozioni rappresentati in modo simbolico attraverso gli ambienti che si attraversano. La narrazione, affidata anche al doppiaggio di Hannah Murray (nota per Game of Thrones e Skins), è apprezzata per l'atmosfera onirica ed emotiva che riesce a costruire, anche se parte della critica l'ha giudicata a tratti fin troppo criptica nel modo in cui rivela la propria storia.",
    shadyQuickGameplayTitle: "Gameplay",
    shadyQuickGameplayText: "Puzzle-platform in cui si controllano contemporaneamente due personaggi: la bambina, che si muove nel mondo tridimensionale, e la sua ombra, vincolata a un piano bidimensionale proiettato su pareti e superfici. I due piani di gioco interagiscono tra loro tramite luce e ombra (ad esempio spostando oggetti per modificarne le dimensioni proiettate), dando vita a enigmi ambientali originali, generalmente considerati il punto di forza più solido del titolo.",
    shadyQuickTechTitle: "Comparto Tecnico e Artistico",
    shadyQuickTechText: "Sviluppato dallo studio indipendente francese Douze Dixièmes, al loro debutto assoluto, e pubblicato da Focus Home Interactive nel dicembre 2020, il gioco si distingue soprattutto per la direzione artistica, costruita quasi interamente sul contrasto tra luce e ombra, non solo come strumento di gameplay ma come vero e proprio linguaggio narrativo. Il tema dell'ombra come parte nascosta di sé, un rimando abbastanza esplicito al concetto psicologico junghiano di \"ombra\", attraversa sia l'estetica che la storia stessa, dando al titolo un'identità visiva riconoscibile nonostante le dimensioni contenute della produzione. Proprio per questa cura artistica, il gioco ha ottenuto una candidatura all'Independent Games Festival nelle categorie dedicate a design e arte visiva.",
    shadyHours: "4-6 ore",
    shadyReleaseDate: "10 dicembre 2020",
    shadyCompleted: "Sì, 100%",
    shadyDeepMainTitlePart1: "Recensione completa, senza filtri",
    shadyDeepMainTitlePart2: "spoiler presenti",
    shadyDeepGoofyTitlePart1: "Recensione veloce, a caldo",
    shadyDeepGoofyTitlePart2: "spoiler limitati",
    shadyGoofyPlaceholder1: "Testo segnaposto per la versione a caldo: stessa trama, tono più leggero e veloce.",
    shadyGoofyPlaceholder2: "Seconda sezione segnaposto: qui andrà il resto della versione a caldo, appena pronta.",
    shadyFull01: "Questo piccolo videogioco fatto di puzzle e misteri è una perla nascosta, forse anche fin troppo bene.",
    shadyFull02: "La narrazione a mo' di favoletta alleggerisce il tema centrale del gioco, ovvero il problema della protagonista di stare al centro dell'attenzione, ma ci riesce fino ad un certo punto: il momento in cui, io stesso, così come altri giocatori, non abbiamo più potuto far finta che fosse solo un gioco di una bambina e la sua ombra, ma un'introspezione psicologica della protagonista stessa.",
    shadyFull03: "La storia parte con lei che scende da un'altalena in un parco. Sembra un inizio banale, scontato, ma forse non così tanto, per poi proseguire tra ambientazioni disparate e quasi sempre d'interno. Personalmente, la maggior parte non mi dicono assolutamente NULLA, esagero ovviamente, ma il senso è quello. Questo non significa, però, che nel racconto non abbiano un loro giusto scopo o motivo. In ogni caso, il gioco prosegue fino a portare la protagonista a confrontarsi con le sue paure, su un palco, cambiando in parte il sistema di gioco visto fino a quel momento.",
    shadyFull04: "Questo titolo si nutre letteralmente di logica, rendendo lo spostamento di oggetti ed ombre il fulcro del gameplay, nonché l'unico modo per andare avanti nel gioco. Le sezioni puzzle, dopo le primissime battute, si dividono in due parti: quella della realtà (o luce), dove la protagonista muove elementi reali in un ambiente 3D, e quella dell'ombra, dove la sua controparte 2D fa la stessa cosa con le versioni più \"scure\" di quegli stessi elementi, o di altri, riflesse alle pareti. Senza contare le \"spine ombra\", che più avanti nel gioco si limitano a intralciare il cammino, soprattutto quello di persone come me, che ci cadevano sopra di continuo, a tratti persino apposta, tanto sono arrivato a detestarle con una passione che non credevo di poter riservare a un asset grafico. I rompicapo alle volte son buffi, tanto quanto l'estetica dei collezionabili: degli uccelli di carta che per prenderli bisogna inventare sequenze, via via più assurde; tanto che negli ultimi livelli mi sono ritrovato a discutere sul serio con la mia ombra su come risolverli.",
    shadyFull05: "Il tutto è scandito dalla meccanica del riavvolgimento del tempo, che sostituisce il classico game over quando, per errore, si resta bloccati da qualche parte o l'ombra finisce per scoppiare come una bolla di sapone sulle già citate spine, o in altri modi altrettanto creativi. Una meccanica tanto semplice quanto divertente, che usavo spesso anche solo per diletto, pure per lassi di tempo inferiori al secondo, trasformando la protagonista in una sorta di Michael Jackson, solo senza il guanto luccicante.",
    shadyFull06: "Non mi dilungherò troppo sulle impressioni tecniche. Il gioco ha una grafica molto carina e decisamente godibile ma niente di straordinario. Sicuramente non infastidisce al punto da esasperare il giocatore. Mentre le musiche sono atmosferiche, interessanti, ma non ho urlato al capolavoro, neanche con la carinissima soundtrack che ci viene propinata durante la visualizzazione dei credits a fine gioco.",
    shadyFull07: "Tuttavia, tutto quello che ho detto, non è per arrivare, alla fine, a sparare sulla croce rossa, al contrario, il gioco mi è piaciuto e la sua lunghezza, breve, ammettiamolo, permette di giocarlo senza avere la sensazione di vivere una gabbia senza fine, dilatata a forza con rebus che, dopo un po', non offrivano più nulla davvero.",
    shadyClosing: "Si è quindi rivelato un titolo molto interessante, contento di averlo conosciuto, giocato e finito.",
    reportBtnLabel: "Segnala bug",
    reportTitle: "Segnala un problema",
    reportIntro: "Hai trovato qualcosa che non funziona? Descrivi cosa è successo qui sotto: la descrizione è obbligatoria, l'immagine è facoltativa ma aiuta molto.",
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
    brand: "Game Diaries",
    brandMobile: "Game\nDiaries",
    landingEyebrow: "Welcome to the archive\nof reviews",
    landingTitle: "Game Diaries",
    landingIntro: "Honest impressions on the games I've played — completed, platinumed, or loved for no good reason — with no pretense of being a guide.",
    kofiLabel: "Support me on Ko-fi",
    backToIndexLabel: "Back to index",
    backToHomeLabel: "Back to home",
    gateToggleLabel: "Open the reviews list",
    gateToggleLabelClose: "Close the reviews list",
    placeholderTile: "Title coming soon",
    spoilerAlert: "Every review contains detailed plot synopses, including endings and twists. Proceed only if you've already finished the games or aren't worried about spoilers.",
    spoilerAlertMobile: "Contains spoilers: proceed only if you've finished the games or don't mind.",
    landingSubDesktop: "Open the cart to browse the available reviews.",
    gateSideToggleOff: "Show the cart from the left",
    gateSideToggleOn: "Show the cart from the right",
    ffviiiHours: "~40 hours (story) / 80-100+ HOURS (100%)",
    factsLabel: "Facts",
    factDeveloper: "Developer",
    factRelease: "Original/Remastered release",
    factReleaseDate: "Release",
    factReleaseOriginal: "Original release",
    factCompleted: "Completed",
    ffviiiCompleted: "Yes, 100%",
    verdictRecommended: "Recommended",
    verdictMixed: "Not for everyone",
    verdictNotRecommended: "Not recommended",
    leaveALike: "Leave a like",
    quickReadLabelPart1: "Quick review, general overview",
    quickReadLabelPart2: "minimal or no spoilers",
    ffviiiQuickNarrativeTitle: "Story & World",
    ffviiiQuickNarrativeText: "The story blends a school-military setting with fantasy elements tied to sorceresses and supernatural powers, with several tonal shifts throughout the adventure. It's one of the most discussed storylines in the series: praised for its atmosphere and the mature tones it reaches at certain points, but also criticized by part of the audience for some unclear stretches in how events unfold.",
    ffviiiQuickGameplayTitle: "Gameplay",
    ffviiiQuickGameplayText: "An old-school Japanese turn-based RPG, whose real distinctiveness lies more outside battle than in it: the Junction system, which ties spells and Guardian Forces to character stats, is widely regarded as one of the most original (and, if mastered, most game-breaking) in the series. The rest of the experience is rounded out by a large world map to explore and a collectible card minigame, Triple Triad, often cited as one of the best minigames ever included in a Final Fantasy title.",
    ffviiiQuickTechTitle: "Technical & Artistic Side",
    ffviiiQuickTechText: "By 1999 standards, the visuals and soundtrack (the latter composed by Nobuo Uematsu) are widely recognized as among the most polished of their time, with CG cutscenes that were genuinely groundbreaking. Over the years the graphics have inevitably shown their age, while the artistic and musical side is still considered one of the game's strengths today. The 2019 Remastered version mainly updated the character models, leaving the original backgrounds and environments largely untouched.",
    ffviiQuickNarrativeTitle: "Story & World",
    ffviiQuickNarrativeText: "The plot is set in a world blending fantasy and sci-fi elements, centered on a city-state controlled by a megacorporation. It's often cited as one of the most influential and widely studied stories in the series, praised for the depth of its themes and its impact on the JRPG genre worldwide.",
    ffviiQuickGameplayTitle: "Gameplay",
    ffviiQuickGameplayText: "An old-school Japanese turn-based RPG, with a party selectable from a large cast of playable characters. The Materia system, which lets players equip and combine spells and abilities modularly onto equipment, is generally considered one of the most flexible and influential customization systems of its time. The game also includes several optional minigames and side content that was particularly extensive for its era.",
    ffviiQuickTechTitle: "Technical & Artistic Side",
    ffviiQuickTechText: "Released in 1997, it was the first entry in the series to use 3D character models over pre-rendered backgrounds and CG cutscenes, a massive technical leap over its Super Nintendo predecessors. The soundtrack, composed by Nobuo Uematsu, is among the most celebrated in the entire series. There's no true official \"Remastered\" version: a 2012 PC re-release added some technical improvements, while Final Fantasy VII Remake (2020) is a separate project, an action-based reimagining of the original rather than a straightforward remaster.",
    ffixQuickNarrativeTitle: "Story & World",
    ffixQuickNarrativeText: "Set in a medieval fantasy world called Gaia, it marks a deliberate return to the series' classic style, following the more modern, sci-fi-tinged settings of FFVII and FFVIII. It's often cited by both critics and fans as one of the strongest entries in the entire saga, in part for how it pays homage to the Final Fantasy tradition while still introducing new elements.",
    ffixQuickGameplayTitle: "Gameplay",
    ffixQuickGameplayText: "An old-school Japanese turn-based RPG built on the ATB (Active Time Battle) system, with a large party and characters who, unlike in other entries, have more clearly defined and distinct roles from one another. Character growth mainly comes from learning abilities through equipped gear. The game also features a collectible card minigame (Tetra Master) and several optional activities, including chocobo hunting.",
    ffixQuickTechTitle: "Technical & Artistic Side",
    ffixQuickTechText: "Released in 2000, developed by Square, directed by Hiroyuki Ito, with a soundtrack by Nobuo Uematsu (his last solo composing credit on a main numbered entry). Visually more stylized than VII and VIII, with a deliberately more fairy-tale-like aesthetic. It holds the highest Metacritic score in the series. An HD remaster has been available since 2016 on PC and mobile, later extended to PS4, Switch, and Xbox One.",
    thresholdText: "Warning: the full review may contain heavy spoilers, including the ending.",
    thresholdBtn: "Read the full review",
    thresholdBtnSerious: "Full",
    thresholdBtnGoofy: "Hot take",
    ffviiiDeepMainTitlePart1: "Full review, no filter",
    ffviiiDeepMainTitlePart2: "spoilers ahead",
    ffviiiDeepGoofyTitlePart1: "Quick review, hot take",
    ffviiiDeepGoofyTitlePart2: "limited spoilers",
    ffviiiGoofyPlaceholder1: "Placeholder text for the no-holds-barred version: same plot, zero filter on the swearing and the tasteless jokes.",
    ffviiiGoofyPlaceholder2: "Second placeholder section: the rest of the goofy version goes here once it's ready.",
    ffviiiTheoryLinkLabel: "Go to the theory on The Hidden Thread",
    ffviiiFull01: "Let me start with a confession: Final Fantasy VIII is my favorite video game of all time, regardless of its flaws and the criticism it's received. That doesn't mean I'll avoid talking about its weaker sides, though, even if the \"full\" version of these reviews deliberately leaves room for subjective takes, so get ready for a mix of analysis and unconditional love.",
    ffviiiFull02: "The game opens straight away with a cutscene that gives you goosebumps, the kind of intro that plants the idea in your head that you're about to experience something magnificent before you've even touched a button, no matter how you end up judging it later. I personally love that intro, and every time I rewatch it I'm still blown away, as if it were the first time.",
    ffviiiFull03: "*FITHOS...LUSEC...WECOS...VINOSEC!*",
    ffviiiFull04: "Squall Leonhart, the protagonist, starts out as the kind of character capable of testing the patience of players and some of his own party members alike, thanks to a pretty prickly personality, unless yours happens to resemble his; in which case, I'd strongly advise against it, for everyone's sake. Maybe back then I resembled him a little myself, at least in being closed off and occasionally solitary or moody, which is why I could tolerate him; a textbook case of \"I recognize myself and I don't like it, but I keep watching anyway.\" It's no coincidence fans have jokingly linked him to emo ideology and fashion, helped along by the game's release period: a historical stroke of luck no writer could have planned for. And no, I (like Squall) was never emo.",
    ffviiiFull05: "As the story moves forward, though, that closed-off personality starts to open up, mostly thanks to Rinoa Heartilly and her personality, sometimes strong, sometimes fragile, capable of confusing our protagonist's mind (and mine too, honestly). Sometimes Squall's opening up brings out a fragility that won't be to everyone's taste, but in exchange it rewards the audience with some genuinely breathtaking romantic scenes. Not all of them worth replicating in real life, mind you: the part in space, for instance, strikes me as a little dangerous, not to mention technically impossible without a spacesuit and a PhD in astrophysics.",
    ffviiiFull06: "Speaking of Rinoa, her reveal as a sorceress is a plot twist that left me stunned, not so much for the news itself, but for all the consequences that follow and for unlocking her new \"little angel\" Limit Break, which, in my opinion, is a lot weaker than her main one, where she uses her dog (a female named Angelo) in all sorts of unusual ways, the kind that makes you wonder about the poor animal's wellbeing. Same goes for watching a sunny character get swept up in a string of harsh, sad events, making her happiness or unhappiness feel almost entirely dependent on Squall's presence as the story goes on, like the game took the remote control to her own life away from her. It's always strange seeing the contrast between the rebel from the Forest Owls of Timber and the girl lying helpless on a bed after the clash with Edea, all the way to her complete helplessness in space (the part mentioned above) and, finally, the imprisoned sorceress: a story arc that \"emotional rollercoaster\" barely does justice to.",
    ffviiiFull07: "The other playable characters end up getting a bit overshadowed by the two leads, forgotten by the plot not long after being introduced, pushed into the background or left standing around, with their development only noticeable if you study the smallest details; the kind of details only a die-hard fan or a psychopath would ever catch, and honestly I'm not sure which category I fall into.",
    ffviiiFull08: "Personally, I've never seen this as a big issue. It's a real flaw, one that's been heavily criticized by some fans and especially by people who don't even like the game, but I still think it was handled well enough to hint, even in these side characters, at growth that shouldn't be underestimated, even when the game seems to be doing everything it can to slip it past you unnoticed.",
    ffviiiFull09: "One case I want to dwell on is Selphie Tilmitt: normally a cheerful, outgoing girl who loves the color yellow and trains (a combo that already tells you everything about her personality), who after visiting Trabia Garden, destroyed by a missile strike, disappears from the scene for a while under the excuse of needing rest. The game never shows it outright, but it's not at all unlikely that the event left real scars on her, to the point of pushing her to shut herself alone in her room, maybe to vent or cry, something the game would rather leave you to imagine than show you directly.",
    ffviiiFull10: "Zell Dincht too (our resident cafeteria hot-dog hunter, a mission he carries out with more dedication than any official duty) changes quite a bit: from the \"chicken-wuss\" (as Seifer Almasy calls him) desperate to take charge, to a member who learns to stay in his lane, landing, for a very brief stretch, a role of real responsibility (squad leader, no less) at the exact moment he's finally accepted the need to grow up on that front.",
    ffviiiFull11: "The same goes for Quistis Trepe (the forbidden dream of plenty of guys her age, and honestly, I get it) and Irvine Kinneas (whose name I still can't pronounce with any confidence, so I just rotate through all the variants, and who's about as charming as a shopkeeper who doubles the price the second you walk in), no exceptions there either.",
    ffviiiFull12: "In short, characters who don't just need to be commanded, but understood.",
    ffviiiFull13: "Among the other notable characters outside the main group, there's the already-mentioned Seifer, with his strange fixations: the dream of becoming a sorceress's knight no matter what, only to end up practically the one person who never manages it, despite trying everything, a failure so complete it's almost admirable. The kind of behavior that makes you want to hit him with a good old headbutt every once in a while, free therapy session included, and his endless rivalry with Squall that only seems to settle at the very end of the game, during the credits, not a moment sooner, because obviously reconciliation has to be earned through suffering right up to the last minute. Always flanked by his loyal Fujin and Raijin, a pair of... schoolyard bullies who seem to see Seifer as somewhere between a squad captain and a small-scale dictator, and who'd probably follow him into an active volcano.",
    ffviiiFull14: "Edea Kramer, who's impossible to hate no matter how hard you try, given her condition as a puppet possessed by a sorceress from the future: the perfect excuse, if you will, except here it's actually true. I've never fully figured out how I feel about her even after freeing her from possession; sometimes she talks like she knows something, but with the initiative of a Tonberry with its knife still lowered: you know it's coming eventually, but in the meantime you've got plenty of time for coffee, a shower, maybe even a vacation.",
    ffviiiFull15: "In our dreams, quite literally, we find Laguna Loire and his two loyal companions, Kiros Seagill and Ward Zabac, three Galbadian soldiers who get up to all sorts of trouble, with a level of professional competence that \"questionable\" is already being generous about. That said, I have to admit they've got no shortage of courage: throwing themselves off a cliff without blinking is basically routine business for them. Though, to be fair, it was Laguna who launched both of them and himself off that cliff, so maybe he's the real madman of the trio, and the other two are just collateral damage from his improvising.",
    ffviiiFull16: "Those dreams, by the way, are caused by Ellone: the most mysterious character in the game, a supposed relative of Squall's, and a full-time fugitive around the clock, with a schedule busy enough to make a touring head of state jealous.",
    ffviiiFull17: "And let me also mention those two clowns (not literal ones) Biggs and Wedge, whose surnames remain an unsolvable mystery: extremely likable, full stop.",
    ffviiiFull18: "The story, for its part, starts out as a kind of \"slice of life\" set in a school, military as it may be. I want to dwell on that \"military\" bit for a second: remember how old these characters are, right? A story built on training in cramped (and sometimes maze-like) caves, missions to rank up, and promotions. That last part comes with *ridiculously easy* tests to rise through SeeD, the name of the military group our characters belong to, and to earn more money to spend on whatever items or souvenirs you feel like buying. All of which gradually turns into a full-blown witch hunt, though thankfully without pitchforks and torches, always in that classic old-school Final Fantasy style.",
    ffviiiFull19: "I know tonal shifts like this one aren't for everyone, but I loved it precisely because it feels like a natural consequence of the setup: a \"I was always going to end up here, I was just stuck proving how well I could handle a gunblade first\" kind of moment.",
    ffviiiFull20: "And speaking of the gunblade! A genius weapon, I'll admit, a fusion, a bit like what you get with the Potara earrings in Dragon Ball, between a sword and a gun/rifle, but it stays gorgeous regardless, and even in combat its mechanic really sells the idea, even if in practice it just means hitting a button on time while silently praying you actually nailed the timing.",
    ffviiiFull21: "As you keep progressing, the story evolves in completely unexpected ways: Squall, from being simply the sole owner and user (alongside rival Seifer) of the gunblade, becomes Commander of Balamb Garden, but not before dragging us poor players through a bunch of ordeals, including: escaping a maximum-security prison designed to be inescapable (spoiler: it really isn't), with the exits constantly getting buried in sand; defeating in combat the true owner of Balamb Garden (the mighty Norg), who had Headmaster Cid Kramer under his thumb; and passing out every so often (thanks, Ellone, really, much appreciated), in not always pleasant places, to relive Laguna Loire's (Squall's father) missions with his friends, including that one time he got a cramp mid-flirt with a lounge pianist destined to become a singer (and Rinoa's mother): quite possibly the worst timing in Final Fantasy history.",
    ffviiiFull22: "All of this leads our characters into a stunning war against Edea, Galbadia, and its Garden, through moments that leave you glued to the screen and cutscenes that will make you set down the controller entirely (or pull your hands off mouse and keyboard), before finally arriving, in the future, via Time Compression, at the doors of Ultimecia's castle, the game's main antagonist, and defeating her.",
    ffviiiFull23: "If you don't know what Time Compression is, well, it's simple: take past, present, and future, throw them in a blender, hit \"on,\" and there you go, you've got \"Time Compression,\" congratulations, you're now exactly as prepared as I was the first time (that is, not at all).",
    ffviiiFull24: "Within that same castle, we don't just find her and her guardians, who strip away both combat and menu functions (including the ability to save, just to pile on some extra anxiety), but also Omega Weapon, the strongest optional boss in the game, even stronger than Ultimecia herself; \"stronger,\" though, doesn't just mean tougher than other enemies, but a genuine challenge to beat, one that won't let you slip up at the very last second.",
    ffviiiFull25: "Every stop along this journey comes with events and, above all, incredible scenes and cutscenes, ones that would be worth the effort all on their own, no extra reward needed.",
    ffviiiFull26: "Oh right, did I mention this game ends up in space too? Because just to be clear: yes, literally in space.",
    ffviiiFull27: "Speaking of sorceresses and space, let me open a little parenthesis: I'm convinced Adel is built like a man, and I don't think anything's going to change my mind on that.",
    ffviiiFull28: "There's a legend in the game about Hyne, a great being who created humans to serve him; when they rebelled and demanded his powers, he granted them, before fleeing, but only to women, and only a select few. So Adel should, by that logic, be a woman. With that build, though? I refuse to believe it, even under torture. Judge for yourselves, I've already made up my mind.",
    ffviiiFull29: "Moving on to the combat system: it's worth saying right away that in battle it doesn't offer much of note, but outside of combat it's a completely different story, basically a whole second game hidden inside the first.",
    ffviiiFull30: "The Junction system is completely unhinged: if you know how to use it, you can sow death and destruction through the ranks of your enemies without ever really noticing the difference between a regular monster and a final boss. Well, almost: some of them still manage to remind you who's boss, but those are the exception, not the rule. This ties in closely with the enemy level scaling: FFVIII is supposed to adjust monster difficulty to match your party's average level, but in practice, more often than not, the difference is basically imperceptible.",
    ffviiiFull31: "Either way, whether you're a newbie or a veteran, all it takes is properly studying the weapons at your disposal to make combat flow smoothly, without excessive difficulty, and with a bit of optimization you can flat-out break the game in half, in the most satisfying way possible.",
    ffviiiFull32: "Shall we talk about the Limit Breaks? You need your characters half-dead before you can even use them, which is already a combat philosophy all on its own, but they're genuinely absurd. Sure, it's great watching Squall lunge at an enemy in a fury (Renzokuken), or fire off a photon beam that pierces the atmosphere (Lion Heart, because obviously the sensible thing to do in a crisis is hit space itself), or Irvine shooting like he's at a firing range (Shot), but the real star is Selphie with The End. Nothing can survive it, it wipes out anything, ending the fight on the spot, like the game itself surrenders in its honor; the only exceptions are multi-phase enemies, where it just skips the current phase rather than the whole fight, better than nothing, right? Personally I could never get it to trigger, and still can't: I'll win a battle manually faster than I'll ever see it pop up in the list; I've probably seen it a handful of times total, maybe one or two, and every single one felt more like a miracle than an actual game event.",
    ffviiiFull33: "Magic, meanwhile, if it weren't for its use in Junction to boost characters' stats (on top of the natural growth from leveling up, though much smaller), would be completely useless, replaceable even by a dog fired out like a cannonball; and I'm not exaggerating even slightly: Rinoa's dog can literally do this, more effectively than half the spell list combined, which says a lot about the actual power hierarchy in this game.",
    ffviiiFull34: "A handful of spells manage to earn their keep thanks to genuinely broken utility, but there are so few of them you could count them on one hand, with fingers to spare.",
    ffviiiFull35: "On top of that, these spells need to be drawn from enemies or from strange pink sources that pop up out of the ground; yes, I know, that second option sounds even more absurd than the first, considering the ground could just as easily produce geysers, magma, or who knows what mysterious fumes instead. Maybe what we're actually \"drawing,\" or rather inhaling, are hallucinogenic fumes making us believe we've unlocked the ability to summon a giant fireball under an enemy's backside (Firaga) or bring fallen teammates back to life (Life): an explanation that, honestly, sounds more plausible than the official manual.",
    ffviiiFull36: "And then there are the Guardian Forces, entities you can summon with wildly varied looks, mostly monstrous, with the exception of Shiva, who's just hot, full stop, no further argument needed. Siren holds up decently too, to be fair. Summoned at the right moment, these creatures can completely flip the outcome of a fight. Honorable mention to Odin, Gilgamesh, and Phoenix, who, guess what, can't be summoned manually and show up whenever they feel like it, with all the reliability of a ghost bus; Phoenix is a partial exception, since you can also call it through an item (the Phoenix Down), but its automatic version remains the best option, genuinely capable of saving you from a Game Over. Another honorable mention goes to Ifrit, my favorite of this entry in the series, for... no particular reason, and no, I don't feel like justifying myself further on that one.",
    ffviiiFull37: "Back to Guardian Forces: they can be drawn from bosses or monsters, or found in various secret locations scattered around the world.",
    ffviiiFull38: "And there are plenty of spots like that on the map, both for Guardian Forces and for minigames: you genuinely risk losing yourself trying to track them all down, no exaggeration. If you're aiming for the platinum, get yourself a guide, and probably some extra patience too.",
    ffviiiFull39: "That said, outside of those secret spots, there aren't that many \"normal\" towns and villages, which leaves the game world feeling a bit sparse. Then again, we're talking about the PlayStation 1 era, so it's understandable, and honestly nobody plays FFVIII for the sightseeing anyway.",
    ffviiiFull40: "None of which takes away from the pleasure of roaming the map far and wide, first with Balamb Garden in its flying form, then with the Ragnarok. In fact, in my opinion, Esthar and Deling City still stand out as genuinely stunning pieces of design (but not level design).",
    ffviiiFull41: "Discovering the Guardian Forces' hidden lairs, the minigames, the underwater research base, every last chocobo forest, or heading off to train in places called \"the island closest to hell\" and \"the island closest to heaven,\" between Ruby Dragons and Malboros: a dream. Actually no, wait, Malboros are more of a nightmare with tentacles: let's just leave that one alone, and hope we never run into one again.",
    ffviiiFull42: "And finally, we arrive at the minigame to end all minigames, the true addiction of this title: Triple Triad, a collectible card game you can play against NPCs (not all of them), on a 3x3 grid, five cards each, with rules that get progressively nastier depending on the region, almost as if every city decided to invent its own poker laws. A genuinely fun minigame, and surprisingly easy to pick up too; winning is a little less easy once the rules start getting mean.",
    ffviiiFull43: "Welcome to Final Fantasy VIII's collecting side. What's that, Pokémon? Forget it, you'll lose half your total playtime chasing these cards without even realizing it. And if you don't like it, that's a you problem.",
    ffviiiFull44: "All in all, this game is wonderful from an awful lot of angles.",
    ffviiiFull45: "The cutscene visuals hold up surprisingly well even against today's games, with genuinely stunning sequences and moments that get you properly hyped, some capable of moving you to tears too, not bad at all for a late-'90s title. The music, meanwhile, is absolutely incredible. Genuinely gorgeous tracks; I'm struggling to even write coherently just thinking about how good they are. And then there's Eyes on Me, Julia's song sung by Faye Wong: the first time a Final Fantasy dared to put an actual pop star inside a video game, so much for \"modern experimentation,\" they were already doing it back then. The SeeD exam scene in Dollet is proof of just how high the bar was set on both fronts (visuals and music). Personally, watching it, I was already sold, as far as I'm concerned that exam was already a passing grade before it even ended.",
    ffviiiFull46: "But one of the most criticized aspects remains its plot holes, ones that could make even Dark Souls blush, a series that basically thrives on plot holes; that said, it's never once stopped fans from hunting for answers, or sometimes just making up their own, with theories that are often more elaborate than the actual plot. The ending, then, is a whole separate conversation: thoroughly confusing, a proper acid trip, the kind that leaves you staring at the screen wondering what exactly just happened.",
    ffviiiFull47: "One of the questions that remains unresolved to this day, and that still fuels endless discussion among fans, concerns Ultimecia's true identity: being a sorceress from the future, many believe she could actually be a character already known to us, from the era in which Final Fantasy VIII's events take place.",
    ffviiiFull48: "Over the years, candidates have included Squall, Zell, and Edea herself, each for different reasons, though all promptly and thoroughly debunked, for obvious reasons. But beyond them, there's one theory that's kept fans talking for years, covered in detail on the theories page. And who knows, maybe someday that same page will feature a theory of my own writing: it's not guaranteed, and I don't know yet when it might happen, but let's just say the temptation is there.",
    ffviiiFull49: "Despite all its imperfections, like the plot holes I never feel the weight of, maybe because of how young I was back when I first played it, or maybe just my own ability to enjoy the game beyond that \"shortcoming,\" this is a game I never stop carrying in my heart, for the events that moved me then and still move me now, and for all the romantic moments that have always left me speechless; and I don't mean the kind of \"pretty\" scenes you get in FFIX or FFX, two titles rich in sentimentality thanks to their own protagonist couples, but genuinely realistic, and sometimes harsh, situations.",
    ffviiiFull50: "Like the part where Squall carries a comatose Rinoa on his back and makes the entire trek from Fisherman's Horizon to Esthar on foot, walking along the rails; it always leaves me speechless, making me wonder if I would ever do that myself... or rather, if there would ever be someone who truly deserves that from me.",
    ffviiiFull51: "Beautiful, always beautiful, this game.",
    ffviiiClosing: "If you ever find yourself playing it for the first time, or replaying it for the umpteenth time, this beautiful title, give the kyactuses a hug from me ❤️.",
    noteLabel: "Personal note: here you can isolate a more subjective reflection, separate from the main body of the text.",
    ffviiHours: "~38 hours (story) / 80-100+ HOURS (100%)",
    ffviiCompleted: "Yes, 100%",
    ffviiDeepMainTitlePart1: "Full review, no filter",
    ffviiDeepMainTitlePart2: "spoilers ahead",
    ffviiFull01: "The original version of the seventh entry in this incredibly famous saga... Sephiroth... is a truly magnificent video game... Sephiroth... and one that plenty of people, even without ever having played it, will still remember for the character of SEPHIROTH!",
    ffviiFull02: "Jokes aside.",
    ffviiFull03: "Final Fantasy VII really does focus a huge amount on Sephiroth: his life, his dilemmas, his thoughts, his defeat, his rebirth, his plan, the experiments done on him, on his mother, on his other mother, on his origins, on... yeah, okay, you get the idea.",
    ffviiFull04: "The intro that greets us the moment we hit \"new game\" throws us straight into the situation in Midgar, the game's starting city, and a flower girl (Aerith Gainsborough); then, out of nowhere, we cut to jumping off a train to fight two giant Smurf-looking things armed with shotguns.",
    ffviiFull05: "Right in that battle, and immediately after, we take control of Cloud Strife, the game's protagonist: an ex-SOLDIER now living as a mercenary. From the very start of the game, in fact, we find him already mixed up with a band of rebels, AVALANCHE, whose goal is to blow up one of the city's reactors. Too bad that city, run as it is by a company made up of \"Shinra pieces,\" also happens to be the place they themselves live in: a small logistical detail nobody seems interested in thinking through too carefully.",
    ffviiFull06: "Personally, I'm not entirely sure what to make of Cloud: I like him as a character, but certain moments, tied to his personality issues, make me wish Zack Fair had been the one in his place instead, his counterpart across some of FFVII's spin-offs (both games and films): same academy, sunnier personality though, dark-haired instead of blond, and on top of that Aerith's ex-boyfriend. Ex because, unfortunately, he kicked the bucket.",
    ffviiFull07: "The game grabs you right away, and I was no exception. When I found myself fighting a giant robotic scorpion I was pumped, and hoping the potions would be enough, items I'm not particularly fond of using in general. Then I found out it was garbage.",
    ffviiFull08: "The sequence right after, the one with planting the bomb and the escape, also manages to load you up with adrenaline and drag you straight into the story's tight pacing, no wasted breath. I really appreciated that kind of opening: it had me glued to the screen right up to the last second, and I wasn't always entirely sure I wanted to help Jessie with her foot stuck between the beams 😈",
    ffviiFull09: "Beyond Cloud, other characters join the story as it goes, and they do it without any veiled invitations or drawn-out negotiations to win them over: Tifa Lockhart, for instance, and I could honestly stop right here, she deserves every bit of attention going. Tifa is the third member to join the group, but remains, in my opinion, maybe the most important of them all after the gravity-defying blond gelled-hair guy. And no, before you start wondering about *which* two reasons: I'm talking about her role in the party.",
    ffviiFull10: "Every character who joins later brings their own motivations and their own story; backstories that gradually find room to breathe as the game goes on. Oooh, the Red XIII section at Cosmo Canyon, what a moment: I loved it completely. When I first found him back in Midgar, caged up as some kind of experiment, I never imagined I'd end up in front of a character with such a well-built backstory. The Gi Cave wasn't exactly a highlight, I'll admit, but the emotional payoff that comes after more than makes up for all those unwanted random encounters along the way. The scene where we see Red's father, turned to stone, with his story told by Bugenhagen, is genuinely moving. And pretty sad too, it has to be said.",
    ffviiFull11: "Same goes for Barret Wallace's arc, the guy who \"shoots from the hand\": I find it beautiful. A father who finds his daughter's real father again, and also his old best friend, someone he believed dead. Beautiful, step aside.",
    ffviiFull12: "The story starts out focused on Shinra, painted as a genuinely fearsome antagonist, with a headquarters that at first glance looks impossible to break into. And yet, to my surprise, we walk right in without the slightest issue, to the point where you start wondering who exactly designed that building's security. Sure, we get captured and thrown in a cell afterward, but that's a minor detail: it was pretty much a given we'd get out somehow, just maybe not exactly like that. Because the one who frees us is... Sephiroth. If you feel like you've already read that name a bunch of times in this review, you're not wrong, and it's not over yet.",
    ffviiFull13: "From here on the focus shifts entirely, guess who, to Sephiroth, the story's main antagonist. I think his reputation is fully deserved: to me, a good villain has to actually be good at being a villain, and he absolutely nails it, racking up victims big and small across the whole timeline, past and present: the people of Nibelheim, the Shinra president, and, most importantly, for obvious reasons, Aerith. Yep, Aerith, the flower girl with a secret in her past, leaves the party after being treated like a shish kebab by our long, silver-haired swordsman, with zero gentleness involved.",
    ffviiFull14: "She, being an Ancient, was the only one truly capable of worrying Sephiroth, standing in the way of his plans. The scene of her death remains gut-wrenching for pretty much everyone, myself included; though, aside from losing the group's best healer, it didn't quite hit me as hard as it seemed to hit everyone else. I liked Aerith fine, but I never fully warmed up to her as a character, for a bunch of reasons. What really got me angry was losing her right after training her so hard. GAME, give a guy a heads-up next time!",
    ffviiFull15: "All of that, though, is really just seasoning on top of a long journey that starts in Midgar and stretches across various areas and objectives, including my beloved Gold Saucer (go there, and you'll understand why I love it so much), all the way to the Northern Crater, where a now fully awakened Sephiroth, thanks to Cloud (nice work there, really, well done), waits for our final encounter. I say \"final\" because we actually run into him multiple times throughout the journey, physically or otherwise; instead of facing us directly, he often throws a fragment of Jenova at us, the alien monster that also serves as his \"mother.\" Honestly, I couldn't tell you what each of its forms is meant to represent: I just know they're all hideously gorgeous. The names, though, that's another story entirely, loaded with meaning for anyone who knows how to read into them, I just nod along looking thoughtful.",
    ffviiFull16: "There are a ton of areas to visit. Beyond the Gold Saucer, Wutai deserves a mention, a Final-Fantasy-flavored take on a Japanese ninja village. I liked visiting it, and still do, especially for what it offers: the hunt for Yuffie Kisaragi, the ninja we're supposed to have already recruited by that point and who's since robbed us blind of all our materia, plus the whole detour involving Don Corneo (already encountered back in Midgar) alongside Shinra's agents. Of those, Reno's easily the most likable; Elena, a little less so.",
    ffviiFull17: "And speaking of Yuffie, that delightfully annoying troublemaker: I never know whether to like her or hate her. What I do know is, when she cleans out my pockets, you can probably guess my reaction isn't a positive one, more along the lines of wanting to throw a tree at her.",
    ffviiFull18: "Well, it's not like Vincent Valentine's doing much better on that front: convincing him to climb out of the coffin and join us always takes a solid ten minutes of talking, during which he insists on playing the suspicious loner, only to suddenly snap awake the second he hears the names Sephiroth and Lucrecia. I won't go on about Lucrecia, or the Beautiful theme is going to start playing in my head for real.",
    ffviiFull19: "A lot of the other areas also offer minigames, even though most of them cluster around the Gold Saucer. The minigames are great, genuinely great, but the effort it takes to get a gold chocobo through breeding is a labor of love in every sense of the word, extended labor pains included. Just thinking about having to do it that way makes me want to throw myself straight at Ruby Weapon before even reaching the endgame: at least there, you get an item you can trade at Kalm for the legendary bird instead (don't read too much into that).",
    ffviiFull20: "The part that won me over more than anything else, though, was hunting down EVERY SINGLE materia. Those magic orbs scattered across the world, the backbone of the combat system, are genuinely everywhere. Thanks to them you can cast spells, use commands, summon creatures, boost stats, get bonuses tied to whichever other materia they're linked with, or make yourself a coffee. No wait, not that last one. Some of them come from decidedly unpleasant methods: like, say, breeding a gold chocobo.",
    ffviiFull21: "Once you've got them all, though, and after burning 472 light-years leveling them all the way up, I felt basically invincible. Including the \"child\" materia: once a materia hits max level, it \"gives birth\" to a copy of itself at level 0 (Yeeeh…), ready to be leveled all the way up in turn, a part-time job nobody's paying you for. The other route is beating Emerald Weapon, which rewards you with Master Materia through a trade.",
    ffviiFull22: "Treating the fights against Ruby and Emerald Weapon like they're something easy, in this review, would be a bit like saying drinking a glass of water is simple: except the glass is chipped and razor-sharp all around the rim, and the water's basically solid, refusing to pour out even when you flip it upside down. A difficulty curve capable of knocking a Skyrim horse off its feet.",
    ffviiFull23: "Among the many locations we pass through, willing or not, there's also Rocket Town: a \"frozen in place\" little town (with a handful of wandering NPCs trying to give it some life) whose main attraction is a crooked rocket. Fascinating, no question, almost moving in its stillness. If it weren't for Cid Highwind, an extremely foul-mouthed pilot who, later in the story, also becomes party leader right when Cloud is no longer able to be one (much to my delight), and who drags us into a fight against Shinra because of his own dreams, the place would barely register.",
    ffviiFull24: "Do you realize this entire journey exists just so we can go beat up Sephiroth? And the funny thing is, along the way, absolutely everything happens: Bugenhagen's death (another gut-wrenching moment in the game); the Temple of the Ancients exploding (better not be caught inside when that happens); Mideel exploding too, this time thanks to Ultimate Weapon (the weakest of the trio of optional endgame boss weapons that happened to be flying around the area), so make sure to stock up there before it happens, because once the town's gone, that option's gone too, for reasons I don't think I need to spell out; and then there's a snowboarding sequence through the snow, followed by a massive, maze-like area near Icicle Inn, all ice and blizzards and a mountain you can climb where it's literally possible to pass out from the cold. Basically a geographic tour of disasters.",
    ffviiFull25: "Oh right, almost forgot: Cait Sith also goes BOOM along with the Temple of the Ancients, since he stays inside right to the end; but being a robot cat (and a likable little traitor), he gets replaced instantly by a 2.0 version, identical in every way, as if the manufacturer had a whole warehouse of them. A suspicion I had from the start, and sure enough, he really was a Shinra spy. Unlike Rufus Shinra, the late president's son and heir (a guy with no shortage of self-importance, and not exactly subtle about it), and Reno, Rude, and Elena, the likable trio we keep running into along the way who may or may not fight us depending on how much they feel like following orders that day, the one actually running Cait Sith is Tseng, Reno and company's boss, who seems to have a suspiciously strong passion for helping us out.",
    ffviiFull26: "Among the other Shinra staff worth mentioning is Heidegger, a clown (not figuratively) in service to the former president, always the butt of Rufus's jokes (go Rufus!), and Scarlet: now she's genuinely unpleasant. I mean it, Sephiroth can step aside for a second: I want her as the real final boss. If Sephiroth gets to duke it out sword-to-sword with Cloud, I want to see Scarlet go one-on-one with Tifa in a slap fight, just like the one on the Junon cannon, and I'd pay full price for a ticket to that.",
    ffviiFull27: "With that said, all that's left is to talk about the visuals and the music.",
    ffviiFull28: "Let's be honest with each other, as impossible as that truly is: this is a 1997 game, and visually the characters look like they've got tumors growing on their muscles, thanks to the overly blocky polygon limbs; the cutscenes, obviously, are no exception, aside from a few rare moments. So trust me: if you're going in, factor that in right away, and maybe lower your visual expectations before you start.",
    ffviiFull29: "On the audio side, though, it's a completely different story: I've got absolutely nothing to complain about here, it's stunning. The most beloved track, both for me and for audiences in general, is without a doubt One-Winged Angel, the theme for the final battle against Sephiroth. It's just wonderful, what else is there to say.",
    ffviiFull30: "If you've never played it, and you probably never will (at least not in its original form), at the very least go listen to the soundtrack, especially Sephiroth's theme: you'll immediately get what I mean.",
    ffviiClosing: "Getting serious for a moment, setting aside the limitations that come with the game's age, FFVII shaped my childhood, and it remains a game I carry in my heart to this day, for so many reasons and for the countless hours it filled my days with. Living through, truly living through, Cloud and his companions' story, through moments of victory and moments of loss, kept me glued to the screen back then, and it would keep me glued to it today too, unable to pull away until the credits rolled, leaving me with nothing but a smile on my face.",
    ffviiDeepGoofyTitlePart1: "Quick review, hot take",
    ffviiDeepGoofyTitlePart2: "limited spoilers",
    ffviiGoofyPlaceholder1: "Placeholder text for the no-holds-barred version: same plot, zero filter on the swearing and the tasteless jokes.",
    ffviiGoofyPlaceholder2: "Second placeholder section: the rest of the goofy version goes here once it's ready.",
    ffixHours: "~38 hours (story) / 80-100+ HOURS (100%)",
    ffixCompleted: "Yes",
    ffixDeepMainTitlePart1: "Full review, no filter",
    ffixDeepMainTitlePart2: "spoilers ahead",
    ffixDeepGoofyTitlePart1: "Quick review, hot take",
    ffixDeepGoofyTitlePart2: "limited spoilers",
    ffixGoofyPlaceholder1: "Placeholder text for the hot take version: same plot, lighter and quicker tone.",
    ffixGoofyPlaceholder2: "Second placeholder section: the rest of the hot take version goes here once it's ready.",
    ffixFull01: "\"Alone for a while I've been searching through the dark...\"",
    ffixFull02: "If you know the title, you've definitely read that line singing it under your breath, probably fumbling the high note on \"dark\" like the rest of us. If instead you're still, fittingly, searching through the dark on what that means or what FFIX even is, maybe picturing a pastry or some town in Belgium, don't worry: it won't change a thing for you either way, carry on, no judgment (almost none).",
    ffixFull03: "This game is, quite literally, a fairy tale. An atmosphere and an art style that give it that storybook charm I love, and at the same time don't love, about FFIX: yes, I just described a toxic relationship with a video game, and no, I'm not sorry about it. But the story holds up just as well, and you can tell from the intro alone, which manages to introduce several future party members and the protagonist, Zidane Tribal, in just a few minutes.",
    ffixFull04: "Anyway: we're baby Goku... no wait, sorry, we're Zidane, this blond kid with a monkey tail, part of a gang of thieves busy staging a play in the great city of Alexandria, a play that's really just cover for kidnapping Princess Garnet. Foolproof plan, no possible way it could go wrong. Garnet Til Alexandros, \"daughter\" of Queen Brahne: you can spot the adoption from a mile off, like a neon sign. On one side a genuinely lovely girl (the princess really is beautiful), on the other... the queen. I won't say more, I don't want her guards coming after me.",
    ffixFull05: "In case you're wondering, for anyone unfamiliar with the plot: yes, this game also includes a love story between the thief and the princess just mentioned. A constant push and pull, with her pouting on one side and him trying to win her back on the other, or him lost in thought while she can barely even place his face, which, let's be honest, isn't exactly the strongest opening for a romance. Not the best couple scenes I've ever seen, if I'm honest: some of their bickering made me want to get back to combat, to exploring, to literally anything else, up to and including watching Queen Brahne laugh again, and that's not a compliment. But in the finale, after a choice Zidane makes separates them for quite a while (he's dead set on saving Kuja, the main antagonist, because of course the right moment to play hero is always the least convenient one), the two reunite in a scene that's as moving as it is romantic. That one, I'll admit, I loved without reservation.",
    ffixFull06: "Back to the beginning: the opening cutscene, after a brief introduction to the Tantalus Theater Troupe (Zidane's ragtag band of thieves) and a bizarre tutorial fight against gang leader Baku dressed up in a dragon head (why not), hands things over to Vivi Ornitier. A little mage so endearing that he's loved by literally everyone, fans, non-fans, aliens included, myself first (no, I'm not an alien, but I get the confusion), who spends his early scenes desperately hunting for tickets to a play (the very one staged by Tantalus, small world) with the help of a \"friend\" he's known for all of five minutes who happens to look like a rat. They pull it off, somehow, with suspicious ease.",
    ffixFull07: "Honorable mention (especially during the performance) to Marcus, a Tantalus member who mostly lets his fists do the talking, and to Cinna: the biggest, the best, the most brilliant guy on the crew (also part of the gang), dressed in tribal gear for reasons I'd rather never look into. Between us, Cinna's my favorite of the whole group, in case that wasn't obvious already.",
    ffixFull08: "From here on, though, the story stumbles out of the gate, at least for my taste. The Evil Forest section, with Vivi kidnapped first by a hostile plant (a plant, yes, you read that right), then Garnet, while Blank (another Tantalus member) gets petrified during the escape, is charming but wears thin fast. If it had dragged on any longer, what feels like clever design would've simply turned into an endurance test.",
    ffixFull09: "Shame about Blank, though: he won't be freed from petrification until near the end of the game (so no, he's not dead, don't worry), but he struck me as having the potential to become a great future party member, a proper badass swordsman. Instead we get stuck with Adelbert Steiner, the tin can who spends his time hassling Zidane for the sole, unforgivable crime of getting too close to Garnet. Vivi, please, throw him a spell to chew on and keep him occupied, do it for all of us.",
    ffixFull10: "And after the Evil Forest comes the section I still despise more than any other to this day: the Ice Cavern. If it weren't for the tutorial explaining how to send your characters into Trance (our equivalent of \"going Super Saiyan,\" just with less screaming), it would be pure torture, especially this early in the game. I don't think I need to add much else about how bored that section left me.",
    ffixFull11: "The story moves on, taking us to increasingly memorable places: the charming city of Lindblum, with its wonderfully likable regent turned into a kind of hopping cockroach (an Oglop, and no, I'm not joking, he's genuinely a bug-king and nobody in the story seems to find that strange), or the devastated city of Burmecia, along with Freya Crescent's entire backstory, which on paper should hit me right in the heart, but instead left me with the cold satisfaction of having recruited yet another character to bench. All of this to eventually discover that the real villain is Queen Brahne herself: important enough a character to sic her loyal Beatrix on us (I'll leave a picture below so you can see how gorgeous she is despite FFIX's graphics) and the clowns Zorn and Thorn, who act as Garnet's jailers for a short stretch mid-game... and clowns, obviously, every single time they show up, never once taking a day off from the role.",
    ffixFull12: "At that point Kuja enters the picture, and after faking an alliance with the queen (with the ease of someone who's clearly done this before) summons Bahamut and unleashes it on beautiful Alexandria, raining down destruction on the city. Garnet and Eiko Carol respond by calling on Alexander for help, the kingdom's guardian eidolon, who wipes out Bahamut without much ceremony, like a bouncer at closing time. Too bad that, just when things seem resolved, Garland shows up aboard the Invincible, the ship Kuja himself describes as \"that giant eye in the sky\": a name that alone should've been a warning sign. That eye fires a blast devastating enough to level both Alexander and most of the city, a mushroom cloud in everything but name, just to remind everyone, Kuja included, who's really in charge. Garnet watches the scene from safety, and the trauma robs her of her voice. I naively thought she'd finally say less nonsense from that point on; instead her \"saying\" turned into \"doing,\" and things somehow got worse (yay...). Don't worry, though: she'll get her voice back roughly around the time she decides to calm down, which will make plenty of players happy. Myself included, genuinely so.",
    ffixFull13: "Oh, and I almost forgot: Queen Brahne dies. Yes, really, no tricks.",
    ffixFull14: "It's probably from here that the real journey begins, with a party that's already grown to include Amarant Coral (an assassin who loses his duel against Zidane, just as thoroughly as his partner in crime fails her own mission, which says a lot about their combined professionalism) and Eiko Carol, already mentioned above (talk about creative surnames, by the way: Coral and Carol, practically the same identikit rearranged), a second summoner who ends up giving Garnet some very unwelcome competition. I'd almost rather not talk about those two: in my head they're in constant, neck-and-neck competition for the title of most annoying character in the game.",
    ffixFull15: "Sure, at this point it might sound like I don't like anyone, but that's not true: I saved my favorite addition for last, Quina Quen. A frog, yes, but an absolutely hilarious one, who talks in that same broken, endearingly garbled English as ever, and thinks about food in literally every waking moment, no breaks, no exceptions. If I were a female frog, I'd probably be identical to her. Or maybe it'd be enough to just be female, full stop, no frog required.",
    ffixFull16: "The journey, a long one, eventually reveals that Zidane actually comes from a parallel planet, Terra (while the starting one, where most of the story takes place, is Gaia). You only get there after defeating four guardians who force the party to split up, with Zidane and Quina paired together in a genuinely lovely scene. On Terra we discover that Garland, a megalomaniac I honestly couldn't describe better than that (and won't even try), created an entire army of Genomes, identical clones including Zidane himself, which is why you keep running into look-alikes everywhere like it's a clearance sale. Kuja was the first prototype of the line, later judged flawed: Zidane is simply the model that came after, the one that turned out better. The revelation sends Zidane's psyche into a tailspin for a while, but once he pulls himself together he leads the group into a final showdown with Kuja, defeating him. Shame that, the moment Kuja falls, Necron shows up: an entity that appoints itself judge of life and everything else, honestly one of the weakest ideas in the whole game, appearing out of absolutely nowhere like an uninvited guest at a party that's already over. I've never been able to digest him or his existence. As far as I'm concerned, the story should've ended with the fight against a Trance Kuja, full stop.",
    ffixFull17: "Moving on to combat: the system is almost entirely dictated by the equipment your characters have on, which is where all their abilities come from. That goes for Zidane's thief/warrior moves, Vivi's black magic, and even Garnet's summons (and Eiko's, while we're at it, no reason to leave her out). The biggest challenge, if you're going for a complete arsenal, is traveling far and wide, especially to Treno for its infamous (and, let's be honest, much-loved) auction house, to track down every last piece of gear you need, often through some genuinely absurd bids.",
    ffixFull18: "Either way, it pays to come prepared, both for the endgame and for the optional fight against Ozma: the strongest boss in the game, a floating sphere half light and half darkness hidden away in Chocobo's Air Garden, reachable only after an exhausting chocobo-based side quest. And if you think that's the only well-hidden secret in this game, you're very wrong: inside the library of Alexandria Castle lurks a second optional boss, literally trapped inside a book (a book, yes, the most obvious hiding place in the world for a monster), fightable only during two extremely brief windows in the story. Miss them, and that book stays shut forever, along with the monster inside it.",
    ffixFull19: "Speaking of Ozma, to take on the giant beach ball at its best you'll want the Excalibur II, Steiner's secret weapon, obtainable only by pulling off a genuine speedrun: you need to reach the final stretch of the game within 12 hours of playtime. I'm guessing that by now pretty much everyone, myself included, has already taken on that optional fight (or given up on the whole endeavor, whether by choice or through blissful ignorance).",
    ffixFull20: "The world isn't worth exploring just for that, though, but also for the sheer number of minigames on offer: Tetra Master, a card game that tries, and fails, to ape the far better Triple Triad from the eighth entry; a quiz built around a monster that's already hard enough to find on its own, where getting an answer wrong means starting all over (get yourself a guide, or your walls will pay the price); and jump rope, 1000 consecutive jumps without a single mistake, a level of sadism that borders on art. This game really does not want to be reviewed: three for three minigames mentioned so far, and I hate all of them with a burning passion. Especially the last one, which deserves its own personal ring of hell. But out of the whole bunch, one saves the day: Chocobo Hot and Cold! Basically, you go around catching chocobos in the woods (whether they want to come along or not, consent is apparently optional), ride them, and use their beaks to dig holes all over the world, worse than a toddler with a beach shovel after three ice creams. A genuine treasure hunt, based on maps you find scattered around or right there in the chocobo forests themselves.",
    ffixFull21: "Talking about the visuals is both an obvious point and a tricky one. As mentioned earlier, FFIX leans harder than any other entry into presenting itself as a fairy tale, visually included, and that choice makes it easier to appreciate today, even though it's still, at the end of the day, a PlayStation 1 title with all the limitations that entails. Genuinely lovely to look at, pixelated corners and all. Even better to listen to: the music is composed with such skill that it makes you feel every romantic beat and every sad or melancholic one just as strongly, never once breaking the mood. The toughest sequences, like the partial destruction of Alexandria (already mentioned) or the total destruction of Cleyra, still land thanks to the score alone, even if nothing quite reaches the heights of the scene with Garnet and \"Melodies of Life,\" the same song I quoted at the very start of this review, and if you've made it this far without going back to listen to it at least once, fix that immediately.",
    ffixClosing: "All in all, this game keeps me locked in a constant push and pull between love and hate: moments that made me dream, others where I'd have given anything for a \"skip scene\" button to slam in frustration. But none of those highs and lows stop me from saying that FFIX remains a wonderful experience to live through, if only to uncover Vivi's origins or find the deeply hidden village of the black mages. A journey, a game that might make you frown at first, but that always, without exception, leaves behind a genuine sense of satisfaction for having played it.",
    shadyQuickNarrativeTitle: "Story & World",
    shadyQuickNarrativeText: "The game follows a little girl and her shadow, confined in an institution, working through memories and emotions represented symbolically through the environments they move through. The narrative, brought to life partly through Hannah Murray's voice acting (known for Game of Thrones and Skins), is praised for the dreamlike, emotional atmosphere it builds, though part of the critical response found it at times too cryptic in how it reveals its own story.",
    shadyQuickGameplayTitle: "Gameplay",
    shadyQuickGameplayText: "A puzzle-platformer in which you control two characters at once: the girl, moving through a three-dimensional world, and her shadow, bound to a two-dimensional plane cast across walls and surfaces. The two layers of gameplay interact through light and shadow (for instance, moving objects to change the shadow's projected size), giving rise to original environmental puzzles widely regarded as the game's strongest asset.",
    shadyQuickTechTitle: "Technical & Artistic Side",
    shadyQuickTechText: "Developed by French indie studio Douze Dixièmes, in their first-ever release, and published by Focus Home Interactive in December 2020, the game stands out above all for its art direction, built almost entirely around the contrast between light and shadow, used not just as a gameplay mechanic but as a genuine narrative language. The theme of the shadow as a hidden part of the self, a fairly explicit nod to the Jungian psychological concept of the \"shadow\", runs through both the game's aesthetic and its story, giving the title a distinctive visual identity despite its modest production scale. That artistic care earned the game an Independent Games Festival nomination in the design and visual art categories.",
    shadyHours: "4-6 hours",
    shadyReleaseDate: "December 10, 2020",
    shadyCompleted: "Yes, 100%",
    shadyDeepMainTitlePart1: "Full review, no filter",
    shadyDeepMainTitlePart2: "spoilers ahead",
    shadyDeepGoofyTitlePart1: "Quick review, hot take",
    shadyDeepGoofyTitlePart2: "limited spoilers",
    shadyGoofyPlaceholder1: "Placeholder text for the hot take version: same plot, lighter and quicker tone.",
    shadyGoofyPlaceholder2: "Second placeholder section: the rest of the hot take version goes here once it's ready.",
    shadyFull01: "This little puzzle-and-mystery video game is a hidden gem, maybe even a bit too well hidden.",
    shadyFull02: "The fairy-tale-like narration lightens up the game's central theme, namely the protagonist's struggle with being at the center of attention, but only up to a point: the moment when I, along with plenty of other players, could no longer pretend it was just a game about a little girl and her shadow, but rather a psychological introspection of the protagonist herself.",
    shadyFull03: "The story opens with her getting off a swing in a park. It seems like a plain, obvious opening, but maybe it's not quite that simple, before moving on through a variety of settings, almost always indoor ones. Personally, most of them tell me absolutely NOTHING, obviously an exaggeration, but that's the general idea. That doesn't mean they don't serve their own purpose within the story, though. Either way, the game eventually leads the protagonist to face her fears, on a stage, changing part of the gameplay system seen up to that point.",
    shadyFull04: "This title is built entirely around logic, making the act of moving objects and shadows the core of the gameplay, as well as the only way to actually make progress. After the very first few minutes, the puzzle sections split into two parts: the reality one (or light), where the protagonist moves real objects around in a 3D environment, and the shadow one, where her 2D counterpart does the same thing with the \"darker\" versions of those same objects, or others, cast on the walls. Not to mention the \"shadow thorns,\" which later in the game are mostly there just to get in your way, especially for people like me, who kept falling on them over and over, sometimes on purpose too, to the point where I grew to hate them with a passion I didn't know I could reserve for a graphical asset. The puzzles themselves are sometimes pretty funny, as is the aesthetic of the collectibles: paper birds you need to figure out increasingly ridiculous sequences to grab; so much so that by the last few levels I found myself genuinely arguing with my own shadow over how to solve them.",
    shadyFull05: "It's all tied together by the time-rewind mechanic, which replaces the classic game over whenever, through some mistake, you get stuck somewhere or the shadow ends up popping like a soap bubble on the aforementioned thorns, or in other equally creative ways. A mechanic as simple as it is fun, one I found myself using often just for the fun of it, even for stretches shorter than a second, turning the protagonist into a sort of Michael Jackson, minus the sparkly glove.",
    shadyFull06: "I won't dwell too long on the technical side. The game has very charming, thoroughly enjoyable visuals, though nothing extraordinary. It certainly never annoys you to the point of frustration. The music, meanwhile, is atmospheric and interesting, but I never found myself shouting \"masterpiece,\" not even during the lovely little soundtrack playing over the credits at the end.",
    shadyFull07: "That said, none of this is meant to trash the game unfairly; quite the opposite, I genuinely enjoyed it, and its length, short, let's admit it, lets you play through it without feeling like you're stuck in an endless cage, artificially stretched out with puzzles that, after a while, wouldn't really have anything to offer.",
    shadyClosing: "It turned out to be a genuinely interesting title, and I'm glad I got to know it, play it, and finish it.",
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

const state = { lang: "en", activeSide: "right", view: "landing", musicOn: false, trackIndex: 0 };

let resumedPersistedTrack = false; // vedi blocco ascolto persistente
  // piu' sotto - dichiarata qui perche' letta gia' da updateMusicPlayback,
  // molto prima di dove la logica vera e propria e' definita

// Playlist condivise (data-shared-tracks.js) - stessa fonte usata
// anche da Il Filo Nascosto e dal menu playlist di Storie Senza
// Cornice, invece di tre copie separate.
const FFVIII_TRACKS = SHARED_FFVIII_TRACKS;
const FFVII_TRACKS = SHARED_FFVII_TRACKS;
const FFIX_TRACKS = SHARED_FFIX_TRACKS;
// Playlist di Shady Part of Me, ordine scelto dall'utente.
const SHADY_TRACKS = [
  { src: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Shady%20Part%20of%20Me%20Main%20Theme.mp3", title: "Main Theme", game: "Shady Part of Me" },
  { src: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Shady%20Part%20of%20Me%20There%20She%20Is.mp3", title: "There She Is", game: "Shady Part of Me" },
  { src: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Shady%20Part%20of%20Me%20A%20Fireplace%20Soothing.mp3", title: "A Fireplace Soothing", game: "Shady Part of Me" }
];
const REVIEW_TRACKS = { ffvii: FFVII_TRACKS, ffviii: FFVIII_TRACKS, ffix: FFIX_TRACKS, shady: SHADY_TRACKS };

// Lingua condivisa con le altre pagine tramite localStorage: letta
// prima di qualunque render iniziale.
const LANG_KEY = "tfs-lang";
const storedLang = localStorage.getItem(LANG_KEY);
if(storedLang === "it" || storedLang === "en") state.lang = storedLang;

// Musica/volume condivisi con le altre pagine (stessa chiave usata
// da Teorie, Timeline, Racconti): stesso stato acceso/spento e
// stesso livello passando da una pagina all'altra.
const MUSIC_ON_KEY = "tfs-music-on";
const VOLUME_KEY = "tfs-volume";
const storedMusicOn = localStorage.getItem(MUSIC_ON_KEY);
if(storedMusicOn !== null) state.musicOn = storedMusicOn === "true";

// Lato del carrello (destra/sinistra): salvato per singolo
// dispositivo, ricordato tra le visite. Letto qui, prima del primo
// paint, cosi' la pagina si apre gia' nel lato giusto invece di
// mostrare prima quello di default e poi saltare.
const GATE_SIDE_KEY = "tfs-recensioni-gate-side";
const storedGateSide = localStorage.getItem(GATE_SIDE_KEY);
if(storedGateSide === "left" || storedGateSide === "right") state.activeSide = storedGateSide;

const el = {
  body: document.body,
  brandBtn: document.getElementById("brandBtn"),
  brand: document.querySelector(".brand"),
  socialLinks: document.querySelector(".social-links"),
  stageControls: document.querySelector(".stage-controls"),
  langSwitch: document.getElementById("langSwitch"),
  indexLink: document.getElementById("indexLink"),
  gateSideToggle: document.getElementById("gateSideToggle"),
  layout: document.querySelector(".layout"),
  reportBugBtn: document.getElementById("reportBugBtn"),
  mobileGenreBar: document.getElementById("mobileGenreBar"),
  mobileGenreTable: document.getElementById("mobileGenreTable"),
  mobileGenreListTitle: document.getElementById("mobileGenreListTitle"),
  mobileGenreListItems: document.getElementById("mobileGenreListItems"),
  gateToggleRight: document.getElementById("gateToggleRight"),
  reviewsGateRight: document.getElementById("reviewsGateRight"),
  gateToggleLeft: document.getElementById("gateToggleLeft"),
  reviewsGateLeft: document.getElementById("reviewsGateLeft"),
  landingPanel: document.getElementById("landingPanel"),
  reviewFfvii: document.getElementById("reviewFfvii"),
  reviewFfviii: document.getElementById("reviewFfviii"),
  reviewFfix: document.getElementById("reviewFfix"),
  reviewShady: document.getElementById("reviewShady"),
  musicControl: document.getElementById("musicControl"),
  musicSlotFfvii: document.getElementById("musicSlotFfvii"),
  musicSlotFfviii: document.getElementById("musicSlotFfviii"),
  musicSlotFfix: document.getElementById("musicSlotFfix"),
  musicSlotShady: document.getElementById("musicSlotShady"),
  bgMusic: document.getElementById("bgMusic"),
  musicToggle: document.getElementById("musicToggle"),
  volumeSlider: document.getElementById("volumeSlider"),
  trackInfo: document.getElementById("trackInfo"),
  trackTitle: document.getElementById("trackTitle"),
  trackGame: document.getElementById("trackGame"),
  trackSkipBtn: document.getElementById("trackSkipBtn"),
  trackPersistBtn: document.getElementById("trackPersistBtn"),
  trackProgressFill: document.getElementById("trackProgressFill")
};
if(el.volumeSlider){
  const storedVolume = localStorage.getItem(VOLUME_KEY);
  if(storedVolume !== null) el.volumeSlider.value = storedVolume;
}

// Mappa id-recensione -> elemento della voce corrispondente. Un solo
// titolo per ora; aggiungerne altri significa solo aggiungere una
// riga qui (e il markup nascosto della voce in diari_di_gioco.html).
const REVIEWS = {
  ffvii: el.reviewFfvii,
  ffviii: el.reviewFfviii,
  ffix: el.reviewFfix,
  shady: el.reviewShady
};

// Slot dove va spostato il controllo musica condiviso quando quella
// recensione e' quella aperta.
const MUSIC_SLOTS = {
  ffvii: el.musicSlotFfvii,
  ffviii: el.musicSlotFfviii,
  ffix: el.musicSlotFfix,
  shady: el.musicSlotShady
};

// Colore proprio di ogni recensione (usato per bordi/icone di
// Ko-fi/Discord in vista voce, e per la voce corrispondente nella
// tabella genere su mobile). FFVIII riprende lo stesso rosso della
// sua voce "teoria" su Il Filo Nascosto (accentColor in
// data-storie-teorie.js), cosi' lo stesso gioco ha lo stesso colore
// su entrambe le pagine. Le altre, per ora, restano sul ciano di
// riserva (nessuna voce qui sotto).
const REVIEW_ACCENTS = {
  ffvii: "#2dd4bf", // turchese, a meta' tra verde e azzurro (stesso
    // colore del meteorite sulla cover)
  ffviii: "#ff3b30",
  ffix: "#ffcc33", // giallo caldo, il colore del cristallo al centro
    // della cover
  shady: "#b3b3b3" // grigio 30%, richiesto esplicitamente
};

// ---------------------------------------------------------
// SOLO MOBILE: barra generi (header bassa in home) + tabella titoli
// (pannello del carosello a sinistra, come .sidebar nelle altre
// pagine). La tabella e' assente dal carosello finche' non si tocca
// un genere (niente da raggiungere scorrendo a sinistra dalla home
// per sbaglio): il tocco la rende presente (diventa il primo figlio
// vero di .layout, visibile subito perche' lo scrollLeft resta a 0)
// e da quel momento e' scorrevole col dito per tornare indietro
// (swipe vero, non un pulsante). Una volta tornati sullo stage
// torna assente, va ritoccato un genere per riaprirla. Un solo
// posto dove aggiungere un genere in futuro (qui), niente da
// toccare nell'HTML. Le card vengono lette direttamente dal
// carrello desktop (data-review + il testo della tile), cosi' le
// due liste (desktop e mobile) restano sempre sincronizzate da
// un'unica fonte invece di doverle mantenere doppie.
// ---------------------------------------------------------
function buildGenresFromDOM(){
  const genres = {}; // { "JRPG": [{id, title}, ...], ... }
  document.querySelectorAll(".reviews-gate--right .reviews-genre").forEach(genreBlock => {
    const label = genreBlock.querySelector(".reviews-genre__label");
    if(!label) return;
    const genreName = label.textContent.trim();
    const items = [];
    genreBlock.querySelectorAll("[data-review]").forEach(tile => {
      items.push({
        id: tile.dataset.review,
        title: tile.querySelector(".review-tile__title").textContent.trim()
      });
    });
    if(items.length) genres[genreName] = items;
  });
  return genres;
}
const GENRES = buildGenresFromDOM();
let currentTableGenre = null; // genere mostrato ora nella tabella, null = ancora vuota

function renderMobileGenreBar(){
  if(!el.mobileGenreBar) return;
  el.mobileGenreBar.innerHTML = "";
  Object.keys(GENRES).forEach(genreName => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "mobile-genre-btn";
    btn.textContent = genreName;
    btn.classList.toggle("is-active", genreName === currentTableGenre);
    btn.addEventListener("click", () => selectGenre(genreName));
    el.mobileGenreBar.appendChild(btn);
  });
}

// Cerca a quale genere appartiene una recensione — serve per
// mostrare il genere giusto nella tabella quando si apre una voce da
// qualunque punto (card sulla home, lista della tabella stessa).
function findGenreForReview(reviewId){
  for(const [genreName, items] of Object.entries(GENRES)){
    if(items.some(item => item.id === reviewId)) return genreName;
  }
  return null;
}

// Riempie la lista della tabella con le voci del genere indicato.
// Non tocca ne' lo scroll ne' la classe is-active della barra generi
// (se ne occupano rispettivamente chi chiama e renderMobileGenreBar).
function fillGenreList(genreName){
  const items = GENRES[genreName];
  if(!items || !el.mobileGenreListItems) return;
  el.mobileGenreListTitle.textContent = genreName;
  el.mobileGenreListItems.innerHTML = "";
  items.forEach(item => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.type = "button";
    btn.textContent = item.title;
    if(REVIEW_ACCENTS[item.id]) btn.style.setProperty("--item-accent", REVIEW_ACCENTS[item.id]);
    btn.addEventListener("click", () => {
      // instant:true - lo scorrimento verso lo stage qui sotto e'
      // gia' la transizione visiva, non serve un'altra dissolvenza
      // sopra (che durando di piu' dello scroll, causava un flash
      // della home visibile per una frazione di secondo).
      openReview(item.id, true);
      // Scivola dalla tabella verso lo stage, dove la recensione e'
      // appena apparsa.
      if(el.layout) el.layout.scrollTo({ left: window.innerWidth, behavior: "smooth" });
    });
    li.appendChild(btn);
    el.mobileGenreListItems.appendChild(li);
  });
  currentTableGenre = genreName;
}

// Cambio genere VOLUTO dall'utente (tocco sul carosello in fondo alla
// tabella): dissolvenza fuori (0.5s) sul titolo+lista attuali, poi
// swap del contenuto, poi dissolvenza dentro (0.5s) dei nuovi. Se e'
// gia' il genere mostrato, non fa nulla (nessun bisogno di
// un'animazione a vuoto).
function selectGenre(genreName){
  if(genreName === currentTableGenre) return;
  if(!el.mobileGenreListTitle || !el.mobileGenreListItems) return;
  el.mobileGenreListTitle.style.opacity = "0";
  el.mobileGenreListItems.style.opacity = "0";
  setTimeout(() => {
    fillGenreList(genreName);
    renderMobileGenreBar(); // ridisegna i pulsanti, per l'evidenziazione is-active
    el.mobileGenreListTitle.style.opacity = "1";
    el.mobileGenreListItems.style.opacity = "1";
  }, 500);
}

// Sincronizzazione ISTANTANEA (mai a dissolvenza, l'utente non sta
// guardando la tabella in questo momento): mostra nella tabella il
// genere a cui appartiene la recensione appena aperta, cosi'
// scorrendo a sinistra da li' si ritrova il genere giusto, non
// vuoto o quello di prima. Chiamata da dentro openReview() stessa,
// vale per qualunque punto di apertura (card sulla home, lista della
// tabella).
function syncTableToReview(reviewId){
  const genreName = findGenreForReview(reviewId);
  if(!genreName || genreName === currentTableGenre) return;
  fillGenreList(genreName);
  renderMobileGenreBar();
}

renderMobileGenreBar();

function t(key){ return STRINGS[state.lang][key]; }

function heartIcon(){
  return `<svg viewBox="0 0 20 18" class="title-like__icon" aria-hidden="true">
    <path d="M10 17C10 17 1.5 12.1 1.5 6.2C1.5 3.3 3.7 1.2 6.4 1.2C8 1.2 9.3 1.9 10 3.1C10.7 1.9 12 1.2 13.6 1.2C16.3 1.2 18.5 3.3 18.5 6.2C18.5 12.1 10 17 10 17Z"
      stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" fill="none"/>
  </svg>`;
}

// Cuoricino "mi piace", sempre in fondo alla recensione. Le tre
// recensioni sono statiche (non ricreate ad ogni apertura come nelle
// altre pagine), quindi crea il cuore una volta sola e poi non fa
// piu' nulla alle aperture successive della stessa recensione
// (controllato con l'id del widget).
function appendLikeWidget(container, workId, idSuffix){
  idSuffix = idSuffix || "";
  if(!container || !window.ForgottenShelfLikes) return;
  const widgetId = `likeWidget-${workId}${idSuffix}`;
  if(document.getElementById(widgetId)) return; // gia' creato in precedenza
  container.insertAdjacentHTML("beforeend", `
    <div class="title-like" id="${widgetId}" data-work-id="${workId}">
      <span class="title-like__label">${t("leaveALike")}</span>
      <button type="button" class="title-like__btn" aria-label="Mi piace">${heartIcon()}</button>
      <span class="title-like__count"></span>
    </div>
  `);
  const widget = document.getElementById(widgetId);
  const likeBtn = widget.querySelector(".title-like__btn");
  const countEl = widget.querySelector(".title-like__count");
  if(ForgottenShelfLikes.hasLiked(workId)){
    widget.classList.add("is-liked");
    likeBtn.disabled = true;
  }
  ForgottenShelfLikes.getTotal(workId).then(total => { countEl.textContent = total; });
  likeBtn.addEventListener("click", () => {
    const result = ForgottenShelfLikes.like(workId);
    if(result.ok){
      widget.classList.add("is-liked");
      likeBtn.disabled = true;
      const current = parseInt(countEl.textContent, 10) || 0;
      countEl.textContent = current + 1;
      // Altre copie dello stesso cuore (es. sotto alla recensione
      // veloce E in fondo a quella completa) rappresentano la stessa
      // identica opera: se una si segna "gia' messo like", si
      // segnano tutte, altrimenti si potrebbe rimettere il like piu'
      // volte semplicemente scorrendo fino all'altra copia.
      document.querySelectorAll(`.title-like[data-work-id="${workId}"]`).forEach(w => {
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
  [el.gateToggleRight, el.gateToggleLeft].forEach(btn => {
    const isOpen = btn.getAttribute("aria-expanded") === "true";
    btn.setAttribute("aria-label", isOpen ? t("gateToggleLabelClose") : t("gateToggleLabel"));
  });

  const isLeft = state.activeSide === "left";
  el.gateSideToggle.setAttribute("aria-pressed", String(isLeft));
  el.gateSideToggle.setAttribute("aria-label", isLeft ? t("gateSideToggleOn") : t("gateSideToggleOff"));

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

// Solo mobile, solo a recensione aperta: la scritta "Diari di Gioco"
// (brand-text, al posto dell'icona casetta in quello stato) riporta
// alla home. In home stessa non fa nulla (e' l'icona index-link a
// occuparsene li', il brand-text in quel momento non e' visibile).
el.brandBtn.addEventListener("click", () => {
  if(state.view !== "landing") backToLanding();
});

// ---------------------------------------------------------
// Apertura/chiusura di UN carrello: stessa logica per quello di
// destra e quello di sinistra, richiamata due volte con i
// riferimenti giusti invece di duplicare il codice. Solo desktop
// (su mobile i pulsanti sono display:none via CSS, questi listener
// restano innocui se mai venissero cliccati). Espone anche una
// chiusura "programmatica" (closeGate), riusata quando si seleziona
// una card: il carrello si richiude da solo, non solo al click
// sulla sua maniglia.
// ---------------------------------------------------------
const gateFadeTimers = new WeakMap();

function closeGate(toggleBtn, gateEl){
  if(!toggleBtn || !gateEl) return;
  if(!gateEl.classList.contains("is-open")) return;
  const grid = gateEl.querySelector(".reviews-grid");
  gateEl.classList.remove("is-open");
  toggleBtn.setAttribute("aria-expanded", "false");
  gateEl.setAttribute("aria-hidden", "true");
  toggleBtn.setAttribute("aria-label", t("gateToggleLabel"));
  clearTimeout(gateFadeTimers.get(gateEl));
  grid.classList.remove("is-visible");
}

function setupGateToggle(toggleBtn, gateEl){
  if(!toggleBtn || !gateEl) return;
  const grid = gateEl.querySelector(".reviews-grid");
  toggleBtn.addEventListener("click", () => {
    const isOpen = gateEl.classList.toggle("is-open");
    toggleBtn.setAttribute("aria-expanded", String(isOpen));
    gateEl.setAttribute("aria-hidden", String(!isOpen));
    toggleBtn.setAttribute("aria-label", isOpen ? t("gateToggleLabelClose") : t("gateToggleLabel"));

    clearTimeout(gateFadeTimers.get(gateEl));
    if(isOpen){
      // Le card non si vedono mentre il carrello scorre: compaiono con
      // un fade solo mezzo secondo dopo, a battente già del tutto
      // aperto, invece di scorrere assieme a lui.
      gateFadeTimers.set(gateEl, setTimeout(() => {
        grid.classList.add("is-visible");
      }, 500));
    } else {
      grid.classList.remove("is-visible");
    }
  });
}
setupGateToggle(el.gateToggleRight, el.reviewsGateRight);
setupGateToggle(el.gateToggleLeft, el.reviewsGateLeft);

// ---------------------------------------------------------
// Selezione di una card dal carrello: il carrello attivo si chiude
// da solo (va riaperto a mano per scegliere un'altra voce), e
// l'area centrale (landing o un'altra recensione già aperta) fa un
// crossfade verso la recensione scelta — fade out 1s, mezzo
// secondo di pausa, fade in 1s. Il pulsantino del carrello resta
// al suo posto, non fa parte di questo crossfade.
// ---------------------------------------------------------
function currentCenterPanel(){
  return state.view === "landing" ? el.landingPanel : REVIEWS[state.view];
}

// Il link "Torna all'index/Torna alla home" in alto e' lo stesso
// elemento in entrambi i casi: sulla landing porta a index.html
// (comportamento normale del link), su una recensione aperta cambia
// testo e, invece di navigare, richiama il crossfade di ritorno.
function updateIndexLink(){
  const onReview = state.view !== "landing";
  const label = el.indexLink.querySelector("span");
  if(label) label.textContent = onReview ? t("backToHomeLabel") : t("backToIndexLabel");
  else el.indexLink.setAttribute("data-i18n", onReview ? "backToHomeLabel" : "backToIndexLabel");
}

el.indexLink.addEventListener("click", (ev) => {
  if(state.view !== "landing"){
    ev.preventDefault();
    backToLanding();
  } else {
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
  }
});

function crossfadeTo(showEl, instant){
  const hideEl = currentCenterPanel();
  if(hideEl === showEl) return;

  // "instant" salta del tutto la dissolvenza: usato quando la
  // transizione visiva la fa gia' qualcos'altro (es. lo scorrimento
  // della tabella genere verso lo stage su mobile) - altrimenti, per
  // una frazione di secondo, lo stage arrivava gia' in vista mentre
  // la home stava ancora sparendo lentamente (500ms), col risultato
  // di un flash della home visibile a schermo.
  if(instant){
    hideEl.hidden = true;
    hideEl.classList.remove("is-fading");
    showEl.hidden = false;
    showEl.classList.remove("is-fading");
    return;
  }

  hideEl.classList.add("is-fading");
  setTimeout(() => {
    hideEl.hidden = true;
    hideEl.classList.remove("is-fading");
    showEl.hidden = false;
    // Forza un reflow cosi' la transizione parte da opacity:0
    // invece di saltare direttamente a 1.
    showEl.classList.add("is-fading");
    void showEl.offsetWidth;
    showEl.classList.remove("is-fading");
  }, 500);
}

function openReview(id, instant){
  resumedPersistedTrack = false; // scelta esplicita di una recensione:
    // la traccia ripresa da un'altra pagina lascia il posto alla
    // scaletta normale di questa
  const entryEl = REVIEWS[id];
  if(!entryEl) return;
  closeGate(el.gateToggleRight, el.reviewsGateRight);
  closeGate(el.gateToggleLeft, el.reviewsGateLeft);
  crossfadeTo(entryEl, instant);
  state.view = id;
  syncTableToReview(id); // mostra nella tabella (mobile) il genere giusto, per quando si torna a scorrere a sinistra
  state.trackIndex = 0; // si riparte dal primo brano della nuova playlist
  // Torna in cima ad ogni nuova recensione, invece di restare dov'era
  // scorsa la precedente: window.scrollTo per desktop, .stage per
  // mobile (il vero contenitore che scorre li', non la finestra).
  window.scrollTo(0, 0);
  const stage = document.querySelector(".stage");
  if(stage) stage.scrollTop = 0;
  el.body.classList.add("is-review-open");
  // Come sulle altre pagine interne: a recensione aperta, Discord/
  // KoFi si spostano dentro a .brand (prima del nome pagina) invece
  // di restare nella loro posizione originale dentro .stage-controls
  // — un solo elemento nel DOM, spostarlo lo toglie automaticamente
  // da dov'era prima. Solo desktop: su mobile hanno gia' un
  // trattamento apposito diverso, mai toccato qui.
  if(!isMobileNav() && el.brand && el.socialLinks && el.brandBtn && el.socialLinks.parentElement !== el.brand){
    el.brand.insertBefore(el.socialLinks, el.brandBtn);
  }
  // Colore proprio della voce (bordo/icone Ko-fi-Discord in vista
  // voce mobile, e la voce corrispondente nella tabella genere).
  if(REVIEW_ACCENTS[id]){
    el.body.style.setProperty("--item-accent", REVIEW_ACCENTS[id]);
  } else {
    el.body.style.removeProperty("--item-accent");
  }
  // Solo mobile: la topbar passa al trattamento "vista voce" (scritta
  // a sinistra, tazza al centro, switch a destra — stesso stile delle
  // altre pagine). Su desktop data-state resta sempre "landing" di
  // proposito: la' Discord/Ko-fi/index-link devono restare visibili
  // anche a recensione aperta (gia' deciso in precedenza).
  if(isMobileNav()) el.body.dataset.state = "entry";
  const slot = MUSIC_SLOTS[id];
  if(slot && el.musicControl) slot.appendChild(el.musicControl);
  updateIndexLink();
  updateMusicPlayback();
  // Due cuori voluti, non un doppione per errore: uno subito dopo la
  // recensione veloce (su desktop nella colonna della scheda, su
  // mobile dentro a quick-take — stesso motivo di prima: sulla
  // scheda, su mobile, si sposterebbe quando .deep si espande sotto),
  // uno in fondo alla recensione completa (dentro a .deep, sempre
  // presente nel DOM anche se nascosta finche' non la si apre).
  // Sincronizzati tra loro (vedi appendLikeWidget): il like messo su
  // uno accende anche l'altro, dato che sono la stessa opera.
  const quickLikeContainer = isMobileNav() ? entryEl.querySelector(".quick-take") : entryEl.querySelector(".facts");
  appendLikeWidget(quickLikeContainer, id, "-quick");
  // Solo su mobile: su desktop il primo cuore (nella scheda, a lato)
  // resta sempre visibile mentre si legge, anche scorrendo dentro
  // alla recensione completa — un secondo in fondo sarebbe inutile
  // li'. Su mobile invece il primo esce dallo schermo scorrendo,
  // quindi ne serve un altro in fondo per chi arriva li' senza
  // tornare su.
  if(isMobileNav()){
    // Con due sezioni .deep (solo FFVIII per ora, seria+cazzona), un
    // solo appendLikeWidget prenderebbe sempre la prima nel DOM,
    // lasciando l'altra priva di cuoricino quando è quella visibile.
    // Un widget per ciascuna, suffisso diverso per non scontrarsi
    // con il controllo "gia' creato" dentro appendLikeWidget stesso.
    entryEl.querySelectorAll(".deep").forEach((deepEl, i) => {
      appendLikeWidget(deepEl, id, i === 0 ? "-deep" : "-deep" + i);
    });
  }
}

function backToLanding(){
  crossfadeTo(el.landingPanel);
  state.view = "landing";
  el.body.classList.remove("is-review-open");
  el.body.style.removeProperty("--item-accent");
  // Discord/KoFi tornano al loro posto originale dentro
  // .stage-controls, solo desktop (stesso motivo di sopra).
  if(!isMobileNav() && el.stageControls && el.socialLinks && el.socialLinks.parentElement !== el.stageControls){
    el.stageControls.insertBefore(el.socialLinks, el.stageControls.firstChild);
  }
  // Solo mobile: se si stava guardando la tabella o una recensione,
  // torna a mostrare lo stage (home) nel carosello — la tabella resta
  // presente (sempre raggiungibile ora), con l'ultimo genere sfogliato.
  if(el.layout) el.layout.scrollLeft = window.innerWidth;
  if(isMobileNav()) el.body.dataset.state = "landing";
  updateIndexLink();
  updateMusicPlayback();
}

document.querySelectorAll("[data-review]").forEach(card => {
  card.addEventListener("click", (ev) => {
    ev.preventDefault();
    openReview(card.dataset.review);
  });
});

// Soglia spoiler: un solo pulsante rivela il contenuto approfondito,
// senza possibilita' di richiuderlo (come nel mockup di riferimento).
// Generalizzato per funzionare su ogni recensione (i suffissi negli id
// seguono lo stesso schema, es. "revealBtnFfvii"/"reviewThresholdFfvii").
function setupRevealButton(suffix){
  const btn = document.getElementById("revealBtn" + suffix);
  const threshold = document.getElementById("reviewThreshold" + suffix);
  const deep = document.getElementById("reviewDeepContent" + suffix);
  if(!btn || !threshold || !deep) return;
  btn.addEventListener("click", () => {
    threshold.classList.add("is-crossed");
    deep.classList.add("is-visible");
  });
}
// ---------------------------------------------------------
// Doppio pulsante (solo FFVIII per ora, e' l'unica con due versioni
// vere della recensione completa): a differenza di setupRevealButton
// qui sopra, il riquadro di avviso NON si spegne piu' una volta per
// tutte al primo click - resta sempre visibile e cliccabile, cambia
// solo quale dei due pulsanti risulta "attivo" (disabilitato, e' la
// versione che stai gia' leggendo) e quale "spento" (cliccabile, ti
// porta all'altra). Un pulsante alla volta e' sempre disabilitato,
// mai entrambi ne' nessuno, una volta che hai scelto la prima volta.
// ---------------------------------------------------------
function setupDualRevealButtons(suffix){
  const btnSerious = document.getElementById("revealBtn" + suffix);
  const btnGoofy = document.getElementById("revealBtn" + suffix + "Goofy");
  const deepSerious = document.getElementById("reviewDeepContent" + suffix);
  const deepGoofy = document.getElementById("reviewDeepContent" + suffix + "Goofy");
  if(!btnSerious || !btnGoofy || !deepSerious || !deepGoofy) return;

  function show(mode){
    const isSerious = mode === "serious";
    deepSerious.classList.toggle("is-visible", isSerious);
    deepGoofy.classList.toggle("is-visible", !isSerious);
    btnSerious.disabled = isSerious;
    btnGoofy.disabled = !isSerious;
  }

  btnSerious.addEventListener("click", () => show("serious"));
  btnGoofy.addEventListener("click", () => show("goofy"));
}
setupDualRevealButtons("");
setupDualRevealButtons("Ffvii");
setupDualRevealButtons("Ffix");
setupDualRevealButtons("Shady");

// ---------------------------------------------------------
// Toggle centrale: NON sposta piu' un unico carrello da un lato
// all'altro — decide quale dei due carrelli (destra/sinistra,
// entrambi sempre presenti nel DOM) e' visibile. Crossfade in due
// tempi: il carrello uscente sparisce con un fade da 0.5s, e SOLO
// dopo che quel fade e' completato (altri 0.5s dopo il click)
// inizia il fade in di quello entrante, anch'esso da 0.5s — mai
// sovrapposti. Destra e' il lato di default/visibile all'avvio
// (il sinistro parte con .side-hidden gia' nel markup).
// ---------------------------------------------------------
if(el.gateSideToggle){
  el.gateSideToggle.addEventListener("click", () => {
    const goingLeft = state.activeSide === "right";
    const outgoing = goingLeft ? el.reviewsGateRight : el.reviewsGateLeft;
    const incoming = goingLeft ? el.reviewsGateLeft : el.reviewsGateRight;

    outgoing.classList.add("side-hidden");
    setTimeout(() => {
      incoming.classList.remove("side-hidden");
    }, 500);

    state.activeSide = goingLeft ? "left" : "right";
    localStorage.setItem(GATE_SIDE_KEY, state.activeSide);
    el.gateSideToggle.setAttribute("aria-pressed", String(goingLeft));
    el.gateSideToggle.setAttribute("aria-label", goingLeft ? t("gateSideToggleOn") : t("gateSideToggleOff"));
  });
}

// Sincronizza subito i due pannelli con la preferenza salvata (se
// e' "left", il sinistro deve partire visibile e il destro nascosto
// — l'opposto del default nel markup), senza passare dal crossfade
// animato: solo al primo caricamento, deve essere istantaneo.
if(state.activeSide === "left"){
  el.reviewsGateRight.classList.add("side-hidden");
  el.reviewsGateLeft.classList.remove("side-hidden");
}

// ---------------------------------------------------------
// Musica di sottofondo — stessa playlist di FFVIII usata in Il Filo
// Nascosto. Solo nella pagina della recensione (non in landing), non
// autoparte mai con l'audio: l'utente deve attivarla col toggle, i
// browser bloccherebbero comunque l'autoplay con suono.
// ---------------------------------------------------------
function updateMusicPlayback(){
  if(!el.bgMusic) return;
  if(resumedPersistedTrack) return; // traccia ripresa da un'altra pagina:
    // resta cosi' finche' l'utente non apre esplicitamente una recensione
  const inReview = state.view !== "landing";
  el.musicToggle.setAttribute("aria-pressed", String(state.musicOn));

  const tracks = inReview ? (REVIEW_TRACKS[state.view] || []) : [];

  if(tracks.length === 0 || !state.musicOn){
    el.bgMusic.pause();
    el.trackInfo.hidden = true;
    return;
  }

  if(state.trackIndex >= tracks.length) state.trackIndex = 0;
  const track = tracks[state.trackIndex];

  el.trackInfo.hidden = false;
  el.trackTitle.textContent = track.title;
  el.trackGame.textContent = track.game || "";
  el.trackSkipBtn.hidden = tracks.length <= 1;

  if(!el.bgMusic.src || !el.bgMusic.src.endsWith(track.src)){
    el.bgMusic.src = track.src;
  }
  el.bgMusic.play().catch(() => { /* bloccato finche' non c'e' un gesto utente; il click del toggle stesso lo e' */ });
}

function advanceTrack(){
  const tracks = state.view !== "landing" ? (REVIEW_TRACKS[state.view] || []) : [];
  if(tracks.length === 0) return;
  state.trackIndex = (state.trackIndex + 1) % tracks.length;
  updateMusicPlayback();
}

if(el.bgMusic){
  el.bgMusic.addEventListener("ended", advanceTrack);
  el.bgMusic.addEventListener("timeupdate", () => {
    if(el.bgMusic.duration && !isScrubbingProgress){
      el.trackProgressFill.style.width = (el.bgMusic.currentTime / el.bgMusic.duration * 100) + "%";
    }
  });
  el.bgMusic.addEventListener("loadedmetadata", () => {
    el.trackProgressFill.style.width = "0%";
  });
  el.trackSkipBtn.addEventListener("click", advanceTrack);

  // Scrubbing della barra di riproduzione (20/08) - stessa tecnica e
  // stesso codice di script-racconti.js/script-storie-teorie.js
  // (mancava qui, segnalato come discrepanza di funzionalita' tra
  // pagine: tutti i lettori con pulsante+nuvoletta+barra dovrebbero
  // condividere le stesse funzioni, non solo il colore/le tracce).
  const trackProgressEl = el.trackProgressFill.parentElement;
  let isScrubbingProgress = false;

  function seekFromPointerEvent(e){
    if(!el.bgMusic.duration) return;
    const rect = trackProgressEl.getBoundingClientRect();
    const ratio = Math.min(1, Math.max(0, (e.clientX - rect.left) / rect.width));
    el.bgMusic.currentTime = ratio * el.bgMusic.duration;
    el.trackProgressFill.style.width = (ratio * 100) + "%";
  }

  trackProgressEl.addEventListener("mousedown", (e) => {
    if(!el.bgMusic.duration) return;
    isScrubbingProgress = true;
    trackProgressEl.classList.add("is-scrubbing");
    seekFromPointerEvent(e);
    e.preventDefault();
  });
  window.addEventListener("mousemove", (e) => {
    if(!isScrubbingProgress) return;
    seekFromPointerEvent(e);
  });
  window.addEventListener("mouseup", () => {
    if(!isScrubbingProgress) return;
    isScrubbingProgress = false;
    trackProgressEl.classList.remove("is-scrubbing");
  });

  function seekFromTouch(touch){
    seekFromPointerEvent({ clientX: touch.clientX });
  }
  trackProgressEl.addEventListener("touchstart", (e) => {
    if(!el.bgMusic.duration) return;
    isScrubbingProgress = true;
    trackProgressEl.classList.add("is-scrubbing");
    seekFromTouch(e.touches[0]);
  }, { passive:true });
  trackProgressEl.addEventListener("touchmove", (e) => {
    if(!isScrubbingProgress) return;
    seekFromTouch(e.touches[0]);
  }, { passive:true });
  trackProgressEl.addEventListener("touchend", () => {
    if(!isScrubbingProgress) return;
    isScrubbingProgress = false;
    trackProgressEl.classList.remove("is-scrubbing");
  });

  const LONG_PRESS_MS = 1000;
  function attachProgressLongPressHandoff(btn){
    if(!btn) return;
    let timer = null;
    let handedOff = false;
    let startTouch = null;

    btn.addEventListener("touchstart", (e) => {
      handedOff = false;
      startTouch = e.touches[0];
      timer = setTimeout(() => {
        if(!el.bgMusic.duration) return;
        handedOff = true;
        isScrubbingProgress = true;
        trackProgressEl.classList.add("is-scrubbing");
        seekFromTouch(startTouch);
      }, LONG_PRESS_MS);
    }, { passive:true });

    btn.addEventListener("touchmove", (e) => {
      if(!handedOff) return;
      seekFromTouch(e.touches[0]);
    }, { passive:true });

    btn.addEventListener("touchend", (e) => {
      clearTimeout(timer);
      if(handedOff){
        isScrubbingProgress = false;
        trackProgressEl.classList.remove("is-scrubbing");
        e.preventDefault();
      }
    });

    btn.addEventListener("touchcancel", () => {
      clearTimeout(timer);
      if(handedOff){
        isScrubbingProgress = false;
        trackProgressEl.classList.remove("is-scrubbing");
      }
    });
  }
  attachProgressLongPressHandoff(el.trackSkipBtn);
  attachProgressLongPressHandoff(el.trackPersistBtn);

  el.bgMusic.volume = isMobileNav() ? 1 : parseFloat(el.volumeSlider.value);
  el.volumeSlider.addEventListener("input", () => {
    el.bgMusic.volume = parseFloat(el.volumeSlider.value);
    localStorage.setItem(VOLUME_KEY, el.volumeSlider.value);
  });
  el.musicToggle.addEventListener("click", () => {
    state.musicOn = !state.musicOn;
    localStorage.setItem(MUSIC_ON_KEY, String(state.musicOn));
    updateMusicPlayback();
  });
}

// ---------------------------------------------------------
// Ascolto persistente (pulsante a puntina in track-info, dal lato
// opposto del salta-traccia): quando attivo, la traccia in corso
// continua anche cambiando pagina del sito (sito multi-pagina, non
// un'app singola: il caricamento della pagina nuova comunque azzera
// tutto, ma qui la si fa ripartire subito dallo stesso punto, un
// piccolo vuoto di silenzio nel mezzo e' inevitabile) e non si mette
// piu' in pausa mettendo la scheda in background.
// ---------------------------------------------------------
const MUSIC_PERSIST_KEY = "tfsMusicPersistOn";
const MUSIC_STATE_KEY = "tfsMusicPersistState";

function isMusicPersistOn(){
  return localStorage.getItem(MUSIC_PERSIST_KEY) === "1";
}

function saveMusicPersistState(){
  if(!el.bgMusic || !isMusicPersistOn() || !el.bgMusic.src || el.bgMusic.paused) return;
  try {
    localStorage.setItem(MUSIC_STATE_KEY, JSON.stringify({
      src: el.bgMusic.src,
      title: el.trackTitle.textContent,
      game: el.trackGame.textContent,
      time: el.bgMusic.currentTime
    }));
  } catch(e) { /* storage pieno o bloccato dal browser, pazienza */ }
}

if(el.bgMusic && el.trackPersistBtn){
  el.trackPersistBtn.setAttribute("aria-pressed", String(isMusicPersistOn()));
  el.trackPersistBtn.addEventListener("click", () => {
    const next = !isMusicPersistOn();
    localStorage.setItem(MUSIC_PERSIST_KEY, next ? "1" : "0");
    el.trackPersistBtn.setAttribute("aria-pressed", String(next));
    if(next) saveMusicPersistState();
    else localStorage.removeItem(MUSIC_STATE_KEY);
  });

  let lastPersistSave = 0;
  el.bgMusic.addEventListener("timeupdate", () => {
    const now = Date.now();
    if(now - lastPersistSave > 2000){
      lastPersistSave = now;
      saveMusicPersistState();
    }
  });
  window.addEventListener("pagehide", saveMusicPersistState);
}

// Standby/scheda non in primo piano: la musica si mette in pausa,
// tranne quando l'ascolto persistente e' attivo (in quel caso resta
// in riproduzione, e' proprio lo scopo del pulsante).
let musicWasPlayingBeforeHidden = false;
document.addEventListener("visibilitychange", () => {
  if(!el.bgMusic) return;
  if(document.hidden){
    if(isMusicPersistOn()) return;
    musicWasPlayingBeforeHidden = !el.bgMusic.paused;
    el.bgMusic.pause();
  } else if(musicWasPlayingBeforeHidden){
    el.bgMusic.play().catch(() => {});
  }
});

paintStaticText();

// FIX: rimossa resumePersistedMusic - faceva ripartire la musica
// automaticamente su OGNI pagina nuova caricata (se l'interruttore
// era attivo), un comportamento mai voluto: il pulsante serve solo a
// non mettere in pausa la musica quando la scheda va in background o
// si passa a un'ALTRA scheda di un ALTRO sito, non a farla risuonare
// su una pagina diversa dello stesso sito.

// Mobile: la tabella genere e' sempre presente come primo pannello
// del carosello (vedi sopra) — ma all'apertura della pagina deve
// mostrarsi lo stage (home), non la tabella. Nessuna animazione,
// e' il punto di partenza vero e proprio, non una transizione.
if(isMobileNav() && el.layout){
  el.layout.scrollLeft = window.innerWidth;
}
// Su mobile, la tabella genere (.mobile-genre-table) resta invisibile
// finche' questo punto non viene raggiunto - vedi recensioni.css e il
// piccolo script di sicurezza in testa alla pagina. Qui la correzione
// dello scroll qui sopra e' gia' avvenuta, quindi e' sicuro rivelarla
// (stesso identico meccanismo di Storie Senza Cornice/Il Filo
// Nascosto, applicato li' a sidebar/side-rail).
document.body.classList.add("tfs-ready");
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
  const target = e.target.closest("button, a.kofi-link, a.discord-link, a.review-tile");
  if(target && !target.classList.contains("track-skip")){
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

// ---------------------------------------------------------
// Il pulsante "Segnala bug" e' position:fixed: su mobile, dove la
// tabella dei generi vive nello stesso carosello orizzontale di
// .layout (genere <-> stage, come sidebar/stage sulle altre pagine),
// resterebbe a galla anche scorrendo verso la tabella invece di
// sparire con lei. Stessa logica gia' usata su Racconti/Teorie/
// Timeline: nascosto quando lo stage non e' la schermata in vista.
// ---------------------------------------------------------
if(el.layout && el.reportBugBtn){
  const updateReportBtnMobile = () => {
    if(!isMobileNav()) { el.reportBugBtn.style.display = ""; return; }
    const w = window.innerWidth;
    const inStage = el.layout.scrollLeft > w * 0.5;
    el.reportBugBtn.style.display = inStage ? "" : "none";
  };
  el.layout.addEventListener("scroll", updateReportBtnMobile, { passive: true });
  updateReportBtnMobile();
}

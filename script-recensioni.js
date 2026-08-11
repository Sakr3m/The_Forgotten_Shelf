// ============================================================
// RECENSIONI — per ora solo la home + il "carrello" con la
// griglia (solo PC). Stessa logica minima di i18n/cambio lingua
// delle altre pagine leggere del sito (Officina).
// ============================================================

const STRINGS = {
  it: {
    brand: "Diari di Gioco",
    brandMobile: "Diari\ndi Gioco",
    landingEyebrow: "Benvenuto nelle recensioni",
    landingTitle: "The Forgotten Shelf",
    landingIntro: "The Forgotten Shelf raccoglie anche impressioni oneste sui giochi che ho giocato — completati, platinati o amati senza motivo — senza pretese di essere una guida.",
    kofiLabel: "Sostienimi su Ko-fi",
    backToIndexLabel: "Torna all'index",
    backToHomeLabel: "Torna alla home",
    gateToggleLabel: "Apri l'elenco delle recensioni",
    gateToggleLabelClose: "Chiudi l'elenco delle recensioni",
    placeholderTile: "Titolo in arrivo",
    spoilerAlert: "Le recensioni possono contenere dettagli sulla trama, inclusi finali e colpi di scena. Procedi solo se hai già completato i giochi o non temi gli spoiler.",
    landingSubDesktop: "Apri il carrello qui sotto per sfogliare le recensioni disponibili.",
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
    ffviiiFull01: "Parto subito con una confessione: Final Fantasy VIII è il mio videogioco preferito in assoluto, a prescindere dai suoi difetti e dalle critiche che ha ricevuto. Questo non significa che eviterò di parlare dei suoi aspetti fallaci, anche se la versione \"completa\" di queste recensioni lascia volutamente spazio a valutazioni soggettive.",
    ffviiiFull02: "Il gioco si apre subito con un filmato capace di far venire la pelle d'oca, il tipo di introduzione che vi pianta in testa l'idea di avere davanti qualcosa di magnifico ancora prima di aver toccato un tasto, indipendentemente da come poi lo giudicherete. Io personalmente amo quell'introduzione, e ogni volta che la rivedo ne resto ancora estasiato.",
    ffviiiFull03: "*FITHOS...LUSEC...WECOS...VINOSEC!*",
    ffviiiFull04: "Squall Leonhart, il protagonista, all'inizio è il tipo di personaggio capace di far perdere la pazienza tanto ai giocatori quanto ad alcuni suoi stessi compagni, colpa di un carattere piuttosto ostico, a meno che il vostro non gli somigli; nel qual caso, ve lo sconsiglio vivamente. Forse all'epoca gli somigliavo un po' anch'io, almeno nell'essere chiuso e a tratti solitario o lunatico, ed è per questo che riuscivo a tollerarlo. Non a caso, i fan lo hanno spesso accostato, per scherzo, all'ideologia e alla moda emo, complice anche il periodo di uscita del gioco.",
    ffviiiFull05: "Con il procedere della trama, però, quel carattere chiuso comincia ad aprirsi, merito soprattutto di Rinoa Heartilly e della sua personalità a volte forte, a volte fragile, capace di confondere la mente del nostro protagonista (ed anche la mia). Certe volte l'apertura di Squall fa emergere una fragilità che può non piacere a tutti, ma in cambio regala al pubblico alcune scene romantiche davvero mozzafiato. Da replicare nella vita reale, sia chiaro, non tutte: la parte nello spazio, ad esempio, la trovo un pochino pericolosa.",
    ffviiiFull06: "Parlando poi di Rinoa, la sua rivelazione come strega è un colpo di scena che mi ha lasciato esterrefatto, non tanto per la notizia in sé, quanto per tutte le conseguenze successive e per lo sblocco della nuova Limit da \"angioletto\", seppure, a mio parere, molto più scarsa di quella principale in cui usa il suo cane (una femmina di nome Angelo) in modi del tutto inusuali. Così come il vedere un personaggio solare finire travolto da un susseguirsi di eventi duri e tristi, rendendo la sua felicità o infelicità quasi subordinata alla semplice presenza di Squall, man mano che si va avanti. È sempre strano vedere il contrasto tra la ribelle dei Gufi del Bosco di Timber e la ragazza distesa inerme sul letto dopo lo scontro con Edea, fino alla sua totale impotenza nello spazio (la parte citata poco sopra) e, infine, alla strega imprigionata.",
    ffviiiFull07: "Gli altri personaggi giocabili finiscono un po' per eclissarsi dietro i due protagonisti, dimenticati dalla trama non troppo tempo dopo essere stati presentati, relegati in secondo piano o costretti a rimanere lì, con le loro evoluzioni comprensibili solo studiando i minimi dettagli; dei particolari che solo un fan accanito o uno psicopatico riesce a scorgere.",
    ffviiiFull08: "Personalmente, non l'ho mai considerato un grosso problema. È una caratteristica reale, oltretutto molto criticata da alcuni fan e soprattutto dai non fan del titolo, ma credo comunque che sia stata gestita abbastanza bene da lasciar intravedere, anche in questi personaggi secondari, delle evoluzioni che meritano di non essere sottovalutate.",
    ffviiiFull09: "Uno dei casi su cui mi voglio soffermare è quello di Selphie Tilmitt: normalmente una ragazza allegra ed estroversa, amante del colore giallo e dei trenini gialli, che dopo la visita al Garden di Trabia, distrutto da un attacco missilistico, sparisce per un po' dalla scena con la scusa di doversi riposare. Il gioco non lo mostra esplicitamente, ma non è affatto improbabile pensare che quell'evento abbia avuto delle vere ripercussioni su di lei, al punto da spingerla a chiudersi da sola in camera, magari per sfogarsi o piangere.",
    ffviiiFull10: "Anche Zell Dincht (il nostro procacciatore di panini della mensa) cambia parecchio: da \"gallinaccio\" (come lo chiama Seifer Almasy) che smania per prendere il comando, a membro che impara a restare al proprio posto, ottenendo, per un periodo di tempo piccolissimo, un ruolo di responsabilità tutt'altro che da poco (capogruppo, nientemeno), proprio nel momento in cui ha finalmente accettato di maturare su quell'aspetto di sé.",
    ffviiiFull11: "Lo stesso vale per Quistis Trepe (sogno proibito di tanti maschietti dell'epoca) e Irvine Kinneas (del quale non so ancora la pronuncia vera del nome, quindi le uso tutte, ed è simpatico quanto un negoziante che ti mette i prodotti al doppio del prezzo), che non fanno eccezione.",
    ffviiiFull12: "Insomma, personaggi che non vanno semplicemente comandati, ma capiti.",
    ffviiiFull13: "Tra gli altri personaggi degni di nota rispetto al gruppo principale, troviamo il già citato Seifer, con le sue strane manie: il sogno di diventare a tutti i costi il cavaliere di una strega, salvo poi essere praticamente l'unico a non riuscirci, nonostante tutti gli sforzi. Ideologie capaci di far venire una voglia matta di rifilargli, di tanto in tanto, una capocciata bella e buona, roba da seduta di terapia gratuita, e la sua eterna rivalità con Squall che sembra appianarsi solo a fine gioco, nei titoli di coda, non prima. Sempre accompagnato dai suoi fidati Fujin e Raijin, una coppia di... bulli scolastici che sembrano vedere in Seifer una via di mezzo tra un caposquadra e un piccolo dittatore.",
    ffviiiFull14: "Edea Kramer, la quale non si riesce ad odiare neanche impegnandovi, vista la sua condizione di marionetta, posseduta da una strega proveniente dal futuro. Non ho mai capito del tutto la mia posizione nei suoi confronti nemmeno dopo averla liberata dalla possessione; certe volte parla come se sapesse qualcosa, ma con un'iniziativa da Tonberry col coltello ancora abbassato: sai che prima o poi arriverà, ma intanto hai tutto il tempo per un caffè.",
    ffviiiFull15: "Nei sogni, nel vero senso della parola, troviamo Laguna Loire e i suoi due fidi compagni, Kiros Seagul e Ward Zabak, tre soldati di Galbadia che ne combinano di tutti i colori. Però devo ammettere che il coraggio non gli manca: buttarsi da una scogliera senza battere ciglio è quasi normale amministrazione, per loro. Anche se, a essere onesti, è stato Laguna a scaraventare giù sia loro due che se stesso, quindi forse il vero matto del terzetto è lui.",
    ffviiiFull16: "Quei sogni, tra l'altro, sono provocati da Ellione: il personaggio più misterioso del gioco, sedicente parente di Squall, nonché fuggiasca 24 ore su 24.",
    ffviiiFull17: "E lasciatemi citare anche quei due pagliacci di Wedge e Biggs, cognomi rimasti un mistero imperscrutabile: simpaticissimi, punto.",
    ffviiiFull18: "La storia, dal canto suo, parte come una specie di \"slice of life\" ambientato in una scuola, per quanto militare. Voglio soffermarmi proprio su questo \"militare\": vi ricordate l'età dei personaggi, vero? Una storia fatta di allenamenti in caverne anguste (e talvolta labirintiche), missioni per salire di grado e promozioni. Quest'ultima parte è caratterizzata da test *facilissimi* per salire di grado SeeD, il nome del gruppo militare a cui appartengono i nostri personaggi, e guadagnare più soldi da poter spendere in tutti gli oggetti o i souvenir che ci viene voglia di comprare. Per poi trasformarsi, gradualmente, in una vera e propria caccia alle streghe, ma non con forconi e fiamme, sempre con lo stile tipico dei vecchi Final Fantasy.",
    ffviiiFull19: "So bene che cambi di registro come questo non piacciono a tutti, ma io l'ho amato proprio perché sembra una conseguenza naturale delle premesse: un \"dovevo arrivarci fin dall'inizio, solo che prima ero relegato a dimostrare quanto so maneggiare bene una gunblade\".",
    ffviiiFull20: "E a proposito di gunblade! Un'arma geniale, lo ammetto, una fusione, un po' come quella che si ottiene con i potara di Dragon Ball, tra una spada e una pistola/fucile, ma resta comunque bellissima, e anche in combattimento la sua meccanica rende benissimo l'idea.",
    ffviiiFull21: "Man mano che si avanza, la trama si evolve in modo del tutto inaspettato: Squall, da semplice possessore e unico utilizzatore (insieme al rivale Seifer) della gunblade, diventa Comandante del Garden di Balamb, ma non prima di aver trascinato noi poveri giocatori attraverso diverse peripezie, tra cui: fuggire da una prigione di massima sicurezza pensata per essere inviolabile, con le uscite continuamente sotterrate nella sabbia; sconfiggere in combattimento il vero proprietario del Garden di Balamb (il supremo Norg), che teneva sotto scacco il preside Cid Kramer; e svenire di tanto in tanto (grazie Ellione), in luoghi non sempre piacevoli, per rivivere le missioni di Laguna Loire (padre di Squall) e dei suoi compagni, tra cui quella volta in cui gli venne un crampo proprio durante un flirt con una pianista destinata a diventare cantante (e madre di Rinoa).",
    ffviiiFull22: "Tutto questo porta i nostri personaggi ad affrontare Edea in una guerra stupenda contro Galbadia e il suo Garden, tra momenti che vi lasciano incollati allo schermo e video che vi fanno perfino posare il controller (o allontanare le mani da mouse e tastiera), per poi arrivare, nel futuro, tramite la compressione temporale, fino alle porte del castello di Artemisia, l'antagonista principale del gioco, e sconfiggerla.",
    ffviiiFull23: "Che poi, nello stesso castello, non troviamo solo lei e i suoi guardiani, che ci tolgono funzioni sia di combattimento che di menù (come la possibilità di salvare), ma anche Omega Weapon, il boss opzionale più forte del gioco, persino più forte della stessa Artemisia; \"più forte\", però, non significa solo superiore agli altri nemici, ma una vera e propria sfida da battere, senza cedere all'ultimo per un minimo errore.",
    ffviiiFull24: "Se non sapete cosa sia la compressione temporale, beh, è semplice: prendete passato, presente e futuro, li buttate in un frullatore, premete \"on\", ed ecco fatto, avete ottenuto \"la compressione temporale\".",
    ffviiiFull25: "Ogni tappa di questo percorso è accompagnata da eventi e, soprattutto, scene e cutscene fantastiche, che da sole, senza bisogno di altre ricompense, varrebbero già la fatica.",
    ffviiiFull26: "Ah sì, l'avevo detto che si finisce anche nello spazio?",
    ffviiiFull27: "Parlando di streghe e di spazio, apro una parentesi: Adele è un uomo, e non mi convincerete del contrario.",
    ffviiiFull28: "C'è una leggenda, raccontata nel gioco, su Hyne, un grande essere che creò gli umani per farsi servire; quando questi si ribellarono e vollero i suoi poteri, lui glieli concesse, prima di scappare, ma solo alle donne, e solo ad alcune prescelte. Quindi Adel, o Adele, o comunque si chiami nella versione originale, dovrebbe essere una donna. Con quel petto, però? Non ho intenzione di crederci nemmeno sotto tortura. Giudicate voi stessi.",
    ffviiiFull29: "Passando al sistema di combattimento, va detto subito che in battaglia non offre grandi particolarità, ma fuori dal campo di battaglia è tutta un'altra storia.",
    ffviiiFull30: "Il sistema di Junction è letteralmente sbroccato: se sapete come usarlo, potete seminare morte e distruzione tra le schiere dei vostri avversari. Questo si lega a doppio filo con lo scaling del livello dei nemici: FFVIII dovrebbe adeguare la difficoltà dei mostri alla media del party, ma nella pratica, il più delle volte, la differenza è pressoché impercettibile.",
    ffviiiFull31: "Comunque sia, che siate novizi o esperti, vi basterà studiare per bene le armi a vostra disposizione per rendere i combattimenti fluidi, senza eccessive difficoltà.",
    ffviiiFull32: "Vogliamo parlare delle Tecniche Speciali? Serve avere i personaggi mezzi morti prima di poterle usare, ma sono davvero assurde. Sì, è bello vedere Squall che si lancia contro un nemico con furia (Cuore di Pietra), oppure sparare un raggio fotonico che supera l'atmosfera (Raggio Esplosivo), o ancora Irvine che spara come se fosse al poligono di tiro (Shot), ma la vera protagonista è Selphie con The End. Nessuno può resisterle, fa fuori chiunque, chiudendo la partita immediatamente; le uniche eccezioni sono i nemici con più fasi, dove fa saltare la fase invece che l'intero combattimento, meglio di niente no? Personalmente non ci riuscivo, e non ci riesco tuttora, a farla comparire: faccio prima a vincere la battaglia manualmente che a vederla apparire in lista; l'avrò vista pochissime volte, forse una o due.",
    ffviiiFull33: "Le magie, invece, se non fosse per il loro impiego nel Junction per potenziare le statistiche dei personaggi (oltre alla crescita per livello), sarebbero completamente inutili, rimpiazzabili persino da un cane sparato come un proiettile da cannone; e non sto scherzando neanche un po': il cane di Rinoa può letteralmente fare questo, con più efficacia di mezzo elenco magie.",
    ffviiiFull34: "Qualche magia si salva comunque grazie alla sua utilità fuori scala, ma sono così poche da contarle sulla punta delle dita di una mano sola.",
    ffviiiFull35: "Inoltre queste magie vanno assimilate dai nemici o da delle strane fonti rosa che spuntano dal terreno; sì, lo so, la seconda opzione suona ancora più assurda della prima, visto che dal terreno potrebbero tranquillamente uscire geyser, magma o chissà quali fumi misteriosi. Forse in realtà stiamo \"assimilando\", o meglio inalando, fumi allucinogeni che ci fanno credere di aver sbloccato la capacità di richiamare una gigantesca esplosione di fuoco sotto il sedere dell'avversario (Firaga) o rivivere i nostri compagni di squadra caduti (Areiz).",
    ffviiiFull36: "E poi ci sono i Guardian Force, entità evocabili dall'aspetto più vario, per lo più mostruoso, con l'eccezione di Shiva, che invece è bona. Anche Siren, dai, se la cava dignitosamente. Se evocati al momento giusto, questi esseri riscrivono completamente le sorti di uno scontro. Menzione d'onore per Odino, Gilgamesh e Fenice, che, indovinate un po', non si possono evocare manualmente e compaiono quando vogliono loro; la Fenice fa parzialmente eccezione, perché è possibile richiamarla anche tramite un oggetto (la Piuma di Fenice), ma la sua versione automatica resta la scelta migliore, capace com'è di salvarvi davvero dal Game Over. Un'altra citazione ad honorem va a Ifrid (così si chiama solo nella versione italiana; nell'originale, e in tutti gli altri Final Fantasy, è Ifrit, con la T), perché... nessun motivo specifico, è semplicemente il mio preferito in questo capitolo della serie.",
    ffviiiFull37: "Tornando ai Guardian Force: possono essere assimilati da boss o mostri, oppure trovati in vari luoghi segreti sparsi per il mondo.",
    ffviiiFull38: "E di posti così, sulla mappa, ce ne sono davvero tanti, sia per trovare i Guardian Force che per i minigiochi: rischiate di perdervi nel tentativo di scoprirli tutti, sul serio. Se puntate al platino, procuratevi una guida.",
    ffviiiFull39: "Detto questo, escludendo questi luoghi segreti, le città e i villaggi \"normali\" non sono poi molti, e questo lascia il mondo di gioco un po' scarno. D'altronde parliamo dell'epoca PlayStation 1, quindi si può capire.",
    ffviiiFull40: "Il che non toglie nulla al piacere di girare in lungo e in largo per la mappa, prima con il Garden di Balamb in versione volante, poi con la Lagunarock. Infatti, a mio parere, Esthar e Deling City rimangono veramente uno spettacolo a livello di design (non level design).",
    ffviiiFull41: "Scoprire i rifugi segreti dei Guardian Force, i minigiochi, la base di ricerca sottomarina, tutti i boschi dei chocobo, oppure andare ad allenarsi in luoghi chiamati \"isola più vicina all'inferno\" e \"isola più vicina al paradiso\", tra RubRum Dragon e Molboro: un sogno. Anzi no, aspettate, i Molboro sono più un incubo con i tentacoli: lasciamo perdere.",
    ffviiiFull42: "E poi, finalmente, si arriva a parlare del minigioco per eccellenza, la vera droga di questo titolo: il triple triad, un gioco di carte collezionabili giocabile contro gli npc (non tutti), su una griglia 3x3, cinque carte a testa, e regole che si fanno via via più cattive a seconda della località. Un minigioco davvero spassoso, oltretutto sorprendentemente facile da imparare; un po' meno facile è vincere, quando le regole cominciano a incattivirsi.",
    ffviiiFull43: "Benvenuti nel collezionismo di Final Fantasy VIII. Come dite, i Pokémon? Lasciate stare, passerete dietro a queste carte metà delle ore del vostro gameplay totale, senza nemmeno accorgervene. E se non vi piace, sono problemi vostri.",
    ffviiiFull44: "Insomma, questo videogioco è meraviglioso sotto moltissimi punti di vista.",
    ffviiiFull45: "Il comparto grafico delle cutscene riesce perfino a non sfigurare troppo con i giochi di oggi, con sequenze da paura e momenti che mettono davvero hype, capaci pure di far commuovere. La parte musicale invece è da urlo proprio. Musiche davvero fantantastiche; ecco scrivo pure male a pensare a quanto siano belle. E poi c'è Eyes on Me, la canzone di Julia cantata da Faye Wong: la prima volta che un Final Fantasy ha osato mettere una vera popstar dentro un videogioco, altro che \"sperimentazione moderna\". La scena dell'esame SeeD a Dollet è la prova dell'alto livello di entrambi i punti appena citati (grafica e musica). Io, quando la vedevo, ero già a posto così, per me l'esame era già passato a pieni voti.",
    ffviiiFull46: "Ma uno degli aspetti più criticati resta quello dei buchi di trama, capaci di far impallidire persino un Dark Souls; questo, però, non ha mai fermato i fan dal cercare risposte, e talvolta dal crearsele da soli. Il finale, poi, è un discorso a parte: confusissimo, un vero e proprio trip di acidi.",
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
    ffviiDeepGoofyTitlePart1: "Recensione veloce, a caldo",
    ffviiDeepGoofyTitlePart2: "spoiler limitati",
    ffviiGoofyPlaceholder1: "Testo segnaposto per la versione senza freni: stessa trama, zero filtri sul turpiloquio e sulle battute fuori luogo.",
    ffviiGoofyPlaceholder2: "Seconda sezione segnaposto: qui andrà il resto della versione cazzona, appena pronta.",
    ffviiFull01: "La versione originale del settimo capitolo di questa famosissima saga... Sephiroth... è un videogioco davvero magnifico... Sephiroth... e che moltissimi, pur non avendolo mai giocato, ricorderanno comunque per il personaggio di SEPHIROTH!",
    ffviiFull02: "Scherzi a parte.",
    ffviiFull03: "Final Fantasy VII si concentra veramente tanto su Sephiroth: la sua vita, i suoi dilemmi, i suoi pensieri, la sua sconfitta, la sua rinascita, il suo piano, gli esperimenti fatti su di lui, sulla madre, sull'altra madre, sulla sua origine, su... vabbè dai, avete capito.",
    ffviiFull04: "L'intro che ci viene presentata appena premiamo \"nuova partita\" ci mostra subito la situazione a Midgar, la città iniziale del videogioco, e una fioraia (Aerith Gainsborough, il cognome è davvero complicato); poi, di colpo, si passa a saltare giù da un treno per combattere contro due puffi giganti armati di fucile.",
    ffviiFull05: "Dentro la battaglia, e subito dopo, prenderemo il controllo di Cloud Strife, il protagonista del titolo: un ex-SOLDIER che ora vive di mercenariato. Fin dall'inizio del gioco, infatti, lo troviamo già in combutta con una banda di rivoltosi, gli Avalanche, il cui obiettivo è distruggere uno dei reattori della città. Peccato che quella città, per quanto governata da un'azienda di \"pezzi di Shinra\", sia anche il posto dove loro stessi vivono.",
    ffviiFull06: "Personalmente non so bene cosa pensare di Cloud: come personaggio mi piace, ma certi frangenti, legati ai suoi problemi di personalità, mi fanno sperare che al suo posto ci fosse Zack, la sua controparte negli spin-off (videoludici e cinematografici) di FFVII: stessa scuola, personalità però più solare, moro anziché biondo, e per giunta ex fidanzato di Aerith. Dico ex perché, purtroppo, ci ha tirato le cuoia.",
    ffviiFull07: "Il gioco prende il giocatore da subito, e io non ho fatto eccezione. Quando mi sono ritrovato a combattere uno scorpione robotico gigante ero gasatissimo, e speravo bastassero le pozioni, oggetti che peraltro non amo usare. Poi ho scoperto che era scarso.",
    ffviiFull08: "Anche la sequenza subito dopo, quella della bomba da piazzare e della fuga, riesce a caricare di adrenalina e a trascinarvi dentro il ritmo serrato della storia, senza troppi convenevoli. Un inizio così l'ho apprezzato parecchio: mi ha tenuto incollato fino all'ultimo secondo, e non sempre ero così sicuro di voler aiutare Jessie con il piede incastrato tra le travi 😈",
    ffviiFull09: "Oltre a Cloud, lungo la storia si aggiungono altri personaggi, e lo fanno senza inviti velati o lunghe trattative per convincerli: come Tifa Lockhart, ad esempio, sulla quale potrei già fermarmi qui, tanto merita tutta l'attenzione possibile. Tifa è il terzo membro ad unirsi al gruppo, ma resta, a mio parere, forse il più importante di tutti dopo il biondo gelatinato che sfida la gravità con i capelli. E no, prima che iniziate a pensare a *quali* due motivi: parlo del suo ruolo nel gruppo.",
    ffviiFull10: "Ogni personaggio che si unirà in futuro porta con sé le proprie motivazioni e la propria storia, un background che troverà spazio via via nel corso del gioco. Oooh, la parte di Red XIII a Cosmo Canyon, che spettacolo: l'ho amata tantissimo. Quando l'avevo incontrato nella capsula come esperimento, a Midgar, non immaginavo che mi sarei ritrovato davanti un personaggio con un background così ben costruito. La grotta dei Gi non era il massimo, lo ammetto, ma la ricompensa emotiva che arriva dopo ripaga ampiamente tutti quegli incontri casuali indesiderati. La scena in cui vediamo il padre di Red pietrificato, con la sua storia raccontata da Bugenhagen, è davvero commovente. E anche piuttosto triste, va detto.",
    ffviiFull11: "Stesso discorso per quella di Barret Wallace, colui che \"spara dalla mano\": la trovo magnifica. Un padre che ritrova il vero padre di sua figlia, oltre che il suo migliore amico di un tempo che credeva morto. Beautiful, fatti da parte.",
    ffviiFull12: "La trama si concentra all'inizio sulla Shinra, dipinta come un antagonista davvero temibile, con un quartier generale che a prima vista sembra impossibile da espugnare. E invece, a mia sorpresa, ci entriamo senza il minimo problema. Certo, veniamo poi catturati e rinchiusi in prigione, ma sono dettagli: era comunque scontato che saremmo stati liberati in qualche modo, anche se non esattamente in quel modo. Sì, perché a liberarci è... Sephiroth. Se avete la sensazione di aver già letto questo nome più volte in questa recensione, non vi state affatto sbagliando.",
    ffviiFull13: "Da qui in poi il focus si sposta del tutto, indovinate un po', su Sephiroth, l'antagonista principale della storia. Penso che la sua fama sia meritatissima: per me un buon cattivo deve saper fare il cattivo, e lui ci riesce alla grande, seminando vittime più o meno importanti lungo tutto l'arco degli eventi, passati e presenti: gli abitanti di Nibelheim, il presidente Shinra, e la più importante di tutte, per ovvi motivi, Aerith. Eh sì, Aerith, la fioraia con un segreto dietro le spalle, lascerà il gruppo dopo essere stata trattata come uno spiedino dal nostro spadaccino dai lunghi capelli argentei.",
    ffviiFull14: "Lei, essendo un'antica, era l'unica capace di preoccupare davvero Sephiroth, ostacolando i suoi piani. La scena della sua morte resta un colpo al cuore per chiunque, me compreso; però, a parte la perdita della migliore crocerossina del gruppo, non mi ha fatto poi così male. Aerith mi stava simpatica, ma non l'ho mai digerita del tutto come personaggio, per una serie di ragioni. Quello che davvero mi ha fatto arrabbiare è averla persa dopo averla allenata così duramente. GIOCO, avvisami prima!",
    ffviiFull15: "Tutto questo, però, è solo il condimento di un lungo viaggio che parte da Midgar e attraversa varie zone e obiettivi, tra cui il mio amatissimo Gold Saucer (andateci, e capirete perché ci stravedo così tanto), fino ad arrivare al Northern Crater, dove un Sephiroth ormai completamente risvegliato, grazie a Cloud (bravo, davvero bravo), ci aspetta per il nostro ultimo incontro. Dico \"ultimo\" perché in realtà lo incontreremo più volte durante il viaggio, in forma fisica o meno; invece di affrontarci direttamente, spesso ci scaglia contro una parte di Jenova, il mostro alieno che gli fa anche da \"madre\". Onestamente non saprei dirvi cosa dovrebbe rappresentare ciascuna delle sue forme: so solo che sono tutte orripilantemente belle. I nomi, quelli sì, sono un altro discorso, carichi di significato per chi sa leggerli.",
    ffviiFull16: "Le zone visitabili sono davvero tante. Oltre al Gold Saucer, merita una menzione Wutai, una rivisitazione in salsa Final Fantasy di un villaggio giapponese di ninja. Mi piaceva, e mi piace tuttora, visitarlo, soprattutto per affrontare quello che propone: la ricerca di Yuffie Kisaragi, la ninja che dovremmo aver già reclutato in precedenza e che nel frattempo ci ha derubato di tutte le materie, oltre alla parentesi con Don Corneo (già incontrato a Midgar) insieme agli agenti della Shinra. Tra questi, Reno è senza dubbio il più simpatico; Elena un po' meno.",
    ffviiFull17: "E già che si parla di Yuffie, quella simpaticissima guastafeste: non so mai se apprezzarla o detestarla. Di certo, quando mi svuota le tasche, capirete da soli che la mia reazione non è mai quella positiva, ma piuttosto la voglia di tirarle addosso un albero.",
    ffviiFull18: "Vabbè, non che \"Vincenzo Valentino\" (Vincent Valentine) sia messo tanto meglio: per convincerlo a uscire dalla bara e unirsi a noi servono sempre una decina di minuti buoni di chiacchiere, durante i quali continua imperterrito a recitare la parte del diffidente, salvo poi svegliarsi di colpo al solo sentire nominare Sephiroth e Lucrecia. Su Lucrecia non mi dilungo, sennò parte davvero la sigla di Beautiful.",
    ffviiFull19: "Molte delle altre zone, inoltre, offrono anche dei minigiochi, per quanto la maggior parte si concentri al Gold Saucer. I minigiochi sono belli, veramente belli, ma la fatica necessaria per ottenere un chocobo d'oro tramite accoppiamento è un parto vero e proprio, in tutti i sensi della parola. Al solo pensiero di doverlo ottenere in quel modo, mi viene voglia di lanciarmi direttamente contro la Ruby Weapon prima ancora delle battute finali del gioco: almeno lì si ottiene un oggetto scambiabile a Kalm con l'uccello leggendario (non fraintendetemi).",
    ffviiFull20: "La parte che però mi ha conquistato più di ogni altra è stata la caccia a TUTTE le materia. Quelle sfere magiche sparse per il mondo, alla base del sistema di combattimento, sono davvero numerosissime. Grazie a loro potete lanciare magie, usare comandi, richiamare evocazioni, potenziare le statistiche, ottenere bonus legati alle altre materie a cui sono agganciate, o farvi un caffè. No, aspettate, quest'ultima no. Alcune si ottengono in modi decisamente sgradevoli: tipo, appunto, allevando un chocobo d'oro.",
    ffviiFull21: "Una volta ottenute tutte quante, però, e dopo aver speso 472 anni luce a portarle al massimo (materie \"figlie\" incluse), mi sentivo praticamente invincibile. Perché sì: portandole al livello massimo, \"partoriscono\" una copia di se stesse a livello 0 (Yeeeh…). Un'altra strada è battere Emerald Weapon, che tramite scambio garantisce le Master Materia.",
    ffviiFull22: "Definire \"facili\" i combattimenti contro Ruby ed Emerald Weapon, in questa recensione, sarebbe un po' come dire che bere un bicchiere d'acqua sia semplice: peccato che il bicchiere sia scheggiato e tagliente lungo tutto il bordo, e l'acqua sia quasi solida, al punto da non scendere nemmeno capovolgendolo. Una gradazione di difficoltà capace di far perdere l'equilibrio persino a un cavallo di Skyrim.",
    ffviiFull23: "Tra le tante località che attraversiamo, volenti o nolenti, c'è anche Rocket Town: una cittadina \"immobile\" (con pochi npc in movimento che provano a darle vita) la cui principale attrazione è un razzo storto. Affascinante, non c'è che dire. Se non fosse per Cid Highwind, un pilota volgarissimo che per un po' diventerà anche capo del gruppo al posto di Cloud (con mia grande gioia) e che ci trascinerà in uno scontro con la Shinra a causa dei suoi sogni, il posto sarebbe a malapena degno di nota.",
    ffviiFull24: "Vi rendete conto che tutto questo viaggio serve solo ad andare a picchiare Sephiroth? E la cosa buffa è che, nel frattempo, succede di tutto: la morte di Bugenhagen (un altro momento straziante del gioco); l'esplosione del tempio degli antichi (meglio non trovarsi lì dentro quando capita una cosa del genere); Mideel che esplode a sua volta, stavolta per colpa dell'Ultima Weapon (la più scarsa del trio dei 3 boss weapon opzionali di fine gioco che svolazzava da quelle parti), quindi occhio a far rifornimento lì prima che succeda, perché una volta esplosa la città non sarà più possibile, per ragioni che non credo di dover specificare; e ancora, una sessione di snowboard sulla neve, seguita da una zona enorme e labirintica vicino a Icicle Inn, tra ghiaccio, bufere e una montagna da scalare dove è letteralmente possibile svenire per il freddo.",
    ffviiFull25: "Ah sì, quasi dimenticavo: anche Cait Sith fa BOOM insieme al tempio degli antichi, dato che resta lì dentro fino alla fine; ma essendo un gatto robot (e un simpatico traditore), viene sostituito all'istante da una versione 2.0, identica in tutto e per tutto. Un sospetto che avevo fin dall'inizio, e infatti era davvero una spia della Shinra. A differenza di Rufus, il figlio ed erede del presidente defunto (uno che si dà un'importanza tutta sua), e di Reno, Rude ed Elena, i simpaticoni che incrociamo spesso lungo il cammino e che ci combattono o meno a seconda di quanta voglia abbiano di seguire gli ordini, a comandare Cait Sith è Tseng, il capo di Reno e soci, che sembra nutrire una certa passione nell'aiutarci.",
    ffviiFull26: "Tra gli altri membri della Shinra vale la pena citare Heidegger, un pagliaccio (non in senso figurato) al servizio dell'ex presidente, sempre bersaglio delle prese in giro di Rufus (vai Rufus!), e Scarlet: lei sì che è davvero antipatica. Dico sul serio, Sephiroth può pure farsi da parte: voglio che sia lei il vero nemico finale. Se Sephiroth se lo gioca a spadate uno contro uno con Cloud, io Scarlet la vorrei vedere affrontare Tifa a schiaffi, uno contro uno, proprio come succede sul cannone di Junon.",
    ffviiFull27: "Detto questo, non resta che parlare del comparto grafico e musicale.",
    ffviiFull28: "Guardiamoci in faccia, per quanto sia impossibile farlo davvero: è un gioco del 1997, e a livello grafico i personaggi sembrano avere dei tumori ai muscoli, colpa dell'eccessiva poligonalità degli arti; le cutscene, ovviamente, non fanno eccezione, salvo rare occasioni. Quindi fidatevi: se decidete di giocarci, mettete subito in conto questo aspetto.",
    ffviiFull29: "Sul fronte audio, invece, si cambia completamente registro: qui non ho proprio nulla di cui lamentarmi, è stupendo. La più amata, sia da me che dal pubblico in generale, resta senza dubbio One-Winged Angel, il tema della battaglia finale con Sephiroth. Ma è meravigliosa, cosa volete che vi dica.",
    ffviiFull30: "Se non ci avete mai giocato, e probabilmente non lo farete mai (almeno non nella versione originale), andate quantomeno a recuperarvi le musiche, in particolare il tema di Sephiroth: capirete subito di cosa sto parlando.",
    ffviiClosing: "Tornando seri per un momento, al di là dei limiti dovuti all'età del titolo, FFVII ha segnato la mia infanzia, e resta ancora oggi un gioco che porto nel cuore, per tantissimi aspetti e per le innumerevoli ore che ha riempito nelle mie giornate. Vivere, sì, vivere per davvero le vicende di Cloud e dei suoi compagni, tra momenti di vittoria e momenti di perdita, mi teneva incollato allo schermo allora e mi terrebbe incollato ancora oggi, senza possibilità di staccarmi fino ai titoli di coda, lasciandomi solo con un sorriso stampato in faccia.",
    ffixHours: "~38 ore (storia) / 80-100+ ORE (completo)",
    ffixCompleted: "Sì",
    ffixDeepTitle1: "La trama, nel dettaglio",
    ffixDeep1: "Testo segnaposto per l'analisi vera: eventi chiave, colpi di scena, scelte di scrittura specifiche.",
    ffixDeepTitle2: "Personaggi e scelte di design",
    ffixDeep2: "Seconda sezione: cosa avresti cambiato, cosa ti ha sorpreso, cosa non ha funzionato secondo te.",
    ffixDeepTitle3: "Il finale",
    ffixDeep3: "Paragrafo dedicato esplicitamente al finale, isolato con il suo titolo.",
    shadyQuickNarrativeTitle: "Narrativa e Mondo",
    shadyQuickNarrativeText: "Il gioco racconta la storia di una bambina e della sua ombra, rinchiuse in un istituto, alle prese con ricordi ed emozioni rappresentati in modo simbolico attraverso gli ambienti che si attraversano. La narrazione, affidata anche al doppiaggio di Hannah Murray (nota per Game of Thrones e Skins), è apprezzata per l'atmosfera onirica ed emotiva che riesce a costruire, anche se parte della critica l'ha giudicata a tratti fin troppo criptica nel modo in cui rivela la propria storia.",
    shadyQuickGameplayTitle: "Gameplay",
    shadyQuickGameplayText: "Puzzle-platform in cui si controllano contemporaneamente due personaggi: la bambina, che si muove nel mondo tridimensionale, e la sua ombra, vincolata a un piano bidimensionale proiettato su pareti e superfici. I due piani di gioco interagiscono tra loro tramite luce e ombra (ad esempio spostando oggetti per modificarne le dimensioni proiettate), dando vita a enigmi ambientali originali, generalmente considerati il punto di forza più solido del titolo.",
    shadyQuickTechTitle: "Comparto Tecnico e Artistico",
    shadyQuickTechText: "Sviluppato dallo studio indipendente francese Douze Dixièmes, al loro debutto assoluto, e pubblicato da Focus Home Interactive nel dicembre 2020, il gioco si distingue soprattutto per la direzione artistica, costruita quasi interamente sul contrasto tra luce e ombra, non solo come strumento di gameplay ma come vero e proprio linguaggio narrativo. Il tema dell'ombra come parte nascosta di sé, un rimando abbastanza esplicito al concetto psicologico junghiano di \"ombra\", attraversa sia l'estetica che la storia stessa, dando al titolo un'identità visiva riconoscibile nonostante le dimensioni contenute della produzione. Proprio per questa cura artistica, il gioco ha ottenuto una candidatura all'Independent Games Festival nelle categorie dedicate a design e arte visiva.",
    shadyHours: "4-6 ore",
    shadyReleaseDate: "10 dicembre 2020",
    shadyCompleted: "Sì, 100%",
    shadyDeepTitle1: "La trama, nel dettaglio",
    shadyDeep1: "Testo segnaposto per l'analisi vera: eventi chiave, colpi di scena, scelte di scrittura specifiche.",
    shadyDeepTitle2: "Personaggi e scelte di design",
    shadyDeep2: "Seconda sezione: cosa avresti cambiato, cosa ti ha sorpreso, cosa non ha funzionato secondo te.",
    shadyDeepTitle3: "Il finale",
    shadyDeep3: "Paragrafo dedicato esplicitamente al finale, isolato con il suo titolo.",
    reportBtnLabel: "Segnala bug",
    reportTitle: "Segnala un problema",
    reportIntro: "Hai trovato qualcosa che non funziona? Descrivi cosa è successo qui sotto — la descrizione è obbligatoria, l'immagine è facoltativa ma aiuta molto.",
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
    landingEyebrow: "Welcome to the reviews",
    landingTitle: "The Forgotten Shelf",
    landingIntro: "The Forgotten Shelf also collects honest impressions on the games I've played — completed, platinumed, or loved for no good reason — with no pretense of being a guide.",
    kofiLabel: "Support me on Ko-fi",
    backToIndexLabel: "Back to index",
    backToHomeLabel: "Back to home",
    gateToggleLabel: "Open the reviews list",
    gateToggleLabelClose: "Close the reviews list",
    placeholderTile: "Title coming soon",
    spoilerAlert: "Reviews may contain plot details, including endings and twists. Proceed only if you've already finished the games or aren't worried about spoilers.",
    landingSubDesktop: "Open the cart below to browse the available reviews.",
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
    ffviiiFull01: "I'll start with a confession right away: Final Fantasy VIII is my all-time favorite video game, regardless of its flaws and the criticism it's received. That said, I won't shy away from talking about its shaky sides either, even though this \"full\" version of the review leaves plenty of room for subjective takes.",
    ffviiiFull02: "The game opens with an intro capable of giving you goosebumps, the kind that plants the idea in your head that you're about to experience something magnificent before you've even touched a button, no matter how you'll end up judging it later. I personally love that intro, and I'm still left in awe every single time I watch it.",
    ffviiiFull03: "*FITHOS...LUSEC...WECOS...VINOSEC!*",
    ffviiiFull04: "Squall Leonhart, the protagonist, starts out as the kind of character who can make both players and some of his own party members lose their patience, thanks to a pretty difficult personality, unless yours happens to resemble his, in which case I'd strongly advise against it. Maybe back then I was a bit similar to him too, at least in being closed off and occasionally solitary or moody, and that's exactly why I could put up with him. It's no surprise fans have jokingly compared him to emo culture and fashion over the years, helped along by the game's release period.",
    ffviiiFull05: "As the story moves forward, though, that closed-off personality starts opening up, mostly thanks to Rinoa Heartilly and her personality, sometimes strong, sometimes fragile, capable of thoroughly confusing our protagonist's mind (mine too, for what it's worth). Sometimes Squall's opening up reveals a vulnerability that not everyone will love, but in return it gives the audience some genuinely breathtaking romantic scenes. Worth recreating in real life, sure, though not all of them: the one in space, for instance, I find a little risky.",
    ffviiiFull06: "Speaking of Rinoa, her reveal as a sorceress is a plot twist that left me stunned, not so much for the news itself, but for everything that follows, including unlocking her new \"little angel\" Limit Break, though, in my opinion, far weaker than her main one, where she uses her dog (a female named Angelo) in all sorts of unusual ways. Same goes for watching a sunny character get swept up in one harsh, sad event after another, making her happiness or unhappiness practically dependent on Squall's mere presence as the story goes on. It's always strange seeing the contrast between the rebel from Timber's Forest Owls and the girl lying helpless on a bed after the clash with Edea, all the way to her total powerlessness in space (the part mentioned above) and, finally, the imprisoned sorceress.",
    ffviiiFull07: "The rest of the playable cast tends to get overshadowed by the two leads, forgotten by the plot not too long after being introduced, pushed into the background or left in a spot where you have to dig into the tiniest details just to understand how they evolve; the kind of details only a hardcore fan or a psychopath could ever spot.",
    ffviiiFull08: "Personally, I've never seen this as a major issue. It's a real trait of the game, and one that gets a lot of criticism from both some fans and, even more so, from non-fans of the title, but I still think it was handled well enough to let you catch glimpses of meaningful growth even in these side characters.",
    ffviiiFull09: "One case worth dwelling on is Selphie Tilmitt: normally a cheerful, outgoing girl, fond of the color yellow and yellow trains, who after visiting Trabia Garden, destroyed by a missile strike, disappears from the scene for a while under the excuse of needing to rest. The game never shows it outright, but it's not hard to imagine that the event left real scars on her, enough to send her off alone to her room, maybe to cry it out or just process it.",
    ffviiiFull10: "Zell Dincht (our resident cafeteria sandwich hustler) changes quite a bit too: from \"chicken-wuss\" (as Seifer Almasy calls him) itching to take charge, to a member who learns to stay in his lane, earning, for a very short stretch of time, a role of responsibility that's anything but minor (squad leader, no less), right at the moment he finally accepts to grow past that side of himself.",
    ffviiiFull11: "The same goes for Quistis Trepe (the forbidden dream of many boys back in the day) and Irvine Kinneas (whose name I still don't know how to properly pronounce, so I use every version I can think of, and who's about as likable as a shopkeeper who doubles the price tag on you), who are no exception.",
    ffviiiFull12: "In short, these are characters who need to be understood, not just ordered around.",
    ffviiiFull13: "Among the other characters worth mentioning outside the core group, there's the aforementioned Seifer, with his odd quirks: his dream of becoming, at any cost, a sorceress's knight, only to end up being pretty much the only one who never pulls it off, despite trying his hardest. Ideals capable of making you want to give him a good headbutt every now and then, free therapy session included, and his endless rivalry with Squall, which only seems to settle down at the very end of the game, in the credits, not before. Always flanked by his trusty Fujin and Raijin, a pair of... schoolyard bullies who seem to see Seifer as something between a squad leader and a small-time dictator.",
    ffviiiFull14: "Edea Kramer, who's impossible to hate no matter how hard you try, given her condition as a puppet, possessed by a sorceress from the future. I've never fully figured out how I feel about her, not even after freeing her from the possession; sometimes she talks like she knows something, but with the initiative of a Tonberry that's still holding its knife down: you know it's coming eventually, but you've got plenty of time to grab a coffee in the meantime.",
    ffviiiFull15: "In dreams, in the most literal sense of the word, we find Laguna Loire and his two loyal companions, Kiros Seagill and Ward Zabac, three Galbadian soldiers who get into all sorts of trouble. I'll give them this, though: courage isn't in short supply, throwing themselves off a cliff without batting an eye is basically routine for them. Honestly, though, it was Laguna who threw both of them and himself off, so maybe he's the real madman of the trio.",
    ffviiiFull16: "Those dreams, by the way, are triggered by Ellone: the most mysterious character in the game, a self-proclaimed relative of Squall, and a fugitive around the clock, 24/7.",
    ffviiiFull17: "And let me give a shoutout to those two clowns, Wedge and Biggs, whose last names remain an unsolvable mystery: absolutely likable, full stop.",
    ffviiiFull18: "The story, for its part, starts out as a kind of \"slice of life\" set in a school, military as it may be. I want to dwell for a second on that word, \"military\": remember the characters' ages, right? A story made of training sessions in cramped (and occasionally maze-like) caves, missions to climb ranks, and promotions. That last bit involves *ridiculously easy* tests to rank up as a SeeD, the name of the military unit our characters belong to, earning more money to spend on all the gear or souvenirs you feel like buying. Before gradually turning into a full-blown witch hunt, minus the pitchforks and torches, always with that distinctive old-school Final Fantasy flavor.",
    ffviiiFull19: "I know full well that tonal shifts like this one don't land for everyone, but I loved it precisely because it feels like a natural consequence of the setup: a \"I was supposed to get here from the start, I was just stuck proving how well I can handle a gunblade\" kind of moment.",
    ffviiiFull20: "Speaking of the gunblade! A genius weapon, I'll admit it, a fusion, kind of like the one you get with the Potara earrings in Dragon Ball, between a sword and a gun/rifle, but it's still gorgeous, and in combat its mechanic sells the idea perfectly.",
    ffviiiFull21: "As things move along, the story evolves in completely unexpected ways: Squall, from being the sole owner and user (alongside his rival Seifer) of the gunblade, becomes Commander of Balamb Garden, but not before dragging us poor players through a string of ordeals, including: escaping a maximum-security prison built to be inescapable, with its exits constantly being buried in sand; defeating in combat the true owner of Balamb Garden (NORG, the self-styled Garden Master), who was holding Headmaster Cid Kramer hostage; and passing out from time to time (thanks to Ellone), in places that aren't always pleasant, to relive the missions of Laguna Loire (Squall's father) and his companions, including that one time he got a cramp mid-flirt with a pianist destined to become a singer (and Rinoa's mother).",
    ffviiiFull22: "All of this leads our characters to face Edea in a stunning war against Galbadia and its Garden, through moments that keep you glued to the screen and cutscenes that make you set down the controller (or pull your hands away from mouse and keyboard), before finally arriving, in the future, through time compression, at the gates of Ultimecia's castle, the game's main antagonist, and defeating her.",
    ffviiiFull23: "Beyond that, in that same castle, it's not just her and her guardians, who strip you of both combat and menu functions (like the ability to save), but also Omega Weapon, the strongest optional boss in the game, even stronger than Ultimecia herself; \"stronger\", though, doesn't just mean tougher than the other enemies, it means a genuine challenge to beat, without folding at the last second over one small mistake.",
    ffviiiFull24: "If you don't know what time compression is, well, it's simple: take the past, present, and future, throw them in a blender, hit \"on\", and there you go, you've got \"time compression\".",
    ffviiiFull25: "Every step of the way is paired with events and, above all, fantastic scenes and cutscenes, which on their own, with no other reward attached, would already be worth the effort.",
    ffviiiFull26: "Oh right, did I mention we also go to space?",
    ffviiiFull27: "Speaking of sorceresses and space, let me open a parenthesis: Adel is a man, and you won't convince me otherwise.",
    ffviiiFull28: "There's a legend told in the game about Hyne, a great being who created humans to serve him; when they rebelled and wanted his powers, he granted them, right before fleeing, but only to women, and only a chosen few. So Adel, or however the name is actually spelled, should be a woman. With that chest, though? I refuse to believe it, not even under torture. Judge for yourselves.",
    ffviiiFull29: "Moving on to the combat system, let's get this out of the way first: it doesn't offer much in terms of battle mechanics, but outside of battle it's a whole different story.",
    ffviiiFull30: "The Junction system is absolutely busted: if you know how to use it, you can sow death and destruction through the ranks of your enemies. This ties directly into the enemy level scaling system: FFVIII is supposed to adjust monster difficulty to the party's average level, but in practice, more often than not, the difference is basically unnoticeable.",
    ffviiiFull31: "Either way, whether you're a newcomer or a veteran, studying up on the tools at your disposal will be enough to keep fights smooth, without excessive difficulty.",
    ffviiiFull32: "Should we talk about Limit Breaks? You need your characters half-dead before you can even use them, but they're truly absurd. Yes, it's great watching Squall throw himself at an enemy in a fury (Lion Heart), or fire off a beam of light that pierces the atmosphere (Blasting Zone), or Irvine shooting like he's at a firing range (Shot), but the real star is Selphie with The End. Nothing can resist it, it wipes out anything, ending the fight on the spot; the only exceptions are multi-phase enemies, where it just skips the current phase instead of the whole fight, better than nothing, right? Personally, I could never get it to show up, and still can't: I win the fight manually faster than I ever see it appear in the list; I've probably seen it a handful of times, maybe one or two.",
    ffviiiFull33: "Spells, on the other hand, if it weren't for their role in Junction, boosting your characters' stats (on top of regular leveling), would be completely useless, replaceable even by a dog fired off like a cannonball; and I'm not joking in the slightest: Rinoa's dog can literally do that, and more effectively than half the spell list.",
    ffviiiFull34: "A few spells still earn their keep thanks to being absurdly useful, but there are so few of them you can count them on the fingers of one hand.",
    ffviiiFull35: "On top of that, these spells have to be drawn from enemies or from these strange pink sources that pop out of the ground; yeah, I know, that second option sounds even more absurd than the first, considering the ground could just as easily produce geysers, magma, or who knows what mysterious fumes. Maybe what we're actually \"drawing\", or rather inhaling, are hallucinogenic fumes that trick us into thinking we've unlocked the ability to summon a massive fireball under our opponent's backside (Firaga), or bring our fallen teammates back to life (Full-life).",
    ffviiiFull36: "And then there are the Guardian Forces, entities with wildly different looks, mostly monstrous, except for Shiva, who's hot. Siren holds up decently too, honestly. When summoned at the right moment, these beings can completely flip the outcome of a battle. Honorable mention to Odin, Gilgamesh, and Phoenix, who, go figure, can't be summoned manually and just show up whenever they feel like it; Phoenix is a partial exception, since you can also call her in through an item (the Phoenix Pinion), but the automatic version is still the better option, genuinely capable of saving you from a Game Over. Another honorable mention goes to Ifrit, for no particular reason, it's simply my favorite in this entry of the series.",
    ffviiiFull37: "Back to the Guardian Forces: they can be drawn from bosses or monsters, or found in various secret spots scattered around the world.",
    ffviiiFull38: "And there are plenty of spots like that on the map, both for finding Guardian Forces and for minigames: you'll genuinely lose yourself trying to do it all. Grab a guide if you're going for the platinum.",
    ffviiiFull39: "That said, outside of these hidden locations, actual towns and villages aren't exactly plentiful, which leaves the world feeling a bit sparse. Then again, this was the PlayStation 1 era, so it's understandable.",
    ffviiiFull40: "None of that takes away from how fun it is to roam the map far and wide, first with Balamb Garden in its flying form, then with the Ragnarok. Honestly, in my opinion, Esthar and Deling City still look absolutely stunning, design-wise (not level design-wise).",
    ffviiiFull41: "Finding the hidden Guardian Force locations, the minigames, the Deep Sea Research Center, every last chocobo forest, or heading off to train in places called the \"Island Closest to Hell\" and the \"Island Closest to Heaven,\" home to Ruby Dragons and Malboros: a dream. Actually, wait, Malboros are more of a nightmare with tentacles: let's not go there.",
    ffviiiFull42: "And now, finally, we get to talk about the minigame to end all minigames, the real drug of this entire game: Triple Triad, a collectible card game you play against NPCs (not all of them), on a 3x3 grid, five cards each, with rules that get nastier and nastier depending on the region. This minigame is an absolute blast, and shockingly easy to learn; winning once the rules turn nasty, though, is a whole different matter.",
    ffviiiFull43: "Welcome to the world of Final Fantasy VIII collecting. What's that, Pokémon? Forget it, you'll spend half your total playtime chasing after these cards without even noticing. And if you don't like it, that's on you.",
    ffviiiFull44: "All in all, this is a wonderful game in so many ways.",
    ffviiiFull45: "The graphical quality of the cutscenes still manages to hold up decently against today's games, with jaw-dropping sequences and moments that genuinely get you hyped, or even a little emotional. The music, on the other hand, is truly something else. Genuinely, ridiculously beautiful tracks; honestly, I'm struggling to even write coherently just thinking about how good they are. And then there's Eyes on Me, Julia's song performed by Faye Wong: the first time a Final Fantasy ever dared to put a real popstar inside a video game, talk about \"modern experimentation\" before it was cool. The SeeD exam scene at Dollet is proof of just how high both of those points reach (graphics and music). Personally, watching it, I was already sold, as far as I'm concerned that exam was already passed with flying colors.",
    ffviiiFull46: "Still, one of the most criticized aspects remains its plot holes, bad enough to make even Dark Souls blush; that's never stopped fans from hunting for answers, and sometimes making them up themselves. The ending, meanwhile, is a whole separate conversation: an absolute mess, a genuine acid trip.",
    ffviiiFull47: "One question that remains unresolved to this day, and still keeps countless fans debating, is Ultimecia's true identity: being a sorceress from the future, the theory goes that she could actually be a character already known in the present timeline of Final Fantasy VIII's events.",
    ffviiiFull48: "Over the years, candidates have included Squall, Zell, and Edea herself, each for their own reasons, but all of them promptly and spectacularly ruled out, for obvious reasons. Beyond them, though, there's one theory that's kept people talking for years, covered in full detail on the theories page. And who knows, maybe down the line you'll find a theory of my own on that very same page: nothing's decided yet, and I couldn't say when it'll happen, but let's just say the temptation is there.",
    ffviiiFull49: "Despite all its flaws, like the plot holes I never really feel the weight of, maybe because of how young I was back then (the first time I played it) or maybe just because of how much I can enjoy the game beyond that \"shortcoming,\" this is a video game I never stop carrying in my heart, for the moments that moved me then and still move me now, and for all the romance that's always left me speechless; and I don't mean \"pretty\" scenes like the ones you'd find in FFIX or FFX, two games rich in sentimentality thanks to their respective leading couples, but realistic, sometimes rough, situations.",
    ffviiiFull50: "Like the part where Squall carries a comatose Rinoa on his back and walks the entire way from Fisherman's Horizon to Esthar on foot, along the train tracks; it always leaves me speechless, making me wonder whether I would ever do that too... or maybe, whether there would ever be someone who truly deserves that I would.",
    ffviiiFull51: "Beautiful, always beautiful, this game.",
    ffviiiClosing: "If you ever find yourself playing this wonderful game for the first time, or replaying it for the umpteenth time, give the cactuars a hug from me ❤️.",
    noteLabel: "Personal note: here you can isolate a more subjective reflection, separate from the main body of the text.",
    ffviiHours: "~38 hours (story) / 80-100+ HOURS (100%)",
    ffviiCompleted: "Yes, 100%",
    ffviiDeepMainTitlePart1: "Full review, no filter",
    ffviiDeepMainTitlePart2: "spoilers ahead",
    ffviiDeepGoofyTitlePart1: "Quick review, hot take",
    ffviiDeepGoofyTitlePart2: "limited spoilers",
    ffviiGoofyPlaceholder1: "Placeholder text for the no-holds-barred version: same plot, zero filter on the swearing and the tasteless jokes.",
    ffviiGoofyPlaceholder2: "Second placeholder section: the rest of the goofy version goes here once it's ready.",
    ffviiFull01: "The original version of the seventh entry in this hugely famous saga... Sephiroth... is a truly magnificent video game... Sephiroth... and one that plenty of people, even without ever having played it, will remember for the character of SEPHIROTH!",
    ffviiFull02: "Jokes aside.",
    ffviiFull03: "Final Fantasy VII really does focus a lot on Sephiroth: his life, his dilemmas, his thoughts, his defeat, his rebirth, his plan, the experiments carried out on him, on his mother, on his other mother, on his origin, on... okay, alright, you get the idea.",
    ffviiFull04: "The intro that greets us the moment we hit \"new game\" throws us straight into the situation in Midgar, the game's starting city, along with a flower girl (Aerith Gainsborough, that surname is genuinely a mouthful); and then, all of a sudden, we're jumping off a train to fight two giant Smurfs armed with rifles.",
    ffviiFull05: "In that fight, and right after it, we take control of Cloud Strife, the game's protagonist: an ex-SOLDIER now living the mercenary life. From the very start of the game, in fact, he's already mixed up with a band of rebels, Avalanche, whose goal is to destroy one of the city's reactors. Too bad that the very city they're trying to save, run as it is by a company full of \"Shinra pricks\", also happens to be where they themselves live.",
    ffviiFull06: "Personally, I'm not entirely sure how I feel about Cloud: as a character I like him, but certain moments, tied to his personality issues, make me wish he'd been swapped out for Zack, his counterpart from the FFVII spin-offs (both game and film): same school of hero, but with a sunnier personality, dark-haired instead of blond, and, on top of that, Aerith's ex-boyfriend. Ex because, sadly, he kicked the bucket.",
    ffviiFull07: "The game grabs the player right away, and I was no exception. The moment I found myself fighting a giant robotic scorpion I was pumped, and I was hoping the potions, items I don't even like using, would be enough. Then I found out it was on its last legs.",
    ffviiFull08: "The bit right after, when the bomb gets planted and it's time to run, manages to pump you full of adrenaline and drag you straight into the story's relentless pace, no time to catch your breath. I really appreciated an opening built like that: it kept me glued to the screen right to the end of the sequence, and I wasn't always sure I wanted to help Jessie with her foot stuck between the beams 😈",
    ffviiFull09: "Beyond Cloud, other characters join the story as it goes on, and they do so without any veiled invitations or long conversations needed to talk them into it: Tifa Lockhart, for instance, on whom I could stop right here, since she deserves all the attention in the world. Tifa is the third member to join the group, but remains, in my opinion, quite possibly the most important one after the gravity-defying blond gel-head. And no, before you start thinking about *which* two reasons: I mean her role within the group.",
    ffviiFull10: "Every future party member joins with their own motivations and their own story, a background that gets its own space as the game goes on. Oooh, the Red XIII sequence at Cosmo Canyon, what a moment; I loved it so much. When I first met him in the capsule, as an experiment, back in Midgar, I had no idea I'd end up with a character with such a well-built backstory. The Cave of the Gi wasn't exactly a highlight, I'll admit, but the emotional payoff afterward more than makes up for all those unwanted random encounters. The scene showing Red's father turned to stone, with his story told by Bugenhagen, is genuinely moving. And pretty sad too, it has to be said.",
    ffviiFull11: "Same goes for Barret Wallace's story, the guy who \"shoots from his hand\": I find it beautiful. A father who finds his daughter's real father again, as well as his best friend from the past, who he believed dead. The Bold and the Beautiful, step aside.",
    ffviiFull12: "The story initially centers on Shinra, painted as a genuinely fearsome villain, with headquarters that at first glance look impossible to break into. And yet, to my surprise, we walk right in without any trouble. Sure, we then get caught and thrown in prison, but those are just details: it was pretty obvious we'd end up freed somehow, even if not exactly like that. Yes, because the one who frees us is... Sephiroth. If you get the feeling you've already heard this name a bunch of times in this review, you're not wrong at all.",
    ffviiFull13: "From here on, the focus shifts entirely, go figure, to Sephiroth, the story's main antagonist. Personally, I think his fame is fully deserved: to me, a good villain has to know how to be villainous, and he pulls it off brilliantly, racking up victims, more or less important, throughout the events, past and present: the people of Nibelheim, the Shinra president, and, most importantly, for very obvious reasons, Aerith. Oh yes, Aerith, the flower girl with a secret behind her, will leave the group after being treated like a shish kebab by our long-haired, silver-locked swordsman.",
    ffviiFull14: "She, being an Ancient, was the only one who could genuinely worry Sephiroth, standing in the way of his plans. The scene of her death is always a gut punch for everyone, myself included; but, aside from losing the group's best healer, it didn't actually hurt me all that much. I liked Aerith, but for a number of reasons, I never fully warmed up to her as a character. What really made me mad is losing her right after I'd started training her up. GAME, a little warning would've been nice!",
    ffviiFull15: "All of this, though, is just the seasoning on a long journey that starts in Midgar and crosses through various zones and objectives, including my beloved Gold Saucer (go there, and you'll get why I'm so obsessed with it), all the way to the Northern Crater, where a fully reawakened Sephiroth, courtesy of Cloud (nice job, really nice job), awaits us for our final encounter. I say \"final\" because we'll actually run into him several more times along the way, in physical form or otherwise; instead of fighting us directly, he'll often throw a piece of Jenova at us, the alien monster who also happens to be his \"mother\". Honestly, I couldn't tell you what each individual form of Jenova is supposed to represent: I just know they're all horrifyingly beautiful. The names, though, that's a different story, loaded with meaning for anyone who knows how to read them.",
    ffviiFull16: "There are so many areas you can visit. Beyond the Gold Saucer, Wutai deserves a mention: a Final Fantasy-flavored take on a Japanese ninja village. I loved visiting it, and still do, especially for what it offers: the search for Yuffie Kisaragi, the ninja we're supposed to have already recruited by that point and who, in the meantime, has robbed us of all our materia, plus the whole subplot with Don Corneo (already met back in Midgar) alongside the Shinra agents. Among them, Reno is definitely the most likable; Elena a bit less so.",
    ffviiFull17: "And speaking of Yuffie, that thoroughly likable party-crasher: I honestly never know whether to love her or hate her. What's certain is that when she's picking my pockets clean, you'll understand for yourselves that my reaction is never the positive one, more like wanting to throw a tree at her.",
    ffviiFull18: "Well, it's not like Vincent Valentine is much better either: getting him to climb out of his coffin and follow us always takes a good ten minutes of chatting, during which he keeps stubbornly playing the suspicious loner, only to suddenly perk up the second anyone mentions Sephiroth or Lucrecia. I won't dwell on Lucrecia, or the theme song to The Bold and the Beautiful will genuinely start playing in my head.",
    ffviiFull19: "Plenty of other areas, on top of that, come packed with minigames, even if most of them are concentrated at the Gold Saucer. The minigames are great, genuinely great, but the effort it takes to get a gold chocobo through breeding is a labor, in every sense of the word. Just thinking about having to get one that way makes me want to throw myself at Ruby Weapon before even reaching the game's final stretch; at least there you get an item you can trade in at Kalm for the legendary bird (don't get any ideas).",
    ffviiFull20: "The part that hooked me more than anything else, though, was hunting down ALL the materia. Those magic orbs scattered across the world, the backbone of the combat system, come in truly massive numbers. Thanks to them you can cast spells, use commands, call in summons, boost your stats, get bonuses tied to the other materia they're linked to, or make yourself a coffee. No wait, not that last one. Some of them can only be obtained in genuinely unpleasant ways: like, say, raising a gold chocobo, exactly.",
    ffviiFull21: "Once I'd gotten them all, though, and after spending 472 light-years maxing them out (including their \"children\"), I felt basically unstoppable. Because yes: max them out, and they \"give birth\" to a copy of themselves at level 0 (Yeeeh…). Another route is beating Emerald Weapon, which, through a trade, hands over the Master Materia.",
    ffviiFull22: "Calling the fights against Ruby and Emerald Weapon \"easy\" in this review would be a bit like saying drinking a glass of water is simple: too bad the glass is chipped and razor-sharp along the entire rim, and the water is practically solid, refusing to come out even if you turn the glass upside down. A difficulty setting that would throw even a Skyrim horse off balance.",
    ffviiFull23: "Among the many locations we pass through, whether we like it or not, there's also Rocket Town: a \"frozen in place\" little town whose main attraction is a crooked rocket. Absolutely riveting. If it weren't for the wonderful Cid Highwind, a foul-mouthed pilot who, for a while, even becomes the group's leader in Cloud's place (much to my delight), and who drags us into a fight with Shinra over his dreams, the place would barely be worth mentioning.",
    ffviiFull24: "Do you realize this entire journey exists just so we can go beat up Sephiroth? And the funny thing is, along the way, all sorts of other stuff happens too: Bugenhagen's death (another gut-wrenching moment in the game); the Temple of the Ancients exploding (better not to be inside when that happens); Mideel exploding too, this time because of Ultimate Weapon (the weakest of the trio of optional end-game boss weapons that was flying around the area), so make sure to stock up there before it happens, because afterward, once the town's gone, it won't be possible anymore, for reasons I don't think I need to spell out; and then there's a snowboarding sequence down the mountain, followed by a massive, maze-like area near Icicle Inn, all ice and blizzards, with a mountain to climb where you can quite literally pass out from the cold.",
    ffviiFull25: "Oh right, I almost forgot: Cait Sith also goes BOOM along with the Temple of the Ancients, since he stays inside until the very end; but being a robot cat (and a likable little traitor), he gets instantly replaced by a 2.0 version, identical in every way. A suspicion I'd had from the start, and sure enough, he really was a Shinra spy. Unlike Rufus, the late president's son and heir (a guy who gives himself far too much importance), and Reno, Rude, and Elena, the likable trio we keep running into along the way, who fight us or not depending on how much they feel like following orders, the one actually pulling Cait Sith's strings is Tseng, the boss of Reno and company, who seems to have a genuine soft spot for helping us out.",
    ffviiFull26: "Among the other Shinra staff worth mentioning are Heidegger, a clown (not in the figurative sense) in service to the former president, always the butt of Rufus's jokes (go Rufus!), and Scarlet: now she's genuinely unlikable. I mean it, Sephiroth can step aside, I want her to be the real final boss. If Sephiroth gets to settle things one-on-one with Cloud, swords drawn, I'd want to see Scarlet face off with Tifa, one-on-one, slap fight, exactly like the one that happens on top of the Junon cannon.",
    ffviiFull27: "With that said, all that's left is to talk about the graphics and the music.",
    ffviiFull28: "Let's look each other in the eye, impossible as that literally is: this is a 1997 game, and graphically the characters look like their limbs have tumors, thanks to how blocky and over-polygonal everything is; the cutscenes, obviously, are no exception, save for a rare few. So take my word for it: if you play it, come to terms with this upfront.",
    ffviiFull29: "On the audio side, though, we're talking a completely different level: I have absolutely nothing to complain about here, it's stunning. The most beloved track, both for me and for audiences in general, is without question One-Winged Angel, the theme for the final battle with Sephiroth. But it's gorgeous, what more do you want me to say?",
    ffviiFull30: "If you've never played it, and probably never will (at least not the original version), go dig up the soundtrack, especially Sephiroth's theme, and you'll understand exactly what I mean.",
    ffviiClosing: "Getting a bit more serious now, setting aside the issues that come with the game's age, FFVII shaped my childhood, and to this day remains a game I carry in my heart, for so many reasons and for the countless hours it filled my days with. Living, truly living, through Cloud and his companions' journey, through both victories and losses, kept me glued to the screen back then and would still keep me glued to it today, unable to pull away until the credits rolled, leaving me with nothing but a smile on my face.",
    ffixHours: "~38 hours (story) / 80-100+ HOURS (100%)",
    ffixCompleted: "Yes",
    ffixDeepTitle1: "The plot, in detail",
    ffixDeep1: "Placeholder text for the real analysis: key events, twists, specific writing choices.",
    ffixDeepTitle2: "Characters and design choices",
    ffixDeep2: "Second section: what you'd have changed, what surprised you, what didn't work for you.",
    ffixDeepTitle3: "The ending",
    ffixDeep3: "Paragraph explicitly dedicated to the ending, isolated with its own heading.",
    shadyQuickNarrativeTitle: "Story & World",
    shadyQuickNarrativeText: "The game follows a little girl and her shadow, confined in an institution, working through memories and emotions represented symbolically through the environments they move through. The narrative, brought to life partly through Hannah Murray's voice acting (known for Game of Thrones and Skins), is praised for the dreamlike, emotional atmosphere it builds, though part of the critical response found it at times too cryptic in how it reveals its own story.",
    shadyQuickGameplayTitle: "Gameplay",
    shadyQuickGameplayText: "A puzzle-platformer in which you control two characters at once: the girl, moving through a three-dimensional world, and her shadow, bound to a two-dimensional plane cast across walls and surfaces. The two layers of gameplay interact through light and shadow (for instance, moving objects to change the shadow's projected size), giving rise to original environmental puzzles widely regarded as the game's strongest asset.",
    shadyQuickTechTitle: "Technical & Artistic Side",
    shadyQuickTechText: "Developed by French indie studio Douze Dixièmes, in their first-ever release, and published by Focus Home Interactive in December 2020, the game stands out above all for its art direction, built almost entirely around the contrast between light and shadow, used not just as a gameplay mechanic but as a genuine narrative language. The theme of the shadow as a hidden part of the self, a fairly explicit nod to the Jungian psychological concept of the \"shadow\", runs through both the game's aesthetic and its story, giving the title a distinctive visual identity despite its modest production scale. That artistic care earned the game an Independent Games Festival nomination in the design and visual art categories.",
    shadyHours: "4-6 hours",
    shadyReleaseDate: "December 10, 2020",
    shadyCompleted: "Yes, 100%",
    shadyDeepTitle1: "The plot, in detail",
    shadyDeep1: "Placeholder text for the real analysis: key events, twists, specific writing choices.",
    shadyDeepTitle2: "Characters and design choices",
    shadyDeep2: "Second section: what you'd have changed, what surprised you, what didn't work for you.",
    shadyDeepTitle3: "The ending",
    shadyDeep3: "Paragraph explicitly dedicated to the ending, isolated with its own heading.",
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

// Stessa playlist usata per la voce "Final Fantasy VIII" in Il Filo
// Nascosto (data-storie-teorie.js) — stesso gioco, stessi brani.
const FFVIII_TRACKS = [
  { src: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Final%20Fantasy%208%20Liberi%20Fatali.mp3", title: "Liberi Fatali", game: "Final Fantasy VIII" },
  { src: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Final%20Fantasy%208%20Eyes%20on%20Me.mp3", title: "Eyes on Me", game: "Final Fantasy VIII" },
  { src: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Final%20Fantasy%20VIII%20Balamb%20Garden.mp3", title: "Balamb Garden", game: "Final Fantasy VIII" },
  { src: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Final%20Fantasy%20VIII%20The%20Landing.mp3", title: "The Landing", game: "Final Fantasy VIII" },
  { src: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Final%20Fantasy%20VIII%20Force%20Your%20Way.mp3", title: "Force Your Way", game: "Final Fantasy VIII" },
  { src: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Final%20Fantasy%20VIII%20Premonition.mp3", title: "Premonition", game: "Final Fantasy VIII" },
  { src: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Final%20Fantasy%208%20The%20Man%20with%20the%20Machine%20Gun.mp3", title: "The Man with the Machine Gun", game: "Final Fantasy VIII" }
];
// Playlist di Final Fantasy VII: vuota per ora, nessun brano
// assegnato ancora — il controllo musica resta funzionante ma senza
// niente da riprodurre finche' non arrivano i brani veri.
const FFVII_TRACKS = [];
// Playlist di Final Fantasy IX: vuota per ora, come FFVII.
const FFIX_TRACKS = [];
const REVIEW_TRACKS = { ffvii: FFVII_TRACKS, ffviii: FFVIII_TRACKS, ffix: FFIX_TRACKS };

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
  return window.matchMedia("(hover:none) and (pointer:coarse)").matches;
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
  el.gateSideToggle.textContent = isLeft ? t("gateSideToggleOn") : t("gateSideToggleOff");

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
    // Naviga davvero verso index.html: senza un piccolo ritardo il
    // browser cambia pagina prima che il suono del tap (gia' gestito
    // dal listener generico piu' in basso) faccia in tempo a partire.
    ev.preventDefault();
    setTimeout(() => { window.location.href = el.indexLink.href; }, 550);
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
setupRevealButton("Ffix");
setupRevealButton("Shady");
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
    el.gateSideToggle.textContent = goingLeft ? t("gateSideToggleOn") : t("gateSideToggleOff");
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
    if(el.bgMusic.duration){
      el.trackProgressFill.style.width = (el.bgMusic.currentTime / el.bgMusic.duration * 100) + "%";
    }
  });
  el.bgMusic.addEventListener("loadedmetadata", () => {
    el.trackProgressFill.style.width = "0%";
  });
  el.trackSkipBtn.addEventListener("click", advanceTrack);
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

// Standby/scheda non in primo piano: la musica va sempre in pausa
// (non solo mobile — vale anche cambiando scheda su desktop).
// Niente ripresa automatica al ritorno.
let musicWasPlayingBeforeHidden = false;
document.addEventListener("visibilitychange", () => {
  if(!el.bgMusic) return;
  if(document.hidden){
    musicWasPlayingBeforeHidden = !el.bgMusic.paused;
    el.bgMusic.pause();
  } else if(musicWasPlayingBeforeHidden){
    el.bgMusic.play().catch(() => {});
  }
});

paintStaticText();

// Mobile: la tabella genere e' sempre presente come primo pannello
// del carosello (vedi sopra) — ma all'apertura della pagina deve
// mostrarsi lo stage (home), non la tabella. Nessuna animazione,
// e' il punto di partenza vero e proprio, non una transizione.
if(isMobileNav() && el.layout){
  el.layout.scrollLeft = window.innerWidth;
}

// ---------------------------------------------------------
// Suono UI al tap, stesso comportamento delle altre pagine. Lo skip
// del brano (.track-skip) è l'unica eccezione voluta, escluso
// esplicitamente.
// ---------------------------------------------------------
const TAP_SOUND_URL = "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Tap.mp3";
document.addEventListener("click", (e) => {
  const target = e.target.closest("button, a.kofi-link, a.discord-link, a.index-link, a.review-tile");
  if(target && !target.classList.contains("track-skip")){
    const tap = new Audio(TAP_SOUND_URL);
    tap.volume = isMobileNav() ? 0.3 : 0.1;
    tap.play().catch(() => { /* bloccato finché non c'è un gesto utente; il click stesso lo è, quindi è solo un fallback */ });
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

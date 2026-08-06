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
    factReleaseOriginal: "Uscita originale",
    factCompleted: "Completato",
    ffviiiCompleted: "Sì, 100%",
    quickReadLabel: "Recensione veloce, sguardo d'insieme · spoiler minimi o assenti",
    ffviiiQuickNarrativeTitle: "Narrativa e Mondo",
    ffviiiQuickNarrativeText: "La storia si basa principalmente sui due personaggi principali. Presenta dei veri e propri buchi di trama in alcune parti, capaci di far impallidire persino un Dark Souls, ma questo non ha fermato i fan dal cercare risposte, e talvolta dal crearsele da soli. Il gioco ha comunque una storia davvero bella, con cambi di registro non indifferenti, e un'ambientazione fantasy affascinante, anche se scarna come quella dei videogiochi dell'epoca PlayStation 1.",
    ffviiiQuickGameplayTitle: "Gameplay",
    ffviiiQuickGameplayText: "Un gioco di ruolo a turni alla giapponese in vecchio stile, dove le caratterizzazioni più peculiari non si trovano durante le battaglie ma fuori, nella pianificazione di esse. Il Junction è il sistema adottato da questo titolo, spesso amato, altre volte odiato dai giocatori, ma comunque rotto: in grado di trasformare i personaggi in veri e propri boss che camminano, se usato in modo professionale. Il resto del gameplay è rappresentato da un'esplorazione ben gestita e godibile.",
    ffviiiQuickTechTitle: "Comparto Tecnico e Artistico",
    ffviiiQuickTechText: "WOW! Non si può aggiungere molto altro. Per l'epoca, la grafica e le musiche di Final Fantasy VIII erano qualcosa di ineguagliabile. Oggi, ovviamente, non è più così, almeno per quanto riguarda la grafica, ma le cutscene rimangono ancora affascinanti e capaci di mettere in dubbio la loro provenienza dalla PlayStation 1. Sì, la remastered ha ritoccato poco e niente, giusto qualche sprite dei personaggi e in minima parte l'ambientazione.",
    thresholdText: "Attenzione: la recensione completa può contenere spoiler pesanti, finale incluso.",
    thresholdBtn: "Leggi recensione completa",
    ffviiiDeepMainTitle: "Recensione completa, senza filtri · spoiler presenti",
    ffviiiTheoryLinkLabel: "Vai alla teoria su Il Filo Nascosto",
    ffviiiClosing: "Se un giorno vi capiterà di giocare per la prima volta, o di rigiocare per l'ennesima, a questo titolo stupendo, abbracciate i kyactus da parte mia <3.",
    ffviiiFull01: "Parto subito con una confessione: Final Fantasy VIII è il mio videogioco preferito in assoluto, a prescindere dai suoi difetti e dalle critiche che ha ricevuto. Questo non significa che eviterò di parlare dei suoi aspetti fallaci, anche se la versione \"completa\" di queste recensioni lascia volutamente spazio a valutazioni soggettive.",
    ffviiiFull02: "Il gioco si apre subito con un filmato capace di far venire la pelle d'oca, il tipo di introduzione che ti pianta in testa l'idea di avere davanti qualcosa di magnifico ancora prima di aver toccato un tasto, indipendentemente da come poi lo giudicherai. Io personalmente adoro quell'introduzione, e ogni volta che la rivedo ne resto ancora estasiato.",
    ffviiiFull03: "Squall Leonhart, il protagonista, all'inizio è il tipo di personaggio capace di far perdere la pazienza tanto ai giocatori quanto ad alcuni suoi stessi compagni, colpa di un carattere piuttosto ostico, a meno che il tuo non gli somigli; nel qual caso, te lo sconsiglio vivamente. Forse all'epoca gli somigliavo un po' anch'io, almeno nell'essere chiuso e a tratti solitario o lunatico, ed è per questo che riuscivo a tollerarlo. Non a caso, i fan lo hanno spesso accostato, per scherzo, all'ideologia e alla moda emo, complice anche il periodo di uscita del gioco.",
    ffviiiFull04: "Con il procedere della trama, però, quel carattere chiuso comincia ad aprirsi, merito soprattutto di Rinoa Heartilly. Certe volte questa apertura fa emergere una fragilità che può non piacere a tutti, ma in cambio regala al pubblico alcune scene romantiche davvero mozzafiato. Da replicare nella vita reale, sia chiaro, non tutte: la parte nello spazio, ad esempio, la trovo un pochino pericolosa.",
    ffviiiFull05: "Gli altri personaggi giocabili finiscono un po' per eclissarsi dietro i due protagonisti, dimenticati dalla trama non troppo tempo dopo essere stati presentati, relegati in secondo piano o costretti a rimanere lì, con le loro evoluzioni comprensibili solo studiando i minimi dettagli.",
    ffviiiFull06: "Personalmente, non l'ho mai considerato un grosso problema. È una caratteristica reale, oltretutto molto criticata dai fan, ma credo comunque che sia stata gestita abbastanza bene da lasciar intravedere, anche in questi personaggi secondari, delle evoluzioni che meritano di non essere sottovalutate.",
    ffviiiFull07: "Un caso su cui mi voglio soffermare è quello di Selphie Tilmitt: normalmente una ragazza allegra ed estroversa, che dopo la visita al Garden di Trabia, distrutto da un attacco missilistico, sparisce per un po' dalla scena con la scusa di doversi riposare. Il gioco non lo mostra esplicitamente, ma non è affatto improbabile pensare che quell'evento abbia avuto delle vere ripercussioni su di lei, al punto da spingerla a chiudersi da sola in camera, magari per sfogarsi o piangere.",
    ffviiiFull08: "Anche Zell Dincht cambia parecchio: da \"gallinaccio\" (come lo chiama Seifer Almasy) che smania per prendere il comando, a membro che impara a restare al proprio posto, ottenendo, per un periodo di tempo piccolissimo, un ruolo di responsabilità tutt'altro che da poco (capogruppo, nientemeno), proprio nel momento in cui ha finalmente accettato di maturare su quell'aspetto di sé.",
    ffviiiFull09: "Lo stesso vale per Quistis Trepe e Irvine Kinneas, che non fanno eccezione.",
    ffviiiFull10: "Insomma, personaggi che non vanno semplicemente comandati, ma capiti.",
    ffviiiFull11: "La storia, dal canto suo, parte come una specie di \"slice of life\" ambientato in una scuola, per quanto militare, fatta di allenamenti in caverne anguste, missioni per salire di grado e promozioni, per poi trasformarsi, gradualmente, in una vera e propria caccia alle streghe, sempre con lo stile tipico di Final Fantasy.",
    ffviiiFull12: "So bene che cambi di registro come questo non piacciono a tutti, ma io l'ho amato proprio perché sembra una conseguenza naturale delle premesse: un \"dovevo arrivarci fin dall'inizio, solo che prima ero relegato a dimostrare quanto so maneggiare bene una gunblade\".",
    ffviiiFull13: "E a proposito di gunblade! Un'arma geniale, lo ammetto, una fusione, un po' come quella che si ottiene con i potara di Dragon Ball, tra una spada e una pistola/fucile, ma resta comunque bellissima, e anche in combattimento la sua meccanica rende benissimo l'idea.",
    ffviiiFull14: "Man mano che si avanza, la trama si evolve in modo del tutto inaspettato: Squall, da semplice possessore e unico utilizzatore (insieme al rivale, il già citato Seifer) della gunblade, diventa Comandante del Garden di Balamb, ma non prima di aver trascinato noi poveri giocatori attraverso diverse peripezie, tra cui: fuggire da una prigione di massima sicurezza pensata per essere inviolabile, con le uscite continuamente sotterrate; sconfiggere in combattimento il vero proprietario del Garden di Balamb (il supremo Norg), che teneva sotto scacco il preside Cid Kramer; e svenire di tanto in tanto, in luoghi non sempre piacevoli, per rivivere le missioni di Laguna Loire (padre di Squall) e dei suoi compagni (Kiros Seagul e Ward Zabak) come soldati di Galbadia, tra cui quella volta in cui gli venne un crampo proprio durante un flirt con una pianista destinata a diventare cantante (e madre di Rinoa).",
    ffviiiFull15: "Tutto questo porta i nostri personaggi ad affrontare Edea Kramer in una guerra stupenda contro Galbadia e il suo Garden, per poi arrivare, nel futuro, tramite la compressione temporale, fino alle porte del castello di Artemisia, l'antagonista principale del gioco, e sconfiggerla.",
    ffviiiFull16: "Ogni tappa di questo percorso è accompagnata da eventi e, soprattutto, scene e cutscene fantastiche, che da sole, senza bisogno di altre ricompense, varrebbero già la fatica.",
    ffviiiFull17: "Ah sì, l'avevo detto che si finisce anche nello spazio?",
    ffviiiFull18: "Parlando di streghe, apro una parentesi: Adele è un uomo, e non mi convincerete del contrario.",
    ffviiiFull19: "C'è una leggenda, raccontata nel gioco, su Hyne, un grande essere che creò gli umani per farsi servire; quando questi si ribellarono e vollero i suoi poteri, lui glieli concesse, ma solo alle donne, e solo ad alcune prescelte. Quindi Adel, o Adele, o comunque si chiami nella versione originale, dovrebbe essere una donna. Con quel petto, però? Giudicate voi stessi.",
    ffviiiFull20: "Passando al sistema di combattimento, va detto subito che in battaglia non offre grandi particolarità, ma fuori dal campo di battaglia è tutta un'altra storia.",
    ffviiiFull21: "Il sistema di Junction è letteralmente sbroccato: se sai come usarlo, puoi seminare morte e distruzione tra le schiere dei tuoi nemici.",
    ffviiiFull22: "Le magie, invece, se non fosse per il loro impiego nel Junction per potenziare le statistiche dei personaggi (oltre alla crescita per livello), sarebbero completamente inutili, rimpiazzabili persino da un cane lanciato a mo' di cannone; e non sto scherzando, il cane di Rinoa (una femmina di nome Angelo) può letteralmente fare questo.",
    ffviiiFull23: "Qualche magia si salva comunque grazie alla sua utilità fuori scala, ma sono così poche da contarle sulla punta delle dita di una mano sola.",
    ffviiiFull24: "E poi ci sono i Guardian Force, entità evocabili dall'aspetto più vario, per lo più mostruoso, con l'eccezione di Shiva, che invece è bona. Anche Siren, dai, se la cava discretamente. Se evocati al momento giusto, questi esseri riscrivono completamente le sorti di uno scontro. Menzione d'onore per Odino, Gilgamesh e Fenice, che, indovinate un po', non si possono evocare manualmente e compaiono quando vogliono loro; la Fenice fa parzialmente eccezione, perché è possibile richiamarla anche tramite un oggetto (la Piuma di Fenice), ma la sua versione automatica resta la scelta migliore, capace com'è di salvarti davvero dal Game Over. Un'altra citazione ad honorem va a Ifrid (così si chiama solo nella versione italiana; nell'originale, e in tutti gli altri Final Fantasy, è Ifrit, con la T), perché... nessun motivo specifico, è semplicemente il mio preferito.",
    ffviiiFull25: "Tornando ai Guardian Force: possono essere assimilati da boss o mostri, oppure trovati in vari luoghi segreti sparsi per il mondo.",
    ffviiiFull26: "E di posti così, sulla mappa, ce ne sono davvero tanti, sia per trovare i Guardian Force che per i minigiochi: rischiate di perdervi nel tentativo di scoprirli tutti, sul serio. Se puntate al platino, procuratevi una guida.",
    ffviiiFull27: "Detto questo, escludendo questi luoghi segreti, le città e i villaggi \"normali\" non sono poi molti, e questo lascia il mondo di gioco un po' scarno. D'altronde parliamo dell'epoca PlayStation 1, quindi si può capire.",
    ffviiiFull28: "Il che non toglie nulla al piacere di girare in lungo e in largo per la mappa, prima con il Garden di Balamb in versione volante, poi con la Lagunarock.",
    ffviiiFull29: "Scoprire i rifugi segreti dei Guardian Force, i minigiochi, la base di ricerca sottomarina, tutti i boschi dei chocobo, oppure andare ad allenarsi in luoghi chiamati \"isola più vicina all'inferno\" e \"isola più vicina al paradiso\", tra RubRum Dragon e Molboro: un sogno. Anzi no, aspetta, i Molboro sono più un incubo, ma lasciamo perdere.",
    ffviiiFull30: "E poi, finalmente, arrivo al minigioco per eccellenza, la vera droga di questo titolo: il triple triad, un gioco di carte collezionabili giocabile contro gli npc (non tutti), su una griglia 3x3, cinque carte a testa, e regole che si fanno via via più cattive a seconda della località. Un minigioco davvero spassoso, oltretutto sorprendentemente facile da imparare; un po' meno facile è vincere, quando le regole cominciano a incattivirsi.",
    ffviiiFull31: "Benvenuti nel collezionismo di Final Fantasy VIII. Come dite, i Pokémon? Lasciate stare, passerete dietro a queste carte metà delle ore del vostro gameplay totale, senza nemmeno accorgervene. E se non vi piace, sono problemi vostri.",
    ffviiiFull32: "Insomma, questo videogioco è meraviglioso sotto moltissimi punti di vista, ma uno degli aspetti più criticati resta quello dei buchi di trama, capaci di far impallidire persino un Dark Souls; questo, però, non ha mai fermato i fan dal cercare risposte, e talvolta dal crearsele da soli.",
    ffviiiFull33: "Una delle questioni rimaste irrisolte ancora oggi, e che continua a far discutere tantissimi appassionati, riguarda la vera identità di Artemisia: essendo una strega proveniente dal futuro, si pensa possa in realtà coincidere con un personaggio già noto nell'epoca in cui si svolgono gli eventi di Final Fantasy VIII.",
    ffviiiFull34: "Tra i candidati proposti nel tempo ci sono Squall, Zell e la stessa Edea, ciascuno per motivazioni diverse, ma tutti puntualmente e clamorosamente smentiti, per ovvie ragioni. Ma oltre a loro, ce n'è una che ha fatto discutere per anni, raccontata nel dettaglio nella pagina delle teorie. E chissà, magari in futuro su quella stessa pagina troverete anche una teoria scritta di mio pugno: non è detto, e non so ancora quando succederà, ma diciamo che la tentazione c'è.",
    noteLabel: "Nota personale: qui puoi isolare una riflessione più soggettiva, staccata dal corpo principale del testo.",
    ffviiHours: "~38 ore (storia) / 80-100+ ORE (completo)",
    ffviiCompleted: "Sì, 100%",
    ffviiDeepTitle1: "La trama, nel dettaglio",
    ffviiDeep1: "Testo segnaposto per l'analisi vera: eventi chiave, colpi di scena, scelte di scrittura specifiche.",
    ffviiDeepTitle2: "Personaggi e scelte di design",
    ffviiDeep2: "Seconda sezione: cosa avresti cambiato, cosa ti ha sorpreso, cosa non ha funzionato secondo te.",
    ffviiDeepTitle3: "Il finale",
    ffviiDeep3: "Paragrafo dedicato esplicitamente al finale, isolato con il suo titolo.",
    ffixHours: "~38 ore (storia) / 80-100+ ORE (completo)",
    ffixCompleted: "Sì",
    ffixDeepTitle1: "La trama, nel dettaglio",
    ffixDeep1: "Testo segnaposto per l'analisi vera: eventi chiave, colpi di scena, scelte di scrittura specifiche.",
    ffixDeepTitle2: "Personaggi e scelte di design",
    ffixDeep2: "Seconda sezione: cosa avresti cambiato, cosa ti ha sorpreso, cosa non ha funzionato secondo te.",
    ffixDeepTitle3: "Il finale",
    ffixDeep3: "Paragrafo dedicato esplicitamente al finale, isolato con il suo titolo."
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
    factReleaseOriginal: "Original release",
    factCompleted: "Completed",
    ffviiiCompleted: "Yes, 100%",
    quickReadLabel: "Quick review, overview · minimal or no spoilers",
    ffviiiQuickNarrativeTitle: "Story & World",
    ffviiiQuickNarrativeText: "The story focuses mainly on the two lead characters. It has genuine plot holes in places, bad enough to make even Dark Souls blush, but that hasn't stopped fans from hunting for answers, and sometimes making them up themselves. Still, the game tells a genuinely beautiful story, with some notable shifts in tone, and a fantasy setting that's compelling even if as sparse as you'd expect from a PlayStation 1-era title.",
    ffviiiQuickGameplayTitle: "Gameplay",
    ffviiiQuickGameplayText: "An old-school Japanese turn-based RPG, where the most distinctive choices happen not during battles but outside them, in planning for them. Junction is the system this title runs on, loved by some players and hated by others, but broken either way: capable of turning characters into walking bosses if used skillfully. The rest of the gameplay comes down to well-handled, enjoyable exploration.",
    ffviiiQuickTechTitle: "Technical & Artistic Side",
    ffviiiQuickTechText: "WOW! There's not much to add. For its time, Final Fantasy VIII's visuals and music were simply unmatched. That's obviously no longer true today, at least on the graphics side, but the cutscenes are still striking, enough to make you question whether they actually came from a PlayStation 1. Yes, the remaster barely touched anything, just a few character sprites and, to a lesser extent, the environments.",
    thresholdText: "Warning: the full review may contain heavy spoilers, including the ending.",
    thresholdBtn: "Read the full review",
    ffviiiDeepMainTitle: "Full review, no filter · spoilers ahead",
    ffviiiTheoryLinkLabel: "Go to the theory on The Hidden Thread",
    ffviiiClosing: "If you ever find yourself playing this wonderful game for the first time, or replaying it for the umpteenth time, give the cactuars a hug from me <3.",
    ffviiiFull01: "I'll start with a confession right away: Final Fantasy VIII is my all-time favorite video game, regardless of its flaws and the criticism it's received. That said, I won't shy away from talking about its shaky sides either, even though this \"full\" version of the review leaves plenty of room for subjective takes.",
    ffviiiFull02: "The game opens with an intro capable of giving you goosebumps, the kind that plants the idea in your head that you're about to experience something magnificent before you've even touched a button, no matter how you'll end up judging it later. I personally love that intro, and I'm still left in awe every single time I watch it.",
    ffviiiFull03: "Squall Leonhart, the protagonist, starts out as the kind of character who can make both players and some of his own party members lose their patience, thanks to a pretty difficult personality, unless yours happens to resemble his, in which case I'd strongly advise against it. Maybe back then I was a bit similar to him too, at least in being closed off and occasionally solitary or moody, and that's exactly why I could put up with him. It's no surprise fans have jokingly compared him to emo culture and fashion over the years, helped along by the game's release period.",
    ffviiiFull04: "As the story moves forward, though, that closed-off personality starts opening up, mostly thanks to Rinoa Heartilly. Sometimes this shift reveals a vulnerability that not everyone will love, but in return it gives the audience some genuinely breathtaking romantic scenes. Worth recreating in real life, sure, though not all of them: the one in space, for instance, I find a little risky.",
    ffviiiFull05: "The rest of the playable cast tends to get overshadowed by the two leads, forgotten by the plot not too long after being introduced, pushed into the background or left in a spot where you have to dig into the tiniest details just to understand how they evolve.",
    ffviiiFull06: "Personally, I've never seen this as a major issue. It's a real trait of the game, and one that gets a lot of criticism from fans, but I still think it was handled well enough to let you catch glimpses of meaningful growth even in these side characters.",
    ffviiiFull07: "One case worth dwelling on is Selphie Tilmitt: normally a cheerful, outgoing girl, who after visiting Trabia Garden, destroyed by a missile strike, disappears from the scene for a while under the excuse of needing to rest. The game never shows it outright, but it's not hard to imagine that the event left real scars on her, enough to send her off alone to her room, maybe to cry it out or just process it.",
    ffviiiFull08: "Zell Dincht changes quite a bit too: from \"chicken-wuss\" (as Seifer Almasy calls him) itching to take charge, to a member who learns to stay in his lane, earning, for a very short stretch of time, a role of responsibility that's anything but minor (squad leader, no less), right at the moment he finally accepts to grow past that side of himself.",
    ffviiiFull09: "The same goes for Quistis Trepe and Irvine Kinneas, who are no exception.",
    ffviiiFull10: "In short, these are characters who need to be understood, not just ordered around.",
    ffviiiFull11: "The story itself starts out as a kind of \"slice of life\" set in a school, military as it may be, made of training sessions in cramped caves, missions to climb ranks, and promotions, before gradually turning into a full-blown witch hunt, always with that distinctive Final Fantasy flavor.",
    ffviiiFull12: "I know full well that tonal shifts like this one don't land for everyone, but I loved it precisely because it feels like a natural consequence of the setup: a \"I was supposed to get here from the start, I was just stuck proving how well I can handle a gunblade\" kind of moment.",
    ffviiiFull13: "Speaking of the gunblade! A genius weapon, I'll admit it, a fusion, kind of like the one you get with the Potara earrings in Dragon Ball, between a sword and a gun/rifle, but it's still gorgeous, and in combat its mechanic sells the idea perfectly.",
    ffviiiFull14: "As things move along, the story evolves in completely unexpected ways: Squall, from being the sole owner and user (alongside his rival, the aforementioned Seifer) of the gunblade, becomes Commander of Balamb Garden, but not before dragging us poor players through a string of ordeals, including: escaping a maximum-security prison built to be inescapable, with its exits constantly being buried in sand; defeating in combat the true owner of Balamb Garden (the almighty NORG), who was holding Headmaster Cid Kramer hostage; and passing out from time to time, in places that aren't always pleasant, to relive the missions of Laguna Loire (Squall's father) and his companions (Kiros Seagill and Ward Zabac) as Galbadian soldiers, including that one time he got a cramp mid-flirt with a pianist destined to become a singer (and Rinoa's mother).",
    ffviiiFull15: "All of this leads our characters to face Edea Kramer in a stunning war against Galbadia and its Garden, before finally arriving, in the future, through time compression, at the gates of Ultimecia's castle, the game's main antagonist, and defeating her.",
    ffviiiFull16: "Every step of the way is paired with events and, above all, fantastic scenes and cutscenes, which on their own, with no other reward attached, would already be worth the effort.",
    ffviiiFull17: "Oh right, did I mention we also go to space?",
    ffviiiFull18: "Speaking of sorceresses, let me open a parenthesis: Adel is a man, and you won't convince me otherwise.",
    ffviiiFull19: "There's a legend told in the game about Hyne, a great being who created humans to serve him; when they rebelled and wanted his powers, he granted them, but only to women, and only a chosen few. So Adel, or however the name is actually spelled, should be a woman. With that chest, though? Judge for yourselves.",
    ffviiiFull20: "Moving on to the combat system, let's get this out of the way first: it doesn't offer much in terms of battle mechanics, but outside of battle it's a whole different story.",
    ffviiiFull21: "The Junction system is absolutely busted: if you know how to use it, you can sow death and destruction through the ranks of your enemies.",
    ffviiiFull22: "Spells, on the other hand, if it weren't for their role in Junction, boosting your characters' stats (on top of regular leveling), would be completely useless, replaceable even by a dog launched like a cannonball; and I'm not joking, Rinoa's dog (a female named Angelo) can literally do that.",
    ffviiiFull23: "A few spells still earn their keep thanks to being absurdly useful, but there are so few of them you can count them on the fingers of one hand.",
    ffviiiFull24: "And then there are the Guardian Forces, entities with wildly different looks, mostly monstrous, except for Shiva, who's hot. Siren holds up decently too, honestly. When summoned at the right moment, these beings can completely flip the outcome of a battle. Honorable mention to Odin, Gilgamesh, and Phoenix, who, go figure, can't be summoned manually and just show up whenever they feel like it; Phoenix is a partial exception, since you can also call her in through an item, the Phoenix Pinion, but the automatic version is still the better option, genuinely capable of saving you from a Game Over. Another honorable mention goes to Ifrit, for no particular reason, it's simply my favorite.",
    ffviiiFull25: "Back to the Guardian Forces: they can be drawn from bosses or monsters, or found in various secret spots scattered around the world.",
    ffviiiFull26: "And there are plenty of spots like that on the map, both for finding Guardian Forces and for minigames: you'll genuinely lose yourself trying to do it all. Grab a guide if you're going for the platinum.",
    ffviiiFull27: "That said, outside of these hidden locations, actual towns and villages aren't exactly plentiful, which leaves the world feeling a bit sparse. Then again, this was the PlayStation 1 era, so it's understandable.",
    ffviiiFull28: "None of that takes away from how fun it is to roam the map far and wide, first with Balamb Garden in its flying form, then with the Ragnarok.",
    ffviiiFull29: "Finding the hidden Guardian Force locations, the minigames, discovering the Deep Sea Research Center, every last chocobo forest, or heading off to train in places called the \"Island Closest to Hell\" and the \"Island Closest to Heaven,\" home to Ruby Dragons and Malboros: a dream. Actually, wait, Malboros are more of a nightmare, but let's not go there.",
    ffviiiFull30: "And now, finally, I get to talk about the minigame to end all minigames, the real drug of this entire game: Triple Triad, a collectible card game you play against NPCs (not all of them), on a 3x3 grid, five cards each, with rules that get nastier and nastier depending on the region. This minigame is an absolute blast, and shockingly easy to learn; winning once the rules turn nasty, though, is a whole different matter.",
    ffviiiFull31: "Welcome to the world of Final Fantasy VIII collecting. What's that, Pokémon? Forget it, you'll spend half your total playtime chasing after these cards without even noticing. And if you don't like it, that's on you.",
    ffviiiFull32: "All in all, this is a wonderful game in so many ways, but one of its most criticized aspects remains its plot holes, bad enough to make even Dark Souls blush; still, that's never stopped fans from hunting for answers, and sometimes making them up themselves.",
    ffviiiFull33: "One question that remains unresolved to this day, and still keeps countless fans debating, is Ultimecia's true identity: being a sorceress from the future, the theory goes that she could actually be a character already known in the present timeline of Final Fantasy VIII's events.",
    ffviiiFull34: "Over the years, candidates have included Squall, Zell, and Edea herself, each for their own reasons, but all of them promptly and spectacularly ruled out, for obvious reasons. Beyond them, though, there's one theory that's kept people talking for years, covered in full detail on the theories page. And who knows, maybe down the line you'll find a theory of my own on that very same page: nothing's decided yet, and I couldn't say when it'll happen, but let's just say the temptation is there.",
    noteLabel: "Personal note: here you can isolate a more subjective reflection, separate from the main body of the text.",
    ffviiHours: "~38 hours (story) / 80-100+ HOURS (100%)",
    ffviiCompleted: "Yes, 100%",
    ffviiDeepTitle1: "The plot, in detail",
    ffviiDeep1: "Placeholder text for the real analysis: key events, twists, specific writing choices.",
    ffviiDeepTitle2: "Characters and design choices",
    ffviiDeep2: "Second section: what you'd have changed, what surprised you, what didn't work for you.",
    ffviiDeepTitle3: "The ending",
    ffviiDeep3: "Paragraph explicitly dedicated to the ending, isolated with its own heading.",
    ffixHours: "~38 hours (story) / 80-100+ HOURS (100%)",
    ffixCompleted: "Yes",
    ffixDeepTitle1: "The plot, in detail",
    ffixDeep1: "Placeholder text for the real analysis: key events, twists, specific writing choices.",
    ffixDeepTitle2: "Characters and design choices",
    ffixDeep2: "Second section: what you'd have changed, what surprised you, what didn't work for you.",
    ffixDeepTitle3: "The ending",
    ffixDeep3: "Paragraph explicitly dedicated to the ending, isolated with its own heading."
  }
};

const state = { lang: "it", activeSide: "right", view: "landing", musicOn: false, trackIndex: 0 };

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
  langSwitch: document.getElementById("langSwitch"),
  indexLink: document.getElementById("indexLink"),
  gateSideToggle: document.getElementById("gateSideToggle"),
  layout: document.querySelector(".layout"),
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
  musicControl: document.getElementById("musicControl"),
  musicSlotFfvii: document.getElementById("musicSlotFfvii"),
  musicSlotFfviii: document.getElementById("musicSlotFfviii"),
  musicSlotFfix: document.getElementById("musicSlotFfix"),
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
  ffix: el.reviewFfix
};

// Slot dove va spostato il controllo musica condiviso quando quella
// recensione e' quella aperta.
const MUSIC_SLOTS = {
  ffvii: el.musicSlotFfvii,
  ffviii: el.musicSlotFfviii,
  ffix: el.musicSlotFfix
};

// Colore proprio di ogni recensione (usato per bordi/icone di
// Ko-fi/Discord in vista voce, e per la voce corrispondente nella
// tabella genere su mobile). FFVIII riprende lo stesso rosso della
// sua voce "teoria" su Il Filo Nascosto (accentColor in
// data-storie-teorie.js), cosi' lo stesso gioco ha lo stesso colore
// su entrambe le pagine. Le altre, per ora, restano sul ciano di
// riserva (nessuna voce qui sotto).
const REVIEW_ACCENTS = {
  ffviii: "#ff3b30"
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

function renderMobileGenreBar(){
  if(!el.mobileGenreBar) return;
  el.mobileGenreBar.innerHTML = "";
  Object.keys(GENRES).forEach(genreName => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "mobile-genre-btn";
    btn.textContent = genreName;
    btn.addEventListener("click", () => openGenreTable(genreName));
    el.mobileGenreBar.appendChild(btn);
  });
}

// Popola la tabella e la rende presente nel carosello. Nessuno
// scrollTo necessario per "entrarci": diventando il primo figlio
// vero di .layout, e lo scrollLeft essendo gia' a 0 (dove si stava
// guardando lo stage), la si vede gia' subito da sola.
function openGenreTable(genreName){
  const items = GENRES[genreName];
  if(!items || !el.mobileGenreTable) return;
  el.mobileGenreListTitle.textContent = genreName;
  el.mobileGenreListItems.innerHTML = "";
  items.forEach(item => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.type = "button";
    btn.textContent = item.title;
    if(REVIEW_ACCENTS[item.id]) btn.style.setProperty("--item-accent", REVIEW_ACCENTS[item.id]);
    btn.addEventListener("click", () => {
      openReview(item.id);
      // Scivola dalla tabella verso lo stage, dove la recensione e'
      // appena apparsa.
      if(el.layout) el.layout.scrollTo({ left: window.innerWidth, behavior: "smooth" });
    });
    li.appendChild(btn);
    el.mobileGenreListItems.appendChild(li);
  });
  document.documentElement.classList.add("mobile-table-open");
  // Rete di sicurezza oltre a overflow-anchor:none in CSS: forza la
  // posizione invece di sperare che resti a 0 da sola una volta che
  // la tabella diventa il primo figlio del carosello.
  if(el.layout) el.layout.scrollLeft = 0;
}

// Rilevamento "sono tornato sullo stage": quando lo scroll
// orizzontale si assesta sulla posizione dello stage (non piu' sulla
// tabella), la tabella ha fatto il suo dovere — la si toglie dal
// carosello, cosi' non e' piu' raggiungibile scorrendo a sinistra
// dalla home finche' non si riseleziona un genere.
let tableCollapseTimer = null;
if(el.layout){
  el.layout.addEventListener("scroll", () => {
    if(!document.documentElement.classList.contains("mobile-table-open")) return;
    clearTimeout(tableCollapseTimer);
    tableCollapseTimer = setTimeout(() => {
      if(el.layout.scrollLeft >= window.innerWidth - 10){
        document.documentElement.classList.remove("mobile-table-open");
        el.layout.scrollLeft = 0;
      }
    }, 150);
  });
}

renderMobileGenreBar();

function t(key){ return STRINGS[state.lang][key]; }

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

function crossfadeTo(showEl){
  const hideEl = currentCenterPanel();
  if(hideEl === showEl) return;

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

function openReview(id){
  const entryEl = REVIEWS[id];
  if(!entryEl) return;
  closeGate(el.gateToggleRight, el.reviewsGateRight);
  closeGate(el.gateToggleLeft, el.reviewsGateLeft);
  crossfadeTo(entryEl);
  state.view = id;
  state.trackIndex = 0; // si riparte dal primo brano della nuova playlist
  el.body.classList.add("is-review-open");
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
}

function backToLanding(){
  crossfadeTo(el.landingPanel);
  state.view = "landing";
  el.body.classList.remove("is-review-open");
  el.body.style.removeProperty("--item-accent");
  // Solo mobile: se si stava guardando la tabella o una recensione,
  // torna a mostrare lo stage (home) nel carosello, e la tabella (se
  // era presente) torna assente — va ritoccato un genere per
  // riaprirla.
  if(el.layout) el.layout.scrollLeft = 0;
  document.documentElement.classList.remove("mobile-table-open");
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
setupRevealButton("Ffvii");
setupRevealButton("Ffix");
setupRevealButton("");

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

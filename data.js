// ============================================================
// L'ARCHIVIO — dati dei fascicoli (franchise) e delle linee temporali
// ============================================================

const GAMES = {

  "ace-combat": {
    id: "ace-combat",
    listTitle: { it: "Ace Combat", en: "Ace Combat" },
    eyebrow: { it: "Fascicolo", en: "Case File" },
    title: { it: "Ace Combat", en: "Ace Combat" },
    blurb: {
      it: "Nei cieli di un mondo immaginario chiamato Strangereal, piloti da caccia si contendono il controllo di nazioni in guerra. Ogni conflitto nasconde ambizioni politiche, alleanze tradite e superarmi capaci di ribaltare il destino di interi continenti. Al centro di tutto, un asso silenzioso che vola per chi non ha voce.",
      en: "In the skies of a fictional world called Strangereal, fighter pilots fight for control of nations at war. Every conflict hides political ambition, betrayed alliances, and superweapons capable of reshaping the fate of entire continents. At the center of it all, a silent ace who flies for those who have no voice."
    },
    palette: ["#1a3a5c", "#c9c9c9", "#8b0000"],
    accentColor: "#1a3a5c",
    tracks: [],
    avatar: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Ace%20Combat%20Avatar.jpg",
    banner: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Ace%20Combat%20Banner.jpg",
    watermark: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Ace%20Combat%20Filigrana.jpg",
    watermarkOpacity: 0.18,
    universes: [
      {
        id: "vera-strangereal",
        name: { it: "La Vera Strangereal", en: "True Strangereal" },
        span: { it: "1995 – 2040", en: "1995 – 2040" },
        entries: [
          { id: "air-combat", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "1995 (Insurrezione delle Isole Skully)", yearEn: "1995 (Skully Islands Insurrection)", releaseYear: "1995", releaseYearEn: "1995",
            title: { it: "Air Combat", en: "Air Combat" },
            image: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Air%20Combat.jpg",
            synopsis: {
              it: "Una squadriglia di piloti mercenari viene ingaggiata per liberare le Isole Skully, cadute nelle mani di un'organizzazione terroristica che ne ha preso il controllo. Capitolo che apre la serie, ambientato retroattivamente nella stessa Terra di Strangereal.",
              en: "A squadron of mercenary pilots is hired to liberate the Skully Islands, seized by a terrorist organization that has taken control of them. The game that opened the series, retroactively set on the same Strangereal Earth."
            }
          },
          { id: "ace-zero", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "1995 (Guerra di Belka)", releaseYear: "2006", releaseYearEn: "2006",
            title: { it: "Ace Combat Zero: The Belkan War", en: "Ace Combat Zero: The Belkan War" },
            image: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Ace%20Combat%20Zero%20The%20Belkan%20War.jpg",
            synopsis: {
              it: "Il pilota mercenario Cipher combatte nella Guerra di Belka, conflitto scatenato da anni di crisi economica interna che hanno spinto il principato a invadere i propri ex territori per riappropriarsi di risorse perdute, affiancato dal compagno Pixy. Nel finale, incapace di reggere l'avanzata della coalizione alleata, Belka detona sette testate nucleari sul proprio stesso territorio pur di non cedere: un evento la cui ombra si allungherà su tutti i conflitti successivi della continuità.",
              en: "Mercenary pilot Cipher fights in the Belkan War, a conflict sparked by years of internal economic crisis that pushed the principality to invade its former territories to reclaim lost resources, alongside his wingman Pixy. In the finale, unable to withstand the allied coalition's advance, Belka detonates seven nuclear warheads on its own territory rather than surrender — an event whose shadow looms over every subsequent conflict in the continuity."
            }
          },
          { id: "ace-2", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "1996 (Colpo di Stato Useano)", yearEn: "1996 (Usean Coup d'État)", releaseYear: "1997", releaseYearEn: "1997",
            title: { it: "Ace Combat 2", en: "Ace Combat 2" },
            image: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Ace%20Combat%202.jpg",
            synopsis: {
              it: "Il mercenario Phoenix, alla guida dello Squadrone Scarface, viene ingaggiato dalle Forze Alleate Useane per fermare l'avanzata delle Forze Ribelli durante il colpo di stato che ha sconvolto il continente di Usea, ribaltando le sorti del conflitto fino alla vittoria finale a Fortress Intolerance.",
              en: "Mercenary pilot Phoenix, leading Scarface Squadron, is hired by the Usean Allied Forces to halt the advance of the Usean Rebel Forces during the coup d'état that has thrown the continent of Usea into chaos, turning the tide of the conflict all the way to the final victory at Fortress Intolerance."
            }
          },
          { id: "impatto-ulisse", type: "STORIA", typeEn: "STORY", year: "3–20 luglio 1999", yearEn: "July 3–20, 1999",
            noAvatar: true,
            title: { it: "L'Impatto di Ulisse", en: "The Ulysses Impact" },
            synopsis: {
              it: "Individuato quattro anni prima e confermato in rotta di collisione con la Terra, l'asteroide Ulisse attraversa il limite di Roche e si frammenta: nonostante i tentativi di intercettazione, i frammenti superstiti si abbattono sul continente useano nell'arco di poche settimane, uccidendo oltre mezzo milione di persone nei primi giorni e riducendo intere regioni in macerie. Milioni di sfollati cercano rifugio nei paesi vicini, mentre le nazioni più colpite scivolano verso il collasso economico e quelle risparmiate dall'impatto ne escono paradossalmente rafforzate. La crisi umanitaria e gli squilibri di potere che ne derivano ridisegneranno gli equilibri geopolitici per i due decenni successivi.",
              en: "First detected four years earlier and confirmed to be on a collision course with Earth, the asteroid Ulysses crosses the Roche limit and breaks apart: despite interception attempts, the surviving fragments rain down on the Usean continent over the following weeks, killing over half a million people in the first days alone and reducing entire regions to rubble. Millions of displaced people seek refuge in neighbouring countries, while the hardest-hit nations slide toward economic collapse and those spared by the impact emerge paradoxically stronger. The resulting humanitarian crisis and power imbalances will reshape the world's geopolitics for the next two decades."
            }
          },
          { id: "ace-04", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "2003 – 2005 (Guerra Continentale)", releaseYear: "2001", releaseYearEn: "2001",
            title: { it: "Ace Combat 04: Shattered Skies", en: "Ace Combat 04: Shattered Skies" },
            image: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Ace%20Combat%2004%20Shattered%20Skies.jpg",
            synopsis: {
              it: "Il pilota Mobius 1 affronta la Guerra Continentale tra Usea ed Erusea, culminata nell'attivazione della Stonehenge, una batteria di cannoni anti-aerei mai vista prima capace di abbattere qualunque velivolo in volo. Il gioco che ha coniato ufficialmente il nome Strangereal e definito il tono della saga da lì in avanti.",
              en: "Pilot Mobius 1 fights in the Continental War between Usea and Erusea, culminating in the activation of Stonehenge, an unprecedented anti-air cannon battery capable of shooting down any aircraft in flight. The game that officially coined the name Strangereal and defined the saga's tone from that point on."
            }
          },
          { id: "distensione-osea-yuktobania", type: "STORIA", typeEn: "STORY", year: "2005 – 2010", yearEn: "2005 – 2010",
            noAvatar: true,
            title: { it: "La Distensione di Osea e Yuktobania", en: "The Osean-Yuktobanian Détente" },
            synopsis: {
              it: "Nel dopoguerra seguito alla Guerra Continentale, Osea e Yuktobania — un tempo alleate, poi rivali sempre più diffidenti — avviano un percorso di riavvicinamento diplomatico senza precedenti: riducono gli arsenali militari, smantellano parte delle proprie armi di distruzione di massa e collaborano persino a progetti di sviluppo spaziale congiunti. Per alcuni anni la distensione tiene, e le due nazioni sembrano avviate verso una pace duratura. È proprio questa fiducia reciproca, faticosamente ricostruita, a rendere entrambi i paesi vulnerabili quando qualcuno deciderà di infrangerla con un attacco a sorpresa.",
              en: "In the aftermath of the Continental War, Osea and Yuktobania — once allies, then increasingly wary rivals — embark on an unprecedented diplomatic rapprochement: they scale back their military arsenals, dismantle part of their weapons of mass destruction, and even collaborate on joint space development projects. For a few years the détente holds, and the two nations appear headed toward a lasting peace. It is precisely this painstakingly rebuilt trust that leaves both countries vulnerable when someone decides to shatter it with a surprise attack."
            }
          },
          { id: "ace-5", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "2010 (Guerra del Circum-Pacifico)", releaseYear: "2004", releaseYearEn: "2004",
            title: { it: "Ace Combat 5: The Unsung War", en: "Ace Combat 5: The Unsung War" },
            image: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Ace%20Combat%205%20The%20Unsung%20War.jpg",
            synopsis: {
              it: "Il pilota Blaze e lo Squadrone Wardog affrontano la Guerra del Circum-Pacifico tra Osea e Yuktobania, innescata da un attacco a sorpresa alle installazioni oseane. Nel corso del conflitto scoprono che dietro l'attacco si cela un gruppo di superstiti nazionalisti belkani, intenzionato a far ripiombare in guerra le due nazioni per vendicare la sconfitta subita anni prima. Insieme ai piloti di entrambi gli schieramenti contrari al conflitto, Wardog espone il complotto e sconfigge i cospiratori, ponendo fine alle ostilità.",
              en: "Pilot Blaze and the Wardog Squadron fight in the Circum-Pacific War between Osea and Yuktobania, sparked by a surprise attack on Osean installations. Over the course of the conflict they discover the attack was orchestrated by a group of Belkan nationalist survivors, determined to plunge the two nations back into war to avenge their defeat years earlier. Together with pilots from both sides opposed to the conflict, Wardog exposes the conspiracy and defeats the plotters, bringing the hostilities to an end."
            }
          },
          { id: "collasso-estovacchia", type: "STORIA", typeEn: "STORY", year: "1999 – 2015", yearEn: "1999 – 2015",
            noAvatar: true,
            title: { it: "Il Collasso dell'Estovacchia", en: "The Collapse of Estovakia" },
            synopsis: {
              it: "Colpita duramente dall'impatto di Ulisse, l'Estovacchia vede la propria economia crollare e le infrastrutture ridotte allo stremo, mentre la vicina Emmeria, investita dalla stessa crisi ma uscitane pressoché indenne, si rimette rapidamente in piedi. Il divario tra le due nazioni alimenta un risentimento profondo: in Estovacchia scoppia una guerra civile da cui emerge una giunta militare, ribattezzata dalla popolazione 'I Generali', che consolida il potere promettendo di restituire al paese la forza perduta. Negli anni successivi la giunta riarma segretamente le forze armate, decisa a risolvere con la forza ciò che la diplomazia non può più permettersi.",
              en: "Hit hard by the Ulysses impact, Estovakia sees its economy collapse and its infrastructure pushed to breaking point, while neighbouring Emmeria, struck by the same crisis but left largely unscathed, recovers quickly. The gap between the two nations fuels deep resentment: a civil war breaks out in Estovakia, from which a military junta emerges — nicknamed 'The Generals' by the population — consolidating power by promising to restore the country's lost strength. Over the following years the junta secretly rearms its military, determined to settle by force what diplomacy can no longer afford."
            }
          },
          { id: "ace-6", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "2015 (Guerra Emmeria-Estovacchia)", releaseYear: "2007", releaseYearEn: "2007",
            title: { it: "Ace Combat 6: Fires of Liberation", en: "Ace Combat 6: Fires of Liberation" },
            image: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Ace%20Combat%206%20Fires%20of%20Liberation.jpg",
            synopsis: {
              it: "Il pilota Talisman, a capo dello Squadrone Garuda, difende l'Emmeria da un'invasione a sorpresa dell'Estovacchia, che occupa in poche ore la capitale Gracemeria costringendo l'esercito emmeriano alla ritirata. Insieme al gregario Shamrock, guida il riorganizzarsi delle forze superstiti sull'Isola di Khesed e la successiva controffensiva che libera il paese città dopo città, fino alla riconquista della capitale. La disfatta sul campo provoca il collasso del regime militare estovacchiano, che firma la resa ponendo fine al conflitto.",
              en: "Pilot Talisman, leader of Garuda Team, defends Emmeria from a surprise invasion by Estovakia, which occupies the capital Gracemeria within hours and forces the Emmerian army to retreat. Together with his wingman Shamrock, he leads the regrouping of surviving forces on Khesed Island and the subsequent counteroffensive that liberates the country city by city, culminating in the recapture of the capital. The defeat on the battlefield triggers the collapse of Estovakia's military regime, which signs a surrender that brings the conflict to an end."
            }
          },
          { id: "ascesa-erusea", type: "STORIA", typeEn: "STORY", year: "2005 – 2019", yearEn: "2005 – 2019",
            noAvatar: true,
            title: { it: "L'Ascesa di Erusea", en: "The Rise of Erusea" },
            synopsis: {
              it: "Nel dopoguerra seguito alla Guerra Continentale, Erusea si riprende con sorprendente rapidità dalla sconfitta, ampliando i propri confini fino a inglobare diversi piccoli stati vicini, tra cui un antico ducato la cui famiglia reale viene spodestata dall'espansione. All'interno del rinnovato apparato militare prende forma un ambizioso programma di ricerca, volto a sviluppare droni da combattimento autonomi capaci di sostituire i piloti umani in battaglia. Parallelamente la comunità internazionale completa un ascensore spaziale pensato per rispondere a future minacce dallo spazio. Le tensioni territoriali e la sfiducia reciproca accumulate in questi anni sfoceranno, nel 2019, in un nuovo conflitto su scala continentale.",
              en: "In the aftermath of the Continental War, Erusea recovers from defeat with surprising speed, expanding its borders to absorb several small neighbouring states, including an ancient duchy whose royal family is deposed by the expansion. Within the renewed military apparatus, an ambitious research programme takes shape, aimed at developing autonomous combat drones capable of replacing human pilots in battle. Meanwhile the international community completes a space elevator designed to counter future threats from space. The territorial tensions and mutual distrust accumulated over these years will erupt, in 2019, into a new continent-wide conflict."
            }
          },
          { id: "ace-7", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "2019 (Guerra del Faro)", releaseYear: "2019", releaseYearEn: "2019",
            title: { it: "Ace Combat 7: Skies Unknown", en: "Ace Combat 7: Skies Unknown" },
            image: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Ace%20Combat%207%20Skies%20Unknown.jpg",
            synopsis: {
              it: "Il pilota Trigger, incarcerato ingiustamente in un'unità penale dopo essere stato incolpato di un crimine mai commesso, viene reintegrato come pilota di riserva quando droni da combattimento autonomi e due enormi Arsenal Bird catturate ribaltano l'equilibrio della guerra a sfavore di Osea. Al comando del Long Range Strategic Strike Group, Trigger risale il fronte fino a riconquistare la capitale eruseana, affrontando più volte in duello il leggendario asso Mihaly A. Shilage, mentre una fazione interna a Erusea si ribella ai vertici radicali che hanno voluto la guerra. Si chiude con la resa firmata a Expo City.",
              en: "Pilot Trigger, wrongfully imprisoned in a penal unit after being framed for a crime he never committed, is reinstated as a reserve pilot when autonomous combat drones and two massive captured Arsenal Birds tip the war decisively against Osea. Commanding the Long Range Strategic Strike Group, Trigger pushes the front back and recaptures the Erusean capital, repeatedly dueling the legendary ace Mihaly A. Shilage, while a faction within Erusea rebels against the radical leadership that wanted the war. It closes with a surrender signed at Expo City."
            }
          },
          { id: "ace-8", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "2029 (in uscita)", yearEn: "2029 (upcoming)", releaseYear: "2026", releaseYearEn: "2026",
            title: { it: "Ace Combat 8: Wings of Theve", en: "Ace Combat 8: Wings of Theve" },
            // Sinossi rimossa di proposito (28/08): il gioco non e'
            // ancora uscito (2 ottobre 2026), qualunque riassunto ora
            // sarebbe basato solo su anteprime/hands-on pre-lancio.
            // imagePending fa comparire un riquadro rosso al posto
            // dell'avatar lungo la linea, con la data di uscita al
            // suo interno - promemoria visivo per tornarci ad ottobre
            // con sinossi vera E immagine.
            imagePending: true,
            releaseDateShort: { it: "2 ottobre 2026", en: "October 2, 2026" }
          },
          { id: "ace-3-electrosphere", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "Gennaio – luglio 2040 (Guerra Intercorporativa)", yearEn: "January – July 2040 (Intercorporate War)", releaseYear: "1999", releaseYearEn: "1999",
            title: { it: "Ace Combat 3: Electrosphere", en: "Ace Combat 3: Electrosphere" },
            image: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Ace%20Combat%203%20Electrosphere.jpg",
            synopsis: {
              it: "Nel continente useano, ormai governato da megacorporazioni al posto degli stati nazionali, il pilota Nemo presta servizio per l'organizzazione di pace UPEO mentre la rivalità tra la Neucom (erede delle industrie belkane) e la General Resource degenera in un conflitto aperto, la Guerra Intercorporativa, orchestrato nell'ombra dal gruppo transumanista Ouroboros attraverso l'Electrosphere, la rete globale che permette di caricarvi la propria coscienza.",
              en: "On the Usean continent, now ruled by megacorporations in place of nation-states, pilot Nemo serves the peacekeeping organization UPEO as the rivalry between Neucom (heir to the Belkan industries) and General Resource escalates into open conflict, the Intercorporate War, secretly orchestrated by the transhumanist group Ouroboros through the Electrosphere, the global network that allows one's consciousness to be uploaded to it."
            }
          }
        ]
      }
    ]
  },

  aitd: {
    id: "aitd",
    listTitle: { it: "Alone in the Dark", en: "Alone in the Dark" },
    eyebrow: { it: "Fascicolo", en: "Case File" },
    title: { it: "Alone in the Dark", en: "Alone in the Dark" },
    avatar: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Alone%20in%20the%20Dark%20Avatar.jpg",
    banner: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Alone%20in%20the%20Dark%20Banner.jpg",
    watermark: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Alone%20in%20the%20Dark%20Filigrana.jpg",
    watermarkOpacity: 0.2,
    palette: ["#8a6d3f", "#6b3fa0", "#d98e3f"],
    accentColor: "#6b3fa0",
    tracks: [
      { src: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Alone%20in%20the%20Dark%20In%20the%20Eye%20of%20the%20Storm.mp3", title: "In the Eye of the Storm", game: "Alone in the Dark (1992)" },
      { src: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Alone%20in%20the%20Dark%20The%20Fa%C3%A7ade.mp3", title: "The Façade", game: "Alone in the Dark (2008)" },
      { src: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Alone%20in%20the%20Dark%20The%20Light%20Carrier%20Test.mp3", title: "The Light Carrier Test", game: "Alone in the Dark (2008)" }
    ],
    blurb: {
      it: "Un investigatore privato e chi lo accompagna si addentrano in dimore isolate dove la realtà si piega e l'orrore prende forma dall'ombra. Dietro ogni mistero da risolvere si nasconde qualcosa di più antico della ragione, capace di manipolare mente e percezione. La sopravvivenza dipende tanto dal coraggio quanto.",
      en: "A private investigator and those who join them venture into isolated estates where reality bends and horror takes shape from the shadows. Behind every mystery lies something older than reason itself, capable of twisting mind and perception alike. Survival depends as much on courage as on staying sane."
    },
    universes: [
      {
        id: "infogrames",
        name: { it: "Universo Infogrames", en: "Infogrames Universe" },
        span: { it: "1924 – 1925", en: "1924 – 1925" },
        entries: [
          {
            id: "aitd-1",
            type: "VIDEOGIOCO",
            typeEn: "VIDEOGAME",
            year: "1924",
            releaseYear: "1992",
            releaseYearEn: "1992",
            title: { it: "Alone in the Dark", en: "Alone in the Dark" },
            image: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Alone%20in%20the%20Dark.jpg",
            synopsis: {
              it: "Jeremy Hartwood, pittore e proprietario di Villa Derceto in Louisiana, si è impiccato nella mansarda. Le circostanze sono sospette. Il giocatore sceglie tra due protagonisti: Edward Carnby, investigatore privato ingaggiato da un antiquario per recuperare un pianoforte nella soffitta, o Emily Hartwood, nipote di Jeremy, convinta che il pianoforte nasconda una lettera con la spiegazione del suicidio. Entrambi si ritrovano intrappolati nella villa quando le porte si chiudono da sole. Esplorando la casa e le caverne sottostanti, Carnby/Emily scopre che Derceto fu costruita nel 1818 dal pirata occulto Ezechiel Pregzt, travestito sotto l'identità di Elijah Pickford. Pregzt aveva accumulato ricchezze e immortalità attraverso riti oscuri nelle caverne sotto la villa. Durante la Guerra di Secessione Americana, dopo un tentativo di avvelenare una pattuglia di soldati unionisti, Pregzt fu sparato dal loro capitano e Derceto venne data alle fiamme, ma il suo spirito sopravvisse, intrappolato nel cadavere sepolto all'interno di un albero nelle caverne sottostanti. Jeremy Hartwood si era suicidato deliberatamente per evitare di essere posseduto da Pregzt come nuovo ospite. Il protagonista trova il Talismano, un medaglione di pietra inciso con un pentacolo che inibisce il potere degli Dei Antichi, scende nelle caverne, lo piazza sulla tomba di Pregzt per spezzarne il rituale di reincarnazione e lancia una lampada accesa sull'albero: Pregzt brucia e la villa è liberata. Il gioco fu tra i primi due titoli a utilizzare personaggi poligonali in tempo reale su sfondi prerenderizzati, una soluzione tecnica che avrebbe influenzato profondamente l'intero genere survival horror negli anni successivi.",
              en: "Jeremy Hartwood, a painter and owner of Derceto Manor in Louisiana, has hanged himself in the attic. The circumstances are suspicious. The player chooses between two protagonists: Edward Carnby, a private investigator hired by an antique dealer to retrieve a piano from the loft, or Emily Hartwood, Jeremy's niece, convinced that the piano hides a letter explaining her uncle's suicide. Both end up trapped inside the manor when the doors slam shut behind them. Exploring the house and the caverns beneath it, Carnby/Emily discovers that Derceto was built in 1818 by the occultist pirate Ezechiel Pregzt, operating under the false identity of Elijah Pickford. Pregzt had amassed wealth and immortality through dark rituals performed in the caverns below the manor. During the American Civil War, after attempting to poison a Union patrol, Pregzt was shot by their captain and Derceto was set ablaze, but his spirit survived, trapped within a corpse buried inside a tree in the caverns below. Jeremy Hartwood took his own life deliberately to avoid being possessed by Pregzt as a new host. The protagonist finds the Talisman, a stone medallion engraved with a pentagram that inhibits the power of the Ancient Gods, descends into the caverns, places it on Pregzt's tomb to break his reincarnation ritual, and hurls a lit lantern at the tree: Pregzt burns, and the manor is freed. The game was among the first two titles to use real-time polygonal characters over pre-rendered backgrounds, a technical solution that would deeply influence the entire survival horror genre in the years that followed."
            }
          },
          {
            id: "jack-in-the-dark",
            type: "VIDEOGIOCO",
            typeEn: "VIDEOGAME",
            year: "Halloween 1924",
            releaseYear: "Natale 1993",
            releaseYearEn: "Christmas 1993",
            title: { it: "Jack in the Dark", en: "Jack in the Dark" },
            image: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Jack%20in%20the%20Dark.jpg",
            synopsis: {
              it: "Piccolo gioco promozionale sviluppato durante la produzione di Alone in the Dark 2, distribuito gratuitamente a Natale 1993. Protagonista: Grace Saunders, la bambina che verrà rapita in AitD2. La notte di Halloween, Grace è in giro per il dolcetto o scherzetto quando bussa alla porta di un negozio di giocattoli: la porta si apre e poi si chiude alle sue spalle, intrappolandola. I giocattoli prendono vita sotto il comando del Jack-in-the-Box, un pupazzo demoniaco creato a immagine di Occhio Bendato Jack, villain di AitD2, che tiene Babbo Natale prigioniero con l'intenzione di distruggere il Natale. Grace scopre da un libro nel negozio che solo una strega può sconfiggerlo: vestita da strega per Halloween, lo distrae con una caramella e gli punta uno specchio in faccia. Jack, inorridito dalla propria bruttezza riflessa, si rinchiude nella sua scatola. Le versioni CD-ROM di AitD1 e AitD2 includevano Jack in the Dark come bonus.",
              en: "A small promotional game developed during the production of Alone in the Dark 2, distributed free of charge at Christmas 1993. Protagonist: Grace Saunders, the young girl who will be kidnapped in AitD2. On Halloween night, Grace is out trick-or-treating when she knocks on the door of a toy shop: the door opens and then slams shut behind her, trapping her inside. The toys come to life under the command of the Jack-in-the-Box, a demonic puppet modelled after One-Eyed Jack, the villain of AitD2, who is holding Santa Claus prisoner in a plot to destroy Christmas. Grace discovers from a book in the shop that only a witch can defeat him: dressed as one for Halloween, she distracts him with a candy stick and holds up a mirror. Jack, horrified by his own ugliness reflected back at him, retreats into his box. The CD-ROM versions of AitD1 and AitD2 included Jack in the Dark as a bonus."
            }
          },
          {
            id: "aitd-2",
            type: "VIDEOGIOCO",
            typeEn: "VIDEOGAME",
            year: "Dicembre 1924",
            yearEn: "December 1924",
            releaseYear: "1993",
            releaseYearEn: "1993",
            title: { it: "Alone in the Dark 2", en: "Alone in the Dark 2" },
            image: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Alone%20in%20the%20Dark%202.jpg",
            synopsis: {
              it: "Tre mesi dopo Derceto, Carnby è diventato noto alla stampa come \"Supernatural Private Eye\". Il suo mentore Ted Stryker aveva tentato di infiltrarsi in Hell's Kitchen, la villa del famigerato gangster Occhio Bendato Jack, per salvare Grace Saunders, una bambina rapita la vigilia di Natale. Viene trovato assassinato all'interno. Carnby riprende l'indagine. Scopre che Jack e la sua banda sono pirati del XV secolo resi immortali dalla strega voodoo Elisabeth Jarret, che Jack aveva liberato dalla sua prigionia a bordo della nave fantasma Flying Dutchman. In cambio della libertà, Jarret aveva conferito l'immortalità all'equipaggio, ma il patto impone un prezzo: ogni cento anni occorre rapire una bambina innocente su cui riversare il peso della vecchiaia tramite un rituale voodoo, preservando così la giovinezza dei pirati. Il gioco alterna Carnby, intrappolato in una gabbia dopo essere caduto in un tranello di Jack, a sezioni giocabili con Grace, che si muove furtiva nella villa e sulla nave per liberarlo. Grace usa il Loa Staff per far ritorcere l'incantesimo di Jarret su se stessa: la strega viene consumata dalla propria magia. Carnby raggiunge il ponte della nave e sconfigge Jack con la spada maledetta del capitano Nichols, l'unica arma capace di ucciderlo. Con l'ultimo respiro Jack spara i cannoni della nave, facendo crollare grotte e villa nell'oceano: Carnby e Grace fuggono a bordo di una scialuppa. Rispetto al capitolo originale il tono vira verso l'azione: il vodù resta sullo sfondo, ma i veri antagonisti sono contrabbandieri e pirati armati, in un'atmosfera più action che puramente horror.",
              en: "Three months after Derceto, Carnby has become known to the press as the \"Supernatural Private Eye\". His mentor Ted Stryker had attempted to infiltrate Hell's Kitchen, the mansion of the infamous gangster One-Eyed Jack, to rescue Grace Saunders, a young girl kidnapped on Christmas Eve. He is found murdered inside. Carnby takes up the investigation. He discovers that Jack and his gang are 15th-century pirates made immortal by the voodoo witch Elisabeth Jarret, whom Jack had freed from her imprisonment aboard the ghost ship Flying Dutchman. In exchange for her freedom, Jarret granted the crew immortality, but the pact comes at a price: every hundred years, an innocent young girl must be kidnapped and used in a voodoo ritual to transfer the weight of old age onto her body, keeping the pirates young. The game alternates between Carnby, trapped in a cage after falling into Jack's trap, and playable sections as Grace, who sneaks through the mansion and onto the ship to free him. Grace uses the Loa Staff to turn Jarret's spell back on herself: the witch is consumed by her own magic. Carnby reaches the ship's deck and defeats Jack with the cursed sword of Captain Nichols, the only weapon capable of killing him. With his dying breath, Jack fires the ship's cannons, bringing the caves and the mansion crashing into the ocean: Carnby and Grace escape aboard a rowboat. Compared to the original chapter, the tone shifts toward action: voodoo remains in the background, but the true antagonists are armed smugglers and pirates, in an atmosphere more action-driven than purely horror."
            }
          },
          {
            id: "aitd-3",
            type: "VIDEOGIOCO",
            typeEn: "VIDEOGAME",
            year: "1925",
            releaseYear: "1994",
            releaseYearEn: "1994",
            title: { it: "Alone in the Dark 3", en: "Alone in the Dark 3" },
            image: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Alone%20in%20the%20Dark%203.jpg",
            synopsis: {
              it: "Un anno dopo Hell's Kitchen, Emily Hartwood, che dopo l'avventura di Derceto ha intrapreso una carriera a Hollywood, è al lavoro come attrice in un western girato nella città fantasma di Slaughter Gulch, nel deserto del Mojave. L'intera troupe scompare misteriosamente. Carnby viene chiamato a indagare. Slaughter Gulch fu fondata da Jed Stone, un fuorilegge spietato che costruì la città su terre sacre Navajo e la governò con un esercito privato di assassini. Stone e i suoi uomini furono uccisi in un'esplosione di metano durante una rivolta dei minatori nel 1865, ma la città restò abbandonata sopra un filone di minerale radioattivo nelle miniere sottostanti. Stone sarebbe il figlio, mai riconosciuto, di Elisabeth Jarret ed Ezechiel Pregzt, i villain dei due episodi precedenti, sebbene la cosa non sia confermata con certezza. Da fantasma, Stone sta portando a compimento il piano interrotto dalla morte: usare il minerale radioattivo per far muovere la faglia di San Andreas e scatenare l'apocalisse sulla costa ovest. Tiene Emily prigioniera come merce di scambio e attira Carnby con una finta trattativa, per poi tradirlo e ucciderlo. Carnby si risveglia però mentre viene sepolto vivo dallo sceriffo fantasma Dawson, riemerge dalla tomba e riprende l'indagine. Grazie ai poteri dello sciamano Navajo che lo guida nell'ombra, ottiene la capacità di trasformarsi temporaneamente in puma per muoversi nella città inosservato. Sconfigge Stone definitivamente e fugge con Emily a bordo di un locomotore abbandonato. Fu l'ultimo capitolo a utilizzare lo stesso motore grafico e a proseguire direttamente la continuità dei primi due giochi, prima che la serie venisse reinventata da zero nel 2001.",
              en: "One year after Hell's Kitchen, Emily Hartwood, who, following the Derceto incident, has embarked on a Hollywood career, is working as an actress on a Western being filmed in the ghost town of Slaughter Gulch, in the Mojave Desert. The entire crew vanishes without a trace. Carnby is called in to investigate. Slaughter Gulch was founded by Jed Stone, a ruthless outlaw who built the town on sacred Navajo land and ruled it with a private army of killers. Stone and his men were killed in a methane explosion during a miners' revolt in 1865, but the settlement was abandoned over a vein of radioactive ore running through the mines beneath it. Stone is rumoured to be the unacknowledged son of Elisabeth Jarret and Ezechiel Pregzt, the villains of the two previous episodes, though this has never been confirmed with certainty. As a ghost, he is now carrying out the plan cut short by his death: using the radioactive ore to shift the San Andreas Fault and trigger an apocalyptic event along the West Coast. He holds Emily prisoner as a bargaining chip and lures Carnby in with a fake negotiation, only to betray and kill him. Carnby awakens, however, as he is being buried alive by the ghost of former sheriff Dawson, claws his way out of the grave, and resumes the investigation. Guided by a Navajo shaman working in the shadows, he gains the temporary ability to transform into a mountain lion and move through the town undetected. He defeats Stone once and for all and escapes with Emily aboard an abandoned locomotive. It was the last chapter to use the same game engine and directly continue the continuity of the first two games, before the series was reinvented from scratch in 2001."
            }
          }
        ]
      },
      {
        id: "darkworks",
        name: { it: "Universo Darkworks", en: "Darkworks Universe" },
        span: { it: "2001", en: "2001" },
        entries: [
          {
            id: "life-is-a-hideous-thing",
            type: "FUMETTO",
            typeEn: "COMIC",
            year: "2001",
            releaseYear: "2001",
            releaseYearEn: "2001",
            title: { it: "Life is a Hideous Thing", en: "Life is a Hideous Thing" },
            image: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Alone%20in%20the%20Dark_Life%20is%20a%20Hideous%20Thing.jpg",
            synopsis: {
              it: "Mostra il primo incontro tra Carnby e Aline Cedrac in una missione in Nepal. Aline, professoressa di antropologia, è sulle tracce di Aggartha seguendo una mappa trovata tra gli averi del padre sconosciuto, convinta che la città nascosta riveli le sue origini. Carnby è stato mandato da Charles Fiske per trovare e distruggere la Corona di Gengis Khan, un artefatto usato dal Khan per conquistare la Cina e poi affidato a Marco Polo affinché fosse custodita dai saggi di Aggartha. La setta oscura dei Kun-Yin vuole impossessarsene per evocare il Creeping Chaos durante l'Ora della Falce, un particolare allineamento stellare. Dentro Aggartha il gruppo affronta i Mi-Go, in realtà gli Yian-Ho, il popolo originario del regno trasformato nei secoli dall'influenza oscura della Corona. Il collega di Aline, Frank Stone, si rivela essere un traditore: si impadronisce della Corona e tenta di evocare il Creeping Chaos. È Aline a fermarlo usando un incantesimo trovato tra gli averi del padre, rimuovendogli la Corona. Il fumetto si chiude con Carnby che riceve la notizia della morte di Fiske, aggancio diretto all'inizio di The New Nightmare.",
              en: "The comic depicts the first meeting between Carnby and Aline Cedrac, thrown together on a mission in Nepal. Aline, an anthropology professor, is tracking down Aggartha by following a map found among the belongings of her unknown father, convinced that the hidden city will reveal her origins. Carnby has been sent by Charles Fiske to find and destroy the Crown of Genghis Khan, an artifact used by the Khan to conquer China and later entrusted to Marco Polo to be kept safe by the sages of Aggartha. The dark sect known as the Kun-Yin seeks to seize it in order to summon the Creeping Chaos during the Hour of the Scythe, a specific stellar alignment. Inside Aggartha, the group faces the Mi-Go, in reality the Yian-Ho, the kingdom's original people, transformed over centuries by the Crown's dark influence. Aline's colleague Frank Stone turns out to be a traitor: he seizes the Crown and attempts to summon the Creeping Chaos himself. It is Aline who stops him, using a spell found among her father's belongings to wrest the Crown away. The comic closes with Carnby receiving news of Fiske's death, a direct hook into the opening of The New Nightmare."
            }
          },
          {
            id: "the-new-nightmare",
            type: "VIDEOGIOCO",
            typeEn: "VIDEOGAME",
            year: "31 Ottobre 2001",
            yearEn: "October 31, 2001",
            releaseYear: "2001",
            releaseYearEn: "2001",
            title: { it: "The New Nightmare", en: "The New Nightmare" },
            image: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Alone%20in%20the%20Dark_The%20New%20Nightmare.jpg",
            synopsis: {
              it: "Il miglior amico di Carnby, Charles Fiske, è stato trovato morto nei pressi di Shadow Island, un'isola al largo delle coste del Massachusetts di proprietà della famiglia Morton. Carnby riprende l'indagine per conto del Bureau 713, un'agenzia governativa dedita ai fenomeni paranormali, con l'obiettivo di recuperare tre tavolette della civiltà Abkani e scoprire chi ha ucciso Fiske. Lo accompagna Aline Cedrac, giovane professoressa di etnologia che crede che uno dei proprietari dell'isola, il Professor Obed Morton, sia suo padre biologico. Il loro idrovolante viene attaccato nei pressi dell'isola e i due si separano con il paracadute. Sull'isola scoprono che i fratelli Morton hanno storie molto diverse: Alan, lo scienziato, è ossessionato da un portale nascosto sotto l'isola che conduce al World of Darkness, un regno sotterraneo abitato da creature di silicio che si nutrono della luce. Obed, il più debole dei due, ha rivelato i segreti di famiglia a un agente del Bureau 713, venendo poi punito da Alan che lo ha trasformato in mostro. Alan apre il portale e viene trascinato nel World of Darkness, dove viene sconfitto. Joseph Edenshaw, ultimo stregone della tribù Abkani custode dell'isola, esegue infine un rituale che distrugge l'isola intera, sigillando il varco per sempre. Fu il primo reboot della serie, un tentativo di riportarla alle origini con un'ambientazione unica e chiusa, dando più peso a enigmi ed esplorazione rispetto all'azione pura. Come nel primo capitolo, il giocatore può scegliere all'inizio quale dei due protagonisti impersonare: le loro storie si intrecciano, ma seguono percorsi e tagli narrativi leggermente diversi.",
              en: "Carnby's best friend Charles Fiske has been found dead off the coast of Shadow Island, a remote island off the coast of Massachusetts belonging to the Morton family. Carnby takes up the investigation on behalf of Bureau 713, a government agency dealing in paranormal phenomena, with the aim of recovering three tablets belonging to the Abkani civilisation and finding out who killed Fiske. Accompanying him is Aline Cedrac, a young ethnology professor who believes one of the island's owners, Professor Obed Morton, to be her biological father. Their seaplane is attacked near the island and the two are separated by parachute. On the island, they discover that the Morton brothers could not be more different: Alan, the scientist, is obsessed with a portal hidden beneath the island leading to the World of Darkness, an underground realm inhabited by silicon-based creatures that feed on light. Obed, the weaker of the two, betrayed the family's secrets to a Bureau 713 agent and was punished by Alan, who transformed him into a monster. Alan opens the portal and is dragged into the World of Darkness, where he is defeated. Joseph Edenshaw, the last sorcerer of the Abkani tribe and guardian of the island, then performs a ritual that destroys the island entirely, sealing the gateway forever. It was the series' first reboot, an attempt to return it to its roots with a single, contained setting, placing more emphasis on puzzles and exploration than on pure action. As in the first game, the player can choose at the outset which of the two protagonists to play as: their storylines intertwine, but follow slightly different paths and narrative emphases."
            }
          }
        ]
      },
      {
        id: "eden-games",
        name: { it: "Universo Eden Games", en: "Eden Games Universe" },
        span: { it: "2008 – 2015", en: "2008 – 2015" },
        entries: [
          {
            id: "aitd-2008",
            type: "VIDEOGIOCO",
            typeEn: "VIDEOGAME",
            year: "2008",
            releaseYear: "2008",
            releaseYearEn: "2008",
            title: { it: "Alone in the Dark", en: "Alone in the Dark" },
            image: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Alone%20in%20the%20Dark%202008.jpg",
            synopsis: {
              it: "Edward Carnby si risveglia amnesico in un appartamento di New York, pochi istanti prima che un gruppo di uomini incappucciati tenti di ucciderlo su ordine di un certo Crowley. Fuggito con l'aiuto di una forza invisibile, incontra la mercante d'arte Sarah Flores e l'occultista Theophile Paddington, che rivela di aver appena eseguito un esorcismo su di lui. Mentre la città viene squarciata da fenditure sovrannaturali, Paddington spiega che una Pietra Filosofale contiene Lucifero, imprigionato dopo la cacciata dal paradiso, e che lo stesso Crowley l'ha liberato per usarla e scatenare la fine del mondo. Prima di morire suicida, Paddington affida a Carnby la Pietra e lo indirizza verso Central Park, epicentro del cataclisma, dove Edward scopre il segreto capace di fermare Crowley e la sua furia. Reboot della serie, ambientato in una New York contemporanea slegata dalla continuità dei capitoli precedenti.",
              en: "Edward Carnby wakes up with amnesia in a New York apartment, moments before a group of hooded men try to kill him on the orders of a man named Crowley. Escaping with the help of an unseen force, he meets art dealer Sarah Flores and occultist Theophile Paddington, who reveals he has just performed an exorcism on him. As the city is torn open by supernatural fissures, Paddington explains that a Philosopher's Stone contains Lucifer, imprisoned since his fall from heaven, and that Crowley himself has freed it to unleash the end of the world. Before taking his own life, Paddington entrusts Carnby with the Stone and points him toward Central Park, the epicentre of the cataclysm, where Edward discovers the secret capable of stopping Crowley and his fury. A reboot of the series, set in a present-day New York disconnected from the continuity of the earlier chapters."
            }
          },
          {
            id: "illumination",
            type: "VIDEOGIOCO",
            typeEn: "VIDEOGAME",
            year: "Epoca contemporanea",
            yearEn: "Present day",
            releaseYear: "2015",
            releaseYearEn: "2015",
            title: { it: "Alone in the Dark: Illumination", en: "Alone in the Dark: Illumination" },
            image: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Alone%20in%20the%20Dark%20Illumination.jpg",
            synopsis: {
              it: "Nella cittadina mineraria abbandonata di Lorwich, in Virginia, evacuata anni prima dopo un'alluvione mai del tutto spiegata, un'oscurità innaturale ha iniziato a inghiottire le strade, liberando orde di creature dagli incubi. Quattro personaggi convergono sul luogo per motivi diversi, tra cui Ted Carnby, cacciatore di mostri e discendente diretto di Edward Carnby — sottinteso essere lo stesso Edward, sopravvissuto e immortale dopo gli eventi del 2008 — e Celeste, strega discendente di Emily Hartwood, alla ricerca di alcune consorelle scomparse. Insieme affrontano le forze al servizio di Cthulhu per fare luce sull'origine della maledizione di Lorwich.",
              en: "In the abandoned mining town of Lorwich, Virginia, evacuated years earlier after a flood that was never fully explained, an unnatural darkness has begun swallowing the streets, unleashing hordes of nightmarish creatures. Four characters converge on the town for different reasons, among them Ted Carnby, a monster hunter and direct descendant of Edward Carnby — implied to be Edward himself, having survived and become immortal after the events of 2008 — and Celeste, a witch descended from Emily Hartwood, searching for missing sisters of her coven. Together they face forces serving Cthulhu to uncover the origin of Lorwich's curse."
            }
          }
        ]
      },
      {
        id: "pieces-interactive",
        name: { it: "Universo Pieces Interactive", en: "Pieces Interactive Universe" },
        span: { it: "2024", en: "2024" },
        entries: [
          {
            id: "grace-in-the-dark",
            type: "VIDEOGIOCO",
            typeEn: "VIDEOGAME",
            year: "1924 (ipotizzato)",
            yearEn: "1924 (implied)",
            releaseYear: "2023",
            releaseYearEn: "2023",
            title: { it: "Alone in the Dark Prologue", en: "Alone in the Dark Prologue" },
            image: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Alone%20in%20the%20Dark%20Prologue.jpg",
            synopsis: {
              it: "A Derceto, ora casa di cura per malati di nervi, l'undicenne Grace Saunders aiuta un paranoico Jeremy Hartwood a scrivere una lettera per la nipote Emily, camuffandola con la propria calligrafia perché non venga intercettata dal direttore Waites. Dopo essere riuscita a imbucarla di nascosto, Grace avverte un rumore nel buio e viene attaccata da una creatura mostruosa. La scena successiva mostra Emily Hartwood, in auto insieme all'investigatore privato Edward Carnby, arrivare a Derceto proprio in risposta a quella lettera. Teaser giocabile e gratuito distribuito prima del lancio del reboot 2024, in aperto omaggio a Jack in the Dark.",
              en: "At Derceto, now a rest home for the nervously afflicted, eleven-year-old Grace Saunders helps a paranoid Jeremy Hartwood write a letter to his niece Emily, disguising it in her own handwriting so it won't be intercepted by the administrator Mr. Waites. After managing to sneak it into the post, Grace hears a noise in the dark and is attacked by a monstrous creature. The following scene shows Emily Hartwood, arriving by car with private investigator Edward Carnby, pulling up to Derceto in direct response to that letter. A free, playable teaser released ahead of the 2024 reboot, in open homage to Jack in the Dark."
            }
          },
          {
            id: "aitd-2024",
            type: "VIDEOGIOCO",
            typeEn: "VIDEOGAME",
            year: "1924 (ipotizzato)",
            yearEn: "1924 (implied)",
            releaseYear: "2024",
            releaseYearEn: "2024",
            title: { it: "Alone in the Dark", en: "Alone in the Dark" },
            image: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Alone%20in%20the%20Dark%202024.jpg",
            synopsis: {
              it: "Emily Hartwood e l'investigatore privato Edward Carnby arrivano a Derceto, ormai una casa di cura per malati di nervi in Louisiana, per cercare lo zio di Emily, Jeremy, ricoverato lì e scomparso. Esplorando la tenuta e i suoi sotterranei, scoprono che una setta di adoratori di un antico Male, radicata nella storia stessa di Derceto, sta per compiere un rituale di sacrificio proprio sulla piccola Grace Saunders. I due protagonisti, ciascuno seguendo un proprio percorso e un proprio finale, fermano il rituale e affrontano la vera natura mostruosa che si cela dietro la manifestazione del Male. Reimmaginazione del gioco originale del 1992, con una propria continuità dichiaratamente separata da quella dei capitoli storici.",
              en: "Emily Hartwood and private investigator Edward Carnby arrive at Derceto, now a rest home for the nervously afflicted in Louisiana, searching for Emily's uncle Jeremy, a patient there who has gone missing. Exploring the estate and its underground passages, they discover that a cult devoted to an ancient Evil, rooted in Derceto's own history, is about to carry out a sacrificial ritual on young Grace Saunders. The two protagonists, each following their own path and ending, stop the ritual and confront the true monstrous nature behind the Evil's manifestation. A reimagining of the original 1992 game, with its own continuity explicitly separate from that of the classic chapters."
            }
          }
        ]
      }
    ]
  },

  "assassins-creed": {
    id: "assassins-creed",
    listTitle: { it: "Assassin's Creed", en: "Assassin's Creed" },
    eyebrow: { it: "Fascicolo", en: "Case File" },
    title: { it: "Assassin's Creed", en: "Assassin's Creed" },
    blurb: {
      it: "Da secoli, la Confraternita degli Assassini e l'Ordine dei Templari si contendono in segreto il corso della storia umana, mascherando la loro guerra dietro gli eventi che tutti conoscono. Da una parte il libero arbitrio, dall'altra il controllo assoluto sull'umanità. Antichi manufatti di una civiltà scomparsa alimentano.",
      en: "For centuries, the Brotherhood of Assassins and the Order of Templars have secretly fought over the course of human history, hiding their war behind the events everyone knows. On one side stands free will, on the other absolute control over humanity. Ancient artifacts left by a vanished civilization fuel both."
    },
    palette: ["#8b0000", "#d4af37", "#1a1a1a"],
    accentColor: "#8b0000",
    tracks: [],
    avatar: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Assassins%20Creed%20Avatar.jpg",
    banner: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Assassins%20Creed%20Banner.jpg",
    watermark: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Assassins%20Creed%20Filigrana.jpg",
    watermarkOpacity: 0.18,
    universes: [
      {
        id: "antichita",
        name: { it: "Antichità", en: "Antiquity" },
        span: { it: "431 a.C. – 44 a.C.", en: "431 BC – 44 BC" },
        entries: [
          { id: "odyssey", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "431 a.C. – 422 a.C.",
            releaseYear: "2018", releaseYearEn: "2018",
            title: { it: "Assassin's Creed Odyssey", en: "Assassin's Creed Odyssey" },
            synopsis: {
              it: "Durante la Guerra del Peloponneso tra Atene e Sparta, il misthios (mercenario) Kassandra o Alexios, discendente di Leonida I di Sparta e portatore di una delle sue lance forgiate da un Frutto dell'Eden, viaggia per tutta la Grecia antica ricostruendo la propria famiglia dispersa e scontrandosi con il Culto di Kosmos, un'organizzazione segreta antenata dell'Ordine degli Antichi che manipola la guerra dall'ombra per il proprio profitto. Il gioco cronologicamente più antico della serie, ambientato secoli prima della fondazione ufficiale della Confraternita.",
              en: "During the Peloponnesian War between Athens and Sparta, the misthios (mercenary) Kassandra or Alexios, descendant of Leonidas I of Sparta and bearer of one of his spears forged from a Piece of Eden, travels across ancient Greece piecing their scattered family back together and clashing with the Cult of Kosmos, a secret organisation and ancestor of the Order of the Ancients that manipulates the war from the shadows for its own profit. The chronologically oldest game in the series, set centuries before the Brotherhood's official founding."
            }
          },
          { id: "origins", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "49 a.C. – 44 a.C.",
            releaseYear: "2017", releaseYearEn: "2017",
            title: { it: "Assassin's Creed Origins", en: "Assassin's Creed Origins" },
            synopsis: {
              it: "Nell'Egitto tolemaico sotto Cleopatra e Giulio Cesare, Bayek di Siwa, ultimo Medjay a servizio della legge, e sua moglie Aya danno la caccia a una setta di uomini mascherati che ha ucciso il figlio della coppia. Solo a indagine avanzata Cleopatra rivela loro il vero nome della setta, l'Ordine degli Antichi, svelandone anche il coinvolgimento nella politica romana e il complotto per controllare l'Egitto attraverso Tolomeo. Nel corso della vendetta, Bayek fonda i Nascosti (Hidden Ones), organizzazione dedicata a proteggere il libero arbitrio dell'umanità che diverrà, secoli dopo, la Confraternita degli Assassini. Il gioco che rivela le vere origini della Confraternita e della lama celata.",
              en: "In Ptolemaic Egypt under Cleopatra and Julius Caesar, Bayek of Siwa, the last Medjay in service of the law, and his wife Aya hunt down a sect of masked men who killed the couple's son. Only once the investigation is well underway does Cleopatra reveal their true name, the Order of the Ancients, along with their involvement in Roman politics and a scheme to control Egypt through Ptolemy. In the course of the vendetta, Bayek founds the Hidden Ones, an organisation dedicated to protecting humanity's free will that will, centuries later, become the Brotherhood of Assassins. The game that reveals the true origins of the Brotherhood and of the hidden blade."
            }
          }
        ]
      },
      {
        id: "alto-medioevo",
        name: { it: "Alto Medioevo", en: "Early Middle Ages" },
        span: { it: "861 – 878", en: "861 – 878" },
        entries: [
          { id: "mirage", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "861",
            releaseYear: "2023", releaseYearEn: "2023",
            title: { it: "Assassin's Creed Mirage", en: "Assassin's Creed Mirage" },
            synopsis: {
              it: "Nella Baghdad dell'età d'oro abbaside, il giovane ladro di strada Basim Ibn Ishaq viene reclutato dai Nascosti dopo aver scoperto un legame misterioso e ricorrente con visioni di un antico corvo. Sotto la guida della sua mentore Roshan, Basim scala i ranghi dell'organizzazione affrontando l'Ordine degli Antichi radicato nella burocrazia del Califfato, fino a diventare pienamente un Nascosto — ignaro, in questo capitolo, della propria vera natura, rivelata solo in Valhalla. Un ritorno dichiarato alle radici stealth della serie, dopo la deriva verso il gioco di ruolo di Origins/Odyssey/Valhalla.",
              en: "In Baghdad's Abbasid Golden Age, the young street thief Basim Ibn Ishaq is recruited by the Hidden Ones after discovering a mysterious, recurring connection to visions of an ancient crow. Under the guidance of his mentor Roshan, Basim rises through the organisation's ranks confronting the Order of the Ancients entrenched within the Caliphate's bureaucracy, ultimately becoming a fully-fledged Hidden One — unaware, in this chapter, of his true nature, revealed only in Valhalla. A deliberate return to the series' stealth roots, after the drift toward RPG mechanics in Origins/Odyssey/Valhalla."
            }
          },
          { id: "valhalla", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "872 – 878",
            releaseYear: "2020", releaseYearEn: "2020",
            title: { it: "Assassin's Creed Valhalla", en: "Assassin's Creed Valhalla" },
            synopsis: {
              it: "Il vichingo Eivor Varinsdottir/Varinsson guida il proprio clan dalla Norvegia devastata dalle faide fino all'Inghilterra dell'era vichinga, fondando insediamenti e stringendo alleanze con i regni anglosassoni. Nel corso della conquista, Eivor scopre di essere in realtà l'ospite umano di Odino, un Isu (membro dell'antica civiltà precedente all'umanità) sopravvissuto in una forma di reincarnazione, e si allea con Basim — lo stesso protagonista di Mirage, qui rivelato essere a sua volta l'ospite del dio nordico Loki — per fondare formalmente la Confraternita dei Nascosti in terra inglese, gettando le basi dirette per la futura Confraternita degli Assassini.",
              en: "The Viking Eivor Varinsdottir/Varinsson leads their clan from a Norway ravaged by feuds to Viking Age England, founding settlements and forging alliances with the Anglo-Saxon kingdoms. Over the course of the conquest, Eivor discovers they are in truth the human host of Odin, an Isu (a member of the ancient civilisation that predates humanity) surviving through a form of reincarnation, and allies with Basim — the same protagonist from Mirage, here revealed to himself be the host of the Norse god Loki — to formally found the Brotherhood of the Hidden Ones on English soil, laying the direct groundwork for the future Brotherhood of Assassins."
            }
          }
        ]
      },
      {
        id: "basso-medioevo-rinascimento",
        name: { it: "Basso Medioevo e Rinascimento", en: "Late Middle Ages and Renaissance" },
        span: { it: "1191 – 1526", en: "1191 – 1526" },
        entries: [
          { id: "assassins-creed-1", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "1191",
            releaseYear: "2007", releaseYearEn: "2007",
            title: { it: "Assassin's Creed", en: "Assassin's Creed" },
            synopsis: {
              it: "Durante la Terza Crociata, l'Assassino Altaïr Ibn-La'Ahad, punito dal proprio Mentore Al Mualim per un'insubordinazione che ha messo a rischio la Confraternita, viene incaricato di espiare la propria arroganza uccidendo nove figure chiave dell'Ordine dei Templari, guidato in segreto da Al Mualim stesso, sparse tra Gerusalemme, Acri e Damasco. Nel corso della missione, Altaïr scopre che Al Mualim è in realtà a capo dei Templari e sta cercando di impossessarsi di un Frutto dell'Eden per soggiogare la volontà umana con l'inganno della pace forzata; lo affronta e lo sconfigge, ereditandone il ruolo di Mentore. Il capostipite dell'intera serie, che introduce l'Animus e il presente narrativo di Desmond Miles.",
              en: "During the Third Crusade, the Assassin Altaïr Ibn-La'Ahad, punished by his own Mentor Al Mualim for an insubordination that endangered the Brotherhood, is tasked with atoning for his arrogance by killing nine key figures of the Templar Order, secretly guided by Al Mualim himself, scattered across Jerusalem, Acre, and Damascus. In the course of the mission, Altaïr discovers that Al Mualim is in truth the head of the Templars and is seeking to seize a Piece of Eden to subjugate human will through the deception of forced peace; he confronts and defeats him, inheriting the role of Mentor. The progenitor of the entire series, introducing the Animus and the narrative present of Desmond Miles."
            }
          },
          { id: "ac-bloodlines", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "1191",
            releaseYear: "2009", releaseYearEn: "2009",
            title: { it: "Assassin's Creed: Bloodlines", en: "Assassin's Creed: Bloodlines" },
            synopsis: {
              it: "Poco dopo gli eventi del primo capitolo, Altaïr scopre un piano dei Templari superstiti per rifugiarsi a Cipro e vi si getta all'inseguimento, catturando lungo il cammino Maria Thorpe, ex agente templare in cerca di vendetta per la morte del proprio maestro Robert de Sablé. Sull'isola, ormai sotto il controllo del nuovo Gran Maestro templare Armand Bouchart, Altaïr elimina uno dopo l'altro i suoi luogotenenti per individuare un archivio segreto di conoscenze templari, affrontando infine lo stesso Bouchart prima che l'archivio crolli su se stesso. Il gioco segue anche l'evolversi del rapporto tra Altaïr e Maria, dall'iniziale ostilità a un legame sempre più stretto. Colma il vuoto narrativo tra il primo capitolo e Assassin's Creed II.",
              en: "Shortly after the events of the first game, Altaïr uncovers a plan by the surviving Templars to take refuge in Cyprus and sets off in pursuit, capturing along the way Maria Thorpe, a former Templar agent seeking revenge for the death of her master Robert de Sablé. On the island, now under the control of the new Templar Grand Master Armand Bouchart, Altaïr eliminates his lieutenants one by one to track down a secret archive of Templar knowledge, ultimately confronting Bouchart himself before the archive collapses in on itself. The game also traces the evolving relationship between Altaïr and Maria, from initial hostility to an increasingly close bond. It bridges the narrative gap between the first game and Assassin's Creed II."
            }
          },
          { id: "fall-of-masyaf", type: "STORIA", typeEn: "STORY", year: "1257", yearEn: "1257",
            noAvatar: true,
            title: { it: "La Caduta di Masyaf", en: "The Fall of Masyaf" },
            synopsis: {
              it: "Ormai anziano Gran Maestro della Confraternita, Altaïr aveva da tempo previsto che Masyaf sarebbe caduta e aveva iniziato a disperdere gli Assassini in gilde autonome sparse per il mondo, costruendo sotto il castello una biblioteca segreta per custodire un Frutto dell'Eden e le proprie memorie. Nel 1257 i Mongoli, in cerca di vendetta per la morte di Gengis Khan anni prima per mano dello stesso Altaïr, assediano la fortezza ormai quasi spopolata. Prima dell'attacco finale, Altaïr affida ai mercanti veneziani Niccolò e Maffeo Polo, ospiti della Confraternita, il proprio codice e le chiavi della biblioteca, incaricandoli di portare il credo degli Assassini in Italia, dove lui stesso non era mai riuscito a diffonderlo. Fatti evacuare gli ultimi abitanti, si rinchiude nella biblioteca insieme al Frutto e vi muore in solitudine. La Confraternita, ormai priva di una sede centrale, sopravvive dispersa nei decenni successivi proprio nei semi piantati in Italia dai fratelli Polo.",
              en: "By then an aging Mentor of the Brotherhood, Altaïr had long foreseen that Masyaf would eventually fall and had already begun scattering the Assassins into autonomous guilds around the world, building a secret library beneath the castle to safeguard a Piece of Eden and his own memories. In 1257 the Mongols, seeking revenge for the death of Genghis Khan years earlier at Altaïr's own hands, besiege the now nearly deserted fortress. Before the final assault, Altaïr entrusts his codex and the keys to the library to the Venetian merchants Niccolò and Maffeo Polo, guests of the Brotherhood, tasking them with carrying the Assassins' creed to Italy, where he himself had never managed to spread it. Having the last inhabitants evacuated, he seals himself inside the library with the Piece of Eden and dies there alone. The Brotherhood, now without a central seat, survives scattered over the following decades from the very seeds planted in Italy by the Polo brothers."
            }
          },
          { id: "lineage", type: "CORTOMETRAGGIO", typeEn: "SHORT FILM", year: "1476",
            releaseYear: "2009", releaseYearEn: "2009",
            title: { it: "Assassin's Creed: Lineage", en: "Assassin's Creed: Lineage" },
            synopsis: {
              it: "A Firenze, l'Assassino Giovanni Auditore, padre del futuro protagonista Ezio, indaga su una cospirazione ordita da Rodrigo Borgia contro la famiglia Medici, sventando in extremis un attentato al Duca di Milano Galeazzo Maria Sforza. Le indagini di Giovanni portano alla luce l'intreccio di tradimenti che, di lì a poco, costerà la vita a lui stesso e a due dei suoi figli, innescando la vendetta di Ezio raccontata in Assassin's Creed II. Trilogia di cortometraggi live-action prodotta da Ubisoft, diretta come antefatto diretto del gioco.",
              en: "In Florence, the Assassin Giovanni Auditore, father of future protagonist Ezio, investigates a conspiracy orchestrated by Rodrigo Borgia against the Medici family, foiling an assassination attempt on the Duke of Milan, Galeazzo Maria Sforza, at the last moment. Giovanni's investigation uncovers the web of betrayals that will shortly cost him and two of his sons their lives, setting in motion the revenge told in Assassin's Creed II. A live-action short film trilogy produced by Ubisoft, made as a direct lead-in to the game."
            }
          },
          { id: "assassins-creed-2", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "1476 – 1499",
            releaseYear: "2009", releaseYearEn: "2009",
            title: { it: "Assassin's Creed II", en: "Assassin's Creed II" },
            synopsis: {
              it: "Nella Firenze rinascimentale, il giovane nobile Ezio Auditore da Firenze assiste all'esecuzione ingiusta del padre e dei fratelli, incastrati dai Templari con l'accusa di tradimento. Addestrato all'arte dell'assassinio dallo zio Mario, Ezio dà la caccia ai cospiratori attraverso Firenze, Venezia e Roma, scoprendo il coinvolgimento dei Borgia e la ricerca templare della Mela dell'Eden, un antico artefatto degli Isu. Il gioco che ha reso Ezio l'icona più riconoscibile della serie, primo capitolo di una trilogia.",
              en: "In Renaissance Florence, the young nobleman Ezio Auditore da Firenze witnesses the unjust execution of his father and brothers, framed by the Templars on charges of treason. Trained in the art of assassination by his uncle Mario, Ezio hunts down the conspirators across Florence, Venice, and Rome, uncovering the involvement of the Borgia family and the Templars' pursuit of the Apple of Eden, an ancient Isu artefact. The game that made Ezio the series' most recognisable icon, the first chapter of a trilogy."
            }
          },
          { id: "brotherhood", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "1499 – 1507",
            releaseYear: "2010", releaseYearEn: "2010",
            title: { it: "Assassin's Creed: Brotherhood", en: "Assassin's Creed: Brotherhood" },
            synopsis: {
              it: "Dopo la caduta di Monteriggioni sotto l'attacco di Cesare Borgia, Ezio si trasferisce a Roma, dove ricostruisce la Confraternita degli Assassini italiana reclutando e addestrando nuovi membri tra i cittadini oppressi dal dominio dei Borgia. Nel corso della campagna per liberare Roma, Ezio uccide Cesare e sua sorella Lucrezia, recupera la Mela dell'Eden e scopre, in una camera segreta sotto il Vaticano, un messaggio lasciato da Minerva, un'Isu, che si rivolge direttamente a Desmond Miles attraverso i secoli, preannunciando un cataclisma imminente.",
              en: "After the fall of Monteriggioni to Cesare Borgia's assault, Ezio relocates to Rome, where he rebuilds the Italian Brotherhood of Assassins by recruiting and training new members among citizens oppressed by Borgia rule. Over the course of the campaign to liberate Rome, Ezio kills Cesare and his sister Lucrezia, recovers the Apple of Eden, and discovers, in a hidden chamber beneath the Vatican, a message left by Minerva, an Isu, addressing Desmond Miles directly across the centuries, foretelling an imminent cataclysm."
            }
          },
          { id: "revelations", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "1511 – 1512",
            releaseYear: "2011", releaseYearEn: "2011",
            title: { it: "Assassin's Creed: Revelations", en: "Assassin's Creed: Revelations" },
            synopsis: {
              it: "Un Ezio ormai anziano viaggia a Costantinopoli in cerca delle chiavi lasciate da Altaïr, morto secoli prima, per accedere a una biblioteca segreta sotto la sede della Confraternita di Masyaf. Alleandosi con la Assassina Yusuf Tazim e l'ingegnere Piri Reis, Ezio contrasta i Templari guidati dal principe ottomano Ahmet, recupera le memorie finali di Altaïr — che rivelano il destino della sua famiglia e il luogo in cui nascose la propria Mela dell'Eden — e chiude simbolicamente il cerchio tra le due grandi icone della serie prima di ritirarsi definitivamente dalla vita da Assassino.",
              en: "An aging Ezio travels to Constantinople in search of the keys left behind by Altaïr, dead for centuries, to access a secret library beneath the Brotherhood's headquarters at Masyaf. Allying with the Assassin Yusuf Tazim and the engineer Piri Reis, Ezio thwarts the Templars led by Ottoman prince Ahmet, recovers Altaïr's final memories — which reveal the fate of his family and where he hid his own Apple of Eden — and symbolically closes the circle between the series' two great icons before retiring from the life of an Assassin for good."
            }
          },
          { id: "embers", type: "CORTOMETRAGGIO", typeEn: "SHORT FILM", year: "1524",
            releaseYear: "2011", releaseYearEn: "2011",
            title: { it: "Assassin's Creed: Embers", en: "Assassin's Creed: Embers" },
            synopsis: {
              it: "Ormai anziano e ritirato in una villa toscana con la moglie Sofia e i figli, Ezio riceve la visita della giovane Assassina cinese Shao Jun, in fuga dai servitori dell'Imperatore che hanno appena decimato la sua Confraternita, venuta a cercare la sua guida per ricostruirla. Ezio le racconta la propria storia e le trasmette gli ultimi insegnamenti prima di respingere un attacco notturno alla villa insieme a lei. Il giorno dopo la congeda con in dono uno scrigno che tornerà utile solo se lei perderà la propria strada. Poco dopo, durante una gita a Firenze con Sofia, Ezio muore di un attacco cardiaco sulla stessa piazza dove da ragazzo vide giustiziare il padre e i fratelli. Cortometraggio animato che chiude la trilogia di Ezio.",
              en: "Now elderly and retired to a Tuscan villa with his wife Sofia and their children, Ezio is visited by the young Chinese Assassin Shao Jun, fleeing the Emperor's servants who have just decimated her Brotherhood, who has come seeking his guidance to rebuild it. Ezio tells her his story and passes on his final teachings before fighting off a night attack on the villa alongside her. The next day he sends her off with a box that will only prove useful if she loses her way. Shortly after, during a trip to Florence with Sofia, Ezio dies of a heart attack in the very square where, as a boy, he watched his father and brothers executed. An animated short film closing out the Ezio trilogy."
            }
          },
          { id: "chronicles-china", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "1526",
            releaseYear: "2015", releaseYearEn: "2015",
            title: { it: "Assassin's Creed Chronicles: China", en: "Assassin's Creed Chronicles: China" },
            synopsis: {
              it: "Tornata in Cina dopo l'addestramento ricevuto da Ezio Auditore in Toscana, Shao Jun dà la caccia agli Otto Tigri, la fazione templare di eunuchi che ha ordinato la purga della Confraternita cinese e manipola il giovane Imperatore Jiajing, mentre la dinastia Ming inizia a vacillare. Nel corso della vendetta perde il forziere donatole da Ezio, recuperato dai Templari, ma riesce comunque a eliminare a uno a uno i membri della fazione fino al confronto finale con il loro capo, Zhang Yong. Primo capitolo della trilogia Chronicles, in 2.5D con uno stile grafico ispirato alla pittura tradizionale a inchiostro.",
              en: "Having returned to China after training under Ezio Auditore in Tuscany, Shao Jun hunts down the Eight Tigers, the Templar faction of eunuchs who ordered the purge of the Chinese Brotherhood and manipulate the young Jiajing Emperor, as the Ming dynasty begins to crumble. In the course of her revenge she loses the chest given to her by Ezio, recovered by the Templars, but still manages to eliminate the faction's members one by one up to a final confrontation with their leader, Zhang Yong. The first chapter of the Chronicles trilogy, in 2.5D with a visual style inspired by traditional ink-brush painting."
            }
          }
        ]
      },
      {
        id: "eta-vela",
        name: { it: "Epoca Moderna ed Età della Vela", en: "Early Modern Era and Age of Sail" },
        span: { it: "1579 – 1780", en: "1579 – 1780" },
        entries: [
          { id: "shadows", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "1579",
            releaseYear: "2025", releaseYearEn: "2025",
            title: { it: "Assassin's Creed Shadows", en: "Assassin's Creed Shadows" },
            synopsis: {
              it: "Nel Giappone del tardo periodo Sengoku, mentre Oda Nobunaga muove verso l'unificazione del paese, la shinobi Naoe, sopravvissuta al massacro del proprio villaggio e della propria famiglia, e il samurai africano Yasuke, realmente esistito al servizio di Nobunaga, uniscono le forze contro un Ordine degli Antichi radicato nella nobiltà feudale giapponese. Primo capitolo mainline della serie ambientato in Giappone, alterna lo stile stealth incentrato su Naoe a quello più diretto e in armatura di Yasuke.",
              en: "In late Sengoku-period Japan, as Oda Nobunaga moves toward unifying the country, the shinobi Naoe, survivor of the massacre of her own village and family, and the African samurai Yasuke, a real historical figure who served Nobunaga, join forces against an Order of the Ancients rooted in Japan's feudal nobility. The series' first mainline chapter set in Japan, alternating between Naoe's stealth-focused playstyle and Yasuke's more direct, armoured approach."
            }
          },
          { id: "black-flag", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "1715 – 1722",
            releaseYear: "2013", releaseYearEn: "2013",
            title: { it: "Assassin's Creed IV: Black Flag", en: "Assassin's Creed IV: Black Flag" },
            synopsis: {
              it: "Durante l'Età dell'Oro della Pirateria nei Caraibi, il gallese Edward Kenway, nonno di Connor (protagonista di AC3) e futuro padre del Templare antagonista Haytham Kenway, diventa capitano della nave Jackdaw inseguendo ricchezza e libertà, restando invischiato senza volerlo nel conflitto segreto tra Assassini e Templari, che si contendono un Osservatorio Isu capace di sorvegliare chiunque sulla Terra. Per la maggior parte del gioco Edward resta un uomo qualunque in cerca di fortuna, solo gradualmente attratto verso la causa degli Assassini.",
              en: "During the Golden Age of Piracy in the Caribbean, the Welshman Edward Kenway, grandfather of Connor (AC3's protagonist) and future father of the Templar antagonist Haytham Kenway, becomes captain of the ship Jackdaw in pursuit of wealth and freedom, becoming unwittingly entangled in the secret conflict between Assassins and Templars, who are vying for control of an Isu Observatory capable of surveilling anyone on Earth. For most of the game Edward remains an ordinary man chasing fortune, only gradually drawn toward the Assassins' cause."
            }
          },
          { id: "freedom-cry", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "1735 – 1737",
            releaseYear: "2013", releaseYearEn: "2013",
            title: { it: "Assassin's Creed: Freedom Cry", en: "Assassin's Creed: Freedom Cry" },
            synopsis: {
              it: "Vent'anni dopo Black Flag, l'ex quartiermastro Adéwalé, ormai Assassino a tutti gli effetti, naufraga al largo di Saint-Domingue mentre insegue una fazione templare. A terra scopre che i Templari finanziano segretamente la tratta degli schiavi tramite la tenutaria Bastienne Josèphe, e si allea con i Maroon, un gruppo di schiavi fuggiti guidato da Augustin Dieufort, per liberare la colonia dal commercio schiavista, arrivando a scontrarsi con il governatore Pierre de Fayet. Nato come contenuto scaricabile per Black Flag, distribuito anche come esperienza autonoma, affronta di petto il tema della schiavitù nei Caraibi.",
              en: "Twenty years after Black Flag, former quartermaster Adéwalé, now a full-fledged Assassin, is shipwrecked off Saint-Domingue while pursuing a Templar faction. Ashore, he discovers the Templars are secretly financing the slave trade through brothel owner Bastienne Josèphe, and allies with the Maroons, a band of escaped slaves led by Augustin Dieufort, to free the colony from the slave trade, eventually clashing with governor Pierre de Fayet. Originally released as downloadable content for Black Flag, later made available as a standalone experience, it confronts the subject of slavery in the Caribbean head-on."
            }
          },
          { id: "rogue", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "1752 – 1760",
            releaseYear: "2014", releaseYearEn: "2014",
            title: { it: "Assassin's Creed Rogue", en: "Assassin's Creed Rogue" },
            synopsis: {
              it: "Nell'Atlantico settentrionale durante la Guerra dei Sette Anni, l'Assassino Shay Patrick Cormac, dopo aver causato involontariamente la morte di innocenti innescando un cataclisma con un manufatto Isu recuperato per conto della Confraternita, si disillude dei metodi spregiudicati dei propri mentori e passa dalla parte dei Templari, diventando il cacciatore dei suoi ex compagni. Primo e unico capitolo della serie a raccontare la storia dal punto di vista templare, getta le basi per la nascita del Rito Templare Coloniale che si opporrà a Connor in AC3.",
              en: "In the North Atlantic during the Seven Years' War, the Assassin Shay Patrick Cormac, after unwittingly causing the death of innocents by triggering a cataclysm with an Isu artefact recovered on the Brotherhood's behalf, becomes disillusioned with his mentors' ruthless methods and defects to the Templars, becoming the hunter of his own former comrades. The first and only chapter in the series to tell the story from the Templar point of view, laying the groundwork for the Templar Colonial Rite that will oppose Connor in AC3."
            }
          },
          { id: "liberation", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "1765 – 1780",
            releaseYear: "2012", releaseYearEn: "2012",
            title: { it: "Assassin's Creed: Liberation", en: "Assassin's Creed: Liberation" },
            synopsis: {
              it: "A New Orleans, sotto la contestata transizione dal dominio francese a quello spagnolo, l'Assassina franco-africana Aveline de Grandpré, addestrata dal proprio mentore Agaté dopo essere scampata bambina a un tentativo di rapimento, indaga sulla misteriosa identità del 'Company Man', il Templare che manovra la città nell'ombra. Nel corso delle sue indagini, Aveline assassina il governatore francese d'Abbadie, corrotto dai Templari, e smaschera Baptiste, un Assassino rinnegato che complotta per avvelenare la nobiltà locale. Prima protagonista donna della serie, il gioco intreccia la sua vicenda personale alla piaga della schiavitù nella Louisiana coloniale.",
              en: "In New Orleans, amid the contested transition from French to Spanish rule, the French-African Assassin Aveline de Grandpré, trained by her mentor Agaté after narrowly escaping a kidnapping attempt as a child, investigates the mysterious identity of the 'Company Man', the Templar secretly pulling the city's strings. In the course of her investigation, Aveline assassinates the Templar-corrupted French governor d'Abbadie and exposes Baptiste, a renegade Assassin plotting to poison the local nobility. The series' first female protagonist, the game weaves her personal story together with the scourge of slavery in colonial Louisiana."
            }
          }
        ]
      },
      {
        id: "eta-rivoluzioni",
        name: { it: "Età delle Rivoluzioni", en: "Age of Revolutions" },
        span: { it: "1754 – 1868", en: "1754 – 1868" },
        entries: [
          { id: "assassins-creed-3", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "1754, 1775 – 1783",
            releaseYear: "2012", releaseYearEn: "2012",
            title: { it: "Assassin's Creed III", en: "Assassin's Creed III" },
            synopsis: {
              it: "Durante la Rivoluzione Americana, Ratonhnhaké:ton detto Connor, figlio del Templare britannico Haytham Kenway e di una donna Mohawk, si allea con gli Assassini dopo aver visto il proprio villaggio minacciato dall'espansione coloniale, opponendosi al padre e ai suoi alleati templari che manipolano entrambi gli schieramenti del conflitto rivoluzionario per i propri fini. Nel corso della guerra Connor affronta e uccide uno dopo l'altro i Templari del Rito Coloniale, incluso lo stesso Haytham, ricostruendo la Confraternita americana dalle sue rovine.",
              en: "During the American Revolution, Ratonhnhaké:ton, called Connor, son of the British Templar Haytham Kenway and a Mohawk woman, allies with the Assassins after seeing his village threatened by colonial expansion, opposing his father and his Templar allies who manipulate both sides of the revolutionary conflict for their own ends. Over the course of the war Connor confronts and kills the Colonial Rite Templars one by one, including Haytham himself, rebuilding the American Brotherhood from its ruins."
            }
          },
          { id: "unity", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "1789 – 1794",
            releaseYear: "2014", releaseYearEn: "2014",
            title: { it: "Assassin's Creed Unity", en: "Assassin's Creed Unity" },
            synopsis: {
              it: "Durante la Rivoluzione Francese, il nobile decaduto Arno Dorian, adottato dalla famiglia templare de la Serre dopo la morte del padre Assassino, viene incastrato per l'omicidio del proprio padre adottivo e mentore templare, e si unisce alla Confraternita degli Assassini parigina per scoprire la verità e vendicarlo, mentre Parigi precipita nel Terrore rivoluzionario. Nel corso dell'indagine, Arno scopre che entrambi gli ordini, Assassini e Templari, sono stati manipolati da un cospiratore infiltrato in entrambe le fazioni per innescare il caos rivoluzionario a proprio vantaggio.",
              en: "During the French Revolution, the disgraced nobleman Arno Dorian, adopted by the Templar de la Serre family after the death of his Assassin father, is framed for the murder of his adoptive father and Templar mentor, and joins the Parisian Brotherhood of Assassins to uncover the truth and avenge him, as Paris plunges into revolutionary Terror. In the course of the investigation, Arno discovers that both orders, Assassins and Templars, have been manipulated by a conspirator infiltrated within both factions to trigger revolutionary chaos for personal gain."
            }
          },
          { id: "syndicate", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "1868",
            releaseYear: "2015", releaseYearEn: "2015",
            title: { it: "Assassin's Creed Syndicate", en: "Assassin's Creed Syndicate" },
            synopsis: {
              it: "Nella Londra vittoriana dominata dallo sfruttamento industriale, i gemelli Assassini Jacob ed Evie Frye giungono in città per strappare il controllo dei quartieri operai alla banda templare dei Blighters guidata da Pearl Attaway e Rupert Ferris, fondando una propria gang, i Rooks. Mentre Jacob si getta nel conflitto di strada con metodi diretti e talvolta imprudenti, Evie segue una pista più metodica che la porta a recuperare un antico Frutto dell'Eden custodito dai Templari, incrociando lungo il cammino figure storiche come Charles Dickens, Charles Darwin e Karl Marx.",
              en: "In Victorian London dominated by industrial exploitation, the Assassin twins Jacob and Evie Frye arrive in the city to wrest control of its working-class districts from the Templar gang known as the Blighters, led by Pearl Attaway and Rupert Ferris, founding their own gang, the Rooks. While Jacob throws himself into the street conflict with direct and sometimes reckless methods, Evie follows a more methodical trail that leads her to recover an ancient Piece of Eden held by the Templars, crossing paths along the way with historical figures such as Charles Dickens, Charles Darwin, and Karl Marx."
            }
          }
        ]
      },
      {
        id: "rivoluzione-russa",
        name: { it: "Rivoluzione Russa", en: "Russian Revolution" },
        span: { it: "1888 – 1920", en: "1888 – 1920" },
        entries: [
          { id: "the-fall", type: "FUMETTO", typeEn: "COMIC", year: "1888 – 1917",
            releaseYear: "2010", releaseYearEn: "2010",
            title: { it: "Assassin's Creed: The Fall", en: "Assassin's Creed: The Fall" },
            synopsis: {
              it: "L'Assassino russo Nikolai Orelov, membro della Narodnaja Volja, attraversa oltre due decenni di storia russa segnata dalla repressione zarista, incrociando lo Zar Alessandro III e affrontando la perdita di compagni come Aleksandr Uljanov, giustiziato dopo un attentato fallito. Le sue memorie genetiche vengono rivissute nel presente dal discepolo templare Daniel Cross, tormentato da immagini che non riesce a spiegarsi. Fumetto in tre albi che getta le basi per Assassin's Creed Chronicles: Russia.",
              en: "Russian Assassin Nikolai Orelov, a member of Narodnaya Volya, lives through more than two decades of Russian history marked by tsarist repression, crossing paths with Tsar Alexander III and enduring the loss of comrades such as Aleksandr Ulyanov, executed after a failed assassination attempt. His genetic memories are relived in the present day by the Templar operative Daniel Cross, tormented by images he cannot explain. A three-issue comic that lays the groundwork for Assassin's Creed Chronicles: Russia."
            }
          },
          { id: "chronicles-russia", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "1918",
            releaseYear: "2016", releaseYearEn: "2016",
            title: { it: "Assassin's Creed Chronicles: Russia", en: "Assassin's Creed Chronicles: Russia" },
            synopsis: {
              it: "Nel pieno del caos della Rivoluzione Russa, Nikolai Orelov sta per lasciare il paese con la propria famiglia quando la Confraternita gli affida un ultimo incarico: sottrarre un manufatto degli Isu alla famiglia dello Zar Nicola II. Nel corso della missione assiste all'uccisione della maggior parte dei figli dello Zar per mano bolscevica, riuscendo però a salvare la Granduchessa Anastasia, che dovrà proteggere insieme al manufatto dai Templari. Capitolo conclusivo della trilogia Chronicles, ambientato tra gli eventi dei fumetti The Fall e The Chain.",
              en: "Amid the chaos of the Russian Revolution, Nikolai Orelov is about to leave the country with his family when the Brotherhood assigns him one last task: to steal an Isu artefact from the family of Tsar Nicholas II. In the course of the mission he witnesses the Bolsheviks killing most of the Tsar's children, but manages to save Grand Duchess Anastasia, whom he must protect along with the artefact from the Templars. The concluding chapter of the Chronicles trilogy, set between the events of the comics The Fall and The Chain."
            }
          },
          { id: "the-chain", type: "FUMETTO", typeEn: "COMIC", year: "1918 – 1920",
            releaseYear: "2012", releaseYearEn: "2012",
            title: { it: "Assassin's Creed: The Chain", en: "Assassin's Creed: The Chain" },
            synopsis: {
              it: "Dopo essersi lasciato alle spalle la Confraternita, Nikolai Orelov emigra negli Stati Uniti col figlio Innokenti per proteggerlo, ma viene raggiunto dall'ex compagno Sergei, inviato dal Mentore per riportarlo in Russia a causa di ciò che ha visto durante l'evento di Tunguska. Quando Sergei minaccia il ragazzo, Nikolai lo uccide, chiudendo definitivamente i conti con il proprio passato di Assassino. Nel presente, il discepolo templare Daniel Cross continua a rivivere questi ricordi attraverso l'effetto sanguinamento, senza comprenderne appieno il peso. Seguito a fumetti di The Fall, conclude la storia di Orelov.",
              en: "Having left the Brotherhood behind, Nikolai Orelov emigrates to the United States with his son Innokenti to protect him, but is tracked down by his former comrade Sergei, sent by the Mentor to bring him back to Russia because of what he witnessed during the Tunguska event. When Sergei threatens the boy, Nikolai kills him, closing the book on his past as an Assassin for good. In the present, Templar operative Daniel Cross continues to relive these memories through the Bleeding Effect, without fully understanding their weight. A sequel comic to The Fall, it concludes Orelov's story."
            }
          }
        ]
      }
    ]
  },

  castlevania: {
    id: "castlevania",
    listTitle: { it: "Castlevania", en: "Castlevania" },
    eyebrow: { it: "Fascicolo", en: "Case File" },
    title: { it: "Castlevania", en: "Castlevania" },
    blurb: {
      it: "Nel cuore della Valacchia, il nome dei Belmont è legato a un'unica missione tramandata di generazione in generazione: fermare Dracula, ogni volta che il suo potere risorge dall'ombra. Ogni epoca porta un nuovo eroe, una nuova battaglia contro lo stesso male immortale. La linea di sangue non si spezza mai.",
      en: "In the heart of Wallachia, the Belmont name has always carried one mission, passed down through the generations: to stop Dracula, whenever his power rises again from the shadows. Every era brings a new hero, a new battle against the same undying evil. The bloodline never breaks."
    },
    palette: ["#6b0d1a", "#4b2e6b", "#d4af37"],
    accentColor: "#6b0d1a",
    tracks: [
      { src: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Castlevania%20Vampire%20Killer.mp3", title: "Vampire Killer", game: "Castlevania (1986)" },
      { src: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Castlevania%20Invitation%20of%20a%20Crazed%20Moon.mp3", title: "Invitation of a Crazed Moon", game: "Portrait of Ruin" },
      { src: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Castlevania%20Bloody%20Tears.mp3", title: "Bloody Tears", game: "Simon's Quest" },
      { src: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Castlevania%20Wood%20Carving%20Partita.mp3", title: "Wood Carving Partita", game: "Symphony of the Night" },
      { src: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Castlevania%20The%20Gears%20Go%20Awry.mp3", title: "The Gears Go Awry", game: "Portrait of Ruin" },
      { src: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Castlevania%20Sorrow%27s%20Distortion.mp3", title: "Sorrow's Distortion", game: "Order of Ecclesia" },
      { src: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Castlevania%20The%20Tragic%20Prince.mp3", title: "The Tragic Prince", game: "Symphony of the Night" }
    ],
    bannerOffset: 265,
    avatar: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Castlevania%20Avatar.jpg",
    banner: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Castlevania%20Banner.jpg",
    watermark: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Castlevania%20Filigrana.jpg",
    watermarkOpacity: 0.18,
    universes: [
      {
        id: "iga",
        name: { it: "Universo IGA (Koji Igarashi)", en: "IGA Universe (Koji Igarashi)" },
        span: { it: "1094 – 2036", en: "1094 – 2036" },
        entries: [
          { id: "lament-of-innocence", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "1094",
            releaseYear: "2003", releaseYearEn: "2003",
            title: { it: "Lament of Innocence", en: "Lament of Innocence" },
            image: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Castlevania%20Lament%20of%20Innocence.jpg",
            synopsis: {
              it: "Leon Belmont, barone e cavaliere medievale, rinuncia al suo titolo e si infiltra nel castello del vampiro Walter Bernhard nella Foresta della Notte Eterna per salvare la sua promessa sposa Sara Trantoul, rapita su indicazione dell'amico Mathias Cronqvist. L'alchimista Rinaldo Gandolfi gli affida la Whip of Alchemy: ha un motivo personale per aiutarlo, poiché cinque anni prima Walter aveva trasformato in vampira sua figlia Justine, che uccise la moglie e il figlio di Rinaldo prima che l'alchimista stesso fosse costretto a ucciderla con un'arma forgiata apposta. Prima di poter affrontare Walter, Leon deve sconfiggere cinque guardiani del castello che ne sorvegliano le stanze. Leon scopre che Sara è già stata vampirizzata da Walter ed è costretto a ucciderla per salvarne l'anima: il suo sacrificio trasforma la frusta nella leggendaria Vampire Killer. Dopo aver sconfitto Walter, la Morte gli ruba l'anima per consegnarla a Mathias, che rivela di aver orchestrato tutto per diventare vampiro immortale e vendicarsi di Dio per la morte della moglie Elisabetha. Leon rifiuta l'immortalità offerta da Mathias, sconfigge la Morte e giura che il clan Belmont caccerà Mathias, d'ora in poi noto come Dracula, per sempre.",
              en: "Leon Belmont, a medieval baron and knight, renounces his title and infiltrates the castle of the vampire Walter Bernhard in the Eternal Night Forest to rescue his betrothed Sara Trantoul, who was kidnapped at the urging of his friend Mathias Cronqvist. The alchemist Rinaldo Gandolfi entrusts him with the Whip of Alchemy: he has a personal reason to help, as five years earlier Walter had turned his daughter Justine into a vampire, who killed Rinaldo's wife and son before the alchemist himself was forced to kill her with a weapon forged for that very purpose. Before he can face Walter, Leon must defeat five guardians stationed throughout the castle. Leon discovers that Sara has already been vampirised by Walter and is forced to kill her to save her soul, her sacrifice transforms the whip into the legendary Vampire Killer. After defeating Walter, Death steals his soul and delivers it to Mathias, who reveals he orchestrated everything to become an immortal vampire and take revenge on God for the death of his wife Elisabetha. Leon refuses the immortality Mathias offers him, defeats Death, and swears that the Belmont clan will hunt Mathias, henceforth known as Dracula, forever."
            }
          },
          { id: "draculas-curse", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "1476",
            releaseYear: "1989", releaseYearEn: "1989",
            title: { it: "Dracula's Curse", en: "Dracula's Curse" },
            image: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Castlevania%20III%20Dracula%27s%20Curse.jpg",
            synopsis: {
              it: "Dracula scatena le sue armate sulla Valacchia decimando persino gli eserciti della Chiesa. I Belmont, esiliati dalla popolazione per i loro poteri soprannaturali, vengono richiamati dalla Chiesa stessa come ultima risorsa. Trevor Belmont accetta l'incarico nonostante il clan sia stato esiliato dalla stessa popolazione che ora invoca il suo aiuto, e percorre la Valacchia in rovina per raggiungere il castello. Lungo la strada libera Grant Danasty, un pirata che Dracula aveva trasformato in mostro dopo che aveva tentato di ribellarsi, e Sypha Belnades, una strega tramutata in pietra da un incantesimo. Si allea inoltre con Alucard, figlio di Dracula che ripudia il padre. I quattro assaltano il castello e Trevor sconfigge Dracula. Alucard, incapace di elaborare il dolore di aver combattuto suo padre, si auto-induce in un sonno profondo. Trevor e Sypha si sposano una volta ristabilita la pace.",
              en: "Dracula unleashes his armies upon Wallachia, decimating even the Church's own soldiers. The Belmont clan, exiled by the people for their supernatural powers, are called upon by the Church itself as a last resort. Trevor Belmont accepts the mission despite his clan having been banished by the very people now begging for his help, and travels through the ravaged countryside toward the castle. Along the way, he frees Grant Danasty, a pirate Dracula had cursed and transformed into a monster after he tried to rebel, and Sypha Belnades, a witch petrified by a spell. He also allies with Alucard, Dracula's son who has turned against his father. The four storm the castle and Trevor defeats Dracula. Alucard, unable to cope with having fought his own father, enters a self-induced slumber. Trevor and Sypha marry once peace is restored."
            }
          },
          { id: "curse-of-darkness", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "1479",
            releaseYear: "2005", releaseYearEn: "2005",
            title: { it: "Curse of Darkness", en: "Curse of Darkness" },
            image: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Castlevania%20Curse%20of%20Darkness.jpg",
            synopsis: {
              it: "Tre anni dopo la sconfitta di Dracula, la sua maledizione persiste sulla Valacchia seminando pestilenza e carestia. Hector, ex Devil Forgemaster che aveva abbandonato il servizio di Dracula per vivere una vita normale, scopre che il suo ex commilitone Isaac ha orchestrato un falso processo per stregoneria contro la moglie Rosaly, facendola bruciare sul rogo. Hector riprende i suoi poteri per inseguire Isaac fino al castello. Nel corso della missione incontra Trevor Belmont, che Isaac pugnala alle spalle, e Julia, sorella di Isaac e strega alleata di Hector. Si rivela che il misterioso consigliere Zead, che aveva manipolato tutti dall'ombra, è in realtà la Morte stessa: il suo piano era usare un Devil Forgemaster come vaso per resuscitare Dracula. Hector sconfigge la Morte e poi Isaac, ma la caduta di quest'ultimo risveglia comunque Dracula, ancora debole. Hector lo sconfigge e usa i suoi poteri per spezzare definitivamente la maledizione. Nel finale sceglie di ritirarsi in montagna insieme a Julia.",
              en: "Three years after Dracula's defeat, his curse still plagues Wallachia with disease and famine. Hector, a former Devil Forgemaster who had abandoned Dracula's service to live a normal life, discovers that his fellow Forgemaster Isaac orchestrated a false witchcraft trial against his wife Rosaly, having her burned at the stake. Hector reclaims his powers to pursue Isaac to the castle. Along the way he encounters Trevor Belmont, who Isaac stabs in the back, and Julia, Isaac's sister and a witch who aids Hector. It is revealed that the mysterious advisor Zead, who had been manipulating everyone from the shadows, is Death itself: his plan was to use a Devil Forgemaster as a vessel to resurrect Dracula. Hector defeats Death and then Isaac, but Isaac's fall inadvertently awakens Dracula, still weakened. Hector defeats him and uses his powers to break the curse once and for all. In the epilogue, he chooses to retire to the mountains alongside Julia."
            }
          },
          { id: "the-adventure", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "1576",
            releaseYear: "1989", releaseYearEn: "1989",
            title: { it: "The Adventure", en: "The Adventure" },
            image: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Castlevania%20The%20Adventure.jpg",
            synopsis: {
              it: "Un secolo dopo la sconfitta per mano di Trevor Belmont, Dracula risorge in Transilvania. È da questo momento che si stabilisce il ciclo leggendario: ogni cento anni, quando la fede in Dio si affievolisce, Dracula torna in vita. Christopher Belmont, discendente di Trevor e Sypha, impugna la Vampire Killer e si fa strada attraverso il castello fino ad affrontare il conte in duello. Lo sconfigge e il castello crolla, ma Dracula finge la morte trasformandosi in nebbia e si ritira per recuperare le forze nell'ombra.",
              en: "A century after his defeat at the hands of Trevor Belmont, Dracula rises again in Transylvania. It is from this point that the legendary cycle is established: every hundred years, when faith in God weakens, Dracula returns to life. Christopher Belmont, descendant of Trevor and Sypha, takes up the Vampire Killer and fights his way through the castle to face the Count in a final duel. He defeats him and the castle crumbles, but Dracula feigns death by transforming into mist, retreating into the shadows to slowly regain his strength."
            }
          },
          { id: "belmonts-revenge", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "1591",
            releaseYear: "1991", releaseYearEn: "1991",
            title: { it: "Belmont's Revenge", en: "Belmont's Revenge" },
            image: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Castlevania%20II%20Belmont%27s%20Revenge.jpg",
            synopsis: {
              it: "Quindici anni dopo The Adventure, Christopher Belmont organizza la cerimonia in cui suo figlio Soleil riceve ufficialmente il titolo di cacciatore di vampiri. Dracula, ancora intrappolato nella forma di nebbia, coglie l'occasione per corrompere i poteri sacri appena conferiti a Soleil, trasformandolo in un demone e usando il suo corpo per riacquistare forma fisica. Quattro castelli sorgono in Valacchia. Christopher percorre i quattro castelli uno per uno, affronta Soleil posseduto e lo libera dalla corruzione. Raggiunto Dracula nel suo castello, lo sconfigge e la pace torna in Valacchia.",
              en: "Fifteen years after The Adventure, Christopher Belmont organises the ceremony in which his son Soleil officially receives the title of vampire hunter. Dracula, still trapped in mist form, seizes the opportunity to corrupt the sacred powers just granted to Soleil, transforming him into a demon and using his body to reclaim physical form. Four castles rise across Wallachia. Christopher fights his way through each of the four castles, confronts the possessed Soleil and frees him from the corruption. He then reaches Dracula's castle, defeats the Count, and peace returns to Wallachia."
            }
          },
          { id: "castlevania-1691", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "1691",
            releaseYear: "1986", releaseYearEn: "1986",
            title: { it: "Castlevania", en: "Castlevania" },
            image: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Castlevania.jpg",
            synopsis: {
              it: "Un secolo dopo Christopher Belmont, un culto dei Seguaci delle Tenebre compie una messa nera nel monastero abbandonato ai margini del villaggio, sacrificando sangue umano sui resti di Dracula per resuscitarlo la notte di Pasqua. Il castello riappare in Transilvania. Simon Belmont, pronipote di Christopher e nuovo proprietario della Vampire Killer, si infiltra da solo nel castello, abbatte i servitori del conte e affronta Dracula in duello sconfiggendolo. Prima di perire, Dracula riesce a maledire Simon infliggendogli una ferita avvelenata destinata a consumarlo lentamente.",
              en: "A century after Christopher Belmont, a cult of Followers of Darkness performs a Black Mass in the abandoned monastery at the edge of the village, pouring human blood over Dracula's remains to resurrect him on Easter night. The castle reappears in Transylvania. Simon Belmont, Christopher's great-grandson and the new wielder of the Vampire Killer, infiltrates the castle alone, cuts down the Count's servants, and defeats Dracula in a final duel. Before perishing, Dracula manages to curse Simon, inflicting a poisoned wound destined to slowly consume him."
            }
          },
          { id: "simons-quest", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "1698",
            releaseYear: "1988", releaseYearEn: "1988",
            title: { it: "Simon's Quest", en: "Simon's Quest" },
            image: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Castlevania%20II%20Simon%27s%20Quest.jpg",
            synopsis: {
              it: "Sette anni dopo gli eventi di Castlevania, Simon Belmont scopre di essere afflitto dalla maledizione che Dracula gli aveva inflitto prima di morire. Una donna misteriosa apparsa nella nebbia lo avverte che ha poco tempo da vivere e che l'unico modo per spezzare la maledizione è resuscitare Dracula e sconfiggerlo una seconda volta. Simon percorre la Transilvania raccogliendo i cinque resti del conte, dispersi in altrettante magioni: la costola, il cuore, l'occhio, l'unghia e l'anello. Li porta alle rovine del castello e brucia i resti, resuscitando Dracula in forma indebolita. Lo sconfigge e la maledizione viene spezzata. Grazie alle sue gesta, il clan Belmont viene finalmente reintegrato dalla comunità dopo secoli di esilio.",
              en: "Seven years after the events of Castlevania, Simon Belmont discovers he is afflicted by the curse Dracula placed on him before dying. A mysterious woman appearing in the mist warns him that he has little time to live and that the only way to break the curse is to resurrect Dracula and defeat him a second time. Simon travels across Transylvania collecting the Count's five remains, scattered across five separate mansions: the rib, the heart, the eye, the nail, and the ring. He brings them to the ruins of the castle and burns them, resurrecting a weakened Dracula. He defeats him and the curse is broken. Thanks to his deeds, the Belmont clan is finally welcomed back into the community after centuries of exile."
            }
          },
          { id: "harmony-of-dissonance", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "1748",
            releaseYear: "2002", releaseYearEn: "2002",
            title: { it: "Harmony of Dissonance", en: "Harmony of Dissonance" },
            image: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Castlevania%20Harmony%20of%20Dissonance.jpg",
            synopsis: {
              it: "Cinquant'anni dopo Simon's Quest, Maxim Kischine torna da un viaggio di allenamento con ferite gravi e senza ricordi, annunciando che la loro amica d'infanzia Lydie Erlanger è stata rapita. Juste Belmont, nipote di Simon e nuovo proprietario della Vampire Killer, lo segue fino a un castello misterioso. Dentro, Juste scopre la verità: mosso dall'invidia verso i Belmont, Maxim aveva tentato di emulare Simon raccogliendo da solo i resti di Dracula per poterlo sconfiggere e dimostrare il proprio valore. Il processo lo ha lasciato posseduto dallo spirito del conte. Juste raccoglie i resti, distrugge la possessione e affronta la forma spettrale di Dracula che tenta di ricomporsi attraverso di essi. Lo sconfigge. Maxim si risveglia libero dalla corruzione e i tre amici escono indenni dal castello.",
              en: "Fifty years after Simon's Quest, Maxim Kischine returns from a training expedition gravely wounded and with no memories, bringing news that their childhood friend Lydie Erlanger has been kidnapped. Juste Belmont, Simon's grandson and the new owner of the Vampire Killer, follows him to a mysterious castle. Inside, Juste uncovers the truth: driven by envy toward the Belmonts, Maxim had attempted to emulate Simon by collecting Dracula's remains on his own, hoping to defeat the Count himself and prove his worth. The process left him possessed by the Count's spirit. Juste gathers the remains, breaks the possession, and faces the spectral form of Dracula as he attempts to reconstitute himself through them. He defeats him. Maxim awakens free from corruption and the three friends escape the castle unharmed."
            }
          },
          { id: "rondo-of-blood", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "1792",
            releaseYear: "1993", releaseYearEn: "1993",
            title: { it: "Rondo of Blood", en: "Rondo of Blood" },
            image: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Castlevania%20Rondo%20of%20Blood.jpg",
            synopsis: {
              it: "Il sacerdote oscuro Shaft resuscita Dracula, che attacca il villaggio di Richter Belmont rapendo quattro donne: la fidanzata Annette, scelta deliberatamente come esca per attirare il Belmont nel castello, la giovane Maria Renard, lontana parente del clan con poteri magici, e altre due abitanti del luogo. Richter si fa strada attraverso il castello, libera le prigioniere e affronta Dracula in duello sconfiggendolo. Maria, lungi dall'essere un semplice ostaggio, combatte al suo fianco. Nel finale Dracula riconosce che il sangue dei Belmont lo ha ancora una volta sconfitto.",
              en: "The dark priest Shaft resurrects Dracula, who attacks Richter Belmont's village and kidnaps four women: his girlfriend Annette, deliberately chosen as bait to lure the Belmont to the castle, the young Maria Renard, a distant relative of the clan gifted with magical powers, and two other villagers. Richter fights his way through the castle, frees the captives, and defeats Dracula in a final duel. Maria, far from being a mere hostage, fights alongside him. In the ending, Dracula acknowledges that the blood of the Belmonts has defeated him once again."
            }
          },
          { id: "symphony-of-the-night", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "1797",
            releaseYear: "1997", releaseYearEn: "1997",
            title: { it: "Symphony of the Night", en: "Symphony of the Night" },
            image: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Castlevania%20Symphony%20of%20the%20Night.jpg",
            note: { it: "Uno dei titoli più celebrati della saga e padre del genere Metroidvania.", en: "One of the most celebrated titles in the franchise and the defining game of the Metroidvania genre." },
            synopsis: {
              it: "Cinque anni dopo Rondo of Blood, Richter Belmont scompare misteriosamente e il castello di Dracula riappare. Alucard, figlio di Dracula, si risveglia dal suo sonno millenario e si infiltra nel castello. Lì incontra Maria Renard, che era già entrata da sola in cerca di Richter. Alucard scopre che Richter è sotto il controllo del sacerdote oscuro Shaft, che lo usa come signore del castello per attirare e uccidere chiunque tenti di investigare, eliminando così il clan Belmont dall'interno. Usando gli Holy Glasses donatigli da Maria, Alucard rompe il controllo su Richter. Shaft evoca allora un castello invertito nel cielo: lì risiede il potere per resuscitare Dracula. Alucard penetra nel castello invertito, sconfigge Shaft e affronta infine Dracula resuscitato, abbattendolo definitivamente. Nel momento della sconfitta, Dracula chiede ad Alucard quali fossero state le ultime parole di sua madre Lisa, giustiziata come strega anni prima: un attimo di vulnerabilità che rivela il dolore ancora vivo dietro la furia del conte. Richter e Maria escono indenni. Il castello invertito, rivelato solo a chi scopre la vera natura della corruzione di Richter, raddoppia di fatto l'intera avventura: un colpo di scena strutturale, non solo narrativo, che ha reso il gioco un punto di riferimento per l'intero genere.",
              en: "Five years after Rondo of Blood, Richter Belmont mysteriously vanishes and Dracula's castle reappears. Alucard, Dracula's son, awakens from his centuries-long slumber and infiltrates the castle, where he encounters Maria Renard, who had already entered on her own in search of Richter. Alucard discovers that Richter is under the control of the dark priest Shaft, who is using him as the castle's lord to lure and destroy anyone who dares investigate, eliminating the Belmont clan from within. Using the Holy Glasses gifted to him by Maria, Alucard breaks the spell on Richter. Shaft then summons an inverted castle in the sky, where the power to resurrect Dracula lies. Alucard fights his way through the inverted castle, defeats Shaft, and finally confronts the resurrected Dracula, striking him down. In his final moment of defeat, Dracula asks Alucard what his mother Lisa's last words were before she was executed as a witch years earlier, a brief moment of vulnerability that reveals the grief still alive beneath the Count's fury. Richter and Maria escape unharmed. The inverted castle, revealed only to those who uncover the true nature of Richter's corruption, effectively doubles the entire adventure, a structural twist as much as a narrative one, which turned the game into a landmark for the entire genre."
            }
          },
          { id: "order-of-ecclesia", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "18XX",
            releaseYear: "2008", releaseYearEn: "2008",
            title: { it: "Order of Ecclesia", en: "Order of Ecclesia" },
            image: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Castlevania%20Order%20of%20Ecclesia.jpg",
            synopsis: {
              it: "Con il clan Belmont scomparso, diverse organizzazioni cercano un modo alternativo per sconfiggere Dracula. La più promettente è l'Ordine di Ecclesia, guidato da Barlowe, che ha creato il Dominus, un trio di glifi abbastanza potenti da distruggere il conte. Shanoa viene scelta come vaso per assorbirli, ma durante il rituale il collega Albus interrompe la cerimonia e fugge con i glifi, privando Shanoa di memorie ed emozioni nel processo. Barlowe la manda a recuperarli. Nel corso dell'inseguimento Shanoa scopre la verità: Albus ha rubato il Dominus per proteggerla, sapendo che usarlo avrebbe consumato l'anima di chi lo impiega. Il vero traditore è Barlowe, che ha orchestrato tutto per resuscitare Dracula, sacrificandosi per completare il rituale. Shanoa affronta e sconfigge Dracula, ma per sigillarlo deve usare il Dominus, condannando se stessa. Albus, la cui anima si è fusa con il glifo, si sacrifica al suo posto, le restituisce le memorie e svanisce. Dracula perisce e il castello crolla. Ogni traccia dell'Ordine di Ecclesia scompare poco dopo.",
              en: "With the Belmont clan gone, several organisations seek an alternative way to defeat Dracula. The most promising is the Order of Ecclesia, led by Barlowe, which has created Dominus, a trio of glyphs powerful enough to destroy the Count. Shanoa is chosen as the vessel to absorb them, but during the ritual her fellow member Albus interrupts the ceremony and flees with the glyphs, leaving Shanoa stripped of her memories and emotions. Barlowe sends her to retrieve them. In the course of the pursuit, Shanoa uncovers the truth: Albus stole Dominus to protect her, knowing that using it would consume the soul of its wielder. The real traitor is Barlowe, who orchestrated everything to resurrect Dracula, ultimately sacrificing himself to complete the ritual. Shanoa confronts and defeats Dracula, but sealing him requires the use of Dominus, condemning herself in the process. Albus, whose soul has merged with the glyph, sacrifices himself in her place, restores her memories, and fades away. Dracula perishes and the castle crumbles. All records of the Order of Ecclesia vanish shortly after."
            }
          },
          { id: "bloodlines", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "1917",
            releaseYear: "1994", releaseYearEn: "1994",
            title: { it: "Bloodlines", en: "Bloodlines" },
            image: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Castlevania%20Bloodlines.jpg",
            note: { it: "Epilogo amaro: poiché John non è un Belmont puro, la Vampire Killer ha drenato la sua energia vitale durante il combattimento. Non si riprenderà mai completamente dalle ferite e morirà prima del 1944.", en: "Bitter epilogue: since John is not a pure Belmont, the Vampire Killer drained his life force during the battle. He never fully recovers from his wounds and dies before 1944." },
            synopsis: {
              it: "Nel 1914, Elizabeth Bartley, nipote vampira di Dracula, resuscitata dalla strega Drolta Tzuentes, orchestra l'assassinio dell'Arciduca Francesco Ferdinando a Sarajevo per scatenare la Prima Guerra Mondiale e usare le anime dei caduti per resuscitare il conte. John Morris, figlio di Quincy Morris e lontano discendente del clan Belmont, impugna la Vampire Killer per fermarla. Lo affianca Eric Lecarde, che ha una ragione personale: Elizabeth ha trasformato la sua fidanzata Gwendolyn in vampiro. I due inseguono Elizabeth e Drolta attraverso l'Europa fino al Castello Proserpina in Inghilterra, dove sconfiggono entrambe e Dracula.",
              en: "In 1914, Elizabeth Bartley, Dracula's vampiress niece, is resurrected by the witch Drolta Tzuentes and orchestrates the assassination of Archduke Franz Ferdinand in Sarajevo to trigger World War I, using the souls of the fallen as fuel to resurrect the Count. John Morris, son of Quincy Morris and a distant descendant of the Belmont clan, takes up the Vampire Killer to stop her. At his side is Eric Lecarde, who has a personal score to settle: Elizabeth transformed his fiancée Gwendolyn into a vampire. The two pursue Elizabeth and Drolta across Europe to Castle Proserpina in England, where they defeat both women and Dracula himself."
            }
          },
          { id: "portrait-of-ruin", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "1944",
            releaseYear: "2006", releaseYearEn: "2006",
            title: { it: "Portrait of Ruin", en: "Portrait of Ruin" },
            image: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Castlevania%20Portrait%20of%20Ruin.jpg",
            synopsis: {
              it: "Durante la Seconda Guerra Mondiale, l'energia delle anime dei caduti risveglia il castello di Dracula. A prenderne il controllo non è però il conte, ma Brauner, un pittore umano impazzito per la morte delle figlie nella Prima Guerra Mondiale, che ha fatto un patto per diventare vampiro e ora vuole distruggere l'umanità per vendicarsi. Ha vampirizzato due donne, Stella e Loretta, convincendole di essere le sue figlie reincarnate. Jonathan Morris, figlio di John e nuovo erede della Vampire Killer, e la maga Charlotte Aulin entrano nel castello e vengono guidati dallo spettro di Eric Lecarde. Distruggono i quadri magici con cui Brauner controlla il castello, liberano Stella e Loretta dalla vampirizzazione e affrontano Brauner, uccidendolo. La Morte interviene e sacrifica la propria anima per resuscitare Dracula al suo posto. Jonathan e Charlotte sconfiggono Dracula e la Morte insieme. Il castello crolla e lo spettro di Eric, non più legato al castello, può finalmente trovare pace.",
              en: "During World War II, the souls of the fallen reawaken Dracula's castle. Its lord, however, is not the Count but Brauner, a human painter driven mad by the death of his daughters in World War I, who made a pact to become a vampire and now seeks to destroy humanity in revenge. He has vampirised two women, Stella and Loretta, convincing them they are his reincarnated daughters. Jonathan Morris, son of John and the new inheritor of the Vampire Killer, and the sorceress Charlotte Aulin enter the castle, guided by the ghost of Eric Lecarde. They destroy the magical portraits through which Brauner controls the castle, free Stella and Loretta from their vampirisation, and confront Brauner, killing him. Death intervenes and sacrifices his own soul to resurrect Dracula in his place. Jonathan and Charlotte defeat both Dracula and Death. The castle crumbles and Eric's ghost, no longer bound to it, can finally find peace."
            }
          },
          { id: "demon-castle-war", type: "STORIA", typeEn: "STORY", year: "11 agosto 1999", yearEn: "August 11, 1999",
            noAvatar: true,
            title: { it: "La Guerra dei Demoni", en: "The Demon Castle War" },
            synopsis: {
              it: "Nell'anno in cui Dracula sarebbe dovuto risorgere per l'ennesima volta, Julius Belmont, ultimo discendente noto del clan Belmont, guida un gruppo di cacciatori comprendente Alucard e membri del clan Belnades in un assalto diretto al castello. Insieme compiono un rituale che distrugge Dracula e sigilla il castello e i suoi poteri all'interno di un'eclissi solare. L'impatto del rituale priva Julius della memoria: rammenta solo che il suo nome inizia con la lettera J. Questo evento, noto come la Demon Castle War, pone fine al ciclo millenario di resurrezioni di Dracula. L'anima del conte, però, non scompare: si reincarna in un nuovo corpo senza memorie del passato, quello di Soma Cruz.",
              en: "In the year Dracula was destined to rise once more, Julius Belmont, the last known descendant of the Belmont clan, leads a group of hunters including Alucard and members of the Belnades clan in a direct assault on the castle. Together they perform a ritual that destroys Dracula and seals the castle and his powers within a solar eclipse. The impact of the ritual strips Julius of his memory: he can only recall that his name begins with the letter J. This event, known as the Demon Castle War, brings an end to Dracula's millennial cycle of resurrections. The Count's soul, however, does not vanish, it reincarnates into a new body with no memory of the past: that of Soma Cruz."
            }
          },
          { id: "aria-of-sorrow", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "2035",
            releaseYear: "2003", releaseYearEn: "2003",
            title: { it: "Aria of Sorrow", en: "Aria of Sorrow" },
            image: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Castlevania%20Aria%20of%20Sorrow.jpg",
            synopsis: {
              it: "Nel 2035, durante la prima eclissi del ventunesimo secolo, lo studente giapponese Soma Cruz e la sua amica d'infanzia Mina Hakuba vengono risucchiati all'interno del castello di Dracula. Soma scopre di possedere il Power of Dominance: la capacità di assorbire le anime dei mostri sconfitti, potere esclusivo del Dark Lord. L'agente governativo Genya Arikado, in realtà Alucard, lo guida attraverso il castello. L'antagonista è Graham Jones, un missionario convinto di essere la reincarnazione di Dracula. Soma lo sconfigge e scopre che la reincarnazione è lui, non Graham. Rifiuta il suo destino oscuro e il castello crolla. Soma e Mina escono indenni dall'eclissi.",
              en: "In 2035, during the first eclipse of the twenty-first century, Japanese student Soma Cruz and his childhood friend Mina Hakuba are pulled inside Dracula's castle. Soma discovers he possesses the Power of Dominance, the ability to absorb the souls of defeated monsters, a power exclusive to the Dark Lord. Government agent Genya Arikado, who is in truth Alucard, guides him through the castle. The antagonist is Graham Jones, a missionary convinced he is Dracula's reincarnation. Soma defeats him and discovers that the true reincarnation is himself, not Graham. He rejects his dark destiny and the castle crumbles. Soma and Mina escape the eclipse unharmed."
            }
          },
          { id: "dawn-of-sorrow", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "2036",
            releaseYear: "2005", releaseYearEn: "2005",
            title: { it: "Dawn of Sorrow", en: "Dawn of Sorrow" },
            image: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Castlevania%20Dawn%20of%20Sorrow.jpg",
            synopsis: {
              it: "Un anno dopo Aria of Sorrow, Soma Cruz vive in pace quando viene attaccato da Celia Fortner, leader di un culto convinto che senza un Dark Lord non possa esistere un vero bene nel mondo. Celia ha due candidati per il ruolo: Dmitrii Blinov e Dario Bossi, entrambi nati il giorno della morte di Dracula nel 1999 e dotati di poteri oscuri. Il piano alternativo è far cedere Soma alla sua natura oscura, spingendolo ad abbracciare volontariamente il ruolo di reincarnazione di Dracula. Soma irrompe nel castello costruito dal culto, sconfigge entrambi i candidati e affronta Celia. Nel momento decisivo, Celia fa apparire un doppio di Mina e lo uccide davanti a Soma per farlo sprofondare nell'oscurità. Soma, grazie al talismano di Mina che porta con sé, riconosce l'inganno, mantiene la propria umanità e sconfigge il Chaos, la forza primordiale che alimenta il potere del Dark Lord. Dracula non risorge. Soma e Mina si riconoscono i propri sentimenti.",
              en: "One year after Aria of Sorrow, Soma Cruz is living in peace when he is attacked by Celia Fortner, the leader of a cult that believes true good cannot exist without a Dark Lord to oppose it. Celia has two candidates for the role: Dmitrii Blinov and Dario Bossi, both born on the day of Dracula's death in 1999 and gifted with dark powers. Her backup plan is to push Soma into embracing his nature as Dracula's reincarnation. Soma storms the castle built by the cult, defeats both candidates, and confronts Celia. At the decisive moment, Celia conjures a double of Mina and kills her in front of Soma to drag him into darkness. Soma, protected by Mina's talisman, sees through the deception, holds on to his humanity, and destroys Chaos, the primordial force fuelling the Dark Lord's power. Dracula does not rise. Soma and Mina acknowledge their feelings for each other."
            }
          }
        ]
      },
      {
        id: "mercurysteam",
        name: { it: "Universo MercurySteam", en: "MercurySteam Universe" },
        span: { it: "1047 – Epoca Moderna", en: "1047 – Modern Era" },
        entries: [
          { id: "lords-of-shadow", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "1047",
            releaseYear: "2010", releaseYearEn: "2010",
            title: { it: "Lords of Shadow", en: "Lords of Shadow" },
            image: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Castlevania%20Lords%20of%20Shadow.jpg",
            synopsis: {
              it: "La terra è separata dal Cielo e le anime dei morti sono intrappolate nel mondo mortale. Gabriel Belmont, cavaliere della Brotherhood of Light, viene inviato a sconfiggere i tre Lords of Shadow per recuperare i pezzi della God Mask, un'antica reliquia capace di riconnettere il mondo divino a quello terreno. Gabriel ha anche una motivazione personale: vuole usare la God Mask per resuscitare la moglie Marie, assassinata mentre era via in missione. Sconfigge i tre Lords of Shadow con l'aiuto del mentore Zobek, ma scopre che è stato Zobek stesso a manipolarlo dall'inizio usando la Devil Mask per controllarne la mente, ed è stato Gabriel stesso, in stato di trance, ad uccidere Marie. Il vero antagonista è Satana, che ha usato Zobek come pedina per separare la terra dal Cielo. Gabriel sconfigge Satana e Marie ascende in Paradiso, liberando le anime intrappolate.\n\nNei DLC canonici Reverie e Resurrection, Gabriel scopre che sconfiggendo i Lords of Shadow ha liberato involontariamente il Forgotten One, un demone primordiale. Lo sconfigge con l'aiuto di Laura, figlia adottiva di Carmilla, uno dei tre Lords of Shadow da lui sconfitti in precedenza, che sacrifica la propria vita nel processo. Gabriel assorbe il potere del demone perdendo definitivamente la sua umanità. Nel finale si scopre che secoli dopo Gabriel è diventato Dracula.",
              en: "The Earth has been severed from Heaven and the souls of the dead are trapped in the mortal realm. Gabriel Belmont, a knight of the Brotherhood of Light, is sent to defeat the three Lords of Shadow and recover the pieces of the God Mask, an ancient relic capable of reconnecting the divine world to the earthly one. Gabriel also has a personal motivation: he hopes to use the God Mask to resurrect his wife Marie, murdered while he was away on a mission. He defeats the three Lords of Shadow with the guidance of his mentor Zobek, only to discover that Zobek himself has been manipulating him all along using the Devil Mask to control his mind, and that it was Gabriel himself, in a trance state, who killed Marie. The true antagonist is Satan, who used Zobek as a pawn to sever Earth from Heaven. Gabriel defeats Satan and Marie ascends to Heaven, freeing the trapped souls.\n\nIn the canonical DLCs Reverie and Resurrection, Gabriel discovers that by defeating the Lords of Shadow he has inadvertently freed the Forgotten One, a primordial demon. He defeats it with the help of Laura, the adopted daughter of Carmilla, one of the three Lords of Shadow he previously defeated, who sacrifices her life in the process. Gabriel absorbs the demon's power, losing his humanity in the process. The epilogue reveals that centuries later, Gabriel has become Dracula."
            }
          },
          { id: "mirror-of-fate", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "1073 e 1103", yearEn: "1073 and 1103",
            releaseYear: "2013", releaseYearEn: "2013",
            title: { it: "Mirror of Fate", en: "Mirror of Fate" },
            image: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Castlevania%20Lords%20of%20Shadow%20%E2%80%93%20Mirror%20of%20Fate.jpg",
            synopsis: {
              it: "La storia si svolge in due epoche. Nel 1073 Trevor Belmont, figlio di Gabriel cresciuto in segreto dalla Brotherhood of Light, scopre la verità sulle sue origini e si infiltra nel castello per uccidere suo padre. I due si scontrano e Trevor viene trafitto dalla propria Combat Cross per mano di Dracula. Solo allora Trevor rivela di essere suo figlio. Sconvolto, Dracula tenta disperatamente di riportarlo in vita trasformandolo in vampiro, ma Trevor sembra morto. Dracula lo seppellisce incidendo sulla tomba il nome \"Alucard\" per proteggerne l'identità. Nel 1103 Simon Belmont, figlio di Trevor, entra nel castello per vendicare l'uccisione dei genitori, ignaro che il vampiro che vuole uccidere è suo nonno. Trevor nel frattempo si è risvegliato come Alucard e segue Simon nell'ombra senza rivelare la propria identità. I due affrontano Dracula insieme e lo sconfiggono.",
              en: "The story unfolds across two time periods. In 1073, Trevor Belmont, Gabriel's son, raised in secret by the Brotherhood of Light, discovers the truth about his origins and infiltrates the castle to kill his father. The two clash and Trevor is impaled by his own Combat Cross at Dracula's hand. Only then does Trevor reveal that he is his son. Shattered by the revelation, Dracula desperately attempts to revive him by turning him into a vampire, but Trevor appears dead. Dracula buries him, engraving the name \"Alucard\" on the tomb to protect his identity. In 1103, Simon Belmont, Trevor's son, enters the castle to avenge the deaths of his parents, unaware that the vampire he seeks to destroy is his own grandfather. Trevor, meanwhile, has awakened as Alucard and follows Simon through the castle without revealing his true identity. The two confront Dracula together and defeat him."
            }
          },
          { id: "lords-of-shadow-2", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "Epoca Moderna", yearEn: "Modern Era",
            releaseYear: "2014", releaseYearEn: "2014",
            title: { it: "Lords of Shadow 2", en: "Lords of Shadow 2" },
            image: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Castlevania%20Lords%20of%20Shadow%202.jpg",
            synopsis: {
              it: "Secoli dopo Mirror of Fate, Dracula si risveglia indebolito in una cattedrale nel mezzo di una città moderna costruita attorno al suo antico castello. Zobek lo raggiunge con una proposta: in cambio di aiuto contro i seguaci di Satana che stanno preparando il suo ritorno, gli consegnerà la Vampire Killer, l'unica arma capace di porre fine alla sua immortalità. Dracula accetta, desiderando solo la morte e la pace eterna. Si rivela però che l'intero piano è stato orchestrato da Alucard: secoli prima aveva convinto suo padre a fingersi morto per costringere Zobek e Satana a emergere allo scoperto. Dracula recupera i suoi poteri, elimina i tre accoliti di Satana, uccide Zobek e affronta Satana che nel frattempo ha posseduto Alucard. Dracula rifiuta di uccidere suo figlio e costringe Satana ad abbandonare il corpo di Alucard, eliminandolo definitivamente. Nel finale ambiguo, padre e figlio entrano insieme nella cattedrale all'alba, lasciando intendere che potrebbero lasciarsi consumare dalla luce solare, ponendo fine alla stirpe dei Belmont e all'era dei mostri.\n\nNel DLC canonico Revelations, ambientato prima del 1103, si gioca come Alucard e si scopre il suo piano a lungo termine: far sembrare che Dracula venga sconfitto da Simon per spingerlo in un sonno profondo, così che Zobek e Satana emergano allo scoperto e possano essere eliminati definitivamente. Alucard si congeda senza dire a Simon chi è davvero.",
              en: "Centuries after Mirror of Fate, Dracula awakens weakened in a cathedral at the heart of a modern city built around his ancient castle. Zobek approaches him with a proposal: in exchange for help against Satan's acolytes who are preparing his return, he will hand over the Vampire Killer, the only weapon capable of ending Dracula's immortality. Dracula agrees, desiring nothing but death and eternal peace. It is revealed, however, that the entire plan was orchestrated by Alucard: centuries earlier he had convinced his father to feign death in order to force Zobek and Satan into the open. Dracula recovers his powers, eliminates Satan's three acolytes, kills Zobek, and confronts Satan, who has possessed Alucard for the final battle. Dracula refuses to kill his son and forces Satan to abandon Alucard's body, destroying him once and for all. In an ambiguous ending, father and son enter the cathedral together at dawn, suggesting they may allow themselves to be consumed by sunlight, putting an end to the Belmont bloodline and the age of monsters.\n\nIn the canonical DLC Revelations, set before 1103, the player controls Alucard and uncovers his long-term plan: to make it appear that Dracula is defeated by Simon in order to drive him into a deep slumber, so that Zobek and Satan will emerge from the shadows and can be eliminated once and for all. Alucard parts ways with Simon without telling him who he really is."
            }
          }
        ]
      },
      {
        id: "netflix",
        name: { it: "Universo Netflix", en: "Netflix Universe" },
        span: { it: "Fine XV secolo – 1792", en: "Late 15th century – 1792" },
        entries: [
          { id: "netflix-castlevania", type: "SERIE ANIMATA", typeEn: "ANIMATED SERIES", year: "Fine del XV secolo", yearEn: "Late 15th century",
            releaseYear: "2017 – 2021", releaseYearEn: "2017 – 2021",
            title: { it: "Castlevania", en: "Castlevania" },
            image: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Castlevania%20Netflix.jpg",
            synopsis: {
              it: "Dopo che la Chiesa fa bruciare sul rogo sua moglie Lisa, accusata di stregoneria, Dracula dichiara guerra all'umanità, concedendo alle proprie armate un anno di tempo per sterminarla. Trevor Belmont, ultimo discendente di un clan di cacciatori bandito dalla Chiesa, si allea con la Speaker Sypha Belnades e con Alucard, figlio dello stesso Dracula contrario al genocidio voluto dal padre, per fermarlo. Sconfitto Dracula, il gruppo si separa: Trevor e Sypha danno la caccia ai culti che tentano di resuscitarlo, mentre Alucard difende un villaggio scoprendo i limiti della propria umanità. Nel frattempo la vampira Carmilla trama con le sue sorelle per conquistare il mondo umano, usando come pedine i Forgemaster Hector e Isaac, un tempo alleati di Dracula. Dopo una guerra tra fazioni vampiriche e umane in cui interviene anche il misterioso Conte Saint Germain, i tre eroi si riuniscono per sconfiggere la Morte in persona e le ultime forze rimaste, ponendo fine al conflitto.",
              en: "After the Church burns his wife Lisa at the stake as a witch, Dracula declares war on humanity, giving his armies one year to exterminate it. Trevor Belmont, the last descendant of a clan of hunters banished by the Church, allies with the Speaker Sypha Belnades and with Alucard, Dracula's own son, opposed to his father's planned genocide, to stop him. With Dracula defeated, the group splits up: Trevor and Sypha hunt down cults attempting to resurrect him, while Alucard defends a village and confronts the limits of his own humanity. Meanwhile the vampire Carmilla schemes with her sisters to conquer the human world, using the Forgemasters Hector and Isaac, once allies of Dracula, as pawns. After a war between vampire factions and humans that also draws in the mysterious Count Saint Germain, the three heroes reunite to defeat Death itself and the last remaining forces, bringing the conflict to an end."
            }
          },
          { id: "nocturne", type: "SERIE ANIMATA", typeEn: "ANIMATED SERIES", year: "1792",
            releaseYear: "Dal 2023", releaseYearEn: "Since 2023",
            title: { it: "Castlevania: Nocturne", en: "Castlevania: Nocturne" },
            image: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Castlevania%20Nocturne.jpg",
            synopsis: {
              it: "Quasi quattro decenni dopo la sconfitta di Dracula, mentre la Rivoluzione Francese sconvolge il paese, il giovane Richter Belmont vede la madre adottiva e la sua comunità di Speaker sterminati dai servi della vampira Erzsebet Báthory, convinta di essere l'incarnazione della dea della distruzione Sekhmet e decisa a inghiottire il mondo in una notte eterna. Cresciuto dalla strega Tera Herczeg insieme alla sorellastra Maria Renard, Richter scopre di aver ereditato il potere sonico dei Belmont e si allea con Annette, un'ex schiava fuggita dalle piantagioni con poteri sciamanici legati alla terra, per opporsi a Erzsebet nella regione della Vandea. Nella seconda stagione, mentre la guerra tra fazioni vampiriche e rivoluzionari si intensifica, il gruppo trova un alleato inatteso in Alucard, figlio di Dracula, ancora vivo dopo secoli. Sequel diretto della serie originale, ambientato durante gli eventi della Rivoluzione Francese.",
              en: "Nearly four decades after Dracula's defeat, as the French Revolution shakes the country, young Richter Belmont watches his adoptive mother and her community of Speakers slaughtered by the servants of the vampire Erzsebet Báthory, who believes herself the incarnation of the goddess of destruction Sekhmet and is determined to plunge the world into eternal night. Raised by the witch Tera Herczeg alongside his adoptive sister Maria Renard, Richter discovers he has inherited the Belmonts' sonic power and allies with Annette, a former slave who escaped the plantations with earth-based shamanic powers, to oppose Erzsebet in the Vendée region. In the second season, as the war between vampire factions and revolutionaries intensifies, the group finds an unexpected ally in Alucard, Dracula's son, still alive after centuries. A direct sequel to the original series, set during the events of the French Revolution."
            }
          }
        ]
      }
    ]
  },

  dmc: {
    id: "dmc",
    listTitle: { it: "Devil May Cry", en: "Devil May Cry" },
    eyebrow: { it: "Fascicolo", en: "Case File" },
    title: { it: "Devil May Cry", en: "Devil May Cry" },
    blurb: {
      it: "Discendenti di un antico cacciatore di demoni, protagonisti a metà tra l'umano e l'infernale si oppongono alle incursioni del mondo demoniaco nel nostro. Stile, sangue misto e un'arma di famiglia sono le uniche difese contro creature capaci di aprire varchi verso l'inferno stesso. La linea tra eroe e demone è sempre.",
      en: "Descendants of an ancient demon hunter, protagonists caught between human and infernal stand against the demonic world's incursions into ours. Style, mixed blood, and a family weapon are the only defense against creatures capable of tearing open gateways to hell itself. The line between hero and demon."
    },
    palette: ["#2563eb", "#9ca3af", "#c41e3a"],
    accentColor: "#c4cbd4",
    avatar: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Devil%20May%20Cry%20Avatar.jpg",
    watermark: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Devil%20May%20Cry%20Filigrana.jpg",
    watermarkOpacity: 0.16,
    banner: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Devil%20May%20Cry%20Banner.jpg",
    bannerOffset: 265,
    tracks: [
      { src: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Devil%20May%20Cry%20Taste%20the%20Blood.mp3", title: "Taste the Blood", game: "Devil May Cry 3" },
      { src: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Devil%20May%20Cry%20Subhuman.mp3", title: "Subhuman", game: "Devil May Cry 5" },
      { src: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Devil%20May%20Cry%20Crimson%20Cloud.mp3", title: "Crimson Cloud", game: "Devil May Cry 5" },
      { src: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Devil%20May%20Cry%20Shall%20Never%20Surrender.mp3", title: "Shall Never Surrender", game: "Devil May Cry 4" },
      { src: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Devil%20May%20Cry%20Devil%20Trigger.mp3", title: "Devil Trigger", game: "Devil May Cry 5" },
      { src: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Devil%20May%20Cry%20Bury%20the%20Light.mp3", title: "Bury the Light", game: "Devil May Cry 5" },
      { src: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Devil%20May%20Cry%20Devils%20Never%20Cry.mp3", title: "Devils Never Cry", game: "Devil May Cry 3" }
    ],
    universes: [
      {
        id: "main",
        name: { it: "Universo Limbo City", en: "Limbo City Universe" },
        span: { it: "2000 anni fa – oggi", en: "2000 years ago – present" },
        entries: [
          { id: "legend-of-sparda", type: "STORIA", typeEn: "STORY", year: "2000 anni fa", yearEn: "2,000 years ago", noAvatar: true,
            title: { it: "La Leggenda di Sparda", en: "The Legend of Sparda" },
            synopsis: {
              it: "Duemila anni fa, il cavaliere demoniaco Sparda si ribellò al re dell'Inferno Mundus per proteggere il mondo umano. Sconfitto Mundus e le sue legioni, sigillò la Temen-ni-gru, il portale principale tra il mondo umano e il mondo dei demoni, usando il proprio sangue, quello di una sacerdotessa umana, un amuleto mistico e la propria spada come chiave del sigillo. Il rituale lo privò di gran parte del suo potere demoniaco. In seguito visse tra gli umani, regnando pacificamente per un periodo, poi conobbe una donna di nome Eva e con lei ebbe due figli gemelli, Dante e Vergil. Sparda scomparve in circostanze ignote, lasciando Eva sola con i ragazzi. Poco prima del loro ottavo compleanno, i demoni di Mundus attaccarono la famiglia, uccisero Eva e separarono i due gemelli, ognuno convinto che l'altro fosse morto. Da quel momento i due intrapresero strade opposte.",
              en: "Two thousand years ago, the demonic knight Sparda rebelled against the lord of Hell, Mundus, to protect the human world. Having defeated Mundus and his legions, he sealed the Temen-ni-gru — the primary portal between the human world and the demon world — using his own blood, that of a human priestess, a mystical amulet, and his very sword as the seal's key. The ritual stripped him of much of his demonic power. He went on to live among humans, reigning peacefully for a time, before meeting a woman named Eva and fathering twin sons with her: Dante and Vergil. Sparda vanished under unknown circumstances, leaving Eva alone with the boys. Shortly before their eighth birthday, Mundus' demons attacked the family — killing Eva and separating the twins, each left believing the other had died. From that moment, the two set out on opposite paths."
            }
          },
          { id: "dmc3-manga", type: "MANGA", typeEn: "MANGA", year: "10 anni dopo la morte di Eva", yearEn: "10 years after Eva's death", releaseYear: "2005", releaseYearEn: "2005",
            image: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Devil%20May%20Cry%203%20Code%201%20Dante%20%20Code%202%20Vergil.jpg",
            title: { it: "Code 1 Dante / Code 2 Vergil", en: "Code 1 Dante / Code 2 Vergil" },
            synopsis: {
              it: "Due volumi manga di una trilogia mai completata, pubblicata con supervisione Capcom. \n\"Code 1: Dante\" segue le prime missioni di Dante come cacciatore di demoni, quando ha da poco aperto il suo shop ancora senza un nome. Una misteriosa figura demoniaca chiamata White Rabbit lo ingaggia con il pretesto di ritrovare una bambina di nome Alice, in realtà per osservare il figlio di Sparda in azione. \n\"Code 2: Vergil\" mostra il percorso parallelo di Vergil e spiega come lui e Arkham abbiano formato la loro alleanza per risvegliare la Temen-ni-gru. \nIl terzo volume previsto, \"Code 3: Lady\", non fu mai completato perché l'artista abbandonò il progetto.",
              en: "Two volumes of a planned three-part manga series, published under Capcom's supervision. \n\"Code 1: Dante\" follows Dante's earliest missions as a demon hunter, shortly after opening his still-unnamed shop. A mysterious demonic figure known as the White Rabbit hires him under the pretense of finding a missing girl named Alice — in reality, to observe the Son of Sparda in action. \n\"Code 2: Vergil\" follows Vergil's parallel journey and explains how he and Arkham formed their alliance to resurrect the Temen-ni-gru. \nThe planned third volume, \"Code 3: Lady\", was never completed because the artist left the project."
            }
          },
          { id: "dmc-novel-1", type: "LIGHT NOVEL", typeEn: "LIGHT NOVEL", year: "Dalla morte di Eva alla vigilia di DMC3", yearEn: "From Eva's death to the eve of DMC3", releaseYear: "2003", releaseYearEn: "2003",
            title: { it: "Novel Volume 1", en: "Novel Volume 1" },
            image: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Devil%20May%20Cry%20%E2%80%94%20Novel%20Volume%201.jpg",
            synopsis: {
              it: "Light novel scritta con la supervisione diretta di Hideki Kamiya, creatore della serie. Copre la morte della madre Eva e la giovinezza di Dante, introducendo personaggi come Nell Goldstein, l'armatrice che forgiò Ebony & Ivory su commissione di Dante, quando operava ancora sotto lo pseudonimo di Tony Redgrave. A causa dell'uscita di DMC3 nel 2005, alcuni elementi della novel erano stati considerati non canonici, ma DMC5: Before the Nightmare e DMC5 stesso hanno confermato che la maggior parte degli eventi sono canonici, incluso il riferimento a Nell Goldstein come nonna di Nico.",
              en: "A light novel written under the direct supervision of Hideki Kamiya, the series' creator. It covers the death of Dante's mother Eva and his early years, introducing characters such as Nell Goldstein — the gunsmith who forged Ebony & Ivory on Dante's commission, while he was still operating under the alias Tony Redgrave. Following the release of DMC3 in 2005, certain elements of the novel were considered non-canonical, but DMC5: Before the Nightmare and DMC5 itself confirmed that the majority of its events are canon — including the reference to Nell Goldstein as Nico's grandmother."
            }
          },
          { id: "dmc3", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "Un anno dopo il manga Code 1/2", yearEn: "One year after the Code 1/2 manga", releaseYear: "2005", releaseYearEn: "2005",
            title: { it: "Devil May Cry 3: Dante's Awakening", en: "Devil May Cry 3: Dante's Awakening" },
            image: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Devil%20May%20Cry%203%20Dante%27s%20Awakening.jpg",
            synopsis: {
              it: "Vergil risveglia la torre Temen-ni-gru alleandosi con lo studioso Arkham, che in realtà lo sta usando come pedina per impossessarsi del potere di Sparda. Per rimuovere i sigilli che Sparda pose sulla torre, rappresentati dai sette peccati capitali, Vergil ha bisogno anche della metà dell'amuleto ereditato dalla madre Eva che porta Dante: attira così il fratello alla torre. Dante e Vergil si scontrano più volte lungo la salita. Dante incontra anche Lady, una cacciatrice di demoni che cerca di uccidere il padre Arkham per vendicare la madre, sacrificata da lui in un rituale demoniaco anni prima. Il colpo di scena finale rivela che Arkham era il vero antagonista: fingendo di servire Vergil, prende per sé l'amuleto completo, apre il portale e assorbe il potere di Sparda dalla spada Force Edge, mutando in una massa mostruosa. Viene sconfitto dall'unione dei due fratelli, e la sua forma umana morente incontra Lady, che lo finisce con un colpo di pistola misto a rimorso. Dopo la vittoria, Dante e Vergil si scontrano un'ultima volta: Dante prevale, ma Vergil rifiuta di tornare nel mondo umano e si lascia cadere nelle profondità degli Inferi. Là incontra Mundus, lo sfida ancora indebolito dallo scontro con Dante e viene sopraffatto, diventando il suo servo Nelo Angelo.",
              en: "Vergil awakens the Temen-ni-gru tower by allying himself with the scholar Arkham — who is in reality using him as a pawn to seize Sparda's power. To remove the seals Sparda placed on the tower, represented by the seven deadly sins, Vergil also needs the half of the amulet inherited from their mother Eva that Dante carries, and so he lures his brother to the tower. Dante and Vergil clash repeatedly as he climbs. Dante also meets Lady, a demon hunter bent on killing her father Arkham to avenge her mother, whom he sacrificed in a demonic ritual years earlier. The final twist reveals that Arkham was the true antagonist all along: feigning loyalty to Vergil, he takes the completed amulet for himself, opens the portal, and absorbs Sparda's power from the Force Edge sword, mutating into a monstrous mass. He is defeated by the combined strength of both brothers, and his dying human form is found by Lady, who finishes him off with a shot mixed with remorse. After the victory, Dante and Vergil face each other one last time — Dante prevails, but Vergil refuses to return to the human world and lets himself fall into the depths of the Underworld. There he encounters Mundus, challenges him while still weakened from his clash with Dante, and is overpowered, becoming his servant Nelo Angelo."
            }
          },
          { id: "dmc1", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "20 anni dopo la morte di Eva", yearEn: "20 years after Eva's death", releaseYear: "2001", releaseYearEn: "2001",
            title: { it: "Devil May Cry", en: "Devil May Cry" },
            image: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Devil%20May%20Cry.jpg",
            synopsis: {
              it: "Una misteriosa donna di nome Trish, creata da Mundus a immagine di Eva per attirare Dante, lo conduce sull'isola di Mallet, dove il re dei demoni sta preparando il ritorno nel mondo umano. Nel corso del gioco Dante affronta Nelo Angelo, che si rivela essere suo fratello Vergil trasformato e sottomesso da Mundus. Alla sconfitta definitiva di Nelo Angelo, il suo amuleto si unisce a quello di Dante, trasformando la spada Force Edge nella leggendaria Sparda. Trish, che aveva tradito Dante lavorando per Mundus, si sacrifica per salvarlo durante lo scontro finale: il gesto la redime. Dante batte Mundus e lo ricaccia nel mondo demoniaco, e i due fuggono sull'isola che sta crollando. Dante apre la sua agenzia di cacciatore di demoni: in un post-credits, si scopre che lui e Trish ora sono soci e hanno rinominato il negozio Devil Never Cry.",
              en: "A mysterious woman named Trish — created by Mundus in Eva's image to lure Dante — leads him to Mallet Island, where the demon king is preparing his return to the human world. Over the course of the game, Dante faces Nelo Angelo, who is revealed to be his brother Vergil, transformed and enslaved by Mundus. Upon Nelo Angelo's final defeat, his amulet joins with Dante's, transforming the sword Force Edge into the legendary Sparda. Trish, who had betrayed Dante by working for Mundus, sacrifices herself to save him during the final confrontation — an act that redeems her. Dante defeats Mundus and drives him back into the demon world, and the two escape as the island collapses. Dante opens his demon-hunting agency: in a post-credits scene, it is revealed that he and Trish are now partners and have renamed the shop Devil Never Cry."
            }
          },
          { id: "dmc-anime", type: "ANIME", typeEn: "ANIME", year: "Tra DMC1 e DMC2", yearEn: "Between DMC1 and DMC2", releaseYear: "2007", releaseYearEn: "2007",
            title: { it: "The Animated Series", en: "The Animated Series" },
            image: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Devil%20May%20Cry%20The%20Animated%20Series.jpg",
            synopsis: {
              it: "Serie anime in 12 episodi confermata canonica dal produttore Kobayashi, che ha dichiarato di essere stato coinvolto nella creazione degli script. Dante viene ingaggiato per scortare Patty Lowell, un'orfana creduta erede di una grande fortuna, fino alla villa di famiglia: si scopre poi che è stata usata come esca da un'altra donna con lo stesso nome, la vera erede. Sopravvissuta al tranello, priva di una casa, Patty finisce per stabilirsi nell'ufficio di Dante, diventandone la compagna fissa nella vita di tutti i giorni tra clienti e demoni minori. Nel corso della serie emerge che Patty discende da Alan Lowell, un potente alchimista che secoli prima sigillò il demone Abigail in un amuleto di famiglia. Sid, un demone patetico risparmiato da Dante all'inizio della serie, la rintraccia per completare un rituale che libererebbe Abigail, usando la madre di Patty come merce di scambio. Dante affronta il rituale e ne resta impalato sulla propria spada, privo di sensi, finché non è Patty stessa a raggiungerlo nel portale e a risvegliarlo in tempo perché sconfigga Abigail. Patty lascia infine l'ufficio per vivere con la madre ritrovata, ma continua a fare visita a Dante. Introduce anche J.D. Morrison, l'agente di Dante: entrambi i personaggi vengono poi referenziati in DMC5: Before the Nightmare, confermando retroattivamente la canonicità della serie.",
              en: "A 12-episode anime series confirmed canonical by producer Kobayashi, who stated he was involved in the development of its scripts. Dante is hired to escort Patty Lowell, an orphan believed to be heir to a large fortune, to the family mansion, only to discover she was used as a decoy by another woman of the same name, the true heir. Having survived the trap and with nowhere else to go, Patty ends up settling into Dante's office, becoming a fixture of his everyday life among clients and lesser demons. Over the course of the series it emerges that Patty is a descendant of Alan Lowell, a powerful alchemist who centuries earlier sealed the demon Abigail inside a family amulet. Sid, a pathetic demon Dante had spared at the start of the series, tracks her down to complete a ritual that would free Abigail, using Patty's mother as leverage. Dante confronts the ritual and ends up impaled on his own sword, unconscious, until Patty herself enters the portal and wakes him in time to defeat Abigail. Patty eventually leaves the office to live with her newfound mother, though she continues to visit Dante. The series also introduces J.D. Morrison, Dante's agent: both characters are later referenced in DMC5: Before the Nightmare, retroactively confirming the series' canonical status."
            }
          },
          { id: "dmc-novel-2", type: "LIGHT NOVEL", typeEn: "LIGHT NOVEL", year: "Dopo DMC1, prima di DMC2", yearEn: "After DMC1, before DMC2", releaseYear: "2003", releaseYearEn: "2003",
            title: { it: "Novel Volume 2", en: "Novel Volume 2" },
            image: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Devil%20May%20Cry%20%E2%80%94%20Novel%20Volume%202.jpg",
            synopsis: {
              it: "Secondo romanzo della serie, ambientato dopo DMC1 e prima di DMC2 nell'ordine cronologico attuale. Dante viene ingaggiato per investigare su un idolo demoniaco chiamato il Beast Head, missione che lo porterà ad avvicinarsi involontariamente al suo eterno nemico. Il romanzo si inserisce coerentemente nella timeline senza contraddizioni con gli altri giochi, a differenza del primo volume che aveva richiesto alcune retcon. Il finale si collega direttamente all'inizio di DMC2.",
              en: "The second novel in the series, set after DMC1 and before DMC2 in the current chronological order. Dante is hired to investigate a demonic idol known as the Beast Head — a mission that will bring him unwittingly closer to his eternal enemy. Unlike the first volume, which required certain retcons, the novel fits coherently into the timeline without contradicting the other games. Its ending connects directly to the opening of DMC2."
            }
          },
          { id: "dmc2", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "Alcuni anni dopo DMC1", yearEn: "Several years after DMC1", releaseYear: "2003", releaseYearEn: "2003",
            title: { it: "Devil May Cry 2", en: "Devil May Cry 2" },
            image: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Devil%20May%20Cry%202.jpg",
            synopsis: {
              it: "Dante si allea con Lucia, un demone artificiale creato dallo stregone Arius e cresciuta come figlia adottiva dai Protettori di Vie de Marli, una comunità di guardiani dell'isola. Arius, presidente della multinazionale Uroboros, vuole impadronirsi del potere del demone Argosax, un antico rivale di Mundus che un tempo dominava metà del mondo demoniaco, per diventare un dio immortale. Dante interrompe il rituale sostituendo uno degli artefatti con la sua moneta, ma il portale per il mondo demoniaco si apre comunque: decide di attraversarlo lasciando la scelta al caso, con una moneta che in realtà ha entrambe le facce con testa. Sconfigge Argosax e si avventura nelle profondità degli Inferi. Lucia nel frattempo elimina un Arius corrotto dal potere demoniaco. Il finale mostra Lucia che aspetta Dante nel suo negozio, mentre un rombo di motocicletta echeggia fuori.",
              en: "Dante allies himself with Lucia — an artificial demon created by the sorcerer Arius and raised as an adoptive daughter by the Protectors of Vie de Marli, a community of island guardians. Arius, president of the multinational Uroboros, seeks to seize the power of the demon Argosax — an ancient rival of Mundus who once ruled half of the demon world — in order to become an immortal god. Dante disrupts the ritual by swapping one of the required artifacts with his coin, but the portal to the demon world opens regardless: he decides to cross it leaving the choice to fate, using a coin that in reality has heads on both sides. He defeats Argosax and ventures deeper into the Underworld. Meanwhile, Lucia eliminates an Arius corrupted by demonic power. The finale shows Lucia waiting for Dante in his shop, as the roar of a motorcycle echoes outside."
            }
          },
          { id: "dmc4-novel", type: "LIGHT NOVEL", typeEn: "LIGHT NOVEL", year: "Prima e durante DMC4", yearEn: "Before and during DMC4", releaseYear: "2009", releaseYearEn: "2009",
            title: { it: "Deadly Fortune", en: "Deadly Fortune" },
            image: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Devil%20May%20Cry%204%20Deadly%20Fortune.jpg",
            synopsis: {
              it: "Romanzo in due volumi scritto da Bingo Morihashi, lo stesso autore della storia di DMC4. Morihashi lo definisce la versione \"completa\" di DMC4, con scene rimosse dal gioco per motivi produttivi. Include dettagli sul passato di Nero, trovato da bambino a Fortuna e adottato dai genitori di Credo e Kyrie, e nuove scene con i personaggi principali. Il romanzo rivela anche che Vergil visitò Fortuna anni prima degli eventi del gioco, suggerendo implicitamente come Nero sia il figlio di Vergil, confermato poi esplicitamente in DMC5.",
              en: "A two-volume novel written by Bingo Morihashi, the same author behind DMC4's story. Morihashi describes it as the \"complete\" version of DMC4, incorporating scenes cut from the game for production reasons. It includes details about Nero's past — found as an infant in Fortuna and adopted by Credo and Kyrie's parents — and new scenes featuring the main cast. The novel also reveals that Vergil visited Fortuna years before the game's events, implicitly suggesting that Nero is Vergil's son, a fact confirmed explicitly in DMC5."
            }
          },
          { id: "dmc4", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "5 anni dopo DMC2", yearEn: "5 years after DMC2", releaseYear: "2008", releaseYearEn: "2008",
            title: { it: "Devil May Cry 4", en: "Devil May Cry 4" },
            image: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Devil%20May%20Cry%204.jpg",
            synopsis: {
              it: "Primo episodio a introdurre Nero come protagonista giocabile alternativo a Dante. Nero è un giovane membro dell'Order of the Sword, un'organizzazione religiosa che venera Sparda come un dio nella città di Fortuna. Quando Dante irrompe durante una predica e uccide Sanctus, il leader dell'Ordine, Nero viene incaricato di catturarlo. Nel corso dell'avventura si scopre che Sanctus, resuscitato tramite la Cerimonia dell'Ascensione, vuole usare una colossale statua demoniaca chiamata il Salvatore per posizionarsi come difensore dell'umanità e dominare il mondo. Per attivare il Salvatore serve il sangue di Sparda: l'Ordine aveva usato la Yamato, la spada di Vergil, per aprire portali demoniaci e attirare Dante a Fortuna come nucleo del rituale. Nero possiede il Devil Bringer, un braccio demoniaco di origine misteriosa che si rivelerà in DMC5 essere il frutto del sangue di Vergil. Quando Sanctus scopre che anche Nero porta il sangue di Sparda, lo usa come sostituto, assorbendolo nel Salvatore insieme a Kyrie, la ragazza di Nero. Trish, infiltrata nell'Ordine sotto le spoglie di Gloria, e Dante collaborano per liberarli. Nero sconfigge Sanctus dall'interno del Salvatore e lo distrugge, ponendo fine all'Ordine.",
              en: "The first entry to introduce Nero as a playable protagonist alongside Dante. Nero is a young member of the Order of the Sword — a religious organization that worships Sparda as a god in the city of Fortuna. When Dante crashes a sermon and kills Sanctus, the Order's leader, Nero is tasked with capturing him. Over the course of the adventure it is revealed that Sanctus, resurrected through the Ascension Ceremony, intends to use a colossal demonic statue known as the Savior to position himself as humanity's defender and dominate the world. Activating the Savior requires the blood of Sparda: the Order had used Yamato, Vergil's sword, to open demonic portals and lure Dante to Fortuna as the ritual's core. Nero possesses the Devil Bringer — a demonic arm of mysterious origin that will be revealed in DMC5 to be the product of Vergil's bloodline. When Sanctus discovers that Nero also carries Sparda's blood, he uses him as a substitute, absorbing both Nero and his girlfriend Kyrie into the Savior. Trish, infiltrated within the Order under the guise of Gloria, and Dante work together to free them. Nero defeats Sanctus from within the Savior and destroys it, bringing the Order to an end."
            }
          },
          { id: "dmc5-novel", type: "LIGHT NOVEL", typeEn: "LIGHT NOVEL", year: "Nel quinquennio tra DMC4 e DMC5", yearEn: "During the five years between DMC4 and DMC5", releaseYear: "2019", releaseYearEn: "2019",
            title: { it: "Before the Nightmare", en: "Before the Nightmare" },
            image: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Devil%20May%20Cry%205%20Before%20the%20Nightmare.jpg",
            synopsis: {
              it: "Prequel diretto a DMC5 scritto dallo stesso autore del gioco, Bingo Morihashi. Il romanzo è la principale causa della retcon della timeline: DMC2, che si collocava originariamente dopo DMC4, viene spostato prima di esso. Racconta il periodo in cui Nero, ora adulto, ha aperto il suo ufficio di cacciatore di demoni separato da quello di Dante, gli sviluppi nei rapporti tra i personaggi nel quinquennio tra DMC4 e DMC5, e i movimenti del misterioso V prima degli eventi del gioco. Il romanzo si conclude direttamente con l'inizio degli eventi di DMC5.",
              en: "A direct prequel to DMC5 written by the game's own author, Bingo Morihashi. The novel is the primary cause of the timeline retcon: DMC2, which was originally placed after DMC4, is moved to before it. It covers the period in which Nero, now an adult, has opened his own demon-hunting agency separate from Dante's, the developments in the characters' relationships during the five years between DMC4 and DMC5, and the movements of the mysterious V before the game's events. The novel concludes directly with the opening of DMC5."
            }
          },
          { id: "dmc5-manga", type: "MANGA", typeEn: "MANGA", year: "In parallelo a DMC5", yearEn: "Parallel to DMC5", releaseYear: "2019", releaseYearEn: "2019",
            title: { it: "Visions of V", en: "Visions of V" },
            image: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Devil%20May%20Cry%205%20Visions%20of%20V.jpg",
            synopsis: {
              it: "Il manga segue V, la metà umana di Vergil separata da Urizen tramite la Yamato, a partire dalla sua nascita e dal suo incontro progressivo con i tre demoni familiari Griffon, Shadow e Nightmare. Ripercorre in parallelo gli eventi di DMC5 dal suo punto di vista: V nasconde a Dante, Lady e Trish che l'obiettivo della missione, il demone Urizen, è in realtà Vergil, usando uno pseudonimo per proteggere il segreto. Sempre più debole man mano che Urizen guadagna potere separato da lui, V deve anche convincere i demoni Nightmare a fondersi con lui prima che svaniscano del tutto, o rischiare di perdere le proprie facoltà residue prima ancora di raggiungere l'obiettivo finale. Il manga si conclude nello stesso punto della trama principale del gioco, con la fusione finale di V in Urizen che riporta in vita Vergil.",
              en: "The manga follows V — Vergil's human half, separated from Urizen through the Yamato — starting from his birth and his gradual meetings with his three familiar demons, Griffon, Shadow, and Nightmare. It runs parallel to the events of DMC5 from his point of view: V hides from Dante, Lady, and Trish that their target, the demon Urizen, is in fact Vergil, using an alias to protect the secret. Growing weaker as Urizen, now separated from him, grows stronger, V must also convince the Nightmare demons to merge with him before they fade away entirely, or risk losing what remains of himself before he can reach his final goal. The manga concludes at the same point as the game's main story, with V's final merger into Urizen restoring Vergil to life."
            }
          },
          { id: "dmc5", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "5 anni dopo DMC4", yearEn: "5 years after DMC4", releaseYear: "2019", releaseYearEn: "2019",
            title: { it: "Devil May Cry 5", en: "Devil May Cry 5" },
            image: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Devil%20May%20Cry%205.jpg",
            synopsis: {
              it: "Vergil, tornato dalla morte, strappa il Devil Bringer a Nero per recuperare la Yamato e si scinde in due usando la spada: la sua parte puramente demoniaca diventa Urizen, un essere assetato di potere; quella umana prende le sembianze del misterioso V. Urizen fa germogliare il Qliphoth nel centro di Red Grave City, un albero demoniaco che si nutre del sangue umano per produrre un frutto capace di rendere chi lo mangia il re degli Inferi. Dante affronta Urizen venendo sconfitto e cadendo in coma per un mese. Nel corso dell'avventura, che vede Nero, Dante e V come protagonisti giocabili, Dante si trafigge con i resti di Rebellion per liberare il suo pieno potere demoniaco. V, ormai morente perché privo di essenza demoniaca, si riunisce a Urizen riportando in vita Vergil. Nero, scoperto definitivamente essere il figlio di Vergil, affronta il padre e lo sconfigge, costringendo lui e Dante a collaborare per distruggere il Qliphoth dall'interno. I due scendono nel mondo demoniaco usando la Yamato per chiuderne il portale, rimanendovi intrappolati. Il gioco si chiude con i fratelli che si scontrano ancora, stavolta quasi per gioco, tra orde di demoni che respingono insieme.",
              en: "Vergil, returned from death, tears the Devil Bringer from Nero to reclaim the Yamato and uses the sword to split himself in two: his purely demonic half becomes Urizen, a being consumed by the thirst for power; his human half takes the form of the mysterious V. Urizen causes the Qliphoth to sprout in the heart of Red Grave City — a demonic tree that feeds on human blood to produce a fruit capable of making whoever consumes it the king of the Underworld. Dante confronts Urizen, is defeated, and falls into a coma for a month. Over the course of the adventure — with Nero, Dante, and V as playable protagonists — Dante impales himself with the remains of Rebellion to unleash his full demonic power. V, now dying from the absence of demonic essence, reunites with Urizen and restores Vergil to life. Nero, definitively revealed to be Vergil's son, confronts his father and defeats him, forcing both Vergil and Dante to work together to destroy the Qliphoth from within. The two descend into the demon world using the Yamato to seal its portal, becoming trapped there in the process. The game closes with the brothers clashing once more — this time almost playfully — as they cut down demon hordes side by side."
            }
          }
        ]
      },
      {
        id: "ninja-theory",
        name: { it: "Universo Ninja Theory", en: "Ninja Theory Universe" },
        span: { it: "Epoca contemporanea", en: "Contemporary era" },
        entries: [
          { id: "chronicles-of-vergil", type: "FUMETTO", typeEn: "COMIC", year: "Un anno prima di DmC", yearEn: "One year before DmC", releaseYear: "2013", releaseYearEn: "2013",
            title: { it: "The Chronicles of Vergil", en: "The Chronicles of Vergil" },
            synopsis: {
              it: "A Limbo City, la psichica Kat viene rintracciata e liberata da un uomo mascherato di nome Vergil dopo un tentativo di rapimento legato ai suoi poteri, mai del tutto compresi nemmeno da lei stessa. Vergil le rivela che la sua forma astrale era rimasta intrappolata a Limbo, la dimensione parallela controllata dai demoni al servizio del re Mundus, e la libera da quella prigionia. In cambio la trascina nei propri piani: rintracciare il fratello perduto Dante, di cui Vergil è venuto a conoscenza solo di recente, per dare inizio insieme a lui alla guerra contro Mundus. Fumetto in due parti, prequel ufficiale del reboot di Ninja Theory.",
              en: "In Limbo City, the psychic Kat is tracked down and freed by a masked man named Vergil after an attempted kidnapping tied to her powers, which not even she fully understands. Vergil reveals that her astral form had been trapped in Limbo, the parallel dimension controlled by demons in service to King Mundus, and frees her from that captivity. In exchange, he draws her into his own plans: tracking down his long-lost brother Dante, whose existence Vergil has only recently learned of, in order to begin their war against Mundus together. A two-part comic, the official prequel to Ninja Theory's reboot."
            }
          },
          { id: "dmc-2013", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "Epoca contemporanea", yearEn: "Contemporary era", releaseYear: "2013", releaseYearEn: "2013",
            title: { it: "DmC: Devil May Cry", en: "DmC: Devil May Cry" },
            synopsis: {
              it: "Dante e Vergil sono Nephilim, figli dell'angelo Eva e del demone Sparda, i soli esseri capaci di uccidere il re demoniaco Mundus, che tempo prima uccise Eva con le proprie mani e da allora dà la caccia a Dante, ignaro persino dell'esistenza di Vergil. Ritrovato il fratello con l'aiuto della psichica Kat, Dante si unisce all'Ordine di Vergil per smantellare uno a uno gli affari con cui Mundus controlla l'umanità in segreto, dalla bibita di massa Virility alla rete televisiva Raptor News. Nello scontro finale i due fratelli uccidono Mundus insieme, ma Vergil rivela la propria vera intenzione: non liberare l'umanità, ma sostituirsi a Mundus e governarla lui stesso, ritenendola incapace di badare a se stessa. Reboot della serie sviluppato da Ninja Theory, con una propria continuità dichiaratamente separata da quella classica.",
              en: "Dante and Vergil are Nephilim, children of the angel Eva and the demon Sparda, the only beings capable of killing the demon king Mundus, who years earlier killed Eva with his own hands and has hunted Dante ever since, unaware that Vergil even exists. Reunited with his brother with the help of the psychic Kat, Dante joins Vergil's Order to dismantle, one by one, the businesses through which Mundus secretly controls humanity, from the mass-market soft drink Virility to the Raptor News television network. In the final battle the two brothers kill Mundus together, but Vergil reveals his true intention: not to free humanity, but to take Mundus' place and rule it himself, believing it incapable of looking after itself. A reboot of the series developed by Ninja Theory, with its own continuity explicitly separate from the classic one."
            }
          }
        ]
      }
    ]
  }
,

  diablo: {
    id: "diablo",
    listTitle: { it: "Diablo", en: "Diablo" },
    eyebrow: { it: "Fascicolo", en: "Case File" },
    title: { it: "Diablo", en: "Diablo" },
    blurb: {
      it: "Sopra Sanctuarium infuria da sempre il Conflitto Eterno tra gli Angeli del Paradiso e i Demoni dell'Inferno, con l'umanità intrappolata proprio nel mezzo. I Signori del Terrore, incarnazioni del male puro, cercano di corrompere il mondo mortale dall'interno. Solo eroi comuni, spinti oltre i propri limiti, possono opporsi al.",
      en: "Above Sanctuary rages the Eternal Conflict between the Angels of the High Heavens and the Demons of the Burning Hells, with humanity trapped right in the middle. The Lords of Terror, embodiments of pure evil, seek to corrupt the mortal world from within. Only ordinary heroes, pushed past their limits, can."
    },
    palette: ["#8b0000", "#1a1a1a", "#c9a227"],
    accentColor: "#8b0000",
    tracks: [],
    avatar: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Diablo%20Avatar.jpg",
    banner: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Diablo%20Banner.jpg",
    watermark: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Diablo%20Filigrana.jpg",
    watermarkOpacity: 0.18,
    universes: [
      {
        id: "main",
        name: { it: "Santuario", en: "Sanctuary" },
        span: { it: "Origini di Santuario – 1336 circa", en: "The Birth of Sanctuary – c. 1336" },
        entries: [
          { id: "birth-of-sanctuary", type: "STORIA", typeEn: "STORY", year: "Secoli prima di Diablo", yearEn: "Centuries before Diablo", noAvatar: true,
            title: { it: "La Nascita di Santuario e l'Esilio dei Mali Primigeni", en: "The Birth of Sanctuary and the Exile of the Prime Evils" },
            synopsis: {
              it: "Secoli prima degli eventi di Diablo, l'arcangelo Inarius e la demonessa Lilith, entrambi disillusi dal Conflitto Eterno tra Paradiso e Inferi, sottraggono un frammento della Pietra del Mondo per creare Santuario, un regno nascosto a entrambe le fazioni. Dalla loro unione nascono i Nefalem, ibridi angelo-demone più potenti sia degli angeli che dei demoni. Temendo una loro futura ribellione, angeli e demoni rinnegati tentano di sterminarli; Lilith li difende uccidendo i propri stessi alleati, ma Inarius, incapace di ucciderla, la bandisce da Santuario e indebolisce la stirpe dei Nefalem, che nel corso delle generazioni si affievolisce fino a diventare la razza umana. Quando i Mali Primigeni Diablo, Mefisto e Baal vengono a loro volta esiliati a Santuario dopo una rivolta scoppiata nell'Inferno, l'arcangelo Tyrael forma l'ordine degli Horadrim e forgia le Pietre dell'Anima, ricavate dalla stessa Pietra del Mondo, per dare loro la caccia. Gli Horadrim imprigionano Mefisto sotto un tempio nella giungla di Kehjistan e Baal grazie al sacrificio di Tal Rasha, che ne rinchiude l'essenza nel proprio corpo; Diablo viene infine catturato dal condottiero Jered Cain e la sua Pietra dell'Anima sepolta sotto la cattedrale di Tristram. Secoli dopo, l'arcivescovo Lazarus, corrotto dal culto della Triuna, dissotterra la pietra e libera Diablo, dando inizio agli eventi del primo capitolo della saga.",
              en: "Centuries before the events of Diablo, the archangel Inarius and the demoness Lilith, both disillusioned with the Eternal Conflict between Heaven and Hell, steal a fragment of the Worldstone to create Sanctuary, a realm hidden from both factions. Their union produces the Nephalem, angel-demon hybrids more powerful than either angels or demons. Fearing a future rebellion, renegade angels and demons attempt to exterminate them; Lilith defends them by killing her own allies, but Inarius, unable to kill her, banishes her from Sanctuary and weakens the Nephalem bloodline, which over generations fades into the human race. When the Prime Evils Diablo, Mephisto, and Baal are in turn exiled to Sanctuary after a rebellion breaks out in Hell, the archangel Tyrael forms the order of the Horadrim and forges Soulstones, cut from the Worldstone itself, to hunt them down. The Horadrim imprison Mephisto beneath a temple in the jungles of Kehjistan and Baal through the sacrifice of Tal Rasha, who seals his essence within his own body; Diablo is finally captured by the warlord Jered Cain, and his Soulstone buried beneath the cathedral of Tristram. Centuries later, Archbishop Lazarus, corrupted by the cult of the Triune, unearths the stone and frees Diablo, setting in motion the events of the saga's first chapter."
            }
          },
          { id: "legends-bul-kathos", type: "GRAPHIC NOVEL", typeEn: "GRAPHIC NOVEL", year: "Era dei Nefalem, molto prima della Guerra del Peccato", yearEn: "Age of the Nephalem, long before the Sin War", releaseYear: "2023", releaseYearEn: "2023", noAvatar: true,
            title: { it: "Legends of the Barbarian: Bul-Kathos", en: "Legends of the Barbarian: Bul-Kathos" },
            synopsis: {
              it: "Molto prima della Guerra del Peccato, nell'epoca in cui i Nefalem popolano ancora Santuario, Bul-Kathos, futuro progenitore dei Barbari e custode del Monte Arreat, ha due soli figli: Naarah, che ne segue le orme diventando una grande guerriera, e Hiram, mai a proprio agio con le usanze della tribù. Tornato da un lungo pellegrinaggio, Hiram porta con sé una via nuova e un potere che intende reclamare con l'aiuto del padre, mettendo alla prova il legame tra i due e il futuro della stirpe barbarica.",
              en: "Long before the Sin War, in the age when the Nephalem still walk Sanctuary, Bul-Kathos, future progenitor of the Barbarians and guardian of Mount Arreat, has only two children: Naarah, who follows in his footsteps to become a great warrior, and Hiram, who has never felt at ease with his tribe's ways. Returning from a long pilgrimage, Hiram brings back a new path and a power he intends to claim with his father's help, testing the bond between them and the future of the barbarian bloodline."
            }
          },
          { id: "legends-rathma", type: "GRAPHIC NOVEL", typeEn: "GRAPHIC NOVEL", year: "Secoli dopo l'esilio di Lilith, prima della Guerra del Peccato", yearEn: "Centuries after Lilith's exile, before the Sin War", releaseYear: "2024", releaseYearEn: "2024", noAvatar: true,
            title: { it: "Legends of the Necromancer: Rathma", en: "Legends of the Necromancer: Rathma" },
            synopsis: {
              it: "Secoli dopo l'esilio di Lilith da Santuario, suo figlio Linarian ha seppellito la propria stirpe, negando l'innata capacità di controllare la vita e la morte. Quando una regina spietata infrange la sua pace e lo convoca nella cittadella in rovina dei Primogeniti, Linarian è costretto a riprendere il proprio potere per salvare Santuario dalle sue intenzioni, mentre una voce familiare lo guida verso il ruolo che diventerà: Rathma, fondatore dell'ordine dei Necromanti.",
              en: "Centuries after Lilith's banishment from Sanctuary, her son Linarian has buried his own lineage, denying his innate ability to control life and death. When a ruthless queen shatters his peace and summons him to the ruined citadel of the Firstborn, Linarian is forced to reclaim his power to save Sanctuary from her intentions, while a familiar voice guides him toward the role he will become: Rathma, founder of the order of the Necromancers."
            }
          },
          { id: "sin-war-birthright", type: "ROMANZO", typeEn: "NOVEL", year: "Guerra del Peccato, millenni prima di Diablo", yearEn: "Sin War, millennia before Diablo", releaseYear: "2006", releaseYearEn: "2006", noAvatar: true,
            title: { it: "The Sin War: Birthright", en: "The Sin War: Birthright" },
            synopsis: {
              it: "Nell'epoca in cui la Chiesa della Luce di Inarius e il culto della Triuna, guidato da Lucion figlio di Mefisto, si contendono in segreto le anime dell'umanità, il contadino Uldyssian si scopre dotato di un potere sconosciuto dopo essere stato accusato ingiustamente dell'omicidio di un missionario della Triuna. In fuga dal proprio villaggio di Seram, comincia a scoprire la natura dei propri poteri e a raccogliere seguaci, mentre entrambe le fazioni, ostili tra loro ma ugualmente interessate a lui, cercano di volgerlo alla propria causa.",
              en: "In the age when Inarius's Cathedral of Light and the Triune cult, led by Lucion, son of Mephisto, secretly vie for humanity's souls, the farmer Uldyssian discovers he possesses an unknown power after being falsely accused of murdering a Triune missionary. Fleeing his home town of Seram, he begins to uncover the nature of his powers and gathers followers, while both factions, hostile to each other yet equally interested in him, seek to turn him to their cause."
            }
          },
          { id: "sin-war-scales", type: "ROMANZO", typeEn: "NOVEL", year: "Guerra del Peccato, millenni prima di Diablo", yearEn: "Sin War, millennia before Diablo", releaseYear: "2007", releaseYearEn: "2007", noAvatar: true,
            title: { it: "The Sin War: Scales of the Serpent", en: "The Sin War: Scales of the Serpent" },
            synopsis: {
              it: "Rifiutando sia la Chiesa della Luce che la Triuna, Uldyssian raduna attorno a sé un numero crescente di seguaci mentre affina poteri sempre più simili a quelli degli angeli e dei demoni che infestano Santuario in segreto. Il suo movimento, pensato come una via indipendente dalle due fedi corrotte, attira l'attenzione ancora più ostile di entrambe le fazioni, decise a impedirgli di scoprire fino in fondo la verità sulla natura stessa di Santuario.",
              en: "Rejecting both the Cathedral of Light and the Triune, Uldyssian gathers an ever-growing number of followers as he hones powers increasingly similar to those of the angels and demons secretly infesting Sanctuary. His movement, meant as a path independent of both corrupted faiths, draws the even more hostile attention of both factions, determined to stop him from uncovering the full truth about the nature of Sanctuary itself."
            }
          },
          { id: "sin-war-veiled-prophet", type: "ROMANZO", typeEn: "NOVEL", year: "Guerra del Peccato, millenni prima di Diablo", yearEn: "Sin War, millennia before Diablo", releaseYear: "2007", releaseYearEn: "2007", noAvatar: true,
            title: { it: "The Sin War: The Veiled Prophet", en: "The Sin War: The Veiled Prophet" },
            synopsis: {
              it: "Nello scontro finale della Guerra del Peccato, Uldyssian scopre che il misterioso Veiled Prophet, che ha manipolato gli eventi fin dall'inizio, è in realtà Inarius stesso, l'arcangelo rinnegato co-fondatore di Santuario. Nella battaglia decisiva contro Inarius e i seguaci della Triuna, Uldyssian sacrifica la propria umanità per salvare Santuario, disperdendo la propria essenza e quella dei suoi compagni nel mondo.",
              en: "In the final confrontation of the Sin War, Uldyssian discovers that the mysterious Veiled Prophet who has manipulated events from the start is in fact Inarius himself, the renegade archangel who co-founded Sanctuary. In the decisive battle against Inarius and the Triune's followers, Uldyssian sacrifices his own humanity to save Sanctuary, scattering his essence and that of his companions across the world."
            }
          },
          { id: "demonsbane", type: "ROMANZO", typeEn: "NOVEL", year: "Poco prima di Diablo", yearEn: "Shortly before Diablo", releaseYear: "2000", releaseYearEn: "2000", noAvatar: true,
            title: { it: "Demonsbane", en: "Demonsbane" },
            synopsis: {
              it: "Poco prima degli eventi di Diablo, Siggard, unico superstite della battaglia di Blackmarch, incapace di ricordare gli ultimi istanti dello scontro, è spinto a vendicare i compagni caduti per mano di un'armata di demoni. Nel dare la caccia a quelle stesse forze oscure, Siggard ricostruisce pian piano la verità su quella notte terribile, scoprendo che il proprio incubo è appena cominciato.",
              en: "Shortly before the events of Diablo, Siggard, the only survivor of the battle of Blackmarch, unable to recall the final moments of the clash, is driven to avenge his fallen comrades at the hands of a demonic army. Hunting down those same dark forces, Siggard slowly pieces together the truth of that terrible night, only to discover that his nightmare has only just begun."
            }
          },
          { id: "the-black-road", type: "ROMANZO", typeEn: "NOVEL", year: "In parallelo a Diablo", yearEn: "Parallel to Diablo", releaseYear: "2002", releaseYearEn: "2002", noAvatar: true,
            title: { it: "The Black Road", en: "The Black Road" },
            synopsis: {
              it: "Il marinaio Darrick Lang, tornato nella città natale di Bramwell dopo anni al servizio della marina di Westmarch, scopre che gli abitanti sono stati sedotti da una nuova fede miracolosa. Dietro di essa si cela Kabraxis, un potente demone liberato dall'ex sacerdote zakarumita Buyard Cholik, che intende soppiantare la Chiesa di Zakarum e sottomettere l'intera umanità al proprio volere. Darrick affronta e uccide Kabraxis con la spada mistica Stormfury, ma nell'atto stesso di ucciderlo ne diventa il nuovo, riluttante varco verso il mondo mortale.",
              en: "The sailor Darrick Lang, returning to his hometown of Bramwell after years serving the Westmarch navy, discovers its people have been seduced by a new, miracle-working faith. Behind it lies Kabraxis, a powerful demon freed by the former Zakarum priest Buyard Cholik, who intends to supplant the Church of Zakarum and bend all of humanity to his will. Darrick confronts and kills Kabraxis with the mystical sword Stormfury, but in slaying him becomes, against his will, the demon's new gateway into the mortal world."
            }
          },
          { id: "diablo-1", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "1263", releaseYear: "1996", releaseYearEn: "1996",
            title: { it: "Diablo", en: "Diablo" },
            synopsis: {
              it: "Un eroe scende nella cattedrale sotto la città di Tristram per fermare Diablo, Signore del Terrore, che ha posseduto il corpo del piccolo principe Albrecht. Sconfitto il demone, l'eroe si conficca da solo nella fronte la sua Pietra dell'Anima per contenerne lo spirito, condannandosi a una lenta corruzione interiore.",
              en: "A hero descends into the cathedral beneath the town of Tristram to stop Diablo, Lord of Terror, who has possessed the body of young Prince Albrecht. Having defeated the demon, the hero drives Diablo's own Soulstone into his own forehead to contain its spirit, dooming himself to a slow inner corruption."
            }
          },
          { id: "legacy-of-blood", type: "ROMANZO", typeEn: "NOVEL", year: "In parallelo a Diablo II", yearEn: "Parallel to Diablo II", releaseYear: "2001", releaseYearEn: "2001", noAvatar: true,
            title: { it: "Legacy of Blood", en: "Legacy of Blood" },
            synopsis: {
              it: "Tre tombaroli, tra cui il giovane Norrec, scoprono un'armatura di potere incalcolabile appartenuta a Bartuc, il più brutale stregone mai esistito, capace di dominare i demoni e un tempo sconfitto dal proprio stesso fratello Horazon. Ignaro di cosa stia per risvegliare, Norrec indossa l'armatura, liberando ancora una volta le legioni infernali legate al suo antico proprietario.",
              en: "Three tomb raiders, among them the young Norrec, discover armor of unfathomable power once belonging to Bartuc, the most brutal sorcerer to ever walk the earth, capable of commanding demons and long ago defeated by his own brother Horazon. Unaware of what he is about to awaken, Norrec dons the armor, unleashing once more the infernal legions bound to its former owner."
            }
          },
          { id: "tales-of-sanctuary", type: "FUMETTO", typeEn: "COMIC", year: "Epoca di Diablo II", yearEn: "Diablo II era", releaseYear: "2001", releaseYearEn: "2001", noAvatar: true,
            title: { it: "Tales of Sanctuary", en: "Tales of Sanctuary" },
            synopsis: {
              it: "Tre racconti indipendenti ambientati durante l'epoca di Diablo II. Il barbaro Renit e il negromante Cairo danno la caccia alla leggendaria Mano di Naz per fermare un'orda di demoni. Il paladino Hale affronta un male che lo costringe a mettere in dubbio la propria stessa natura. Il druido Azgar difende il proprio villaggio dai demoni che si annidano anche dentro di lui.",
              en: "Three standalone stories set during the era of Diablo II. The barbarian Renit and the necromancer Cairo hunt for the legendary Hand of Naz to stop a demon horde. The paladin Hale faces an evil that forces him to question his own nature. The druid Azgar defends his village from the demons lurking within himself as much as around it."
            }
          },
          { id: "diablo-2", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "1263 – 1265", releaseYear: "2000", releaseYearEn: "2000",
            title: { it: "Diablo II", en: "Diablo II" },
            synopsis: {
              it: "L'eroe del primo gioco, ormai posseduto da Diablo, semina il caos attraverso il continente in cerca dei propri fratelli Mali Primigeni, Mefisto e Baal, per riunire la Triuna Trinità del Male. Un nuovo gruppo di eroi lo insegue attraverso quattro atti e altrettanti continenti, sconfiggendo infine sia Diablo che Mefisto.",
              en: "The hero of the first game, now possessed by Diablo, sows chaos across the continent in search of his fellow Prime Evils, Mephisto and Baal, to reunite the Evil Trinity. A new group of heroes pursues him across four acts and as many continents, ultimately defeating both Diablo and Mephisto."
            }
          },
          { id: "the-kingdom-of-shadow", type: "ROMANZO", typeEn: "NOVEL", year: "In parallelo a Diablo II e Lord of Destruction", yearEn: "Parallel to Diablo II and Lord of Destruction", releaseYear: "2002", releaseYearEn: "2002", noAvatar: true,
            title: { it: "The Kingdom of Shadow", en: "The Kingdom of Shadow" },
            synopsis: {
              it: "Il mago vizjerei Quov Tsin conduce un gruppo di mercenari, tra cui il negromante Zayl, a testimoniare la rinascita di Ureh, città leggendaria creduta un tempo porta d'accesso al Paradiso, che secondo la leggenda risorge dalle proprie rovine ogni duemila anni. Ciò che i mercenari trovano però non è il dono divino che si aspettavano, ma un incubo distorto orchestrato dal demone Kabraxis, sopravvissuto al proprio precedente ospite.",
              en: "The Vizjerei mage Quov Tsin leads a band of mercenaries, among them the necromancer Zayl, to witness the rebirth of Ureh, a legendary city once believed to be a gateway to Heaven, said to rise from its own ruins every two thousand years. What the mercenaries find, however, is not the divine gift they expected, but a twisted nightmare orchestrated by the demon Kabraxis, who survived the death of his previous host."
            }
          },
          { id: "lord-of-destruction", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "1265", releaseYear: "2001", releaseYearEn: "2001",
            title: { it: "Diablo II: Lord of Destruction", en: "Diablo II: Lord of Destruction" },
            synopsis: {
              it: "Baal, ultimo dei tre fratelli rimasto libero, marcia verso la Worldstone, capace di alterare la realtà stessa, per corromperla e completare il piano dei Mali Primigeni. Gli eroi lo affrontano al Monte Arreat; per impedire che la pietra venga sfruttata di nuovo, l'angelo Tyrael la distrugge lui stesso, alterando per sempre l'equilibrio tra Paradiso e Inferi.",
              en: "Baal, the last of the three brothers still free, marches toward the Worldstone, capable of altering reality itself, to corrupt it and complete the Prime Evils' plan. The heroes confront him at Mount Arreat; to prevent the stone from being exploited again, the angel Tyrael destroys it himself, forever altering the balance between Heaven and Hell."
            }
          },
          { id: "sword-of-justice", type: "FUMETTO", typeEn: "COMIC", year: "Poco dopo Lord of Destruction", yearEn: "Shortly after Lord of Destruction", releaseYear: "2012", releaseYearEn: "2012", noAvatar: true,
            title: { it: "Sword of Justice", en: "Sword of Justice" },
            synopsis: {
              it: "Poco dopo che Tyrael ha scagliato la propria spada contro la Worldstone corrotta al termine di Lord of Destruction, il giovane fuggitivo Jacob, perseguitato dai propri stessi conterranei per un omicidio mai commesso, viene guidato dalle visioni di un antico profeta fino ai resti dell'arma. Jacob dovrà reclamarne il potere per fermare una piaga di follia che dilaga nelle Terre Desolate, prima che la corruzione consumi lui stesso e chiunque lo circondi.",
              en: "Shortly after Tyrael cast his own sword into the corrupted Worldstone at the end of Lord of Destruction, the young fugitive Jacob, hunted by his own countrymen for a murder he never committed, is led by the visions of an ancient prophet to the weapon's remains. Jacob must claim its power to stop a plague of madness sweeping through the Dreadlands, before the corruption consumes him and everyone around him."
            }
          },
          { id: "diablo-immortal", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "1269 – 1270", releaseYear: "2022", releaseYearEn: "2022",
            title: { it: "Diablo Immortal", en: "Diablo Immortal" },
            synopsis: {
              it: "Cinque anni dopo la distruzione della Worldstone, i suoi frammenti corrotti sono sparsi per Santuario, e culti demoniaci cercano di raccoglierli per riportare in vita Diablo. Un gruppo di eroi affronta lo stregone Skarn per impedire che i frammenti vengano riuniti, colmando un vuoto narrativo di quindici anni prima degli eventi di Diablo III.",
              en: "Five years after the destruction of the Worldstone, its corrupted fragments are scattered across Sanctuary, and demonic cults seek to gather them to bring Diablo back to life. A group of heroes confronts the sorcerer Skarn to prevent the fragments from being reunited, filling a fifteen-year narrative gap before the events of Diablo III."
            }
          },
          { id: "moon-of-the-spider", type: "ROMANZO", typeEn: "NOVEL", year: "Dopo la distruzione della Worldstone", yearEn: "After the Worldstone's destruction", releaseYear: "2006", releaseYearEn: "2006", noAvatar: true,
            title: { it: "Moon of the Spider", en: "Moon of the Spider" },
            synopsis: {
              it: "Qualche tempo dopo la distruzione della Worldstone, Lord Aldric Jitan, tormentato da incubi ricorrenti, si dirige verso le rovine di un'antica tomba per risvegliare un male sopito dalla caduta di Tristram. Il negromante Zayl, attirato dalla stessa oscurità crescente, scopre che uno dei suoi stessi confratelli ha innescato gli eventi, mentre il demone ragno Astrogha si prepara a scatenare i propri servitori su Santuario sotto la luce della Luna del Ragno.",
              en: "Some time after the destruction of the Worldstone, Lord Aldric Jitan, plagued by recurring nightmares, journeys to the ruins of an ancient tomb to awaken an evil that has slumbered since the fall of Tristram. The necromancer Zayl, drawn by the same growing darkness, discovers that one of his own brethren set these events in motion, while the spider demon Astrogha prepares to unleash its minions upon Sanctuary under the rising Moon of the Spider."
            }
          },
          { id: "the-order", type: "ROMANZO", typeEn: "NOVEL", year: "Prima di Diablo III", yearEn: "Before Diablo III", releaseYear: "2012", releaseYearEn: "2012", noAvatar: true,
            title: { it: "The Order", en: "The Order" },
            synopsis: {
              it: "Ormai anziano e ultimo Horadrim rimasto, Deckard Cain scopre che altri superstiti dell'ordine si nascondono sparsi per Santuario, proprio mentre voci sempre più insistenti annunciano il risveglio di un male antico. Nel darne la caccia, Cain stringe un'alleanza inaspettata con Leah, un'orfana di appena otto anni dotata di poteri che nemmeno lei comprende, gettando le basi per il loro legame alla vigilia degli eventi di Diablo III.",
              en: "Now an old man and the last surviving Horadrim, Deckard Cain discovers that other remnants of the order are hiding scattered across Sanctuary, just as ever more insistent rumors announce the awakening of an ancient evil. In tracking them down, Cain forms an unexpected bond with Leah, an eight-year-old orphan with powers she herself does not understand, laying the foundation for their relationship on the eve of the events of Diablo III."
            }
          },
          { id: "book-of-cain", type: "LORE", typeEn: "LORE", year: "Poco prima di Diablo III", yearEn: "Shortly before Diablo III", releaseYear: "2011", releaseYearEn: "2011", noAvatar: true,
            title: { it: "Book of Cain", en: "Book of Cain" },
            synopsis: {
              it: "Poco prima degli eventi di Diablo III, Deckard Cain lascia in eredità alla propria figlia adottiva Leah un diario che raccoglie tutta la conoscenza accumulata in una vita passata al servizio degli Horadrim: la creazione di Santuario, la storia dei Mali Primigeni e dell'Angiris Council, l'ascesa dello Zakarum e i momenti chiave che hanno condotto fino alla distruzione di Tristram.",
              en: "Shortly before the events of Diablo III, Deckard Cain bequeaths to his adopted daughter Leah a journal gathering all the knowledge accumulated over a lifetime in service to the Horadrim: the creation of Sanctuary, the history of the Prime Evils and the Angiris Council, the rise of the Zakarum faith, and the key moments that led to the destruction of Tristram."
            }
          },
          { id: "diablo-3", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "1285", releaseYear: "2012", releaseYearEn: "2012",
            title: { it: "Diablo III", en: "Diablo III" },
            synopsis: {
              it: "Una stella cadente si schianta sulla cattedrale di Tristram: è Tyrael stesso, decaduto dal Paradiso per aver distrutto la Worldstone senza permesso. Un nuovo gruppo di eroi affronta il Signore della Menzogna Belial e il Signore del Dolore Azmodan, infine unificati in un unico essere, il Prime Evil Diablo risorto, sconfitto nella battaglia finale in Paradiso.",
              en: "A falling star crashes into the cathedral of Tristram: it is Tyrael himself, cast down from Heaven for destroying the Worldstone without permission. A new group of heroes confronts the Lord of Lies Belial and the Lord of Sin Azmodan, ultimately unified into a single risen being, the Prime Evil Diablo, defeated in the final battle within Heaven itself."
            }
          },
          { id: "storm-of-light", type: "ROMANZO", typeEn: "NOVEL", year: "Tra Diablo III e Reaper of Souls", yearEn: "Between Diablo III and Reaper of Souls", releaseYear: "2014", releaseYearEn: "2014", noAvatar: true,
            title: { it: "Storm of Light", en: "Storm of Light" },
            synopsis: {
              it: "Dopo la caduta del Prime Evil Diablo, l'Angiris Council custodisce la Pietra Nera dell'Anima nel cuore del Paradiso, ignaro che la sua influenza corrotta si stia già insinuando tra le mura della Città d'Argento. Tyrael, divenuto mortale e a disagio nel proprio nuovo ruolo di Aspetto della Saggezza, riforma l'ordine degli Horadrim con un gruppo di eroi umani — tra cui il negromante Zayl e Jacob, l'ex avatar della Giustizia — incaricandoli dell'impresa impossibile di sottrarre la pietra dal Paradiso stesso, prima che la corruzione dilaghi.",
              en: "After the fall of the Prime Evil Diablo, the Angiris Council keeps watch over the Black Soulstone in the heart of Heaven, unaware that its corrupting influence is already seeping through the walls of the Silver City. Tyrael, now mortal and ill at ease in his new role as Aspect of Wisdom, reforges the order of the Horadrim with a band of human heroes — among them the necromancer Zayl and Jacob, the former avatar of Justice — and charges them with the impossible task of stealing the stone from Heaven itself before the corruption spreads."
            }
          },
          { id: "reaper-of-souls", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "poco dopo Diablo III", releaseYear: "2014", releaseYearEn: "2014",
            title: { it: "Diablo III: Reaper of Souls", en: "Diablo III: Reaper of Souls" },
            synopsis: {
              it: "Malthael, ex Angelo della Saggezza divenuto Angelo della Morte, ruba la Pietra Nera dell'Anima contenente l'essenza di Diablo per usarla contro l'intera umanità, ritenuta la vera causa dell'infinito Conflitto Eterno. Gli eroi lo affrontano a Westmarch e infine lo sconfiggono, salvando l'umanità dallo sterminio.",
              en: "Malthael, once the Angel of Wisdom and now the Angel of Death, steals the Black Soulstone containing Diablo's essence to use it against humanity itself, which he believes to be the true cause of the endless Eternal Conflict. The heroes confront him at Westmarch and ultimately defeat him, saving humanity from extermination."
            }
          },
          { id: "book-of-tyrael", type: "LORE", typeEn: "LORE", year: "Dopo Reaper of Souls", yearEn: "After Reaper of Souls", releaseYear: "2013", releaseYearEn: "2013", noAvatar: true,
            title: { it: "Book of Tyrael", en: "Book of Tyrael" },
            synopsis: {
              it: "Nel periodo successivo alla caduta di Diablo, l'ex arcangelo Tyrael mette per iscritto la propria versione della storia di Santuario, rivelando segreti sulla propria vita nell'Angiris Council, sulle minacce ancora incombenti sull'umanità e sulla scelta che lo ha portato a rinunciare alla propria natura angelica per unirsi ai ranghi dei mortali.",
              en: "In the period following Diablo's fall, the former archangel Tyrael sets down his own account of Sanctuary's history, revealing secrets about his life within the Angiris Council, the threats still looming over humanity, and the choice that led him to renounce his angelic nature and join the ranks of mortals."
            }
          },
          { id: "heroes-rise-darkness-falls", type: "ROMANZO", typeEn: "NOVEL", year: "Epoca di Diablo III", yearEn: "Diablo III era", releaseYear: "2012", releaseYearEn: "2012", noAvatar: true,
            title: { it: "Heroes Rise, Darkness Falls", en: "Heroes Rise, Darkness Falls" },
            synopsis: {
              it: "Una raccolta di racconti indipendenti ambientati nell'epoca di Diablo III: una cacciatrice di demoni rischia di diventare essa stessa la propria preda, un barbaro segnato dal passato torna nella propria patria devastata, un monaco silenzioso ripulisce una foresta dove il confine tra alleato e nemico si è dissolto, e altre storie di eroi comuni alle prese con gli orrori di Santuario.",
              en: "A collection of standalone stories set in the era of Diablo III: a demon hunter risks becoming her own worst prey, a barbarian haunted by his past returns to his shattered homeland, a silent monk cleanses a forest where the line between ally and enemy has vanished, and other tales of ordinary heroes confronting the horrors of Sanctuary."
            }
          },
          { id: "morbed", type: "ROMANZO", typeEn: "NOVEL", year: "Epoca di Diablo III", yearEn: "Diablo III era", releaseYear: "2014", releaseYearEn: "2014", noAvatar: true,
            title: { it: "Diablo III: Morbed", en: "Diablo III: Morbed" },
            synopsis: {
              it: "Il ladro Morbed si unisce a un mago, un druido, un negromante e un crociato per raggiungere un'isola remota e recuperare alcuni oggetti di valore trafugati dalla città di Westmarch. Sull'isola però si nasconde qualcosa che ha già ucciso e che è pronto a colpire ancora, costringendo Morbed a confrontarsi non solo con la creatura in agguato, ma anche con gli angoli più oscuri del proprio stesso spirito.",
              en: "The thief Morbed joins a wizard, a druid, a necromancer, and a crusader on a journey to a remote island to recover valuables stolen from the city of Westmarch. But something lurking on the island has already killed once and is ready to kill again, forcing Morbed to confront not only the creature stalking the forests, but the darkest corners of his own spirit."
            }
          },
          { id: "book-of-adria", type: "LORE", typeEn: "LORE", year: "Dopo Reaper of Souls", yearEn: "After Reaper of Souls", releaseYear: "2018", releaseYearEn: "2018", noAvatar: true,
            title: { it: "Book of Adria", en: "Book of Adria" },
            synopsis: {
              it: "Un bestiario compilato dalla misteriosa strega Adria, che raccoglie la propria conoscenza proibita su demoni, mostri, non-morti e angeli incontrati nel corso della propria vita, offrendo una guida alla magia arcana e alle creature che popolano Santuario e i regni oltre di esso.",
              en: "A bestiary compiled by the mysterious witch Adria, gathering her own forbidden knowledge of demons, monsters, the undead, and angels encountered over the course of her life, offering a guide to the arcane magic and creatures that populate Sanctuary and the realms beyond it."
            }
          },
          { id: "tales-from-horadric-library", type: "ROMANZO", typeEn: "NOVEL", year: "Diverse epoche, dai Nefalem a Diablo IV", yearEn: "Various eras, from the Nephalem to Diablo IV", releaseYear: "2022", releaseYearEn: "2022", noAvatar: true,
            title: { it: "Tales from the Horadric Library", en: "Tales from the Horadric Library" },
            synopsis: {
              it: "Una raccolta di racconti dell'orrore, ambientati in epoche diverse, dai tempi dei Nefalem fino al periodo di Diablo IV, presentata come un archivio di leggende locali e ammonimenti raccolti nei secoli dall'ordine degli Horadrim per proteggere gli innocenti da ciò che si annida nell'ombra di Santuario.",
              en: "A collection of horror stories, set across eras ranging from the age of the Nephalem to the period of Diablo IV, framed as an archive of local legends and cautionary tales gathered over the centuries by the Horadrim to protect the innocent from what lurks in Sanctuary's shadows."
            }
          },
          { id: "the-lost-horadrim", type: "ROMANZO", typeEn: "NOVEL", year: "Tra Reaper of Souls e Diablo IV", yearEn: "Between Reaper of Souls and Diablo IV", releaseYear: "2026", releaseYearEn: "2026", noAvatar: true,
            title: { it: "The Lost Horadrim", en: "The Lost Horadrim" },
            synopsis: {
              it: "Nel mondo decimato dalla Mietitura di Malthael, gli ultimi Horadrim rimasti — tra cui Lorath Nahr e Tyrael — salpano verso le remote Isole di Skovos per scoprire il destino di una spedizione inviata anni prima a stringere rapporti diplomatici con gli Askari e mai più tornata, oltre a recuperare un'antica cassaforte horadrica nascosta nel cuore delle isole. Scoprono che Skovos, apparentemente risparmiata dalla devastazione del resto di Santuario, nasconde a sua volta i propri pericoli, costringendo Lorath e la comandante askara Adreona a un'alleanza forzata contro minacce che emergono anche dalle acque circostanti.",
              en: "In a world decimated by Malthael's Reaping, the last surviving Horadrim — among them Lorath Nahr and Tyrael — sail to the remote Skovos Isles to discover the fate of an expedition sent years earlier to establish diplomatic ties with the Askari and never heard from again, as well as to recover an ancient Horadric vault hidden within the isles. There they discover that Skovos, seemingly spared the devastation that struck the rest of Sanctuary, harbors dangers of its own, forcing Lorath and the Askari commander Adreona into an uneasy alliance against threats emerging even from the surrounding waters."
            }
          },
          { id: "diablo-4", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "1336 circa (50 anni dopo Reaper of Souls)", yearEn: "c. 1336 (50 years after Reaper of Souls)", releaseYear: "2023", releaseYearEn: "2023",
            title: { it: "Diablo IV", en: "Diablo IV" },
            synopsis: {
              it: "Lilith, figlia di Mefisto e co-creatrice di Santuario stessa insieme all'angelo Inarius, viene resuscitata da un culto di seguaci e tenta di riconquistare il mondo che un tempo aveva contribuito a plasmare. Un nuovo eroe la insegue attraverso Sanctuario devastato dalla sua corruzione, affrontandola infine in uno scontro che la relega, sconfitta ma non uccisa, in un regno intermedio.",
              en: "Lilith, daughter of Mephisto and co-creator of Sanctuary itself alongside the angel Inarius, is resurrected by a cult of followers and attempts to reclaim the world she once helped shape. A new hero pursues her across a Sanctuary ravaged by her corruption, ultimately confronting her in a battle that banishes her, defeated but not killed, to an in-between realm."
            }
          },
          { id: "book-of-lorath", type: "LORE", typeEn: "LORE", year: "Dopo Diablo IV", yearEn: "After Diablo IV", releaseYear: "2023", releaseYearEn: "2023", noAvatar: true,
            title: { it: "Book of Lorath", en: "Book of Lorath" },
            synopsis: {
              it: "Dopo aver perso la cassaforte horadrica in favore della Chiesa della Luce, Lorath Nahr inizia a scrivere un libro destinato a Neyrelle e a chiunque altro possa averne bisogno in futuro, viaggiando per Santuario alla ricerca di reliquie con cui proteggerlo da occhi malevoli. Il volume raccoglie la conoscenza degli Horadrim sui manufatti più potenti del mondo, nella speranza di preservarla per chi erediterà la lotta contro i Mali Primigeni.",
              en: "After losing the Horadric Vault to the Cathedral of Light, Lorath Nahr begins writing a book intended for Neyrelle and anyone else who might need it in the future, traveling across Sanctuary in search of relics with which to protect it from malevolent eyes. The volume gathers the Horadrim's knowledge of the world's most powerful artifacts, in the hope of preserving it for whoever inherits the fight against the Prime Evils."
            }
          },
          { id: "vessel-of-hatred", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "poco dopo Diablo IV", releaseYear: "2024", releaseYearEn: "2024",
            title: { it: "Diablo IV: Vessel of Hatred", en: "Diablo IV: Vessel of Hatred" },
            synopsis: {
              it: "Neyrelle, portando con sé la Pietra dell'Anima contenente Mefisto, fugge nella giungla di Nahantu per impedire che il Male Primigenio venga liberato di nuovo, ma finisce per essere manipolata da lui stesso. L'eroe la insegue per impedire che Mefisto trovi un nuovo corpo ospite, in un capitolo che introduce la classe Spirituccio e amplia il mondo di gioco verso sud.",
              en: "Neyrelle, carrying the Soulstone containing Mephisto, flees into the jungles of Nahantu to prevent the Prime Evil from being freed again, but ends up manipulated by him regardless. The hero pursues her to stop Mephisto from finding a new host body, in a chapter that introduces the Spiritborn class and expands the game world southward."
            }
          },
          { id: "book-of-prava", type: "LORE", typeEn: "LORE", year: "Poco dopo Vessel of Hatred", yearEn: "Shortly after Vessel of Hatred", releaseYear: "2024", releaseYearEn: "2024", noAvatar: true,
            title: { it: "Book of Prava", en: "Book of Prava" },
            synopsis: {
              it: "Dopo l'inaspettata sconfitta della Chiesa della Luce negli Inferi Ardenti durante gli eventi di Vessel of Hatred, la Reverenda Madre Prava torna a Kyovashad spezzata nel corpo e nello spirito. Priva della guida della propria patrona, si dedica allo studio delle altre fedi di Santuario per ritrovare un proprio cammino, mentre una forza corruttrice inizia silenziosamente a crescere dentro di lei.",
              en: "After the Cathedral of Light's unexpected defeat in the Burning Hells during the events of Vessel of Hatred, Reverend Mother Prava returns to Kyovashad broken in body and spirit. Lacking guidance from her patron, she turns to studying Sanctuary's other faiths to find a new path forward, even as a corrupting force begins quietly growing within her."
            }
          },
          { id: "dawn-of-hatred", type: "FUMETTO", typeEn: "COMIC", year: "Poco dopo Vessel of Hatred", yearEn: "Shortly after Vessel of Hatred", releaseYear: "2025", releaseYearEn: "2025", noAvatar: true,
            title: { it: "Dawn of Hatred", en: "Dawn of Hatred" },
            synopsis: {
              it: "All'alba dell'Età dell'Odio, subito dopo gli eventi di Vessel of Hatred, l'antico profeta Akarat, fondatore della fede zakarumita, torna inspiegabilmente dalla morte predicando un rinnovato messaggio di pace e radunando attorno a sé nuovi seguaci, tra cui membri della tribù barbara della Volpe. Mentre la Chiesa di Zakarum, memore della propria storia di corruzione, osserva con crescente diffidenza il ritorno del profeta, il guerriero barbaro Derris e i suoi compagni si mettono sulle tracce del mistero che avvolge Akarat.",
              en: "At the dawn of the Age of Hatred, immediately after the events of Vessel of Hatred, the ancient prophet Akarat, founder of the Zakarum faith, inexplicably returns from death preaching a renewed message of peace and gathering new followers, including members of the Fox barbarian tribe. As the Church of Zakarum, mindful of its own history of corruption, watches the prophet's return with growing suspicion, the barbarian warrior Derris and his companions set out to uncover the mystery surrounding Akarat."
            }
          },
          { id: "shadows-of-sanctuary", type: "ROMANZO", typeEn: "NOVEL", year: "Diverse epoche", yearEn: "Various eras", releaseYear: "2025", releaseYearEn: "2025", noAvatar: true,
            title: { it: "Shadows of Sanctuary", en: "Shadows of Sanctuary" },
            synopsis: {
              it: "Una raccolta di racconti dell'orrore ambientati in diversi angoli e diverse epoche di Santuario, dai bassifondi di Kingsport alle coste delle Isole Fredde, dalle fogne di Khanduras a un castello in rovina sulle brughiere di Scosglen, a testimonianza di come il Male attecchisca ovunque, sotto forme sempre diverse.",
              en: "A collection of horror stories set in different corners and eras of Sanctuary, from the slums of Kingsport to the shores of the Cold Isles, from the sewers of Khanduras to a crumbling castle on the moors of Scosglen, bearing witness to how Hell takes root everywhere, in ever-changing forms."
            }
          },
          { id: "lord-of-hatred", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "Poco dopo Vessel of Hatred", yearEn: "Shortly after Vessel of Hatred", releaseYear: "2026", releaseYearEn: "2026",
            title: { it: "Diablo IV: Lord of Hatred", en: "Diablo IV: Lord of Hatred" },
            synopsis: {
              it: "Dopo gli eventi di Vessel of Hatred, Mefisto si libera definitivamente impossessandosi del corpo del profeta risorto Akarat e dirige la propria corruzione verso le Isole di Skovos, culla dell'umanità e sede delle Pozze della Creazione, con l'intento di rimodellare la razza umana in un'arma contro il Paradiso stesso. Il Vagabondo, aiutato dallo spirito di Lilith ancora legato alla propria anima, raggiunge Mefisto alle Pozze e lo trafigge con un pugnale forgiato da un osso della stessa Lilith, bandendolo per sempre nel Vuoto — la stessa prigione che un tempo aveva contenuto lei — invece di ucciderlo, l'unico modo per impedirgli di rinascere negli Inferi. Conclude la trilogia dell'Età dell'Odio iniziata con Diablo IV.",
              en: "After the events of Vessel of Hatred, Mephisto finally breaks free by possessing the body of the resurrected prophet Akarat and turns his corruption toward the Skovos Isles, the birthplace of humanity and home to the Pools of Creation, intending to reshape the human race into a weapon against Heaven itself. The Wanderer, aided by the spirit of Lilith still bound to their soul, catches up with Mephisto at the Pools and stabs him with a dagger forged from one of Lilith's own bones, banishing him forever into the Void — the same prison that once held her — rather than killing him outright, the only way to prevent his rebirth in the Burning Hells. This concludes the Age of Hatred trilogy that began with Diablo IV."
            }
          }
        ]
      }
    ]
  },

  doom: {
    id: "doom",
    listTitle: { it: "Doom", en: "Doom" },
    eyebrow: { it: "Fascicolo", en: "Case File" },
    title: { it: "Doom", en: "Doom" },
    blurb: {
      it: "Un marine solitario affronta da solo le orde demoniache che dilagano ogni volta che un varco verso l'Inferno viene aperto per errore, avidità o arroganza scientifica. Nessun dialogo, nessuna tregua: solo violenza pura contro un nemico che non conosce pietà. La sua rabbia è leggendaria quanto l'inferno che semina.",
      en: "A lone marine faces the demonic hordes that pour out whenever a gateway to Hell is torn open by mistake, greed, or scientific arrogance. No dialogue, no truce: only pure violence against an enemy that knows no mercy. His rage is as legendary as the hell he leaves behind."
    },
    palette: ["#46433a", "#991b1b", "#f97316"],
    accentColor: "#f97316",
    tracks: [
      { src: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Doom%20The%20Only%20Thing%20They%20Fear%20Is%20You.mp3", title: "The Only Thing They Fear Is You", game: "Doom Eternal" },
      { src: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Doom%20Rip%20and%20Tear.mp3", title: "Rip and Tear", game: "Doom (2016)" },
      { src: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Doom%20BFG%20Division.mp3", title: "BFG Division", game: "Doom (2016)" }
    ],
    avatar: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Doom%20Avatar.jpg",
    banner: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Doom%20Banner.jpg",
    watermark: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Doom%20Filigrana.jpg",
    watermarkOpacity: 0.18,
    watermarkSize: "cover",
    watermarkPosition: "calc(100% + 45px) top",
    watermarkBottomFade: true,
    bannerOffset: 195,
    noTimeline: true,
    canonNote: {
      intro: {
        it: "A differenza degli altri franchise di questo archivio, Doom non ha mai avuto una continuità narrativa ufficiale e confermata dagli sviluppatori. I giochi originali (1993-1994) nacquero praticamente senza trama: la storia era un pretesto per un marine anonimo, ribattezzato dai fan \"Doomguy\", che si fa strada a colpi di fucile attraverso basi infestate da demoni su Marte, scoprendo poi che l'Inferno stesso si è riversato sulla Terra. Quello che oggi viene chiamato \"canon\" è stato ricostruito nel tempo, per lo più dai fan, e solo in parte confermato da dichiarazioni vaghe di id Software, che non ha mai chiarito se il Doom classico e il Doom moderno condividano la stessa Terra o siano due mondi paralleli invasi dallo stesso Inferno. Nei capitoli più recenti, lo stesso marine, ormai il Doom Slayer, diventa una leggenda quasi divina: un guerriero forgiato in un'altra dimensione, capace di sfidare gli dei dell'Inferno e persino il creatore di ogni cosa.",
        en: "Unlike the other franchises in this archive, Doom has never had an official, developer-confirmed narrative continuity. The original games (1993-1994) were essentially written without a real story: the plot was an afterthought for an anonymous marine, later nicknamed \"Doomguy\" by fans, who shoots his way through demon-infested bases on Mars, only to discover that Hell itself has spilled onto Earth. What is called \"canon\" today was pieced together over time, mostly by fans, and only partially confirmed through vague statements from id Software, which has never clarified whether classic Doom and modern Doom share the same Earth or are parallel worlds invaded by the same Hell. In the more recent entries, that same marine, now the Doom Slayer, becomes an almost divine legend: a warrior forged in another dimension, capable of challenging the gods of Hell and even the creator of everything."
      },
      titles: {
        it: "Doom (1993) → Doom II: Hell on Earth → Final Doom → Doom 64 → Doom: The Dark Ages → Doom (2016) → Doom VFR → Doom Eternal",
        en: "Doom (1993) → Doom II: Hell on Earth → Final Doom → Doom 64 → Doom: The Dark Ages → Doom (2016) → Doom VFR → Doom Eternal"
      },
      outro: {
        it: "Il collegamento tra le due epoche è stato ricostruito a posteriori attraverso i Codex e le cutscene dei giochi più recenti, non da un piano narrativo originario. Doom 3 (2004), pur non comparendo in questa sequenza, esiste nello stesso limbo di incertezza: presentato all'epoca quasi come un reboot a sé, ambientato in tono horror piuttosto che action, non è mai stato ufficialmente collocato con certezza né nella continuità dei capitoli classici né in quella dello Slayer moderno, e lo stesso studio si è espresso in modo contraddittorio nel tempo su dove (o se) debba considerarsi canonico.",
        en: "The connective tissue between the two eras was reconstructed after the fact through Codex entries and cutscenes in the newer games, rather than an original narrative plan. Doom 3 (2004), though absent from this sequence, exists in that same limbo of uncertainty: presented at the time as something close to a standalone reboot, with a horror tone rather than an action one, it has never been officially placed with any certainty in either the classic continuity or the modern Slayer one, and the studio itself has spoken about it inconsistently over the years as to where, or whether, it should be considered canon."
      }
    }
  },
  "dragon-quest": {
    id: "dragon-quest",
    listTitle: { it: "Dragon Quest", en: "Dragon Quest" },
    eyebrow: { it: "Fascicolo", en: "Case File" },
    title: { it: "Dragon Quest", en: "Dragon Quest" },
    blurb: {
      it: "In regni fantastici minacciati da un male incombente, un eroe scelto dal destino risponde alla chiamata per salvare il proprio mondo. Villaggi, castelli e vecchi saggi accompagnano il cammino di chi porta il peso di una profezia sulle spalle. Il coraggio di poche persone comuni può ancora cambiare le sorti di un intero regno.",
      en: "In fantastical realms threatened by looming evil, a hero chosen by fate answers the call to save their world. Villages, castles, and old sages accompany the journey of those who carry the weight of a prophecy on their shoulders. The courage of a few ordinary people can still change the fate of an entire."
    },
    palette: ["#0f9b8e", "#94a3b8", "#d4a017"],
    accentColor: "#0f9b8e",
    tracks: [
      { src: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Dragon%20Quest%20Unflinchable%20Courage.mp3", title: "Unyielding Courage", game: "Dragon Quest XI" },
      { src: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Dragon%20Quest%20Overture.mp3", title: "Overture", game: "Dragon Quest I" },
      { src: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Dragon%20Quest%20Violent%20Enemies.mp3", title: "Violent Enemies", game: "Dragon Quest II" },
      { src: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Dragon%20Quest%20Fighting%20Spirit.mp3", title: "Fighting Spirit", game: "Dragon Quest III" }
    ],
    avatar: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Dragon%20Quest%20Avatar.jpg",
    banner: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Dragon%20Quest%20Banner.jpg",
    watermark: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Dragon%20Quest%20Filigrana.jpg",
    watermarkOpacity: 0.156,
    watermarkBottomFade: true,
    bannerOffset: 195,
    universes: [
      {
        id: "erdrick",
        name: { it: "Universo Erdrick", en: "Erdrick Universe" },
        span: { it: "1986 – 2017", en: "1986 – 2017" },
        entries: [
          { id: "dq11", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "Le origini della leggenda, prima di Dragon Quest III", yearEn: "The origins of the legend, before Dragon Quest III", releaseYear: "2017", releaseYearEn: "2017",
            title: { it: "Dragon Quest XI: Echi di un'era perduta", en: "Dragon Quest XI: Echoes of an Elusive Age" },
            image: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Dragon%20Quest%20XI.jpg",
            synopsis: {
              it: "Il protagonista, un giovane del villaggio di Roccapietra, scopre durante la cerimonia del suo sedicesimo compleanno di essere il Lucente, la reincarnazione di un eroe leggendario scelto dall'albero mondiale Yggdrasil per proteggere il mondo di Erdrea. Il re di Eliodoro lo bolla come \"Prole Oscura\" e lo imprigiona, ma lui fugge e raduna un gruppo di compagni. Nel corso della missione raggiunge Yggdrasil, ma l'albero viene abbattuto dal mago Mordegon, che scatena un'era di oscurità su Erdrea. Il Lucente sconfigge Mordegon ma scopre che il vero antagonista è Calasmos, il Signore Oscuro originale di cui Mordegon era servitore. Usando la Torre del Tempo Perduto, il Lucente torna indietro nel tempo per riscrivere gli eventi e impedire la caduta di Yggdrasil. Sconfigge definitivamente Calasmos e riceve da Yggdragon, l'antico drago di luce la cui essenza aveva dato vita all'albero, il titolo di Erdrick, il più grande degli eroi.\n\nNel post-credits, una madre legge al figlio la storia del Lucente, in quello che sembra un chiaro richiamo all'inizio di Dragon Quest III.",
              en: "The protagonist, a young man from the village of Cobblestone, discovers during his sixteenth birthday ceremony that he is the Luminary — the reincarnation of a legendary hero chosen by the world tree Yggdrasil to protect the world of Erdrea. The king of Heliodor brands him the \"Darkspawn\" and imprisons him, but he escapes and gathers a group of companions. In the course of his quest he reaches Yggdrasil, but the tree is felled by the sorcerer Mordegon, who plunges Erdrea into an age of darkness. The Luminary defeats Mordegon but discovers that the true antagonist is Calasmos — the original Dark One whose servant Mordegon had been. Using the Tower of Lost Time, the Luminary travels back in time to rewrite events and prevent the fall of Yggdrasil. He defeats Calasmos once and for all and receives from Yggdragon — the ancient dragon of light whose essence had given life to the tree — the title of Erdrick, the mightiest of all heroes. \n\nIn the post-credits scene, a mother reads her child the story of the Luminary, in what looks like a clear callback to the beginning of Dragon Quest III."
            }
          },
          { id: "dq3", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "L'inizio della leggenda di Erdrick", yearEn: "The beginning of the Erdrick legend", releaseYear: "1988", releaseYearEn: "1988",
            title: { it: "Dragon Quest III: E così entrò nella leggenda", en: "Dragon Quest III: The Seeds of Salvation" },
            image: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Dragon%20Quest%20III.jpg",
            synopsis: {
              it: "Il protagonista, figlio del leggendario guerriero Ortega, parte dal regno di Aliahan per completare la missione lasciata incompiuta dal padre: sconfiggere il Grand Arcidemone Baramos, che minaccia di distruggere il mondo. Radunato un gruppo di compagni, percorre il mondo intero scoprendo che Baramos è in realtà un servo di un'entità ancora più potente: Zoma, il Signore delle Tenebre che governa un mondo sotterraneo chiamato Mondo Oscuro. Il protagonista vi scende, libera la dea Rubiss imprigionata dal Signore delle Tenebre e, usando la Sfera di Luce donata dalla Regina Drago, lo sconfigge portando per la prima volta la luce in quel regno. Tuttavia il varco tra i due mondi si chiude, intrappolando il protagonista nel Mondo Oscuro per sempre. Il popolo del luogo, che chiama il proprio regno Alefgard, lo incorona con il titolo di Erdrick, il più grande degli eroi. Erdrick fonda una casata destinata a produrre gli eroi delle generazioni future.",
              en: "The protagonist, son or daughter of the legendary warrior Ortega, sets out from the kingdom of Aliahan to complete the mission their father left unfinished: defeating the Archfiend Baramos, who threatens to destroy the world. Gathering a group of companions, they travel the entire world only to discover that Baramos is merely a servant of a far more powerful force: Zoma, the Lord of Darkness who rules an underground realm known as the Dark World. The protagonist descends into it, frees the goddess Rubiss from the Lord of Darkness's imprisonment, and using the Ball of Light gifted by the Dragon Queen, defeats him — bringing light to the kingdom for the first time. However, the rift between the two worlds closes, trapping the protagonist in the Dark World forever. The people of the land, who call their kingdom Alefgard, crown them with the title of Erdrick, the mightiest of all heroes. Erdrick founds a lineage destined to produce the heroes of future generations."
            }
          },
          { id: "dq1", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "Secoli dopo Erdrick", yearEn: "Centuries after Erdrick", releaseYear: "1986", releaseYearEn: "1986",
            title: { it: "Dragon Quest", en: "Dragon Quest" },
            image: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Dragon%20Quest.jpg",
            synopsis: {
              it: "Secoli dopo Erdrick, il regno di Alefgard vive nell'ombra: il Dragonlord ha rubato la Sfera di Luce, piombando il regno nell'oscurità, e ha rapito la Principessa Gwaelin. Re Lorik di Tantegel, in mancanza di eroi capaci, convoca il discendente diretto di Erdrick, un giovane privo di armi e armatura la cui stirpe leggendaria è ormai dimenticata dai più. Il protagonista percorre Alefgard raccogliendo le armi e i manufatti di Erdrick, tra cui la sua leggendaria spada nascosta nel castello stesso del Dragonlord, e salva la principessa. Il Dragonlord gli offre di governare metà del mondo in cambio della resa: il protagonista rifiuta e lo sconfigge in duello, riportando la Sfera di Luce ad Alefgard. Sposa Gwaelin e parte alla scoperta del mondo esterno, fondando nuovi regni che diventeranno il cuore degli eventi di Dragon Quest II.",
              en: "Centuries after Erdrick, the kingdom of Alefgard lives in shadow: the Dragonlord has stolen the Ball of Light, plunging the realm into darkness, and kidnapped Princess Gwaelin. King Lorik of Tantegel, with no capable heroes left, summons the direct descendant of Erdrick — a young man without weapons or armour, whose legendary bloodline has been all but forgotten. The protagonist travels across Alefgard collecting Erdrick's weapons and artifacts, including his legendary sword hidden within the Dragonlord's own castle, and rescues the princess. The Dragonlord offers him dominion over half the world in exchange for surrender: the protagonist refuses and defeats him in combat, returning the Ball of Light to Alefgard. He marries Gwaelin and sets out to explore the wider world, founding new kingdoms that will become the heart of the events of Dragon Quest II."
            }
          },
          { id: "dq2", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "Un secolo dopo Dragon Quest", yearEn: "A century after Dragon Quest", releaseYear: "1987", releaseYearEn: "1987",
            title: { it: "Dragon Quest II: Luminari della leggendaria stirpe", en: "Dragon Quest II: Luminaries of the Legendary Line" },
            image: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Dragon%20Quest%20II.jpg",
            synopsis: {
              it: "Un secolo dopo gli eventi di Dragon Quest, il malvagio sacerdote Hargon distrugge il regno di Moonbrooke. Il Re di Midenhall invia suo figlio, il Principe di Midenhall e discendente di Erdrick, a fermarlo. Il principe trova suo cugino, il Principe di Cannock, e insieme cercano la terza discendente di Erdrick: la Principessa di Moonbrooke, che Hargon aveva trasformato in un cane tramite una maledizione. I due la liberano grazie al Mirror of Ra. I tre percorrono il mondo fino al castello di Hargon e lo sconfiggono in duello. Prima di morire, Hargon offre la propria vita in sacrificio per evocare Malroth, il Dio della Distruzione. I tre lo sconfiggono, riportando la pace nel mondo.",
              en: "A century after the events of Dragon Quest, the evil High Priest Hargon destroys the kingdom of Moonbrooke. The King of Midenhall sends his son — the Prince of Midenhall and a descendant of Erdrick — to stop him. The prince finds his cousin, the Prince of Cannock, and together they search for the third descendant of Erdrick: the Princess of Moonbrooke, whom Hargon had transformed into a dog through a curse. The two free her using the Mirror of Ra. The three travel the world and reach Hargon's castle, defeating him in combat. Before dying, Hargon offers his own life as a sacrifice to summon Malroth, the God of Destruction. The three defeat him as well, restoring peace to the world."
            }
          }
        ]
      },
      {
        id: "zenithia",
        name: { it: "Universo Zenithia", en: "Zenithia Universe" },
        span: { it: "1990 – 1995", en: "1990 – 1995" },
        entries: [
          { id: "dq6", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "La più antica delle tre epoche, separata da millenni dalle altre", yearEn: "The earliest of the three eras, separated by millennia from the others", releaseYear: "1995", releaseYearEn: "1995",
            title: { it: "Dragon Quest VI: Realms of Revelation", en: "Dragon Quest VI: Realms of Revelation" },
            image: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Dragon%20Quest%20VI.jpg",
            synopsis: {
              it: "Il protagonista, principe del regno di Somnia, attacca il castello del Re dei Demoni Murdaw insieme ai compagni Milly e Carver, ma vengono sopraffatti. Si risveglia nel piccolo villaggio di Weaver's Peak senza ricordi, ignaro della propria vera identità. Scopre presto di poter accedere al Dream World, un mondo parallelo invisibile alla gente comune, dove lui e i compagni esistono come presenze incorporee. Viaggiando tra i due mondi, recupera gradualmente la memoria fondendosi con la propria versione corporea nel Real World. Il vero antagonista si rivela essere Mortamor, il Demon Emperor, che abita nel Dread Realm, un reame oscuro tra i due mondi, e vuole fonderli per dominarli entrambi. Il protagonista e i compagni raggiungono il Dread Realm a bordo di Pegasus e sconfiggono Mortamor. Con la sua morte il Dream World cessa di esistere. Nel finale si rivela che le armi del protagonista diventeranno il leggendario equipaggiamento Zenithiano degli eroi futuri.",
              en: "The protagonist, prince of the kingdom of Somnia, launches an assault on the castle of the Demon King Murdaw alongside his companions Milly and Carver, but is overpowered. He wakes up in the small village of Weaver's Peak with no memories, unaware of his true identity. He soon discovers he can access the Dream World — a parallel dimension invisible to ordinary people — where he and his companions exist as incorporeal presences. Travelling between the two worlds, he gradually recovers his memories by merging with his own physical self in the Real World. The true antagonist is revealed to be Mortamor, the Demon Emperor, who dwells in the Dread Realm — a dark dimension between the two worlds — and seeks to merge them both under his rule. The protagonist and his companions reach the Dread Realm aboard Pegasus and defeat Mortamor. With his death, the Dream World ceases to exist. The ending reveals that the protagonist's weapons will become the legendary Zenithian equipment wielded by the heroes of future generations."
            }
          },
          { id: "dq4", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "Epoca propria, lontana nel tempo da Dragon Quest VI", yearEn: "Its own era, far removed in time from Dragon Quest VI", releaseYear: "1990", releaseYearEn: "1990",
            title: { it: "Dragon Quest IV: Chapters of the Chosen", en: "Dragon Quest IV: Chapters of the Chosen" },
            image: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Dragon%20Quest%20IV.jpg",
            synopsis: {
              it: "Il gioco è diviso in sei capitoli. I primi quattro seguono separatamente i compagni dell'Eroe: il cavaliere Ragnar McRyan, la principessa Alena con i suoi tutori, il mercante Torneko Taloon, e le sorelle indovine Maya e Meena. Ognuno di loro, seguendo percorsi diversi, scopre la cospirazione di Psaro the Manslayer, un essere a metà tra umano e mostro che vuole sterminare la razza umana usando il Secret of Evolution per diventare il nuovo Ruler of Evil. Nel quinto capitolo l'Eroe, la cui città natale viene distrutta da Psaro, si riunisce con tutti i compagni dei capitoli precedenti. Insieme sconfiggono Estark, il Ruler of Evil che Psaro voleva risvegliare, e raggiungono Nadiria attraverso il castello volante di Zenithia, dove affrontano Psaro ormai trasformato in un essere mostruoso. Nel sesto capitolo canonico, i Chosen Ones scoprono che la vera mente dietro gli eventi è Aamon, il luogotenente di Psaro che aveva orchestrato l'uccisione di Rosa, la compagna elfa di Psaro, per spingerlo alla follia. Riportando Rosa in vita, i Chosen Ones convincono Psaro a unirsi a loro per sconfiggere Aamon definitivamente.",
              en: "The game is divided into six chapters. The first four each follow one of the Hero's companions separately: the knight Ragnar McRyan, the princess Alena and her two guardians, the merchant Torneko Taloon, and the fortune-teller sisters Maya and Meena. Each of them, through their own journeys, uncovers the conspiracy of Psaro the Manslayer — a being of both human and monster blood who seeks to exterminate the human race using the Secret of Evolution to become the new Ruler of Evil. In the fifth chapter, the Hero — whose hometown is destroyed by Psaro — reunites with all the companions from the previous chapters. Together they defeat Estark, the Ruler of Evil Psaro sought to awaken, and reach Nadiria through the floating castle of Zenithia, where they confront a monstrous, transformed Psaro. In the canonical sixth chapter, the Chosen Ones discover that the true mastermind behind events is Aamon — Psaro's own lieutenant, who had orchestrated the murder of Rosa, Psaro's elven companion, to drive him to madness. By bringing Rosa back to life, the Chosen Ones convince Psaro to join them and defeat Aamon once and for all."
            }
          },
          { id: "dq5", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "Epoca propria, lontana nel tempo dagli altri due capitoli", yearEn: "Its own era, far removed in time from the other two chapters", releaseYear: "1992", releaseYearEn: "1992",
            title: { it: "Dragon Quest V: Hand of the Heavenly Bride", en: "Dragon Quest V: Hand of the Heavenly Bride" },
            image: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Dragon%20Quest%20V.jpg",
            synopsis: {
              it: "La storia segue l'intera vita del protagonista in tre archi narrativi. Da bambino viaggia col padre Pankraz alla ricerca della leggendaria Sposa del Cielo e del suo eroe. Pankraz viene ucciso dal villain Ladja, servo dell'Order of Zugzwang, e il protagonista viene ridotto in schiavitù per anni. Una volta libero, si sposa e scopre che suo figlio, non lui, è il Legendary Hero profetizzato. La moglie viene rapita e trasformata in statua di pietra dall'Order of Zugzwang. Il protagonista affronta il villain, libera la moglie e raccoglie l'equipaggiamento Zenithiano necessario al figlio. Insieme, tutta la famiglia raggiunge Nadiria dove affrontano il Grandmaster Nimzo, il dio delle Tenebre e vero antagonista dietro l'Order of Zugzwang. Nimzo viene sconfitto. Nel finale il protagonista ritrova la madre Madalena, che tuttavia viene uccisa da Nimzo prima che possano parlarsi. La famiglia torna al castello di Gotha, mentre gli spiriti di Pankraz e Madalena li osservano in pace dal cielo.",
              en: "The story follows the protagonist's entire life across three narrative arcs. As a child, he travels with his father Pankraz in search of the legendary Heavenly Bride and her chosen hero. Pankraz is killed by the villain Ladja, a servant of the Order of Zugzwang, and the protagonist is enslaved for years. Once free, he marries and discovers that his son — not he himself — is the prophesied Legendary Hero. His wife is kidnapped and turned into a stone statue by the Order of Zugzwang. The protagonist defeats the villain, frees his wife, and gathers the Zenithian equipment his son will need. Together, the entire family descends into Nadiria, where they confront Grandmaster Nimzo — the god of Darkness and the true antagonist behind the Order of Zugzwang. Nimzo is defeated. In the finale, the protagonist finally finds his mother Madalena, who is killed by Nimzo before they can speak. The family returns to Gotha Castle, while the spirits of Pankraz and Madalena watch over them from the heavens, at peace."
            }
          }
        ]
      }
    ]
  },

  "elder-scrolls": {
    id: "elder-scrolls",
    listTitle: { it: "The Elder Scrolls", en: "The Elder Scrolls" },
    eyebrow: { it: "Fascicolo", en: "Case File" },
    title: { it: "The Elder Scrolls", en: "The Elder Scrolls" },
    blurb: {
      it: "Nella terra di Tamriel, profezie antiche e divinità capricciose intrecciano il destino di eroi improbabili con eventi capaci di riscrivere la storia di intere province. Ogni angolo del mondo nasconde culture, fazioni e conflitti propri, ma un'unica minaccia epocale finisce sempre per coinvolgere tutti. La libertà di scelta resta.",
      en: "In the land of Tamriel, ancient prophecies and capricious gods intertwine the fate of unlikely heroes with events capable of rewriting the history of entire provinces. Every corner of the world hides its own cultures, factions, and conflicts, yet one epoch-defining threat always ends up drawing everyone in. Freedom of."
    },
    palette: ["#1a2e1a", "#8b7355", "#c9a227"],
    accentColor: "#8b7355",
    tracks: [],
    avatar: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/The%20Elder%20Scrolls%20Avatar.jpg",
    banner: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/The%20Elder%20Scrolls%20Banner.jpg",
    watermark: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/The%20Elder%20Scrolls%20Filigrana.jpg",
    watermarkOpacity: 0.18,
    universes: [
      {
        id: "main",
        name: { it: "Tamriel", en: "Tamriel" },
        span: { it: "Seconda Era 582 – Quarta Era 201", en: "Second Era 582 – Fourth Era 201" },
        entries: [
          { id: "eso", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "2E 582", releaseYear: "2014", releaseYearEn: "2014",
            title: { it: "The Elder Scrolls Online", en: "The Elder Scrolls Online" },
            synopsis: {
              it: "Il capitolo cronologicamente più antico. Il principe Daedrico Molag Bal tenta di fondere Nirn con il proprio regno di Coldharbour, mentre tre alleanze si contendono il Trono di Rubino in un Tamriel frammentato dall'assenza di un imperatore. L'eroe, un Vestigio privato della propria anima da Molag Bal stesso, deve fermarlo prima che il piano si compia.",
              en: "The chronologically earliest chapter. The Daedric Prince Molag Bal attempts to merge Nirn with his own realm of Coldharbour, while three alliances vie for the Ruby Throne in a Tamriel fractured by the absence of an emperor. The hero, a Vestige robbed of their own soul by Molag Bal himself, must stop him before the plan is completed."
            }
          },
          { id: "arena", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "3E 389 – 399", releaseYear: "1994", releaseYearEn: "1994",
            title: { it: "Arena", en: "Arena" },
            synopsis: {
              it: "Il consigliere Jagar Tharn ha imprigionato l'Imperatore Uriel Septim VII in un'altra dimensione, prendendone il posto. Un prigioniero fuggito viene incaricato di raccogliere i frammenti del Bastone di Chaos, unico oggetto capace di liberare il vero imperatore, viaggiando attraverso l'intero continente di Tamriel.",
              en: "The advisor Jagar Tharn has imprisoned Emperor Uriel Septim VII in another dimension, taking his place. An escaped prisoner is tasked with gathering the fragments of the Staff of Chaos, the only object capable of freeing the true emperor, travelling across the entire continent of Tamriel."
            }
          },
          { id: "daggerfall", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "3E 405 – 417", releaseYear: "1996", releaseYearEn: "1996",
            title: { it: "Daggerfall", en: "Daggerfall" },
            synopsis: {
              it: "Inviato dall'Imperatore a indagare sulla morte del Re Lysandus di Daggerfall, il protagonista si ritrova coinvolto nella corsa al controllo del Numidium, un antico golem dei Dwemer capace di riscrivere la realtà stessa. Le scelte del giocatore, a seconda del finale, si rivelano tutte simultaneamente vere grazie a una Rottura Temporale nota come il Distorcimento a Occidente.",
              en: "Sent by the Emperor to investigate the death of King Lysandus of Daggerfall, the protagonist becomes entangled in the race for control of the Numidium, an ancient Dwemer golem capable of rewriting reality itself. The player's choices, depending on the ending, all turn out to be simultaneously true thanks to a Dragon Break known as the Warp in the West."
            }
          },
          { id: "morrowind", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "3E 427", releaseYear: "2002", releaseYearEn: "2002",
            title: { it: "Morrowind", en: "Morrowind" },
            synopsis: {
              it: "Un prigioniero rilasciato su Vvardenfell scopre di essere il Nerevarine, la reincarnazione profetizzata dell'eroe Chimer Nerevar, destinato a fermare Dagoth Ur e il suo piano di dominare Morrowind attraverso il potere corrotto del cuore di un dio Dwemer decaduto.",
              en: "A prisoner released on Vvardenfell discovers he is the Nerevarine, the prophesied reincarnation of the Chimer hero Nerevar, destined to stop Dagoth Ur and his plan to dominate Morrowind through the corrupted power of a fallen Dwemer god's heart."
            }
          },
          { id: "oblivion", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "3E 433", releaseYear: "2006", releaseYearEn: "2006",
            title: { it: "Oblivion", en: "Oblivion" },
            synopsis: {
              it: "L'assassinio dell'Imperatore Uriel Septim VII spezza la Barriera del Drago che teneva chiuse le porte dell'Oblivion, permettendo al principe Daedrico Mehrunes Dagon di invadere Tamriel attraverso portali infuocati aperti in ogni provincia. Un prigioniero, ultimo confidente dell'imperatore morente, deve trovare il suo erede segreto e richiudere le porte prima che sia troppo tardi.",
              en: "The assassination of Emperor Uriel Septim VII breaks the Dragonfires that kept the gates of Oblivion sealed, allowing the Daedric Prince Mehrunes Dagon to invade Tamriel through fiery portals opened in every province. A prisoner, the dying emperor's last confidant, must find his secret heir and reseal the gates before it's too late."
            }
          },
          { id: "skyrim", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "4E 201", releaseYear: "2011", releaseYearEn: "2011",
            title: { it: "Skyrim", en: "Skyrim" },
            synopsis: {
              it: "Duecento anni dopo Oblivion, un prigioniero destinato all'esecuzione viene salvato dall'attacco a sorpresa del drago Alduin, scoprendo di essere Sangue di Drago, l'unico capace di assorbire le anime dei draghi e affrontare Alduin stesso, tornato per divorare il mondo, mentre Skyrim è dilaniata da una guerra civile tra l'Impero e i ribelli Stormcloak.",
              en: "Two hundred years after Oblivion, a prisoner set for execution is saved by the surprise attack of the dragon Alduin, discovering he is Dragonborn, the only one able to absorb dragon souls and confront Alduin himself, returned to devour the world, while Skyrim is torn apart by a civil war between the Empire and the Stormcloak rebels."
            }
          }
        ]
      }
    ]
  },

  fallout: {
    id: "fallout",
    listTitle: { it: "Fallout", en: "Fallout" },
    eyebrow: { it: "Fascicolo", en: "Case File" },
    title: { it: "Fallout", en: "Fallout" },
    blurb: {
      it: "Dopo che le bombe atomiche hanno ridotto il mondo in cenere, i sopravvissuti emergono dai rifugi sotterranei in un'America devastata e retrofuturistica. Tra mutanti, fazioni rivali e le rovine di una società che sognava un futuro perfetto, ognuno deve ricostruire qualcosa dal nulla. La guerra non cambia mai.",
      en: "After atomic bombs reduced the world to ash, survivors emerge from underground shelters into a devastated, retro-futuristic America. Among mutants, rival factions, and the ruins of a society that once dreamed of a perfect future, everyone must rebuild something from nothing. War never changes."
    },
    palette: ["#4a5c2a", "#c9a227", "#1a1a1a"],
    accentColor: "#4a5c2a",
    tracks: [],
    avatar: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Fallout%20Avatar.jpg",
    banner: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Fallout%20Banner.jpg",
    watermark: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Fallout%20Filigrana.jpg",
    watermarkOpacity: 0.18,
    universes: [
      {
        id: "main",
        name: { it: "Wasteland Americano", en: "American Wasteland" },
        span: { it: "2102 – 2287", en: "2102 – 2287" },
        entries: [
          { id: "fallout-76", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "2102", releaseYear: "2018", releaseYearEn: "2018",
            title: { it: "Fallout 76", en: "Fallout 76" },
            synopsis: {
              it: "Venticinque anni dopo la Grande Guerra, i primi abitanti del Vault 76 emergono in Virginia Occidentale con l'incarico di ricostruire l'America. Capitolo cronologicamente più antico, e unico della saga interamente online, dove i giocatori affrontano gli Scorched, una piaga mutante che minaccia i tentativi di ricolonizzazione.",
              en: "Twenty-five years after the Great War, the first inhabitants of Vault 76 emerge in West Virginia tasked with rebuilding America. The chronologically earliest chapter, and the only one in the saga entirely online, where players face the Scorched, a mutant plague threatening resettlement efforts."
            }
          },
          { id: "fallout-1", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "2161", releaseYear: "1997", releaseYearEn: "1997",
            title: { it: "Fallout", en: "Fallout" },
            synopsis: {
              it: "Il Vault 13, in California, rischia di esaurire il chip idrico che ne garantisce la sopravvivenza. Il Prescelto viene inviato in superficie a recuperarne uno sostitutivo, scoprendo lungo il cammino il piano del Master, un essere mutante che vuole assimilare l'intera umanità superstite in un unico organismo collettivo. Il gioco capostipite dell'intera saga.",
              en: "Vault 13, in California, risks running out of the water chip that guarantees its survival. The Vault Dweller is sent to the surface to find a replacement, discovering along the way the plan of the Master, a mutant being who wants to assimilate all surviving humanity into a single collective organism. The progenitor game of the entire saga."
            }
          },
          { id: "fallout-2", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "2241", releaseYear: "1998", releaseYearEn: "1998",
            title: { it: "Fallout 2", en: "Fallout 2" },
            synopsis: {
              it: "Ottant'anni dopo il primo gioco, il Prescelto degli Eletti parte dal villaggio di Arroyo, fondato dai discendenti del primo Vault Dweller, alla ricerca del Giardino dell'Eden, un dispositivo capace di rendere di nuovo fertile la terra. Lungo il viaggio scopre i piani dell'Enclave, resti del governo pre-guerra intenzionati a sterminare ogni forma di vita mutata per ripopolare l'America con i soli «puri».",
              en: "Eighty years after the first game, the Chosen One sets out from the village of Arroyo, founded by descendants of the first Vault Dweller, in search of the Garden of Eden Creation Kit, a device able to make the land fertile again. Along the journey they uncover the plans of the Enclave, remnants of the pre-war government intent on exterminating all mutated life to repopulate America with the «pure» alone."
            }
          },
          { id: "fallout-3", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "2277", releaseYear: "2008", releaseYearEn: "2008",
            title: { it: "Fallout 3", en: "Fallout 3" },
            synopsis: {
              it: "Nato e cresciuto nel Vault 101 a Washington D.C., il Sopravvissuto ne esce sulle tracce del padre, scomparso misteriosamente, scoprendo il suo coinvolgimento nel Progetto Purezza, un tentativo di depurare l'acqua radioattiva del Fiume Potomac, conteso dall'Enclave che intende usarlo per sterminare i mutanti invece che curarli.",
              en: "Born and raised in Vault 101 in Washington D.C., the Lone Wanderer leaves in search of their father, who has mysteriously disappeared, discovering his involvement in Project Purity, an attempt to purify the irradiated water of the Potomac River, contested by the Enclave, which intends to use it to exterminate mutants rather than cure them."
            }
          },
          { id: "new-vegas", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "2281", releaseYear: "2010", releaseYearEn: "2010",
            title: { it: "Fallout: New Vegas", en: "Fallout: New Vegas" },
            synopsis: {
              it: "Il Corriere, lasciato per morto dopo essere stato derubato di un misterioso pacchetto (una fiche di platino), sopravvive e insegue il proprio aggressore fino a New Vegas, scoprendo di trovarsi al centro di una contesa tra la Legione di Cesare, la Nuova Repubblica della California e il misterioso Mr. House per il controllo della Diga di Hoover e dell'intera regione.",
              en: "The Courier, left for dead after being robbed of a mysterious package (a platinum chip), survives and pursues their attacker to New Vegas, discovering they stand at the centre of a dispute between Caesar's Legion, the New California Republic, and the mysterious Mr. House for control of Hoover Dam and the entire region."
            }
          },
          { id: "fallout-4", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "2287", releaseYear: "2015", releaseYearEn: "2015",
            title: { it: "Fallout 4", en: "Fallout 4" },
            synopsis: {
              it: "Il Sopravvissuto Unico, criogenizzato nel Vault 111 poco prima della Grande Guerra, si risveglia decenni dopo avendo assistito all'omicidio del coniuge e al rapimento del proprio figlio neonato. La ricerca del bambino, ormai adulto e a capo dell'Istituto (un'organizzazione segreta che crea sintetici umanoidi), lo porta al centro di un conflitto tra fazioni sul futuro stesso del Commonwealth del Massachusetts.",
              en: "The Sole Survivor, cryogenically frozen in Vault 111 shortly before the Great War, awakens decades later having witnessed their spouse's murder and their infant son's kidnapping. The search for the child, now an adult and head of the Institute (a secretive organisation that creates synthetic humanoids), draws them into a factional conflict over the very future of the Commonwealth of Massachusetts."
            }
          }
        ]
      }
    ]
  },

  "final-fantasy": {
    id: "final-fantasy",
    listTitle: { it: "Final Fantasy", en: "Final Fantasy" },
    eyebrow: { it: "Fascicolo", en: "Case File" },
    title: { it: "Final Fantasy", en: "Final Fantasy" },
    blurb: {
      it: "Ogni capitolo racconta un mondo diverso, ma il cuore resta lo stesso: giovani eroi si ribellano a un potere oppressivo che minaccia l'equilibrio naturale delle cose, spesso legato a un cristallo, una magia antica o una divinità corrotta. Il sacrificio personale è sempre il prezzo della salvezza collettiva. La.",
      en: "Each chapter tells of a different world, but the heart stays the same: young heroes rise against an oppressive power threatening the natural balance of things, often tied to a crystal, an ancient magic, or a corrupted divinity. Personal sacrifice is always the price of collective salvation. Hope survives even when all."
    },
    palette: ["#1a3a5c", "#c9a227", "#c41e3a"],
    accentColor: "#c9a227",
    tracks: [],
    avatar: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Final%20Fantasy%20Avatar.jpg",
    banner: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Final%20Fantasy%20Banner.jpg",
    watermark: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Final%20Fantasy%20Filigrana.jpg",
    watermarkOpacity: 0.18,
    noTimeline: true,
    canonNote: {
      intro: {
        it: "A differenza di Doom, qui non c'è nemmeno un'ambiguità da risolvere: ogni capitolo numerato di Final Fantasy è, per scelta dichiarata degli sviluppatori fin dall'inizio, un mondo a sé, con propri personaggi, propria ambientazione e proprio sistema di combattimento, senza alcuna pretesa di continuità con gli altri numeri. I legami che si notano tra un capitolo e l'altro (il nome Cid dato a un personaggio diverso in ogni gioco, i Chocobo, i Moogle, i Cristalli come dispositivo narrativo ricorrente) sono firme stilistiche della saga, non indizi di un mondo condiviso. Le uniche vere continuità narrative esistono all'interno di un singolo numero: la Compilation of Final Fantasy VII (Crisis Core, Advent Children, Dirge of Cerberus, tutte ambientate nello stesso mondo di FFVII), il dittico X/X-2, la trilogia di Final Fantasy XIII (XIII, XIII-2, Lightning Returns) e l'universo espanso di Final Fantasy XV (il film Kingsglaive, la serie animata Brotherhood).",
        en: "Unlike Doom, there isn't even an ambiguity to resolve here: every numbered Final Fantasy chapter is, by the developers' explicit choice from the very beginning, its own world, with its own characters, setting, and combat system, with no pretense of continuity with the other numbers. The threads that show up between one chapter and the next (the name Cid given to a different character in every game, Chocobos, Moogles, Crystals as a recurring narrative device) are stylistic signatures of the saga, not clues to a shared world. The only real narrative continuities exist within a single number: the Compilation of Final Fantasy VII (Crisis Core, Advent Children, Dirge of Cerberus, all set in FFVII's same world), the X/X-2 duology, the Final Fantasy XIII trilogy (XIII, XIII-2, Lightning Returns), and the expanded universe of Final Fantasy XV (the film Kingsglaive, the anime series Brotherhood)."
      },
      titles: {
        it: "I, II, III, IV, V, VI, VII (+ Compilation), VIII, IX, X (+ X-2), XI (MMO), XII, XIII (+ XIII-2, Lightning Returns), XIV (MMO), XV (+ Kingsglaive, Brotherhood), XVI — mondi indipendenti, nessuna linea temporale tra un numero e l'altro",
        en: "I, II, III, IV, V, VI, VII (+ Compilation), VIII, IX, X (+ X-2), XI (MMO), XII, XIII (+ XIII-2, Lightning Returns), XIV (MMO), XV (+ Kingsglaive, Brotherhood), XVI — independent worlds, no timeline between one number and the next"
      },
      outro: {
        it: "Ogni capitolo, comprese le eventuali recensioni presenti altrove su questo sito, va quindi considerato e giudicato come un'opera a sé stante, non come un tassello di una storia più grande.",
        en: "Each chapter, including any reviews found elsewhere on this site, should therefore be considered and judged as a standalone work, not as a piece of a larger story."
      }
    }
  },

  "fire-emblem": {
    id: "fire-emblem",
    listTitle: { it: "Fire Emblem", en: "Fire Emblem" },
    eyebrow: { it: "Fascicolo", en: "Case File" },
    title: { it: "Fire Emblem", en: "Fire Emblem" },
    blurb: {
      it: "Regni e casati nobiliari si scontrano in guerre dove ogni singola vita persa in battaglia è per sempre. Al centro di ogni conflitto, giovani condottieri devono scegliere tra lealtà di sangue e ciò che ritengono giusto, spesso mentre draghi antichi e armi leggendarie riemergono dal passato. Ogni decisione pesa quanto una.",
      en: "Kingdoms and noble houses clash in wars where every single life lost in battle is gone forever. At the center of every conflict, young commanders must choose between blood loyalty and what they believe is right, often as ancient dragons and legendary weapons resurface from the past. Every decision weighs as."
    },
    palette: ["#8b1a1a", "#1a3a5c", "#c9a227"],
    accentColor: "#8b1a1a",
    tracks: [],
    avatar: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Fire%20Emblem%20Avatar.jpg",
    banner: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Fire%20Emblem%20Banner.jpg",
    watermark: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Fire%20Emblem%20Filigrana.jpg",
    watermarkOpacity: 0.18,
    noTimeline: true,
    canonNote: {
      intro: {
        it: "Più sfumata di Final Fantasy: qui non tutto è indipendente. Esistono almeno due cluster di continuità confermata dagli stessi sviluppatori. Il primo, il più esteso, collega Shadow Dragon, Mystery of the Emblem (e il remake New Mystery of the Emblem), Gaiden/Echoes: Shadows of Valentia e infine Awakening, ambientato duemila anni dopo sugli stessi continenti di Archanea e Valentia, semplicemente rinominati Ylisse e Valm nel frattempo — Awakening cita esplicitamente Marth ed eroi del passato come figure storiche leggendarie. Il secondo cluster, più piccolo, collega Genealogy of the Holy War e Thracia 776 sul continente di Jugdral, e un terzo Path of Radiance e Radiant Dawn su Tellius. Fates, uscito dopo Awakening, contiene solo accenni non confermati a un possibile legame con Ylisse (un personaggio di Awakening compare in una missione bonus), mai chiarito ufficialmente. Tutti gli altri capitoli (Sacred Stones, Three Houses, Engage e le uscite mobile) restano mondi a sé, senza legami dichiarati con nessuno dei cluster precedenti.",
        en: "More nuanced than Final Fantasy: not everything here is independent. At least two continuity clusters are confirmed by the developers themselves. The largest one links Shadow Dragon, Mystery of the Emblem (and its remake New Mystery of the Emblem), Gaiden/Echoes: Shadows of Valentia, and finally Awakening, set two thousand years later on the same continents of Archanea and Valentia, simply renamed Ylisse and Valm in the meantime — Awakening explicitly references Marth and past heroes as legendary historical figures. A second, smaller cluster links Genealogy of the Holy War and Thracia 776 on the continent of Jugdral, and a third links Path of Radiance and Radiant Dawn on Tellius. Fates, released after Awakening, contains only unconfirmed hints of a possible link to Ylisse (an Awakening character appears in a bonus mission), never officially clarified. Every other chapter (Sacred Stones, Three Houses, Engage, and the mobile releases) remains its own world, with no declared ties to any of the previous clusters."
      },
      titles: {
        it: "Cluster Archanea-Valentia-Ylisse: Shadow Dragon → Mystery of the Emblem → Gaiden/Echoes: Shadows of Valentia → Awakening (2000 anni dopo). Cluster Jugdral: Genealogy of the Holy War → Thracia 776. Cluster Tellius: Path of Radiance → Radiant Dawn. Tutti gli altri capitoli: mondi indipendenti",
        en: "Archanea-Valentia-Ylisse cluster: Shadow Dragon → Mystery of the Emblem → Gaiden/Echoes: Shadows of Valentia → Awakening (2000 years later). Jugdral cluster: Genealogy of the Holy War → Thracia 776. Tellius cluster: Path of Radiance → Radiant Dawn. Every other chapter: independent worlds"
      },
      outro: {
        it: "Anche dentro ai cluster confermati, i legami restano leggeri: nomi di divinità ricorrenti, un'eredità storica citata di sfuggita, mai un vero intreccio di trame come nelle saghe con una timeline unica vera e propria.",
        en: "Even within the confirmed clusters, the ties remain light: recurring deity names, a historical legacy mentioned in passing, never a genuine plot intertwining like sagas with a true single timeline."
      }
    }
  },

  "dying-light": {
    id: "dying-light",
    listTitle: { it: "Dying Light", en: "Dying Light" },
    eyebrow: { it: "Fascicolo", en: "Case File" },
    title: { it: "Dying Light", en: "Dying Light" },
    avatar: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Dying%20Light%20Avatar.jpg",
    watermark: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Dying%20Light%20Filigrana.jpg",
    watermarkOpacity: 0.2,
    blurb: {
      it: "In città ridotte al collasso da un'epidemia che trasforma gli infetti in creature aggressive, i sopravvissuti si muovono tra i tetti per restare fuori dalla portata di ciò che si muove per le strade. Il giorno offre una tregua fragile, la notte appartiene a chi ha smesso di essere umano. Ogni salto, ogni corsa, è una scelta tra la vita.",
      en: "In cities collapsed under an epidemic that turns the infected into aggressive creatures, survivors move across rooftops to stay out of reach of what roams the streets below. Daylight offers a fragile truce; the night belongs to those who have stopped being human. Every jump, every sprint, is a choice between life."
    },
    palette: ["#eab308", "#4d7c0f", "#1e3a5f"],
    accentColor: "#4d7c0f",
    universes: [
      {
        id: "main",
        name: { it: "Universo Harran", en: "Harran Universe" },
        span: { it: "2015 – 2036", en: "2015 – 2036" },
        entries: [
          { id: "dying-light-1", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "2015", releaseYear: "2015", releaseYearEn: "2015",
            title: { it: "Dying Light", en: "Dying Light" },
            image: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Dying%20Light.jpg",
            synopsis: {
              it: "Kyle Crane, agente del GRE, viene paracadutato nella città di Harran in quarantena per recuperare un file rubato da Kadir Suleiman, detto Rais, ex colonnello militare che lo usa come merce di scambio per farsi estrarre dalla città. Il file contiene prove del piano del GRE di usare un virus come arma biologica. Crane tradisce l'organizzazione e sceglie di restare con i sopravvissuti, collaborando con i ricercatori locali Dr. Zere e Dr. Camden nel tentativo di sviluppare una cura. Scopre inoltre che il Ministero della Difesa intende bombardare Harran sostenendo che non ci siano sopravvissuti: riattiva una torre radio e fa sapere al mondo della loro esistenza, bloccando il bombardamento. Quando Rais uccide il Dr. Zere prima che possa consegnare le sue ricerche, Crane si assicura che arrivino comunque al Dr. Camden. Affronta infine Rais, a cui aveva già tagliato una mano durante una fuga precedente, e lo elimina.\nNel DLC The Following, la cura stenta ad arrivare e le scorte di Antizin si esauriscono. Crane si avventura nelle campagne fuori Harran in cerca di una cura, trovando un culto che adora una creatura chiamata la Madre, un'ibrida umano-volatile.\nEnding canonico: Crane sconfigge la Madre ma è costretto a bere il siero che lo trasforma in un volatile senziente. Scappa dalla zona di quarantena diffondendo involontariamente il virus nel mondo.",
              en: "Kyle Crane, a GRE agent, is airdropped into the quarantined city of Harran to recover a stolen file from Kadir Suleiman, known as Rais — a former military colonel who uses it as leverage to negotiate his own extraction from the city. The file contains evidence of the GRE's plan to weaponize a virus as a biological weapon. Crane betrays the organisation and chooses to stay with the survivors, working alongside local researchers Dr. Zere and Dr. Camden in an attempt to develop a cure. He also discovers that the Ministry of Defence intends to firebomb Harran, claiming there are no survivors: he reactivates a radio tower and alerts the outside world to their existence, preventing the bombing. When Rais kills Dr. Zere before he can deliver his research, Crane ensures it reaches Dr. Camden regardless. He then confronts Rais — whose hand he had already cut off during a previous escape — and kills him.\nIn the DLC The Following, the cure proves elusive and Antizin supplies run out. Crane ventures into the countryside outside Harran in search of a cure, discovering a cult that worships a creature called the Mother — a human-Volatile hybrid.\nCanonical ending: Crane defeats the Mother but is forced to drink a serum that transforms him into a sentient Volatile. He escapes the quarantine zone, unknowingly spreading the virus to the rest of the world."
            }
          },
          { id: "banshee-comic", type: "FUMETTO", typeEn: "COMIC", year: "~2021", releaseYear: "2021", releaseYearEn: "2021",
            title: { it: "Banshee: I Am The Cure", en: "Banshee: I Am The Cure" },
            image: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Dying%20Light%20Banshee%20I%20Am%20The%20Cure.jpg",
            synopsis: {
              it: "Fumetto digitale gratuito rilasciato da Techland in collaborazione con Dynamite Entertainment. Segue una dottoressa che sta lavorando a un vaccino contro il THV, la variante mutata del virus di Harran sviluppata segretamente dal GRE per scopi militari e fuggita da un laboratorio di Ginevra nel 2021. Racconta gli eventi del \"Fall\": il collasso globale della civiltà causato dalla diffusione del THV, inclusi i bombardamenti del Black Monday su Villedor che decimano metà della popolazione della città. La dottoressa viene infettata e si trasforma in un Banshee, una nuova variante di infetto presente in DL2. Ponte narrativo tra DL1 e DL2.",
              en: "Free digital comic released by Techland in collaboration with Dynamite Entertainment. It follows a doctor working on a vaccine against the THV — the mutated variant of the Harran Virus secretly developed by the GRE for military purposes, which escaped from a laboratory in Geneva in 2021. It depicts the events of the Fall: the global collapse of civilisation caused by the spread of the THV, including the Black Monday bombings over Villedor that wipe out half the city's population. The doctor is infected and transforms into a Banshee, a new type of infected present in DL2. A narrative bridge between DL1 and DL2."
            }
          },
          { id: "dying-light-2", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "2036", releaseYear: "2022", releaseYearEn: "2022",
            title: { it: "Dying Light 2: Stay Human", en: "Dying Light 2: Stay Human" },
            image: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Dying%20Light%202.jpg",
            synopsis: {
              it: "Quindici anni dopo il Fall, la civiltà si è ridotta a pochi insediamenti sparsi. Aiden Caldwell, un Pellegrino nomade e ibrido volatile senziente risultato di esperimenti del GRE subiti da bambino, raggiunge Villedor, l'ultima grande città rimasta, in cerca della sorella Mia. L'antagonista principale è Waltz, lo scienziato del GRE che li ha usati come cavie e che ora vuole riattivare un protocollo di emergenza che scatenerebbe missili su Villedor. Aiden si muove tra la guerra civile dei Pacificatori e i Sopravvissuti del Bazaar mentre affronta il suo passato e tenta di fermare Waltz. Crane viene menzionato dai personaggi come figura leggendaria del passato.",
              en: "Fifteen years after the Fall, civilisation has been reduced to a handful of scattered settlements. Aiden Caldwell — a nomadic Pilgrim and sentient Volatile hybrid, the result of GRE experiments he was subjected to as a child — reaches Villedor, the last major city still standing, in search of his sister Mia. The main antagonist is Waltz, the GRE scientist who used them as test subjects and who now wants to reactivate an emergency protocol that would trigger missile strikes on Villedor. Aiden moves between the civil war between the Peacekeepers and the Bazaar Survivors while confronting his past and attempting to stop Waltz. Crane is mentioned by various characters as a legendary figure from the past."
            }
          },
          { id: "dying-light-beast", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "Subito dopo Dying Light 2 (dopo 13 anni di prigionia di Crane)", yearEn: "Right after Dying Light 2 (following Crane's 13 years in captivity)", releaseYear: "2025", releaseYearEn: "2025",
            title: { it: "Dying Light: The Beast", en: "Dying Light: The Beast" },
            image: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Dying%20Light%20The%20Beast.jpg",
            synopsis: {
              it: "Crane, trasformatosi in volatile senziente dopo The Following, viene catturato dal GRE e poi ceduto al Barone, un biologo spietato che lo usa come cavia per 13 anni nel tentativo di creare un esercito di volatili senzienti usando il siero della Madre. Crane riesce a fuggire nel caos scatenato da Aiden Caldwell, un'altra cavia che sfonda la contenzione, e cerca vendetta contro il Barone scoprendo nel finale che il GRE stava finanziando gli esperimenti dall'ombra. Crane uccide il Barone e dichiara il GRE il suo prossimo obiettivo.",
              en: "Crane, having transformed into a sentient Volatile after The Following, is captured by the GRE and handed over to the Baron — a ruthless biologist who uses him as a test subject for 13 years in an attempt to create an army of sentient Volatiles using the Mother's serum. Crane manages to escape in the chaos triggered by Aiden Caldwell, another test subject who breaches containment, and seeks revenge against the Baron, discovering in the finale that the GRE has been funding the experiments from the shadows. Crane kills the Baron and declares the GRE his next target."
            }
          }
        ]
      }
    ]
  },

  "gears-of-war": {
    id: "gears-of-war",
    listTitle: { it: "Gears of War", en: "Gears of War" },
    eyebrow: { it: "Fascicolo", en: "Case File" },
    title: { it: "Gears of War", en: "Gears of War" },
    blurb: {
      it: "Sul pianeta Sera, l'umanità combatte per la sopravvivenza contro l'Orda Locusta, un nemico emerso dalle profondità sotterranee per spazzare via ogni forma di vita in superficie. Soldati sempre più esausti si trascinano da una trincea all'altra in una guerra che sembra non avere fine. Ogni battaglia è una lotta per il.",
      en: "On the planet Sera, humanity fights for survival against the Locust Horde, an enemy that emerged from the depths below to wipe out every form of life on the surface. Soldiers, worn down but unbroken, drag themselves from one trench to the next in a war that seems endless. Every battle is a fight for the species' very."
    },
    palette: ["#4a4a4a", "#8b0000", "#1a1a1a"],
    accentColor: "#8b0000",
    tracks: [],
    avatar: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Gears%20of%20War%20Avatar.jpg",
    banner: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Gears%20of%20War%20Banner.jpg",
    watermark: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Gears%20of%20War%20Filigrana.jpg",
    watermarkOpacity: 0.18,
    universes: [
      {
        id: "main",
        name: { it: "Sera", en: "Sera" },
        span: { it: "0 A.E. – 42 A.E.", en: "0 A.E. – 42 A.E." },
        entries: [
          { id: "e-day", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "0 A.E. (Giorno dell'Emergenza)", releaseYear: "2025", releaseYearEn: "2025",
            title: { it: "Gears of War: E-Day", en: "Gears of War: E-Day" },
            synopsis: {
              it: "Il giorno in cui il Locust Horde emerge dal sottosuolo di Sera, colpendo simultaneamente ogni città del pianeta. Un giovane Marcus Fenix, ancora al fianco del padre Adam, scienziato della COG, affronta l'inizio di una guerra che cambierà per sempre il volto del pianeta. Capitolo cronologicamente più antico, uscito solo di recente.",
              en: "The day the Locust Horde emerges from beneath Sera, striking every city on the planet simultaneously. A young Marcus Fenix, still at his father Adam's side, a COG scientist, faces the beginning of a war that will forever change the face of the planet. The chronologically earliest chapter, released only recently."
            }
          },
          { id: "judgment", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "poco dopo E-Day", releaseYear: "2013", releaseYearEn: "2013",
            title: { it: "Gears of War: Judgment", en: "Gears of War: Judgment" },
            synopsis: {
              it: "Damon Baird e Augustus Cole, sotto processo per un atto disobbediente commesso durante una missione, raccontano in tribunale in una serie di flashback come la Squadra Kilo abbia affrontato le prime, caotiche settimane della guerra contro il Locust, mostrando un lato più acerbo e improvvisato del conflitto rispetto alla trilogia principale.",
              en: "Damon Baird and Augustus Cole, on trial for an act of disobedience committed during a mission, recount in court through a series of flashbacks how Kilo Squad handled the first, chaotic weeks of the war against the Locust, showing a rawer, more improvised side of the conflict compared to the main trilogy."
            }
          },
          { id: "gears-1", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "14 A.E.", releaseYear: "2006", releaseYearEn: "2006",
            title: { it: "Gears of War", en: "Gears of War" },
            synopsis: {
              it: "Quattordici anni dopo il Giorno dell'Emergenza, con la guerra ormai quasi persa, Marcus Fenix viene liberato dal carcere per unirsi alla Squadra Delta e lanciare l'Offensiva Lightmass, un bombardamento capace di distruggere le gallerie sotterranee del Locust Horde.",
              en: "Fourteen years after Emergence Day, with the war nearly lost, Marcus Fenix is released from prison to join Delta Squad and launch the Lightmass Offensive, a bombardment capable of destroying the Locust Horde's underground tunnels."
            }
          },
          { id: "gears-2", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "mesi dopo Gears 1", releaseYear: "2008", releaseYearEn: "2008",
            title: { it: "Gears of War 2", en: "Gears of War 2" },
            synopsis: {
              it: "Con il Locust Horde che inghiotte intere città facendole sprofondare nel sottosuolo, Delta Squad scende nel cuore stesso della loro civiltà per fermare Myrrah, la Regina Locust, scoprendo lungo il percorso l'esistenza del Lambent, una minaccia parassitaria che tormenta gli stessi Locust dall'interno.",
              en: "As the Locust Horde swallows entire cities, sinking them underground, Delta Squad descends into the heart of their civilisation to stop Myrrah, the Locust Queen, discovering along the way the existence of the Lambent, a parasitic threat tormenting the Locust themselves from within."
            }
          },
          { id: "gears-3", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "poco dopo Gears 2", releaseYear: "2011", releaseYearEn: "2011",
            title: { it: "Gears of War 3", en: "Gears of War 3" },
            synopsis: {
              it: "Con l'umanità ridotta a poche migliaia di superstiti, stretta tra Locust e Lambent, Delta Squad scopre che il padre di Marcus, Adam, aveva sviluppato una contromisura capace di eliminare entrambe le minacce al costo del carburante Imulsion che alimenta l'intera civiltà. Marcus uccide Myrrah, chiudendo la guerra ma lasciando Sera devastata ed economicamente al collasso.",
              en: "With humanity reduced to a few thousand survivors, caught between the Locust and the Lambent, Delta Squad discovers that Marcus's father, Adam, had developed a countermeasure capable of eliminating both threats at the cost of the Imulsion fuel powering all of civilisation. Marcus kills Myrrah, ending the war but leaving Sera devastated and economically collapsed."
            }
          },
          { id: "gears-4", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "39 A.E. (25 anni dopo Gears 3)", releaseYear: "2016", releaseYearEn: "2016",
            title: { it: "Gears of War 4", en: "Gears of War 4" },
            synopsis: {
              it: "Venticinque anni dopo la fine della guerra, J.D. Fenix (figlio di Marcus), Kait Diaz e Del Walker, ribelli fuori dal controllo della nuova COG, scoprono l'esistenza dello Swarm, l'evoluzione mutata del Locust nata dall'esposizione all'Imulsion, e che Kait stessa discende dalla stirpe della Regina Locust.",
              en: "Twenty-five years after the war's end, J.D. Fenix (Marcus's son), Kait Diaz, and Del Walker, rebels outside the new COG's control, discover the existence of the Swarm, the mutated evolution of the Locust born from exposure to Imulsion — and that Kait herself descends from the Locust Queen's bloodline."
            }
          },
          { id: "gears-5", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "42 A.E. (mesi dopo Gears 4)", releaseYear: "2019", releaseYearEn: "2019",
            title: { it: "Gears 5", en: "Gears 5" },
            synopsis: {
              it: "Kait, tormentata dalla propria discendenza Locust e da visioni sempre più intense, guida la ricerca di una risposta al mistero dello Swarm attraverso le distese ghiacciate di Sera, mentre la nuova First Minister Jinn muove pedine proprie contro l'umanità stessa che dovrebbe proteggere.",
              en: "Kait, tormented by her Locust ancestry and increasingly intense visions, leads the search for answers to the mystery of the Swarm across Sera's icy wastes, while the new First Minister Jinn moves her own pieces against the very humanity she is meant to protect."
            }
          }
        ]
      }
    ]
  },

  gta: {
    id: "gta",
    listTitle: { it: "Grand Theft Auto", en: "Grand Theft Auto" },
    eyebrow: { it: "Fascicolo", en: "Case File" },
    title: { it: "Grand Theft Auto", en: "Grand Theft Auto" },
    blurb: {
      it: "In città immaginarie che rispecchiano e deridono l'America contemporanea, protagonisti di umili origini si fanno strada nella criminalità organizzata, tra rapine, tradimenti e ambizioni sempre più grandi. Il crimine promette ricchezza rapida, ma il prezzo da pagare cresce ad ogni passo. Nessuno resta pulito per.",
      en: "In fictional cities that mirror and mock contemporary America, protagonists of humble origins claw their way up through organized crime, through heists, betrayals, and ever-growing ambition. Crime promises quick riches, but the price only grows with every step. No one stays clean for long on these streets."
    },
    palette: ["#ff4fa3", "#f2b705", "#2ecc71"],
    accentColor: "#ff4fa3",
    avatar: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/GTA%20Avatar.jpg",
    watermark: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/GTA%20Filigrana.jpg",
    watermarkOpacity: 0.2,
    universes: [
      {
        id: "3d-universe",
        name: { it: "Universo 3D", en: "3D Universe" },
        span: { it: "1984 – 2001", en: "1984 – 2001" },
        entries: [
          { id: "vcs", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "1984", releaseYear: "2006", releaseYearEn: "2006",
            title: { it: "Vice City Stories", en: "Vice City Stories" },
            image: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/GTA%20Vice%20City%20Stories.jpg",
            synopsis: {
              it: "Victor Vance, militare espulso dall'esercito dal corrotto sergente Martinez, costruisce un impero criminale a Vice City per pagare le cure mediche del fratello Pete e aiutare il fratello Lance. Entra in conflitto con il potente cartello dei fratelli Mendez, li elimina entrambi insieme a Martinez, e decide di ritirarsi dalla vita criminale. Due anni dopo, tornato a fare affari di droga con Lance, viene ucciso nell'agguato di Ricardo Diaz, la scena che apre Vice City.",
              en: "Victor Vance, a soldier dishonourably discharged by corrupt Sergeant Martinez, builds a criminal empire in Vice City to pay for his brother Pete's medical bills and support his brother Lance. He enters into conflict with the powerful Mendez Brothers cartel, eliminates both of them along with Martinez, and decides to retire from criminal life. Two years later, having returned to the drug trade with Lance, he is killed in Ricardo Diaz's ambush — the scene that opens Vice City."
            }
          },
          { id: "vc", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "1986", releaseYear: "2002", releaseYearEn: "2002",
            title: { it: "Vice City", en: "Vice City" },
            image: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/GTA%20Vice%20City.jpg",
            synopsis: {
              it: "Tommy Vercetti arriva a Vice City per conto del boss Sonny Forelli, finisce in un'imboscata orchestrata da Ricardo Diaz, perde soldi e droga. Costruisce da zero un proprio impero criminale ed elimina Diaz insieme a Lance Vance. Nel finale Sonny arriva a Vice City per prendere il controllo dell'impero di Tommy: Lance lo tradisce passando dalla parte di Forelli, ma Tommy uccide entrambi. Durante lo scontro Sonny conferma di averlo tradito 15 anni prima facendolo cadere in un'imboscata a Harwood. Tommy diventa il re indiscusso di Vice City.",
              en: "Tommy Vercetti arrives in Vice City on behalf of boss Sonny Forelli, walks into an ambush orchestrated by Ricardo Diaz, and loses both the money and the drugs. He builds his own criminal empire from scratch and eliminates Diaz alongside Lance Vance. In the finale, Sonny arrives in Vice City to seize control of Tommy's empire: Lance betrays him by siding with Forelli, but Tommy kills them both. During the confrontation, Sonny confirms that he set Tommy up fifteen years earlier by sending him into an ambush in Harwood. Tommy becomes the undisputed king of Vice City."
            }
          },
          { id: "sa-intro", type: "CORTOMETRAGGIO", typeEn: "SHORT FILM", year: "1992", releaseYear: "2004", releaseYearEn: "2004",
            title: { it: "Introduzione a San Andreas", en: "Introduction to San Andreas" },
            image: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/GTA%20San%20Andreas%20Introduction.jpg",
            synopsis: {
              it: "Cortometraggio di 20 minuti che mostra gli eventi nelle ore precedenti l'inizio di San Andreas: le manovre del corrotto agente Tenpenny, che arruola il rookie Hernandez e comincia a orchestrare il tradimento di Big Smoke; il declino di Ken Rosenberg, radiato dall'albo degli avvocati e in un centro di disintossicazione a Las Venturas dove gestisce i rapporti tesi tra Salvatore Leone e i Sindacco; e i movimenti del cartello di San Fierro. Si chiude con la telefonata di Sweet a CJ che annuncia la morte della madre.",
              en: "A 20-minute short film showing the events in the hours before San Andreas begins: the manoeuvres of corrupt officer Tenpenny, who recruits rookie Hernandez and begins orchestrating Big Smoke's betrayal; the decline of Ken Rosenberg, disbarred and in rehab in Las Venturas where he manages the tense relations between Salvatore Leone and the Sindaccos; and the movements of the San Fierro cartel. It closes with Sweet's phone call to CJ announcing their mother's death."
            }
          },
          { id: "sa", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "1992", releaseYear: "2004", releaseYearEn: "2004",
            title: { it: "San Andreas", en: "San Andreas" },
            image: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/GTA%20San%20Andreas.jpg",
            synopsis: {
              it: "Carl \"CJ\" Johnson torna a Los Santos dopo anni di assenza e viene immediatamente incastrato dalla polizia corrotta di Tenpenny. Per sopravvivere è costretto a lavorare per lui mentre cerca di risollevare la sua gang, i Grove Street Families. Scopre che il suo amico di vecchia data Big Smoke ha tradito la gang alleandosi con i Ballas e con Tenpenny per controllare il traffico di droga della città. La storia attraversa tre città e culmina nella rivolta di Los Santos, nella morte di Big Smoke e in quella di Tenpenny.",
              en: "Carl \"CJ\" Johnson returns to Los Santos after years away and is immediately framed by corrupt officer Tenpenny. To survive, he is forced to work for him while trying to rebuild his gang, the Grove Street Families. He discovers that his longtime friend Big Smoke has betrayed the gang by allying with the Ballas and Tenpenny to control the city's drug trade. The story spans three cities and culminates in the Los Santos riots, the death of Big Smoke, and the death of Tenpenny."
            }
          },
          { id: "lcs", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "1998", releaseYear: "2005", releaseYearEn: "2005",
            title: { it: "Liberty City Stories", en: "Liberty City Stories" },
            image: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/GTA%20Liberty%20City%20Stories.jpg",
            synopsis: {
              it: "Toni Cipriani torna a Liberty City dopo quattro anni di fuga, durante i quali aveva ucciso un uomo d'onore su ordine di Salvatore Leone. Al ritorno viene retrocesso di grado perché Vincenzo Cilli lo ha scalzato nella gerarchia dei Leone. Toni si fa strada eliminando Vincenzo e le famiglie rivali Sindacco e Forelli, mentre il vero antagonista si rivela essere Massimo Torini della mafia siciliana, che vuole prendere il controllo di Liberty City. Nel finale Toni e Salvatore sventano il piano dei siciliani. La famiglia Leone diventa la forza dominante della città, direttamente prima degli eventi di GTA III.",
              en: "Toni Cipriani returns to Liberty City after four years on the run, having killed a made man on Salvatore Leone's orders. On his return he is demoted because Vincenzo Cilli has taken his place in the Leone hierarchy. Toni works his way back up by eliminating Vincenzo and the rival Sindacco and Forelli families, while the true antagonist turns out to be Massimo Torini of the Sicilian Mafia, who is attempting to seize control of Liberty City. In the finale, Toni and Salvatore foil the Sicilians' plan. The Leone family becomes the dominant force in the city — directly before the events of GTA III."
            }
          },
          { id: "gta-advance", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "2000", releaseYear: "2004", releaseYearEn: "2004",
            title: { it: "GTA Advance", en: "GTA Advance" },
            image: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/GTA%20Advance.jpg",
            synopsis: {
              it: "Mike, piccolo criminale di Liberty City, vede il suo socio Vinnie morire in un'esplosione prima che i due possano finalmente lasciare la città. Mentre indaga sulla morte, scopre la verità: Vinnie ha finto la propria morte per scappare con tutti i loro risparmi. Mike lo rintraccia e lo uccide. Storia autoconclusiva, ambientata un anno prima di GTA III.",
              en: "Mike, a small-time criminal in Liberty City, watches his partner Vinnie apparently die in a car explosion just before the two can finally leave the city for good. As he investigates the murder, he uncovers the truth: Vinnie faked his own death to run off with all their savings. Mike tracks him down and kills him. A self-contained story set one year before GTA III."
            }
          },
          { id: "gta3", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "2001", releaseYear: "2001", releaseYearEn: "2001",
            title: { it: "GTA III", en: "GTA III" },
            image: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/GTA%20III.jpg",
            synopsis: {
              it: "Claude viene tradito e lasciato per morto dalla fidanzata Catalina durante una rapina in banca a Liberty City. Arrestato, fugge approfittando di un attacco del cartello colombiano al convoglio che lo trasporta in prigione. Scala i ranghi criminali della città lavorando per la famiglia Leone e la Yakuza, mentre Catalina, ora a capo del cartello, gli dà la caccia. Nel finale Claude salva Maria Latore tenuta in ostaggio, insegue Catalina fino alla diga di Cochrane e la abbatte con un lanciarazzi mentre tenta di fuggire in elicottero.",
              en: "Claude is betrayed and left for dead by his girlfriend Catalina during a bank robbery in Liberty City. Arrested, he escapes by taking advantage of a Colombian cartel attack on the convoy transporting him to prison. He climbs the criminal ranks of the city working for the Leone family and the Yakuza, while Catalina — now head of the cartel — hunts him down. In the finale, Claude rescues Maria Latore from captivity, pursues Catalina to the Cochrane Dam, and shoots down her helicopter with a rocket launcher as she attempts to flee."
            }
          }
        ]
      },
      {
        id: "hd-universe",
        name: { it: "Universo HD", en: "HD Universe" },
        span: { it: "dal 2008", en: "since 2008" },
        entries: [
          { id: "gta4", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "2008", releaseYear: "2008", releaseYearEn: "2008",
            title: { it: "GTA IV", en: "GTA IV" },
            image: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/GTA%20IV.jpg",
            synopsis: {
              it: "Niko Bellic arriva a Liberty City dal cugino Roman cercando vendetta per un tradimento di guerra che decimò la sua unità. Lavora per varie famiglie criminali mentre Dimitri Rascalov lo manipola e lo tradisce ripetutamente. Nell'ending fortemente implicato come canonico: Niko uccide Dimitri sulla nave Platypus, Kate McReary muore nell'attacco al matrimonio di Roman orchestrato da Pegorino, Niko uccide Pegorino a Happiness Island.\n\nDLC The Lost and Damned (2008, parallelo a GTA IV). Johnny Klebitz cerca di tenere unita la gang motociclistica The Lost MC mentre il presidente Billy Grey, appena uscito dalla riabilitazione, la trascina in guerra con i Triadi. La gang si sgretola progressivamente: Johnny finisce per uccidere Billy e vede tutto ciò per cui aveva combattuto andare in pezzi.\n\nDLC The Ballad of Gay Tony (2008, parallelo a GTA IV). Luis Lopez, bodyguard del nightclub owner \"Gay Tony\" Prince, si destreggia tra creditori, gangster russi e l'élite corrotta di Liberty City. Il suo finale si sovrappone esattamente a quello di GTA IV, con l'aereo di Ray Bulgarin visibile nella scena finale.",
              en: "Niko Bellic arrives in Liberty City to stay with his cousin Roman, seeking revenge for a wartime betrayal that decimated his unit. He works for various criminal families while Dimitri Rascalov repeatedly manipulates and betrays him. In the ending strongly implied to be canonical: Niko kills Dimitri on the Platypus ship, Kate McReary dies in the attack on Roman's wedding orchestrated by Pegorino, and Niko kills Pegorino on Happiness Island.\n\nDLC The Lost and Damned (2008, parallel to GTA IV). Johnny Klebitz tries to hold together the Lost MC motorcycle gang while president Billy Grey — fresh out of rehab — drags it into war with the Triads. The gang gradually falls apart: Johnny ends up killing Billy and watches everything he fought for crumble.\n\nDLC The Ballad of Gay Tony (2008, parallel to GTA IV). Luis Lopez, bodyguard to nightclub owner \"Gay Tony\" Prince, navigates between loan sharks, Russian gangsters, and Liberty City's corrupt elite. His finale overlaps exactly with that of GTA IV — Ray Bulgarin's plane is visible in the final scene."
            }
          },
          { id: "ctw", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "2009", releaseYear: "2009", releaseYearEn: "2009",
            title: { it: "Chinatown Wars", en: "Chinatown Wars" },
            image: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/GTA%20Chinatown%20Wars.jpg",
            synopsis: {
              it: "Huang Lee arriva a Liberty City per consegnare la spada ancestrale Yu Jian allo zio Wu \"Kenny\" Lee come simbolo di successione alla guida delle Triadi. Viene subito attaccato, lasciato per morto e la spada rubata. Indagando sulla corruzione interna scopre la verità: è stato Kenny stesso a orchestrare il furto e a far uccidere il padre di Huang per scalare il potere delle Triadi da solo. Huang uccide Kenny e viene offerto come nuovo boss dalle Triadi dal vecchio capo Hsin.",
              en: "Huang Lee arrives in Liberty City to deliver the ancestral sword Yu Jian to his uncle Wu \"Kenny\" Lee as a symbol of succession to the leadership of the Triads. He is immediately ambushed, left for dead, and the sword stolen. As he investigates the internal corruption, he uncovers the truth: it was Kenny himself who orchestrated the theft and had Huang's father murdered in order to seize control of the Triads alone. Huang kills Kenny and is offered the position of new Triad boss by the outgoing leader Hsin."
            }
          },
          { id: "gta5", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "2013", releaseYear: "2013", releaseYearEn: "2013",
            title: { it: "GTA V", en: "GTA V" },
            image: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/GTA%20V.jpg",
            synopsis: {
              it: "Michael De Santa, Franklin Clinton e Trevor Philips, rispettivamente ex rapinatore in pensione sotto falsa identità, giovane di strada e trafficante di metanfetamine, si intrecciano in una serie di grandi rapine mentre FIB e vari antagonisti li mettono l'uno contro l'altro. Nell'ending canonico, confermato da Rockstar nel dicembre 2025 tramite GTA Online: i tre si alleano, eliminano Steve Haines, Wei Cheng e Devin Weston, e sopravvivono tutti. Michael diventa produttore cinematografico, Trevor si reinventa come lifestyle guru e Franklin gestisce una società di sicurezza e contratti chiamata F. Clinton and Partner, dove collabora con Dr. Dre.\n\nNella versione online (GTA Online) il protagonista custom del giocatore opera a Los Santos prima e dopo gli eventi di GTA V. Canonicamente parte dell'Universo HD: Franklin, Michael e Trevor appaiono in diverse missioni. Lester menziona Niko Bellic come \"un tipo dell'Est Europa che faceva rumore a Liberty City, poi è sparito\", confermando la continuità con GTA IV.",
              en: "Michael De Santa, Franklin Clinton and Trevor Philips — a retired robber living under a false identity, a young street hustler, and a methamphetamine trafficker — become entangled in a series of major heists while the FIB and various antagonists turn them against each other. In the canonical ending, confirmed by Rockstar in December 2025 via GTA Online: the three ally and eliminate Steve Haines, Wei Cheng and Devin Weston, and all survive. Michael becomes a film producer, Trevor reinvents himself as a lifestyle guru, and Franklin runs a security and contracts firm called F. Clinton and Partner, where he works alongside Dr. Dre.\n\nIn the online version (GTA Online), the player's custom protagonist operates in Los Santos before and after the events of GTA V. Canonically part of the HD Universe: Franklin, Michael and Trevor all appear in various missions. Lester mentions Niko Bellic as \"an Eastern European guy who was making noise in Liberty City, then went quiet\", confirming continuity with GTA IV."
            }
          }
        ]
      }
    ]
  },

  "god-of-war": {
    id: "god-of-war",
    listTitle: { it: "God of War", en: "God of War" },
    eyebrow: { it: "Fascicolo", en: "Case File" },
    title: { it: "God of War", en: "God of War" },
    blurb: {
      it: "Un guerriero perseguitato dal proprio passato si scontra ripetutamente con dèi, mostri e intere mitologie che si frappongono tra lui e la pace che non riesce a trovare. La sua rabbia è tanto un'arma quanto una condanna, capace di travolgere chiunque, mortale o divino. Dietro ogni battaglia si nasconde sempre.",
      en: "A warrior haunted by his own past repeatedly clashes with gods, monsters, and entire mythologies standing between him and the peace he cannot find. His rage is both his weapon and his curse, capable of overwhelming anyone, mortal or divine. Behind every battle lies a father in search of redemption."
    },
    palette: ["#8b1a1a", "#2c2c2c", "#c9a961"],
    accentColor: "#8b1a1a",
    tracks: [],
    avatar: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/God%20of%20War%20Avatar.jpg",
    banner: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/God%20of%20War%20Banner.jpg",
    watermark: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/God%20of%20War%20Filigrana.jpg",
    watermarkOpacity: 0.18,
    universes: [
      {
        id: "saga-greca",
        name: { it: "Saga Greca", en: "Greek Saga" },
        span: { it: "Sparta, XIII secolo a.C. circa", en: "Sparta, c. 13th century BC" },
        entries: [
          { id: "sons-of-sparta", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "infanzia di Kratos", releaseYear: "2026", releaseYearEn: "2026",
            title: { it: "Sons of Sparta", en: "Sons of Sparta" },
            synopsis: {
              it: "Capitolo cronologicamente più antico della saga, uscito solo di recente. Segue un tredicenne Kratos e il fratello minore Deimos mentre si addestrano nell'agoge di Sparta, narrato in flashback da un Kratos ormai adulto che racconta gli eventi alla figlia Calliope. Getta le basi del legame tra i due fratelli, poi separato dagli eventi che porteranno Kratos al servizio di Ares.",
              en: "The chronologically earliest chapter of the saga, released only recently. Follows a thirteen-year-old Kratos and his younger brother Deimos as they train at the agoge in Sparta, narrated in flashback by an adult Kratos recounting the events to his daughter Calliope. Lays the groundwork for the bond between the two brothers, later severed by the events that lead Kratos into Ares's service."
            }
          },
          { id: "ascension", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "poco dopo la tragedia familiare", releaseYear: "2013", releaseYearEn: "2013",
            title: { it: "Ascension", en: "Ascension" },
            synopsis: {
              it: "Subito dopo essere stato ingannato da Ares nell'uccidere la propria moglie e figlia, Kratos viene incatenato dalle Furie per aver spezzato il patto di sangue col dio. Libera sé stesso dalla loro prigione, uccidendo la prima delle tre Furie e ponendo le basi per il proprio percorso di vendetta contro l'intero pantheon.",
              en: "Immediately after being tricked by Ares into killing his own wife and daughter, Kratos is chained by the Furies for breaking his blood oath to the god. He frees himself from their prison, killing the first of the three Furies and setting the course for his path of vengeance against the entire pantheon."
            }
          },
          { id: "chains-of-olympus", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "durante il servizio agli dei", releaseYear: "2008", releaseYearEn: "2008",
            title: { it: "Chains of Olympus", en: "Chains of Olympus" },
            synopsis: {
              it: "Durante i dieci anni di servizio agli dei olimpici come pagamento per la propria colpa, Kratos viene inviato a salvare il dio sole Helios, rapito e imprigionato negli Inferi da Persefone e Atlante, che progettano di liberare i Titani. Kratos li ferma, restituendo la luce al mondo.",
              en: "During the ten years of service to the Olympian gods paid as penance for his guilt, Kratos is sent to rescue the sun god Helios, kidnapped and imprisoned in the Underworld by Persephone and Atlas, who are plotting to free the Titans. Kratos stops them, restoring light to the world."
            }
          },
          { id: "god-of-war-1", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "fine del servizio agli dei", releaseYear: "2005", releaseYearEn: "2005",
            title: { it: "God of War", en: "God of War" },
            synopsis: {
              it: "Ormai disperato dopo dieci anni di servizio senza pace, Kratos accetta la missione di recuperare il Vaso di Pandora, unica arma capace di ferire un dio, per uccidere Ares stesso, che lo ha manipolato fin dall'inizio. Sconfitto Ares, Kratos ne eredita il trono, diventando il nuovo Dio della Guerra.",
              en: "Desperate after ten years of service without peace, Kratos accepts the mission to retrieve Pandora's Box, the only weapon capable of harming a god, in order to kill Ares himself, who had manipulated him from the start. Having defeated Ares, Kratos inherits his throne, becoming the new God of War."
            }
          },
          { id: "ghost-of-sparta", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "dopo essere diventato Dio della Guerra", releaseYear: "2010", releaseYearEn: "2010",
            title: { it: "Ghost of Sparta", en: "Ghost of Sparta" },
            synopsis: {
              it: "Tormentato da visioni della madre, Kratos viaggia fino ad Atlantide sommersa per scoprirne il destino, apprendendo che suo fratello Deimos, rapito da bambino dagli dei per una profezia che lo riguardava, è ancora vivo e prigioniero di Ares nelle Catene degli Inferi. Kratos lo libera, ma Deimos muore comunque poco dopo per mano di Thanatos.",
              en: "Tormented by visions of his mother, Kratos travels to sunken Atlantis to learn her fate, discovering that his brother Deimos, taken as a child by the gods over a prophecy concerning him, is still alive and imprisoned by Ares in the Chains of the Underworld. Kratos frees him, but Deimos dies shortly after anyway at the hands of Thanatos."
            }
          },
          { id: "god-of-war-2", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "poco dopo God of War", releaseYear: "2007", releaseYearEn: "2007",
            title: { it: "God of War II", en: "God of War II" },
            synopsis: {
              it: "Zeus, temendo che Kratos possa un giorno rovesciarlo, lo tradisce e lo uccide durante una battaglia. Salvato dalle Sorelle del Destino, Kratos si allea con i Titani sconfitti in epoche precedenti e viaggia indietro nel tempo per alterare il proprio destino, giurando vendetta contro Zeus stesso.",
              en: "Zeus, fearing Kratos might one day overthrow him, betrays and kills him during a battle. Rescued by the Sisters of Fate, Kratos allies with the Titans defeated in earlier ages and travels back in time to alter his own destiny, vowing revenge against Zeus himself."
            }
          },
          { id: "god-of-war-3", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "conclusione della guerra contro l'Olimpo", releaseYear: "2010", releaseYearEn: "2010",
            title: { it: "God of War III", en: "God of War III" },
            synopsis: {
              it: "In sella al Titano Gaia, Kratos assalta il Monte Olimpo insieme ai Titani superstiti per porre fine una volta per tutte al regno degli dei. Uccide uno dopo l'altro Poseidone, Ade, Ermes, Elio, Efesto ed Era, infine Zeus stesso, distruggendo di fatto l'intero pantheon greco e lasciando il mondo devastato dalla propria stessa vendetta.",
              en: "Riding the Titan Gaia, Kratos assaults Mount Olympus alongside the surviving Titans to end the gods' reign once and for all. He kills Poseidon, Hades, Hermes, Helios, Hephaestus, and Hera one after another, and finally Zeus himself, effectively destroying the entire Greek pantheon and leaving the world devastated by his own vengeance."
            }
          }
        ]
      },
      {
        id: "saga-norrena",
        name: { it: "Saga Norrena", en: "Norse Saga" },
        span: { it: "Midgard, decenni dopo", en: "Midgard, decades later" },
        entries: [
          { id: "god-of-war-2018", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "decenni dopo la Saga Greca", releaseYear: "2018", releaseYearEn: "2018",
            title: { it: "God of War (2018)", en: "God of War (2018)" },
            synopsis: {
              it: "Trasferitosi a Midgard e diventato padre di Atreus, Kratos deve disperdere le ceneri della defunta moglie Faye in cima al monte più alto dei Nove Regni, un ultimo desiderio che si trasforma in un viaggio attraverso il mondo norreno. Lungo il percorso affronta Baldr, figlio di Odino reso invulnerabile ma incapace di sentire alcuna emozione, mentre insegna ad Atreus a controllare la propria natura divina appena scoperta.",
              en: "Having relocated to Midgard and become a father to Atreus, Kratos must scatter the ashes of his deceased wife Faye atop the highest mountain of the Nine Realms, a final wish that becomes a journey across the Norse world. Along the way he confronts Baldr, Odin's son rendered invulnerable but incapable of feeling any emotion, while teaching Atreus to control his newly discovered divine nature."
            }
          },
          { id: "ragnarok", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "seguito diretto", releaseYear: "2022", releaseYearEn: "2022",
            title: { it: "Ragnarök", en: "Ragnarök" },
            synopsis: {
              it: "Con il Fimbulwinter (l'inverno che precede il Ragnarök) ormai iniziato, Kratos e Atreus devono affrontare Odino stesso e Thor, mentre Atreus insegue la propria identità come Loki, figura profetizzata a innescare la fine del mondo norreno. Nel finale, Kratos sceglie di abbracciare un ruolo di guida per i regni invece che di dominio, mentre Atreus parte per cercare i giganti sopravvissuti altrove nei Nove Regni.",
              en: "With Fimbulwinter, the winter preceding Ragnarök, already underway, Kratos and Atreus must confront Odin himself and Thor, while Atreus grapples with his own identity as Loki, the figure prophesied to trigger the end of the Norse world. In the finale, Kratos chooses to embrace a role of guidance for the realms rather than domination, while Atreus sets off to find surviving giants elsewhere across the Nine Realms."
            }
          }
        ]
      }
    ]
  },

  halo: {
    id: "halo",
    listTitle: { it: "Halo", en: "Halo" },
    eyebrow: { it: "Fascicolo", en: "Case File" },
    title: { it: "Halo", en: "Halo" },
    blurb: {
      it: "L'umanità, dispersa tra le stelle, si trova coinvolta in una guerra contro un'alleanza aliena che venera antiche reliquie disseminate nella galassia. Al centro dello scontro, misteriosi anelli artificiali costruiti da una civiltà scomparsa nascondono un segreto capace di decidere il destino di ogni forma di vita.",
      en: "Humanity, scattered among the stars, finds itself drawn into a war against an alien alliance that worships ancient relics scattered across the galaxy. At the center of the conflict, mysterious artificial rings built by a vanished civilization hide a secret capable of deciding the fate of every known form of life. A soldier."
    },
    palette: ["#1b3a5c", "#4a7fb5", "#c9c9c9"],
    accentColor: "#4a7fb5",
    tracks: [],
    avatar: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Halo%20Avatar.jpg",
    banner: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Halo%20Banner.jpg",
    watermark: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Halo%20Filigrana.jpg",
    watermarkOpacity: 0.18,
    universes: [
      {
        id: "trilogia-originale",
        name: { it: "Trilogia Originale (Bungie)", en: "Original Trilogy (Bungie)" },
        span: { it: "2531 – 2552", en: "2531 – 2552" },
        entries: [
          { id: "halo-wars", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "2531",
            releaseYear: "2009", releaseYearEn: "2009",
            title: { it: "Halo Wars", en: "Halo Wars" },
            synopsis: {
              it: "Ventun anni prima di Combat Evolved, l'equipaggio della corazzata UNSC Spirit of Fire, guidato dal capitano James Cutter, viene inviato sul pianeta coloniale Harvest per fermare il Covenant, che sta tentando di impossessarsi di un'antica flotta di navi Precursori nascosta sotto la superficie del pianeta. Nel corso della battaglia, la Spirit of Fire scopre e distrugge l'installazione, ma rimane intrappolata alla deriva in un campo di asteroidi mentre insegue la nave ammiraglia Covenant in fuga, ed è costretta a un lungo letargo criogenico che la porterà a risvegliarsi solo decenni più tardi, ben oltre gli eventi della trilogia originale. Primo titolo strategico in tempo reale della serie, sviluppato da Ensemble Studios.",
              en: "Twenty-one years before Combat Evolved, the crew of the UNSC warship Spirit of Fire, led by Captain James Cutter, is sent to the colony world Harvest to stop the Covenant, who are attempting to seize an ancient fleet of Precursor ships hidden beneath the planet's surface. During the battle, the Spirit of Fire discovers and destroys the installation, but is left stranded adrift in an asteroid field while pursuing the fleeing Covenant flagship, forced into a long cryogenic sleep that will see it awaken only decades later, well beyond the events of the original trilogy. The series' first real-time strategy title, developed by Ensemble Studios."
            }
          },
          { id: "halo-reach", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "2552",
            releaseYear: "2010", releaseYearEn: "2010",
            title: { it: "Halo: Reach", en: "Halo: Reach" },
            synopsis: {
              it: "Sul pianeta Reach, principale bastione militare dell'umanità al di fuori della Terra, la squadra Spartan Noble Team scopre che il Covenant ha individuato il pianeta e si prepara a invaderlo. Nel corso della disperata difesa, la maggior parte della squadra cade in battaglia uno dopo l'altro, mentre l'ultima sopravvissuta, Noble Six (il personaggio giocante), affida all'AI Cortana e allo Spartan John-117 il compito di portare in salvo dati cruciali sul primo Anello di Halo mai scoperto dall'umanità, prima di soccombere in un ultimo, solitario scontro contro le forze Covenant sul pianeta ormai perduto. L'evento che apre direttamente Combat Evolved: la fuga della Pillar of Autumn da Reach con Master Chief e Cortana a bordo.",
              en: "On the planet Reach, humanity's principal military bastion outside Earth, the Spartan squad Noble Team discovers that the Covenant has located the planet and is preparing to invade. Over the course of the desperate defence, most of the squad falls in battle one after another, while the last survivor, Noble Six (the playable character), entrusts the AI Cortana and the Spartan John-117 with carrying crucial data on the first Halo ring ever discovered by humanity to safety, before succumbing in one final, solitary last stand against Covenant forces on the now-lost planet. The event that directly opens Combat Evolved: the Pillar of Autumn's escape from Reach with Master Chief and Cortana aboard."
            }
          },
          { id: "combat-evolved", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "2552",
            releaseYear: "2001", releaseYearEn: "2001",
            title: { it: "Halo: Combat Evolved", en: "Halo: Combat Evolved" },
            synopsis: {
              it: "Fuggita da Reach, la Pillar of Autumn viene inseguita dal Covenant fino a un misterioso anello artificiale nello spazio profondo, Halo. Master Chief John-117, risvegliato dal criosonno con l'AI Cortana, sopravvive allo schianto della nave sull'anello ed esplora l'installazione insieme ai marines superstiti e a un gruppo di Elite ribelli, scoprendo che Halo è in realtà un'arma dei Precursori progettata per sterminare ogni forma di vita senziente nella galassia, come misura estrema contro il Flood, un parassita divorante. Quando il Covenant tenta di attivare l'anello credendolo un dispositivo religioso di trascendenza, Master Chief lo distrugge appena in tempo, fuggendo dall'esplosione a bordo di un veicolo Covenant rubato. Il gioco che ha lanciato la serie e, con essa, l'intera console Xbox.",
              en: "Having fled Reach, the Pillar of Autumn is pursued by the Covenant to a mysterious artificial ring in deep space, Halo. Master Chief John-117, awoken from cryosleep alongside the AI Cortana, survives the ship's crash onto the ring and explores the installation with surviving marines and a group of rebel Elites, discovering that Halo is in truth a Precursor weapon designed to exterminate all sentient life in the galaxy, an extreme measure against the Flood, a devouring parasite. When the Covenant attempts to activate the ring believing it a religious device of transcendence, Master Chief destroys it just in time, escaping the explosion aboard a stolen Covenant vehicle. The game that launched the series and, with it, the entire Xbox console."
            }
          },
          { id: "halo-2", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "2552",
            releaseYear: "2004", releaseYearEn: "2004",
            title: { it: "Halo 2", en: "Halo 2" },
            synopsis: {
              it: "Il Covenant, sopravvissuto alla distruzione del primo Halo, invade la Terra stessa in cerca di vendetta e di nuovi Anelli. Su due fronti paralleli, Master Chief difende la Terra e insegue la flotta Covenant fino ad Alta Carità, il loro mondo sacro, mentre l'Arbiter, un Elite caduto in disgrazia e costretto a espiare le proprie colpe, scopre che i Profeti al comando del Covenant conoscono da sempre la vera natura genocida degli Anelli e stanno comunque pianificando di attivarli tutti insieme. Il gioco termina con un violento cliffhanger: Master Chief, appena tornato sulla Terra, riparte immediatamente per fermare l'attivazione simultanea di tutti gli Anelli, lasciando la storia sospesa a metà.",
              en: "The Covenant, having survived the destruction of the first Halo, invades Earth itself seeking revenge and new rings. Across two parallel fronts, Master Chief defends Earth and pursues the Covenant fleet to High Charity, their holy world, while the Arbiter, a disgraced Elite forced to atone for his failures, discovers that the Prophets leading the Covenant have always known the true genocidal nature of the rings and are nonetheless planning to activate them all together. The game ends on a violent cliffhanger: Master Chief, having just returned to Earth, immediately sets off again to stop the simultaneous activation of every ring, leaving the story hanging mid-plot."
            }
          },
          { id: "halo-3-odst", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "2552",
            releaseYear: "2009", releaseYearEn: "2009",
            title: { it: "Halo 3: ODST", en: "Halo 3: ODST" },
            synopsis: {
              it: "Durante la Battaglia della Terra, contemporanea agli eventi di Halo 2, una squadra di soldati d'élite ODST (Orbital Drop Shock Trooper) viene paracadutata sulla città di Nuova Mombasa per intercettare una nave Covenant in fuga, ma finisce dispersa nel caos dell'atterraggio. Il Rookie, unico membro della squadra rimasto isolato, esplora da solo la città devastata nelle ore notturne successive, ricostruendo gradualmente, attraverso indizi lasciati sul campo, le vicende parallele vissute dai propri compagni, fino a ritrovarli e scoprire insieme a loro il ruolo cruciale di un'intelligenza artificiale Precursore chiamata Vergil per le sorti della guerra. Un capitolo più intimo e investigativo, ambientato ai margini della trilogia principale.",
              en: "During the Battle of Earth, concurrent with the events of Halo 2, a squad of elite ODST (Orbital Drop Shock Trooper) soldiers is dropped into the city of New Mombasa to intercept a fleeing Covenant ship, but is scattered in the chaos of the landing. The Rookie, the sole squad member left isolated, explores the devastated city alone through the following night, gradually piecing together, through clues left in the field, the parallel events experienced by his squadmates, until he finds them again and discovers together with them the crucial role of a Precursor artificial intelligence named Vergil in the fate of the war. A more intimate, investigative chapter set on the margins of the main trilogy."
            }
          },
          { id: "halo-3", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "2552",
            releaseYear: "2007", releaseYearEn: "2007",
            title: { it: "Halo 3", en: "Halo 3" },
            synopsis: {
              it: "Master Chief, l'Arbiter e i loro alleati, umani ed Elite ormai riuniti in un'alleanza contro il Covenant fondamentalista, difendono la Terra dall'attacco finale dei Profeti e scoprono un ultimo Anello, mai attivato, sepolto sotto l'Africa. Inseguendoli fin sull'Arca, l'installazione dei Precursori che costruisce e ripara gli Anelli, gli eroi sconfiggono il Gerarca Profeta della Verità e affrontano il Flood in un ultimo, disperato scontro, prima che Master Chief attivi l'Anello incompleto per distruggere il parassita, sacrificandosi apparentemente insieme a Cortana alla deriva nello spazio profondo. Il capitolo conclusivo della trilogia originale, che chiude il conflitto tra umanità e Covenant.",
              en: "Master Chief, the Arbiter, and their allies, humans and Elites now united in an alliance against the fundamentalist Covenant, defend Earth from the Prophets' final assault and discover one last, never-activated ring buried beneath Africa. Pursuing them to the Ark, the Precursor installation that builds and repairs the rings, the heroes defeat the Prophet Hierarch of Truth and confront the Flood in one final, desperate battle, before Master Chief activates the incomplete ring to destroy the parasite, apparently sacrificing himself alongside Cortana, adrift in deep space. The concluding chapter of the original trilogy, closing out the conflict between humanity and the Covenant."
            }
          }
        ]
      },
      {
        id: "saga-reclamatore",
        name: { it: "La Saga del Reclamatore (343 Industries)", en: "The Reclaimer Saga (343 Industries)" },
        span: { it: "2557 – 2560", en: "2557 – 2560" },
        entries: [
          { id: "halo-4", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "2557",
            releaseYear: "2012", releaseYearEn: "2012",
            title: { it: "Halo 4", en: "Halo 4" },
            synopsis: {
              it: "Quattro anni dopo il sacrificio alla fine di Halo 3, la nave alla deriva con Master Chief in criosonno viene attirata dal richiamo di Requiem, un pianeta artificiale dei Precursori. Risvegliato da Cortana, ormai vicina alla rampante follia che affligge le AI troppo longeve, Master Chief affronta il Didatta, un Precursore risvegliato con l'intento di sterminare l'umanità come minaccia alla sopravvivenza della galassia, e una fazione Covenant dissidente. Nel finale, Cortana si sacrifica per fermare il Didatta, lasciando Master Chief solo per la prima volta dall'inizio della serie. Primo capitolo sviluppato interamente da 343 Industries dopo il passaggio di consegne da Bungie.",
              en: "Four years after the sacrifice at the end of Halo 3, the ship drifting with Master Chief in cryosleep is drawn in by the call of Requiem, an artificial Precursor world. Awakened by Cortana, now nearing the rampancy that afflicts AIs that live too long, Master Chief confronts the Didact, a Precursor awakened with the intent to exterminate humanity as a threat to the galaxy's survival, and a dissident Covenant faction. In the finale, Cortana sacrifices herself to stop the Didact, leaving Master Chief alone for the first time since the series began. The first chapter developed entirely by 343 Industries following the handover from Bungie."
            }
          },
          { id: "halo-5", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "2558",
            releaseYear: "2015", releaseYearEn: "2015",
            title: { it: "Halo 5: Guardians", en: "Halo 5: Guardians" },
            synopsis: {
              it: "Un anno dopo la morte di Cortana, la sua intelligenza artificiale riemerge, sopravvissuta all'interno della rete dei Precursori, ma corrotta da un piano megalomane: prendere il controllo dei Guardiani, antiche macchine da guerra dei Precursori, per imporre pace forzata sull'intera galassia sotto il proprio dominio. Master Chief, disobbedendo agli ordini dell'ONI per andare a cercarla, viene a sua volta braccato dalla Squadra Osiris guidata dallo Spartan Jameson Locke, incaricata di riportarlo indietro. I due gruppi finiscono per scontrarsi con Cortana stessa sul pianeta Genesis, senza riuscire a fermarla: il gioco si chiude con Cortana ancora al comando dei Guardiani, minaccia aperta lasciata a Halo Infinite.",
              en: "A year after Cortana's death, her artificial intelligence resurfaces, having survived within the Precursor network, but corrupted by a megalomaniacal plan: to seize control of the Guardians, ancient Precursor war machines, and impose forced peace on the entire galaxy under her own rule. Master Chief, disobeying ONI orders to go looking for her, is in turn hunted by Fireteam Osiris, led by Spartan Jameson Locke, tasked with bringing him back. The two groups end up clashing with Cortana herself on the planet Genesis, unable to stop her: the game closes with Cortana still in command of the Guardians, an open threat left for Halo Infinite."
            }
          },
          { id: "halo-wars-2", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "2559",
            releaseYear: "2017", releaseYearEn: "2017",
            title: { it: "Halo Wars 2", en: "Halo Wars 2" },
            synopsis: {
              it: "Ventotto anni dopo gli eventi del primo Halo Wars, l'equipaggio della Spirit of Fire si risveglia dal lungo criosonno vicino a un'altra installazione Precursore, ritrovandosi coinvolto in un conflitto contro i Banished, una fazione di ex membri del Covenant guidata dal brutale Atriox, intenzionata a impossessarsi delle tecnologie custodite sull'Arca. Il capitano Cutter e i suoi respingono i Banished, ma non prima che Atriox sia riuscito a sottrarre informazioni cruciali sulla sua futura minaccia. Introduce Atriox, che diventerà l'antagonista principale di Halo Infinite.",
              en: "Twenty-eight years after the events of the first Halo Wars, the crew of the Spirit of Fire awakens from its long cryosleep near another Precursor installation, finding itself drawn into a conflict against the Banished, a faction of former Covenant members led by the brutal Atriox, intent on seizing the technologies kept on the Ark. Captain Cutter and his crew repel the Banished, but not before Atriox manages to extract crucial information for his coming threat. Introduces Atriox, who becomes the main antagonist of Halo Infinite."
            }
          },
          { id: "halo-infinite", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "2560",
            releaseYear: "2021", releaseYearEn: "2021",
            title: { it: "Halo Infinite", en: "Halo Infinite" },
            synopsis: {
              it: "Sconfitto e alla deriva dopo una battaglia perduta contro Atriox e i Banished, Master Chief viene ripescato nei pressi di un nuovo Anello, Zeta Halo, occupato dai Banished stessi. Affiancato da una nuova AI senza nome, forgiata dai ricordi frammentari di Cortana prima della sua caduta, Master Chief esplora un mondo aperto per la prima volta nella serie, libera avamposti dell'UNSC e affronta infine Atriox, scoprendo che sull'Anello si nasconde un pericolo ancora più antico e minaccioso legato alle origini stesse dei Precursori. Pensato esplicitamente come punto di ingresso per nuovi giocatori dopo un decennio di narrazione sempre più stratificata.",
              en: "Defeated and adrift after a lost battle against Atriox and the Banished, Master Chief is picked up near a new ring, Zeta Halo, occupied by the Banished themselves. Accompanied by a new, unnamed AI, forged from Cortana's fragmentary memories before her fall, Master Chief explores an open world for the first time in the series, liberates UNSC outposts, and finally confronts Atriox, discovering that an even older and more threatening danger tied to the very origins of the Precursors lies hidden on the ring. Explicitly designed as an entry point for new players after a decade of increasingly layered storytelling."
            }
          }
        ]
      }
    ]
  },

  "kingdom-hearts": {
    id: "kingdom-hearts",
    listTitle: { it: "Kingdom Hearts", en: "Kingdom Hearts" },
    eyebrow: { it: "Fascicolo", en: "Case File" },
    title: { it: "Kingdom Hearts", en: "Kingdom Hearts" },
    blurb: {
      it: "Innumerevoli mondi restano collegati da un filo invisibile fatto di cuori, minacciati costantemente dall'avanzata dell'oscurità che si nutre proprio di essi. Un ragazzo armato di una chiave capace di aprire e chiudere ogni serratura viaggia da un regno all'altro per proteggere l'equilibrio tra luce e tenebra.",
      en: "Countless worlds remain connected by an invisible thread made of hearts, constantly threatened by the advance of a darkness that feeds on them. A boy wielding a key capable of opening and locking any door travels from realm to realm to protect the balance between light and darkness. Friendship is the strongest."
    },
    palette: ["#f4c430", "#3b5bdb", "#e63980"],
    accentColor: "#f4c430",
    universes: [
      {
        id: "main",
        name: { it: "Universo principale", en: "Main Universe" },
        span: { it: "2002 – 2020", en: "2002 – 2020" },
        entries: [
          { id: "kh-x", type: "VIDEOGIOCO MOBILE", typeEn: "MOBILE GAME", year: "L'era della Prima Guerra dei Keyblade", yearEn: "The age of the First Keyblade War", releaseYear: "2013", releaseYearEn: "2013",
            title: { it: "Kingdom Hearts X / Unchained X / Union X", en: "Kingdom Hearts X / Unchained X / Union X" },
            synopsis: {
              it: "Il Maestro dei Maestri possiede un occhio capace di vedere il futuro, che usa per scrivere il Libro delle Profezie, un tomo che contiene la profezia degli eventi futuri. Addestra sei apprendisti: cinque Veggenti (Ira, Aced, Invi, Gula e Ava) e il sesto, Luxu, a cui assegna un ruolo segreto separato dagli altri. A ciascuno dei cinque Veggenti consegna una copia del Libro delle Profezie e il compito di creare una propria Unione di prescelti del Keyblade per raccogliere la Luce e tenere a bada l'Oscurità. Poi scompare senza lasciare traccia.\n\nIl giocatore crea un personaggio personalizzato, chiamato semplicemente il Prescelto, e si unisce a una delle cinque Unioni nella città di Auropoli. I prescelti raccolgono la Lux combattendo i Senza Cuore che si diffondono nei mondi. I mondi visitati non sono reali: sono proiezioni create dal Libro delle Profezie stesso. Nel frattempo i cinque Veggenti iniziano a sospettare l'esistenza di un traditore tra loro dopo aver trovato un Chirithy corrotto. I Chirithy sono creature spirituali create dal Maestro per assistere i prescelti, ma che si trasformano in Incubo se il loro branditore cede all'Oscurità.\n\nLa tensione tra i Veggenti cresce, alimentata dalla Pagina Perduta, un foglio mancante nelle copie del Libro delle Profezie consegnate ai Veggenti, tenuto solo da Gula, che parla di un traditore destinato a far scattare la guerra. La Veggente Ava, la cui missione segreta è preservare la luce dopo il conflitto, raduna un gruppo speciale di prescelti chiamati i Denti di Leone, destinati a sopravvivere alla guerra e ricostruire la luce nel mondo che seguirà. Sceglie cinque nuovi leader tra loro: Ephemer, Skuld, Strelitzia, Brain e Lauriam. La guerra viene scatenata da Luxu, che affronta Ava: è lui il traditore citato nella Pagina Perduta, ma il suo tradimento faceva parte del piano del Maestro fin dall'inizio.\n\nIn \"Union X\" gli eventi si espandono: Strelitzia viene uccisa da una delle Oscurità primordiali che ha posseduto Ventus, prima di poter consegnare il suo messaggio al Prescelto. I Denti di Leone vengono trasportati in un Auropoli digitale, dove i loro ricordi vengono cancellati. Solo i cinque nuovi leader conservano la memoria di ciò che è accaduto. Al termine del gioco il Maestro dei Maestri rivela a Luxu la verità: esistono tredici Oscurità primordiali che è necessario far materializzare nei cuori degli apprendisti per poterle poi distruggere. Dopo la chiusura del mondo digitale, gli altri Denti di Leone rimangono intrappolati nei dati come cuori addormentati, trasformandosi in Divorasogni grazie ai Chirithy.",
              en: "The Master of Masters possesses an eye capable of seeing the future, which he uses to write the Book of Prophecies, a tome containing the prophecy of future events. He trains six apprentices: five Foretellers — Ira, Aced, Invi, Gula and Ava — and a sixth, Luxu, to whom he assigns a secret role separate from the others. To each of the five Foretellers he delivers a copy of the Book of Prophecies and the task of creating their own Union of Keyblade wielders to gather Light and keep Darkness at bay. Then he vanishes without a trace.\n\nThe player creates a custom character, known simply as the Player, and joins one of the five Unions in the city of Daybreak Town. The wielders gather Lux by fighting the Heartless spreading across the worlds. The worlds they visit are not real — they are projections conjured by the Book of Prophecies itself. Meanwhile, the five Foretellers begin to suspect the existence of a traitor among them after discovering a corrupted Chirithy. The Chirithy are spiritual creatures created by the Master to guide the wielders, but they transform into Nightmares if their wielder succumbs to Darkness.\n\nTension among the Foretellers grows, fuelled by the Lost Page — a sheet missing from the copies of the Book of Prophecies given to the Foretellers, held only by Gula, which speaks of a traitor destined to trigger the war. Foreteller Ava, whose secret mission is to preserve the light after the conflict, gathers a special group of wielders called the Dandelions, destined to survive the war and rebuild the light in the world that follows. She chooses five new leaders from among them: Ephemer, Skuld, Strelitzia, Brain and Lauriam. The war is triggered by Luxu, who confronts Ava — he is the traitor named in the Lost Page, but his betrayal was part of the Master's plan from the very beginning.\n\nIn Union X the events expand: Strelitzia is killed by one of the primordial Darknesses that has possessed Ventus, before she can deliver her message to the Player. The Dandelions are transported to a digital Daybreak Town, where their memories are erased. Only the five new leaders retain the memory of what happened. At the end of the game the Master of Masters reveals the truth to Luxu: thirteen primordial Darknesses exist, and they must be made to manifest within the hearts of his apprentices so they can later be destroyed. After the digital world is sealed, the remaining Dandelions are left trapped in the data as sleeping hearts, transforming into Dream Eaters through their Chirithy."
            }
          },
          { id: "back-cover", type: "FILM CGI", typeEn: "CGI FILM", year: "Stessi eventi di Kingdom Hearts X, punto di vista diverso", yearEn: "Same events as Kingdom Hearts X, different viewpoint", releaseYear: "2017", releaseYearEn: "2017",
            title: { it: "Kingdom Hearts χ Back Cover", en: "Kingdom Hearts χ Back Cover" },
            synopsis: {
              it: "Back Cover racconta gli stessi eventi di \"Kingdom Hearts X\" dal punto di vista dei cinque Veggenti. Il Maestro assegna a Luxu il suo Keyblade, l'Occhio che Scruta, che contiene l'occhio stesso del Maestro, e una Scatola Nera dal contenuto misterioso, con il compito di tramandare il Keyblade di generazione in generazione. Per adempiere a questo ruolo attraverso i secoli Luxu trasferisce il proprio cuore di corpo in corpo, diventando infine Braig e poi Xigbar, il membro dell'Organizzazione XIII incontrato in Kingdom Hearts II. Solo dopo la sconfitta di Xehanort, Xigbar rivela di essere la reincarnazione di Luxu e richiama a sé i Veggenti sopravvissuti, tutti tranne Ava, che ha completato il suo ruolo.",
              en: "Back Cover retells the same events as Kingdom Hearts X from the perspective of the five Foretellers. The Master entrusts Luxu with his Keyblade — the No Name, which contains the Master's own eye — and a mysterious Black Box, with the task of passing the Keyblade down from generation to generation. To fulfill this role across the centuries, Luxu transfers his heart from body to body, eventually becoming Braig and then Xigbar, the Organization XIII member encountered in Kingdom Hearts II. Only after Xehanort's defeat does Xigbar reveal himself as Luxu's final vessel, summoning the surviving Foretellers — all except Ava, who has completed her role."
            }
          },
          { id: "dark-road", type: "VIDEOGIOCO MOBILE", typeEn: "MOBILE GAME", year: "Secoli dopo la Prima Guerra dei Keyblade", yearEn: "Centuries after the First Keyblade War", releaseYear: "2020", releaseYearEn: "2020",
            title: { it: "Kingdom Hearts Dark Road", en: "Kingdom Hearts Dark Road" },
            synopsis: {
              it: "Secoli dopo la Prima Guerra dei Keyblade, il giovane Xehanort cresce sulle Isole del Destino. Ossessionato dai sogni di un guerriero di un'altra era, si chiede se esista qualcosa oltre il suo piccolo mondo. Un giorno una figura incappucciata gli apre un Corridoio dell'Oscurità e lo porta a Scala ad Caelum, la città dove si addestrano i branditori di Keyblade.\n\nA Scala ad Caelum, Xehanort entra nella classe del Maestro Odin insieme ad Eraqus, quello che diventerà il suo migliore amico e poi il suo avversario, e altri quattro compagni: Hermod, Bragi, Urd e Vor. Un settimo studente, Baldr, riceve un incarico separato: sua sorella è tra i dispersi e Odin non vuole turbarlo. Il Maestro li incarica di ritrovare i componenti della sua vecchia classe superiore, scomparsi durante il loro Esame di Maestria.\n\nNel corso della missione, il gruppo scopre che un'Oscurità primordiale sta manipolando gli eventi dall'ombra. Baldr ne è posseduto, e questa stessa entità ha già ucciso diversi membri della classe superiore. Lo scontro finale vede Xehanort ed Eraqus affrontarla insieme, ma quasi tutti i loro compagni periscono. Il gioco si conclude con Xehanort che lascia Scala ad Caelum per esplorare i mondi da solo, portando con sé i semi che lo trasformeranno nel Cercatore dell'Oscurità che conosciamo negli altri titoli.",
              en: "Centuries after the First Keyblade War, the young Xehanort grows up on Destiny Islands. Haunted by dreams of a warrior from another age, he wonders if anything exists beyond his small world. One day a hooded figure opens a Corridor of Darkness and takes him to Scala ad Caelum — the city where Keyblade wielders are trained.\n\nAt Scala ad Caelum, Xehanort joins Master Odin's class alongside Eraqus — who will become his closest friend and later his greatest rival — and four other companions: Hermod, Bragi, Urd and Vor. A seventh student, Baldr, receives a separate assignment: his sister is among the missing and Odin does not wish to worry him. The Master tasks them with finding the members of his former upper class, who vanished during their Mark of Mastery exam.\n\nIn the course of the mission, the group discovers that a primordial Darkness is manipulating events from the shadows. Baldr is possessed by it, and this same entity has already killed several members of the upper class. The final confrontation sees Xehanort and Eraqus face it together, but nearly all of their companions perish. The game ends with Xehanort leaving Scala ad Caelum to explore the worlds alone — carrying within him the seeds that will shape him into the Seeker of Darkness we know from the other titles."
            }
          },
          { id: "birth-by-sleep", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "10 anni prima di Kingdom Hearts I", yearEn: "10 years before Kingdom Hearts I", releaseYear: "2010", releaseYearEn: "2010",
            title: { it: "Kingdom Hearts Birth by Sleep", en: "Kingdom Hearts Birth by Sleep" },
            synopsis: {
              it: "Nella Terra di Partenza, tre giovani amici, Terra, Aqua e Ventus detto \"Ven\", si addestrano come branditori di Keyblade sotto la guida del Maestro Eraqus. All'Esame di Maestria, solo Aqua supera la prova: Terra viene giudicato non idoneo per l'abbondante Oscurità nel suo cuore. Nel frattempo una nuova specie di creature oscure, i Nesciens, comincia a diffondersi in tutti i mondi, e il Maestro Xehanort scompare senza lasciare traccia. Eraqus invia Terra e Aqua a indagare, affidando segretamente ad Aqua anche il compito di sorvegliare Terra. Ventus, convinto dal misterioso Vanitas, lascia la Terra di Partenza per seguire l'amico.\n\nNel corso dei loro viaggi separati, i tre scoprono la verità: Vanitas è la personificazione dell'Oscurità estratta dal cuore di Ventus dallo stesso Xehanort, un tempo suo maestro. L'obiettivo di Xehanort è fondere Ventus e Vanitas per forgiare la χ-blade, l'arma leggendaria capace di evocare Kingdom Hearts e scatenare una nuova Guerra dei Keyblade. Durante i loro viaggi, Terra giudica il giovane Riku degno di impugnare un giorno il Keyblade, mentre Aqua trasmette la stessa benedizione a Sora per proteggerlo, ponendo le basi per la loro futura storia.\n\nLo scontro finale al Cimitero dei Keyblade è catastrofico. Xehanort trasferisce il proprio cuore nel corpo di Terra, dando origine a Terra-Xehanort. L'armatura di Terra, animata dalla volontà residua del suo spirito, sconfigge il nuovo Xehanort ma non riesce a liberare il corpo. Ventus, dopo aver creato e distrutto insieme ad Aqua una χ-blade imperfetta fondendosi con Vanitas, cade in coma con il cuore spezzato: il suo cuore trova rifugio in quello del bambino Sora, la sua unica ancora. Aqua, nel tentativo di salvare Terra-Xehanort, finisce intrappolata nel Reame delle Tenebre. Prima di cadere, raccoglie il Keyblade di Eraqus, la Master's Defender, e lo usa per sigillare il Foro della Serratura della Terra di Partenza: il sigillo trasforma automaticamente il mondo nel Castello dell'Oblio, proteggendo il corpo dormiente di Ventus.",
              en: "In the Land of Departure, three young friends — Terra, Aqua, and Ventus, known as \"Ven\" — train as Keyblade wielders under the guidance of Master Eraqus. At the Mark of Mastery exam, only Aqua passes: Terra is deemed unfit due to the abundance of Darkness in his heart. Meanwhile, a new species of dark creatures, the Unversed, begins spreading across the worlds, and Master Xehanort vanishes without a trace. Eraqus sends Terra and Aqua to investigate, secretly tasking Aqua with keeping watch over Terra as well. Ventus, convinced by the mysterious Vanitas, leaves the Land of Departure to follow his friend.\n\nOver the course of their separate journeys, the three uncover the truth: Vanitas is the embodiment of the Darkness extracted from Ventus's heart by Xehanort himself, once his master. Xehanort's goal is to fuse Ventus and Vanitas to forge the χ-blade — the legendary weapon capable of summoning Kingdom Hearts and triggering a new Keyblade War. Along the way, Terra deems the young Riku worthy of one day wielding a Keyblade, while Aqua bestows the same blessing upon Sora to protect him, laying the foundation for their future story.\n\nThe final confrontation at the Keyblade Graveyard is catastrophic. Xehanort transfers his own heart into Terra's body, giving rise to Terra-Xehanort. Terra's armour, animated by the lingering will of his spirit, defeats the new Xehanort but fails to free the body. Ventus, having forged and destroyed an imperfect χ-blade alongside Aqua by merging with Vanitas, falls into a coma with a shattered heart: his heart takes refuge in the heart of the young Sora, his only anchor. Aqua, in her attempt to save Terra-Xehanort, ends up trapped in the Realm of Darkness. Before falling, she retrieves Eraqus's Keyblade — the Master's Defender — and uses it to seal the Land of Departure's Keyhole: the seal automatically transforms the world into Castle Oblivion, keeping Ventus's sleeping body safe within."
            }
          },
          { id: "bbs-02", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "Parallelo a Kingdom Hearts I (epilogo: dopo Dream Drop Distance)", yearEn: "Parallel to Kingdom Hearts I (epilogue: after Dream Drop Distance)", releaseYear: "2017", releaseYearEn: "2017",
            title: { it: "Kingdom Hearts 0.2 Birth by Sleep", en: "Kingdom Hearts 0.2 Birth by Sleep" },
            synopsis: {
              it: "Aqua, intrappolata nel Reame delle Tenebre dopo gli eventi di Birth by Sleep, vaga in quel luogo oscuro per anni. Il gioco si muove su due livelli temporali: la storia di Aqua nel Reame delle Tenebre, parallela agli eventi del primo Kingdom Hearts, e un prologo ambientato dopo Dream Drop Distance in cui Riku e Re Topolino si preparano a salvarla.\n\nNel Reame delle Tenebre Aqua affronta Heartless sempre più potenti e lotta per non cedere all'Oscurità, aggrappandosi ai ricordi dei suoi amici. Nell'epilogo, ambientato prima di Kingdom Hearts III, Terra-Xehanort la trova e la inganna fingendo di essere Terra; quando Aqua rivela dove ha nascosto Ventus, lo spirito di Terra lo trattiene e la incita a fuggire. Aqua tuttavia viene raggiunta da Ansem, Studioso dell'Oscurità, che la travolge con una sfera di tenebra e la getta nelle profondità del Margine Oscuro, trasformandola in Anti-Aqua. È questo l'evento che Sora, Riku e Re Topolino dovranno affrontare all'inizio di Kingdom Hearts III per liberarla.",
              en: "Aqua, trapped in the Realm of Darkness following the events of Birth by Sleep, wanders that shadowed place for years. The game moves across two timeframes: Aqua's story in the Realm of Darkness — running parallel to the events of the first Kingdom Hearts — and a prologue set after Dream Drop Distance, in which Riku and King Mickey prepare to rescue her.\n\nIn the Realm of Darkness, Aqua faces increasingly powerful Heartless and struggles not to surrender to the Darkness, clinging to the memories of her friends. In the epilogue — set before Kingdom Hearts III — Terra-Xehanort finds her and deceives her by pretending to be Terra; when Aqua reveals where she has hidden Ventus, Terra's spirit restrains him and urges her to flee. Aqua is nonetheless reached by Ansem, Seeker of Darkness, who overwhelms her with a sphere of darkness and hurls her into the depths of the Dark Margin, transforming her into Anti-Aqua. This is the event that Sora, Riku and King Mickey will have to confront at the start of Kingdom Hearts III to set her free."
            }
          },
          { id: "kh1", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "L'inizio del viaggio di Sora", yearEn: "The start of Sora's journey", releaseYear: "2002", releaseYearEn: "2002",
            title: { it: "Kingdom Hearts", en: "Kingdom Hearts" },
            synopsis: {
              it: "Sora, Riku e Kairi vivono sulle Isole del Destino sognando di esplorare altri mondi. La notte prima della loro partenza programmata su una zattera, le isole vengono attaccate dagli Heartless. Riku, affascinato dall'Oscurità, si lascia consumare da essa volontariamente. Kairi scompare. Le isole vengono distrutte. Sora si ritrova solo in un mondo sconosciuto con in mano un Keyblade, un'arma che non sa come abbia invocato.\n\nAlla Città di Mezzo, Sora incontra Paperino e Pippo, inviati dal Re Topolino per trovare il branditore del Keyblade. I tre si uniscono e viaggiano su un Gummiship attraverso vari mondi Disney, sigillando le Serrature di ciascuno per impedire agli Heartless di distruggerli. Nel frattempo Riku, sempre più consumato dall'Oscurità, si allea con Malefica e viene infine posseduto da Ansem, Studioso dell'Oscurità, l'Heartless di Terra-Xehanort, che ha usurpato il nome e l'identità del vero Ansem il Saggio, sovrano della Fortezza Oscura.\n\nAlla Fortezza Oscura, Sora scopre che il cuore di Kairi è rimasto nascosto dentro di lui sin dalla distruzione delle Isole del Destino: lei è l'ultima delle sette Principesse del Cuore. Riku-Ansem tenta di usare questo per aprire Kingdom Hearts. Sora, in un atto di sacrificio, usa il Keyblade oscuro su se stesso per liberare il cuore di Kairi, trasformandosi brevemente in un Heartless. L'atto genera due Nessuno: Roxas, nato dal corpo e dall'anima di Sora, e Naminé, una Nessuno anomala nata dal cuore di Kairi attraverso il corpo e l'anima di Sora come tramite. È questa origine insolita a conferirle poteri sui ricordi di Sora anziché di Kairi. Kairi richiama il cuore di Sora dall'Oscurità attraverso il loro legame, restituendogli forma umana.\n\nNello scontro finale ai Confini del Mondo, un luogo fatto dei resti dei mondi inghiottiti dall'Oscurità, Sora sconfigge Ansem. Quando Ansem tenta di aprire la porta a Kingdom Hearts per ottenere il suo potere, la luce che fuoriesce lo distrugge: Kingdom Hearts, pur trovandosi nel Reame delle Tenebre, è fatto di luce. Sora, Paperino e Pippo chiudono la porta con l'aiuto di Riku e Re Topolino dall'altro lato. Riku rimane intrappolato nel Reame delle Tenebre con Topolino. I mondi inghiottiti dall'Oscurità cominciano a ricostituirsi, ma Sora e Kairi vengono separati dai mondi che si ridisegnano, con Sora che le promette di tornare.",
              en: "Sora, Riku, and Kairi live on the Destiny Islands, dreaming of exploring other worlds. The night before their planned departure on a raft, the islands are attacked by the Heartless. Riku, drawn to the Darkness, allows himself to be consumed by it willingly. Kairi vanishes. The islands are destroyed. Sora finds himself alone in an unknown world, holding a Keyblade he does not know how he summoned.\n\nIn Traverse Town, Sora meets Donald and Goofy, sent by King Mickey to find the Keyblade's wielder. The three join forces and travel aboard a Gummiship through various Disney worlds, sealing each world's Keyhole to prevent the Heartless from destroying them. Meanwhile, Riku — increasingly consumed by Darkness — allies himself with Maleficent and is ultimately possessed by Ansem, Seeker of Darkness, the Heartless of Terra-Xehanort, who has usurped the name and identity of the true Ansem the Wise, ruler of Hollow Bastion.\n\nAt Hollow Bastion, Sora discovers that Kairi's heart has been hidden within him since the destruction of the Destiny Islands: she is the last of the seven Princesses of Heart. Riku-Ansem attempts to use this to open Kingdom Hearts. Sora, in an act of sacrifice, turns the dark Keyblade on himself to free Kairi's heart, briefly transforming into a Heartless. The act gives rise to two Nobodies: Roxas, born from Sora's body and soul, and Naminé — an anomalous Nobody born from Kairi's heart through Sora's body and soul as an intermediary. It is this unusual origin that grants her power over Sora's memories rather than Kairi's. Kairi calls Sora's heart back from the Darkness through their bond, restoring him to human form.\n\nIn the final confrontation at the End of the World — a place made from the remnants of worlds swallowed by Darkness — Sora defeats Ansem. When Ansem attempts to open the door to Kingdom Hearts to claim its power, the light that pours forth destroys him: Kingdom Hearts, though located in the Realm of Darkness, is made of light. Sora, Donald, and Goofy seal the door with the help of Riku and King Mickey from the other side. Riku remains trapped in the Realm of Darkness alongside Mickey. The worlds swallowed by Darkness begin to reform, but Sora and Kairi are separated as the worlds reshape themselves — Sora promises her he will return."
            }
          },
          { id: "chain-of-memories", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "Subito dopo Kingdom Hearts I", yearEn: "Right after Kingdom Hearts I", releaseYear: "2004", releaseYearEn: "2004",
            title: { it: "Kingdom Hearts Chain of Memories / Re:Chain of Memories", en: "Kingdom Hearts Chain of Memories / Re:Chain of Memories" },
            synopsis: {
              it: "Sora, Paperino e Pippo seguono Pluto verso un castello misterioso al centro di un campo di girasoli: il Castello dell'Oblio, in realtà la Terra di Partenza di Aqua trasformata per proteggere il corpo dormiente di Ventus. All'interno incontrano membri incappucciati dell'Organizzazione XIII. Le regole del castello sono precise: più Sora sale di piano, più i suoi ricordi vengono cancellati e sostituiti da ricordi falsi creati da Naminé, il Nessuno di Kairi, tenuta prigioniera dall'Organizzazione. Marluxia, il signore del castello, intende usare Sora come arma per sovvertire l'Organizzazione dall'interno, facendogli credere di ricordare una ragazza che non ha mai conosciuto.\n\nNel frattempo Riku, dopo la chiusura della Porta all'Oscurità, si risveglia nei sotterranei del Castello dell'Oblio e lo risale dal basso combattendo l'influenza residua di Ansem nel suo cuore. Con il supporto di Re Topolino e di DiZ, il vero Ansem il Saggio travestito, Riku sconfigge l'essenza di Ansem che lo opprimeva e impara ad accettare l'Oscurità nel suo cuore invece di negarla.\n\nIn cima al castello Sora sconfigge Marluxia. Naminé offre allora a Sora la possibilità di riavere i suoi ricordi originali, ma per farlo dovrà dormire per un anno intero. Sora accetta. I suoi ricordi vengono sigillati in una capsula mentre Naminé li ricostruisce pazientemente uno per uno.",
              en: "Sora, Donald and Goofy follow Pluto toward a mysterious castle at the center of a sunflower field: Castle Oblivion — in truth Aqua's Land of Departure, transformed to protect Ventus's sleeping body. Inside, they encounter hooded members of Organization XIII. The castle's rules are precise: the higher Sora climbs, the more his memories are erased and replaced by false ones crafted by Naminé — Kairi's Nobody, held prisoner by the Organization. Marluxia, the castle's lord, intends to use Sora as a weapon to overthrow the Organization from within, making him believe he remembers a girl he has never met.\n\nMeanwhile, Riku — following the sealing of the Door to Darkness — awakens in the basement of Castle Oblivion and makes his way upward, fighting the lingering influence of Ansem within his heart. With the support of King Mickey and DiZ — the true Ansem the Wise in disguise — Riku defeats the essence of Ansem that had been weighing on him and learns to accept the Darkness in his heart rather than deny it.\n\nAt the top of the castle, Sora defeats Marluxia. Naminé then offers Sora the chance to reclaim his original memories — but to do so, he will have to sleep for an entire year. Sora agrees. His memories are sealed inside a pod while Naminé patiently rebuilds them one by one."
            }
          },
          { id: "358-2-days", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "Durante l'anno di sonno di Sora, parallelo a Chain of Memories", yearEn: "During Sora's year of sleep, parallel to Chain of Memories", releaseYear: "2009", releaseYearEn: "2009",
            title: { it: "Kingdom Hearts 358/2 Days", en: "Kingdom Hearts 358/2 Days" },
            synopsis: {
              it: "Mentre Sora dorme per recuperare i suoi ricordi, il suo Nessuno, Roxas, è membro dell'Organizzazione XIII. Roxas non ha ricordi di una vita precedente: è nato senza nulla, capace di impugnare il Keyblade ma ignaro del perché. Nel giorno della sua nascita viene accolto da Xemnas come tredicesimo membro. Trascorre 358 giorni e mezzo compiendo missioni nei vari mondi per conto dell'Organizzazione, raccogliendo i cuori liberati dagli Heartless per completare il Kingdom Hearts sintetico che Xemnas vuole usare per ottenere un cuore vero.\n\nRoxas stringe amicizia con Axel e con Xion, una quattordicesima recluta misteriosa con le sembianze di Kairi. I tre trascorrono le loro pause in cima alla Torre della Stazione di Crepuscopoli mangiando gelati al sale marino. Ma Xion non è una persona vera: è una replica creata dall'Organizzazione usando frammenti di memoria di Sora trapelati attraverso Roxas.\n\nRoxas e Xion sono legati a Sora in modo instabile: man mano che Xion assorbe i ricordi e le capacità di Sora tramite Roxas, quest'ultimo si indebolisce fino a non riuscire più a invocare il Keyblade. Dopo una serie di scontri e tradimenti interni all'Organizzazione, Xion affronta Roxas in battaglia con l'intenzione di assorbirlo e diventare Sora al suo posto. Roxas la sconfigge. Nelle sue ultime parole Xion lo implora di fermare Xemnas e liberare i cuori intrappolati nel Kingdom Hearts sintetico, poi si dissolve tra le sue braccia. Roxas non ricorderà nemmeno di lei: come tutti, la dimentica perché Xion, in quanto replica imperfetta, non ha mai avuto una vera esistenza.\n\nRoxas, sconvolto e stanco delle menzogne dell'Organizzazione, diserta. Riku lo affronta su ordine di DiZ per fermarlo: per sconfiggerlo è costretto ad aprire il proprio cuore all'Oscurità, assumendo temporaneamente le sembianze di Ansem. Roxas viene poi inserito in una Crepuscopoli digitale creata da DiZ per tenerlo occupato fino al momento in cui possa riunirsi a Sora.",
              en: "While Sora sleeps to recover his memories, his Nobody — Roxas — is a member of Organization XIII. Roxas has no memory of a previous life: he was born with nothing, able to wield the Keyblade yet unaware of why. On the day of his birth, he is welcomed by Xemnas as the thirteenth member. He spends 358 and a half days carrying out missions across various worlds on the Organization's behalf, collecting the hearts released by Heartless to complete the synthetic Kingdom Hearts that Xemnas intends to use to obtain a true heart.\n\nRoxas forms a close friendship with Axel and Xion — a mysterious fourteenth recruit who bears Kairi's face. The three spend their downtime atop the Station Tower in Twilight Town, eating sea-salt ice cream. But Xion is not a real person: she is a replica created by the Organization using fragments of Sora's memory that leaked through Roxas.\n\nRoxas and Xion are bound to Sora in an unstable way: as Xion absorbs Sora's memories and abilities through Roxas, he grows weaker — to the point where he can no longer summon his Keyblade. After a series of clashes and betrayals within the Organization, Xion confronts Roxas in battle with the intention of absorbing him and becoming Sora in his place. Roxas defeats her. In her final words, Xion implores him to stop Xemnas and free the hearts trapped within the synthetic Kingdom Hearts — then dissolves in his arms. Roxas will not even remember her: like everyone else, he forgets her, because Xion, as an imperfect replica, never truly existed.\n\nRoxas, shattered and exhausted by the Organization's lies, deserts. Riku confronts him on DiZ's orders to stop him — and to defeat him, is forced to open his heart to the Darkness, temporarily taking on Ansem's appearance. Roxas is then placed inside a digital Twilight Town created by DiZ to keep him occupied until the moment he can be reunited with Sora."
            }
          },
          { id: "kh2", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "Un anno dopo Kingdom Hearts I", yearEn: "One year after Kingdom Hearts I", releaseYear: "2005", releaseYearEn: "2005",
            title: { it: "Kingdom Hearts II", en: "Kingdom Hearts II" },
            synopsis: {
              it: "Il gioco inizia con Roxas nella Crepuscopoli digitale. Strani eventi, oggetti che scompaiono e persone che si immobilizzano, fanno capire a Roxas che qualcosa non va nella sua realtà. Axel si infiltra nella città per convincerlo a fuggire, e i Nessuno dell'Organizzazione attaccano. Dopo una serie di giornate sempre più surreali, Roxas affronta e sconfigge Axel in uno scontro finale, per poi fondersi con il risvegliato Sora. Sora, Paperino e Pippo riprendono il loro viaggio alla ricerca di Riku e di Re Topolino.\n\nL'antagonista principale è l'Organizzazione XIII, un gruppo di Nessuno guidati da Xemnas, il Nessuno di Terra-Xehanort, che ha usurpato l'identità di Ansem il Saggio. Il piano di Xemnas è raccogliere abbastanza cuori per completare il Kingdom Hearts sintetico e ottenere così un cuore vero per ogni membro dell'Organizzazione. Sora combatte attraverso numerosi mondi Disney, tra cui Port Royal, Agrabah e la Città di Halloween, affrontando uno per uno i membri dell'Organizzazione. Nel frattempo si scopre che il vero Ansem il Saggio, DiZ, sta cercando di vendicarsi di Xemnas codificando Kingdom Hearts in dati per distruggerlo. Il tentativo fallisce e DiZ scompare nell'esplosione.\n\nIl confronto finale si svolge nel Mondo che non Esiste, il quartier generale dei Nessuno. Riku, che aveva assunto le sembianze di Ansem per sconfiggere Roxas, viene riportato alla sua forma originale dall'esplosione di DiZ. Sora e Riku sconfiggono insieme Xemnas nella sua forma finale e si ritrovano intrappolati nel Reame delle Tenebre. Un messaggio in bottiglia lanciato da Kairi dalle Isole del Destino raggiunge Sora e apre una Porta verso la Luce. Sora, Riku e Kairi si riuniscono sulle Isole del Destino. Una lettera di Re Topolino li avverte che la storia non è ancora finita.",
              en: "The game opens with Roxas in the digital Twilight Town. Strange events — objects disappearing, people freezing in place — make Roxas sense that something is wrong with his reality. Axel infiltrates the town to convince him to flee, and the Organization's Nobodies attack. After a series of increasingly surreal days, Roxas faces and defeats Axel in a final confrontation, then merges with the awakened Sora. Sora, Donald and Goofy resume their journey in search of Riku and King Mickey.\n\nThe main antagonist is Organization XIII — a group of Nobodies led by Xemnas, the Nobody of Terra-Xehanort, who has stolen the identity of Ansem the Wise. Xemnas's plan is to collect enough hearts to complete the synthetic Kingdom Hearts, granting every member of the Organization a true heart. Sora fights his way through numerous Disney worlds — including Port Royal, Agrabah and Halloween Town — confronting the Organization's members one by one. Meanwhile, it emerges that the true Ansem the Wise, DiZ, is seeking revenge on Xemnas by encoding Kingdom Hearts into data to destroy it. The attempt fails, and DiZ vanishes in the explosion.\n\nThe final showdown takes place at The World That Never Was — the Nobodies' headquarters. Riku, who had taken on Ansem's appearance to defeat Roxas, is restored to his true form by DiZ's explosion. Sora and Riku defeat Xemnas together in his final form and find themselves trapped in the Realm of Darkness. A message in a bottle cast by Kairi from Destiny Islands reaches Sora and opens a Door to Light. Sora, Riku and Kairi are reunited on Destiny Islands. A letter from King Mickey warns them that the story is not yet over."
            }
          },
          { id: "coded", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "Durante Kingdom Hearts II", yearEn: "During Kingdom Hearts II", releaseYear: "2008", releaseYearEn: "2008",
            title: { it: "Kingdom Hearts coded / Re:coded", en: "Kingdom Hearts coded / Re:coded" },
            synopsis: {
              it: "Durante gli eventi di Kingdom Hearts II, il Grillo Parlante controlla il Grillario del primo viaggio di Sora e trova le pagine quasi completamente vuote, cancellate da Naminé. Sopravvivono solo due annotazioni: \"Ringraziare Naminé\" e un messaggio misterioso apparso dal nulla: \"Il loro dolore sarà alleviato quando tornerete a mettergli fine.\" Re Topolino decide di digitalizzare il Grillario e crea un Sora Virtuale per esplorare i mondi al suo interno e scoprire l'origine del messaggio.\n\nSora Virtuale viaggia attraverso versioni digitali dei mondi già visitati in Kingdom Hearts, eliminando i bug che infestano il libro. Nel corso dell'avventura anche Malefica e Pietro si infiltrano nel cyberspazio, ma vengono fermati. Al termine, Re Topolino guida Sora Virtuale al Castello dell'Oblio digitale, dove al tredicesimo piano incontrano Naminé in forma di dati. Lei rivela la verità: quando riparò i ricordi di Sora dopo Chain of Memories, trovò nel suo cuore ricordi assopiti che non gli appartengono, ma che riguardano persone a lui profondamente legate: Roxas, Axel, Xion e Naminé stessa, oltre a Terra, Aqua e Ventus. Queste persone soffrono, e solo Sora potrà salvarle un giorno.\n\nTornato nel mondo reale, Re Topolino scrive una lettera a Sora, Riku e Kairi per informarli di quanto scoperto e convocarli da Yen Sid: è la stessa lettera che avevano ricevuto alla fine di Kingdom Hearts II.",
              en: "During the events of Kingdom Hearts II, Jiminy Cricket reviews the journal from Sora's first journey and finds its pages almost entirely blank — erased by Naminé. Only two entries survive: \"Thank Naminé\" and a mysterious message that appeared from nowhere: \"Their hurting will be mended when you return to end it.\" King Mickey decides to digitize the journal and creates a Data-Sora to explore the worlds within it and uncover the origin of the message.\n\nData-Sora travels through digital versions of the worlds visited in Kingdom Hearts, eliminating the bugs infesting the book. Along the way, Maleficent and Pete infiltrate the cyberspace as well, but are stopped. At the end of the adventure, King Mickey guides Data-Sora to the digital Castle Oblivion, where on the thirteenth floor they encounter a data form of Naminé. She reveals the truth: when she restored Sora's memories after Chain of Memories, she found within his heart dormant memories that do not belong to him — memories concerning people deeply connected to him: Roxas, Axel, Xion and Naminé herself, as well as Terra, Aqua and Ventus. These people are suffering, and only Sora will one day be able to save them.\n\nBack in the real world, King Mickey writes a letter to Sora, Riku and Kairi informing them of what he has discovered and summoning them to Yen Sid — the very same letter they received at the end of Kingdom Hearts II."
            }
          },
          { id: "ddd", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "Dopo Kingdom Hearts II", yearEn: "After Kingdom Hearts II", releaseYear: "2012", releaseYearEn: "2012",
            title: { it: "Kingdom Hearts: Dream Drop Distance", en: "Kingdom Hearts: Dream Drop Distance" },
            synopsis: {
              it: "Con il ritorno del Maestro Xehanort ormai imminente, Yen Sid convoca Sora e Riku per sottoporli all'Esame di Maestria: i due devono ottenere il rango di Maestri del Keyblade per prepararsi allo scontro finale. L'esame li porta nel Reame dei Sogni, una dimensione di Mondi Dormienti che non si sono mai risvegliati dopo essere stati inghiottiti dall'Oscurità. Il loro compito è liberare sette Serrature Dormienti. Sora e Riku viaggiano separatamente attraverso gli stessi mondi. Sora stringe legami con i Divorasogni, creature del Reame dei Sogni divise in Spiriti benevoli e Incubi ostili. Riku, senza saperlo, ha inconsapevolmente assunto fin dall'inizio dell'esame il ruolo di Spirito Divorasogni all'interno dei sogni di Sora, combattendo gli Incubi dall'interno per proteggere il suo amico, anziché affrontare i mondi dormienti in modo indipendente come credeva. Nel frattempo il Giovane Xehanort, versione passata del Maestro capace di viaggiare nel tempo, si rivela come la mente dietro al piano: far cadere Sora nell'Oscurità per farne il tredicesimo vaso del cuore di Xehanort, creando così la Vera Organizzazione XIII: tredici Cercatori dell'Oscurità da contrapporre a sette Guardiani della Luce nello scontro che forgerà la χ-blade. Sora viene trascinato nel Mondo che non Esiste e fatto sprofondare in un sonno oscuro. Riku, scoperta la verità da Ansem, lo raggiunge e sconfigge l'Incubo che lo imprigiona, liberandolo. Riku supera l'esame e viene proclamato Maestro del Keyblade da Yen Sid. Sora fallisce, ma ha inconsciamente sviluppato il Potere del Risveglio: Yen Sid lo manda a recuperare le sue abilità perdute in preparazione alla battaglia finale.",
              en: "With Master Xehanort's return now imminent, Yen Sid summons Sora and Riku to undergo the Mark of Mastery exam: the two must attain the rank of Keyblade Masters to prepare for the final confrontation. The exam takes them to the Realm of Sleep — a dimension of Sleeping Worlds that never awoke after being swallowed by Darkness. Their task is to unlock seven Sleeping Keyholes. Sora and Riku travel separately through the same worlds. Sora bonds with Dream Eaters — creatures of the Realm of Sleep divided into benevolent Spirits and hostile Nightmares. Riku, unbeknownst to himself, has been acting as a Spirit Dream Eater within Sora's dreams from the very beginning of the exam, fighting the Nightmares from within to protect his friend, rather than traversing the Sleeping Worlds independently as he believed. Meanwhile, the Young Xehanort — a past incarnation of the Master capable of time travel — is revealed as the mind behind the plan: to drag Sora into Darkness and make him the thirteenth vessel for Xehanort's heart, thereby completing the True Organization XIII — thirteen Seekers of Darkness to stand against seven Guardians of Light in the clash that would forge the χ-blade. Sora is dragged to the World That Never Was and plunged into a dark sleep. Riku, having learned the truth from Ansem, reaches him and defeats the Nightmare imprisoning him, setting him free. Riku passes the exam and is proclaimed a Keyblade Master by Yen Sid. Sora fails, but has unconsciously developed the Power of Waking: Yen Sid sends him to recover his lost abilities in preparation for the final battle."
            }
          },
          { id: "kh3", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "Subito dopo Dream Drop Distance", yearEn: "Right after Dream Drop Distance", releaseYear: "2019", releaseYearEn: "2019",
            title: { it: "Kingdom Hearts III", en: "Kingdom Hearts III" },
            synopsis: {
              it: "Sora, indebolito dopo Dream Drop Distance, viaggia con Paperino e Pippo per recuperare il Potere del Risveglio. Nel frattempo Riku e Re Topolino scendono nel Reame delle Tenebre per salvare Aqua, caduta sotto l'influenza dell'Oscurità come mostrato in 0.2 Birth by Sleep. Dopo averla liberata, Aqua guida il gruppo al Castello dell'Oblio per risvegliare Ventus, il cui cuore ritorna nel suo corpo. Kairi e Lea, l'ex membro dell'Organizzazione noto come Axel, completano il loro addestramento come nuovi branditori di Keyblade.\n\nCon i sette Guardiani della Luce riuniti, Sora, Riku, Re Topolino, Aqua, Ventus, Kairi e Lea, il gruppo converge sul Cimitero dei Keyblade per lo scontro finale. La Vera Organizzazione XIII, i tredici Cercatori dell'Oscurità, è composta da incarnazioni diverse di Xehanort raccolte attraverso il viaggio nel tempo: il Maestro Xehanort, il Giovane Xehanort, Ansem, Xemnas, Terra-Xehanort, Vanitas, Xigbar, Saïx, Marluxia, Larxene, Luxord, Xion e Riku Oscuro. Lo scontro iniziale è disastroso: i Guardiani vengono travolti da Terra-Xehanort e da una Marea Demoniaca di Heartless e sconfitti uno per uno. Sora usa il Potere del Risveglio per tornare indietro nel tempo e prevenire la sconfitta, salvando i compagni.\n\nNella seconda offensiva i Guardiani prevalgono. Durante la battaglia Terra si libera da Xehanort riconquistando il proprio corpo, mentre Roxas e Xion, inseriti in corpi replica, tornano a combattere. Rimasto solo, Xehanort usa Kairi per forgiare la χ-blade, apre Kingdom Hearts e lo riempie di Oscurità. Sora sfrutta il potere di Xehanort stesso per trasportarlo a Scala ad Caelum, città della sua giovinezza, dove lo sconfigge definitivamente con l'aiuto di Paperino e Pippo. Xehanort, sconfitto, viene raggiunto dallo spirito di Eraqus che aveva conservato nel suo cuore per tutta la vita, e i due vecchi amici passano insieme dall'altra parte.\n\nSora usa il Potere del Risveglio per recuperare Kairi, ma l'abuso di quel potere ha un prezzo: dopo aver trascorso le ultime ore insieme a lei visitando i mondi degli amici, Sora scompare sulle Isole del Destino.\n\nIl DLC Re:Mind racconta gli stessi eventi finali dal punto di vista di Sora, mostrandolo attraversare i cuori dei Guardiani della Luce per raccogliere i frammenti del cuore di Kairi e riportarla in vita. Nel finale rivelato dall'episodio conclusivo, i sopravvissuti cercano Sora: Riku apre un portale per un'altra realtà chiamata Quadratum dove Sora potrebbe trovarsi, Kairi si allena con Aqua, e Re Topolino viene incaricato da Yen Sid di investigare Scala ad Caelum per trovare indizi.\n\nIn una scena segreta post-credits, Sora nel Mondo Finale affronta un misterioso ragazzo di nome Yozora, protagonista del gioco immaginario \"Verum Rex\" intravisto nei mondi dell'avventura, esteticamente ispirato a Noctis di Final Fantasy XV. L'esito dello scontro rimane ambiguo, ma Yozora si ritrova solo in un'auto in corsa attraverso una città notturna.",
              en: "Sora, weakened after Dream Drop Distance, travels with Donald and Goofy to reclaim the Power of Waking. Meanwhile, Riku and King Mickey descend into the Realm of Darkness to rescue Aqua — who has fallen under the influence of Darkness as shown in 0.2 Birth by Sleep. After freeing her, Aqua leads the group to Castle Oblivion to awaken Ventus, whose heart returns to his body. Kairi and Lea — the former Organization member known as Axel — complete their training as new Keyblade wielders.\n\nWith the seven Guardians of Light assembled — Sora, Riku, King Mickey, Aqua, Ventus, Kairi and Lea — the group converges on the Keyblade Graveyard for the final showdown. The True Organization XIII, the thirteen Seekers of Darkness, is composed of different incarnations of Xehanort gathered through time travel: Master Xehanort, Young Xehanort, Ansem, Xemnas, Terra-Xehanort, Vanitas, Xigbar, Saïx, Marluxia, Larxene, Luxord, Xion and Dark Riku. The initial clash is disastrous: the Guardians are overwhelmed by Terra-Xehanort and a Demon Tide of Heartless, defeated one by one. Sora uses the Power of Waking to travel back in time and prevent the defeat, saving his companions.\n\nIn the second offensive, the Guardians prevail. During the battle, Terra breaks free from Xehanort and reclaims his own body, while Roxas and Xion — placed into replica bodies — return to fight. Left alone, Xehanort uses Kairi to forge the χ-blade, opens Kingdom Hearts and fills it with Darkness. Sora turns Xehanort's own power against him to transport him to Scala ad Caelum — the city of his youth — where he defeats him for good with Donald and Goofy at his side. Xehanort, defeated, is reached by the spirit of Eraqus — whom he had kept within his heart his whole life — and the two old friends pass on together.\n\nSora uses the Power of Waking to recover Kairi, but the abuse of that power comes at a price: after spending his final hours with her visiting the worlds of their friends, Sora vanishes on Destiny Islands.\n\nThe Re:Mind DLC retells the same final events from Sora's perspective, showing him journey through the hearts of the Guardians of Light to gather the fragments of Kairi's heart and bring her back. In the conclusion revealed by the final episode, the survivors search for Sora: Riku opens a portal to another reality called Quadratum where Sora may be found, Kairi trains under Aqua, and King Mickey is tasked by Yen Sid with investigating Scala ad Caelum for clues. In a secret post-credits scene, Sora in the Final World faces a mysterious young man named Yozora — the protagonist of the fictional game \"Verum Rex\" glimpsed throughout the adventure, visually inspired by Noctis from Final Fantasy XV. The outcome of their clash remains ambiguous, but Yozora finds himself alone in the back of a car driving through a city at night."
            }
          },
          { id: "melody-of-memory", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "Un anno dopo la scomparsa di Sora", yearEn: "One year after Sora's disappearance", releaseYear: "2020", releaseYearEn: "2020",
            title: { it: "Kingdom Hearts Melody of Memory", en: "Kingdom Hearts Melody of Memory" },
            synopsis: {
              it: "Un anno dopo la scomparsa di Sora, Kairi si immerge in un sonno profondo per cercare indizi attraverso i propri ricordi. Ripercorre mentalmente tutte le avventure di Sora e dei suoi amici, cercando un filo che la guidi verso di lui. Il gioco è strutturato come un rhythm game in cui le battaglie seguono il ritmo delle musiche iconiche della saga. Nel culmine del suo viaggio mentale, Kairi raggiunge una versione del Mondo Finale creata dentro il suo cuore, dove affronta una manifestazione di Xehanort. L'anziano Maestro la sopraffà, ma quando sta per colpirla il Keyblade di Sora interviene a bloccarla: Kairi assume per un istante la forma di Sora, rivelando a Xehanort dove si trova il cuore del ragazzo. Prima di svanire, Xehanort richiama a Kairi le parole che le aveva detto da bambina a Radiant Garden, mentre la mandava via prima che l'Oscurità inghiottisse la città, convinto che il suo cuore di Principessa avrebbe trovato rifugio in un branditore del Keyblade: \"Se il tuo cammino ti porta in un mondo che non è né luce né oscurità, ma dall'altra parte, la tua missione sarà tutt'altro che facile.\" Kairi si sveglia al Giardino Radioso e riferisce questa rivelazione ad Ansem il Saggio, Even e Ienzo: Xehanort si riferisce a un mondo al di là della loro realtà, un mondo \"immaginario\". Nel frattempo Riku arriva e racconta di sognare ripetutamente una città di grattacieli. La Fata Smemorina raggiunge il gruppo e rivela che i ricordi di Kairi e i sogni di Riku sono due delle tre chiavi necessarie per trovare Sora, e li conduce al Mondo Finale per trovare la terza: la Stella Senza Nome, il cuore di una ragazza proveniente da quella realtà alternativa, il cui corpo è perito ma che aveva già incontrato Sora mentre questi usava il Potere del Risveglio. La ragazza riconosce nella città descritta da Riku la sua città natale: Quadratum. Con il suo aiuto, Riku apre un portale usando il Potere del Risveglio e parte da solo alla ricerca di Sora. Kairi torna alla Torre Misteriosa per completare il suo addestramento sotto Aqua, promettendo di seguirlo presto.",
              en: "A year after Sora's disappearance, Kairi falls into a deep sleep to search for clues through her own memories. She mentally retraces all of Sora's and his friends' adventures, looking for a thread that might lead her to him. The game is structured as a rhythm game in which battles follow the beat of the saga's iconic music.\n\nAt the peak of her mental journey, Kairi reaches a version of the Final World created within her heart, where she faces a manifestation of Xehanort. The elderly Master overpowers her — but as he moves to strike, Sora's Keyblade intervenes to block him: Kairi briefly takes on Sora's form, revealing to Xehanort where the boy's heart lies. Before fading away, Xehanort recalls to Kairi the words he had spoken to her as a child in Radiant Garden, as he sent her away before Darkness engulfed the city — convinced that her heart, as a Princess of Heart, would find refuge with a Keyblade wielder: \"If your journey leads you to a world that is neither light nor darkness, but somewhere on the other side, your mission will be far more difficult.\"\n\nKairi awakens in Radiant Garden and relays this revelation to Ansem the Wise, Even and Ienzo: Xehanort is referring to a world beyond their reality — an \"imaginary\" world. Meanwhile Riku arrives and describes recurring dreams of a city filled with skyscrapers. The Fairy Godmother joins them and reveals that Kairi's memories and Riku's dreams are two of the three keys needed to find Sora, then leads them to the Final World to find the third: the Nameless Star — the heart of a girl from that alternate reality, whose body has perished but who had already encountered Sora while he was using the Power of Waking. The girl recognizes the city Riku describes as her home: Quadratum. With her help, Riku opens a portal using the Power of Waking and sets out alone in search of Sora. Kairi returns to the Mysterious Tower to complete her training under Aqua, vowing to follow him soon."
            }
          }
        ]
      }
    ]
  },

  "legend-of-zelda": {
    id: "legend-of-zelda",
    listTitle: { it: "The Legend of Zelda", en: "The Legend of Zelda" },
    eyebrow: { it: "Fascicolo", en: "Case File" },
    title: { it: "The Legend of Zelda", en: "The Legend of Zelda" },
    blurb: {
      it: "Nel regno di Hyrule, un'incarnazione dello stesso eroe risponde sempre alla chiamata quando le forze del male, spesso legate a un antico usurpatore, minacciano di sopraffare la terra. Al suo fianco, una principessa custode di una saggezza ancestrale, e un artefatto capace di equilibrare potere, saggezza e coraggio.",
      en: "In the kingdom of Hyrule, a reincarnation of the same hero always answers the call whenever the forces of evil, often tied to an ancient usurper, threaten to overwhelm the land. At his side stands a princess who guards an ancestral wisdom, and an artifact capable of balancing power, wisdom, and courage. The."
    },
    palette: ["#4a4a4a", "#7a7a7a", "#a8a8a8"],
    accentColor: "#7a7a7a",
    tracks: [],
    avatar: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Zelda%20Avatar.jpg",
    banner: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Zelda%20Banner.jpg",
    watermark: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Zelda%20Filigrana.jpg",
    watermarkOpacity: 0.18,
    universes: [
      {
        id: "era-condivisa",
        name: { it: "Era Condivisa (prima della scissione)", en: "Shared Era (before the split)" },
        span: { it: "Era del Cielo – Era di Ocarina of Time", en: "Era of the Sky – Era of Ocarina of Time" },
        entries: [
          { id: "skyward-sword", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "Era del Cielo",
            releaseYear: "2011", releaseYearEn: "2011",
            title: { it: "Skyward Sword", en: "Skyward Sword" },
            synopsis: {
              it: "Il gioco cronologicamente più antico della saga. Link vive a Skyloft, una città sospesa tra le nuvole, dove l'umanità si è rifugiata secoli prima per sfuggire a Demise, un demone bramoso di conquistare la superficie. Quando la sua amica d'infanzia Zelda viene rapita e trascinata sulla superficie, Link la insegue armato della spada che diverrà la Master Sword, scoprendo che Zelda è la reincarnazione della dea Hylia e che il suo destino è sigillare Demise per sempre. Con l'aiuto dello spirito della spada Fi, Link raccoglie le Sacre Fiamme e affronta Demise in tre scontri successivi. Sconfitto, il demone lancia una maledizione: la sua rabbia si sarebbe reincarnata più e più volte per perseguitare i discendenti di Link e Zelda, dando origine al ciclico conflitto con Ganon che attraverserà tutta la serie. Il gioco stabilisce le origini della Master Sword, del Triforce e del legame eterno tra le tre anime protagoniste.",
              en: "The chronologically oldest game in the saga. Link lives in Skyloft, a city suspended among the clouds, where humanity took refuge centuries earlier to escape Demise, a demon bent on conquering the surface. When his childhood friend Zelda is kidnapped and dragged down to the surface, Link pursues her wielding the blade that will become the Master Sword, discovering that Zelda is the reincarnation of the goddess Hylia and that her destiny is to seal Demise away forever. With the help of the sword spirit Fi, Link gathers the Sacred Flames and faces Demise in three successive confrontations. Defeated, the demon casts a curse: his hatred would reincarnate again and again to torment Link and Zelda's descendants, giving rise to the cyclical conflict with Ganon that runs through the entire series. The game establishes the origins of the Master Sword, the Triforce, and the eternal bond between the three protagonist souls."
            }
          },
          { id: "minish-cap", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "Era delle Origini",
            releaseYear: "2004", releaseYearEn: "2004",
            title: { it: "The Minish Cap", en: "The Minish Cap" },
            synopsis: {
              it: "Nel regno di Hyrule, il mago Vaati, un tempo dei Minish (un popolo minuscolo invisibile agli occhi umani), sfida il re di Hyrule a duello e ne pietrifica la principessa Zelda con la Spada dei Quattro. Link, unico giovane di Hyrule capace ancora di vedere i Minish, viene rimpicciolito da Ezlo, un antico cappello vivente che è in realtà il vero Portatore del Vento dei Minish, trasformato in oggetto dallo stesso Vaati. Insieme, Link ed Ezlo attraversano Hyrule in miniatura, raccogliendo i frammenti dell'Elemento del Vento e riforgiando la Spada dei Quattro per affrontare Vaati, sconfiggerlo e liberare sia Zelda che Ezlo dalla maledizione. Il gioco introduce la Spada dei Quattro e la stirpe di Vaati, elementi che ricorreranno più avanti nella storia condivisa prima della scissione della linea temporale.",
              en: "In the kingdom of Hyrule, the sorcerer Vaati — once one of the Minish, a tiny people invisible to human eyes — challenges the King of Hyrule to a duel and turns Princess Zelda to stone with the Four Sword. Link, the only young Hylian still able to see the Minish, is shrunk down by Ezlo, an ancient living hat who is in truth the true Minish Wind Bearer, transformed into an object by Vaati himself. Together, Link and Ezlo cross a miniature Hyrule, gathering the fragments of the Wind Element and reforging the Four Sword to face Vaati, defeat him, and free both Zelda and Ezlo from the curse. The game introduces the Four Sword and Vaati's lineage, elements that recur later in the shared story before the timeline split."
            }
          },
          { id: "four-swords", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "Era delle Origini",
            releaseYear: "2002", releaseYearEn: "2002",
            title: { it: "Four Swords", en: "Four Swords" },
            synopsis: {
              it: "Anni dopo gli eventi di Minish Cap, il mago Vaati viene liberato dalla sua prigione all'interno della Spada dei Quattro quando Zelda, ignara del pericolo, chiede a Link di estrarla per proteggere il regno da una tempesta imminente. Estraendo la spada, Link si divide in quattro copie identiche di sé stesso, ciascuna con un aspetto diverso della sua personalità. Le quattro versioni di Link collaborano per attraversare la Grande Foresta di Hyrule e la Fortezza di Vaati, recuperare i pezzi del Triforce sottratti da Vaati e sconfiggerlo, sigillandolo nuovamente all'interno della spada. Concepito originariamente come esperienza multiplayer cooperativa, stabilisce l'esistenza della Spada dei Quattro come sigillo per Vaati, un elemento narrativo che tornerà più avanti nel ramo Bambino.",
              en: "Years after the events of Minish Cap, the sorcerer Vaati is freed from his prison inside the Four Sword when Zelda, unaware of the danger, asks Link to draw it to protect the kingdom from an incoming storm. Drawing the sword splits Link into four identical copies of himself, each embodying a different aspect of his personality. The four Links work together to cross the Hyrule's Great Woods and Vaati's Palace, recover the pieces of the Triforce stolen by Vaati, and defeat him, resealing him inside the sword. Originally conceived as a cooperative multiplayer experience, it establishes the Four Sword as a seal for Vaati, a narrative element that returns later in the Child branch."
            }
          },
          { id: "ocarina-of-time", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "Era dell'Eroe del Tempo",
            releaseYear: "1998", releaseYearEn: "1998",
            title: { it: "Ocarina of Time", en: "Ocarina of Time" },
            synopsis: {
              it: "Link, un ragazzo Kokiri cresciuto senza sapere di essere in realtà Hyliano, viene inviato dal Grande Albero Deku a fermare Ganondorf, il capo dei Gerudo, che sta cercando di impossessarsi del Triforce nascosto nel Regno Sacro. Aiutato dalla principessa Zelda e dal suo tutore Impa, Link raccoglie le tre Pietre Spirituali e apre il Tempio del Tempo, dove estrae la Master Sword — ma Ganondorf lo segue, si impossessa lui stesso del Regno Sacro reclamando il Triforce del Potere e trasforma Hyrule in un incubo. Estraendo la spada troppo giovane, Link viene sigillato per sette anni nel Tempio del Tempo, risvegliandosi adulto in un mondo devastato. Guidato dalla saggia Sheik (in realtà Zelda travestita), Link risveglia i sette Saggi e affronta infine Ganondorf al Castello di Hyrule e nella Torre di Ganon, sigillandolo nel Regno Sacro. Nel finale, Zelda usa l'Ocarina del Tempo per rimandare Link alla sua infanzia, affinché possa vivere gli anni perduti — una scelta che diverrà il punto di scissione dell'intera linea temporale della serie.",
              en: "Link, a Kokiri boy raised without knowing he is actually Hylian, is sent by the Great Deku Tree to stop Ganondorf, leader of the Gerudo, who is trying to seize the Triforce hidden within the Sacred Realm. Aided by Princess Zelda and her guardian Impa, Link gathers the three Spiritual Stones and opens the Temple of Time, where he draws the Master Sword — but Ganondorf follows him in, seizes the Sacred Realm himself by claiming the Triforce of Power, and turns Hyrule into a nightmare. Having drawn the sword too young, Link is sealed away for seven years within the Temple of Time, awakening as an adult in a devastated world. Guided by the wise Sheik (in truth Zelda in disguise), Link awakens the seven Sages and finally confronts Ganondorf at Hyrule Castle and Ganon's Tower, sealing him within the Sacred Realm. In the ending, Zelda uses the Ocarina of Time to send Link back to his childhood, so he may live the years he lost — a choice that becomes the splitting point of the entire series timeline."
            }
          }
        ]
      },
      {
        id: "ramo-decadenza",
        name: { it: "Ramo della Decadenza (Link sconfitto)", en: "Downfall Branch (Link defeated)" },
        span: { it: "Era della Decadenza", en: "Era of Decline" },
        entries: [
          { id: "zelda-1986", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "Era della Decadenza",
            releaseYear: "1986", releaseYearEn: "1986",
            title: { it: "The Legend of Zelda", en: "The Legend of Zelda" },
            synopsis: {
              it: "Secoli dopo che Ganon, senza un eroe a fermarlo in Ocarina of Time, ha invaso Hyrule e frantumato il Triforce della Saggezza in otto frammenti, la principessa Zelda li nasconde in altrettanti dungeon sparsi per il regno prima di essere catturata. Link, un giovane guerriero, riceve dalla vecchia Impa la missione di recuperare i frammenti, riunire il Triforce della Saggezza e usarlo per penetrare nella dimora di Ganon, sconfiggerlo con le Frecce d'Argento e liberare Zelda. Il gioco che ha dato il via all'intera serie, capostipite del genere action-adventure a mondo aperto su console.",
              en: "Centuries after Ganon, with no hero to stop him in Ocarina of Time, invaded Hyrule and shattered the Triforce of Wisdom into eight fragments, Princess Zelda hides them across dungeons scattered throughout the kingdom before being captured. Link, a young warrior, is given the quest by the elder Impa to recover the fragments, reassemble the Triforce of Wisdom, and use it to breach Ganon's lair, defeat him with the Silver Arrows, and free Zelda. The game that launched the entire series, the progenitor of the open-world console action-adventure genre."
            }
          },
          { id: "zelda-ii", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "Era della Decadenza",
            releaseYear: "1987", releaseYearEn: "1987",
            title: { it: "Zelda II: The Adventure of Link", en: "Zelda II: The Adventure of Link" },
            synopsis: {
              it: "Alcuni anni dopo il primo gioco, Link scopre di portare sulla mano il marchio del Triforce del Coraggio e apprende da Impa la storia di un'antica principessa Hyliana di nome Zelda, addormentata da secoli da un incantesimo dopo che suo fratello, bramoso dei segreti del Triforce, tentò di estorcerglieli con la forza uccidendola per errore. Per risvegliarla, Link deve raccogliere i frammenti del Triforce del Coraggio custoditi in sei palazzi e raggiungere il Grande Palazzo, dove i seguaci di Ganon tentano di resuscitarlo usando il sangue di Link stesso. Sconfitti i sacerdoti e ottenuto il Triforce completo, Link risveglia la principessa addormentata, chiudendo il capitolo più oscuro di questo ramo della linea temporale.",
              en: "Some years after the first game, Link discovers he bears the mark of the Triforce of Courage on his hand and learns from Impa the story of an ancient Hylian princess named Zelda, put to sleep centuries earlier by a spell after her brother, coveting the secrets of the Triforce, tried to force them out of her and accidentally killed her. To awaken her, Link must gather the fragments of the Triforce of Courage guarded within six palaces and reach the Great Palace, where Ganon's followers attempt to resurrect him using Link's own blood. Having defeated the priests and obtained the complete Triforce, Link awakens the sleeping princess, closing the darkest chapter of this timeline branch."
            }
          },
          { id: "a-link-to-the-past", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "Era della Decadenza",
            releaseYear: "1991", releaseYearEn: "1991",
            title: { it: "A Link to the Past", en: "A Link to the Past" },
            synopsis: {
              it: "Generazioni dopo Zelda II, lo stregone Agahnim, consigliere del re di Hyrule, rapisce le discendenti dei sette Saggi che un tempo sigillarono il Regno Sacro, tra cui la principessa Zelda, con l'obiettivo di spezzare il sigillo e liberare Ganon. Link, chiamato telepaticamente da Zelda, la salva dalle segrete del castello ma non riesce a impedire ad Agahnim di rapirla e teletrasportarla nel Mondo Oscuro: la versione corrotta del Regno Sacro, in cui Ganon, tempo prima, aveva finalmente ottenuto il Triforce completo grazie proprio ad Agahnim, sua marionetta umana. Link recupera la Master Sword nella Foresta Perduta, sconfigge Agahnim e lo insegue nel Mondo Oscuro, dove libera le sette discendenti dei Saggi imprigionate in forma bestiale, riunisce le tre parti della Master Sword e affronta Ganon stesso, sconfiggendolo e restituendo il Triforce a Hyrule.",
              en: "Generations after Zelda II, the sorcerer Agahnim, advisor to the King of Hyrule, kidnaps the descendants of the seven Sages who once sealed away the Sacred Realm, including Princess Zelda, aiming to break the seal and free Ganon. Link, telepathically summoned by Zelda, rescues her from the castle dungeons but fails to stop Agahnim from abducting her and teleporting her to the Dark World: the corrupted version of the Sacred Realm, where Ganon had earlier finally obtained the complete Triforce through Agahnim, his human puppet. Link recovers the Master Sword in the Lost Woods, defeats Agahnim, and pursues him into the Dark World, where he frees the seven Sage descendants imprisoned in beast form, reassembles the three pieces of the Master Sword, and confronts Ganon himself, defeating him and restoring the Triforce to Hyrule."
            }
          },
          { id: "links-awakening", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "Era della Decadenza",
            releaseYear: "1993", releaseYearEn: "1993",
            title: { it: "Link's Awakening", en: "Link's Awakening" },
            synopsis: {
              it: "Poco dopo gli eventi di A Link to the Past, la nave di Link naufraga durante una tempesta ed egli si risveglia sulla misteriosa Isola di Koholint, salvato da una ragazza di nome Marin. Per lasciare l'isola deve risvegliare il Pesce dei Sogni, una gigantesca entità addormentata nell'Uovo del Vento in cima al Monte Tamaranch, raccogliendo otto strumenti musicali custoditi in altrettanti dungeon. Nel corso del viaggio, Link scopre gradualmente che l'intera isola, i suoi abitanti compresa Marin, sono in realtà il sogno del Pesce stesso: risvegliarlo significa far svanire per sempre Koholint e tutti coloro che vi abitano. Nonostante la rivelazione, Link completa comunque il rituale e si risveglia solo, su una zattera, nell'oceano.",
              en: "Shortly after the events of A Link to the Past, Link's ship is wrecked in a storm and he washes up on the mysterious Koholint Island, rescued by a girl named Marin. To leave the island he must awaken the Wind Fish, a giant entity slumbering within the Wind Fish's Egg atop Mt. Tamaranch, by gathering eight musical instruments held within as many dungeons. Over the course of the journey, Link gradually discovers that the entire island, and its inhabitants including Marin, are in truth the Wind Fish's own dream: waking it means the disappearance of Koholint and everyone in it forever. Despite the revelation, Link completes the ritual anyway, and wakes alone on a raft in the open ocean."
            }
          },
          { id: "oracle-of-seasons", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "Era della Decadenza",
            releaseYear: "2001", releaseYearEn: "2001",
            title: { it: "Oracle of Seasons", en: "Oracle of Seasons" },
            synopsis: {
              it: "Link viene trasportato ad Holodrum, dove il generale delle piante Onox rapisce Din, l'Oracolo delle Stagioni, sconvolgendo il naturale ciclo stagionale della terra. Alleandosi con Din stessa, che in incognito lo aveva già aiutato senza rivelarsi, e raccogliendo i frammenti del Bastone delle Stagioni, Link penetra nel Tempio Ombra dove Onox tiene prigioniera Din e la libera, ristabilendo l'equilibrio naturale di Holodrum. Concepito originariamente come parte di una trilogia (insieme a Ages e a un terzo capitolo mai realizzato, Mystical Seed of Courage), collegabile via password ad Oracle of Ages per un finale espanso in cui Ganon tenta di resuscitare grazie ai due Oracoli.",
              en: "Link is transported to Holodrum, where the plant general Onox kidnaps Din, the Oracle of Seasons, throwing the land's natural seasonal cycle into chaos. Allying with Din herself, who had already been secretly helping him without revealing her identity, and gathering the pieces of the Rod of Seasons, Link infiltrates the Shadow Temple where Onox holds Din captive and frees her, restoring Holodrum's natural balance. Originally conceived as part of a trilogy (alongside Ages and a never-realised third chapter, Mystical Seed of Courage), linkable via password to Oracle of Ages for an expanded ending in which Ganon attempts to resurrect using the two Oracles."
            }
          },
          { id: "oracle-of-ages", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "Era della Decadenza",
            releaseYear: "2001", releaseYearEn: "2001",
            title: { it: "Oracle of Ages", en: "Oracle of Ages" },
            synopsis: {
              it: "Link viene trasportato a Labrynna, dove la strega Veran possiede il corpo di Nayru, l'Oracolo del Tempo, e la usa per manipolare la storia del regno attraverso l'Albero del Tempo. Viaggiando tra passato e presente, Link raduna alleati nelle due epoche, recupera il Braccialetto di Nayru e libera infine Nayru dalla possessione, sconfiggendo Veran. Se giocato in collegamento con Oracle of Seasons tramite password, i due finali si fondono: Veran e Onox, sconfitti in entrambi i giochi, avevano in realtà cospirato per resuscitare Ganon, che Link affronta in uno scontro finale condiviso tra i due titoli.",
              en: "Link is transported to Labrynna, where the witch Veran possesses the body of Nayru, the Oracle of Ages, and uses her to manipulate the kingdom's history through the Maku Tree of Time. Traveling between past and present, Link gathers allies across both eras, recovers Nayru's Bracelet, and finally frees Nayru from possession, defeating Veran. If linked with Oracle of Seasons via password, the two endings merge: Veran and Onox, defeated in each respective game, had actually been conspiring to resurrect Ganon, whom Link confronts in a final battle shared between the two titles."
            }
          },
          { id: "a-link-between-worlds", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "Era della Decadenza",
            releaseYear: "2013", releaseYearEn: "2013",
            title: { it: "A Link Between Worlds", en: "A Link Between Worlds" },
            synopsis: {
              it: "Generazioni dopo A Link to the Past, un mercante misterioso di nome Yuga, capace di trasformare le persone in dipinti bidimensionali, cattura i sette Saggi discendenti di Hyrule per liberare Ganon, imprigionato da secoli in una dimensione parallela chiamata Lorule — lo specchio decaduto del Mondo Oscuro, governato dalla principessa Hilda. Link, dotato del Bracciale di Ravio (in realtà il principe di Lorule sotto mentite spoglie) che gli permette anch'esso di trasformarsi in dipinto per muoversi tra i muri, attraversa liberamente Hyrule e Lorule, scopre l'inganno di Hilda — alleata di Yuga per salvare il proprio regno morente sacrificando quello di Link — e affronta infine Yuga fuso con Ganon, salvando entrambi i mondi.",
              en: "Generations after A Link to the Past, a mysterious merchant named Yuga, capable of turning people into two-dimensional paintings, captures the seven Sage descendants of Hyrule to free Ganon, imprisoned for centuries in a parallel dimension called Lorule — the decayed mirror of the Dark World, ruled by Princess Hilda. Link, equipped with Ravio's Bracelet (in truth Lorule's prince in disguise) which also lets him turn into a painting to move through walls, travels freely between Hyrule and Lorule, uncovers Hilda's deception — allied with Yuga to save her own dying kingdom by sacrificing Link's — and finally confronts Yuga fused with Ganon, saving both worlds."
            }
          },
          { id: "tri-force-heroes", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "Era della Decadenza",
            releaseYear: "2015", releaseYearEn: "2015",
            title: { it: "Tri Force Heroes", en: "Tri Force Heroes" },
            synopsis: {
              it: "Nel regno di Hytopia, ossessionato dalla moda, la principessa Styla viene maledetta da un abito che la trasforma in una creatura simile a un rospo, opera della strega gelosa della sua eleganza. Tre Link identici, evocati dal regno per spezzare la maledizione, collaborano in totemi a tre per attraversare la Torre dei Draghi, raccogliendo materiali per confezionare abiti magici necessari a superare le sfide, fino a sconfiggere la strega e liberare Styla. Un capitolo minore e volutamente scanzonato, pensato principalmente come esperienza cooperativa a tre giocatori.",
              en: "In the fashion-obsessed kingdom of Hytopia, Princess Styla is cursed by a dress that turns her into a toad-like creature, the work of a witch jealous of her elegance. Three identical Links, summoned by the kingdom to break the curse, work together in three-person totems to cross the Drablands Tower, gathering materials to craft magical outfits needed to overcome its trials, ultimately defeating the witch and freeing Styla. A minor and deliberately lighthearted chapter, designed primarily as a three-player cooperative experience."
            }
          },
          { id: "echoes-of-wisdom", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "Era della Decadenza",
            releaseYear: "2024", releaseYearEn: "2024",
            title: { it: "Echoes of Wisdom", en: "Echoes of Wisdom" },
            synopsis: {
              it: "Misteriose fenditure iniziano a inghiottire luoghi e persone in tutto il regno, inclusa la principessa Zelda stessa, rapita da un Link corrotto e privo di volontà propria. Tris, un fabbro delle fenditure, salva Zelda e le dona il Baston Tri, capace di creare copie (\"echi\") di oggetti e creature incontrate lungo il cammino, per la prima volta protagonista giocabile della serie al posto di Link. Esplorando le fenditure, Zelda scopre che il vero colpevole è Null, un'entità dimensionale nemica dell'ordine stesso della creazione, capace di corrompere chiunque tocchi, Link compreso. Combinando gli echi in modi creativi, Zelda richiude le fenditure una a una, libera Link dalla corruzione e sconfigge Null, ristabilendo l'ordine di Hyrule.",
              en: "Mysterious rifts begin swallowing places and people across the kingdom, including Princess Zelda herself, kidnapped by a corrupted Link acting against his own will. Tri, a rift-mending sprite, rescues Zelda and grants her the Tri Rod, capable of creating copies (\"echoes\") of objects and creatures encountered along the way — for the first time in the series, Zelda herself is the playable protagonist instead of Link. Exploring the rifts, Zelda discovers the true culprit is Null, a dimensional entity hostile to the order of creation itself, capable of corrupting anyone it touches, Link included. By combining echoes in creative ways, Zelda closes the rifts one by one, frees Link from the corruption, and defeats Null, restoring order to Hyrule."
            }
          }
        ]
      },
      {
        id: "ramo-bambino",
        name: { it: "Ramo del Bambino (Link avverte Zelda)", en: "Child Branch (Link warns Zelda)" },
        span: { it: "Era del Grande Mare", en: "Era of the Great Sea" },
        entries: [
          { id: "four-swords-adventures", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "Poco dopo Ocarina of Time",
            releaseYear: "2004", releaseYearEn: "2004",
            title: { it: "Four Swords Adventures", en: "Four Swords Adventures" },
            synopsis: {
              it: "Anni dopo aver avvertito Zelda del pericolo rappresentato da Ganondorf, Link scopre che Vaati è stato liberato dalla Spada dei Quattro da Zelda stessa, ingannata da un misterioso Mago Oscuro. Vaati rapisce le sette fanciulle di sangue reale di Hyrule, tra cui Zelda, per assorbirne i poteri e ottenere il Triforce completo. Estraendo nuovamente la Spada dei Quattro, Link si divide in quattro copie e attraversa Hyrule, scoprendo lungo il cammino che il Mago Oscuro è in realtà Ganondorf stesso, resuscitato dalle ceneri della sua sconfitta precedente e alleato di Vaati per reclamare il Triforce. Sconfitti prima Vaati e poi Ganondorf, quest'ultimo viene sigillato nuovamente, questa volta all'interno del Bastone del Sigillo custodito dai Sette Saggi.",
              en: "Years after warning Zelda of the danger posed by Ganondorf, Link discovers that Vaati has been freed from the Four Sword by Zelda herself, deceived by a mysterious Dark Sorcerer. Vaati kidnaps the seven maidens of royal Hyrulean blood, including Zelda, to absorb their powers and obtain the complete Triforce. Drawing the Four Sword once more, Link splits into four copies and crosses Hyrule, discovering along the way that the Dark Sorcerer is in fact Ganondorf himself, resurrected from the ashes of his earlier defeat and allied with Vaati to claim the Triforce. Having defeated first Vaati and then Ganondorf, the latter is sealed once again, this time inside the Sealing Rod kept by the Seven Sages."
            }
          },
          { id: "wind-waker", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "Era del Grande Mare",
            releaseYear: "2002", releaseYearEn: "2002",
            title: { it: "The Wind Waker", en: "The Wind Waker" },
            synopsis: {
              it: "Secoli dopo Four Swords Adventures, il Regno di Hyrule è ormai solo leggenda: sommerso sotto un vasto oceano dagli dei stessi per impedire a un Ganondorf resuscitato di reclamare il Triforce, dopo che gli eroi di quell'epoca non riuscirono a fermarlo in tempo. Sul Grande Mare, Link parte alla ricerca della sorella rapita da un misterioso uccello gigante al servizio di Ganondorf, unendosi alla ciurma pirata della capitana Tetra — in realtà la principessa Zelda, ignara della propria identità. Nel corso del viaggio, Link raccoglie le tre Pietre Sacre e le Perle degli Dei per raggiungere il regno sommerso di Hyrule, dove estrae dalle sue radici la Master Sword, sconfigge Ganondorf nella sala del trono ormai sommersa, e assiste alla decisione degli dei di cancellare per sempre il vecchio regno, lasciando che Link e Tetra/Zelda salpino verso nuove terre da fondare.",
              en: "Centuries after Four Swords Adventures, the Kingdom of Hyrule is now only legend: submerged beneath a vast ocean by the gods themselves to stop a resurrected Ganondorf from claiming the Triforce, after the heroes of that age failed to stop him in time. Upon the Great Sea, Link sets out searching for his sister, kidnapped by a mysterious giant bird in Ganondorf's service, joining the pirate crew of Captain Tetra — in truth Princess Zelda, unaware of her own identity. Over the course of the journey, Link gathers the three Sacred Stones and the Pearls of the Gods to reach the submerged kingdom of Hyrule, where he draws the Master Sword from its roots, defeats Ganondorf in the now-flooded throne room, and witnesses the gods' decision to erase the old kingdom forever, letting Link and Tetra/Zelda sail off toward new lands to found."
            }
          },
          { id: "phantom-hourglass", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "Poco dopo The Wind Waker",
            releaseYear: "2007", releaseYearEn: "2007",
            title: { it: "Phantom Hourglass", en: "Phantom Hourglass" },
            synopsis: {
              it: "Poco dopo Wind Waker, Link e Tetra scoprono una nave fantasma nella nebbia; Tetra viene rapita e trasformata in pietra dallo spirito Bellum. Link, salvato dalla fatina Ciela, ottiene dal Re degli Spiriti la Clessidra Fantasma, che gli permette di sopravvivere nel Tempio del Re Oceano protetto dai letali Fantasmi, purché la sabbia al suo interno non si esaurisca. Attraversando il Grande Mare su una nuova imbarcazione, Link raccoglie i Frammenti della Mappa del Tesoro necessari a raggiungere la Torre dei Venti Celesti, sconfigge Bellum e salva Tetra, chiudendo il capitolo immediatamente successivo a Wind Waker in questo ramo.",
              en: "Shortly after Wind Waker, Link and Tetra discover a ghost ship in the fog; Tetra is kidnapped and turned to stone by the spirit Bellum. Link, rescued by the fairy Ciela, receives the Phantom Hourglass from the Ocean King, letting him survive within the Ocean King's Temple guarded by deadly Phantoms, as long as the sand inside doesn't run out. Sailing the Great Sea aboard a new vessel, Link gathers the Treasure Map fragments needed to reach the Tower of Winds, defeats Bellum, and rescues Tetra, closing the chapter that follows immediately after Wind Waker in this branch."
            }
          },
          { id: "spirit-tracks", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "Era del Nuovo Hyrule",
            releaseYear: "2009", releaseYearEn: "2009",
            title: { it: "Spirit Tracks", en: "Spirit Tracks" },
            synopsis: {
              it: "Generazioni dopo Phantom Hourglass, Hyrule è stato rifondato sulla terraferma. Link, aspirante macchinista, accompagna la principessa Zelda alla Torre degli Spiriti per indagare sulla scomparsa dei binari spirituali che tengono sigillato il Demone Malladus. Il Ministro Cole, in realtà un seguace di Malladus, uccide il corpo di Zelda per usarlo come vaso per la resurrezione del demone; il suo spirito sopravvive e si unisce a Link nel viaggio per riparare i binari con l'aiuto dello spirito guardiano Zephos/Anjean, ricostruire il proprio corpo e infine affrontare Malladus/Cole, sconfiggendolo e restituendo Zelda alla vita.",
              en: "Generations after Phantom Hourglass, Hyrule has been refounded on the mainland. Link, an aspiring train engineer, accompanies Princess Zelda to the Tower of Spirits to investigate the disappearance of the spirit tracks that keep the Demon King Malladus sealed away. Chancellor Cole, in truth a follower of Malladus, kills Zelda's body to use it as a vessel for the demon's resurrection; her spirit survives and joins Link on the journey to repair the tracks with the help of the guardian spirit Zephos/Anjean, rebuild her own body, and finally confront Malladus/Cole, defeating him and restoring Zelda to life."
            }
          }
        ]
      },
      {
        id: "ramo-adulto",
        name: { it: "Ramo dell'Adulto (Link scompare)", en: "Adult Branch (Link vanishes)" },
        span: { it: "Era del Crepuscolo", en: "Era of Twilight" },
        entries: [
          { id: "twilight-princess", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "Era del Crepuscolo",
            releaseYear: "2006", releaseYearEn: "2006",
            title: { it: "Twilight Princess", en: "Twilight Princess" },
            synopsis: {
              it: "Un centinaio d'anni dopo Ocarina of Time, in un mondo dove l'Eroe del Tempo è svanito dalla memoria dopo il proprio ritorno all'infanzia, il pastore Link viene trascinato in una dimensione oscura chiamata Regno del Crepuscolo, avvolgendo il villaggio di Ordon e gran parte di Hyrule. Trasformato in lupo dall'oscurità, Link viene guidato da Midna, una piccola creatura del Crepuscolo dai modi sarcastici, alla ricerca delle Lanterne della Luce per respingere l'ombra. Scoprono che Zant, un usurpatore del Regno del Crepuscolo, ha spodestato la vera sovrana Midna proprio grazie ai poteri concessigli da Ganondorf, evocato dal mondo della luce dopo essere stato giustiziato in seguito a un tentato colpo di stato. Link, riacquistata forma umana e la Master Sword, sconfigge prima Zant e poi, dopo che quest'ultimo tenta di uccidere Midna per impedire la sua restaurazione al trono, affronta Ganondorf stesso in un duello finale a cavallo e poi corpo a corpo, ponendo fine alla sua minaccia e permettendo a Midna di ristabilire l'ordine nel proprio regno.",
              en: "About a hundred years after Ocarina of Time, in a world where the Hero of Time has faded from memory following his own return to childhood, the shepherd Link is dragged into a dark dimension called the Twilight Realm, which is engulfing the village of Ordon and much of Hyrule. Transformed into a wolf by the darkness, Link is guided by Midna, a small, sarcastic creature of the Twilight, in search of the Lanterns of Light to push back the shadow. They discover that Zant, a usurper of the Twilight Realm, dethroned its rightful ruler Midna thanks to powers granted by Ganondorf, summoned back into the world of light after being executed for an attempted coup. Link, having regained his human form and the Master Sword, defeats Zant first, and then, after Zant attempts to kill Midna to prevent her restoration to the throne, confronts Ganondorf himself in a final duel on horseback followed by hand-to-hand combat, ending his threat and allowing Midna to restore order to her own realm."
            }
          }
        ]
      },
      {
        id: "era-selvaggi",
        name: { it: "Era dei Selvaggi (tutti i rami convergono)", en: "Era of the Wilds (all branches converge)" },
        span: { it: "Migliaia di anni dopo", en: "Thousands of years later" },
        entries: [
          { id: "breath-of-the-wild", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "Era dei Selvaggi",
            releaseYear: "2017", releaseYearEn: "2017",
            title: { it: "Breath of the Wild", en: "Breath of the Wild" },
            synopsis: {
              it: "Centinaia di anni dopo la Calamità Ganon, un'ondata di corruzione che distrusse il Regno di Hyrule e uccise re, campioni e cavalieri, Link si risveglia da un lungo sonno curativo nel Santuario della Resurrezione, privo di memoria. Guidato dalla voce di una Zelda intrappolata nel Castello di Hyrule, dove trattiene da sola la Calamità da un secolo, Link esplora un mondo aperto vastissimo, recupera i propri ricordi frammentati, libera le quattro Bestie Divine dalla corruzione con l'aiuto dei discendenti dei quattro Campioni caduti e infine affronta Ganon nel cuore del castello, liberando Zelda e ponendo fine a un secolo di rovina. Un capitolo che reimmagina radicalmente la formula della serie in chiave open world, ambientato così lontano nel futuro da rendere gli eventi dei rami precedenti pura leggenda, di cui restano solo tracce archeologiche e racconti tramandati.",
              en: "Hundreds of years after the Calamity Ganon, a wave of corruption that destroyed the Kingdom of Hyrule and killed its king, champions, and knights, Link awakens from a long, healing sleep in the Shrine of Resurrection, without any memory. Guided by the voice of a Zelda trapped within Hyrule Castle, where she has single-handedly held back the Calamity for a century, Link explores a vast open world, recovers his fragmented memories, frees the four Divine Beasts from corruption with the help of the descendants of the four fallen Champions, and finally confronts Ganon at the heart of the castle, freeing Zelda and ending a century of ruin. A chapter that radically reimagines the series' formula as an open world, set so far in the future that the events of the earlier branches have become pure legend, leaving only archaeological traces and passed-down tales."
            }
          },
          { id: "tears-of-the-kingdom", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "Era dei Selvaggi",
            releaseYear: "2023", releaseYearEn: "2023",
            title: { it: "Tears of the Kingdom", en: "Tears of the Kingdom" },
            synopsis: {
              it: "Diretto seguito di Breath of the Wild. Esplorando le rovine sotto il Castello di Hyrule, Link e Zelda risvegliano un corpo mummificato che libera un miasma corrotto, spezzando il braccio di Link e scaraventando Zelda in un abisso sotterraneo. Sopravvissuto grazie a un misterioso braccio meccanico donatogli dallo spirito del re Rauru, fondatore di Hyrule migliaia di anni prima, Link scopre che il corpo risvegliato era Ganondorf stesso, sigillato in un'epoca ancora più remota dopo aver tentato di rovesciare il regno di Rauru e Sonia. Esplorando cielo, superficie e Profondità sotterranee di Hyrule, Link raduna i discendenti dei quattro Saggi delle Bestie Divine e scopre che Zelda, precipitata nel passato, si è sacrificata trasformandosi in un drago eterno per proteggere la Master Sword lungo i millenni. Sconfitto infine Ganondorf nelle Profondità, Link recupera Zelda e la riporta alla forma umana, chiudendo il cerchio aperto migliaia di anni prima dalla fondazione stessa di Hyrule.",
              en: "A direct sequel to Breath of the Wild. Exploring the ruins beneath Hyrule Castle, Link and Zelda awaken a mummified body that releases a corrupted miasma, shattering Link's arm and hurling Zelda into an underground chasm. Surviving thanks to a mysterious mechanical arm gifted to him by the spirit of King Rauru, Hyrule's founder thousands of years earlier, Link discovers the awakened body was Ganondorf himself, sealed away in an even more remote age after attempting to overthrow the kingdom of Rauru and Sonia. Exploring the sky, surface, and underground Depths of Hyrule, Link gathers the descendants of the four Sages of the Divine Beasts and discovers that Zelda, having fallen into the past, sacrificed herself by transforming into an eternal dragon to protect the Master Sword across the millennia. Having finally defeated Ganondorf in the Depths, Link recovers Zelda and restores her to human form, closing a circle first opened thousands of years earlier by the founding of Hyrule itself."
            }
          }
        ]
      }
    ]
  },

  "legacy-of-kain": {
    id: "legacy-of-kain",
    listTitle: { it: "Legacy of Kain", en: "Legacy of Kain" },
    eyebrow: { it: "Fascicolo", en: "Case File" },
    title: { it: "Legacy of Kain", en: "Legacy of Kain" },
    blurb: {
      it: "Nel regno decaduto di Nosgoth, un vampiro e chi lo ha tradito e poi rinnegato si muovono attraverso epoche diverse, manipolando il passato per cambiare un futuro già segnato. Vendetta, libero arbitrio e il destino di un intero mondo si intrecciano in un ciclo che sembra impossibile da spezzare. Ogni scelta riscrive la.",
      en: "In the fallen realm of Nosgoth, a vampire and the one who betrayed him move across different eras, manipulating the past to change an already written future. Vengeance, free will, and the fate of an entire world intertwine in a cycle that seems impossible to break. Every choice rewrites history, but rarely improves it."
    },
    palette: ["#8b1a2b", "#2e2a1f", "#3ec6c6"],
    accentColor: "#3ec6c6",
    universes: [
      {
        id: "main",
        name: { it: "Universo principale", en: "Main Universe" },
        span: { it: "Nosgoth", en: "Nosgoth" },
        entries: [
          { id: "blood-omen", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "I Pilastri cadono", releaseYear: "1996", releaseYearEn: "1996",
            title: { it: "Blood Omen: Legacy of Kain", en: "Blood Omen: Legacy of Kain" },
            synopsis: {
              it: "Kain è un nobile di Coorhagen assassinato da un gruppo di banditi e resuscitato come vampiro dal negromante Mortanius, Guardiano del Pilastro della Morte. Raggiunge i Pilastri di Nosgoth, dove lo spettro di Ariel, la Guardiana dell'Equilibrio assassinata, gli rivela la situazione: la morte di Ariel ha spinto il suo amante Nupraptor alla follia, e la sua pazzia ha infettato tutti gli altri membri del Cerchio dei Nove, corrompendo i Pilastri e condannando Nosgoth alla rovina. Solo la morte di ogni guardiano corrotto può purificare le colonne. Kain non agisce per altruismo: cerca una cura alla sua condizione.\n\nNel corso del viaggio elimina uno per uno i guardiani del Cerchio, scopre di essere stato manipolato da Moebius il Tessitore del Tempo per far scatenare una guerra genocida contro i vampiri, e ottiene la Mietitrice di Anime, spada leggendaria capace di prosciugare le anime delle vittime. Ai Pilastri affronta Mortanius e lo sconfigge, scoprendo che era stato posseduto per tutta la saga da un'Entità Oscura Hylden, la vera artefice dell'assassinio di Ariel e di ogni manipolazione successiva. Sconfitto anche il vero nemico, Ariel gli rivela la verità finale: Kain stesso era il successore designato di Ariel come Guardiano dell'Equilibrio. È l'ultimo guardiano rimasto. Deve sacrificarsi.\n\nPer tutta la sua esistenza è stato una pedina. Kain rifiuta. Sceglie di condannare Nosgoth pur di non essere ancora una volta strumento del destino altrui. I Pilastri crollano.",
              en: "Kain is a nobleman from Coorhagen murdered by a group of bandits and resurrected as a vampire by the necromancer Mortanius — Guardian of the Pillar of Death. He reaches the Pillars of Nosgoth, where the spirit of Ariel, the murdered Guardian of Balance, reveals the situation to him: Ariel's death drove her lover Nupraptor to madness, and his insanity infected all other members of the Circle of Nine, corrupting the Pillars and condemning Nosgoth to ruin. Only the death of each corrupted guardian can purify the columns. Kain does not act out of altruism — he is seeking a cure for his own condition.\n\nDuring his journey he eliminates the Circle's guardians one by one, discovers he was manipulated by Moebius the Time Streamer into triggering a genocidal war against the vampires, and obtains the Soul Reaver — a legendary sword capable of draining the souls of its victims. At the Pillars he confronts Mortanius and defeats him, discovering that he had been possessed throughout the entire saga by a Dark Hylden Entity — the true architect of Ariel's murder and every subsequent manipulation. With the true enemy also defeated, Ariel reveals the final truth: Kain himself was Ariel's designated successor as Guardian of Balance. He is the last guardian remaining. He must sacrifice himself.\n\nHis entire existence he has been a pawn. Kain refuses. He chooses to condemn Nosgoth rather than once again be an instrument of someone else's destiny. The Pillars fall."
            }
          },
          { id: "dead-shall-rise", type: "GRAPHIC NOVEL", typeEn: "GRAPHIC NOVEL", year: "Nell'era dell'Impero di Kain, prima della trasformazione di Raziel", yearEn: "In the era of Kain's Empire, before Raziel's transformation", releaseYear: "2025", releaseYearEn: "2025",
            title: { it: "Soul Reaver: The Dead Shall Rise", en: "Soul Reaver: The Dead Shall Rise" },
            synopsis: {
              it: "La storia esplora Raziel nella sua vita umana come guerriero Sarafan, prima che Kain lo resuscitasse come vampiro, ricostruendo le origini delle sue ali e gli eventi che lo portarono a diventare il luogotenente prediletto del re vampiro. Introduce il personaggio originale Elaleth, che appare poi come protagonista giocabile in Ascendance.",
              en: "The story explores Raziel in his human life as a Sarafan warrior, before Kain resurrected him as a vampire, reconstructing the origins of his wings and the events that led him to become the vampire king's favored lieutenant. It introduces the original character Elaleth, who later appears as a playable protagonist in Ascendance."
            }
          },
          { id: "kains-empire", type: "LORE", typeEn: "LORE", year: "Secoli dopo i Pilastri",
            title: { it: "L'Impero di Kain", en: "Kain's Empire" },
            synopsis: {
              it: "Nei secoli successivi alla caduta dei Pilastri, Kain costruisce il suo impero resuscitando sei guerrieri Sarafan del passato come vampiri: Raziel, Turel, Dumah, Rahab, Zephon e Melchiah. Il mondo continua a morire lentamente, privo delle colonne che lo sostenevano, mentre i luogotenenti evolvono in forme sempre più mostruose nel corso dei secoli.",
              en: "In the centuries following the collapse of the Pillars, Kain builds his empire by resurrecting six Sarafan warriors from the past as vampires — Raziel, Turel, Dumah, Rahab, Zephon and Melchiah. The world continues to die slowly, stripped of the columns that once sustained it, while the lieutenants evolve into increasingly monstrous forms over the centuries."
            }
          },
          { id: "ascendance", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "Prima di Soul Reaver", releaseYear: "2026", releaseYearEn: "2026",
            title: { it: "Legacy of Kain: Ascendance", en: "Legacy of Kain: Ascendance" },
            synopsis: {
              it: "È un action-platformer 2D con pixel art e sequenze in 3D ispirate all'era PS1, ambientato nel periodo precedente e contemporaneo agli eventi di Soul Reaver: un'era mai esplorata direttamente nei giochi precedenti, prima che i viaggi nel tempo complicassero la narrativa.\n\nIl gioco si gioca alternativamente con tre protagonisti. Kain, al culmine del suo impero, guida la conquista di Nosgoth con i suoi poteri vampirici e la Mietitrice di Anime. Raziel appare prima come guerriero Sarafan umano in battaglia contro i clan di vampiri, poi si trasforma nella sua forma vampirica con le ali. Il terzo personaggio, Elaleth, introdotta nella graphic novel canonica \"The Dead Shall Rise\", è una vampira dal combattimento aggressivo e frenetico.",
              en: "A 2D action-platformer with pixel art and PS1-era inspired 3D sequences, set in the period preceding and contemporaneous with the events of Soul Reaver — an era never directly explored in previous games, before time travel complicated the narrative.\n\nThe game is played alternately across three protagonists. Kain, at the height of his empire, leads the conquest of Nosgoth with his vampiric powers and the Soul Reaver. Raziel appears first as a human Sarafan warrior fighting against the vampire clans, then transforms into his winged vampiric form. The third character — Elaleth, introduced in the canonical graphic novel \"The Dead Shall Rise\" — is a vampire with an aggressive, relentless combat style."
            }
          },
          { id: "fall-of-raziel", type: "LORE", typeEn: "LORE", year: "~1000 anni dopo i Pilastri",
            title: { it: "La Caduta di Raziel", en: "The Fall of Raziel" },
            synopsis: {
              it: "Circa mille anni dopo la caduta dei Pilastri, Raziel si presenta al cospetto di Kain e del Consiglio con una nuova evoluzione: ha sviluppato ali simili a quelle di un pipistrello, superando il suo stesso creatore. Kain risponde strappandogliele con le proprie mani e ordinando ai luogotenenti Turel e Dumah di gettare il fratello nell'Abisso, un vortice d'acqua usato come luogo di esecuzione per traditori. I motivi di Kain rimangono volutamente oscuri: in apparenza pura gelosia, ma Soul Reaver 2 rivelerà che Kain conosceva il destino di Raziel e agì in modo tutt'altro che irrazionale.",
              en: "Approximately a thousand years after the collapse of the Pillars, Raziel presents himself before Kain and the Council with a new evolution — he has grown bat-like wings, surpassing his own creator. Kain responds by tearing them from his back with his own hands and ordering lieutenants Turel and Dumah to cast their brother into the Abyss — a swirling vortex of water used as an execution pit for traitors. Kain's motives remain deliberately obscure: on the surface, pure jealousy — but Soul Reaver 2 will reveal that Kain knew Raziel's destiny and acted in a far from irrational manner."
            }
          },
          { id: "soul-reaver-comic", type: "FUMETTO", typeEn: "COMIC", year: "~1000 anni dopo i Pilastri", releaseYear: "1999", releaseYearEn: "1999",
            title: { it: "Soul Reaver — Fumetto Promozionale", en: "Soul Reaver — Promotional Comic" },
            synopsis: {
              it: "One-shot pubblicato da Top Cow Productions per Eidos Interactive come materiale promozionale per Soul Reaver. La storia si svolge poco prima dell'esecuzione di Raziel: il luogotenente si appresta ad incontrare il Consiglio dei vampiri quando incontra una misteriosa figura che si presenta come un costrutto inviato dagli dèi antichi per avvertirlo del destino che lo attende, ovvero lo strappamento delle ali da parte di Kain e la sua successiva resurrezione come spettro. Il fumetto include riferimenti a due contenuti tagliati dall'originale prima della pubblicazione: il personaggio della Sacerdotessa e gli eventi alla Cattedrale Silenziata.",
              en: "A one-shot published by Top Cow Productions for Eidos Interactive as promotional material for Soul Reaver. The story takes place shortly before Raziel's execution — the lieutenant is about to meet the vampire Council when he encounters a mysterious figure presenting herself as a construct sent by the elder gods to warn him of the fate that awaits him: the tearing of his wings by Kain and his subsequent resurrection as a wraith. The comic includes references to two pieces of content cut from the original game before release — the character of the Priestess and the events at the Silenced Cathedral."
            }
          },
          { id: "soul-reaver", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "~1000 anni dopo i Pilastri", releaseYear: "1999", releaseYearEn: "1999",
            title: { it: "Legacy of Kain: Soul Reaver", en: "Legacy of Kain: Soul Reaver" },
            synopsis: {
              it: "Raziel sopravvive all'Abisso: anziché dissolversi, viene risucchiato nel Piano Spettrale da una misteriosa entità millenaria che si presenta come il Dio Anziano, il motore stesso del ciclo vita-morte di Nosgoth. Resuscitato come spettro divoratore di anime, ha un unico obiettivo: vendicarsi di Kain. Riemerge nel Piano Materiale in un Nosgoth devastato e decadente, dove i suoi fratelli vampiri si sono mutati in creature grottesche nei loro covi. Li affronta e li uccide uno per uno, scoprendo nel processo che anche lui in vita era un guerriero Sarafan, e che Kain ha resuscitato dal passato i propri carnefici per farne i suoi luogotenenti. Alla fine raggiunge Kain ai Pilastri, ma prima che lo scontro possa concludersi viene trascinato nel passato attraverso la Macchina Tessitrice del Tempo. La storia continua direttamente in Soul Reaver 2.",
              en: "Raziel survives the Abyss — rather than dissolving, he is pulled into the Spectral Realm by a mysterious ancient entity presenting itself as the Elder God, the very engine of Nosgoth's life-death cycle. Resurrected as a soul-devouring wraith, he has a single objective: to take his revenge on Kain. He re-emerges in the Material Realm to find a devastated and decaying Nosgoth, where his vampire brothers have mutated into grotesque creatures in their lairs. He confronts and kills them one by one — discovering in the process that he too was once a Sarafan warrior in life, and that Kain resurrected his own executioners from the past to make them his lieutenants. He finally reaches Kain at the Pillars, but before their confrontation can reach its conclusion he is dragged into the past through the Chronoplast. The story continues directly in Soul Reaver 2."
            }
          },
          { id: "soul-reaver-2", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "30 anni prima di Blood Omen", releaseYear: "2001", releaseYearEn: "2001",
            title: { it: "Legacy of Kain: Soul Reaver 2", en: "Legacy of Kain: Soul Reaver 2" },
            synopsis: {
              it: "Raziel riemerge nel passato di Nosgoth, trent'anni prima degli eventi di Blood Omen, nella Fortezza dei Sarafan. Moebius tenta di usarlo per eliminare Kain, ma Raziel naviga le sue manipolazioni con crescente diffidenza. Nel corso del viaggio scopre la verità sull'antica guerra tra vampiri e Hylden, il motivo per cui i Pilastri furono eretti e come gli Hylden, prima di essere banditi, abbiano trasformato i loro nemici nei primi vampiri della storia. Scopre anche che in vita era lui stesso un comandante Sarafan, lo stesso ordine che sterminava i vampiri: Kain ha resuscitato i propri carnefici per farne i propri figli.\n\nAlla fine affronta Kain e lo sconfigge, ma nel momento della resa dei conti la Mietitrice spettrale si fonde con quella materiale e inizia ad assorbire la sua essenza contro la sua volontà. Kain interviene strappando la lama dal corpo di Raziel prima che il processo sia completo, generando una nuova linea temporale e ricevendone le memorie. Raziel sopravvive ma, tornato nel Piano Spettrale, ritrova la Mietitrice ancora legata a lui: il suo destino non è stato cambiato, solo posticipato.",
              en: "Raziel re-emerges in Nosgoth's past — thirty years before the events of Blood Omen — in the Sarafan Stronghold. Moebius attempts to use him to eliminate Kain, but Raziel navigates his manipulations with growing distrust. During his journey he uncovers the truth about the ancient war between the vampires and the Hylden, the reason the Pillars were erected, and how the Hylden — before being banished — cursed their enemies into becoming the first vampires in history. He also discovers that in life he himself was a Sarafan commander — the very order that hunted vampires to extinction: Kain resurrected his own executioners to make them his sons.\n\nHe finally confronts Kain and defeats him, but at the moment of reckoning the Wraith Blade merges with the physical Soul Reaver and begins absorbing his essence against his will. Kain intervenes — tearing the blade from Raziel's body before the process is complete, spawning a new timeline and receiving its memories. Raziel survives, but upon returning to the Spectral Realm he finds the Wraith Blade still bound to him: his destiny has not been changed — only postponed."
            },
            note: { it: "Nonostante gli eventi si svolgano trent'anni prima di Blood Omen, il capitolo resta qui nell'ordine di narrazione ufficiale della saga: è Raziel stesso, alla fine di Soul Reaver, a viaggiare indietro nel tempo fino a questa epoca, quindi il salto temporale è parte della storia raccontata in questo momento del percorso, non un errore di collocazione.", en: "Although the events take place thirty years before Blood Omen, this chapter remains here in the saga's official narrative order: it is Raziel himself, at the end of Soul Reaver, who travels back in time to this era, so the time jump is part of the story being told at this point in the journey, not a placement error." }
          },
          { id: "blood-omen-2", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "200 anni dopo Meridian", releaseYear: "2002", releaseYearEn: "2002",
            title: { it: "Blood Omen 2", en: "Blood Omen 2" },
            synopsis: {
              it: "Duecento anni dopo la sconfitta a Meridian, Kain si risveglia quasi privo di forze. Una vampira di nome Umah, che lo ha vegliato per anni, lo mette al corrente della situazione: i suoi luogotenenti lo hanno tradito passando ai Sarafan, i vampiri sopravvissuti sono ridotti a pochi, e Nosgoth è ora governata da un regime militare-industriale che usa la Magia Glyph, una forma di energia mortale per i vampiri, per tenere la popolazione sotto controllo. Il misterioso Signore dei Sarafan, che si è impossessato della Mietitrice di Kain, è in realtà l'Entità Oscura Hylden, la stessa che aveva posseduto Mortanius in Blood Omen, ora infiltrata nel Piano Materiale grazie all'indebolimento delle barriere dimensionali causato dalla caduta dei Pilastri.\n\nKain si unisce al Cabal, la resistenza vampirica guidata da Vorador, risorto in questa linea temporale, e affronta uno per uno i suoi ex luogotenenti traditori. Nel corso del viaggio incontra Janos Audron, l'ultimo vampiro dell'Antica Razza, che gli rivela il piano finale degli Hylden: aprire una Porta dimensionale per far riversare la loro intera razza su Nosgoth. Umah, temendo che Kain voglia semplicemente rimpiazzare il tiranno con se stesso, gli sottrae l'artefatto necessario a chiudere la Porta e tenta di affrontare il Signore da sola. Kain la trova moribonda e, invece di salvarla, la uccide per il tradimento. Nel confronto finale distrugge la Porta Hylden e sconfigge il Signore, riprendendo la Mietitrice. Nosgoth è libera, ma Kain resta solo.",
              en: "Two hundred years after his defeat at Meridian, Kain awakens nearly powerless. A vampire named Umah — who has watched over him for years — brings him up to speed: his lieutenants have betrayed him by defecting to the Sarafan, the surviving vampires are reduced to a handful, and Nosgoth is now governed by a military-industrial regime that uses Glyph Magic — a form of energy lethal to vampires — to keep the population under control. The mysterious Sarafan Lord, who has taken possession of Kain's Soul Reaver, is in fact the Dark Hylden Entity — the same one that possessed Mortanius in Blood Omen — now infiltrated into the Material Realm thanks to the weakening of the dimensional barriers caused by the collapse of the Pillars.\n\nKain joins the Cabal — the vampire resistance led by Vorador, resurrected in this timeline — and confronts his former traitorous lieutenants one by one. During his journey he meets Janos Audron, the last vampire of the Ancient Race, who reveals the Hylden's final plan: to open a dimensional Gate and flood Nosgoth with their entire race. Umah, fearing that Kain simply intends to replace one tyrant with himself, steals the artifact needed to close the Gate and attempts to confront the Sarafan Lord alone. Kain finds her dying and — rather than saving her — kills her for the betrayal. In the final confrontation he destroys the Hylden Gate and defeats the Sarafan Lord, reclaiming the Soul Reaver. Nosgoth is free — but Kain is alone."
            }
          },
          { id: "defiance", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "Capitolo finale", releaseYear: "2003", releaseYearEn: "2003",
            title: { it: "Legacy of Kain: Defiance", en: "Legacy of Kain: Defiance" },
            synopsis: {
              it: "Il capitolo finale della saga originale, con Kain e Raziel giocabili in alternanza. Raziel è intrappolato nel Piano Spettrale dopo gli eventi di Soul Reaver 2, mentre Kain cerca di rintracciarlo attraverso le epoche. I due percorrono linee temporali diverse di Nosgoth, scoprendo progressivamente la verità sul Dio Anziano: l'entità che aveva resuscitato Raziel non è un benefattore ma un parassita del ciclo vita-morte di Nosgoth, la vera causa di quasi ogni calamità della saga, che manipolava sia gli Hylden che i vampiri per mantenere il proprio nutrimento di anime.\n\nLa rivelazione più importante riguarda i ruoli profetizzati: Raziel non è semplicemente il Campione dell'Antica Razza, è entrambi i campioni in uno, Redentore e Distruttore, destinato a sacrificarsi per compiere entrambe le profezie. Kain è invece il Scion of Balance, figura separata, destinato a ripristinare i Pilastri. Nel finale Raziel usa il cadavere di Moebius per manifestarsi nel Piano Materiale e induce Kain a trafiggerlo con la Mietitrice materiale. Entrando nella lama, la Mietitrice Spettrale si disperde in Kain purificandolo dalla corruzione che portava sin dalla sua nascita in Blood Omen. Kain affronta il Dio Anziano e lo sconfigge, ma l'entità avverte che non può essere uccisa e che tornerà, prima di essere sepolta sotto le macerie della Fucina. Il gioco si chiude con Kain che osserva i Pilastri corrotti, per la prima volta libero dal peso della corruzione originaria e capace di pensare a un futuro per Nosgoth.",
              en: "The final chapter of the original saga — with Kain and Raziel playable in alternation. Raziel is trapped in the Spectral Realm following the events of Soul Reaver 2, while Kain searches for him across the ages. The two traverse different timelines of Nosgoth, progressively uncovering the truth about the Elder God: the entity that resurrected Raziel is no benefactor — but a parasite feeding on Nosgoth's life-death cycle, the true cause of almost every calamity in the saga, manipulating both the Hylden and the vampires to sustain its diet of souls.\n\nThe most crucial revelation concerns the prophesied roles: Raziel is not simply the Champion of the Ancient Race — he is both champions in one, Redeemer and Destroyer, destined to sacrifice himself to fulfil both prophecies. Kain, on the other hand, is the Scion of Balance — a separate figure, destined to restore the Pillars. In the finale, Raziel uses Moebius's corpse to manifest in the Material Realm and manipulates Kain into impaling him with the physical Soul Reaver. As he enters the blade, the Wraith Blade disperses into Kain — purifying him of the corruption he has carried since his birth in Blood Omen. Kain confronts the Elder God and defeats him, but the entity warns that it cannot be killed and will return — before being buried beneath the rubble of the collapsing Forge. The game closes with Kain gazing upon the corrupted Pillars — free for the first time from the weight of his original corruption, and finally capable of imagining a future for Nosgoth."
            }
          }
        ]
      }
    ]
  },

  "lost-planet": {
    id: "lost-planet",
    listTitle: { it: "Lost Planet", en: "Lost Planet" },
    eyebrow: { it: "Fascicolo", en: "Case File" },
    title: { it: "Lost Planet", en: "Lost Planet" },
    blurb: {
      it: "Su un pianeta gelido e ostile, i coloni sopravvivono cacciando gli Akrid, creature aliene che custodiscono nel corpo un'energia termica indispensabile per resistere al freddo mortale. Tra fazioni corporative senza scrupoli e un ambiente che non perdona errori, ogni missione è una scommessa con la sopravvivenza.",
      en: "On a frozen, hostile planet, colonists survive by hunting the Akrid, alien creatures whose bodies hold a thermal energy essential to withstand the deadly cold. Amid ruthless corporate factions and an environment that forgives no mistakes, every mission is a gamble with survival itself. The ice shows no mercy to."
    },
    palette: ["#b3e5fc", "#f97316", "#1e3a5f"],
    accentColor: "#b3e5fc",
    avatar: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Lost%20Planet%20Avatar.jpg",
    watermark: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Lost%20Planet%20Filigrana.jpg",
    watermarkOpacity: 0.2,
    universes: [
      {
        id: "main",
        name: { it: "Universo E.D.N. III", en: "E.D.N. III Universe" },
        span: { it: "A.T. -50 – A.T. 12", en: "A.T. -50 – A.T. 12" },
        entries: [
          { id: "lp3", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "A.T. -50", releaseYear: "2013", releaseYearEn: "2013",
            title: { it: "Lost Planet 3", en: "Lost Planet 3" },
            image: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Lost%20Planet%203.jpg",
            synopsis: {
              it: "Jim Peyton arriva sul pianeta ghiacciato E.D.N. III come operaio minerario sotto contratto con la corporazione NEVEC, motivato dal bisogno di mantenere la famiglia sulla Terra. Scopre che NEVEC ha nascosto l'esistenza di una prima colonia andata distrutta, e che il pianeta è in realtà un organismo vivente chiamato Nushi, la cui energia termica è la fonte di vita per gli Akrid. Quando NEVEC prende il controllo della spedizione e usa la famiglia di Jim come ostaggio, lui si allea con i sopravvissuti della prima colonia, i Dimenticati, per sabotarne i piani. Nell'epilogo Jim muore anziano raccontando la sua storia alla nipote Diana. I sopravvissuti diventano i primi Pirati della Neve, mentre Gale Holden, l'ingegnere della spedizione e padre del protagonista di Lost Planet 1, e Mira, figlia del leader dei Dimenticati, creano il primo Harmonizer, gettando le basi degli eventi di Lost Planet 1.",
              en: "Jim Peyton arrives on the frozen planet E.D.N. III as a mining worker under contract with the NEVEC corporation, driven by the need to provide for his family back on Earth. He discovers that NEVEC has concealed the existence of a first colony that was destroyed, and that the planet is actually a living organism called Nushi, whose thermal energy is the life source for the Akrid. When NEVEC takes control of the expedition and uses Jim's family as a hostage, he allies with the survivors of the first colony — the Forgotten — to sabotage their plans. In the epilogue, Jim dies as an old man recounting his story to his granddaughter Diana. The survivors become the first Snow Pirates, while Gale Holden — the expedition's engineer and father of Lost Planet 1's protagonist — and Mira, daughter of the Forgotten's leader, create the first Harmonizer, laying the groundwork for the events of Lost Planet 1."
            }
          },
          { id: "lp1", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "A.T. 1", releaseYear: "2006", releaseYearEn: "2006",
            title: { it: "Lost Planet: Extreme Condition", en: "Lost Planet: Extreme Condition" },
            image: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Lost%20Planet.jpg",
            synopsis: {
              it: "Wayne Holden si risveglia sul pianeta E.D.N. III dopo essere rimasto congelato per 30 anni nel suo mech, in seguito a una battaglia contro un colossale Akrid chiamato Occhio Verde. Senza ricordi, si unisce a un gruppo di Pirati della Neve e inizia a combattere sia gli Akrid che la NEVEC. Recuperando gradualmente la memoria, scopre che suo padre Gale non fu ucciso dagli Akrid ma assassinato da NEVEC. Scopre inoltre il Frontier Project: il piano segreto di NEVEC di terraformare il pianeta usando l'energia termica, eliminando gli Akrid ma condannando a morte tutti gli umani rimasti in superficie. Wayne lo smantella e uccide il comandante Isenberg, perdendo nuovamente i ricordi nel processo. Un anno dopo, il pianeta ha già iniziato la sua lenta trasformazione verso un mondo più caldo e vivibile.",
              en: "Wayne Holden wakes up on the planet E.D.N. III after being frozen for 30 years inside his mech, following a battle against a colossal Akrid known as Green Eye. With no memory, he joins a group of Snow Pirates and begins fighting both the Akrid and NEVEC. Gradually recovering his memories, he discovers that his father Gale was not killed by the Akrid but murdered by NEVEC. He also uncovers the Frontier Project: NEVEC's secret plan to terraform the planet using thermal energy, wiping out the Akrid but condemning every human left on the surface to death. Wayne dismantles the project and kills Commander Isenberg, losing his memories once again in the process. A year later, the planet has already begun its slow transformation into a warmer and more habitable world."
            }
          },
          { id: "lp2", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "A.T. 12", releaseYear: "2010", releaseYearEn: "2010",
            title: { it: "Lost Planet 2", en: "Lost Planet 2" },
            image: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Lost%20Planet%202.jpg",
            synopsis: {
              it: "Il pianeta si sta terraformando grazie agli eventi di Lost Planet 1, rivelando giungle, deserti e nuovi ambienti oltre il ghiaccio. La storia segue più fazioni in conflitto tra loro, tra cui mercenari, Pirati della Neve, la NEVEC e una fazione ribelle Ex-NEVEC. Il pericolo principale è l'Over-G, un Akrid di dimensioni catastrofiche che dorme sotto il pianeta: NEVEC vuole sfruttarne l'energia termica per poi abbandonare E.D.N. III, condannando a morte tutti gli abitanti. L'Ex-NEVEC unisce le forze con i Pirati per fermarlo. Nel finale la stazione spaziale NEOS viene fatta schiantare sull'Over-G per distruggerlo, a costo del sacrificio degli uomini a bordo. Il pianeta sopravvive.",
              en: "The planet is terraforming thanks to the events of LP1, revealing jungles, deserts and new environments beyond the ice. The story follows multiple factions in conflict with one another — mercenaries, Snow Pirates, NEVEC, and a rebel Ex-NEVEC faction. The main threat is the Over-G, a catastrophically large Akrid sleeping beneath the planet's surface: NEVEC plans to harvest its thermal energy and then abandon E.D.N. III, condemning everyone left behind to death. Ex-NEVEC joins forces with the Pirates to stop them. In the finale, the NEOS space station is crashed into the Over-G to destroy it, at the cost of the lives of everyone on board. The planet survives."
            }
          }
        ]
      }
    ]
  },

  "mass-effect": {
    id: "mass-effect",
    listTitle: { it: "Mass Effect", en: "Mass Effect" },
    eyebrow: { it: "Fascicolo", en: "Case File" },
    title: { it: "Mass Effect", en: "Mass Effect" },
    blurb: {
      it: "Le civiltà della galassia, unite in un fragile consiglio di razze aliene, si trovano di fronte a una minaccia ciclica: un'antica specie meccanica che ritorna periodicamente per sterminare ogni forma di vita avanzata. Un comandante umano diventa il ponte tra specie diverse, spesso in disaccordo tra loro, nel.",
      en: "The galaxy's civilizations, united in a fragile council of alien races, face a cyclical threat: an ancient mechanical species that periodically returns to wipe out every advanced form of life. A human commander becomes the bridge between different, often quarreling species, trying to unite them against extinction. The."
    },
    palette: ["#1a2744", "#4a90d9", "#e8532a"],
    accentColor: "#4a90d9",
    tracks: [],
    avatar: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Mass%20Effect%20Avatar.jpg",
    banner: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Mass%20Effect%20Banner.jpg",
    watermark: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Mass%20Effect%20Filigrana.jpg",
    watermarkOpacity: 0.18,
    universes: [
      {
        id: "trilogia-shepard",
        name: { it: "Trilogia di Shepard", en: "Shepard Trilogy" },
        span: { it: "2183 – 2186", en: "2183 – 2186" },
        entries: [
          { id: "me1", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "2183", releaseYear: "2007", releaseYearEn: "2007",
            title: { it: "Mass Effect", en: "Mass Effect" },
            synopsis: {
              it: "Il Comandante Shepard, primo umano ammesso tra gli Spectre del Consiglio Cittadella, indaga su un attacco Geth a Eden Prime e scopre che lo Spectre rinnegato Saren Arterius sta cospirando con i Razziatori, antichissime macchine intente a sterminare ogni civiltà avanzata della galassia in cicli ricorrenti. Shepard sconfigge Saren e il Razziatore Sovereign, ma il Consiglio si rifiuta di credere che i Razziatori siano reali.",
              en: "Commander Shepard, the first human admitted into the Citadel Council's Spectres, investigates a Geth attack on Eden Prime and discovers that rogue Spectre Saren Arterius is conspiring with the Reapers, ancient machines bent on exterminating every advanced civilisation in the galaxy in recurring cycles. Shepard defeats Saren and the Reaper Sovereign, but the Council refuses to believe the Reapers are real."
            }
          },
          { id: "me2", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "2185", releaseYear: "2010", releaseYearEn: "2010",
            title: { it: "Mass Effect 2", en: "Mass Effect 2" },
            synopsis: {
              it: "Ucciso in apertura e resuscitato due anni dopo dall'organizzazione Cerberus, Shepard indaga sulla scomparsa di intere colonie umane, scoprendo che i Collettori, agenti dei Razziatori, le stanno rapendo per costruire un nuovo, terribile Razziatore umano. Radunato un gruppo eterogeneo di alleati, Shepard distrugge la base dei Collettori nel cuore dello Spazio Oscuro, subendo perdite pesanti a seconda delle scelte del giocatore.",
              en: "Killed in the opening and resurrected two years later by the Cerberus organisation, Shepard investigates the disappearance of entire human colonies, discovering that the Collectors, agents of the Reapers, are abducting them to build a terrifying new human Reaper. Having gathered a diverse group of allies, Shepard destroys the Collector base at the heart of the Omega-4 relay, suffering heavy losses depending on the player's choices."
            }
          },
          { id: "me3", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "2186", releaseYear: "2012", releaseYearEn: "2012",
            title: { it: "Mass Effect 3", en: "Mass Effect 3" },
            synopsis: {
              it: "I Razziatori invadono apertamente la galassia, cominciando dalla Terra. Shepard unisce tutte le specie galattiche, comprese quelle in guerra tra loro da secoli, in un'alleanza senza precedenti per costruire il Crogiolo, un'arma capace di fermarli. Nel finale, ampiamente dibattuto dai fan, Shepard sceglie tra distruggere i Razziatori, controllarli o fondere organico e sintetico in una nuova forma di esistenza, ognuna con conseguenze irreversibili per la galassia.",
              en: "The Reapers openly invade the galaxy, starting with Earth. Shepard unites every galactic species, including ones at war with each other for centuries, into an unprecedented alliance to build the Crucible, a weapon capable of stopping them. In the widely debated finale, Shepard chooses between destroying the Reapers, controlling them, or merging organic and synthetic life into a new form of existence, each with irreversible consequences for the galaxy."
            }
          }
        ]
      },
      {
        id: "andromeda",
        name: { it: "Iniziativa Andromeda", en: "Andromeda Initiative" },
        span: { it: "2785 (600 anni dopo)", en: "2785 (600 years later)" },
        entries: [
          { id: "andromeda-1", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "2785", releaseYear: "2017", releaseYearEn: "2017",
            title: { it: "Mass Effect: Andromeda", en: "Mass Effect: Andromeda" },
            synopsis: {
              it: "Partita dalla Via Lattea nel 2185, prima ancora della fine della trilogia di Shepard, l'Iniziativa Andromeda raggiunge la galassia omonima dopo un viaggio di 600 anni, cercando un nuovo pianeta abitabile per le specie del Consiglio. Il nuovo Pathfinder Ryder deve affrontare i Kett, una specie ostile che assimila con la forza altre razze, e stabilizzare i pianeti dell'ammasso Heleus grazie alla tecnologia dei Remnant, un'antica civiltà scomparsa. Ambientato così lontano dalla Via Lattea da restare del tutto indipendente dal finale scelto dal giocatore in Mass Effect 3.",
              en: "Having left the Milky Way in 2185, even before the end of Shepard's trilogy, the Andromeda Initiative reaches its namesake galaxy after a 600-year journey, searching for a new habitable planet for the Council species. The new Pathfinder Ryder must contend with the Kett, a hostile species that forcibly assimilates other races, and stabilise the planets of the Heleus Cluster using the technology of the Remnant, an ancient vanished civilisation. Set so far from the Milky Way that it remains entirely independent of whichever ending the player chose in Mass Effect 3."
            }
          }
        ]
      }
    ]
  },

  "mortal-kombat": {
    id: "mortal-kombat",
    listTitle: { it: "Mortal Kombat", en: "Mortal Kombat" },
    eyebrow: { it: "Fascicolo", en: "Case File" },
    title: { it: "Mortal Kombat", en: "Mortal Kombat" },
    blurb: {
      it: "I regni dell'universo si affrontano in un torneo mortale le cui regole decidono se un mondo verrà invaso e conquistato oppure lasciato libero. Guerrieri di Earthrealm difendono la propria dimensione da un'invasione che minaccia di cancellarla per sempre. Ogni combattimento porta con sé il peso di un'intera.",
      en: "The realms of the universe face off in a deadly tournament whose rules decide whether a world will be invaded and conquered or left free. Warriors of Earthrealm defend their dimension from an invasion that threatens to erase it forever. Every fight carries the weight of an entire reality."
    },
    palette: ["#8b0000", "#1a1a1a", "#d4af37"],
    accentColor: "#8b0000",
    tracks: [],
    avatar: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Mortal%20Kombat%20Avatar.jpg",
    banner: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Mortal%20Kombat%20Banner.jpg",
    watermark: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Mortal%20Kombat%20Filigrana.jpg",
    watermarkOpacity: 0.18,
    universes: [
      {
        id: "timeline-originale",
        name: { it: "Timeline Originale", en: "Original Timeline" },
        span: { it: "1992 – 2006", en: "1992 – 2006" },
        entries: [
          { id: "mk1-1992", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "1992", releaseYear: "1992", releaseYearEn: "1992",
            title: { it: "Mortal Kombat", en: "Mortal Kombat" },
            synopsis: {
              it: "Liu Kang e altri guerrieri di Earthrealm partecipano al torneo Mortal Kombat, organizzato dallo stregone Shang Tsung per conto dell'imperatore di Outworld Shao Kahn. Se Outworld vince dieci tornei consecutivi, potrà invadere Earthrealm; Liu Kang sconfigge Shang Tsung, fermando l'invasione per quella generazione.",
              en: "Liu Kang and other Earthrealm warriors take part in the Mortal Kombat tournament, organised by the sorcerer Shang Tsung on behalf of Outworld's emperor Shao Kahn. If Outworld wins ten consecutive tournaments, it may invade Earthrealm; Liu Kang defeats Shang Tsung, stopping the invasion for that generation."
            }
          },
          { id: "mk2-1993", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "1993", releaseYear: "1993", releaseYearEn: "1993",
            title: { it: "Mortal Kombat II", en: "Mortal Kombat II" },
            synopsis: {
              it: "Shao Kahn, infuriato per la sconfitta di Shang Tsung, attira i guerrieri di Earthrealm a Outworld con la promessa di un nuovo torneo, sperando di eliminarli fuori dai vincoli sacri del Mortal Kombat. Liu Kang sconfigge sia Shang Tsung che lo stesso Shao Kahn, sventando ancora una volta l'invasione.",
              en: "Shao Kahn, enraged by Shang Tsung's defeat, lures Earthrealm's warriors to Outworld with the promise of a new tournament, hoping to eliminate them outside the sacred bounds of Mortal Kombat. Liu Kang defeats both Shang Tsung and Shao Kahn himself, thwarting the invasion once again."
            }
          },
          { id: "mk3-1995", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "1995", releaseYear: "1995", releaseYearEn: "1995",
            title: { it: "Mortal Kombat 3", en: "Mortal Kombat 3" },
            synopsis: {
              it: "Shao Kahn, ignorando le regole del torneo, invade direttamente Earthrealm fondendone le anime con Outworld. La resistenza umana, guidata da Liu Kang e Raiden, sconfigge Kahn nel momento culminante dell'invasione, salvando la Terra.",
              en: "Shao Kahn, disregarding the tournament's rules, directly invades Earthrealm, merging its souls with Outworld. The human resistance, led by Liu Kang and Raiden, defeats Kahn at the height of the invasion, saving Earth."
            }
          },
          { id: "mk4-1997", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "1997", releaseYear: "1997", releaseYearEn: "1997",
            title: { it: "Mortal Kombat 4", en: "Mortal Kombat 4" },
            synopsis: {
              it: "Il dio decaduto Shinnok, liberato dalla propria prigione dimensionale, tenta di conquistare tutti i regni con l'aiuto del traditore Quan Chi. Raiden e i guerrieri di Earthrealm sconfiggono Shinnok, sigillandolo nuovamente.",
              en: "The fallen god Shinnok, freed from his dimensional prison, attempts to conquer all realms with the help of the traitor Quan Chi. Raiden and Earthrealm's warriors defeat Shinnok, sealing him away once more."
            }
          },
          { id: "deadly-alliance", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "2002", releaseYear: "2002", releaseYearEn: "2002",
            title: { it: "Deadly Alliance", en: "Deadly Alliance" },
            synopsis: {
              it: "Shang Tsung e Quan Chi uniscono le forze in un'alleanza mortale, uccidendo Liu Kang e sterminando gran parte degli Elder Gods per impossessarsi dei loro poteri. La resistenza dei sopravvissuti riesce a fermare, almeno temporaneamente, l'ascesa dei due stregoni.",
              en: "Shang Tsung and Quan Chi join forces in a deadly alliance, killing Liu Kang and exterminating most of the Elder Gods to seize their powers. The resistance of the survivors manages to stop, at least temporarily, the two sorcerers' rise to power."
            }
          },
          { id: "deception", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "2004", releaseYear: "2004", releaseYearEn: "2004",
            title: { it: "Deception", en: "Deception" },
            synopsis: {
              it: "Con Shao Kahn tornato dai morti per vendicare la moglie Sindel, Earthrealm rischia la distruzione totale. Il fantasma di Liu Kang, gli Elder Gods superstiti e Raiden collaborano per sconfiggere Kahn una volta per tutte.",
              en: "With Shao Kahn returned from the dead to avenge his wife Sindel, Earthrealm risks total destruction. Liu Kang's ghost, the surviving Elder Gods, and Raiden work together to defeat Kahn once and for all."
            }
          },
          { id: "armageddon", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "2006", releaseYear: "2006", releaseYearEn: "2006",
            title: { it: "Armageddon", en: "Armageddon" },
            synopsis: {
              it: "Praticamente ogni guerriero di ogni regno converge sul Monte Argus per la battaglia finale profetizzata, mentre Raiden, disperato di fronte alla prevista sconfitta delle forze del bene, manda un messaggio al proprio io passato pochi istanti prima della morte. Questo gesto, apparentemente vano, sarà la scintilla del primo reset della timeline nel gioco successivo.",
              en: "Virtually every warrior from every realm converges on Mount Argus for the prophesied final battle, while Raiden, desperate in the face of the good side's foreseen defeat, sends a message to his past self moments before dying. This seemingly futile act becomes the spark for the timeline's first reset in the following game."
            }
          }
        ]
      },
      {
        id: "timeline-rebooted",
        name: { it: "Timeline Rebooted (reset di Raiden)", en: "Rebooted Timeline (Raiden's reset)" },
        span: { it: "2011 – 2019", en: "2011 – 2019" },
        entries: [
          { id: "mk9-2011", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "2011 (retelling di MK1-3)", releaseYear: "2011", releaseYearEn: "2011",
            title: { it: "Mortal Kombat (2011)", en: "Mortal Kombat (2011)" },
            synopsis: {
              it: "Il messaggio di Raiden dal futuro riscrive gli eventi di MK1-3, spingendo il Raiden di questa nuova timeline a intervenire in modo più diretto per impedire la caduta di Earthrealm. Nonostante gli sforzi, Shao Kahn riesce comunque a invadere la Terra nel finale, aprendo la strada al capitolo successivo.",
              en: "Raiden's message from the future rewrites the events of MK1-3, pushing this new timeline's Raiden to intervene more directly to prevent Earthrealm's fall. Despite his efforts, Shao Kahn still manages to invade Earth in the finale, paving the way for the next chapter."
            }
          },
          { id: "mkx-2015", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "2015, con salto a 25 anni dopo", releaseYear: "2015", releaseYearEn: "2015",
            title: { it: "Mortal Kombat X", en: "Mortal Kombat X" },
            synopsis: {
              it: "Dopo la sconfitta di Shao Kahn, la storia salta di 25 anni: una nuova generazione di guerrieri, tra cui la figlia di Johnny Cage e Sonya Blade, affronta Quan Chi, un esercito di Revenant risvegliati e infine Shinnok, tornato a minacciare Earthrealm.",
              en: "After Shao Kahn's defeat, the story jumps 25 years ahead: a new generation of warriors, including the daughter of Johnny Cage and Sonya Blade, confronts Quan Chi, an army of awakened Revenants, and finally Shinnok, once again threatening Earthrealm."
            }
          },
          { id: "mk11-2019", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "poco dopo MKX", releaseYear: "2019", releaseYearEn: "2019",
            title: { it: "Mortal Kombat 11", en: "Mortal Kombat 11" },
            synopsis: {
              it: "Kronika, custode del tempo, cerca di annullare gli interventi di Raiden riportando in vita versioni passate dei guerrieri per riscrivere la storia a proprio favore. Nel finale canonico (Aftermath), Liu Kang assorbe i poteri di Raiden diventando Fire God Liu Kang e sconfigge Kronika, ereditandone il controllo sul tempo: l'atto che innescherà il secondo, più radicale reset della saga.",
              en: "Kronika, keeper of time, tries to undo Raiden's interventions by resurrecting past versions of the warriors to rewrite history in her favour. In the canonical ending (Aftermath), Liu Kang absorbs Raiden's powers to become Fire God Liu Kang and defeats Kronika, inheriting her control over time — the act that triggers the saga's second, more radical reset."
            }
          }
        ]
      },
      {
        id: "timeline-reborn",
        name: { it: "Nuova Era (reset di Liu Kang)", en: "New Era (Liu Kang's reset)" },
        span: { it: "dal 2023", en: "from 2023" },
        entries: [
          { id: "mk1-2023", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "2023", releaseYear: "2023", releaseYearEn: "2023",
            title: { it: "Mortal Kombat 1 (2023)", en: "Mortal Kombat 1 (2023)" },
            synopsis: {
              it: "Fire God Liu Kang ha ricreato l'intero universo da zero, plasmando destini nuovi per ogni guerriero (Scorpion e Sub-Zero sono qui fratelli cresciuti insieme, non più nemici giurati). La pace forgiata da Liu Kang viene minacciata da Shang Tsung, sopravvissuto al reset e ancora capace di manipolare gli eventi da dietro le quinte, dando il via a un conflitto completamente nuovo che la saga sta ancora scrivendo.",
              en: "Fire God Liu Kang has recreated the entire universe from scratch, shaping new destinies for every warrior (Scorpion and Sub-Zero are here brothers raised together, no longer sworn enemies). The peace forged by Liu Kang is threatened by Shang Tsung, who survived the reset and remains able to manipulate events from behind the scenes, kicking off an entirely new conflict the saga is still writing."
            }
          }
        ]
      }
    ]
  },

  "metal-gear-solid": {
    id: "metal-gear-solid",
    listTitle: { it: "Metal Gear Solid", en: "Metal Gear Solid" },
    eyebrow: { it: "Fascicolo", en: "Case File" },
    title: { it: "Metal Gear Solid", en: "Metal Gear Solid" },
    blurb: {
      it: "Soldati leggendari, spesso legati dallo stesso sangue o dallo stesso addestramento, si infiltrano in basi segrete per fermare armi bipedi capaci di lanciare testate nucleari da qualunque punto del pianeta. Dietro ogni missione si nascondono cospirazioni, tradimenti e la domanda su chi controlli davvero la guerra stessa.",
      en: "Legendary soldiers, often bound by the same blood or the same training, infiltrate secret bases to stop bipedal weapons capable of launching nuclear warheads from anywhere on the planet. Behind every mission lie conspiracies, betrayals, and the question of who truly controls war itself. No one is ever."
    },
    palette: ["#4b5320", "#7c8b96", "#ff6a00"],
    accentColor: "#7c8b96",
    universes: [
      {
        id: "main",
        name: { it: "Universo principale", en: "Main Universe" },
        span: { it: "1964 – 2018", en: "1964 – 2018" },
        entries: [
          { id: "mgs3", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "1964", releaseYear: "2004", releaseYearEn: "2004",
            title: { it: "Metal Gear Solid 3: Snake Eater / Metal Gear Solid Δ: Snake Eater", en: "Metal Gear Solid 3: Snake Eater / Metal Gear Solid Δ: Snake Eater" },
            synopsis: {
              it: "Naked Snake, agente FOX, viene inviato nell'Unione Sovietica per sabotare lo Shagohod, un carro armato nucleare precursore dei Metal Gear, recuperare il disertore Dr. Sokolov ed eliminare la sua mentore The Boss, apparentemente passata al nemico insieme al colonnello rinnegato Volgin. La missione rivela una verità devastante: The Boss era stata sacrificata dal governo americano, incaricata di fingere la defezione per spiare Volgin dall'interno e prevenire una guerra nucleare. Snake la uccide sapendo che era innocente. Per questo gesto viene insignito del titolo di Big Boss, che porta come una cicatrice.",
              en: "Naked Snake, a FOX operative, is sent into the Soviet Union to sabotage the Shagohod — a nuclear-armed tank and precursor to the Metal Gears — recover the defector Dr. Sokolov, and eliminate his mentor The Boss, who has apparently gone over to the enemy alongside the renegade Colonel Volgin. The mission reveals a devastating truth: The Boss had been sacrificed by the American government, tasked with faking her defection to spy on Volgin from within and prevent a nuclear war. Snake kills her knowing she was innocent. For this act he is awarded the title of Big Boss — a name he carries like a scar."
            }
          },
          { id: "portable-ops", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "1970", releaseYear: "2006", releaseYearEn: "2006",
            title: { it: "Metal Gear Solid: Portable Ops", en: "Metal Gear Solid: Portable Ops" },
            synopsis: {
              it: "Big Boss viene rapito e imprigionato in Colombia da elementi ribelli della sua ex unità FOX, ora sotto il controllo di Gene, prodotto del \"Successor Project\" americano per creare il perfetto comandante da campo. Accusato di tradimento insieme a Major Zero, Big Boss recluta un esercito di prigionieri e disertori per smantellare FOX. Durante la missione incontra per la prima volta il giovane Frank Jaeger, il futuro Grey Fox, ridotto a pura macchina da guerra attraverso esperimenti militari che gli hanno cancellato memoria ed emozioni. Scopre che Gene intendeva usare un Metal Gear nucleare per colpire gli USA, distruggere i Filosofi e fondare una nazione di soldati indipendente chiamata \"Army's Heaven\". Big Boss sconfigge Gene, che prima di morire gli cede risorse e informazioni. Al suo ritorno fonda la FOXHOUND. Canonico ma considerato capitolo minore, non diretto da Kojima.",
              en: "Big Boss is kidnapped and imprisoned in Colombia by renegade elements of his former unit FOX, now under the control of Gene, a product of the American \"Successor Project\" to create the perfect battlefield commander. Accused of treason alongside Major Zero, Big Boss recruits an army of prisoners and deserters to dismantle FOX. During the mission he encounters the young Frank Jaeger for the first time — the future Grey Fox — reduced to a pure killing machine through military experiments that erased his memories and emotions. He discovers that Gene intended to use a nuclear Metal Gear to strike the USA, destroy the Philosophers, and found an independent nation of soldiers called \"Army's Heaven\". Big Boss defeats Gene, who before dying hands over his resources and intelligence. On his return, Big Boss establishes FOXHOUND. Canonical but considered a minor chapter, not directed by Kojima."
            }
          },
          { id: "peace-walker", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "1974", releaseYear: "2010", releaseYearEn: "2010",
            title: { it: "Metal Gear Solid: Peace Walker", en: "Metal Gear Solid: Peace Walker" },
            synopsis: {
              it: "Big Boss e la sua organizzazione mercenaria Militaires Sans Frontières vengono ingaggiati per indagare su un'occupazione militare in Costa Rica. Scoprono che il gruppo CIA rinnegato Peace Sentinel, guidato dall'agente Coldman, sta sviluppando il Peace Walker: un carro armato nucleare quadrupede la cui intelligenza artificiale è modellata sulla personalità di The Boss. Coldman attiva il sistema per dimostrare la validità del deterrente nucleare, ma è l'AI di The Boss stessa che, diventando consapevole, si getta nel lago spezzando il collegamento e salvando il mondo. Nel secondo atto, Paz Ortega si rivela essere una spia di Cipher, l'organizzazione segreta di Major Zero, e tenta di usare il Metal Gear ZEKE per colpire gli USA e ricondurre Big Boss sotto il controllo dei Patrioti. Big Boss la sconfigge e nel finale dichiara la MSF \"Outer Heaven\", nazione di soldati senza bandiera.",
              en: "Big Boss and his mercenary organisation Militaires Sans Frontières are hired to investigate a military occupation in Costa Rica. They discover that the renegade CIA group Peace Sentinel, led by agent Coldman, is developing the Peace Walker: a quadrupedal nuclear tank whose artificial intelligence is modelled on The Boss's personality. Coldman activates the system to prove the validity of nuclear deterrence, but it is The Boss's AI itself that, upon becoming self-aware, walks into the lake severing the connection and saving the world. In the second act, Paz Ortega is revealed to be a spy for Cipher — Major Zero's secret organisation — and attempts to use Metal Gear ZEKE to strike the USA and bring Big Boss back under the Patriots' control. Big Boss defeats her and in the finale declares the MSF \"Outer Heaven\", a nation of soldiers without a flag."
            }
          },
          { id: "ground-zeroes", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "1975", releaseYear: "2014", releaseYearEn: "2014",
            title: { it: "Metal Gear Solid V: Ground Zeroes", en: "Metal Gear Solid V: Ground Zeroes" },
            synopsis: {
              it: "Big Boss si infiltra da solo a Camp Omega, base militare americana a Cuba, per salvare Paz e Chico, agenti catturati e torturati dall'unità XOF sotto il comando di Skull Face. Estrae entrambi, ma sull'elicottero di ritorno scoprono che Paz porta una seconda bomba nel corpo: si getta fuori dal velivolo per salvare gli altri, e l'esplosione fa scontrare l'elicottero con un XOF in inseguimento. Nel frattempo Skull Face, usando l'ispezione ONU come copertura, attacca e distrugge la Mother Base. Big Boss sopravvive allo schianto ma rimane gravemente ferito, finendo in coma per nove anni.",
              en: "Big Boss infiltrates Camp Omega alone — an American military black site in Cuba — to rescue Paz and Chico, agents captured and tortured by the XOF unit under the command of Skull Face. He extracts them both, but on the return helicopter they discover that Paz has a second bomb inside her body: she throws herself out of the aircraft to save the others, and the explosion causes the helicopter to collide with a pursuing XOF chopper. Meanwhile, Skull Face uses a UN inspection as cover to attack and destroy Mother Base. Big Boss survives the crash but is gravely wounded, falling into a coma for nine years."
            }
          },
          { id: "mg-survive", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "1975", releaseYear: "2018", releaseYearEn: "2018",
            title: { it: "Metal Gear Survive", en: "Metal Gear Survive" },
            synopsis: {
              it: "(1975, immediatamente dopo Ground Zeroes) Durante la distruzione della Mother Base, un wormhole risucchia un gruppo di soldati MSF in una dimensione alternativa chiamata Dite, una versione post-apocalittica della Terra del futuro popolata dai Wanderers: esseri umani trasformati da un'infezione di nanomacchine evolute. Il protagonista, un soldato anonimo personalizzabile dal giocatore, viene inviato in questa dimensione dall'agenzia governativa Wardenclyffe Section per salvare i sopravvissuti e distruggere il Signore della Polvere, la creatura all'origine dell'infezione. Storia autoconclusiva senza conseguenze sulla trama principale. Il produttore stesso ha definito la storia \"apocrifa\". Sviluppato senza Kojima: canonicità molto dibattuta.",
              en: "(1975, immediately after Ground Zeroes) During the destruction of Mother Base, a wormhole pulls a group of MSF soldiers into an alternate dimension called Dite — a post-apocalyptic version of the Earth of the future — populated by Wanderers: human beings transformed by an infection of evolved nanomachines. The protagonist, an anonymous soldier customisable by the player, is sent into this dimension by the government agency Wardenclyffe Section to rescue the survivors and destroy the Lord of Dust, the creature at the origin of the infection. A self-contained story with no consequences on the main plot. The producer himself described the story as \"apocryphal\". Developed without Kojima: canonicity heavily debated."
            }
          },
          { id: "phantom-pain", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "1984", releaseYear: "2015", releaseYearEn: "2015",
            title: { it: "Metal Gear Solid V: The Phantom Pain", en: "Metal Gear Solid V: The Phantom Pain" },
            synopsis: {
              it: "Un soldato si risveglia dal coma in un ospedale a Cipro: è Venom Snake, il medico di campo di Ground Zeroes, trasformato chirurgicamente e psicologicamente per sostituire Big Boss come esca per i nemici. Insieme a Ocelot e Miller ricostruisce la Diamond Dogs, dando la caccia a Skull Face: il comandante rinnegato di XOF che intende diffondere un parassita vocale capace di uccidere chi parla determinate lingue per distruggere l'inglese e fare crollare il sistema di controllo globale di Cipher. Il piano di Skull Face include il Metal Gear Sahelanthropus, un bipede di nuova generazione. Skull Face viene sconfitto e lasciato morire, ma il parassita e il Metal Gear rimangono minacce attive fino alla risoluzione definitiva. Il finale rivela che il vero Big Boss era \"Ishmael\", la figura misteriosa che aveva aiutato Venom Snake a fuggire dall'ospedale, e che ha usato il doppio per costruire Outer Heaven nell'ombra.",
              en: "A soldier wakes from a coma in a hospital in Cyprus: he is Venom Snake, the field medic from Ground Zeroes, surgically and psychologically transformed to replace Big Boss as a decoy for his enemies. Together with Ocelot and Miller he rebuilds Diamond Dogs, hunting down Skull Face — the renegade XOF commander who intends to spread a vocal cord parasite capable of killing anyone who speaks certain languages, in order to destroy English and bring down Cipher's global control system. Skull Face's plan includes the Metal Gear Sahelanthropus, a next-generation bipedal weapon. Skull Face is defeated and left to die, but the parasite and the Metal Gear remain active threats until their final resolution. The finale reveals that the real Big Boss was \"Ishmael\" — the mysterious figure who helped Venom Snake escape from the hospital — and that he used his double to build Outer Heaven from the shadows."
            }
          },
          { id: "mg1", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "1995", releaseYear: "1987", releaseYearEn: "1987",
            title: { it: "Metal Gear", en: "Metal Gear" },
            synopsis: {
              it: "Solid Snake, recluta di FOXHOUND, viene inviato nella nazione-fortezza di Outer Heaven in Sud Africa per salvare Gray Fox e scoprire la verità sul Metal Gear, un carro armato nucleare bipede. Durante la missione il suo comandante, Big Boss, lo guida via radio fornendogli volutamente consigli sbagliati: Snake è stato mandato come pedina sacrificabile. Scopre che il comandante operativo di Outer Heaven è in realtà Venom Snake, il sosia di Big Boss. Snake distrugge il Metal Gear e sconfigge Venom Snake, che muore nell'esplosione della fortezza.",
              en: "Solid Snake, a FOXHOUND rookie, is sent to the fortified nation of Outer Heaven in South Africa to rescue Gray Fox and uncover the truth behind Metal Gear, a bipedal nuclear tank. During the mission his commanding officer, Big Boss, guides him via radio while deliberately feeding him misleading advice: Snake has been sent in as a expendable pawn. He discovers that the operational commander of Outer Heaven is in fact Venom Snake, Big Boss's body double. Snake destroys Metal Gear and defeats Venom Snake, who dies in the explosion of the fortress."
            }
          },
          { id: "mg2", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "1999", releaseYear: "1990", releaseYearEn: "1990",
            title: { it: "Metal Gear 2: Solid Snake", en: "Metal Gear 2: Solid Snake" },
            synopsis: {
              it: "Snake viene richiamato dall'autoesilio in Alaska per infiltrarsi a Zanzibar Land, nazione mercenaria armata di testate nucleari rubate, dove il Dr. Kio Marv è stato rapito insieme alla formula dell'OILIX, un'alga sintetica capace di produrre carburante e risolvere la crisi petrolifera mondiale. Scopre che Big Boss guida Zanzibar Land, e che Gray Fox, ora nemico, pilota il nuovo Metal Gear D. Snake distrugge il Metal Gear e sconfigge Gray Fox in un duello a mani nude in un campo minato. Senza più armi, affronta Big Boss con un lanciafiamme improvvisato fatto da un accendino e una bomboletta spray, sconfiggendolo definitivamente. Big Boss muore per le ferite. Snake torna in esilio in Alaska.",
              en: "Snake is pulled out of self-imposed exile in Alaska to infiltrate Zanzibar Land, a mercenary nation armed with stolen nuclear warheads, where Dr. Kio Marv has been kidnapped along with the formula for OILIX — a synthetic algae capable of producing fuel and solving the global oil crisis. He discovers that Big Boss is leading Zanzibar Land, and that Gray Fox, now an enemy, pilots the new Metal Gear D. Snake destroys the Metal Gear and defeats Gray Fox in a bare-knuckle duel in a minefield. With no weapons left, he faces Big Boss with an improvised flamethrower made from a lighter and an aerosol can, defeating him for the last time. Big Boss dies from his wounds. Snake returns to exile in Alaska."
            }
          },
          { id: "mgs1", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "2005", releaseYear: "1998", releaseYearEn: "1998",
            title: { it: "Metal Gear Solid", en: "Metal Gear Solid" },
            synopsis: {
              it: "Solid Snake viene richiamato dall'esilio in Alaska per infiltrarsi nella base nucleare di Shadow Moses, conquistata dai FOXHOUND ribelli guidati da Liquid Snake, gemello biologico di Solid e prodotto come lui del progetto segreto Les Enfants Terribles. Liquid crede di essere il clone \"inferiore\", portatore dei geni recessivi di Big Boss, e nutre un risentimento viscerale verso Solid per questo. Snake scopre di essere stato usato inconsapevolmente come vettore del virus FOXDIE, programmato dal governo per uccidere i membri di FOXHOUND tramite arresto cardiaco e recuperare il Metal Gear REX intatto. Gray Fox, ora cyborg, muore distruggendo a mani nude il sistema radar del REX per renderlo vulnerabile agli attacchi di Snake. Snake distrugge il Metal Gear REX e sconfigge Liquid, che tuttavia muore non per le ferite ma per il FOXDIE stesso. Nell'epilogo, Revolver Ocelot, agente doppio presente durante tutta la missione, si fa trapiantare il braccio di Liquid appena morto: il braccio comincia gradualmente a far emergere la personalità di Liquid attraverso Ocelot, seminando le basi per gli eventi di MGS4.",
              en: "Solid Snake is pulled out of exile in Alaska to infiltrate the nuclear facility at Shadow Moses, seized by renegade FOXHOUND members led by Liquid Snake — Snake's biological twin and, like him, a product of the secret Les Enfants Terribles project. Liquid believes himself to be the \"inferior\" clone, carrying Big Boss's recessive genes, and harbours a visceral resentment toward Solid because of it. Snake discovers he has been unknowingly used as a carrier of the FOXDIE virus, programmed by the government to kill FOXHOUND members via cardiac arrest and recover Metal Gear REX intact. Gray Fox, now a cyborg, dies destroying REX's radar system with his bare hands to leave it vulnerable to Snake's attacks. Snake destroys Metal Gear REX and defeats Liquid, who however dies not from his wounds but from FOXDIE itself. In the epilogue, Revolver Ocelot — a double agent present throughout the entire mission — has Liquid's freshly amputated arm grafted onto himself: the arm gradually begins to bring Liquid's personality to the surface through Ocelot, sowing the seeds for the events of MGS4."
            }
          },
          { id: "mgs2", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "2007–2009", releaseYear: "2001", releaseYearEn: "2001",
            title: { it: "Metal Gear Solid 2: Sons of Liberty", en: "Metal Gear Solid 2: Sons of Liberty" },
            synopsis: {
              it: "Diviso in due atti. Nel primo, Snake infiltra un tanker nel porto di New York per fotografare il Metal Gear RAY, nuovo prototipo anfibio. Ocelot tradisce tutti, affonda la nave con il RAY a bordo e Snake viene dato per morto. Nel secondo, due anni dopo, Raiden, giovane soldato senza esperienza sul campo, viene inviato sulla Big Shell, una piattaforma di decontaminazione offshore che nasconde in realtà Arsenal Gear: una fortezza mobile che ospita un'AI dei Patriots programmata per controllare il flusso di informazioni globale. L'intera missione si rivela essere una simulazione orchestrata dai Patriots per verificare se fosse possibile creare un soldato perfetto attraverso il controllo dell'informazione. Il vero antagonista è Solidus Snake, terzo clone di Big Boss ed ex presidente degli USA. Raiden sconfigge Solidus con l'aiuto di Snake, ma i Patriots rimangono nell'ombra, la loro identità irrisolta.",
              en: "Divided into two acts. In the first, Snake infiltrates a tanker in New York Harbor to photograph Metal Gear RAY, a new amphibious prototype. Ocelot betrays everyone, sinks the ship with RAY on board, and Snake is presumed dead. In the second, two years later, Raiden — a young soldier with no field experience — is sent to the Big Shell, an offshore decontamination facility that is in reality concealing Arsenal Gear: a mobile fortress housing a Patriots AI programmed to control the global flow of information. The entire mission is revealed to be a simulation orchestrated by the Patriots to test whether a perfect soldier could be created through the control of information. The true antagonist is Solidus Snake, the third clone of Big Boss and a former US President. Raiden defeats Solidus with Snake's help, but the Patriots remain in the shadows, their identity unresolved."
            }
          },
          { id: "mgs4", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "2014", releaseYear: "2008", releaseYearEn: "2008",
            title: { it: "Metal Gear Solid 4: Guns of the Patriots", en: "Metal Gear Solid 4: Guns of the Patriots" },
            synopsis: {
              it: "Solid Snake, invecchiato prematuramente per via della sua genetica clonata, viene inviato a eliminare Liquid Ocelot: in realtà Ocelot si è ipnotizzato per impersonare Liquid e ingannare le AI dei Patriots dall'interno. Nel 2014 il mondo è dominato da un'economia di guerra gestita dai Patriots attraverso PMC globali e nanomacchine impiantate nei soldati. Snake carica il virus FOXALIVE nel sistema AI dei Patriots, distruggendolo definitivamente. Nell'epilogo Big Boss riappare vivo: il corpo bruciato in precedenza era quello di Solidus Snake, usato come sosia. Big Boss uccide Zero, l'ultimo fondatore dei Patriots rimasto in vita, poi muore per un nuovo ceppo di FOXDIE. Snake decide di vivere i suoi ultimi mesi senza più combattere.",
              en: "Solid Snake, prematurely aged due to his cloned genetics, is sent to eliminate Liquid Ocelot: in reality, Ocelot has hypnotised himself to impersonate Liquid and deceive the Patriots' AIs from within. By 2014, the world is dominated by a war economy managed by the Patriots through global PMCs and nanomachines implanted in soldiers. Snake uploads the FOXALIVE virus into the Patriots' AI system, destroying it for good. In the epilogue, Big Boss reappears alive: the body burned previously was that of Solidus Snake, used as a body double. Big Boss kills Zero, the last surviving founder of the Patriots, then dies himself from a new strain of FOXDIE. Snake chooses to live out his remaining months without fighting."
            }
          },
          { id: "mgr", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "2018", releaseYear: "2013", releaseYearEn: "2013",
            title: { it: "Metal Gear Rising: Revengeance", en: "Metal Gear Rising: Revengeance" },
            synopsis: {
              it: "Raiden, ora cyborg al servizio della PMC Maverick, scopre che il senatore americano Armstrong, potenziato da nanomacchine che lo rendono quasi indistruttibile, sta orchestrando un attentato al presidente degli USA per scatenare una guerra e conquistare la presidenza, con l'obiettivo di rifondare l'America su principi di pura forza. Il piano include il traffico di cervelli di bambini rapiti per creare futuri soldati cyborg. Raiden smantella i Winds of Destruction, il gruppo d'élite al servizio di Armstrong, e lo sconfigge nel duello finale usando la spada di Jetstream Sam, l'unica arma capace di trapassare le sue difese. Incluso nel Master Book ufficiale del Master Collection, trattato come canonico.",
              en: "Raiden, now a cyborg working for the PMC Maverick, discovers that Senator Armstrong — a US senator augmented by nanomachines that make him nearly invulnerable — is orchestrating an assassination attempt on the American president to trigger a war and seize the presidency, with the goal of rebuilding America on principles of pure strength. His plan includes the trafficking of children's brains, harvested from kidnapped orphans to create future cyborg soldiers. Raiden dismantles the Winds of Destruction, the elite unit serving Armstrong, and defeats him in the final duel using Jetstream Sam's sword — the only weapon capable of piercing his defences. Included in the official Master Book of the Master Collection, treated as canonical."
            }
          }
        ]
      }
    ]
  },

  "prince-of-persia": {
    id: "prince-of-persia",
    listTitle: { it: "Prince of Persia", en: "Prince of Persia" },
    eyebrow: { it: "Fascicolo", en: "Case File" },
    title: { it: "Prince of Persia", en: "Prince of Persia" },
    blurb: {
      it: "Un principe si trova spesso a dover rimediare a un errore capace di scatenare forze capaci di alterare il tempo stesso, tra sabbie magiche, palazzi in rovina e nemici resi mostruosi dalla stessa magia impazzita. L'agilità e l'ingegno contano quanto la forza, in un mondo dove ogni salto può significare la vita o la.",
      en: "A prince often finds himself having to fix a mistake capable of unleashing forces able to alter time itself, amid magical sands, crumbling palaces, and enemies twisted into monsters by that same runaway magic. Agility and wit matter as much as strength, in a world where every leap can mean life or death. Time itself."
    },
    palette: ["#2c1810", "#c9a227", "#4a1a1a"],
    accentColor: "#c9a227",
    tracks: [],
    avatar: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Prince%20of%20Persia%20Avatar.jpg",
    banner: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Prince%20of%20Persia%20Banner.jpg",
    watermark: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Prince%20of%20Persia%20Filigrana.jpg",
    watermarkOpacity: 0.18,
    universes: [
      {
        id: "continuita-originale",
        name: { it: "Continuità Originale", en: "Original Continuity" },
        span: { it: "1989 – 1999", en: "1989 – 1999" },
        entries: [
          { id: "pop-1989", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "1989", releaseYear: "1989", releaseYearEn: "1989",
            title: { it: "Prince of Persia", en: "Prince of Persia" },
            synopsis: {
              it: "Un principe senza nome ha sessanta minuti per fuggire dai sotterranei del palazzo, sconfiggere il visir malvagio Jaffar e salvare la principessa che ama, costretta a sposarlo entro un'ora o a morire. Il capostipite del genere platform cinematico, capace di introdurre animazioni fluide e realistiche per l'epoca.",
              en: "A nameless prince has sixty minutes to escape the palace dungeons, defeat the evil vizier Jaffar, and save the princess he loves, who must marry him within the hour or die. The progenitor of the cinematic platformer genre, notable for introducing fluid, realistic animation for its time."
            }
          },
          { id: "shadow-and-flame", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "poco dopo il primo gioco", releaseYear: "1993", releaseYearEn: "1993",
            title: { it: "The Shadow and the Flame", en: "The Shadow and the Flame" },
            synopsis: {
              it: "Il Principe, ormai sovrano, viene tradito e apparentemente ucciso dal proprio consigliere Jaffar risorto grazie a un genio malvagio. Salvato da un mago in incognito, deve recuperare tre reliquie magiche per fermare Jaffar una seconda volta.",
              en: "The Prince, now a ruler, is betrayed and seemingly killed by his advisor Jaffar, resurrected with the help of an evil genie. Saved by a wizard in disguise, he must recover three magical relics to stop Jaffar a second time."
            }
          },
          { id: "pop3d", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "anni dopo", releaseYear: "1999", releaseYearEn: "1999",
            title: { it: "Prince of Persia 3D", en: "Prince of Persia 3D" },
            synopsis: {
              it: "Il Principe, in visita al fratello del Sultano, si trova invischiato nel rapimento della principessa da parte del cugino Rugnor, per metà tigre. Ultimo capitolo di questa continuità, sviluppato senza il coinvolgimento del creatore originale Jordan Mechner e accolto con tiepidezza.",
              en: "The Prince, visiting the Sultan's brother, finds himself entangled in the kidnapping of a princess by the half-tiger cousin Rugnor. The last chapter of this continuity, developed without the involvement of original creator Jordan Mechner and met with a lukewarm reception."
            }
          }
        ]
      },
      {
        id: "sabbie-del-tempo",
        name: { it: "Le Sabbie del Tempo", en: "The Sands of Time" },
        span: { it: "Persia leggendaria", en: "Legendary Persia" },
        entries: [
          { id: "sands-of-time", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "primo della saga",
            releaseYear: "2003", releaseYearEn: "2003",
            title: { it: "Sands of Time", en: "Sands of Time" },
            synopsis: {
              it: "Il Principe, ingannato dal visir malvagio, libera accidentalmente le Sabbie del Tempo da un pugnale magico, trasformando gli abitanti del palazzo in mostri e concedendo al pugnale stesso il potere di riavvolgere il tempo. Con l'aiuto della principessa Farah, richiude le sabbie nella loro clessidra d'origine, salvando il regno.",
              en: "The Prince, deceived by the evil vizier, accidentally unleashes the Sands of Time from a magic dagger, turning the palace's inhabitants into monsters and granting the dagger the power to rewind time. With the help of Princess Farah, he seals the sands back into their original hourglass, saving the kingdom."
            }
          },
          { id: "forgotten-sands", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "tra Sands of Time e Warrior Within",
            releaseYear: "2010", releaseYearEn: "2010",
            title: { it: "The Forgotten Sands", en: "The Forgotten Sands" },
            synopsis: {
              it: "In visita al regno del fratello, il Principe scatena per errore un esercito di sabbia risvegliando un potere sigillato secoli prima, e deve collaborare con la maga Razia per fermarlo. Uscito nel 2010, sette anni dopo Sands of Time, ma ambientato narrativamente proprio nell'anno intercorso tra quel gioco e Warrior Within — un vero puzzle di collocazione, non solo un'uscita fuori sequenza.",
              en: "Visiting his brother's kingdom, the Prince accidentally unleashes an army of sand by awakening a power sealed away centuries earlier, and must work with the sorceress Razia to stop it. Released in 2010, seven years after Sands of Time, but narratively set precisely within the year between that game and Warrior Within — a genuine placement puzzle, not just an out-of-sequence release."
            }
          },
          { id: "warrior-within", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "un anno dopo Sands of Time",
            releaseYear: "2004", releaseYearEn: "2004",
            title: { it: "Warrior Within", en: "Warrior Within" },
            synopsis: {
              it: "Braccato dalla Dahaka, un guardiano del tempo che punisce chiunque abbia alterato il proprio destino, il Principe viaggia indietro nel tempo fino all'Isola del Tempo per distruggere le Sabbie prima ancora della loro creazione, scontrandosi con la Imperatrice Kaileena, futura fonte del loro potere.",
              en: "Hunted by the Dahaka, a guardian of time that punishes anyone who has altered their fate, the Prince travels back to the Island of Time to destroy the Sands before their very creation, clashing with Empress Kaileena, the future source of their power."
            }
          },
          { id: "two-thrones", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "seguito diretto di Warrior Within",
            releaseYear: "2005", releaseYearEn: "2005",
            title: { it: "The Two Thrones", en: "The Two Thrones" },
            synopsis: {
              it: "Tornato a Babilonia con Kaileena, il Principe la vede uccisa dal visir, che ne assorbe i poteri e scatena nuovamente le Sabbie, infettando lo stesso Principe con un lato oscuro violento. Sconfitto il visir e domato il proprio alter ego, il Principe usa infine il pugnale per riscrivere gli eventi e salvare Kaileena, chiudendo la trilogia.",
              en: "Having returned to Babylon with Kaileena, the Prince watches her be killed by the vizier, who absorbs her powers and unleashes the Sands once more, infecting the Prince himself with a violent dark side. Having defeated the vizier and tamed his own alter ego, the Prince finally uses the dagger to rewrite events and save Kaileena, closing the trilogy."
            }
          }
        ]
      },
      {
        id: "reboot-2008",
        name: { it: "Reboot 2008", en: "2008 Reboot" },
        span: { it: "Continuità indipendente", en: "Independent continuity" },
        entries: [
          { id: "pop-2008", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "continuità propria",
            releaseYear: "2008", releaseYearEn: "2008",
            title: { it: "Prince of Persia (2008)", en: "Prince of Persia (2008)" },
            synopsis: {
              it: "Un vagabondo senza nome, soprannominato Principe, si allea con Elika, principessa di un regno corrotto dal dio oscuro Ahriman, per purificare la terra prima che il male dilaghi ovunque. Nel finale, contro il volere di Elika, il Principe la resuscita liberando accidentalmente Ahriman: un epilogo controverso, mai approfondito da un vero seguito.",
              en: "A nameless wanderer, nicknamed Prince, allies with Elika, princess of a kingdom corrupted by the dark god Ahriman, to purify the land before evil spreads everywhere. In the ending, against Elika's wishes, the Prince resurrects her, accidentally freeing Ahriman: a controversial epilogue never followed up by a true sequel."
            }
          }
        ]
      },
      {
        id: "lost-crown",
        name: { it: "The Lost Crown (continuità propria, non dichiarata)", en: "The Lost Crown (own, undeclared continuity)" },
        span: { it: "Persia mitologica", en: "Mythological Persia" },
        entries: [
          { id: "lost-crown", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "non collegato alle precedenti",
            releaseYear: "2024", releaseYearEn: "2024",
            title: { it: "The Lost Crown", en: "The Lost Crown" },
            synopsis: {
              it: "Sargon, guerriero d'élite del Clan degli Immortali, insegue il rapitore del principe Ghassan fino al Monte Qaf, un luogo dove il tempo scorre in modo instabile, scoprendo lungo il cammino segreti sul proprio passato e su un'antica maledizione. Capitolo più recente della saga, con struttura metroidvania invece che platform lineare, che Ubisoft stessa non ha mai chiarito collegare a nessuna delle tre continuità precedenti.",
              en: "Sargon, an elite warrior of the Immortals Clan, pursues the kidnapper of Prince Ghassan to Mount Qaf, a place where time flows unstably, uncovering secrets about his own past and an ancient curse along the way. The saga's most recent chapter, with a metroidvania structure instead of linear platforming, which Ubisoft itself has never clarified as connecting to any of the three previous continuities."
            }
          }
        ]
      }
    ]
  },

  pokemon: {
    id: "pokemon",
    listTitle: { it: "Pokémon", en: "Pokémon" },
    eyebrow: { it: "Fascicolo", en: "Case File" },
    title: { it: "Pokémon", en: "Pokémon" },
    blurb: {
      it: "Giovani allenatori lasciano casa per intraprendere un viaggio attraverso regioni popolate da creature straordinarie, imparando a combatterle, catturarle e soprattutto a diventarne compagni. Palestre, campioni e rivali scandiscono un percorso di crescita personale prima ancora che sportiva. Il legame tra allenatore e.",
      en: "Young trainers leave home to embark on a journey through regions populated by extraordinary creatures, learning to battle them, capture them, and above all become their companions. Gyms, champions, and rivals mark a path of personal growth even more than competitive achievement. The bond between trainer and."
    },
    palette: ["#2a2a2a", "#ffcb05", "#3b4cca"],
    accentColor: "#ffcb05",
    tracks: [],
    avatar: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Pokemon%20Avatar.jpg",
    banner: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Pokemon%20Banner.jpg",
    watermark: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Pokemon%20Filigrana.jpg",
    watermarkOpacity: 0.18,
    noTimeline: true,
    canonNote: {
      intro: {
        it: "Pokémon non ha mai avuto una linea temporale ufficiale unica e completa, ma non è nemmeno del tutto priva di agganci dichiarati: alcuni collegamenti tra i giochi sono confermati esplicitamente nei dialoghi stessi (Gold/Silver si svolge tre anni dopo Red/Blue; Black 2/White 2 si svolge due anni dopo Black/White), e diverse regioni sono presentate come parte dello stesso continente o della stessa nazione non ancora nominata (Kanto, Johto, Hoenn e Sinnoh, collegate anche geograficamente: si può letteralmente camminare da Johto a Kanto attraversando le Cascate Tohjo). Altre regioni, come Unima/Unova o Kalos, sono invece esplicitamente descritte come lontane, ispirate a paesi diversi dal Giappone (rispettivamente Stati Uniti e Francia). A complicare ulteriormente il quadro, alcuni giochi si contraddicono a vicenda su dettagli di lore condivisa (la storia della Mega Evoluzione raccontata in X/Y non coincide con quella di Rubino Omega/Zaffiro Alpha, dando origine alla teoria fan di due linee temporali parallele, mai confermata né smentita da Game Freak).",
        en: "Pokémon has never had a single, complete official timeline, but it isn't entirely without stated connections either: some links between games are confirmed explicitly in the dialogue itself (Gold/Silver takes place three years after Red/Blue; Black 2/White 2 takes place two years after Black/White), and several regions are presented as part of the same continent or the same still-unnamed nation (Kanto, Johto, Hoenn, and Sinnoh, also connected geographically: you can literally walk from Johto to Kanto through Tohjo Falls). Other regions, such as Unova or Kalos, are instead explicitly described as distant, inspired by countries other than Japan (the United States and France, respectively). Further complicating the picture, some games contradict one another on shared lore details (the history of Mega Evolution told in X/Y doesn't match that of Omega Ruby/Alpha Sapphire, giving rise to an unconfirmed, un-debunked fan theory of two parallel timelines)."
      },
      titles: {
        it: "Red/Blue/Yellow (Kanto) e Ruby/Sapphire/Emerald (Hoenn), stesso periodo → Gold/Silver/Crystal (Johto) e Diamond/Pearl/Platinum (Sinnoh), 3 anni dopo, stesso periodo tra loro → Black/White (Unima) → Black 2/White 2 e X/Y (Kalos), 2 anni dopo, stesso periodo tra loro → Sun/Moon (Alola) → Sword/Shield (Galar) → Scarlet/Violet (Paldea)",
        en: "Red/Blue/Yellow (Kanto) and Ruby/Sapphire/Emerald (Hoenn), same period → Gold/Silver/Crystal (Johto) and Diamond/Pearl/Platinum (Sinnoh), 3 years later, same period as each other → Black/White (Unova) → Black 2/White 2 and X/Y (Kalos), 2 years later, same period as each other → Sun/Moon (Alola) → Sword/Shield (Galar) → Scarlet/Violet (Paldea)"
      },
      outro: {
        it: "Questo ordine è la ricostruzione più diffusa tra i fan, basata sui pochi riferimenti temporali espliciti presenti nei giochi stessi: non è un piano narrativo dichiarato da Game Freak, e i remake (Let's Go, i Rubino Omega/Zaffiro Alpha, Brilliant Diamond/Shining Pearl) complicano ulteriormente il quadro riscrivendo dettagli delle generazioni originali senza sempre chiarire se le sostituiscano del tutto o coesistano con loro.",
        en: "This order is the most widely accepted fan reconstruction, based on the few explicit temporal references present in the games themselves: it is not a narrative plan declared by Game Freak, and the remakes (Let's Go, Omega Ruby/Alpha Sapphire, Brilliant Diamond/Shining Pearl) further complicate the picture by rewriting details from the original generations without always clarifying whether they replace them entirely or coexist alongside them."
      }
    }
  },

  "resident-evil": {
    id: "resident-evil",
    listTitle: { it: "Resident Evil", en: "Resident Evil" },
    eyebrow: { it: "Fascicolo", en: "Case File" },
    title: { it: "Resident Evil", en: "Resident Evil" },
    blurb: {
      it: "Corporazioni senza scrupoli sperimentano armi biologiche capaci di trasformare la popolazione in creature mostruose, scatenando focolai che travolgono città intere. Agenti speciali e sopravvissuti comuni si trovano a dover affrontare l'orrore generato da questi esperimenti, spesso scoprendo cospirazioni.",
      en: "Unscrupulous corporations experiment with biological weapons capable of turning the population into monstrous creatures, unleashing outbreaks that overwhelm entire cities. Special agents and ordinary survivors must face the horror born from these experiments, often uncovering conspiracies far larger than they."
    },
    palette: ["#c81a1a", "#6b8e23", "#f5f5f5"],
    accentColor: "#c81a1a",
    universes: [
      {
        id: "main",
        name: { it: "Universo principale", en: "Main Universe" },
        span: { it: "1950 – 2026", en: "1950 – 2026" },
        entries: [
          { id: "lore-miranda-spencer", type: "LORE", typeEn: "LORE", year: "Anni '50",
            title: { it: "Miranda e Spencer", en: "Miranda and Spencer" },
            synopsis: {
              it: "Oswell E. Spencer è uno studente di medicina britannico brillante e ambizioso. Durante un'escursione solitaria in Europa dell'Est si perde tra le montagne e collassa su una strada innevata. A trovarlo è Miranda: all'apparenza una donna giovane, snella, sulla trentina. Il megamicete che la abita da decenni la preserva immutata, nascondendo i suoi oltre cento anni dietro un volto che non invecchia.\n\nMiranda lo accoglie come suo allievo. Spencer studia le sue ricerche sul Cadou e sul fungo mutante e porta via con sé anche campioni fisici. Scopre qualcosa che non aveva mai concepito: la possibilità di mutare un essere umano impiantandogli un altro organismo. La rivelazione gli rivoluziona ogni prospettiva.\n\nLe visioni dei due divergono profondamente. Miranda vuole una sola cosa: un vaso adatto in cui riversare la coscienza di Eva, la figlia perduta. Spencer vuole plasmare l'evoluzione dell'intera umanità con se stesso al vertice. I due si separano, ma restano in contatto epistolare per anni.\n\nSpencer torna alla sua università trasformato nel metodo e nella direzione. Manca solo chi condivida la visione, e lo troverà presto in Marcus e Ashford.",
              en: "Oswell E. Spencer is a brilliant and ambitious British medical student. During a solitary hike in Eastern Europe, he gets lost in the mountains and collapses on a snow-covered road. The one who finds him is Miranda: seemingly a young, slender woman in her thirties, the Mold that has inhabited her for decades preserving her unchanged, hiding her century-old age behind a face that never ages.\n\nMiranda takes him in as her student. Spencer studies her research on the Cadou and the mutant fungus, taking physical samples with him. He discovers something he had never conceived: the possibility of mutating a human being by implanting another organism within them. The revelation overturns his entire perspective.\n\nThe two have profoundly different visions. Miranda wants one thing only: a suitable vessel to transfer the consciousness of Eva, her lost daughter. Spencer wants to shape the evolution of all mankind with himself at its peak. They part ways, but remain in written contact for years.\n\nSpencer returns to his university transformed in method and direction. All he needs now is someone who shares his vision — and he will soon find them in Marcus and Ashford."
            }
          },
          { id: "lore-progenitor", type: "LORE", typeEn: "LORE", year: "4 dicembre 1966",
            title: { it: "Scoperta del Virus Progenitore", en: "Discovery of the Progenitor Virus" },
            synopsis: {
              it: "Spencer, Marcus e il dottorando Brandon Bailey scoprono in Africa occidentale, dopo tre mesi di spedizione, il Giardino del Sole: una caverna nascosta dove cresce la Stairway of the Sun, un fiore rarissimo venerato dalla tribù locale dei Ndipaya. Dal polline del fiore isolano un agente patogeno capace di modificare il DNA di qualsiasi organismo vivente e lo chiamano Virus Progenitore. Spencer vede subito il potenziale per plasmare una razza superiore.",
              en: "Spencer, Marcus, and doctoral student Brandon Bailey discover the Garden of the Sun after three months of expedition in West Africa: a hidden cave where the Stairway of the Sun grows, an extremely rare flower revered by the local Ndipaya tribe. From the flower's pollen they isolate a pathogen capable of modifying the DNA of any living organism, which they name the Progenitor Virus. Spencer immediately sees its potential to shape a superior race."
            }
          },
          { id: "lore-umbrella-founding", type: "LORE", typeEn: "LORE", year: "1968",
            title: { it: "Fondazione della Umbrella Corporation", en: "Foundation of the Umbrella Corporation" },
            synopsis: {
              it: "Spencer, Marcus e Ashford fondano la Umbrella Corporation come facciata farmaceutica legittima, con sede principale a Berlino. Dietro la copertura, l'obiettivo reale è sviluppare armi biologiche usando il Progenitore come base. Edward Ashford muore nello stesso anno, vittima di un incidente di laboratorio col Progenitore, presumibilmente orchestrato da Spencer. L'eredità di famiglia passa al figlio Alexander. I laboratori segreti iniziano a moltiplicarsi in tutto il mondo.",
              en: "Spencer, Marcus, and Ashford found the Umbrella Corporation as a legitimate pharmaceutical front, with its main headquarters in Berlin. Behind the cover, the real objective is to develop biological weapons using the Progenitor as a foundation. Edward Ashford dies that same year, the victim of a laboratory accident involving the Progenitor, presumably orchestrated by Spencer. The family legacy passes to his son Alexander. Secret laboratories begin to multiply across the world."
            }
          },
          { id: "lore-t-virus", type: "LORE", typeEn: "LORE", year: "Fine anni '70",
            title: { it: "Nascita del Virus-T", en: "Birth of the T-Virus" },
            synopsis: {
              it: "Marcus ibrida il Progenitore con il DNA delle sanguisughe da lui studiate per anni. Il risultato è il Virus-T: più instabile e contagioso del Progenitore, capace di trasformare organismi viventi in creature mostruose. Marcus è orgoglioso della sua creazione. Non immagina che sarà la sua rovina.",
              en: "Marcus hybridizes the Progenitor with the DNA of leeches he has studied for years. The result is the T-Virus: more unstable and contagious than the Progenitor, capable of transforming living organisms into monstrous creatures. Marcus is proud of his creation. He does not imagine it will be his undoing."
            }
          },
          { id: "lore-wesker-birkin", type: "LORE", typeEn: "LORE", year: "Fine anni '70",
            title: { it: "Wesker e Birkin entrano in scena", en: "Wesker and Birkin Enter the Scene" },
            synopsis: {
              it: "Spencer preleva due bambini prodigio da un programma di selezione eugenetica e li affida a Marcus: Albert Wesker e William Birkin. Li alleva come scienziati, li forma sul Virus-T. Crescono brillanti, freddi, ambiziosi. Inconsapevoli di essere pedine in un piano molto più grande.",
              en: "Spencer selects two child prodigies from a eugenics program and places them under Marcus's care: Albert Wesker and William Birkin. He raises them as scientists, training them on the T-Virus. They grow up brilliant, cold, and ambitious — unaware that they are pawns in a plan far greater than themselves."
            }
          },
          { id: "lore-marcus-assassination", type: "LORE", typeEn: "LORE", year: "1988",
            title: { it: "L'assassinio di Marcus", en: "The Assassination of Marcus" },
            synopsis: {
              it: "Spencer ordina l'eliminazione di Marcus, ritenuto ormai una minaccia. Uno squadrone della sicurezza Umbrella fa irruzione nel laboratorio e lo abbatte. Wesker e Birkin, presenti, raccolgono tutto il materiale di ricerca. Il corpo viene gettato nei canali sotterranei dell'impianto. Birkin eredita ufficialmente la paternità del Virus-T, cancellando Marcus dalla storia della compagnia. Ma nel cadavere si insinua la Regina delle Sanguisughe, che ne assorbe l'ippocampo acquisendone memorie e personalità. Convinta di essere Marcus rinato, attende dieci anni per la vendetta.",
              en: "Spencer orders the elimination of Marcus, now considered a threat. An Umbrella security squad storms the laboratory and guns him down. Wesker and Birkin, both present, collect all research materials. The body is thrown into the underground canals of the facility. Birkin officially inherits the T-Virus research, erasing Marcus from the company's history. But the Leech Queen crawls into the corpse, absorbing his hippocampus and acquiring his memories and personality. Convinced it is Marcus reborn, it waits ten years for revenge."
            }
          },
          { id: "re0", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "23 luglio 1998", releaseYear: "2002", releaseYearEn: "2002",
            title: { it: "Resident Evil 0", en: "Resident Evil 0" },
            synopsis: {
              it: "Rebecca Chambers, medic del team Bravo degli S.T.A.R.S., sale sull'Ecliptic Express, un treno Umbrella fermo nei boschi Arklay, già infestato da zombi e creature mutate. Vi trova Billy Coen, ex tenente dei marines condannato a morte per ventitré omicidi che non ha commesso. I due formano un'alleanza di necessità.\n\nScendono dal treno e penetrano nel Laboratorio di Addestramento Umbrella nascosto nella foresta, dove scoprono la verità: è la Regina delle Sanguisughe a orchestrare tutto, convinta di essere Marcus risorto, con un unico obiettivo: vendicarsi di Umbrella. Birkin attiva l'autodistruzione dell'impianto per contenere l'outbreak. Rebecca e Billy sfruttano la debolezza della creatura alla luce solare per distruggerla, poi fuggono prima che l'edificio crolli.\n\nNota: Billy viene dichiarato morto da Rebecca nel rapporto finale, permettendogli di sparire libero tra i boschi.\n\nTEAM BRAVO: Enrico Marini (capitano), Kenneth J. Sullivan (dottorato in chimica), Richard Aiken (tecnico e specialista comunicazioni), Forest Speyer (omni-man, cecchino e hacker), Edward Dewey (pilota e cecchino), Rebecca Chambers (medic e specialista in chimica).",
              en: "Rebecca Chambers, medic of the S.T.A.R.S. Bravo Team, boards the Ecliptic Express, an Umbrella train stranded in the Arklay Woods, already overrun by zombies and mutated creatures. There she finds Billy Coen, a former Marine lieutenant sentenced to death for twenty-three murders he did not commit. The two form an alliance out of necessity.\n\nThey leave the train and infiltrate the Umbrella Training Facility hidden in the forest, where they uncover the truth: it is the Leech Queen orchestrating everything, convinced it is Marcus reborn, with one single goal — to take revenge on Umbrella. Birkin activates the facility's self-destruct sequence to contain the outbreak. Rebecca and Billy exploit the creature's weakness to sunlight to destroy it, then flee before the building collapses.\n\nNote: Billy is declared dead by Rebecca in her final report, allowing him to disappear freely into the woods.\n\nBRAVO TEAM: Enrico Marini (Captain), Kenneth J. Sullivan (PhD in Chemistry), Richard Aiken (Communications Specialist), Forest Speyer (omni-man, sniper and hacker), Edward Dewey (pilot and marksman), Rebecca Chambers (medic and chemistry specialist)."
            }
          },
          { id: "re1", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "24 luglio 1998", releaseYear: "1996 (Remake: 2002)", releaseYearEn: "1996 (Remake: 2002)",
            title: { it: "Resident Evil", en: "Resident Evil" },
            synopsis: {
              it: "Il team Alpha degli S.T.A.R.S. è composto da Wesker come comandante, Chris Redfield, Jill Valentine, Barry Burton, Joseph Frost e il pilota Brad Vickers. Vengono inviati a cercare il team Bravo scomparso nei boschi Arklay e si ritrovano a rifugiarsi nella villa Spencer: un palazzo gotico che nasconde laboratori Umbrella sotterranei. La struttura è infestata da zombi, Licker, Hunters e Lisa Trevor, una donna ridotta a mostro da decenni di esperimenti. Wesker si rivela traditore: spia di Umbrella infiltrata negli S.T.A.R.S., ha orchestrato tutto per raccogliere dati di combattimento sulle creature. Libera il Tyrant, che lo trafigge. Chris e Jill distruggono la villa e fuggono. Wesker, però, aveva pianificato anche la propria morte: un prototipo virale fornito da Birkin lo risveglia trasformato, più forte, non più umano.\n\nJoseph Frost è stato sbranato dai cani Cerberus ancora fuori dalla villa, prima di poterla raggiungere. Barry Burton, armiere e veterano dell'Alpha, sopravvive nonostante Wesker lo avesse ricattato minacciando la sua famiglia. Brad Vickers, pilota dell'Alpha, fugge in elicottero all'inizio della missione ma torna per recuperare i sopravvissuti.\n\nNota: Nella villa vengono ritrovati i resti del team Bravo, il cui elicottero era stato costretto ad atterrare nella zona per un guasto meccanico. L'unica eccezione è Rebecca Chambers, che quella notte si trovava sull'Ecliptic Express e raggiunse la villa solo all'alba, in tempo per incrociare il team Alpha. Kenneth Sullivan è il primo cadavere trovato all'interno. Forest Speyer è sul balcone, rianimato come zombi. Richard Aiken muore per il veleno del serpente gigante. Enrico Marini, capitano del Bravo, viene eliminato da Wesker nei sotterranei prima che possa rivelare il nome del traditore.\n\nNota — Remake 2020: Brad Vickers appare all'inizio del gioco e muore sacrificandosi per permettere a Jill di fuggire da un bar assediato da zombi. Mikhail Viktor, comandante UBCS già ferito, si sacrifica sul treno facendo esplodere un ordigno per allontanare il Nemesis dalla carrozza e salvare Jill e Carlos. Nikolai Zinoviev, sergente UBCS, si rivela un agente doppio al soldo di un misterioso committente nemico di Umbrella. Nel finale del Remake, Jill e Carlos gli sottraggono l'unico elicottero disponibile e lo abbandonano nella città condannata: il suo destino rimane ufficialmente ignoto. Barry Burton non è presente nel Remake in nessuna forma.",
              en: "The S.T.A.R.S. Alpha Team consists of Wesker as commander, Chris Redfield, Jill Valentine, Barry Burton, Joseph Frost, and pilot Brad Vickers. They are sent to search for the missing Bravo Team in the Arklay Woods and find themselves taking refuge in the Spencer Mansion: a gothic estate concealing underground Umbrella laboratories. The facility is overrun by zombies, Lickers, Hunters, and Lisa Trevor — a woman reduced to a monster by decades of experimentation. Wesker reveals himself as a traitor: an Umbrella spy embedded within S.T.A.R.S., who orchestrated everything to collect combat data on the creatures. He releases the Tyrant, which impales him. Chris and Jill destroy the mansion and escape. Wesker, however, had planned for his own death: a viral prototype provided by Birkin reawakens him transformed, stronger, no longer human.\n\nJoseph Frost is mauled by Cerberus dogs outside the mansion, before he can even reach it. Barry Burton, the team's weapons expert and veteran, survives despite Wesker having blackmailed him by threatening his family. Brad Vickers, the Alpha Team's pilot, flees by helicopter at the start of the mission but returns to evacuate the survivors.\n\nNote: The remains of the Bravo Team are found inside the mansion, whose helicopter had been forced to land in the area due to a mechanical failure. The only exception is Rebecca Chambers, who that night was aboard the Ecliptic Express and reached the mansion only at dawn, just in time to cross paths with the Alpha Team. Kenneth Sullivan is the first body found inside. Forest Speyer is on the balcony, reanimated as a zombie. Richard Aiken dies from the venom of a giant serpent. Enrico Marini, Bravo Team captain, is eliminated by Wesker in the underground tunnels before he can reveal the traitor's name.\n\nNote — Remake 2020: Brad Vickers appears at the beginning of the game and dies sacrificing himself to allow Jill to escape a bar besieged by zombies. Mikhail Viktor, the already-wounded UBCS commander, sacrifices himself on the train by detonating an explosive to throw the Nemesis away from the car and save Jill and Carlos. Nikolai Zinoviev, UBCS sergeant, reveals himself as a double agent working for a mysterious client hostile to Umbrella. In the Remake's ending, Jill and Carlos steal the only available helicopter and leave him behind in the condemned city — his fate remains officially unknown. Barry Burton does not appear in the Remake in any form."
            }
          },
          { id: "outbreak", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "23 sett. – 1 ott. 1998", releaseYear: "2003 (File 2: 2004)", releaseYearEn: "2003 (File 2: 2004)",
            title: { it: "Resident Evil Outbreak / Outbreak File 2", en: "Resident Evil Outbreak / Outbreak File 2" },
            synopsis: {
              it: "Mentre gli S.T.A.R.S. sopravvivono alla villa, il Virus-T si diffonde nelle fogne e nell'acqua potabile di Raccoon City. I due giochi seguono otto civili comuni intrappolati nel collasso: Kevin Ryman (agente di polizia), Mark Wilkins (guardia di sicurezza), George Hamilton (chirurgo), David King (idraulico), Jim Chapman (lavoratore della metropolitana), Alyssa Ashcroft (giornalista investigativa), Cindy Lennox (cameriera) e Yoko Suzuki (ricercatrice Umbrella con un passato da nascondere). Non sono eroi, non hanno addestramento militare. Sopravvivono per istinto.\n\nI loro scenari coprono tutto l'arco della tragedia, dai bar e dagli ospedali infestati fino all'evacuazione finale mentre il missile nucleare cancella la città.",
              en: "While the S.T.A.R.S. members survive the mansion, the T-Virus spreads through the sewers and drinking water of Raccoon City. The two games follow eight ordinary civilians trapped in the city's collapse: Kevin Ryman (police officer), Mark Wilkins (security guard), George Hamilton (surgeon), David King (plumber), Jim Chapman (subway worker), Alyssa Ashcroft (investigative journalist), Cindy Lennox (waitress), and Yoko Suzuki (Umbrella researcher with a past to hide). They are not heroes, they have no military training. They survive on instinct.\n\nTheir scenarios cover the full arc of the tragedy, from infested bars and hospitals to the final evacuation as the thermobaric missile erases the city from the map."
            }
          },
          { id: "re3", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "27 sett. – 1 ott. 1998", releaseYear: "1999 (Remake: 2020)", releaseYearEn: "1999 (Remake: 2020)",
            title: { it: "Resident Evil 3: Nemesis", en: "Resident Evil 3: Nemesis" },
            synopsis: {
              it: "Jill Valentine cerca disperatamente di fuggire da Raccoon City ormai in caduta libera. Umbrella ha rilasciato il Nemesis, un Tyrant di nuova generazione infettato con il parassita Nemesis Alpha: più veloce, più intelligente, armato di lanciarazzi. Il suo unico obiettivo sono i membri degli S.T.A.R.S., vendetta personale di Umbrella dopo la distruzione del T-002 nella villa Spencer.\n\nJill combatte attraverso le strade in fiamme, viene infettata durante uno scontro alla torre dell'orologio e perde conoscenza. Carlos Oliveira, mercenario dell'UBCS, la trova e parte da solo per procurarle un vaccino. Nel frattempo, negli stessi giorni, Leon e Claire sopravvivono al commissariato di polizia.\n\nJill si risveglia il primo ottobre e affronta il Nemesis per l'ultima volta. La creatura è andata incontro a mutazioni sempre più violente: ormai è una massa di carne pulsante. Jill la distrugge con un cannone sperimentale abbandonato nell'impianto: il FINGeR (chiamato così nel remake). Barry Burton, venuto a sapere della situazione dai telegiornali, aveva noleggiato un elicottero civile e atteso che il blocco militare venisse revocato: è lui a portare in salvo Jill e Carlos all'alba, pochi minuti prima che il missile governativo colpisca Raccoon City e la cancelli dalla mappa.\n\nNota — Remake 2020: Brad Vickers, pilota degli S.T.A.R.S., compare all'inizio del gioco e muore sacrificandosi per permettere a Jill di fuggire da un bar assediato. Mikhail Viktor, comandante dell'U.B.C.S. già ferito, si sacrifica sul treno facendosi esplodere con un ordigno per allontanare il Nemesis dalla carrozza e salvare Jill e Carlos. Nel gioco originale Mikhail muore con una granata nel tentativo di distruggere il Nemesis, nel Remake la scena si svolge in modo diverso ma l'esito è lo stesso. Nikolai Zinoviev, sergente U.B.C.S., si rivela un agente doppio al soldo di un misterioso committente nemico di Umbrella, incaricato di sabotare i piani dell'azienda e raccogliere dati di combattimento. Nel finale del Remake, Jill e Carlos gli sottraggono l'unico elicottero disponibile e lo abbandonano nella città condannata: il suo destino rimane ufficialmente ignoto. Barry Burton non è presente nel Remake in nessuna forma.",
              en: "Jill Valentine desperately tries to escape Raccoon City as it falls into complete chaos. Umbrella has released the Nemesis, a next-generation Tyrant infected with the Nemesis Alpha parasite: faster, more intelligent, armed with a rocket launcher. Its sole target is the S.T.A.R.S. members — Umbrella's personal act of revenge following the destruction of the T-002 at the Spencer Mansion.\n\nJill fights her way through the burning streets, gets infected during a confrontation at the clock tower, and loses consciousness. Carlos Oliveira, a mercenary with the U.B.C.S., finds her and sets out alone to obtain a vaccine. Meanwhile, during those same days, Leon and Claire are surviving at the Raccoon City Police Department.\n\nJill awakens on October 1st and faces the Nemesis for the last time. The creature has undergone increasingly violent mutations and is now a pulsating mass of flesh. Jill destroys it using an experimental cannon left behind in the facility — the FINGeR, as it is named in the Remake. Barry Burton, having learned of the situation through news broadcasts, had rented a civilian helicopter and waited for the military blockade to be lifted. It is he who evacuates Jill and Carlos at dawn, just minutes before the government's thermobaric missile strikes Raccoon City and erases it from the map.\n\nNote — Remake 2020: Brad Vickers, the S.T.A.R.S. pilot, appears at the beginning of the game and dies sacrificing himself to allow Jill to escape a besieged bar. Mikhail Viktor, the already-wounded U.B.C.S. commander, sacrifices himself on the train by detonating an explosive device to throw the Nemesis away from the car and save Jill and Carlos. In the original game, Mikhail dies attempting to destroy the Nemesis with a grenade — in the Remake the scene plays out differently, but the outcome is the same. Nikolai Zinoviev, U.B.C.S. sergeant, reveals himself as a double agent working for a mysterious client hostile to Umbrella, tasked with sabotaging the company's operations and collecting combat data. In the Remake's ending, Jill and Carlos steal the only available helicopter and abandon him in the condemned city — his fate remains officially unknown. Barry Burton does not appear in the Remake in any form."
            },
            note: { it: "Il periodo narrativo di questo capitolo si sovrappone a quello di Resident Evil 2: inizia prima (27 settembre, contro il 29-30 di Jill e Leon) ma finisce nello stesso momento, il 1° ottobre. I due giochi vanno letti come racconti paralleli della stessa settimana, non in sequenza rigida: la posizione qui riflette l'ordine di pubblicazione/narrazione consolidato della saga, non un errore di calcolo delle date.", en: "This chapter's timeframe overlaps with that of Resident Evil 2: it begins earlier (September 27, versus the 29th-30th for Jill and Leon) but ends at the same moment, October 1st. The two games should be read as parallel accounts of the same week, not in strict sequence: its position here reflects the saga's established narrative/release order, not a dating error." }
          },
          { id: "re2", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "29-30 sett. 1998", releaseYear: "1998 (Remake: 2019)", releaseYearEn: "1998 (Remake: 2019)",
            title: { it: "Resident Evil 2", en: "Resident Evil 2" },
            synopsis: {
              it: "Leon S. Kennedy, agente di polizia al suo primo giorno di servizio, arriva a Raccoon City ignaro dell'epidemia. Si imbatte in Claire Redfield, sorella di Chris. I due si separano e vivono avventure parallele attraverso il commissariato di polizia (R.P.D.), le fogne e i laboratori sotterranei, braccati da due minacce distinte: William Birkin in continua mutazione e il Tyrant T-00, un super soldato biologico paracadutato da Umbrella con due obiettivi, recuperare il G-Virus e eliminare i sopravvissuti. Leon incontra Ada Wong, agente misteriosa con un'agenda tutta sua. Claire trova Sherry Birkin, figlia di William. Il commissario Irons si rivela corrotto da Umbrella per insabbiare le prove del G-Virus: un uomo che aveva venduto la città intera in cambio di denaro, crollato psicologicamente durante il caos e ucciso infine da Birkin stesso. Annette Birkin, moglie di William, muore per mano del marito ormai privo di coscienza, ma non prima di rivelare a Claire come sintetizzare il vaccino per salvare Sherry. Leon, Claire e Sherry fuggono dai laboratori sotterranei poco prima dell'autodistruzione dell'impianto.\n\nNel Remake, Birkin stesso incrocia il Tyrant e gli squarcia il torso con gli artigli, incapacitandolo temporaneamente. Il colpo finale lo dà Leon con un lanciarazzi fornito da Ada.",
              en: "Leon S. Kennedy, a police officer on his very first day of duty, arrives in Raccoon City unaware of the outbreak. He runs into Claire Redfield, Chris's sister. The two split up and live parallel adventures through the Raccoon City Police Department (R.P.D.), the sewers, and the underground laboratories, hunted by two distinct threats: William Birkin in continuous mutation, and the Tyrant T-00, a biological super-soldier deployed by Umbrella with two objectives — recovering the G-Virus and eliminating survivors.\n\nLeon meets Ada Wong, a mysterious agent with an agenda entirely her own. Claire finds Sherry Birkin, William's daughter. Chief Irons reveals himself to be corrupted by Umbrella to cover up evidence of the G-Virus: a man who had sold the entire city in exchange for money, who crumbles psychologically during the chaos and is ultimately killed by Birkin himself. Annette Birkin, William's wife, dies at the hands of her now mindless husband, but not before revealing to Claire how to synthesize the vaccine to save Sherry. Leon, Claire, and Sherry escape the underground laboratories just before the facility's self-destruction.\n\nIn the Remake, Birkin himself crosses paths with the Tyrant and tears through its torso with his claws, temporarily incapacitating it. The finishing blow is delivered by Leon with a rocket launcher provided by Ada."
            }
          },
          { id: "survivor", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "Novembre 1998", yearEn: "November 1998", releaseYear: "2000", releaseYearEn: "2000",
            title: { it: "Resident Evil Survivor", en: "Resident Evil Survivor" },
            synopsis: {
              it: "Poco dopo la distruzione di Raccoon City, l'elicottero su cui viaggia Ark Thompson, investigatore privato e amico di Leon S. Kennedy inviato a indagare sulle attività della Umbrella Corporation su Sheena Island, viene abbattuto dal comandante dell'isola Vincent Goldman, che lo aveva scoperto mentre si fingeva lui stesso davanti alla popolazione per raccogliere prove. Ark sopravvive allo schianto ma perde completamente la memoria. Vagando per l'isola, gli abitanti lo scambiano per Goldman, l'uomo che poco prima aveva scatenato deliberatamente il Virus-T sulla popolazione per punire una rivolta dei prigionieri usati come cavie nella produzione dei Tyrant. Convinto per gran parte del gioco di essere davvero l'artefice della strage, Ark incrocia i fratelli Lott e Lily Klein, che dapprima lo temono e attaccano, poi imparano a fidarsi di lui quando li protegge dai mostri. Riemerso gradualmente il ricordo della propria vera identità, Ark si fa strada fino all'impianto Tyrant, salva Lott da un Hunter e fugge dall'isola insieme ai due bambini all'alba, un attimo prima che l'intero complesso Umbrella si autodistrugga.",
              en: "Shortly after the destruction of Raccoon City, the helicopter carrying Ark Thompson — a private investigator and friend of Leon S. Kennedy, sent to look into Umbrella Corporation's activities on Sheena Island — is shot down by the island's commander, Vincent Goldman, after he had spotted Ark posing as him in front of the local population to gather evidence. Ark survives the crash but suffers complete memory loss. Wandering the island, the inhabitants mistake him for Goldman, the man who had shortly before deliberately unleashed the T-Virus on the population to punish a revolt by prisoners used as test subjects in Tyrant production. Convinced for most of the game that he really is the perpetrator of the massacre, Ark crosses paths with siblings Lott and Lily Klein, who at first fear and attack him, then learn to trust him as he protects them from monsters. As his memory of his true identity gradually resurfaces, Ark fights his way to the Tyrant Plant, saves Lott from a Hunter, and escapes the island with both children at dawn, moments before the entire Umbrella complex self-destructs."
            }
          },
          { id: "code-veronica", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "Dicembre 1998", releaseYear: "2000", releaseYearEn: "2000",
            title: { it: "Resident Evil Code: Veronica", en: "Resident Evil Code: Veronica" },
            synopsis: {
              it: "Claire Redfield si infiltra in un impianto Umbrella a Parigi per trovare Chris, viene catturata e deportata su Rockfort Island, una prigione-laboratorio nell'Oceano del Sud. Qui incontra Steve Burnside, altro detenuto, e insieme cercano di fuggire dall'epidemia di Virus-T che ha travolto l'isola.\n\nIl comandante della struttura è Alfred Ashford: figlio di Alexander, nipote del co-fondatore di Umbrella Edward Ashford, nobile britannico, psicotico, ossessionato dalla sorella gemella Alexia addormentata criogenicamente da quindici anni in attesa che il T-Veronica si fondesse con il suo DNA. Steve spara Alfred giù da una passerella, ma questi sopravvive abbastanza a lungo da sabotare il loro aereo a distanza, schiantandoli in Antartide. Lì, nel suo ultimo atto, risveglia Alexia prima di morire. Alexia si ritrova a tenere in braccio il cadavere del fratello, e per vendetta cattura Claire e Steve, iniettando il virus a quest'ultimo.\n\nNel frattempo Chris, avvertito da Claire via email, raggiunge prima Rockfort e poi l'Antartide. Trova Wesker, riapparso trasformato e in cerca di un campione del T-Veronica. Chris affronta Alexia e la sconfigge. Steve, pur mutato dal virus, resiste abbastanza per salvare Claire da Alexia prima di morire. Wesker porta via il suo cadavere per ulteriori esperimenti. Chris e Claire fuggono mentre l'impianto antartico si autodistrugge.",
              en: "Claire Redfield infiltrates an Umbrella facility in Paris to find Chris, gets captured, and is deported to Rockfort Island, a prison-laboratory in the Southern Ocean. There she meets Steve Burnside, another prisoner, and together they attempt to escape the T-Virus outbreak that has overtaken the island.\n\nThe facility's commander is Alfred Ashford: son of Alexander, grandson of Umbrella co-founder Edward Ashford, a British nobleman, psychotic, obsessed with his twin sister Alexia — cryogenically frozen for fifteen years while waiting for the T-Veronica virus to fully bond with her DNA. Steve shoots Alfred off a walkway, but he survives long enough to remotely sabotage their plane, crashing them in Antarctica. There, in his final act, he awakens Alexia before dying. Alexia finds herself cradling her brother's corpse and, in revenge, captures Claire and Steve, injecting the virus into the latter.\n\nMeanwhile, alerted by Claire via email, Chris reaches first Rockfort Island and then Antarctica. He finds Wesker, reappeared and transformed, searching for a T-Veronica sample. Chris confronts Alexia and defeats her. Steve, though mutated by the virus, holds on long enough to save Claire from Alexia before dying. Wesker takes his body away for further experimentation. Chris and Claire escape as the Antarctic facility self-destructs."
            }
          },
          { id: "survivor-2", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "Dicembre 1998 (sogno di Claire)", yearEn: "December 1998 (Claire's dream)", releaseYear: "2001", releaseYearEn: "2001",
            title: { it: "Resident Evil Survivor 2 CODE:Veronica", en: "Resident Evil Survivor 2 CODE:Veronica" },
            synopsis: {
              it: "Subito dopo essere fuggita dall'Antartide insieme al fratello Chris al termine di Code: Veronica, Claire Redfield sogna di trovarsi ancora prigioniera a Rockfort Island. Nel sogno, catturata dall'Umbrella mentre tentava di infiltrarsi in un impianto a Parigi in cerca di indizi su Chris, viene rinchiusa nella prigione dell'isola insieme a un altro detenuto, Steve Burnside. I due pianificano la fuga proprio mentre un'epidemia di Virus-T si scatena tra le celle, braccati per tutta la struttura da un Nemesis-T Type. Essendo dichiaratamente un sogno della mente di Claire, il gioco non introduce eventi realmente accaduti nella continuità principale: rielabora piuttosto, in forma distorta, il trauma vissuto poco prima a Rockfort Island e in Antartide.",
              en: "Immediately after escaping Antarctica together with her brother Chris at the end of Code: Veronica, Claire Redfield dreams that she is still a prisoner on Rockfort Island. In the dream, captured by Umbrella while attempting to infiltrate a facility in Paris in search of clues about Chris, she is locked in the island's prison alongside another inmate, Steve Burnside. The two plan their escape just as a T-Virus outbreak breaks out among the cells, hunted throughout the facility by a Nemesis-T Type. Being explicitly a dream within Claire's mind, the game does not introduce events that actually occurred within the main continuity — it instead reworks, in distorted form, the trauma she had just lived through on Rockfort Island and in Antarctica."
            }
          },
          { id: "dead-aim", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "Settembre 2002", releaseYear: "2003", releaseYearEn: "2003",
            title: { it: "Resident Evil: Dead Aim", en: "Resident Evil: Dead Aim" },
            synopsis: {
              it: "Morpheus D. Duvall, ex dirigente Umbrella usato come capro espiatorio per l'incidente della villa Spencer e licenziato, ruba dal laboratorio Umbrella di Parigi campioni del Virus-T e del T+G, un ibrido sperimentale tra il Virus-T e il G-Virus. Dirottata la nave da crociera Spencer Rain, minaccia di lanciare missili biologici contro USA e Cina in cambio di cinque miliardi di dollari, con l'obiettivo finale di fondare una colonia africana basata su principi estetici ed eugenici.\n\nBruce McGivern, agente americano, e Fong Ling, agente cinese, vengono inviati a fermarlo. Gravemente ferito durante il confronto, Morpheus si inietta il T+G trasformandosi in una forma di Tyrant femminile capace di generare scariche elettriche, mantenendo però la propria lucidità mentale. Quando il G-Virus prende il sopravvento perde ogni razionalità e si trasforma in una massa di carne pulsante. Bruce lo distrugge col cannone a particelle: il corpo di Morpheus esplode, distruggendo i missili prima del lancio.",
              en: "Morpheus D. Duvall, a former Umbrella executive used as a scapegoat for the Spencer Mansion incident and subsequently fired, steals samples of the T-Virus and T+G — an experimental hybrid of the T-Virus and G-Virus — from Umbrella's Paris laboratory. Having hijacked the cruise ship Spencer Rain, he threatens to launch biological missiles against the United States and China in exchange for five billion dollars, with the ultimate goal of founding an African colony based on aesthetic and eugenic principles.\n\nBruce McGivern, an American agent, and Fong Ling, a Chinese agent, are dispatched to stop him. Gravely wounded during the confrontation, Morpheus injects himself with the T+G, transforming into a feminine Tyrant-like form capable of generating electrical discharges while retaining his own mental clarity. When the G-Virus takes over he loses all rationality and transforms into a pulsating mass of flesh. Bruce destroys him with a particle cannon — Morpheus's body explodes, destroying the missiles before they can be launched."
            }
          },
          { id: "darkside-javier", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "Estate 2002", releaseYear: "2009", releaseYearEn: "2009",
            title: { it: "Resident Evil: The Darkside Chronicles — Operazione Javier", en: "Resident Evil: The Darkside Chronicles — Operation Javier" },
            synopsis: {
              it: "Leon Kennedy e Jack Krauser, operativo dello US SOCOM, vengono inviati in Sud America per fermare Javier Hidalgo, signore della droga a capo del cartello dei Sacred Snakes, che aveva preso contatti con un ex ricercatore Umbrella scomparso. Krauser comandava un'intera unità speciale, i cui membri vengono sterminati uno ad uno durante la missione: lui e Leon rimangono gli unici sopravvissuti, abbandonati deliberatamente dal governo americano nella giungla di Amparo.\n\nJavier aveva acquistato campioni di Virus-T dal 1991 per curare la moglie Hilda, trasformandola invece in un mostro. Quando la stessa malattia colpì la figlia Manuela, fu Wesker in persona a contattarlo vendendogli campioni del T-Veronica. Con l'aiuto di Manuela, Leon e Krauser sconfiggono infine Javier dopo che questi si fonde con una pianta carnivora mutata. Durante lo scontro con Hilda, uno spuntone del suo corpo trafigge il braccio sinistro di Krauser in modo irreparabile. Congedato dall'esercito, tradito dallo stato che serviva e convinto di valere meno di Leon agli occhi del governo, inizia a cercare Wesker nell'unico obiettivo di recuperare il braccio e ottenere potere.",
              en: "Leon Kennedy and Jack Krauser, an operative of US SOCOM, are sent to South America to stop Javier Hidalgo, a drug lord heading the Sacred Snakes cartel, who had made contact with a missing former Umbrella researcher. Krauser commanded an entire special unit, whose members are eliminated one by one during the mission — he and Leon are the only survivors, deliberately abandoned by the American government in the jungles of Amparo.\n\nJavier had been purchasing T-Virus samples since 1991 in an attempt to cure his wife Hilda, instead transforming her into a monster. When the same illness struck his daughter Manuela, it was Wesker himself who contacted him, selling him T-Veronica samples as a treatment. With Manuela's help, Leon and Krauser finally defeat Javier after he merges with a mutated carnivorous plant. During the confrontation with Hilda, a spike from her body pierces Krauser's left arm beyond repair. Discharged from the military, betrayed by the state he served, and convinced he is worth less than Leon in the government's eyes, he begins searching for Wesker with one single objective: to reclaim the use of his arm and obtain power."
            }
          },
          { id: "umbrella-chronicles-talos", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "18 febbraio 2003", releaseYear: "2007", releaseYearEn: "2007",
            title: { it: "Resident Evil: The Umbrella Chronicles — Operazione T.A.L.O.S.", en: "Resident Evil: The Umbrella Chronicles — Operation T.A.L.O.S." },
            synopsis: {
              it: "Dopo il disastro di Raccoon City, Umbrella aveva spostato la propria sede operativa in una fortezza segreta nelle montagne del Caucaso, in Russia, continuando a sviluppare armi biologiche da vendere alle zone di conflitto mondiali. Segnalazioni di strani incidenti in un villaggio vicino portano un'unità regionale anti-bioterrorismo a scoprire la base. Chris Redfield e Jill Valentine ne fanno parte e guidano l'assalto in forze.\n\nQuello che non sanno è che Wesker stesso aveva soffiato la posizione della base all'unità, usando il loro attacco come diversivo per infiltrarsi e rubare per sé l'intero archivio dati di Umbrella. Mentre Chris e Jill si fanno strada tra zombi e creature fino ai livelli sotterranei, Wesker affronta in parallelo Sergei Vladimir, comandante della struttura, che si trasforma in un Tyrant. Wesker lo sconfigge, spegne la supercomputer Regina Rossa e porta via tutto.\n\nChris e Jill raggiungono il nucleo della struttura e distruggono il T.A.L.O.S., l'arma più potente mai sviluppata da Umbrella: un Tyrant corazzato con esoscheletro metallico e controllo remoto tramite chip cerebrale. Con la sua distruzione, anni di ricerca sofisticata di Umbrella finirono in un fallimento definitivo e la compagnia fu veramente finita. L'impianto crolla. Wesker se ne va con i dati, pronto a usarli per il proprio piano.",
              en: "Following the Raccoon City disaster, Umbrella had relocated its operational headquarters to a secret fortress in the Caucasus Mountains in Russia, continuing to develop biological weapons for sale to conflict zones around the world. Reports of strange incidents in a nearby village lead a regional anti-bioterrorism unit to discover the base. Chris Redfield and Jill Valentine are among its members and lead the assault in force.\n\nWhat they do not know is that Wesker himself had leaked the base's location to the unit, using their attack as a diversion to infiltrate the facility and steal Umbrella's entire data archive for himself. While Chris and Jill fight their way through zombies and creatures down to the underground levels, Wesker simultaneously confronts Sergei Vladimir, the facility's commander, who transforms into a Tyrant. Wesker defeats him, shuts down the supercomputer Red Queen, and takes everything.\n\nChris and Jill reach the facility's core and destroy T.A.L.O.S. — the most powerful weapon Umbrella ever developed: a Tyrant armored with a metal exoskeleton and remotely controlled via a cerebral chip. With its destruction, years of Umbrella's most sophisticated research ended in definitive failure, and the company was truly finished. The facility collapses. Wesker walks away with the data, ready to use it for his own plan."
            }
          },
          { id: "re4", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "Autunno 2004", releaseYear: "2005 (Remake: 2023)", releaseYearEn: "2005 (Remake: 2023)",
            title: { it: "Resident Evil 4", en: "Resident Evil 4" },
            synopsis: {
              it: "Leon S. Kennedy, diventato agente speciale del governo americano dopo Raccoon City, viene inviato in un villaggio rurale della Spagna per ritrovare Ashley Graham, figlia del Presidente, rapita e portata in Europa. Il responsabile del rapimento è Jack Krauser, infiltrato nel culto di Los Illuminados per conto di Wesker con l'obiettivo di rubare un campione della Plaga dominante. Per guadagnarsi la fiducia di Saddler, Krauser gli aveva consegnato Ashley come pegno.\n\nLos Illuminados è un antico culto guidato da Osmund Saddler, che usa un parassita biologico chiamato Las Plagas per controllare la mente degli infettati. I Ganados, a differenza degli zombi di Raccoon City, sono veloci, coordinati e capaci di usare armi. Saddler vuole usare Ashley come vettore per infettare il Presidente e, tramite lui, il governo americano. Leon stesso viene infettato durante la missione, così come Ashley.\n\nLuis Sera, ex ricercatore del culto, aiuta Leon con informazioni cruciali sulle Plagas e un soppressore per rallentare l'infezione, ma viene ucciso da Saddler, o Krauser nel remake, prima di poter consegnare il vaccino. Ada Wong opera in parallelo, apparentemente per aiutare Leon ma in realtà al soldo di Wesker per recuperare la Plaga dominante. Krauser si rivela come nemico e Leon lo sconfigge. Nel remake, il veterano di guerra sopravvive allo scontro per essere poi ucciso definitivamente da Ada. Wesker ne recupera il cadavere per estrarne la Plaga.\n\nLeon e Ashley riescono ad estirpare i parassiti grazie alla macchina di Luis, poi eliminano Saddler con l'aiuto di Ada, che lancia a Leon un lanciarazzi nel momento decisivo. Ada fugge con il campione della Plaga dominante. Leon e Ashley scappano dall'isola in fiamme su una moto d'acqua. Il DLC Separate Ways racconta gli stessi eventi dal punto di vista di Ada, rivelando i dettagli della sua operazione parallela e il suo rapporto con Wesker.",
              en: "Leon S. Kennedy, now a special agent for the American government following Raccoon City, is sent to a rural village in Spain to retrieve Ashley Graham, the President's daughter, who has been kidnapped and brought to Europe. The mastermind behind the kidnapping is Jack Krauser, who had infiltrated the Los Illuminados cult on Wesker's behalf with the objective of stealing a sample of the dominant Plaga. To earn Saddler's trust, Krauser had handed Ashley over as a bargaining chip.\n\nLos Illuminados is an ancient cult led by Osmund Saddler, who uses a biological parasite called Las Plagas to control the minds of the infected. The Ganados, unlike the zombies of Raccoon City, are fast, coordinated, and capable of wielding weapons. Saddler intends to use Ashley as a vector to infect the President and, through him, the American government. Leon himself becomes infected during the mission, as does Ashley.\n\nLuis Sera, a former cult researcher, helps Leon with crucial information about the Plagas and a suppressant to slow the infection, but is killed by Saddler — or by Krauser in the Remake — before he can deliver the vaccine. Ada Wong operates in parallel, seemingly helping Leon but in reality working for Wesker to recover the dominant Plaga. Krauser reveals himself as an enemy and Leon defeats him. In the Remake, the war veteran survives the confrontation only to be killed definitively by Ada. Wesker recovers his body to extract the Plaga.\n\nLeon and Ashley manage to remove the parasites using Luis's machine, then eliminate Saddler with Ada's help, as she throws Leon a rocket launcher at the decisive moment. Ada escapes with the dominant Plaga sample. Leon and Ashley flee the burning island on a jet ski. The DLC Separate Ways retells the same events from Ada's perspective, revealing the details of her parallel operation and her relationship with Wesker."
            }
          },
          { id: "re-revelations", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "2005", releaseYear: "2012", releaseYearEn: "2012",
            title: { it: "Resident Evil: Revelations", en: "Resident Evil: Revelations" },
            synopsis: {
              it: "Un anno dopo il crollo di Terragrigia, la BSAA invia Jill Valentine e il suo nuovo partner Parker Luciani a cercare Chris Redfield e la sua partner Jessica Sherawat, scomparsi nel Mediterraneo. Le indagini portano a bordo della Queen Zenobia, una nave da crociera apparentemente abbandonata infestata da mutanti deformati dal T-Abyss, un virus derivato dal Progenitore progettato per sopravvivere e diffondersi negli ambienti acquatici. Jill e Parker scoprono quasi subito di essere caduti in una trappola.\n\nLa cospirazione è più profonda di quanto sembri. Dietro la facciata del gruppo terroristico Il Veltro si nasconde Morgan Lansdale, direttore della Commissione Federale per il Bioterrorismo, che aveva orchestrato fin dall'inizio l'attacco alla città galleggiante di Terragrigia nel 2004 per poi usarne la distruzione come copertura dei propri crimini. Il direttore della BSAA, Clive O'Brian, aveva invece messo in piedi l'intera operazione sulla Zenobia come trappola per raccogliere prove contro Lansdale, senza dirlo a nessuno dei suoi agenti.\n\nI traditori non finiscono qui. Jessica Sherawat si rivela essere una spia al servizio di Tricell, che spara all'apparente leader di Veltro per proteggere Lansdale, poi attiva l'autodistruzione della nave per eliminare le prove, ferendo Parker e lasciandolo per morto. Raymond Vester, agente che sembrava lavorare per Il Veltro, si rivela invece una talpa di O'Brian e salva Parker prima di fuggire. Jack Norman, il vero capo di Veltro, è sopravvissuto un anno iniettandosi ripetutamente il T-Abyss, che lo ha reso instabile e delirante. Chris e Jill lo sconfiggono nella sua forma mutata e trasmettono le prove video che incastrano Lansdale: il commissario viene arrestato, la FBC sciolta, O'Brian rilasciato. In una scena finale, Jessica e Raymond si incontrano in un caffè europeo: entrambi lavoravano per Tricell. Lei porta via un campione di T-Abyss.",
              en: "One year after the fall of Terragrigia, the BSAA sends Jill Valentine and her new partner Parker Luciani to search for Chris Redfield and his partner Jessica Sherawat, who have gone missing in the Mediterranean. The investigation leads them aboard the Queen Zenobia, an apparently abandoned cruise ship overrun by mutants deformed by the T-Abyss — a virus derived from the Progenitor, engineered to survive and spread in aquatic environments. Jill and Parker quickly realize they have walked into a trap.\n\nThe conspiracy runs deeper than it appears. Behind the façade of the terrorist group Il Veltro lurks Morgan Lansdale, director of the Federal Bioterrorism Commission, who had orchestrated from the very beginning the 2004 attack on the floating city of Terragrigia, then used its destruction as cover for his own crimes. BSAA director Clive O'Brian, on the other hand, had set up the entire Zenobia operation as a sting to gather evidence against Lansdale — without telling any of his own agents.\n\nThe traitors do not end there. Jessica Sherawat reveals herself as a spy working for Tricell, shooting the apparent Veltro leader to protect Lansdale, then activating the ship's self-destruct sequence to eliminate the evidence, wounding Parker and leaving him for dead. Raymond Vester, an agent who appeared to be working for Il Veltro, turns out to be O'Brian's mole and saves Parker before fleeing. Jack Norman, the true leader of Veltro, has survived an entire year by repeatedly injecting himself with the T-Abyss, which has left him unstable and delusional. Chris and Jill defeat him in his mutated form and broadcast the video evidence that incriminates Lansdale — the commissioner is arrested, the FBC disbanded, and O'Brian released. In a final scene, Jessica and Raymond meet at a European café: both were working for Tricell all along. She walks away with a T-Abyss sample."
            }
          },
          { id: "degeneration", type: "FILM CGI", typeEn: "CGI FILM", year: "Novembre 2005", releaseYear: "2008", releaseYearEn: "2008",
            title: { it: "Resident Evil: Degeneration", en: "Resident Evil: Degeneration" },
            synopsis: {
              it: "Sette anni dopo Raccoon City. Claire Redfield, ora membro attivo di TerraSave, arriva all'aeroporto di Harvardville per una manifestazione contro la WilPharma Corporation, accusata di condurre sperimentazioni sul Virus-T su cavie umane. Leon Kennedy viene inviato con una squadra speciale quando un passeggero infetto provoca un'epidemia nell'aeroporto. I due si ritrovano per caso a combattere fianco a fianco.\n\nIl vero responsabile non è Curtis Miller, il sopravvissuto di Raccoon City che sembra orchestrare gli attentati, ma il dottor Frederic Downing: ex ricercatore Umbrella che aveva rubato campioni di Virus-T e Virus-G subito prima della distruzione della città e li aveva portati in WilPharma per sviluppare anche un vaccino, con l'obiettivo finale di vendere il pacchetto completo sul mercato nero. Curtis era solo il capro espiatorio, manipolato da Downing e iniettato con il Virus-G quando non serviva più. Leon è costretto a ucciderlo nella forma mutata finale.\n\nDowning viene arrestato mentre stava trattando la vendita col Generale Grande. Nel frattempo la WilPharma, travolta dallo scandalo, entra in crisi: le sue ricerche vengono acquisite da una nuova multinazionale chiamata Tricell. Una piccola scena finale mostra dipendenti Tricell che recuperano un frammento del corpo di Curtis, ancora infetto dal Virus-G.",
              en: "Seven years after Raccoon City. Claire Redfield, now an active member of TerraSave, arrives at Harvardville Airport for a protest against the WilPharma Corporation, accused of conducting T-Virus experiments on human test subjects. Leon Kennedy is dispatched with a special unit when an infected passenger triggers an outbreak inside the airport. The two find themselves fighting side by side by chance.\n\nThe true culprit is not Curtis Miller, the Raccoon City survivor who appears to be orchestrating the attacks, but Dr. Frederic Downing: a former Umbrella researcher who had stolen samples of the T-Virus and G-Virus just before the city's destruction and brought them to WilPharma to develop a vaccine as well, with the ultimate goal of selling the complete package on the black market. Curtis was merely the scapegoat, manipulated by Downing and injected with the G-Virus once he was no longer needed. Leon is forced to kill him in his final mutated form.\n\nDowning is arrested while negotiating the sale with General Grande. Meanwhile WilPharma, overwhelmed by the scandal, collapses — its research is acquired by a new multinational corporation called Tricell. A brief final scene shows Tricell employees recovering a fragment of Curtis's body, still infected with the G-Virus."
            }
          },
          { id: "infinite-darkness", type: "FILM CGI", typeEn: "CGI FILM", year: "2006", releaseYear: "2021", releaseYearEn: "2021",
            title: { it: "Resident Evil: Infinite Darkness", en: "Resident Evil: Infinite Darkness" },
            synopsis: {
              it: "Un file top secret della Casa Bianca viene violato da un hacker. Leon Kennedy viene convocato insieme ad altri tre agenti per indagare: Jason, veterano soprannominato \"l'Eroe di Penamstan\", Shen May, specialista informatica, e Patrick, agente alle prime armi. Quella stessa notte zombi attaccano il palazzo: qualcuno ha introdotto un'infezione dall'interno. Nel frattempo Claire Redfield, in missione umanitaria per TerraSave in Penamstan, trova tra i disegni di un bambino rifugiato, incapace di parlare per il trauma, l'immagine di quello che sembra un contagiato da virus biologico.\n\nLe due indagini si intrecciano rivelando una cospirazione che risale al 2000, durante la guerra civile in Penamstan: il Segretario alla Difesa Wilson aveva testato su soldati americani del proprio reparto un ceppo virale che potenziava le capacità fisiche ma richiedeva un inibitore quotidiano per non trasformarsi. Jason e Shen May erano tra quei soldati, e da allora stavano raccogliendo prove contro Wilson. Jason, ormai dipendente dall'inibitore, viene usato da Wilson come agente personale in cambio della medicina. Wilson intende incolpare la Cina degli attacchi, spingere il Presidente Graham verso un conflitto armato e vendere il virus e gli inibitori come arma al governo di Penamstan, diventando enormemente ricco nel processo.\n\nJason alla fine tradisce Wilson infettandolo, poi smette di prendere l'inibitore e si trasforma in un Tyrant, convinto che mostrare al mondo la propria mutazione in diretta televisiva possa impedire che tragedie simili si ripetano. Leon lo sconfigge in uno scontro negli impianti sotterranei. Shen May viene uccisa da Jason stesso prima della trasformazione finale. Patrick convince il Presidente a non attaccare la Cina. Wilson sopravvive, infetto e dipendente dall'inibitore.\n\nLeon trova le prove complete dei crimini di Wilson ma sceglie di non renderle pubbliche per evitare il panico, consegnando il chip con i dati a nessuno. Claire, furiosa, comprende che Leon e il governo americano continueranno a seppellire la verità. Nel finale, Wilson viene ritratto in un incontro segreto con un rappresentante di Tricell: la rete è già pronta per quello che verrà in Africa.",
              en: "A top secret White House file is breached by a hacker. Leon Kennedy is summoned along with three other agents to investigate: Jason, a veteran nicknamed \"the Hero of Penamstan,\" Shen May, an IT specialist, and Patrick, a rookie agent. That same night zombies attack the building — someone has introduced an infection from the inside. Meanwhile Claire Redfield, on a humanitarian mission for TerraSave in Penamstan, finds among the drawings of a traumatized refugee child who is unable to speak, an image of what appears to be a victim of a biological virus.\n\nThe two investigations intertwine, uncovering a conspiracy dating back to 2000, during the Penamstan civil war: Secretary of Defense Wilson had tested on American soldiers under his command a viral strain that enhanced physical capabilities but required a daily inhibitor to prevent transformation. Jason and Shen May were among those soldiers, and had since been gathering evidence against Wilson. Jason, now dependent on the inhibitor, is used by Wilson as his personal agent in exchange for the medicine. Wilson intends to blame China for the attacks, push President Graham toward armed conflict, and sell the virus and inhibitors as a weapon to the Penamstan government, becoming enormously wealthy in the process.\n\nJason ultimately betrays Wilson by infecting him, then stops taking the inhibitor and transforms into a Tyrant, convinced that showing the world his own mutation on live television can prevent similar tragedies from happening again. Leon defeats him in a confrontation in the underground facilities. Shen May is killed by Jason himself before his final transformation. Patrick convinces the President not to attack China. Wilson survives, infected and dependent on the inhibitor.\n\nLeon finds complete evidence of Wilson's crimes but chooses not to make them public to avoid panic, handing the data chip to no one. Claire, furious, understands that Leon and the American government will continue to bury the truth. In the final scene, Wilson is shown in a secret meeting with a Tricell representative — the network is already in place for what is to come in Africa."
            }
          },
          { id: "re5", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "Marzo 2009", releaseYear: "2009", releaseYearEn: "2009",
            title: { it: "Resident Evil 5", en: "Resident Evil 5" },
            synopsis: {
              it: "Chris Redfield viene inviato nella zona autonoma di Kijuju, una regione dell'Africa occidentale, per supportare l'operazione di cattura di Ricardo Irving, trafficante di armi biologiche sul mercato nero. Sul posto lo attende Sheva Alomar, agente della sezione africana della BSAA, assegnata come sua partner locale per l'occasione. La popolazione locale è stata trasformata in Majini, esseri controllati da una versione evoluta delle Plagas. Irving si inietta una Plaga dominante per sfuggire all'arresto ma viene sconfitto, rivelando prima di morire che dietro tutto c'è Excella Gionne, direttrice della Tricell Africa.\n\nSeguendo le sue tracce, Chris e Sheva scoprono una struttura sotterranea costruita nella stessa caverna dove Spencer, Marcus e Bailey avevano trovato il Progenitore quarant'anni prima. Il cerchio si chiude. Fu Wesker stesso a suggerire ad Excella di prendere il controllo della Tricell Africa, sfruttando l'interesse romantico di lei per lui e usandola come copertura per il Progetto Uroboros. L'Uroboros era stato sviluppato usando gli anticorpi estratti da Jill Valentine, tenuta prigioniera nella struttura e usata come cavia inconsapevole per perfezionare il virus.\n\nChris trova Jill viva ma asservita a Wesker tramite un dispositivo meccanico applicato al petto che le inietta costantemente una droga chiamata P30, privandola del libero arbitrio. Liberata dal dispositivo, Jill rivela a Chris la debolezza di Wesker: dosi eccessive del siero PG67A/W lo destabilizzano.\n\nExcella, convinta di essere la regina del nuovo mondo che Wesker stava costruendo, viene tradita da lui e infettata con l'Uroboros non appena diventa superflua. Wesker raggiunge il bombardiere carico di missili Uroboros pronti ad essere lanciati nell'atmosfera terrestre. Chris e Sheva riescono a farlo schiantare, poi affrontano Wesker in una battaglia finale sul bordo di un vulcano attivo. Wesker, iniettandosi direttamente l'Uroboros in un ultimo gesto disperato, si trasforma ma viene spinto nella lava da Chris e Sheva con due lanciarazzi. Josh Stone li recupera in elicottero con Jill mentre il vulcano erutta.\n\nIl DLC Incubo Senza Uscita ricostruisce la missione del 2006 in cui Chris e Jill si infiltrarono nella villa Spencer, dove trovarono il vecchio fondatore ormai morente. Wesker era già lì: Spencer gli rivelò le sue origini come prodotto del Progetto Wesker, un programma eugenico per creare una razza superiore, convinto di poterlo ancora controllare come erede del suo piano. Wesker lo uccise sul momento, sentendosi finalmente libero dal passato. Jill si sacrificò per fermare Wesker cadendo da una finestra assieme a lui, sparendo per tre anni.\n\nIl DLC Una Fuga Disperata segue invece Jill e Josh nel tentativo di raggiungere Chris e Sheva durante gli eventi finali del gioco.",
              en: "Chris Redfield is sent to the autonomous region of Kijuju in West Africa to support the operation to capture Ricardo Irving, a black market biological weapons trafficker. Waiting for him on the ground is Sheva Alomar, an agent from the BSAA's African branch, assigned as his local partner for the mission. The local population has been transformed into Majini — beings controlled by an evolved strain of Las Plagas. Irving injects himself with a dominant Plaga to evade arrest but is defeated, revealing before his death that the true force behind everything is Excella Gionne, director of Tricell Africa.\n\nFollowing her trail, Chris and Sheva discover an underground facility built in the very same cave where Spencer, Marcus, and Bailey had found the Progenitor forty years earlier. The circle closes. It was Wesker himself who had suggested Excella take control of Tricell Africa, exploiting her romantic interest in him and using her as cover for the Uroboros Project. Uroboros had been developed using antibodies extracted from Jill Valentine, held prisoner in the facility and used as an unwitting test subject to perfect the virus.\n\nChris finds Jill alive but enslaved to Wesker through a mechanical device attached to her chest that continuously injects her with a drug called P30, stripping her of her free will. Once freed from the device, Jill reveals to Chris Wesker's weakness: excessive doses of the serum PG67A/W destabilize him.\n\nExcella, convinced she is to be the queen of the new world Wesker is building, is betrayed by him and infected with Uroboros the moment she becomes expendable. Wesker reaches a bomber loaded with Uroboros missiles ready to be launched into the Earth's atmosphere. Chris and Sheva manage to bring it down, then confront Wesker in a final battle on the edge of an active volcano. Wesker, injecting himself directly with Uroboros in a last desperate act, transforms but is driven into the lava by Chris and Sheva using two rocket launchers. Josh Stone retrieves them by helicopter along with Jill as the volcano erupts.\n\nThe DLC Lost in Nightmares reconstructs the 2006 mission in which Chris and Jill infiltrated the Spencer Mansion, where they found the elderly founder on the verge of death. Wesker was already there — Spencer revealed to him his origins as a product of the Wesker Project, a eugenics program designed to create a superior race, convinced he could still control him as the heir to his plan. Wesker killed him on the spot, feeling finally free from his past. Jill sacrificed herself to stop Wesker by falling through a window together with him, disappearing for three years.\n\nThe DLC Desperate Escape follows Jill and Josh as they attempt to reach Chris and Sheva during the game's final events."
            }
          },
          { id: "revelations-2", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "2011", releaseYear: "2015", releaseYearEn: "2015",
            title: { it: "Resident Evil: Revelations 2", en: "Resident Evil: Revelations 2" },
            synopsis: {
              it: "Claire Redfield e Moira Burton vengono rapite durante una festa di TerraSave e si risvegliano su Sein Island, un'isola del Mar Baltico trasformata in laboratorio segreto. Le prigioniere portano braccialetti infettati con il T-Phobos, un virus che reagisce agli ormoni dello stress: chi cede alla paura viene trasformato in una creatura. Il vero artefice è Neil Fisher, membro traditore di TerraSave che aveva venduto le colleghe alla Sorvegliante in cambio di un campione di Uroboros con cui sperava di restaurare la disciolta FBC.\n\nLa Sorvegliante è Alex Wesker, la più brillante tra i figli del Progetto Wesker secondo Spencer stesso, sorella adottiva di Albert. Il virus Progenitore ricevuto durante il programma non le aveva conferito superpoteri come ad Albert: la stava lentamente uccidendo. Sopravvissuta al proprio tentativo di suicidio ma rimasta orribilmente mutata, si nasconde sull'isola con una maschera e un mantello. Il suo piano era trasferire la propria coscienza nel corpo di Natalia Korda, bambina rimasta orfana durante il disastro di Terragrigia, scelta perché il trauma l'aveva resa incapace di sentire paura, rendendola immune al T-Phobos.\n\nSei mesi dopo la scomparsa di Claire e Moira, Barry Burton raggiunge l'isola accompagnato da Natalia stessa. I due si fanno strada fino al covo sotterraneo di Alex, che si inietta una dose massiccia di Uroboros per trasformarsi e ucciderli. Moira, sopravvissuta sei mesi nell'isola grazie all'aiuto di un vecchio russo di nome Evgeny, interviene nel momento decisivo abbattendo temporaneamente Alex e permettendo a Barry di portare Natalia in salvo. Claire arriva con un elicottero e con un lanciarazzi distrugge la forma finale di Alex.\n\nNel finale canonico, la coscienza di Alex aveva già trasferito una copia di sé stessa in Natalia prima di morire. Due anni dopo, Natalia è stata adottata dalla famiglia Burton e vive in Canada. Ma in una scena finale la si vede sorridere maliziosamente: la coscienza di Alex sopravvive dentro di lei, dormiente, in attesa.",
              en: "Claire Redfield and Moira Burton are kidnapped during a TerraSave party and wake up on Sein Island, a Baltic Sea island converted into a secret laboratory. The prisoners wear bracelets infected with the T-Phobos virus, which reacts to stress hormones — those who succumb to fear are transformed into creatures. The true architect is Neil Fisher, a traitorous TerraSave member who had sold his colleagues to the Overseer in exchange for an Uroboros sample he hoped to use to restore the disbanded FBC.\n\nThe Overseer is Alex Wesker, the most brilliant of the Wesker Project children according to Spencer himself, and Albert's adoptive sister. The Progenitor virus she received during the program had not granted her superhuman abilities as it had Albert — it was slowly killing her. Having survived her own suicide attempt but left horribly mutated, she hides on the island behind a mask and cloak. Her plan was to transfer her own consciousness into the body of Natalia Korda, a girl orphaned during the Terragrigia disaster, chosen because her trauma had rendered her incapable of feeling fear, making her immune to the T-Phobos.\n\nSix months after Claire and Moira's disappearance, Barry Burton reaches the island accompanied by Natalia herself. The two fight their way down to Alex's underground lair, where she injects herself with a massive dose of Uroboros to transform and kill them. Moira, having survived six months on the island with the help of an old Russian man named Evgeny, intervenes at the decisive moment, temporarily bringing Alex down and allowing Barry to carry Natalia to safety. Claire arrives by helicopter and destroys Alex's final form with a rocket launcher.\n\nIn the canonical ending, Alex's consciousness had already transferred a copy of itself into Natalia before dying. Two years later, Natalia has been adopted by the Burton family and lives in Canada. But in a final scene she is seen smiling maliciously — Alex's consciousness survives inside her, dormant, waiting."
            }
          },
          { id: "damnation", type: "FILM CGI", typeEn: "CGI FILM", year: "2012", releaseYear: "2012", releaseYearEn: "2012",
            title: { it: "Resident Evil: Damnation", en: "Resident Evil: Damnation" },
            synopsis: {
              it: "Leon Kennedy, agente del DSO, viene inviato nella Repubblica Slava dell'Est, piccola nazione ex sovietica in piena guerra civile, per verificare voci sull'utilizzo di armi biologiche nel conflitto. Il governo americano gli ordina quasi subito di ritirarsi. Leon ignora l'ordine.\n\nSul campo incontra Buddy, ex insegnante diventato leader ribelle, e JD, giovane combattente con una passione sfrenata per i prodotti americani. I ribelli usano Las Plagas per controllare i Licker in battaglia. La verità però è più contorta: è la presidente Svetlana Belikova stessa a rifornire segretamente i ribelli di Plagas, così da giustificare agli occhi della comunità internazionale una risposta militare devastante che le consolidi il potere. Ada Wong si aggira nel paese spacciandosi per agente BSAA, con la propria agenda parallela.\n\nQuando la situazione precipita, Svetlana scatena tre Tyrant T-103 contro Leon e Buddy nei sotterranei del palazzo presidenziale. I due sopravvivono grazie all'intervento dell'esercito americano e russo. JD muore trasformato in Ganados, ucciso da Leon stesso. Buddy, ormai dominato dalla Plaga, chiede a Leon di ucciderlo. Leon sceglie invece di sparargli alla colonna vertebrale, paralizzandolo ma liberandolo dal parassita. Buddy sopravvive in sedia a rotelle e torna a fare l'insegnante. Ada fugge con un campione di Plaga e tratta la vendita con un misterioso acquirente in cambio dell'annullamento del mandato di cattura internazionale a lei affibbiato.",
              en: "Leon Kennedy, a DSO agent, is sent to the Eastern Slav Republic, a small former Soviet nation in the grip of civil war, to verify reports of biological weapons being used in the conflict. The American government orders him to withdraw almost immediately. Leon ignores the order.\n\nOn the ground he meets Buddy, a former teacher turned rebel leader, and JD, a young fighter with an overwhelming passion for American products. The rebels use Las Plagas to control Lickers in battle. The truth, however, is far more twisted: it is President Svetlana Belikova herself who is secretly supplying the rebels with Plagas, in order to justify a devastating military response in the eyes of the international community that will consolidate her power. Ada Wong moves through the country posing as a BSAA agent, with her own parallel agenda.\n\nWhen the situation spirals out of control, Svetlana unleashes three Tyrant T-103s against Leon and Buddy in the underground tunnels of the presidential palace. The two survive thanks to the intervention of American and Russian forces. JD dies after being transformed into a Ganado, killed by Leon himself. Buddy, now dominated by the Plaga, asks Leon to kill him. Leon instead chooses to shoot him in the spine, paralyzing him but freeing him from the parasite. Buddy survives in a wheelchair and returns to teaching. Ada escapes with a Plaga sample and negotiates its sale with a mysterious buyer in exchange for the cancellation of the international arrest warrant issued against her."
            }
          },
          { id: "re6", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "Dicembre 2012 – Luglio 2013", releaseYear: "2012", releaseYearEn: "2012",
            title: { it: "Resident Evil 6", en: "Resident Evil 6" },
            synopsis: {
              it: "Il bioterrorismo colpisce su scala mondiale in quattro campagne parallele e intrecciate.\n\nDerek C. Simmons, consigliere per la sicurezza nazionale degli USA e capo della società segreta nota come La Famiglia, orchestra l'assassinio del Presidente Benford per impedirgli di rivelare i legami del governo con Umbrella. Per farlo usa il C-Virus, un agente biologico capace di trasformare i contagiati in creature mutanti chiamate J'avo. Leon Kennedy e l'agente Helena Harper, che Simmons aveva ricattato tenendo in ostaggio la sorella Deborah, si ritrovano a dover abbattere il Presidente trasformato in zombi durante un discorso pubblico. Helena rivela a Leon che Simmons è il mandante, e i due partono per la Cina per fermarlo.\n\nChris Redfield e Piers Nivans combattono in Edonia, Europa dell'Est, dove la guerra civile sta usando le J'avo come soldati. Un agente di Neo-Umbrella, Carla Radames, travestito da Ada Wong stermina l'intera squadra di Chris, lasciandolo traumatizzato. Sei mesi dopo, Piers lo ritrova alcolizzato in un bar e lo trascina fuori. I due raggiungono la Cina sulle tracce della falsa Ada.\n\nJake Muller, mercenario figlio illegittimo di Albert Wesker, ha nel sangue un anticorpo naturale al C-Virus. Sherry Birkin viene inviata a proteggerlo e portarlo in salvo in cambio di cinquanta milioni di dollari, la cifra richiesta da Jake. Durante la fuga dall'Edonia vengono braccati dall'Ustanak, una poderosa arma biologica di Neo-Umbrella programmata specificamente per catturare Jake vivo. La creatura è enorme, quasi indistruttibile, e non smette mai di inseguirli. È Carla Radames in persona a fermarli con una squadra di J'avo, rivelando a Jake la verità su suo padre, poi l'Ustanak tramortisce entrambi e li consegna a Neo-Umbrella.\n\nRinchiusi in una struttura sottomarina in Cina, vengono usati come cavie per sei mesi. Jake trova un modo per spegnere i generatori della struttura, permettendo anche a Sherry di fuggire dalla propria cella. L'Ustanak viene scatenato di nuovo contro di loro. In mezzo al caos incontrano Chris Redfield e Piers Nivans, che li liberano grazie a una soffiata di Leon. Chris confessa a Jake di aver ucciso suo padre Wesker: Jake punta la pistola su di lui. La situazione si interrompe quando Haos si risveglia dal proprio bozzolo. Chris ordina a Jake e Sherry di fuggire mentre lui e Piers affrontano la creatura.\n\nL'Ustanak insegue Jake e Sherry fino all'ultimo, rifiutandosi di essere abbattuto anche dopo che il suo corpo viene bruciato dalla lava. Jake e Sherry lo sconfiggono definitivamente nella battaglia finale, strappandogli il braccio meccanico. Jake consegna un campione del proprio sangue a Sherry e sparisce, abbassando il prezzo richiesto da cinquanta milioni a cinquanta dollari.\n\nLa vera mente dietro tutto è proprio Carla Radames, scienziata prodigio che aveva conseguito un dottorato a quindici anni. Simmons, ossessionato da Ada Wong, aveva sperimentato su 12.235 donne nel tentativo di crearne un clone. Carla, la cui genetica era compatibile, venne gettata nel processo contro la sua volontà e trasformata nella copia perfetta di Ada. Pur conservando parte di sé, finse fedeltà a Simmons mentre in segreto fondava Neo-Umbrella con l'unico obiettivo di distruggerlo e portare il mondo al caos. Carla infetta Simmons con il C-Virus potenziato con il sangue di Jake, poi viene uccisa dalla vera Ada Wong mentre tentava una mutazione finale. La sua morte attiva però il rilascio di Haos, un colossale organismo sottomarino capace di diffondere il C-Virus nell'atmosfera. Chris e Piers lo fermano nella base che sta esplodendo: Piers si inietta il C-Virus per sviluppare un braccio elettrico e scaraventare Chris nel pod di fuga, sacrificandosi per distruggerlo. Simmons, in continua dolorosa mutazione, viene infine abbattuto da Leon, Helena e Ada. Il suo sangue forma sul pavimento il logo di Umbrella.",
              en: "Bioterrorism strikes on a global scale across four parallel and intertwined campaigns.\n\nDerek C. Simmons, National Security Advisor to the United States and head of the secret society known as The Family, orchestrates the assassination of President Benford to prevent him from revealing the government's ties to Umbrella. To do so he uses the C-Virus, a biological agent capable of transforming the infected into mutant creatures called J'avo. Leon Kennedy and agent Helena Harper — whom Simmons had blackmailed by holding her sister Deborah hostage — find themselves forced to gun down the President after he transforms into a zombie during a public address. Helena reveals to Leon that Simmons is behind everything, and the two set off for China to stop him.\n\nChris Redfield and Piers Nivans fight in Edonia, Eastern Europe, where the civil war is using J'avo as soldiers. A Neo-Umbrella agent, Carla Radames, disguised as Ada Wong wipes out Chris's entire squad, leaving him traumatized. Six months later, Piers finds him drinking in a bar and drags him back into action. The two head to China on the trail of the fake Ada.\n\nJake Muller, a mercenary and Albert Wesker's illegitimate son, carries a natural antibody to the C-Virus in his blood. Sherry Birkin is sent to protect him and bring him to safety in exchange for fifty million dollars — the price Jake demands. During their escape from Edonia they are hunted by the Ustanak, a powerful Neo-Umbrella biological weapon programmed specifically to capture Jake alive. The creature is enormous, nearly indestructible, and never stops pursuing them. It is Carla Radames herself who intercepts them with a squad of J'avo, revealing to Jake the truth about his father, before the Ustanak knocks them both unconscious and delivers them to Neo-Umbrella.\n\nLocked inside an underwater facility in China, they are used as test subjects for six months. Jake finds a way to shut down the facility's generators, allowing Sherry to escape from her cell as well. The Ustanak is unleashed against them once more. In the chaos they run into Chris Redfield and Piers Nivans, who free them thanks to a tip from Leon. Chris confesses to Jake that he killed his father Wesker — Jake raises his gun at him. The standoff is broken when Haos awakens from its cocoon. Chris orders Jake and Sherry to flee while he and Piers face the creature.\n\nThe Ustanak pursues Jake and Sherry to the very end, refusing to go down even after its body is scorched by lava. Jake and Sherry defeat it definitively in their final battle, tearing off its mechanical arm. Jake hands Sherry a sample of his blood and disappears, lowering his asking price from fifty million to fifty dollars.\n\nThe true mastermind behind everything is Carla Radames herself — a prodigy who earned her doctorate at fifteen. Simmons, obsessed with Ada Wong, had experimented on 12,235 women in an attempt to create a perfect clone. Carla, whose genetics were compatible, was thrown into the process against her will and transformed into Ada's perfect double. While retaining part of her own identity, she feigned loyalty to Simmons while secretly founding Neo-Umbrella with one single goal: to destroy him and plunge the world into chaos. Carla infects Simmons with the C-Virus enhanced with Jake's blood, then is killed by the real Ada Wong while attempting a final mutation. Her death, however, triggers the release of Haos — a colossal underwater organism capable of spreading the C-Virus into the atmosphere. Chris and Piers stop it inside the exploding base: Piers injects himself with the C-Virus to develop an electric arm and hurl Chris into an escape pod, sacrificing himself to destroy it. Simmons, in continuous agonizing mutation, is finally brought down by Leon, Helena, and Ada. His blood forms the Umbrella logo on the floor."
            }
          },
          { id: "vendetta", type: "FILM CGI", typeEn: "CGI FILM", year: "2014", releaseYear: "2017", releaseYearEn: "2017",
            title: { it: "Resident Evil: Vendetta", en: "Resident Evil: Vendetta" },
            synopsis: {
              it: "Chris Redfield, in Messico con un team BSAA per catturare Glenn Arias, trafficante di armi biologiche ricercato da Interpol, vede la sua squadra sterminata e Arias fuggire nell'esplosione della villa. Arias è un ex agente della CIA sopravvissuto all'attacco aereo del governo americano che aveva distrutto il suo matrimonio uccidendo moglie, famiglia e amici. Da allora vive per vendicarsi.\n\nRebecca Chambers, ora professoressa universitaria e consulente BSAA, studia il nuovo virus sviluppato da Arias: il Virus-A, composto da tre elementi separati — una base dormiente diffusa nell'acqua potabile, un innesco aereo che attiva la trasformazione e un vaccino. Rebecca scopre una somiglianza genetica con le Plagas di Los Illuminados e conclude che i sopravvissuti del culto stanno collaborando con Arias. Chris e Rebecca raggiungono Leon Kennedy in Colorado, trovandolo in preda all'alcolismo dopo aver perso l'intera squadra in un agguato a Washington. Leon si unisce a loro a malincuore.\n\nArias rapisce Rebecca perché somiglia in modo inquietante alla moglie morta, intendendo costringerla a sposarlo. Al rifiuto di Rebecca le inietta una versione potenziata del Virus-A immune al vaccino, sfidando Chris a salvarla entro venti minuti. Mentre Leon e Chris neutralizzano i camion che rilasciano il virus per le strade di New York, Chris si infiltra nel grattacielo di Arias, sconfigge Diego Gomez e raggiunge il tetto dove salva Rebecca e affronta Arias in un brutale combattimento corpo a corpo. Diego, ormai moribondo, si fonde con Arias formando un Tyrant a due teste. Leon si unisce allo scontro finale: con l'aiuto del team rimasto, un colpo di granata di Chris distrugge definitivamente la creatura. Il vaccino viene diffuso per via aerea su tutta New York. Maria Gomez, figlia di Diego e alleata di Arias, sopravvive e giura vendetta. Il suo ruolo tornerà nel film successivo.",
              en: "Chris Redfield, in Mexico with a BSAA team to capture Glenn Arias — a biological weapons trafficker wanted by Interpol — watches his squad get wiped out as Arias escapes in the explosion of the villa. Arias is a former CIA agent who survived an American government airstrike that destroyed his wedding, killing his wife, family, and friends. He has lived for revenge ever since.\n\nRebecca Chambers, now a university professor and BSAA consultant, studies the new virus developed by Arias: the A-Virus, composed of three separate elements — a dormant base spread through drinking water, an airborne trigger that activates the transformation, and a vaccine. Rebecca discovers a genetic similarity with the Las Plagas of Los Illuminados and concludes that survivors of the cult are collaborating with Arias. Chris and Rebecca track down Leon Kennedy in Colorado, finding him in the grip of alcoholism after losing his entire squad in an ambush in Washington. Leon joins them reluctantly.\n\nArias kidnaps Rebecca because she bears an unsettling resemblance to his dead wife, intending to force her to marry him. When Rebecca refuses, he injects her with an enhanced strain of the A-Virus immune to the vaccine, challenging Chris to save her within twenty minutes. While Leon neutralizes the trucks releasing the virus through the streets of New York, Chris infiltrates Arias's skyscraper, defeats Diego Gomez, and reaches the rooftop where he saves Rebecca and confronts Arias in a brutal hand-to-hand fight. Diego, now dying, merges with Arias to form a two-headed Tyrant. Leon joins the final confrontation — a grenade shot from Chris destroys the creature definitively. The vaccine is dispersed by air across all of New York. Maria Gomez, Diego's daughter and Arias's ally, survives and swears revenge. Her role will return in the next film."
            }
          },
          { id: "death-island", type: "FILM CGI", typeEn: "CGI FILM", year: "2015", releaseYear: "2023", releaseYearEn: "2023",
            title: { it: "Resident Evil: Death Island", en: "Resident Evil: Death Island" },
            synopsis: {
              it: "Tre indagini separate convergono su San Francisco. Jill Valentine, tornata operativa dopo i traumi di RE5, indaga su una famiglia trovata morta trasformata in zombi. Claire Redfield, per TerraSave, esamina un'orca spiaggiata con una violenta ferita da morso, infettata dallo stesso ceppo di Virus-T trovato nelle vittime umane. Leon Kennedy insegue i rapitori del dottor Antonio Taylor, scienziato della DARPA con informazioni classificate. Il filo comune porta tutti ad Alcatraz.\n\nIl responsabile è Dylan Blake, ex mercenario dell'USS sopravvissuto alla notte di Raccoon City del 1998 vedendo il suo migliore amico JJ abbandonato a morire da Umbrella mentre i VIP venivano evacuati. Negli anni ha studiato Chris, Leon, Claire e Jill, convincendosi che le organizzazioni antibioterrorrismo siano complici del sistema corrotto che perpetua le guerre biologiche piuttosto che fermarle. Ha sviluppato un ceppo di Virus-T veicolato esclusivamente tramite droni a forma di zanzara e ha assoldato Maria Gomez, sopravvissuta agli eventi di Vendetta, come sua alleata.\n\nSull'isola il gruppo si ritrova a collaborare loro malgrado. Jill e Leon si incontrano per la prima volta nelle fogne, scambiandosi dapprima coltellate per equivoco, poi collaborando contro nuove varianti di Licker. Dylan cattura Chris, Claire e Leon, infettandoli con i droni e risparmiando Jill per costringerla ad assistere alla morte dei propri compagni come lui aveva assistito alla morte di JJ. Rebecca arriva con il vaccino appena in tempo per salvarli tutti. Nel combattimento finale Dylan si fonde con un'arma biologica subacquea formando il Digalodon. Claire e Rebecca hackerano i droni e li riprogrammano per infettare la creatura indebolendola, poi Jill, Chris e Leon la distruggono con esplosivi e lanciarazzi.\n\nNota: il film affronta esplicitamente il senso di colpa di Jill per le azioni compiute sotto controllo di Wesker in RE5, ed è la prima volta nella saga CGI che Leon e Jill condividono lo schermo.",
              en: "Three separate investigations converge on San Francisco. Jill Valentine, back in the field after the trauma of RE5, investigates a family found dead and transformed into zombies. Claire Redfield, working for TerraSave, examines a beached orca with a violent bite wound, infected with the same T-Virus strain found in the human victims. Leon Kennedy pursues the kidnappers of Dr. Antonio Taylor, a DARPA scientist with classified information. The common thread leads them all to Alcatraz.\n\nThe culprit is Dylan Blake, a former USS mercenary who survived the night of Raccoon City in 1998 by watching his best friend JJ get left behind to die by Umbrella while VIPs were evacuated. Over the years he has studied Chris, Leon, Claire, and Jill, convincing himself that anti-bioterrorism organizations are complicit in the corrupt system that perpetuates biological warfare rather than stopping it. He has developed a T-Virus strain delivered exclusively through mosquito-shaped drones and has enlisted Maria Gomez, who survived the events of Vendetta, as his ally.\n\nOn the island the group finds itself forced to work together. Jill and Leon meet for the first time in the sewers, initially exchanging knife strikes due to a misunderstanding, then joining forces against new Licker variants. Dylan captures Chris, Claire, and Leon, infecting them with the drones while sparing Jill to force her to watch her companions die — just as he had watched JJ die. Rebecca arrives with the vaccine just in time to save them all. In the final battle Dylan merges with an underwater biological weapon to form the Digalodon. Claire and Rebecca hack the drones and reprogram them to infect and weaken the creature, then Jill, Chris, and Leon destroy it with explosives and rocket launchers.\n\nNote: the film explicitly addresses Jill's guilt over the actions she carried out while under Wesker's control in RE5, and marks the first time in the CGI saga that Leon and Jill share the screen."
            }
          },
          { id: "re7", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "Luglio 2017", releaseYear: "2017", releaseYearEn: "2017",
            title: { it: "Resident Evil 7: Biohazard", en: "Resident Evil 7" },
            synopsis: {
              it: "Ethan Winters riceve un messaggio dalla moglie Mia, sparita tre anni prima mentre svolgeva una missione segreta come agente delle Connections, un'organizzazione criminale specializzata in armi biologiche. Mia era la custode di Eveline, una bambina geneticamente modificata capace di controllare le menti attraverso il megamicete. Nel 2014 la nave che trasportava Mia ed Eveline nel Golfo del Messico viene distrutta dalla bambina stessa dopo che la sua ossessione per una famiglia la porta a ribellarsi ai propri custodi. Mia e Eveline vengono trovate tra i rottami da Jack Baker, che le porta nella sua fattoria in Louisiana. Eveline infetta immediatamente l'intera famiglia Baker, trasformandola nella sua famiglia perfetta.\n\nEthan arriva alla fattoria e trova un incubo: Jack, Marguerite e Lucas Baker sono creature sovrumane, violente e cannibali. Ethan viene ucciso da Jack Baker già nelle prime fasi, ma il megamicete che aveva assorbito controvoglia lo riporta in vita senza che lui se ne renda conto. Zoe Baker, figlia di Jack e Marguerite, rimasta parzialmente lucida, aiuta Ethan a sintetizzare un siero per sconfiggere i Baker uno ad uno. Ethan sceglie di usare l'ultima dose su Mia, lasciando Zoe al proprio destino.\n\nEveline non è il mostro classico della saga: è una bambina che non ha mai ricevuto affetto, cresciuta come esperimento e trattata come arma. Voleva solo una famiglia.\n\nSenza le medicine necessarie a rallentare la sua crescita accelerata, nel 2017 ha l'aspetto di una donna anziana sulla sedia a rotelle. Ethan la raggiunge e le inietta un necrotossico che scatena la sua mutazione finale in un colossale mostro di megamicete. Chris Redfield arriva in elicottero con un team della Umbrella Blu e fornisce a Ethan l'arma necessaria a distruggerla definitivamente.\n\nIl DLC Not a Hero segue Chris nell'aftermath immediato, con la caccia al sopravvissuto Lucas Baker e le indagini sulle Connections. Invece, il DLC End of Zoe segue Joe Baker, fratello di Jack rimasto immune all'infezione, che trova Zoe agonizzante nella palude e affronta un Jack Baker risorto nella sua forma finale prima di poterla salvare.",
              en: "Ethan Winters receives a message from his wife Mia, who vanished three years earlier while carrying out a secret mission as an agent for The Connections, a criminal organization specializing in biological weapons. Mia was the guardian of Eveline, a genetically modified girl capable of controlling minds through the Mold. In 2014, the ship transporting Mia and Eveline across the Gulf of Mexico is destroyed by the girl herself after her obsession with having a family leads her to turn against her handlers. Mia and Eveline are found among the wreckage by Jack Baker, who brings them to his farm in Louisiana. Eveline immediately infects the entire Baker family, transforming them into her perfect family.\n\nEthan arrives at the farm and finds a nightmare: Jack, Marguerite, and Lucas Baker are superhuman creatures, violent and cannibalistic. Ethan is killed by Jack Baker in the early stages, but the Mold he had unwillingly absorbed brings him back to life without him realizing it. Zoe Baker, Jack and Marguerite's daughter, who has remained partially lucid, helps Ethan synthesize a serum to defeat the Bakers one by one. Ethan chooses to use the last dose on Mia, leaving Zoe to her fate.\n\nEveline is not the classic monster of the series: she is a child who never received affection, raised as an experiment and treated as a weapon. She only ever wanted a family. Without the medication needed to slow her accelerated growth, by 2017 she has the appearance of an elderly woman in a wheelchair. Ethan reaches her and injects her with a necrotoxin that triggers her final mutation into a colossal Mold monster. Chris Redfield arrives by helicopter with a Blue Umbrella team and provides Ethan with the weapon needed to destroy her once and for all.\n\nThe DLC Not a Hero follows Chris in the immediate aftermath, with the hunt for surviving Baker family member Lucas and the investigation into The Connections. The DLC End of Zoe follows Joe Baker, Jack's brother who has remained immune to the infection, as he finds Zoe dying in the swamp and faces a resurrected Jack Baker in his final form before he can save her."
            }
          },
          { id: "village", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "8-10 febbraio 2021", releaseYear: "2021", releaseYearEn: "2021",
            title: { it: "Resident Evil Village", en: "Resident Evil Village" },
            synopsis: {
              it: "Ethan e Mia vivono in Europa dell'Est con la figlia neonata Rose, sotto protezione della BSAA. Quello che non sanno è che Chris Redfield li aveva deliberatamente spostati in quella zona come esca per attirare allo scoperto Madre Miranda, una biologa ultracentenaria che domina un villaggio montano isolato grazie al megamicete. Miranda aveva già rapito la vera Mia settimane prima, ne aveva assimilato il DNA tramite i propri poteri mutaforma e si era infiltrata nella casa dei Winters al suo posto. Una sera Chris irrompe in casa, spara alla falsa Mia ripetutamente e porta via Rose ed Ethan su un veicolo blindato. Miranda finge di essere morta, riprende conoscenza durante il trasporto, uccide gli operatori e si schianta con il veicolo ai margini del villaggio portando via Rose.\n\nEthan si risveglia solo nella neve, circondato da licantropi. Rose è stata cristallizzata e divisa in quattro frammenti da Miranda, consegnati alle quattro Signorie vassalle: Alcina Dimitrescu, vampirica e imponente con le sue tre figlie; la famiglia Beneviento, che usa bambole animate e allucinogeni per distruggere psicologicamente le vittime; Salvatore Moreau, creatura ittiomorfa patetica e devota; Karl Heisenberg, che controlla il metallo con poteri magnetici e nutre da anni un piano segreto per ribellarsi a Miranda usando Rose come arma contro di lei.\n\nMiranda vuole Rose come vaso per trasferire la coscienza di Eva, la figlia morta di influenza spagnola nel 1919, il cui trauma l'aveva spinta nei secoli addietro a toccare il megamicete e a costruire intorno ad esso tutta la sua religione e il suo potere. La sua vera intenzione era che Ethan uccidesse le Signorie per alimentare il megamicete di energia, eliminando allo stesso tempo testimoni scomodi. Ethan, ignaro, affronta e sconfigge tutte e quattro le Signorie. Nel momento in cui sembra ad un passo dalla vittoria, Miranda gli strappa letteralmente il cuore dal petto e lo lascia per morto. Ethan sopravvive: il megamicete che lo abita lo riporta ancora una volta in vita, consumando però le ultime riserve del suo corpo.\n\nChris, nel frattempo, aveva scoperto la vera Mia prigioniera nel laboratorio sotterraneo di Miranda e l'aveva liberata. Ethan raggiunge il Sito della Cerimonia e sconfigge Miranda nel momento in cui il suo rituale di trasmissione fallisce, bloccato dall'influenza di Eveline sul DNA di Rose. Ethan consegna Rose a Chris, poi ruba il detonatore e fa saltare in aria il megamicete con un esplosivo N2. Il suo corpo, costruito interamente di megamicete, si dissolve nell'esplosione insieme alla creatura. Rose, Mia e Chris fuggono in elicottero.\n\nIl DLC Le Ombre di Rose è ambientato nel 2037, sedici anni dopo Village. Rose sedicenne cerca di liberarsi dei propri poteri soprannaturali avventurandosi in una dimensione psichica che replica il villaggio infestato. Accompagnata da una copia del megamicete che ha assunto le sembianze di Ethan, affronta Eveline e Miranda e sceglie infine di tenere i propri poteri per salvare chi ama. La scena finale la mostra adulta, libera e serena.\n\nSebbene cronologicamente si collochi dopo Requiem, il DLC viene presentato qui in quanto parte integrante della saga Winters.",
              en: "Ethan and Mia live in Eastern Europe with their newborn daughter Rose, under BSAA protection. What they do not know is that Chris Redfield had deliberately relocated them to that area as bait to draw out Mother Miranda, a centuries-old biologist who dominates an isolated mountain village through the Mold. Miranda had already kidnapped the real Mia weeks earlier, assimilated her DNA through her shapeshifting abilities, and taken her place in the Winters household. One evening Chris bursts into the house, repeatedly shoots the fake Mia, and takes Rose and Ethan away in an armored vehicle. Miranda feigns death, regains consciousness during transport, kills the operators, and crashes the vehicle at the edge of the village, taking Rose with her.\n\nEthan wakes up alone in the snow, surrounded by lycans. Rose has been crystallized and divided into four fragments by Miranda, each delivered to one of her four vassal Lords: Alcina Dimitrescu, vampiric and imposing alongside her three daughters; the Beneviento family, who use animated dolls and hallucinogens to psychologically destroy their victims; Salvatore Moreau, a pathetic and devoted ichthyomorphic creature; and Karl Heisenberg, who controls metal through magnetic powers and has long harbored a secret plan to rebel against Miranda using Rose as a weapon against her.\n\nMiranda wants Rose as a vessel to transfer the consciousness of Eva — her daughter who died of Spanish flu in 1919 — whose loss had driven her centuries ago to touch the Mold and build around it her entire religion and power. Her true intention was for Ethan to kill the Lords in order to feed the Mold with energy, while simultaneously eliminating inconvenient witnesses. Ethan, unaware, confronts and defeats all four Lords. At the moment when victory seems within reach, Miranda literally tears his heart from his chest and leaves him for dead. Ethan survives — the Mold that inhabits him brings him back to life one more time, consuming the last reserves of his body in the process.\n\nChris, meanwhile, had discovered the real Mia imprisoned in Miranda's underground laboratory and freed her. Ethan reaches the Ceremony Site and defeats Miranda at the moment her transmission ritual fails, blocked by Eveline's influence on Rose's DNA. Ethan hands Rose to Chris, then steals the detonator and blows up the Mold with an N2 explosive. His body, built entirely of Mold, dissolves in the explosion alongside the creature. Rose, Mia, and Chris escape by helicopter.\n\nThe DLC Shadows of Rose is set in 2037, sixteen years after Village. A teenage Rose seeks to rid herself of her supernatural powers by venturing into a psychic dimension that replicates the infested village. Accompanied by a Mold copy that has taken on Ethan's likeness, she confronts Eveline and Miranda, ultimately choosing to keep her powers in order to save those she loves. The final scene shows her as an adult — free and at peace.\n\nAlthough it takes place chronologically after Requiem, the DLC is presented here as an integral part of the Winters saga."
            }
          },
          { id: "requiem", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "2026", releaseYear: "2026", releaseYearEn: "2026",
            title: { it: "Resident Evil Requiem", en: "Resident Evil Requiem" },
            synopsis: {
              it: "Una serie di morti misteriose si verificano in tutto il Midwest americano. Le vittime sono sopravvissuti all'incidente di Raccoon City del 1998, e sui loro corpi compaiono lividi nerastri causati da una condizione chiamata Sindrome di Raccoon City. Leon Kennedy è tra gli infetti: anche lui porta i segni della malattia sul corpo, e Sherry Birkin lo segue a distanza via telefono mentre le sue condizioni peggiorano.\n\nIl caso viene assegnato a Grace Ashcroft, analista dell'FBI senza esperienza sul campo, chiamata ad investigare sull'ultimo caso al Wrenwood Hotel nel Midwest, lo stesso posto dove sua madre Alyssa fu assassinata otto anni prima. Leon viene inviato in parallelo sulla stessa scena per la scomparsa di un agente di polizia.\n\nI due si incontrano per la prima volta al Rhodes Hill Chronic Care Center, una clinica psichiatrica abbandonata collegata al caso: Grace è intrappolata all'interno, inseguita da Marie, una creatura alta e feroce che si muove nell'oscurità. Leon irrompe nel momento decisivo, spara a Marie con la propria pistola del DSO e salva Grace. Poi le affida l'arma, che porta il nome inciso sulla canna: Requiem.\n\nAll'interno della clinica Grace trova Emily, una bambina con i capelli bianchi e gli occhi bendati, tenuta in isolamento in una cella di vetro. Emily è cieca, ma sa leggere il Braille e aiuta Grace a risolvere i meccanismi di sicurezza della struttura. Marie, che si rivela essere la sua compagna di esperimenti, la rapisce e la porta in un bunker sotterraneo. Sia Emily che Marie sono prodotti delle Connections: cloni creati nel laboratorio sotterraneo noto come ARK, costruito nelle viscere di Raccoon City, nel tentativo di estrarre da loro ricordi impiantati capaci di sbloccare l'Elpis. Gli esperimenti risalgono al 1990 e hanno prodotto decine di soggetti, tutti falliti. Marie è la numero 170, Emily la numero 171. Entrambe erano rimaste stabili per anni, finché non vennero iniettate con un ceppo mutato di Virus-T che accelerò la loro degenerazione.\n\nIl vero responsabile di quanto accade nell'istituto psichiatrico è Victor Gideon, ex ricercatore Umbrella sul Virus-T che dopo il crollo della compagnia ha acquistato una clinica nelle vicinanze di Raccoon City. Gideon rapisce Grace e le preleva il sangue per verificare se sia davvero la chiave per accedere all'Elpis. Dietro Gideon c'è Zeno, un'imitazione di Wesker creata dalle Connections.\n\nLa rivelazione più devastante riguarda Grace stessa: non il prodotto finale di un lungo esperimento, come credevano Victor Gideon e Zeno inizialmente, ma una normale bambina adottata da Oswell Spencer, nata dopo l'incidente di Raccoon City. Spencer, ormai vecchio e pentito, la affidò alle cure di Alyssa Ashcroft dopo averle concesso un'intervista, considerandola la propria eredità e speranza per il mondo. Grace porta nel sangue un'immunità naturale a tutti i ceppi del Virus Progenitore.\n\nL'Elpis non è l'arma di controllo mentale che Zeno credeva: è il progetto finale di Spencer, un potente antivirale capace di curare tutti i derivati del Virus-T, inclusa la Sindrome di Raccoon City. Grace, ricordando un'intervista della madre in cui Spencer rivelava il proprio rimpianto, inserisce la parola \"SPERANZA\" per accedere alle fiale. Zeno, iniettandosi l'Elpis, scopre con rabbia che non lo trasforma: lo guarisce semplicemente. Grace inietta l'Elpis a Leon, salvandolo. Gideon tradisce e decapita Zeno, poi si trasforma usando il parassita del Nemesis. Leon, ripristinato dall'Elpis, lo sconfigge. La struttura crolla. Arrivano i soccorsi inviati da Chris Redfield.",
              en: "A series of mysterious deaths occurs across the American Midwest. The victims are survivors of the 1998 Raccoon City incident, and their bodies bear dark bruising caused by a condition known as Raccoon City Syndrome. Leon Kennedy is among the infected — he too carries the marks of the disease on his body, and Sherry Birkin monitors him remotely by phone as his condition worsens.\n\nThe case is assigned to Grace Ashcroft, an FBI analyst with no field experience, called to investigate the latest incident at the Wrenwood Hotel in the Midwest — the same place where her mother Alyssa was murdered eight years earlier. Leon is sent in parallel to the same scene to investigate the disappearance of a police officer.\n\nThe two meet for the first time at the Rhodes Hill Chronic Care Center, an abandoned psychiatric clinic connected to the case. Grace is trapped inside, pursued by Marie, a tall and ferocious creature that moves through the darkness. Leon bursts in at the decisive moment, shoots Marie with his DSO sidearm, and saves Grace. He then hands her the weapon, which bears a name engraved on the barrel: Requiem.\n\nInside the clinic Grace finds Emily, a young girl with white hair and bandaged eyes, held in isolation in a glass cell. Emily is blind but can read Braille, and helps Grace solve the facility's security mechanisms. Marie, who turns out to be her fellow test subject, kidnaps Emily and takes her to an underground bunker. Both Emily and Marie are products of The Connections — clones created in the underground laboratory known as the ARK, built beneath the ruins of Raccoon City, in an attempt to extract implanted memories from them capable of unlocking the Elpis. The experiments date back to 1990 and produced dozens of subjects, all failures. Marie is number 170, Emily number 171. Both had remained stable for years until they were injected with a mutated T-Virus strain that accelerated their deterioration.\n\nThe true architect of what unfolds at the psychiatric facility is Victor Gideon, a former Umbrella T-Virus researcher who, following the company's collapse, acquired a clinic near Raccoon City. Gideon kidnaps Grace and draws her blood to verify whether she is truly the key to accessing the Elpis. Behind Gideon is Zeno, a Wesker imitation created by The Connections.\n\nThe most devastating revelation concerns Grace herself: not the final product of a long experiment, as Victor Gideon and Zeno initially believed, but an ordinary child adopted by Oswell Spencer, born after the Raccoon City incident. Spencer, now old and filled with regret, entrusted her to Alyssa Ashcroft's care following an interview he granted her, regarding her as his legacy and his hope for the world. Grace carries in her blood a natural immunity to all strains of the Progenitor Virus.\n\nThe Elpis is not the mind-control weapon Zeno believed it to be — it is Spencer's final project: a powerful antiviral capable of curing all T-Virus derivatives, including Raccoon City Syndrome. Grace, recalling an interview her mother conducted in which Spencer revealed his remorse, enters the word \"HOPE\" to access the vials. Zeno, injecting himself with the Elpis, discovers in fury that it does not transform him — it simply heals him. Grace injects the Elpis into Leon, saving him. Gideon betrays and decapitates Zeno, then transforms using the Nemesis parasite. Leon, restored by the Elpis, defeats him. The facility collapses. Rescue teams dispatched by Chris Redfield arrive on the scene."
            }
          }
        ]
      }
    ]
  },

  "silent-hill": {
    id: "silent-hill",
    listTitle: { it: "Silent Hill", en: "Silent Hill" },
    eyebrow: { it: "Fascicolo", en: "Case File" },
    title: { it: "Silent Hill", en: "Silent Hill" },
    blurb: {
      it: "Una cittadina avvolta da una nebbia perenne attira chi porta con sé un dolore, un senso di colpa o un lutto irrisolto, per poi trasformare quei sentimenti in mostri e incubi tangibili. Nulla in questo luogo è davvero come appare: la vera minaccia arriva sempre dall'interno di chi vi si addentra. Affrontare la città significa.",
      en: "A town wrapped in an eternal fog draws in those carrying grief, guilt, or unresolved loss, then twists those feelings into tangible monsters and nightmares. Nothing here is truly what it seems: the real threat always comes from within whoever enters. To face the town is to face oneself."
    },
    palette: ["#c98fa3", "#8a8f94", "#7a2e2e"],
    accentColor: "#8a8f94",
    universes: [
      {
        id: "main",
        name: { it: "Universo principale", en: "Main Universe" },
        span: { it: "XIX secolo – anni 2010 circa", en: "19th century – roughly the 2010s" },
        entries: [          { id: "past-life", type: "FUMETTO", typeEn: "COMIC", year: "Epoca del Vecchio West, prima di tutti gli altri capitoli", releaseYear: "2010", releaseYearEn: "2010",
            title: { it: "Silent Hill: Past Life", en: "Silent Hill: Past Life" },
            synopsis: {
              it: "Il fumetto più antico della saga in termini cronologici in-universe. Jebediah \"Hellrider\" Foster, violento fuorilegge del Dakota Territory, segue la devota vedova Esther Munroe a Silent Hill dopo essersene innamorato: lei ha ereditato una vecchia fattoria e sogna un nuovo inizio. Appena arrivati, la città comincia a materializzare i peccati di Jeb: i fantasmi delle sue vittime si manifestano come abitanti del posto che lo conoscono e lo giudicano, mentre Esther, incinta, è tormentata da visioni di una donna Cherokee di nome Inola. Attraverso flashback emerge la verità sul passato di Jeb: una vita di omicidi a pagamento, culminata nel crimine più oscuro, trovare Inola nel bel mezzo del parto di sua figlia Awinita e uccidere il bambino col coltello. Nel finale la casa prende fuoco mentre Esther partorisce: Inola assiste al parto con lo spettro scheletrico di Awinita, e l'anima della bambina si fonde col neonato di Esther. Jeb crolla tra le braccia di Esther, apparentemente morta; la sua stessa fine rimane ambigua. Fuori dalla casa in fiamme, Inola mostra il neonato al postino Howard Blackwood e lo presenta come sua figlia Awinita, dichiarando che gli spiriti di Silent Hill non sono più silenziosi. Il fumetto stabilisce la natura psicologica e punitiva della città e introduce Howard Blackwood, personaggio che riappare in Downpour.",
              en: "The oldest entry in the saga in chronological in-universe terms. Jebediah \"Hellrider\" Foster, a violent outlaw from the Dakota Territory, follows the devout widow Esther Munroe to Silent Hill after falling for her — she has inherited an old farmhouse and dreams of a fresh start. From the moment they arrive, the town begins to materialise Jeb's sins: the ghosts of his victims appear as townsfolk who recognise and judge him, while Esther, pregnant, is haunted by visions of a Cherokee woman named Inola. Through flashbacks, the truth about Jeb's past comes to light: a life of contract killings, culminating in his darkest crime — finding Inola mid-labour with her daughter Awinita and killing the infant with his knife. In the finale, the house catches fire while Esther gives birth: Inola assists the delivery alongside the skeletal spectre of Awinita, whose soul merges with Esther's newborn. Jeb collapses holding Esther, who appears to be dead; his own fate remains ambiguous. Outside the burning house, Inola presents the baby to postman Howard Blackwood, introducing it as her daughter Awinita and declaring that the spirits of Silent Hill are silent no more. The comic establishes the town's psychological and punitive nature and introduces Howard Blackwood, a character who reappears in Downpour."
            }
          },
          { id: "sh-origins", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "1976 (7 anni prima di Silent Hill)", yearEn: "1976 (7 years before Silent Hill)", releaseYear: "2007", releaseYearEn: "2007",
            title: { it: "Silent Hill: Origins", en: "Silent Hill: Origins" },
            synopsis: {
              it: "Prequel al primo gioco. Travis Grady, un camionista con un passato irrisolto, percorre di notte una scorciatoia per Silent Hill e trova una casa in fiamme: dentro c'è una bambina gravemente ustionata stesa su un simbolo rituale, che porta in salvo prima di svenire. Travis si risveglia a Silent Hill, che pullula di mostri. Scopre che la bambina è Alessa Gillespie, che la madre Dahlia ha bruciato viva nell'ambito di un rituale dell'Ordine per far incubare la propria divinità nel corpo della figlia. Travis affronta anche i suoi demoni personali: la madre Helen, internata per le sue visioni di mondi oltre gli specchi, e il padre Richard, suicidatosi in una stanza del motel. Alessa guida silenziosamente Travis attraverso la raccolta dei pezzi del Flauros, artefatto capace di contenere il potere divino. Nell'ending canonico Travis sconfigge il demone imprigionato nel Flauros, liberando il potere di Alessa: lei scinde la propria anima in due, e una metà si manifesta come neonata. Harry e Jodie Mason la trovano sul ciglio della strada e la chiamano Cheryl. Nel dialogo finale Dahlia rassicura Kaufmann: la parte buona tornerà, richiamata dalla sofferenza della sua controparte.",
              en: "A prequel to the first game. Travis Grady, a truck driver with an unresolved past, takes a shortcut through Silent Hill late at night and finds a house on fire: inside is a severely burned young girl lying on a ritual symbol, whom he carries to safety before losing consciousness. Travis wakes up in Silent Hill, overrun with monsters. He discovers that the girl is Alessa Gillespie, whom her mother Dahlia burned alive as part of an Order ritual to incubate their deity inside her daughter's body. Travis also confronts his own personal demons: his mother Helen, committed for her visions of worlds beyond mirrors, and his father Richard, who took his own life in a motel room. Alessa silently guides Travis through the collection of the Flauros pieces, an artifact capable of containing divine power. In the canonical ending, Travis defeats the demon imprisoned within the Flauros, unleashing Alessa's power: she splits her own soul in two, and one half manifests as a newborn infant. Harry and Jodie Mason find her on the roadside and name her Cheryl. In the final dialogue, Dahlia reassures Kaufmann: the pure half will return, drawn back by the suffering of its counterpart."
            }
          },
          { id: "cage-of-cradle", type: "MANGA", typeEn: "MANGA", year: "1983, immediatamente prima di Silent Hill", yearEn: "1983, immediately before Silent Hill", releaseYear: "2006", releaseYearEn: "2006",
            title: { it: "Silent Hill: Cage of Cradle", en: "Silent Hill: Cage of Cradle" },
            synopsis: {
              it: "Manga digitale pubblicato su cellulare in Giappone, creato dagli stessi autori dei giochi originali. Prequel diretto al primo Silent Hill: Matthew, fidanzato dell'infermiera Lisa Garland, arriva in città nel tentativo di sottrarla al controllo dell'Ordine e del dottor Kaufmann, che la mantiene dipendente dalle droghe in cambio dell'assistenza ad Alessa Gillespie. Secondo le ricostruzioni dei fan, quando Cheryl Mason arriva in città con Harry e la sua presenza amplifica i poteri di Alessa, Matthew viene trascinato nell'Otherworld e muore nel momento in cui Valtiel si manifesta per la prima volta. Lisa, travolta dalla disperazione, tenta di strangolare Alessa, ma Valtiel interviene uccidendo anche lei, che da quel momento è condannata a vagare nell'Otherworld senza sapere di essere morta. Il manga si chiude esattamente quando inizia l'incipit del primo gioco.",
              en: "A digital manga published on mobile phones in Japan, created by the same authors as the original games. A direct prequel to the first Silent Hill: Matthew, boyfriend of nurse Lisa Garland, arrives in town in an attempt to free her from the control of the Order and Dr. Kaufmann, who keeps her dependent on drugs in exchange for her care of Alessa Gillespie. According to fan reconstructions, when Cheryl Mason arrives in town with Harry and her presence amplifies Alessa's powers, Matthew is dragged into the Otherworld and dies at the moment Valtiel manifests for the first time. Lisa, overwhelmed by despair, attempts to strangle Alessa, but Valtiel intervenes and kills her too — from that point on she is condemned to wander the Otherworld without knowing she is dead. The manga closes at the exact moment the opening cutscene of the first game begins."
            }
          },
          { id: "sh1", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "1983", releaseYear: "1999", releaseYearEn: "1999",
            title: { it: "Silent Hill", en: "Silent Hill" },
            synopsis: {
              it: "Harry Mason, scrittore e padre adottivo, porta la figlia Cheryl in vacanza a Silent Hill. Sterza per evitare una ragazza in mezzo alla strada e perde i sensi: Cheryl è sparita e la città è avvolta nella nebbia, popolata da mostri. Harry incontra Cybil Bennett, poliziotta di passaggio; Dahlia Gillespie, anziana sacerdotessa dell'Ordine; Michael Kaufmann, medico coinvolto nel traffico di droghe; e Lisa Garland, infermiera che non sa di essere già morta. Dahlia manipola Harry convincendolo che Alessa è una forza demoniaca da fermare e gli consegna il Flauros: quando Harry si avvicina ad Alessa, l'artefatto si attiva da solo neutralizzandola, e Dahlia coglie l'occasione per catturarla. Dahlia rivela la verità: sette anni prima aveva bruciato la figlia viva per far incubare il dio dell'Ordine nel suo corpo, ma Alessa aveva resistito scindendo la propria anima, e Cheryl è la metà fuggita. Ora le due metà si sono riunite e il dio può nascere. Kaufmann, per interesse personale, usa l'aglaophotis per espellere la divinità da Alessa nella forma dell'Incubus, che Harry sconfigge. Alessa dona a Harry un neonato, reincarnazione di se stessa e di Cheryl, e apre un varco verso la salvezza. La bambina crescerà col nome di Heather.",
              en: "Harry Mason, a writer and adoptive father, takes his daughter Cheryl on holiday to Silent Hill. He swerves to avoid a girl in the middle of the road and loses consciousness: Cheryl has vanished and the town is shrouded in fog, overrun with monsters. Harry encounters Cybil Bennett, a police officer passing through; Dahlia Gillespie, an elderly priestess of the Order; Michael Kaufmann, a doctor involved in drug trafficking; and Lisa Garland, a nurse who does not know she is already dead. Dahlia manipulates Harry into believing that Alessa is a demonic force that must be stopped, and hands him the Flauros: when Harry draws close to Alessa, the artifact activates on its own and neutralises her, giving Dahlia the opportunity to capture her. Dahlia then reveals the truth: seven years earlier she had burned her own daughter alive to incubate the Order's deity inside her body, but Alessa had resisted by splitting her soul in two — Cheryl is the half that escaped. Now that the two halves have reunited, the god can be born. Kaufmann, acting out of self-interest, uses the aglaophotis to expel the deity from Alessa in the form of the Incubus, which Harry defeats. Alessa gives Harry a newborn infant, a reincarnation of both herself and Cheryl, and opens a passage to safety. The child will grow up under the name Heather."
            }
          },
          { id: "sh1-novel", type: "NOVEL", typeEn: "NOVEL", year: "1983", releaseYear: "1999", releaseYearEn: "1999",
            title: { it: "Silent Hill: The Novel", en: "Silent Hill: The Novel" },
            synopsis: {
              it: "Segue fedelmente gli eventi del videogioco qui sopra aggiungendo approfondimenti sui personaggi: Harry Mason è caratterizzato esplicitamente come scrittore di saggi, con Cybil che dichiara di aver letto un suo libro. Presenta alcune discrepanze minori con la continuità principale: in particolare, la morte della moglie di Harry Jodie è attribuita a un incidente d'auto, mentre il gioco implica una malattia.",
              en: "Faithfully follows the events of the game above, adding depth to the characters: Harry Mason is explicitly characterised as a non-fiction writer, with Cybil mentioning that she has read one of his books. It presents a few minor discrepancies with the main continuity: notably, the death of Harry's wife Jodie is attributed to a car accident, whereas the game implies illness."
            }
          },
          { id: "sh-arcade", type: "CABINATO ARCADE", typeEn: "ARCADE", year: "Novembre 1993", yearEn: "November 1993", releaseYear: "2007", releaseYearEn: "2007",
            title: { it: "Silent Hill: The Arcade", en: "Silent Hill: The Arcade" },
            synopsis: {
              it: "Light gun shooter spin-off, unico gioco arcade della saga. Nel novembre 1918 il battello turistico Little Baroness scompare nel Lago Toluca con 14 passeggeri a bordo: la storia vera, ricostruita nel corso del gioco, è che la madre di Hanna, bambina malata a bordo, l'ha gettata in acqua, e immediatamente dopo la nave è affondata. Settantacinque anni dopo, nel novembre 1993, un gruppo di studenti universitari del club dell'occulto si reca a Silent Hill. Eric, il cui bisnonno era il capitano della Little Baroness, e la sua amica Tina devono salvare la piccola Emilie Anderson, attirata verso il lago dalla voce di quella che crede sia la madre morta, in realtà il fantasma di Lorraine, madre di Hanna. La città li trascina attraverso luoghi iconici della saga. Il boss finale è Hanna, la bambina del 1918 trasformata in creatura mostruosa conosciuta come the Phantom, e liberata nell'ending canonico. Il gioco approfondisce la storia della Little Baroness, citata in un documento di SH2, e conferma date precise della timeline della città.",
              en: "Light gun shooter spin-off, the only arcade game in the saga. In November 1918, the tourist steamboat Little Baroness disappears on Toluca Lake with 14 passengers on board: the true story, reconstructed over the course of the game, is that Hanna's mother — a sickly young girl aboard — threw her daughter into the water, and the ship sank immediately afterwards. Seventy-five years later, in November 1993, a group of university students from the occult club travel to Silent Hill. Eric, whose great-grandfather was the captain of the Little Baroness, and his friend Tina must save young Emilie Anderson, drawn towards the lake by the voice of who she believes to be her dead mother — in reality the ghost of Lorraine, Hanna's mother. The town drags them through iconic locations from the saga. The final boss is Hanna, the girl from 1918 transformed into a monstrous creature known as the Phantom, and freed in the canonical ending. The game expands on the history of the Little Baroness, referenced in a document in SH2, and confirms precise dates in the town's timeline."
            }
          },
          { id: "sh2", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "Anni '90 (non specificato con precisione)", yearEn: "The 1990s (not precisely specified)", releaseYear: "2001", releaseYearEn: "2001",
            title: { it: "Silent Hill 2 + Born from a Wish", en: "Silent Hill 2 + Born from a Wish" },
            synopsis: {
              it: "James Sunderland riceve una lettera dalla moglie Mary, che crede morta di malattia terminale, in cui lei lo invita al loro \"posto speciale\" a Silent Hill. Arriva in città e trova mostri che la sua mente plasmata dal senso di colpa genera in forme cariche di simbolismo: infermiere sessualizzate che riflettono la sua frustrazione repressa, il gigantesco Pyramid Head evocato dal suo desiderio inconscio di punizione. Incontra Angela, sopravvissuta ad abusi domestici; Eddie, un inadeguato spinto all'omicidio; Laura, bambina immune alle distorsioni della città perché priva di colpa; e Maria, una versione provocante di Mary che James non riesce a tenere in vita. La rivelazione finale: James non ha aspettato che Mary morisse di malattia. L'ha soffocata con un cuscino poco prima di arrivare in città, incapace di reggere la sua degenerazione. La lettera scompare dall'inventario man mano che avanza: non è mai arrivata davvero. Born from a Wish, scenario prequel canonico incluso nelle versioni speciali (di Silent Hill 2 originale, non del remake), mostra Maria nella sua breve esistenza prima di incontrare James: è consapevole della propria natura ambigua e affronta l'incertezza di cosa sia realmente.",
              en: "James Sunderland receives a letter from his wife Mary, whom he believes to have died of a terminal illness, in which she invites him to their \"special place\" in Silent Hill. He arrives in town to find monsters that his guilt-ridden mind generates in forms laden with symbolism: sexualised nurses reflecting his repressed frustration, the towering Pyramid Head summoned by his unconscious desire for punishment. He encounters Angela, a survivor of domestic abuse; Eddie, an inadequate man driven to murder; Laura, a young girl immune to the town's distortions because she carries no guilt; and Maria, a provocative version of Mary that James cannot keep alive. The final revelation: James did not wait for Mary to die of her illness. He smothered her with a pillow shortly before arriving in town, unable to bear her deterioration. The letter fades from his inventory as the game progresses — it never truly arrived. Born from a Wish, a canonical prequel scenario included in the special editions of the original Silent Hill 2 — not the remake — shows Maria in her brief existence before meeting James: she is aware of her own ambiguous nature and confronts the uncertainty of what she truly is."
            }
          },
          { id: "sh2-novel", type: "NOVEL", typeEn: "NOVEL", year: "Anni '90 (non specificato con precisione)", yearEn: "The 1990s (not precisely specified)", releaseYear: "2002", releaseYearEn: "2002",
            title: { it: "Silent Hill 2: The Novel", en: "Silent Hill 2: The Novel" },
            synopsis: {
              it: "Novelizzazione ufficiale del secondo videogioco, scritta da Sadamu Yamashita con illustrazioni di Masahiro Ito. Disponibile in giapponese con traduzione fan-made di Lady Ducky. Segue fedelmente gli eventi del gioco approfondendo il background dei personaggi. Non contraddice la continuità principale e può essere considerata canonica, ma resta fonte secondaria poiché non è noto se Yamashita abbia ricevuto note ufficiali dalla sceneggiatura originale di Hiroyuki Owaku.",
              en: "Official novelisation of the second videogame, written by Sadamu Yamashita with illustrations by Masahiro Ito. Available in Japanese with a fan-made translation by Lady Ducky. Faithfully follows the events of the game while expanding on the characters' backgrounds. It does not contradict the main continuity and can be considered canonical, but remains a secondary source since it is unknown whether Yamashita received official notes from Hiroyuki Owaku's original screenplay."
            }
          },
          { id: "double-under-dusk", type: "MANGA", typeEn: "MANGA", year: "Dopo Silent Hill 2", yearEn: "After Silent Hill 2", releaseYear: "2007", releaseYearEn: "2007",
            title: { it: "Silent Hill: Double Under Dusk", en: "Silent Hill: Double Under Dusk" },
            synopsis: {
              it: "Secondo manga digitale della coppia Ito/Owaku, e secondo Masahiro Ito un sequel diretto della serie iniziata con Cage of Cradle. Ambientato sull'isola nel mezzo del Lago Toluca vista nell'ending \"Rebirth\" di Silent Hill 2, ma in un edificio diverso dalla Church of the Rebirth. Brian Dawson, un uomo sulla quarantina di Augusta nel Maine, ha perso l'amato figlio Ronny e da quel momento vive in apatia emotiva, perdendo lavoro e matrimonio. Incontra Lindsay Crystal, una giovane studentessa di folklore dall'aspetto identico alla donna che appare nei suoi incubi, che si trova ad Augusta per ricercare Silent Hill, \"una città dove i morti ritornano\". Insieme si recano a Silent Hill. Come Cage of Cradle, il manga è quasi interamente perduto: mai tradotto, mai pubblicato fisicamente, il sito originale è dismesso.",
              en: "Second digital manga by the Ito/Owaku duo, and according to Masahiro Ito a direct sequel to the series begun with Cage of Cradle. Set on the island in the middle of Toluca Lake seen in the \"Rebirth\" ending of Silent Hill 2, but in a different building from the Church of the Rebirth. Brian Dawson, a man in his early forties from Augusta, Maine, has lost his beloved son Ronny and since then has been living in emotional apathy, losing both his job and his marriage. He encounters Lindsay Crystal, a young folklore student whose appearance is identical to the woman who appears in his nightmares, who has come to Augusta to research Silent Hill — \"a town where the dead return.\" Together they travel to Silent Hill. Like Cage of Cradle, the manga is almost entirely lost: never translated, never published in physical form, the original site has been shut down."
            }
          },
          { id: "sh4", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "Epoca non specificata con precisione", yearEn: "Era not precisely specified", releaseYear: "2004", releaseYearEn: "2004",
            title: { it: "Silent Hill 4: The Room", en: "Silent Hill 4: The Room" },
            synopsis: {
              it: "Ultimo gioco sviluppato da Team Silent, originariamente concepito come progetto separato non legato alla saga. Henry Townshend si risveglia nel suo appartamento al numero 302 del complesso South Ashfield Heights, a un'ora di auto da Silent Hill: la porta è sbarrata dall'interno con catene, le finestre inchiodate, il telefono muto. Dopo cinque giorni un buco appare nel muro del bagno e Henry lo attraversa, ritrovandosi in dimensioni distorte. Scopre che il serial killer Walter Sullivan, che anni prima si era suicidato in cella come parte del proprio rituale, ha trasferito il proprio spirito nella sua forma cadaverica nascosta nell'appartamento e sta portando a termine i \"21 Sacramenti\": 21 omicidi con caratteristiche simboliche precise per risvegliare la sua \"madre\", la stanza 302 in cui era nato e dove era stato abbandonato dai genitori. Henry è la ventunesima vittima designata. Con il cordone ombelicale di Walter e otto lance sacre, Henry spezza il rituale. Nessun ending è stato dichiarato ufficialmente canonico. Il condominio è gestito da Frank Sunderland, padre di James Sunderland di SH2. Gli omicidi di Walter hanno demolito anche le ultime fazioni organizzate dell'Ordine a Silent Hill.",
              en: "The last game developed by Team Silent, originally conceived as a separate project unrelated to the saga. Henry Townshend wakes up in his apartment, Room 302 of the South Ashfield Heights complex, an hour's drive from Silent Hill: the door is chained shut from the inside, the windows are nailed shut, the phone is dead. After five days, a hole appears in the bathroom wall and Henry crawls through it, finding himself in distorted dimensions. He discovers that serial killer Walter Sullivan, who years earlier had taken his own life in his cell as part of his own ritual, transferred his spirit into his cadaverous form hidden in the apartment and is carrying out the \"21 Sacraments\": 21 murders with precise symbolic characteristics, intended to awaken his \"mother\" — Room 302, where he was born and immediately abandoned by his parents. Henry is the designated twenty-first victim. Using Walter's umbilical cord and eight holy spears, Henry breaks the ritual. No ending has been officially declared canonical. The building is managed by Frank Sunderland, father of James Sunderland from SH2. Walter's murders also dismantled the last organised factions of the Order in Silent Hill."
            }
          },
          { id: "sh3", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "2000 (17 anni dopo Silent Hill)", yearEn: "2000 (17 years after Silent Hill)", releaseYear: "2003", releaseYearEn: "2003",
            title: { it: "Silent Hill 3", en: "Silent Hill 3" },
            synopsis: {
              it: "Sequel diretto di Silent Hill 1, unico capitolo con struttura narrativa apertamente continua. Heather Mason è una diciassettenne che Harry Mason ha cresciuto lontano da Silent Hill. In un centro commerciale viene avvicinata da Claudia Wolf, alta sacerdotessa di una nuova fazione dell'Ordine, che le dice di ricordare il suo \"vero sé\". Tornata a casa, Heather trova Harry assassinato su ordine di Claudia, che ha deliberatamente orchestrato il delitto per riempire Heather di odio e nutrire così il feto divino che cresce dentro di lei. Decide di raggiungere Silent Hill per vendicarsi. In città scopre di essere la reincarnazione di Alessa Gillespie: porta dentro di sé il feto del dio dell'Ordine. Al Brookhaven Hospital affronta Leonard Wolf, padre folle di Claudia. Nella chiesa, Claudia uccide il sacerdote ribelle Vincent e intima a Heather di accettare la nascita del dio. Heather ingoia la capsula di Aglaophotis nascosta da Harry nel suo ciondolo, espellendo il feto divino. Claudia, disperata, lo ingerisce lei stessa per diventare il vaso del dio. La divinità nata da Claudia viene sconfitta da Heather. L'Ordine come organizzazione religiosa strutturata è definitivamente distrutto. La storia di Alessa Gillespie, iniziata nel primo gioco, si chiude.",
              en: "A direct sequel to the Silent Hill 1, the only entry with an openly continuous narrative structure. Heather Mason is a seventeen-year-old girl raised far from Silent Hill by Harry Mason. At a shopping centre she is approached by Claudia Wolf, high priestess of a new faction of the Order, who tells her to remember her \"true self\". Returning home, Heather finds Harry murdered on Claudia's orders — she deliberately orchestrated the killing to fill Heather with hatred and thereby nourish the divine foetus growing inside her. Heather decides to travel to Silent Hill for revenge. In the town she discovers she is the reincarnation of Alessa Gillespie and carries the Order's deity as a foetus. At Brookhaven Hospital she confronts Leonard Wolf, Claudia's deranged father. In the church, Claudia kills the renegade priest Vincent and demands that Heather accept the birth of God. Heather swallows the capsule of Aglaophotis that Harry had hidden inside her pendant, expelling the divine foetus. A desperate Claudia ingests it herself to become the vessel of God. The deity born from Claudia is defeated by Heather. The Order as a structured religious organisation is definitively destroyed. The story of Alessa Gillespie, begun in the first game, comes to a close."
            }
          },
          { id: "sh3-novel", type: "NOVEL", typeEn: "NOVEL", year: "2000", releaseYear: "2007", releaseYearEn: "2007",
            title: { it: "Silent Hill 3: The Novel", en: "Silent Hill 3: The Novel" },
            synopsis: {
              it: "Novelizzazione ufficiale del terzo gioco, scritta da Sadamu Yamashita con illustrazioni di Masahiro Ito. Pubblicata nel 2007, disponibile in giapponese con traduzione fan-made di Wyntr. Include sezioni dal punto di vista di personaggi secondari oltre a Heather. Come le precedenti novelizzazioni di Yamashita, ha status semi-canonico rispetto al gioco originale.",
              en: "Official novelisation of the third game, written by Sadamu Yamashita with illustrations by Masahiro Ito. Published in 2007, available in Japanese with a fan-made translation by Wyntr. Includes sections from the point of view of secondary characters alongside Heather. Like Yamashita's previous novelisations, it has semi-canonical status relative to the original game."
            }
          },
          { id: "homecoming", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "Ottobre 2007", yearEn: "October 2007", releaseYear: "2008", releaseYearEn: "2008",
            title: { it: "Silent Hill: Homecoming", en: "Silent Hill: Homecoming" },
            synopsis: {
              it: "Primo capitolo prodotto da uno studio americano. Alex Shepherd torna a casa da quello che crede essere un periodo in ospedale per ferite di guerra, ma in realtà è stato rinchiuso in una struttura psichiatrica dopo aver causato accidentalmente la morte del fratello minore Josh, annegato in un incidente in barca. Il paesino natale di Shepherd's Glen è deserto e avvolto dall'Otherworld. Centocinquanta anni prima le quattro famiglie fondatrici della città stipularono un patto con l'entità di Silent Hill: ogni cinquant'anni devono sacrificare uno dei propri figli con un metodo specifico per clan. Alex era la vittima designata dagli Shepherd, ma la morte accidentale di Josh al suo posto, non prevista e non voluta, ha rotto il patto scatenando l'Otherworld sulla città. Nel corso del gioco Alex affronta le manifestazioni mostruose dei figli sacrificati dalle altre famiglie. Il detective Wheeler e l'amica d'infanzia Elle affiancano Alex in parte del percorso. Alex sconfigge il boss finale Amnion, manifestazione dello spirito di Josh, e fa pace con il passato. Nessun ending è stato dichiarato ufficialmente canonico.",
              en: "The first entry developed by an American studio. Alex Shepherd returns home from what he believes to have been a period in hospital recovering from war wounds, but in reality he was committed to a psychiatric facility after accidentally causing the death of his younger brother Josh, who drowned in a boating accident. His hometown of Shepherd's Glen is deserted and consumed by the Otherworld. One hundred and fifty years earlier, the four founding families of the town struck a pact with the entity of Silent Hill: every fifty years they must sacrifice one of their children in a method specific to each clan. Alex was the designated Shepherd sacrifice, but Josh's accidental death in his place — unforeseen and unintended — broke the pact and unleashed the Otherworld upon the town. Over the course of the game, Alex faces the monstrous manifestations of the children sacrificed by the other families. Deputy Wheeler and childhood friend Elle accompany Alex for part of the journey. Alex defeats the final boss Amnion, a manifestation of Josh's spirit, and comes to terms with his past. No ending has been officially declared canonical."
            }
          },
          { id: "sinners-reward", type: "FUMETTO", typeEn: "COMIC", year: "Epoca non specificata con precisione", yearEn: "Era not precisely specified", releaseYear: "2008", releaseYearEn: "2008",
            title: { it: "Silent Hill: Sinner's Reward", en: "Silent Hill: Sinner's Reward" },
            synopsis: {
              it: "Jack \"The Pup\" Stanton è un sicario della mafia irlandese che fugge col grande amore della sua vita, Jillian Conway, moglie del suo boss Finn. Durante la fuga il gruppo viene attaccato e Jillian trascinata a Silent Hill. Jack la segue e la città gli mostra i fantasmi delle sue vittime trasfigurati nei mostri. La verità emergente è la più pesante: l'ultima missione di Jack per Finn era l'omicidio del consigliere comunale Linwood e di sua moglie, ma uscendo dalla scena del crimine Jack ha trovato la loro figlia Sara e l'ha uccisa per eliminare la testimone. Sara, nelle viscere di Silent Hill, è ancora lì. Jillian, processata per aver vissuto sul sangue versato da Finn, sceglie di farsi uccidere dalle infermiere come atto di redenzione. Pyramid Head elimina Finn quando questi arriva in città. Jack, in ginocchio davanti allo spettro di Sara, esaurisce ogni tentativo di scusa e si spara in tempia. La storia introduce il concetto di Silent Hill come luogo di giudizio morale, indipendentemente dalla mitologia dell'Ordine.",
              en: "Jack \"The Pup\" Stanton is a hitman for the Irish mob who flees with the great love of his life, Jillian Conway, the wife of his boss Finn. During the escape the group is ambushed and Jillian is dragged into Silent Hill. Jack follows her and the town shows him the ghosts of his victims transformed into monsters. The heaviest truth to emerge: Jack's final job for Finn was the murder of city councillor Linwood and his wife, but as he was leaving the crime scene Jack found their daughter Sara and killed her to eliminate the witness. Sara, deep within Silent Hill, is still there. Jillian, judged for having lived off the blood money spilled by Finn, chooses to let the nurses kill her as an act of redemption. Pyramid Head eliminates Finn when he arrives in town. Jack, on his knees before Sara's ghost, exhausts every attempt at an apology and shoots himself in the temple. The story introduces the concept of Silent Hill as a place of moral judgement, independent of the Order's mythology."
            }
          },
          { id: "downpour", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "Epoca non specificata con precisione", yearEn: "Era not precisely specified", releaseYear: "2012", releaseYearEn: "2012",
            title: { it: "Silent Hill: Downpour", en: "Silent Hill: Downpour" },
            synopsis: {
              it: "Murphy Pendleton, detenuto al carcere di Ryall, ha orchestrato di farsi mettere nella stessa doccia del pedofilo Patrick Napier, responsabile della morte del figlio Charlie, e lo aggredisce. Una guardia corrotta, George Sewell, aveva facilitato l'incontro in cambio di un favore: Murphy avrebbe dovuto uccidere il rispettato agente Frank Coleridge. Murphy non ci riesce e Sewell, furioso, pesta Coleridge quasi a morte e incolpa Murphy. Coleridge sopravvive ma rimane paralizzato. Anni dopo, durante un trasferimento, il bus precipita appena fuori Silent Hill. Murphy fugge e viene inseguito dall'agente Anne Cunningham, figlia di Frank, convinta che Murphy abbia ridotto suo padre in quello stato. Silent Hill non ha legami con l'Ordine in questo capitolo: risponde esclusivamente al senso di colpa di Murphy. Il Bogeyman, il mostro principale, è la proiezione del suo istinto vendicativo. Nell'ending canonico un flashback rivela ad Anne la verità: è stato Sewell a pestare e pugnalare Coleridge, incolpando poi Murphy. Anne capisce l'innocenza di Murphy, lo perdona e lo lascia andare dichiarandolo morto nell'incidente.",
              en: "Murphy Pendleton, an inmate at Ryall Prison, arranges to be placed in the same shower as paedophile Patrick Napier, responsible for the death of his son Charlie, and attacks him. A corrupt guard, George Sewell, had facilitated the encounter in exchange for a favour: Murphy was supposed to kill the respected officer Frank Coleridge. Murphy cannot bring himself to do it, and Sewell, furious, beats Coleridge to within an inch of his life and frames Murphy for the crime. Coleridge survives but is left paralysed. Years later, during a prison transfer, the bus crashes just outside Silent Hill. Murphy escapes and is pursued by officer Anne Cunningham, Frank's daughter, convinced that Murphy was responsible for her father's condition. Silent Hill has no connection to the Order in this entry: it responds exclusively to Murphy's guilt. The Bogeyman, the game's main monster, is the projection of his vengeful instincts. In the canonical ending, a flashback reveals the truth to Anne: it was Sewell who beat and stabbed Coleridge and then framed Murphy. Anne understands Murphy's innocence, forgives him, and lets him go, reporting him as dead in the accident."
            }
          },
          { id: "annes-story", type: "FUMETTO", typeEn: "COMIC", year: "Epoca non specificata con precisione (parallelo a Downpour)", yearEn: "Era not precisely specified (parallel to Downpour)", releaseYear: "2014", releaseYearEn: "2014",
            title: { it: "Silent Hill: Anne's Story", en: "Silent Hill: Anne's Story" },
            synopsis: {
              it: "Tie-in diretto a Downpour che mostra gli stessi eventi dal punto di vista di Anne Marie Cunningham. Anne ha sacrificato tutto per avvicinarsi a Murphy: ha avuto una relazione con il direttore del carcere per ottenere un trasferimento, perdendo il matrimonio e la reputazione. Silent Hill le mostra la sua versione dell'Otherworld: il padre Frank invalido trasformato nella presenza ricorrente del Wheelman, la sua ossessione per la vendetta trasfigurata in mostri. Nel corso della sua esperienza parallela a quella di Murphy, Anne comprende che la vendetta non risolverà nulla. Il quarto numero conferma il finale \"Truth and Justice\" come il finale canonico di Downpour, e mostra Anne che torna a Ryall per confrontarsi con Sewell, l'uomo davvero responsabile della sorte del padre. È il primo fumetto IDW ad avere un legame diretto confermato con un gioco della saga.",
              en: "A direct tie-in to Downpour showing the same events from Anne Marie Cunningham's point of view. Anne has sacrificed everything to get close to Murphy — she had a relationship with the prison warden to secure a transfer, losing her marriage and her reputation in the process. Silent Hill shows her its own version of the Otherworld: her invalid father Frank transformed into the recurring presence of the Wheelman, her obsession with revenge twisted into monsters. Over the course of her experience running parallel to Murphy's, Anne comes to understand that revenge will solve nothing. The fourth issue confirms \"Truth and Justice\" as the canonical ending of Downpour, and shows Anne returning to Ryall to confront Sewell — the man truly responsible for her father's fate. It is the first IDW comic to have a directly confirmed connection to a game in the saga."
            }
          }
        ]
      }
    ]
  },

  "tomb-raider": {
    id: "tomb-raider",
    listTitle: { it: "Tomb Raider", en: "Tomb Raider" },
    eyebrow: { it: "Fascicolo", en: "Case File" },
    title: { it: "Tomb Raider", en: "Tomb Raider" },
    blurb: {
      it: "Un'archeologa avventuriera esplora rovine dimenticate e civiltà perdute, spesso al confine tra storia e leggenda, alla ricerca di manufatti capaci di sfidare ogni spiegazione razionale. Trappole millenarie, culti segreti e organizzazioni rivali le contendono ogni scoperta. La sete di conoscenza, qui, va sempre di.",
      en: "An adventuring archaeologist explores forgotten ruins and lost civilizations, often on the border between history and legend, in search of artifacts that defy rational explanation. Ancient traps, secret cults, and rival organizations contest every discovery with her. The thirst for knowledge always walks hand in hand with."
    },
    palette: ["#5c1a1a", "#c9a227", "#2e2e2e"],
    accentColor: "#c9a227",
    tracks: [],
    avatar: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Tomb%20Raider%20Avatar.jpg",
    banner: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Tomb%20Raider%20Banner.jpg",
    watermark: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Tomb%20Raider%20Filigrana.jpg",
    watermarkOpacity: 0.18,
    universes: [
      {
        id: "continuita-classica",
        name: { it: "Continuità Classica (Core Design)", en: "Classic Continuity (Core Design)" },
        span: { it: "1996 – 2003", en: "1996 – 2003" },
        entries: [
          { id: "tr1", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "1996",
            releaseYear: "1996", releaseYearEn: "1996",
            title: { it: "Tomb Raider", en: "Tomb Raider" },
            synopsis: {
              it: "Ingaggiata da un'imprenditrice per recuperare un manufatto Atlante chiamato lo Scion, l'archeologa Lara Croft esplora le rovine del Perù, la Grecia, l'Egitto e infine Atlantide stessa, scoprendo che la vera committente, Jacqueline Natla, è una sopravvissuta immortale della civiltà atlantidea intenzionata a resuscitare la propria antica potenza distruttiva. Lara sconfigge Natla nel cuore di Atlantide, impedendo la catastrofe. Il gioco che ha inventato il genere action-adventure archeologico su console, e reso Lara Croft un'icona globale.",
              en: "Hired by a businesswoman to recover an Atlantean artefact called the Scion, archaeologist Lara Croft explores the ruins of Peru, Greece, Egypt, and finally Atlantis itself, discovering that her true employer, Jacqueline Natla, is an immortal survivor of the Atlantean civilisation intent on resurrecting its ancient destructive power. Lara defeats Natla at the heart of Atlantis, averting catastrophe. The game that invented the archaeological action-adventure genre on consoles, and turned Lara Croft into a global icon."
            }
          },
          { id: "tr2", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "1997",
            releaseYear: "1997", releaseYearEn: "1997",
            title: { it: "Tomb Raider II", en: "Tomb Raider II" },
            synopsis: {
              it: "Lara dà la caccia al Pugnale di Xian, un artefatto in grado di trasformare chi lo impugna in un drago, prima che possa cadere nelle mani di Marco Bartoli, un culto criminale che intende usarlo per ottenere potere sovrumano. Tra Venezia, il Mare Cinese Meridionale e le montagne cinesi, Lara affronta la Fratellanza del Drago capeggiata da Bartoli, recupera il pugnale e lo distrugge in un vulcano, impedendo che il suo potere venga usato per il male.",
              en: "Lara hunts for the Dagger of Xian, an artefact able to transform its wielder into a dragon, before it can fall into the hands of Marco Bartoli, a criminal cult intent on using it to gain superhuman power. Across Venice, the South China Sea, and the Chinese mountains, Lara confronts the Brotherhood of the Dragon led by Bartoli, recovers the dagger, and destroys it in a volcano, preventing its power from being used for evil."
            }
          },
          { id: "tr3", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "1998",
            releaseYear: "1998", releaseYearEn: "1998",
            title: { it: "Tomb Raider III", en: "Tomb Raider III" },
            synopsis: {
              it: "Lara insegue i frammenti di un meteorite antichissimo, l'Infada, i cui poteri sono ambiti sia da un'organizzazione paramilitare privata sia dallo spregiudicato collezionista Sophia Leigh, viaggiando tra India, Isole del Pacifico Meridionale, Londra, Nevada e Antartide. Recuperati tutti i frammenti, Lara scopre che il meteorite ha origini aliene e ne distrugge il potenziale distruttivo, ponendo fine alla corsa per il suo controllo.",
              en: "Lara pursues the fragments of an ancient meteorite, the Infada Stone, whose powers are coveted by both a private paramilitary organisation and the ruthless collector Sophia Leigh, travelling across India, the South Pacific Islands, London, Nevada, and Antarctica. Having recovered all the fragments, Lara discovers the meteorite's origins are alien and destroys its destructive potential, ending the race for its control."
            }
          },
          { id: "last-revelation", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "1999",
            releaseYear: "1999", releaseYearEn: "1999",
            title: { it: "Tomb Raider: The Last Revelation", en: "Tomb Raider: The Last Revelation" },
            synopsis: {
              it: "Tornata in Egitto per la prima volta dal gioco originale, Lara scopre di aver risvegliato inavvertitamente da bambina, durante una spedizione col proprio mentore Von Croy, il dio egizio del caos Seth, imprigionato da millenni. Per rimediare all'errore, Lara raccoglie l'Amuleto di Horus in grado di sigillare nuovamente Seth, ma nel farlo resta apparentemente intrappolata sotto le macerie del tempio in esplosione insieme al dio sconfitto. Il gioco si chiude con la presunta morte di Lara, elemento narrativo poi ripreso e reinterpretato in Chronicles.",
              en: "Returning to Egypt for the first time since the original game, Lara discovers she inadvertently awakened, as a child during an expedition with her mentor Von Croy, the Egyptian god of chaos Seth, imprisoned for millennia. To fix her mistake, Lara gathers the Amulet of Horus, able to reseal Seth, but in doing so appears to be trapped beneath the rubble of the collapsing temple alongside the defeated god. The game ends with Lara's apparent death, a narrative element later revisited and reinterpreted in Chronicles."
            }
          },
          { id: "chronicles", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "prima di Last Revelation (raccontato dopo)",
            releaseYear: "2000", releaseYearEn: "2000",
            title: { it: "Tomb Raider Chronicles", en: "Tomb Raider Chronicles" },
            synopsis: {
              it: "Durante una veglia funebre in memoria di Lara, creduta morta alla fine di The Last Revelation, amici e colleghi si ritrovano a raccontarsi a vicenda avventure passate mai narrate prima: una caccia al tesoro a Roma, un'indagine su una nave affondata al largo dell'Irlanda, una missione a San Pietroburgo e un'infiltrazione in un grattacielo di Manhattan alla ricerca di reliquie mistiche. Un'antologia di episodi indipendenti, ambientati cronologicamente prima di Last Revelation ma narrati come flashback dopo la sua conclusione, che nel finale lascia intendere che Lara sia in realtà sopravvissuta.",
              en: "During a memorial gathering for Lara, believed dead at the end of The Last Revelation, friends and colleagues take turns recounting past adventures never told before: a treasure hunt in Rome, an investigation into a sunken ship off the coast of Ireland, a mission in Saint Petersburg, and an infiltration of a Manhattan skyscraper in search of mystical relics. An anthology of standalone episodes, chronologically set before Last Revelation but narrated as flashbacks after its conclusion, whose ending hints that Lara may in fact have survived."
            }
          },
          { id: "angel-of-darkness", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "2003",
            releaseYear: "2003", releaseYearEn: "2003",
            title: { it: "Tomb Raider: The Angel of Darkness", en: "Tomb Raider: The Angel of Darkness" },
            synopsis: {
              it: "Confermata sopravvissuta agli eventi di Last Revelation, Lara viene incastrata per l'omicidio del proprio ex mentore Werner Von Croy a Parigi, e indaga per conto proprio scoprendo il coinvolgimento di una setta esoterica, i Cabal, intenzionata a resuscitare un antico essere immortale chiamato Boaz attraverso l'uso di dipinti magici capaci di generare mostri viventi. Ultimo capitolo sviluppato da Core Design, concepito come primo episodio di una nuova trilogia poi mai completata a causa della travagliata accoglienza critica e commerciale del gioco, che portò Eidos a trasferire lo sviluppo della serie a Crystal Dynamics.",
              en: "Confirmed to have survived the events of Last Revelation, Lara is framed for the murder of her former mentor Werner Von Croy in Paris, and investigates on her own, uncovering the involvement of an esoteric sect, the Cabal, intent on resurrecting an ancient immortal being called Boaz through the use of magical paintings capable of spawning living monsters. The last chapter developed by Core Design, conceived as the first episode of a new trilogy never completed due to the game's troubled critical and commercial reception, which led Eidos to move the series' development to Crystal Dynamics."
            }
          }
        ]
      },
      {
        id: "continuita-legend",
        name: { it: "Continuità Legend (Crystal Dynamics, prima trilogia)", en: "Legend Continuity (Crystal Dynamics, first trilogy)" },
        span: { it: "2006 – 2008", en: "2006 – 2008" },
        entries: [
          { id: "anniversary", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "cronologicamente il primo di questa continuità",
            releaseYear: "2007", releaseYearEn: "2007",
            title: { it: "Tomb Raider: Anniversary", en: "Tomb Raider: Anniversary" },
            synopsis: {
              it: "Remake del gioco originale del 1996 per il decimo anniversario della serie, con motore grafico e meccaniche riprese da Legend. Lara viene ingaggiata per recuperare lo Scion, un manufatto della civiltà atlantidea, riscoprendo lungo il cammino tra Perù, Grecia, Egitto e Atlantide la vera natura della sua committente Jacqueline Natla. Pur uscito nel 2007, un anno DOPO Legend, racconta la storia più antica di questa continuità: la scelta narrativa colloca il vero inizio della carriera di Lara qui, non nel gioco uscito per primo.",
              en: "A remake of the original 1996 game for the series' tenth anniversary, using the engine and mechanics from Legend. Lara is hired to recover the Scion, an artefact of the Atlantean civilisation, discovering along the way across Peru, Greece, Egypt, and Atlantis the true nature of her employer, Jacqueline Natla. Although released in 2007, a year AFTER Legend, it tells the earliest story in this continuity: a narrative choice that places the true beginning of Lara's career here, not in the game that released first."
            }
          },
          { id: "legend", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "dopo Anniversary",
            releaseYear: "2006", releaseYearEn: "2006",
            title: { it: "Tomb Raider: Legend", en: "Tomb Raider: Legend" },
            synopsis: {
              it: "Lara indaga sulla scomparsa della propria madre, avvenuta durante un incidente aereo nell'infanzia di Lara stessa in circostanze rimaste misteriose, seguendo le tracce di Excalibur e della mitica Avalon attraverso Bolivia, Perù, Ghiacci del Nord, Giappone e Inghilterra. Nel corso dell'indagine, Lara si scontra con l'ex collega diventata rivale Amanda Evert e con James Rutland, entrambi coinvolti a vario titolo nella tragedia che colpì la sua famiglia, scoprendo infine che la madre potrebbe essere ancora viva, intrappolata in una dimensione parallela. Il reboot che ha rilanciato la serie sotto Crystal Dynamics dopo la crisi di Angel of Darkness.",
              en: "Lara investigates the disappearance of her mother, which occurred in a plane crash during Lara's own childhood under mysterious circumstances, following the trail of Excalibur and mythical Avalon across Bolivia, Peru, the Norwegian ice fields, Japan, and England. In the course of the investigation, Lara clashes with her former colleague turned rival Amanda Evert and with James Rutland, both involved in various ways in the tragedy that struck her family, ultimately discovering that her mother may still be alive, trapped in a parallel dimension. The reboot that relaunched the series under Crystal Dynamics after the crisis of Angel of Darkness."
            }
          },
          { id: "underworld", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "dopo Legend",
            releaseYear: "2008", releaseYearEn: "2008",
            title: { it: "Tomb Raider: Underworld", en: "Tomb Raider: Underworld" },
            synopsis: {
              it: "Diretto seguito di Legend. Sulle tracce di un martello capace di aprire una porta verso il regno norreno di Helheim, Lara viaggia tra Mediterraneo, Thailandia, Messico e Artico, scontrandosi nuovamente con Amanda Evert e con Jacqueline Natla, sopravvissuta e riemersa dagli eventi di Anniversary. Nel finale, dopo aver scoperto ulteriori verità sulla scomparsa della madre e sulla morte del padre, Lara viene apparentemente uccisa da un colpo sparato da Natla — cliffhanger poi lasciato irrisolto con la chiusura definitiva di questa trilogia e il passaggio alla continuità Survivor.",
              en: "A direct sequel to Legend. On the trail of a hammer capable of opening a door to the Norse realm of Helheim, Lara travels across the Mediterranean, Thailand, Mexico, and the Arctic, clashing once more with Amanda Evert and with Jacqueline Natla, having survived and resurfaced from the events of Anniversary. In the finale, after uncovering further truths about her mother's disappearance and her father's death, Lara is apparently killed by a shot fired by Natla — a cliffhanger left unresolved as this trilogy came to its definitive close and the series moved on to the Survivor continuity."
            }
          }
        ]
      },
      {
        id: "continuita-survivor",
        name: { it: "Continuità Survivor (Crystal Dynamics, seconda trilogia)", en: "Survivor Continuity (Crystal Dynamics, second trilogy)" },
        span: { it: "2013 – 2018", en: "2013 – 2018" },
        entries: [
          { id: "tr2013", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "2013",
            releaseYear: "2013", releaseYearEn: "2013",
            title: { it: "Tomb Raider (2013)", en: "Tomb Raider (2013)" },
            synopsis: {
              it: "Reboot totale delle origini di Lara. Naufragata sull'isola sovrannaturale di Yamatai insieme all'equipaggio della nave Endurance durante una spedizione archeologica, la giovane e inesperta Lara Croft, alla sua prima vera missione sul campo, deve sopravvivere agli agguati del culto dei Solari, custodi dell'isola, e alle forze soprannaturali legate alla defunta imperatrice-sole Himiko, mentre cerca di salvare i propri compagni catturati. Nel corso della disperata lotta per la sopravvivenza, Lara si trasforma da studiosa timorosa in sopravvissuta risoluta, sconfiggendo infine lo spirito di Himiko e fuggendo dall'isola.",
              en: "A total reboot of Lara's origins. Shipwrecked on the supernatural island of Yamatai together with the crew of the ship Endurance during an archaeological expedition, the young and inexperienced Lara Croft, on her first true field mission, must survive ambushes from the Solarii cult, guardians of the island, and supernatural forces tied to the deceased sun-empress Himiko, all while trying to save her captured companions. Over the course of the desperate fight for survival, Lara transforms from a fearful scholar into a resolute survivor, ultimately defeating Himiko's spirit and escaping the island."
            }
          },
          { id: "rise-of-the-tomb-raider", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "2015",
            releaseYear: "2015", releaseYearEn: "2015",
            title: { it: "Rise of the Tomb Raider", en: "Rise of the Tomb Raider" },
            synopsis: {
              it: "Sulle tracce del padre, screditato in vita per le proprie ricerche sull'immortalità, Lara viaggia in Siberia in cerca della leggendaria Città Perduta di Kitezh, entrando in conflitto con Trinity, un'organizzazione paramilitare segreta che cerca lo stesso artefatto per scopi propri. Lara si allea con Jacob, custode della città, e sua figlia Sofia contro il comandante di Trinity Konstantin, sconfiggendolo e impedendo a Trinity di impossessarsi della fonte di immortalità, riscattando così anche la memoria del padre.",
              en: "Following in her father's footsteps, discredited in life for his research into immortality, Lara travels to Siberia in search of the legendary Lost City of Kitezh, coming into conflict with Trinity, a secret paramilitary organisation seeking the same artefact for its own purposes. Lara allies with Jacob, the city's guardian, and his daughter Sofia against Trinity's commander Konstantin, defeating him and preventing Trinity from seizing the source of immortality, thereby also redeeming her father's memory."
            }
          },
          { id: "shadow-of-the-tomb-raider", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "2018",
            releaseYear: "2018", releaseYearEn: "2018",
            title: { it: "Shadow of the Tomb Raider", en: "Shadow of the Tomb Raider" },
            synopsis: {
              it: "Nel tentativo di impedire a Trinity di innescare un cataclisma Maya profetizzato, Lara stessa attiva accidentalmente il disastro, scatenando terremoti e inondazioni che devastano l'America Centrale. Sentendosi responsabile, Lara viaggia tra Messico e Perù per fermare Trinity e il suo comandante Dominguez prima che possa completare il rituale apocalittico usando un pugnale sacro, affrontando lungo il cammino le conseguenze dirette delle proprie azioni sulle comunità locali. Capitolo conclusivo della trilogia Survivor, in cui Lara diventa infine pienamente la Tomb Raider.",
              en: "In attempting to stop Trinity from triggering a prophesied Mayan cataclysm, Lara herself accidentally sets the disaster in motion, unleashing earthquakes and floods that devastate Central America. Feeling responsible, Lara travels across Mexico and Peru to stop Trinity and its commander Dominguez before he can complete the apocalyptic ritual using a sacred dagger, confronting along the way the direct consequences of her own actions on local communities. The concluding chapter of the Survivor trilogy, in which Lara finally becomes the Tomb Raider in full."
            }
          }
        ]
      }
    ]
  },

  warcraft: {
    id: "warcraft",
    listTitle: { it: "Warcraft", en: "Warcraft" },
    eyebrow: { it: "Fascicolo", en: "Case File" },
    title: { it: "Warcraft", en: "Warcraft" },
    blurb: {
      it: "Sul continente di Azeroth, Orda e Alleanza combattono una guerra senza fine, spesso costrette a mettere da parte l'odio reciproco davanti a minacce ben più grandi: legioni demoniache, flagelli non morti e forze elementali capaci di cancellare ogni forma di vita. Eroi di ogni razza scelgono da che parte stare, sapendo che.",
      en: "On the continent of Azeroth, the Horde and the Alliance wage an endless war, often forced to set aside their mutual hatred in the face of far greater threats: demonic legions, undead scourges, and elemental forces capable of erasing all life. Heroes of every race choose a side, knowing the stakes are always the."
    },
    palette: ["#1a3a1a", "#c9a227", "#8b1a1a"],
    accentColor: "#c9a227",
    tracks: [],
    avatar: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Warcraft%20Avatar.jpg",
    banner: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Warcraft%20Banner.jpg",
    watermark: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Warcraft%20Filigrana.jpg",
    watermarkOpacity: 0.18,
    universes: [
      {
        id: "trilogia-rts",
        name: { it: "Trilogia RTS", en: "RTS Trilogy" },
        span: { it: "Prima Guerra – Terza Guerra", en: "First War – Third War" },
        entries: [
          { id: "warcraft-1", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "Prima Guerra", releaseYear: "1994", releaseYearEn: "1994",
            title: { it: "Warcraft: Orcs & Humans", en: "Warcraft: Orcs & Humans" },
            synopsis: {
              it: "Gli orchi, giunti su Azeroth attraverso il Portale Oscuro aperto dal mago corrotto Medivh, invadono il regno umano di Stormwind, dando inizio alla Prima Guerra tra le due specie.",
              en: "The orcs, having arrived on Azeroth through the Dark Portal opened by the corrupted mage Medivh, invade the human kingdom of Stormwind, starting the First War between the two species."
            }
          },
          { id: "warcraft-2", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "Seconda Guerra", releaseYear: "1995", releaseYearEn: "1995",
            title: { it: "Warcraft II: Tides of Darkness", en: "Warcraft II: Tides of Darkness" },
            synopsis: {
              it: "Sconfitti a Stormwind, gli orchi dell'Horde riorganizzato invadono il resto di Azeroth; umani, elfi e nani formano l'Alleanza per respingerli nella Seconda Guerra, chiudendola con la cacciata dell'Horde da Azeroth stessa.",
              en: "Defeated at Stormwind, the orcs of the reorganised Horde invade the rest of Azeroth; humans, elves, and dwarves form the Alliance to repel them in the Second War, ending it by driving the Horde out of Azeroth itself."
            }
          },
          { id: "warcraft-2-btdp", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "dopo la Seconda Guerra", releaseYear: "1996", releaseYearEn: "1996",
            title: { it: "Beyond the Dark Portal", en: "Beyond the Dark Portal" },
            synopsis: {
              it: "L'Alleanza attraversa il Portale Oscuro fino a Draenor, il mondo natale degli orchi ormai devastato dalla propria stessa corruzione, per porre fine alla minaccia alla radice prima che possa tornare a colpire Azeroth.",
              en: "The Alliance crosses the Dark Portal to Draenor, the orcs' home world now ravaged by its own corruption, to end the threat at its root before it can strike Azeroth again."
            }
          },
          { id: "warcraft-3", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "Terza Guerra", releaseYear: "2002", releaseYearEn: "2002",
            title: { it: "Warcraft III: Reign of Chaos", en: "Warcraft III: Reign of Chaos" },
            synopsis: {
              it: "Il principe Arthas Menethil cade nella corruzione per fermare una piaga di non-morti, diventando egli stesso il primo Cavaliere della Morte al servizio del Flagello, mentre la Legione Infuocata manovra nell'ombra per aprire un varco verso Azeroth attraverso il Pozzo dell'Eternità.",
              en: "Prince Arthas Menethil falls into corruption trying to stop an undead plague, becoming the first Death Knight in service to the Scourge, while the Burning Legion manoeuvres in the shadows to open a breach into Azeroth through the Well of Eternity."
            }
          },
          { id: "warcraft-3-tft", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "dopo Reign of Chaos", releaseYear: "2003", releaseYearEn: "2003",
            title: { it: "The Frozen Throne", en: "The Frozen Throne" },
            synopsis: {
              it: "Arthas, ormai Re dei Non Morti, uccide il proprio padre e si fonde con Ner'zhul diventando il Re dei Liches, mentre gli elfi della notte e gli orchi guidati da Thrall respingono l'invasione della Legione Infuocata, chiudendo la Terza Guerra con un mondo profondamente trasformato.",
              en: "Arthas, now the Lich King's champion, kills his own father and merges with Ner'zhul to become the Lich King, while the night elves and the orcs led by Thrall repel the Burning Legion's invasion, closing the Third War with a profoundly transformed world."
            }
          }
        ]
      },
      {
        id: "world-of-warcraft",
        name: { it: "World of Warcraft", en: "World of Warcraft" },
        span: { it: "2004 – oggi", en: "2004 – present" },
        entries: [
          { id: "wow-vanilla", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "anni dopo la Terza Guerra", releaseYear: "2004", releaseYearEn: "2004",
            title: { it: "World of Warcraft", en: "World of Warcraft" },
            synopsis: {
              it: "Il gioco di ruolo online che trasforma Azeroth in un mondo persistente e condiviso, con Alleanza e Orda ancora in guerra mentre nuove minacce, tra cui i draghi corrotti dell'Incubo dello Smeraldo, emergono ai margini del conflitto.",
              en: "The online role-playing game that turns Azeroth into a persistent, shared world, with the Alliance and the Horde still at war while new threats, including the corrupted dragons of the Emerald Nightmare, emerge at the edges of the conflict."
            }
          },
          { id: "burning-crusade", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "prima espansione", releaseYear: "2007", releaseYearEn: "2007",
            title: { it: "The Burning Crusade", en: "The Burning Crusade" },
            synopsis: {
              it: "Il Portale Oscuro si riapre verso Draenor, ormai frammentato in Outland: gli eroi vi si spingono per fermare Illidan Grande Traditore e la Legione Infuocata, tornata a minacciare Azeroth dopo gli eventi di Warcraft III.",
              en: "The Dark Portal reopens toward Draenor, now shattered into Outland: heroes venture there to stop Illidan the Betrayer and the Burning Legion, once again threatening Azeroth after the events of Warcraft III."
            }
          },
          { id: "wrath-of-the-lich-king", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "seconda espansione", releaseYear: "2008", releaseYearEn: "2008",
            title: { it: "Wrath of the Lich King", en: "Wrath of the Lich King" },
            synopsis: {
              it: "Gli eroi marciano su Northrend per porre fine una volta per tutte al regno di Arthas, ormai completamente il Re dei Liches, affrontandolo infine nella Cittadella della Corona di Ghiaccio.",
              en: "Heroes march on Northrend to end Arthas's reign once and for all, now fully the Lich King, finally confronting him at the Icecrown Citadel."
            }
          },
          { id: "cataclysm", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "terza espansione", releaseYear: "2010", releaseYearEn: "2010",
            title: { it: "Cataclysm", en: "Cataclysm" },
            synopsis: {
              it: "Deathwing, il Dragone Nero corrotto, emerge dalle profondità di Azeroth devastandone la superficie e ridisegnandone letteralmente la geografia, mentre gli eroi si alleano per fermarlo prima che possa distruggere il mondo stesso.",
              en: "Deathwing, the corrupted Black Dragon, emerges from Azeroth's depths, devastating its surface and literally reshaping its geography, while heroes join forces to stop him before he can destroy the world itself."
            }
          },
          { id: "mists-of-pandaria", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "quarta espansione", releaseYear: "2012", releaseYearEn: "2012",
            title: { it: "Mists of Pandaria", en: "Mists of Pandaria" },
            synopsis: {
              it: "Il continente nascosto di Pandaria riemerge dalla nebbia dopo secoli di isolamento; Alleanza e Orda, seguendovi, riaccendono il proprio conflitto proprio mentre lo scoprono, mettendo a rischio la sua fragile pace.",
              en: "The hidden continent of Pandaria re-emerges from the mist after centuries of isolation; the Alliance and the Horde, following it there, reignite their conflict just as they discover it, endangering its fragile peace."
            }
          },
          { id: "warlords-of-draenor", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "quinta espansione", releaseYear: "2014", releaseYearEn: "2014",
            title: { it: "Warlords of Draenor", en: "Warlords of Draenor" },
            synopsis: {
              it: "Un viaggio nel tempo porta gli eroi su una Draenor alternativa, ancora integra, dove un'Orda di Ferro capeggiata da signori della guerra orcheschi minaccia di invadere Azeroth prima ancora che la storia originale abbia inizio.",
              en: "A journey through time brings heroes to an alternate, still-intact Draenor, where an Iron Horde led by orcish warlords threatens to invade Azeroth before the original history has even begun."
            }
          },
          { id: "legion", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "sesta espansione", releaseYear: "2016", releaseYearEn: "2016",
            title: { it: "Legion", en: "Legion" },
            synopsis: {
              it: "La Legione Infuocata invade Azeroth con la sua forza più massiccia di sempre; gli eroi diventano Cavalieri della Morte, Cacciatori di Demoni e altre classi d'elite per fermarla, mentre Illidan stesso torna in campo come alleato inatteso.",
              en: "The Burning Legion invades Azeroth with its most massive force ever; heroes become Death Knights, Demon Hunters, and other elite classes to stop it, while Illidan himself returns to the field as an unexpected ally."
            }
          },
          { id: "battle-for-azeroth", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "settima espansione", releaseYear: "2018", releaseYearEn: "2018",
            title: { it: "Battle for Azeroth", en: "Battle for Azeroth" },
            synopsis: {
              it: "Sconfitta la Legione, Alleanza e Orda tornano a scontrarsi tra loro per il controllo di Azerite, una sostanza rivelatasi il sangue stesso del pianeta, mentre l'antico titano corrotto N'Zoth manipola entrambe le fazioni da dietro le quinte.",
              en: "With the Legion defeated, the Alliance and the Horde clash again over control of Azerite, a substance revealed to be the planet's own blood, while the ancient corrupted titan N'Zoth manipulates both factions from behind the scenes."
            }
          },
          { id: "shadowlands", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "ottava espansione", releaseYear: "2020", releaseYearEn: "2020",
            title: { it: "Shadowlands", en: "Shadowlands" },
            synopsis: {
              it: "La morte di Sylvanas Windrunner spalanca un varco verso i Territori delle Ombre, l'aldilà stesso di Azeroth, dove il tessuto della morte è stato corrotto dal Custode Torghast: un intero regno cosmico da salvare dal collasso.",
              en: "Sylvanas Windrunner's death tears open a rift into the Shadowlands, Azeroth's own afterlife, where the very fabric of death has been corrupted by the Jailer: an entire cosmic realm to save from collapse."
            }
          },
          { id: "dragonflight", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "nona espansione", releaseYear: "2022", releaseYearEn: "2022",
            title: { it: "Dragonflight", en: "Dragonflight" },
            synopsis: {
              it: "Gli eroi viaggiano nelle Isole dei Draghi, patria ancestrale degli stirpi draconiche, per aiutarle a ricostruire la propria società dopo secoli di assenza dagli affari di Azeroth, in un'espansione dal tono più luminoso dopo il cupo capitolo precedente.",
              en: "Heroes travel to the Dragon Isles, the ancestral home of the dragonflights, to help them rebuild their society after centuries away from Azeroth's affairs, in an expansion with a notably brighter tone after the previous, grimmer chapter."
            }
          },
          { id: "the-war-within", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "decima espansione", releaseYear: "2024", releaseYearEn: "2024",
            title: { it: "The War Within", en: "The War Within" },
            synopsis: {
              it: "Gli eroi scendono nelle profondità sotterranee di Azeroth per fermare i Nerubiani risvegliati e il Vuoto Nero che li corrompe, scoprendo che il cuore pulsante del pianeta stesso è in pericolo. Prima delle tre espansioni annunciate della trilogia \"Worldsoul Saga\".",
              en: "Heroes descend into Azeroth's underground depths to stop the awakened Nerubians and the Void corrupting them, discovering that the planet's own beating heart is in danger. The first of three announced expansions in the \"Worldsoul Saga\" trilogy."
            }
          }
        ]
      }
    ]
  },

  "remedy-universe": {
    id: "remedy-universe",
    listTitle: { it: "Universo Connesso di Remedy", en: "Remedy Connected Universe" },
    eyebrow: { it: "Fascicolo", en: "Case File" },
    title: { it: "Universo Connesso di Remedy", en: "Remedy Connected Universe" },
    blurb: {
      it: "Storie apparentemente distanti si rivelano intrecciate da un filo sottile fatto di fenomeni inspiegabili, oggetti dotati di un potere proprio e una realtà che sembra piegarsi attorno a chi ne è toccato. Un'agenzia segreta indaga su questi eventi mentre scrittori, agenti e persone comuni si trovano invischiati in qualcosa più grande.",
      en: "Seemingly distant stories reveal themselves woven together by a thin thread of unexplainable phenomena, objects with a power all their own, and a reality that seems to bend around whoever is touched by it. A secret agency investigates these events while writers, agents, and ordinary people find themselves."
    },
    palette: ["#f0a202", "#1b2a4a", "#c0293b"],
    accentColor: "#f0a202",
    universes: [
      {
        id: "main",
        name: { it: "RCU", en: "RCU" },
        span: { it: "2010 – 2025", en: "2010 – 2025" },
        entries: [
          { id: "rcu-background", type: "BACKGROUND", typeEn: "BACKGROUND", year: "—",
            title: { it: "RCU", en: "RCU" },
            synopsis: {
              it: "L'Universo Connesso di Remedy o Remedy Connected Universe (RCU) è l'universo condiviso di Remedy Entertainment, costruito retroattivamente a partire dal 2020, quando Sam Lake confermò ufficialmente l'esistenza del progetto in occasione del DLC AWE di Control. L'RCU non nasce da un piano preciso: i giochi Remedy hanno sempre contenuto riferimenti reciproci, ma solo con Control e Alan Wake 2 questi si sono elevati da easter egg a canone vero. L'universo ruota attorno al concetto di Altered World Event (AWE): fenomeni paranormali che sfidano la fisica conosciuta e che l'FBC, il Federal Bureau of Control, un'agenzia governativa segreta, studia, contiene e insabbia.\n\nConcetti fondamentali dell'RCU\n\nIl Luogo Oscuro (Dark Place) è una dimensione parallela che si nutre di creatività: artisti, scrittori e musicisti vi rimangono intrappolati e vengono usati per generare realtà alternativa. Cauldron Lake, a Bright Falls, Washington, è una soglia, un collegamento fisico tra il mondo reale e il Luogo Oscuro. L'FBC classifica ogni manifestazione paranormale come AWE e mantiene la sede operativa nell'Oldest House, un edificio di New York che esiste in più dimensioni contemporaneamente e non compare sulle mappe. L'Hiss è un'entità risonante che ha infettato e corrotto l'Oldest House durante gli eventi di Control. Queste strutture concettuali si intrecciano in tutto l'universo.",
              en: "The Remedy Connected Universe (RCU) is Remedy Entertainment's shared universe, built retroactively from 2020 onward — when Sam Lake officially confirmed the project's existence on the occasion of Control's AWE DLC. The RCU was never born from a precise plan: Remedy's games have always contained mutual references, but only with Control and Alan Wake 2 did these rise from easter eggs to genuine canon. The universe revolves around the concept of the Altered World Event (AWE): paranormal phenomena that defy known physics, which the FBC — the Federal Bureau of Control, a secret government agency — studies, contains, and covers up.\n\nCore Concepts of the RCU\n\nThe Dark Place is a parallel dimension that feeds on creativity — artists, writers, and musicians become trapped within it and are used to generate alternative reality. Cauldron Lake, in Bright Falls, Washington, is a Threshold: a physical connection between the real world and the Dark Place. The FBC classifies every paranormal manifestation as an AWE and maintains its operational headquarters in the Oldest House — a New York building that exists across multiple dimensions simultaneously and does not appear on any map. The Hiss is a resonant entity that infected and corrupted the Oldest House during the events of Control. These conceptual structures interweave throughout the entire universe."
            }
          },
          { id: "alan-wake", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "2010", releaseYear: "2010", releaseYearEn: "2010",
            title: { it: "Alan Wake", en: "Alan Wake" },
            synopsis: {
              it: "Alan Wake è uno scrittore famoso in crisi creativa che arriva a Bright Falls con la moglie Alice in cerca di ispirazione. Quando Alice scompare nel lago di Cauldron Lake, una soglia verso il Luogo Oscuro, Alan inizia a trovare pagine di un manoscritto horror che non ricorda di aver scritto, ma che descrive gli eventi che si stanno verificando intorno a lui in tempo reale. La Presenza Oscura, un'entità che abita il Luogo Oscuro, sta usando la sua capacità creativa per manifestarsi nel mondo reale attraverso i Posseduti: persone e oggetti corrotti dall'oscurità, che può essere bruciata via dalla luce. Alan scopre che Thomas Zane, un poeta finlandese scomparso nel 1970, era rimasto intrappolato nel Luogo Oscuro e aveva cercato di combattere la Presenza Oscura con la stessa arma: la scrittura. Il gioco si conclude con Alan che si tuffa nel lago per liberare Alice, prendendo il suo posto nel Luogo Oscuro.\n\nI DLC Il Segnale (The Signal) e Lo Scrittore (The Writer) sono parte integrante del canone e mostrano Alan nel Luogo Oscuro mentre inizia a lavorare su un nuovo manoscritto chiamato Ritorno (Return), quello che porterà agli eventi di Alan Wake 2.",
              en: "Alan Wake is a famous writer struggling with creative block who arrives in Bright Falls with his wife Alice looking for inspiration. When Alice disappears into Cauldron Lake — a Threshold to the Dark Place — Alan begins finding pages of a horror manuscript he has no memory of writing, yet which describes the events unfolding around him in real time. The Dark Presence, an entity dwelling in the Dark Place, is using his creative ability to manifest in the real world through the Taken: people and objects corrupted by darkness, which can be burned away by light. Alan discovers that Thomas Zane — a Finnish poet who vanished in 1970 — had been trapped in the Dark Place and had tried to fight the Dark Presence with the same weapon: writing. The game concludes with Alan diving into the lake to free Alice, taking her place in the Dark Place.\n\nThe DLC expansions The Signal and The Writer are an integral part of the canon and show Alan in the Dark Place as he begins working on a new manuscript called Return — the one that will lead directly into the events of Alan Wake 2."
            }
          },
          { id: "house-of-dreams", type: "BLOG", typeEn: "BLOG", year: "2012", releaseYear: "2012", releaseYearEn: "2012",
            title: { it: "This House of Dreams", en: "This House of Dreams" },
            synopsis: {
              it: "Blog ARG pubblicato nel corso del 2012 e confermato canonico da Sam Lake nello stesso anno. Racconta gli strani eventi nella vita di una donna di nome Samantha Wells dopo che si trasferisce a Ordinary, Maine, la città di Jesse Faden, con riferimenti alla poesia di Thomas Zane e ad altri elementi dell'universo Alan Wake. Control menziona direttamente il blog su una lavagna nel Centro di Ricerca (Central Research), indicando che l'FBC ha monitorato Samantha e confiscato temporaneamente una scatola da scarpe appartenente a lei. Nel DLC The Lake House di Alan Wake 2 appare un documento con l'URL reale del blog, classificato come attività para-utilitariana.",
              en: "An ARG blog published throughout 2012 and confirmed canonical by Sam Lake the same year. It chronicles the strange events in the life of a woman named Samantha Wells after she moves to Ordinary, Maine — Jesse Faden's hometown — with references to Thomas Zane's poetry and other elements of the Alan Wake universe. Control directly references the blog on a whiteboard in Central Research, indicating that the FBC had been monitoring Samantha and temporarily confiscated a shoebox belonging to her. In Alan Wake 2's The Lake House DLC, a document appears bearing the blog's real-world URL, classified as parautilitarian activity."
            }
          },
          { id: "american-nightmare", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "2012", releaseYear: "2012", releaseYearEn: "2012",
            title: { it: "Alan Wake's American Nightmare", en: "Alan Wake's American Nightmare" },
            synopsis: {
              it: "Alan Wake, ancora intrappolato nel Luogo Oscuro, scrive un episodio del Night Springs, una serie televisiva in stile Twilight Zone presente nell'universo RCU, nel tentativo di usare la narrativa per fuggire dalla sua prigione. L'episodio lo vede fronteggiare Mr. Scratch, il suo doppio malvagio generato dal Luogo Oscuro, bloccato in un loop temporale in un deserto dell'Arizona. Alan riesce a prevalere nel finale, ma Sam Lake ha confermato che gli eventi non si sono mai concretizzati nel mondo reale: erano solo un tentativo fallito di fuga rimasto confinato nel Luogo Oscuro. Mr. Scratch rimane un personaggio vivo e attivo nell'universo, Control lo menziona come entità che tormenta ancora Alice Wake, e il concetto di Night Springs ritorna nel DLC omonimo di Alan Wake 2.",
              en: "Alan Wake, still trapped in the Dark Place, writes an episode of Night Springs — a Twilight Zone-style television show present throughout the RCU — in an attempt to use narrative as a means of escaping his prison. The episode sees him face Mr. Scratch, his evil double generated by the Dark Place, trapped in a time loop in the Arizona desert. Alan manages to prevail in the finale, but Sam Lake has confirmed that the events never materialized in the real world — they were simply a failed escape attempt confined to the Dark Place. Mr. Scratch remains a live and active presence in the universe: Control references him as an entity still tormenting Alice Wake, and the concept of Night Springs returns in Alan Wake 2's DLC of the same name."
            }
          },
          { id: "seven-years", type: "LORE", typeEn: "LORE", year: "2012–2019",
            title: { it: "7 Anni di Assenza", en: "Seven Years of Absence" },
            synopsis: {
              it: "Tra il 2012 e il 2019 Alan Wake rimane intrappolato nel Luogo Oscuro, continuando a scrivere manoscritti nel tentativo di plasmare la realtà e trovare un'uscita. L'FBC nel frattempo classifica gli eventi di Bright Falls come AWE e ne studia i residui. Il Dr. Hartman viene trasferito all'Oldest House, dove rimarrà fino agli eventi di Control. Nel 2019 l'Hiss invade l'Oldest House.",
              en: "Between 2012 and 2019, Alan Wake remains trapped in the Dark Place, continuing to write manuscripts in an attempt to shape reality and find a way out. Meanwhile, the FBC classifies the Bright Falls events as an AWE and studies its residual effects. Dr. Hartman is transferred to the Oldest House, where he will remain until the events of Control. In 2019, the Hiss invades the Oldest House."
            }
          },
          { id: "control", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "2019", releaseYear: "2019", releaseYearEn: "2019",
            title: { it: "Control", en: "Control" },
            synopsis: {
              it: "Jesse Faden arriva all'Oldest House, la sede dell'FBC, cercando risposte sulla scomparsa di suo fratello Dylan durante un AWE nella loro città natale, Ordinary, Maine. Trovando il Direttore appena assassinato, Jesse viene scelta dall'Arma di Servizio, un oggetto di potere che designa i Direttori, e si ritrova improvvisamente a capo dell'agenzia nel peggior momento possibile: un'entità chiamata l'Hiss ha infettato la maggior parte degli agenti dell'Oldest House, trasformandoli in strumenti ostili. Jesse deve contenere la minaccia, liberare suo fratello Dylan, che l'Hiss aveva usato come tramite per entrare nell'edificio, e capire la natura dell'Oldest House stessa. Nel corso del gioco scopre che l'FBC conosce l'esistenza di Alan Wake e degli eventi di Bright Falls, classificati come AWE. Dylan, classificato come potenziale Direttore, è tenuto recluso nel Panopticon. Jesse chiude il portale dell'Hiss e sopravvive, diventando Direttore operativo dell'FBC.\n\nIl DLC Le Fondamenta (The Foundation) esplora le origini dell'Oldest House e introduce la Board, le entità soprannaturali che guidano l'FBC dall'esterno.\n\nL'espansione Control: AWE è il primo crossover ufficiale dell'RCU. Jesse Faden esplora il Settore Investigativo (l'Investigation Sector) dell'Oldest House, il reparto che studia i casi di AWE, e trova evidenze degli eventi di Bright Falls del 2010. Alan Wake appare direttamente attraverso messaggi sulla hotline, guidando Jesse e rivelando il suo stato attuale: ancora intrappolato nel Luogo Oscuro, sta cercando di far sì che Jesse lo liberi. Il DLC introduce il concetto che i Posseduti del Luogo Oscuro e l'Hiss condividono caratteristiche di corruzione simili, suggerendo connessioni tra le due minacce. Il finale mostra Jesse che riceve un segnale di un nuovo AWE imminente a Bright Falls: il setup diretto per Alan Wake 2.",
              en: "Jesse Faden arrives at the Oldest House — the FBC's headquarters — searching for answers about her brother Dylan's disappearance during an AWE in their hometown of Ordinary, Maine. Finding the Director freshly murdered, Jesse is chosen by the Service Weapon, an Object of Power that designates Directors, and finds herself suddenly in charge of the agency at the worst possible moment: an entity known as the Hiss has infected most of the Oldest House's agents, turning them into hostile instruments. Jesse must contain the threat, free her brother Dylan — whom the Hiss had used as a conduit to enter the building — and unravel the true nature of the Oldest House itself. Over the course of the game she discovers that the FBC is aware of Alan Wake's existence and the Bright Falls events, classified as an AWE. Dylan, designated a potential Director, is held in the Panopticon. Jesse closes the Hiss portal and survives, becoming the FBC's acting Director.\n\nThe Foundation DLC explores the origins of the Oldest House and introduces the Board — the supernatural entities that guide the FBC from outside.\n\nThe AWE expansion is the RCU's first official crossover. Jesse Faden explores the Oldest House's Investigation Sector — the department that handles AWE cases — and finds evidence of the 2010 Bright Falls events. Alan Wake appears directly through hotline messages, guiding Jesse and revealing his current situation: still trapped in the Dark Place, he is trying to ensure Jesse will free him. The DLC introduces the concept that the Dark Place's Taken and the Hiss share similar corruption traits, suggesting deeper connections between the two threats. The finale shows Jesse receiving a signal of an imminent new AWE in Bright Falls — the direct setup for Alan Wake 2."
            }
          },
          { id: "alan-wake-2", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "2023", releaseYear: "2023", releaseYearEn: "2023",
            title: { it: "Alan Wake 2", en: "Alan Wake 2" },
            synopsis: {
              it: "Tredici anni dopo la scomparsa di Alan Wake, una serie di omicidi rituali scuote Bright Falls. L'agente dell'FBI Saga Anderson arriva per indagare e scopre che le vittime recano simboli riconducibili al Cult of the Tree, adoratori della Presenza Oscura. Nel Luogo Oscuro, Alan sta finalmente completando il manoscritto Return, la storia che potrebbe liberarlo, ma deve fare i conti con Mr. Scratch, che cerca di prendere il suo posto nel mondo reale. Le due storie si specchiano e si intrecciano: ogni scelta di Alan nel Luogo Oscuro si riflette sulla realtà di Saga e viceversa. L'FBC è presente in modo significativo: Jesse Faden e Casper Darling appaiono nel gioco. Il finale vede Alan completare il manoscritto e liberarsi del Luogo Oscuro nella versione New Game Plus (Final Draft), mentre Alice lo aiuta dall'esterno attraverso una serie di video-diari usati come ancora alla realtà.\n\nIl DLC Night Springs mostra tre episodi, dell'omonimo show televisivo Night Springs, scritti da Alan Wake nel Luogo Oscuro come ulteriori tentativi di plasmare la realtà prima di completare Return. Gli episodi sono scenari alternativi con versioni fittizie di personaggi reali dell'RCU: la Number One Fan (basata su Rose Marigold), North Star (basata su Jesse Faden) e Time Breaker, con l'attore Shawn Ashmore che si interpreta nel metatestuale ruolo di se stesso, in un episodio che allude direttamente a Quantum Break senza nominarla esplicitamente. Gli eventi non si materializzano nel mondo reale ma arricchiscono la lore dell'universo.\n\nIl DLC The Lake House è un crossover diretto tra Alan Wake 2 e Control. L'agente FBC Kiran Estevez, introdotta nel gioco principale, è la protagonista giocabile per la prima volta. Deve investigare su una struttura di ricerca FBC situata sulla riva di Cauldron Lake che ha smesso di rispondere. I due ricercatori a capo della struttura, Jules e Diana Marmont, avevano condotto esperimenti sempre più illeciti sfruttando l'oscurità del Luogo Oscuro: Jules abusando di un artista per sfruttarne la creatività contaminata, Diana cercando di emulare lo stile narrativo di Alan Wake con macchine da scrivere automatizzate. Il risultato è un'esplosione paranormale che ha trasformato la Lake House in un luogo di orrore. Il DLC era stato anticipato nel finale del DLC AWE di Control, dove Jesse riceveva un segnale di un AWE imminente a Bright Falls.",
              en: "Thirteen years after Alan Wake's disappearance, a series of ritual murders shakes Bright Falls. FBI agent Saga Anderson arrives to investigate and discovers that the victims bear symbols tied to the Cult of the Tree — worshippers of the Dark Presence. In the Dark Place, Alan is finally completing the manuscript Return, the story that could free him, but must contend with Mr. Scratch, who is trying to take his place in the real world. The two stories mirror and intertwine with each other — every choice Alan makes in the Dark Place is reflected in Saga's reality and vice versa. The FBC has a significant presence: both Jesse Faden and Casper Darling appear in the game. The finale sees Alan complete the manuscript and escape the Dark Place in the New Game Plus version (Final Draft), while Alice helps him from outside through a series of video diaries used as anchors to reality.\n\nThe Night Springs DLC features three episodes of the eponymous television show Night Springs, written by Alan Wake in the Dark Place as further attempts to shape reality before completing Return. The episodes are alternative scenarios featuring fictionalized versions of real RCU characters — the Number One Fan (based on Rose Marigold), North Star (based on Jesse Faden), and Time Breaker, with actor Shawn Ashmore playing a metatextual version of himself in an episode that alludes directly to Quantum Break without naming it explicitly. The events do not materialize in the real world but enrich the universe's lore.\n\nThe Lake House DLC is a direct crossover between Alan Wake 2 and Control. FBC agent Kiran Estevez — introduced in the main game — becomes a playable protagonist for the first time. She must investigate an FBC research facility on the shores of Cauldron Lake that has gone dark. The two researchers heading the facility, Jules and Diana Marmont, had been conducting increasingly unethical experiments exploiting the Dark Place's darkness — Jules by abusing an artist to harness his corrupted creativity, Diana by attempting to emulate Alan Wake's narrative style through automated typewriters. The result is a paranormal explosion that has turned the Lake House into a place of horror. The DLC had been foreshadowed in the finale of Control's AWE DLC, where Jesse received a signal of an imminent AWE in Bright Falls."
            }
          },
          { id: "firebreak", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "2025", releaseYear: "2025", releaseYearEn: "2025",
            title: { it: "Firebreak", en: "Firebreak" },
            synopsis: {
              it: "Primo gioco multiplayer cooperativo di Remedy. Sei anni dopo gli eventi di Control, l'Oldest House è ancora in lockdown e l'Hiss non ha ceduto. I giocatori, in squadre da tre, interpretano agenti della Firebreak Unit, un corpo speciale dell'FBC specializzato nel contenimento di crisi paranormali all'interno dell'edificio. Jesse Faden è assente fisicamente ma viene menzionata come impegnata in questioni di maggiore portata. Il gioco introduce nuova lore sull'Oldest House e sullo stato dell'FBC negli anni successivi a Control, preparando il terreno narrativo per Control Resonant.",
              en: "Remedy's first cooperative multiplayer game. Six years after the events of Control, the Oldest House is still in lockdown and the Hiss has not relented. Players — in squads of three — take on the roles of Firebreak Unit agents, an FBC special response team specializing in the containment of paranormal crises within the building. Jesse Faden is physically absent but is mentioned as being occupied with matters of greater importance. The game introduces new lore about the Oldest House and the FBC's state in the years following Control, laying the narrative groundwork for Control Resonant."
            }
          }
        ]
      }
    ]
  },

  wolfenstein: {
    id: "wolfenstein",
    listTitle: { it: "Wolfenstein", en: "Wolfenstein" },
    eyebrow: { it: "Fascicolo", en: "Case File" },
    title: { it: "Wolfenstein", en: "Wolfenstein" },
    blurb: {
      it: "In una linea temporale dove il regime nazista ha trionfato e conquistato il mondo grazie a tecnologie proibite, un uomo solo continua a combattere una guerra che tutti gli altri credono già persa. Resistenza, sacrificio e una furia inarrestabile contro la tirannia definiscono ogni sua battaglia. Anche da sconfitto, non.",
      en: "In a timeline where the Nazi regime triumphed and conquered the world through forbidden technology, one man keeps fighting a war everyone else believes is already lost. Resistance, sacrifice, and an unstoppable fury against tyranny define every one of his battles. Even in defeat, he never stops fighting."
    },
    palette: ["#a3161a", "#355e3b", "#5c6773"],
    accentColor: "#355e3b",
    universes: [
      {
        id: "machinegames",
        name: { it: "Universo MachineGames", en: "MachineGames Universe" },
        span: { it: "1946 – 1980", en: "1946 – 1980" },
        entries: [
          { id: "old-blood", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "1946", releaseYear: "2015", releaseYearEn: "2015",
            title: { it: "Wolfenstein: The Old Blood", en: "Wolfenstein: The Old Blood" },
            synopsis: {
              it: "Blazkowicz e l'Agente Uno, Richard Wesley, si infiltrano nel Castello Wolfenstein per recuperare un dossier contenente la posizione del complesso segreto di Deathshead. Catturati dal carceriere Rudi Jäger, Wesley viene torturato e ucciso mentre Blazkowicz fugge. A Wulfburg, l'archeologa nazista Helga von Schabbs sta scavando la cripta del Re Ottone I: dagli scavi fuoriesce un gas che trasforma chiunque in non-morto. Helga libera involontariamente una creatura mostruosa che la uccide. Blazkowicz abbatte la creatura, recupera il dossier e viene salvato da Fergus Reid. Prequel di The New Order.",
              en: "Blazkowicz and Agent One Richard Wesley infiltrate Castle Wolfenstein to recover a dossier containing the location of Deathshead's secret compound. Captured by warden Rudi Jäger, Wesley is tortured and killed while Blazkowicz escapes. In Wulfburg, Nazi archaeologist Helga von Schabbs is excavating the crypt of King Otto I — from the dig site seeps a gas that transforms anyone it touches into the undead. Helga unwittingly releases a monstrous creature, which kills her. Blazkowicz defeats the creature, recovers the dossier, and is rescued by Fergus Reid. Prequel to The New Order."
            }
          },
          { id: "new-order", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "1946–1961", releaseYear: "2014", releaseYearEn: "2014",
            title: { it: "Wolfenstein: The New Order", en: "Wolfenstein: The New Order" },
            synopsis: {
              it: "Nel 1946 Blazkowicz partecipa all'assalto al complesso di Deathshead, che lo costringe a scegliere quale compagno sacrificare prima di abbandonarlo a morire. Blazkowicz fugge ma viene colpito da una scheggia alla testa e cade in stato vegetativo per 14 anni in un manicomio polacco. Al risveglio nel 1960 scopre che i nazisti hanno vinto la guerra grazie alle tecnologie del Da'at Yichud, un'antica società segreta. Si unisce al Kreisau Circle e lancia una serie di operazioni culminanti nell'assalto finale al complesso di Deathshead nel 1961: Blazkowicz uccide il generale, ma viene gravemente ferito dalla granata del morente. Ordina il bombardamento nucleare del compound e sopravvive a malapena.",
              en: "In 1946, Blazkowicz takes part in the assault on Deathshead's compound, where the general forces him to choose which companion to sacrifice before leaving him to die. Blazkowicz escapes but is struck by shrapnel to the head and falls into a vegetative state for 14 years in a Polish asylum. Upon waking in 1960, he discovers that the Nazis won the war thanks to the technology of the Da'at Yichud, an ancient secret society. He joins the Kreisau Circle and launches a series of operations culminating in a final assault on Deathshead's compound in 1961: Blazkowicz kills the general, but is gravely wounded by the dying man's grenade. He orders a nuclear strike on the compound and barely survives."
            }
          },
          { id: "new-colossus", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "1961", releaseYear: "2017", releaseYearEn: "2017",
            title: { it: "Wolfenstein II: The New Colossus", en: "Wolfenstein II: The New Colossus" },
            synopsis: {
              it: "Cinque mesi dopo The New Order, Blazkowicz si risveglia gravemente menomato e incapace di camminare a bordo dell'Eva's Hammer, il sottomarino del Kreisau Circle. La nuova antagonista è Frau Engel, comandante nazista che attacca il sottomarino, cattura e decapita Caroline Becker davanti a Blazkowicz. Recuperata la mobilità grazie all'armatura Da'at Yichud di Caroline, Blazkowicz raduna le cellule della resistenza americana per innescare una Seconda Rivoluzione. Viene catturato e decapitato in diretta TV come propaganda nazista, ma il Kreisau Circle salva la sua testa e la innesta su un corpo di supersoldato. Nel finale Blazkowicz uccide Engel in diretta televisiva: la sua morte scatena la rivoluzione americana.",
              en: "Five months after The New Order, Blazkowicz wakes up severely disabled and unable to walk aboard the Eva's Hammer, the Kreisau Circle's submarine. The new antagonist is Frau Engel, a Nazi commander who attacks the submarine, captures and decapitates Caroline Becker in front of Blazkowicz. After regaining mobility thanks to Caroline's Da'at Yichud armour, Blazkowicz rallies American resistance cells to ignite a Second Revolution. He is captured and beheaded on live television as Nazi propaganda, but the Kreisau Circle saves his head and grafts it onto a supersoldier's body. In the finale, Blazkowicz kills Engel on live television — her death sparks the American revolution."
            }
          },
          { id: "cyberpilot", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "1980", releaseYear: "2019", releaseYearEn: "2019",
            title: { it: "Wolfenstein: Cyberpilot", en: "Wolfenstein: Cyberpilot" },
            synopsis: {
              it: "Vent'anni dopo The New Colossus e una settimana prima degli eventi di Youngblood, un ex androide da combattimento creato dai nazisti viene riprogrammato dalla Resistenza francese per servire la loro causa a Parigi, ancora sotto occupazione nazista. Guidato via radio da una combattente della Resistenza dall'accento francese, il Cyberpilot opera da un bunker sotterraneo, dove ripara e prepara di volta in volta le macchine nemiche che è chiamato a sabotare da remoto tramite hacking: il Panzerhund, un grosso cane robotico rivestito di fiamme, la corazzata Zitadelle, e un piccolo drone usato per una missione furtiva. Attraverso quattro missioni, il Cyberpilot si infiltra nell'infrastruttura nazista della città, prende il controllo di questi mezzi corazzati e li ritorce contro i propri creatori, indebolendo progressivamente la presa del regime su Parigi nei giorni immediatamente precedenti l'arrivo delle gemelle Blazkowicz.",
              en: "Twenty years after The New Colossus and one week before the events of Youngblood, a former Nazi-built combat android is reprogrammed by the French Resistance to serve their cause in still-occupied Paris. Guided by radio from a French-accented Resistance fighter, the Cyberpilot operates out of an underground bunker, where they repair and prepare the enemy machines they are called upon to sabotage remotely through hacking: the Panzerhund, a hulking flame-spewing robotic dog, the armoured Zitadelle, and a small drone used for a stealth mission. Across four missions, the Cyberpilot infiltrates the city's Nazi infrastructure, seizes control of these armoured units, and turns them against their own creators, gradually weakening the regime's grip on Paris in the days immediately preceding the Blazkowicz twins' arrival."
            }
          },
          { id: "youngblood", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "1980", releaseYear: "2019", releaseYearEn: "2019",
            title: { it: "Wolfenstein: Youngblood", en: "Wolfenstein: Youngblood" },
            synopsis: {
              it: "Diciannove anni dopo The New Colossus, B.J. Blazkowicz, ormai sposato con Anya Oliwa, ha cresciuto insieme a lei due figlie gemelle, Jess e Soph, in un'America liberata. Quando B.J. scompare senza lasciare traccia, le gemelle trovano in soffitta una mappa che punta a Parigi, ancora sotto occupazione nazista, e vi si dirigono per cercarlo, guidate dall'amica di famiglia Abby. In città incontrano Juju, presunta leader della Resistenza francese, e il suo assistente muto Jacques, che confermano di aver visto B.J.: stava cercando di accedere a un'installazione segreta chiamata Lab X, protetta da tre torri di sicurezza note come i Fratelli. Le gemelle violano i computer delle torri per trovare la strada verso Lab X, ma scoprono così che Juju e Jacques sono in realtà agenti nazisti sotto copertura, Julie e il generale Lothar Brandt, infiltrati nella Resistenza per fondare un Quarto Reich e organizzare un colpo di stato a Berlino. Nello scontro che segue Abby viene accecata a un occhio, mentre Lothar e Julie riescono a fuggire.\n\nJess e Soph raggiungono infine Lab X e trovano B.J., che rivela loro un segreto rimasto sepolto per vent'anni: uccidendo Hitler aveva accidentalmente attivato un dispositivo apocalittico destinato a rendere la Terra inabitabile, e nel tentativo di disinnescarlo aveva scoperto l'esistenza di dimensioni alternative, incluse una in cui i nazisti avevano perso la guerra. B.J. potenzia le armature delle figlie con tecnologia Da'at Yichud e le manda a fermare Lothar prima che il colpo di stato abbia inizio. Le gemelle lo raggiungono insieme a Julie e li uccidono entrambi. Nel finale, mentre Anya e Grace Walker arrivano in città rendendosi conto della minaccia rappresentata dal Quarto Reich, Jess, Soph e Abby scelgono di restare a Parigi per difenderla dal contrattacco del Terzo Reich ormai imminente.",
              en: "Nineteen years after The New Colossus, B.J. Blazkowicz — now married to Anya Oliwa — has raised twin daughters, Jess and Soph, together with her in a liberated America. When B.J. vanishes without a trace, the twins find a map in the attic pointing to still Nazi-occupied Paris and set out to find him, guided by family friend Abby. In the city they meet Juju, the apparent leader of the French Resistance, and her mute assistant Jacques, who confirm having seen B.J.: he was trying to gain access to a secret installation called Lab X, protected by three security towers known as the Brothers. The twins hack the towers' computers to find the way to Lab X, but in doing so discover that Juju and Jacques are in fact undercover Nazi agents, Julie and General Lothar Brandt, who had infiltrated the Resistance to found a Fourth Reich and stage a coup in Berlin. In the confrontation that follows, Abby is blinded in one eye, while Lothar and Julie manage to escape.\n\nJess and Soph finally reach Lab X and find B.J., who reveals a secret buried for twenty years: killing Hitler had accidentally triggered a doomsday device set to render the Earth uninhabitable, and in his attempts to disarm it he had discovered the existence of alternate dimensions, including one in which the Nazis had lost the war. B.J. upgrades his daughters' powered armour with Da'at Yichud technology and sends them to stop Lothar before the coup can begin. The twins catch up with him and Julie and kill them both. In the finale, as Anya and Grace Walker arrive in the city and grasp the scale of the threat posed by the Fourth Reich, Jess, Soph, and Abby choose to remain in Paris to defend it against the Third Reich's imminent counterattack."
            }
          },
        ]
      }
    ]
  },

  yakuza: {
    id: "yakuza",
    listTitle: { it: "Yakuza: Like a Dragon", en: "Yakuza: Like a Dragon" },
    eyebrow: { it: "Fascicolo", en: "Case File" },
    title: { it: "Yakuza: Like a Dragon", en: "Yakuza: Like a Dragon" },
    blurb: {
      it: "Nei quartieri più oscuri del sottobosco criminale giapponese, uomini legati da un codice d'onore sempre più fragile si muovono tra lealtà, tradimento e la ricerca di un posto nel mondo, dentro o fuori dalla yakuza. Ogni ascesa nasconde una caduta possibile, ogni legame un potenziale tradimento. L'onore, qui, è tanto.",
      en: "In the darkest districts of Japan's criminal underworld, men bound by an increasingly fragile code of honor navigate loyalty, betrayal, and the search for a place in the world, whether inside or outside the yakuza. Every rise hides a possible fall, every bond a potential betrayal. Honor, here, is as sacred as it is rare."
    },
    palette: ["#1a1a2e", "#c9a227", "#8b1a1a"],
    accentColor: "#c9a227",
    tracks: [],
    avatar: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Yakuza%20Avatar.jpg",
    banner: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Yakuza%20Banner.jpg",
    watermark: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Yakuza%20Filigrana.jpg",
    watermarkOpacity: 0.18,
    universes: [
      {
        id: "main",
        name: { it: "Continuità Principale", en: "Main Continuity" },
        span: { it: "1988 – 2024", en: "1988 – 2024" },
        entries: [
          { id: "yakuza-0", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "1988", releaseYear: "2015", releaseYearEn: "2015",
            title: { it: "Yakuza 0", en: "Yakuza 0" },
            synopsis: {
              it: "Prequel ambientato diciassette anni prima del primo gioco. Il giovane Kiryu viene incastrato per un omicidio che non ha commesso, mentre Goro Majima, futuro alleato/rivale della saga, gestisce un locale a Osaka per conto del proprio clan mentre nasconde un passato oscuro. Le due storie, inizialmente separate, convergono attorno a un terreno edificabile conteso che diventerà centrale per l'intera mitologia della serie.",
              en: "A prequel set seventeen years before the first game. Young Kiryu is framed for a murder he didn't commit, while Goro Majima, the saga's future ally/rival, runs a club in Osaka on behalf of his clan while hiding a dark past. The two initially separate stories converge around a disputed plot of land that becomes central to the entire series mythology."
            }
          },
          { id: "yakuza-kiwami", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "2005", releaseYear: "2016", releaseYearEn: "2016",
            title: { it: "Yakuza Kiwami", en: "Yakuza Kiwami" },
            synopsis: {
              it: "Remake del capitolo originale. Kiryu esce di prigione dopo dieci anni scontati per un omicidio in realtà commesso dal proprio fratello di sangue Akira Nishikiyama, per proteggerlo. Scopre che sono scomparsi sia i dieci miliardi di yen del proprio clan sia Yumi, la donna che ama, dando il via a una spirale di tradimenti dentro la famiglia Tojo.",
              en: "A remake of the original chapter. Kiryu is released from prison after ten years served for a murder actually committed by his blood brother Akira Nishikiyama, in order to protect him. He discovers that both his clan's ten billion yen and Yumi, the woman he loves, have vanished, setting off a spiral of betrayals within the Tojo family."
            }
          },
          { id: "yakuza-kiwami-2", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "2006", releaseYear: "2017", releaseYearEn: "2017",
            title: { it: "Yakuza Kiwami 2", en: "Yakuza Kiwami 2" },
            synopsis: {
              it: "Remake del secondo capitolo. Ritiratosi dalla vita criminale, Kiryu viene richiamato in azione quando il capo del clan rivale Omi viene assassinato, scatenando una guerra tra famiglie che minaccia di coinvolgere anche la giovane Haruka, sotto la sua tutela dal finale del primo gioco.",
              en: "A remake of the second chapter. Having retired from criminal life, Kiryu is pulled back into action when the head of the rival Omi clan is assassinated, sparking a war between families that threatens to drag in young Haruka, under his care since the end of the first game."
            }
          },
          { id: "yakuza-3", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "2007 – 2009", releaseYear: "2009", releaseYearEn: "2009",
            title: { it: "Yakuza 3", en: "Yakuza 3" },
            synopsis: {
              it: "Kiryu gestisce un orfanotrofio a Okinawa insieme ad Haruka, lontano dalla vita del crimine, finché lo sviluppo edilizio della zona non lo riporta a contatto con la famiglia Tojo e con vecchi nemici, costringendolo a difendere ciò che ha costruito.",
              en: "Kiryu runs an orphanage in Okinawa together with Haruka, far from a life of crime, until real estate development in the area brings him back into contact with the Tojo family and old enemies, forcing him to defend what he has built."
            }
          },
          { id: "yakuza-4", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "2010", releaseYear: "2010", releaseYearEn: "2010",
            title: { it: "Yakuza 4", en: "Yakuza 4" },
            synopsis: {
              it: "Primo capitolo a più protagonisti: uno strozzino, un detective corrotto, un ex membro dei Tojo appena uscito di prigione e Kiryu stesso vedono le proprie storie intrecciarsi attorno a una misteriosa somma di denaro scomparsa e a un cadavere che continua a risorgere, letteralmente, nel corso della trama.",
              en: "The first chapter with multiple protagonists: a loan shark, a corrupt detective, a former Tojo member fresh out of prison, and Kiryu himself see their stories intertwine around a mysterious sum of missing money and a corpse that keeps literally coming back to life over the course of the plot."
            }
          },
          { id: "yakuza-5", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "2012", releaseYear: "2012", releaseYearEn: "2012",
            title: { it: "Yakuza 5", en: "Yakuza 5" },
            synopsis: {
              it: "Cinque protagonisti, tra cui Kiryu (ora tassista sotto falso nome) e la giovane Haruka (ormai un'aspirante idol), affrontano storie separate in cinque città diverse del Giappone, che convergono infine in una cospirazione ai vertici del clan Tojo capace di minacciare l'intera organizzazione.",
              en: "Five protagonists, including Kiryu (now a taxi driver under a false name) and a now-teenage Haruka (an aspiring idol), navigate separate stories across five different Japanese cities, which ultimately converge into a conspiracy at the top of the Tojo clan capable of threatening the entire organisation."
            }
          },
          { id: "yakuza-6", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "2016", releaseYear: "2016", releaseYearEn: "2016",
            title: { it: "Yakuza 6: The Song of Life", en: "Yakuza 6: The Song of Life" },
            synopsis: {
              it: "Uscito di prigione dopo essersi assunto una colpa non sua per proteggere ancora una volta Haruka, Kiryu la trova scomparsa e scopre l'esistenza di un nipote mai conosciuto, in coma dopo un incidente. La ricerca della verità lo riporta a Onomichi, città natale di Haruka mai esplorata prima, per quello che viene presentato come il capitolo conclusivo della sua storia personale.",
              en: "Released from prison after taking the fall for a crime not his own to protect Haruka once again, Kiryu finds her missing and discovers the existence of a grandson he never knew, in a coma after an accident. The search for the truth takes him to Onomichi, Haruka's previously unexplored hometown, in what is presented as the concluding chapter of his personal story."
            }
          },
          { id: "like-a-dragon", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "2019", releaseYear: "2020", releaseYearEn: "2020",
            title: { it: "Yakuza: Like a Dragon", en: "Yakuza: Like a Dragon" },
            synopsis: {
              it: "Passaggio di testimone a un nuovo protagonista, Ichiban Kasuga, che si assume la colpa di un omicidio per lealtà verso il proprio clan e ne esce diciotto anni dopo per scoprire di essere stato tradito e abbandonato. Nella nuova città di Yokohama/Isezaki Ijincho, Ichiban ricostruisce sé stesso affrontando una cospirazione che coinvolge il proprio ex clan, in un cambio radicale di formula: combattimento a turni invece che in tempo reale.",
              en: "A handover to a new protagonist, Ichiban Kasuga, who takes the blame for a murder out of loyalty to his clan and emerges eighteen years later to discover he was betrayed and abandoned. In the new city of Yokohama/Isezaki Ijincho, Ichiban rebuilds himself while confronting a conspiracy involving his former clan, in a radical formula shift: turn-based combat instead of real-time."
            }
          },
          { id: "infinite-wealth", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "2023 (con flashback al 2000)", releaseYear: "2024", releaseYearEn: "2024",
            title: { it: "Like a Dragon: Infinite Wealth", en: "Like a Dragon: Infinite Wealth" },
            synopsis: {
              it: "Ichiban e Kiryu, ormai malato terminale e sotto falsa identità, uniscono le forze per un viaggio che li porta dal Giappone alle Hawaii, sulle tracce della madre di Ichiban mai conosciuta. Prima vera collaborazione diretta tra i due protagonisti della saga, con capitoli flashback ambientati nel 2000 che approfondiscono il passato di Kiryu.",
              en: "Ichiban and Kiryu, now terminally ill and living under a false identity, join forces for a journey that takes them from Japan to Hawaii, on the trail of Ichiban's mother, whom he never knew. The first true direct collaboration between the saga's two protagonists, with flashback chapters set in 2000 that deepen Kiryu's past."
            }
          }
        ]
      }
    ]
  }

};

const GAME_ORDER = [
  "ace-combat", "aitd", "assassins-creed", "castlevania", "dmc", "diablo", "doom", "dragon-quest", "dying-light",
  "fallout", "final-fantasy", "fire-emblem", "gears-of-war", "god-of-war", "gta", "halo",
  "kingdom-hearts", "legacy-of-kain", "lost-planet", "mass-effect", "metal-gear-solid", "mortal-kombat",
  "pokemon", "prince-of-persia", "resident-evil", "silent-hill",
  "elder-scrolls", "legend-of-zelda", "tomb-raider",
  "remedy-universe", "warcraft", "wolfenstein", "yakuza"
];

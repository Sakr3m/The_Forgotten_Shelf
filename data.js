// ============================================================
// L'ARCHIVIO — dati dei fascicoli (franchise) e delle linee temporali
// ============================================================

const GAMES = {

  aitd: {
    id: "aitd",
    listTitle: { it: "Alone in the Dark", en: "Alone in the Dark" },
    eyebrow: { it: "Fascicolo", en: "Case File" },
    title: { it: "Alone in the Dark", en: "Alone in the Dark" },
    avatar: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Alone%20in%20the%20Dark%20Avatar.jpg",
    banner: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Alone%20in%20the%20Dark%20Banner.jpg",
    watermark: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Alone%20in%20the%20Dark%20Filigrana.jpg",
    watermarkOpacity: 0.2,
    palette: ["#c9a24b", "#4a9d6e", "#6b3fa0"],
    accentColor: "#6b3fa0",
    tracks: [
      { src: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Alone%20in%20the%20Dark%20In%20the%20Eye%20of%20the%20Storm.mp3", title: "In the Eye of the Storm", game: "Alone in the Dark (1992)" },
      { src: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Alone%20in%20the%20Dark%20The%20Fa%C3%A7ade.mp3", title: "The Façade", game: "Alone in the Dark (2008)" },
      { src: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Alone%20in%20the%20Dark%20The%20Light%20Carrier%20Test.mp3", title: "The Light Carrier Test", game: "Alone in the Dark (2008)" }
    ],
    blurb: {
      it: "Una serie survival horror che intreccia case infestate, occultismo e segreti di famiglia sepolti nel tempo, tra i primi titoli a portare gli orrori cosmici di ispirazione lovecraftiana nei videogiochi. Ambientata perlopiù in ville isolate e manieri decadenti, dove la luce è merce rara. Considerata la capostipite del genere horror videoludico.",
      en: "A survival horror series weaving together haunted houses, occultism, and family secrets buried in time, among the first titles to bring Lovecraftian cosmic horror into video games. Set within isolated mansions and decaying estates, where light itself is scarce. Regarded as the originator of the genre."
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
            title: { it: "Alone in the Dark", en: "Alone in the Dark" },
            image: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Alone%20in%20the%20Dark.jpg",
            synopsis: {
              it: "Jeremy Hartwood, pittore e proprietario di Villa Derceto in Louisiana, si è impiccato nella mansarda. Le circostanze sono sospette. Il giocatore sceglie tra due protagonisti: Edward Carnby, investigatore privato ingaggiato da un antiquario per recuperare un pianoforte nella soffitta, o Emily Hartwood, nipote di Jeremy, convinta che il pianoforte nasconda una lettera con la spiegazione del suicidio. Entrambi si ritrovano intrappolati nella villa quando le porte si chiudono da sole. Esplorando la casa e le caverne sottostanti, Carnby/Emily scopre che Derceto fu costruita nel 1818 dal pirata occulto Ezechiel Pregzt, travestito sotto l'identità di Elijah Pickford. Pregzt aveva accumulato ricchezze e immortalità attraverso riti oscuri nelle caverne sotto la villa. Durante la Guerra di Secessione Americana, dopo un tentativo di avvelenare una pattuglia di soldati unionisti, Pregzt fu sparato dal loro capitano e Derceto venne data alle fiamme, ma il suo spirito sopravvisse, intrappolato nel cadavere sepolto all'interno di un albero nelle caverne sottostanti. Jeremy Hartwood si era suicidato deliberatamente per evitare di essere posseduto da Pregzt come nuovo ospite. Il protagonista trova un talismano recante il Segno degli Anziani, scende nelle caverne, lo piazza sulla tomba di Pregzt per spezzarne il rituale di reincarnazione e lancia una lampada accesa sull'albero: Pregzt brucia e la villa è liberata.",
              en: "Jeremy Hartwood, a painter and owner of Derceto Manor in Louisiana, has hanged himself in the attic. The circumstances are suspicious. The player chooses between two protagonists: Edward Carnby, a private investigator hired by an antique dealer to retrieve a piano from the loft, or Emily Hartwood, Jeremy's niece, convinced that the piano hides a letter explaining her uncle's suicide. Both end up trapped inside the manor when the doors slam shut behind them. Exploring the house and the caverns beneath it, Carnby/Emily discovers that Derceto was built in 1818 by the occultist pirate Ezechiel Pregzt, operating under the false identity of Elijah Pickford. Pregzt had amassed wealth and immortality through dark rituals performed in the caverns below the manor. During the American Civil War, after attempting to poison a Union patrol, Pregzt was shot by their captain and Derceto was set ablaze, but his spirit survived, trapped within a corpse buried inside a tree in the caverns below. Jeremy Hartwood took his own life deliberately to avoid being possessed by Pregzt as a new host. The protagonist finds a talisman bearing the Elder Sign, descends into the caverns, places it on Pregzt's tomb to break his reincarnation ritual, and hurls a lit lantern at the tree: Pregzt burns, and the manor is freed."
            }
          },
          {
            id: "jack-in-the-dark",
            type: "VIDEOGIOCO",
            typeEn: "VIDEOGAME",
            year: "Halloween 1924",
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
            title: { it: "Alone in the Dark 2", en: "Alone in the Dark 2" },
            image: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Alone%20in%20the%20Dark%202.jpg",
            synopsis: {
              it: "Tre mesi dopo Derceto, Carnby è diventato noto alla stampa come \"Supernatural Private Eye\". Il suo mentore Ted Stryker aveva tentato di infiltrarsi in Hell's Kitchen, la villa del famigerato gangster Occhio Bendato Jack, per salvare Grace Saunders, una bambina rapita la vigilia di Natale. Viene trovato assassinato all'interno. Carnby riprende l'indagine. Scopre che Jack e la sua banda sono pirati del XV secolo resi immortali dalla strega voodoo Elisabeth Jarret, che Jack aveva liberato dalla sua prigionia a bordo della nave fantasma Flying Dutchman. In cambio della libertà, Jarret aveva conferito l'immortalità all'equipaggio, ma il patto impone un prezzo: ogni cento anni occorre rapire una bambina innocente su cui riversare il peso della vecchiaia tramite un rituale voodoo, preservando così la giovinezza dei pirati. Il gioco alterna Carnby, intrappolato in una gabbia dopo essere caduto in un tranello di Jack, a sezioni giocabili con Grace, che si muove furtiva nella villa e sulla nave per liberarlo. Grace usa il Loa Staff per far ritorcere l'incantesimo di Jarret su se stessa: la strega viene consumata dalla propria magia. Carnby raggiunge il ponte della nave e sconfigge Jack con la spada maledetta del capitano Nichols, l'unica arma capace di ucciderlo. Con l'ultimo respiro Jack spara i cannoni della nave, facendo crollare grotte e villa nell'oceano: Carnby e Grace fuggono a bordo di una scialuppa.",
              en: "Three months after Derceto, Carnby has become known to the press as the \"Supernatural Private Eye\". His mentor Ted Stryker had attempted to infiltrate Hell's Kitchen, the mansion of the infamous gangster One-Eyed Jack, to rescue Grace Saunders, a young girl kidnapped on Christmas Eve. He is found murdered inside. Carnby takes up the investigation. He discovers that Jack and his gang are 15th-century pirates made immortal by the voodoo witch Elisabeth Jarret, whom Jack had freed from her imprisonment aboard the ghost ship Flying Dutchman. In exchange for her freedom, Jarret granted the crew immortality, but the pact comes at a price: every hundred years, an innocent young girl must be kidnapped and used in a voodoo ritual to transfer the weight of old age onto her body, keeping the pirates young. The game alternates between Carnby, trapped in a cage after falling into Jack's trap, and playable sections as Grace, who sneaks through the mansion and onto the ship to free him. Grace uses the Loa Staff to turn Jarret's spell back on herself: the witch is consumed by her own magic. Carnby reaches the ship's deck and defeats Jack with the cursed sword of Captain Nichols, the only weapon capable of killing him. With his dying breath, Jack fires the ship's cannons, bringing the caves and the mansion crashing into the ocean: Carnby and Grace escape aboard a rowboat."
            }
          },
          {
            id: "aitd-3",
            type: "VIDEOGIOCO",
            typeEn: "VIDEOGAME",
            year: "1925",
            title: { it: "Alone in the Dark 3", en: "Alone in the Dark 3" },
            image: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Alone%20in%20the%20Dark%203.jpg",
            synopsis: {
              it: "Un anno dopo Hell's Kitchen, Emily Hartwood, che dopo l'avventura di Derceto ha intrapreso una carriera a Hollywood, è al lavoro come attrice in un western girato nella città fantasma di Slaughter Gulch, nel deserto del Mojave. L'intera troupe scompare misteriosamente. Carnby viene chiamato a indagare. Slaughter Gulch fu fondata da Jed Stone, un fuorilegge spietato che costruì la città su terre sacre Navajo e la governò con un esercito privato di assassini. Stone e i suoi uomini furono uccisi in un'esplosione di metano durante una rivolta dei minatori nel 1865, ma la città restò abbandonata sopra un filone di minerale radioattivo nelle miniere sottostanti. Stone sarebbe il figlio, mai riconosciuto, di Elisabeth Jarret ed Ezechiel Pregzt, i villain dei due episodi precedenti, sebbene la cosa non sia confermata con certezza. Da fantasma, Stone sta portando a compimento il piano interrotto dalla morte: usare il minerale radioattivo per far muovere la faglia di San Andreas e scatenare l'apocalisse sulla costa ovest. Tiene Emily prigioniera come merce di scambio e attira Carnby con una finta trattativa, per poi tradirlo e ucciderlo. Carnby si risveglia però mentre viene sepolto vivo dallo sceriffo fantasma Dawson, riemerge dalla tomba e riprende l'indagine. Grazie ai poteri dello sciamano Navajo che lo guida nell'ombra, ottiene la capacità di trasformarsi temporaneamente in puma per muoversi nella città inosservato. Sconfigge Stone definitivamente e fugge con Emily a bordo di un locomotore abbandonato.",
              en: "One year after Hell's Kitchen, Emily Hartwood, who, following the Derceto incident, has embarked on a Hollywood career, is working as an actress on a Western being filmed in the ghost town of Slaughter Gulch, in the Mojave Desert. The entire crew vanishes without a trace. Carnby is called in to investigate. Slaughter Gulch was founded by Jed Stone, a ruthless outlaw who built the town on sacred Navajo land and ruled it with a private army of killers. Stone and his men were killed in a methane explosion during a miners' revolt in 1865, but the settlement was abandoned over a vein of radioactive ore running through the mines beneath it. Stone is rumoured to be the unacknowledged son of Elisabeth Jarret and Ezechiel Pregzt, the villains of the two previous episodes, though this has never been confirmed with certainty. As a ghost, he is now carrying out the plan cut short by his death: using the radioactive ore to shift the San Andreas Fault and trigger an apocalyptic event along the West Coast. He holds Emily prisoner as a bargaining chip and lures Carnby in with a fake negotiation, only to betray and kill him. Carnby awakens, however, as he is being buried alive by the ghost of former sheriff Dawson, claws his way out of the grave, and resumes the investigation. Guided by a Navajo shaman working in the shadows, he gains the temporary ability to transform into a mountain lion and move through the town undetected. He defeats Stone once and for all and escapes with Emily aboard an abandoned locomotive."
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
            title: { it: "The New Nightmare", en: "The New Nightmare" },
            image: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Alone%20in%20the%20Dark_The%20New%20Nightmare.jpg",
            synopsis: {
              it: "Il miglior amico di Carnby, Charles Fiske, è stato trovato morto nei pressi di Shadow Island, un'isola al largo delle coste del Massachusetts di proprietà della famiglia Morton. Carnby riprende l'indagine per conto del Bureau 713, un'agenzia governativa dedita ai fenomeni paranormali, con l'obiettivo di recuperare tre tavolette della civiltà Abkani e scoprire chi ha ucciso Fiske. Lo accompagna Aline Cedrac, giovane professoressa di etnologia che crede che uno dei proprietari dell'isola, il Professor Obed Morton, sia suo padre biologico. Il loro idrovolante viene attaccato nei pressi dell'isola e i due si separano con il paracadute. Sull'isola scoprono che i fratelli Morton hanno storie molto diverse: Alan, lo scienziato, è ossessionato da un portale nascosto sotto l'isola che conduce al World of Darkness, un regno sotterraneo abitato da creature di silicio che si nutrono della luce. Obed, il più debole dei due, ha rivelato i segreti di famiglia a un agente del Bureau 713, venendo poi punito da Alan che lo ha trasformato in mostro. Alan apre il portale e viene trascinato nel World of Darkness, dove viene sconfitto. Joseph Edenshaw, ultimo stregone della tribù Abkani custode dell'isola, esegue infine un rituale che distrugge l'isola intera, sigillando il varco per sempre.",
              en: "Carnby's best friend Charles Fiske has been found dead off the coast of Shadow Island, a remote island off the coast of Massachusetts belonging to the Morton family. Carnby takes up the investigation on behalf of Bureau 713, a government agency dealing in paranormal phenomena, with the aim of recovering three tablets belonging to the Abkani civilisation and finding out who killed Fiske. Accompanying him is Aline Cedrac, a young ethnology professor who believes one of the island's owners, Professor Obed Morton, to be her biological father. Their seaplane is attacked near the island and the two are separated by parachute. On the island, they discover that the Morton brothers could not be more different: Alan, the scientist, is obsessed with a portal hidden beneath the island leading to the World of Darkness, an underground realm inhabited by silicon-based creatures that feed on light. Obed, the weaker of the two, betrayed the family's secrets to a Bureau 713 agent and was punished by Alan, who transformed him into a monster. Alan opens the portal and is dragged into the World of Darkness, where he is defeated. Joseph Edenshaw, the last sorcerer of the Abkani tribe and guardian of the island, then performs a ritual that destroys the island entirely, sealing the gateway forever."
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
      it: "Una saga action-gotica che racconta la guerra secolare tra il clan Belmont e Dracula, tra castelli maledetti e la leggendaria frusta Vampire Killer, di generazione in generazione. Il conte rinasce ogni cento anni, e un nuovo discendente è sempre chiamato a fermarlo.",
      en: "A gothic action saga chronicling the centuries-old war between the Belmont clan and Dracula, through cursed castles and the legendary Vampire Killer whip, across generations. The count is reborn every hundred years, and a new descendant is always called to stop him."
    },
    palette: ["#a11d33", "#4b2e6b", "#d4af37"],
    accentColor: "#a11d33",
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
        span: { it: "1024 – 2036", en: "1024 – 2036" },
        entries: [
          { id: "lament-of-innocence", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "1094",
            title: { it: "Lament of Innocence", en: "Lament of Innocence" },
            image: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Castlevania%20Lament%20of%20Innocence.jpg",
            synopsis: {
              it: "Leon Belmont, barone e cavaliere medievale, rinuncia al suo titolo e si infiltra nel castello del vampiro Walter Bernhard nella Foresta della Notte Eterna per salvare la sua promessa sposa Sara Trantoul, rapita su indicazione dell'amico Mathias Cronqvist. L'alchimista Rinaldo Gandolfi gli affida la Whip of Alchemy. Leon scopre che Sara è già stata vampirizzata da Walter ed è costretto a ucciderla per salvarne l'anima: il suo sacrificio trasforma la frusta nella leggendaria Vampire Killer. Dopo aver sconfitto Walter, la Morte gli ruba l'anima per consegnarla a Mathias, che rivela di aver orchestrato tutto per diventare vampiro immortale e vendicarsi di Dio per la morte della moglie Elisabetha. Leon rifiuta l'immortalità offerta da Mathias, sconfigge la Morte e giura che il clan Belmont caccerà Mathias, d'ora in poi noto come Dracula, per sempre.",
              en: "Leon Belmont, a medieval baron and knight, renounces his title and infiltrates the castle of the vampire Walter Bernhard in the Eternal Night Forest to rescue his betrothed Sara Trantoul, who was kidnapped at the urging of his friend Mathias Cronqvist. The alchemist Rinaldo Gandolfi entrusts him with the Whip of Alchemy. Leon discovers that Sara has already been vampirised by Walter and is forced to kill her to save her soul, her sacrifice transforms the whip into the legendary Vampire Killer. After defeating Walter, Death steals his soul and delivers it to Mathias, who reveals he orchestrated everything to become an immortal vampire and take revenge on God for the death of his wife Elisabetha. Leon refuses the immortality Mathias offers him, defeats Death, and swears that the Belmont clan will hunt Mathias, henceforth known as Dracula, forever."
            }
          },
          { id: "draculas-curse", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "1476",
            title: { it: "Dracula's Curse", en: "Dracula's Curse" },
            image: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Castlevania%20III%20Dracula%27s%20Curse.jpg",
            synopsis: {
              it: "Dracula scatena le sue armate sulla Valacchia decimando persino gli eserciti della Chiesa. I Belmont, esiliati dalla popolazione per i loro poteri soprannaturali, vengono richiamati dalla Chiesa stessa come ultima risorsa. Trevor Belmont accetta l'incarico nonostante il clan sia stato esiliato dalla stessa popolazione che ora invoca il suo aiuto, e percorre la Valacchia in rovina per raggiungere il castello. Lungo la strada libera Grant Danasty, un pirata che Dracula aveva trasformato in mostro dopo che aveva tentato di ribellarsi, e Sypha Belnades, una strega tramutata in pietra da un incantesimo. Si allea inoltre con Alucard, figlio di Dracula che ripudia il padre. I quattro assaltano il castello e Trevor sconfigge Dracula. Alucard, incapace di elaborare il dolore di aver combattuto suo padre, si auto-induce in un sonno profondo. Trevor e Sypha si sposano una volta ristabilita la pace.",
              en: "Dracula unleashes his armies upon Wallachia, decimating even the Church's own soldiers. The Belmont clan, exiled by the people for their supernatural powers, are called upon by the Church itself as a last resort. Trevor Belmont accepts the mission despite his clan having been banished by the very people now begging for his help, and travels through the ravaged countryside toward the castle. Along the way, he frees Grant Danasty, a pirate Dracula had cursed and transformed into a monster after he tried to rebel, and Sypha Belnades, a witch petrified by a spell. He also allies with Alucard, Dracula's son who has turned against his father. The four storm the castle and Trevor defeats Dracula. Alucard, unable to cope with having fought his own father, enters a self-induced slumber. Trevor and Sypha marry once peace is restored."
            }
          },
          { id: "curse-of-darkness", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "1479",
            title: { it: "Curse of Darkness", en: "Curse of Darkness" },
            image: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Castlevania%20Curse%20of%20Darkness.jpg",
            synopsis: {
              it: "Tre anni dopo la sconfitta di Dracula, la sua maledizione persiste sulla Valacchia seminando pestilenza e carestia. Hector, ex Devil Forgemaster che aveva abbandonato il servizio di Dracula per vivere una vita normale, scopre che il suo ex commilitone Isaac ha orchestrato un falso processo per stregoneria contro la moglie Rosaly, facendola bruciare sul rogo. Hector riprende i suoi poteri per inseguire Isaac fino al castello. Nel corso della missione incontra Trevor Belmont, che Isaac pugnala alle spalle, e Julia, sorella di Isaac e strega alleata di Hector. Si rivela che il misterioso consigliere Zead, che aveva manipolato tutti dall'ombra, è in realtà la Morte stessa: il suo piano era usare un Devil Forgemaster come vaso per resuscitare Dracula. Hector sconfigge la Morte e poi Isaac, ma la caduta di quest'ultimo risveglia comunque Dracula, ancora debole. Hector lo sconfigge e usa i suoi poteri per spezzare definitivamente la maledizione. Nel finale sceglie di ritirarsi in montagna insieme a Julia.",
              en: "Three years after Dracula's defeat, his curse still plagues Wallachia with disease and famine. Hector, a former Devil Forgemaster who had abandoned Dracula's service to live a normal life, discovers that his fellow Forgemaster Isaac orchestrated a false witchcraft trial against his wife Rosaly, having her burned at the stake. Hector reclaims his powers to pursue Isaac to the castle. Along the way he encounters Trevor Belmont, who Isaac stabs in the back, and Julia, Isaac's sister and a witch who aids Hector. It is revealed that the mysterious advisor Zead, who had been manipulating everyone from the shadows, is Death itself: his plan was to use a Devil Forgemaster as a vessel to resurrect Dracula. Hector defeats Death and then Isaac, but Isaac's fall inadvertently awakens Dracula, still weakened. Hector defeats him and uses his powers to break the curse once and for all. In the epilogue, he chooses to retire to the mountains alongside Julia."
            }
          },
          { id: "the-adventure", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "1576",
            title: { it: "The Adventure", en: "The Adventure" },
            image: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Castlevania%20The%20Adventure.jpg",
            synopsis: {
              it: "Un secolo dopo la sconfitta per mano di Trevor Belmont, Dracula risorge in Transilvania. È da questo momento che si stabilisce il ciclo leggendario: ogni cento anni, quando la fede in Dio si affievolisce, Dracula torna in vita. Christopher Belmont, discendente di Trevor e Sypha, impugna la Vampire Killer e si fa strada attraverso il castello fino ad affrontare il conte in duello. Lo sconfigge e il castello crolla, ma Dracula finge la morte trasformandosi in nebbia e si ritira per recuperare le forze nell'ombra.",
              en: "A century after his defeat at the hands of Trevor Belmont, Dracula rises again in Transylvania. It is from this point that the legendary cycle is established: every hundred years, when faith in God weakens, Dracula returns to life. Christopher Belmont, descendant of Trevor and Sypha, takes up the Vampire Killer and fights his way through the castle to face the Count in a final duel. He defeats him and the castle crumbles, but Dracula feigns death by transforming into mist, retreating into the shadows to slowly regain his strength."
            }
          },
          { id: "belmonts-revenge", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "1591",
            title: { it: "Belmont's Revenge", en: "Belmont's Revenge" },
            image: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Castlevania%20II%20Belmont%27s%20Revenge.jpg",
            synopsis: {
              it: "Quindici anni dopo The Adventure, Christopher Belmont organizza la cerimonia in cui suo figlio Soleil riceve ufficialmente il titolo di cacciatore di vampiri. Dracula, ancora intrappolato nella forma di nebbia, coglie l'occasione per corrompere i poteri sacri appena conferiti a Soleil, trasformandolo in un demone e usando il suo corpo per riacquistare forma fisica. Quattro castelli sorgono in Valacchia. Christopher percorre i quattro castelli uno per uno, affronta Soleil posseduto e lo libera dalla corruzione. Raggiunto Dracula nel suo castello, lo sconfigge e la pace torna in Valacchia.",
              en: "Fifteen years after The Adventure, Christopher Belmont organises the ceremony in which his son Soleil officially receives the title of vampire hunter. Dracula, still trapped in mist form, seizes the opportunity to corrupt the sacred powers just granted to Soleil, transforming him into a demon and using his body to reclaim physical form. Four castles rise across Wallachia. Christopher fights his way through each of the four castles, confronts the possessed Soleil and frees him from the corruption. He then reaches Dracula's castle, defeats the Count, and peace returns to Wallachia."
            }
          },
          { id: "castlevania-1691", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "1691",
            title: { it: "Castlevania", en: "Castlevania" },
            image: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Castlevania.jpg",
            synopsis: {
              it: "Un secolo dopo Christopher Belmont, un culto dei Seguaci delle Tenebre compie una messa nera nel monastero abbandonato ai margini del villaggio, sacrificando sangue umano sui resti di Dracula per resuscitarlo la notte di Pasqua. Il castello riappare in Transilvania. Simon Belmont, pronipote di Christopher e nuovo proprietario della Vampire Killer, si infiltra da solo nel castello, abbatte i servitori del conte e affronta Dracula in duello sconfiggendolo. Prima di perire, Dracula riesce a maledire Simon infliggendogli una ferita avvelenata destinata a consumarlo lentamente.",
              en: "A century after Christopher Belmont, a cult of Followers of Darkness performs a Black Mass in the abandoned monastery at the edge of the village, pouring human blood over Dracula's remains to resurrect him on Easter night. The castle reappears in Transylvania. Simon Belmont, Christopher's great-grandson and the new wielder of the Vampire Killer, infiltrates the castle alone, cuts down the Count's servants, and defeats Dracula in a final duel. Before perishing, Dracula manages to curse Simon, inflicting a poisoned wound destined to slowly consume him."
            }
          },
          { id: "simons-quest", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "1698",
            title: { it: "Simon's Quest", en: "Simon's Quest" },
            image: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Castlevania%20II%20Simon%27s%20Quest.jpg",
            synopsis: {
              it: "Sette anni dopo gli eventi di Castlevania, Simon Belmont scopre di essere afflitto dalla maledizione che Dracula gli aveva inflitto prima di morire. Una donna misteriosa apparsa nella nebbia lo avverte che ha poco tempo da vivere e che l'unico modo per spezzare la maledizione è resuscitare Dracula e sconfiggerlo una seconda volta. Simon percorre la Transilvania raccogliendo i cinque resti del conte, dispersi in altrettante magioni: la costola, il cuore, l'occhio, l'unghia e l'anello. Li porta alle rovine del castello e brucia i resti, resuscitando Dracula in forma indebolita. Lo sconfigge e la maledizione viene spezzata. Grazie alle sue gesta, il clan Belmont viene finalmente reintegrato dalla comunità dopo secoli di esilio.",
              en: "Seven years after the events of Castlevania, Simon Belmont discovers he is afflicted by the curse Dracula placed on him before dying. A mysterious woman appearing in the mist warns him that he has little time to live and that the only way to break the curse is to resurrect Dracula and defeat him a second time. Simon travels across Transylvania collecting the Count's five remains, scattered across five separate mansions: the rib, the heart, the eye, the nail, and the ring. He brings them to the ruins of the castle and burns them, resurrecting a weakened Dracula. He defeats him and the curse is broken. Thanks to his deeds, the Belmont clan is finally welcomed back into the community after centuries of exile."
            }
          },
          { id: "harmony-of-dissonance", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "1748",
            title: { it: "Harmony of Dissonance", en: "Harmony of Dissonance" },
            image: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Castlevania%20Harmony%20of%20Dissonance.jpg",
            synopsis: {
              it: "Cinquant'anni dopo Simon's Quest, Maxim Kischine torna da un viaggio di allenamento con ferite gravi e senza ricordi, annunciando che la loro amica d'infanzia Lydie Erlanger è stata rapita. Juste Belmont, nipote di Simon e nuovo proprietario della Vampire Killer, lo segue fino a un castello misterioso. Dentro, Juste scopre la verità: mosso dall'invidia verso i Belmont, Maxim aveva tentato di emulare Simon raccogliendo da solo i resti di Dracula per poterlo sconfiggere e dimostrare il proprio valore. Il processo lo ha lasciato posseduto dallo spirito del conte. Juste raccoglie i resti, distrugge la possessione e affronta la forma spettrale di Dracula che tenta di ricomporsi attraverso di essi. Lo sconfigge. Maxim si risveglia libero dalla corruzione e i tre amici escono indenni dal castello.",
              en: "Fifty years after Simon's Quest, Maxim Kischine returns from a training expedition gravely wounded and with no memories, bringing news that their childhood friend Lydie Erlanger has been kidnapped. Juste Belmont, Simon's grandson and the new owner of the Vampire Killer, follows him to a mysterious castle. Inside, Juste uncovers the truth: driven by envy toward the Belmonts, Maxim had attempted to emulate Simon by collecting Dracula's remains on his own, hoping to defeat the Count himself and prove his worth. The process left him possessed by the Count's spirit. Juste gathers the remains, breaks the possession, and faces the spectral form of Dracula as he attempts to reconstitute himself through them. He defeats him. Maxim awakens free from corruption and the three friends escape the castle unharmed."
            }
          },
          { id: "rondo-of-blood", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "1792",
            title: { it: "Rondo of Blood", en: "Rondo of Blood" },
            image: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Castlevania%20Rondo%20of%20Blood.jpg",
            synopsis: {
              it: "Il sacerdote oscuro Shaft resuscita Dracula, che attacca il villaggio di Richter Belmont rapendo quattro donne: la fidanzata Annette, scelta deliberatamente come esca per attirare il Belmont nel castello, la giovane Maria Renard, lontana parente del clan con poteri magici, e altre due abitanti del luogo. Richter si fa strada attraverso il castello, libera le prigioniere e affronta Dracula in duello sconfiggendolo. Maria, lungi dall'essere un semplice ostaggio, combatte al suo fianco. Nel finale Dracula riconosce che il sangue dei Belmont lo ha ancora una volta sconfitto.",
              en: "The dark priest Shaft resurrects Dracula, who attacks Richter Belmont's village and kidnaps four women: his girlfriend Annette, deliberately chosen as bait to lure the Belmont to the castle, the young Maria Renard, a distant relative of the clan gifted with magical powers, and two other villagers. Richter fights his way through the castle, frees the captives, and defeats Dracula in a final duel. Maria, far from being a mere hostage, fights alongside him. In the ending, Dracula acknowledges that the blood of the Belmonts has defeated him once again."
            }
          },
          { id: "symphony-of-the-night", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "1797",
            title: { it: "Symphony of the Night", en: "Symphony of the Night" },
            image: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Castlevania%20Symphony%20of%20the%20Night.jpg",
            note: { it: "Uno dei titoli più celebrati della saga e padre del genere Metroidvania.", en: "One of the most celebrated titles in the franchise and the defining game of the Metroidvania genre." },
            synopsis: {
              it: "Cinque anni dopo Rondo of Blood, Richter Belmont scompare misteriosamente e il castello di Dracula riappare. Alucard, figlio di Dracula, si risveglia dal suo sonno millenario e si infiltra nel castello. Lì incontra Maria Renard, che era già entrata da sola in cerca di Richter. Alucard scopre che Richter è sotto il controllo del sacerdote oscuro Shaft, che lo usa come signore del castello per attirare e uccidere chiunque tenti di investigare, eliminando così il clan Belmont dall'interno. Usando gli Holy Glasses donatigli da Maria, Alucard rompe il controllo su Richter. Shaft evoca allora un castello invertito nel cielo: lì risiede il potere per resuscitare Dracula. Alucard penetra nel castello invertito, sconfigge Shaft e affronta infine Dracula resuscitato, abbattendolo definitivamente. Richter e Maria escono indenni.",
              en: "Five years after Rondo of Blood, Richter Belmont mysteriously vanishes and Dracula's castle reappears. Alucard, Dracula's son, awakens from his centuries-long slumber and infiltrates the castle, where he encounters Maria Renard, who had already entered on her own in search of Richter. Alucard discovers that Richter is under the control of the dark priest Shaft, who is using him as the castle's lord to lure and destroy anyone who dares investigate, eliminating the Belmont clan from within. Using the Holy Glasses gifted to him by Maria, Alucard breaks the spell on Richter. Shaft then summons an inverted castle in the sky, where the power to resurrect Dracula lies. Alucard fights his way through the inverted castle, defeats Shaft, and finally confronts the resurrected Dracula, striking him down. Richter and Maria escape unharmed."
            }
          },
          { id: "order-of-ecclesia", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "18XX",
            title: { it: "Order of Ecclesia", en: "Order of Ecclesia" },
            image: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Castlevania%20Order%20of%20Ecclesia.jpg",
            synopsis: {
              it: "Con il clan Belmont scomparso, diverse organizzazioni cercano un modo alternativo per sconfiggere Dracula. La più promettente è l'Ordine di Ecclesia, guidato da Barlowe, che ha creato il Dominus, un trio di glifi abbastanza potenti da distruggere il conte. Shanoa viene scelta come vaso per assorbirli, ma durante il rituale il collega Albus interrompe la cerimonia e fugge con i glifi, privando Shanoa di memorie ed emozioni nel processo. Barlowe la manda a recuperarli. Nel corso dell'inseguimento Shanoa scopre la verità: Albus ha rubato il Dominus per proteggerla, sapendo che usarlo avrebbe consumato l'anima di chi lo impiega. Il vero traditore è Barlowe, che ha orchestrato tutto per resuscitare Dracula, sacrificandosi per completare il rituale. Shanoa affronta e sconfigge Dracula, ma per sigillarlo deve usare il Dominus, condannando se stessa. Albus, la cui anima si è fusa con il glifo, si sacrifica al suo posto, le restituisce le memorie e svanisce. Dracula perisce e il castello crolla. Ogni traccia dell'Ordine di Ecclesia scompare poco dopo.",
              en: "With the Belmont clan gone, several organisations seek an alternative way to defeat Dracula. The most promising is the Order of Ecclesia, led by Barlowe, which has created Dominus, a trio of glyphs powerful enough to destroy the Count. Shanoa is chosen as the vessel to absorb them, but during the ritual her fellow member Albus interrupts the ceremony and flees with the glyphs, leaving Shanoa stripped of her memories and emotions. Barlowe sends her to retrieve them. In the course of the pursuit, Shanoa uncovers the truth: Albus stole Dominus to protect her, knowing that using it would consume the soul of its wielder. The real traitor is Barlowe, who orchestrated everything to resurrect Dracula, ultimately sacrificing himself to complete the ritual. Shanoa confronts and defeats Dracula, but sealing him requires the use of Dominus, condemning herself in the process. Albus, whose soul has merged with the glyph, sacrifices himself in her place, restores her memories, and fades away. Dracula perishes and the castle crumbles. All records of the Order of Ecclesia vanish shortly after."
            }
          },
          { id: "bloodlines", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "1917",
            title: { it: "Bloodlines", en: "Bloodlines" },
            image: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Castlevania%20Bloodlines.jpg",
            note: { it: "Epilogo amaro: poiché John non è un Belmont puro, la Vampire Killer ha drenato la sua energia vitale durante il combattimento. Non si riprenderà mai completamente dalle ferite e morirà prima del 1944.", en: "Bitter epilogue: since John is not a pure Belmont, the Vampire Killer drained his life force during the battle. He never fully recovers from his wounds and dies before 1944." },
            synopsis: {
              it: "Nel 1914, Elizabeth Bartley, nipote vampira di Dracula, resuscitata dalla strega Drolta Tzuentes, orchestra l'assassinio dell'Arciduca Francesco Ferdinando a Sarajevo per scatenare la Prima Guerra Mondiale e usare le anime dei caduti per resuscitare il conte. John Morris, figlio di Quincy Morris e lontano discendente del clan Belmont, impugna la Vampire Killer per fermarla. Lo affianca Eric Lecarde, che ha una ragione personale: Elizabeth ha trasformato la sua fidanzata Gwendolyn in vampiro. I due inseguono Elizabeth e Drolta attraverso l'Europa fino al Castello Proserpina in Inghilterra, dove sconfiggono entrambe e Dracula.",
              en: "In 1914, Elizabeth Bartley, Dracula's vampiress niece, is resurrected by the witch Drolta Tzuentes and orchestrates the assassination of Archduke Franz Ferdinand in Sarajevo to trigger World War I, using the souls of the fallen as fuel to resurrect the Count. John Morris, son of Quincy Morris and a distant descendant of the Belmont clan, takes up the Vampire Killer to stop her. At his side is Eric Lecarde, who has a personal score to settle: Elizabeth transformed his fiancée Gwendolyn into a vampire. The two pursue Elizabeth and Drolta across Europe to Castle Proserpina in England, where they defeat both women and Dracula himself."
            }
          },
          { id: "portrait-of-ruin", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "1944",
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
            title: { it: "Aria of Sorrow", en: "Aria of Sorrow" },
            image: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Castlevania%20Aria%20of%20Sorrow.jpg",
            synopsis: {
              it: "Nel 2035, durante la prima eclissi del ventunesimo secolo, lo studente giapponese Soma Cruz e la sua amica d'infanzia Mina Hakuba vengono risucchiati all'interno del castello di Dracula. Soma scopre di possedere il Power of Dominance: la capacità di assorbire le anime dei mostri sconfitti, potere esclusivo del Dark Lord. L'agente governativo Genya Arikado, in realtà Alucard, lo guida attraverso il castello. L'antagonista è Graham Jones, un missionario convinto di essere la reincarnazione di Dracula. Soma lo sconfigge e scopre che la reincarnazione è lui, non Graham. Rifiuta il suo destino oscuro e il castello crolla. Soma e Mina escono indenni dall'eclissi.",
              en: "In 2035, during the first eclipse of the twenty-first century, Japanese student Soma Cruz and his childhood friend Mina Hakuba are pulled inside Dracula's castle. Soma discovers he possesses the Power of Dominance, the ability to absorb the souls of defeated monsters, a power exclusive to the Dark Lord. Government agent Genya Arikado, who is in truth Alucard, guides him through the castle. The antagonist is Graham Jones, a missionary convinced he is Dracula's reincarnation. Soma defeats him and discovers that the true reincarnation is himself, not Graham. He rejects his dark destiny and the castle crumbles. Soma and Mina escape the eclipse unharmed."
            }
          },
          { id: "dawn-of-sorrow", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "2036",
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
            title: { it: "Lords of Shadow", en: "Lords of Shadow" },
            image: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Castlevania%20Lords%20of%20Shadow.jpg",
            synopsis: {
              it: "La terra è separata dal Cielo e le anime dei morti sono intrappolate nel mondo mortale. Gabriel Belmont, cavaliere della Brotherhood of Light, viene inviato a sconfiggere i tre Lords of Shadow per recuperare i pezzi della God Mask, un'antica reliquia capace di riconnettere il mondo divino a quello terreno. Gabriel ha anche una motivazione personale: vuole usare la God Mask per resuscitare la moglie Marie, assassinata mentre era via in missione. Sconfigge i tre Lords of Shadow con l'aiuto del mentore Zobek, ma scopre che è stato Zobek stesso a manipolarlo dall'inizio usando la Devil Mask per controllarne la mente, ed è stato Gabriel stesso, in stato di trance, ad uccidere Marie. Il vero antagonista è Satana, che ha usato Zobek come pedina per separare la terra dal Cielo. Gabriel sconfigge Satana e Marie ascende in Paradiso, liberando le anime intrappolate.\n\nNei DLC canonici Reverie e Resurrection, Gabriel scopre che sconfiggendo i Lords of Shadow ha liberato involontariamente il Forgotten One, un demone primordiale. Lo sconfigge con l'aiuto di Laura, figlia adottiva di Carmilla, uno dei tre Lords of Shadow da lui sconfitti in precedenza, che sacrifica la propria vita nel processo. Gabriel assorbe il potere del demone perdendo definitivamente la sua umanità. Nel finale si scopre che secoli dopo Gabriel è diventato Dracula.",
              en: "The Earth has been severed from Heaven and the souls of the dead are trapped in the mortal realm. Gabriel Belmont, a knight of the Brotherhood of Light, is sent to defeat the three Lords of Shadow and recover the pieces of the God Mask, an ancient relic capable of reconnecting the divine world to the earthly one. Gabriel also has a personal motivation: he hopes to use the God Mask to resurrect his wife Marie, murdered while he was away on a mission. He defeats the three Lords of Shadow with the guidance of his mentor Zobek, only to discover that Zobek himself has been manipulating him all along using the Devil Mask to control his mind, and that it was Gabriel himself, in a trance state, who killed Marie. The true antagonist is Satan, who used Zobek as a pawn to sever Earth from Heaven. Gabriel defeats Satan and Marie ascends to Heaven, freeing the trapped souls.\n\nIn the canonical DLCs Reverie and Resurrection, Gabriel discovers that by defeating the Lords of Shadow he has inadvertently freed the Forgotten One, a primordial demon. He defeats it with the help of Laura, the adopted daughter of Carmilla, one of the three Lords of Shadow he previously defeated, who sacrifices her life in the process. Gabriel absorbs the demon's power, losing his humanity in the process. The epilogue reveals that centuries later, Gabriel has become Dracula."
            }
          },
          { id: "mirror-of-fate", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "1073 e 1103", yearEn: "1073 and 1103",
            title: { it: "Mirror of Fate", en: "Mirror of Fate" },
            image: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Castlevania%20Lords%20of%20Shadow%20%E2%80%93%20Mirror%20of%20Fate.jpg",
            synopsis: {
              it: "La storia si svolge in due epoche. Nel 1073 Trevor Belmont, figlio di Gabriel cresciuto in segreto dalla Brotherhood of Light, scopre la verità sulle sue origini e si infiltra nel castello per uccidere suo padre. I due si scontrano e Trevor viene trafitto dalla propria Combat Cross per mano di Dracula. Solo allora Trevor rivela di essere suo figlio. Sconvolto, Dracula tenta disperatamente di riportarlo in vita trasformandolo in vampiro, ma Trevor sembra morto. Dracula lo seppellisce incidendo sulla tomba il nome \"Alucard\" per proteggerne l'identità. Nel 1103 Simon Belmont, figlio di Trevor, entra nel castello per vendicare l'uccisione dei genitori, ignaro che il vampiro che vuole uccidere è suo nonno. Trevor nel frattempo si è risvegliato come Alucard e segue Simon nell'ombra senza rivelare la propria identità. I due affrontano Dracula insieme e lo sconfiggono.",
              en: "The story unfolds across two time periods. In 1073, Trevor Belmont, Gabriel's son, raised in secret by the Brotherhood of Light, discovers the truth about his origins and infiltrates the castle to kill his father. The two clash and Trevor is impaled by his own Combat Cross at Dracula's hand. Only then does Trevor reveal that he is his son. Shattered by the revelation, Dracula desperately attempts to revive him by turning him into a vampire, but Trevor appears dead. Dracula buries him, engraving the name \"Alucard\" on the tomb to protect his identity. In 1103, Simon Belmont, Trevor's son, enters the castle to avenge the deaths of his parents, unaware that the vampire he seeks to destroy is his own grandfather. Trevor, meanwhile, has awakened as Alucard and follows Simon through the castle without revealing his true identity. The two confront Dracula together and defeat him."
            }
          },
          { id: "lords-of-shadow-2", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "Epoca Moderna", yearEn: "Modern Era",
            title: { it: "Lords of Shadow 2", en: "Lords of Shadow 2" },
            image: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Castlevania%20Lords%20of%20Shadow%202.jpg",
            synopsis: {
              it: "Secoli dopo Mirror of Fate, Dracula si risveglia indebolito in una cattedrale nel mezzo di una città moderna costruita attorno al suo antico castello. Zobek lo raggiunge con una proposta: in cambio di aiuto contro i seguaci di Satana che stanno preparando il suo ritorno, gli consegnerà la Vampire Killer, l'unica arma capace di porre fine alla sua immortalità. Dracula accetta, desiderando solo la morte e la pace eterna. Si rivela però che l'intero piano è stato orchestrato da Alucard: secoli prima aveva convinto suo padre a fingersi morto per costringere Zobek e Satana a emergere allo scoperto. Dracula recupera i suoi poteri, elimina i tre accoliti di Satana, uccide Zobek e affronta Satana che nel frattempo ha posseduto Alucard. Dracula rifiuta di uccidere suo figlio e costringe Satana ad abbandonare il corpo di Alucard, eliminandolo definitivamente. Nel finale ambiguo, padre e figlio entrano insieme nella cattedrale all'alba, lasciando intendere che potrebbero lasciarsi consumare dalla luce solare, ponendo fine alla stirpe dei Belmont e all'era dei mostri.\n\nNel DLC canonico Revelations, ambientato prima del 1103, si gioca come Alucard e si scopre il suo piano a lungo termine: far sembrare che Dracula venga sconfitto da Simon per spingerlo in un sonno profondo, così che Zobek e Satana emergano allo scoperto e possano essere eliminati definitivamente. Alucard si congeda senza dire a Simon chi è davvero.",
              en: "Centuries after Mirror of Fate, Dracula awakens weakened in a cathedral at the heart of a modern city built around his ancient castle. Zobek approaches him with a proposal: in exchange for help against Satan's acolytes who are preparing his return, he will hand over the Vampire Killer, the only weapon capable of ending Dracula's immortality. Dracula agrees, desiring nothing but death and eternal peace. It is revealed, however, that the entire plan was orchestrated by Alucard: centuries earlier he had convinced his father to feign death in order to force Zobek and Satan into the open. Dracula recovers his powers, eliminates Satan's three acolytes, kills Zobek, and confronts Satan, who has possessed Alucard for the final battle. Dracula refuses to kill his son and forces Satan to abandon Alucard's body, destroying him once and for all. In an ambiguous ending, father and son enter the cathedral together at dawn, suggesting they may allow themselves to be consumed by sunlight, putting an end to the Belmont bloodline and the age of monsters.\n\nIn the canonical DLC Revelations, set before 1103, the player controls Alucard and uncovers his long-term plan: to make it appear that Dracula is defeated by Simon in order to drive him into a deep slumber, so that Zobek and Satan will emerge from the shadows and can be eliminated once and for all. Alucard parts ways with Simon without telling him who he really is."
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
      it: "Una saga action dallo stile sopra le righe, che segue i cacciatori di demoni della stirpe di Sparda tra spade leggendarie e pistole gemelle, tra sangue umano e demoniaco. Dante e il gemello Vergil ne sono il cuore, divisi da scelte opposte ma legati da uno stesso destino che continuano a incrociare.",
      en: "A flashy, over-the-top action saga following the demon hunters of Sparda's bloodline through legendary swords and twin pistols, between human blood and demon blood. Dante and his twin Vergil are its heart, divided by opposite choices yet bound by a shared fate they keep crossing paths with."
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
          { id: "legend-of-sparda", type: "STORIA", typeEn: "STORY", year: "—", noAvatar: true,
            title: { it: "La Leggenda di Sparda", en: "The Legend of Sparda" },
            synopsis: {
              it: "Duemila anni fa, il cavaliere demoniaco Sparda si ribellò al re dell'Inferno Mundus per proteggere il mondo umano. Sconfitto Mundus e le sue legioni, sigillò la Temen-ni-gru, il portale principale tra il mondo umano e il mondo dei demoni, usando il proprio sangue, quello di una sacerdotessa umana, un amuleto mistico e la propria spada come chiave del sigillo. Il rituale lo privò di gran parte del suo potere demoniaco. In seguito visse tra gli umani, regnando pacificamente per un periodo, poi conobbe una donna di nome Eva e con lei ebbe due figli gemelli, Dante e Vergil. Sparda scomparve in circostanze ignote, lasciando Eva sola con i ragazzi. Poco prima del loro ottavo compleanno, i demoni di Mundus attaccarono la famiglia, uccisero Eva e separarono i due gemelli, ognuno convinto che l'altro fosse morto. Da quel momento i due intrapresero strade opposte.",
              en: "Two thousand years ago, the demonic knight Sparda rebelled against the lord of Hell, Mundus, to protect the human world. Having defeated Mundus and his legions, he sealed the Temen-ni-gru — the primary portal between the human world and the demon world — using his own blood, that of a human priestess, a mystical amulet, and his very sword as the seal's key. The ritual stripped him of much of his demonic power. He went on to live among humans, reigning peacefully for a time, before meeting a woman named Eva and fathering twin sons with her: Dante and Vergil. Sparda vanished under unknown circumstances, leaving Eva alone with the boys. Shortly before their eighth birthday, Mundus' demons attacked the family — killing Eva and separating the twins, each left believing the other had died. From that moment, the two set out on opposite paths."
            }
          },
          { id: "dmc3-manga", type: "MANGA", typeEn: "MANGA", year: "—",
            image: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Devil%20May%20Cry%203%20Code%201%20Dante%20%20Code%202%20Vergil.jpg",
            title: { it: "Code 1 Dante / Code 2 Vergil", en: "Code 1 Dante / Code 2 Vergil" },
            synopsis: {
              it: "Due volumi manga di una trilogia mai completata, pubblicata con supervisione Capcom. \n\"Code 1: Dante\" segue le prime missioni di Dante come cacciatore di demoni, quando ha da poco aperto il suo shop ancora senza un nome. Una misteriosa figura demoniaca chiamata White Rabbit lo ingaggia con il pretesto di ritrovare una bambina di nome Alice, in realtà per osservare il figlio di Sparda in azione. \n\"Code 2: Vergil\" mostra il percorso parallelo di Vergil e spiega come lui e Arkham abbiano formato la loro alleanza per risvegliare la Temen-ni-gru. \nIl terzo volume previsto, \"Code 3: Lady\", non fu mai completato perché l'artista abbandonò il progetto.",
              en: "Two volumes of a planned three-part manga series, published under Capcom's supervision. \n\"Code 1: Dante\" follows Dante's earliest missions as a demon hunter, shortly after opening his still-unnamed shop. A mysterious demonic figure known as the White Rabbit hires him under the pretense of finding a missing girl named Alice — in reality, to observe the Son of Sparda in action. \n\"Code 2: Vergil\" follows Vergil's parallel journey and explains how he and Arkham formed their alliance to resurrect the Temen-ni-gru. \nThe planned third volume, \"Code 3: Lady\", was never completed because the artist left the project."
            }
          },
          { id: "dmc-novel-1", type: "LIGHT NOVEL", typeEn: "LIGHT NOVEL", year: "—",
            title: { it: "Novel Volume 1", en: "Novel Volume 1" },
            image: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Devil%20May%20Cry%20%E2%80%94%20Novel%20Volume%201.jpg",
            synopsis: {
              it: "Light novel scritta con la supervisione diretta di Hideki Kamiya, creatore della serie. Copre la morte della madre Eva e la giovinezza di Dante, introducendo personaggi come Nell Goldstein, l'armatrice che forgiò Ebony & Ivory su commissione di Dante, quando operava ancora sotto lo pseudonimo di Tony Redgrave. A causa dell'uscita di DMC3 nel 2005, alcuni elementi della novel erano stati considerati non canonici, ma DMC5: Before the Nightmare e DMC5 stesso hanno confermato che la maggior parte degli eventi sono canonici, incluso il riferimento a Nell Goldstein come nonna di Nico.",
              en: "A light novel written under the direct supervision of Hideki Kamiya, the series' creator. It covers the death of Dante's mother Eva and his early years, introducing characters such as Nell Goldstein — the gunsmith who forged Ebony & Ivory on Dante's commission, while he was still operating under the alias Tony Redgrave. Following the release of DMC3 in 2005, certain elements of the novel were considered non-canonical, but DMC5: Before the Nightmare and DMC5 itself confirmed that the majority of its events are canon — including the reference to Nell Goldstein as Nico's grandmother."
            }
          },
          { id: "dmc3", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "—",
            title: { it: "Devil May Cry 3: Dante's Awakening", en: "Devil May Cry 3: Dante's Awakening" },
            image: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Devil%20May%20Cry%203%20Dante%27s%20Awakening.jpg",
            synopsis: {
              it: "Vergil risveglia la torre Temen-ni-gru alleandosi con lo studioso Arkham, che in realtà lo sta usando come pedina per impossessarsi del potere di Sparda. Dante viene attirato alla torre e i fratelli si scontrano più volte. Dante incontra Lady, una cacciatrice di demoni che cerca di uccidere il padre Arkham per vendicare la madre, sacrificata da lui in un rituale demoniaco. Il colpo di scena finale rivela che Arkham era il vero antagonista: fingendo di servire Vergil, apre il portale e assorbe il potere di Sparda, venendo poi sconfitto dall'unione dei due fratelli e da Lady stessa. Dopo la vittoria, Dante e Vergil si scontrano un'ultima volta: Dante prevale, ma Vergil rifiuta di tornare nel mondo umano e si lascia cadere nelle profondità degli Inferi. Là incontra Mundus, lo sfida indebolito e viene sopraffatto, diventando il suo servo Nelo Angelo.",
              en: "Vergil awakens the Temen-ni-gru tower by allying himself with the scholar Arkham — who is in reality using him as a pawn to seize Sparda's power. Dante is lured to the tower and the brothers clash repeatedly. Dante meets Lady, a demon hunter bent on killing her father Arkham to avenge her mother, whom he sacrificed in a demonic ritual. The final twist reveals that Arkham was the true antagonist all along: feigning loyalty to Vergil, he opens the portal and absorbs Sparda's power, only to be defeated by the combined strength of both brothers and Lady herself. After the victory, Dante and Vergil face each other one last time — Dante prevails, but Vergil refuses to return to the human world and lets himself fall into the depths of the Underworld. There he encounters Mundus, challenges him in his weakened state, and is overpowered — becoming his servant Nelo Angelo."
            }
          },
          { id: "dmc1", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "—",
            title: { it: "Devil May Cry", en: "Devil May Cry" },
            image: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Devil%20May%20Cry.jpg",
            synopsis: {
              it: "Una misteriosa donna di nome Trish, creata da Mundus a immagine di Eva per attirare Dante, lo conduce sull'isola di Mallet, dove il re dei demoni sta preparando il ritorno nel mondo umano. Nel corso del gioco Dante affronta Nelo Angelo, che si rivela essere suo fratello Vergil trasformato e sottomesso da Mundus. Alla sconfitta definitiva di Nelo Angelo, il suo amuleto si unisce a quello di Dante, trasformando la spada Force Edge nella leggendaria Sparda. Trish, che aveva tradito Dante lavorando per Mundus, si sacrifica per salvarlo durante lo scontro finale: il gesto la redime. Dante batte Mundus e lo ricaccia nel mondo demoniaco, e i due fuggono sull'isola che sta crollando. Dante apre la sua agenzia di cacciatore di demoni: in un post-credits, si scopre che lui e Trish ora sono soci e hanno rinominato il negozio Devil Never Cry.",
              en: "A mysterious woman named Trish — created by Mundus in Eva's image to lure Dante — leads him to Mallet Island, where the demon king is preparing his return to the human world. Over the course of the game, Dante faces Nelo Angelo, who is revealed to be his brother Vergil, transformed and enslaved by Mundus. Upon Nelo Angelo's final defeat, his amulet joins with Dante's, transforming the sword Force Edge into the legendary Sparda. Trish, who had betrayed Dante by working for Mundus, sacrifices herself to save him during the final confrontation — an act that redeems her. Dante defeats Mundus and drives him back into the demon world, and the two escape as the island collapses. Dante opens his demon-hunting agency: in a post-credits scene, it is revealed that he and Trish are now partners and have renamed the shop Devil Never Cry."
            }
          },
          { id: "dmc-anime", type: "ANIME", typeEn: "ANIME", year: "—",
            title: { it: "The Animated Series", en: "The Animated Series" },
            image: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Devil%20May%20Cry%20The%20Animated%20Series.jpg",
            synopsis: {
              it: "Serie anime in 12 episodi confermata canonica dal produttore Kobayashi, che ha dichiarato di essere stato coinvolto nella creazione degli script. La serie mostra Dante nella sua quotidianità come cacciatore di demoni professionista, alle prese con vari clienti e missioni episodiche. Introduce personaggi originali come Patty Lowell, una bambina che Dante prende sotto la sua protezione, e J.D. Morrison, il suo agente. Patty e Morrison appaiono poi referenziati in DMC5: Before the Nightmare, confermando retroattivamente la canonicità della serie.",
              en: "A 12-episode anime series confirmed canonical by producer Kobayashi, who stated he was involved in the development of its scripts. The series depicts Dante's day-to-day life as a professional demon hunter, taking on various clients and episodic missions. It introduces original characters such as Patty Lowell — a young girl whom Dante takes under his protection — and J.D. Morrison, his agent. Both Patty and Morrison are later referenced in DMC5: Before the Nightmare, retroactively confirming the series' canonical status."
            }
          },
          { id: "dmc2", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "—",
            title: { it: "Devil May Cry 2", en: "Devil May Cry 2" },
            image: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Devil%20May%20Cry%202.jpg",
            synopsis: {
              it: "Dante si allea con Lucia, un demone artificiale creato dallo stregone Arius e cresciuta come figlia adottiva dai Protettori di Vie de Marli, una comunità di guardiani dell'isola. Arius, presidente della multinazionale Uroboros, vuole impadronirsi del potere del demone Argosax, un antico rivale di Mundus che un tempo dominava metà del mondo demoniaco, per diventare un dio immortale. Dante interrompe il rituale sostituendo uno degli artefatti con la sua moneta, ma il portale per il mondo demoniaco si apre comunque: decide di attraversarlo lasciando la scelta al caso, con una moneta che in realtà ha entrambe le facce con testa. Sconfigge Argosax e si avventura nelle profondità degli Inferi. Lucia nel frattempo elimina un Arius corrotto dal potere demoniaco. Il finale mostra Lucia che aspetta Dante nel suo negozio, mentre un rombo di motocicletta echeggia fuori.",
              en: "Dante allies himself with Lucia — an artificial demon created by the sorcerer Arius and raised as an adoptive daughter by the Protectors of Vie de Marli, a community of island guardians. Arius, president of the multinational Uroboros, seeks to seize the power of the demon Argosax — an ancient rival of Mundus who once ruled half of the demon world — in order to become an immortal god. Dante disrupts the ritual by swapping one of the required artifacts with his coin, but the portal to the demon world opens regardless: he decides to cross it leaving the choice to fate, using a coin that in reality has heads on both sides. He defeats Argosax and ventures deeper into the Underworld. Meanwhile, Lucia eliminates an Arius corrupted by demonic power. The finale shows Lucia waiting for Dante in his shop, as the roar of a motorcycle echoes outside."
            }
          },
          { id: "dmc4-novel", type: "LIGHT NOVEL", typeEn: "LIGHT NOVEL", year: "—",
            title: { it: "Deadly Fortune", en: "Deadly Fortune" },
            image: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Devil%20May%20Cry%204%20Deadly%20Fortune.jpg",
            synopsis: {
              it: "Romanzo in due volumi scritto da Bingo Morihashi, lo stesso autore della storia di DMC4. Morihashi lo definisce la versione \"completa\" di DMC4, con scene rimosse dal gioco per motivi produttivi. Include dettagli sul passato di Nero, trovato da bambino a Fortuna e adottato dai genitori di Credo e Kyrie, e nuove scene con i personaggi principali. Il romanzo rivela anche che Vergil visitò Fortuna anni prima degli eventi del gioco, suggerendo implicitamente come Nero sia il figlio di Vergil, confermato poi esplicitamente in DMC5.",
              en: "A two-volume novel written by Bingo Morihashi, the same author behind DMC4's story. Morihashi describes it as the \"complete\" version of DMC4, incorporating scenes cut from the game for production reasons. It includes details about Nero's past — found as an infant in Fortuna and adopted by Credo and Kyrie's parents — and new scenes featuring the main cast. The novel also reveals that Vergil visited Fortuna years before the game's events, implicitly suggesting that Nero is Vergil's son, a fact confirmed explicitly in DMC5."
            }
          },
          { id: "dmc4", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "—",
            title: { it: "Devil May Cry 4", en: "Devil May Cry 4" },
            image: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Devil%20May%20Cry%204.jpg",
            synopsis: {
              it: "Primo episodio a introdurre Nero come protagonista giocabile alternativo a Dante. Nero è un giovane membro dell'Order of the Sword, un'organizzazione religiosa che venera Sparda come un dio nella città di Fortuna. Quando Dante irrompe durante una predica e uccide Sanctus, il leader dell'Ordine, Nero viene incaricato di catturarlo. Nel corso dell'avventura si scopre che Sanctus, resuscitato tramite la Cerimonia dell'Ascensione, vuole usare una colossale statua demoniaca chiamata il Salvatore per posizionarsi come difensore dell'umanità e dominare il mondo. Per attivare il Salvatore serve il sangue di Sparda: l'Ordine aveva usato la Yamato, la spada di Vergil, per aprire portali demoniaci e attirare Dante a Fortuna come nucleo del rituale. Nero possiede il Devil Bringer, un braccio demoniaco di origine misteriosa che si rivelerà in DMC5 essere il frutto del sangue di Vergil. Quando Sanctus scopre che anche Nero porta il sangue di Sparda, lo usa come sostituto, assorbendolo nel Salvatore insieme a Kyrie, la ragazza di Nero. Trish, infiltrata nell'Ordine sotto le spoglie di Gloria, e Dante collaborano per liberarli. Nero sconfigge Sanctus dall'interno del Salvatore e lo distrugge, ponendo fine all'Ordine.",
              en: "The first entry to introduce Nero as a playable protagonist alongside Dante. Nero is a young member of the Order of the Sword — a religious organization that worships Sparda as a god in the city of Fortuna. When Dante crashes a sermon and kills Sanctus, the Order's leader, Nero is tasked with capturing him. Over the course of the adventure it is revealed that Sanctus, resurrected through the Ascension Ceremony, intends to use a colossal demonic statue known as the Savior to position himself as humanity's defender and dominate the world. Activating the Savior requires the blood of Sparda: the Order had used Yamato, Vergil's sword, to open demonic portals and lure Dante to Fortuna as the ritual's core. Nero possesses the Devil Bringer — a demonic arm of mysterious origin that will be revealed in DMC5 to be the product of Vergil's bloodline. When Sanctus discovers that Nero also carries Sparda's blood, he uses him as a substitute, absorbing both Nero and his girlfriend Kyrie into the Savior. Trish, infiltrated within the Order under the guise of Gloria, and Dante work together to free them. Nero defeats Sanctus from within the Savior and destroys it, bringing the Order to an end."
            }
          },
          { id: "dmc-novel-2", type: "LIGHT NOVEL", typeEn: "LIGHT NOVEL", year: "—",
            title: { it: "Novel Volume 2", en: "Novel Volume 2" },
            image: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Devil%20May%20Cry%20%E2%80%94%20Novel%20Volume%202.jpg",
            synopsis: {
              it: "Secondo romanzo della serie, ambientato dopo DMC1 e prima di DMC2 nell'ordine cronologico attuale. Dante viene ingaggiato per investigare su un idolo demoniaco chiamato il Beast Head, missione che lo porterà ad avvicinarsi involontariamente al suo eterno nemico. Il romanzo si inserisce coerentemente nella timeline senza contraddizioni con gli altri giochi, a differenza del primo volume che aveva richiesto alcune retcon. Il finale si collega direttamente all'inizio di DMC2.",
              en: "The second novel in the series, set after DMC1 and before DMC2 in the current chronological order. Dante is hired to investigate a demonic idol known as the Beast Head — a mission that will bring him unwittingly closer to his eternal enemy. Unlike the first volume, which required certain retcons, the novel fits coherently into the timeline without contradicting the other games. Its ending connects directly to the opening of DMC2."
            }
          },
          { id: "dmc5-novel", type: "LIGHT NOVEL", typeEn: "LIGHT NOVEL", year: "—",
            title: { it: "Before the Nightmare", en: "Before the Nightmare" },
            image: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Devil%20May%20Cry%205%20Before%20the%20Nightmare.jpg",
            synopsis: {
              it: "Prequel diretto a DMC5 scritto dallo stesso autore del gioco, Bingo Morihashi. Il romanzo è la principale causa della retcon della timeline: DMC2, che si collocava originariamente dopo DMC4, viene spostato prima di esso. Racconta il periodo in cui Nero, ora adulto, ha aperto il suo ufficio di cacciatore di demoni separato da quello di Dante, gli sviluppi nei rapporti tra i personaggi nel quinquennio tra DMC4 e DMC5, e i movimenti del misterioso V prima degli eventi del gioco. Il romanzo si conclude direttamente con l'inizio degli eventi di DMC5.",
              en: "A direct prequel to DMC5 written by the game's own author, Bingo Morihashi. The novel is the primary cause of the timeline retcon: DMC2, which was originally placed after DMC4, is moved to before it. It covers the period in which Nero, now an adult, has opened his own demon-hunting agency separate from Dante's, the developments in the characters' relationships during the five years between DMC4 and DMC5, and the movements of the mysterious V before the game's events. The novel concludes directly with the opening of DMC5."
            }
          },
          { id: "dmc5-manga", type: "MANGA", typeEn: "MANGA", year: "—",
            title: { it: "Visions of V", en: "Visions of V" },
            image: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Devil%20May%20Cry%205%20Visions%20of%20V.jpg",
            synopsis: {
              it: "Manga in cinque volumi che segue V, il misterioso terzo personaggio giocabile di DMC5, durante gli eventi del gioco, approfondendo la sua psicologia e la sua storia. Esplora in dettaglio il plot twist centrale di DMC5 riguardante la vera identità di V, con contenuti che presuppongono la conoscenza del finale del gioco. Pubblicato in simultanea con DMC5 e supervisionato da Capcom.",
              en: "A five-volume manga following V — the mysterious third playable character in DMC5 — throughout the game's events, delving into his psychology and backstory. It explores in detail the central plot twist of DMC5 concerning V's true identity, with content that assumes familiarity with the game's ending. Published simultaneously with DMC5 and produced under Capcom's supervision."
            }
          },
          { id: "dmc5", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "—",
            title: { it: "Devil May Cry 5", en: "Devil May Cry 5" },
            image: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Devil%20May%20Cry%205.jpg",
            synopsis: {
              it: "Vergil, tornato dalla morte, strappa il Devil Bringer a Nero per recuperare la Yamato e si scinde in due usando la spada: la sua parte puramente demoniaca diventa Urizen, un essere assetato di potere; quella umana prende le sembianze del misterioso V. Urizen fa germogliare il Qliphoth nel centro di Red Grave City, un albero demoniaco che si nutre del sangue umano per produrre un frutto capace di rendere chi lo mangia il re degli Inferi. Dante affronta Urizen venendo sconfitto e cadendo in coma per un mese. Nel corso dell'avventura, che vede Nero, Dante e V come protagonisti giocabili, Dante si trafigge con i resti di Rebellion per liberare il suo pieno potere demoniaco. V, ormai morente perché privo di essenza demoniaca, si riunisce a Urizen riportando in vita Vergil. Nero, scoperto definitivamente essere il figlio di Vergil, affronta il padre e lo sconfigge, costringendo lui e Dante a collaborare per distruggere il Qliphoth dall'interno. I due scendono nel mondo demoniaco usando la Yamato per chiuderne il portale, rimanendovi intrappolati. Il gioco si chiude con i fratelli che si scontrano ancora, stavolta quasi per gioco, tra orde di demoni che respingono insieme.",
              en: "Vergil, returned from death, tears the Devil Bringer from Nero to reclaim the Yamato and uses the sword to split himself in two: his purely demonic half becomes Urizen, a being consumed by the thirst for power; his human half takes the form of the mysterious V. Urizen causes the Qliphoth to sprout in the heart of Red Grave City — a demonic tree that feeds on human blood to produce a fruit capable of making whoever consumes it the king of the Underworld. Dante confronts Urizen, is defeated, and falls into a coma for a month. Over the course of the adventure — with Nero, Dante, and V as playable protagonists — Dante impales himself with the remains of Rebellion to unleash his full demonic power. V, now dying from the absence of demonic essence, reunites with Urizen and restores Vergil to life. Nero, definitively revealed to be Vergil's son, confronts his father and defeats him, forcing both Vergil and Dante to work together to destroy the Qliphoth from within. The two descend into the demon world using the Yamato to seal its portal, becoming trapped there in the process. The game closes with the brothers clashing once more — this time almost playfully — as they cut down demon hordes side by side."
            }
          }
        ]
      }
    ]
  }
,

  doom: {
    id: "doom",
    listTitle: { it: "Doom", en: "Doom" },
    eyebrow: { it: "Fascicolo", en: "Case File" },
    title: { it: "Doom", en: "Doom" },
    blurb: {
      it: "Una saga action di violenza pura, portali infernali e un marine trasformato in una forza cosmica di sterminio contro le legioni dell'Inferno. Nata nei laboratori marziani dell'UAC, ha reso iconiche armi come il BFG9000 e un ritmo di gioco tanto veloce quanto spietato, senza tregua né riparo.",
      en: "An action saga of pure violence, hellish portals, and a marine turned into a cosmic force of extermination against the legions of Hell. Born in the UAC's Martian facilities, it made weapons like the BFG9000 iconic, alongside a pace as fast as it is merciless, with no rest and nowhere to hide."
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
        it: "Il collegamento tra le due epoche è stato ricostruito a posteriori attraverso i Codex e le cutscene dei giochi più recenti, non da un piano narrativo originario.",
        en: "The connective tissue between the two eras was reconstructed after the fact through Codex entries and cutscenes in the newer games, rather than an original narrative plan."
      }
    }
  },
  "dragon-quest": {
    id: "dragon-quest",
    listTitle: { it: "Dragon Quest", en: "Dragon Quest" },
    eyebrow: { it: "Fascicolo", en: "Case File" },
    title: { it: "Dragon Quest", en: "Dragon Quest" },
    blurb: {
      it: "Una saga RPG che segue una stirpe di eroi leggendari, discendenti di Erdrick, chiamati a fermare demoni, draghi e signori oscuri in mondi che rinascono nel tempo. Ogni capitolo racconta un nuovo regno minacciato, con villaggi da salvare, torri da scalare e un male antico sempre in agguato.",
      en: "An RPG saga following a lineage of legendary heroes, descendants of Erdrick, called to stop demons, dragons, and dark lords in worlds reborn across time. Each chapter tells of a new kingdom under threat, with villages to save, towers to climb, and an ancient evil always lying in wait."
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
          { id: "dq11", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "2017",
            title: { it: "Dragon Quest XI: Echi di un'era perduta", en: "Dragon Quest XI: Echoes of an Elusive Age" },
            image: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Dragon%20Quest%20XI.jpg",
            synopsis: {
              it: "Il protagonista, un giovane del villaggio di Roccapietra, scopre durante la cerimonia del suo sedicesimo compleanno di essere il Lucente, la reincarnazione di un eroe leggendario scelto dall'albero mondiale Yggdrasil per proteggere il mondo di Erdrea. Il re di Eliodoro lo bolla come \"Prole Oscura\" e lo imprigiona, ma lui fugge e raduna un gruppo di compagni. Nel corso della missione raggiunge Yggdrasil, ma l'albero viene abbattuto dal mago Mordegon, che scatena un'era di oscurità su Erdrea. Il Lucente sconfigge Mordegon ma scopre che il vero antagonista è Calasmos, il Signore Oscuro originale di cui Mordegon era servitore. Usando la Torre del Tempo Perduto, il Lucente torna indietro nel tempo per riscrivere gli eventi e impedire la caduta di Yggdrasil. Sconfigge definitivamente Calasmos e riceve da Yggdragon, l'antico drago di luce la cui essenza aveva dato vita all'albero, il titolo di Erdrick, il più grande degli eroi.\n\nNel post-credits, una madre legge al figlio la storia del Lucente, in quello che sembra un chiaro richiamo all'inizio di Dragon Quest III.",
              en: "The protagonist, a young man from the village of Cobblestone, discovers during his sixteenth birthday ceremony that he is the Luminary — the reincarnation of a legendary hero chosen by the world tree Yggdrasil to protect the world of Erdrea. The king of Heliodor brands him the \"Darkspawn\" and imprisons him, but he escapes and gathers a group of companions. In the course of his quest he reaches Yggdrasil, but the tree is felled by the sorcerer Mordegon, who plunges Erdrea into an age of darkness. The Luminary defeats Mordegon but discovers that the true antagonist is Calasmos — the original Dark One whose servant Mordegon had been. Using the Tower of Lost Time, the Luminary travels back in time to rewrite events and prevent the fall of Yggdrasil. He defeats Calasmos once and for all and receives from Yggdragon — the ancient dragon of light whose essence had given life to the tree — the title of Erdrick, the mightiest of all heroes. \n\nIn the post-credits scene, a mother reads her child the story of the Luminary, in what looks like a clear callback to the beginning of Dragon Quest III."
            }
          },
          { id: "dq3", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "1988",
            title: { it: "Dragon Quest III: E così entrò nella leggenda", en: "Dragon Quest III: The Seeds of Salvation" },
            image: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Dragon%20Quest%20III.jpg",
            synopsis: {
              it: "Il protagonista, figlio del leggendario guerriero Ortega, parte dal regno di Aliahan per completare la missione lasciata incompiuta dal padre: sconfiggere il Grand Arcidemone Baramos, che minaccia di distruggere il mondo. Radunato un gruppo di compagni, percorre il mondo intero scoprendo che Baramos è in realtà un servo di un'entità ancora più potente: Zoma, il Signore delle Tenebre che governa un mondo sotterraneo chiamato Mondo Oscuro. Il protagonista vi scende, libera la dea Rubiss imprigionata dal Signore delle Tenebre e, usando la Sfera di Luce donata dalla Regina Drago, lo sconfigge portando per la prima volta la luce in quel regno. Tuttavia il varco tra i due mondi si chiude, intrappolando il protagonista nel Mondo Oscuro per sempre. Il popolo del luogo, che chiama il proprio regno Alefgard, lo incorona con il titolo di Erdrick, il più grande degli eroi. Erdrick fonda una casata destinata a produrre gli eroi delle generazioni future.",
              en: "The protagonist, son or daughter of the legendary warrior Ortega, sets out from the kingdom of Aliahan to complete the mission their father left unfinished: defeating the Archfiend Baramos, who threatens to destroy the world. Gathering a group of companions, they travel the entire world only to discover that Baramos is merely a servant of a far more powerful force: Zoma, the Lord of Darkness who rules an underground realm known as the Dark World. The protagonist descends into it, frees the goddess Rubiss from the Lord of Darkness's imprisonment, and using the Ball of Light gifted by the Dragon Queen, defeats him — bringing light to the kingdom for the first time. However, the rift between the two worlds closes, trapping the protagonist in the Dark World forever. The people of the land, who call their kingdom Alefgard, crown them with the title of Erdrick, the mightiest of all heroes. Erdrick founds a lineage destined to produce the heroes of future generations."
            }
          },
          { id: "dq1", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "1986",
            title: { it: "Dragon Quest", en: "Dragon Quest" },
            image: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Dragon%20Quest.jpg",
            synopsis: {
              it: "Secoli dopo Erdrick, il regno di Alefgard vive nell'ombra: il Dragonlord ha rubato la Sfera di Luce, piombando il regno nell'oscurità, e ha rapito la Principessa Gwaelin. Re Lorik di Tantegel, in mancanza di eroi capaci, convoca il discendente diretto di Erdrick, un giovane privo di armi e armatura la cui stirpe leggendaria è ormai dimenticata dai più. Il protagonista percorre Alefgard raccogliendo le armi e i manufatti di Erdrick, tra cui la sua leggendaria spada nascosta nel castello stesso del Dragonlord, e salva la principessa. Il Dragonlord gli offre di governare metà del mondo in cambio della resa: il protagonista rifiuta e lo sconfigge in duello, riportando la Sfera di Luce ad Alefgard. Sposa Gwaelin e parte alla scoperta del mondo esterno, fondando nuovi regni che diventeranno il cuore degli eventi di Dragon Quest II.",
              en: "Centuries after Erdrick, the kingdom of Alefgard lives in shadow: the Dragonlord has stolen the Ball of Light, plunging the realm into darkness, and kidnapped Princess Gwaelin. King Lorik of Tantegel, with no capable heroes left, summons the direct descendant of Erdrick — a young man without weapons or armour, whose legendary bloodline has been all but forgotten. The protagonist travels across Alefgard collecting Erdrick's weapons and artifacts, including his legendary sword hidden within the Dragonlord's own castle, and rescues the princess. The Dragonlord offers him dominion over half the world in exchange for surrender: the protagonist refuses and defeats him in combat, returning the Ball of Light to Alefgard. He marries Gwaelin and sets out to explore the wider world, founding new kingdoms that will become the heart of the events of Dragon Quest II."
            }
          },
          { id: "dq2", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "1987",
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
          { id: "dq6", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "1995",
            title: { it: "Dragon Quest VI: Realms of Revelation", en: "Dragon Quest VI: Realms of Revelation" },
            image: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Dragon%20Quest%20VI.jpg",
            synopsis: {
              it: "Il protagonista, principe del regno di Somnia, attacca il castello del Re dei Demoni Murdaw insieme ai compagni Milly e Carver, ma vengono sopraffatti. Si risveglia nel piccolo villaggio di Weaver's Peak senza ricordi, ignaro della propria vera identità. Scopre presto di poter accedere al Dream World, un mondo parallelo invisibile alla gente comune, dove lui e i compagni esistono come presenze incorporee. Viaggiando tra i due mondi, recupera gradualmente la memoria fondendosi con la propria versione corporea nel Real World. Il vero antagonista si rivela essere Mortamor, il Demon Emperor, che abita nel Dread Realm, un reame oscuro tra i due mondi, e vuole fonderli per dominarli entrambi. Il protagonista e i compagni raggiungono il Dread Realm a bordo di Pegasus e sconfiggono Mortamor. Con la sua morte il Dream World cessa di esistere. Nel finale si rivela che le armi del protagonista diventeranno il leggendario equipaggiamento Zenithiano degli eroi futuri.",
              en: "The protagonist, prince of the kingdom of Somnia, launches an assault on the castle of the Demon King Murdaw alongside his companions Milly and Carver, but is overpowered. He wakes up in the small village of Weaver's Peak with no memories, unaware of his true identity. He soon discovers he can access the Dream World — a parallel dimension invisible to ordinary people — where he and his companions exist as incorporeal presences. Travelling between the two worlds, he gradually recovers his memories by merging with his own physical self in the Real World. The true antagonist is revealed to be Mortamor, the Demon Emperor, who dwells in the Dread Realm — a dark dimension between the two worlds — and seeks to merge them both under his rule. The protagonist and his companions reach the Dread Realm aboard Pegasus and defeat Mortamor. With his death, the Dream World ceases to exist. The ending reveals that the protagonist's weapons will become the legendary Zenithian equipment wielded by the heroes of future generations."
            }
          },
          { id: "dq4", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "1990",
            title: { it: "Dragon Quest IV: Chapters of the Chosen", en: "Dragon Quest IV: Chapters of the Chosen" },
            image: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Dragon%20Quest%20IV.jpg",
            synopsis: {
              it: "Il gioco è diviso in sei capitoli. I primi quattro seguono separatamente i compagni dell'Eroe: il cavaliere Ragnar McRyan, la principessa Alena con i suoi tutori, il mercante Torneko Taloon, e le sorelle indovine Maya e Meena. Ognuno di loro, seguendo percorsi diversi, scopre la cospirazione di Psaro the Manslayer, un essere a metà tra umano e mostro che vuole sterminare la razza umana usando il Secret of Evolution per diventare il nuovo Ruler of Evil. Nel quinto capitolo l'Eroe, la cui città natale viene distrutta da Psaro, si riunisce con tutti i compagni dei capitoli precedenti. Insieme sconfiggono Estark, il Ruler of Evil che Psaro voleva risvegliare, e raggiungono Nadiria attraverso il castello volante di Zenithia, dove affrontano Psaro ormai trasformato in un essere mostruoso. Nel sesto capitolo canonico, i Chosen Ones scoprono che la vera mente dietro gli eventi è Aamon, il luogotenente di Psaro che aveva orchestrato l'uccisione di Rosa, la compagna elfa di Psaro, per spingerlo alla follia. Riportando Rosa in vita, i Chosen Ones convincono Psaro a unirsi a loro per sconfiggere Aamon definitivamente.",
              en: "The game is divided into six chapters. The first four each follow one of the Hero's companions separately: the knight Ragnar McRyan, the princess Alena and her two guardians, the merchant Torneko Taloon, and the fortune-teller sisters Maya and Meena. Each of them, through their own journeys, uncovers the conspiracy of Psaro the Manslayer — a being of both human and monster blood who seeks to exterminate the human race using the Secret of Evolution to become the new Ruler of Evil. In the fifth chapter, the Hero — whose hometown is destroyed by Psaro — reunites with all the companions from the previous chapters. Together they defeat Estark, the Ruler of Evil Psaro sought to awaken, and reach Nadiria through the floating castle of Zenithia, where they confront a monstrous, transformed Psaro. In the canonical sixth chapter, the Chosen Ones discover that the true mastermind behind events is Aamon — Psaro's own lieutenant, who had orchestrated the murder of Rosa, Psaro's elven companion, to drive him to madness. By bringing Rosa back to life, the Chosen Ones convince Psaro to join them and defeat Aamon once and for all."
            }
          },
          { id: "dq5", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "1992",
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

  "dying-light": {
    id: "dying-light",
    listTitle: { it: "Dying Light", en: "Dying Light" },
    eyebrow: { it: "Fascicolo", en: "Case File" },
    title: { it: "Dying Light", en: "Dying Light" },
    avatar: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Dying%20Light%20Avatar.jpg",
    watermark: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Dying%20Light%20Filigrana.jpg",
    watermarkOpacity: 0.2,
    blurb: {
      it: "Una saga survival-horror in prima persona, tra parkour su tetti infestati e un virus capace di ridurre la civiltà in rovina, dal focolaio locale al collasso globale. Di giorno si esplora con relativa libertà, di notte le creature diventano più veloci, più aggressive, e ogni rifugio smette di essere sicuro.",
      en: "A first-person survival horror saga of rooftop parkour and a virus capable of reducing civilization to ruin, from a local outbreak to global collapse. By day there's relative freedom to explore; by night the infected grow faster and more aggressive, and no shelter stays truly safe."
    },
    palette: ["#eab308", "#4d7c0f", "#1e3a5f"],
    accentColor: "#4d7c0f",
    universes: [
      {
        id: "main",
        name: { it: "Universo Harran", en: "Harran Universe" },
        span: { it: "2015 – 2036", en: "2015 – 2036" },
        entries: [
          { id: "dying-light-1", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "2015",
            title: { it: "Dying Light", en: "Dying Light" },
            image: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Dying%20Light.jpg",
            synopsis: {
              it: "Kyle Crane, agente del GRE, viene paracadutato nella città di Harran in quarantena per recuperare un file rubato da Kadir Suleiman, detto Rais, ex colonnello militare che lo usa come merce di scambio per farsi estrarre dalla città. Il file contiene prove del piano del GRE di usare un virus come arma biologica. Crane tradisce l'organizzazione e sceglie di restare con i sopravvissuti, collaborando con i ricercatori locali Dr. Zere e Dr. Camden nel tentativo di sviluppare una cura. Scopre inoltre che il Ministero della Difesa intende bombardare Harran sostenendo che non ci siano sopravvissuti: riattiva una torre radio e fa sapere al mondo della loro esistenza, bloccando il bombardamento. Quando Rais uccide il Dr. Zere prima che possa consegnare le sue ricerche, Crane si assicura che arrivino comunque al Dr. Camden. Affronta infine Rais, a cui aveva già tagliato una mano durante una fuga precedente, e lo elimina.\nNel DLC The Following, la cura stenta ad arrivare e le scorte di Antizin si esauriscono. Crane si avventura nelle campagne fuori Harran in cerca di una cura, trovando un culto che adora una creatura chiamata la Madre, un'ibrida umano-volatile.\nEnding canonico: Crane sconfigge la Madre ma è costretto a bere il siero che lo trasforma in un volatile senziente. Scappa dalla zona di quarantena diffondendo involontariamente il virus nel mondo.",
              en: "Kyle Crane, a GRE agent, is airdropped into the quarantined city of Harran to recover a stolen file from Kadir Suleiman, known as Rais — a former military colonel who uses it as leverage to negotiate his own extraction from the city. The file contains evidence of the GRE's plan to weaponize a virus as a biological weapon. Crane betrays the organisation and chooses to stay with the survivors, working alongside local researchers Dr. Zere and Dr. Camden in an attempt to develop a cure. He also discovers that the Ministry of Defence intends to firebomb Harran, claiming there are no survivors: he reactivates a radio tower and alerts the outside world to their existence, preventing the bombing. When Rais kills Dr. Zere before he can deliver his research, Crane ensures it reaches Dr. Camden regardless. He then confronts Rais — whose hand he had already cut off during a previous escape — and kills him.\nIn the DLC The Following, the cure proves elusive and Antizin supplies run out. Crane ventures into the countryside outside Harran in search of a cure, discovering a cult that worships a creature called the Mother — a human-Volatile hybrid.\nCanonical ending: Crane defeats the Mother but is forced to drink a serum that transforms him into a sentient Volatile. He escapes the quarantine zone, unknowingly spreading the virus to the rest of the world."
            }
          },
          { id: "banshee-comic", type: "FUMETTO", typeEn: "COMIC", year: "~2021",
            title: { it: "Banshee: I Am The Cure", en: "Banshee: I Am The Cure" },
            image: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Dying%20Light%20Banshee%20I%20Am%20The%20Cure.jpg",
            synopsis: {
              it: "Fumetto digitale gratuito rilasciato da Techland in collaborazione con Dynamite Entertainment. Segue una dottoressa che sta lavorando a un vaccino contro il THV, la variante mutata del virus di Harran sviluppata segretamente dal GRE per scopi militari e fuggita da un laboratorio di Ginevra nel 2021. Racconta gli eventi del \"Fall\": il collasso globale della civiltà causato dalla diffusione del THV, inclusi i bombardamenti del Black Monday su Villedor che decimano metà della popolazione della città. La dottoressa viene infettata e si trasforma in un Banshee, una nuova variante di infetto presente in DL2. Ponte narrativo tra DL1 e DL2.",
              en: "Free digital comic released by Techland in collaboration with Dynamite Entertainment. It follows a doctor working on a vaccine against the THV — the mutated variant of the Harran Virus secretly developed by the GRE for military purposes, which escaped from a laboratory in Geneva in 2021. It depicts the events of the Fall: the global collapse of civilisation caused by the spread of the THV, including the Black Monday bombings over Villedor that wipe out half the city's population. The doctor is infected and transforms into a Banshee, a new type of infected present in DL2. A narrative bridge between DL1 and DL2."
            }
          },
          { id: "dying-light-2", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "2036",
            title: { it: "Dying Light 2: Stay Human", en: "Dying Light 2: Stay Human" },
            image: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Dying%20Light%202.jpg",
            synopsis: {
              it: "Quindici anni dopo il Fall, la civiltà si è ridotta a pochi insediamenti sparsi. Aiden Caldwell, un Pellegrino nomade e ibrido volatile senziente risultato di esperimenti del GRE subiti da bambino, raggiunge Villedor, l'ultima grande città rimasta, in cerca della sorella Mia. L'antagonista principale è Waltz, lo scienziato del GRE che li ha usati come cavie e che ora vuole riattivare un protocollo di emergenza che scatenerebbe missili su Villedor. Aiden si muove tra la guerra civile dei Pacificatori e i Sopravvissuti del Bazaar mentre affronta il suo passato e tenta di fermare Waltz. Crane viene menzionato dai personaggi come figura leggendaria del passato.",
              en: "Fifteen years after the Fall, civilisation has been reduced to a handful of scattered settlements. Aiden Caldwell — a nomadic Pilgrim and sentient Volatile hybrid, the result of GRE experiments he was subjected to as a child — reaches Villedor, the last major city still standing, in search of his sister Mia. The main antagonist is Waltz, the GRE scientist who used them as test subjects and who now wants to reactivate an emergency protocol that would trigger missile strikes on Villedor. Aiden moves between the civil war between the Peacekeepers and the Bazaar Survivors while confronting his past and attempting to stop Waltz. Crane is mentioned by various characters as a legendary figure from the past."
            }
          },
          { id: "dying-light-beast", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "~13 anni dopo The Following", yearEn: "~13 years after The Following",
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

  gta: {
    id: "gta",
    listTitle: { it: "Grand Theft Auto", en: "Grand Theft Auto" },
    eyebrow: { it: "Fascicolo", en: "Case File" },
    title: { it: "Grand Theft Auto", en: "Grand Theft Auto" },
    blurb: {
      it: "Una saga open world action-crime che segue criminali, rapinatori e trafficanti attraverso due linee temporali distinte e incompatibili tra loro. Città immaginarie modellate su grandi metropoli reali fanno da sfondo a storie di ambizione, tradimento e scalata criminale, tra alleanze che si rompono e imperi costruiti sul crimine.",
      en: "An open-world action-crime saga following criminals, robbers, and traffickers across two separate, mutually incompatible timelines. Fictional cities modeled on real-world metropolises serve as the backdrop for stories of ambition, betrayal, and criminal rise, where alliances break and empires are built on crime."
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
          { id: "vcs", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "1984",
            title: { it: "Vice City Stories", en: "Vice City Stories" },
            image: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/GTA%20Vice%20City%20Stories.jpg",
            synopsis: {
              it: "Victor Vance, militare espulso dall'esercito dal corrotto sergente Martinez, costruisce un impero criminale a Vice City per pagare le cure mediche del fratello Pete e aiutare il fratello Lance. Entra in conflitto con il potente cartello dei fratelli Mendez, li elimina entrambi insieme a Martinez, e decide di ritirarsi dalla vita criminale. Due anni dopo, tornato a fare affari di droga con Lance, viene ucciso nell'agguato di Ricardo Diaz, la scena che apre Vice City.",
              en: "Victor Vance, a soldier dishonourably discharged by corrupt Sergeant Martinez, builds a criminal empire in Vice City to pay for his brother Pete's medical bills and support his brother Lance. He enters into conflict with the powerful Mendez Brothers cartel, eliminates both of them along with Martinez, and decides to retire from criminal life. Two years later, having returned to the drug trade with Lance, he is killed in Ricardo Diaz's ambush — the scene that opens Vice City."
            }
          },
          { id: "vc", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "1986",
            title: { it: "Vice City", en: "Vice City" },
            image: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/GTA%20Vice%20City.jpg",
            synopsis: {
              it: "Tommy Vercetti arriva a Vice City per conto del boss Sonny Forelli, finisce in un'imboscata orchestrata da Ricardo Diaz, perde soldi e droga. Costruisce da zero un proprio impero criminale ed elimina Diaz insieme a Lance Vance. Nel finale Sonny arriva a Vice City per prendere il controllo dell'impero di Tommy: Lance lo tradisce passando dalla parte di Forelli, ma Tommy uccide entrambi. Durante lo scontro Sonny conferma di averlo tradito 15 anni prima facendolo cadere in un'imboscata a Harwood. Tommy diventa il re indiscusso di Vice City.",
              en: "Tommy Vercetti arrives in Vice City on behalf of boss Sonny Forelli, walks into an ambush orchestrated by Ricardo Diaz, and loses both the money and the drugs. He builds his own criminal empire from scratch and eliminates Diaz alongside Lance Vance. In the finale, Sonny arrives in Vice City to seize control of Tommy's empire: Lance betrays him by siding with Forelli, but Tommy kills them both. During the confrontation, Sonny confirms that he set Tommy up fifteen years earlier by sending him into an ambush in Harwood. Tommy becomes the undisputed king of Vice City."
            }
          },
          { id: "sa-intro", type: "CORTOMETRAGGIO", typeEn: "SHORT FILM", year: "1992",
            title: { it: "Introduzione a San Andreas", en: "Introduction to San Andreas" },
            image: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/GTA%20San%20Andreas%20Introduction.jpg",
            synopsis: {
              it: "Cortometraggio di 20 minuti che mostra gli eventi nelle ore precedenti l'inizio di San Andreas: le manovre del corrotto agente Tenpenny, che arruola il rookie Hernandez e comincia a orchestrare il tradimento di Big Smoke; il declino di Ken Rosenberg, radiato dall'albo degli avvocati e in un centro di disintossicazione a Las Venturas dove gestisce i rapporti tesi tra Salvatore Leone e i Sindacco; e i movimenti del cartello di San Fierro. Si chiude con la telefonata di Sweet a CJ che annuncia la morte della madre.",
              en: "A 20-minute short film showing the events in the hours before San Andreas begins: the manoeuvres of corrupt officer Tenpenny, who recruits rookie Hernandez and begins orchestrating Big Smoke's betrayal; the decline of Ken Rosenberg, disbarred and in rehab in Las Venturas where he manages the tense relations between Salvatore Leone and the Sindaccos; and the movements of the San Fierro cartel. It closes with Sweet's phone call to CJ announcing their mother's death."
            }
          },
          { id: "sa", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "1992",
            title: { it: "San Andreas", en: "San Andreas" },
            image: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/GTA%20San%20Andreas.jpg",
            synopsis: {
              it: "Carl \"CJ\" Johnson torna a Los Santos dopo anni di assenza e viene immediatamente incastrato dalla polizia corrotta di Tenpenny. Per sopravvivere è costretto a lavorare per lui mentre cerca di risollevare la sua gang, i Grove Street Families. Scopre che il suo amico di vecchia data Big Smoke ha tradito la gang alleandosi con i Ballas e con Tenpenny per controllare il traffico di droga della città. La storia attraversa tre città e culmina nella rivolta di Los Santos, nella morte di Big Smoke e in quella di Tenpenny.",
              en: "Carl \"CJ\" Johnson returns to Los Santos after years away and is immediately framed by corrupt officer Tenpenny. To survive, he is forced to work for him while trying to rebuild his gang, the Grove Street Families. He discovers that his longtime friend Big Smoke has betrayed the gang by allying with the Ballas and Tenpenny to control the city's drug trade. The story spans three cities and culminates in the Los Santos riots, the death of Big Smoke, and the death of Tenpenny."
            }
          },
          { id: "lcs", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "1998",
            title: { it: "Liberty City Stories", en: "Liberty City Stories" },
            image: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/GTA%20Liberty%20City%20Stories.jpg",
            synopsis: {
              it: "Toni Cipriani torna a Liberty City dopo quattro anni di fuga, durante i quali aveva ucciso un uomo d'onore su ordine di Salvatore Leone. Al ritorno viene retrocesso di grado perché Vincenzo Cilli lo ha scalzato nella gerarchia dei Leone. Toni si fa strada eliminando Vincenzo e le famiglie rivali Sindacco e Forelli, mentre il vero antagonista si rivela essere Massimo Torini della mafia siciliana, che vuole prendere il controllo di Liberty City. Nel finale Toni e Salvatore sventano il piano dei siciliani. La famiglia Leone diventa la forza dominante della città, direttamente prima degli eventi di GTA III.",
              en: "Toni Cipriani returns to Liberty City after four years on the run, having killed a made man on Salvatore Leone's orders. On his return he is demoted because Vincenzo Cilli has taken his place in the Leone hierarchy. Toni works his way back up by eliminating Vincenzo and the rival Sindacco and Forelli families, while the true antagonist turns out to be Massimo Torini of the Sicilian Mafia, who is attempting to seize control of Liberty City. In the finale, Toni and Salvatore foil the Sicilians' plan. The Leone family becomes the dominant force in the city — directly before the events of GTA III."
            }
          },
          { id: "gta-advance", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "2000",
            title: { it: "GTA Advance", en: "GTA Advance" },
            image: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/GTA%20Advance.jpg",
            synopsis: {
              it: "Mike, piccolo criminale di Liberty City, vede il suo socio Vinnie morire in un'esplosione prima che i due possano finalmente lasciare la città. Mentre indaga sulla morte, scopre la verità: Vinnie ha finto la propria morte per scappare con tutti i loro risparmi. Mike lo rintraccia e lo uccide. Storia autoconclusiva, ambientata un anno prima di GTA III.",
              en: "Mike, a small-time criminal in Liberty City, watches his partner Vinnie apparently die in a car explosion just before the two can finally leave the city for good. As he investigates the murder, he uncovers the truth: Vinnie faked his own death to run off with all their savings. Mike tracks him down and kills him. A self-contained story set one year before GTA III."
            }
          },
          { id: "gta3", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "2001",
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
          { id: "gta4", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "2008",
            title: { it: "GTA IV", en: "GTA IV" },
            image: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/GTA%20IV.jpg",
            synopsis: {
              it: "Niko Bellic arriva a Liberty City dal cugino Roman cercando vendetta per un tradimento di guerra che decimò la sua unità. Lavora per varie famiglie criminali mentre Dimitri Rascalov lo manipola e lo tradisce ripetutamente. Nell'ending fortemente implicato come canonico: Niko uccide Dimitri sulla nave Platypus, Kate McReary muore nell'attacco al matrimonio di Roman orchestrato da Pegorino, Niko uccide Pegorino a Happiness Island.\n\nDLC The Lost and Damned (2008, parallelo a GTA IV). Johnny Klebitz cerca di tenere unita la gang motociclistica The Lost MC mentre il presidente Billy Grey, appena uscito dalla riabilitazione, la trascina in guerra con i Triadi. La gang si sgretola progressivamente: Johnny finisce per uccidere Billy e vede tutto ciò per cui aveva combattuto andare in pezzi.\n\nDLC The Ballad of Gay Tony (2008, parallelo a GTA IV). Luis Lopez, bodyguard del nightclub owner \"Gay Tony\" Prince, si destreggia tra creditori, gangster russi e l'élite corrotta di Liberty City. Il suo finale si sovrappone esattamente a quello di GTA IV, con l'aereo di Ray Bulgarin visibile nella scena finale.",
              en: "Niko Bellic arrives in Liberty City to stay with his cousin Roman, seeking revenge for a wartime betrayal that decimated his unit. He works for various criminal families while Dimitri Rascalov repeatedly manipulates and betrays him. In the ending strongly implied to be canonical: Niko kills Dimitri on the Platypus ship, Kate McReary dies in the attack on Roman's wedding orchestrated by Pegorino, and Niko kills Pegorino on Happiness Island.\n\nDLC The Lost and Damned (2008, parallel to GTA IV). Johnny Klebitz tries to hold together the Lost MC motorcycle gang while president Billy Grey — fresh out of rehab — drags it into war with the Triads. The gang gradually falls apart: Johnny ends up killing Billy and watches everything he fought for crumble.\n\nDLC The Ballad of Gay Tony (2008, parallel to GTA IV). Luis Lopez, bodyguard to nightclub owner \"Gay Tony\" Prince, navigates between loan sharks, Russian gangsters, and Liberty City's corrupt elite. His finale overlaps exactly with that of GTA IV — Ray Bulgarin's plane is visible in the final scene."
            }
          },
          { id: "ctw", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "2009",
            title: { it: "Chinatown Wars", en: "Chinatown Wars" },
            image: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/GTA%20Chinatown%20Wars.jpg",
            synopsis: {
              it: "Huang Lee arriva a Liberty City per consegnare la spada ancestrale Yu Jian allo zio Wu \"Kenny\" Lee come simbolo di successione alla guida delle Triadi. Viene subito attaccato, lasciato per morto e la spada rubata. Indagando sulla corruzione interna scopre la verità: è stato Kenny stesso a orchestrare il furto e a far uccidere il padre di Huang per scalare il potere delle Triadi da solo. Huang uccide Kenny e viene offerto come nuovo boss dalle Triadi dal vecchio capo Hsin.",
              en: "Huang Lee arrives in Liberty City to deliver the ancestral sword Yu Jian to his uncle Wu \"Kenny\" Lee as a symbol of succession to the leadership of the Triads. He is immediately ambushed, left for dead, and the sword stolen. As he investigates the internal corruption, he uncovers the truth: it was Kenny himself who orchestrated the theft and had Huang's father murdered in order to seize control of the Triads alone. Huang kills Kenny and is offered the position of new Triad boss by the outgoing leader Hsin."
            }
          },
          { id: "gta5", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "2013",
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

  "kingdom-hearts": {
    id: "kingdom-hearts",
    listTitle: { it: "Kingdom Hearts", en: "Kingdom Hearts" },
    eyebrow: { it: "Fascicolo", en: "Case File" },
    title: { it: "Kingdom Hearts", en: "Kingdom Hearts" },
    blurb: { it: "Contenuti in arrivo.", en: "Content coming soon." },
    universes: [
      { id: "main", name: { it: "", en: "" }, span: { it: "", en: "" }, entries: [] }
    ]
  },

  "legacy-of-kain": {
    id: "legacy-of-kain",
    listTitle: { it: "Legacy of Kain", en: "Legacy of Kain" },
    eyebrow: { it: "Fascicolo", en: "Case File" },
    title: { it: "Legacy of Kain", en: "Legacy of Kain" },
    blurb: { it: "Contenuti in arrivo.", en: "Content coming soon." },
    universes: [
      { id: "main", name: { it: "", en: "" }, span: { it: "", en: "" }, entries: [] }
    ]
  },

  "lost-planet": {
    id: "lost-planet",
    listTitle: { it: "Lost Planet", en: "Lost Planet" },
    eyebrow: { it: "Fascicolo", en: "Case File" },
    title: { it: "Lost Planet", en: "Lost Planet" },
    blurb: {
      it: "Una saga action-avventura ambientata sul pianeta ghiacciato E.D.N. III, tra una corporazione senza scrupoli, creature aliene territoriali e coloni costretti a sopravvivere in condizioni estreme. Mech da combattimento ed energia termica sono al centro di un conflitto che attraversa generazioni, mentre il pianeta stesso cambia lentamente pelle.",
      en: "An action-adventure saga set on the frozen planet E.D.N. III, caught between a ruthless corporation, territorial alien creatures, and colonists forced to survive in extreme conditions. Combat mechs and thermal energy sit at the center of a conflict spanning generations, as the planet itself slowly changes shape."
    },
    palette: ["#38bdf8", "#f97316", "#1e3a5f"],
    accentColor: "#38bdf8",
    avatar: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Lost%20Planet%20Avatar.jpg",
    watermark: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Lost%20Planet%20Filigrana.jpg",
    watermarkOpacity: 0.2,
    universes: [
      {
        id: "main",
        name: { it: "Universo E.D.N. III", en: "E.D.N. III Universe" },
        span: { it: "A.T. -50 – A.T. 12", en: "A.T. -50 – A.T. 12" },
        entries: [
          { id: "lp3", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "A.T. -50",
            title: { it: "Lost Planet 3", en: "Lost Planet 3" },
            image: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Lost%20Planet%203.jpg",
            synopsis: {
              it: "Jim Peyton arriva sul pianeta ghiacciato E.D.N. III come operaio minerario sotto contratto con la corporazione NEVEC, motivato dal bisogno di mantenere la famiglia sulla Terra. Scopre che NEVEC ha nascosto l'esistenza di una prima colonia andata distrutta, e che il pianeta è in realtà un organismo vivente chiamato Nushi, la cui energia termica è la fonte di vita per gli Akrid. Quando NEVEC prende il controllo della spedizione e usa la famiglia di Jim come ostaggio, lui si allea con i sopravvissuti della prima colonia, i Dimenticati, per sabotarne i piani. Nell'epilogo Jim muore anziano raccontando la sua storia alla nipote Diana. I sopravvissuti diventano i primi Pirati della Neve, mentre Gale Holden, l'ingegnere della spedizione e padre del protagonista di Lost Planet 1, e Mira, figlia del leader dei Dimenticati, creano il primo Harmonizer, gettando le basi degli eventi di Lost Planet 1.",
              en: "Jim Peyton arrives on the frozen planet E.D.N. III as a mining worker under contract with the NEVEC corporation, driven by the need to provide for his family back on Earth. He discovers that NEVEC has concealed the existence of a first colony that was destroyed, and that the planet is actually a living organism called Nushi, whose thermal energy is the life source for the Akrid. When NEVEC takes control of the expedition and uses Jim's family as a hostage, he allies with the survivors of the first colony — the Forgotten — to sabotage their plans. In the epilogue, Jim dies as an old man recounting his story to his granddaughter Diana. The survivors become the first Snow Pirates, while Gale Holden — the expedition's engineer and father of Lost Planet 1's protagonist — and Mira, daughter of the Forgotten's leader, create the first Harmonizer, laying the groundwork for the events of Lost Planet 1."
            }
          },
          { id: "lp1", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "A.T. 1",
            title: { it: "Lost Planet: Extreme Condition", en: "Lost Planet: Extreme Condition" },
            image: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Lost%20Planet.jpg",
            synopsis: {
              it: "Wayne Holden si risveglia sul pianeta E.D.N. III dopo essere rimasto congelato per 30 anni nel suo mech, in seguito a una battaglia contro un colossale Akrid chiamato Occhio Verde. Senza ricordi, si unisce a un gruppo di Pirati della Neve e inizia a combattere sia gli Akrid che la NEVEC. Recuperando gradualmente la memoria, scopre che suo padre Gale non fu ucciso dagli Akrid ma assassinato da NEVEC. Scopre inoltre il Frontier Project: il piano segreto di NEVEC di terraformare il pianeta usando l'energia termica, eliminando gli Akrid ma condannando a morte tutti gli umani rimasti in superficie. Wayne lo smantella e uccide il comandante Isenberg, perdendo nuovamente i ricordi nel processo. Un anno dopo, il pianeta ha già iniziato la sua lenta trasformazione verso un mondo più caldo e vivibile.",
              en: "Wayne Holden wakes up on the planet E.D.N. III after being frozen for 30 years inside his mech, following a battle against a colossal Akrid known as Green Eye. With no memory, he joins a group of Snow Pirates and begins fighting both the Akrid and NEVEC. Gradually recovering his memories, he discovers that his father Gale was not killed by the Akrid but murdered by NEVEC. He also uncovers the Frontier Project: NEVEC's secret plan to terraform the planet using thermal energy, wiping out the Akrid but condemning every human left on the surface to death. Wayne dismantles the project and kills Commander Isenberg, losing his memories once again in the process. A year later, the planet has already begun its slow transformation into a warmer and more habitable world."
            }
          },
          { id: "lp2", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "A.T. 12",
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

  "metal-gear-solid": {
    id: "metal-gear-solid",
    listTitle: { it: "Metal Gear Solid", en: "Metal Gear Solid" },
    eyebrow: { it: "Fascicolo", en: "Case File" },
    title: { it: "Metal Gear Solid", en: "Metal Gear Solid" },
    blurb: {
      it: "Una saga stealth-action che segue le vite di Big Boss e dei suoi cloni attraverso decenni di guerra fredda, tradimenti e cospirazioni militari, tra Metal Gear (carri armati nucleari bipedi), organizzazioni segrete e la lotta per il controllo dell'informazione globale.",
      en: "A stealth-action saga following the lives of Big Boss and his clones across decades of Cold War conflict, betrayal, and military conspiracy, amid Metal Gears (bipedal nuclear tanks), secret organizations, and the fight for control over the flow of global information."
    },
    universes: [
      {
        id: "main",
        name: { it: "Universo principale", en: "Main Universe" },
        span: { it: "1964 – 2018", en: "1964 – 2018" },
        entries: [
          { id: "mgs3", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "1964",
            title: { it: "Metal Gear Solid 3: Snake Eater / Metal Gear Solid Δ: Snake Eater", en: "Metal Gear Solid 3: Snake Eater / Metal Gear Solid Δ: Snake Eater" },
            synopsis: {
              it: "Naked Snake, agente FOX, viene inviato nell'Unione Sovietica per sabotare lo Shagohod, un carro armato nucleare precursore dei Metal Gear, recuperare il disertore Dr. Sokolov ed eliminare la sua mentore The Boss, apparentemente passata al nemico insieme al colonnello rinnegato Volgin. La missione rivela una verità devastante: The Boss era stata sacrificata dal governo americano, incaricata di fingere la defezione per spiare Volgin dall'interno e prevenire una guerra nucleare. Snake la uccide sapendo che era innocente. Per questo gesto viene insignito del titolo di Big Boss, che porta come una cicatrice.",
              en: "Naked Snake, a FOX operative, is sent into the Soviet Union to sabotage the Shagohod — a nuclear-armed tank and precursor to the Metal Gears — recover the defector Dr. Sokolov, and eliminate his mentor The Boss, who has apparently gone over to the enemy alongside the renegade Colonel Volgin. The mission reveals a devastating truth: The Boss had been sacrificed by the American government, tasked with faking her defection to spy on Volgin from within and prevent a nuclear war. Snake kills her knowing she was innocent. For this act he is awarded the title of Big Boss — a name he carries like a scar."
            }
          },
          { id: "portable-ops", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "1970",
            title: { it: "Metal Gear Solid: Portable Ops", en: "Metal Gear Solid: Portable Ops" },
            synopsis: {
              it: "Big Boss viene rapito e imprigionato in Colombia da elementi ribelli della sua ex unità FOX, ora sotto il controllo di Gene, prodotto del \"Successor Project\" americano per creare il perfetto comandante da campo. Accusato di tradimento insieme a Major Zero, Big Boss recluta un esercito di prigionieri e disertori per smantellare FOX. Durante la missione incontra per la prima volta il giovane Frank Jaeger, il futuro Grey Fox, ridotto a pura macchina da guerra attraverso esperimenti militari che gli hanno cancellato memoria ed emozioni. Scopre che Gene intendeva usare un Metal Gear nucleare per colpire gli USA, distruggere i Filosofi e fondare una nazione di soldati indipendente chiamata \"Army's Heaven\". Big Boss sconfigge Gene, che prima di morire gli cede risorse e informazioni. Al suo ritorno fonda la FOXHOUND. Canonico ma considerato capitolo minore, non diretto da Kojima.",
              en: "Big Boss is kidnapped and imprisoned in Colombia by renegade elements of his former unit FOX, now under the control of Gene, a product of the American \"Successor Project\" to create the perfect battlefield commander. Accused of treason alongside Major Zero, Big Boss recruits an army of prisoners and deserters to dismantle FOX. During the mission he encounters the young Frank Jaeger for the first time — the future Grey Fox — reduced to a pure killing machine through military experiments that erased his memories and emotions. He discovers that Gene intended to use a nuclear Metal Gear to strike the USA, destroy the Philosophers, and found an independent nation of soldiers called \"Army's Heaven\". Big Boss defeats Gene, who before dying hands over his resources and intelligence. On his return, Big Boss establishes FOXHOUND. Canonical but considered a minor chapter, not directed by Kojima."
            }
          },
          { id: "peace-walker", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "1974",
            title: { it: "Metal Gear Solid: Peace Walker", en: "Metal Gear Solid: Peace Walker" },
            synopsis: {
              it: "Big Boss e la sua organizzazione mercenaria Militaires Sans Frontières vengono ingaggiati per indagare su un'occupazione militare in Costa Rica. Scoprono che il gruppo CIA rinnegato Peace Sentinel, guidato dall'agente Coldman, sta sviluppando il Peace Walker: un carro armato nucleare quadrupede la cui intelligenza artificiale è modellata sulla personalità di The Boss. Coldman attiva il sistema per dimostrare la validità del deterrente nucleare, ma è l'AI di The Boss stessa che, diventando consapevole, si getta nel lago spezzando il collegamento e salvando il mondo. Nel secondo atto, Paz Ortega si rivela essere una spia di Cipher, l'organizzazione segreta di Major Zero, e tenta di usare il Metal Gear ZEKE per colpire gli USA e ricondurre Big Boss sotto il controllo dei Patrioti. Big Boss la sconfigge e nel finale dichiara la MSF \"Outer Heaven\", nazione di soldati senza bandiera.",
              en: "Big Boss and his mercenary organisation Militaires Sans Frontières are hired to investigate a military occupation in Costa Rica. They discover that the renegade CIA group Peace Sentinel, led by agent Coldman, is developing the Peace Walker: a quadrupedal nuclear tank whose artificial intelligence is modelled on The Boss's personality. Coldman activates the system to prove the validity of nuclear deterrence, but it is The Boss's AI itself that, upon becoming self-aware, walks into the lake severing the connection and saving the world. In the second act, Paz Ortega is revealed to be a spy for Cipher — Major Zero's secret organisation — and attempts to use Metal Gear ZEKE to strike the USA and bring Big Boss back under the Patriots' control. Big Boss defeats her and in the finale declares the MSF \"Outer Heaven\", a nation of soldiers without a flag."
            }
          },
          { id: "ground-zeroes", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "1975",
            title: { it: "Metal Gear Solid V: Ground Zeroes", en: "Metal Gear Solid V: Ground Zeroes" },
            synopsis: {
              it: "Big Boss si infiltra da solo a Camp Omega, base militare americana a Cuba, per salvare Paz e Chico, agenti catturati e torturati dall'unità XOF sotto il comando di Skull Face. Estrae entrambi, ma sull'elicottero di ritorno scoprono che Paz porta una seconda bomba nel corpo: si getta fuori dal velivolo per salvare gli altri, e l'esplosione fa scontrare l'elicottero con un XOF in inseguimento. Nel frattempo Skull Face, usando l'ispezione ONU come copertura, attacca e distrugge la Mother Base. Big Boss sopravvive allo schianto ma rimane gravemente ferito, finendo in coma per nove anni.",
              en: "Big Boss infiltrates Camp Omega alone — an American military black site in Cuba — to rescue Paz and Chico, agents captured and tortured by the XOF unit under the command of Skull Face. He extracts them both, but on the return helicopter they discover that Paz has a second bomb inside her body: she throws herself out of the aircraft to save the others, and the explosion causes the helicopter to collide with a pursuing XOF chopper. Meanwhile, Skull Face uses a UN inspection as cover to attack and destroy Mother Base. Big Boss survives the crash but is gravely wounded, falling into a coma for nine years."
            }
          },
          { id: "mg-survive", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "1975",
            title: { it: "Metal Gear Survive", en: "Metal Gear Survive" },
            synopsis: {
              it: "(1975, immediatamente dopo Ground Zeroes) Durante la distruzione della Mother Base, un wormhole risucchia un gruppo di soldati MSF in una dimensione alternativa chiamata Dite, una versione post-apocalittica della Terra del futuro popolata dai Wanderers: esseri umani trasformati da un'infezione di nanomacchine evolute. Il protagonista, un soldato anonimo personalizzabile dal giocatore, viene inviato in questa dimensione dall'agenzia governativa Wardenclyffe Section per salvare i sopravvissuti e distruggere il Signore della Polvere, la creatura all'origine dell'infezione. Storia autoconclusiva senza conseguenze sulla trama principale. Il produttore stesso ha definito la storia \"apocrifa\". Sviluppato senza Kojima: canonicità molto dibattuta.",
              en: "(1975, immediately after Ground Zeroes) During the destruction of Mother Base, a wormhole pulls a group of MSF soldiers into an alternate dimension called Dite — a post-apocalyptic version of the Earth of the future — populated by Wanderers: human beings transformed by an infection of evolved nanomachines. The protagonist, an anonymous soldier customisable by the player, is sent into this dimension by the government agency Wardenclyffe Section to rescue the survivors and destroy the Lord of Dust, the creature at the origin of the infection. A self-contained story with no consequences on the main plot. The producer himself described the story as \"apocryphal\". Developed without Kojima: canonicity heavily debated."
            }
          },
          { id: "phantom-pain", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "1984",
            title: { it: "Metal Gear Solid V: The Phantom Pain", en: "Metal Gear Solid V: The Phantom Pain" },
            synopsis: {
              it: "Un soldato si risveglia dal coma in un ospedale a Cipro: è Venom Snake, il medico di campo di Ground Zeroes, trasformato chirurgicamente e psicologicamente per sostituire Big Boss come esca per i nemici. Insieme a Ocelot e Miller ricostruisce la Diamond Dogs, dando la caccia a Skull Face: il comandante rinnegato di XOF che intende diffondere un parassita vocale capace di uccidere chi parla determinate lingue per distruggere l'inglese e fare crollare il sistema di controllo globale di Cipher. Il piano di Skull Face include il Metal Gear Sahelanthropus, un bipede di nuova generazione. Skull Face viene sconfitto e lasciato morire, ma il parassita e il Metal Gear rimangono minacce attive fino alla risoluzione definitiva. Il finale rivela che il vero Big Boss era \"Ishmael\", la figura misteriosa che aveva aiutato Venom Snake a fuggire dall'ospedale, e che ha usato il doppio per costruire Outer Heaven nell'ombra.",
              en: "A soldier wakes from a coma in a hospital in Cyprus: he is Venom Snake, the field medic from Ground Zeroes, surgically and psychologically transformed to replace Big Boss as a decoy for his enemies. Together with Ocelot and Miller he rebuilds Diamond Dogs, hunting down Skull Face — the renegade XOF commander who intends to spread a vocal cord parasite capable of killing anyone who speaks certain languages, in order to destroy English and bring down Cipher's global control system. Skull Face's plan includes the Metal Gear Sahelanthropus, a next-generation bipedal weapon. Skull Face is defeated and left to die, but the parasite and the Metal Gear remain active threats until their final resolution. The finale reveals that the real Big Boss was \"Ishmael\" — the mysterious figure who helped Venom Snake escape from the hospital — and that he used his double to build Outer Heaven from the shadows."
            }
          },
          { id: "mg1", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "1995",
            title: { it: "Metal Gear", en: "Metal Gear" },
            synopsis: {
              it: "Solid Snake, recluta di FOXHOUND, viene inviato nella nazione-fortezza di Outer Heaven in Sud Africa per salvare Gray Fox e scoprire la verità sul Metal Gear, un carro armato nucleare bipede. Durante la missione il suo comandante, Big Boss, lo guida via radio fornendogli volutamente consigli sbagliati: Snake è stato mandato come pedina sacrificabile. Scopre che il comandante operativo di Outer Heaven è in realtà Venom Snake, il sosia di Big Boss. Snake distrugge il Metal Gear e sconfigge Venom Snake, che muore nell'esplosione della fortezza.",
              en: "Solid Snake, a FOXHOUND rookie, is sent to the fortified nation of Outer Heaven in South Africa to rescue Gray Fox and uncover the truth behind Metal Gear, a bipedal nuclear tank. During the mission his commanding officer, Big Boss, guides him via radio while deliberately feeding him misleading advice: Snake has been sent in as a expendable pawn. He discovers that the operational commander of Outer Heaven is in fact Venom Snake, Big Boss's body double. Snake destroys Metal Gear and defeats Venom Snake, who dies in the explosion of the fortress."
            }
          },
          { id: "mg2", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "1999",
            title: { it: "Metal Gear 2: Solid Snake", en: "Metal Gear 2: Solid Snake" },
            synopsis: {
              it: "Snake viene richiamato dall'autoesilio in Alaska per infiltrarsi a Zanzibar Land, nazione mercenaria armata di testate nucleari rubate, dove il Dr. Kio Marv è stato rapito insieme alla formula dell'OILIX, un'alga sintetica capace di produrre carburante e risolvere la crisi petrolifera mondiale. Scopre che Big Boss guida Zanzibar Land, e che Gray Fox, ora nemico, pilota il nuovo Metal Gear D. Snake distrugge il Metal Gear e sconfigge Gray Fox in un duello a mani nude in un campo minato. Senza più armi, affronta Big Boss con un lanciafiamme improvvisato fatto da un accendino e una bomboletta spray, sconfiggendolo definitivamente. Big Boss muore per le ferite. Snake torna in esilio in Alaska.",
              en: "Snake is pulled out of self-imposed exile in Alaska to infiltrate Zanzibar Land, a mercenary nation armed with stolen nuclear warheads, where Dr. Kio Marv has been kidnapped along with the formula for OILIX — a synthetic algae capable of producing fuel and solving the global oil crisis. He discovers that Big Boss is leading Zanzibar Land, and that Gray Fox, now an enemy, pilots the new Metal Gear D. Snake destroys the Metal Gear and defeats Gray Fox in a bare-knuckle duel in a minefield. With no weapons left, he faces Big Boss with an improvised flamethrower made from a lighter and an aerosol can, defeating him for the last time. Big Boss dies from his wounds. Snake returns to exile in Alaska."
            }
          },
          { id: "mgs1", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "2005",
            title: { it: "Metal Gear Solid", en: "Metal Gear Solid" },
            synopsis: {
              it: "Solid Snake viene richiamato dall'esilio in Alaska per infiltrarsi nella base nucleare di Shadow Moses, conquistata dai FOXHOUND ribelli guidati da Liquid Snake, gemello biologico di Solid e prodotto come lui del progetto segreto Les Enfants Terribles. Liquid crede di essere il clone \"inferiore\", portatore dei geni recessivi di Big Boss, e nutre un risentimento viscerale verso Solid per questo. Snake scopre di essere stato usato inconsapevolmente come vettore del virus FOXDIE, programmato dal governo per uccidere i membri di FOXHOUND tramite arresto cardiaco e recuperare il Metal Gear REX intatto. Gray Fox, ora cyborg, muore distruggendo a mani nude il sistema radar del REX per renderlo vulnerabile agli attacchi di Snake. Snake distrugge il Metal Gear REX e sconfigge Liquid, che tuttavia muore non per le ferite ma per il FOXDIE stesso. Nell'epilogo, Revolver Ocelot, agente doppio presente durante tutta la missione, si fa trapiantare il braccio di Liquid appena morto: il braccio comincia gradualmente a far emergere la personalità di Liquid attraverso Ocelot, seminando le basi per gli eventi di MGS4.",
              en: "Solid Snake is pulled out of exile in Alaska to infiltrate the nuclear facility at Shadow Moses, seized by renegade FOXHOUND members led by Liquid Snake — Snake's biological twin and, like him, a product of the secret Les Enfants Terribles project. Liquid believes himself to be the \"inferior\" clone, carrying Big Boss's recessive genes, and harbours a visceral resentment toward Solid because of it. Snake discovers he has been unknowingly used as a carrier of the FOXDIE virus, programmed by the government to kill FOXHOUND members via cardiac arrest and recover Metal Gear REX intact. Gray Fox, now a cyborg, dies destroying REX's radar system with his bare hands to leave it vulnerable to Snake's attacks. Snake destroys Metal Gear REX and defeats Liquid, who however dies not from his wounds but from FOXDIE itself. In the epilogue, Revolver Ocelot — a double agent present throughout the entire mission — has Liquid's freshly amputated arm grafted onto himself: the arm gradually begins to bring Liquid's personality to the surface through Ocelot, sowing the seeds for the events of MGS4."
            }
          },
          { id: "mgs2", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "2007–2009",
            title: { it: "Metal Gear Solid 2: Sons of Liberty", en: "Metal Gear Solid 2: Sons of Liberty" },
            synopsis: {
              it: "Diviso in due atti. Nel primo, Snake infiltra un tanker nel porto di New York per fotografare il Metal Gear RAY, nuovo prototipo anfibio. Ocelot tradisce tutti, affonda la nave con il RAY a bordo e Snake viene dato per morto. Nel secondo, due anni dopo, Raiden, giovane soldato senza esperienza sul campo, viene inviato sulla Big Shell, una piattaforma di decontaminazione offshore che nasconde in realtà Arsenal Gear: una fortezza mobile che ospita un'AI dei Patriots programmata per controllare il flusso di informazioni globale. L'intera missione si rivela essere una simulazione orchestrata dai Patriots per verificare se fosse possibile creare un soldato perfetto attraverso il controllo dell'informazione. Il vero antagonista è Solidus Snake, terzo clone di Big Boss ed ex presidente degli USA. Raiden sconfigge Solidus con l'aiuto di Snake, ma i Patriots rimangono nell'ombra, la loro identità irrisolta.",
              en: "Divided into two acts. In the first, Snake infiltrates a tanker in New York Harbor to photograph Metal Gear RAY, a new amphibious prototype. Ocelot betrays everyone, sinks the ship with RAY on board, and Snake is presumed dead. In the second, two years later, Raiden — a young soldier with no field experience — is sent to the Big Shell, an offshore decontamination facility that is in reality concealing Arsenal Gear: a mobile fortress housing a Patriots AI programmed to control the global flow of information. The entire mission is revealed to be a simulation orchestrated by the Patriots to test whether a perfect soldier could be created through the control of information. The true antagonist is Solidus Snake, the third clone of Big Boss and a former US President. Raiden defeats Solidus with Snake's help, but the Patriots remain in the shadows, their identity unresolved."
            }
          },
          { id: "mgs4", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "2014",
            title: { it: "Metal Gear Solid 4: Guns of the Patriots", en: "Metal Gear Solid 4: Guns of the Patriots" },
            synopsis: {
              it: "Solid Snake, invecchiato prematuramente per via della sua genetica clonata, viene inviato a eliminare Liquid Ocelot: in realtà Ocelot si è ipnotizzato per impersonare Liquid e ingannare le AI dei Patriots dall'interno. Nel 2014 il mondo è dominato da un'economia di guerra gestita dai Patriots attraverso PMC globali e nanomacchine impiantate nei soldati. Snake carica il virus FOXALIVE nel sistema AI dei Patriots, distruggendolo definitivamente. Nell'epilogo Big Boss riappare vivo: il corpo bruciato in precedenza era quello di Solidus Snake, usato come sosia. Big Boss uccide Zero, l'ultimo fondatore dei Patriots rimasto in vita, poi muore per un nuovo ceppo di FOXDIE. Snake decide di vivere i suoi ultimi mesi senza più combattere.",
              en: "Solid Snake, prematurely aged due to his cloned genetics, is sent to eliminate Liquid Ocelot: in reality, Ocelot has hypnotised himself to impersonate Liquid and deceive the Patriots' AIs from within. By 2014, the world is dominated by a war economy managed by the Patriots through global PMCs and nanomachines implanted in soldiers. Snake uploads the FOXALIVE virus into the Patriots' AI system, destroying it for good. In the epilogue, Big Boss reappears alive: the body burned previously was that of Solidus Snake, used as a body double. Big Boss kills Zero, the last surviving founder of the Patriots, then dies himself from a new strain of FOXDIE. Snake chooses to live out his remaining months without fighting."
            }
          },
          { id: "mgr", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "2018",
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

  "resident-evil": {
    id: "resident-evil",
    listTitle: { it: "Resident Evil", en: "Resident Evil" },
    eyebrow: { it: "Fascicolo", en: "Case File" },
    title: { it: "Resident Evil", en: "Resident Evil" },
    blurb: { it: "Contenuti in arrivo.", en: "Content coming soon." },
    universes: [
      { id: "main", name: { it: "", en: "" }, span: { it: "", en: "" }, entries: [] }
    ]
  },

  "silent-hill": {
    id: "silent-hill",
    listTitle: { it: "Silent Hill", en: "Silent Hill" },
    eyebrow: { it: "Fascicolo", en: "Case File" },
    title: { it: "Silent Hill", en: "Silent Hill" },
    blurb: {
      it: "Una saga horror psicologico in cui la cittadina di Silent Hill materializza i sensi di colpa, i traumi e i peccati di chiunque vi entri, sotto forma di mostri, nebbia e realtà distorte. Nel corso dei decenni ha intrecciato videogiochi, romanzi, fumetti, manga e una serie TV interattiva, con livelli di canonicità spesso incerti o dibattuti.",
      en: "A psychological horror saga in which the town of Silent Hill materialises the guilt, trauma, and sins of anyone who enters it, in the form of monsters, fog, and distorted realities. Over the decades it has woven together videogames, novels, comics, manga, and an interactive TV series, with levels of canonicity often uncertain or debated."
    },
    universes: [
      {
        id: "main",
        name: { it: "Universo principale", en: "Main Universe" },
        span: { it: "1999 – 2024", en: "1999 – 2024" },
        entries: [
          { id: "past-life", type: "FUMETTO", typeEn: "COMIC", year: "2010",
            title: { it: "Silent Hill: Past Life", en: "Silent Hill: Past Life" },
            synopsis: {
              it: "Il fumetto più antico della saga in termini cronologici in-universe. Jebediah \"Hellrider\" Foster, violento fuorilegge del Dakota Territory, segue la devota vedova Esther Munroe a Silent Hill dopo essersene innamorato: lei ha ereditato una vecchia fattoria e sogna un nuovo inizio. Appena arrivati, la città comincia a materializzare i peccati di Jeb: i fantasmi delle sue vittime si manifestano come abitanti del posto che lo conoscono e lo giudicano, mentre Esther, incinta, è tormentata da visioni di una donna Cherokee di nome Inola. Attraverso flashback emerge la verità sul passato di Jeb: una vita di omicidi a pagamento, culminata nel crimine più oscuro, trovare Inola nel bel mezzo del parto di sua figlia Awinita e uccidere il bambino col coltello. Nel finale la casa prende fuoco mentre Esther partorisce: Inola assiste al parto con lo spettro scheletrico di Awinita, e l'anima della bambina si fonde col neonato di Esther. Jeb crolla tra le braccia di Esther, apparentemente morta; la sua stessa fine rimane ambigua. Fuori dalla casa in fiamme, Inola mostra il neonato al postino Howard Blackwood e lo presenta come sua figlia Awinita, dichiarando che gli spiriti di Silent Hill non sono più silenziosi. Il fumetto stabilisce la natura psicologica e punitiva della città e introduce Howard Blackwood, personaggio che riappare in Downpour.",
              en: "The oldest entry in the saga in chronological in-universe terms. Jebediah \"Hellrider\" Foster, a violent outlaw from the Dakota Territory, follows the devout widow Esther Munroe to Silent Hill after falling for her — she has inherited an old farmhouse and dreams of a fresh start. From the moment they arrive, the town begins to materialise Jeb's sins: the ghosts of his victims appear as townsfolk who recognise and judge him, while Esther, pregnant, is haunted by visions of a Cherokee woman named Inola. Through flashbacks, the truth about Jeb's past comes to light: a life of contract killings, culminating in his darkest crime — finding Inola mid-labour with her daughter Awinita and killing the infant with his knife. In the finale, the house catches fire while Esther gives birth: Inola assists the delivery alongside the skeletal spectre of Awinita, whose soul merges with Esther's newborn. Jeb collapses holding Esther, who appears to be dead; his own fate remains ambiguous. Outside the burning house, Inola presents the baby to postman Howard Blackwood, introducing it as her daughter Awinita and declaring that the spirits of Silent Hill are silent no more. The comic establishes the town's psychological and punitive nature and introduces Howard Blackwood, a character who reappears in Downpour."
            }
          },
          { id: "cage-of-cradle", type: "MANGA", typeEn: "MANGA", year: "2006",
            title: { it: "Silent Hill: Cage of Cradle", en: "Silent Hill: Cage of Cradle" },
            synopsis: {
              it: "Manga digitale pubblicato su cellulare in Giappone, creato dagli stessi autori dei giochi originali. Prequel diretto al primo Silent Hill: Matthew, fidanzato dell'infermiera Lisa Garland, arriva in città nel tentativo di sottrarla al controllo dell'Ordine e del dottor Kaufmann, che la mantiene dipendente dalle droghe in cambio dell'assistenza ad Alessa Gillespie. Secondo le ricostruzioni dei fan, quando Cheryl Mason arriva in città con Harry e la sua presenza amplifica i poteri di Alessa, Matthew viene trascinato nell'Otherworld e muore nel momento in cui Valtiel si manifesta per la prima volta. Lisa, travolta dalla disperazione, tenta di strangolare Alessa, ma Valtiel interviene uccidendo anche lei, che da quel momento è condannata a vagare nell'Otherworld senza sapere di essere morta. Il manga si chiude esattamente quando inizia l'incipit del primo gioco.",
              en: "A digital manga published on mobile phones in Japan, created by the same authors as the original games. A direct prequel to the first Silent Hill: Matthew, boyfriend of nurse Lisa Garland, arrives in town in an attempt to free her from the control of the Order and Dr. Kaufmann, who keeps her dependent on drugs in exchange for her care of Alessa Gillespie. According to fan reconstructions, when Cheryl Mason arrives in town with Harry and her presence amplifies Alessa's powers, Matthew is dragged into the Otherworld and dies at the moment Valtiel manifests for the first time. Lisa, overwhelmed by despair, attempts to strangle Alessa, but Valtiel intervenes and kills her too — from that point on she is condemned to wander the Otherworld without knowing she is dead. The manga closes at the exact moment the opening cutscene of the first game begins."
            }
          },
          { id: "sh-origins", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "2007",
            title: { it: "Silent Hill: Origins", en: "Silent Hill: Origins" },
            synopsis: {
              it: "Prequel al primo gioco. Travis Grady, un camionista con un passato irrisolto, percorre di notte una scorciatoia per Silent Hill e trova una casa in fiamme: dentro c'è una bambina gravemente ustionata stesa su un simbolo rituale, che porta in salvo prima di svenire. Travis si risveglia a Silent Hill, che pullula di mostri. Scopre che la bambina è Alessa Gillespie, che la madre Dahlia ha bruciato viva nell'ambito di un rituale dell'Ordine per far incubare la propria divinità nel corpo della figlia. Travis affronta anche i suoi demoni personali: la madre Helen, internata per le sue visioni di mondi oltre gli specchi, e il padre Richard, suicidatosi in una stanza del motel. Alessa guida silenziosamente Travis attraverso la raccolta dei pezzi del Flauros, artefatto capace di contenere il potere divino. Nell'ending canonico Travis sconfigge il demone imprigionato nel Flauros, liberando il potere di Alessa: lei scinde la propria anima in due, e una metà si manifesta come neonata. Harry e Jodie Mason la trovano sul ciglio della strada e la chiamano Cheryl. Nel dialogo finale Dahlia rassicura Kaufmann: la parte buona tornerà, richiamata dalla sofferenza della sua controparte.",
              en: "A prequel to the first game. Travis Grady, a truck driver with an unresolved past, takes a shortcut through Silent Hill late at night and finds a house on fire: inside is a severely burned young girl lying on a ritual symbol, whom he carries to safety before losing consciousness. Travis wakes up in Silent Hill, overrun with monsters. He discovers that the girl is Alessa Gillespie, whom her mother Dahlia burned alive as part of an Order ritual to incubate their deity inside her daughter's body. Travis also confronts his own personal demons: his mother Helen, committed for her visions of worlds beyond mirrors, and his father Richard, who took his own life in a motel room. Alessa silently guides Travis through the collection of the Flauros pieces, an artifact capable of containing divine power. In the canonical ending, Travis defeats the demon imprisoned within the Flauros, unleashing Alessa's power: she splits her own soul in two, and one half manifests as a newborn infant. Harry and Jodie Mason find her on the roadside and name her Cheryl. In the final dialogue, Dahlia reassures Kaufmann: the pure half will return, drawn back by the suffering of its counterpart."
            }
          },
          { id: "sh1", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "1999",
            title: { it: "Silent Hill", en: "Silent Hill" },
            synopsis: {
              it: "Harry Mason, scrittore e padre adottivo, porta la figlia Cheryl in vacanza a Silent Hill. Sterza per evitare una ragazza in mezzo alla strada e perde i sensi: Cheryl è sparita e la città è avvolta nella nebbia, popolata da mostri. Harry incontra Cybil Bennett, poliziotta di passaggio; Dahlia Gillespie, anziana sacerdotessa dell'Ordine; Michael Kaufmann, medico coinvolto nel traffico di droghe; e Lisa Garland, infermiera che non sa di essere già morta. Dahlia manipola Harry convincendolo che Alessa è una forza demoniaca da fermare e gli consegna il Flauros: quando Harry si avvicina ad Alessa, l'artefatto si attiva da solo neutralizzandola, e Dahlia coglie l'occasione per catturarla. Dahlia rivela la verità: sette anni prima aveva bruciato la figlia viva per far incubare il dio dell'Ordine nel suo corpo, ma Alessa aveva resistito scindendo la propria anima, e Cheryl è la metà fuggita. Ora le due metà si sono riunite e il dio può nascere. Kaufmann, per interesse personale, usa l'aglaophotis per espellere la divinità da Alessa nella forma dell'Incubus, che Harry sconfigge. Alessa dona a Harry un neonato, reincarnazione di se stessa e di Cheryl, e apre un varco verso la salvezza. La bambina crescerà col nome di Heather.",
              en: "Harry Mason, a writer and adoptive father, takes his daughter Cheryl on holiday to Silent Hill. He swerves to avoid a girl in the middle of the road and loses consciousness: Cheryl has vanished and the town is shrouded in fog, overrun with monsters. Harry encounters Cybil Bennett, a police officer passing through; Dahlia Gillespie, an elderly priestess of the Order; Michael Kaufmann, a doctor involved in drug trafficking; and Lisa Garland, a nurse who does not know she is already dead. Dahlia manipulates Harry into believing that Alessa is a demonic force that must be stopped, and hands him the Flauros: when Harry draws close to Alessa, the artifact activates on its own and neutralises her, giving Dahlia the opportunity to capture her. Dahlia then reveals the truth: seven years earlier she had burned her own daughter alive to incubate the Order's deity inside her body, but Alessa had resisted by splitting her soul in two — Cheryl is the half that escaped. Now that the two halves have reunited, the god can be born. Kaufmann, acting out of self-interest, uses the aglaophotis to expel the deity from Alessa in the form of the Incubus, which Harry defeats. Alessa gives Harry a newborn infant, a reincarnation of both herself and Cheryl, and opens a passage to safety. The child will grow up under the name Heather."
            }
          },
          { id: "sh1-novel", type: "NOVEL", typeEn: "NOVEL", year: "1999",
            title: { it: "Silent Hill: The Novel", en: "Silent Hill: The Novel" },
            synopsis: {
              it: "Segue fedelmente gli eventi del videogioco qui sopra aggiungendo approfondimenti sui personaggi: Harry Mason è caratterizzato esplicitamente come scrittore di saggi, con Cybil che dichiara di aver letto un suo libro. Presenta alcune discrepanze minori con la continuità principale: in particolare, la morte della moglie di Harry Jodie è attribuita a un incidente d'auto, mentre il gioco implica una malattia.",
              en: "Faithfully follows the events of the game above, adding depth to the characters: Harry Mason is explicitly characterised as a non-fiction writer, with Cybil mentioning that she has read one of his books. It presents a few minor discrepancies with the main continuity: notably, the death of Harry's wife Jodie is attributed to a car accident, whereas the game implies illness."
            }
          },
          { id: "sh2", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "2001",
            title: { it: "Silent Hill 2 + Born from a Wish", en: "Silent Hill 2 + Born from a Wish" },
            synopsis: {
              it: "James Sunderland riceve una lettera dalla moglie Mary, che crede morta di malattia terminale, in cui lei lo invita al loro \"posto speciale\" a Silent Hill. Arriva in città e trova mostri che la sua mente plasmata dal senso di colpa genera in forme cariche di simbolismo: infermiere sessualizzate che riflettono la sua frustrazione repressa, il gigantesco Pyramid Head evocato dal suo desiderio inconscio di punizione. Incontra Angela, sopravvissuta ad abusi domestici; Eddie, un inadeguato spinto all'omicidio; Laura, bambina immune alle distorsioni della città perché priva di colpa; e Maria, una versione provocante di Mary che James non riesce a tenere in vita. La rivelazione finale: James non ha aspettato che Mary morisse di malattia. L'ha soffocata con un cuscino poco prima di arrivare in città, incapace di reggere la sua degenerazione. La lettera scompare dall'inventario man mano che avanza: non è mai arrivata davvero. Born from a Wish, scenario prequel canonico incluso nelle versioni speciali (di Silent Hill 2 originale, non del remake), mostra Maria nella sua breve esistenza prima di incontrare James: è consapevole della propria natura ambigua e affronta l'incertezza di cosa sia realmente.",
              en: "James Sunderland receives a letter from his wife Mary, whom he believes to have died of a terminal illness, in which she invites him to their \"special place\" in Silent Hill. He arrives in town to find monsters that his guilt-ridden mind generates in forms laden with symbolism: sexualised nurses reflecting his repressed frustration, the towering Pyramid Head summoned by his unconscious desire for punishment. He encounters Angela, a survivor of domestic abuse; Eddie, an inadequate man driven to murder; Laura, a young girl immune to the town's distortions because she carries no guilt; and Maria, a provocative version of Mary that James cannot keep alive. The final revelation: James did not wait for Mary to die of her illness. He smothered her with a pillow shortly before arriving in town, unable to bear her deterioration. The letter fades from his inventory as the game progresses — it never truly arrived. Born from a Wish, a canonical prequel scenario included in the special editions of the original Silent Hill 2 — not the remake — shows Maria in her brief existence before meeting James: she is aware of her own ambiguous nature and confronts the uncertainty of what she truly is."
            }
          },
          { id: "sh2-novel", type: "NOVEL", typeEn: "NOVEL", year: "2002",
            title: { it: "Silent Hill 2: The Novel", en: "Silent Hill 2: The Novel" },
            synopsis: {
              it: "Novelizzazione ufficiale del secondo videogioco, scritta da Sadamu Yamashita con illustrazioni di Masahiro Ito. Disponibile in giapponese con traduzione fan-made di Lady Ducky. Segue fedelmente gli eventi del gioco approfondendo il background dei personaggi. Non contraddice la continuità principale e può essere considerata canonica, ma resta fonte secondaria poiché non è noto se Yamashita abbia ricevuto note ufficiali dalla sceneggiatura originale di Hiroyuki Owaku.",
              en: "Official novelisation of the second videogame, written by Sadamu Yamashita with illustrations by Masahiro Ito. Available in Japanese with a fan-made translation by Lady Ducky. Faithfully follows the events of the game while expanding on the characters' backgrounds. It does not contradict the main continuity and can be considered canonical, but remains a secondary source since it is unknown whether Yamashita received official notes from Hiroyuki Owaku's original screenplay."
            }
          },
          { id: "double-under-dusk", type: "MANGA", typeEn: "MANGA", year: "2007",
            title: { it: "Silent Hill: Double Under Dusk", en: "Silent Hill: Double Under Dusk" },
            synopsis: {
              it: "Secondo manga digitale della coppia Ito/Owaku, e secondo Masahiro Ito un sequel diretto della serie iniziata con Cage of Cradle. Ambientato sull'isola nel mezzo del Lago Toluca vista nell'ending \"Rebirth\" di Silent Hill 2, ma in un edificio diverso dalla Church of the Rebirth. Brian Dawson, un uomo sulla quarantina di Augusta nel Maine, ha perso l'amato figlio Ronny e da quel momento vive in apatia emotiva, perdendo lavoro e matrimonio. Incontra Lindsay Crystal, una giovane studentessa di folklore dall'aspetto identico alla donna che appare nei suoi incubi, che si trova ad Augusta per ricercare Silent Hill, \"una città dove i morti ritornano\". Insieme si recano a Silent Hill. Come Cage of Cradle, il manga è quasi interamente perduto: mai tradotto, mai pubblicato fisicamente, il sito originale è dismesso.",
              en: "Second digital manga by the Ito/Owaku duo, and according to Masahiro Ito a direct sequel to the series begun with Cage of Cradle. Set on the island in the middle of Toluca Lake seen in the \"Rebirth\" ending of Silent Hill 2, but in a different building from the Church of the Rebirth. Brian Dawson, a man in his early forties from Augusta, Maine, has lost his beloved son Ronny and since then has been living in emotional apathy, losing both his job and his marriage. He encounters Lindsay Crystal, a young folklore student whose appearance is identical to the woman who appears in his nightmares, who has come to Augusta to research Silent Hill — \"a town where the dead return.\" Together they travel to Silent Hill. Like Cage of Cradle, the manga is almost entirely lost: never translated, never published in physical form, the original site has been shut down."
            }
          },
          { id: "sh-arcade", type: "CABINATO ARCADE", typeEn: "ARCADE", year: "2007",
            title: { it: "Silent Hill: The Arcade", en: "Silent Hill: The Arcade" },
            synopsis: {
              it: "Light gun shooter spin-off, unico gioco arcade della saga. Nel novembre 1918 il battello turistico Little Baroness scompare nel Lago Toluca con 14 passeggeri a bordo: la storia vera, ricostruita nel corso del gioco, è che la madre di Hanna, bambina malata a bordo, l'ha gettata in acqua, e immediatamente dopo la nave è affondata. Settantacinque anni dopo, nel novembre 1993, un gruppo di studenti universitari del club dell'occulto si reca a Silent Hill. Eric, il cui bisnonno era il capitano della Little Baroness, e la sua amica Tina devono salvare la piccola Emilie Anderson, attirata verso il lago dalla voce di quella che crede sia la madre morta, in realtà il fantasma di Lorraine, madre di Hanna. La città li trascina attraverso luoghi iconici della saga. Il boss finale è Hanna, la bambina del 1918 trasformata in creatura mostruosa conosciuta come the Phantom, e liberata nell'ending canonico. Il gioco approfondisce la storia della Little Baroness, citata in un documento di SH2, e conferma date precise della timeline della città.",
              en: "Light gun shooter spin-off, the only arcade game in the saga. In November 1918, the tourist steamboat Little Baroness disappears on Toluca Lake with 14 passengers on board: the true story, reconstructed over the course of the game, is that Hanna's mother — a sickly young girl aboard — threw her daughter into the water, and the ship sank immediately afterwards. Seventy-five years later, in November 1993, a group of university students from the occult club travel to Silent Hill. Eric, whose great-grandfather was the captain of the Little Baroness, and his friend Tina must save young Emilie Anderson, drawn towards the lake by the voice of who she believes to be her dead mother — in reality the ghost of Lorraine, Hanna's mother. The town drags them through iconic locations from the saga. The final boss is Hanna, the girl from 1918 transformed into a monstrous creature known as the Phantom, and freed in the canonical ending. The game expands on the history of the Little Baroness, referenced in a document in SH2, and confirms precise dates in the town's timeline."
            }
          },
          { id: "sh4", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "2004",
            title: { it: "Silent Hill 4: The Room", en: "Silent Hill 4: The Room" },
            synopsis: {
              it: "Ultimo gioco sviluppato da Team Silent, originariamente concepito come progetto separato non legato alla saga. Henry Townshend si risveglia nel suo appartamento al numero 302 del complesso South Ashfield Heights, a un'ora di auto da Silent Hill: la porta è sbarrata dall'interno con catene, le finestre inchiodate, il telefono muto. Dopo cinque giorni un buco appare nel muro del bagno e Henry lo attraversa, ritrovandosi in dimensioni distorte. Scopre che il serial killer Walter Sullivan, che anni prima si era suicidato in cella come parte del proprio rituale, ha trasferito il proprio spirito nella sua forma cadaverica nascosta nell'appartamento e sta portando a termine i \"21 Sacramenti\": 21 omicidi con caratteristiche simboliche precise per risvegliare la sua \"madre\", la stanza 302 in cui era nato e dove era stato abbandonato dai genitori. Henry è la ventunesima vittima designata. Con il cordone ombelicale di Walter e otto lance sacre, Henry spezza il rituale. Nessun ending è stato dichiarato ufficialmente canonico. Il condominio è gestito da Frank Sunderland, padre di James Sunderland di SH2. Gli omicidi di Walter hanno demolito anche le ultime fazioni organizzate dell'Ordine a Silent Hill.",
              en: "The last game developed by Team Silent, originally conceived as a separate project unrelated to the saga. Henry Townshend wakes up in his apartment, Room 302 of the South Ashfield Heights complex, an hour's drive from Silent Hill: the door is chained shut from the inside, the windows are nailed shut, the phone is dead. After five days, a hole appears in the bathroom wall and Henry crawls through it, finding himself in distorted dimensions. He discovers that serial killer Walter Sullivan, who years earlier had taken his own life in his cell as part of his own ritual, transferred his spirit into his cadaverous form hidden in the apartment and is carrying out the \"21 Sacraments\": 21 murders with precise symbolic characteristics, intended to awaken his \"mother\" — Room 302, where he was born and immediately abandoned by his parents. Henry is the designated twenty-first victim. Using Walter's umbilical cord and eight holy spears, Henry breaks the ritual. No ending has been officially declared canonical. The building is managed by Frank Sunderland, father of James Sunderland from SH2. Walter's murders also dismantled the last organised factions of the Order in Silent Hill."
            }
          },
          { id: "sh3", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "2003",
            title: { it: "Silent Hill 3", en: "Silent Hill 3" },
            synopsis: {
              it: "Sequel diretto di Silent Hill 1, unico capitolo con struttura narrativa apertamente continua. Heather Mason è una diciassettenne che Harry Mason ha cresciuto lontano da Silent Hill. In un centro commerciale viene avvicinata da Claudia Wolf, alta sacerdotessa di una nuova fazione dell'Ordine, che le dice di ricordare il suo \"vero sé\". Tornata a casa, Heather trova Harry assassinato su ordine di Claudia, che ha deliberatamente orchestrato il delitto per riempire Heather di odio e nutrire così il feto divino che cresce dentro di lei. Decide di raggiungere Silent Hill per vendicarsi. In città scopre di essere la reincarnazione di Alessa Gillespie: porta dentro di sé il feto del dio dell'Ordine. Al Brookhaven Hospital affronta Leonard Wolf, padre folle di Claudia. Nella chiesa, Claudia uccide il sacerdote ribelle Vincent e intima a Heather di accettare la nascita del dio. Heather ingoia la capsula di Aglaophotis nascosta da Harry nel suo ciondolo, espellendo il feto divino. Claudia, disperata, lo ingerisce lei stessa per diventare il vaso del dio. La divinità nata da Claudia viene sconfitta da Heather. L'Ordine come organizzazione religiosa strutturata è definitivamente distrutto. La storia di Alessa Gillespie, iniziata nel primo gioco, si chiude.",
              en: "A direct sequel to the Silent Hill 1, the only entry with an openly continuous narrative structure. Heather Mason is a seventeen-year-old girl raised far from Silent Hill by Harry Mason. At a shopping centre she is approached by Claudia Wolf, high priestess of a new faction of the Order, who tells her to remember her \"true self\". Returning home, Heather finds Harry murdered on Claudia's orders — she deliberately orchestrated the killing to fill Heather with hatred and thereby nourish the divine foetus growing inside her. Heather decides to travel to Silent Hill for revenge. In the town she discovers she is the reincarnation of Alessa Gillespie and carries the Order's deity as a foetus. At Brookhaven Hospital she confronts Leonard Wolf, Claudia's deranged father. In the church, Claudia kills the renegade priest Vincent and demands that Heather accept the birth of God. Heather swallows the capsule of Aglaophotis that Harry had hidden inside her pendant, expelling the divine foetus. A desperate Claudia ingests it herself to become the vessel of God. The deity born from Claudia is defeated by Heather. The Order as a structured religious organisation is definitively destroyed. The story of Alessa Gillespie, begun in the first game, comes to a close."
            }
          },
          { id: "sh3-novel", type: "NOVEL", typeEn: "NOVEL", year: "2007",
            title: { it: "Silent Hill 3: The Novel", en: "Silent Hill 3: The Novel" },
            synopsis: {
              it: "Novelizzazione ufficiale del terzo gioco, scritta da Sadamu Yamashita con illustrazioni di Masahiro Ito. Pubblicata nel 2007, disponibile in giapponese con traduzione fan-made di Wyntr. Include sezioni dal punto di vista di personaggi secondari oltre a Heather. Come le precedenti novelizzazioni di Yamashita, ha status semi-canonico rispetto al gioco originale.",
              en: "Official novelisation of the third game, written by Sadamu Yamashita with illustrations by Masahiro Ito. Published in 2007, available in Japanese with a fan-made translation by Wyntr. Includes sections from the point of view of secondary characters alongside Heather. Like Yamashita's previous novelisations, it has semi-canonical status relative to the original game."
            }
          },
          { id: "sinners-reward", type: "FUMETTO", typeEn: "COMIC", year: "2008",
            title: { it: "Silent Hill: Sinner's Reward", en: "Silent Hill: Sinner's Reward" },
            synopsis: {
              it: "Jack \"The Pup\" Stanton è un sicario della mafia irlandese che fugge col grande amore della sua vita, Jillian Conway, moglie del suo boss Finn. Durante la fuga il gruppo viene attaccato e Jillian trascinata a Silent Hill. Jack la segue e la città gli mostra i fantasmi delle sue vittime trasfigurati nei mostri. La verità emergente è la più pesante: l'ultima missione di Jack per Finn era l'omicidio del consigliere comunale Linwood e di sua moglie, ma uscendo dalla scena del crimine Jack ha trovato la loro figlia Sara e l'ha uccisa per eliminare la testimone. Sara, nelle viscere di Silent Hill, è ancora lì. Jillian, processata per aver vissuto sul sangue versato da Finn, sceglie di farsi uccidere dalle infermiere come atto di redenzione. Pyramid Head elimina Finn quando questi arriva in città. Jack, in ginocchio davanti allo spettro di Sara, esaurisce ogni tentativo di scusa e si spara in tempia. La storia introduce il concetto di Silent Hill come luogo di giudizio morale, indipendentemente dalla mitologia dell'Ordine.",
              en: "Jack \"The Pup\" Stanton is a hitman for the Irish mob who flees with the great love of his life, Jillian Conway, the wife of his boss Finn. During the escape the group is ambushed and Jillian is dragged into Silent Hill. Jack follows her and the town shows him the ghosts of his victims transformed into monsters. The heaviest truth to emerge: Jack's final job for Finn was the murder of city councillor Linwood and his wife, but as he was leaving the crime scene Jack found their daughter Sara and killed her to eliminate the witness. Sara, deep within Silent Hill, is still there. Jillian, judged for having lived off the blood money spilled by Finn, chooses to let the nurses kill her as an act of redemption. Pyramid Head eliminates Finn when he arrives in town. Jack, on his knees before Sara's ghost, exhausts every attempt at an apology and shoots himself in the temple. The story introduces the concept of Silent Hill as a place of moral judgement, independent of the Order's mythology."
            }
          },
          { id: "homecoming", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "2008",
            title: { it: "Silent Hill: Homecoming", en: "Silent Hill: Homecoming" },
            synopsis: {
              it: "Primo capitolo prodotto da uno studio americano. Alex Shepherd torna a casa da quello che crede essere un periodo in ospedale per ferite di guerra, ma in realtà è stato rinchiuso in una struttura psichiatrica dopo aver causato accidentalmente la morte del fratello minore Josh, annegato in un incidente in barca. Il paesino natale di Shepherd's Glen è deserto e avvolto dall'Otherworld. Centocinquanta anni prima le quattro famiglie fondatrici della città stipularono un patto con l'entità di Silent Hill: ogni cinquant'anni devono sacrificare uno dei propri figli con un metodo specifico per clan. Alex era la vittima designata dagli Shepherd, ma la morte accidentale di Josh al suo posto, non prevista e non voluta, ha rotto il patto scatenando l'Otherworld sulla città. Nel corso del gioco Alex affronta le manifestazioni mostruose dei figli sacrificati dalle altre famiglie. Il detective Wheeler e l'amica d'infanzia Elle affiancano Alex in parte del percorso. Alex sconfigge il boss finale Amnion, manifestazione dello spirito di Josh, e fa pace con il passato. Nessun ending è stato dichiarato ufficialmente canonico.",
              en: "The first entry developed by an American studio. Alex Shepherd returns home from what he believes to have been a period in hospital recovering from war wounds, but in reality he was committed to a psychiatric facility after accidentally causing the death of his younger brother Josh, who drowned in a boating accident. His hometown of Shepherd's Glen is deserted and consumed by the Otherworld. One hundred and fifty years earlier, the four founding families of the town struck a pact with the entity of Silent Hill: every fifty years they must sacrifice one of their children in a method specific to each clan. Alex was the designated Shepherd sacrifice, but Josh's accidental death in his place — unforeseen and unintended — broke the pact and unleashed the Otherworld upon the town. Over the course of the game, Alex faces the monstrous manifestations of the children sacrificed by the other families. Deputy Wheeler and childhood friend Elle accompany Alex for part of the journey. Alex defeats the final boss Amnion, a manifestation of Josh's spirit, and comes to terms with his past. No ending has been officially declared canonical."
            }
          },
          { id: "downpour", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "2012",
            title: { it: "Silent Hill: Downpour", en: "Silent Hill: Downpour" },
            synopsis: {
              it: "Murphy Pendleton, detenuto al carcere di Ryall, ha orchestrato di farsi mettere nella stessa doccia del pedofilo Patrick Napier, responsabile della morte del figlio Charlie, e lo aggredisce. Una guardia corrotta, George Sewell, aveva facilitato l'incontro in cambio di un favore: Murphy avrebbe dovuto uccidere il rispettato agente Frank Coleridge. Murphy non ci riesce e Sewell, furioso, pesta Coleridge quasi a morte e incolpa Murphy. Coleridge sopravvive ma rimane paralizzato. Anni dopo, durante un trasferimento, il bus precipita appena fuori Silent Hill. Murphy fugge e viene inseguito dall'agente Anne Cunningham, figlia di Frank, convinta che Murphy abbia ridotto suo padre in quello stato. Silent Hill non ha legami con l'Ordine in questo capitolo: risponde esclusivamente al senso di colpa di Murphy. Il Bogeyman, il mostro principale, è la proiezione del suo istinto vendicativo. Nell'ending canonico un flashback rivela ad Anne la verità: è stato Sewell a pestare e pugnalare Coleridge, incolpando poi Murphy. Anne capisce l'innocenza di Murphy, lo perdona e lo lascia andare dichiarandolo morto nell'incidente.",
              en: "Murphy Pendleton, an inmate at Ryall Prison, arranges to be placed in the same shower as paedophile Patrick Napier, responsible for the death of his son Charlie, and attacks him. A corrupt guard, George Sewell, had facilitated the encounter in exchange for a favour: Murphy was supposed to kill the respected officer Frank Coleridge. Murphy cannot bring himself to do it, and Sewell, furious, beats Coleridge to within an inch of his life and frames Murphy for the crime. Coleridge survives but is left paralysed. Years later, during a prison transfer, the bus crashes just outside Silent Hill. Murphy escapes and is pursued by officer Anne Cunningham, Frank's daughter, convinced that Murphy was responsible for her father's condition. Silent Hill has no connection to the Order in this entry: it responds exclusively to Murphy's guilt. The Bogeyman, the game's main monster, is the projection of his vengeful instincts. In the canonical ending, a flashback reveals the truth to Anne: it was Sewell who beat and stabbed Coleridge and then framed Murphy. Anne understands Murphy's innocence, forgives him, and lets him go, reporting him as dead in the accident."
            }
          },
          { id: "annes-story", type: "FUMETTO", typeEn: "COMIC", year: "2014",
            title: { it: "Silent Hill: Anne's Story", en: "Silent Hill: Anne's Story" },
            synopsis: {
              it: "Tie-in diretto a Downpour che mostra gli stessi eventi dal punto di vista di Anne Marie Cunningham. Anne ha sacrificato tutto per avvicinarsi a Murphy: ha avuto una relazione con il direttore del carcere per ottenere un trasferimento, perdendo il matrimonio e la reputazione. Silent Hill le mostra la sua versione dell'Otherworld: il padre Frank invalido trasformato nella presenza ricorrente del Wheelman, la sua ossessione per la vendetta trasfigurata in mostri. Nel corso della sua esperienza parallela a quella di Murphy, Anne comprende che la vendetta non risolverà nulla. Il quarto numero conferma il finale \"Truth and Justice\" come il finale canonico di Downpour, e mostra Anne che torna a Ryall per confrontarsi con Sewell, l'uomo davvero responsabile della sorte del padre. È il primo fumetto IDW ad avere un legame diretto confermato con un gioco della saga.",
              en: "A direct tie-in to Downpour showing the same events from Anne Marie Cunningham's point of view. Anne has sacrificed everything to get close to Murphy — she had a relationship with the prison warden to secure a transfer, losing her marriage and her reputation in the process. Silent Hill shows her its own version of the Otherworld: her invalid father Frank transformed into the recurring presence of the Wheelman, her obsession with revenge twisted into monsters. Over the course of her experience running parallel to Murphy's, Anne comes to understand that revenge will solve nothing. The fourth issue confirms \"Truth and Justice\" as the canonical ending of Downpour, and shows Anne returning to Ryall to confront Sewell — the man truly responsible for her father's fate. It is the first IDW comic to have a directly confirmed connection to a game in the saga."
            }
          },
          { id: "ascension", type: "SERIE TV CGI INTERATTIVA", typeEn: "INTERACTIVE CGI TV SERIES", year: "2023",
            title: { it: "Silent Hill: Ascension", en: "Silent Hill: Ascension" },
            synopsis: {
              it: "Serie CGI televisiva interattiva trasmessa in diretta per sei mesi, in cui il pubblico mondiale votava quotidianamente per determinare l'esito degli episodi. Segue due nuclei familiari in luoghi diversi del mondo: la famiglia Hernandez a Hope's Junction, Pennsylvania, e la famiglia Johansen a Stilledalen, un villaggio di pescatori in Norvegia, entrambi tormentati da manifestazioni dei loro traumi e dalle macchinazioni di un culto locale. Prima produzione Silent Hill deliberatamente ambientata fuori dalla città omonima: il produttore Motoi Okamoto ha dichiarato l'obiettivo di rendere \"Silent Hill\" sinonimo di horror psicologico in quanto genere, non in quanto luogo geografico. Le decisioni del pubblico sono diventate canone permanente senza possibilità di reset. Il prodotto ha ricevuto recensioni molto negative per qualità tecnica, scrittura e modello di monetizzazione. Il suo status canonico rispetto al resto della saga è considerato dibattuto dalla comunità.",
              en: "An interactive CGI television series broadcast live for six months, in which a worldwide audience voted daily to determine the outcome of episodes. It follows two families in different parts of the world: the Hernandez family in Hope's Junction, Pennsylvania, and the Johansen family in Stilledalen, a fishing village in Norway — both tormented by manifestations of their traumas and the machinations of a local cult. The first Silent Hill production deliberately set outside the titular town: producer Motoi Okamoto stated the goal of making \"Silent Hill\" synonymous with psychological horror as a genre, rather than a geographical location. The audience's decisions became permanent canon with no possibility of a reset. The product received overwhelmingly negative reviews for its technical quality, writing, and monetisation model. Its canonical status relative to the rest of the saga is considered a matter of debate within the community."
            }
          },
          { id: "short-message", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "2024",
            title: { it: "Silent Hill: The Short Message", en: "Silent Hill: The Short Message" },
            synopsis: {
              it: "Esperienza gratuita per PS5, breve (circa due ore) e senza combattimento. Anita Planert, adolescente depressa di Kettenstadt, città tedesca economicamente depressa, riceve un messaggio dal numero della sua amica Maya Hindenburg, famosa artista graffiti online nota come \"Cherry Blossom\", che la invita alla Villa: un palazzo abbandonato noto come luogo di suicidio tra le ragazze del posto. Maya si era buttata dal tetto mesi prima. Anita entra e si ritrova in un loop temporale che amplifica il suo senso di colpa rivelando gradualmente la verità: aveva trovato una lettera di Maya indirizzata all'amica comune Amelie, in cui chiedeva aiuto. Per gelosia l'aveva nascosta e si era scontrata con Maya, aggravandone la disperazione. Il mostro che la insegue, il Sakura Head, è la materializzazione della sua colpa incarnata nell'immagine dell'amica. Dopo tre loop attraverso la Villa e la propria infanzia dolorosa, Anita si ferma sull'orlo del tetto grazie a una chiamata di Amelie, che spezza il ciclo. Il gioco si chiude con un post sui social di Amelie che mostra le due partite per il college, lasciandosi il passato alle spalle.",
              en: "A free PS5 experience, brief — around two hours — and without combat. Anita Planert, a depressed teenager from Kettenstadt, an economically depressed German town, receives a message from the number of her friend Maya Hindenburg, a celebrated online graffiti artist known as \"Cherry Blossom\", inviting her to the Villa: an abandoned building notorious as a suicide spot among local girls. Maya had jumped from the roof months earlier. Anita enters and finds herself caught in a time loop that amplifies her guilt while gradually revealing the truth: she had found a letter from Maya addressed to their mutual friend Amelie, in which she asked for help. Out of jealousy, Anita had hidden it and confronted Maya, worsening her despair. The monster that pursues her — Sakura Head — is the materialisation of her guilt embodied in the image of her friend. After three loops through the Villa and her own painful childhood, Anita stops at the edge of the roof thanks to a call from Amelie, which breaks the cycle. The game closes with a social media post by Amelie showing the two of them leaving for college, putting the past behind them."
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
      it: "L'universo condiviso di Remedy Entertainment, costruito attorno al concetto di Altered World Event: fenomeni paranormali indagati e insabbiati da un'agenzia governativa segreta, che intrecciano scrittori intrappolati in dimensioni parallele, edifici che sfidano la geografia ed entità capaci di riscrivere la realtà attraverso la creatività umana.",
      en: "Remedy Entertainment's shared universe, built around the concept of the Altered World Event: paranormal phenomena investigated and covered up by a secret government agency, weaving together writers trapped in parallel dimensions, buildings that defy geography, and entities capable of rewriting reality through human creativity."
    },
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
          { id: "alan-wake", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "2010",
            title: { it: "Alan Wake", en: "Alan Wake" },
            synopsis: {
              it: "Alan Wake è uno scrittore famoso in crisi creativa che arriva a Bright Falls con la moglie Alice in cerca di ispirazione. Quando Alice scompare nel lago di Cauldron Lake, una soglia verso il Luogo Oscuro, Alan inizia a trovare pagine di un manoscritto horror che non ricorda di aver scritto, ma che descrive gli eventi che si stanno verificando intorno a lui in tempo reale. La Presenza Oscura, un'entità che abita il Luogo Oscuro, sta usando la sua capacità creativa per manifestarsi nel mondo reale attraverso i Posseduti: persone e oggetti corrotti dall'oscurità, che può essere bruciata via dalla luce. Alan scopre che Thomas Zane, un poeta finlandese scomparso nel 1970, era rimasto intrappolato nel Luogo Oscuro e aveva cercato di combattere la Presenza Oscura con la stessa arma: la scrittura. Il gioco si conclude con Alan che si tuffa nel lago per liberare Alice, prendendo il suo posto nel Luogo Oscuro.\n\nI DLC Il Segnale (The Signal) e Lo Scrittore (The Writer) sono parte integrante del canone e mostrano Alan nel Luogo Oscuro mentre inizia a lavorare su un nuovo manoscritto chiamato Ritorno (Return), quello che porterà agli eventi di Alan Wake 2.",
              en: "Alan Wake is a famous writer struggling with creative block who arrives in Bright Falls with his wife Alice looking for inspiration. When Alice disappears into Cauldron Lake — a Threshold to the Dark Place — Alan begins finding pages of a horror manuscript he has no memory of writing, yet which describes the events unfolding around him in real time. The Dark Presence, an entity dwelling in the Dark Place, is using his creative ability to manifest in the real world through the Taken: people and objects corrupted by darkness, which can be burned away by light. Alan discovers that Thomas Zane — a Finnish poet who vanished in 1970 — had been trapped in the Dark Place and had tried to fight the Dark Presence with the same weapon: writing. The game concludes with Alan diving into the lake to free Alice, taking her place in the Dark Place.\n\nThe DLC expansions The Signal and The Writer are an integral part of the canon and show Alan in the Dark Place as he begins working on a new manuscript called Return — the one that will lead directly into the events of Alan Wake 2."
            }
          },
          { id: "house-of-dreams", type: "BLOG", typeEn: "BLOG", year: "2012",
            title: { it: "This House of Dreams", en: "This House of Dreams" },
            synopsis: {
              it: "Blog ARG pubblicato nel corso del 2012 e confermato canonico da Sam Lake nello stesso anno. Racconta gli strani eventi nella vita di una donna di nome Samantha Wells dopo che si trasferisce a Ordinary, Maine, la città di Jesse Faden, con riferimenti alla poesia di Thomas Zane e ad altri elementi dell'universo Alan Wake. Control menziona direttamente il blog su una lavagna nel Centro di Ricerca (Central Research), indicando che l'FBC ha monitorato Samantha e confiscato temporaneamente una scatola da scarpe appartenente a lei. Nel DLC The Lake House di Alan Wake 2 appare un documento con l'URL reale del blog, classificato come attività para-utilitariana.",
              en: "An ARG blog published throughout 2012 and confirmed canonical by Sam Lake the same year. It chronicles the strange events in the life of a woman named Samantha Wells after she moves to Ordinary, Maine — Jesse Faden's hometown — with references to Thomas Zane's poetry and other elements of the Alan Wake universe. Control directly references the blog on a whiteboard in Central Research, indicating that the FBC had been monitoring Samantha and temporarily confiscated a shoebox belonging to her. In Alan Wake 2's The Lake House DLC, a document appears bearing the blog's real-world URL, classified as parautilitarian activity."
            }
          },
          { id: "american-nightmare", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "2012",
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
          { id: "control", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "2019",
            title: { it: "Control", en: "Control" },
            synopsis: {
              it: "Jesse Faden arriva all'Oldest House, la sede dell'FBC, cercando risposte sulla scomparsa di suo fratello Dylan durante un AWE nella loro città natale, Ordinary, Maine. Trovando il Direttore appena assassinato, Jesse viene scelta dall'Arma di Servizio, un oggetto di potere che designa i Direttori, e si ritrova improvvisamente a capo dell'agenzia nel peggior momento possibile: un'entità chiamata l'Hiss ha infettato la maggior parte degli agenti dell'Oldest House, trasformandoli in strumenti ostili. Jesse deve contenere la minaccia, liberare suo fratello Dylan, che l'Hiss aveva usato come tramite per entrare nell'edificio, e capire la natura dell'Oldest House stessa. Nel corso del gioco scopre che l'FBC conosce l'esistenza di Alan Wake e degli eventi di Bright Falls, classificati come AWE. Dylan, classificato come potenziale Direttore, è tenuto recluso nel Panopticon. Jesse chiude il portale dell'Hiss e sopravvive, diventando Direttore operativo dell'FBC.\n\nIl DLC Le Fondamenta (The Foundation) esplora le origini dell'Oldest House e introduce la Board, le entità soprannaturali che guidano l'FBC dall'esterno.\n\nL'espansione Control: AWE è il primo crossover ufficiale dell'RCU. Jesse Faden esplora il Settore Investigativo (l'Investigation Sector) dell'Oldest House, il reparto che studia i casi di AWE, e trova evidenze degli eventi di Bright Falls del 2010. Alan Wake appare direttamente attraverso messaggi sulla hotline, guidando Jesse e rivelando il suo stato attuale: ancora intrappolato nel Luogo Oscuro, sta cercando di far sì che Jesse lo liberi. Il DLC introduce il concetto che i Posseduti del Luogo Oscuro e l'Hiss condividono caratteristiche di corruzione simili, suggerendo connessioni tra le due minacce. Il finale mostra Jesse che riceve un segnale di un nuovo AWE imminente a Bright Falls: il setup diretto per Alan Wake 2.",
              en: "Jesse Faden arrives at the Oldest House — the FBC's headquarters — searching for answers about her brother Dylan's disappearance during an AWE in their hometown of Ordinary, Maine. Finding the Director freshly murdered, Jesse is chosen by the Service Weapon, an Object of Power that designates Directors, and finds herself suddenly in charge of the agency at the worst possible moment: an entity known as the Hiss has infected most of the Oldest House's agents, turning them into hostile instruments. Jesse must contain the threat, free her brother Dylan — whom the Hiss had used as a conduit to enter the building — and unravel the true nature of the Oldest House itself. Over the course of the game she discovers that the FBC is aware of Alan Wake's existence and the Bright Falls events, classified as an AWE. Dylan, designated a potential Director, is held in the Panopticon. Jesse closes the Hiss portal and survives, becoming the FBC's acting Director.\n\nThe Foundation DLC explores the origins of the Oldest House and introduces the Board — the supernatural entities that guide the FBC from outside.\n\nThe AWE expansion is the RCU's first official crossover. Jesse Faden explores the Oldest House's Investigation Sector — the department that handles AWE cases — and finds evidence of the 2010 Bright Falls events. Alan Wake appears directly through hotline messages, guiding Jesse and revealing his current situation: still trapped in the Dark Place, he is trying to ensure Jesse will free him. The DLC introduces the concept that the Dark Place's Taken and the Hiss share similar corruption traits, suggesting deeper connections between the two threats. The finale shows Jesse receiving a signal of an imminent new AWE in Bright Falls — the direct setup for Alan Wake 2."
            }
          },
          { id: "alan-wake-2", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "2023",
            title: { it: "Alan Wake 2", en: "Alan Wake 2" },
            synopsis: {
              it: "Tredici anni dopo la scomparsa di Alan Wake, una serie di omicidi rituali scuote Bright Falls. L'agente dell'FBI Saga Anderson arriva per indagare e scopre che le vittime recano simboli riconducibili al Cult of the Tree, adoratori della Presenza Oscura. Nel Luogo Oscuro, Alan sta finalmente completando il manoscritto Return, la storia che potrebbe liberarlo, ma deve fare i conti con Mr. Scratch, che cerca di prendere il suo posto nel mondo reale. Le due storie si specchiano e si intrecciano: ogni scelta di Alan nel Luogo Oscuro si riflette sulla realtà di Saga e viceversa. L'FBC è presente in modo significativo: Jesse Faden e Casper Darling appaiono nel gioco. Il finale vede Alan completare il manoscritto e liberarsi del Luogo Oscuro nella versione New Game Plus (Final Draft), mentre Alice lo aiuta dall'esterno attraverso una serie di video-diari usati come ancora alla realtà.\n\nIl DLC Night Springs mostra tre episodi, dell'omonimo show televisivo Night Springs, scritti da Alan Wake nel Luogo Oscuro come ulteriori tentativi di plasmare la realtà prima di completare Return. Gli episodi sono scenari alternativi con versioni fittizie di personaggi reali dell'RCU: la Number One Fan (basata su Rose Marigold), North Star (basata su Jesse Faden) e Time Breaker, con l'attore Shawn Ashmore che si interpreta nel metatestuale ruolo di se stesso, in un episodio che allude direttamente a Quantum Break senza nominarla esplicitamente. Gli eventi non si materializzano nel mondo reale ma arricchiscono la lore dell'universo.\n\nIl DLC The Lake House è un crossover diretto tra Alan Wake 2 e Control. L'agente FBC Kiran Estevez, introdotta nel gioco principale, è la protagonista giocabile per la prima volta. Deve investigare su una struttura di ricerca FBC situata sulla riva di Cauldron Lake che ha smesso di rispondere. I due ricercatori a capo della struttura, Jules e Diana Marmont, avevano condotto esperimenti sempre più illeciti sfruttando l'oscurità del Luogo Oscuro: Jules abusando di un artista per sfruttarne la creatività contaminata, Diana cercando di emulare lo stile narrativo di Alan Wake con macchine da scrivere automatizzate. Il risultato è un'esplosione paranormale che ha trasformato la Lake House in un luogo di orrore. Il DLC era stato anticipato nel finale del DLC AWE di Control, dove Jesse riceveva un segnale di un AWE imminente a Bright Falls.",
              en: "Thirteen years after Alan Wake's disappearance, a series of ritual murders shakes Bright Falls. FBI agent Saga Anderson arrives to investigate and discovers that the victims bear symbols tied to the Cult of the Tree — worshippers of the Dark Presence. In the Dark Place, Alan is finally completing the manuscript Return, the story that could free him, but must contend with Mr. Scratch, who is trying to take his place in the real world. The two stories mirror and intertwine with each other — every choice Alan makes in the Dark Place is reflected in Saga's reality and vice versa. The FBC has a significant presence: both Jesse Faden and Casper Darling appear in the game. The finale sees Alan complete the manuscript and escape the Dark Place in the New Game Plus version (Final Draft), while Alice helps him from outside through a series of video diaries used as anchors to reality.\n\nThe Night Springs DLC features three episodes of the eponymous television show Night Springs, written by Alan Wake in the Dark Place as further attempts to shape reality before completing Return. The episodes are alternative scenarios featuring fictionalized versions of real RCU characters — the Number One Fan (based on Rose Marigold), North Star (based on Jesse Faden), and Time Breaker, with actor Shawn Ashmore playing a metatextual version of himself in an episode that alludes directly to Quantum Break without naming it explicitly. The events do not materialize in the real world but enrich the universe's lore.\n\nThe Lake House DLC is a direct crossover between Alan Wake 2 and Control. FBC agent Kiran Estevez — introduced in the main game — becomes a playable protagonist for the first time. She must investigate an FBC research facility on the shores of Cauldron Lake that has gone dark. The two researchers heading the facility, Jules and Diana Marmont, had been conducting increasingly unethical experiments exploiting the Dark Place's darkness — Jules by abusing an artist to harness his corrupted creativity, Diana by attempting to emulate Alan Wake's narrative style through automated typewriters. The result is a paranormal explosion that has turned the Lake House into a place of horror. The DLC had been foreshadowed in the finale of Control's AWE DLC, where Jesse received a signal of an imminent AWE in Bright Falls."
            }
          },
          { id: "firebreak", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "2025",
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
      it: "Una saga che racconta la lotta di B.J. Blazkowicz contro il regime nazista, divisa in tre universi separati e senza continuità tra loro, sviluppati da team diversi nel corso dei decenni. Personaggi ed eventi non si trasferiscono da un universo all'altro, pur condividendo lo stesso pretesto di fondo.",
      en: "A saga chronicling B.J. Blazkowicz's fight against the Nazi regime, split into three separate universes with no continuity between them, developed by different teams over the decades. Characters and events never carry over from one universe to the next, though all share the same underlying premise."
    },
    universes: [
      {
        id: "machinegames",
        name: { it: "Universo MachineGames", en: "MachineGames Universe" },
        span: { it: "1946 – 1980", en: "1946 – 1980" },
        entries: [
          { id: "old-blood", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "1946",
            title: { it: "Wolfenstein: The Old Blood", en: "Wolfenstein: The Old Blood" },
            synopsis: {
              it: "Blazkowicz e l'Agente Uno, Richard Wesley, si infiltrano nel Castello Wolfenstein per recuperare un dossier contenente la posizione del complesso segreto di Deathshead. Catturati dal carceriere Rudi Jäger, Wesley viene torturato e ucciso mentre Blazkowicz fugge. A Wulfburg, l'archeologa nazista Helga von Schabbs sta scavando la cripta del Re Ottone I: dagli scavi fuoriesce un gas che trasforma chiunque in non-morto. Helga libera involontariamente una creatura mostruosa che la uccide. Blazkowicz abbatte la creatura, recupera il dossier e viene salvato da Fergus Reid. Prequel di The New Order.",
              en: "Blazkowicz and Agent One Richard Wesley infiltrate Castle Wolfenstein to recover a dossier containing the location of Deathshead's secret compound. Captured by warden Rudi Jäger, Wesley is tortured and killed while Blazkowicz escapes. In Wulfburg, Nazi archaeologist Helga von Schabbs is excavating the crypt of King Otto I — from the dig site seeps a gas that transforms anyone it touches into the undead. Helga unwittingly releases a monstrous creature, which kills her. Blazkowicz defeats the creature, recovers the dossier, and is rescued by Fergus Reid. Prequel to The New Order."
            }
          },
          { id: "new-order", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "1946–1961",
            title: { it: "Wolfenstein: The New Order", en: "Wolfenstein: The New Order" },
            synopsis: {
              it: "Nel 1946 Blazkowicz partecipa all'assalto al complesso di Deathshead, che lo costringe a scegliere quale compagno sacrificare prima di abbandonarlo a morire. Blazkowicz fugge ma viene colpito da una scheggia alla testa e cade in stato vegetativo per 14 anni in un manicomio polacco. Al risveglio nel 1960 scopre che i nazisti hanno vinto la guerra grazie alle tecnologie del Da'at Yichud, un'antica società segreta. Si unisce al Kreisau Circle e lancia una serie di operazioni culminanti nell'assalto finale al complesso di Deathshead nel 1961: Blazkowicz uccide il generale, ma viene gravemente ferito dalla granata del morente. Ordina il bombardamento nucleare del compound e sopravvive a malapena.",
              en: "In 1946, Blazkowicz takes part in the assault on Deathshead's compound, where the general forces him to choose which companion to sacrifice before leaving him to die. Blazkowicz escapes but is struck by shrapnel to the head and falls into a vegetative state for 14 years in a Polish asylum. Upon waking in 1960, he discovers that the Nazis won the war thanks to the technology of the Da'at Yichud, an ancient secret society. He joins the Kreisau Circle and launches a series of operations culminating in a final assault on Deathshead's compound in 1961: Blazkowicz kills the general, but is gravely wounded by the dying man's grenade. He orders a nuclear strike on the compound and barely survives."
            }
          },
          { id: "new-colossus", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "1961",
            title: { it: "Wolfenstein II: The New Colossus", en: "Wolfenstein II: The New Colossus" },
            synopsis: {
              it: "Cinque mesi dopo The New Order, Blazkowicz si risveglia gravemente menomato e incapace di camminare a bordo dell'Eva's Hammer, il sottomarino del Kreisau Circle. La nuova antagonista è Frau Engel, comandante nazista che attacca il sottomarino, cattura e decapita Caroline Becker davanti a Blazkowicz. Recuperata la mobilità grazie all'armatura Da'at Yichud di Caroline, Blazkowicz raduna le cellule della resistenza americana per innescare una Seconda Rivoluzione. Viene catturato e decapitato in diretta TV come propaganda nazista, ma il Kreisau Circle salva la sua testa e la innesta su un corpo di supersoldato. Nel finale Blazkowicz uccide Engel in diretta televisiva: la sua morte scatena la rivoluzione americana.",
              en: "Five months after The New Order, Blazkowicz wakes up severely disabled and unable to walk aboard the Eva's Hammer, the Kreisau Circle's submarine. The new antagonist is Frau Engel, a Nazi commander who attacks the submarine, captures and decapitates Caroline Becker in front of Blazkowicz. After regaining mobility thanks to Caroline's Da'at Yichud armour, Blazkowicz rallies American resistance cells to ignite a Second Revolution. He is captured and beheaded on live television as Nazi propaganda, but the Kreisau Circle saves his head and grafts it onto a supersoldier's body. In the finale, Blazkowicz kills Engel on live television — her death sparks the American revolution."
            }
          },
          { id: "cyberpilot", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "1980",
            title: { it: "Wolfenstein: Cyberpilot", en: "Wolfenstein: Cyberpilot" },
            synopsis: { it: "Contenuti in arrivo.", en: "Content coming soon." }
          },
          { id: "youngblood", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "1980",
            title: { it: "Wolfenstein: Youngblood", en: "Wolfenstein: Youngblood" },
            synopsis: { it: "Contenuti in arrivo.", en: "Content coming soon." }
          }
        ]
      }
    ]
  }

};

const GAME_ORDER = [
  "aitd", "castlevania", "dmc", "doom", "dragon-quest", "dying-light", "gta",
  "kingdom-hearts", "legacy-of-kain", "lost-planet", "metal-gear-solid",
  "resident-evil", "silent-hill", "remedy-universe", "wolfenstein"
];

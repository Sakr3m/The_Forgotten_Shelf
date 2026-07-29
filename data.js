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
    palette: ["#c9a24b", "#4a9d6e", "#6b3fa0"],
    blurb: {
      it: "Una serie di videogiochi survival horror nata nel 1992<br>con il capitolo originale di Infogrames, generalmente<br>considerata la capostipite del genere.",
      en: "A survival horror video game series that began in 1992<br>with the original Infogrames release, widely regarded<br>as the genre's originator."
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
      it: "Due linee temporali separate e incompatibili tra loro. Personaggi, eventi e lore non si trasferiscono da una all'altra.",
      en: "Two separate and mutually incompatible timelines. Characters, events, and lore do not carry over between them."
    },
    palette: ["#a11d33", "#4b2e6b", "#d4af37"],
    avatar: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Castlevania%20Avatar.jpg",
    banner: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Castlevania%20Banner.jpg",
    watermark: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Castlevania%20Filigrana.jpg",
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
      it: "Un'unica continuità narrativa, senza universi alternativi: qui la linea del tempo è una sola.",
      en: "A single narrative continuity, with no alternate universes: here there is only one timeline."
    },
    universes: [
      {
        id: "main",
        name: { it: "Continuità Unica", en: "Single Continuity" },
        span: { it: "2000 anni fa – oggi", en: "2000 years ago – present" },
        entries: [
          { id: "legend-of-sparda", type: "STORIA", typeEn: "STORY", year: "—",
            title: { it: "La Leggenda di Sparda", en: "The Legend of Sparda" },
            synopsis: {
              it: "Duemila anni fa, il cavaliere demoniaco Sparda si ribellò al signore dell'Inferno, Mundus, per proteggere il mondo umano. Dopo averlo sconfitto insieme alle sue legioni, sigillò il Temen-ni-gru, il portale primario tra il mondo umano e quello demoniaco, usando il proprio sangue, quello di una sacerdotessa umana, un amuleto mistico e la sua stessa spada come chiave del sigillo. Il rituale lo privò di gran parte del suo potere demoniaco. Visse quindi tra gli umani, regnando in pace per un periodo, prima di incontrare una donna di nome Eva e generare con lei due gemelli: Dante e Vergil. Sparda scomparve in circostanze sconosciute, lasciando Eva sola con i due figli. Poco prima del loro ottavo compleanno, i demoni di Mundus attaccarono la famiglia, uccidendo Eva e separando i gemelli, ognuno convinto che l'altro fosse morto. Da quel momento, i due intraprendono strade opposte.",
              en: "Two thousand years ago, the demonic knight Sparda rebelled against the lord of Hell, Mundus, to protect the human world. Having defeated Mundus and his legions, he sealed the Temen-ni-gru, the primary portal between the human world and the demon world, using his own blood, that of a human priestess, a mystical amulet, and his very sword as the seal's key. The ritual stripped him of much of his demonic power. He went on to live among humans, reigning peacefully for a time, before meeting a woman named Eva and fathering twin sons with her: Dante and Vergil. Sparda vanished under unknown circumstances, leaving Eva alone with the boys. Shortly before their eighth birthday, Mundus' demons attacked the family, killing Eva and separating the twins, each left believing the other had died. From that moment, the two set out on opposite paths."
            }
          },
          { id: "dmc3-manga", type: "MANGA", typeEn: "MANGA", year: "—",
            title: { it: "Code 1 Dante / Code 2 Vergil", en: "Code 1 Dante / Code 2 Vergil" },
            synopsis: {
              it: "Due volumi di una serie manga pensata in tre parti, pubblicata sotto la supervisione di Capcom. \"Code 1: Dante\" segue le prime missioni di Dante come cacciatore di demoni, poco dopo l'apertura del suo negozio ancora senza nome. Una misteriosa figura demoniaca nota come il Coniglio Bianco lo assume col pretesto di ritrovare una ragazza scomparsa di nome Alice, in realtà per osservare il Figlio di Sparda in azione. \"Code 2: Vergil\" segue il percorso parallelo di Vergil e spiega come lui e Arkham strinsero l'alleanza per resuscitare il Temen-ni-gru. Il terzo volume previsto, \"Code 3: Lady\", non fu mai completato perché l'artista abbandonò il progetto.",
              en: "Two volumes of a planned three-part manga series, published under Capcom's supervision. \"Code 1: Dante\" follows Dante's earliest missions as a demon hunter, shortly after opening his still-unnamed shop. A mysterious demonic figure known as the White Rabbit hires him under the pretense of finding a missing girl named Alice, in reality to observe the Son of Sparda in action. \"Code 2: Vergil\" follows Vergil's parallel journey and explains how he and Arkham formed their alliance to resurrect the Temen-ni-gru. The planned third volume, \"Code 3: Lady\", was never completed because the artist left the project."
            }
          },
          { id: "dmc-novel-1", type: "LIGHT NOVEL", typeEn: "LIGHT NOVEL", year: "—",
            title: { it: "Novel Volume 1", en: "Novel Volume 1" },
            synopsis: {
              it: "Un light novel scritto sotto la supervisione diretta di Hideki Kamiya, il creatore della serie. Copre la morte della madre di Dante, Eva, e i suoi primi anni di vita, introducendo personaggi come Nell Goldstein, l'armaiola che forgiò Ebony & Ivory su commissione di Dante, quando operava ancora sotto lo pseudonimo di Tony Redgrave. Dopo l'uscita di DMC3 nel 2005, alcuni elementi del romanzo furono considerati non canonici, ma DMC5: Before the Nightmare e DMC5 stesso hanno confermato che la maggior parte degli eventi è canonica, incluso il riferimento a Nell Goldstein come nonna di Nico.",
              en: "A light novel written under the direct supervision of Hideki Kamiya, the series' creator. It covers the death of Dante's mother Eva and his early years, introducing characters such as Nell Goldstein, the gunsmith who forged Ebony & Ivory on Dante's commission, while he was still operating under the alias Tony Redgrave. Following the release of DMC3 in 2005, certain elements of the novel were considered non-canonical, but DMC5: Before the Nightmare and DMC5 itself confirmed that the majority of its events are canon, including the reference to Nell Goldstein as Nico's grandmother."
            }
          },
          { id: "dmc3", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "—",
            title: { it: "Devil May Cry 3: Dante's Awakening", en: "Devil May Cry 3: Dante's Awakening" },
            synopsis: {
              it: "Vergil risveglia la torre Temen-ni-gru alleandosi con lo studioso Arkham, che in realtà lo sta usando come pedina per impossessarsi del potere di Sparda. Dante viene attirato alla torre e i due fratelli si scontrano ripetutamente. Dante incontra Lady, una cacciatrice di demoni decisa a uccidere suo padre Arkham per vendicare la madre, sacrificata in un rituale demoniaco. Il colpo di scena finale rivela che Arkham era il vero antagonista fin dall'inizio: fingendo lealtà a Vergil, apre il portale e assorbe il potere di Sparda, per poi essere sconfitto dalla forza combinata di entrambi i fratelli e di Lady. Dopo la vittoria, Dante e Vergil si affrontano un'ultima volta: Dante prevale, ma Vergil rifiuta di tornare nel mondo umano e si lascia cadere nelle profondità degli Inferi. Lì incontra Mundus, lo sfida nel suo stato indebolito e viene sopraffatto, diventando il suo servitore Nelo Angelo.",
              en: "Vergil awakens the Temen-ni-gru tower by allying himself with the scholar Arkham, who is in reality using him as a pawn to seize Sparda's power. Dante is lured to the tower and the brothers clash repeatedly. Dante meets Lady, a demon hunter bent on killing her father Arkham to avenge her mother, whom he sacrificed in a demonic ritual. The final twist reveals that Arkham was the true antagonist all along: feigning loyalty to Vergil, he opens the portal and absorbs Sparda's power, only to be defeated by the combined strength of both brothers and Lady herself. After the victory, Dante and Vergil face each other one last time, Dante prevails, but Vergil refuses to return to the human world and lets himself fall into the depths of the Underworld. There he encounters Mundus, challenges him in his weakened state, and is overpowered, becoming his servant Nelo Angelo."
            }
          },
          { id: "dmc1", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "—",
            title: { it: "Devil May Cry", en: "Devil May Cry" },
            synopsis: {
              it: "Una misteriosa donna di nome Trish, creata da Mundus a immagine di Eva per attirare Dante, lo conduce a Mallet Island, dove il re dei demoni si prepara al suo ritorno nel mondo umano. Nel corso del gioco, Dante affronta Nelo Angelo, che si rivela essere suo fratello Vergil, trasformato e reso schiavo da Mundus. Dopo la sconfitta finale di Nelo Angelo, il suo amulето si unisce a quello di Dante, trasformando la spada Force Edge nella leggendaria Sparda. Trish, che aveva tradito Dante lavorando per Mundus, si sacrifica per salvarlo durante lo scontro finale: un gesto che la redime. Dante sconfigge Mundus e lo respinge nel mondo dei demoni, e i due fuggono mentre l'isola crolla. Dante apre la sua agenzia di caccia ai demoni: in una scena post-credit, si scopre che lui e Trish sono ora soci e hanno rinominato il negozio Devil Never Cry.",
              en: "A mysterious woman named Trish, created by Mundus in Eva's image to lure Dante, leads him to Mallet Island, where the demon king is preparing his return to the human world. Over the course of the game, Dante faces Nelo Angelo, who is revealed to be his brother Vergil, transformed and enslaved by Mundus. Upon Nelo Angelo's final defeat, his amulet joins with Dante's, transforming the sword Force Edge into the legendary Sparda. Trish, who had betrayed Dante by working for Mundus, sacrifices herself to save him during the final confrontation, an act that redeems her. Dante defeats Mundus and drives him back into the demon world, and the two escape as the island collapses. Dante opens his demon-hunting agency: in a post-credits scene, it is revealed that he and Trish are now partners and have renamed the shop Devil Never Cry."
            }
          },
          { id: "dmc-anime", type: "ANIME", typeEn: "ANIME", year: "—",
            title: { it: "The Animated Series", en: "The Animated Series" },
            synopsis: {
              it: "Una serie anime di 12 episodi confermata canonica dal produttore Kobayashi, che ha dichiarato di essere stato coinvolto nello sviluppo delle sceneggiature. La serie mostra la vita quotidiana di Dante come cacciatore di demoni professionista, alle prese con vari clienti e missioni episodiche. Introduce personaggi originali come Patty Lowell, una ragazzina che Dante prende sotto la propria protezione, e J.D. Morrison, il suo agente. Entrambi vengono in seguito citati in DMC5: Before the Nightmare, confermando retroattivamente lo status canonico della serie.",
              en: "A 12-episode anime series confirmed canonical by producer Kobayashi, who stated he was involved in the development of its scripts. The series depicts Dante's day-to-day life as a professional demon hunter, taking on various clients and episodic missions. It introduces original characters such as Patty Lowell, a young girl whom Dante takes under his protection, and J.D. Morrison, his agent. Both Patty and Morrison are later referenced in DMC5: Before the Nightmare, retroactively confirming the series' canonical status."
            }
          },
          { id: "dmc2", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "—",
            title: { it: "Devil May Cry 2", en: "Devil May Cry 2" },
            synopsis: {
              it: "Dante si allea con Lucia, un demone artificiale creato dallo stregone Arius e cresciuto come figlia adottiva dai Protettori di Vie de Marli, una comunità di guardiani dell'isola. Arius, presidente della multinazionale Uroboros, cerca di impossessarsi del potere del demone Argosax, un antico rivale di Mundus che un tempo governava metà del mondo demoniaco, per diventare un dio immortale. Dante manda a monte il rituale scambiando uno degli artefatti richiesti con la propria moneta, ma il portale per il mondo demoniaco si apre comunque: decide di attraversarlo lasciando la scelta al destino, usando una moneta che in realtà ha testa su entrambi i lati. Sconfigge Argosax e si addentra ulteriormente negli Inferi. Nel frattempo, Lucia elimina un Arius corrotto dal potere demoniaco. Il finale mostra Lucia che aspetta Dante nel suo negozio, mentre fuori risuona il rombo di una motocicletta.",
              en: "Dante allies himself with Lucia, an artificial demon created by the sorcerer Arius and raised as an adoptive daughter by the Protectors of Vie de Marli, a community of island guardians. Arius, president of the multinational Uroboros, seeks to seize the power of the demon Argosax, an ancient rival of Mundus who once ruled half of the demon world, in order to become an immortal god. Dante disrupts the ritual by swapping one of the required artifacts with his coin, but the portal to the demon world opens regardless: he decides to cross it leaving the choice to fate, using a coin that in reality has heads on both sides. He defeats Argosax and ventures deeper into the Underworld. Meanwhile, Lucia eliminates an Arius corrupted by demonic power. The finale shows Lucia waiting for Dante in his shop, as the roar of a motorcycle echoes outside."
            }
          },
          { id: "dmc4-novel", type: "LIGHT NOVEL", typeEn: "LIGHT NOVEL", year: "—",
            title: { it: "Deadly Fortune", en: "Deadly Fortune" },
            synopsis: {
              it: "Un romanzo in due volumi scritto da Bingo Morihashi, lo stesso autore della trama di DMC4. Morihashi lo descrive come la versione \"completa\" di DMC4, incorporando scene tagliate dal gioco per motivi di produzione. Include dettagli sul passato di Nero, trovato da neonato a Fortuna e adottato dai genitori di Credo e Kyrie, e nuove scene con il cast principale. Il romanzo rivela inoltre che Vergil visitò Fortuna anni prima degli eventi del gioco, suggerendo implicitamente che Nero sia figlio di Vergil, fatto poi confermato esplicitamente in DMC5.",
              en: "A two-volume novel written by Bingo Morihashi, the same author behind DMC4's story. Morihashi describes it as the \"complete\" version of DMC4, incorporating scenes cut from the game for production reasons. It includes details about Nero's past, found as an infant in Fortuna and adopted by Credo and Kyrie's parents, and new scenes featuring the main cast. The novel also reveals that Vergil visited Fortuna years before the game's events, implicitly suggesting that Nero is Vergil's son, a fact confirmed explicitly in DMC5."
            }
          },
          { id: "dmc4", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "—",
            title: { it: "Devil May Cry 4", en: "Devil May Cry 4" },
            synopsis: {
              it: "Il primo capitolo a introdurre Nero come protagonista giocabile accanto a Dante. Nero è un giovane membro dell'Ordine della Spada, un'organizzazione religiosa che venera Sparda come un dio nella città di Fortuna. Quando Dante irrompe durante una funzione e uccide Sanctus, il leader dell'Ordine, Nero viene incaricato di catturarlo. Nel corso dell'avventura si scopre che Sanctus, resuscitato tramite la Cerimonia dell'Ascensione, intende usare una colossale statua demoniaca nota come il Salvatore per porsi come difensore dell'umanità e dominare il mondo. Attivare il Salvatore richiede il sangue di Sparda: l'Ordine aveva usato Yamato, la spada di Vergil, per aprire portali demoniaci e attirare Dante a Fortuna come nucleo del rituale. Nero possiede il Devil Bringer, un braccio demoniaco di origine misteriosa che in DMC5 si rivelerà essere frutto della stirpe di Vergil. Quando Sanctus scopre che anche Nero porta il sangue di Sparda, lo usa come sostituto, assorbendo sia Nero che la sua fidanzata Kyrie nel Salvatore. Trish, infiltrata nell'Ordine sotto le spoglie di Gloria, e Dante lavorano insieme per liberarli. Nero sconfigge Sanctus dall'interno del Salvatore e lo distrugge, ponendo fine all'Ordine.",
              en: "The first entry to introduce Nero as a playable protagonist alongside Dante. Nero is a young member of the Order of the Sword, a religious organization that worships Sparda as a god in the city of Fortuna. When Dante crashes a sermon and kills Sanctus, the Order's leader, Nero is tasked with capturing him. Over the course of the adventure it is revealed that Sanctus, resurrected through the Ascension Ceremony, intends to use a colossal demonic statue known as the Savior to position himself as humanity's defender and dominate the world. Activating the Savior requires the blood of Sparda: the Order had used Yamato, Vergil's sword, to open demonic portals and lure Dante to Fortuna as the ritual's core. Nero possesses the Devil Bringer, a demonic arm of mysterious origin that will be revealed in DMC5 to be the product of Vergil's bloodline. When Sanctus discovers that Nero also carries Sparda's blood, he uses him as a substitute, absorbing both Nero and his girlfriend Kyrie into the Savior. Trish, infiltrated within the Order under the guise of Gloria, and Dante work together to free them. Nero defeats Sanctus from within the Savior and destroys it, bringing the Order to an end."
            }
          },
          { id: "dmc-novel-2", type: "LIGHT NOVEL", typeEn: "LIGHT NOVEL", year: "—",
            title: { it: "Novel Volume 2", en: "Novel Volume 2" },
            synopsis: {
              it: "Il secondo romanzo della serie, ambientato dopo DMC1 e prima di DMC2 nell'attuale ordine cronologico. Dante viene assunto per indagare su un idolo demoniaco noto come la Testa della Bestia, una missione che lo avvicinerà inconsapevolmente al suo eterno nemico. A differenza del primo volume, che richiese alcuni ritocchi retroattivi, questo romanzo si inserisce coerentemente nella timeline senza contraddire gli altri giochi. Il finale si ricollega direttamente all'apertura di DMC2.",
              en: "The second novel in the series, set after DMC1 and before DMC2 in the current chronological order. Dante is hired to investigate a demonic idol known as the Beast Head, a mission that will bring him unwittingly closer to his eternal enemy. Unlike the first volume, which required certain retcons, the novel fits coherently into the timeline without contradicting the other games. Its ending connects directly to the opening of DMC2."
            }
          },
          { id: "dmc5-novel", type: "LIGHT NOVEL", typeEn: "LIGHT NOVEL", year: "—",
            title: { it: "Before the Nightmare", en: "Before the Nightmare" },
            synopsis: {
              it: "Un prequel diretto di DMC5 scritto dallo stesso autore del gioco, Bingo Morihashi. Il romanzo è la causa principale del ritocco alla timeline: DMC2, originariamente collocato dopo DMC4, viene spostato prima di esso. Copre il periodo in cui Nero, ormai adulto, ha aperto una propria agenzia di caccia ai demoni separata da quella di Dante, gli sviluppi nelle relazioni tra i personaggi durante i cinque anni tra DMC4 e DMC5, e i movimenti del misterioso V prima degli eventi del gioco. Il romanzo si conclude direttamente con l'apertura di DMC5.",
              en: "A direct prequel to DMC5 written by the game's own author, Bingo Morihashi. The novel is the primary cause of the timeline retcon: DMC2, which was originally placed after DMC4, is moved to before it. It covers the period in which Nero, now an adult, has opened his own demon-hunting agency separate from Dante's, the developments in the characters' relationships during the five years between DMC4 and DMC5, and the movements of the mysterious V before the game's events. The novel concludes directly with the opening of DMC5."
            }
          },
          { id: "dmc5-manga", type: "MANGA", typeEn: "MANGA", year: "—",
            title: { it: "Visions of V", en: "Visions of V" },
            synopsis: {
              it: "Un manga in cinque volumi che segue V, il misterioso terzo personaggio giocabile di DMC5, lungo tutti gli eventi del gioco, approfondendone la psicologia e il passato. Esplora nel dettaglio il colpo di scena centrale di DMC5 riguardante la vera identità di V, con contenuti che presuppongono familiarità con il finale del gioco. Pubblicato in contemporanea con DMC5 e realizzato sotto la supervisione di Capcom.",
              en: "A five-volume manga following V, the mysterious third playable character in DMC5, throughout the game's events, delving into his psychology and backstory. It explores in detail the central plot twist of DMC5 concerning V's true identity, with content that assumes familiarity with the game's ending. Published simultaneously with DMC5 and produced under Capcom's supervision."
            }
          },
          { id: "dmc5", type: "VIDEOGIOCO", typeEn: "VIDEOGAME", year: "—",
            title: { it: "Devil May Cry 5", en: "Devil May Cry 5" },
            synopsis: {
              it: "Vergil, tornato dalla morte, strappa il Devil Bringer a Nero per reimpossessarsi dello Yamato e usa la spada per dividersi in due: la sua metà puramente demoniaca diventa Urizen, un essere consumato dalla sete di potere; la sua metà umana assume la forma del misterioso V. Urizen fa germogliare il Qliphoth nel cuore di Red Grave City, un albero demoniaco che si nutre di sangue umano per produrre un frutto capace di rendere re degli Inferi chiunque lo consumi. Dante affronta Urizen, viene sconfitto e cade in coma per un mese. Nel corso dell'avventura, con Nero, Dante e V come protagonisti giocabili, Dante si trafigge con i resti di Rebellion per liberare il suo pieno potere demoniaco. V, ormai morente per l'assenza di essenza demoniaca, si riunisce a Urizen e riporta in vita Vergil. Nero, rivelato definitivamente figlio di Vergil, affronta suo padre e lo sconfigge, costringendo Vergil e Dante a collaborare per distruggere il Qliphoth dall'interno. I due scendono nel mondo dei demoni usando lo Yamato per sigillarne il portale, rimanendo intrappolati nel processo. Il gioco si chiude con i due fratelli che si scontrano un'ultima volta, questa volta quasi in modo giocoso, abbattendo orde di demoni fianco a fianco.",
              en: "Vergil, returned from death, tears the Devil Bringer from Nero to reclaim the Yamato and uses the sword to split himself in two: his purely demonic half becomes Urizen, a being consumed by the thirst for power; his human half takes the form of the mysterious V. Urizen causes the Qliphoth to sprout in the heart of Red Grave City, a demonic tree that feeds on human blood to produce a fruit capable of making whoever consumes it the king of the Underworld. Dante confronts Urizen, is defeated, and falls into a coma for a month. Over the course of the adventure, with Nero, Dante, and V as playable protagonists, Dante impales himself with the remains of Rebellion to unleash his full demonic power. V, now dying from the absence of demonic essence, reunites with Urizen and restores Vergil to life. Nero, definitively revealed to be Vergil's son, confronts his father and defeats him, forcing both Vergil and Dante to work together to destroy the Qliphoth from within. The two descend into the demon world using the Yamato to seal its portal, becoming trapped there in the process. The game closes with the brothers clashing once more, this time almost playfully, as they cut down demon hordes side by side."
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
    blurb: { it: "Contenuti in arrivo.", en: "Content coming soon." },
    universes: [
      { id: "main", name: { it: "", en: "" }, span: { it: "", en: "" }, entries: [] }
    ]
  },

  "dragon-quest": {
    id: "dragon-quest",
    listTitle: { it: "Dragon Quest", en: "Dragon Quest" },
    eyebrow: { it: "Fascicolo", en: "Case File" },
    title: { it: "Dragon Quest", en: "Dragon Quest" },
    blurb: { it: "Contenuti in arrivo.", en: "Content coming soon." },
    universes: [
      { id: "main", name: { it: "", en: "" }, span: { it: "", en: "" }, entries: [] }
    ]
  },

  "dying-light": {
    id: "dying-light",
    listTitle: { it: "Dying Light", en: "Dying Light" },
    eyebrow: { it: "Fascicolo", en: "Case File" },
    title: { it: "Dying Light", en: "Dying Light" },
    blurb: { it: "Contenuti in arrivo.", en: "Content coming soon." },
    universes: [
      { id: "main", name: { it: "", en: "" }, span: { it: "", en: "" }, entries: [] }
    ]
  },

  gta: {
    id: "gta",
    listTitle: { it: "Grand Theft Auto", en: "Grand Theft Auto" },
    eyebrow: { it: "Fascicolo", en: "Case File" },
    title: { it: "Grand Theft Auto", en: "Grand Theft Auto" },
    blurb: { it: "Contenuti in arrivo.", en: "Content coming soon." },
    universes: [
      { id: "main", name: { it: "", en: "" }, span: { it: "", en: "" }, entries: [] }
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
    blurb: { it: "Contenuti in arrivo.", en: "Content coming soon." },
    universes: [
      { id: "main", name: { it: "", en: "" }, span: { it: "", en: "" }, entries: [] }
    ]
  },

  "metal-gear-solid": {
    id: "metal-gear-solid",
    listTitle: { it: "Metal Gear Solid", en: "Metal Gear Solid" },
    eyebrow: { it: "Fascicolo", en: "Case File" },
    title: { it: "Metal Gear Solid", en: "Metal Gear Solid" },
    blurb: { it: "Contenuti in arrivo.", en: "Content coming soon." },
    universes: [
      { id: "main", name: { it: "", en: "" }, span: { it: "", en: "" }, entries: [] }
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
    blurb: { it: "Contenuti in arrivo.", en: "Content coming soon." },
    universes: [
      { id: "main", name: { it: "", en: "" }, span: { it: "", en: "" }, entries: [] }
    ]
  },

  "remedy-universe": {
    id: "remedy-universe",
    listTitle: { it: "Universo Connesso di Remedy", en: "Remedy Connected Universe" },
    eyebrow: { it: "Fascicolo", en: "Case File" },
    title: { it: "Universo Connesso di Remedy", en: "Remedy Connected Universe" },
    blurb: { it: "Contenuti in arrivo.", en: "Content coming soon." },
    universes: [
      { id: "main", name: { it: "", en: "" }, span: { it: "", en: "" }, entries: [] }
    ]
  },

  wolfenstein: {
    id: "wolfenstein",
    listTitle: { it: "Wolfenstein", en: "Wolfenstein" },
    eyebrow: { it: "Fascicolo", en: "Case File" },
    title: { it: "Wolfenstein", en: "Wolfenstein" },
    blurb: { it: "Contenuti in arrivo.", en: "Content coming soon." },
    universes: [
      { id: "main", name: { it: "", en: "" }, span: { it: "", en: "" }, entries: [] }
    ]
  }

};

const GAME_ORDER = [
  "aitd", "castlevania", "dmc", "doom", "dragon-quest", "dying-light", "gta",
  "kingdom-hearts", "legacy-of-kain", "lost-planet", "metal-gear-solid",
  "resident-evil", "silent-hill", "remedy-universe", "wolfenstein"
];

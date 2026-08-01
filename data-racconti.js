// ============================================================
// RACCONTI — dati delle due colonne (stessa struttura di
// data-storie-teorie.js, per ora vuota: solo lo scheletro)
// ============================================================

const RACCONTI_ORDER = [
  "cinere",
  "diario-nuovo-assunto",
  "il-posto-preferito",
  "il-testimone"
];

const RACCONTI = {
  cinere: {
    game: "cinere",
    gameLabel: { it: "Cinere", en: "Cinere" },
    accentColor: "#9a958c",
    title: {
      it: "Cinere",
      en: "Cinere"
    },
    tag: {
      it: "leggenda oscura di fantasia",
      en: "dark fantasy legend"
    },
    body: {
      it: `In alcuni borghi orientali si racconta di lei.

Non in piazza, non al sole. Si racconta di sera, a voce bassa, quando i bambini sono già a letto e il vino ha sciolto abbastanza prudenza da far parlare gli uomini di ciò che li spaventa davvero.

Dicono che cammini. Che sia bella. Che sembri viva.

Nessuno sa da dove venga, né dove dorma, né se dorma. Appare e scompare come si fa nei sogni: mentre la guardi, sembra l'unica cosa reale al mondo; quando se n'è andata, non riesci a spiegare come facevi a non vederla prima.

Si avvicina agli uomini soli. Non sempre di notte, il sole non la ferma, non più di quanto fermi qualsiasi altra cosa inevitabile. Parla poco. Sceglie le parole come si sceglie il momento: poche, necessarie, eleganti. Ha qualcosa nel modo di chiedere che suona insieme nobile e bisognoso, come chi è abituato a dare molto e non ha mai imparato a mendicare senza vergogna. Chiede se sei libero quel giorno. Chiede se vorresti tenerle compagnia.

E quegli uomini, sposati, fidanzati, soli, devoti, quegli uomini dicono sempre di sì.

Passano una giornata insieme. Come una coppia. Come se si conoscessero da sempre. E alla fine lei si avvicina, e lui lo sa già: lo sa e non si ritira. Non per coraggio. Per qualcosa che somiglia all'inevitabile.

Il bacio è dolce.

Poi non c'è più niente. Solo i vestiti, e la cenere che il vento porta via prima che qualcuno possa raccoglierla.

E un urlo.

Un urlo di donna, straziato, profondo, il tipo di suono che non esce dalla gola ma dalle viscere, il tipo di suono che non si fa per segnalare qualcosa ma perché il corpo non riesce a contenere altro. Un urlo che non finisce subito. Che si spezza, riprende, si trascina nel buio come se il dolore avesse le sue gambe.

Dicono che sia una storia inventata per tenere gli uomini fedeli. Per insegnare ai giovani a diffidare delle straniere. Forse. È comodo pensarlo.

Ma quegli urli esistono.

Li sentono da secoli. In borghi diversi, in anni diversi, sempre la stessa voce: impossibile, eppure riconoscibile, come se il dolore avesse un'unica firma.

E ogni volta, ogni singola volta, un uomo è sparito.

Nessuna lite, nessuna fuga, nessun addio. Solo i vestiti. Solo la cenere. Solo quell'urlo che si porta via tutto il resto.

La cosa peggiore non è che succede.

La cosa peggiore è che continua.

Da secoli, continua. E ogni volta la cenere se ne va col vento, silenziosa, leggera, come se quell'uomo non fosse mai esistito.

E nessuno sa perché.`,
      en: `In some eastern villages, they tell of her.

Not in the square, not in the sunlight. They tell of her in the evening, in low voices, when the children are already in bed and the wine has dissolved enough caution to make men speak of what truly frightens them.

They say she walks. That she is beautiful. That she seems alive.

No one knows where she comes from, nor where she sleeps, nor whether she sleeps at all. She appears and disappears the way it happens in dreams: while you watch her, she seems the only real thing in the world; when she is gone, you cannot explain how you failed to see her before.

She approaches men who are alone. Not always at night — the sun does not stop her, no more than it stops anything else that is inevitable. She speaks little. She chooses her words the way one chooses the right moment: few, necessary, elegant. There is something in the way she asks that sounds at once noble and needing, like someone accustomed to giving much who never learned to beg without shame. She asks if you are free that day. She asks if you would like to keep her company.

And those men — married, engaged, alone, devout — those men always say yes.

They spend a day together. Like a couple. As if they have known each other forever. And at the end she draws close, and he already knows: he knows and does not step back. Not out of courage. Out of something that resembles the inevitable.

The kiss is sweet.

Then there is nothing. Only the clothes, and the ash that the wind carries away before anyone can gather it.

And a scream.

A woman's scream — torn, deep, the kind of sound that does not come from the throat but from somewhere deeper, the kind of sound one does not make to signal something but because the body can no longer contain anything else. A scream that does not end quickly. That breaks, resumes, drags itself into the dark as if grief had legs of its own.

They say it is a story invented to keep men faithful. To teach the young to distrust strangers. Perhaps. It is a comfortable thing to believe.

But those screams exist.

They have been heard for centuries. In different villages, in different years, always the same voice: impossible, and yet recognisable, as if grief had a single signature.

And every time — every single time — a man has vanished.

No quarrel, no flight, no farewell. Only the clothes. Only the ash. Only that scream that carries everything else away.

The worst part is not that it happens.

The worst part is that it continues.

For centuries, it continues. And every time the ash drifts away on the wind — silent, weightless — as if that man had never existed at all.

And no one knows why.`
    }
  },
  "diario-nuovo-assunto": {
    game: "diario-nuovo-assunto",
    gameLabel: { it: "Diario di un Nuovo Assunto", en: "Diary of a New Employee" },
    accentColor: "#8a7a5a",
    title: {
      it: "Diario di un Nuovo Assunto",
      en: "Diary of a New Employee"
    },
    tag: {
      it: "horror psicologico",
      en: "psychological horror"
    },
    body: {
      it: `7 Marzo
Sedia che cigola. Bella partenza.
Ho trovato lavoro. Il posto dall'esterno sembra una piccola villa, ma villa è una parola grossa: è un rudere con le pretese. Non me ne pento comunque, la paga è ottima: 2370 euro puliti per fare sostanzialmente niente. L'unica cosa che mi chiedono è tenere d'occhio una stanza qui vicina. Tutto il giorno, ogni giorno. Nessun collega, nessun turno. Solo io e la porta.
Non ho ancora capito cosa ci sia dentro.

9 Marzo
Prima notte qui.
La zona di per sé non è male. Di giorno è sopportabile. Ma di notte il silenzio diventa strano, amplifica tutto, e da quella porta si sente un rumore. Non so come descriverlo. Non ci provo.
Mi hanno detto di non sbirciare. Ho obbedito.
Ho passato tre ore a fissare quella porta.

11 Marzo
Niente turno notturno stavolta.
Ho notato una cosa: lavoro solo i giorni dispari. Probabilmente mi sto inventando schemi per ammazzare il tempo. Ho ritrovato un libro in fondo alla borsa, uno di quelli comprati con le migliori intenzioni e mai aperti. Momento giusto, forse.
Non ricordo neanche perché avessi smesso di leggere.

13 Marzo
Altra notte.
La stanza fa sempre rumore, ma stanotte era diverso. Più insistente. Come se aspettasse qualcosa.
Mi hanno detto di non guardare.
Ma tanto non lo sapranno mai, no?

Il 15 marzo arrivò un nuovo dipendente.`,
      en: `March 7
Creaking chair. Great start.
Found a job. The place looks like a small villa from the outside, but villa is a generous word: it's a ruin with ambitions. No regrets though, the pay is good — really good: 2,370 euros clean for doing basically nothing. The only thing they ask is to keep an eye on a room just down the hall. All day, every day. No colleagues, no shifts. Just me and the door.
I still haven't figured out what's inside.

March 9
First night here.
The area itself isn't bad. During the day it's bearable. But at night the silence gets strange, amplifies everything, and from behind that door there's a sound. I don't know how to describe it. I'm not going to try.
I was told not to peek. I obeyed.
I spent three hours staring at that door.

March 11
No night shift this time.
I noticed something: I only work on odd days. Probably making up patterns to kill time. Found a book at the bottom of my bag, one of those bought with the best intentions and never opened. Maybe now's the time.
I don't even remember why I stopped reading.

March 13
Another night.
The room is always making noise, but tonight it was different. More insistent. Like it was waiting for something.
I was told not to look.
But they'll never know, will they?

On March 15, a new employee arrived.`
    }
  },
  "il-posto-preferito": {
    game: "il-posto-preferito",
    gameLabel: { it: "Il Posto Preferito", en: "The Favourite Place" },
    accentColor: "#b08a97",
    title: {
      it: "Il Posto Preferito",
      en: "The Favourite Place"
    },
    tag: {
      it: "elegia",
      en: "melancholic romance"
    },
    body: {
      it: `Accostò la vettura al margine della strada.
Le ruote si fermarono sull'erba corta di una piccola altura. Davanti a lui, un albero solitario sul bordo di un dirupo. Oltre, un orizzonte aperto, largo, da togliere il fiato.
L'uomo, sulla trentina, rimase un momento in macchina, gli occhi sull'albero. Poi aprì lo sportello e scese, con la lentezza di chi porta qualcosa di pesante.
Si avvicinò all'albero.
"Quanti ricordi."
Disse quasi tra sé e sé, senza distogliere lo sguardo.
Con un movimento un po' goffo si sedette, schiena alla corteccia, lo sguardo rivolto all'orizzonte.
"Mnea."
Sussurrò con un filo di voce. Il nome rimase nell'aria un momento, poi il vento lo portò via.
Restò lì ancora un'ora. Poi si rialzò, tornò alla macchina e ripartì.

Una settimana esatta dopo, tornò.
Parcheggiò nello stesso punto. Scese. Si avviò, come si fa con le cose a cui si è abituati, quelle che si ripetono non perché si vuole, ma perché non si riesce a smettere.
Nuovamente, si sedette sotto l'albero. Schiena alla corteccia, ginocchia piegate, sguardo all'orizzonte.
Rimase così, in silenzio.
Fu il rumore di un motore a riportarlo al presente.
Un'altra macchina si era fermata poco più in là. Dentro c'era una famiglia. Due adulti davanti, un bambino sul sedile posteriore con il naso già schiacciato contro il finestrino. La madre indicò qualcosa fuori. Il padre sorrise. Il bambino sgranò gli occhi verso quell'orizzonte con la meraviglia di chi lo vede per la prima volta.
Rimasero qualche minuto. Scambiarono qualche parola, bevvero qualcosa, poi ripartirono.
Lui rimase a guardarli andare.
Poi si alzò anche lui, e se ne andò.

Ancora una settimana.
Parcheggiò. Quel posto sembrava aspettare solo lui. Scese. Si avviò verso l'albero.
Questa volta, avvicinandosi, allungò una mano e lo toccò. Il palmo sulla corteccia, un momento solo. Come un saluto.
Poi si voltò verso l'orizzonte.
"Era bello questo posto insieme a te."
Le parole uscirono da sole. Piano, nell'aria ferma.
Rimase lì, in piedi, gli occhi lontani.
Poi sentì qualcosa. Passi, leggeri, dall'altro lato dell'albero.
Girò attorno al tronco.
Una figura femminile, sulla sua età. Ferma, gli occhi sull'orizzonte.
La vide.
Sgranò gli occhi.
"Mnea."`,
      en: `He pulled the car over to the edge of the road.
The wheels came to rest on the short grass of a small hill. In front of him, a solitary tree on the edge of a drop. Beyond it, an open horizon, wide, breathtaking.
The man, in his thirties, stayed in the car for a moment, eyes on the tree. Then he opened the door and got out, with the slowness of someone carrying something heavy.
He walked toward the tree.
"So many memories."
He said it almost to himself, without looking away.
He sat down with a slightly clumsy movement, back against the bark, eyes toward the horizon.
"Mnea."
He whispered it with a thread of voice. The name lingered in the air for a moment, then the wind carried it away.
He stayed there for another hour. Then he got up, went back to the car, and left.

Exactly one week later, he came back.
He parked in the same spot. Got out. Set off, the way you do with things you're used to — things that repeat themselves not because you want them to, but because you can't seem to stop.
Again, he sat under the tree. Back against the bark, knees bent, eyes on the horizon.
He stayed like that, in silence.
It was the sound of an engine that brought him back.
Another car had stopped a little further along. Inside was a family. Two adults in front, a child in the back seat with his nose already pressed against the window. The mother pointed at something outside. The father smiled. The child's eyes went wide at that horizon with the wonder of someone seeing it for the first time.
They stayed a few minutes. Exchanged a few words, had something to drink, then left.
He watched them go.
Then he got up too, and left.

Another week.
He parked. The place seemed to be waiting just for him. He got out. He walked toward the tree.
This time, as he approached, he reached out and touched it. Palm flat against the bark, just for a moment. Like a greeting.
Then he turned toward the horizon.
"This place was beautiful with you."
The words came out on their own. Quietly, in the still air.
He stood there, eyes far away.
Then he heard something. Footsteps, light, from the other side of the tree.
He walked around the trunk.
A female figure, around his age. Still, her eyes on the horizon.
He saw her.
His eyes went wide.
"Mnea."`
    }
  },
  "il-testimone": {
    game: "il-testimone",
    gameLabel: { it: "Il Testimone", en: "The Witness" },
    accentColor: "#c470e0",
    title: {
      it: "Il Testimone",
      en: "The Witness"
    },
    tag: {
      it: "thriller psicologico",
      en: "psychological thriller"
    },
    body: {
      it: `Messaggio vocale — durata: 1:43

"Jul! Jul ascoltami.
So cosa è successo. Ho appena visto una televisione accesa in un negozio qui vicino, stavano dando la notizia. Quello che stanno dicendo è falso. Tutto falso. Quell'uomo, quello dell'incidente, non è stato un incidente. Non lo è stato.
Io ero lì. Ero lì vicino, ho visto tutto, e adesso non so cosa fare, non riesco a pensare, sto camminando da ore e non so nemmeno bene dove sto andando. Sto venendo da te, ho bisogno di vederti, ho bisogno di parlare con qualcuno che...
Scusa. Scusa, mi fermo un secondo.
Quell'uomo è stato ucciso. L'hanno ucciso. E chi l'ha fatto sa che c'ero. Non lo so con certezza, non lo so, ma lo sento, sento che qualcuno mi stava guardando mentre me ne andavo. Forse sto esagerando, forse non mi ha visto davvero, ma non riesco a smettere di girarmi.
Non so se chiamare la polizia. Ho paura anche di quello. Ho paura di tutto in questo momento.
Rispondimi. Rispondimi appena puoi. Sto arrivando."

Jul rispose circa un'ora dopo.
Non ricevette mai risposta.
E nessuno si fece vivo alla sua porta.`,
      en: `Voice message — duration: 1:43

"Jul! Jul, listen to me.
I just saw a TV on in a shop window, they were running the story. They're lying. Everything they're saying is false.
I was there. I was right there, I saw everything. That man didn't die in an accident — they killed him. They killed him and I was there.
I don't know what to do, I can't think straight, I've been walking for hours and I don't even know where I'm going. I'm coming to you, I need to see you, I need to talk to someone who...
Sorry. Sorry, give me a second.
Whoever did it knows I was there. I'm not certain, I don't know, but I can feel it — I could feel someone watching me as I walked away. Maybe I'm overreacting, maybe they didn't really see me, but I can't stop looking over my shoulder.
I don't know whether to call the police. I'm scared of that too. I'm scared of everything right now.
Answer me. Answer me as soon as you can. I'm on my way."

Jul replied about an hour later.
They never got a response.
And no one ever showed up at their door.`
    }
  }
};

const LIBRI_ORDER = [];

const LIBRI = {};

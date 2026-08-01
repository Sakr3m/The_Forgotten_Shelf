// ============================================================
// RACCONTI — dati delle due colonne (stessa struttura di
// data-storie-teorie.js, per ora vuota: solo lo scheletro)
// ============================================================

const RACCONTI_ORDER = [
  "cinere",
  "diario-nuovo-assunto",
  "il-posto-preferito",
  "il-testimone",
  "l-ora-sbagliata",
  "lo-specchio-cieco"
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
  },
  "l-ora-sbagliata": {
    game: "l-ora-sbagliata",
    forceGamePicker: true,
    gameLabel: { it: "L'Ora Sbagliata", en: "The Wrong Hour" },
    accentColor: "#faebd7",
    title: {
      it: "L'Ora Sbagliata",
      en: "The Wrong Hour"
    },
    dropdownLabel: {
      it: "Versione 1.0",
      en: "Version 1.0"
    },
    tag: {
      it: "surreale",
      en: "surreal"
    },
    body: {
      it: `La sveglia suonò alle 7:00.

Si girò dall'altra parte. Troppo presto. Ancora cinque minuti, forse dieci. Si riaddormentò prima ancora di aver finito il pensiero.

Suonò di nuovo. 7:15.

"Ancora?"

Allungò la mano, occhi ancora chiusi, e non si limitò a rimandare: disattivò tutto. Allarme, ripetizione, backup. Finito.

Silenzio.

Poi suonò di nuovo.

Questa volta si svegliò di scatto. Rimase fermo un secondo, la mano ancora sul comodino. Non era possibile. L'aveva spenta, l'aveva spenta davvero.

Si girò verso la radiosveglia. Il display lampeggiava rosso.

7:00.

Di nuovo.

"Deve essersi rotta."

La prese. Staccò la spina dal muro. Si spense di colpo, il display nero in un istante. Controllò le batterie per sicurezza, ma non ce n'erano nemmeno quelle. Prese il cellulare e impostò una sveglia per le 8:00, controllò due volte, poi posò tutto sul comodino e si rimise sotto le coperte.

"Buonanotte a tutti," disse sottovoce, con l'ironia stanca di chi ha già perso.

Suonò il cellulare.

Lo guardò con un'espressione che non era ancora rabbia, ma ci si avvicinava. Lo schermo diceva 6:00.

Si alzò, trascinandosi fino alla finestra, e aprì la tenda.

Fuori, l'alba. Appena accennata, timida, il tipo di luce che non ha ancora deciso se restare.

Quindi le 6:00 erano giuste. Il cellulare non era rotto. Era lui che si era perso da qualche parte tra una sveglia e l'altra.

"Va bene," disse al vetro. "Due ore ancora e poi mi alzo per davvero."

Questa volta fu preciso. Impostò le 8:15, così da recuperare i minuti persi nel litigio con gli allarmi. Controllò tre volte. Si rimise a letto con la determinazione di chi ha risolto un problema.

La sveglia suonò. 8:15.

Si alzò con la lentezza soddisfatta di chi ha vinto. Andò in bagno, si lavò il viso, tornò in camera a vestirsi.

Fu allora che guardò la finestra.

La luce era sbagliata.

Non riuscì a spiegarlo meglio di così, almeno non subito. Era semplicemente sbagliata, il tipo di luce che appartiene ad orari più piccoli, non alle otto e un quarto.

Guardò il cellulare.

5:59.

Lo tenne in mano mentre il display scorreva verso le 6:00. E in quel preciso momento, dalla postazione sul comodino, la radiosveglia suonò. Quella che aveva staccato. Quella senza batterie.

Rimase fermo in mezzo alla stanza, vestito, sveglio, con la radiosveglia che suonava e il sole che stava ancora decidendo se alzarsi.

Poi smise di ragionare su cosa stesse succedendo e decise semplicemente di aspettare. Si sedette sul bordo del letto, il telefono in mano, e guardò il tempo passare. Le 7:00. Le 7:30. Le 8:00.

Quando il display segnò le 8:15 per la seconda volta, la luce fuori era finalmente quella giusta. Si alzò, finì di prepararsi, uscì di casa senza voltarsi indietro.

Il sole era al suo posto, la strada aveva il rumore giusto, tutto sembrava tornato nell'ordine corretto delle cose.

Arrivò al lavoro.

Nessuno.

Il parcheggio vuoto, le luci spente, la porta chiusa. Si guardò intorno come se si aspettasse che qualcuno sbucasse da dietro un angolo a spiegargli lo scherzo.

Il cielo era strano. Non nuvoloso, non sereno. Il sole sembrava stanco, come se stesse scivolando nella direzione sbagliata.

Tenne il telefono in tasca il più a lungo possibile. Poi lo tirò fuori.

5:30.

Rimase sul marciapiede, immobile, per circa venti minuti. Il traffico intorno a lui si assottigliava invece di crescere. Le macchine diminuivano. Il rumore della città si ritirava, piano, come un mare che si allontana dalla riva.

Poi vide una figura in fondo al marciapiede. Un uomo anziano, passo lento, che camminava nella sua direzione. Strano trovarne uno in giro a quell'ora, o almeno a quella che sembrava essere l'ora.

Gli andò incontro.

"Scusi," disse. "Mi sa dire che ore sono?"

Il vecchio si fermò. Lo guardò. Sorrise, di quel tipo di sorriso che non ha bisogno di spiegazioni. Poi abbassò gli occhi verso la sua tasca, quella dove teneva il telefono.

Lui lo capì. Lo tirò fuori, guardò lo schermo, e lesse.

8:15.`,
      en: `The alarm went off at 7:00.

He rolled over. Too early. Five more minutes, maybe ten. He was asleep again before he'd finished the thought.

It went off again. 7:15.

"Again?"

He reached out, eyes still closed, and didn't just snooze it — he turned everything off. Alarm, repeat, backup. Done.

Silence.

Then it went off again.

This time he sat up. He stayed still for a second, hand still on the nightstand. It wasn't possible. He'd turned it off, he'd really turned it off.

He looked at the clock radio. The display was flashing red.

7:00.

Again.

"It must be broken."

He picked it up. Pulled the plug from the wall. It went dark instantly, the display black. He checked for batteries just to be sure — there weren't any. He grabbed his phone, set an alarm for 8:00, checked it twice, put it down on the nightstand and got back under the covers.

"Goodnight everyone," he said quietly, with the weary irony of someone who's already lost.

His phone went off.

He looked at it with an expression that wasn't quite anger yet, but was getting there. The screen said 6:00.

He got up, shuffled to the window, and opened the curtain.

Outside, dawn. Barely there, hesitant, the kind of light that hasn't decided yet whether to stay.

So 6:00 was right. The phone wasn't broken. He was the one who'd gotten lost somewhere between one alarm and the next.

"Fine," he said to the glass. "Two more hours and then I'm actually getting up."

This time he was precise. He set it for 8:15, to make up for the minutes lost fighting with the alarms. He checked three times. He got back into bed with the resolve of someone who has solved a problem.

The alarm went off. 8:15.

He got up with the slow satisfaction of someone who has won. Went to the bathroom, washed his face, came back to get dressed.

That's when he looked at the window.

The light was wrong.

He couldn't explain it any better than that, at least not right away. It was simply wrong — the kind of light that belongs to earlier hours, not to eight fifteen.

He looked at his phone.

5:59.

He held it as the display ticked over to 6:00. And at that exact moment, from its spot on the nightstand, the clock radio went off. The one he'd unplugged. The one with no batteries.

He stood in the middle of the room, dressed, awake, the clock radio sounding and the sun still making up its mind.

Then he stopped trying to make sense of it and decided simply to wait. He sat on the edge of the bed, phone in hand, and watched the time pass. 7:00. 7:30. 8:00.

When the display read 8:15 for the second time, the light outside was finally right. He got up, finished getting ready, left the house without looking back.

The sun was where it should be, the street had the right kind of noise, everything seemed to have returned to the correct order of things.

He arrived at work.

No one.

Empty car park, lights off, door locked. He looked around as if expecting someone to step out from behind a corner and explain the joke.

The sky was strange. Not cloudy, not clear. The sun looked tired, as if it were sliding in the wrong direction.

He kept his phone in his pocket as long as he could. Then he took it out.

5:30.

He stood on the pavement, motionless, for about twenty minutes. The traffic around him thinned instead of growing. Cars disappeared. The noise of the city pulled back, slowly, like a sea retreating from the shore.

Then he saw a figure at the far end of the pavement. An elderly man, slow steps, walking in his direction. Strange to find one out for a walk at that hour — or at least, at whatever hour it seemed to be.

He went toward him.

"Excuse me," he said. "Could you tell me what time it is?"

The old man stopped. Looked at him. Smiled — the kind of smile that doesn't need explaining. Then he lowered his eyes toward his pocket, the one where he kept his phone.

He understood. He took it out, looked at the screen, and read.

8:15.`
    }
  },
  "lo-specchio-cieco": {
    game: "lo-specchio-cieco",
    gameLabel: { it: "Lo Specchio Cieco", en: "The Blind Mirror" },
    accentColor: "#87ceeb",
    title: {
      it: "Lo Specchio Cieco",
      en: "The Blind Mirror"
    },
    tag: {
      it: "psicologico",
      en: "psychological"
    },
    body: {
      it: `Al numero 22 di Viale dei Sogni c'è un antiquariato.

Un posto tranquillo, di quelli che esistono da sempre e nessuno sa bene perché. Mobili vecchi, quadri dimenticati, oggetti che hanno perso il loro proprietario originale e aspettano pazientemente il prossimo. Niente di straordinario, in apparenza.

Se non fosse per lo specchio in vetrina.

La cornice è dorata, elaborata, il tipo di lavoro che fa rallentare il passo anche a chi ha fretta. Forme tondeggianti che si intrecciano con una pazienza che oggi nessuno ha più. Vale la pena fermarcisi davanti, anche solo per quello.

Ma sotto la cornice, un cartellino scritto a mano recita con tono lapidario:

"Questa è la prova che siete vampiri."

Già.

Il problema è che non riflette nessuno. Nemmeno voi. Nemmeno adesso che vi siete avvicinati per controllare. La superficie è liscia, intatta, perfettamente indifferente alla vostra esistenza.

I passanti si fermano. Si guardano intorno, come a cercare una telecamera nascosta. Qualcuno ride, nervoso. Qualcuno entra nel negozio per protestare con il proprietario, un uomo anziano dall'aria placida che ascolta tutto con la stessa espressione di chi ha già sentito ogni versione possibile di quella conversazione. Qualcun altro tenta approcci più creativi: un passo indietro, due passi di lato, le braccia allargate, la faccia incollata al vetro. Una signora, un martedì mattina, ha insultato lo specchio a voce alta per quasi tre minuti. Lo specchio non ha commentato.

Alla fine, tutti si arrendono. Si rimettono in cammino con l'aria vagamente offesa di chi ha perso una discussione con un oggetto inanimato.

Il proprietario, dal fondo del negozio, osserva. Non dice niente. A volte sorride, ma così poco che potrebbe anche essere un'impressione.

Poi, un pomeriggio qualunque, passa una famiglia.

Padre, madre, un bambino addormentato nel passeggino e un figlio più grande che li segue a piedi. Sette anni, forse, le scarpe slacciate, lo sguardo di chi sta pensando a qualcosa di completamente diverso da dove sta andando.

Si ferma davanti allo specchio.

Ci rimane fermo qualche secondo. Immobile, lo sguardo fisso sulla superficie. Poi sulle sue labbra si apre un sorriso largo, soddisfatto, il tipo di sorriso che non ha bisogno di pubblico. Non dice niente. Non chiama i genitori. Gira sui tacchi e riprende a seguire la famiglia che intanto si è già allontanata.

Il proprietario, che aveva visto tutto, rimase a fissare il punto in cui il bambino era stato. Perplesso, per la prima volta da molto tempo.

Passarono diversi giorni.

Poi arrivò la bambina.

Sei anni, occhi svegli, il passo deciso di chi sa già dove vuole arrivare nella vita, anche se non lo sa ancora. Si fermò davanti allo specchio quasi per caso, trascinata dall'istinto di fermarsi davanti a qualcosa di lucido.

E sgranò gli occhi.

"Mamma!" gridò, con l'urgenza di chi ha appena fatto una scoperta che non può aspettare. "Mamma guarda, sono diventata un avvocato!"

La madre si girò. Guardò lo specchio. Non vide niente, né sé stessa né sua figlia. Quel genere di niente che non è tranquillizzante.

Entrò nel negozio con la bambina al seguito, ancora raggiante della sua nuova carriera legale. Raccontò tutto al proprietario, che ascoltò con attenzione, annuendo ogni tanto. Quando la donna finì di parlare, lui rimase un momento immobile. Poi volse lo sguardo verso lo specchio, poi verso la bambina, poi verso la madre.

La ringraziò. Senza spiegare niente.

Le due uscirono. La madre stranita, la bambina già oltre, probabilmente a pianificare il suo primo caso.

Sul marciapiede, la donna si girò verso la vetrina un'ultima volta. Ma non fu lo specchio a catturare la sua attenzione.

Fu il cartellino.

La scritta era cambiata.

"Lo specchio è cieco solo per coloro che non sanno vedere."

La madre rimase ferma un momento. Poi guardò sua figlia, che camminava avanti senza voltarsi, le scarpe che battevano sul marciapiede con la certezza allegra di chi non ha ancora imparato a dubitare di quello che vede.

Non disse niente.

Riprese a camminare.`,
      en: `At number 22 of Dream Avenue there is an antique shop.

A quiet place, the kind that has always been there and no one quite knows why. Old furniture, forgotten paintings, objects that have outlived their original owners and wait patiently for the next. Nothing extraordinary, on the surface.

Except for the mirror in the window.

The frame is golden, elaborate, the kind of craftsmanship that slows your step even when you are in a hurry. Rounded shapes intertwining with a patience no one has anymore. Worth stopping for, if only for that.

But beneath the frame, a handwritten card reads with blunt authority:

"This is proof that you are vampires."

Right.

The problem is that it reflects no one. Not even you. Not even now that you have stepped closer to check. The surface is smooth, intact, perfectly indifferent to your existence.

Passersby stop. They glance around, as if looking for a hidden camera. Some laugh, nervously. Some walk into the shop to complain to the owner — a calm, elderly man who listens to every version of that conversation with the expression of someone who has already heard them all. Others try more creative approaches: one step back, two steps to the side, arms spread wide, face pressed against the glass. One woman, on a Tuesday morning, spent nearly three minutes insulting the mirror out loud. The mirror had no comment.

In the end, everyone gives up. They walk away with the vaguely offended air of someone who has just lost an argument with an inanimate object.

The owner, from the back of the shop, watches. He says nothing. Sometimes he smiles, but so slightly it could just as easily be imagined.

Then, one unremarkable afternoon, a family walks by.

Father, mother, a sleeping child in the pushchair, and an older boy following on foot. Seven years old, perhaps, shoes untied, the look of someone thinking about something entirely unrelated to where he is going.

He stops in front of the mirror.

He stays there for a few seconds. Still, gaze fixed on the surface. Then a wide, satisfied smile spreads across his face — the kind of smile that does not need an audience. He says nothing. He does not call his parents. He turns on his heel and goes back to following the family, who have already drifted ahead.

The owner, who had watched the whole thing, stood staring at the spot where the boy had been. Puzzled, for the first time in a long while.

Several days passed.

Then the little girl arrived.

Six years old, bright eyes, the purposeful stride of someone who already knows where she wants to end up in life, even if she doesn't know it yet. She stopped in front of the mirror almost by accident, drawn by the instinct to pause in front of anything shiny.

And her eyes went wide.

"Mummy!" she called out, with the urgency of someone who has just made a discovery that cannot wait. "Mummy look, I've become a lawyer!"

Her mother turned. She looked at the mirror. She saw nothing — not herself, not her daughter. The kind of nothing that is not reassuring.

She went into the shop with the girl close behind, still beaming about her new legal career. She told the owner everything, who listened carefully, nodding here and there. When she finished, he stayed still for a moment. Then he turned his gaze to the mirror, then to the girl, then back to the mother.

He thanked her. Without explaining anything.

The two of them left. The mother baffled, the girl already elsewhere, probably planning her first case.

On the pavement, the woman turned back toward the window one last time. But it was not the mirror that caught her attention.

It was the card.

The writing had changed.

"The mirror is blind only to those who have forgotten how to see."

The mother stood still for a moment. Then she looked at her daughter, walking ahead without turning back, shoes striking the pavement with the cheerful certainty of someone who has not yet learned to doubt what she sees.

She said nothing.

She walked on.`
    }
  }
};

const LIBRI_ORDER = [];

const LIBRI = {};

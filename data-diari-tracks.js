// ---------------------------------------------------------
// Playlist delle recensioni di Diari di Gioco, duplicate qui in un
// file solo-dati (nessuna logica, nessun tocco al DOM) cosi' possono
// essere incluse anche su pagine diverse da diari_di_gioco.html —
// per ora solo Storie Senza Cornice, che le vuole nel suo menu
// playlist insieme a quelle di Il Filo Nascosto. Tenere sincronizzato
// a mano con le playlist vere in script-recensioni.js se cambiano.
// Shady Part of Me non ha ancora una sua playlist, quindi non compare.
// ---------------------------------------------------------
const DIARI_TRACKS = [
  {
    label: { it: "Final Fantasy VII", en: "Final Fantasy VII" },
    tracks: [
      { src: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Final%20Fantasy%20VII%20One-Winged%20Angel.mp3", title: "One-Winged Angel", game: "Final Fantasy VII" },
      { src: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Final%20Fantasy%20VII%20Aerith's%20Theme.mp3", title: "Aerith's Theme", game: "Final Fantasy VII" },
      { src: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Final%20Fantasy%20VII%20Cosmo%20Canyon.mp3", title: "Cosmo Canyon", game: "Final Fantasy VII" },
      { src: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Final%20Fantasy%20VII%20J.E.N.O.V.A.mp3", title: "J-E-N-O-V-A", game: "Final Fantasy VII" },
      { src: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Final%20Fantasy%20VII%20Those%20Who%20Fight.mp3", title: "Those Who Fight", game: "Final Fantasy VII" },
      { src: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Final%20Fantasy%20VII%20Bombing%20Mission.mp3", title: "Bombing Mission", game: "Final Fantasy VII" },
      { src: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Final%20Fantasy%20VII%20Judgement%20Day.mp3", title: "Judgement Day", game: "Final Fantasy VII" }
    ]
  },
  {
    label: { it: "Final Fantasy VIII Remastered", en: "Final Fantasy VIII Remastered" },
    tracks: [
      { src: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Final%20Fantasy%208%20Liberi%20Fatali.mp3", title: "Liberi Fatali", game: "Final Fantasy VIII" },
      { src: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Final%20Fantasy%208%20Eyes%20on%20Me.mp3", title: "Eyes on Me", game: "Final Fantasy VIII" },
      { src: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Final%20Fantasy%20VIII%20Balamb%20Garden.mp3", title: "Balamb Garden", game: "Final Fantasy VIII" },
      { src: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Final%20Fantasy%20VIII%20The%20Landing.mp3", title: "The Landing", game: "Final Fantasy VIII" },
      { src: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Final%20Fantasy%20VIII%20Force%20Your%20Way.mp3", title: "Force Your Way", game: "Final Fantasy VIII" },
      { src: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Final%20Fantasy%20VIII%20Premonition.mp3", title: "Premonition", game: "Final Fantasy VIII" },
      { src: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Final%20Fantasy%208%20The%20Man%20with%20the%20Machine%20Gun.mp3", title: "The Man with the Machine Gun", game: "Final Fantasy VIII" }
    ]
  },
  {
    label: { it: "Final Fantasy IX", en: "Final Fantasy IX" },
    tracks: [
      { src: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Final%20Fantasy%20IX%20Melodies%20of%20Life.mp3", title: "Melodies of Life", game: "Final Fantasy IX" },
      { src: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Final%20Fantasy%20IX%20You're%20Not%20Alone!.mp3", title: "You're Not Alone!", game: "Final Fantasy IX" },
      { src: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Final%20Fantasy%20IX%20Roses%20of%20May.mp3", title: "Roses of May", game: "Final Fantasy IX" },
      { src: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Final%20Fantasy%20IX%20Vamo'alla%20Flamenco.mp3", title: "Vamo'alla Flamenco", game: "Final Fantasy IX" },
      { src: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Final%20Fantasy%20IX%20Terra.mp3", title: "Terra", game: "Final Fantasy IX" },
      { src: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Final%20Fantasy%20IX%20Freya's%20Theme.mp3", title: "Freya's Theme", game: "Final Fantasy IX" },
      { src: "https://pub-de8310383cdb437f8f0b585a6642e88e.r2.dev/Final%20Fantasy%20IX%20Immoral%20Melody.mp3", title: "Immoral Melody", game: "Final Fantasy IX" }
    ]
  }
];

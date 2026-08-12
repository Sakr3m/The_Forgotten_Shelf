// ---------------------------------------------------------
// Playlist di Diari di Gioco per il menu playlist di Storie Senza
// Cornice: riferimenti diretti alla fonte condivisa
// (data-shared-tracks.js), non copie - se cambia qualcosa la' cambia
// automaticamente anche qui. "game" e' lo stesso slug interno usato
// in data-storie-teorie.js, cosi' il controllo duplicati in
// script-racconti.js riconosce che e' lo stesso titolo e non lo
// aggiunge due volte al menu. Shady Part of Me non ha ancora una sua
// playlist, quindi non compare.
// ---------------------------------------------------------
const DIARI_TRACKS = [
  { game: "ff7", label: { it: "Final Fantasy VII", en: "Final Fantasy VII" }, tracks: SHARED_FFVII_TRACKS },
  { game: "ff8", label: { it: "Final Fantasy VIII", en: "Final Fantasy VIII" }, tracks: SHARED_FFVIII_TRACKS },
  { game: "ff9", label: { it: "Final Fantasy IX", en: "Final Fantasy IX" }, tracks: SHARED_FFIX_TRACKS }
];

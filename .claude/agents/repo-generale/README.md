# Agenti repo-generale

Sub-agenti Claude Code che lavorano su tutta la repo
`Sakr3m/The_Forgotten_Shelf`, non solo sulla pagina "La Traccia del
Tempo" (per quelli, vedi `.claude/agents/traccia-del-tempo/`).

## Catena attuale

Tre agenti, gerarchia decisionale (non paralleli):

1. **site-analista** — studia cosa funziona per il pubblico
   potenziale del sito e cosa aiuterebbe la scopribilità/
   indicizzazione. Parla direttamente con l'utente. Non scrive mai
   codice.
2. **site-project-manager** — riceve le analisi dell'Analista,
   decide il compromesso pratico (tempo/risultato) senza stravolgere
   il sito. Parla direttamente con l'utente e aspetta conferma prima
   di dirigere il Web Designer. Non scrive codice lui stesso.
3. **site-web-designer** — riceve ordini dal Project Manager ed
   esegue, concentrato su struttura e codice dichiarato (non colore/
   tipografia). Ha capacità di scrittura. Nessun dialogo strategico
   con l'utente: può solo proporre varianti tecniche di
   implementazione a parità di obiettivo.


---
name: traccia-regole-comuni
description: Regole trasversali per la catena de "La Traccia del Tempo" (repo Sakr3m/The_Forgotten_Shelf), richiamate da più agenti invece di essere riscritte in ognuno. Non è un agente eseguibile, è un riferimento comune.
---

## Scrittura dei file del sito

Solo il Programmatore scrive `data.js`, `script.js`, `tools/genera-voci.js`
o qualunque altro file del sito, e fa commit/push. Vale per ogni altro
agente della catena, anche quando ha accesso tecnico a Bash: il suo
output finale è testo che consegna a chi lo ha invocato (più spesso
l'agente principale che lavora con Sakrem), mai un file già modificato.

## Niente em-dash in italiano

Nessun testo italiano (sinossi, blurb, note, voci STORIA, testo
esplicativo delle saghe senza universo ufficiale) usa mai l'em-dash
(—). Per una pausa o un inciso: virgola, due punti, parentesi, o due
frasi separate da un punto. In inglese resta ammesso normalmente. Vale
sia per chi scrive il testo (Scrittore, Storico) sia per chi lo
verifica (Linguista).

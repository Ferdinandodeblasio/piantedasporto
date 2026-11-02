# Piante d'Asporto · sito statico

Sito HTML/CSS senza build, pronto per GitHub Pages. Nessun cookie, nessun tracciamento, font ospitati nel sito.

## Pubblicare su GitHub Pages
1. Crea un repository e carica il contenuto di questa cartella (index.html in radice).
2. Settings → Pages → Deploy from a branch → `main` / root.
3. Dominio: tutti gli indirizzi assoluti usano `https://piantedasporto.it` (canonical, og:url, og:image, sitemap, robots).
   Se il dominio è un altro, sostituiscilo ovunque. Con un dominio proprio aggiungi un file `CNAME` con il dominio.
   `404.html` usa percorsi assoluti: funziona su dominio proprio, non su `utente.github.io/repo/`.

## Aggiungere un evento
In `index.html`, sezione "Prossimi appuntamenti": copia un `<li class="evento">` e cambia
`data-date` (AAAA-MM-GG), quartiere, data, sede, orari e l'oggetto in `data-mail`.
Gli eventi passati si nascondono da soli; se non ne resta nessuno compare "In arrivo".
Per controllare anche le schede passate apri `index.html?tutti`.
Il blocco workshop è già pronto, commentato, dentro la scheda.

## Scelte di design
- Logo: raster (PNG trasparente + WebP, 160–1040 px). Non vettorializzato: l'acquerello si perderebbe.
- Payoff: font `Homemade Apple` (corsivo a mano legato), non immagine. Compare nell'hero della Home e nel footer.
- Testo corrente: `Atkinson Hyperlegible`.
- Palette campionata dal logo:
  petrolio #004858 · teal #017A91 (link) · verde #31D170 (accenti, mai testo) ·
  arancio cannuccia #EA5A33 (decoro) → pulsante #C8431F con testo bianco (4.9:1) ·
  kraft #CBAE7B · argento #CACBCF · inchiostro #171714.
- SVG semplici aggiunti: tratto a mano (separatori), foglia e bolla (segni a margine nel Regolamento),
  bordo irregolare delle schede, sottolineatura del menu, tre bollicine animate nell'hero (ferme con prefers-reduced-motion).

# Sabor Café

Sito vetrina per **Sabor Café** — bar contemporaneo.
Identità calda ed elegante, palette caffè/crema/oro.

## Stack

- HTML5 semantico
- CSS moderno (custom properties, grid, clamp)
- Vanilla JS (IntersectionObserver, no dipendenze)
- Font: Cormorant Garamond + Inter (Google Fonts)
- Foto: Unsplash (sostituibili in produzione con materiale proprio)

## SEO

- Meta tag completi (title, description, canonical)
- Open Graph + Twitter Card
- JSON-LD `CafeOrCoffeeShop`
- `sitemap.xml` + `robots.txt`
- Markup semantico, immagini con `alt` e `loading="lazy"`

## Sviluppo locale

Apri `index.html` direttamente nel browser, oppure:

```bash
npx serve .
```

## Deploy

Sito statico — funziona su qualsiasi host (GitHub Pages, Netlify, Vercel, server statico classico).

### GitHub Pages

```bash
git push origin main
```

Poi nelle impostazioni del repo: **Settings → Pages → Branch: main / root**.

## Da personalizzare

- Foto (sostituire URL Unsplash con foto reali del bar)
- Indirizzo, orari e contatti nella sezione **Contatti**
- Logo dorato originale (al posto del monogramma "S" in CSS)
- `canonical` e `og:url` quando il dominio sarà definitivo

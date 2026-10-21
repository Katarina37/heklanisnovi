# Heklani snovi – web sajt

React + TypeScript (Vite). Boje: strawberry `#F9D1D9` i matcha `#838F58`.

## Pokretanje

```bash
npm install
npm run dev      # razvoj na http://localhost:5173
npm run build    # produkcijski build u folderu dist/
```

## Gdje idu tvoje slike (PNG bez pozadine)

Dok slika ne postoji, sajt prikazuje isprekidani okvir sa tačnim imenom fajla.
Samo ubaci PNG sa tim imenom i okvir nestaje.

| Mjesto na sajtu | Folder / fajl |
| --- | --- |
| Logo (krug u headeru) | `public/images/logo.png` |
| Glavna slika na vrhu | `public/images/hero.png` |
| Sekcija „Zašto mi” | `public/images/zasto.png` |
| Sekcija „Održavanje” | `public/images/odrzavanje.png` |
| Proizvodi | `public/images/products/<naziv>.png` |
| Instagram traka (6 slika) | `public/images/insta/insta-1.png` … `insta-6.png` |

Imena slika proizvoda su u `src/data/site.ts` (polje `image`).

## Kako mijenjati sadržaj

Sve tekstove, proizvode, kategorije, korake i linkove mijenjaš u **`src/data/site.ts`**.
Novi proizvod = novi objekat u listi `PRODUCTS` + PNG u `public/images/products/`.

## Napomene

- Forma za narudžbu kopira poruku i otvara Instagram DM (`ig.me/m/heklani__snovi`), jer Instagram ne dozvoljava predpopunjenu poruku.
- Opisi proizvoda i savjeti za održavanje su okvirni tekstovi, prilagodi ih svojim stvarnim proizvodima i materijalima.

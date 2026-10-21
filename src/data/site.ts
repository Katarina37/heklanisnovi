// Svi podaci o biznisu na jednom mjestu – ovdje mijenjaš tekstove, linkove i proizvode.

export const SITE = {
  name: 'Heklani snovi',
  tagline: 'Ručno heklane igračke i dekoracije',
  instagramHandle: 'heklani__snovi',
  instagramUrl: 'https://www.instagram.com/heklani__snovi/',
  // ig.me otvara direktnu poruku (DM) na Instagramu
  instagramDmUrl: 'https://ig.me/m/heklani__snovi',
  city: 'Bijeljina',
  pickup: 'Lično preuzimanje u Bijeljini',
  delivery: 'Dostava u sve gradove BiH',
  year: new Date().getFullYear(),
}

export const NAV = [
  { label: 'Početna', href: '#pocetna' },
  { label: 'Ponuda', href: '#ponuda' },
  { label: 'Naši radovi', href: '#radovi' },
  { label: 'Zašto mi', href: '#zasto' },
  { label: 'Kako naručiti', href: '#kako-naruciti' },
  { label: 'Održavanje', href: '#odrzavanje' },
  { label: 'Kontakt', href: '#kontakt' },
]

export type CategoryId = 'buketi' | 'igracke' | 'poklon-setovi' | 'dekoracije'

export interface Category {
  id: CategoryId
  title: string
  note: string
  color: string
  image: string
}

export const CATEGORIES: Category[] = [
  {
    id: 'buketi',
    title: 'Buketi',
    note: 'cvijeće koje ne vene',
    color: 'var(--tile-pink)',
    image: '/images/products/buket-srce-ruze.png',
  },
  {
    id: 'igracke',
    title: 'Igračke',
    note: 'amigurumi i meke igračke',
    color: 'var(--tile-butter)',
    image: '/images/products/meda.png',
  },
  {
    id: 'poklon-setovi',
    title: 'Poklon setovi',
    note: 'spremno za poklanjanje',
    color: 'var(--tile-peach)',
    image: '/images/products/meda-kutija-ruze.png',
  },
  {
    id: 'dekoracije',
    title: 'Dekoracije',
    note: 'korpice i ukrasi za dom',
    color: 'var(--tile-matcha)',
    image: '/images/products/lisica-korpica.png',
  },
]

export interface Product {
  id: string
  name: string
  category: CategoryId
  image: string
  description: string
  price?: string 
}

export const PRODUCTS: Product[] = [
  {
    id: 'buket-srce-ruze',
    name: 'Buket sa srcem i ružama',
    category: 'buketi',
    image: '/images/products/buket-srce-ruze.png',
    description: 'Bijele heklane ruže sa crvenim srcem, upakovane u papir sa mašnom.',
    price: '40 KM'
  },
  {
    id: 'buket-ruza-leptir',
    name: 'Ruža sa leptirom',
    category: 'buketi',
    image: '/images/products/ruza-leptir.png',
    description: 'Jedna velika ruža sa zlatnim leptirom – savršen mali poklon.',
    price: '35 KM'
  },
  {
    id: 'buket-meda-ruze',
    name: 'Buket sa medom i ružama',
    category: 'buketi',
    image: '/images/products/buket-meda-ruze.png',
    description: 'Crvene i bijele ruže sa malim medom u sredini.',
    price: '50 KM'
  },
  {
    id: 'meda-kutija-ruze',
    name: 'Meda u kutiji sa ružama',
    category: 'poklon-setovi',
    image: '/images/products/meda-kutija-ruze.png',
    description: 'Meda među ružičastim ružama u kutiji u obliku srca.',
    price: '50 KM'
  },
  {
    id: 'srca',
    name: 'Srca i ruže u kutiji',
    category: 'poklon-setovi',
    image: '/images/products/srca-ruze.png',
    description: 'Srca i ruže u kutiji.',
    price: '40 KM'
  },
  {
    id: 'meda-tulipani',
    name: 'Meda sa tulipanima i ružama',
    category: 'poklon-setovi',
    image: '/images/products/meda-tulipani.png',
    description: 'Tulipani i meda u plavoj kutiji sa zvjezdicama.',
    price: '55 KM'
  },
  {
    id: 'meda-srca',
    name: 'Meda sa srcima i ružama',
    category: 'poklon-setovi',
    image: '/images/products/meda-srca.png',
    description: 'Meda sa krilima i srdašcima u kutiji sa žutom mašnom.',
    price: '50 KM'
  },
    {
    id: 'diplomski-buket',
    name: 'Buket ruža za diplomski',
    category: 'buketi',
    image: '/images/products/diplomski-buket.png',
    description: 'Buket za diplomski sa ružama i medom.',
    price: '50 KM'
  },
  {
    id: 'meda-braon',
    name: 'Meda',
    category: 'igracke',
    image: '/images/products/meda.png',
    description: 'Klasični heklani meda, mekan na dodir.',
    price: '50 KM'
  },
  {
    id: 'zeka-ljubicasta',
    name: 'Zeko u ljubičastom odijelu',
    category: 'igracke',
    image: '/images/products/zeka-ljubicasta.png',
    description: 'Plišani zeka od mekane pređe.',
    price: '35 KM'
  },
  {
    id: 'pace',
    name: 'Žuto pače',
    category: 'igracke',
    image: '/images/products/pace.png',
    description: 'Pače sa bijelom mašnom.',
    price: '40 KM'
  },
  {
    id: 'lisica-korpica',
    name: 'Korpica lisica',
    category: 'dekoracije',
    image: '/images/products/lisica-korpica.png',
    description: 'Heklana korpica za sitnice sa lisicom.',
    price: '40 KM'
  },
  {
    id: 'korpica-srca',
    name: 'Korpica sa mašnicama',
    category: 'dekoracije',
    image: '/images/products/korpica-srca.png',
    description: 'Korpica sa malim mašnicama.',
    price: '30 KM'
  },
  {
    id: 'kravica',
    name: 'Kravica',
    category: 'igracke',
    image: '/images/products/kravica.png',
    description: 'Amigurumi kravica.',
    price: '25 KM'
  },
  {
    id: 'zeko-zuti',
    name: 'Zeko u žutom odijelu',
    category: 'igracke',
    image: '/images/products/zeko-zuti.png',
    description: 'Amigurumi zeko u žutom odijelu.',
    price: '25 KM'
  },
  {
    id: 'medo-amigurumi',
    name: 'Medo',
    category: 'igracke',
    image: '/images/products/amigurumi-medo.png',
    description: 'Amigurumi medo.',
    price: '30 KM'
  },
  {
    id: 'zeko-roze',
    name: 'Zeko u roze odijelu',
    category: 'igracke',
    image: '/images/products/zeko-roze.png',
    description: 'Amigurumi zeko u roze odijelu.',
    price: '30 KM'
  },
  {
    id: 'zeko-haljina',
    name: 'Zeko u haljinici',
    category: 'igracke',
    image: '/images/products/zeko-haljina.png',
    description: 'Zeko u ljubičastoj haljinici.',
    price: '40 KM'
  },
  {
    id: 'vinipu',
    name: 'Vini Pu',
    category: 'igracke',
    image: '/images/products/vinipu.png',
    description: 'Mekani Vini Pu.',
    price: '40 KM'
  },
]

export const OFFER = [
  'Amigurumi igračke',
  'Heklani buketi',
  'Poklon setovi',
  'Korpice i dekoracije',
  'Personalizovani pokloni',
  'Narudžbe po želji',
]

export const WHY = [
  'Svaka igračka i svaki detalj rade se ručno',
  'Biramo mekane i kvalitetne materijale',
  'Možeš izabrati boje i model',
  'Idealno za rođendane, vjenčanja, krštenja i godišnjice',
  'Pakujemo spremno za poklon',
  'Svaki komad pravi se sa puno ljubavi i pažnje',
]

export const STEPS = [
  { title: 'Izaberi model', text: 'Pogledaj galeriju ovdje ili na Instagramu i odaberi šta ti se sviđa.' },
  { title: 'Personalizuj', text: 'Izaberi boju, veličinu i tip rada koji ti odgovara.' },
  { title: 'Pošalji narudžbu', text: 'Napiši nam poruku na Instagramu (DM) ili popuni formu ispod.' },
  { title: 'Preuzmi ili primi', text: 'Lično preuzimanje u Bijeljini ili dostava u sve gradove BiH.' },
]

export const CARE = [
  { icon: '🧺', text: 'Najbolje ručno pranje u mlakoj vodi' },
  { icon: '🚫', text: 'Bez jakih deterdženata i izbjeljivača' },
  { icon: '☀️', text: 'Prirodno sušenje, ne u sušilici' },
  { icon: '🌸', text: 'Cvijeće i dekoracije održavati brisanjem prašine' },
]

export const MODEL_OPTIONS = ['Buket', 'Meda', 'Zeka', 'Pače', 'Poklon set', 'Korpica', 'Drugo / po dogovoru']

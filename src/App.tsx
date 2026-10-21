import { useState } from 'react'
import type { CategoryId } from './data/site'
import Header from './components/Header'
import Hero from './components/Hero'
import Ponuda from './components/Ponuda'
import Radovi from './components/Radovi'
import Zasto from './components/Zasto'
import KakoNaruciti from './components/KakoNaruciti'
import Odrzavanje from './components/Odrzavanje'
import Kontakt from './components/Kontakt'
import Instagram from './components/Instagram'
import Footer from './components/Footer'
import Padavine from './components/Padavine'

export default function App() {
  const [category, setCategory] = useState<CategoryId | 'sve'>('sve')

  return (
    <>
      <Padavine/>
      <Header />
      <main>
        <Hero />
        <Ponuda onPick={setCategory} />
        <Radovi active={category} onChange={setCategory} />
        <Zasto />
        <KakoNaruciti />
        <Odrzavanje />
        <Kontakt />
        <Instagram />
      </main>
      <Footer />
    </>
  )
}

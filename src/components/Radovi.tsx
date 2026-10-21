import { useEffect, useState } from 'react'
import { CATEGORIES, PRODUCTS, SITE } from '../data/site'
import type { CategoryId, Product } from '../data/site'
import SlikaProizvoda from './SlikaProizvoda'

interface Props {
  active: CategoryId | 'sve'
  onChange: (id: CategoryId | 'sve') => void
}

export default function Radovi({ active, onChange }: Props) {
  const list = active === 'sve' ? PRODUCTS : PRODUCTS.filter((p) => p.category === active)
  const [selected, setSelected] = useState<Product | null>(null)

  // Esc zatvara, a stranica iza se ne pomjera dok je prozor otvoren
  useEffect(() => {
    if (!selected) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelected(null)
    }
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prevOverflow
      window.removeEventListener('keydown', onKey)
    }
  }, [selected])

  function orderProduct(p: Product) {
    sessionStorage.setItem('hs-model', p.name)
    setSelected(null)
  }

  return (
    <section id="radovi" className="section section--cream">
      <div className="container">
        <p className="eyebrow center">Naši radovi</p>
        <h2 className="center">Mali snovi spremni za dom</h2>

        <div className="filters" role="tablist" aria-label="Kategorije">
          <button
            role="tab"
            aria-selected={active === 'sve'}
            className={`filter ${active === 'sve' ? 'filter--on' : ''}`}
            onClick={() => onChange('sve')}
          >
            Sve
          </button>
          {CATEGORIES.map((c) => (
            <button
              key={c.id}
              role="tab"
              aria-selected={active === c.id}
              className={`filter ${active === c.id ? 'filter--on' : ''}`}
              onClick={() => onChange(c.id)}
            >
              {c.title}
            </button>
          ))}
        </div>

        <div className="grid">
          {list.map((p) => (
            <article key={p.id} className="card">
              <button
                type="button"
                className="card__media"
                onClick={() => setSelected(p)}
                aria-label={`Uvećaj sliku: ${p.name}`}
              >
                <SlikaProizvoda src={p.image} alt={p.name} />
              </button>
              <div className="card__body">
                <h3>{p.name}</h3>
                <p>{p.description}</p>
                <div className="card__foot">
                  <span className="price">{p.price ?? 'Cijena na upit'}</span>
                  <a className="btn btn--small" href="#kontakt" onClick={() => orderProduct(p)}>
                    Naruči
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="center more">
          <a className="btn btn--ghost" href={SITE.instagramUrl} target="_blank" rel="noreferrer">
            Još radova na Instagramu →
          </a>
        </p>
      </div>

      {selected && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={selected.name}
          onClick={() => setSelected(null)}
        >
          <div className="lightbox__panel" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="lightbox__close"
              aria-label="Zatvori"
              onClick={() => setSelected(null)}
            >
              ×
            </button>
            <div className="lightbox__media">
              <SlikaProizvoda src={selected.image} alt={selected.name} />
            </div>
            <div className="lightbox__info">
              <h3>{selected.name}</h3>
              <p>{selected.description}</p>
              <div className="lightbox__foot">
                <span className="price">{selected.price ?? 'Cijena na upit'}</span>
                <a className="btn" href="#kontakt" onClick={() => orderProduct(selected)}>
                  Naruči
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
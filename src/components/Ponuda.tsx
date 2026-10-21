import { CATEGORIES, OFFER } from '../data/site'
import type { CategoryId } from '../data/site'

interface Props {
  onPick: (id: CategoryId) => void
}

export default function Ponuda({ onPick }: Props) {
  return (
    <section id="ponuda" className="section">
      <div className="container">
        <p className="eyebrow center">Ponuda</p>
        <h2 className="center">Šta sve pravimo</h2>

        <div className="tiles">
          {CATEGORIES.map((c) => (
            <a
              key={c.id}
              href="#radovi"
              className="tile"
              style={{ background: c.color, '--tile-bg': c.color } as React.CSSProperties}
              onClick={() => onPick(c.id)}
            >
              <img
                className="tile__img"
                src={c.image}
                alt=""
                loading="lazy"
                onError={(e) => (e.currentTarget.style.display = 'none')}
              />
              <span className="tile__title">{c.title}</span>
              <span className="tile__note">{c.note}</span>
            </a>
          ))}
        </div>

        <ul className="offer">
          {OFFER.map((o) => (
            <li key={o}>{o}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}

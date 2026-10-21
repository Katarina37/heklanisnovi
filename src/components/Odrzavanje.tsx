import { CARE } from '../data/site'
import SlikaProizvoda from './SlikaProizvoda'

export default function Odrzavanje() {
  return (
    <section id="odrzavanje" className="section section--cream">
      <div className="container care">
        <div>
          <p className="eyebrow">Održavanje</p>
          <h2>Da ostane mekano i lijepo</h2>
          <p className="lead">
            Uz malo pažnje tvoj heklani komad dugo ostaje nježan saputnik u igri i ukras doma.
          </p>
          <ul className="care__list">
            {CARE.map((c) => (
              <li key={c.text}>
                <span className="care__icon" aria-hidden="true">
                  {c.icon}
                </span>
                {c.text}
              </li>
            ))}
          </ul>
        </div>
        <div className="care__art">
          <SlikaProizvoda
            src="/images/odrzavanje.png"
            alt="Heklana igračka"
            hint="Slika uz sekciju „Održavanje” (PNG bez pozadine)"
          />
        </div>
      </div>
    </section>
  )
}

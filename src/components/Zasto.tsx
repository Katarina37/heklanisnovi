import { WHY } from '../data/site'
import SlikaProizvoda from './SlikaProizvoda'

export default function Zasto() {
  return (
    <section id="zasto" className="band">
      <div className="container band__grid">
        <div className="band__art">
          <SlikaProizvoda
            src="/images/zasto.png"
            alt="Heklana igračka"
            hint="Slika uz sekciju „Zašto mi” (PNG bez pozadine)"
          />
        </div>
        <div>
          <p className="eyebrow eyebrow--light">Zašto Heklani snovi</p>
          <h2>Pravimo sa ljubavlju, komad po komad</h2>
          <ul className="checks">
            {WHY.map((w) => (
              <li key={w}>{w}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

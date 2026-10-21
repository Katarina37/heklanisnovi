import { SITE } from '../data/site'
import SlikaProizvoda from './SlikaProizvoda'

const SLOTS = Array.from({ length: 6 }, (_, i) => `/images/insta/insta-${i + 1}.png`)

export default function Instagram() {
  return (
    <section className="section section--cream" aria-labelledby="ig-title">
      <div className="container">
        <p className="eyebrow center">Instagram</p>
        <h2 id="ig-title" className="center">
          Zaprati nas na Instagramu
        </h2>
        <p className="center">
          <a className="insta__handle" href={SITE.instagramUrl} target="_blank" rel="noreferrer">
            @{SITE.instagramHandle}
          </a>
        </p>

        <div className="insta">
          {SLOTS.map((src, i) => (
            <a key={src} href={SITE.instagramUrl} target="_blank" rel="noreferrer" className="insta__item">
              <SlikaProizvoda src={src} alt={`Heklani snovi na Instagramu ${i + 1}`} hint="Slika sa Instagrama" />
              <span className="insta__overlay" aria-hidden="true">
                ♥ Pogledaj
              </span>
            </a>
          ))}
        </div>

        <p className="center more">
          <a className="btn" href={SITE.instagramUrl} target="_blank" rel="noreferrer">
            Zaprati nas →
          </a>
        </p>
      </div>
    </section>
  )
}
import { SITE } from '../data/site'
import SlikaProizvoda from './SlikaProizvoda'

export default function Hero() {
  return (
    <section id="pocetna" className="hero">
      <div className="container hero__grid">
        <div className="hero__text">
          <p className="eyebrow">Ručno heklano</p>
          <h1>
            Novi
            <br />
            <span className="script">snovi</span> za tebe
          </h1>
          <p className="lead">
            Heklane igračke, buketi, poklon setovi i dekoracije koje unose toplinu u dom. Izaberi model i boje i mi ga pravimo po tvojoj želji.
          </p>
          <div className="hero__actions">
            <a className="btn" href="#radovi">
              Pogledaj radove
            </a>
            <a className="btn btn--ghost" href={SITE.instagramDmUrl} target="_blank" rel="noreferrer">
              Naruči na Instagramu
            </a>
          </div>
          <ul className="chips">
            <li>100% ručni rad</li>
            <li>Idealno za poklon</li>
            <li>Dostava širom BiH</li>
          </ul>
        </div>

        <div className="hero__art">
          <div className="blob" aria-hidden="true" />
          <span className="sticker" aria-hidden="true">
            ručno
            <br />
            rađeno
          </span>
          <SlikaProizvoda
            className="hero__img"
            src="/images/hero.png"
            alt="Heklani buket i meda, Heklani snovi"
            hint="Glavna slika (PNG bez pozadine), npr. buket ili meda"
          />
          <span className="deco deco--flower" aria-hidden="true">
            ✿
          </span>
          <span className="deco deco--heart" aria-hidden="true">
            ♥
          </span>
        </div>
      </div>
    </section>
  )
}

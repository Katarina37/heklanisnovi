import { NAV, SITE } from '../data/site'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__wave" aria-hidden="true">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none">
          <path
            d="M0,30 C240,70 480,0 720,30 C960,60 1200,10 1440,30 L1440,60 L0,60 Z"
            fill="currentColor"
          />
        </svg>
      </div>

      <div className="container footer__grid">
        <div className="footer__brand">
          <a href="#pocetna" className="footer__logo">
            <img
              src="/images/logo.png"
              alt="Heklani snovi"
              onError={(e) => (e.currentTarget.style.display = 'none')}
            />
          </a>
          <p className="footer__name">{SITE.name}</p>
          <p className="footer__tagline">{SITE.tagline}</p>
          <a className="footer__ig" href={SITE.instagramUrl} target="_blank" rel="noreferrer">
            @{SITE.instagramHandle}
          </a>
        </div>

        <nav className="footer__col" aria-label="Podnožje">
          <h3>Meni</h3>
          <ul>
            {NAV.map((n) => (
              <li key={n.href}>
                <a href={n.href}>{n.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer__col">
          <h3>Narudžbe</h3>
          <ul className="footer__info">
            <li>📍 {SITE.city}, lično preuzimanje</li>
            <li>📦 {SITE.delivery}</li>
            <li>💌 Narudžbe putem Instagram poruka</li>
          </ul>
          <a className="btn footer__btn" href="#kontakt">
            Naruči
          </a>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>
          © {SITE.year} {SITE.name}. Sva prava zadržana.
        </p>
        <p>Napravljeno s ♥ i puno heklanja</p>
      </div>
    </footer>
  )
}
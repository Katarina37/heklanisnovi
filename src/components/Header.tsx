import { useState } from 'react'
import { NAV, SITE } from '../data/site'

export default function Header() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header className="header">
      <div className="announce">
        ✿ {SITE.delivery} · {SITE.pickup} ✿
      </div>
      <div className="header__bar container">
        <a href="#pocetna" className="brand" onClick={close}>
          <img
            className="brand__logo"
            src="/images/logo.png"
            alt=""
            onError={(e) => (e.currentTarget.style.display = 'none')}
          />
          <span className="brand__name">{SITE.name}</span>
        </a>

        <nav className={`nav ${open ? 'nav--open' : ''}`} aria-label="Glavni meni">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} onClick={close}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="btn btn--small header__cta" href="#kontakt">
          Naruči
        </a>

        <button
          className="burger"
          aria-label={open ? 'Zatvori meni' : 'Otvori meni'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}

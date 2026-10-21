import { useEffect, useState } from 'react'
import type { FormEvent } from 'react'
import { MODEL_OPTIONS, SITE } from '../data/site'
export default function Kontakt() {
  const [name, setName] = useState('')
  const [model, setModel] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<'idle' | 'copied'>('idle')

  // Ako je kupac kliknuo "Naruči" na proizvodu, predpopuni model
  useEffect(() => {
    const onHash = () => {
      if (window.location.hash === '#kontakt') {
        const saved = sessionStorage.getItem('hs-model')
        if (saved) {
          setModel(saved)
          sessionStorage.removeItem('hs-model')
        }
      }
    }
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  // Instagram ne dozvoljava predpopunjenu poruku, pa je kopiramo i odmah otvaramo DM.
  function onSubmit(e: FormEvent) {
    e.preventDefault()
    const text = [
      'Zdravo! Želim da naručim:',
      model && `Model: ${model}`,
      message && `Detalji narudžbe: ${message}`,
      name && `Ime i prezime: ${name}`,
    ]
      .filter(Boolean)
      .join('\n')

    navigator.clipboard?.writeText(text).catch(() => {})
    window.open(SITE.instagramDmUrl, '_blank', 'noopener')
    setStatus('copied')
  }

  return (
    <section id="kontakt" className="section">
      <div className="container contact">
        <div className="contact__info">
          <p className="eyebrow">Kontakt</p>
          <h2>Naruči svoj heklani san</h2>
          <p className="lead">
            Popuni formu ili nam piši direktno na Instagram. Javljamo se u najkraćem roku.
          </p>

          <ul className="info">
            <li>
              <span className="info__icon" aria-hidden="true">
                📸
              </span>
              <div>
                <strong>Instagram</strong>
                <a href={SITE.instagramUrl} target="_blank" rel="noreferrer">
                  @{SITE.instagramHandle}
                </a>
              </div>
            </li>
            <li>
              <span className="info__icon" aria-hidden="true">
                📍
              </span>
              <div>
                <strong>Preuzimanje</strong>
                <span>{SITE.city} (lično)</span>
              </div>
            </li>
            <li>
              <span className="info__icon" aria-hidden="true">
                📦
              </span>
              <div>
                <strong>Dostava</strong>
                <span>u sve gradove BiH</span>
              </div>
            </li>
            <li>
              <span className="info__icon" aria-hidden="true">
                💌
              </span>
              <div>
                <strong>Narudžbe</strong>
                <span>putem Instagram poruka (DM)</span>
              </div>
            </li>
          </ul>
        </div>

        <form className="form" onSubmit={onSubmit}>
          <div className="form__row">
            <label>
              Ime i prezime
              <input value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" />
            </label>
            <label>
              Model
              <input
                list="modeli"
                value={model}
                onChange={(e) => setModel(e.target.value)}
                placeholder="Izaberi ili upiši"
              />
              <datalist id="modeli">
                {MODEL_OPTIONS.map((m) => (
                  <option key={m} value={m} />
                ))}
              </datalist>
            </label>
          </div>

          <label>
            Poruka
            <textarea
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Boje, veličina, ime na igračci, rok…"
            />
          </label>

          <button className="btn" type="submit">
            Pošalji narudžbu
          </button>

          {status === 'copied' && (
            <p className="form__note">
              Poruka je kopirana. U Instagram chatu drži prst na polju za poruku, odaberi „Zalijepi” i
              pošalji. 💌
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
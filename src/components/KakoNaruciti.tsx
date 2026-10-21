import type { CSSProperties } from 'react'
import { STEPS } from '../data/site'

const COLORS = ['var(--tile-pink)', 'var(--tile-butter)', 'var(--tile-peach)', 'var(--tile-matcha)']

export default function KakoNaruciti() {
  return (
    <section id="kako-naruciti" className="section">
      <div className="container">
        <p className="eyebrow center">Kako naručiti</p>
        <h2 className="center">Od ideje do zagrljaja</h2>

        <ol className="steps">
          {STEPS.map((s, i) => (
            <li key={s.title} className="step" style={{ '--c': COLORS[i % COLORS.length] } as CSSProperties}>
              <span className="step__num">{i + 1}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>

        <p className="center more">
          <a className="btn" href="#kontakt">
            Započni narudžbu
          </a>
        </p>
      </div>
    </section>
  )
}
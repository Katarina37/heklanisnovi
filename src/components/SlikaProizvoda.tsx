import { useState } from 'react'

interface Props {
  src: string
  alt: string
  /** Kratko objašnjenje šta ide na ovo mjesto (vidi se samo dok slike nema) */
  hint?: string
  className?: string
}

/**
 * Prikazuje PNG sliku ako postoji. Ako fajl još nije ubačen u /public,
 * prikazuje isprekidani okvir sa tačnim imenom fajla koji treba dodati.
 */
export default function SlikaProizvoda({ src, alt, hint, className = '' }: Props) {
  const [missing, setMissing] = useState(false)
  const fileName = src.split('/').pop()

  if (missing) {
    return (
      <div className={`img-slot ${className}`} role="img" aria-label={`Mjesto za sliku: ${alt}`}>
        <span className="img-slot__icon" aria-hidden="true">
          🧶
        </span>
        <span className="img-slot__title">{hint ?? 'Ovdje ide slika (PNG)'}</span>
        <code className="img-slot__file">{fileName}</code>
      </div>
    )
  }

  return <img className={className} src={src} alt={alt} loading="lazy" onError={() => setMissing(true)} />
}

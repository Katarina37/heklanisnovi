import { useEffect, useMemo, useState } from 'react'

const SYMBOLS = ['♥', '✿', '❀', '♥', '✿']
const COLORS = ['#e98fa3', '#f9d1d9', '#838f58', '#f4b6c4']
const COUNT = 40

export default function Padavine() {
  const [visible, setVisible] = useState(true)

  const pieces = useMemo(
    () =>
      Array.from({ length: COUNT }, (_, i) => ({
        id: i,
        symbol: SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)],
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        left: Math.random() * 100, // % širine ekrana
        size: 16 + Math.random() * 22, // px
        delay: Math.random() * 2.5, // s
        duration: 4 + Math.random() * 3, // s
        drift: (Math.random() - 0.5) * 160, // px ulijevo/udesno
        spin: (Math.random() - 0.5) * 720, // stepeni
      })),
    [],
  )

  useEffect(() => {
    // ne prikazuj ako korisnik ne voli animacije
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(false)
      return
    }
    const t = setTimeout(() => setVisible(false), 10000)
    return () => clearTimeout(t)
  }, [])

  if (!visible) return null

  return (
    <div className="padavine" aria-hidden="true">
      {pieces.map((p) => (
        <span
          key={p.id}
          className="padavine__item"
          style={
            {
              left: `${p.left}%`,
              fontSize: `${p.size}px`,
              color: p.color,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
              '--drift': `${p.drift}px`,
              '--spin': `${p.spin}deg`,
            } as React.CSSProperties
          }
        >
          {p.symbol}
        </span>
      ))}
    </div>
  )
}
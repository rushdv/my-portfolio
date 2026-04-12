'use client'

import { useEffect, useState } from 'react'

export default function ScrollProgress() {
  const [pct, setPct] = useState(0)

  useEffect(() => {
    const fn = () => {
      const el = document.documentElement
      const scrolled = el.scrollTop
      const total = el.scrollHeight - el.clientHeight
      setPct(total > 0 ? (scrolled / total) * 100 : 0)
    }
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] h-0.5" style={{ background: 'transparent' }}>
      <div
        className="h-full transition-none"
        style={{
          width: `${pct}%`,
          background: 'linear-gradient(to right, #38bdf8, #22c55e)',
        }}
      />
    </div>
  )
}

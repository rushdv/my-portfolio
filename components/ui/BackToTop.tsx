'use client'

import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const fn = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  if (!visible) return null

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      className="fixed bottom-8 right-6 z-50 w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 cursor-pointer"
      style={{
        background: 'linear-gradient(135deg, #38bdf8, #22c55e)',
        color: '#0d1117',
        border: 'none',
        boxShadow: '0 4px 20px rgba(56,189,248,0.35)',
      }}
    >
      <ArrowUp size={16} />
    </button>
  )
}

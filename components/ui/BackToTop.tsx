'use client'

import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const SIZE = 44
const STROKE = 2.5
const RADIUS = (SIZE - STROKE * 2) / 2
const CIRCUMFERENCE = 2 * Math.PI * RADIUS

export default function BackToTop() {
  const [pct, setPct] = useState(0)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const fn = () => {
      const el = document.documentElement
      const scrolled = el.scrollTop
      const total = el.scrollHeight - el.clientHeight
      const p = total > 0 ? (scrolled / total) * 100 : 0
      setPct(p)
      setVisible(scrolled > 300)
    }
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const dashOffset = CIRCUMFERENCE - (pct / 100) * CIRCUMFERENCE

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
          className="fixed bottom-8 right-6 z-50 cursor-pointer flex items-center justify-center"
          style={{
            width: SIZE,
            height: SIZE,
            background: 'none',
            border: 'none',
            padding: 0,
          }}
        >
          {/* SVG progress ring */}
          <svg
            width={SIZE}
            height={SIZE}
            style={{ position: 'absolute', top: 0, left: 0, transform: 'rotate(-90deg)' }}
          >
            {/* Track */}
            <circle
              cx={SIZE / 2}
              cy={SIZE / 2}
              r={RADIUS}
              fill="none"
              stroke="var(--border)"
              strokeWidth={STROKE}
            />
            {/* Progress */}
            <circle
              cx={SIZE / 2}
              cy={SIZE / 2}
              r={RADIUS}
              fill="none"
              stroke="var(--dev)"
              strokeWidth={STROKE}
              strokeLinecap="round"
              strokeDasharray={CIRCUMFERENCE}
              strokeDashoffset={dashOffset}
              style={{ transition: 'stroke-dashoffset 0.15s ease' }}
            />
          </svg>

          {/* Inner button face */}
          <div
            className="relative z-10 flex items-center justify-center rounded-full transition-all duration-200"
            style={{
              width: SIZE - STROKE * 4,
              height: SIZE - STROKE * 4,
              background: 'var(--card)',
              color: 'var(--dev)',
            }}
          >
            <ArrowUp size={15} strokeWidth={2.5} />
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  )
}

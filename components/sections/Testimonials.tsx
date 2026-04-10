'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { testimonials } from '@/content/testimonials'

export default function Testimonials() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="testimonials" className="py-20 px-6 max-w-6xl mx-auto" ref={ref}>
      <motion.div initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
        <p className="section-label dev">Testimonials</p>
        <h2 className="section-title dev">What Clients Say</h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-5">
        {testimonials.map((t, i) => (
          <motion.div key={i} className="portfolio-card flex flex-col p-6"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>
            <div className="mb-4 text-2xl" style={{ color: 'rgba(56,189,248,0.3)', fontFamily: 'ui-monospace, monospace' }}>&ldquo;</div>
            <div className="flex gap-1 mb-3">
              {[...Array(5)].map((_, j) => (
                <svg key={j} width="12" height="12" viewBox="0 0 24 24" fill="var(--dev)">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <p className="text-sm leading-relaxed flex-1 italic mb-5" style={{ color: 'var(--muted-foreground)' }}>
              {t.quote}
            </p>
            <div className="flex items-center gap-3 pt-4" style={{ borderTop: '1px solid var(--border)' }}>
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                style={{ background: 'rgba(56,189,248,0.1)', color: 'var(--dev)', fontFamily: 'ui-monospace, monospace', border: '1px solid rgba(56,189,248,0.2)' }}>
                {t.name[0]}
              </div>
              <div>
                <p className="font-semibold text-sm" style={{ color: 'var(--foreground)' }}>{t.name}</p>
                <p className="text-xs" style={{ color: 'var(--muted-foreground)' }}>{t.role} @ {t.company}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

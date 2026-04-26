'use client'

import { motion, AnimatePresence, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ArrowUpRight, Clock, Shield, BookOpen, FlaskConical } from 'lucide-react'
import { writeups } from '@/content/writeups'
import SectionHeader from '@/components/ui/SectionHeader'

const categoryConfig = {
  ctf:      { label: 'CTF',      icon: Shield,       color: 'var(--sec)',  dim: 'var(--sec-dim)',  border: 'var(--sec-border)' },
  blog:     { label: 'Blog',     icon: BookOpen,     color: 'var(--dev)',  dim: 'var(--dev-dim)',  border: 'var(--dev-border)' },
  research: { label: 'Research', icon: FlaskConical, color: 'var(--dev-2)', dim: 'rgba(129,140,248,0.08)', border: 'rgba(129,140,248,0.18)' },
}

const tabs = ['All', 'CTF', 'Blog', 'Research'] as const

function formatDate(d: string) {
  return new Date(d).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}

export default function Writeups() {
  const [active, setActive] = useState<typeof tabs[number]>('All')
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  const filtered = active === 'All' ? writeups : writeups.filter(w => w.category === active.toLowerCase())

  return (
    <section id="writeups" className="py-16 px-6 max-w-7xl mx-auto" ref={ref}>
      <motion.div initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="mb-8">
        <SectionHeader label="Insights" title="Security Writeups" icon={BookOpen} accentColor="var(--sec)" />

        <div className="inline-flex p-1 rounded-lg gap-1"
          style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
          {tabs.map((tab) => (
            <button key={tab} onClick={() => setActive(tab)}
              className="px-4 py-1.5 rounded-md text-xs font-semibold transition-all"
              style={{
                background: active === tab ? 'var(--dev)' : 'transparent',
                color: active === tab ? '#fff' : 'var(--muted-foreground)',
                border: 'none', cursor: 'pointer',
              }}>
              {tab}
            </button>
          ))}
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <AnimatePresence mode="popLayout">
          {filtered.map((w, i) => {
            const cat = categoryConfig[w.category as keyof typeof categoryConfig]
            const Icon = cat.icon
            return (
              <motion.article
                key={w.slug}
                layout
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                className="flex flex-col p-5 rounded-xl transition-all duration-200"
                style={{ border: '1px solid var(--border)', background: 'var(--card)' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = cat.border }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)' }}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-md flex items-center justify-center"
                      style={{ background: cat.dim, color: cat.color, border: `1px solid ${cat.border}` }}>
                      <Icon size={13} />
                    </div>
                    <span className="text-xs font-semibold" style={{ color: cat.color }}>{cat.label}</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs" style={{ color: 'var(--muted-foreground)' }}>
                    <Clock size={11} /> {w.readTime}
                  </div>
                </div>

                <h3 className="font-semibold leading-snug mb-2" style={{ fontSize: '0.95rem', color: 'var(--foreground)' }}>{w.title}</h3>
                <p className="leading-relaxed flex-1 mb-4" style={{ fontSize: '0.85rem', color: 'var(--muted-foreground)' }}>{w.excerpt}</p>

                <div className="flex items-center justify-between pt-3" style={{ borderTop: '1px solid var(--border)' }}>
                  <span className="text-xs" style={{ color: 'var(--muted-foreground)' }}>{formatDate(w.date)}</span>
                  <a href={w.url ?? '#'} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-medium transition-opacity hover:opacity-75"
                    style={{ color: 'var(--dev)' }}>
                    Read <ArrowUpRight size={12} />
                  </a>
                </div>
              </motion.article>
            )
          })}
        </AnimatePresence>
      </div>
    </section>
  )
}

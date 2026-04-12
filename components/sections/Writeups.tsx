'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ArrowUpRight, Clock, Shield, BookOpen, FlaskConical } from 'lucide-react'
import { writeups } from '@/content/writeups'

const categoryConfig = {
  ctf:      { label: 'CTF',      icon: Shield,       color: 'var(--sec)',    bg: 'rgba(34,197,94,0.08)',   border: 'rgba(34,197,94,0.2)' },
  blog:     { label: 'Blog',     icon: BookOpen,     color: 'var(--dev)',    bg: 'rgba(56,189,248,0.08)',  border: 'rgba(56,189,248,0.2)' },
  research: { label: 'Research', icon: FlaskConical, color: 'var(--danger)', bg: 'rgba(247,129,102,0.08)', border: 'rgba(247,129,102,0.2)' },
}

const tabs = ['All', 'CTF', 'Blog', 'Research'] as const

function formatDate(d: string) {
  return new Date(d).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}

export default function Writeups() {
  const [active, setActive] = useState<typeof tabs[number]>('All')
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  const filtered = active === 'All'
    ? writeups
    : writeups.filter(w => w.category === active.toLowerCase())

  return (
    <section id="writeups" className="py-20 px-6 max-w-6xl mx-auto" ref={ref}>
      <motion.div initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
        <p className="section-label sec">Writing</p>
        <h2 className="section-title sec">Blog &amp; Writeups</h2>
      </motion.div>

      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className="px-4 py-1.5 rounded-full text-xs font-bold cursor-pointer transition-all duration-200"
            style={active === tab
              ? { background: 'linear-gradient(to right, #22c55e, #4ade80)', color: '#0d1117', border: 'none' }
              : { background: 'transparent', color: 'var(--muted-foreground)', border: '1px solid var(--border)', fontFamily: 'ui-monospace, monospace' }
            }
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        {filtered.map((w, i) => {
          const cat = categoryConfig[w.category]
          const Icon = cat.icon

          return (
            <motion.article
              key={w.slug}
              className="portfolio-card flex flex-col p-6 group"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-3 mb-3">
                <span
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold flex-shrink-0"
                  style={{ background: cat.bg, color: cat.color, border: `1px solid ${cat.border}`, fontFamily: 'ui-monospace, monospace' }}
                >
                  <Icon size={11} />
                  {cat.label}
                </span>
                <div className="flex items-center gap-3 text-xs" style={{ color: 'var(--muted-foreground)', fontFamily: 'ui-monospace, monospace' }}>
                  <span className="flex items-center gap-1">
                    <Clock size={11} /> {w.readTime}
                  </span>
                  <span>{formatDate(w.date)}</span>
                </div>
              </div>

              {/* Title */}
              <h3
                className="font-bold text-base leading-snug mb-2 transition-colors duration-200"
                style={{ color: 'var(--foreground)' }}
              >
                {w.title}
              </h3>

              {/* Excerpt */}
              <p className="text-sm leading-relaxed flex-1 mb-4" style={{ color: 'var(--muted-foreground)' }}>
                {w.excerpt}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {w.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-0.5 rounded"
                    style={{ background: cat.bg, color: cat.color, border: `1px solid ${cat.border}`, fontFamily: 'ui-monospace, monospace' }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Read link */}
              <div className="pt-3" style={{ borderTop: '1px solid var(--border)' }}>
                <a
                  href={w.url ?? '#'}
                  target={w.url ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold transition-colors duration-200 no-underline"
                  style={{ color: cat.color }}
                >
                  Read writeup <ArrowUpRight size={13} />
                </a>
              </div>
            </motion.article>
          )
        })}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-8 text-center"
      >
        <p className="text-sm mb-3" style={{ color: 'var(--muted-foreground)' }}>
          More writeups coming soon — follow for updates
        </p>
        <a
          href="https://github.com/rushdv"
          target="_blank" rel="noopener noreferrer"
          className="btn-sec"
          style={{ display: 'inline-flex' }}
        >
          <Shield size={14} /> View on GitHub
        </a>
      </motion.div>
    </section>
  )
}

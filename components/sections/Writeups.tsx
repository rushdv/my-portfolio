'use client'

import { motion, AnimatePresence, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ArrowUpRight, Clock, Shield, BookOpen, FlaskConical } from 'lucide-react'
import { GithubIcon } from '@/components/icons/SocialIcons'
import { writeups } from '@/content/writeups'
import SectionHeader from '@/components/ui/SectionHeader'

const categoryConfig = {
  ctf:      { label: 'CTF',      icon: Shield,       color: '#34d399' },
  blog:     { label: 'Blog',     icon: BookOpen,     color: '#6366f1' },
  research: { label: 'Research', icon: FlaskConical, color: '#f43f5e' },
}

const tabs = ['All', 'CTF', 'Blog', 'Research'] as const

function formatDate(d: string) {
  return new Date(d).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}

export default function Writeups() {
  const [active, setActive] = useState<typeof tabs[number]>('All')
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  const filtered = active === 'All'
    ? writeups
    : writeups.filter(w => w.category === active.toLowerCase())

  return (
    <section id="writeups" className="py-16 px-6 max-w-7xl mx-auto" ref={ref}>
      <motion.div 
        initial={{ opacity: 0, y: 24 }} 
        animate={inView ? { opacity: 1, y: 0 } : {}} 
        transition={{ duration: 0.6 }}
        className="text-left mb-8"
      >
        <SectionHeader 
          label="Insights"
          title="Security Writeups"
          accentColor="#f43f5e"
          icon={BookOpen}
        />

        {/* Tab switcher */}
        <div className="mt-10 inline-flex p-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`px-8 py-2.5 rounded-full text-sm font-bold transition-all relative ${active === tab ? 'text-black' : 'text-white/60 hover:text-white'}`}
            >
              {active === tab && <motion.div layoutId="writeup-pill" className="absolute inset-0 bg-white rounded-full z-0" />}
              <span className="relative z-10">{tab}</span>
            </button>
          ))}
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AnimatePresence mode="popLayout">
          {filtered.map((w, i) => {
            const cat = categoryConfig[w.category as keyof typeof categoryConfig]
            const Icon = cat.icon

            return (
              <motion.article
                key={w.slug}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group relative flex flex-col p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md hover:border-white/20 transition-all overflow-hidden"
              >
                {/* Side Accent */}
                <div className="absolute left-0 top-0 bottom-0 w-[2px] opacity-0 group-hover:opacity-100 transition-opacity" style={{ backgroundColor: cat.color }} />

                <div className="flex items-start justify-between gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-white/5 border border-white/10" style={{ color: cat.color }}>
                      <Icon size={16} />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-white/30">{cat.label}</span>
                  </div>
                  <div className="flex flex-col items-end gap-1 text-[10px] font-black uppercase tracking-widest text-white/20">
                    <span className="flex items-center gap-1.5"><Clock size={12} /> {w.readTime}</span>
                    <span>{formatDate(w.date)}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white tracking-tight mb-4 group-hover:text-emerald-400 transition-colors">
                  {w.title}
                </h3>

                <p className="text-white/50 text-sm leading-relaxed mb-8 flex-1">
                  {w.excerpt}
                </p>

                <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5">
                  <div className="flex flex-wrap gap-2">
                    {w.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full border border-white/5 bg-white/5 text-white/30 font-black uppercase">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={w.url ?? '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-bold text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    Read Full <ArrowUpRight size={14} />
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

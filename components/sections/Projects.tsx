'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, Shield, Code2 } from 'lucide-react'
import { projects } from '@/content/projects'
import ProjectCard from '@/components/ui/ProjectCard'
import SectionHeader from '@/components/ui/SectionHeader'

const securityProjects: { title: string; description: string; tags: string[]; github?: string; live?: string }[] = [
  {
    title: 'NetScope-Live',
    description: 'Real-time network traffic visualizer using Scapy for packet capture and WebSockets to stream live data to a React frontend.',
    tags: ['Python', 'Scapy', 'WebSockets', 'React'],
    github: 'https://github.com/rushdv/NetScope-Live',
  },
  {
    title: 'Encrypted Password Manager',
    description: 'CLI password manager demonstrating encryption best practices using Python\'s cryptography library with AES encryption.',
    tags: ['Python', 'Cryptography', 'AES', 'CLI'],
    github: 'https://github.com/rushdv/encrypted-password-manager',
  },
  {
    title: 'SecurePass Manager',
    description: 'React-based password manager with client-side encryption and a clean UI. No data leaves the browser.',
    tags: ['React', 'CryptoJS', 'Framer Motion'],
    github: 'https://github.com/rushdv/securepass',
  },
]

export default function Projects() {
  const [tab, setTab] = useState<'dev' | 'sec'>('dev')
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  useEffect(() => {
    const check = () => {
      if (window.location.hash === '#security') setTab('sec')
      else if (window.location.hash === '#projects') setTab('dev')
    }
    check()
    window.addEventListener('hashchange', check)
    return () => window.removeEventListener('hashchange', check)
  }, [])

  return (
    <section id="projects" className="py-16 px-6 max-w-7xl mx-auto relative" ref={ref}>
      <div id="security" style={{ position: 'absolute', marginTop: -80 }} />

      <motion.div initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>
        <SectionHeader label="Works" title="Selected Projects" icon={Code2} />

        {/* Tab switcher */}
        <div className="inline-flex p-1 rounded-lg gap-1 mb-8"
          style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
          {(['dev', 'sec'] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className="flex items-center gap-2 px-4 py-2 rounded-md text-xs font-semibold uppercase tracking-wide transition-all"
              style={{
                background: tab === t ? 'var(--dev)' : 'transparent',
                color: tab === t ? '#fff' : 'var(--muted-foreground)',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              {t === 'dev' ? <><Code2 size={13} /> Development</> : <><Shield size={13} /> Security</>}
            </button>
          ))}
        </div>
      </motion.div>

      <AnimatePresence mode="wait">
        <motion.div
          key={tab}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.3 }}
          className={`grid grid-cols-1 md:grid-cols-2 ${tab === 'dev' ? 'lg:grid-cols-4' : 'lg:grid-cols-3'} gap-5`}
        >
          {tab === 'dev' ? (
            projects.slice(0, 4).map((p, i) => (
              <ProjectCard key={p.slug} project={p} index={i} />
            ))
          ) : (
            securityProjects.map((p, i) => (
              <ProjectCard
                key={p.title}
                project={{ title: p.title, description: p.description, tags: p.tags, github: p.github, live: p.live, image: '', slug: p.title.toLowerCase().replace(/ /g, '-') } as any}
                index={i}
              />
            ))
          )}
        </motion.div>
      </AnimatePresence>

      <div className="mt-8">
        <a href="/projects"
          className="inline-flex items-center gap-2 text-sm font-medium transition-colors"
          style={{ color: 'var(--dev)' }}
          onMouseEnter={e => (e.currentTarget.style.opacity = '0.75')}
          onMouseLeave={e => (e.currentTarget.style.opacity = '1')}>
          Browse all projects <ArrowUpRight size={15} />
        </a>
      </div>
    </section>
  )
}

'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { ExternalLink, Shield, ArrowUpRight } from 'lucide-react'
import { GithubIcon } from '@/components/icons/SocialIcons'
import { projects } from '@/content/projects'
import ProjectCard from '@/components/ui/ProjectCard'

const securityProjects: { title: string; description: string; tags: string[]; type: string; github?: string; live?: string }[] = [
  {
    title: 'NetScope-Live',
    description: 'Real-time network traffic visualizer. Uses Scapy for packet capture and WebSockets to stream live data to the React frontend.',
    tags: ['Python', 'Scapy', 'WebSockets', 'React'],
    type: 'sec',
    github: 'https://github.com/rushdv/NetScope-Live',
  },
  {
    title: 'Encrypted Password Manager',
    description: 'CLI password manager demonstrating encryption best practices using Python\'s cryptography library. Stores credentials securely with AES encryption.',
    tags: ['Python', 'Cryptography', 'AES', 'CLI'],
    type: 'danger',
    github: 'https://github.com/rushdv/encrypted-password-manager',
  },
  {
    title: 'SecurePass Manager',
    description: 'React-based password manager with client-side encryption, a clean UI, and smooth animations. No data leaves the browser.',
    tags: ['React', 'CryptoJS', 'Framer Motion'],
    type: 'sec',
    github: 'https://github.com/rushdv/securepass',
  },
]

const allTags = ['All', ...Array.from(new Set(projects.flatMap(p => p.tags)))]

export default function Projects() {
  const [tab, setTab] = useState<'dev' | 'sec'>('dev')
  const [activeTag, setActiveTag] = useState('All')
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  useEffect(() => {
    const check = () => {
      if (window.location.hash === '#security') setTab('sec')
      else if (window.location.hash === '#projects') setTab('dev')
    }
    check()
    window.addEventListener('hashchange', check)
    return () => window.removeEventListener('hashchange', check)
  }, [])

  const filtered = activeTag === 'All' ? projects : projects.filter(p => p.tags.includes(activeTag))

  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto" ref={ref}>
      <div id="security" style={{ position: 'absolute', marginTop: -80 }} />

      <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.55 }}>
        <p className={`section-label ${tab}`}>Portfolio</p>
        <h2 className={`section-title ${tab}`}>
          {tab === 'dev' ? 'Dev Projects' : 'Security Research'}
        </h2>
      </motion.div>

      {/* Tab switcher */}
      <motion.div initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.45, delay: 0.1 }}
        className="flex gap-2 mb-8 p-1 rounded-xl w-fit"
        style={{ background: 'var(--muted)', border: '1px solid var(--border)' }}>
        <button onClick={() => setTab('dev')}
          className="px-5 py-2 rounded-lg text-sm font-semibold cursor-pointer transition-all duration-300"
          style={tab === 'dev'
            ? { background: 'linear-gradient(135deg, #38bdf8, #818cf8)', color: '#080b12', border: 'none', boxShadow: '0 2px 12px rgba(56,189,248,0.3)' }
            : { background: 'transparent', color: 'var(--muted-foreground)', border: 'none' }}>
          {'{ } Dev Projects'}
        </button>
        <button onClick={() => setTab('sec')}
          className="px-5 py-2 rounded-lg text-sm font-semibold cursor-pointer transition-all duration-300 flex items-center gap-2"
          style={tab === 'sec'
            ? { background: 'linear-gradient(135deg, #34d399, #6ee7b7)', color: '#080b12', border: 'none', boxShadow: '0 2px 12px rgba(52,211,153,0.3)' }
            : { background: 'transparent', color: 'var(--muted-foreground)', border: 'none' }}>
          <Shield size={13} /> Security
        </button>
      </motion.div>

      {tab === 'dev' ? (
        <>
          {/* Tag filter */}
          <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="flex flex-wrap gap-2 mb-8">
            {allTags.map((tag) => (
              <button key={tag} onClick={() => setActiveTag(tag)}
                className="px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer transition-all duration-200"
                style={activeTag === tag
                  ? { background: 'rgba(56,189,248,0.15)', color: 'var(--dev)', border: '1px solid rgba(56,189,248,0.3)' }
                  : { background: 'transparent', color: 'var(--muted-foreground)', border: '1px solid var(--border)' }}>
                {tag}
              </button>
            ))}
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((p, i) => <ProjectCard key={p.slug} project={p} index={i} />)}
          </div>
        </>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {securityProjects.map((p, i) => (
            <motion.div key={p.title}
              className={`portfolio-card ${p.type} group flex flex-col overflow-hidden`}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}>

              {/* Header area */}
              <div className="relative flex items-center justify-center overflow-hidden flex-shrink-0"
                style={{ height: 160, borderBottom: '1px solid var(--border)',
                  background: p.type === 'danger' ? 'rgba(251,113,133,0.05)' : 'rgba(52,211,153,0.05)' }}>
                <Shield size={48} style={{ color: p.type === 'danger' ? 'rgba(251,113,133,0.2)' : 'rgba(52,211,153,0.2)' }}
                  className="transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute top-3 left-3">
                  <span className={p.type === 'danger' ? 'tag-danger' : 'tag-sec'}>{p.tags[0]}</span>
                </div>
                {/* Hover links */}
                <div className="absolute bottom-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noopener noreferrer"
                      className="w-8 h-8 flex items-center justify-center rounded-lg"
                      style={{ background: 'rgba(255,255,255,0.1)', color: '#fff', border: '1px solid rgba(255,255,255,0.15)' }}>
                      <GithubIcon size={14} />
                    </a>
                  )}
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noopener noreferrer"
                      className="w-8 h-8 flex items-center justify-center rounded-lg"
                      style={{ background: 'rgba(255,255,255,0.1)', color: '#fff', border: '1px solid rgba(255,255,255,0.15)' }}>
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>

              <div className="flex flex-col flex-1 p-6">
                <h3 className="font-bold text-base mb-2.5 leading-snug"
                  style={{ color: 'var(--foreground)', letterSpacing: '-0.02em',
                    transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = p.type === 'danger' ? 'var(--danger)' : 'var(--sec)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--foreground)')}>
                  {p.title}
                </h3>
                <p className="text-sm leading-relaxed flex-1 mb-5" style={{ color: 'var(--muted-foreground)' }}>{p.description}</p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {p.tags.map((t) => <span key={t} className={p.type === 'danger' ? 'tag-danger' : 'tag-sec'}>{t}</span>)}
                </div>
                <div className="flex items-center justify-between pt-4" style={{ borderTop: '1px solid var(--border)' }}>
                  <div className="flex gap-4">
                    {p.github && (
                      <a href={p.github} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-1.5 font-medium transition-colors duration-200"
                        style={{ color: 'var(--muted-foreground)', fontSize: '0.8rem' }}
                        onMouseEnter={e => (e.currentTarget.style.color = p.type === 'danger' ? 'var(--danger)' : 'var(--sec)')}
                        onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted-foreground)')}>
                        <GithubIcon size={13} /> Code
                      </a>
                    )}
                  </div>
                  <div className="w-8 h-8 flex items-center justify-center rounded-lg"
                    style={{ background: p.type === 'danger' ? 'rgba(251,113,133,0.08)' : 'rgba(52,211,153,0.08)',
                      color: p.type === 'danger' ? 'var(--danger)' : 'var(--sec)' }}>
                    <ArrowUpRight size={15} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </section>
  )
}

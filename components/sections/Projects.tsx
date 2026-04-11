'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ExternalLink, ArrowRight, Shield } from 'lucide-react'
import { GithubIcon } from '@/components/icons/SocialIcons'
import { projects } from '@/content/projects'
import Image from 'next/image'

const securityProjects: { title: string; description: string; tags: string[]; type: string; github?: string; live?: string }[] = [
  {
    title: 'NetScope-Live',
    description: 'Real-time network traffic visualizer. Uses Scapy for packet capture and WebSockets to stream live data to the React frontend.',
    tags: ['Python', 'Scapy', 'WebSockets'],
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
    tags: ['React', 'CryptoJS', 'Security'],
    type: 'sec',
    github: 'https://github.com/rushdv/securepass',
  },
]

export default function Projects() {
  const [tab, setTab] = useState<'dev' | 'sec'>('dev')
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto" ref={ref}>
      <motion.div initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
        <p className={`section-label ${tab}`}>Portfolio</p>
        <h2 className={`section-title ${tab}`}>
          {tab === 'dev' ? 'Dev Projects' : 'Security Research'}
        </h2>
      </motion.div>

      {/* Tab switcher */}
      <div className="flex gap-2 mb-8">
        <button
          onClick={() => setTab('dev')}
          className="px-5 py-2 rounded-lg text-sm font-semibold cursor-pointer transition-all duration-200"
          style={tab === 'dev'
            ? { background: 'linear-gradient(to right, #38bdf8, #818cf8)', color: '#0d1117', border: 'none' }
            : { background: 'transparent', color: 'var(--muted-foreground)', border: '1px solid var(--border)' }
          }
        >
          {'{ } Dev Projects'}
        </button>
        <button
          onClick={() => setTab('sec')}
          className="px-5 py-2 rounded-lg text-sm font-semibold cursor-pointer transition-all duration-200"
          style={tab === 'sec'
            ? { background: 'linear-gradient(to right, #22c55e, #4ade80)', color: '#0d1117', border: 'none' }
            : { background: 'transparent', color: 'var(--muted-foreground)', border: '1px solid var(--border)' }
          }
        >
          <Shield size={13} className="inline mr-1.5" />Security Research
        </button>
      </div>

      {tab === 'dev' ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5" id="dev-projects">
          {projects.map((p, i) => (
            <motion.div
              key={p.slug}
              className="portfolio-card flex flex-col overflow-hidden"
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="h-36 relative flex items-center justify-center overflow-hidden" style={{ background: 'rgba(56,189,248,0.04)', borderBottom: '1px solid var(--border)' }}>
                {p.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                ) : (
                  <span className="text-3xl font-bold" style={{ color: 'rgba(56,189,248,0.3)', fontFamily: 'ui-monospace, monospace' }}>{'{ }'}</span>
                )}
              </div>
              <div className="flex flex-col flex-1 p-5">
                <h3 className="font-bold text-sm mb-2" style={{ color: 'var(--foreground)' }}>{p.title}</h3>
                <p className="text-xs leading-relaxed flex-1 mb-3" style={{ color: 'var(--muted-foreground)' }}>{p.description}</p>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {p.tags.slice(0, 3).map((t) => <span key={t} className="tag-dev">{t}</span>)}
                </div>
                <div className="flex items-center justify-between pt-3" style={{ borderTop: '1px solid var(--border)' }}>
                  <div className="flex gap-3">
                    {p.github && <a href={p.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-xs no-underline hover:text-[#38bdf8] transition-colors" style={{ color: 'var(--muted-foreground)' }}><GithubIcon size={12} /> Code</a>}
                    {p.live && <a href={p.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-xs no-underline hover:text-[#38bdf8] transition-colors" style={{ color: 'var(--muted-foreground)' }}><ExternalLink size={12} /> Live</a>}
                  </div>
                  <div className="w-7 h-7 flex items-center justify-center rounded-full" style={{ background: 'rgba(56,189,248,0.1)', color: 'var(--dev)' }}>
                    <ArrowRight size={13} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5" id="security">
          {securityProjects.map((p, i) => (
            <motion.div
              key={p.title}
              className={`portfolio-card ${p.type} flex flex-col overflow-hidden`}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div
                className="h-36 flex items-center justify-center"
                style={{
                  background: p.type === 'danger' ? 'rgba(247,129,102,0.04)' : 'rgba(34,197,94,0.04)',
                  borderBottom: '1px solid var(--border)',
                }}
              >
                <Shield size={32} style={{ color: p.type === 'danger' ? 'rgba(247,129,102,0.3)' : 'rgba(34,197,94,0.3)' }} />
              </div>
              <div className="flex flex-col flex-1 p-5">
                <h3 className="font-bold text-sm mb-2" style={{ color: 'var(--foreground)' }}>{p.title}</h3>
                <p className="text-xs leading-relaxed flex-1 mb-3" style={{ color: 'var(--muted-foreground)' }}>{p.description}</p>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {p.tags.map((t) => (
                    <span key={t} className={p.type === 'danger' ? 'tag-danger' : 'tag-sec'}>{t}</span>
                  ))}
                </div>
                <div className="flex gap-3 pt-3" style={{ borderTop: '1px solid var(--border)' }}>
                  {p.github && <a href={p.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-xs no-underline transition-colors" style={{ color: 'var(--muted-foreground)' }}
                    onMouseEnter={e => (e.currentTarget.style.color = p.type === 'danger' ? 'var(--danger)' : 'var(--sec)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted-foreground)')}><GithubIcon size={12} /> Code</a>}
                  {p.live && <a href={p.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-xs no-underline transition-colors" style={{ color: 'var(--muted-foreground)' }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--sec)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted-foreground)')}><ExternalLink size={12} /> View</a>}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </section>
  )
}

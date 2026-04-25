'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ExternalLink, Shield, ArrowUpRight, Code2 } from 'lucide-react'
import { GithubIcon } from '@/components/icons/SocialIcons'
import { projects } from '@/content/projects'
import ProjectCard from '@/components/ui/ProjectCard'
import SectionHeader from '@/components/ui/SectionHeader'

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
      
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[60%] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <motion.div 
        initial={{ opacity: 0, y: 24 }} 
        animate={inView ? { opacity: 1, y: 0 } : {}} 
        transition={{ duration: 0.6 }}
        className="text-left"
      >
        <SectionHeader 
          label="Works"
          title="Selected Creations"
          accentColor="#818cf8"
          icon={Code2}
        />

        {/* Tab switcher */}
        <div className="inline-flex p-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
          <button
            onClick={() => setTab('dev')}
            className={`px-8 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all relative ${tab === 'dev' ? 'text-black' : 'text-white/40 hover:text-white'}`}
          >
            {tab === 'dev' && <motion.div layoutId="proj-pill" className="absolute inset-0 bg-white rounded-full z-0" />}
            <span className="relative z-10 flex items-center gap-2">
              <Code2 size={14} /> Development
            </span>
          </button>
          <button
            onClick={() => setTab('sec')}
            className={`px-8 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all relative ${tab === 'sec' ? 'text-black' : 'text-white/40 hover:text-white'}`}
          >
            {tab === 'sec' && <motion.div layoutId="proj-pill" className="absolute inset-0 bg-white rounded-full z-0" />}
            <span className="relative z-10 flex items-center gap-2">
              <Shield size={14} /> Security
            </span>
          </button>
        </div>
      </motion.div>

      <AnimatePresence mode="wait">
        <motion.div
          key={tab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${tab === 'dev' ? '4' : '3'} gap-6`}
        >
          {tab === 'dev' ? (
            projects.slice(0, 4).map((p, i) => (
              <ProjectCard key={p.slug} project={p} index={i} featured={false} />
            ))
          ) : (
            securityProjects.map((p, i) => (
              <ProjectCard 
                key={p.title}
                project={{
                  title: p.title,
                  description: p.description,
                  tags: p.tags,
                  github: p.github,
                  live: p.live,
                  image: '', 
                  slug: p.title.toLowerCase().replace(/ /g, '-'),
                } as any}
                index={i}
              />
            ))
          )}
        </motion.div>
      </AnimatePresence>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="mt-10 flex justify-start"
      >
        <a href="/projects" className="group flex items-center gap-3 px-8 py-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-white font-black uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-all">
          Browse All Projects
          <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </a>
      </motion.div>
    </section>
  )
}

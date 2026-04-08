'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import { projects } from '@/content/projects'
import ProjectCard from '@/components/ui/ProjectCard'

const allTags = ['All', ...Array.from(new Set(projects.flatMap((p) => p.tags)))]

export default function Projects() {
  const [activeTag, setActiveTag] = useState('All')
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const filtered = activeTag === 'All' ? projects : projects.filter((p) => p.tags.includes(activeTag))

  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto" ref={ref}>
      <motion.div initial={{ opacity: 0, y: 32 }} animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="flex items-start justify-between flex-wrap gap-3">
        <div>
          <p className="rn-label">Portfolio</p>
          <h2 className="rn-title">Things I&apos;ve Built</h2>
        </div>
        <Link href="/projects" className="text-sm no-underline mt-1 transition-colors duration-200"
          style={{ color: 'var(--color-muted)' }}
          onMouseEnter={e => (e.currentTarget.style.color = '#fa5252')}
          onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-muted)')}>
          View all →
        </Link>
      </motion.div>

      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {allTags.map((tag) => (
          <button key={tag} onClick={() => setActiveTag(tag)}
            className="px-4 py-1.5 rounded-full text-xs font-semibold cursor-pointer transition-all duration-200 border-0"
            style={activeTag === tag
              ? { background: 'linear-gradient(to right, #fa5252, #dd2476)', color: '#fff' }
              : { background: 'var(--color-inner)', color: 'var(--color-muted)', border: '1px solid var(--color-border)' }}>
            {tag}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((p, i) => <ProjectCard key={p.slug} project={p} index={i} />)}
      </div>
    </section>
  )
}

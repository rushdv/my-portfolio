'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import { projects } from '@/content/projects'
import ProjectCard from '@/components/ui/ProjectCard'
import SectionHeading from '@/components/ui/SectionHeading'

const allTags = ['All', ...Array.from(new Set(projects.flatMap((p) => p.tags)))]

export default function Projects() {
  const [activeTag, setActiveTag] = useState('All')
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const filtered = activeTag === 'All' ? projects : projects.filter((p) => p.tags.includes(activeTag))

  return (
    <section id="projects" style={{ padding: '80px 24px', maxWidth: 1100, margin: '0 auto' }} ref={ref}>
      <motion.div initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8 }}>
          <SectionHeading label="Portfolio" title="Things I've Built" />
          <Link href="/projects" style={{ fontSize: '0.875rem', color: 'var(--muted)', textDecoration: 'none', marginTop: 4 }}>
            View all →
          </Link>
        </div>
      </motion.div>

      {/* Filter */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 28 }}>
        {allTags.map((tag) => (
          <button key={tag} onClick={() => setActiveTag(tag)}
            style={{
              padding: '6px 16px', borderRadius: 999, fontSize: '0.78rem', fontWeight: 600, cursor: 'pointer',
              transition: 'all 0.2s',
              ...(activeTag === tag
                ? { background: 'linear-gradient(to right, #fa5252, #dd2476)', color: '#fff', border: 'none' }
                : { background: 'var(--inner)', color: 'var(--muted)', border: '1px solid var(--border)' })
            }}>
            {tag}
          </button>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 20 }}>
        {filtered.map((p, i) => <ProjectCard key={p.slug} project={p} index={i} />)}
      </div>
    </section>
  )
}

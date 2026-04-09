'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ExternalLink, ArrowRight } from 'lucide-react'
import { GithubIcon } from '@/components/icons/SocialIcons'
import type { Project } from '@/types'

export default function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  return (
    <motion.div className="rn-card flex flex-col p-6"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}>

      <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 flex-shrink-0"
        style={{ background: 'rgba(250,82,82,0.1)' }}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fa5252" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
        </svg>
      </div>

      <Link href={`/projects/${project.slug}`} className="no-underline">
        <h3 className="font-bold text-base mb-2 leading-snug hover:text-[#fa5252] transition-colors"
          style={{ color: 'var(--fg)' }}>
          {project.title}
        </h3>
      </Link>

      <p className="text-sm leading-relaxed flex-1" style={{ color: 'var(--muted)' }}>
        {project.description}
      </p>

      <div className="flex flex-wrap gap-1.5 my-4">
        {project.tags.slice(0, 3).map((tag) => <span key={tag} className="rn-tag">{tag}</span>)}
      </div>

      <div className="flex items-center justify-between pt-3" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="flex gap-4">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-medium no-underline hover:text-[#fa5252] transition-colors"
              style={{ color: 'var(--muted)' }}>
              <GithubIcon size={13} /> Code
            </a>
          )}
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-medium no-underline hover:text-[#fa5252] transition-colors"
              style={{ color: 'var(--muted)' }}>
              <ExternalLink size={13} /> Live
            </a>
          )}
        </div>
        <Link href={`/projects/${project.slug}`}
          className="w-8 h-8 flex items-center justify-center rounded-full no-underline transition-all hover:opacity-90"
          style={{ background: 'rgba(250,82,82,0.1)', color: '#fa5252' }}>
          <ArrowRight size={14} />
        </Link>
      </div>
    </motion.div>
  )
}

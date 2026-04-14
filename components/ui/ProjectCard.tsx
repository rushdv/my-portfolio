'use client'

import { motion } from 'framer-motion'
import { ExternalLink, ArrowUpRight } from 'lucide-react'
import type { Project } from '@/types'
import { GithubIcon } from '@/components/icons/SocialIcons'

export default function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  return (
    <motion.div
      className="portfolio-card group flex flex-col overflow-hidden"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Thumbnail */}
      <div className="relative overflow-hidden flex-shrink-0"
        style={{ height: 200, background: 'linear-gradient(135deg, rgba(56,189,248,0.06) 0%, rgba(129,140,248,0.06) 100%)', borderBottom: '1px solid var(--border)' }}>
        {project.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={project.image} alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="mono font-bold select-none transition-all duration-500 group-hover:scale-110"
              style={{ fontSize: '3.5rem', color: 'rgba(56,189,248,0.12)', letterSpacing: '-0.05em' }}>
              {'{ }'}
            </span>
          </div>
        )}
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
          style={{ background: 'linear-gradient(to top, rgba(8,11,18,0.7) 0%, transparent 55%)' }} />
        {/* Tag top-left */}
        <div className="absolute top-3 left-3">
          <span className="tag-dev">{project.tags[0]}</span>
        </div>
        {/* Quick links appear on hover */}
        <div className="absolute bottom-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded-lg backdrop-blur-sm transition-all duration-200"
              style={{ background: 'rgba(255,255,255,0.1)', color: '#fff', border: '1px solid rgba(255,255,255,0.15)' }}
              onMouseEnter={e => (e.currentTarget.style.background = 'rgba(56,189,248,0.3)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')}>
              <GithubIcon size={14} />
            </a>
          )}
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded-lg backdrop-blur-sm transition-all duration-200"
              style={{ background: 'rgba(255,255,255,0.1)', color: '#fff', border: '1px solid rgba(255,255,255,0.15)' }}
              onMouseEnter={e => (e.currentTarget.style.background = 'rgba(56,189,248,0.3)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')}>
              <ExternalLink size={14} />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        <h3 className="font-bold text-base mb-2.5 leading-snug transition-colors duration-200 group-hover:text-[var(--dev)]"
          style={{ color: 'var(--foreground)', letterSpacing: '-0.02em', fontSize: '1rem' }}>
          {project.title}
        </h3>

        <p className="text-sm leading-relaxed flex-1 mb-5" style={{ color: 'var(--muted-foreground)', fontSize: '0.875rem' }}>
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tags.slice(0, 4).map((tag) => <span key={tag} className="tag-dev">{tag}</span>)}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4" style={{ borderTop: '1px solid var(--border)' }}>
          <div className="flex gap-4">
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-1.5 font-medium transition-colors duration-200"
                style={{ color: 'var(--muted-foreground)', fontSize: '0.8rem' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--dev)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted-foreground)')}>
                <GithubIcon size={13} /> Code
              </a>
            )}
            {project.live && (
              <a href={project.live} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-1.5 font-medium transition-colors duration-200"
                style={{ color: 'var(--muted-foreground)', fontSize: '0.8rem' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--dev)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted-foreground)')}>
                <ExternalLink size={13} /> Live Demo
              </a>
            )}
          </div>
          <div className="w-8 h-8 flex items-center justify-center rounded-lg transition-all duration-300 group-hover:bg-[rgba(56,189,248,0.15)]"
            style={{ background: 'rgba(56,189,248,0.08)', color: 'var(--dev)' }}>
            <ArrowUpRight size={15} />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

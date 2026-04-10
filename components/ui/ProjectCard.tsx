'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ExternalLink, ArrowRight } from 'lucide-react'
import { GithubIcon } from '@/components/icons/SocialIcons'
import type { Project } from '@/types'

export default function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  return (
    <motion.div
      className="portfolio-card flex flex-col overflow-hidden"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      {/* Thumbnail */}
      <div
        className="relative w-full flex items-center justify-center overflow-hidden"
        style={{ height: 180, background: 'linear-gradient(135deg, rgba(250,82,82,0.06), rgba(221,36,118,0.06))' }}
      >
        {project.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        ) : (
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center"
            style={{ background: 'rgba(250,82,82,0.12)' }}
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fa5252" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
            </svg>
          </div>
        )}
        <div className="absolute top-3 left-3">
          <span className="skill-tag">{project.tags[0]}</span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <Link href={`/projects/${project.slug}`} className="no-underline">
          <h3
            className="font-bold text-base mb-2 leading-snug hover:text-[#fa5252] transition-colors duration-200"
            style={{ color: 'var(--foreground)' }}
          >
            {project.title}
          </h3>
        </Link>

        <p className="text-sm leading-relaxed flex-1 mb-4" style={{ color: 'var(--muted-foreground)' }}>
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.slice(0, 3).map((tag) => <span key={tag} className="skill-tag">{tag}</span>)}
        </div>

        <div
          className="flex items-center justify-between pt-3"
          style={{ borderTop: '1px solid var(--border)' }}
        >
          <div className="flex gap-4">
            {project.github && (
              <a
                href={project.github} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-medium no-underline hover:text-[#fa5252] transition-colors"
                style={{ color: 'var(--muted-foreground)' }}
              >
                <GithubIcon size={13} /> Code
              </a>
            )}
            {project.live && (
              <a
                href={project.live} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-medium no-underline hover:text-[#fa5252] transition-colors"
                style={{ color: 'var(--muted-foreground)' }}
              >
                <ExternalLink size={13} /> Live
              </a>
            )}
          </div>
          <Link
            href={`/projects/${project.slug}`}
            className="w-8 h-8 flex items-center justify-center rounded-full no-underline transition-all duration-200 hover:opacity-90"
            style={{ background: 'linear-gradient(to right, #fa5252, #dd2476)', color: '#fff' }}
          >
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, ArrowUpRight } from 'lucide-react'
import type { Project } from '@/types'
import { GithubIcon } from '@/components/icons/SocialIcons'

export default function ProjectCard({ project, index = 0, featured = false }: { project: Project; index?: number; featured?: boolean }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      className="group relative flex flex-col rounded-xl overflow-hidden h-full"
      style={{
        border: '1px solid var(--border)',
        background: 'var(--card)',
        transition: 'border-color 0.2s ease, transform 0.2s ease',
      }}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      onMouseEnter={e => {
        setHovered(true)
        const el = e.currentTarget as HTMLElement
        el.style.borderColor = 'var(--dev-border)'
        el.style.transform = 'translateY(-3px)'
      }}
      onMouseLeave={e => {
        setHovered(false)
        const el = e.currentTarget as HTMLElement
        el.style.borderColor = 'var(--border)'
        el.style.transform = 'translateY(0)'
      }}
    >
      {/* Image / Preview */}
      <div className={`relative overflow-hidden flex-shrink-0 ${featured ? 'min-h-[220px]' : 'aspect-video'}`}>
        {/* Browser bar */}
        <div className="absolute top-0 inset-x-0 h-8 flex items-center px-3 gap-1.5 z-10"
          style={{ background: 'var(--card-2)', borderBottom: '1px solid var(--border)' }}>
          {/* Traffic light dots — colored on hover */}
          <div className="w-2.5 h-2.5 rounded-full transition-colors duration-200"
            style={{ background: hovered ? '#ff5f57' : 'var(--border)' }} />
          <div className="w-2.5 h-2.5 rounded-full transition-colors duration-200"
            style={{ background: hovered ? '#febc2e' : 'var(--border)' }} />
          <div className="w-2.5 h-2.5 rounded-full transition-colors duration-200"
            style={{ background: hovered ? '#28c840' : 'var(--border)' }} />
          <div className="flex-1 h-3.5 rounded mx-3" style={{ background: 'var(--border)', opacity: 0.5 }} />
        </div>

        <div className="w-full h-full pt-8 relative overflow-hidden">
          {project.image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              style={{ opacity: hovered ? 1 : 0.85 }}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center" style={{ background: 'var(--card-2)' }}>
              <span className="font-mono font-bold text-3xl" style={{ color: 'var(--border)' }}>{'{ }'}</span>
            </div>
          )}

          {/* Minimal bottom fade — just enough to blend into card */}
          <div className="absolute inset-x-0 bottom-0 h-8 pointer-events-none"
            style={{ background: 'linear-gradient(to top, var(--card), transparent)' }} />

          {/* Hover action links */}
          <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-250 z-20">
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer"
                className="p-2.5 rounded-lg transition-transform hover:scale-105"
                style={{ background: 'var(--foreground)', color: 'var(--background)' }}>
                <GithubIcon size={17} />
              </a>
            )}
            {project.live && (
              <a href={project.live} target="_blank" rel="noopener noreferrer"
                className="p-2.5 rounded-lg transition-transform hover:scale-105"
                style={{ background: 'var(--foreground)', color: 'var(--background)' }}>
                <ExternalLink size={17} />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col p-4 flex-1">
        <div className="flex items-start justify-between mb-1.5">
          <h3 className="font-semibold leading-snug transition-colors"
            style={{ fontSize: '0.95rem', color: hovered ? 'var(--dev)' : 'var(--foreground)' }}>
            {project.title}
          </h3>
          <ArrowUpRight size={15} className="shrink-0 mt-0.5 transition-opacity"
            style={{ color: 'var(--dev)', opacity: hovered ? 0.7 : 0 }} />
        </div>
        <p className="leading-relaxed mb-3 flex-1 line-clamp-2"
          style={{ fontSize: '0.82rem', color: 'var(--muted-foreground)' }}>
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5 mt-auto">
          {project.tags.slice(0, featured ? 5 : 3).map((tag) => (
            <span key={tag} className="px-2 py-0.5 rounded font-medium"
              style={{ fontSize: '0.7rem', background: 'var(--dev-dim)', color: 'var(--dev)', border: '1px solid var(--dev-border)' }}>
              {tag}
            </span>
          ))}
          {!featured && project.tags.length > 3 && (
            <span style={{ fontSize: '0.7rem', color: 'var(--muted-foreground)', padding: '2px 4px' }}>
              +{project.tags.length - 3}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  )
}

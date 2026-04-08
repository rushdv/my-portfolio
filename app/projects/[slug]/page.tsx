import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Github, ExternalLink, ArrowLeft } from 'lucide-react'
import { projects } from '@/content/projects'

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata(props: PageProps<'/projects/[slug]'>) {
  const { slug } = await props.params
  const project = projects.find((p) => p.slug === slug)
  return {
    title: project ? `${project.title} — Portfolio` : 'Project',
    description: project?.description,
  }
}

export default async function ProjectPage(props: PageProps<'/projects/[slug]'>) {
  const { slug } = await props.params
  const project = projects.find((p) => p.slug === slug)
  if (!project) notFound()

  return (
    <main className="pt-24 pb-16 px-4 max-w-3xl mx-auto">
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--fg)] transition-colors mb-8"
      >
        <ArrowLeft size={14} />
        Back to Projects
      </Link>

      <h1 className="text-4xl font-bold text-[var(--fg)] mb-3">{project.title}</h1>
      <p className="text-[var(--muted)] mb-6 leading-relaxed">{project.description}</p>

      <div className="flex flex-wrap gap-2 mb-8">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2.5 py-1 rounded-lg bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/20"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex gap-3">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[var(--border)] text-[var(--fg)] text-sm hover:bg-[var(--card)] transition-colors"
          >
            <Github size={15} />
            View Code
          </a>
        )}
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[var(--accent)] text-white text-sm font-medium hover:opacity-90 transition-opacity"
          >
            <ExternalLink size={15} />
            Live Demo
          </a>
        )}
      </div>
    </main>
  )
}

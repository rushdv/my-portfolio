import { projects } from '@/content/projects'
import ProjectCard from '@/components/ui/ProjectCard'

export const metadata = {
  title: 'Projects — Portfolio',
}

export default function ProjectsPage() {
  return (
    <main className="pt-24 pb-16 px-4 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold text-white mb-2">Projects</h1>
      <p className="text-white/50 mb-10">Things I&apos;ve built.</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </main>
  )
}

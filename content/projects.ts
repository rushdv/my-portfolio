import type { Project } from '@/types'

export const projects: Project[] = [
  {
    slug: 'ecommerce-platform',
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce app with cart, payments (Stripe), and admin dashboard.',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe'],
    github: 'https://github.com/username/ecommerce',
    live: 'https://ecommerce.vercel.app',
    featured: true,
  },
  {
    slug: 'task-manager',
    title: 'Task Manager',
    description: 'Real-time collaborative task manager with drag-and-drop and team workspaces.',
    tags: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    github: 'https://github.com/username/task-manager',
    live: 'https://tasks.vercel.app',
    featured: true,
  },
  {
    slug: 'ai-chat',
    title: 'AI Chat App',
    description: 'ChatGPT-like interface with streaming responses, history, and multiple models.',
    tags: ['Next.js', 'OpenAI', 'TypeScript'],
    github: 'https://github.com/username/ai-chat',
    featured: true,
  },
  {
    slug: 'dev-blog',
    title: 'Dev Blog',
    description: 'Personal blog with MDX, syntax highlighting, and RSS feed.',
    tags: ['Next.js', 'MDX', 'Tailwind CSS'],
    github: 'https://github.com/username/blog',
    live: 'https://blog.vercel.app',
    featured: false,
  },
]

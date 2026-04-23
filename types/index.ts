export interface Project {
  slug: string
  title: string
  description: string
  tags: string[]
  github?: string
  live?: string
  image?: string
  featured?: boolean
}

export interface Skill {
  name: string
  category: 'frontend' | 'backend' | 'tools'
}

export interface Experience {
  company: string
  role: string
  period: string
  description: string
  skills: string[]
}

export interface Testimonial {
  name: string
  role: string
  company: string
  quote: string
}

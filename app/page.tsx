import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Skills from '@/components/sections/Skills'
import Experience from '@/components/sections/Experience'
import Projects from '@/components/sections/Projects'
import Certifications from '@/components/sections/Certifications'
import Writeups from '@/components/sections/Writeups'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <main className="pt-16">
      <Hero />
      <div className="section-divider" />
      <About />
      <div className="section-divider" />
      <Skills />
      <div className="section-divider" />
      <Experience />
      <div className="section-divider" />
      <Projects />
      <div className="section-divider" />
      <Certifications />
      <div className="section-divider" />
      <Writeups />
      <div className="section-divider" />
      <Contact />
    </main>
  )
}

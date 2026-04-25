import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Skills from '@/components/sections/Skills'
import Experience from '@/components/sections/Experience'
import Projects from '@/components/sections/Projects'
import Certifications from '@/components/sections/Certifications'
import Writeups from '@/components/sections/Writeups'
import Contact from '@/components/sections/Contact'

import SectionReveal from '@/components/ui/SectionReveal'

export default function Home() {
  return (
    <main className="relative bg-[#0a0a0f]">
      {/* Hero doesn't need SectionReveal usually as it's above the fold, 
          but its internal elements have their own entrance animations. */}
      <section className="relative z-10">
        <Hero />
      </section>

      <div className="relative z-10">
        <SectionReveal>
          <About />
        </SectionReveal>

        <SectionReveal>
          <Skills />
        </SectionReveal>

        <SectionReveal>
          <Experience />
        </SectionReveal>

        <SectionReveal>
          <Projects />
        </SectionReveal>

        <SectionReveal>
          <Certifications />
        </SectionReveal>

        <SectionReveal>
          <Writeups />
        </SectionReveal>

        <SectionReveal>
          <Contact />
        </SectionReveal>
      </div>
    </main>
  )
}

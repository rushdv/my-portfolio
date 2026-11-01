'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Download, ExternalLink, FileText, Sparkles, GraduationCap, Award, Code2, Briefcase, Globe } from 'lucide-react'

export default function ResumePage() {
  const [activeTab, setActiveTab] = useState<'pdf' | 'summary'>('pdf')

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 max-w-5xl mx-auto flex flex-col gap-6">
      {/* Top Navigation & Controls */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl border border-[var(--border)] bg-[var(--card)] shadow-sm">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="btn-outline text-xs px-3 py-2 flex items-center gap-1.5 rounded-lg"
          >
            <ArrowLeft size={14} /> Back to Portfolio
          </Link>
          <div className="hidden sm:block">
            <h1 className="text-base font-bold text-[var(--foreground)]">
              Md. Shihab Shahriar Rashu
            </h1>
            <p className="text-xs text-[var(--muted-foreground)]">
              Full Stack Developer & Cybersecurity Researcher
            </p>
          </div>
        </div>

        {/* View Switcher */}
        <div className="flex items-center bg-[var(--background)] p-1 rounded-lg border border-[var(--border)] text-xs font-medium">
          <button
            onClick={() => setActiveTab('pdf')}
            className={`px-3 py-1.5 rounded-md transition-all flex items-center gap-1.5 ${
              activeTab === 'pdf'
                ? 'bg-[var(--card)] text-[var(--foreground)] shadow-sm font-semibold'
                : 'text-[var(--muted-foreground)] hover:text-[var(--foreground)]'
            }`}
          >
            <FileText size={13} /> PDF View
          </button>
          <button
            onClick={() => setActiveTab('summary')}
            className={`px-3 py-1.5 rounded-md transition-all flex items-center gap-1.5 ${
              activeTab === 'summary'
                ? 'bg-[var(--card)] text-[var(--foreground)] shadow-sm font-semibold'
                : 'text-[var(--muted-foreground)] hover:text-[var(--foreground)]'
            }`}
          >
            <Sparkles size={13} /> Overview
          </button>
        </div>

        {/* Direct Action Buttons */}
        <div className="flex items-center gap-2">
          <a
            href="/resume.pdf"
            download="Md_Shihab_Shahriar_Rashu_Resume.pdf"
            className="btn-dev text-xs px-3.5 py-2 flex items-center gap-1.5 rounded-lg"
          >
            <Download size={14} /> Download PDF
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline text-xs px-3 py-2 flex items-center gap-1.5 rounded-lg"
          >
            <ExternalLink size={14} /> Direct PDF
          </a>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] shadow-lg overflow-hidden min-h-[75vh] flex flex-col">
        {activeTab === 'pdf' ? (
          <div className="w-full flex-1 min-h-[80vh] bg-[#525659]/10 relative flex flex-col">
            <object
              data="/resume.pdf#toolbar=1"
              type="application/pdf"
              className="w-full flex-1 min-h-[80vh]"
            >
              <iframe
                src="/resume.pdf#toolbar=1"
                className="w-full flex-1 min-h-[80vh] border-0"
                title="Resume Preview"
              >
                <div className="flex flex-col items-center justify-center h-full p-8 text-center gap-4">
                  <FileText size={48} className="text-[var(--muted-foreground)]" />
                  <div>
                    <p className="font-semibold text-lg text-[var(--foreground)]">
                      Your browser could not preview the PDF file directly.
                    </p>
                    <p className="text-sm text-[var(--muted-foreground)] mt-1">
                      You can switch to the Overview tab or download the resume below.
                    </p>
                  </div>
                  <div className="flex items-center gap-3 mt-3">
                    <button
                      onClick={() => setActiveTab('summary')}
                      className="btn-dev text-sm px-4 py-2"
                    >
                      Switch to Overview
                    </button>
                    <a
                      href="/resume.pdf"
                      download="Md_Shihab_Shahriar_Rashu_Resume.pdf"
                      className="btn-outline text-sm px-4 py-2 flex items-center gap-2"
                    >
                      <Download size={14} /> Download PDF
                    </a>
                  </div>
                </div>
              </iframe>
            </object>
          </div>
        ) : (
          <div className="p-6 sm:p-10 space-y-8 text-left">
            {/* Header */}
            <div className="pb-6 border-b border-[var(--border)]">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--foreground)]">
                MD. SHIHAB SHAHRIAR RASHU
              </h2>
              <p className="text-[var(--dev)] font-semibold text-sm sm:text-base mt-1">
                Full Stack Developer | Cybersecurity Researcher
              </p>
              <p className="text-xs sm:text-sm text-[var(--muted-foreground)] mt-2">
                Uttara, Dhaka, Bangladesh • +8801600350566 • shihab.zn4@gmail.com
              </p>
              <p className="text-sm text-[var(--muted-foreground)] mt-4 leading-relaxed max-w-3xl">
                I am a Full Stack Developer and Cybersecurity Enthusiast with experience in building web applications using React, Next.js, and Node.js. Along with web development, I am learning ethical hacking and penetration testing through hands-on labs and cybersecurity training. I enjoy learning new technologies and am looking for a Cybersecurity Internship to gain practical experience and grow my skills.
              </p>
            </div>

            {/* Education */}
            <div className="space-y-4">
              <h3 className="text-sm uppercase tracking-wider font-bold text-[var(--foreground)] flex items-center gap-2">
                <GraduationCap size={18} className="text-[var(--dev)]" /> Education
              </h3>
              <div className="space-y-5 pl-3 border-l-2 border-[var(--border)]">
                <div>
                  <div className="flex justify-between items-start text-sm">
                    <span className="font-semibold text-[var(--foreground)]">
                      Northern University Bangladesh
                    </span>
                    <span className="text-xs text-[var(--muted-foreground)] font-mono">Feb 2025 – Present</span>
                  </div>
                  <p className="text-xs text-[var(--dev)] font-medium">BSc in Computer Science & Engineering (CSE) • Dhaka</p>
                  <ul className="text-xs text-[var(--muted-foreground)] mt-1.5 list-disc list-inside space-y-1">
                    <li>Pursuing CSE with a strong focus on full stack development and cybersecurity.</li>
                    <li>Applied academic knowledge to real-world projects, including scalable web applications.</li>
                    <li>Developed skills in data structures, algorithms, databases, and secure coding practices.</li>
                  </ul>
                </div>

                <div>
                  <div className="flex justify-between items-start text-sm">
                    <span className="font-semibold text-[var(--foreground)]">
                      RCCI Public School & College
                    </span>
                    <span className="text-xs text-[var(--muted-foreground)] font-mono">Jun 2021 – July 2023</span>
                  </div>
                  <p className="text-xs text-[var(--muted-foreground)]">HSC (Science) • Rangpur</p>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="space-y-4">
              <h3 className="text-sm uppercase tracking-wider font-bold text-[var(--foreground)] flex items-center gap-2">
                <Award size={18} className="text-[var(--dev)]" /> Professional Training & Certifications
              </h3>
              <div className="grid sm:grid-cols-2 gap-3.5">
                <div className="p-4 rounded-xl border border-[var(--border)] bg-[var(--background)]">
                  <p className="text-sm font-semibold text-[var(--foreground)]">Cybersecurity & Ethical Hacking</p>
                  <p className="text-xs text-[var(--dev)] mt-0.5">Arena Web Security • Certified (Jan 2025 – Nov 2025)</p>
                </div>
                <div className="p-4 rounded-xl border border-[var(--border)] bg-[var(--background)]">
                  <p className="text-sm font-semibold text-[var(--foreground)]">Complete Web Development (Level-1)</p>
                  <p className="text-xs text-[var(--dev)] mt-0.5">Programming Hero • Certified (Jul 2025 – Jan 2026)</p>
                </div>
                <div className="p-4 rounded-xl border border-[var(--border)] bg-[var(--background)]">
                  <p className="text-sm font-semibold text-[var(--foreground)]">Ethical Hacking for Professionals (EHP)</p>
                  <p className="text-xs text-[var(--muted-foreground)] mt-0.5">Byte Capsule • In Progress (Mar 2026 – Present)</p>
                </div>
                <div className="p-4 rounded-xl border border-[var(--border)] bg-[var(--background)]">
                  <p className="text-sm font-semibold text-[var(--foreground)]">AI-Driven Software Engineering Bootcamp</p>
                  <p className="text-xs text-[var(--muted-foreground)] mt-0.5">Programming Hero • In Progress (Apr 2026 – Present)</p>
                </div>
              </div>
            </div>

            {/* Technical Skills */}
            <div className="space-y-4">
              <h3 className="text-sm uppercase tracking-wider font-bold text-[var(--foreground)] flex items-center gap-2">
                <Code2 size={18} className="text-[var(--dev)]" /> Technical Skills
              </h3>
              <div className="grid sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3.5 rounded-xl border border-[var(--border)] bg-[var(--background)]">
                  <span className="font-semibold text-[var(--foreground)]">Programming Languages:</span>
                  <p className="text-[var(--muted-foreground)] mt-1">JavaScript, TypeScript, Python, C, C++</p>
                </div>
                <div className="p-3.5 rounded-xl border border-[var(--border)] bg-[var(--background)]">
                  <span className="font-semibold text-[var(--foreground)]">Frontend:</span>
                  <p className="text-[var(--muted-foreground)] mt-1">React.js, Next.js, Tailwind CSS, shadcn/ui, Framer Motion</p>
                </div>
                <div className="p-3.5 rounded-xl border border-[var(--border)] bg-[var(--background)]">
                  <span className="font-semibold text-[var(--foreground)]">Backend:</span>
                  <p className="text-[var(--muted-foreground)] mt-1">Node.js, Express.js, Prisma ORM, REST API, PostgreSQL</p>
                </div>
                <div className="p-3.5 rounded-xl border border-[var(--border)] bg-[var(--background)]">
                  <span className="font-semibold text-[var(--foreground)]">Cybersecurity & Tools:</span>
                  <p className="text-[var(--muted-foreground)] mt-1">Ethical Hacking, Penetration Testing, OWASP Top 10, Burp Suite, Nmap, Wireshark, Git, Linux, Docker</p>
                </div>
              </div>
            </div>

            {/* Featured Projects */}
            <div className="space-y-4">
              <h3 className="text-sm uppercase tracking-wider font-bold text-[var(--foreground)] flex items-center gap-2">
                <Briefcase size={18} className="text-[var(--dev)]" /> Key Projects
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl border border-[var(--border)] bg-[var(--background)] flex flex-col justify-between">
                  <div>
                    <h4 className="font-semibold text-sm text-[var(--foreground)]">BiteBridge</h4>
                    <p className="text-xs font-mono text-[var(--dev)] my-1">React, Node.js, Express, MongoDB</p>
                    <p className="text-xs text-[var(--muted-foreground)] leading-relaxed">
                      Community platform where people share surplus food with others to reduce waste and support those in need.
                    </p>
                  </div>
                </div>
                <div className="p-4 rounded-xl border border-[var(--border)] bg-[var(--background)] flex flex-col justify-between">
                  <div>
                    <h4 className="font-semibold text-sm text-[var(--foreground)]">DevPulse</h4>
                    <p className="text-xs font-mono text-[var(--dev)] my-1">Node.js, TypeScript, Express, PostgreSQL</p>
                    <p className="text-xs text-[var(--muted-foreground)] leading-relaxed">
                      A robust backend REST API issue tracker optimized for AI code editors, with authentication and full CRUD operations.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Languages */}
            <div className="space-y-2">
              <h3 className="text-sm uppercase tracking-wider font-bold text-[var(--foreground)] flex items-center gap-2">
                <Globe size={18} className="text-[var(--dev)]" /> Languages
              </h3>
              <p className="text-xs text-[var(--muted-foreground)]">
                Bangla (Native) • English (A2 / Professional Working) • Urdu (Working Knowledge)
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

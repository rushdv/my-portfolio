'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Download, ExternalLink, FileText, Sparkles, GraduationCap, Award, Code2, Briefcase, Globe } from 'lucide-react'
import { useResumeModal } from './ResumeContext'

export default function ResumeModal() {
  const { isOpen, closeResume } = useResumeModal()
  const [activeTab, setActiveTab] = useState<'pdf' | 'summary'>('pdf')

  // Handle escape key & scroll locking
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeResume()
    }

    document.addEventListener('keydown', handleKeyDown)
    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = originalOverflow
    }
  }, [isOpen, closeResume])

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeResume}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="relative z-10 w-full max-w-5xl h-[90vh] flex flex-col rounded-2xl shadow-2xl overflow-hidden"
            style={{
              background: 'var(--card)',
              border: '1px solid var(--border)',
            }}
          >
            {/* Modal Header */}
            <div
              className="flex flex-wrap items-center justify-between gap-3 px-5 py-4 border-b border-[var(--border)] shrink-0"
              style={{ background: 'var(--muted)/40' }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: 'var(--dev-border)', color: 'var(--dev)' }}
                >
                  <FileText size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-base sm:text-lg text-[var(--foreground)] leading-tight">
                    Md. Shihab Shahriar Rashu — Resume
                  </h3>
                  <p className="text-xs text-[var(--muted-foreground)]">
                    Full Stack Developer & Cybersecurity Researcher
                  </p>
                </div>
              </div>

              {/* View Switcher Tabs (Desktop & Mobile) */}
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

              {/* Actions & Close */}
              <div className="flex items-center gap-2">
                <a
                  href="/resume.pdf"
                  download="Md_Shihab_Shahriar_Rashu_Resume.pdf"
                  className="btn-outline text-xs px-3 py-2 flex items-center gap-1.5 rounded-lg"
                  title="Download PDF"
                >
                  <Download size={14} />
                  <span className="hidden sm:inline">Download</span>
                </a>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline text-xs px-3 py-2 flex items-center gap-1.5 rounded-lg"
                  title="Open PDF in new tab"
                >
                  <ExternalLink size={14} />
                  <span className="hidden sm:inline">New Tab</span>
                </a>
                <button
                  onClick={closeResume}
                  className="p-2 rounded-lg text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--muted)] transition-colors"
                  aria-label="Close resume modal"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="flex-1 overflow-hidden relative">
              {activeTab === 'pdf' ? (
                <div className="w-full h-full bg-[#525659]/10 relative flex flex-col">
                  {/* Embedded PDF Viewer */}
                  <object
                    data="/resume.pdf#toolbar=1"
                    type="application/pdf"
                    className="w-full h-full flex-1"
                  >
                    <iframe
                      src="/resume.pdf#toolbar=1"
                      className="w-full h-full flex-1 border-0"
                      title="Resume PDF Preview"
                    >
                      <div className="flex flex-col items-center justify-center h-full p-8 text-center gap-4">
                        <FileText size={48} className="text-[var(--muted-foreground)]" />
                        <div>
                          <p className="font-medium text-base text-[var(--foreground)]">
                            Your browser could not preview the PDF directly.
                          </p>
                          <p className="text-sm text-[var(--muted-foreground)] mt-1">
                            You can view the Overview tab, open in a new tab, or download the PDF file directly.
                          </p>
                        </div>
                        <div className="flex items-center gap-3 mt-2">
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
                /* Mobile-friendly structured summary */
                <div className="w-full h-full overflow-y-auto p-6 sm:p-8 space-y-8 text-left">
                  {/* Summary Header */}
                  <div className="pb-6 border-b border-[var(--border)]">
                    <h2 className="text-2xl font-bold text-[var(--foreground)]">
                      MD. SHIHAB SHAHRIAR RASHU
                    </h2>
                    <p className="text-[var(--dev)] font-medium text-sm mt-1">
                      Full Stack Developer | Cybersecurity Researcher
                    </p>
                    <p className="text-xs text-[var(--muted-foreground)] mt-2">
                      Uttara, Dhaka, Bangladesh • +8801600350566 • shihab.zn4@gmail.com
                    </p>
                    <p className="text-sm text-[var(--muted-foreground)] mt-4 leading-relaxed">
                      Full Stack Developer and Cybersecurity Enthusiast with experience building web applications using React, Next.js, and Node.js. Learning ethical hacking and penetration testing through hands-on labs and cybersecurity training. Passionate about secure coding and building scalable web apps.
                    </p>
                  </div>

                  {/* Education */}
                  <div className="space-y-4">
                    <h3 className="text-sm uppercase tracking-wider font-bold text-[var(--foreground)] flex items-center gap-2">
                      <GraduationCap size={16} className="text-[var(--dev)]" /> Education
                    </h3>
                    <div className="space-y-4 pl-2 border-l-2 border-[var(--border)]">
                      <div>
                        <div className="flex justify-between items-start text-sm">
                          <span className="font-semibold text-[var(--foreground)]">
                            Northern University Bangladesh
                          </span>
                          <span className="text-xs text-[var(--muted-foreground)]">Feb 2025 – Present</span>
                        </div>
                        <p className="text-xs text-[var(--dev)]">BSc in Computer Science & Engineering (CSE) • Dhaka</p>
                        <p className="text-xs text-[var(--muted-foreground)] mt-1">
                          Focusing on full-stack development, algorithms, databases, and cybersecurity principles.
                        </p>
                      </div>
                      <div>
                        <div className="flex justify-between items-start text-sm">
                          <span className="font-semibold text-[var(--foreground)]">
                            RCCI Public School & College
                          </span>
                          <span className="text-xs text-[var(--muted-foreground)]">Jun 2021 – July 2023</span>
                        </div>
                        <p className="text-xs text-[var(--muted-foreground)]">HSC (Science) • Rangpur</p>
                      </div>
                    </div>
                  </div>

                  {/* Certifications */}
                  <div className="space-y-4">
                    <h3 className="text-sm uppercase tracking-wider font-bold text-[var(--foreground)] flex items-center gap-2">
                      <Award size={16} className="text-[var(--dev)]" /> Professional Training & Certifications
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-3">
                      <div className="p-3.5 rounded-xl border border-[var(--border)] bg-[var(--card)]">
                        <p className="text-sm font-semibold text-[var(--foreground)]">Cybersecurity & Ethical Hacking</p>
                        <p className="text-xs text-[var(--dev)]">Arena Web Security • Certified (2025)</p>
                      </div>
                      <div className="p-3.5 rounded-xl border border-[var(--border)] bg-[var(--card)]">
                        <p className="text-sm font-semibold text-[var(--foreground)]">Complete Web Development (Level-1)</p>
                        <p className="text-xs text-[var(--dev)]">Programming Hero • Certified (2025 - 2026)</p>
                      </div>
                      <div className="p-3.5 rounded-xl border border-[var(--border)] bg-[var(--card)]">
                        <p className="text-sm font-semibold text-[var(--foreground)]">Ethical Hacking for Professionals (EHP)</p>
                        <p className="text-xs text-[var(--muted-foreground)]">Byte Capsule • In Progress</p>
                      </div>
                      <div className="p-3.5 rounded-xl border border-[var(--border)] bg-[var(--card)]">
                        <p className="text-sm font-semibold text-[var(--foreground)]">AI-Driven Software Engineering</p>
                        <p className="text-xs text-[var(--muted-foreground)]">Programming Hero • In Progress</p>
                      </div>
                    </div>
                  </div>

                  {/* Technical Skills */}
                  <div className="space-y-4">
                    <h3 className="text-sm uppercase tracking-wider font-bold text-[var(--foreground)] flex items-center gap-2">
                      <Code2 size={16} className="text-[var(--dev)]" /> Technical Skills
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-3 text-xs">
                      <div className="p-3 rounded-lg border border-[var(--border)]">
                        <span className="font-semibold text-[var(--foreground)]">Languages:</span>{' '}
                        <span className="text-[var(--muted-foreground)]">JavaScript, TypeScript, Python, C, C++</span>
                      </div>
                      <div className="p-3 rounded-lg border border-[var(--border)]">
                        <span className="font-semibold text-[var(--foreground)]">Frontend:</span>{' '}
                        <span className="text-[var(--muted-foreground)]">React.js, Next.js, Tailwind CSS, shadcn/ui, Framer Motion</span>
                      </div>
                      <div className="p-3 rounded-lg border border-[var(--border)]">
                        <span className="font-semibold text-[var(--foreground)]">Backend:</span>{' '}
                        <span className="text-[var(--muted-foreground)]">Node.js, Express.js, Prisma ORM, REST API, PostgreSQL</span>
                      </div>
                      <div className="p-3 rounded-lg border border-[var(--border)]">
                        <span className="font-semibold text-[var(--foreground)]">Security & Tools:</span>{' '}
                        <span className="text-[var(--muted-foreground)]">Ethical Hacking, OWASP Top 10, Burp Suite, Nmap, Wireshark, Git, Linux, Docker</span>
                      </div>
                    </div>
                  </div>

                  {/* Projects */}
                  <div className="space-y-4">
                    <h3 className="text-sm uppercase tracking-wider font-bold text-[var(--foreground)] flex items-center gap-2">
                      <Briefcase size={16} className="text-[var(--dev)]" /> Featured Projects
                    </h3>
                    <div className="space-y-3">
                      <div className="p-4 rounded-xl border border-[var(--border)] bg-[var(--muted)]/20">
                        <div className="flex justify-between items-center mb-1">
                          <h4 className="font-semibold text-sm text-[var(--foreground)]">BiteBridge</h4>
                          <span className="text-xs font-mono text-[var(--dev)]">React, Node, Express, MongoDB</span>
                        </div>
                        <p className="text-xs text-[var(--muted-foreground)]">
                          Community food-sharing platform allowing people to distribute surplus food to reduce waste and support those in need.
                        </p>
                      </div>
                      <div className="p-4 rounded-xl border border-[var(--border)] bg-[var(--muted)]/20">
                        <div className="flex justify-between items-center mb-1">
                          <h4 className="font-semibold text-sm text-[var(--foreground)]">DevPulse</h4>
                          <span className="text-xs font-mono text-[var(--dev)]">Node.js, TypeScript, PostgreSQL</span>
                        </div>
                        <p className="text-xs text-[var(--muted-foreground)]">
                          Backend REST API issue tracker optimized for AI code editors with secure authentication and complete CRUD operations.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Languages */}
                  <div className="space-y-2">
                    <h3 className="text-sm uppercase tracking-wider font-bold text-[var(--foreground)] flex items-center gap-2">
                      <Globe size={16} className="text-[var(--dev)]" /> Languages
                    </h3>
                    <p className="text-xs text-[var(--muted-foreground)]">
                      Bangla (Native) • English (A2 / Professional Working) • Urdu (Working Knowledge)
                    </p>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

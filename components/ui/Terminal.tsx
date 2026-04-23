'use client'

import { useState, useRef, useEffect } from 'react'

const COMMANDS: Record<string, string[]> = {
  help: [
    '  Available commands:',
    '  <span style="color:var(--dev)">whoami</span>     — About Shihab',
    '  <span style="color:var(--dev)">skills</span>     — Tech stack',
    '  <span style="color:var(--sec)">security</span>   — Security expertise',
    '  <span style="color:var(--dev)">projects</span>   — Featured projects',
    '  <span style="color:var(--dev)">contact</span>    — Get in touch',
    '  <span style="color:var(--dev)">social</span>     — Social links',
    '  <span style="color:#f78166">clear</span>      — Clear terminal',
  ],
  whoami: [
    '  Shihab Shahriar Rashu',
    '  Full-Stack Developer & Security Researcher',
    '  Based in Bangladesh 🇧🇩',
    '  CS Student | CEH (In Progress) | Open Source Contributor',
  ],
  skills: [
    '  <span style="color:var(--dev)">// Frontend</span>',
    '  React, Next.js, TypeScript, Tailwind CSS, Framer Motion',
    '  <span style="color:var(--dev)">// Backend</span>',
    '  Node.js, Python, FastAPI, PostgreSQL, Prisma, WebSockets',
    '  <span style="color:var(--dev)">// Tools</span>',
    '  Docker, AWS, Vercel, Git, Figma',
  ],
  security: [
    '  <span style="color:var(--sec)">// Certifications</span>',
    '  CEH — EC-Council (In Progress)',
    '  <span style="color:var(--sec)">// Tools</span>',
    '  Burp Suite, Metasploit, Kali Linux, Wireshark, Scapy',
    '  <span style="color:var(--sec)">// Focus Areas</span>',
    '  Penetration Testing, Network Security, Vulnerability Assessment',
  ],
  projects: [
    '  <span style="color:var(--dev)">Muhasabah</span>     — Habit tracking platform (React + FastAPI)',
    '  <span style="color:var(--dev)">NetScope-Live</span> — Real-time network visualizer (Python + Scapy)',
    '  <span style="color:var(--dev)">Nexum</span>         — Social media app (React + Vite)',
    '  <span style="color:var(--dev)">DebugAI</span>       — AI-powered CLI debugger (Python + Gemini)',
    '  <span style="color:var(--dev)">SecurePass</span>    — Client-side password manager (React)',
  ],
  contact: [
    '  Email   → <span style="color:var(--dev)">shihab.zn4@gmail.com</span>',
    '  GitHub  → <span style="color:var(--dev)">github.com/rushdv</span>',
    '  LinkedIn→ <span style="color:var(--dev)">linkedin.com/in/shihab-shahriar-rashu-431a3a217</span>',
  ],
  social: [
    '  GitHub   → <a href="https://github.com/rushdv" target="_blank" style="color:var(--dev)">github.com/rushdv</a>',
    '  LinkedIn → <a href="https://linkedin.com/in/shihab-shahriar-rashu-431a3a217" target="_blank" style="color:var(--dev)">linkedin.com/in/shihab-shahriar-rashu</a>',
    '  Twitter  → <a href="https://twitter.com/rushdv313" target="_blank" style="color:var(--dev)">twitter.com/rushdv313</a>',
  ],
}

interface Line { type: 'input' | 'output' | 'error'; content: string }

export default function Terminal() {
  const [lines, setLines] = useState<Line[]>([
    { type: 'output', content: '  Welcome! Type <span style="color:var(--dev)">help</span> to see available commands.' },
  ])
  const [input, setInput] = useState('')
  const [history, setHistory] = useState<string[]>([])
  const [histIdx, setHistIdx] = useState(-1)
  const bottomRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [lines])

  function run(cmd: string) {
    const trimmed = cmd.trim().toLowerCase()
    const newLines: Line[] = [{ type: 'input', content: cmd }]

    if (trimmed === 'clear') {
      setLines([])
      setInput('')
      return
    }

    if (trimmed === '') {
      setLines(prev => [...prev, ...newLines])
      setInput('')
      return
    }

    if (COMMANDS[trimmed]) {
      COMMANDS[trimmed].forEach(l => newLines.push({ type: 'output', content: l }))
    } else {
      newLines.push({ type: 'error', content: `  command not found: ${trimmed}. Type <span style="color:var(--dev)">help</span> for available commands.` })
    }

    setLines(prev => [...prev, ...newLines])
    setHistory(prev => [cmd, ...prev])
    setHistIdx(-1)
    setInput('')
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') { run(input); return }
    if (e.key === 'ArrowUp') {
      const idx = Math.min(histIdx + 1, history.length - 1)
      setHistIdx(idx)
      setInput(history[idx] ?? '')
    }
    if (e.key === 'ArrowDown') {
      const idx = Math.max(histIdx - 1, -1)
      setHistIdx(idx)
      setInput(idx === -1 ? '' : history[idx])
    }
  }

  return (
    <div
      className="portfolio-card overflow-hidden"
      onClick={() => inputRef.current?.focus()}
      style={{ cursor: 'text' }}
    >
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-3" style={{ borderBottom: '1px solid var(--border)', background: 'rgba(0,0,0,0.2)' }}>
        <span className="w-3 h-3 rounded-full" style={{ background: '#f78166' }} />
        <span className="w-3 h-3 rounded-full" style={{ background: '#e3b341' }} />
        <span className="w-3 h-3 rounded-full" style={{ background: '#3fb950' }} />
        <span className="ml-3 text-xs" style={{ color: 'var(--muted-foreground)', fontFamily: 'ui-monospace, monospace' }}>
          rashu@portfolio ~ bash
        </span>
      </div>

      {/* Output */}
      <div className="p-4 h-64 overflow-y-auto text-xs leading-relaxed" style={{ fontFamily: 'ui-monospace, monospace' }}>
        {lines.map((l, i) => (
          <div key={i} className="mb-0.5">
            {l.type === 'input' && (
              <span>
                <span style={{ color: 'var(--sec)' }}>rushdv</span>
                <span style={{ color: 'var(--muted-foreground)' }}>@portfolio</span>
                <span style={{ color: 'var(--dev)' }}> ~ </span>
                <span style={{ color: 'var(--foreground)' }}>$ {l.content}</span>
              </span>
            )}
            {l.type === 'output' && (
              <span style={{ color: 'var(--muted-foreground)' }} dangerouslySetInnerHTML={{ __html: l.content }} />
            )}
            {l.type === 'error' && (
              <span style={{ color: '#f78166' }} dangerouslySetInnerHTML={{ __html: l.content }} />
            )}
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div className="flex items-center gap-2 px-4 py-3" style={{ borderTop: '1px solid var(--border)' }}>
        <span className="text-xs flex-shrink-0" style={{ fontFamily: 'ui-monospace, monospace' }}>
          <span style={{ color: 'var(--sec)' }}>rushdv</span>
          <span style={{ color: 'var(--muted-foreground)' }}>@portfolio</span>
          <span style={{ color: 'var(--dev)' }}> ~ $ </span>
        </span>
        <input
          ref={inputRef}
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={onKeyDown}
          className="flex-1 bg-transparent outline-none text-xs"
          style={{ color: 'var(--foreground)', fontFamily: 'ui-monospace, monospace', caretColor: 'var(--dev)' }}
          placeholder="type a command..."
          autoComplete="off"
          spellCheck={false}
        />
      </div>
    </div>
  )
}

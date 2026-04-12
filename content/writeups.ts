export interface Writeup {
  slug: string
  title: string
  category: 'ctf' | 'blog' | 'research'
  tags: string[]
  date: string
  readTime: string
  excerpt: string
  url?: string // external link (dev.to, medium, etc.) or internal
}

export const writeups: Writeup[] = [
  {
    slug: 'hackthebox-machine-writeup',
    title: 'HackTheBox: Exploiting SUID Binaries for Privilege Escalation',
    category: 'ctf',
    tags: ['HackTheBox', 'Linux', 'Privilege Escalation', 'SUID'],
    date: '2024-03-15',
    readTime: '8 min',
    excerpt: 'Walkthrough of a medium-difficulty HTB machine involving web enumeration, initial foothold via LFI, and privilege escalation through misconfigured SUID binaries.',
  },
  {
    slug: 'owasp-top10-practical',
    title: 'OWASP Top 10: Practical Exploitation & Mitigation',
    category: 'research',
    tags: ['OWASP', 'Web Security', 'SQLi', 'XSS'],
    date: '2024-02-10',
    readTime: '12 min',
    excerpt: 'A hands-on breakdown of the OWASP Top 10 vulnerabilities with real exploitation examples and code-level mitigations for each.',
  },
  {
    slug: 'fastapi-security-patterns',
    title: 'Secure FastAPI: Auth, Rate Limiting & Input Validation',
    category: 'blog',
    tags: ['FastAPI', 'Python', 'Security', 'JWT'],
    date: '2024-01-20',
    readTime: '10 min',
    excerpt: 'How to build production-ready FastAPI applications with proper JWT authentication, rate limiting, and input sanitization to prevent common vulnerabilities.',
  },
  {
    slug: 'tryhackme-network-ctf',
    title: 'TryHackMe: Network Pentesting CTF Walkthrough',
    category: 'ctf',
    tags: ['TryHackMe', 'Nmap', 'Metasploit', 'Network'],
    date: '2023-12-05',
    readTime: '6 min',
    excerpt: 'Step-by-step walkthrough of a network-focused CTF challenge involving port scanning, service enumeration, and exploitation with Metasploit.',
  },
]

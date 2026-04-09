import { Star, Users, BookOpen } from 'lucide-react'
import { GithubIcon } from '@/components/icons/SocialIcons'
import SectionHeading from '@/components/ui/SectionHeading'
import * as S from '@/lib/styles'

async function fetchStats() {
  try {
    const username = process.env.GITHUB_USERNAME ?? 'username'
    const res = await fetch(`https://api.github.com/users/${username}`, {
      headers: process.env.GITHUB_TOKEN ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` } : {},
      next: { revalidate: 3600 },
    })
    if (!res.ok) return null
    return await res.json()
  } catch { return null }
}

export default async function GitHubStats() {
  const data = await fetchStats()
  const username = process.env.GITHUB_USERNAME ?? 'username'
  const stats = [
    { icon: BookOpen, label: 'Public Repos', value: data?.public_repos ?? '—' },
    { icon: Users, label: 'Followers', value: data?.followers ?? '—' },
    { icon: Star, label: 'Following', value: data?.following ?? '—' },
  ]

  return (
    <section style={{ padding: '80px 24px', maxWidth: 1100, margin: '0 auto' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
        <GithubIcon size={22} />
        <SectionHeading label="" title="GitHub Activity" />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: 24 }}>
        {stats.map(({ icon: Icon, label, value }) => (
          <div key={label} style={{ ...S.card, padding: 20, textAlign: 'center' }}>
            <Icon size={20} color="#fa5252" style={{ margin: '0 auto 10px', display: 'block' }} />
            <div style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--fg)' }}>{value}</div>
            <div style={{ fontSize: '0.72rem', color: 'var(--muted)', marginTop: 4 }}>{label}</div>
          </div>
        ))}
      </div>

      <div style={{ borderRadius: 12, overflow: 'hidden' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=transparent&hide_border=true&title_color=fa5252&icon_color=fa5252&text_color=9ca3af&bg_color=00000000`}
          alt="GitHub Stats" style={{ width: '100%' }} />
      </div>
    </section>
  )
}

import { Star, Users, BookOpen } from 'lucide-react'
import { GithubIcon } from '@/components/icons/SocialIcons'

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
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <div className="flex items-center gap-3 mb-8">
        <GithubIcon size={22} />
        <h2 className="rn-title !mb-0 !pb-0 after:hidden" style={{ color: 'var(--color-fg)' }}>
          GitHub Activity
        </h2>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-6">
        {stats.map(({ icon: Icon, label, value }) => (
          <div key={label} className="rn-card p-5 text-center">
            <Icon size={20} color="#fa5252" className="mx-auto mb-2" />
            <div className="text-2xl font-extrabold" style={{ color: 'var(--color-fg)' }}>{value}</div>
            <div className="text-xs mt-1" style={{ color: 'var(--color-muted)' }}>{label}</div>
          </div>
        ))}
      </div>

      <div className="rounded-xl overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=transparent&hide_border=true&title_color=fa5252&icon_color=fa5252&text_color=a0a6b1&bg_color=00000000`}
          alt="GitHub Stats" className="w-full" />
      </div>
    </section>
  )
}

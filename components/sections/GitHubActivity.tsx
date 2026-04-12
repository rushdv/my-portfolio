import { GithubIcon } from '@/components/icons/SocialIcons'

async function fetchGitHub() {
  try {
    const res = await fetch('https://api.github.com/users/rushdv', {
      headers: process.env.GITHUB_TOKEN ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` } : {},
      next: { revalidate: 3600 },
    })
    if (!res.ok) return null
    return await res.json()
  } catch { return null }
}

export default async function GitHubActivity() {
  const data = await fetchGitHub()

  const stats = [
    { label: 'Repositories', value: data?.public_repos ?? '70+' },
    { label: 'Followers', value: data?.followers ?? '13' },
    { label: 'Following', value: data?.following ?? '—' },
  ]

  const languages = [
    { name: 'HTML', pct: 43, color: '#e34c26' },
    { name: 'JavaScript', pct: 28, color: '#f1e05a' },
    { name: 'Python', pct: 10, color: '#3572A5' },
    { name: 'SCSS', pct: 7, color: '#c6538c' },
    { name: 'CSS', pct: 5, color: '#563d7c' },
  ]

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <div className="flex items-center gap-3 mb-8">
        <GithubIcon size={20} style={{ color: 'var(--dev)' } as React.CSSProperties} />
        <div>
          <p className="section-label dev" style={{ marginBottom: 0 }}>Open Source</p>
          <h2 className="section-title dev" style={{ marginBottom: 0, paddingBottom: 0 }}>
            GitHub Activity
            <span style={{ display: 'none' }} />
          </h2>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-5 mb-5">
        {/* Stats */}
        {stats.map((s) => (
          <div key={s.label} className="portfolio-card p-5 text-center">
            <div className="text-3xl font-extrabold mb-1" style={{ color: 'var(--dev)', fontFamily: 'ui-monospace, monospace' }}>
              {s.value}
            </div>
            <div className="text-xs uppercase tracking-widest" style={{ color: 'var(--muted-foreground)', fontFamily: 'ui-monospace, monospace' }}>
              {s.label}
            </div>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        {/* Top Languages */}
        <div className="portfolio-card p-6">
          <p className="text-xs uppercase tracking-widest font-bold mb-4" style={{ color: 'var(--dev)', fontFamily: 'ui-monospace, monospace' }}>
            // Top Languages
          </p>
          <div className="space-y-3">
            {languages.map((l) => (
              <div key={l.name}>
                <div className="flex justify-between text-xs mb-1" style={{ color: 'var(--muted-foreground)', fontFamily: 'ui-monospace, monospace' }}>
                  <span>{l.name}</span>
                  <span>{l.pct}%</span>
                </div>
                <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'var(--border)' }}>
                  <div
                    className="h-full rounded-full"
                    style={{ width: `${l.pct}%`, background: l.color, transition: 'width 1s ease' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* GitHub Stats card */}
        <div className="portfolio-card p-6 flex flex-col gap-4">
          <p className="text-xs uppercase tracking-widest font-bold" style={{ color: 'var(--dev)', fontFamily: 'ui-monospace, monospace' }}>
            // Stats Card
          </p>
          <div className="rounded-lg overflow-hidden flex-1 flex items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://github-readme-stats.vercel.app/api?username=rushdv&show_icons=true&theme=transparent&hide_border=true&title_color=38bdf8&icon_color=38bdf8&text_color=8b949e&bg_color=00000000&count_private=true"
              alt="GitHub Stats"
              className="w-full"
            />
          </div>
          <a
            href="https://github.com/rushdv"
            target="_blank" rel="noopener noreferrer"
            className="btn-dev self-start text-xs"
            style={{ padding: '7px 16px' }}
          >
            <GithubIcon size={13} /> View Profile
          </a>
        </div>
      </div>
    </section>
  )
}

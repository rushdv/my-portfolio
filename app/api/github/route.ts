import { getGitHubStats } from '@/lib/github'

export async function GET() {
  const username = process.env.GITHUB_USERNAME ?? 'username'
  const stats = await getGitHubStats(username)

  if (!stats) {
    return Response.json({ error: 'Failed to fetch stats' }, { status: 500 })
  }

  return Response.json(stats)
}

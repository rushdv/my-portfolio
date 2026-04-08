export interface GitHubStats {
  stars: number
  repos: number
  followers: number
}

export async function getGitHubStats(username: string): Promise<GitHubStats | null> {
  try {
    const res = await fetch(`https://api.github.com/users/${username}`, {
      headers: process.env.GITHUB_TOKEN
        ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
        : {},
      next: { revalidate: 3600 },
    })
    if (!res.ok) return null
    const data = await res.json()
    return {
      stars: 0, // would need separate call for total stars
      repos: data.public_repos,
      followers: data.followers,
    }
  } catch {
    return null
  }
}

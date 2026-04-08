export default function TechBadge({ name }: { name: string }) {
  return (
    <span className="inline-block px-2 py-1 text-xs rounded-md bg-white/10 text-white/80 border border-white/10">
      {name}
    </span>
  )
}

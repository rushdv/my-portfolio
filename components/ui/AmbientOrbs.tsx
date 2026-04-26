'use client'

export default function AmbientOrbs() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <div className="absolute top-[5%] -left-[15%] w-[600px] h-[600px] rounded-full"
        style={{ background: 'radial-gradient(circle, var(--dev-dim) 0%, transparent 70%)', filter: 'blur(80px)', opacity: 0.8 }} />
      <div className="absolute bottom-[10%] -right-[10%] w-[500px] h-[500px] rounded-full"
        style={{ background: 'radial-gradient(circle, var(--sec-dim) 0%, transparent 70%)', filter: 'blur(80px)', opacity: 0.8 }} />
    </div>
  )
}

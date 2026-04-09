import * as S from '@/lib/styles'

export default function SectionHeading({ label, title }: { label: string; title: string }) {
  return (
    <div style={{ marginBottom: 36 }}>
      <span style={S.label}>{label}</span>
      <h2 style={{ ...S.sectionTitle, marginBottom: 0 }}>
        {title}
        <span style={{
          display: 'block', position: 'absolute', bottom: 0, left: 0,
          width: 52, height: 3, borderRadius: 2,
          background: 'linear-gradient(to right, #fa5252, #dd2476)',
        }} />
      </h2>
    </div>
  )
}

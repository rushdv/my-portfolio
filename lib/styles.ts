// Shared inline styles — used across all components
// This avoids Tailwind v4 purging custom CSS classes

export const card: React.CSSProperties = {
  background: 'var(--card)',
  borderRadius: 14,
  border: '1px solid var(--border)',
  boxShadow: 'var(--sh)',
  transition: 'transform 0.28s ease, box-shadow 0.28s ease, border-color 0.28s ease',
}

export const cardHover: React.CSSProperties = {
  transform: 'translateY(-6px)',
  boxShadow: 'var(--sh-lg)',
  borderColor: 'rgba(250,82,82,0.45)',
}

export const tag: React.CSSProperties = {
  fontSize: '0.72rem',
  padding: '4px 10px',
  borderRadius: 5,
  background: 'rgba(250,82,82,0.1)',
  color: '#fa5252',
  border: '1px solid rgba(250,82,82,0.2)',
  fontWeight: 600,
  display: 'inline-block',
}

export const label: React.CSSProperties = {
  display: 'block',
  fontSize: '0.7rem',
  letterSpacing: '0.18em',
  textTransform: 'uppercase',
  color: '#fa5252',
  fontWeight: 700,
  marginBottom: 8,
}

export const sectionTitle: React.CSSProperties = {
  fontSize: '1.9rem',
  fontWeight: 700,
  color: 'var(--fg)',
  paddingBottom: 16,
  marginBottom: 36,
  position: 'relative',
}

export const gradText: React.CSSProperties = {
  background: 'linear-gradient(to right, #fa5252, #dd2476)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
}

export const btnGrad: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: 6,
  padding: '11px 26px',
  borderRadius: 8,
  fontSize: '0.9rem',
  fontWeight: 600,
  cursor: 'pointer',
  border: 'none',
  background: 'linear-gradient(to right, #fa5252, #dd2476)',
  color: '#fff',
  textDecoration: 'none',
  transition: 'opacity 0.2s, transform 0.2s',
}

export const btnOutline: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: 6,
  padding: '11px 26px',
  borderRadius: 8,
  fontSize: '0.9rem',
  fontWeight: 600,
  cursor: 'pointer',
  background: 'transparent',
  color: 'var(--fg)',
  border: '1.5px solid var(--border)',
  textDecoration: 'none',
  transition: 'border-color 0.2s, background 0.2s',
}

export const input: React.CSSProperties = {
  width: '100%',
  padding: '12px 16px',
  borderRadius: 10,
  background: 'var(--inner)',
  border: '1px solid var(--border)',
  color: 'var(--fg)',
  fontSize: '0.9rem',
  outline: 'none',
  fontFamily: 'inherit',
  transition: 'border-color 0.2s',
}

export const gradLine: React.CSSProperties = {
  content: '""',
  position: 'absolute',
  bottom: 0,
  left: 0,
  width: 52,
  height: 3,
  borderRadius: 2,
  background: 'linear-gradient(to right, #fa5252, #dd2476)',
}

const stats = [
  { num: '7+', label: 'Completed Projects' },
  { num: '40+', label: 'Global Brands Carried' },
  { num: '5', label: 'Industry Sectors' },
  { num: 'MY', label: 'Nationwide Coverage' },
]

export default function ReachStrip() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', background: 'var(--dark)', borderBottom: '1px solid var(--border)' }}>
      {stats.map((s, i) => (
        <div key={i} className="fade-up" style={{
          padding: '28px 40px',
          borderRight: i < 3 ? '1px solid var(--border)' : 'none',
          transitionDelay: `${i * 0.08}s`
        }}>
          <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: '44px', fontWeight: 800, color: 'var(--red)', lineHeight: 1, marginBottom: '4px' }}>{s.num}</div>
          <div style={{ fontSize: '11.5px', letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--muted)' }}>{s.label}</div>
        </div>
      ))}
    </div>
  )
}

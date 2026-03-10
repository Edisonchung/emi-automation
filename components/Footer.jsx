export default function Footer() {
  return (
    <footer className="footer" style={{ padding: '26px 56px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--border)' }}>
      <span style={{ fontSize: '12px', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>All rights reserved.</span>
      <span style={{ fontSize: '12px', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>©2026 EMI Automation Sdn Bhd</span>
    </footer>
  )
}

const sectors = [
  { icon: '🎓', name: 'Academic & Research', body: 'Public universities, polytechnics, research hospitals, and science faculties. Direct access to procurement committees and lab acquisition officers across Malaysia.' },
  { icon: '🏗️', name: 'Industrial & Manufacturing', body: 'Semiconductor fabs, process plants, and production facilities — from VFD panels to full PLC system integration and industrial IoT deployments.' },
  { icon: '🖥️', name: 'Data Centers & IT', body: 'Enterprise IT infrastructure, server hardware maintenance, rack systems, cloud integration — across public sector, GLC, and private enterprise facilities.' },
  { icon: '💧', name: 'Utilities & Infrastructure', body: 'Water treatment, telemetry, pumping stations and public infrastructure across Peninsular Malaysia including government-linked utility companies.' },
  { icon: '🛒', name: 'Retail Enterprise', body: 'Large-scale retail chains and enterprise head offices — AV systems, IT infrastructure, and technology deployment for high-footfall commercial environments.' },
]

export default function Sectors() {
  return (
    <section id="sectors" className="section-pad" style={{ padding: '80px 56px', borderTop: '1px solid var(--border)', background: 'var(--dark)' }}>
      <h2 className="fade-up" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 'clamp(34px,4vw,54px)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--white)', marginBottom: '12px' }}>Sector Coverage</h2>
      <p className="fade-up" style={{ fontSize: '15px', color: 'var(--muted)', marginBottom: '52px', lineHeight: 1.65, maxWidth: '680px', transitionDelay: '0.05s' }}>
        Established presence across five high-value sectors gives any technology principal direct access to Malaysia&apos;s most active procurement channels.
      </p>
      <div className="sectors-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: '2px' }}>
        {sectors.map((s, i) => (
          <div key={i} className="fade-up" style={{
            padding: '36px 26px', border: '1px solid var(--border)', background: 'var(--black)',
            transitionDelay: `${i * 0.08}s`
          }}>
            <div style={{ fontSize: '30px', marginBottom: '16px' }}>{s.icon}</div>
            <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: '18px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--white)', marginBottom: '10px' }}>{s.name}</div>
            <div style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.62 }}>{s.body}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

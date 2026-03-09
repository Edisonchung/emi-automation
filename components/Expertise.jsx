const cols = [
  {
    num: '01', title: 'Our Expertise',
    body: 'Specializing in Electro-Mechanical Intelligence, we combine IT systems with advanced industrial automation. Our expertise spans IT-OT integration, PLCs, industrial IoT, data-driven analytics, and customized automation — built for the demanding requirements of modern Malaysian industries.'
  },
  {
    num: '02', title: 'Our Products',
    body: 'PLCs, VFDs & Inverters, Soft Starters, HMIs, DCS Systems, industrial Sensors and Instruments, cloud-based automation platforms, and enterprise IT hardware. We partner with 40+ leading global brands to ensure future-ready, reliable systems across all deployment environments.'
  },
  {
    num: '03', title: 'Our Services',
    body: 'IT-OT convergence, system integration, cloud solutions for data management and real-time monitoring, electrical & instrumentation installation, and ongoing support for IT and automation systems. We manage projects end-to-end — procurement, deployment, commissioning, and after-sales.'
  },
]

export default function Expertise() {
  return (
    <section id="expertise" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', padding: '0 56px', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      {cols.map((c, i) => (
        <div key={i} className="fade-up" style={{
          padding: '60px 0', position: 'relative',
          paddingLeft: i > 0 ? '56px' : 0,
          paddingRight: i < 2 ? '56px' : 0,
          borderLeft: i > 0 ? '1px solid var(--border)' : 'none',
          transitionDelay: `${i * 0.1}s`
        }}>
          <span style={{
            fontFamily: "'Barlow Condensed',sans-serif",
            fontSize: 'clamp(110px,10vw,170px)', fontWeight: 800,
            lineHeight: 0.85, color: 'rgba(255,255,255,0.05)',
            position: 'absolute', top: '20px', right: '-10px',
            pointerEvents: 'none', userSelect: 'none'
          }}>{c.num}</span>
          <h3 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: '28px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--white)', marginBottom: '20px', position: 'relative', zIndex: 1 }}>{c.title}</h3>
          <p style={{ fontSize: '14px', lineHeight: 1.76, color: 'rgba(200,200,200,0.7)', position: 'relative', zIndex: 1 }}>{c.body}</p>
        </div>
      ))}
    </section>
  )
}

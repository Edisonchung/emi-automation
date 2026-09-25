const cards = [
  { icon: '🏛️', title: 'Academic, Research & Healthcare', body: 'We supply universities, research institutes, medical faculties and hospitals across Malaysia with engineering and imaging software licences, instrumentation and IT infrastructure — and we handle the vendor registration, quotation and credit-application requirements that come with institutional procurement.' },
  { icon: '🏭', title: 'Industrial & Manufacturing Network', body: 'Established relationships with semiconductor manufacturers, public utilities, and infrastructure operators across Malaysia. Our industrial client base represents a high-value secondary market for engineering simulation and workflow software tools.' },
  { icon: '💻', title: 'Full IT Deployment Stack', body: 'Proven expertise in enterprise IT — server hardware, data center maintenance, rack systems, RAID configuration, firmware management, and cloud integration. As an appointed Materialise reseller we manage the full software supply cycle — quotation, purchasing, licensing and deployment — and coordinate end-user support with the publisher.' },
  { icon: '🔗', title: 'IT-OT Convergence Specialists', body: 'Few Malaysian suppliers work across both industrial automation (PLCs, VFDs, HMIs) and enterprise IT. That dual capability is exactly what it takes to deploy software that links engineering design and production systems.' },
  { icon: '📋', title: 'Institutionally Compliant', body: 'SSM-registered (201901036890 (1346220-A)) and set up for Malaysian institutional procurement — vendor registration, tenders, formal quotations, credit applications and compliance documentation — so institutional sales cycles run smoothly.' },
  { icon: '🌏', title: 'Local Presence. Responsive Support.', body: 'Headquartered in KL Eco City with technical coverage across Peninsular Malaysia. We provide in-language consultation, on-site deployment and responsive after-sales support.' },
]

export default function WhyEMI() {
  return (
    <section id="why-emi" className="section-pad" style={{ padding: '80px 56px', borderTop: '1px solid var(--border)' }}>
      <h2 className="fade-up" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 'clamp(34px,4vw,54px)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--white)', marginBottom: '12px' }}>Why Appoint EMI</h2>
      <p className="fade-up" style={{ fontSize: '15px', color: 'var(--muted)', marginBottom: '52px', lineHeight: 1.65, maxWidth: '680px', transitionDelay: '0.05s' }}>
        For customers and technology principals alike — here is what EMI brings to every engagement.
      </p>
      <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '2px' }}>
        {cards.map((c, i) => (
          <div key={i} className="fade-up why-card" style={{
            background: 'var(--mid)', padding: '40px 36px', position: 'relative', overflow: 'hidden',
            transitionDelay: `${(i % 3) * 0.08}s`
          }}>
            <div style={{ fontSize: '26px', marginBottom: '18px' }}>{c.icon}</div>
            <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: '20px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--white)', marginBottom: '12px' }}>{c.title}</div>
            <div style={{ fontSize: '13.5px', lineHeight: 1.72, color: 'rgba(200,200,200,0.66)' }}>{c.body}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

const cards = [
  { icon: '🏛️', title: 'Academic & Research Access', body: 'Registered vendor to multiple Malaysian public universities and research institutions, with established relationships across biomedical engineering, electrical engineering, and science faculties. Direct access to institutional procurement channels — the primary addressable market for advanced software licensing in Malaysia.' },
  { icon: '🏭', title: 'Industrial & Manufacturing Network', body: 'Established relationships with semiconductor manufacturers, public utilities, and infrastructure operators across Malaysia. Our industrial client base represents a high-value secondary market for engineering simulation and workflow software tools.' },
  { icon: '💻', title: 'Full IT Deployment Stack', body: 'Proven expertise in enterprise IT — server hardware, data center maintenance, rack systems, RAID configuration, firmware management, and cloud integration. We understand the complete software deployment lifecycle from procurement through licensing, installation, and end-user support.' },
  { icon: '🔗', title: 'IT-OT Convergence Specialists', body: 'One of the few Malaysian companies operating simultaneously across industrial automation (PLCs, VFDs, HMIs) and enterprise IT. This dual capability is precisely what is needed to distribute software that bridges engineering design, clinical workflows, and production systems.' },
  { icon: '📋', title: 'Institutionally Compliant', body: 'SSM-registered with active vendor registration across public institutions and GLC entities. Experienced in Malaysian procurement frameworks — quotation formats, credit applications, and compliance documentation — ensuring smooth institutional sales cycles.' },
  { icon: '🌏', title: 'Local Presence. Responsive Support.', body: 'Headquartered in KL Eco City with technical coverage across Peninsular Malaysia. We provide in-language consultation, on-site deployment, and responsive after-sales support — capabilities that remote distributors or direct vendor channels simply cannot match.' },
]

export default function WhyEMI() {
  return (
    <section id="why-emi" className="section-pad" style={{ padding: '80px 56px', borderTop: '1px solid var(--border)' }}>
      <h2 className="fade-up" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 'clamp(34px,4vw,54px)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--white)', marginBottom: '12px' }}>Why Appoint EMI</h2>
      <p className="fade-up" style={{ fontSize: '15px', color: 'var(--muted)', marginBottom: '52px', lineHeight: 1.65, maxWidth: '680px', transitionDelay: '0.05s' }}>
        For any technology principal seeking a capable, well-networked Malaysian distribution partner — here is what sets us apart.
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

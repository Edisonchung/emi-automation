'use client'

export default function Contact() {
  return (
    <section id="contact" className="contact-section" style={{ margin: '0 56px', border: '1px solid var(--border)', padding: '70px', position: 'relative', overflow: 'hidden', background: 'var(--dark)' }}>
      <div style={{ position: 'absolute', bottom: '-60px', right: '-60px', width: '520px', height: '360px', background: 'radial-gradient(ellipse, rgba(160,30,15,0.2) 0%, transparent 70%)' }} />
      <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', position: 'relative', zIndex: 1 }}>
        <div className="fade-up">
          <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: '11px', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', color: 'var(--red)', marginBottom: '22px' }}>Get In Touch</div>
          <a href="mailto:support@emiautomation.com" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 'clamp(18px,2.2vw,32px)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--white)', textDecoration: 'none', display: 'block', marginBottom: '10px', wordBreak: 'break-word' }}>support@emiautomation.com</a>
          <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 'clamp(18px,2.2vw,32px)', fontWeight: 700, color: 'var(--white)', display: 'block', marginBottom: '28px' }}>+(60)17 – 8070 817</span>
          <div style={{ fontSize: '14px', lineHeight: 1.7, color: 'var(--muted)' }}>
            <strong style={{ color: 'var(--white)', fontFamily: "'Barlow Condensed',sans-serif", fontSize: '14px', letterSpacing: '1px', textTransform: 'uppercase' }}>EMI AUTOMATION SDN BHD</strong><br />
            SO16-1, Menara 1, KL Eco City<br />
            Jalan Bangsar, 59200 Kuala Lumpur, Malaysia
          </div>
        </div>
        <div className="fade-up" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '16px', transitionDelay: '0.15s' }}>
          {[
            { title: 'SSM Registered · Malaysia', text: 'Registered company under the Companies Commission of Malaysia. Available for vendor registration, credit applications, and institutional supply agreements.' },
            { title: 'Institutional Supply Ready', text: 'Active vendor registration with Malaysian public institutions. Experienced in academic and government procurement frameworks, compliance documentation, and formal quotation processes.' },
            { title: 'Distribution Partnership Enquiries', text: 'We welcome technology principals seeking a capable Malaysian distribution partner with proven IT, industrial, and academic market access.' },
          ].map((c, i) => (
            <div key={i} style={{ padding: '18px 22px', border: '1px solid var(--border)', background: 'rgba(255,255,255,0.02)' }}>
              <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.5px', color: 'var(--white)', marginBottom: '5px' }}>{c.title}</div>
              <div style={{ fontSize: '12.5px', color: 'var(--muted)', lineHeight: 1.6 }}>{c.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

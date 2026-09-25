'use client'

export default function Contact() {
  return (
    <section id="contact" className="contact-section" style={{ margin: '0 56px', border: '1px solid var(--border)', padding: '70px', position: 'relative', overflow: 'hidden', background: 'var(--dark)' }}>
      <div style={{ position: 'absolute', bottom: '-60px', right: '-60px', width: '520px', height: '360px', background: 'radial-gradient(ellipse, rgba(160,30,15,0.2) 0%, transparent 70%)' }} />
      <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', position: 'relative', zIndex: 1 }}>
        <div className="fade-up">
          <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: '11px', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', color: 'var(--red)', marginBottom: '22px' }}>Get In Touch</div>
          <a href="mailto:support@emiautomation.com" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 'clamp(18px,2.2vw,32px)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--white)', textDecoration: 'none', display: 'block', marginBottom: '10px', wordBreak: 'break-word' }}>support@emiautomation.com</a>
          <a href="tel:+60178070817" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 'clamp(18px,2.2vw,32px)', fontWeight: 700, color: 'var(--white)', display: 'block', marginBottom: '28px', textDecoration: 'none' }}>+60 17-807 0817</a>
          <div style={{ fontSize: '14px', lineHeight: 1.7, color: 'var(--muted)' }}>
            <strong style={{ color: 'var(--white)', fontFamily: "'Barlow Condensed',sans-serif", fontSize: '14px', letterSpacing: '1px', textTransform: 'uppercase' }}>EMI AUTOMATION SDN. BHD.</strong><br />
            Registration No. 201901036890 (1346220-A) · Incorporated in Malaysia, 2019<br />
            <span style={{ color: 'var(--white)' }}>Kuala Lumpur</span> · SO-16-01, Menara 1, KL Eco City, Jalan Bangsar, 59200 Kuala Lumpur<br />
            <span style={{ color: 'var(--white)' }}>Nilai</span> · PT7257, Jalan BBN 1/2A, Bandar Baru Nilai, 71800 Nilai, Negeri Sembilan
          </div>
        </div>
        <div className="fade-up" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '16px', transitionDelay: '0.15s' }}>
          {[
            { title: 'SSM Registered · Malaysia', text: 'Private limited company incorporated in Malaysia in 2019 and registered with the Companies Commission of Malaysia (SSM). Available for vendor registration, credit applications and supply agreements.' },
            { title: 'Institutional Supply Ready', text: 'Set up for institutional and corporate procurement — vendor registration, tenders, formal quotations, credit applications and compliance documentation. Company documents available on request.' },
            { title: 'Principal & Partnership Enquiries', text: 'We welcome technology principals seeking a capable Malaysian partner with IT, industrial, healthcare and institutional market reach.' },
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

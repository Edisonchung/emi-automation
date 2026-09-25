const label = { fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.5px', color: 'var(--white)' }

export default function Software() {
  return (
    <section id="software" className="section-pad" style={{ padding: '80px 56px', borderTop: '1px solid var(--border)', background: 'var(--dark)' }}>
      <div className="fade-up" style={{ ...label, fontSize: '12px', letterSpacing: '3px', color: 'var(--red)', marginBottom: '18px' }}>Appointed Materialise reseller · Malaysia</div>
      <h2 className="fade-up" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 'clamp(34px,4vw,54px)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--white)', marginBottom: '18px', transitionDelay: '0.05s' }}>Materialise Software Licences</h2>
      <p className="fade-up" style={{ fontSize: '16px', color: 'var(--text)', lineHeight: 1.7, maxWidth: '680px', marginBottom: '28px', transitionDelay: '0.1s' }}>
        EMI Automation is an appointed reseller of Materialise software in Malaysia. We bring Materialise&apos;s image-based engineering software, including Mimics&reg; and 3-matic&reg;, to hospitals, universities, research institutes and manufacturers.
      </p>
      <a href="#contact" className="fade-up cta-btn" style={{ ...label, display: 'inline-block', fontSize: '13px', padding: '12px 26px', border: '1px solid var(--red)', color: 'var(--white)', textDecoration: 'none', transitionDelay: '0.2s' }}>Request a Materialise quotation →</a>
      <p className="fade-up" style={{ fontSize: '11.5px', color: 'var(--muted)', marginTop: '36px', lineHeight: 1.6, maxWidth: '760px' }}>
        Materialise, Mimics and 3-matic are trademarks of Materialise NV, used to identify the products. Product information, intended use and regulatory status are published by Materialise. Use of the software is governed by Materialise&apos;s End-User License Agreement; our commercial terms are stated on each quotation.
      </p>
    </section>
  )
}

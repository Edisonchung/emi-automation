const products = [
  { name: 'Pipe Lining / Pipe\nRehabilitation Technology' },
  { name: 'Penstock / Channel Gate' },
  { name: 'Grundfos CUE Variable\nSpeed Drive (VFD)' },
  { name: 'HiggsMotion\nLED Film Display', url: 'https://www.higgsmotion.com', accent: true },
]

export default function Products() {
  return (
    <section id="products" className="section-pad" style={{ padding: '80px 56px', borderTop: '1px solid var(--border)' }}>
      <h2 className="fade-up" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 'clamp(34px,4vw,54px)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--white)', marginBottom: '40px' }}>EMI-Products</h2>
      <div className="products-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '2px' }}>
        {products.map((p, i) => {
          const card = (
            <div className="fade-up" style={{
              position: 'relative', overflow: 'hidden', aspectRatio: '0.78',
              background: 'var(--mid)', cursor: 'pointer',
              transitionDelay: `${i * 0.1}s`
            }}>
              <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 90% 70% at 50% 60%, rgba(140,20,10,0.45) 0%, transparent 70%), linear-gradient(180deg, rgba(10,10,10,0.15) 0%, rgba(10,10,10,0.65) 100%)', zIndex: 1 }} />
              {p.accent && (
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(201,169,110,0.18) 0%, transparent 60%)', zIndex: 2 }} />
              )}
              {p.accent && (
                <div style={{
                  position: 'absolute',
                  top: '26px',
                  right: '16px',
                  zIndex: 4,
                  fontFamily: "'Barlow Condensed',sans-serif",
                  fontSize: '10px',
                  fontWeight: 700,
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  color: '#C9A96E',
                  border: '1px solid rgba(201,169,110,0.5)',
                  padding: '2px 6px'
                }}>
                  NEW
                </div>
              )}
              <div style={{ position: 'absolute', top: '26px', left: 0, right: 0, textAlign: 'center', zIndex: 3, fontFamily: "'Barlow Condensed',sans-serif", fontSize: '11px', fontWeight: 600, letterSpacing: '3px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.42)' }}>Explore</div>
              <div style={{ position: 'absolute', bottom: '56px', left: 0, right: 0, textAlign: 'center', zIndex: 3, fontFamily: "'Barlow Condensed',sans-serif", fontSize: '15px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.5px', color: 'var(--white)', padding: '0 14px', whiteSpace: 'pre-line' }}>{p.name}</div>
              <div style={{ position: 'absolute', bottom: '28px', left: 0, right: 0, textAlign: 'center', zIndex: 3, fontFamily: "'Barlow Condensed',sans-serif", fontSize: '11px', fontWeight: 600, letterSpacing: '3px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.42)' }}>{p.url ? 'Open Site' : 'Explore'}</div>
            </div>
          )

          return p.url ? (
            <a
              key={i}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none', display: 'block' }}
            >
              {card}
            </a>
          ) : (
            <div key={i}>
              {card}
            </div>
          )
        })}
      </div>
    </section>
  )
}

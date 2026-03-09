const products = [
  { name: 'Pipe Lining / Pipe\nRehabilitation Technology' },
  { name: 'Penstock / Channel Gate' },
  { name: 'Grundfos CUE Variable\nSpeed Drive (VFD)' },
]

export default function Products() {
  return (
    <section id="products" style={{ padding: '80px 56px', borderTop: '1px solid var(--border)' }}>
      <h2 className="fade-up" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 'clamp(34px,4vw,54px)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--white)', marginBottom: '40px' }}>EMI-Products</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '2px' }}>
        {products.map((p, i) => (
          <div key={i} className="fade-up" style={{
            position: 'relative', overflow: 'hidden', aspectRatio: '0.78',
            background: 'var(--mid)', cursor: 'pointer',
            transitionDelay: `${i * 0.1}s`
          }}>
            <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 90% 70% at 50% 60%, rgba(140,20,10,0.45) 0%, transparent 70%), linear-gradient(180deg, rgba(10,10,10,0.15) 0%, rgba(10,10,10,0.65) 100%)', zIndex: 1 }} />
            <div style={{ position: 'absolute', top: '26px', left: 0, right: 0, textAlign: 'center', zIndex: 3, fontFamily: "'Barlow Condensed',sans-serif", fontSize: '11px', fontWeight: 600, letterSpacing: '3px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.42)' }}>Explore</div>
            <div style={{ position: 'absolute', bottom: '56px', left: 0, right: 0, textAlign: 'center', zIndex: 3, fontFamily: "'Barlow Condensed',sans-serif", fontSize: '15px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.5px', color: 'var(--white)', padding: '0 14px', whiteSpace: 'pre-line' }}>{p.name}</div>
            <div style={{ position: 'absolute', bottom: '28px', left: 0, right: 0, textAlign: 'center', zIndex: 3, fontFamily: "'Barlow Condensed',sans-serif", fontSize: '11px', fontWeight: 600, letterSpacing: '3px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.42)' }}>Explore</div>
          </div>
        ))}
      </div>
    </section>
  )
}

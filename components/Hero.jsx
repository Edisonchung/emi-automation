export default function Hero() {
  return (
    <section id="introduction" style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'flex-end', padding: '0 56px 120px', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: "url('https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=1800&q=80')",
        backgroundSize: 'cover', backgroundPosition: 'center 30%',
        filter: 'grayscale(20%) brightness(0.42)'
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse 80% 60% at 68% 40%, rgba(160,30,15,0.55) 0%, transparent 65%), linear-gradient(180deg, rgba(10,10,10,0.2) 0%, rgba(10,10,10,0.65) 70%, #0A0A0A 100%)'
      }} />
      <div style={{ position: 'relative', zIndex: 2, width: '100%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'end', gap: '60px' }}>
          <h1 className="fade-up" style={{
            fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800,
            fontSize: 'clamp(52px, 6vw, 90px)', lineHeight: 0.92,
            textTransform: 'uppercase', color: 'var(--white)'
          }}>
            Future of<br />Electro-Mechanical<br />Intelligence
          </h1>
          <div className="fade-up" style={{ transitionDelay: '0.15s' }}>
            <p style={{ fontSize: '15px', fontWeight: 600, color: 'var(--white)', marginBottom: '16px', lineHeight: 1.55 }}>
              We are at the forefront of integrating smart, innovative solutions in the world of automation, committed to revolutionizing how businesses operate.
            </p>
            <p style={{ fontSize: '13.5px', lineHeight: 1.78, color: 'rgba(220,220,220,0.72)' }}>
              EMI Automation Sdn. Bhd. is a technology-driven company specializing in IT infrastructure, industrial automation, and smart utility solutions. With a proven track record across semiconductor manufacturing, water utilities, data centers, and academic institutions, we are uniquely positioned as Malaysia&apos;s bridge between industrial automation and advanced software solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

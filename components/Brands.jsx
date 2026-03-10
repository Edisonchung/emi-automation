'use client'

const brands = [
  { name: 'Siemens', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5f/Siemens-logo.svg' },
  { name: 'Schneider', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Schneider_Electric.svg' },
  { name: 'ABB', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/00/ABB_logo.svg' },
  { name: 'Mitsubishi', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Mitsubishi_Electric_logo.svg' },
  { name: 'Allen-Bradley', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/35/Allen-Bradley_Logo.svg' },
  { name: 'Honeywell', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Honeywell_Logo.svg' },
  { name: 'GE', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/General_Electric_logo.svg' },
  { name: 'Yaskawa', logo: null },
  { name: 'Danfoss', logo: null },
  { name: 'SEW Eurodrive', logo: null },
  { name: 'Emerson', logo: null },
  { name: 'Beckhoff', logo: null },
  { name: 'FANUC', logo: null },
  { name: 'Kawasaki', logo: null },
  { name: 'Keyence', logo: null },
  { name: 'SICK', logo: null },
  { name: 'Phoenix Contact', logo: null },
  { name: 'Festo', logo: null },
  { name: 'Eaton', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Eaton_Corporation_logo.svg' },
  { name: 'IBM', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/29/IBM_Logo_1981.svg' },
  { name: 'Dell', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Dell_Logo.svg' },
  { name: 'HP', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/ad/HP_logo_2012.svg' },
  { name: 'Grundfos', logo: null },
  { name: 'Toshiba', logo: null },
  { name: 'SKF', logo: null },
  { name: 'Turck', logo: null },
  { name: 'Pepperl+Fuchs', logo: null },
  { name: 'Heidenhain', logo: null },
  { name: 'SMC', logo: null },
  { name: 'IDEC', logo: null },
  { name: 'APC', logo: null },
  { name: 'Kollmorgen', logo: null },
  { name: 'NSK', logo: null },
  { name: 'Flender', logo: null },
  { name: 'LS IS', logo: null },
  { name: 'Faraday', logo: null },
]

export default function Brands() {
  return (
    <section id="brands" className="section-pad" style={{ padding: '80px 56px', borderTop: '1px solid var(--border)' }}>
      <h2 className="fade-up" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 'clamp(34px,4vw,54px)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--white)', marginBottom: '32px' }}>Brands We Supply</h2>
      <div className="fade-up brands-wrap" style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', transitionDelay: '0.1s' }}>
        {brands.map((b, i) => (
          <div key={i} className="brand-circle" style={{
            width: '110px', height: '110px', borderRadius: '50%',
            background: '#fff', display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center', gap: '5px', padding: '12px',
            flexShrink: 0, cursor: 'default',
            transition: 'transform 0.2s, box-shadow 0.2s'
          }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.08)'; e.currentTarget.style.boxShadow = '0 0 24px rgba(192,57,43,0.4)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '' }}
          >
            {b.logo ? (
              <img src={b.logo} alt={b.name} style={{ width: '54px', height: '34px', objectFit: 'contain' }} onError={e => e.target.style.display = 'none'} />
            ) : null}
            <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: '9px', fontWeight: 700, letterSpacing: '0.5px', textTransform: 'uppercase', color: '#333', textAlign: 'center', lineHeight: 1.1 }}>{b.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

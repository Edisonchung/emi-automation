import Image from 'next/image'

export default function Navbar() {
  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '14px 56px',
      background: 'rgba(10,10,10,0.92)', backdropFilter: 'blur(14px)',
      borderBottom: '1px solid rgba(255,255,255,0.05)'
    }}>
      <a href="#introduction" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
        <Image src="/logo.png" alt="EMI Automation Sdn Bhd" width={120} height={64} style={{ height: '52px', width: 'auto', objectFit: 'contain' }} />
      </a>
      <ul style={{ display: 'flex', alignItems: 'center', gap: '40px', listStyle: 'none' }}>
        {['Introduction','Why EMI','Products','References','Brands'].map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="nav-link"
              style={{ fontSize: '14px', color: 'var(--text)', textDecoration: 'none', letterSpacing: '0.4px', transition: 'color 0.2s' }}
              onMouseEnter={e => e.target.style.color = 'var(--red)'}
              onMouseLeave={e => e.target.style.color = ''}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
      <a href="#contact" style={{
        fontSize: '14px', color: 'var(--text)', textDecoration: 'none',
        padding: '8px 22px', border: '1px solid var(--border)', transition: 'border-color 0.2s, color 0.2s'
      }}
        onMouseEnter={e => { e.target.style.borderColor = 'var(--red)'; e.target.style.color = 'var(--red)' }}
        onMouseLeave={e => { e.target.style.borderColor = 'var(--border)'; e.target.style.color = 'var(--text)' }}
      >
        Contact
      </a>
    </nav>
  )
}

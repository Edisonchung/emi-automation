'use client'
import Image from 'next/image'
import { useState } from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const navItems = ['Introduction', 'Why EMI', 'Products', 'References', 'Brands']

  return (
    <>
      <nav className="navbar" style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '14px 56px',
        background: 'rgba(10,10,10,0.92)', backdropFilter: 'blur(14px)', WebkitBackdropFilter: 'blur(14px)',
        borderBottom: '1px solid rgba(255,255,255,0.05)'
      }}>
        <a href="#introduction" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <Image src="/logo.png" alt="EMI Automation Sdn Bhd" width={120} height={64} style={{ height: '52px', width: 'auto', objectFit: 'contain' }} />
        </a>
        <ul className="nav-links-list" style={{ display: 'flex', alignItems: 'center', gap: '40px', listStyle: 'none' }}>
          {navItems.map((item) => (
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
        <a href="#contact" className="nav-contact-btn" style={{
          fontSize: '14px', color: 'var(--text)', textDecoration: 'none',
          padding: '8px 22px', border: '1px solid var(--border)', transition: 'border-color 0.2s, color 0.2s'
        }}
          onMouseEnter={e => { e.target.style.borderColor = 'var(--red)'; e.target.style.color = 'var(--red)' }}
          onMouseLeave={e => { e.target.style.borderColor = 'var(--border)'; e.target.style.color = 'var(--text)' }}
        >
          Contact
        </a>
        <button
          className={`hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </nav>
      <div className={`mobile-overlay${menuOpen ? ' open' : ''}`}>
        {[...navItems, 'Contact'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase().replace(' ', '-')}`}
            onClick={() => setMenuOpen(false)}
          >
            {item}
          </a>
        ))}
      </div>
    </>
  )
}

const refs = [
  { client: 'ST Microelectronic', meta: '2023 · Muar · Semiconductor', desc: 'Supply of Booster Pump VFD Panel and PLC Panel complete with full instrumentation and network cabling for production facility automation.' },
  { client: 'PBA Bukit Gedung', meta: '2023 · Penang · Water Utilities', desc: 'PLC Panel Expansion at PBAPP Bukit Gedung Pumping Station. Full upgrading works completed within a critical 8-hour scheduled downtime window.' },
  { client: 'IBM Bridge Data Center', meta: '2023 · Johor Bahru · IT Infrastructure', desc: 'IBM server motherboard replacement including hardware installation, BIOS/firmware updates, compatibility validation, and full system configuration for mission-critical infrastructure.' },
  { client: 'Telemetry Systems', meta: '2023 · Seremban · Multi-Site Utilities', desc: 'End-to-end Telemetry System deployment across Kiara Indah and Nilam Sari sites — PLC Panels, Flowmeters, Level Sensors, Pressure Transmitters and data loggers.' },
  { client: "HP / Dell Server Fleet", meta: 'Penang & KL · IT Infrastructure', desc: 'HP DL380 server maintenance and Dell PowerEdge hard drive replacement — RAID configuration, firmware updates, and network connectivity verification across enterprise environments.' },
  { client: "Lotus's Stores (Malaysia)", meta: '2025 · Kuala Lumpur · Retail Enterprise', desc: "Supply, onsite delivery, installation, testing and commissioning of 8 units Epson EB-2255U WUXGA 3LCD projectors at Lotus's Head Office Technology Department — inclusive of lens alignment, cabling, and after-hours works." },
]

export default function References() {
  return (
    <section id="references" style={{ padding: '80px 56px', borderTop: '1px solid var(--border)' }}>
      <h2 className="fade-up" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 'clamp(34px,4vw,54px)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--white)', marginBottom: '12px' }}>Project References</h2>
      <p className="fade-up" style={{ fontSize: '15px', color: 'var(--muted)', marginBottom: '52px', lineHeight: 1.65, maxWidth: '680px', transitionDelay: '0.05s' }}>
        A verified track record spanning semiconductor manufacturing, water utilities, data centers, and enterprise retail across Malaysia.
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '2px' }}>
        {refs.map((r, i) => (
          <div key={i} className="fade-up" style={{
            background: 'var(--mid)', padding: '36px 30px',
            borderLeft: '3px solid var(--red)',
            transitionDelay: `${(i % 3) * 0.08}s`
          }}>
            <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: '18px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--white)', marginBottom: '5px' }}>{r.client}</div>
            <div style={{ fontSize: '11px', color: 'var(--red)', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '14px', fontWeight: 600 }}>{r.meta}</div>
            <div style={{ fontSize: '13.5px', color: 'rgba(200,200,200,0.64)', lineHeight: 1.66 }}>{r.desc}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

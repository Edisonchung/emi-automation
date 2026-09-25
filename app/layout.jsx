import './globals.css'

export const metadata = {
  title: 'EMI Automation Sdn. Bhd.',
  description: 'EMI Automation Sdn. Bhd. (Registration No. 201901036890 (1346220-A)): industrial automation, IT infrastructure and Materialise software licences (appointed reseller), Kuala Lumpur, Malaysia.',
  keywords: 'automation, PLC, VFD, industrial, Malaysia, IT infrastructure',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <noscript><style>{`.fade-up{opacity:1!important;transform:none!important}`}</style></noscript>
      </head>
      <body>{children}</body>
    </html>
  )
}

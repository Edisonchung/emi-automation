import './globals.css'

export const metadata = {
  title: 'EMI Automation Sdn Bhd',
  description: 'Future of Electro-Mechanical Intelligence. IT infrastructure, industrial automation, and smart utility solutions across Malaysia.',
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
      <body>{children}</body>
    </html>
  )
}

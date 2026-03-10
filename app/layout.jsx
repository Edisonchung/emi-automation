import './globals.css'

export const metadata = {
  title: 'EMI Automation Sdn Bhd',
  description: 'Future of Electro-Mechanical Intelligence. IT infrastructure, industrial automation, and smart utility solutions across Malaysia.',
  keywords: 'automation, PLC, VFD, industrial, Malaysia, IT infrastructure',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  )
}

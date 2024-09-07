import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SAMPANA MEDICLINIC AND LABORATORY',
  description: 'Committed to Caring since 2000.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
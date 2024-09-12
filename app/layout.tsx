import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SAMPANA MEDICLINIC AND LABORATORY',
  description: 'Committed to Caring since 2000. High-quality medical care with advanced diagnostic facilities in Malolos, Bulacan.',
  keywords: 'Sampana Mediclinic, Laboratory, Medical Care, Diagnostic Facilities, Malolos, Bulacan',
  authors: [{ name: 'Sampana Mediclinic' }],
  openGraph: {
    title: 'SAMPANA MEDICLINIC AND LABORATORY',
    description: 'High-quality medical care with advanced diagnostic facilities in Malolos, Bulacan.',
    url: 'https://sampanalab.com',
    siteName: 'Sampana Mediclinic and Laboratory',
    images: [
      {
        url: 'https://sampanalab.com/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body>{children}</body>
    </html>
  )
}
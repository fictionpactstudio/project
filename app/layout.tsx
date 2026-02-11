import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display, EB_Garamond } from 'next/font/google'

import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})

const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  variable: '--font-eb-garamond',
})

export const metadata: Metadata = {
  title: 'Fiction Pact Studio | Authenticity, Innovation, Passion',
  description:
    'An international game studio of industry veterans crafting immersive, grounded worlds with cutting-edge technology.',
}

export const viewport: Viewport = {
  themeColor: '#050505',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${ebGaramond.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}

import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Pizzeria Da Marco | La vera pizza napoletana a Rovigo',
  description: 'Dal 1987, Pizzeria Da Marco offre la vera pizza napoletana a Rovigo. Ingredienti freschi, forno a legna e tradizione familiare da tre generazioni.',
  keywords: 'pizzeria, Rovigo, pizza napoletana, ristorante italiano, forno a legna',
  openGraph: {
    title: 'Pizzeria Da Marco | La vera pizza napoletana a Rovigo',
    description: 'Dal 1987, ingredienti freschi e forno a legna',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="it" className="bg-[#1a1a1a]">
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

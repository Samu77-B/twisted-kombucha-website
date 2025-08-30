import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { CartProvider } from '@/contexts/CartContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://samu77-b.github.io'),
  title: 'Twisted Kombucha - London\'s Premium Artisan Kombucha',
  description: 'Make your gut happy with great tasting kombucha – tea with a twist! Handcrafted, vegan, low sugar kombucha made with 100% natural ingredients.',
  keywords: 'kombucha, artisan kombucha, London kombucha, probiotic drink, gut health, fermented tea, vegan drink',
  openGraph: {
    title: 'Twisted Kombucha - London\'s Premium Artisan Kombucha',
    description: 'Make your gut happy with great tasting kombucha – tea with a twist!',
    url: 'https://samu77-b.github.io/twisted-kombucha-website',
    siteName: 'Twisted Kombucha',
    images: [
      {
        url: '/images/01 logo.png',
        width: 1200,
        height: 630,
        alt: 'Twisted Kombucha',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Twisted Kombucha - London\'s Premium Artisan Kombucha',
    description: 'Make your gut happy with great tasting kombucha – tea with a twist!',
    images: ['/images/01 logo.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  )
}

import type { Metadata } from 'next'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { WhatsAppButton } from '@/components/ui/WhatsAppButton'

export const metadata: Metadata = {
  metadataBase: new URL('https://idmc-group.com'),
  title: {
    default: 'IDMC — International Development Management Construction',
    template: '%s | IDMC',
  },
  description: 'IDMC est votre partenaire de confiance pour des projets durables en immobilier, électrification, événementiel et formation professionnelle.',
  keywords: ['IDMC', 'immobilier', 'électrification', 'événementiel', 'formation professionnelle', 'management', 'construction', "Côte d'Ivoire"],
  authors: [{ name: 'IDMC' }],
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://idmc-group.com',
    siteName: 'IDMC',
    title: 'IDMC — International Development Management Construction',
    description: 'Votre partenaire de confiance pour des projets durables.',
    images: [{ url: '/og-image.svg', width: 1200, height: 630, alt: 'IDMC' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IDMC — International Development Management Construction',
    description: 'Votre partenaire de confiance pour des projets durables.',
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}

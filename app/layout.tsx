import type { Metadata } from 'next'
import { Oswald, DM_Sans } from 'next/font/google'
import './globals.css'

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['200', '300', '400', '600', '700'],
  variable: '--font-oswald',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const BASE_URL = 'https://delsur-digital.com'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: 'DELSUR · Diseño Web y Google Ads · Valencia',
  description: 'Diseño, desarrollo y Google Ads para negocios que quieren resultados reales. Sin agencia. Sin plantillas. Ahora en Valencia.',
  keywords: 'diseño web Valencia, Google Ads Valencia, CRO, Next.js, WordPress, freelance web Valencia',
  authors: [{ name: 'Brenda · DELSUR' }],
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: 'DELSUR · Diseño Web y Google Ads · Valencia',
    description: 'Diseño, desarrollo y Google Ads para negocios que quieren resultados reales. Sin agencia. Sin plantillas. Ahora en Valencia.',
    type: 'website',
    locale: 'es_ES',
    url: BASE_URL,
    siteName: 'DELSUR',
    images: [
      {
        url: '/images/delsur1.png',
        width: 1200,
        height: 630,
        alt: 'DELSUR · Diseño Web y Google Ads · Valencia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DELSUR · Diseño Web y Google Ads · Valencia',
    description: 'Diseño, desarrollo y Google Ads para negocios que quieren resultados reales. Sin agencia. Sin plantillas. Ahora en Valencia.',
    images: ['/images/delsur1.png'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var s = localStorage.getItem('theme');
                if (s !== 'light') {
                  document.documentElement.classList.add('dark');
                }
              } catch(e) {}
            `,
          }}
        />
      </head>
      <body className={`${oswald.variable} ${dmSans.variable}`}>
        {children}
      </body>
    </html>
  )
}

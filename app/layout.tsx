import type { Metadata } from 'next'
import { Oswald, DM_Sans } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const GA_ID = process.env.NEXT_PUBLIC_GA4_ID

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
  title: 'DELSUR · Google Ads · GA4 · CRO · Valencia',
  description: 'Gestión de Google Ads, medición con GA4 y CRO para negocios de Valencia. Más clientes desde Google y datos para saber cuánto te cuesta cada uno.',
  keywords: 'Google Ads Valencia, GA4 Valencia, CRO Valencia, tracking Google Ads, gestión campañas Valencia',
  authors: [{ name: 'DELSUR' }],
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: 'DELSUR · Google Ads · GA4 · CRO · Valencia',
    description: 'Gestión de Google Ads, medición con GA4 y CRO para negocios de Valencia. Más clientes desde Google y datos para saber cuánto te cuesta cada uno.',
    type: 'website',
    locale: 'es_ES',
    url: BASE_URL,
    siteName: 'DELSUR',
    images: [
      {
        url: '/images/delsur1.png',
        width: 1200,
        height: 630,
        alt: 'DELSUR · Google Ads · GA4 · CRO · Valencia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DELSUR · Google Ads · GA4 · CRO · Valencia',
    description: 'Gestión de Google Ads, medición con GA4 y CRO para negocios de Valencia. Más clientes desde Google y datos para saber cuánto te cuesta cada uno.',
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
      {GA_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`}
          </Script>
        </>
      )}
      <body className={`${oswald.variable} ${dmSans.variable}`}>
        {children}
      </body>
    </html>
  )
}

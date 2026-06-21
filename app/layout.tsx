import type { Metadata } from 'next'
import { Oswald, DM_Sans } from 'next/font/google'
import Script from 'next/script'
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

const BASE_URL = 'https://www.delsur-digital.com'

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
        url: '/images/delsur1.webp',
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
    images: ['/images/delsur1.webp'],
  },
}

// JSON-LD: contenido 100% estático (sin Date/Math.random) para no generar mismatch de hydration entre server y client.
const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'DELSUR',
  url: BASE_URL,
  areaServed: {
    '@type': 'City',
    name: 'Valencia, España',
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Calle Jesús',
    postalCode: '46017',
    addressLocality: 'Valencia',
    addressCountry: 'ES',
  },
  telephone: '+34607681731',
  makesOffer: [
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Gestión de Google Ads' } },
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Medición y configuración de GA4' } },
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'CRO (optimización de conversión)' } },
  ],
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Cuánto presupuesto necesito en Google Ads para empezar?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Depende del sector y de la competencia en Valencia. Por debajo de cierto gasto diario, la campaña no junta datos suficientes para mejorar. En el diagnóstico te calculo el mínimo realista para tu caso antes de que pongas un euro.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cómo sé si la publicidad me está funcionando?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Con la medición bien configurada, cada cliente que te contacta queda vinculado a la campaña que lo trajo. Sabés qué parte del presupuesto genera clientes reales y qué parte se desperdicia.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué revisás en una cuenta de Google Ads?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cómo están armadas las campañas, las búsquedas reales que activan tus anuncios, las que conviene bloquear, la calidad de los anuncios, la segmentación y si lo que se mide coincide con lo que le importa a tu negocio.',
      },
    },
    {
      '@type': 'Question',
      name: '¿En cuánto tiempo veo resultados?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Las primeras semanas la campaña junta datos y el coste por contacto es alto y variable. La mejora real empieza cuando hay volumen suficiente: normalmente entre 4 y 8 semanas, según presupuesto y sector.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Trabajás solo con negocios de Valencia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El foco es Valencia y alrededores, donde conozco el mercado y la competencia. Trabajo cuentas de fuera si el caso lo justifica.',
      },
    },
  ],
}

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'DELSUR',
  url: BASE_URL,
  // TODO: no hay archivo de logo en public/images todavía (solo fotos de ballena) — subir uno y actualizar esta ruta.
  logo: `${BASE_URL}/images/COMPLETAR_LOGO.png`,
}

function jsonLdScript(data: object) {
  return JSON.stringify(data).replace(/</g, '\\u003c')
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtm-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-KB6Z3M56');`,
          }}
        />
        {/* Theme init */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var s=localStorage.getItem('theme');if(s!=='light'){document.documentElement.classList.add('dark');}}catch(e){}`,
          }}
        />
        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLdScript(localBusinessJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLdScript(faqJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLdScript(organizationJsonLd) }}
        />
      </head>
      <body className={`${oswald.variable} ${dmSans.variable}`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KB6Z3M56"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {children}
      </body>
    </html>
  )
}

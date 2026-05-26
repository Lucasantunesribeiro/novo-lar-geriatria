import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { WebSiteSchema, OrganizationSchema } from '@/components/seo/JsonLd'
import CookieBanner from '@/components/ui/CookieBanner'
import { Suspense } from 'react'
import Script from 'next/script'
import { SITE_URL } from '@/lib/seo/metadata'
import GoogleAnalytics from '@/components/analytics/GoogleAnalytics'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Novo Lar Geriatria - Hospedagem Assistida de Qualidade',
  description: 'Rede de clínicas geriátricas em Porto Alegre com cuidado especializado, equipe multidisciplinar e ambientes acolhedores.',
  keywords: 'hospedagem assistida, geriatria, idosos, cuidado idosos, clínica geriátrica, Porto Alegre',
  authors: [{ name: 'Novo Lar Geriatria' }],
  creator: 'Novo Lar Geriatria',
  publisher: 'Novo Lar Geriatria',
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  metadataBase: new URL(SITE_URL),
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: SITE_URL,
    siteName: 'Novo Lar Geriatria',
    title: 'Novo Lar Geriatria - Hospedagem Assistida de Qualidade',
    description: 'Rede de clínicas geriátricas em Porto Alegre com cuidado especializado, equipe multidisciplinar e ambientes acolhedores.',
    images: [
      {
        url: '/Novo-Lar-Logo-7.png',
        width: 1200,
        height: 630,
        alt: 'Novo Lar Geriatria',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Novo Lar Geriatria - Hospedagem Assistida de Qualidade',
    description: 'Rede de clínicas geriátricas em Porto Alegre com cuidado especializado, equipe multidisciplinar e ambientes acolhedores.',
    images: ['/Novo-Lar-Logo-7.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon-geriatria-novo-lar.png',
    shortcut: '/favicon-geriatria-novo-lar.png',
    apple: '/favicon-geriatria-novo-lar.png',
    other: [
      {
        rel: 'shortcut icon',
        url: '/favicon-geriatria-novo-lar.png',
        type: 'image/vnd.microsoft.icon',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID || 'GTM-PKQPWT23'}');
            `,
          }}
        />
        <WebSiteSchema />
        <OrganizationSchema
          logo={`${SITE_URL}/Novo-Lar-Logo-7.png`}
          contactPhone="+555133467620"
          contactEmail={process.env.CONTACT_EMAIL || 'contato@geriatrianovolar.com.br'}
          sameAs={[
            'https://www.facebook.com/novolarhospedagemassistida/',
            'https://www.instagram.com/novolarhospedagemassistida/',
          ]}
        />
      </head>
      <body className="antialiased">
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID || 'GTM-PKQPWT23'}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <Suspense fallback={null}>
          <GoogleAnalytics />
        </Suspense>
        {children}
        <CookieBanner />
      </body>
    </html>
  )
}

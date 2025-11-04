import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { WebSiteSchema, OrganizationSchema } from '@/components/seo/JsonLd'
import GoogleAnalytics from '@/components/analytics/GoogleAnalytics'
import GoogleTagManager from '@/components/analytics/GoogleTagManager'
import CookieBanner from '@/components/ui/CookieBanner'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
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
  metadataBase: new URL('https://novolargeriatria.com.br'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://novolargeriatria.com.br',
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
        <WebSiteSchema searchUrl="https://novolargeriatria.com.br/search" />
        <OrganizationSchema
          logo="https://novolargeriatria.com.br/Novo-Lar-Logo-7.png"
          contactPhone="+555133467620"
          contactEmail="contato@novolargeriatria.com.br"
          sameAs={[
            'https://www.facebook.com/novolarhospedagemassistida/',
            'https://www.instagram.com/novolarhospedagemassistida/',
          ]}
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
        />
      </head>
      <body className="antialiased">
        <GoogleTagManager />
        <GoogleAnalytics />
        {children}
        <CookieBanner />
      </body>
    </html>
  )
}

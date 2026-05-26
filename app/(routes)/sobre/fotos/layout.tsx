import type { Metadata } from 'next'
import { buildCmsBackedMetadata } from '@/lib/cms/route'

const fallbackMetadata: Metadata = {
  title: 'Galeria de Fotos - Conheça Nossas Unidades | Novo Lar Geriatria',
  description: 'Veja fotos das unidades Novo Lar Geriatria em Porto Alegre. Conheça nossa estrutura moderna, ambientes acolhedores e espaços preparados para o bem-estar dos residentes.',
  keywords: ['fotos residencial geriátrico', 'galeria novo lar', 'estrutura clínica geriátrica', 'instalações porto alegre', 'fotos casa de repouso'],
  openGraph: {
    title: 'Galeria de Fotos - Conheça Nossas Unidades | Novo Lar Geriatria',
    description: 'Veja fotos das unidades Novo Lar Geriatria. Conheça nossa estrutura moderna e ambientes acolhedores em Porto Alegre.',
    url: '/sobre/fotos',
    type: 'website',
    images: [
      {
        url: '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/1.jpeg',
        width: 1200,
        height: 630,
        alt: 'Galeria de fotos Novo Lar Geriatria',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Galeria de Fotos | Novo Lar Geriatria',
    description: 'Conheça nossa estrutura moderna e ambientes acolhedores em Porto Alegre.',
    images: ['/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/1.jpeg'],
  },
  alternates: {
    canonical: '/sobre/fotos',
  },
}

export async function generateMetadata() {
  return buildCmsBackedMetadata('/sobre/fotos', fallbackMetadata)
}

export default function FotosLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

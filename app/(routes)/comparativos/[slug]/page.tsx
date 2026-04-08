import { getPageByPath } from '@/lib/sanity/queries'
import { SeoLandingPage } from '@/components/seo-landing/SeoLandingPage'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://novolargeriatria.com.br'

export const COMPARATIVOS_SLUGS = [
  'ilpi-ou-home-care',
  'ilpi-ou-cuidador-24h',
  'ilpi-ou-residencia-assistida',
  'ilpi-ou-hospedagem-temporaria',
  'casa-de-repouso-ou-residencial-geriatrico',
  'alzheimer-em-casa-ou-ilpi',
  'demencia-em-casa-ou-ilpi',
  'parkinson-em-casa-ou-ilpi',
]

const FALLBACK_META: Record<string, { title: string; description: string }> = {
  'ilpi-ou-home-care': {
    title: 'ILPI ou Home Care: Qual a Melhor Opção para o Idoso? | Novo Lar',
    description: 'Comparativo completo entre ILPI e home care. Custos, segurança, qualidade de vida e quando cada modelo é mais adequado para o idoso e a família.',
  },
  'ilpi-ou-cuidador-24h': {
    title: 'ILPI ou Cuidador 24h: O Que Considerar? | Novo Lar Geriatria',
    description: 'Entenda as diferenças entre internar em uma ILPI e contratar um cuidador domiciliar 24h. Veja prós, contras e qual opção oferece mais segurança.',
  },
  'ilpi-ou-residencia-assistida': {
    title: 'ILPI ou Residência Assistida: Qual é a Diferença? | Novo Lar',
    description: 'Descubra as diferenças entre ILPI e residência assistida em Porto Alegre e qual modelo atende melhor o nível de dependência do seu familiar.',
  },
  'ilpi-ou-hospedagem-temporaria': {
    title: 'ILPI ou Hospedagem Temporária: Quando Cada Uma Faz Sentido? | Novo Lar',
    description: 'Saiba quando escolher hospedagem temporária e quando uma ILPI é a melhor solução para o idoso. Critérios práticos para tomar a decisão certa.',
  },
  'casa-de-repouso-ou-residencial-geriatrico': {
    title: 'Casa de Repouso ou Residencial Geriátrico: Qual a Diferença? | Novo Lar',
    description: 'Entenda a diferença entre casa de repouso e residencial geriátrico, o que cada termo significa na prática e como escolher o modelo certo para o seu familiar.',
  },
  'alzheimer-em-casa-ou-ilpi': {
    title: 'Alzheimer: Cuidar em Casa ou em uma ILPI? | Novo Lar Geriatria',
    description: 'Quando cuidar de um familiar com Alzheimer em casa deixa de ser seguro? Entenda os sinais e quando uma ILPI especializada é a escolha mais responsável.',
  },
  'demencia-em-casa-ou-ilpi': {
    title: 'Demência: Cuidar em Casa ou em uma ILPI? | Novo Lar Geriatria',
    description: 'Comparativo honesto entre cuidar de um familiar com demência em casa ou em uma ILPI. Segurança, estrutura, custo e qualidade de vida do idoso.',
  },
  'parkinson-em-casa-ou-ilpi': {
    title: 'Parkinson: Cuidar em Casa ou em uma ILPI? | Novo Lar Geriatria',
    description: 'Quando o Parkinson avança, cuidar em casa pode não ser suficiente. Entenda quando uma ILPI especializada oferece mais segurança e qualidade de vida.',
  },
}

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return COMPARATIVOS_SLUGS.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const path = `/comparativos/${slug}`
  const page = await getPageByPath(path)
  const seo = page?.seo
  const fallback = FALLBACK_META[slug] ?? { title: 'Comparativos | Novo Lar Geriatria', description: '' }
  return {
    title: seo?.title || fallback.title,
    description: seo?.description || fallback.description,
    openGraph: {
      title: seo?.title || fallback.title,
      description: seo?.description || fallback.description,
      url: `${BASE_URL}${path}`,
      type: 'website',
      ...(seo?.ogImage?.url && { images: [{ url: seo.ogImage.url }] }),
    },
    alternates: { canonical: `${BASE_URL}${path}` },
  }
}

export default async function ComparativoPage({ params }: PageProps) {
  const { slug } = await params
  if (!COMPARATIVOS_SLUGS.includes(slug)) notFound()
  const path = `/comparativos/${slug}`
  const sanityPage = await getPageByPath(path)
  if (!sanityPage) notFound()
  return <SeoLandingPage data={sanityPage} />
}

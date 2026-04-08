import { getPageByPath } from '@/lib/sanity/queries'
import { SeoLandingPage } from '@/components/seo-landing/SeoLandingPage'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://novolargeriatria.com.br'

export const PERGUNTAS_SLUGS = [
  'casa-de-repouso-quanto-custa',
  'visitas-em-ilpi-como-funciona',
  'idoso-com-alzheimer-quando-internar',
  'ilpi-ou-cuidador-particular',
  'o-que-levar-na-admissao-do-idoso',
  'como-funciona-a-adaptacao-na-ilpi',
]

const FALLBACK_META: Record<string, { title: string; description: string }> = {
  'casa-de-repouso-quanto-custa': {
    title: 'Casa de Repouso: Quanto Custa em Porto Alegre? | Novo Lar Geriatria',
    description: 'Entenda os valores de uma casa de repouso em Porto Alegre, o que está incluso, como calcular e por que o custo-benefício de uma ILPI supera o cuidado domiciliar.',
  },
  'visitas-em-ilpi-como-funciona': {
    title: 'Visitas em ILPI: Como Funciona? | Novo Lar Geriatria',
    description: 'Saiba como funcionam as visitas em uma ILPI em Porto Alegre. Horários, frequência, regras e como a família mantém vínculo próximo com o residente.',
  },
  'idoso-com-alzheimer-quando-internar': {
    title: 'Idoso com Alzheimer: Quando Considerar uma ILPI? | Novo Lar Geriatria',
    description: 'Sinais de que chegou a hora de buscar uma ILPI para um familiar com Alzheimer. Orientações para famílias enfrentando esta decisão difícil.',
  },
  'ilpi-ou-cuidador-particular': {
    title: 'ILPI ou Cuidador Particular: Qual Escolher? | Novo Lar Geriatria',
    description: 'Comparativo honesto entre ILPI e cuidador domiciliar. Custo, segurança, qualidade de vida e quando cada opção faz mais sentido para o idoso.',
  },
  'o-que-levar-na-admissao-do-idoso': {
    title: 'O Que Levar na Admissão do Idoso na ILPI | Novo Lar Geriatria',
    description: 'Lista completa do que levar na admissão do idoso em uma casa de repouso em Porto Alegre. Documentos, roupas, medicamentos e objetos pessoais.',
  },
  'como-funciona-a-adaptacao-na-ilpi': {
    title: 'Como Funciona a Adaptação do Idoso na ILPI? | Novo Lar Geriatria',
    description: 'Entenda o processo de adaptação do idoso ao ingressar em uma ILPI. Fases, dificuldades comuns e como a família pode ajudar na transição.',
  },
}

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return PERGUNTAS_SLUGS.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const path = `/perguntas/${slug}`
  const page = await getPageByPath(path)
  const seo = page?.seo
  const fallback = FALLBACK_META[slug] ?? { title: 'Perguntas Frequentes | Novo Lar Geriatria', description: '' }
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

export default async function PerguntaPage({ params }: PageProps) {
  const { slug } = await params
  if (!PERGUNTAS_SLUGS.includes(slug)) notFound()
  const path = `/perguntas/${slug}`
  const sanityPage = await getPageByPath(path)
  if (!sanityPage) notFound()
  return <SeoLandingPage data={sanityPage} />
}

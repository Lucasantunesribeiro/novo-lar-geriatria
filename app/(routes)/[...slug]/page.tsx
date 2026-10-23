import type {Metadata} from 'next'
import {notFound} from 'next/navigation'

import {SeoLandingPage} from '@/components/seo-landing/SeoLandingPage'
import {buildPageMetadata, fetchCatchAllPage} from '@/lib/cms/page'
import {getAllPagePaths} from '@/lib/sanity/queries'
import {temArquivoProprio} from '@/lib/cms/rotas-do-sistema'

/**
 * Rota curinga do CMS.
 *
 * Qualquer endereco que NAO tenha um arquivo proprio em app/(routes)/ cai aqui.
 * Buscamos um documento `page` no Sanity com o mesmo `path` e montamos a pagina
 * com as secoes cadastradas. Se nao existir documento, 404.
 *
 * Rotas com arquivo proprio continuam tendo prioridade no Next.js — este arquivo
 * nao interfere em nenhuma pagina existente.
 */

type RouteParams = {slug?: string[]}

type CatchAllProps = {
  params: Promise<RouteParams>
}

// Prefixos que nunca devem ser tratados como pagina de conteudo.
const RESERVED_SEGMENTS = new Set(['api', 'studio', '_next', '_vercel'])

function toCmsPath(slug: string[] | undefined): string | null {
  if (!slug || slug.length === 0) {
    return null
  }

  if (RESERVED_SEGMENTS.has(slug[0])) {
    return null
  }

  // Ignora requisicoes de arquivo (favicon.ico, algo.xml, imagem.png...)
  if (slug[slug.length - 1].includes('.')) {
    return null
  }

  return `/${slug.join('/')}`
}

// Gera as landings existentes no build. Novos caminhos continuam podendo
// ser publicados no Studio e gerados no primeiro acesso, com cache.
export const dynamicParams = true
export const revalidate = 3600

export async function generateStaticParams() {
  const pages = await getAllPagePaths()
  const ownedPrefixes = new Set(['blog', 'servicos', 'unidades', 'comparativos', 'perguntas'])
  const paths = new Set(pages.map((page) => page.path).filter((path) => typeof path === 'string'))

  return Array.from(paths).flatMap((path) => {
    const slug = path.split('/').filter(Boolean)
    const normalized = toCmsPath(slug)
    if (!normalized || temArquivoProprio(normalized) || ownedPrefixes.has(slug[0])) return []
    return [{slug}]
  })
}

export async function generateMetadata({params}: CatchAllProps): Promise<Metadata> {
  const {slug} = await params
  const path = toCmsPath(slug)

  if (!path) {
    return {}
  }

  const page = await fetchCatchAllPage(path)

  return buildPageMetadata(page) ?? {}
}

export default async function CmsCatchAllPage({params}: CatchAllProps) {
  const {slug} = await params
  const path = toCmsPath(slug)

  if (!path) {
    notFound()
  }

  const page = await fetchCatchAllPage(path)

  if (!page) {
    notFound()
  }

  return <SeoLandingPage data={page} />
}

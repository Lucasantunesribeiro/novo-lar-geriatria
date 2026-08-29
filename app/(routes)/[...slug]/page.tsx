import type {Metadata} from 'next'
import {notFound} from 'next/navigation'

import {SeoLandingPage} from '@/components/seo-landing/SeoLandingPage'
import {buildPageMetadata, fetchCatchAllPage} from '@/lib/cms/page'

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

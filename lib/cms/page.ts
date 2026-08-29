import {cache} from 'react'
import type {Metadata} from 'next'

import {getPageByPath} from '@/lib/sanity/queries'
import type {PageDocument} from '@/types/cms'
import {withCanonicalPath} from '@/lib/seo/metadata'
import {temArquivoProprio} from './rotas-do-sistema'

export const fetchCmsPage = cache(async (path: string) => {
  const page = (await getPageByPath(path)) as PageDocument | null
  return page
})

/** `page-...` = pagina do sistema: tem arquivo proprio e layout dedicado. */
export function ehPaginaDoSistema(page: PageDocument | null | undefined): boolean {
  const id = page?._id?.replace(/^drafts\./, '')
  return Boolean(id && id.startsWith('page-'))
}

/**
 * Busca usada SOMENTE pela rota curinga `app/(routes)/[...slug]`.
 *
 * Duas travas, para nunca mais existir "pagina fantasma":
 * 1. endereco que ja tem arquivo proprio nao e servido pelo curinga;
 * 2. documento `page-...` (pagina do sistema) nunca e renderizado como landing
 *    generica — o layout real dele vive em app/(routes)/.../page.tsx.
 */
export const fetchCatchAllPage = cache(async (path: string) => {
  if (temArquivoProprio(path)) {
    return null
  }

  const page = (await getPageByPath(path)) as PageDocument | null

  if (ehPaginaDoSistema(page)) {
    return null
  }

  return page
})

export function buildPageMetadata(page: PageDocument | null, fallback?: Metadata): Metadata | undefined {
  if (!page) {
    return fallback
  }

  const metadata: Metadata = {
    ...fallback,
    keywords: page.seo?.keywords || fallback?.keywords,
    robots:
      page.indexable === false
        ? {
            index: false,
            follow: false,
          }
        : fallback?.robots,
    openGraph: {
      ...fallback?.openGraph,
      ...(page.seo?.title ? {title: page.seo.title} : page.title ? {title: page.title} : {}),
      ...(page.seo?.description ? {description: page.seo.description} : {}),
      images: page.seo?.ogImage?.url
        ? [
            {
              url: page.seo.ogImage.url,
            },
          ]
        : fallback?.openGraph?.images,
    },
    twitter: {
      ...fallback?.twitter,
      ...(page.seo?.title ? {title: page.seo.title} : page.title ? {title: page.title} : {}),
      ...(page.seo?.description ? {description: page.seo.description} : {}),
      images: page.seo?.ogImage?.url
        ? [page.seo.ogImage.url]
        : fallback?.twitter?.images,
    },
  }

  if (page.seo?.title || page.title) {
    metadata.title = page.seo?.title || page.title
  }

  if (page.seo?.description) {
    metadata.description = page.seo.description
  }

  return withCanonicalPath(metadata, page.path)
}

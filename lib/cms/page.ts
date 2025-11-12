import {cache} from 'react'
import type {Metadata} from 'next'

import {getPageByPath} from '@/lib/sanity/queries'
import type {PageDocument} from '@/types/cms'

export const fetchCmsPage = cache(async (path: string) => {
  const page = (await getPageByPath(path)) as PageDocument | null
  return page
})

export function buildPageMetadata(page: PageDocument | null, fallback?: Metadata): Metadata | undefined {
  if (!page?.seo) {
    return fallback
  }

  return {
    title: page.seo.title || fallback?.title,
    description: page.seo.description || fallback?.description,
    keywords: page.seo.keywords,
    openGraph: {
      ...fallback?.openGraph,
      title: page.seo.title || fallback?.openGraph?.title,
      description: page.seo.description || fallback?.openGraph?.description,
      images: page.seo.ogImage?.url
        ? [
            {
              url: page.seo.ogImage.url,
            },
          ]
        : fallback?.openGraph?.images,
    },
  }
}

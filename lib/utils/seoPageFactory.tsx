import {Metadata} from 'next'
import {notFound} from 'next/navigation'

import {SeoLandingPage} from '@/components/seo-landing/SeoLandingPage'
import {buildPageMetadata, fetchCmsPage} from '@/lib/cms/page'

/**
 * Factory for Sanity-only SEO pages.
 * Each page.tsx exports { generateMetadata } and `default PageComponent`.
 * Pages require a Sanity document at `pagePath`; if absent, renders 404.
 */
export function makeSeoPage(pagePath: string, fallback: {title: string; description: string}) {
  const generateMetadata = async (): Promise<Metadata> => {
    const page = await fetchCmsPage(pagePath)

    return (
      buildPageMetadata(page, {
        title: fallback.title,
        description: fallback.description,
        openGraph: {
          title: fallback.title,
          description: fallback.description,
          type: 'website',
        },
      }) || {
        title: fallback.title,
        description: fallback.description,
      }
    )
  }

  const PageComponent = async () => {
    const sanityPage = await fetchCmsPage(pagePath)

    if (!sanityPage) {
      notFound()
    }

    return <SeoLandingPage data={sanityPage} />
  }

  return {generateMetadata, PageComponent}
}

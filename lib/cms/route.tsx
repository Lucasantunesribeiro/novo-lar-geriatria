import type { ReactElement } from 'react'
import type { Metadata } from 'next'

import { SeoLandingPage } from '@/components/seo-landing/SeoLandingPage'

import { buildPageMetadata, fetchCmsPage } from './page'

export async function buildCmsBackedMetadata(path: string, fallback: Metadata) {
  const cmsPage = await fetchCmsPage(path)
  return buildPageMetadata(cmsPage, fallback)
}

export async function renderCmsBackedPage(path: string, fallback: ReactElement) {
  const cmsPage = await fetchCmsPage(path)

  if (cmsPage) {
    return <SeoLandingPage data={cmsPage} />
  }

  return fallback
}

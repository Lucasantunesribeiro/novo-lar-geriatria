import type { ReactElement } from 'react'
import type { Metadata } from 'next'

import { buildPageMetadata, fetchCmsPage } from './page'

export async function buildCmsBackedMetadata(path: string, fallback: Metadata) {
  const cmsPage = await fetchCmsPage(path)
  return buildPageMetadata(cmsPage, fallback)
}

/**
 * Paginas do sistema (as que tem arquivo proprio e componentes dedicados).
 *
 * O Sanity NUNCA troca o layout dessas paginas — antes trocava, e era esse o
 * motivo de a pagina "mudar drasticamente" ao ser tocada no Studio. O CMS aqui
 * so alimenta textos, imagens e tamanhos dentro dos proprios componentes; o
 * layout e sempre o mesmo.
 */
export async function renderCmsBackedPage(_path: string, layout: ReactElement) {
  return layout
}

import { createHash } from 'node:crypto'

export const SANITY_ASSET_TAG = 'sanity:assets'
export const SANITY_PAGE_INDEX_TAG = 'sanity:page-index'

export function sanityTypeTag(type: string) {
  return `sanity:type:${type}`
}

export function sanityPageTag(path: string) {
  // Tags do Next tem limite de 256 caracteres, mesmo para URLs longas.
  return `sanity:page:${createHash('sha256').update(path).digest('hex')}`
}

export function sanityReadOptions(...types: string[]) {
  return {
    next: {
      revalidate: 3600,
      tags: [SANITY_ASSET_TAG, ...types.map(sanityTypeTag)],
    },
  }
}

export function sanityPageReadOptions(path: string) {
  return {
    next: {
      revalidate: 3600,
      // A projecao das paginas tambem resolve cartoes e listas destes tipos.
      tags: [
        ...sanityReadOptions('unit', 'service', 'testimonial', 'blogPost', 'teamMember').next.tags,
        sanityPageTag(path),
      ],
    },
  }
}

export const SANITY_PAGE_INDEX_OPTIONS = {
  next: { revalidate: 3600, tags: [SANITY_PAGE_INDEX_TAG] },
}

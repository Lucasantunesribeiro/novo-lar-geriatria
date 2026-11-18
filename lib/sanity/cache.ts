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

// Reserva de tempo do cache. Quem atualiza o site na hora é o webhook do
// Sanity (/api/revalidate), por tag. Este prazo só vale se um aviso se
// perder. Com 1 hora, cada página voltava à função do Netlify a cada hora,
// mesmo sem nada mudar; com 1 dia, isso cai 24 vezes.
export const CACHE_RESERVA_SEGUNDOS = 86400

export function sanityReadOptions(...types: string[]) {
  return {
    next: {
      revalidate: CACHE_RESERVA_SEGUNDOS,
      tags: [SANITY_ASSET_TAG, ...types.map(sanityTypeTag)],
    },
  }
}

export function sanityPageReadOptions(path: string) {
  return {
    next: {
      revalidate: CACHE_RESERVA_SEGUNDOS,
      // A projecao das paginas tambem resolve cartoes e listas destes tipos.
      tags: [
        ...sanityReadOptions('unit', 'service', 'testimonial', 'blogPost', 'teamMember').next.tags,
        sanityPageTag(path),
      ],
    },
  }
}

export const SANITY_PAGE_INDEX_OPTIONS = {
  next: { revalidate: CACHE_RESERVA_SEGUNDOS, tags: [SANITY_PAGE_INDEX_TAG] },
}

import { z } from 'zod'
import { SANITY_ASSET_TAG, SANITY_PAGE_INDEX_TAG, sanityPageTag, sanityTypeTag } from './cache'

export const revalidationEventSchema = z.object({
  _id: z.string().min(1).max(200),
  _type: z.string().min(1).max(100),
  operation: z.enum(['create', 'update', 'delete']),
  path: z.string().max(1024).nullish(),
  previousPath: z.string().max(1024).nullish(),
})

const CONTENT_TYPES = new Set([
  'unit', 'service', 'serviceCategory', 'testimonial', 'blogPost', 'teamMember',
  'page', 'faqPage', 'siteSettings', 'headerConfig', 'footerConfig', 'textosGlobais',
  'contactPage', 'testimonialsPage', 'thankYouPage', 'privacyPolicy', 'termsOfService',
  'activitiesPage', 'teamPage', 'structurePage', 'homePage', 'aboutPage',
  'aboutNovoLarPage', 'photosPage', 'locationPage', 'servicesIndexPage', 'blogIndexPage',
  'sanity.imageAsset', 'sanity.fileAsset',
])

export function revalidationPlan(event: z.infer<typeof revalidationEventSchema>) {
  if (event._id.startsWith('drafts.') || event._id.startsWith('versions.') || !CONTENT_TYPES.has(event._type)) {
    return { tags: [], paths: [] }
  }
  if (event._type.startsWith('sanity.') && event.operation === 'create') {
    // Um upload novo ainda nao altera paginas: a publicacao que usar a
    // imagem enviara seu proprio evento. Edicoes/exclusoes seguem invalidando.
    return { tags: [], paths: [] }
  }

  if (event._type === 'page') {
    const paths = [...new Set([event.path, event.previousPath].filter(
      (path): path is string => Boolean(path && path.startsWith('/') && !path.startsWith('//') && !/[?#\[\]\\]/.test(path)),
    ))]
    // O indice atualiza o sitemap; cada caminho invalida inclusive um 404
    // guardado antes da publicacao. O antigo tambem sai em renomeacoes/exclusoes.
    return { tags: [SANITY_PAGE_INDEX_TAG, ...paths.map(sanityPageTag)], paths: [...paths, '/sitemap.xml'] }
  }

  const tags = event._type.startsWith('sanity.')
    ? [SANITY_ASSET_TAG]
    : [sanityTypeTag(event._type)]

  // Categoria e membro tambem aparecem por referencia nos servicos/artigos.
  if (event._type === 'serviceCategory') tags.push(sanityTypeTag('service'))
  if (event._type === 'teamMember') tags.push(sanityTypeTag('blogPost'))

  return { tags, paths: ['unit', 'blogPost', 'service'].includes(event._type) ? ['/sitemap.xml'] : [] }
}

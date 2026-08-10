import {MetadataRoute} from 'next'

import {
  getAllPublishedPageEntries,
  getAllUnits,
} from '@/lib/sanity/queries'
import { getUnitPath } from '@/lib/site-data'
import {BLOG_POSTS} from '@/lib/blog-data'
import {SERVICE_DETAILS} from '@/lib/services-data'
import {COMPARATIVOS_SLUGS} from '@/app/(routes)/comparativos/[slug]/page'
import {PERGUNTAS_SLUGS} from '@/app/(routes)/perguntas/[slug]/page'
import {SITE_URL, toAbsoluteUrl} from '@/lib/seo/metadata'

// Regera o sitemap a cada 1 minuto para que paginas criadas no Studio
// entrem no Google sem precisar de um novo deploy.
export const revalidate = 60

const STATIC_LAST_MODIFIED = new Date('2026-04-07T00:00:00.000Z')

type SitemapEntry = MetadataRoute.Sitemap[number]

type EntryConfig = {
  changeFrequency: NonNullable<SitemapEntry['changeFrequency']>
  priority: number
  lastModified?: Date
}

const homePaths = ['/']
const aboutPaths = [
  '/sobre',
  '/sobre/equipe',
  '/sobre/estrutura',
  '/sobre/atividades',
  '/sobre/fotos',
  '/sobre/localizacao',
  '/sobre/a-novo-lar',
]
const serviceHubPaths = ['/servicos']
const staticSeoPaths = [
  '/porto-alegre',
  '/cuidados-alzheimer',
  '/cuidados-demencia',
  '/porto-alegre/moinhos-de-vento',
  '/porto-alegre/moinhos-de-vento/cuidados-alzheimer',
  '/porto-alegre/passo-dareia',
  '/ilpi-porto-alegre',
  '/residencial-geriatrico-porto-alegre',
  '/regiao-metropolitana',
  '/canoas',
  '/sao-leopoldo',
  '/novo-hamburgo',
]
const commercialPaths = [
  '/hospedagem-temporaria-idosos-porto-alegre',
  '/casa-de-repouso-em-porto-alegre',
  '/ilpi-em-porto-alegre',
  '/residencial-geriatrico-em-porto-alegre',
  '/residencia-para-idosos-porto-alegre',
  '/lar-para-idosos-em-porto-alegre',
  '/clinica-geriatrica-porto-alegre',
  '/acolhimento-pos-alta-hospitalar-idosos',
]
const conditionPaths = [
  '/cuidados-parkinson',
  '/cuidados-fragilidade-do-idoso',
  '/cuidados-idosos-acamados',
  '/cuidados-mobilidade-reduzida',
  '/cuidados-pacientes-cronicos',
  '/cuidados-pacientes-neurologicos',
  '/cuidados-pacientes-oncologicos',
  '/cuidados-paliativos-idosos',
  '/cuidados-perda-cognitiva',
  '/cuidados-pos-avc',
  '/cuidados-pos-cirurgicos-idosos',
  '/cuidados-reabilitacao-geriatrica',
]
const localPaths = [
  '/gravatai',
  '/cachoeirinha',
  '/esteio',
  '/sapucaia-do-sul',
  '/alvorada',
  '/viamao',
  '/vale-do-sinos',
  '/zona-norte-porto-alegre',
]
const technicalPaths = [
  '/clinica-para-idosos-em-porto-alegre',
  '/cuidado-integral-ao-idoso-em-porto-alegre',
  '/residencia-assistida-porto-alegre',
  '/internacao-geriatrica-porto-alegre',
  '/internacao-para-pacientes-cronicos-porto-alegre',
  '/internacao-para-pacientes-neurologicos-porto-alegre',
]
const bairroCondicaoPaths = [
  '/porto-alegre/moinhos-de-vento/cuidados-demencia',
  '/porto-alegre/moinhos-de-vento/cuidados-paliativos',
  '/porto-alegre/moinhos-de-vento/cuidados-parkinson',
  '/porto-alegre/passo-dareia/cuidados-demencia',
  '/porto-alegre/passo-dareia/cuidados-parkinson',
  '/porto-alegre/passo-dareia/idosos-acamados',
]
const cityIlpiPaths = [
  '/canoas/ilpi-em-porto-alegre',
  '/sao-leopoldo/ilpi-em-porto-alegre',
  '/novo-hamburgo/ilpi-em-porto-alegre',
  '/gravatai/ilpi-em-porto-alegre',
  '/cachoeirinha/ilpi-em-porto-alegre',
  '/viamao/ilpi-em-porto-alegre',
]
const faqPaths = PERGUNTAS_SLUGS.map((slug) => `/perguntas/${slug}`)
const comparisonPaths = COMPARATIVOS_SLUGS.map((slug) => `/comparativos/${slug}`)
const utilityPaths = [
  '/blog',
  '/contato',
  '/depoimentos',
  '/perguntas-frequentes',
  '/politica-de-privacidade',
  '/termos-de-uso',
]

const priorityLookup = new Map<string, EntryConfig>()

const registerPaths = (
  paths: string[],
  config: Omit<EntryConfig, 'lastModified'>
) => {
  for (const path of paths) {
    priorityLookup.set(path, config)
  }
}

registerPaths(homePaths, {changeFrequency: 'daily', priority: 1})
registerPaths(aboutPaths, {changeFrequency: 'monthly', priority: 0.7})
registerPaths(serviceHubPaths, {changeFrequency: 'weekly', priority: 0.9})
registerPaths(staticSeoPaths, {changeFrequency: 'monthly', priority: 0.8})
registerPaths(commercialPaths, {changeFrequency: 'monthly', priority: 0.8})
registerPaths(conditionPaths, {changeFrequency: 'monthly', priority: 0.8})
registerPaths(localPaths, {changeFrequency: 'monthly', priority: 0.7})
registerPaths(technicalPaths, {changeFrequency: 'monthly', priority: 0.7})
registerPaths(bairroCondicaoPaths, {changeFrequency: 'monthly', priority: 0.7})
registerPaths(cityIlpiPaths, {changeFrequency: 'monthly', priority: 0.7})
registerPaths(faqPaths, {changeFrequency: 'monthly', priority: 0.7})
registerPaths(comparisonPaths, {changeFrequency: 'monthly', priority: 0.7})
registerPaths(utilityPaths, {changeFrequency: 'monthly', priority: 0.7})

const buildEntry = (path: string, config: EntryConfig): SitemapEntry => ({
  url: path === '/' ? SITE_URL : toAbsoluteUrl(path),
  lastModified: config.lastModified || STATIC_LAST_MODIFIED,
  changeFrequency: config.changeFrequency,
  priority: config.priority,
})

const buildStaticEntries = (paths: string[]) =>
  paths.map((path) => buildEntry(path, {...priorityLookup.get(path)!}))

const getCmsConfig = (path: string): EntryConfig => {
  return priorityLookup.get(path) || {changeFrequency: 'monthly', priority: 0.6}
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [units, cmsPages] = await Promise.all([
    getAllUnits(),
    getAllPublishedPageEntries(),
  ])

  const staticEntries: SitemapEntry[] = [
    ...buildStaticEntries(homePaths),
    ...buildStaticEntries(aboutPaths),
    ...buildStaticEntries(serviceHubPaths),
    ...SERVICE_DETAILS.map((service) =>
      buildEntry(`/servicos/${service.slug}`, {
        changeFrequency: 'monthly',
        priority: 0.8,
      })
    ),
    ...buildStaticEntries(staticSeoPaths),
    ...buildStaticEntries(commercialPaths),
    ...buildStaticEntries(conditionPaths),
    ...buildStaticEntries(localPaths),
    ...buildStaticEntries(technicalPaths),
    ...buildStaticEntries(faqPaths),
    ...buildStaticEntries(bairroCondicaoPaths),
    ...buildStaticEntries(cityIlpiPaths),
    ...buildStaticEntries(comparisonPaths),
    ...buildStaticEntries(utilityPaths),
    ...BLOG_POSTS.map((post) =>
      buildEntry(`/blog/${post.slug}`, {
        changeFrequency: 'monthly',
        priority: 0.6,
        lastModified: new Date(post.date),
      })
    ),
  ]

  const unitEntries: SitemapEntry[] = units
    .map((unit: any) => {
      const slug = unit?.slug?.current ?? unit?.slug

      if (!slug) {
        return null
      }

      return buildEntry(getUnitPath(slug), {
        changeFrequency: 'monthly',
        priority: 0.9,
        lastModified: unit?._updatedAt ? new Date(unit._updatedAt) : STATIC_LAST_MODIFIED,
      })
    })
    .filter(Boolean) as SitemapEntry[]

  const cmsEntries = cmsPages.map((page) => {
    const config = getCmsConfig(page.path)

    return buildEntry(page.path, {
      ...config,
      lastModified: page._updatedAt ? new Date(page._updatedAt) : STATIC_LAST_MODIFIED,
    })
  })

  const deduped = new Map<string, SitemapEntry>()

  for (const entry of [...staticEntries, ...unitEntries, ...cmsEntries]) {
    deduped.set(entry.url, entry)
  }

  return Array.from(deduped.values())
}

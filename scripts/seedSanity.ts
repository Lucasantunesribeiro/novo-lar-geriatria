import './loadEnv'

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

import { writeClient } from '../lib/sanity/client'
import { mockUnits, mockServices, mockTestimonials } from '../lib/sanity/mock-data'
import { BLOG_POSTS } from '../lib/blog-data'
import { COMPANY_CONTACT, SOCIAL_LINKS } from '../lib/site-data'

if (!writeClient) {
  console.error('❌ Sanity write client is not configured. Check your environment variables.')
  process.exit(1)
}

const client = writeClient
const scriptDir = path.dirname(fileURLToPath(import.meta.url))
const ROOT_DIR = path.resolve(scriptDir, '..')
let cachedPlaceholderAssetId: string | null = null

type PortableBlock = {
  _type: 'block'
  _key: string
  style: 'normal' | 'h2'
  children: Array<{ _type: 'span'; _key: string; text: string; marks: string[] }>
}

const teamMembersSeed = [
  {
    name: 'Dra. Maria Santos',
    role: 'Geriatra Responsável Técnica',
    unitSlug: 'moinhos-luciana-de-abreu',
    specialties: ['Geriatria', 'Cuidados Paliativos'],
    certifications: ['CRM-RS 12345', 'RQE 67890'],
  },
  {
    name: 'Nutricionista Ana Costa',
    role: 'Coordenadora de Nutrição',
    unitSlug: 'passo-dareia',
    specialties: ['Nutrição Geriátrica', 'Dietas Especiais'],
    certifications: ['CRN 12345'],
  },
  {
    name: 'Fisioterapeuta Carlos Silva',
    role: 'Coordenador de Reabilitação',
    unitSlug: 'moinhos-barao-de-santo-angelo',
    specialties: ['Fisioterapia Geriátrica'],
    certifications: ['CREFITO 67890'],
  },
]

const serviceCategoriesSeed = [
  {
    slug: 'residencial',
    title: 'Cuidado residencial 24h',
    description: 'Hospedagem assistida e monitoramento integral nas unidades Novo Lar.',
    icon: 'home',
  },
  {
    slug: 'bem-estar',
    title: 'Bem-estar e terapias',
    description: 'Atividades que estimulam autonomia, cognição e vínculos afetivos.',
    icon: 'sparkles',
  },
  {
    slug: 'suporte',
    title: 'Suporte ao familiar',
    description: 'Serviços que facilitam a rotina e garantem continuidade dos cuidados.',
    icon: 'heart-handshake',
  },
]

const topLinksSeed = [
  {label: 'Tour e contato', href: '/sobre'},
  {label: 'Fotos', href: '/fotos'},
  {label: 'Notícias', href: '/blog'},
  {label: 'Fale Conosco', href: '/contato'},
]

const footerLinksSeed = [
  {
    title: 'Acessos',
    links: [
      {label: 'Início', href: '/'},
      {label: 'Unidades', href: '/unidades'},
      {label: 'Serviços', href: '/servicos'},
      {label: 'Blog', href: '/blog'},
    ],
  },
  {
    title: 'Institucional',
    links: [
      {label: 'Sobre', href: '/sobre'},
      {label: 'Equipe', href: '/sobre/equipe'},
      {label: 'Perguntas Frequentes', href: '/perguntas-frequentes'},
      {label: 'Política de Privacidade', href: '/politica-de-privacidade'},
    ],
  },
]

function toSlugField(value: string | undefined) {
  if (!value) return undefined
  return { _type: 'slug', current: value }
}

function toPortableText(blocks: { type: 'heading' | 'paragraph'; text: string }[]): PortableBlock[] {
  return blocks.map((block, index) => ({
    _type: 'block',
    _key: `block-${index}`,
    style: block.type === 'heading' ? 'h2' : 'normal',
    children: [
      {
        _type: 'span',
        _key: `span-${index}`,
        text: block.text.replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ').trim(),
        marks: [],
      },
    ],
  }))
}

async function getPlaceholderImageRef() {
  if (cachedPlaceholderAssetId) {
    return cachedPlaceholderAssetId
  }

  const imagePath = path.join(ROOT_DIR, 'public', 'Novo-Lar-Logo-7.png')
  if (!fs.existsSync(imagePath)) {
    console.warn('⚠️ Placeholder image not found. Images will be left empty.')
    return null
  }

  const stream = fs.createReadStream(imagePath)
  const asset = await client.assets.upload('image', stream, { filename: 'novo-lar-placeholder.png' })
  cachedPlaceholderAssetId = asset._id
  return cachedPlaceholderAssetId
}

async function seedServiceCategories() {
  const map = new Map<string, string>()

  for (const category of serviceCategoriesSeed) {
    const existing = await client.fetch<{_id: string} | null>(
      `*[_type == \"serviceCategory\" && slug.current == $slug][0]{_id}`,
      {slug: category.slug}
    )

    if (existing?._id) {
      map.set(category.slug, existing._id)
      continue
    }

    const created = await client.create({
      _type: 'serviceCategory',
      title: category.title,
      slug: {current: category.slug},
      description: category.description,
      icon: category.icon,
    })

    map.set(category.slug, created._id)
  }

  console.log(`✅ Garantidas ${map.size} categorias de serviços`)
  return map
}

async function seedUnits() {
  const existing = await client.fetch<number>('count(*[_type == "unit"])')
  if (existing > 0) {
    console.log('➡️ Units already exist, skipping creation.')
    const units = await client.fetch<Array<{ _id: string; slug: { current: string } }>>(
      '*[_type == "unit"]{_id, slug}'
    )
    return new Map(units.map((unit) => [unit.slug.current, unit._id]))
  }

  const placeholderRef = await getPlaceholderImageRef()

  for (const unit of mockUnits) {
    await client.create({
      _type: 'unit',
      name: unit.name,
      slug: toSlugField(unit.slug.current),
      phone: unit.phone,
      whatsapp: unit.whatsapp,
      email: unit.email,
      address: unit.address,
      neighborhood: unit.neighborhood,
      city: unit.city,
      state: unit.state,
      postalCode: unit.postalCode,
      coordinates: unit.coordinates,
      status: unit.status,
      capacity: unit.capacity,
      description: unit.description,
      detailedDescription: unit.detailedDescription,
      features: unit.features,
      hours: unit.hours,
      faq:
        unit.faq?.map((item, index) => ({
          _key: `faq-${index}`,
          question: item.question,
          answer: item.answer,
        })) || [],
      seoTitle: unit.seoTitle,
      seoDescription: unit.seoDescription,
      seoKeywords: unit.seoKeywords,
      featuredImage: placeholderRef
        ? {
            _type: 'image',
            asset: { _type: 'reference', _ref: placeholderRef },
            alt: unit.name,
          }
        : undefined,
      photos: [],
    })
  }

  console.log(`✅ Seeded ${mockUnits.length} units`)
  const units = await client.fetch<Array<{ _id: string; slug: { current: string } }>>(
    '*[_type == "unit"]{_id, slug}'
  )
  return new Map(units.map((unit) => [unit.slug.current, unit._id]))
}

async function seedServices(categoryMap: Map<string, string>) {
  const existing = await client.fetch<number>('count(*[_type == "service"])')
  if (existing > 0) {
    console.log('➡️ Services already exist, skipping creation.')
    return
  }

  for (const service of mockServices) {
    const categoryId = service.category ? categoryMap.get(service.category) : undefined

    await client.create({
      _type: 'service',
      title: service.title,
      slug: toSlugField(service.slug.current),
      description: service.description,
      icon: service.icon,
      featured: service.featured,
      unitAvailability: [],
      category: categoryId ? { _type: 'reference', _ref: categoryId } : undefined,
    })
  }

  console.log(`✅ Seeded ${mockServices.length} services`)
}

async function seedTeamMembers(unitMap: Map<string, string>) {
  const existing = await client.fetch<number>('count(*[_type == "teamMember"])')
  if (existing > 0) {
    console.log('➡️ Team members already exist, skipping creation.')
    const docs = await client.fetch<Array<{ _id: string; name: string }>>('*[_type == "teamMember"]{_id, name}')
    return new Map(docs.map((doc) => [doc.name, doc._id]))
  }

  const placeholderRef = await getPlaceholderImageRef()
  const nameToId = new Map<string, string>()

  for (const member of teamMembersSeed) {
    const unitId = member.unitSlug ? unitMap.get(member.unitSlug) : undefined
    const created = await client.create({
      _type: 'teamMember',
      name: member.name,
      role: member.role,
      unit: unitId ? { _type: 'reference', _ref: unitId } : undefined,
      photo: placeholderRef
        ? {
            _type: 'image',
            asset: { _type: 'reference', _ref: placeholderRef },
            alt: member.name,
          }
        : undefined,
      bio: undefined,
      specialties: member.specialties,
      certifications: member.certifications,
      crm: member.certifications?.find((cert) => cert.startsWith('CRM')),
    })

    nameToId.set(member.name, created._id)
  }

  console.log(`✅ Seeded ${teamMembersSeed.length} team members`)
  return nameToId
}

async function seedTestimonials(unitMap: Map<string, string>) {
  const existing = await client.fetch<number>('count(*[_type == "testimonial"])')
  if (existing > 0) {
    console.log('➡️ Testimonials already exist, skipping creation.')
    return
  }

  for (const testimonial of mockTestimonials) {
    const unitSlug = testimonial.unit?.slug?.current
    const unitId = unitSlug ? unitMap.get(unitSlug) : undefined

    await client.create({
      _type: 'testimonial',
      name: testimonial.name,
      role: testimonial.role,
      rating: testimonial.rating,
      text: testimonial.text,
      publishedAt: testimonial.publishedAt,
      unit: unitId ? { _type: 'reference', _ref: unitId } : undefined,
    })
  }

  console.log(`✅ Seeded ${mockTestimonials.length} testimonials`)
}

async function seedBlogPosts(authorMap: Map<string, string>) {
  const existing = await client.fetch<number>('count(*[_type == "blogPost"])')
  if (existing > 0) {
    console.log('➡️ Blog posts already exist, skipping creation.')
    return
  }

  const placeholderRef = await getPlaceholderImageRef()

  for (const post of BLOG_POSTS) {
    await client.create({
      _type: 'blogPost',
      title: post.title,
      slug: toSlugField(post.slug),
      excerpt: post.excerpt,
      content: toPortableText(post.content),
      category: post.category,
      coverImage: placeholderRef
        ? {
            _type: 'image',
            asset: { _type: 'reference', _ref: placeholderRef },
            alt: post.image.alt,
          }
        : undefined,
      publishedAt: post.date,
      author: authorMap.get(post.author)
        ? { _type: 'reference', _ref: authorMap.get(post.author)! }
        : undefined,
      seo: {
        metaTitle: post.title,
        metaDescription: post.excerpt,
      },
    })
  }

  console.log(`✅ Seeded ${BLOG_POSTS.length} blog posts`)
}

async function seedSiteSettings() {
  const docId = 'siteSettingsSingleton'
  const socialLinks = SOCIAL_LINKS.reduce<Record<string, string>>((acc, link) => {
    acc[link.icon] = link.href
    return acc
  }, {})

  await client.createOrReplace({
    _id: docId,
    _type: 'siteSettings',
    globalPhone: COMPANY_CONTACT.centralPhoneDisplay,
    globalWhatsapp: COMPANY_CONTACT.whatsappDigits,
    globalEmail: COMPANY_CONTACT.email,
    socialLinks,
    topLinks: topLinksSeed,
    footerLinks: footerLinksSeed,
    contactInfo: {
      centralPhoneDisplay: COMPANY_CONTACT.centralPhoneDisplay,
      centralPhoneDigits: COMPANY_CONTACT.centralPhoneDigits,
      whatsappDigits: COMPANY_CONTACT.whatsappDigits,
      visitation: COMPANY_CONTACT.visitation,
      city: COMPANY_CONTACT.city,
    },
  })

  console.log('✅ Site settings updated')
}

async function main() {
  try {
    console.log('🚀 Starting Sanity seed...')
    const categoryMap = await seedServiceCategories()
    const unitMap = await seedUnits()
    await seedServices(categoryMap)
    const teamMap = await seedTeamMembers(unitMap)
    await seedTestimonials(unitMap)
    await seedBlogPosts(teamMap)
    await seedSiteSettings()
    console.log('🎉 Sanity seed finished successfully!')
    process.exit(0)
  } catch (error) {
    console.error('❌ Failed to seed Sanity content')
    console.error(error)
    process.exit(1)
  }
}

main()

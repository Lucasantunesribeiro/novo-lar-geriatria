import './loadEnv'

import { writeClient } from '../lib/sanity/client'
import { BLOG_POSTS } from '../lib/blog-data'
import { SERVICE_DETAILS, type ServiceDetail } from '../lib/services-data'
import { COMPANY_CONTACT, UNITS } from '../lib/site-data'

if (!writeClient) {
  console.error('Sanity write client is not configured. Check SANITY_API_TOKEN and public project settings.')
  process.exit(1)
}

const client = writeClient
const NOW = new Date().toISOString()

type PortableTextBlock = {
  _type: 'block'
  _key: string
  style: 'normal' | 'h2' | 'h3'
  children: Array<{ _type: 'span'; _key: string; text: string; marks: string[] }>
}

type Reference = { _key: string; _type: 'reference'; _ref: string }

function toSlugValue(input: string) {
  return input
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

function escapeHtmlEntities(text: string) {
  return text
    .replace(/&nbsp;/g, ' ')
    .replace(/&ldquo;|&rdquo;/g, '"')
    .replace(/&lsquo;|&rsquo;/g, "'")
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
}

function stripHtml(text: string) {
  return escapeHtmlEntities(text).replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim()
}

function block(text: string, key: string, style: 'normal' | 'h2' | 'h3' = 'normal'): PortableTextBlock {
  return {
    _type: 'block',
    _key: key,
    style,
    children: [
      {
        _type: 'span',
        _key: `${key}-span`,
        text: stripHtml(text),
        marks: [],
      },
    ],
  }
}

function blocksFromParagraphs(paragraphs: string[], keyPrefix: string) {
  return paragraphs.map((paragraph, index) => block(paragraph, `${keyPrefix}-${index}`))
}

function blocksFromBlogContent(content: Array<{ type: 'heading' | 'paragraph'; text: string }>, keyPrefix: string) {
  return content.map((item, index) =>
    block(item.text, `${keyPrefix}-${index}`, item.type === 'heading' ? 'h2' : 'normal')
  )
}

function refs(ids: string[], keyPrefix: string): Reference[] {
  return ids.map((id, index) => ({
    _key: `${keyPrefix}-${index}`,
    _type: 'reference',
    _ref: id,
  }))
}

function heroSection({
  title,
  description,
  eyebrow,
  slides,
  ctas = [],
  stats = [],
  highlight,
}: {
  title: string
  description?: string
  eyebrow?: string
  slides: Array<{ path: string; alt: string }>
  ctas?: Array<{ label: string; href: string; variant?: 'primary' | 'secondary' | 'ghost' }>
  stats?: Array<{ label: string; value: string; description?: string }>
  highlight?: string
}) {
  return {
    _key: `hero-${toSlugValue(title)}`,
    _type: 'heroSection',
    variant: slides.length > 1 ? 'carousel' : 'highlight',
    eyebrow,
    title,
    description,
    highlight,
    slides: slides.map((slide, index) => ({
      _key: `slide-${index}`,
      imagePath: slide.path,
      alt: slide.alt,
    })),
    ctas: ctas.map((cta, index) => ({
      _key: `hero-cta-${index}`,
      label: cta.label,
      href: cta.href,
      variant: cta.variant || (index === 0 ? 'primary' : 'secondary'),
    })),
    stats: stats.map((stat, index) => ({
      _key: `hero-stat-${index}`,
      label: stat.label,
      value: stat.value,
      description: stat.description,
    })),
  }
}

function richTextSection(title: string, paragraphs: string[], alignment: 'left' | 'center' = 'left') {
  return {
    _key: `rich-${toSlugValue(title)}`,
    _type: 'richTextSection',
    title,
    alignment,
    body: blocksFromParagraphs(paragraphs, `body-${toSlugValue(title)}`),
  }
}

function servicesSection(title: string, description: string, serviceIds: string[]) {
  return {
    _key: `services-${toSlugValue(title)}`,
    _type: 'servicesSection',
    title,
    description,
    mode: 'selected',
    services: refs(serviceIds, 'service-ref'),
  }
}

function unitsSection(title: string, description: string, unitIds: string[]) {
  return {
    _key: `units-${toSlugValue(title)}`,
    _type: 'unitsSection',
    title,
    description,
    mode: 'selected',
    units: refs(unitIds, 'unit-ref'),
  }
}

function blogPostsSection(title: string, description: string, postIds: string[]) {
  return {
    _key: `blog-${toSlugValue(title)}`,
    _type: 'blogPostsSection',
    title,
    description,
    mode: 'selected',
    posts: refs(postIds, 'post-ref'),
  }
}

function testimonialsSection(title: string, description: string, testimonialIds: string[]) {
  return {
    _key: `testimonials-${toSlugValue(title)}`,
    _type: 'testimonialsSection',
    title,
    description,
    mode: 'manual',
    testimonials: refs(testimonialIds, 'testimonial-ref'),
  }
}

function gallerySection(
  title: string,
  description: string,
  images: Array<{ path: string; alt: string; caption?: string }>,
  layout: 'collage' | 'grid' | 'carousel' = 'collage'
) {
  return {
    _key: `gallery-${toSlugValue(title)}`,
    _type: 'gallerySection',
    title,
    description,
    layout,
    images: images.map((image, index) => ({
      _key: `gallery-image-${index}`,
      imagePath: image.path,
      alt: image.alt,
      caption: image.caption,
    })),
  }
}

function contactSection({
  title,
  description,
  contacts,
  showForm = false,
}: {
  title: string
  description?: string
  contacts: Array<{ label: string; value: string; href?: string; type?: string }>
  showForm?: boolean
}) {
  return {
    _key: `contact-${toSlugValue(title)}`,
    _type: 'contactSection',
    title,
    description,
    showForm,
    contacts: contacts.map((contact, index) => ({
      _key: `contact-item-${index}`,
      type: contact.type || 'custom',
      label: contact.label,
      value: contact.value,
      href: contact.href,
    })),
  }
}

function ctaSection({
  title,
  description,
  ctas,
  style = 'gradient',
}: {
  title: string
  description?: string
  ctas: Array<{ label: string; href: string; variant?: 'primary' | 'secondary' }>
  style?: 'light' | 'dark' | 'gradient'
}) {
  return {
    _key: `cta-${toSlugValue(title)}`,
    _type: 'ctaSection',
    title,
    description,
    style,
    ctas: ctas.map((cta, index) => ({
      _key: `cta-item-${index}`,
      label: cta.label,
      href: cta.href,
      variant: cta.variant || (index === 0 ? 'primary' : 'secondary'),
    })),
  }
}

function mapBlogCategory(category: string) {
  const normalized = toSlugValue(category)

  if (normalized.includes('atividade')) return 'atividades'
  if (normalized.includes('nutricao')) return 'saude'
  if (normalized.includes('psicologia')) return 'saude'
  if (normalized.includes('saude')) return 'saude'
  if (normalized.includes('orient')) return 'dicas'

  return 'cuidados'
}

function inferServiceIcon(service: ServiceDetail) {
  if (service.slug.includes('enfermagem') || service.slug.includes('medico')) return 'Shield'
  if (service.slug.includes('nutricao')) return 'Apple'
  if (service.slug.includes('terapia')) return 'Brain'
  if (service.slug.includes('musicoterapia')) return 'Music'
  if (service.slug.includes('lavanderia')) return 'Shirt'
  if (service.slug.includes('farmacia')) return 'Pill'
  return 'Home'
}

async function getExistingIdByPath(path: string) {
  const existing = await client.fetch<{ _id: string } | null>(
    `*[_type == "page" && path == $path][0]{_id}`,
    { path }
  )
  return existing?._id || `page-${path === '/' ? 'home' : toSlugValue(path)}`
}

async function getExistingIdBySlug(type: 'service' | 'blogPost', slug: string) {
  const existing = await client.fetch<{ _id: string } | null>(
    `*[_type == $type && slug.current == $slug][0]{_id}`,
    { type, slug }
  )
  return existing?._id || `${type}-${slug}`
}

async function getUnitMap() {
  const units = await client.fetch<Array<{ _id: string; slug: { current: string } }>>(
    `*[_type == "unit" && defined(slug.current)]{_id, slug}`
  )

  const map = new Map(units.map((unit) => [unit.slug.current, unit._id]))

  for (const unit of UNITS) {
    if (!map.has(unit.slug)) {
      throw new Error(`Missing unit document for slug "${unit.slug}".`)
    }
  }

  return map
}

async function ensureServiceCategories() {
  const categories = [
    {
      slug: 'residencial',
      title: 'Cuidado residencial 24h',
      description: 'Hospedagem assistida e monitoramento integral nas unidades Novo Lar.',
      icon: 'Home',
    },
    {
      slug: 'bem-estar',
      title: 'Bem-estar e terapias',
      description: 'Atividades que estimulam autonomia, cognição e vínculos afetivos.',
      icon: 'Sparkles',
    },
    {
      slug: 'suporte',
      title: 'Suporte ao familiar',
      description: 'Serviços que facilitam a rotina e garantem continuidade dos cuidados.',
      icon: 'HeartHandshake',
    },
  ]

  const map = new Map<string, string>()

  for (const category of categories) {
    const existing = await client.fetch<{ _id: string } | null>(
      `*[_type == "serviceCategory" && slug.current == $slug][0]{_id}`,
      { slug: category.slug }
    )

    const _id = existing?._id || `service-category-${category.slug}`

    await client.createOrReplace({
      _id,
      _type: 'serviceCategory',
      title: category.title,
      slug: { _type: 'slug', current: category.slug },
      description: category.description,
      icon: category.icon,
    })

    map.set(category.slug, _id)
  }

  return map
}

async function seedServices(categoryMap: Map<string, string>, unitMap: Map<string, string>) {
  const serviceIds: string[] = []

  for (const [index, service] of SERVICE_DETAILS.entries()) {
    const _id = await getExistingIdBySlug('service', service.slug)
    const categoryId = categoryMap.get(service.category)

    if (!categoryId) {
      throw new Error(`Missing service category for "${service.category}".`)
    }

    const unitAvailability = refs(Array.from(unitMap.values()), `service-unit-${index}`)

    await client.createOrReplace({
      _id,
      _type: 'service',
      title: service.title,
      slug: { _type: 'slug', current: service.slug },
      description: stripHtml(service.summary).slice(0, 500),
      subtitle: stripHtml(service.subtitle),
      summary: stripHtml(service.summary),
      detailParagraphs: service.description.map((paragraph) => stripHtml(paragraph)),
      highlights: service.highlights.map((item) => stripHtml(item)),
      heroImagePath: service.heroImage,
      heroImageAlt: service.heroImageAlt,
      gallery: service.gallery.map((image, imageIndex) => ({
        _key: `service-gallery-${index}-${imageIndex}`,
        imagePath: image.src,
        alt: image.alt,
      })),
      seo: {
        title: `${service.title} | Novo Lar Geriatria`,
        description: stripHtml(service.summary).slice(0, 160),
      },
      category: {
        _type: 'reference',
        _ref: categoryId,
      },
      icon: inferServiceIcon(service),
      unitAvailability,
      featured: index < 3,
    })

    serviceIds.push(_id)
  }

  return serviceIds
}

async function seedBlogPosts() {
  const postIds: string[] = []

  for (const post of BLOG_POSTS) {
    const _id = await getExistingIdBySlug('blogPost', post.slug)

    await client.createOrReplace({
      _id,
      _type: 'blogPost',
      title: stripHtml(post.title),
      slug: { _type: 'slug', current: post.slug },
      excerpt: stripHtml(post.excerpt).slice(0, 200),
      content: blocksFromBlogContent(post.content, `post-${post.slug}`),
      coverImagePath: post.image.src,
      category: mapBlogCategory(post.category),
      authorName: stripHtml(post.author),
      readTime: post.readTime,
      views: 0,
      publishedAt: new Date(post.date).toISOString(),
      seo: {
        metaTitle: stripHtml(post.title).slice(0, 60),
        metaDescription: stripHtml(post.excerpt).slice(0, 160),
      },
    })

    postIds.push(_id)
  }

  return postIds
}

async function seedTestimonials(unitMap: Map<string, string>) {
  const testimonials = [
    {
      key: 'jacqueline',
      name: 'Jacqueline',
      role: 'Familiar',
      unitSlug: 'moinhos-luciana-de-abreu',
      rating: 5,
      text: 'Agradecemos todo o atendimento prestado durante a breve estadia do nosso familiar. A equipe de enfermagem, atendentes e colaboradoras tratou nosso pai com muito carinho, atenção e respeito em todos os momentos.',
    },
    {
      key: 'erli-lima',
      name: 'Erli Lima',
      role: 'Familiar',
      unitSlug: 'passo-dareia',
      rating: 5,
      text: 'Excelente casa de repouso para idosos em Porto Alegre, com estrutura organizada, ambiente acolhedor e equipe preparada para oferecer segurança e tranquilidade à família.',
    },
    {
      key: 'leonardo-dutra',
      name: 'Leonardo Dutra',
      role: 'Familiar',
      unitSlug: 'moinhos-barao-de-santo-angelo',
      rating: 5,
      text: 'A unidade tem excelente estrutura e ótimos profissionais para cuidar dos residentes. O atendimento transmite confiança desde a primeira visita e a rotina é muito bem acompanhada.',
    },
    {
      key: 'matheus-giovani',
      name: 'Matheus Giovani',
      role: 'Familiar',
      unitSlug: 'moinhos-luciana-de-abreu',
      rating: 5,
      text: 'Excelente atendimento, muito cuidado e carinho dedicados aos idosos. O ambiente é bonito, higienizado e mostra que existe um trabalho sério por trás do acolhimento diário.',
    },
  ]

  const testimonialIds: string[] = []

  for (const testimonial of testimonials) {
    const unitId = unitMap.get(testimonial.unitSlug)

    if (!unitId) {
      throw new Error(`Missing unit reference for testimonial "${testimonial.key}".`)
    }

    const _id = `testimonial-${testimonial.key}`

    await client.createOrReplace({
      _id,
      _type: 'testimonial',
      name: testimonial.name,
      role: testimonial.role,
      unit: {
        _type: 'reference',
        _ref: unitId,
      },
      rating: testimonial.rating,
      text: testimonial.text,
      publishedAt: NOW,
    })

    testimonialIds.push(_id)
  }

  return testimonialIds
}

function buildEditorialPages({
  unitIds,
  serviceIds,
  postIds,
  testimonialIds,
}: {
  unitIds: string[]
  serviceIds: string[]
  postIds: string[]
  testimonialIds: string[]
}) {
  const homeSlides = [
    {
      path: '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/18.jpeg',
      alt: 'Ambiente acolhedor da unidade Moinhos de Vento - Luciana de Abreu',
    },
    {
      path: '/fotos-sobre/Moinhos de Vento -R. Barão de Santo Ângelo, 406/1.jpeg',
      alt: 'Estrutura da unidade Moinhos de Vento - Barão de Santo Ângelo',
    },
    {
      path: '/fotos-sobre/Passos de Areia - R. Brg. Oliveira Neri, 175/6.jpeg',
      alt: "Rotina assistida na unidade Passo d'Areia",
    },
  ]

  const galleryImages = [
    '/fotos-sobre/sobre-1.jpg',
    '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/3.jpeg',
    '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/6.jpeg',
    '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/10.jpeg',
    '/fotos-sobre/Moinhos de Vento -R. Barão de Santo Ângelo, 406/3.jpeg',
    '/fotos-sobre/Passos de Areia - R. Brg. Oliveira Neri, 175/5.jpeg',
  ]

  const contactChannels = [
    {
      label: 'Telefone central',
      value: COMPANY_CONTACT.centralPhoneDisplay,
      href: `tel:${COMPANY_CONTACT.centralPhoneDigits}`,
      type: 'phone',
    },
    {
      label: 'WhatsApp',
      value: COMPANY_CONTACT.centralPhoneDisplay,
      href: `https://wa.me/${COMPANY_CONTACT.whatsappDigits}`,
      type: 'whatsapp',
    },
    {
      label: 'E-mail',
      value: COMPANY_CONTACT.email,
      href: `mailto:${COMPANY_CONTACT.email}`,
      type: 'email',
    },
    {
      label: 'Visitas',
      value: COMPANY_CONTACT.visitation,
      type: 'custom',
    },
  ]

  return [
    {
      path: '/',
      title: 'Novo Lar Geriatria',
      seo: {
        title: 'Novo Lar Geriatria | Residencial Geriátrico em Porto Alegre',
        description:
          'Hospedagem assistida 24h em Porto Alegre com equipe multidisciplinar, unidades em Moinhos de Vento e Passo d’Areia e planos personalizados para idosos.',
      },
      primaryIntent: 'commercial',
      cluster: 'home',
      sections: [
        heroSection({
          eyebrow: 'Residencial geriátrico e hospedagem assistida em Porto Alegre',
          title: 'Cuidado integral para idosos com suporte 24 horas',
          description:
            'A Novo Lar reúne equipe multidisciplinar, unidades acolhedoras e acompanhamento contínuo para famílias que precisam de segurança, rotina estruturada e atenção humanizada.',
          slides: homeSlides,
          ctas: [
            { label: 'Agendar visita', href: '/contato', variant: 'primary' },
            { label: 'Conhecer unidades', href: '/#unidades', variant: 'secondary' },
          ],
          stats: [
            { label: 'Unidades', value: '3', description: 'Presença física em Porto Alegre' },
            { label: 'Atendimento', value: '24h', description: 'Enfermagem e suporte contínuos' },
            { label: 'História', value: '30+', description: 'Anos de experiência em geriatria' },
          ],
        }),
        richTextSection('Por que as famílias escolhem a Novo Lar', [
          'Nossa proposta combina hospitalidade, acompanhamento clínico, rotina terapêutica e comunicação transparente com a família. Cada residente recebe um plano de cuidado que considera condição clínica, grau de autonomia, histórico de vida e objetivos de curto e longo prazo.',
          'As três unidades seguem um mesmo padrão assistencial, com equipe treinada, controle de medicação, acompanhamento de sinais vitais, nutrição supervisionada e ambientes pensados para segurança, convivência e conforto.',
        ], 'center'),
        unitsSection('Nossas Unidades', 'Cada unidade possui características próprias, mas todas seguem o mesmo padrão de cuidado, acessibilidade e acompanhamento profissional.', unitIds),
        servicesSection('Nossos Serviços', 'Serviços estruturados para cobrir rotina assistida, apoio clínico, terapias, nutrição e facilidades que dão segurança à família.', serviceIds),
        blogPostsSection('Conteúdo que ajuda na decisão da família', 'Artigos produzidos para orientar sobre condições clínicas, rotina assistida, critérios de escolha e sinais de alerta no cuidado ao idoso.', postIds.slice(0, 6)),
        testimonialsSection('O que as famílias dizem', 'Depoimentos de familiares que acompanharam de perto a experiência de cuidado nas unidades Novo Lar.', testimonialIds),
        ctaSection({
          title: 'Quer entender qual unidade faz mais sentido para o seu caso?',
          description: 'Nossa equipe pode orientar sobre perfil clínico, rotina assistida, visita guiada e disponibilidade de vagas.',
          ctas: [
            { label: 'Falar com a equipe', href: '/contato', variant: 'primary' },
            { label: 'Ver unidades', href: '/#unidades', variant: 'secondary' },
          ],
        }),
      ],
    },
    {
      path: '/sobre',
      title: 'Sobre a Novo Lar',
      seo: {
        title: 'Sobre Nós | Novo Lar Geriatria',
        description:
          'Conheça a história, estrutura, unidades e proposta assistencial da Novo Lar Geriatria em Porto Alegre.',
      },
      primaryIntent: 'informational',
      cluster: 'institucional',
      sections: [
        heroSection({
          eyebrow: 'História, estrutura e proposta assistencial',
          title: 'Conheça a Novo Lar Geriatria',
          description:
            'Mais de três décadas dedicadas ao cuidado especializado de idosos em Porto Alegre, com equipe multidisciplinar, rotina assistida e unidades estrategicamente localizadas.',
          slides: homeSlides,
          ctas: [
            { label: 'Agendar visita', href: '/contato', variant: 'primary' },
            { label: 'Conhecer unidades', href: '/#unidades', variant: 'secondary' },
          ],
        }),
        richTextSection('Nossa proposta de cuidado', [
          'A Novo Lar foi criada para oferecer uma alternativa segura, acolhedora e tecnicamente estruturada para famílias que precisam de suporte contínuo no cuidado ao idoso.',
          'Nossa atuação integra hotelaria assistida, monitoramento de enfermagem, acompanhamento clínico, estímulo funcional e comunicação próxima com a família, respeitando a história e as necessidades de cada residente.',
        ]),
        unitsSection('Unidades em Porto Alegre', 'As unidades em Moinhos de Vento e Passo d’Areia seguem o mesmo padrão assistencial e ficam em regiões com fácil acesso para familiares.', unitIds),
        testimonialsSection('Confiança construída com famílias reais', 'A percepção das famílias é parte central da forma como avaliamos e aprimoramos o cuidado diariamente.', testimonialIds),
        ctaSection({
          title: 'Quer conhecer a estrutura pessoalmente?',
          description: 'Agende uma visita guiada e converse com nossa equipe sobre rotina, serviços e perfil assistencial.',
          ctas: [
            { label: 'Agendar visita', href: '/contato', variant: 'primary' },
            { label: 'Ver estrutura', href: '/sobre/estrutura', variant: 'secondary' },
          ],
        }),
      ],
    },
    {
      path: '/sobre/a-novo-lar',
      title: 'A Novo Lar',
      seo: {
        title: 'A Novo Lar: Nossa História e Missão | Novo Lar Geriatria',
        description:
          'Conheça a história, missão e valores da Novo Lar Geriatria, fundada em 1994 para oferecer cuidado humanizado e assistência especializada.',
      },
      primaryIntent: 'informational',
      cluster: 'institucional',
      sections: [
        heroSection({
          eyebrow: 'Desde 1994',
          title: 'A Novo Lar Geriatria',
          description:
            'Nossa história começou com a missão de oferecer conforto, segurança e dignidade para idosos e familiares que buscam suporte contínuo em Porto Alegre.',
          slides: [
            { path: '/fotos-sobre/sobre-1.jpg', alt: 'Equipe e estrutura da Novo Lar Geriatria' },
          ],
          ctas: [
            { label: 'Falar com a equipe', href: '/contato', variant: 'primary' },
            { label: 'Conhecer unidades', href: '/#unidades', variant: 'secondary' },
          ],
        }),
        richTextSection('Nossa história', [
          'A Novo Lar nasceu em 1994 para proporcionar conforto, tranquilidade e qualidade de vida na terceira idade, combinando experiência em gestão hospitalar com atendimento humanizado.',
          'Ao longo do tempo, ampliamos nossa estrutura para atender famílias que precisam de hospedagem assistida permanente ou temporária, sempre com presença profissional e rotina organizada.',
          'Hoje, nossas unidades seguem um mesmo padrão de cuidado, com foco em segurança clínica, acolhimento e comunicação transparente com a família.',
        ]),
        richTextSection('Missão, visão e valores', [
          'Nossa missão é oferecer suporte integral ao idoso e à família, com respeito, dignidade, cuidado individualizado e atuação ética em todas as etapas do processo assistencial.',
          'Valorizamos transparência, excelência técnica, equipe sinérgica, sustentabilidade e compromisso real com a experiência das famílias que confiam na Novo Lar.',
        ]),
        ctaSection({
          title: 'Quer entender se o nosso modelo faz sentido para sua família?',
          description: 'Converse com a equipe, tire dúvidas sobre rotina, adaptação e perfil de atendimento e agende uma visita guiada.',
          ctas: [
            { label: 'Agendar visita', href: '/contato', variant: 'primary' },
            { label: 'Ver serviços', href: '/servicos', variant: 'secondary' },
          ],
        }),
      ],
    },
    {
      path: '/sobre/atividades',
      title: 'Atividades e Terapia Ocupacional',
      seo: {
        title: 'Atividades e Terapia Ocupacional | Novo Lar Geriatria',
        description:
          'Veja como a rotina terapêutica da Novo Lar estimula cognição, mobilidade, socialização e bem-estar emocional.',
      },
      primaryIntent: 'informational',
      cluster: 'institucional',
      sections: [
        heroSection({
          eyebrow: 'Rotina terapêutica e convivência',
          title: 'Atividades que estimulam autonomia, cognição e vínculos',
          description:
            'A programação diária combina terapia ocupacional, atividades sociais, estímulos cognitivos e momentos de convivência pensados para preservar funcionalidade e qualidade de vida.',
          slides: [
            { path: '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/4.jpeg', alt: 'Atividade terapêutica em grupo' },
            { path: '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/8.jpeg', alt: 'Exercício assistido para mobilidade' },
          ],
          ctas: [
            { label: 'Conhecer serviços', href: '/servicos', variant: 'primary' },
            { label: 'Agendar visita', href: '/contato', variant: 'secondary' },
          ],
        }),
        richTextSection('Como funciona a rotina', [
          'A rotina é estruturada para equilibrar cuidado clínico, estímulo funcional e bem-estar emocional. As atividades são ajustadas conforme o perfil cognitivo, a mobilidade e os objetivos terapêuticos de cada residente.',
          'Entre as ações mais frequentes estão musicoterapia, oficinas manuais, exercícios leves supervisionados, atividades de memória, rodas de conversa e celebrações que reforçam socialização e senso de pertencimento.',
        ]),
        gallerySection(
          'Momentos da programação diária',
          'Imagens de atividades que fazem parte da experiência dos residentes nas unidades Novo Lar.',
          [
            { path: '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/4.jpeg', alt: 'Atividade terapêutica em grupo' },
            { path: '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/5.jpeg', alt: 'Estímulo cognitivo com jogos e materiais manuais' },
            { path: '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/8.jpeg', alt: 'Exercícios físicos leves supervisionados' },
            { path: '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/11.jpeg', alt: 'Convivência social em ambiente acolhedor' },
          ],
          'grid'
        ),
        ctaSection({
          title: 'Quer conhecer a rotina assistida de perto?',
          description: 'Agende uma visita e veja como a programação terapêutica se integra ao cuidado diário em cada unidade.',
          ctas: [
            { label: 'Agendar visita', href: '/contato', variant: 'primary' },
            { label: 'Conhecer unidades', href: '/#unidades', variant: 'secondary' },
          ],
        }),
      ],
    },
    {
      path: '/sobre/equipe',
      title: 'Equipe Multidisciplinar 24h',
      seo: {
        title: 'Equipe Multidisciplinar 24h | Novo Lar Geriatria',
        description:
          'Saiba como médicos, enfermagem, nutricionistas, terapeutas e cuidadores atuam de forma integrada na Novo Lar.',
      },
      primaryIntent: 'informational',
      cluster: 'institucional',
      sections: [
        heroSection({
          eyebrow: 'Profissionais especializados',
          title: 'Equipe multidisciplinar com presença contínua',
          description:
            'Médicos geriatras, enfermagem, nutricionistas, terapeutas e cuidadores atuam em conjunto para garantir cuidado seguro, integrado e personalizado.',
          slides: [
            { path: '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/2.jpeg', alt: 'Equipe multidisciplinar da Novo Lar' },
          ],
          ctas: [
            { label: 'Conhecer serviços', href: '/servicos', variant: 'primary' },
            { label: 'Falar com a equipe', href: '/contato', variant: 'secondary' },
          ],
        }),
        richTextSection('Como a equipe trabalha', [
          'A assistência é organizada de forma interdisciplinar. Isso significa que decisões sobre rotina, medicação, alimentação, mobilidade e adaptação são tomadas considerando diferentes perspectivas clínicas e assistenciais.',
          'A presença contínua de enfermagem e o acompanhamento de profissionais especializados reduzem risco, agilizam resposta a intercorrências e aumentam a tranquilidade da família.',
        ]),
        servicesSection('Frentes principais de cuidado', 'Alguns dos serviços que traduzem a atuação integrada da equipe multidisciplinar.', serviceIds.slice(0, 4)),
        ctaSection({
          title: 'Quer entender como montamos o plano de cuidado do residente?',
          description: 'Nossa equipe orienta sobre avaliação inicial, adaptação, monitoramento clínico e rotina assistida.',
          ctas: [
            { label: 'Agendar conversa', href: '/contato', variant: 'primary' },
            { label: 'Ver unidades', href: '/#unidades', variant: 'secondary' },
          ],
        }),
      ],
    },
    {
      path: '/sobre/estrutura',
      title: 'Estrutura Completa',
      seo: {
        title: 'Estrutura Completa | Novo Lar Geriatria',
        description:
          'Conheça a estrutura física e assistencial da Novo Lar, com ambientes acessíveis, acolhedores e preparados para o cuidado contínuo.',
      },
      primaryIntent: 'informational',
      cluster: 'institucional',
      sections: [
        heroSection({
          eyebrow: 'Ambientes planejados para segurança e conforto',
          title: 'Estrutura pensada para acolhimento, mobilidade e rotina assistida',
          description:
            'Cada unidade foi organizada para reduzir riscos, facilitar deslocamento e oferecer um ambiente confortável para moradores e familiares.',
          slides: [
            { path: '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/1.jpeg', alt: 'Entrada de uma unidade Novo Lar' },
            { path: '/fotos-sobre/Passos de Areia - R. Brg. Oliveira Neri, 175/1.jpeg', alt: 'Ambiente interno da unidade Passo d’Areia' },
          ],
          ctas: [
            { label: 'Conhecer unidades', href: '/#unidades', variant: 'primary' },
            { label: 'Agendar visita', href: '/contato', variant: 'secondary' },
          ],
        }),
        richTextSection('O que compõe a estrutura', [
          'A estrutura inclui quartos adaptados, áreas comuns de convivência, ambientes para refeições, espaços externos e recursos que apoiam rotina terapêutica, higiene e deslocamento seguro.',
          'Iluminação, circulação, acessibilidade e organização dos ambientes fazem parte do projeto assistencial, porque impactam diretamente no conforto, na prevenção de quedas e na experiência de quem vive e visita a unidade.',
        ]),
        gallerySection(
          'Ambientes das unidades',
          'Imagens de espaços que fazem parte da estrutura disponível aos residentes.',
          galleryImages.map((path, index) => ({
            path,
            alt: `Ambiente da Novo Lar ${index + 1}`,
          })),
          'grid'
        ),
        unitsSection('Estrutura distribuída em três unidades', 'As unidades seguem o mesmo padrão assistencial e permitem orientar a família conforme localização, perfil clínico e disponibilidade.', unitIds),
        ctaSection({
          title: 'Quer visitar a estrutura antes de decidir?',
          description: 'Agende uma visita para conhecer os ambientes, esclarecer dúvidas e avaliar o encaixe com o perfil do residente.',
          ctas: [
            { label: 'Agendar visita', href: '/contato', variant: 'primary' },
            { label: 'Falar no WhatsApp', href: `https://wa.me/${COMPANY_CONTACT.whatsappDigits}`, variant: 'secondary' },
          ],
        }),
      ],
    },
    {
      path: '/sobre/fotos',
      title: 'Galeria de Fotos',
      seo: {
        title: 'Galeria de Fotos | Novo Lar Geriatria',
        description:
          'Veja imagens das unidades, áreas de convivência e ambientes assistenciais da Novo Lar Geriatria em Porto Alegre.',
      },
      primaryIntent: 'informational',
      cluster: 'institucional',
      sections: [
        heroSection({
          eyebrow: 'Galeria visual',
          title: 'Conheça as unidades em imagens',
          description:
            'Uma visão dos ambientes, áreas comuns e espaços preparados para o bem-estar dos residentes.',
          slides: [{ path: '/fotos-sobre/sobre-1.jpg', alt: 'Galeria de fotos da Novo Lar' }],
          ctas: [
            { label: 'Agendar visita', href: '/contato', variant: 'primary' },
            { label: 'Ver localização', href: '/sobre/localizacao', variant: 'secondary' },
          ],
        }),
        gallerySection(
          'Galeria',
          'Seleção de imagens das unidades e da experiência de acolhimento da Novo Lar.',
          galleryImages.map((path, index) => ({
            path,
            alt: `Foto da Novo Lar ${index + 1}`,
          })),
          'grid'
        ),
        ctaSection({
          title: 'Quer ver a estrutura pessoalmente?',
          description: 'Agende uma visita guiada para conhecer a unidade mais adequada para a sua família.',
          ctas: [
            { label: 'Agendar visita', href: '/contato', variant: 'primary' },
            { label: 'Conhecer unidades', href: '/#unidades', variant: 'secondary' },
          ],
        }),
      ],
    },
    {
      path: '/sobre/localizacao',
      title: 'Localização Privilegiada',
      seo: {
        title: 'Localização Privilegiada em Porto Alegre | Novo Lar Geriatria',
        description:
          'Conheça a localização das unidades Novo Lar nos bairros Moinhos de Vento e Passo d’Areia, com acesso facilitado para famílias.',
      },
      primaryIntent: 'local',
      cluster: 'institucional',
      sections: [
        heroSection({
          eyebrow: 'Moinhos de Vento e Passo d’Areia',
          title: 'Unidades em regiões estratégicas de Porto Alegre',
          description:
            'As unidades ficam em bairros com bom acesso, proximidade a hospitais e rotas práticas para a rotina de visitas da família.',
          slides: [
            { path: '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/1.jpeg', alt: 'Unidade em Moinhos de Vento' },
            { path: '/fotos-sobre/Passos de Areia - R. Brg. Oliveira Neri, 175/1.jpeg', alt: 'Unidade em Passo d’Areia' },
          ],
          ctas: [
            { label: 'Ver unidades', href: '/#unidades', variant: 'primary' },
            { label: 'Agendar visita', href: '/contato', variant: 'secondary' },
          ],
        }),
        richTextSection('Como a localização ajuda a família', [
          'Estar em regiões conhecidas e com boa mobilidade facilita visitas frequentes, reduz deslocamentos mais longos e ajuda no acompanhamento de consultas, exames e demais demandas da rotina assistencial.',
          'Moinhos de Vento e Passo d’Areia oferecem acesso a serviços de saúde, comércio e vias importantes da cidade, o que melhora a logística para familiares e prestadores de apoio.',
        ]),
        unitsSection('Nossas unidades', 'Os endereços abaixo refletem as unidades físicas da Novo Lar e servem como referência oficial para visitas e contato.', unitIds),
        contactSection({
          title: 'Canais para agendamento e orientação',
          description: 'Use os canais abaixo para alinhar visita, tirar dúvidas sobre localização e verificar a unidade mais adequada ao seu caso.',
          contacts: contactChannels,
          showForm: false,
        }),
        ctaSection({
          title: 'Quer saber qual unidade fica melhor para sua rotina?',
          description: 'Nossa equipe pode orientar com base em localização, perfil clínico, disponibilidade e preferências da família.',
          ctas: [
            { label: 'Falar com a equipe', href: '/contato', variant: 'primary' },
            { label: 'WhatsApp', href: `https://wa.me/${COMPANY_CONTACT.whatsappDigits}`, variant: 'secondary' },
          ],
        }),
      ],
    },
    {
      path: '/contato',
      title: 'Entre em Contato',
      seo: {
        title: 'Contato | Novo Lar Geriatria',
        description:
          'Fale com a Novo Lar Geriatria, tire dúvidas, solicite informações e agende uma visita às unidades em Porto Alegre.',
      },
      primaryIntent: 'commercial',
      cluster: 'conversao',
      sections: [
        heroSection({
          eyebrow: 'Atendimento e visitas',
          title: 'Entre em contato com a equipe Novo Lar',
          description:
            'Estamos disponíveis para orientar sobre perfil assistencial, vagas, adaptação, localização das unidades e visita guiada.',
          slides: [{ path: '/Novo-Lar-Logo-7.png', alt: 'Contato Novo Lar Geriatria' }],
        }),
        contactSection({
          title: 'Canais de atendimento',
          description: 'Escolha o canal mais conveniente para a sua família.',
          contacts: [
            ...contactChannels,
            {
              label: 'Cidade',
              value: COMPANY_CONTACT.city,
              type: 'address',
            },
          ],
          showForm: true,
        }),
      ],
    },
    {
      path: '/depoimentos',
      title: 'Depoimentos de Famílias',
      seo: {
        title: 'Depoimentos de Famílias | Novo Lar Geriatria',
        description:
          'Relatos de familiares que acompanharam de perto o cuidado assistencial da Novo Lar Geriatria.',
      },
      primaryIntent: 'commercial',
      cluster: 'prova-social',
      sections: [
        heroSection({
          eyebrow: 'Histórias reais de famílias',
          title: 'Depoimentos sobre a experiência com a Novo Lar',
          description:
            'Os relatos ajudam a entender como a rotina assistida, o acolhimento e a comunicação com a família são percebidos no dia a dia.',
          slides: [{ path: '/Novo-Lar-Logo-7.png', alt: 'Depoimentos da Novo Lar Geriatria' }],
          ctas: [
            { label: 'Agendar visita', href: '/contato', variant: 'primary' },
            { label: 'Conhecer unidades', href: '/#unidades', variant: 'secondary' },
          ],
        }),
        testimonialsSection('O que as famílias relatam', 'Depoimentos publicados e organizados dentro do CMS para revisão e atualização editorial.', testimonialIds),
        ctaSection({
          title: 'Quer conversar com a equipe sobre o seu caso?',
          description: 'Agende uma visita guiada e entenda como funciona o processo de avaliação, adaptação e acompanhamento.',
          ctas: [
            { label: 'Falar com a equipe', href: '/contato', variant: 'primary' },
            { label: 'Ver serviços', href: '/servicos', variant: 'secondary' },
          ],
        }),
      ],
    },
    {
      path: '/politica-de-privacidade',
      title: 'Política de Privacidade',
      seo: {
        title: 'Política de Privacidade | Novo Lar Geriatria',
        description:
          'Entenda como a Novo Lar Geriatria coleta, utiliza e protege dados pessoais conforme a LGPD.',
      },
      primaryIntent: 'informational',
      cluster: 'legal',
      sections: [
        heroSection({
          eyebrow: 'Privacidade e proteção de dados',
          title: 'Política de Privacidade',
          description:
            'Apresentamos como os dados são coletados, usados e protegidos quando você navega pelo site, envia formulários ou entra em contato com a Novo Lar.',
          slides: [{ path: '/Novo-Lar-Logo-7.png', alt: 'Política de privacidade da Novo Lar' }],
        }),
        richTextSection('Tratamento de dados e bases legais', [
          'A Novo Lar trata dados pessoais conforme a Lei Geral de Proteção de Dados e utiliza as informações apenas para finalidades legítimas, como atendimento, resposta a solicitações, relacionamento com famílias, operação do site e segurança da informação.',
          'Os dados podem incluir nome, telefone, e-mail, conteúdo enviado por formulários e informações técnicas de navegação. O uso ocorre com base em consentimento, execução de medidas pré-contratuais, cumprimento de obrigação legal e legítimo interesse, quando aplicável.',
        ]),
        richTextSection('Direitos do titular e segurança', [
          'O titular pode solicitar confirmação de tratamento, acesso, correção, anonimização, eliminação de dados excessivos, portabilidade e informações sobre compartilhamento, observadas as hipóteses legais e regulatórias aplicáveis.',
          'Adotamos medidas administrativas e técnicas para reduzir risco de acesso indevido, alteração não autorizada, vazamento, destruição ou perda de informações pessoais.',
        ]),
        contactSection({
          title: 'Canal para assuntos de privacidade',
          description: 'Use este canal para solicitações relacionadas a dados pessoais e dúvidas sobre a política.',
          contacts: [
            {
              label: 'E-mail',
              value: COMPANY_CONTACT.email,
              href: `mailto:${COMPANY_CONTACT.email}`,
              type: 'email',
            },
          ],
          showForm: false,
        }),
      ],
    },
    {
      path: '/termos-de-uso',
      title: 'Termos de Uso',
      seo: {
        title: 'Termos de Uso | Novo Lar Geriatria',
        description:
          'Leia os termos e condições para navegação e uso do site da Novo Lar Geriatria.',
      },
      primaryIntent: 'informational',
      cluster: 'legal',
      sections: [
        heroSection({
          eyebrow: 'Termos e condições',
          title: 'Termos de Uso do site',
          description:
            'Os termos abaixo disciplinam a navegação, o uso dos conteúdos e a responsabilidade sobre o uso do site da Novo Lar Geriatria.',
          slides: [{ path: '/Novo-Lar-Logo-7.png', alt: 'Termos de uso da Novo Lar' }],
        }),
        richTextSection('Uso do site e propriedade intelectual', [
          'Ao acessar o site, o usuário concorda em utilizá-lo apenas para fins lícitos, sem comprometer a disponibilidade da plataforma, o funcionamento técnico ou a experiência de outros usuários.',
          'Textos, imagens, marcas, logotipos, gráficos e demais conteúdos publicados são protegidos por direitos de propriedade intelectual e não podem ser copiados, reutilizados ou redistribuídos sem autorização.',
        ]),
        richTextSection('Responsabilidade, links externos e contato', [
          'O site é disponibilizado para fins informativos e comerciais sobre os serviços da Novo Lar. Eventuais links para serviços de terceiros são oferecidos por conveniência e não representam controle editorial permanente sobre o conteúdo externo.',
          'Em caso de dúvidas sobre estes termos, a equipe pode ser contatada pelos canais oficiais da empresa, disponíveis na página de contato.',
        ]),
        ctaSection({
          title: 'Precisa de mais informações?',
          description: 'Use a página de contato para falar com a equipe sobre o site, os serviços ou o processo de visita.',
          ctas: [{ label: 'Ir para contato', href: '/contato', variant: 'primary' }],
          style: 'light',
        }),
      ],
    },
    {
      path: '/blog',
      title: 'Blog Novo Lar',
      seo: {
        title: 'Blog | Novo Lar Geriatria',
        description:
          'Artigos sobre cuidados com idosos, critérios de escolha de ILPI, sinais de alerta e rotina assistida.',
      },
      primaryIntent: 'informational',
      cluster: 'blog',
      sections: [
        heroSection({
          eyebrow: 'Conteúdo para famílias e cuidadores',
          title: 'Blog Novo Lar',
          description:
            'Publicamos conteúdos para apoiar a tomada de decisão de famílias que pesquisam rotinas assistidas, condições clínicas e critérios de escolha de uma ILPI.',
          slides: [{ path: '/Novo-Lar-Logo-7.png', alt: 'Blog Novo Lar' }],
        }),
        richTextSection('Como usar este conteúdo', [
          'Os artigos foram organizados para responder dúvidas comuns sobre cuidado geriátrico, sinais de alerta, adaptação do idoso e comparação entre diferentes modelos de cuidado.',
          'Sempre que fizer sentido, os textos apontam para serviços, unidades e páginas de apoio que ajudam a família a transformar pesquisa em decisão prática.',
        ]),
        blogPostsSection('Todos os artigos', 'O cliente pode editar cada post no CMS e também reorganizar esta seleção diretamente na página do blog.', postIds),
        ctaSection({
          title: 'Precisa falar sobre um caso específico?',
          description: 'Além dos artigos, nossa equipe pode orientar sobre sinais de alerta, adaptação e perfil assistencial.',
          ctas: [
            { label: 'Falar com a equipe', href: '/contato', variant: 'primary' },
            { label: 'Conhecer serviços', href: '/servicos', variant: 'secondary' },
          ],
        }),
      ],
    },
    {
      path: '/servicos',
      title: 'Serviços Especializados',
      seo: {
        title: 'Serviços | Novo Lar Geriatria',
        description:
          'Conheça os serviços da Novo Lar Geriatria: hospedagem assistida, enfermagem 24h, terapias, nutrição e suporte à família.',
      },
      primaryIntent: 'commercial',
      cluster: 'servicos',
      sections: [
        heroSection({
          eyebrow: 'Cuidado integral para diferentes necessidades',
          title: 'Serviços especializados em cuidado geriátrico',
          description:
            'A estrutura assistencial da Novo Lar foi organizada para atender desde rotinas de moradia assistida até acompanhamento clínico, reabilitação, suporte nutricional e bem-estar.',
          slides: [
            { path: '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/1.jpeg', alt: 'Serviços assistenciais da Novo Lar' },
          ],
          ctas: [
            { label: 'Agendar visita', href: '/contato', variant: 'primary' },
            { label: 'Conhecer unidades', href: '/#unidades', variant: 'secondary' },
          ],
        }),
        richTextSection('Como os serviços se integram', [
          'Os serviços não funcionam isoladamente. O plano de cuidado cruza hospedagem assistida, monitoramento clínico, nutrição, terapias e rotina diária para responder ao quadro funcional e às prioridades da família.',
          'O cliente pode editar os textos, os destaques e a seleção de serviços desta página diretamente pelo CMS, sem depender de mudança em código para atualizar a comunicação principal.',
        ]),
        servicesSection('Serviços disponíveis', 'Seleção editorial dos serviços que sustentam o cuidado integral oferecido nas unidades Novo Lar.', serviceIds),
        contactSection({
          title: 'Fale com a equipe',
          description: 'Se quiser entender qual serviço ou combinação de cuidados faz mais sentido para o seu caso, use os canais abaixo.',
          contacts: contactChannels,
          showForm: false,
        }),
        ctaSection({
          title: 'Quer uma orientação personalizada?',
          description: 'A equipe pode explicar como cada serviço se encaixa no perfil clínico e na rotina do residente.',
          ctas: [
            { label: 'Agendar conversa', href: '/contato', variant: 'primary' },
            { label: 'WhatsApp', href: `https://wa.me/${COMPANY_CONTACT.whatsappDigits}`, variant: 'secondary' },
          ],
        }),
      ],
    },
  ] as Array<{
    path: string
    title: string
    seo: { title: string; description: string }
    primaryIntent: string
    cluster: string
    sections: any[]
  }>
}

async function seedPages({
  unitIds,
  serviceIds,
  postIds,
  testimonialIds,
}: {
  unitIds: string[]
  serviceIds: string[]
  postIds: string[]
  testimonialIds: string[]
}) {
  const pages = buildEditorialPages({ unitIds, serviceIds, postIds, testimonialIds })

  for (const page of pages) {
    const _id = await getExistingIdByPath(page.path)

    await client.createOrReplace({
      _id,
      _type: 'page',
      title: page.title,
      path: page.path,
      seo: page.seo,
      indexable: true,
      primaryIntent: page.primaryIntent,
      cluster: page.cluster,
      lastReviewedAt: NOW,
      sections: page.sections,
      published: true,
    })
  }

  return pages.length
}

async function main() {
  console.log('Seeding editorial authority documents to Sanity...')

  const unitMap = await getUnitMap()
  const categoryMap = await ensureServiceCategories()
  const serviceIds = await seedServices(categoryMap, unitMap)
  const postIds = await seedBlogPosts()
  const testimonialIds = await seedTestimonials(unitMap)
  const pageCount = await seedPages({
    unitIds: Array.from(unitMap.values()),
    serviceIds,
    postIds,
    testimonialIds,
  })

  console.log(`Services upserted: ${serviceIds.length}`)
  console.log(`Blog posts upserted: ${postIds.length}`)
  console.log(`Testimonials upserted: ${testimonialIds.length}`)
  console.log(`Pages upserted: ${pageCount}`)
  console.log('Editorial authority seed completed.')
}

main().catch((error) => {
  console.error('Failed to seed editorial authority documents.', error)
  process.exit(1)
})

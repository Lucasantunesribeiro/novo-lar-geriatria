import {client, isSanityConfigured} from './client'
import {mockUnits, mockServices, mockTestimonials} from './mock-data'

/** 
 * Busca uma unidade pelo slug
 */
export async function getUnitBySlug(slug: string) {
  const fallbackUnit =
    mockUnits.find((unit) => {
      const slugValue = typeof unit.slug === 'string' ? unit.slug : unit.slug?.current
      return slugValue === slug
    }) || null

  if (!isSanityConfigured || !client) {
    // Retorna dados mockados quando Sanity não está configurado
    return fallbackUnit
  }

  const query = `*[_type == "unit" && slug.current == $slug][0]{
    _id,
    name,
    slug,
    phone,
    whatsapp,
    email,
    address,
    neighborhood,
    city,
    state,
    postalCode,
    coordinates,
    googlePlaceId,
    status,
    capacity,
    "featuredImage": featuredImage{
      asset->{
        _id,
        url,
        originalFilename
      },
      alt
    },
    "photos": photos[]{
      asset->{
        _id,
        url,
        originalFilename
      },
      alt,
      caption
    },
    description,
    features,
    detailedDescription,
    hours,
    "faq": faq[]{
      question,
      answer
    },
    seoTitle,
    seoDescription,
    "seoImage": seoImage{
      asset->{
        _id,
        url
      }
    },
    seoKeywords,
    "services": services[]->{
      _id,
      title,
      slug,
      description,
      icon
    },
    "team": team[]->{
      _id,
      name,
      role,
      photo {
        asset->{
          _id,
          url
        }
      },
      bio,
      specialties,
      certifications,
      crm
    }
  }`

  try {
    const unit = await client.fetch(query, { slug })
    return unit || fallbackUnit
  } catch (error) {
    console.error('Erro ao buscar unidade no Sanity, usando fallback:', error)
    return fallbackUnit
  }
}

/**
 * Busca todas as unidades (para listagem)
 */
export async function getAllUnits() {
  if (!isSanityConfigured || !client) {
    // Retorna dados mockados quando Sanity não está configurado
    return mockUnits
  }

  const query = `*[_type == "unit"] | order(name asc){
    _id,
    name,
    slug,
    phone,
    whatsapp,
    address,
    neighborhood,
    status,
    description,
    "featuredImage": featuredImage{
      asset->{
        _id,
        url,
        originalFilename
      },
      alt
    },
    "photo": photos[0]{
      asset->{
        _id,
        url,
        originalFilename
      },
      alt
    }
  }`

  try {
    const units = await client.fetch(query)

    if (!units || units.length === 0) {
      return mockUnits
    }

    return units
  } catch (error) {
    console.error('Erro ao listar unidades no Sanity, usando fallback:', error)
    return mockUnits
  }
}

/**
 * Busca configurações globais do site (SINGLETON)
 * @cache 60 segundos
 */
export async function getSiteSettings() {
  if (!isSanityConfigured || !client) {
    return null
  }

  const query = `*[_type == "siteSettings"][0]{
    _id,
    siteName,
    siteUrl,
    defaultMetaDescription,
    globalPhone,
    globalWhatsapp,
    globalEmail,
    socialLinks,
    topLinks,
    footerLinks,
    contactInfo,
    "logo": logo{
      asset->{
        _id,
        url
      }
    },
    "favicon": favicon{
      asset->{
        _id,
        url
      }
    },
    "defaultOgImage": defaultOgImage{
      asset->{
        _id,
        url
      }
    },
    googleAnalyticsId,
    googleTagManagerId,
    facebookPixelId
  }`

  try {
    return await client.fetch(query, {}, { next: { revalidate: 60 } })
  } catch (error) {
    console.error('Erro ao buscar configurações do site:', error)
    return null
  }
}

/**
 * Busca todos os serviços
 */
export async function getAllServices() {
  if (!isSanityConfigured || !client) {
    // Retorna dados mockados quando Sanity não está configurado
    return mockServices
  }

  const query = `*[_type == "service"] | order(title asc){
    _id,
    title,
    slug,
    description,
    icon,
    featured,
    "unitAvailability": unitAvailability[]->{
      _id,
      name,
      slug
    },
    "category": category->{
      _id,
      title,
      slug,
      description,
      icon
    }
  }`

  return await client.fetch(query)
}

/**
 * Busca depoimentos (opcionalmente por unidade)
 */
export async function getTestimonials(unitSlug?: string) {
  if (!isSanityConfigured || !client) {
    // Retorna dados mockados quando Sanity não está configurado
    if (unitSlug) {
      return mockTestimonials.filter(t => t.unit.slug.current === unitSlug)
    }
    return mockTestimonials
  }

  const filter = unitSlug
    ? `*[_type == "testimonial" && unit->slug.current == $unitSlug]`
    : `*[_type == "testimonial"]`

  const query = `${filter} | order(publishedAt desc){
    _id,
    name,
    role,
    rating,
    text,
    "photo": photo{
      asset->{
        _id,
        url
      }
    },
    videoUrl,
    publishedAt,
    "unit": unit->{
      _id,
      name,
      slug
    }
  }`

  return await client.fetch(query, unitSlug ? { unitSlug } : {})
}

/**
 * Busca posts do blog (com paginação opcional)
 */
export async function getBlogPosts(limit: number = 15, offset: number = 0) {
  if (!isSanityConfigured || !client) {
    return []
  }

  const query = `*[_type == "blogPost"] | order(publishedAt desc) [$offset...$end]{
    _id,
    title,
    slug,
    excerpt,
    category,
    "coverImage": coverImage{
      asset->{
        _id,
        url
      }
    },
    publishedAt,
    "author": author->{
      _id,
      name,
      "photo": photo{
        asset->{
          _id,
          url
        }
      }
    }
  }`

  const end = offset + limit
  return await client.fetch(query, { offset, end })
}

/**
 * Busca um post do blog pelo slug
 */
export async function getBlogPostBySlug(slug: string) {
  if (!isSanityConfigured || !client) {
    return null
  }

  const query = `*[_type == "blogPost" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    excerpt,
    content,
    category,
    "coverImage": coverImage{
      asset->{
        _id,
        url
      }
    },
    publishedAt,
    seo,
    "author": author->{
      _id,
      name,
      role,
      "photo": photo{
        asset->{
          _id,
          url
        }
      }
    }
  }`

  return await client.fetch(query, { slug })
}

const SERVICE_FIELDS = `
  _id,
  title,
  slug,
  description,
  icon,
  featured
`

export async function getServiceBySlug(slug: string) {
  if (!isSanityConfigured || !client) {
    return mockServices.find((service) => service.slug.current === slug) || null
  }

  const query = `*[_type == "service" && slug.current == $slug][0]{${SERVICE_FIELDS},
    "category": category->{
      _id,
      title,
      slug,
      description,
      icon
    }
  }`
  return client.fetch(query, {slug})
}

export async function getAllServiceSlugs() {
  if (!isSanityConfigured || !client) {
    return mockServices.map((service) => ({slug: service.slug.current}))
  }

  const query = `*[_type == "service"]{slug}`
  return client.fetch<{slug: {current: string}}[]>(query)
}

const UNIT_CARD_FIELDS = `
  _id,
  name,
  slug,
  phone,
  whatsapp,
  address,
  neighborhood,
  status,
  "image": coalesce(featuredImage.asset->url, photos[0].asset->url),
  "imageAlt": coalesce(featuredImage.alt, photos[0].alt)
`

const SERVICE_CARD_FIELDS = `
  _id,
  title,
  slug,
  description,
  icon,
  featured
`

const TESTIMONIAL_FIELDS = `
  _id,
  name,
  role,
  rating,
  text,
  publishedAt,
  "unit": unit->{_id, name, slug}
`

const BLOG_CARD_FIELDS = `
  _id,
  title,
  slug,
  excerpt,
  category,
  publishedAt,
  "coverImage": coverImage{
    "url": asset->url,
    alt
  },
  "author": author->{_id, name}
`

const PAGE_PROJECTION = `
  _id,
  title,
  path,
  seo{
    title,
    description,
    keywords,
    "ogImage": ogImage{
      "url": asset->url
    }
  },
  sections[]{
    ...,
    "slides": select(
      _type == "heroSection" => slides[]{
        "_key": _key,
        "url": image.asset->url,
        "alt": coalesce(alt, image.alt)
      }
    ),
    "cards": select(
      _type == "featureCardsSection" => cards[]{
        ...,
        "image": select(
          image.asset->{
            "url": url,
            "alt": coalesce(^.alt, alt)
          },
          null
        )
      }
    ),
    "images": select(
      _type == "gallerySection" => images[]{
        "_key": _key,
        "url": galleryImage.asset->url,
        "alt": galleryImage.alt,
        "caption": galleryImage.caption
      }
    ),
    "faq": select(
      _type == "faqSection" => faqs[]{question, answer}
    ),
    "unitsResolved": select(
      _type == "unitsSection" => select(
        mode == "selected" => units[]->{${UNIT_CARD_FIELDS}},
        mode == "all" => *[_type == "unit"]{${UNIT_CARD_FIELDS}}
      )
    ),
    "servicesResolved": select(
      _type == "servicesSection" => select(
        mode == "selected" => services[]->{${SERVICE_CARD_FIELDS}},
        mode == "featured" => *[_type == "service" && featured == true]{${SERVICE_CARD_FIELDS}},
        mode == "all" => *[_type == "service"]{${SERVICE_CARD_FIELDS}}
      )
    ),
    "testimonialsResolved": select(
      _type == "testimonialsSection" => select(
        mode == "manual" => testimonials[]->{${TESTIMONIAL_FIELDS}}
      )
    ),
    "postsResolved": select(
      _type == "blogPostsSection" => select(
        mode == "selected" => posts[]->{${BLOG_CARD_FIELDS}},
        mode == "latest" => *[_type == "blogPost"] | order(publishedAt desc)[0..coalesce(limit,3)]{${BLOG_CARD_FIELDS}}
      )
    )
  }
`

export async function getPageByPath(path: string) {
  if (!isSanityConfigured || !client) {
    return null
  }

  const query = `*[_type == "page" && path == $path && published != false][0]{${PAGE_PROJECTION}}`
  return client.fetch(query, {path})
}

export async function getAllPagePaths() {
  if (!isSanityConfigured || !client) {
    return []
  }

  const query = `*[_type == "page" && published != false]{path}`
  return client.fetch<{path: string}[]>(query)
}

/**
 * Busca a página de FAQ (singleton)
 */
export async function getFaqPage() {
  if (!isSanityConfigured || !client) {
    return null
  }

  const query = `*[_type == "faqPage"][0]{
    _id,
    title,
    hero,
    faqs,
    ctaSection,
    seo
  }`

  return await client.fetch(query)
}

/**
 * Busca a página de Contato (singleton)
 */
export async function getContactPage() {
  if (!isSanityConfigured || !client) {
    return null
  }

  const query = `*[_type == "contactPage"][0]{
    _id,
    title,
    hero,
    formLabels,
    unitsSection,
    phoneCtaSection,
    seo
  }`

  return await client.fetch(query)
}

/**
 * Busca a página de Depoimentos (singleton)
 */
export async function getTestimonialsPage() {
  if (!isSanityConfigured || !client) {
    return null
  }

  const query = `*[_type == "testimonialsPage"][0]{
    _id,
    title,
    hero,
    ratingSection,
    featuredSection,
    moreTestimonialsSection,
    seo
  }`

  return await client.fetch(query)
}

/**
 * Busca a página de Obrigado (singleton)
 */
export async function getThankYouPage() {
  if (!isSanityConfigured || !client) {
    return null
  }

  const query = `*[_type == "thankYouPage"][0]{
    _id,
    title,
    hero,
    badges,
    contactTime,
    backButton,
    quickActionsSection,
    exploreSection,
    seo
  }`

  return await client.fetch(query)
}

/**
 * Busca a Política de Privacidade (singleton)
 */
export async function getPrivacyPolicy() {
  if (!isSanityConfigured || !client) {
    return null
  }

  const query = `*[_type == "privacyPolicy"][0]{
    _id,
    title,
    lastUpdated,
    hero,
    highlights,
    sections,
    contactInfo,
    seo
  }`

  return await client.fetch(query)
}

/**
 * Busca os Termos de Uso (singleton)
 */
export async function getTermsOfService() {
  if (!isSanityConfigured || !client) {
    return null
  }

  const query = `*[_type == "termsOfService"][0]{
    _id,
    title,
    lastUpdated,
    hero,
    sections,
    contactInfo,
    seo
  }`

  return await client.fetch(query)
}

/**
 * Busca a página de Atividades (singleton)
 */
export async function getActivitiesPage() {
  if (!isSanityConfigured || !client) {
    return null
  }

  const query = `*[_type == "activitiesPage"][0]{
    _id,
    title,
    hero,
    activityTypes,
    diverseSection,
    cognitiveSection,
    seo
  }`

  return await client.fetch(query)
}

/**
 * Busca a página de Equipe (singleton)
 */
export async function getTeamPage() {
  if (!isSanityConfigured || !client) {
    return null
  }

  const query = `*[_type == "teamPage"][0]{
    _id,
    title,
    hero,
    specialists,
    presentationSection,
    differentialSection,
    seo
  }`

  return await client.fetch(query)
}

/**
 * Busca a página de Estrutura (singleton)
 */
export async function getStructurePage() {
  if (!isSanityConfigured || !client) {
    return null
  }

  const query = `*[_type == "structurePage"][0]{
    _id,
    title,
    hero,
    features,
    mainSection,
    highlightsSection,
    seo
  }`

  return await client.fetch(query)
}

/**
 * Busca a página Home (singleton)
 */
export async function getHomePage() {
  if (!isSanityConfigured || !client) {
    return null
  }

  const query = `*[_type == "homePage"][0]{
    _id,
    title,
    hero,
    aboutSection,
    featuresSection,
    unitsSection,
    servicesSection,
    testimonialsSection,
    blogSection,
    ctaSection,
    seo
  }`

  return await client.fetch(query)
}

/**
 * Busca a página Sobre (singleton)
 */
export async function getAboutPage() {
  if (!isSanityConfigured || !client) {
    return null
  }

  const query = `*[_type == "aboutPage"][0]{
    _id,
    title,
    hero,
    highlightsSection,
    experienceSection,
    gallerySection,
    seo
  }`

  return await client.fetch(query)
}

/**
 * Busca a página A Novo Lar (singleton)
 */
export async function getAboutNovoLarPage() {
  if (!isSanityConfigured || !client) {
    return null
  }

  const query = `*[_type == "aboutNovoLarPage"][0]{
    _id,
    title,
    hero,
    mainContent,
    timelineSection,
    valuesSection,
    seo
  }`

  return await client.fetch(query)
}

/**
 * Busca a página Fotos (singleton)
 */
export async function getPhotosPage() {
  if (!isSanityConfigured || !client) {
    return null
  }

  const query = `*[_type == "photosPage"][0]{
    _id,
    title,
    hero,
    galleries[]{
      "unit": unit->{_id, name, slug},
      photos[]{
        "url": asset->url,
        alt,
        caption,
        category
      }
    },
    seo
  }`

  return await client.fetch(query)
}

/**
 * Busca a página Localização (singleton)
 */
export async function getLocationPage() {
  if (!isSanityConfigured || !client) {
    return null
  }

  const query = `*[_type == "locationPage"][0]{
    _id,
    title,
    hero,
    introSection,
    mapSection,
    ctaSection,
    seo
  }`

  return await client.fetch(query)
}

/**
 * Busca a página Serviços Index (singleton)
 */
export async function getServicesIndexPage() {
  if (!isSanityConfigured || !client) {
    return null
  }

  const query = `*[_type == "servicesIndexPage"][0]{
    _id,
    title,
    hero,
    statsSection,
    supportSection,
    careProgramsSection,
    journeySection,
    unitsSection,
    contactSection,
    seo
  }`

  return await client.fetch(query)
}

/**
 * Busca a página Blog Index (singleton)
 */
export async function getBlogIndexPage() {
  if (!isSanityConfigured || !client) {
    return null
  }

  const query = `*[_type == "blogIndexPage"][0]{
    _id,
    title,
    hero,
    featuredSection,
    allPostsSection,
    seo
  }`

  return await client.fetch(query)
}

/**
 * Busca configurações do Header (SINGLETON)
 * Inclui: logo, topBar, mainNavigation com dropdowns, contactButtons, unitsDropdown
 * @cache 60 segundos
 */
export async function getHeaderConfig() {
  if (!isSanityConfigured || !client) {
    return null
  }

  const query = `*[_type == "siteSettings"][0]{
    "headerConfig": headerConfig->{
      _id,
      "logo": logo{
        asset->{
          _id,
          url
        }
      },
      showTopBar,
      topBarText,
      topBarLinks[]{
        label,
        href
      },
      topBarBusinessHours,
      mainNavigation[]{
        type,
        id,
        label,
        href,
        description,
        "serviceGroups": serviceGroups[]->{
          _id,
          title,
          slug,
          description,
          icon,
          "services": *[_type == "service" && references(^._id)]{
            _id,
            title,
            slug,
            description,
            icon
          }
        },
        customDropdownItems[]{
          label,
          href,
          description
        }
      },
      showPhoneButton,
      phoneButtonLabel,
      showWhatsappButton,
      whatsappButtonLabel,
      whatsappDefaultMessage,
      showUnitsDropdown,
      unitsDropdownLabel,
      mobileMenuTitle
    },
    globalPhone,
    globalWhatsapp,
    globalEmail
  }`

  try {
    return await client.fetch(query, {}, { next: { revalidate: 60 } })
  } catch (error) {
    console.error('Erro ao buscar configurações do header:', error)
    return null
  }
}

/**
 * Busca configurações do Footer (SINGLETON)
 * Inclui: logo, columns (links/contact/units/social), bottomSection
 * @cache 60 segundos
 */
export async function getFooterConfig() {
  if (!isSanityConfigured || !client) {
    return null
  }

  const query = `*[_type == "siteSettings"][0]{
    "footerConfig": footerConfig->{
      _id,
      "logo": logo{
        asset->{
          _id,
          url
        }
      },
      columns[]{
        title,
        type,
        links[]{
          label,
          href
        },
        showEmail,
        showPhone,
        showAddress,
        customAddress,
        showBusinessHours,
        businessHours,
        showAllUnits,
        "selectedUnits": selectedUnits[]->{
          _id,
          name,
          slug,
          phone,
          whatsapp,
          address,
          neighborhood,
          city
        },
        showUnitPhone,
        showUnitAddress,
        socialPlatforms,
        socialTitle,
        socialLayout
      },
      bottomSection{
        copyrightText,
        showYear,
        bottomLinks[]{
          label,
          href
        },
        showDeveloperCredit,
        developerName,
        developerUrl
      },
      backgroundColor,
      textColor,
      accentColor
    },
    globalPhone,
    globalWhatsapp,
    globalEmail,
    socialLinks,
    "allUnits": select(
      footerConfig->columns[type == "units" && showAllUnits == true] => *[_type == "unit"] | order(name asc){
        _id,
        name,
        slug,
        phone,
        whatsapp,
        address,
        neighborhood,
        city
      }
    )
  }`

  try {
    return await client.fetch(query, {}, { next: { revalidate: 60 } })
  } catch (error) {
    console.error('Erro ao buscar configurações do footer:', error)
    return null
  }
}

import { client, isSanityConfigured } from './client'
import { mockUnits, mockServices, mockTestimonials } from './mock-data'

/**
 * Busca uma unidade pelo slug
 */
export async function getUnitBySlug(slug: string) {
  const fallbackUnit =
    mockUnits.find((unit) => unit.slug.current === slug) ||
    mockUnits.find((unit) => unit.slug === slug) ||
    null

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
        url
      },
      alt
    },
    "photos": photos[]{
      asset->{
        _id,
        url
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
        url
      },
      alt
    },
    "photo": photos[0]{
      asset->{
        _id,
        url
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
 */
export async function getSiteSettings() {
  if (!isSanityConfigured || !client) {
    return null
  }

  const query = `*[_type == "siteSettings"][0]{
    _id,
    globalPhone,
    globalWhatsapp,
    globalEmail,
    socialLinks,
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
    }
  }`

  return await client.fetch(query)
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

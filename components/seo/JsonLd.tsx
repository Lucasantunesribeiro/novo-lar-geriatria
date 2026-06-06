import { type Thing, type WithContext } from 'schema-dts'
import { SITE_URL, toAbsoluteUrl } from '@/lib/seo/metadata'

interface JsonLdProps<T extends Thing> {
  data: WithContext<T>
}

export default function JsonLd<T extends Thing>({ data }: JsonLdProps<T>) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

// Schema para LocalBusiness (Unidades)
export function LocalBusinessSchema({
  name,
  address,
  phone,
  url,
  image,
  description,
  priceRange = '$$',
  latitude,
  longitude,
}: {
  name: string
  address: {
    streetAddress: string
    addressLocality: string
    addressRegion: string
    postalCode?: string
    addressCountry?: string
  }
  phone: string
  url: string
  image?: string[]
  description: string
  priceRange?: string
  latitude?: number
  longitude?: number
}) {
  const schema: WithContext<any> = {
    '@context': 'https://schema.org',
    '@type': 'MedicalClinic',
    name,
    description,
    url,
    telephone: phone,
    priceRange,
    address: {
      '@type': 'PostalAddress',
      ...address,
      addressCountry: address.addressCountry || 'BR',
    },
    ...(image && image.length > 0 && { image }),
    ...(latitude &&
      longitude && {
        geo: {
          '@type': 'GeoCoordinates',
          latitude,
          longitude,
        },
      }),
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
    medicalSpecialty: ['Geriatrics'],
  }

  return <JsonLd data={schema} />
}

// Schema para Website
export function WebSiteSchema({
  name = 'Novo Lar Geriatria',
  url = SITE_URL,
  description = 'Rede de clínicas geriátricas em Porto Alegre com cuidado especializado, equipe multidisciplinar e ambientes acolhedores.',
  searchUrl,
}: {
  name?: string
  url?: string
  description?: string
  searchUrl?: string
}) {
  const schema: WithContext<any> = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name,
    url,
    description,
    ...(searchUrl && {
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: `${searchUrl}?q={search_term_string}`,
        },
        'query-input': 'required name=search_term_string',
      },
    }),
  }

  return <JsonLd data={schema} />
}

// Schema para Organization
export function OrganizationSchema({
  name = 'Novo Lar Geriatria',
  url = SITE_URL,
  logo,
  description = 'Hospedagem assistida com qualidade e cuidado humanizado para idosos.',
  contactPhone,
  contactEmail,
  sameAs = [],
}: {
  name?: string
  url?: string
  logo?: string
  description?: string
  contactPhone?: string
  contactEmail?: string
  sameAs?: string[]
}) {
  const schema: WithContext<any> = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name,
    url,
    logo,
    description,
    ...(contactPhone && {
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: contactPhone,
        contactType: 'customer service',
        areaServed: 'BR',
        availableLanguage: 'Portuguese',
      },
    }),
    ...(contactEmail && { email: contactEmail }),
    ...(sameAs.length > 0 && { sameAs }),
  }

  return <JsonLd data={schema} />
}

// Schema para FAQPage
export function FAQPageSchema({
  faqs,
}: {
  faqs: Array<{ question: string; answer: string }>
}) {
  const schema: WithContext<any> = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return <JsonLd data={schema} />
}

// Schema para BreadcrumbList
export function BreadcrumbSchema({
  items,
}: {
  items: Array<{ name: string; url: string }>
}) {
  const schema: WithContext<any> = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => {
      let urlPath = item.url ? item.url.trim() : ''

      // Evita que URLs vazias em posições internas virem o SITE_URL raiz incorretamente.
      // Se for a Home (índice 0), a URL deve ser a raiz.
      // Se for o Blog (índice 1) e o nome for Blog, a URL correta é /blog.
      if (urlPath === '') {
        if (index === 0) {
          urlPath = '/'
        } else if (index === 1 && item.name.toLowerCase() === 'blog') {
          urlPath = '/blog'
        }
      }

      let absoluteUrl = urlPath
      if (urlPath !== '') {
        if (!urlPath.startsWith('http://') && !urlPath.startsWith('https://')) {
          absoluteUrl = toAbsoluteUrl(urlPath)
        }
      } else {
        absoluteUrl = SITE_URL
      }

      // Limpa barra final de URLs absolutas (ex: https://geriatrianovolar.com.br/ -> https://geriatrianovolar.com.br)
      // Mas sem mexer no protocolo (ex: http:// ou https://)
      if (absoluteUrl.endsWith('/') && !absoluteUrl.endsWith('://')) {
        absoluteUrl = absoluteUrl.slice(0, -1)
      }

      return {
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: absoluteUrl,
      }
    }),
  }

  return <JsonLd data={schema} />
}

// Schema para Service
export function ServiceSchema({
  name,
  description,
  provider,
  areaServed,
  url,
}: {
  name: string
  description: string
  provider?: string
  areaServed?: string
  url?: string
}) {
  const schema: WithContext<any> = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: {
      '@type': 'Organization',
      name: provider || 'Novo Lar Geriatria',
      url: SITE_URL,
    },
    areaServed: {
      '@type': 'City',
      name: areaServed || 'Porto Alegre',
      '@id': 'https://www.wikidata.org/wiki/Q40269',
    },
    serviceType: 'Geriatric Care',
    ...(url && { url }),
  }

  return <JsonLd data={schema} />
}

// Schema para BlogPosting (artigo)
export function ArticleSchema({
  title,
  description,
  url,
  imageUrl,
  datePublished,
  author,
}: {
  title: string
  description: string
  url: string
  imageUrl?: string
  datePublished: string
  author: string
}) {
  const baseUrl = SITE_URL
  const schema: WithContext<any> = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description,
    url,
    datePublished,
    author: {
      '@type': 'Person',
      name: author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Novo Lar Geriatria',
      url: baseUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/Novo-Lar-Logo-7.png`,
      },
    },
    ...(imageUrl && {
      image: {
        '@type': 'ImageObject',
        url: imageUrl.startsWith('http') ? imageUrl : `${baseUrl}${imageUrl}`,
      },
    }),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
  }

  return <JsonLd data={schema} />
}

// Schema para AggregateRating
export function AggregateRatingSchema({
  ratingValue,
  reviewCount,
  bestRating = 5,
  worstRating = 1,
}: {
  ratingValue: number
  reviewCount: number
  bestRating?: number
  worstRating?: number
}) {
  const schema: WithContext<any> = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Novo Lar Geriatria',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue,
      reviewCount,
      bestRating,
      worstRating,
    },
  }

  return <JsonLd data={schema} />
}

import { type Thing, type WithContext } from 'schema-dts'

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
  url = 'https://novolargeriatria.com.br',
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
  url = 'https://novolargeriatria.com.br',
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
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }

  return <JsonLd data={schema} />
}

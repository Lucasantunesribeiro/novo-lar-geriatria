interface LocalBusinessSchemaProps {
  name: string
  description: string
  address: string
  neighborhood: string
  city: string
  state: string
  postalCode?: string
  phone: string
  email?: string
  coordinates?: {
    lat: number
    lng: number
  }
  hours?: string
  googlePlaceId?: string
  image?: string
  url?: string
}

export default function LocalBusinessSchema({
  name,
  description,
  address,
  neighborhood,
  city,
  state,
  postalCode,
  phone,
  email,
  coordinates,
  hours,
  googlePlaceId,
  image,
  url,
}: LocalBusinessSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'NursingHome',
    name,
    description,
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${address}, ${neighborhood}`,
      addressLocality: city,
      addressRegion: state,
      postalCode: postalCode || '',
      addressCountry: 'BR',
    },
    telephone: phone,
    email: email || undefined,
    geo: coordinates
      ? {
          '@type': 'GeoCoordinates',
          latitude: coordinates.lat,
          longitude: coordinates.lng,
        }
      : undefined,
    openingHours: hours || 'Mo-Su 00:00-23:59',
    image: image || undefined,
    url: url || undefined,
    priceRange: '$$',
    aggregateRating: googlePlaceId
      ? {
          '@type': 'AggregateRating',
          ratingValue: '4.8',
          reviewCount: '50',
        }
      : undefined,
    medicalSpecialty: [
      'Geriatrics',
      'Nursing',
      'Physical Therapy',
      'Occupational Therapy',
      'Nutrition',
      'Psychology',
    ],
    additionalType: [
      'https://schema.org/ResidentialCare',
      'https://schema.org/MedicalOrganization',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Serviços de Cuidado Geriátrico',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Hospedagem Assistida 24h',
            description: 'Acompanhamento e cuidado integral com equipe multidisciplinar disponível 24 horas',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Fisioterapia',
            description: 'Fisioterapia especializada para reabilitação e manutenção da mobilidade',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Acompanhamento Médico Geriátrico',
            description: 'Consultas e acompanhamento médico especializado em geriatria',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Nutrição Especializada',
            description: 'Acompanhamento nutricional individualizado com cardápios adaptados',
          },
        },
      ],
    },
    areaServed: {
      '@type': 'City',
      name: 'Porto Alegre',
      '@id': 'https://www.wikidata.org/wiki/Q40269',
    },
    sameAs: googlePlaceId
      ? [`https://www.google.com/maps/place/?q=place_id:${googlePlaceId}`]
      : [],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema, null, 2),
      }}
    />
  )
}

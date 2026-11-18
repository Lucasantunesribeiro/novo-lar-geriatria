import { SITE_URL, toAbsoluteUrl } from '@/lib/seo/metadata'

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

// Mesmo identificador usado pelo OrganizationSchema do layout raiz: liga cada
// unidade à empresa no grafo do Google.
export const ORGANIZATION_ID = `${SITE_URL}/#organization`

// "(51) 2797.0901" -> "+55 51 2797-0901". Só reformata; nunca cria número.
function toInternationalPhone(phone: string): string | undefined {
  const digits = phone.replace(/\D/g, '')
  if (digits.length === 10 || digits.length === 11) {
    const ddd = digits.slice(0, 2)
    const local = digits.slice(2)
    return `+55 ${ddd} ${local.slice(0, -4)}-${local.slice(-4)}`
  }
  if (digits.length === 12 || digits.length === 13) {
    return toInternationalPhone(digits.slice(2))
  }
  return undefined
}

// O CMS guarda o horário como texto livre ("Atendimento 24 horas"), que o
// schema.org não entende. Só vira horário estruturado quando o texto diz 24h;
// qualquer outro valor fica de fora em vez de ser adivinhado.
function openingHoursFrom(hours?: string) {
  if (!hours || !/24\s*h/i.test(hours.replace(/horas?/i, 'h'))) {
    return undefined
  }

  return [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '00:00',
      closes: '23:59',
    },
  ]
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
  const mapUrl = googlePlaceId
    ? `https://www.google.com/maps/place/?q=place_id:${googlePlaceId}`
    : undefined

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'NursingHome',
    '@id': url ? `${url}#unidade` : undefined,
    name,
    description,
    parentOrganization: { '@id': ORGANIZATION_ID },
    address: {
      '@type': 'PostalAddress',
      streetAddress: neighborhood ? `${address}, ${neighborhood}` : address,
      addressLocality: city,
      addressRegion: state,
      postalCode: postalCode || undefined,
      addressCountry: 'BR',
    },
    telephone: toInternationalPhone(phone) || phone || undefined,
    email: email || undefined,
    geo: coordinates
      ? {
          '@type': 'GeoCoordinates',
          latitude: coordinates.lat,
          longitude: coordinates.lng,
        }
      : undefined,
    openingHoursSpecification: openingHoursFrom(hours),
    image: image ? toAbsoluteUrl(image) : undefined,
    url: url || undefined,
    hasMap: mapUrl,
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
    sameAs: mapUrl ? [mapUrl] : undefined,
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

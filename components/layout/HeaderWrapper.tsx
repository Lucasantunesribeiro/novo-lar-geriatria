import { getHeaderConfig } from '@/lib/sanity/queries'
import { getAllUnits } from '@/lib/sanity/queries'
import Header from './Header'
import { UNITS, COMPANY_CONTACT, SOCIAL_LINKS } from '@/lib/site-data'
import { SERVICE_MENU_GROUPS } from '@/lib/services-data'

type SanityUnit = {
  _id: string
  name: string
  slug: { current: string } | string
  phone?: string
  whatsapp?: string
  address?: string
  neighborhood?: string
  status?: string
  description?: string
}

/**
 * HeaderWrapper - Server Component
 * Busca dados do Sanity e repassa para Header (client component)
 */
export default async function HeaderWrapper() {
  // Buscar dados do Sanity (com fallback)
  const headerData = await getHeaderConfig()
  const sanityUnits = await getAllUnits()

  // Mapear unidades para formato esperado pelo Header
  const units = sanityUnits?.length > 0
    ? sanityUnits.map((unit: SanityUnit) => ({
        slug: typeof unit.slug === 'string' ? unit.slug : unit.slug?.current || '',
        name: unit.name || '',
        title: unit.name || '',
        address: unit.address || '',
        neighborhood: unit.neighborhood || '',
        phoneDisplay: unit.phone || COMPANY_CONTACT.centralPhoneDisplay,
        phoneDigits: unit.phone?.replace(/\D/g, '') || COMPANY_CONTACT.centralPhoneDigits,
        whatsapp: unit.whatsapp || COMPANY_CONTACT.whatsappDigits,
        group: 'moinhos' as const, // Simplificado - pode ser melhorado depois
      }))
    : UNITS

  // Contatos (usar Sanity se disponível, senão fallback)
  const companyContact = {
    centralPhoneDisplay: headerData?.globalPhone || COMPANY_CONTACT.centralPhoneDisplay,
    centralPhoneDigits: headerData?.globalPhone?.replace(/\D/g, '') || COMPANY_CONTACT.centralPhoneDigits,
    whatsappDigits: headerData?.globalWhatsapp?.replace(/\D/g, '') || COMPANY_CONTACT.whatsappDigits,
    email: headerData?.globalEmail || COMPANY_CONTACT.email,
    city: COMPANY_CONTACT.city,
    visitation: COMPANY_CONTACT.visitation,
  }

  // Top bar links (com fallback)
  const topBarLinks = headerData?.headerConfig?.topBarLinks || [
    { label: 'Tour e contato', href: '/sobre' },
    { label: 'Fotos', href: '/sobre/fotos' },
    { label: 'Notícias', href: '/blog' },
    { label: 'Fale Conosco', href: '/contato' },
  ]

  // Show top bar
  const showTopBar = headerData?.headerConfig?.showTopBar ?? true

  // Top bar text
  const topBarText = headerData?.headerConfig?.topBarText || 'Residencial Geriátrico em Porto Alegre - Novo Lar'

  // Top bar business hours
  const topBarBusinessHours = headerData?.headerConfig?.topBarBusinessHours || 'Atendimento Comercial 9h-19h · Equipe 24h'

  // Service menu groups (usar fallback por enquanto - integração completa virá depois)
  const serviceMenuGroups = SERVICE_MENU_GROUPS

  return (
    <Header
      units={units}
      companyContact={companyContact}
      topBarLinks={topBarLinks}
      showTopBar={showTopBar}
      topBarText={topBarText}
      topBarBusinessHours={topBarBusinessHours}
      serviceMenuGroups={serviceMenuGroups}
    />
  )
}

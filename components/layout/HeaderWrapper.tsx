import { getHeaderConfig } from '@/lib/sanity/queries'
import Header from './Header'

/**
 * HeaderWrapper - Server Component
 * Busca dados do Sanity e repassa para Header (client component)
 */
export default async function HeaderWrapper() {
  // Buscar dados do Sanity (com fallback)
  const headerData = await getHeaderConfig()

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

  // Phones from Sanity or fallback
  const phones = headerData?.headerConfig?.phones || [
    {
      label: headerData?.headerConfig?.phoneButtonLabel || '(51) 3346.7620',
      href: `tel:${headerData?.globalPhone?.replace(/\D/g, '') || '555133467620'}`,
    },
  ]

  const logoUrl = headerData?.headerConfig?.logo?.asset?.url || null
  const logoHeight = headerData?.headerConfig?.logoHeight || 48

  return (
    <Header
      topBarLinks={topBarLinks}
      showTopBar={showTopBar}
      topBarText={topBarText}
      topBarBusinessHours={topBarBusinessHours}
      phones={phones}
      logoUrl={logoUrl}
      logoHeight={logoHeight}
      showPhoneButton={headerData?.headerConfig?.showPhoneButton ?? true}
      showWhatsappButton={headerData?.headerConfig?.showWhatsappButton ?? true}
      whatsappButtonLabel={headerData?.headerConfig?.whatsappButtonLabel || 'WhatsApp'}
    />
  )
}

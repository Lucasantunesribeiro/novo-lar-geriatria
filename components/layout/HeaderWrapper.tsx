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

  return (
    <Header
      topBarLinks={topBarLinks}
      showTopBar={showTopBar}
      topBarText={topBarText}
      topBarBusinessHours={topBarBusinessHours}
    />
  )
}

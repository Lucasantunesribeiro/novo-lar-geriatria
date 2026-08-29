import { getTextosGlobais } from '@/lib/sanity/queries'

import CookieBanner, { type TextosDoAviso } from './CookieBanner'

/**
 * Busca os textos do aviso de cookies e repassa ao banner.
 *
 * Existe para o layout continuar sincrono: quem espera pelo Sanity e este
 * componente, nao a pagina inteira.
 */
export default async function CookieBannerWrapper() {
  const textos = (await getTextosGlobais()) as TextosDoAviso | null

  if (textos?.cookiesMostrar === false) {
    return null
  }

  return <CookieBanner textos={textos ?? undefined} />
}

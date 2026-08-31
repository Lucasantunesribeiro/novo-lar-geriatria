import { getHeaderConfig } from '@/lib/sanity/queries'
import { COMPANY_CONTACT } from '@/lib/site-data'
import { ou } from '@/lib/cms/estilo'
import Header, { NAV_ITEMS_PADRAO, UNITS_PADRAO } from './Header'

/**
 * HeaderWrapper — Server Component.
 *
 * Le o documento "Cabeçalho do site" no Sanity e repassa para o Header.
 * Todo campo vazio no Studio cai no valor que o site ja usava; sem documento
 * nenhum, o cabecalho fica identico ao que esta no ar hoje.
 */
export default async function HeaderWrapper() {
  const headerData = await getHeaderConfig()
  const cfg = headerData?.headerConfig

  // So o campo do proprio cabecalho manda aqui. Nao usamos o telefone geral de
  // "Dados da empresa": ele guarda o fixo antigo e trocaria o WhatsApp do botao.
  const whatsappDigits =
    ou(cfg?.whatsappNumber?.replace(/\D/g, '')) || COMPANY_CONTACT.whatsappDigits

  const mensagem = cfg?.whatsappDefaultMessage?.trim()
  const whatsappHref = mensagem
    ? `https://wa.me/${whatsappDigits}?text=${encodeURIComponent(mensagem)}`
    : `https://wa.me/${whatsappDigits}`

  // Telefone unico so quando alguem escreveu um no proprio cabecalho. NAO
  // usamos o `globalPhone` de "Dados da empresa": ele esta sempre preenchido,
  // entao cairia sempre aqui e o cabecalho nunca mostraria os dois telefones
  // das casas que o cliente pediu.
  const telefoneEscritoNoStudio = ou(cfg?.phoneButtonLabel)
  const telefoneUnico = telefoneEscritoNoStudio
    ? [
        {
          label: telefoneEscritoNoStudio,
          href: `tel:${
            (headerData?.globalPhone?.replace(/\D/g, '') as string | undefined) ||
            COMPANY_CONTACT.centralPhoneDigits
          }`,
        },
      ]
    : undefined

  return (
    <Header
      showTopBar={cfg?.showTopBar ?? true}
      topBarText={
        ou(cfg?.topBarText) || 'Residencial Geriátrico em Porto Alegre - Novo Lar'
      }
      topBarBusinessHours={
        ou(cfg?.topBarBusinessHours) || 'Atendimento Comercial 9h-19h · Equipe 24h'
      }
      topBarLinks={
        ou(cfg?.topBarLinks) || [
          { label: 'Tour e contato', href: '/sobre' },
          { label: 'Fotos', href: '/sobre/fotos' },
          { label: 'Notícias', href: '/blog' },
          { label: 'Fale Conosco', href: '/contato' },
        ]
      }
      navItems={ou(cfg?.mainNavigation) || NAV_ITEMS_PADRAO}
      showUnitsDropdown={cfg?.showUnitsDropdown ?? true}
      unitsDropdownLabel={ou(cfg?.unitsDropdownLabel) || 'Unidades'}
      unitsDropdownItems={ou(cfg?.unitsDropdownItems) || UNITS_PADRAO}
      phones={ou(cfg?.phones) || telefoneUnico}
      logoUrl={cfg?.logo?.asset?.url || null}
      logoHeight={ou(cfg?.logoHeight) || 68}
      logoAlt={ou(cfg?.logoAlt) || 'Novo Lar Geriatria'}
      showPhoneButton={cfg?.showPhoneButton ?? true}
      showWhatsappButton={cfg?.showWhatsappButton ?? true}
      whatsappButtonLabel={ou(cfg?.whatsappButtonLabel) || 'WhatsApp'}
      whatsappHref={whatsappHref}
      mobileMenuTitle={ou(cfg?.mobileMenuTitle) || 'Menu'}
      alturaBarra={ou(cfg?.alturaBarra)}
      estiloTopo={cfg?.estiloTopo}
      estiloMenu={cfg?.estiloMenu}
      estiloBotoes={cfg?.estiloBotoes}
      corFundoTopo={ou(cfg?.corFundoTopo)}
      corFundoMenu={ou(cfg?.corFundoMenu)}
    />
  )
}

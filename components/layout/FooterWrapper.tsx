import { getFooterConfig } from '@/lib/sanity/queries'
import FooterLight, { COLUNAS_PADRAO, DESCRICAO_PADRAO } from './FooterLight'
import { UNITS, COMPANY_CONTACT, SOCIAL_LINKS, getUnitPath } from '@/lib/site-data'
import { ou } from '@/lib/cms/estilo'

/**
 * FooterWrapper — Server Component.
 *
 * Le o documento "Rodapé do site" no Sanity e repassa para o FooterLight.
 * Campo vazio no Studio => o rodape fica exatamente como esta no ar hoje.
 */
export default async function FooterWrapper() {
  const footerData = await getFooterConfig()
  const cfg = footerData?.footerConfig

  // Correcoes de numero que ja existiam antes — mantidas iguais.
  let centralPhoneDisplay = footerData?.globalPhone || COMPANY_CONTACT.centralPhoneDisplay
  let centralPhoneDigits =
    footerData?.globalPhone?.replace(/\D/g, '') || COMPANY_CONTACT.centralPhoneDigits
  let whatsappDigits =
    footerData?.globalWhatsapp?.replace(/\D/g, '') || COMPANY_CONTACT.whatsappDigits

  if (centralPhoneDigits === '5133467620') {
    centralPhoneDisplay = '(51) 3376.9462'
    centralPhoneDigits = '5133769462'
  }

  if (
    whatsappDigits === '555133467620' ||
    whatsappDigits === '555133769462' ||
    whatsappDigits === '33467620' ||
    whatsappDigits === '33769462'
  ) {
    whatsappDigits = '5551920011523'
  }

  const companyContact = {
    centralPhoneDisplay,
    centralPhoneDigits,
    whatsappDigits,
    email: footerData?.globalEmail || COMPANY_CONTACT.email,
    city: COMPANY_CONTACT.city,
    visitation: COMPANY_CONTACT.visitation,
  }

  const socialLinks = {
    facebook:
      ou(cfg?.facebook, footerData?.socialLinks?.facebook) ||
      SOCIAL_LINKS.find((s) => s.icon === 'facebook')?.href,
    instagram:
      ou(cfg?.instagram, footerData?.socialLinks?.instagram) ||
      SOCIAL_LINKS.find((s) => s.icon === 'instagram')?.href,
  }

  // Unidades: o que o cliente cadastrou no rodape; senao, as unidades atuais.
  const unidadesPadrao = UNITS.map((unit) => ({
    label: unit.title,
    href: getUnitPath(unit.slug),
  }))

  return (
    <FooterLight
      companyContact={companyContact}
      socialLinks={socialLinks}
      colunas={ou(cfg?.colunas) || COLUNAS_PADRAO}
      unidades={ou(cfg?.linksUnidades) || unidadesPadrao}
      mostrarUnidades={cfg?.mostrarUnidades ?? true}
      tituloUnidades={ou(cfg?.tituloUnidades) || 'Unidades'}
      logoUrl={cfg?.logo?.asset?.url || null}
      logoAlt={
        ou(cfg?.logoAlt) || 'Novo Lar Geriatria - Residencial Geriátrico em Porto Alegre'
      }
      estiloLogo={cfg?.estiloLogo}
      descricao={ou(cfg?.descricao) || DESCRICAO_PADRAO}
      mostrarTelefone={cfg?.mostrarTelefone ?? true}
      telefoneTexto={ou(cfg?.telefoneTexto)}
      telefoneLink={ou(cfg?.telefoneLink)}
      mostrarEmail={cfg?.mostrarEmail ?? true}
      emailTexto={ou(cfg?.emailTexto)}
      textoCopyright={ou(cfg?.textoCopyright)}
      mostrarAno={cfg?.mostrarAno ?? true}
      estiloTitulos={cfg?.estiloTitulos}
      estiloLinks={cfg?.estiloLinks}
      estiloDescricao={cfg?.estiloDescricao}
      corDeFundo={ou(cfg?.corDeFundo)}
    />
  )
}

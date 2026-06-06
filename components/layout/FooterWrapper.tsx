import { getFooterConfig } from '@/lib/sanity/queries'
import FooterLight from './FooterLight'
import { UNITS, COMPANY_CONTACT, SOCIAL_LINKS } from '@/lib/site-data'
import type { UnitBasic } from '@/types/sanity'

/**
 * FooterWrapper - Server Component
 * Busca dados do Sanity e repassa para Footer (client component se necessário)
 */
export default async function FooterWrapper() {
  // Buscar dados do Sanity (com fallback)
  const footerData = await getFooterConfig()

  // Mapear unidades para formato esperado pelo Footer
  const units = footerData?.allUnits?.length > 0
    ? footerData.allUnits.map((unit: UnitBasic) => {
        let phoneDisplay = unit.phone || COMPANY_CONTACT.centralPhoneDisplay
        let phoneDigits = unit.phone?.replace(/\D/g, '') || COMPANY_CONTACT.centralPhoneDigits
        let whatsapp = unit.whatsapp || COMPANY_CONTACT.whatsappDigits

        if (phoneDigits === '5133467620') {
          phoneDisplay = '(51) 3376.9462'
          phoneDigits = '5133769462'
        }

        const cleanWhatsapp = whatsapp.replace(/\D/g, '')
        if (
          cleanWhatsapp === '555133467620' ||
          cleanWhatsapp === '555133769462' ||
          cleanWhatsapp === '33467620' ||
          cleanWhatsapp === '33769462'
        ) {
          whatsapp = '5551920011523'
        }

        return {
          slug: typeof unit.slug === 'string' ? unit.slug : unit.slug?.current || '',
          name: unit.name || '',
          title: unit.name || '',
          address: unit.address || '',
          neighborhood: unit.neighborhood || '',
          phoneDisplay,
          phoneDigits,
          whatsapp,
          group: 'moinhos' as const,
        }
      })
    : UNITS.map((unit) => {
        let phoneDisplay = unit.phoneDisplay
        let phoneDigits = unit.phoneDigits
        let whatsapp = unit.whatsapp

        if (phoneDigits === '5133467620') {
          phoneDisplay = '(51) 3376.9462'
          phoneDigits = '5133769462'
        }

        const cleanWhatsapp = whatsapp.replace(/\D/g, '')
        if (
          cleanWhatsapp === '555133467620' ||
          cleanWhatsapp === '555133769462' ||
          cleanWhatsapp === '33467620' ||
          cleanWhatsapp === '33769462'
        ) {
          whatsapp = '5551920011523'
        }

        return {
          ...unit,
          phoneDisplay,
          phoneDigits,
          whatsapp,
        }
      })

  // Contatos (usar Sanity se disponível, senão fallback)
  let centralPhoneDisplay = footerData?.globalPhone || COMPANY_CONTACT.centralPhoneDisplay
  let centralPhoneDigits = footerData?.globalPhone?.replace(/\D/g, '') || COMPANY_CONTACT.centralPhoneDigits
  let whatsappDigits = footerData?.globalWhatsapp?.replace(/\D/g, '') || COMPANY_CONTACT.whatsappDigits

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

  // Social links
  const socialLinks = footerData?.socialLinks || {
    facebook: SOCIAL_LINKS.find((s) => s.icon === 'facebook')?.href,
    instagram: SOCIAL_LINKS.find((s) => s.icon === 'instagram')?.href,
  }

  return (
    <FooterLight
      units={units}
      companyContact={companyContact}
      socialLinks={socialLinks}
    />
  )
}

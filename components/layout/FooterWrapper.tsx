import { getFooterConfig } from '@/lib/sanity/queries'
import Footer from './Footer'
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
    ? footerData.allUnits.map((unit: UnitBasic) => ({
        slug: typeof unit.slug === 'string' ? unit.slug : unit.slug?.current || '',
        name: unit.name || '',
        title: unit.name || '',
        address: unit.address || '',
        neighborhood: unit.neighborhood || '',
        phoneDisplay: unit.phone || COMPANY_CONTACT.centralPhoneDisplay,
        phoneDigits: unit.phone?.replace(/\D/g, '') || COMPANY_CONTACT.centralPhoneDigits,
        whatsapp: unit.whatsapp || COMPANY_CONTACT.whatsappDigits,
        group: 'moinhos' as const,
      }))
    : UNITS

  // Contatos (usar Sanity se disponível, senão fallback)
  const companyContact = {
    centralPhoneDisplay: footerData?.globalPhone || COMPANY_CONTACT.centralPhoneDisplay,
    centralPhoneDigits: footerData?.globalPhone?.replace(/\D/g, '') || COMPANY_CONTACT.centralPhoneDigits,
    whatsappDigits: footerData?.globalWhatsapp?.replace(/\D/g, '') || COMPANY_CONTACT.whatsappDigits,
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
    <Footer
      units={units}
      companyContact={companyContact}
      socialLinks={socialLinks}
    />
  )
}

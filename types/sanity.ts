/**
 * Types para Sanity CMS - Novo Lar Geriatria
 * Gerado para Header, Footer e SiteSettings
 */

// ============================================
// HEADER CONFIG TYPES
// ============================================

export type TopBarLink = {
  label: string
  href: string
}

export type ServiceCategory = {
  _id: string
  title: string
  slug: {current: string}
  description?: string
  icon?: string
  services: Service[]
}

export type Service = {
  _id: string
  title: string
  slug: {current: string}
  description?: string
  icon?: string
}

export type CustomDropdownItem = {
  label: string
  href: string
  description?: string
}

export type NavigationItem = {
  type: 'link' | 'servicesDropdown' | 'unitsDropdown' | 'customDropdown'
  id: string
  label: string
  href?: string
  description?: string
  serviceGroups?: ServiceCategory[]
  customDropdownItems?: CustomDropdownItem[]
}

export type HeaderConfigType = {
  _id: string
  logo?: {
    asset?: {
      _id: string
      url: string
    }
  }
  showTopBar?: boolean
  topBarText?: string
  topBarLinks?: TopBarLink[]
  topBarBusinessHours?: string
  mainNavigation?: NavigationItem[]
  showPhoneButton?: boolean
  phoneButtonLabel?: string
  showWhatsappButton?: boolean
  whatsappButtonLabel?: string
  whatsappDefaultMessage?: string
  showUnitsDropdown?: boolean
  unitsDropdownLabel?: string
  mobileMenuTitle?: string
}

export type HeaderData = {
  headerConfig?: HeaderConfigType
  globalPhone: string
  globalWhatsapp: string
  globalEmail: string
}

// ============================================
// FOOTER CONFIG TYPES
// ============================================

export type FooterLink = {
  label: string
  href: string
}

export type UnitBasic = {
  _id: string
  name: string
  slug: {current: string}
  phone?: string
  whatsapp?: string
  address?: string
  neighborhood?: string
  city?: string
}

export type FooterColumnBase = {
  title: string
  type: 'links' | 'contact' | 'units' | 'social'
}

export type FooterLinksColumn = FooterColumnBase & {
  type: 'links'
  links?: FooterLink[]
}

export type FooterContactColumn = FooterColumnBase & {
  type: 'contact'
  showEmail?: boolean
  showPhone?: boolean
  showAddress?: boolean
  customAddress?: string
  showBusinessHours?: boolean
  businessHours?: string
}

export type FooterUnitsColumn = FooterColumnBase & {
  type: 'units'
  showAllUnits?: boolean
  selectedUnits?: UnitBasic[]
  showUnitPhone?: boolean
  showUnitAddress?: boolean
}

export type FooterSocialColumn = FooterColumnBase & {
  type: 'social'
  socialPlatforms?: Array<'facebook' | 'instagram' | 'linkedin' | 'youtube' | 'twitter'>
  socialTitle?: string
  socialLayout?: 'horizontal' | 'vertical'
}

export type FooterColumn =
  | FooterLinksColumn
  | FooterContactColumn
  | FooterUnitsColumn
  | FooterSocialColumn

export type FooterBottomSection = {
  copyrightText: string
  showYear?: boolean
  bottomLinks?: FooterLink[]
  showDeveloperCredit?: boolean
  developerName?: string
  developerUrl?: string
}

export type FooterConfigType = {
  _id: string
  logo?: {
    asset?: {
      _id: string
      url: string
    }
  }
  columns?: FooterColumn[]
  bottomSection?: FooterBottomSection
  backgroundColor?: string
  textColor?: string
  accentColor?: string
}

export type SocialLinks = {
  facebook?: string
  instagram?: string
  linkedin?: string
  youtube?: string
  twitter?: string
}

export type FooterData = {
  footerConfig?: FooterConfigType
  globalPhone: string
  globalWhatsapp: string
  globalEmail: string
  socialLinks?: SocialLinks
  allUnits?: UnitBasic[]
}

// ============================================
// SITE SETTINGS TYPES
// ============================================

export type ContactInfo = {
  centralPhoneDisplay?: string
  centralPhoneDigits?: string
  whatsappDigits?: string
  visitation?: string
  city?: string
}

export type SiteSettingsType = {
  _id: string
  siteName: string
  siteUrl: string
  defaultMetaDescription?: string
  globalPhone: string
  globalWhatsapp: string
  globalEmail: string
  socialLinks?: SocialLinks
  topLinks?: FooterLink[]
  footerLinks?: Array<{
    title?: string
    links?: FooterLink[]
  }>
  contactInfo?: ContactInfo
  logo?: {
    asset?: {
      _id: string
      url: string
    }
  }
  favicon?: {
    asset?: {
      _id: string
      url: string
    }
  }
  defaultOgImage?: {
    asset?: {
      _id: string
      url: string
    }
  }
  googleAnalyticsId?: string
  googleTagManagerId?: string
  facebookPixelId?: string
}

// ============================================
// UTILITY TYPES
// ============================================

/**
 * Helper type para garantir que referências foram resolvidas
 */
export type Resolved<T> = T extends {_ref: string} ? never : T

/**
 * Helper type para campos opcionais de imagem
 */
export type SanityImageAsset = {
  asset?: {
    _id: string
    url: string
    originalFilename?: string
  }
  alt?: string
}

/**
 * Helper type para slugs
 */
export type SanitySlug = {
  current: string
  _type?: 'slug'
}

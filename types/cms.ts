export type CTAButton = {
  label: string
  href: string
  variant?: 'primary' | 'secondary' | 'ghost'
}

export type HeroSectionData = {
  _type: 'heroSection'
  _key: string
  variant?: 'highlight' | 'carousel'
  eyebrow?: string
  title?: string
  highlight?: string
  description?: string
  slides?: Array<{_key: string; url: string; alt?: string}>
  ctas?: CTAButton[]
  stats?: Array<{_key: string; label?: string; value?: string; description?: string}>
}

export type FeatureCardsSectionData = {
  _type: 'featureCardsSection'
  _key: string
  eyebrow?: string
  title?: string
  description?: string
  columns?: number
  cards?: Array<{
    _key: string
    title?: string
    description?: string
    icon?: string
    linkLabel?: string
    href?: string
    image?: {url?: string; alt?: string}
  }>
}

export type StatsSectionData = {
  _type: 'statsSection'
  _key: string
  eyebrow?: string
  title?: string
  description?: string
  stats?: Array<{_key: string; value?: string; label?: string; description?: string}>
}

export type RichTextSectionData = {
  _type: 'richTextSection'
  _key: string
  title?: string
  alignment?: 'left' | 'center'
  body?: any[]
}

export type UnitsSectionData = {
  _type: 'unitsSection'
  _key: string
  title?: string
  description?: string
  unitsResolved?: Array<{
    _id: string
    name: string
    slug: {current: string}
    phone?: string
    whatsapp?: string
    address?: string
    neighborhood?: string
    status?: string
    image?: string
    imageAlt?: string
  }>
}

export type ServicesSectionData = {
  _type: 'servicesSection'
  _key: string
  title?: string
  description?: string
  servicesResolved?: Array<{
    _id: string
    title: string
    slug: {current: string}
    description?: string
    icon?: string
    featured?: boolean
  }>
}

export type TestimonialsSectionData = {
  _type: 'testimonialsSection'
  _key: string
  title?: string
  description?: string
  mode?: 'manual' | 'google'
  testimonialsResolved?: Array<{
    _id: string
    name?: string
    role?: string
    text?: string
    rating?: number
  }>
  placeId?: string
}

export type GallerySectionData = {
  _type: 'gallerySection'
  _key: string
  title?: string
  description?: string
  layout?: 'collage' | 'grid' | 'carousel'
  images?: Array<{_key: string; url?: string; alt?: string; caption?: string}>
}

export type FaqSectionData = {
  _type: 'faqSection'
  _key: string
  title?: string
  description?: string
  faqs?: Array<{_key: string; question: string; answer: string}>
}

export type CtaSectionData = {
  _type: 'ctaSection'
  _key: string
  title: string
  description?: string
  style?: 'light' | 'dark' | 'gradient'
  ctas?: CTAButton[]
}

export type ContactSectionData = {
  _type: 'contactSection'
  _key: string
  title?: string
  description?: string
  showForm?: boolean
  contacts?: Array<{
    _key: string
    type?: 'phone' | 'whatsapp' | 'email' | 'address' | 'custom'
    label?: string
    value: string
    href?: string
    icon?: string
  }>
}

export type BlogPostsSectionData = {
  _type: 'blogPostsSection'
  _key: string
  title?: string
  description?: string
  postsResolved?: Array<{
    _id: string
    title: string
    slug: {current: string}
    excerpt?: string
    category?: string
    publishedAt?: string
    coverImage?: {url?: string; alt?: string}
    author?: {name?: string}
  }>
}

export type PageSection =
  | HeroSectionData
  | FeatureCardsSectionData
  | StatsSectionData
  | RichTextSectionData
  | UnitsSectionData
  | ServicesSectionData
  | TestimonialsSectionData
  | GallerySectionData
  | FaqSectionData
  | CtaSectionData
  | ContactSectionData
  | BlogPostsSectionData

export type PageDocument = {
  _id: string
  title: string
  path: string
  seo?: {
    title?: string
    description?: string
    keywords?: string[]
    ogImage?: {url?: string}
  }
  sections?: PageSection[]
}

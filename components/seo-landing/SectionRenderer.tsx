import { HeroSectionRenderer } from './sections/HeroSectionRenderer'
import { SeoHero } from './sections/SeoHero'
import { ChecklistSectionRenderer } from './sections/ChecklistSectionRenderer'
import { TwoColumnSectionRenderer } from './sections/TwoColumnSectionRenderer'
import { LocationNoticeRenderer } from './sections/LocationNoticeRenderer'
import { RelatedLinksRenderer } from './sections/RelatedLinksRenderer'
import { FaqSectionRenderer } from './sections/FaqSectionRenderer'
import { StatsSectionRenderer } from './sections/StatsSectionRenderer'
import { CardsSectionRenderer } from './sections/CardsSectionRenderer'
import { CtaSectionRenderer } from './sections/CtaSectionRenderer'
import { RichTextSectionRenderer } from './sections/RichTextSectionRenderer'
import { UnitsSectionRenderer } from './sections/UnitsSectionRenderer'
import { ServicesSectionRenderer } from './sections/ServicesSectionRenderer'
import { TestimonialsSectionRenderer } from './sections/TestimonialsSectionRenderer'
import { GallerySectionRenderer } from './sections/GallerySectionRenderer'
import { ContactSectionRenderer } from './sections/ContactSectionRenderer'
import { BlogPostsSectionRenderer } from './sections/BlogPostsSectionRenderer'

type AnySection = any

export function SectionRenderer({ section }: { section: Record<string, any> }) {
  const s = section as AnySection
  switch (section._type) {
    case 'heroSection':
      return <HeroSectionRenderer data={s} />
    case 'seoHeroSection':
      return <SeoHero data={s} />
    case 'richTextSection':
      return <RichTextSectionRenderer data={s} />
    case 'checklistSection':
      return <ChecklistSectionRenderer data={s} />
    case 'twoColumnSection':
      return <TwoColumnSectionRenderer data={s} />
    case 'locationNoticeSection':
      return <LocationNoticeRenderer data={s} />
    case 'relatedLinksSection':
      return <RelatedLinksRenderer data={s} />
    case 'faqSection':
      return <FaqSectionRenderer data={s} />
    case 'statsSection':
      return <StatsSectionRenderer data={s} />
    case 'unitsSection':
      return <UnitsSectionRenderer data={s} />
    case 'servicesSection':
      return <ServicesSectionRenderer data={s} />
    case 'testimonialsSection':
      return <TestimonialsSectionRenderer data={s} />
    case 'gallerySection':
      return <GallerySectionRenderer data={s} />
    case 'featureCardsSection':
      return <CardsSectionRenderer data={s} />
    case 'contactSection':
      return <ContactSectionRenderer data={s} />
    case 'blogPostsSection':
      return <BlogPostsSectionRenderer data={s} />
    case 'ctaSection':
      return <CtaSectionRenderer data={s} />
    default:
      return null
  }
}

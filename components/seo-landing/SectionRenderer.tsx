import { SeoHero } from './sections/SeoHero'
import { ChecklistSectionRenderer } from './sections/ChecklistSectionRenderer'
import { TwoColumnSectionRenderer } from './sections/TwoColumnSectionRenderer'
import { LocationNoticeRenderer } from './sections/LocationNoticeRenderer'
import { RelatedLinksRenderer } from './sections/RelatedLinksRenderer'
import { FaqSectionRenderer } from './sections/FaqSectionRenderer'
import { StatsSectionRenderer } from './sections/StatsSectionRenderer'
import { CardsSectionRenderer } from './sections/CardsSectionRenderer'
import { CtaSectionRenderer } from './sections/CtaSectionRenderer'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnySection = any

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function SectionRenderer({ section }: { section: Record<string, any> }) {
  const s = section as AnySection
  switch (section._type) {
    case 'seoHeroSection':
      return <SeoHero data={s} />
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
    case 'featureCardsSection':
      return <CardsSectionRenderer data={s} />
    case 'ctaSection':
      return <CtaSectionRenderer data={s} />
    default:
      return null
  }
}

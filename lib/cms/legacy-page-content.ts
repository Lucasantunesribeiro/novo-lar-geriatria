import type {
  BlogPostsSectionData,
  ContactSectionData,
  CtaSectionData,
  HeroSectionData,
  PageDocument,
  PageSection,
  RichTextSectionData,
  ServicesSectionData,
  TestimonialsSectionData,
  UnitsSectionData,
} from '@/types/cms'

type SectionType = PageSection['_type']
type SectionOf<T extends SectionType> = Extract<PageSection, { _type: T }>

function getSection<T extends SectionType>(page: PageDocument | null, type: T): SectionOf<T> | undefined {
  return page?.sections?.find(
    (section): section is SectionOf<T> => section._type === type
  )
}

export function getHeroSection(page: PageDocument | null): HeroSectionData | undefined {
  return getSection(page, 'heroSection')
}

export function getRichTextSection(page: PageDocument | null): RichTextSectionData | undefined {
  return getSection(page, 'richTextSection')
}

export function getUnitsSection(page: PageDocument | null): UnitsSectionData | undefined {
  return getSection(page, 'unitsSection')
}

export function getServicesSection(page: PageDocument | null): ServicesSectionData | undefined {
  return getSection(page, 'servicesSection')
}

export function getBlogPostsSection(page: PageDocument | null): BlogPostsSectionData | undefined {
  return getSection(page, 'blogPostsSection')
}

export function getTestimonialsSection(
  page: PageDocument | null
): TestimonialsSectionData | undefined {
  return getSection(page, 'testimonialsSection')
}

export function getContactSection(page: PageDocument | null): ContactSectionData | undefined {
  return getSection(page, 'contactSection')
}

export function getCtaSection(page: PageDocument | null): CtaSectionData | undefined {
  return getSection(page, 'ctaSection')
}

export function getPlainTextFromPortableText(body?: any[]): string {
  if (!Array.isArray(body)) {
    return ''
  }

  return body
    .map((block) => {
      if (!Array.isArray(block?.children)) {
        return ''
      }

      return block.children
        .map((child: { text?: string }) => child?.text ?? '')
        .join('')
        .trim()
    })
    .filter(Boolean)
    .join('\n\n')
}

export function formatBrazilianDate(date?: string): string {
  if (!date) {
    return ''
  }

  return new Date(date).toLocaleDateString('pt-BR')
}

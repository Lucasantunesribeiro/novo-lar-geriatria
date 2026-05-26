import type { Metadata } from 'next'

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://novo-lar-geriatria.netlify.app'

export function toAbsoluteUrl(path: string = '/') {
  return new URL(path, SITE_URL).toString()
}

export function withCanonicalPath(metadata: Metadata, path: string): Metadata {
  const canonical = toAbsoluteUrl(path)

  return {
    ...metadata,
    alternates: {
      ...metadata.alternates,
      canonical,
    },
    openGraph: {
      ...metadata.openGraph,
      url: canonical,
    },
  }
}

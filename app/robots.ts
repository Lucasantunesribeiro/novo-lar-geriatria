import { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/seo/metadata'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = SITE_URL

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/admin/', '/obrigado'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/', '/_next/', '/admin/', '/obrigado'],
        crawlDelay: 0,
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/api/', '/_next/', '/admin/', '/obrigado'],
        crawlDelay: 0,
      },
      {
        userAgent: 'Googlebot-Image',
        allow: '/',
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}

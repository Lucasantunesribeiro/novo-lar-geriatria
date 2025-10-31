'use client'

import Script from 'next/script'
import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

export default function GoogleAnalytics({ measurementId }: { measurementId?: string }) {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const GA_MEASUREMENT_ID = measurementId || process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

  useEffect(() => {
    if (!GA_MEASUREMENT_ID) return

    // Track page views
    const url = pathname + searchParams.toString()

    ;(window as any).gtag?.('config', GA_MEASUREMENT_ID, {
      page_path: url,
    })

    // Initialize dataLayer for custom events
    ;(window as any).dataLayer = (window as any).dataLayer || []
  }, [pathname, searchParams, GA_MEASUREMENT_ID])

  if (!GA_MEASUREMENT_ID) {
    return null
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_path: window.location.pathname,
            send_page_view: true
          });
        `}
      </Script>
    </>
  )
}

'use client'

import { useEffect, useRef } from 'react'

interface ViewTrackerProps {
  slug: string
}

export default function ViewTracker({ slug }: ViewTrackerProps) {
  const hasTracked = useRef(false)

  useEffect(() => {
    // Evita contar duas vezes no React Strict Mode
    if (hasTracked.current) return
    hasTracked.current = true

    // Dispara a chamada imperceptível em background para somar a visualização local no Sanity
    fetch('/api/views', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ slug }),
    }).catch(err => console.error('Silent view check failed:', err))
  }, [slug])

  return null // Renderiza absolutamente nada, apenas faz o tracking
}

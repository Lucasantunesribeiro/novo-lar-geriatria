'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

interface LightboxProps {
  images: string[]
  currentIndex: number
  onClose: () => void
  onNext: () => void
  onPrevious: () => void
  title?: string
}

export default function Lightbox({
  images,
  currentIndex,
  onClose,
  onNext,
  onPrevious,
  title,
}: LightboxProps) {
  // Fechar com ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onNext()
      if (e.key === 'ArrowLeft') onPrevious()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose, onNext, onPrevious])

  // Prevenir scroll do body
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Botão Fechar */}
      <button
        onClick={onClose}
        className="absolute right-4 top-4 z-10 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20"
        aria-label="Fechar"
      >
        <X className="h-6 w-6" />
      </button>

      {/* Botão Anterior */}
      {images.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation()
            onPrevious()
          }}
          className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20 disabled:opacity-50"
          disabled={currentIndex === 0}
          aria-label="Foto anterior"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
      )}

      {/* Imagem */}
      <div
        className="relative flex h-[85vh] w-full max-w-7xl items-center justify-center px-16"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-full w-full">
          <Image
            src={images[currentIndex]}
            alt={title || 'Foto da galeria'}
            fill
            className="object-contain"
            sizes="100vw"
            quality={95}
            priority
          />
        </div>

        {/* Info */}
        {title && (
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
            <p className="text-center text-white">{title}</p>
            <p className="mt-1 text-center text-sm text-white/70">
              {currentIndex + 1} / {images.length}
            </p>
          </div>
        )}
      </div>

      {/* Botão Próximo */}
      {images.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation()
            onNext()
          }}
          className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20 disabled:opacity-50"
          disabled={currentIndex === images.length - 1}
          aria-label="Próxima foto"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      )}

      {/* Contador Mobile */}
      <div className="absolute bottom-4 left-1/2 z-10 -translate-x-1/2 rounded-full bg-black/60 px-4 py-2 text-sm text-white md:hidden">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  )
}

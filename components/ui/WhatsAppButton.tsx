'use client'

import { MessageCircle } from 'lucide-react'

interface WhatsAppButtonProps {
  phoneNumber: string
  message?: string
  ariaLabel?: string
}

export default function WhatsAppButton({
  phoneNumber,
  message = 'Olá! Gostaria de mais informações sobre a Novo Lar Geriatria.',
  ariaLabel = 'Falar no WhatsApp',
}: WhatsAppButtonProps) {
  const encodedMessage = encodeURIComponent(message)
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`

  const handleClick = () => {
    // Analytics event
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: 'click_whatsapp',
        button_location: 'floating',
        phone_number: phoneNumber,
      })
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-2">
      {/* Texto acima */}
      <span className="text-sm font-semibold text-gray-700 bg-white px-3 py-1.5 rounded-full shadow-lg whitespace-nowrap">
        Fale por WhatsApp
      </span>

      {/* Botão WhatsApp */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        aria-label={ariaLabel}
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-[#22c55e] focus:outline-none focus:ring-4 focus:ring-[#25D366]/50 lg:h-16 lg:w-16"
        style={{
          boxShadow: '0 8px 24px rgba(37, 211, 102, 0.4)',
        }}
      >
        <MessageCircle className="h-7 w-7 lg:h-8 lg:w-8" />

        {/* Pulse animation */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></span>
      </a>
    </div>
  )
}

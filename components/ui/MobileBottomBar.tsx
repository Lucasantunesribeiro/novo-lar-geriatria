'use client'

import { MessageCircle, Phone } from 'lucide-react'

interface MobileBottomBarProps {
  phoneNumber: string
  phoneDisplay: string
  whatsappNumber: string
}

export default function MobileBottomBar({
  phoneNumber,
  phoneDisplay,
  whatsappNumber,
}: MobileBottomBarProps) {
  const handlePhoneClick = () => {
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: 'click_tel',
        button_location: 'mobile_bottom_bar',
        phone_number: phoneNumber,
      })
    }
  }

  const handleWhatsAppClick = () => {
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: 'click_whatsapp',
        button_location: 'mobile_bottom_bar',
        phone_number: whatsappNumber,
      })
    }
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 shadow-2xl lg:hidden">
      <div className="grid grid-cols-2 gap-2 bg-gray-100 px-2 py-2">
        {/* Ligar */}
        <a
          href={`tel:${phoneNumber}`}
          onClick={handlePhoneClick}
          className="group flex flex-col items-center justify-center gap-1.5 bg-white px-3 py-3.5 transition-colors hover:bg-[#2C3E6B]/5 active:bg-[#2C3E6B]/10"
          aria-label={`Ligar para ${phoneDisplay}`}
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2C3E6B]/10 transition-all group-hover:bg-[#2C3E6B]/20 group-hover:scale-110">
            <Phone className="h-5 w-5 text-[#2C3E6B]" />
          </div>
          <span className="text-xs font-semibold text-[#2C3E6B]">Ligar</span>
        </a>

        {/* WhatsApp */}
        <a
          href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Olá! Gostaria de mais informações sobre a Novo Lar Geriatria.')}`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleWhatsAppClick}
          className="group flex flex-col items-center justify-center gap-1.5 bg-white px-3 py-3.5 transition-colors hover:bg-[#25D366]/5 active:bg-[#25D366]/10"
          aria-label="Falar no WhatsApp"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366]/10 transition-all group-hover:bg-[#25D366]/20 group-hover:scale-110">
            <MessageCircle className="h-5 w-5 text-[#128C7E]" aria-hidden="true" />
          </div>
          <span className="text-xs font-semibold text-[#128C7E]">WhatsApp</span>
        </a>
      </div>
    </div>
  )
}

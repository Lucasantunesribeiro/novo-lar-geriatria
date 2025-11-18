'use client'

import Link from 'next/link'
import { MapPin, CheckCircle2, Phone, MessageCircle } from 'lucide-react'

const UNITS_DATA = [
  {
    id: 'moinhos-luciana',
    title: 'Moinhos de Vento',
    subtitle: 'Luciana de Abreu',
    address: 'Rua Luciana de Abreu, 231 - Bairro Moinhos de Vento',
    differential: 'Estrutura premium com jardim interno',
    phone: '+555133467668',
    whatsapp: '5551933467668',
    unitName: 'Moinhos de Vento - Luciana de Abreu',
  },
  {
    id: 'passo-dareia',
    title: 'Passo d\'Areia',
    subtitle: null,
    address: 'Rua Paquetá Oliveira Neto, 770 - Bairro Passo D\'Areia',
    differential: 'Ampla área de convivência e fisioterapia',
    phone: '+555133467668',
    whatsapp: '5551933467668',
    unitName: 'Passo d\'Areia',
  },
  {
    id: 'moinhos-barao',
    title: 'Moinhos de Vento',
    subtitle: 'Barão de Santo Ângelo',
    address: 'Rua Barão de Santo Ângelo, 456 - Bairro Moinhos de Vento',
    differential: 'Localização privilegiada e quartos individuais',
    phone: '+555133467668',
    whatsapp: '5551933467668',
    unitName: 'Moinhos de Vento - Barão de Santo Ângelo',
  },
]

export default function UnitsSection() {
  const handleCallClick = (unitName: string) => {
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: 'call_click',
        unit_name: unitName,
        device: window.innerWidth < 768 ? 'mobile' : 'desktop',
      })
    }
  }

  const handleWhatsAppClick = (unitName: string) => {
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: 'whatsapp_click',
        unit_name: unitName,
        device: window.innerWidth < 768 ? 'mobile' : 'desktop',
      })
    }
  }

  return (
    <section id="unidades" aria-label="Nossas Unidades" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#2C3E6B] mb-4">
            Nossas Unidades
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Escolha a unidade mais próxima e conheça nossa estrutura completa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {UNITS_DATA.map((unit) => (
            <article
              key={unit.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col h-full"
            >
              <div className="aspect-[16/10] overflow-hidden relative">
                <div className="w-full h-full bg-gradient-to-br from-gray-100 via-gray-50 to-white" />
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  <span className="text-xs font-semibold text-[#4a4aac]">Visitas Diárias</span>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-bold text-xl text-[#2C3E6B] mb-1">{unit.title}</h3>
                {unit.subtitle && <p className="text-base text-gray-600">{unit.subtitle}</p>}

                <div className="mt-4 mb-3 flex items-start gap-2">
                  <MapPin className="w-[18px] h-[18px] text-[#4a4aac] flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-600 leading-relaxed">{unit.address}</p>
                </div>

                <div className="mb-6 flex items-center gap-2">
                  <CheckCircle2 className="w-[18px] h-[18px] text-green-600" />
                  <p className="text-sm text-gray-700 font-medium">{unit.differential}</p>
                </div>

                <div className="mt-auto pt-4 border-t border-gray-100 grid grid-cols-2 gap-3">
                  <Link
                    href={`tel:${unit.phone}`}
                    className="flex items-center justify-center py-2.5 border border-[#4a4aac] text-[#4a4aac] rounded-lg hover:bg-[#4a4aac] hover:text-white transition-colors"
                    aria-label={`Ligar para unidade ${unit.unitName}`}
                    onClick={() => handleCallClick(unit.unitName)}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Ligar
                  </Link>

                  <Link
                    href={`https://wa.me/${unit.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center py-2.5 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
                    aria-label={`WhatsApp unidade ${unit.unitName}`}
                    onClick={() => handleWhatsAppClick(unit.unitName)}
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

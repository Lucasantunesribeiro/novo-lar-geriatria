'use client'

import Link from 'next/link'
import { CheckCircle, Home, Calendar, MapPin } from 'lucide-react'
import { getUnitBySlug } from '@/lib/site-data'
import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

export default function ObrigadoContentClient() {
  const searchParams = useSearchParams()
  const unitSlug = searchParams.get('unit')
  const contactName = searchParams.get('nome')

  const selectedUnit = unitSlug && unitSlug !== 'nao-sei' ? getUnitBySlug(unitSlug) : null

  // Track conversion
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Google Analytics 4 event
      ;(window as any).dataLayer?.push({
        event: 'form_submit_success',
        form_type: 'contact',
        unit_slug: unitSlug || 'general',
        contact_name: contactName || 'unknown',
        page_path: '/obrigado',
      })

      // Google Ads Conversion (se configurado)
      ;(window as any).gtag?.('event', 'conversion', {
        send_to: 'AW-CONVERSION_ID/CONVERSION_LABEL', // Substituir pelos valores reais
        value: 1.0,
        currency: 'BRL',
      })

      // Facebook Pixel (se configurado)
      ;(window as any).fbq?.('track', 'Lead', {
        content_name: selectedUnit ? selectedUnit.title : 'Novo Lar Geriatria',
        content_category: 'Contact Form',
      })
    }
  }, [unitSlug, contactName, selectedUnit])

  return (
    <section className="py-24 bg-gradient-to-br from-[#2C3E6B] to-[#2E7B7F]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center text-white">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-white/10 rounded-full mb-8 backdrop-blur-sm">
            <CheckCircle className="w-16 h-16 text-[#8B6914]" />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Mensagem Enviada com Sucesso!
          </h1>

          <p className="text-xl text-gray-100 mb-8">
            Obrigado por entrar em contato conosco. Recebemos sua mensagem e nossa equipe
            entrará em contato em breve.
          </p>

          {selectedUnit && (
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-4">
              <div className="flex items-center justify-center gap-3 text-[#8B6914] mb-3">
                <MapPin className="w-6 h-6" />
                <h3 className="text-xl font-semibold">Unidade Selecionada</h3>
              </div>
              <p className="text-gray-100 font-semibold mb-2">{selectedUnit.title}</p>
              <p className="text-gray-200 text-sm">{selectedUnit.address}</p>
              <div className="flex gap-4 justify-center mt-4">
                <a
                  href={`tel:${selectedUnit.phoneDigits}`}
                  className="text-white hover:text-[#8B6914] transition"
                >
                  {selectedUnit.phoneDisplay}
                </a>
                <span className="text-gray-400">|</span>
                <a
                  href={`https://wa.me/${selectedUnit.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#8B6914] transition"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          )}

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8">
            <div className="flex items-center justify-center gap-3 text-[#8B6914] mb-3">
              <Calendar className="w-6 h-6" />
              <h3 className="text-xl font-semibold">Próximos Passos</h3>
            </div>
            <p className="text-gray-100">
              Entraremos em contato dentro de <strong>24 horas úteis</strong> para esclarecer
              suas dúvidas e, se desejar, agendar uma visita {selectedUnit ? `à unidade ${selectedUnit.name}` : 'à unidade de sua preferência'}.
            </p>
          </div>

          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-[#8B6914] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#8B6914] transition text-lg"
          >
            <Home className="w-5 h-5" />
            Voltar para Home
          </Link>
        </div>
      </div>
    </section>
  )
}

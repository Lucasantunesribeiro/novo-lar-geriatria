'use client'

import Link from 'next/link'
import { CheckCircle, Home, Phone, MessageSquare, Calendar, ArrowRight, Building2, HeartHandshake, FileText, MapPin } from 'lucide-react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { COMPANY_CONTACT, UNITS, getUnitBySlug } from '@/lib/site-data'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

function ObrigadoContent() {
  const searchParams = useSearchParams()
  const unitSlug = searchParams.get('unit')
  const contactName = searchParams.get('nome')

  const selectedUnit = unitSlug && unitSlug !== 'nao-sei' ? getUnitBySlug(unitSlug) : null

  // Track conversion
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

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Success Section */}
      <section className="py-24 bg-gradient-to-br from-[#2C3E6B] to-[#4A9B9F]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-white/10 rounded-full mb-8 backdrop-blur-sm">
              <CheckCircle className="w-16 h-16 text-[#C49943]" />
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
                <div className="flex items-center justify-center gap-3 text-[#C49943] mb-3">
                  <MapPin className="w-6 h-6" />
                  <h3 className="text-xl font-semibold">Unidade Selecionada</h3>
                </div>
                <p className="text-gray-100 font-semibold mb-2">{selectedUnit.title}</p>
                <p className="text-gray-200 text-sm">{selectedUnit.address}</p>
                <div className="flex gap-4 justify-center mt-4">
                  <a
                    href={`tel:${selectedUnit.phoneDigits}`}
                    className="text-white hover:text-[#C49943] transition"
                  >
                    {selectedUnit.phoneDisplay}
                  </a>
                  <span className="text-gray-400">|</span>
                  <a
                    href={`https://wa.me/${selectedUnit.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#C49943] transition"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            )}

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8">
              <div className="flex items-center justify-center gap-3 text-[#C49943] mb-3">
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
              className="inline-flex items-center gap-2 bg-[#C49943] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#c49943] transition text-lg"
            >
              <Home className="w-5 h-5" />
              Voltar para Home
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-[#2C3E6B] text-center mb-4">
              Precisa de Atendimento Imediato?
            </h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Não precisa esperar! Entre em contato agora mesmo por telefone ou WhatsApp
              para esclarecimento imediato de dúvidas.
            </p>

            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <a
                href={`tel:${COMPANY_CONTACT.centralPhoneDigits}`}
                className="bg-white border-2 border-[#2C3E6B] rounded-lg p-6 hover:shadow-lg transition group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-[#2C3E6B] rounded-full flex items-center justify-center group-hover:scale-110 transition">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#2C3E6B] mb-1">Ligar Agora</h3>
                    <p className="text-gray-600 text-sm">(51) 3346.7620</p>
                  </div>
                </div>
              </a>

              <a
                href={`https://wa.me/${COMPANY_CONTACT.whatsappDigits}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border-2 border-[#4A9B9F] rounded-lg p-6 hover:shadow-lg transition group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-[#4A9B9F] rounded-full flex items-center justify-center group-hover:scale-110 transition">
                    <MessageSquare className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#4A9B9F] mb-1">WhatsApp</h3>
                    <p className="text-gray-600 text-sm">Chat online</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Explore More */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-[#2C3E6B] text-center mb-4">
              Enquanto Aguarda, Conheça Mais
            </h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Explore mais sobre nossas unidades, serviços e depoimentos de familiares.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <Link
                href="/#unidades"
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition group"
              >
                <div className="w-12 h-12 bg-[#2C3E6B] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#2C3E6B] mb-2">Nossas Unidades</h3>
                <p className="text-gray-600 mb-4">
                  Conheça nossa estrutura e diferenciais em cada uma das 3 unidades.
                </p>
                <div className="flex items-center text-[#C49943] font-semibold group-hover:gap-3 transition-all">
                  Explorar Unidades
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </Link>

              <Link
                href="/servicos"
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition group"
              >
                <div className="w-12 h-12 bg-[#4A9B9F] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition">
                  <HeartHandshake className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#2C3E6B] mb-2">Serviços</h3>
                <p className="text-gray-600 mb-4">
                  Descubra todos os cuidados e serviços que oferecemos aos nossos residentes.
                </p>
                <div className="flex items-center text-[#C49943] font-semibold group-hover:gap-3 transition-all">
                  Ver Serviços
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </Link>

              <Link
                href="/blog"
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition group"
              >
                <div className="w-12 h-12 bg-[#C49943] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#2C3E6B] mb-2">Blog</h3>
                <p className="text-gray-600 mb-4">
                  Leia artigos sobre cuidados com idosos e dicas de saúde e bem-estar.
                </p>
                <div className="flex items-center text-[#C49943] font-semibold group-hover:gap-3 transition-all">
                  Ler Artigos
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-[#2C3E6B] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Visite Nossas Instalações</h2>
            <p className="text-gray-200 mb-8">
              Agende uma visita sem compromisso e conheça pessoalmente nossa estrutura,
              equipe e o cuidado que oferecemos.
            </p>
            <Link
              href="/contato"
              className="inline-flex items-center gap-2 bg-[#C49943] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#c49943] transition"
            >
              <Calendar className="w-5 h-5" />
              Agendar Visita
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default function ObrigadoPage() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <ObrigadoContent />
    </Suspense>
  )
}

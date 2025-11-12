import Link from 'next/link'
import { Phone, MessageSquare, ArrowRight, Building2, HeartHandshake, FileText } from 'lucide-react'
import HeaderWrapper from '@/components/layout/HeaderWrapper'
import FooterWrapper from '@/components/layout/FooterWrapper'
import GoogleReviews from '@/components/sections/GoogleReviews'
import { COMPANY_CONTACT } from '@/lib/site-data'
import { Suspense } from 'react'
import ObrigadoContentClient from '@/components/sections/ObrigadoContentClient'

export default function ObrigadoPage() {
  return (
    <div className="min-h-screen bg-white">
      <HeaderWrapper />

      {/* Success Section - Client Component com tracking e params */}
      <Suspense fallback={<div className="py-24 bg-gradient-to-br from-[#2C3E6B] to-[#2E7B7F] text-white text-center">Carregando...</div>}>
        <ObrigadoContentClient />
      </Suspense>

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
                className="bg-white border-2 border-[#2E7B7F] rounded-lg p-6 hover:shadow-lg transition group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-[#2E7B7F] rounded-full flex items-center justify-center group-hover:scale-110 transition">
                    <MessageSquare className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#2E7B7F] mb-1">WhatsApp</h3>
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
                <div className="flex items-center text-[#8B6914] font-semibold group-hover:gap-3 transition-all">
                  Explorar Unidades
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </Link>

              <Link
                href="/servicos"
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition group"
              >
                <div className="w-12 h-12 bg-[#2E7B7F] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition">
                  <HeartHandshake className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#2C3E6B] mb-2">Serviços</h3>
                <p className="text-gray-600 mb-4">
                  Descubra todos os cuidados e serviços que oferecemos aos nossos residentes.
                </p>
                <div className="flex items-center text-[#8B6914] font-semibold group-hover:gap-3 transition-all">
                  Ver Serviços
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </Link>

              <Link
                href="/blog"
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition group"
              >
                <div className="w-12 h-12 bg-[#8B6914] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#2C3E6B] mb-2">Blog</h3>
                <p className="text-gray-600 mb-4">
                  Leia artigos sobre cuidados com idosos e dicas de saúde e bem-estar.
                </p>
                <div className="flex items-center text-[#8B6914] font-semibold group-hover:gap-3 transition-all">
                  Ler Artigos
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Avaliações do Google */}
      <GoogleReviews />

      <FooterWrapper />
    </div>
  )
}





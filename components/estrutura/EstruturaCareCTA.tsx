'use client'

import { Phone, MessageCircle, Calendar, ArrowRight, Sparkles } from 'lucide-react'
import { COMPANY_CONTACT } from '@/lib/site-data'
import Link from 'next/link'

export default function EstruturaCareCTA() {
  return (
    <section className="py-20 px-8 md:px-24 lg:px-36">
      <div className="max-w-[1156px] mx-auto">
        <div
          className="flex flex-col items-center gap-10 p-10 rounded-3xl"
          style={{
            background: 'linear-gradient(135deg, #102041 0%, #1D3364 50%, #2E7B7F 100%)',
            boxShadow: '0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 8px 10px -6px rgba(0, 0, 0, 0.1)',
          }}
        >
          {/* Header */}
          <div className="flex flex-col items-center gap-4 text-center max-w-[672px]">
            <div className="flex items-center px-4 py-2 gap-2 bg-white/10 rounded-full">
              <Sparkles className="w-4 h-4 text-white/80" />
              <span className="text-white/80 font-bold text-xs tracking-[3.6px] uppercase">
                Atendimento próximo
              </span>
            </div>

            <h2 className="text-white font-bold text-3xl md:text-4xl leading-tight">
              Estamos prontos para planejar a melhor solução para a sua família
            </h2>

            <p className="text-white/80 text-base leading-6">
              Escolha o canal que preferir para falar com nossa equipe. Responderemos rapidamente para orientar sobre vagas, documentação, valores e visitas.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-3 gap-6 w-full">
            {/* Card 1: Central */}
            <a
              href={`tel:${COMPANY_CONTACT.centralPhoneDigits}`}
              className="flex flex-col p-6 bg-white/10 border border-white/20 rounded-2xl hover:bg-white/15 transition-colors"
            >
              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center bg-white/15 rounded-2xl mb-5">
                <Phone className="w-6 h-6 text-white" />
              </div>

              {/* Title */}
              <h3 className="text-white font-bold text-xl leading-7 mb-3">
                Central Novo Lar
              </h3>

              {/* Description */}
              <p className="text-white/80 text-sm leading-5 mb-6 flex-grow">
                Converse com nossa equipe e tire todas as dúvidas sobre as modalidades de hospedagem.
              </p>

              {/* CTA */}
              <div className="flex items-center gap-2 text-[#F5D481] font-bold text-sm">
                <span>Ligar agora</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </a>

            {/* Card 2: WhatsApp */}
            <a
              href={`https://wa.me/${COMPANY_CONTACT.whatsappDigits}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col p-6 bg-white/10 border border-white/20 rounded-2xl hover:bg-white/15 transition-colors"
            >
              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center bg-white/15 rounded-2xl mb-5">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>

              {/* Title */}
              <h3 className="text-white font-bold text-xl leading-7 mb-3">
                WhatsApp 24h
              </h3>

              {/* Description */}
              <p className="text-white/80 text-sm leading-5 mb-6 flex-grow">
                Envie uma mensagem e receba retorno rápido da equipe de plantão para orientações imediatas.
              </p>

              {/* CTA */}
              <div className="flex items-center gap-2 text-[#F5D481] font-bold text-sm">
                <span>Abrir conversa</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </a>

            {/* Card 3: Visit */}
            <Link
              href="/contato"
              className="flex flex-col p-6 bg-white/10 border border-white/20 rounded-2xl hover:bg-white/15 transition-colors"
            >
              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center bg-white/15 rounded-2xl mb-5">
                <Calendar className="w-6 h-6 text-white" />
              </div>

              {/* Title */}
              <h3 className="text-white font-bold text-xl leading-7 mb-3">
                Agendar visita guiada
              </h3>

              {/* Description */}
              <p className="text-white/80 text-sm leading-5 mb-6 flex-grow">
                Escolha a unidade de preferência e conheça pessoalmente nossa estrutura e protocolos de cuidado.
              </p>

              {/* CTA */}
              <div className="flex items-center gap-2 text-[#F5D481] font-bold text-sm">
                <span>Agendar agora</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

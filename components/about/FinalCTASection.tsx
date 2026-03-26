import Link from 'next/link'
import { Phone, MessageCircle, Calendar, ArrowRight, MapPin } from 'lucide-react'

export default function FinalCTASection() {
  return (
    <div className="w-full bg-gradient-to-b from-white to-[#F9FAFB] flex justify-center py-16 lg:py-[80px] px-4 sm:px-8">
      <section className="flex flex-col items-center w-full max-w-[1440px]">
        
        {/* Main Card */}
        <div 
          className="flex flex-col items-center p-8 lg:p-[40px] gap-10 w-full max-w-[1156px] rounded-3xl"
          style={{
            background: 'linear-gradient(135deg, #102041 0%, #1D3364 50%, #2E7B7F 100%)',
            boxShadow: '0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 8px 10px -6px rgba(0, 0, 0, 0.1)'
          }}
        >
          {/* Header */}
          <div className="flex flex-col items-center gap-4 w-full max-w-[672px] text-center">
            {/* Badge */}
            <div className="flex flex-row items-center px-4 py-2 gap-2 bg-white/10 rounded-full">
              <MapPin size={16} className="text-white/80" />
              <span className="font-bold text-xs leading-4 text-center tracking-[3.6px] uppercase text-white/80">
                Atendimento próximo
              </span>
            </div>

            {/* Title */}
            <h2 className="font-bold text-3xl md:text-4xl lg:text-[36px] lg:leading-[40px] text-white m-0">
              Conheça a Novo Lar de perto.
            </h2>

            {/* Subtitle */}
            <p className="font-normal text-base md:text-[16px] leading-relaxed text-white/80 m-0 max-w-[970px]">
              Agende uma visita, converse com nossa equipe e sinta a tranquilidade de encontrar um lugar preparado para cuidar de quem você ama.
            </p>
          </div>

          {/* CTA Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-[1076px]">
            
            {/* Card 1 - Central Novo Lar */}
            <Link
              href="tel:+555133467668"
              className="group flex flex-col items-start p-6 w-full bg-white/10 border border-white/20 rounded-2xl hover:bg-white/20 transition-colors"
            >
              <div className="flex flex-row justify-center items-center w-12 h-12 bg-white/15 rounded-2xl mb-5">
                <Phone size={24} className="text-white" />
              </div>
              <h3 className="font-bold text-xl leading-7 text-white m-0 mb-3">
                Central Novo Lar
              </h3>
              <p className="font-normal text-sm leading-5 text-white/80 m-0 mb-4 flex-grow">
                Converse com nossa equipe e tire todas as dúvidas sobre as modalidades de hospedagem.
              </p>
              <div className="flex flex-row items-center gap-2 mt-auto">
                <span className="font-bold text-sm leading-5 text-[#F5D481]">
                  Ligar agora
                </span>
                <ArrowRight size={16} className="text-[#F5D481] group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* Card 2 - WhatsApp 24h */}
            <Link
              href="https://wa.me/555133467668"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-start p-6 w-full bg-white/10 border border-white/20 rounded-2xl hover:bg-white/20 transition-colors"
            >
              <div className="flex flex-row justify-center items-center w-12 h-12 bg-white/15 rounded-2xl mb-5">
                <MessageCircle size={24} className="text-white" />
              </div>
              <h3 className="font-bold text-xl leading-7 text-white m-0 mb-3">
                WhatsApp 24h
              </h3>
              <p className="font-normal text-sm leading-5 text-white/80 m-0 mb-4 flex-grow">
                Envie uma mensagem e receba retorno rápido da equipe de plantão para orientações imediatas.
              </p>
              <div className="flex flex-row items-center gap-2 mt-auto">
                <span className="font-bold text-sm leading-5 text-[#F5D481]">
                  Abrir conversa
                </span>
                <ArrowRight size={16} className="text-[#F5D481] group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* Card 3 - Agendar visita guiada */}
            <Link
              href="/contato"
              className="group flex flex-col items-start p-6 w-full bg-white/10 border border-white/20 rounded-2xl hover:bg-white/20 transition-colors"
            >
              <div className="flex flex-row justify-center items-center w-12 h-12 bg-white/15 rounded-2xl mb-5">
                <Calendar size={24} className="text-white" />
              </div>
              <h3 className="font-bold text-xl leading-7 text-white m-0 mb-3">
                Agendar visita guiada
              </h3>
              <p className="font-normal text-sm leading-5 text-white/80 m-0 mb-4 flex-grow">
                Escolha a unidade de preferência e conheça pessoalmente nossa estrutura e protocolos de cuidado.
              </p>
              <div className="flex flex-row items-center gap-2 mt-auto">
                <span className="font-bold text-sm leading-5 text-[#F5D481]">
                  Agendar agora
                </span>
                <ArrowRight size={16} className="text-[#F5D481] group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

          </div>
        </div>
      </section>
    </div>
  )
}

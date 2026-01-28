'use client'

import { ClipboardList, Users, Heart, MessageCircle } from 'lucide-react'

export default function EstruturaCareProcess() {
  return (
    <section
      className="py-20 px-8 md:px-24 lg:px-36"
      style={{ background: 'linear-gradient(135deg, #FFFFFF 0%, #F9FAFB 50%, #FFFFFF 100%)' }}
    >
      <div className="max-w-[1180px] mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center gap-4 mb-12 text-center">
          <div className="flex items-center px-4 py-2 gap-2 bg-[#2C3E6B]/10 rounded-full">
            <ClipboardList className="w-4 h-4 text-[#2C3E6B]" />
            <span className="text-[#2C3E6B] font-bold text-xs tracking-[3.6px] uppercase">
              Como cuidamos
            </span>
          </div>

          <h2 className="text-[#2C3E6B] font-bold text-4xl md:text-5xl leading-tight max-w-[655px]">
            Processo acolhedor do primeiro contato ao dia a dia
          </h2>

          <p className="text-[#4A5565] text-lg leading-relaxed max-w-[672px]">
            Transparência e proximidade com a família em todas as etapas. Nossa metodologia foi desenhada para garantir transições suaves e acompanhamento frequente.
          </p>
        </div>

        {/* Process Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Step 1 */}
          <div className="flex flex-col p-8 bg-white rounded-3xl border border-[#E5E7EB] shadow-sm">
            {/* Icon */}
            <div className="w-12 h-12 flex items-center justify-center bg-[#2E7B7F]/10 rounded-2xl mb-6">
              <ClipboardList className="w-6 h-6 text-[#2E7B7F]" />
            </div>

            {/* Title */}
            <h3 className="text-[#2C3E6B] font-bold text-xl leading-7 mb-4">
              Avaliação completa
            </h3>

            {/* Description */}
            <p className="text-[#4A5565] text-sm leading-5">
              Reunião inicial com família e residente para entender histórico de saúde, preferências, expectativas e necessidades específicas.
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col p-8 bg-white rounded-3xl border border-[#E5E7EB] shadow-sm">
            {/* Icon */}
            <div className="w-12 h-12 flex items-center justify-center bg-[#2E7B7F]/10 rounded-2xl mb-6">
              <Users className="w-6 h-6 text-[#2E7B7F]" />
            </div>

            {/* Title */}
            <h3 className="text-[#2C3E6B] font-bold text-xl leading-7 mb-4">
              Plano individualizado
            </h3>

            {/* Description */}
            <p className="text-[#4A5565] text-sm leading-5">
              Construção conjunta do plano de cuidados com definição de terapias, alimentação, acompanhamento médico e rotinas personalizadas.
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col p-8 bg-white rounded-3xl border border-[#E5E7EB] shadow-sm">
            {/* Icon */}
            <div className="w-12 h-12 flex items-center justify-center bg-[#2E7B7F]/10 rounded-2xl mb-6">
              <Heart className="w-6 h-6 text-[#2E7B7F]" />
            </div>

            {/* Title */}
            <h3 className="text-[#2C3E6B] font-bold text-xl leading-7 mb-4">
              Cuidado multidisciplinar
            </h3>

            {/* Description */}
            <p className="text-[#4A5565] text-sm leading-5">
              Equipe de enfermagem 24h, médico geriatra, terapeuta ocupacional, nutricionista e musicoterapeuta atuando em sincronia.
            </p>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col p-8 bg-white rounded-3xl border border-[#E5E7EB] shadow-sm">
            {/* Icon */}
            <div className="w-12 h-12 flex items-center justify-center bg-[#2E7B7F]/10 rounded-2xl mb-6">
              <MessageCircle className="w-6 h-6 text-[#2E7B7F]" />
            </div>

            {/* Title */}
            <h3 className="text-[#2C3E6B] font-bold text-xl leading-7 mb-4">
              Acompanhamento e diálogo
            </h3>

            {/* Description */}
            <p className="text-[#4A5565] text-sm leading-5">
              Monitoramento contínuo com atualizações à família, ajustes de protocolos e acolhimento para dúvidas a qualquer momento.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

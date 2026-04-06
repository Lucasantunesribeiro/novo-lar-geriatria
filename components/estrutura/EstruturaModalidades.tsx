'use client'

import { Home, Calendar, HeartPulse, CheckCircle2 } from 'lucide-react'

export default function EstruturaModalidades() {
  return (
    <section className="w-full py-20 px-4 sm:px-8 bg-[#F9FAFB]">
      <div className="max-w-[1180px] mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center gap-4 mb-12 text-center">
          <div className="flex items-center px-4 py-2 gap-2 bg-[#2E7B7F]/10 rounded-full">
            <Home className="w-4 h-4 text-[#2C3E6B]" />
            <span className="text-[#2C3E6B] font-bold text-xs tracking-[3.6px] uppercase">
              Modalidades disponíveis
            </span>
          </div>

          <h2 className="text-[#2C3E6B] font-bold text-4xl md:text-5xl leading-tight max-w-[695px]">
            Cuidado que acompanha cada fase da família
          </h2>

          <p className="text-[#4A5565] text-lg leading-relaxed max-w-[757px]">
            Escolha a modalidade que mais combina com a sua necessidade e conte com nossas equipes para garantir conforto, segurança e autonomia na rotina do idoso.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1: Hospedagem permanente */}
          <div
            className="flex flex-col p-8 bg-white rounded-3xl border shadow-sm"
            style={{ borderColor: 'rgba(46, 123, 127, 0.15)' }}
          >
            {/* Icon */}
            <div className="w-12 h-12 flex items-center justify-center bg-[#2E7B7F]/10 rounded-2xl mb-6">
              <Home className="w-6 h-6 text-[#2E7B7F]" />
            </div>

            {/* Title */}
            <h3 className="text-[#2C3E6B] font-bold text-2xl leading-8 mb-4">
              Hospedagem permanente
            </h3>

            {/* Description */}
            <p className="text-[#4A5565] text-base leading-6 mb-6">
              Acolhimento contínuo com acompanhamento 24h da equipe de enfermagem, médico geriatra e profissionais de apoio. Ideal para quem busca rotina estável, estímulos diários e convivência em um ambiente seguro.
            </p>

            {/* List */}
            <div className="flex flex-col gap-3">
              <div className="flex gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2E7B7F] flex-shrink-0 mt-1" />
                <p className="text-[#4A5565] text-sm leading-5">
                  Planos personalizados que respeitam preferências e histórico clínico
                </p>
              </div>
              <div className="flex gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2E7B7F] flex-shrink-0 mt-1" />
                <p className="text-[#4A5565] text-sm leading-5">
                  Rotinas com terapias, alimentação supervisionada e estímulos cognitivos
                </p>
              </div>
              <div className="flex gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2E7B7F] flex-shrink-0 mt-1" />
                <p className="text-[#4A5565] text-sm leading-5">
                  Ambientes aconchegantes que acolhem residentes com diferentes níveis de dependência
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: Hospedagem temporária */}
          <div
            className="flex flex-col p-8 bg-white rounded-3xl border shadow-sm"
            style={{ borderColor: 'rgba(46, 123, 127, 0.15)' }}
          >
            {/* Icon */}
            <div className="w-12 h-12 flex items-center justify-center bg-[#2E7B7F]/10 rounded-2xl mb-6">
              <Calendar className="w-6 h-6 text-[#2E7B7F]" />
            </div>

            {/* Title */}
            <h3 className="text-[#2C3E6B] font-bold text-2xl leading-8 mb-4">
              Hospedagem temporária
            </h3>

            {/* Description */}
            <p className="text-[#4A5565] text-base leading-6 mb-6">
              Períodos flexíveis para famílias que precisam de suporte em viagens, férias ou diante de mudanças na rotina. A equipe garante continuidade dos cuidados e integração com o plano já adotado pelos familiares.
            </p>

            {/* List */}
            <div className="flex flex-col gap-3">
              <div className="flex gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2E7B7F] flex-shrink-0 mt-1" />
                <p className="text-[#4A5565] text-sm leading-5">
                  Estadas planejadas com acompanhamento médico e de enfermagem integral
                </p>
              </div>
              <div className="flex gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2E7B7F] flex-shrink-0 mt-1" />
                <p className="text-[#4A5565] text-sm leading-5">
                  Atividades diárias que estimulam autonomia e socialização
                </p>
              </div>
              <div className="flex gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2E7B7F] flex-shrink-0 mt-1" />
                <p className="text-[#4A5565] text-sm leading-5">
                  Transição tranquila entre o lar e a clínica, com orientação à família
                </p>
              </div>
            </div>
          </div>

          {/* Card 3: Cuidados pós-operatórios */}
          <div
            className="flex flex-col p-8 bg-white rounded-3xl border shadow-sm"
            style={{ borderColor: 'rgba(46, 123, 127, 0.15)' }}
          >
            {/* Icon */}
            <div className="w-12 h-12 flex items-center justify-center bg-[#2E7B7F]/10 rounded-2xl mb-6">
              <HeartPulse className="w-6 h-6 text-[#2E7B7F]" />
            </div>

            {/* Title */}
            <h3 className="text-[#2C3E6B] font-bold text-2xl leading-8 mb-4">
              Cuidados pós-operatórios e reabilitação
            </h3>

            {/* Description */}
            <p className="text-[#4A5565] text-base leading-6 mb-6">
              Assistência especializada para alta hospitalar, reabilitação de traumas e recuperação funcional. A equipe multidisciplinar acompanha cada etapa para acelerar a retomada das atividades com segurança.
            </p>

            {/* List */}
            <div className="flex flex-col gap-3">
              <div className="flex gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2E7B7F] flex-shrink-0 mt-1" />
                <p className="text-[#4A5565] text-sm leading-5">
                  Monitoramento clínico, administração de medicamentos e curativos
                </p>
              </div>
              <div className="flex gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2E7B7F] flex-shrink-0 mt-1" />
                <p className="text-[#4A5565] text-sm leading-5">
                  Apoio de fisioterapia, terapia ocupacional e musicoterapia conforme indicação
                </p>
              </div>
              <div className="flex gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2E7B7F] flex-shrink-0 mt-1" />
                <p className="text-[#4A5565] text-sm leading-5">
                  Adequação de cardápio e rotina conforme orientações médicas
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

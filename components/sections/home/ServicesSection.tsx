'use client'

import Link from 'next/link'
import { Clock, Stethoscope, Activity } from 'lucide-react'

const SERVICES = [
  {
    title: 'Hospedagem Assistida 24h',
    desc: 'Equipe multidisciplinar presente 24 horas para garantir segurança, conforto e bem-estar',
    icon: Clock,
    slug: 'hospedagem-assistida-24h',
  },
  {
    title: 'Acompanhamento Médico',
    desc: 'Protocolos clínicos com médicos geriatras e enfermeiros especializados',
    icon: Stethoscope,
    slug: 'acompanhamento-medico',
  },
  {
    title: 'Reabilitação e Terapias',
    desc: 'Fisioterapia, terapia ocupacional e atividades que estimulam autonomia e cognição',
    icon: Activity,
    slug: 'reabilitacao-terapias',
  },
]

export default function ServicesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2C3E6B] mb-4">
            Nossos Serviços
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Cuidado integral e personalizado para cada residente
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {SERVICES.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className="bg-white rounded-xl border border-[#E5E7EB] p-8 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-[#E8F0FE] flex items-center justify-center">
                      <Icon className="w-6 h-6 text-[#2C3E6B]" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[#1F2937] mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-[#6B7280] leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

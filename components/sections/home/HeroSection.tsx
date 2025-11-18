'use client'

import { Calendar, Building2, Clock } from 'lucide-react'
import ContactForm from '@/components/forms/ContactForm'

const UNITS = [
  {
    slug: 'moinhos-luciana-de-abreu',
    name: 'Moinhos de Vento · Rua Luciana de Abreu, 151',
  },
  {
    slug: 'moinhos-barao-de-santo-angelo',
    name: 'Moinhos de Vento · Rua Barão de Santo Ângelo, 406',
  },
  {
    slug: 'passo-dareia',
    name: "Passo d'Areia · Rua Brigadeiro Oliveira Neri, 175",
  },
]

const METRICS = [
  {
    icon: Calendar,
    value: '+30',
    label: 'Anos de dedicação',
  },
  {
    icon: Building2,
    value: '4',
    label: 'Unidades em Porto Alegre',
  },
  {
    icon: Clock,
    value: '24hs',
    label: 'Atendimento',
  },
]

export default function HeroSection() {
  return (
    <section
      className="relative pt-32 pb-20 lg:pt-40 lg:pb-28"
      style={{
        background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_400px] lg:items-start xl:gap-14">
          {/* Left Content */}
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center rounded-full bg-[#D4A853] px-4 py-2 mb-6">
              <span className="text-sm font-semibold text-white">
                +30 anos sendo referência em cuidado humanizado
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-[#2C3E6B] sm:text-5xl lg:text-6xl mb-6">
              Residencial Geriátrico em Porto Alegre
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-gray-600 leading-relaxed mb-10">
              Cuidado com carinho e acolhimento de verdade. Ambiente familiar,
              equipe multidisciplinar 24h e atenção personalizada para quem
              você ama.
            </p>

            {/* Metrics Cards */}
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-3">
              {METRICS.map((metric) => {
                const Icon = metric.icon
                return (
                  <div
                    key={metric.label}
                    className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex flex-col items-start gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#2C3E6B]/10 transition-colors group-hover:bg-[#2C3E6B]/20">
                        <Icon className="h-6 w-6 text-[#2C3E6B]" />
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-[#2C3E6B]">
                          {metric.value}
                        </div>
                        <div className="mt-1 text-sm font-medium text-gray-600">
                          {metric.label}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="mx-auto w-full max-w-lg justify-self-end rounded-2xl border border-gray-200 bg-white p-7 shadow-lg md:p-9 lg:mx-0 lg:sticky lg:top-28">
            <div className="mb-6 space-y-2">
              <h2 className="text-2xl font-bold text-[#1a2745]">
                Fale conosco
              </h2>
              <p className="text-sm text-gray-600">
                Retornamos em até 1 hora útil
              </p>
            </div>

            <ContactForm units={UNITS} />
          </div>
        </div>
      </div>
    </section>
  )
}

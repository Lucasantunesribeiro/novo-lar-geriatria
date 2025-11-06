'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const SERVICES = [
  {
    title: 'Hospedagem Assistida 24h',
    desc: 'Equipe multidisciplinar presente 24 horas para garantir segurança, conforto e bem-estar.',
    image: '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/1.jpeg',
    slug: 'hospedagem-assistida-24h',
  },
  {
    title: 'Acompanhamento Médico e Enfermagem',
    desc: 'Protocolos clínicos com médicos geriatras e enfermeiros especializados.',
    image: '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/2.jpeg',
    slug: 'enfermagem-medico-24h',
  },
  {
    title: 'Reabilitação e Terapias Integradas',
    desc: 'Fisioterapia, terapia ocupacional e atividades que estimulam autonomia e cognição.',
    image: '/fotos-sobre/Passos de Areia - R. Brg. Oliveira Neri, 175/1.jpeg',
    slug: 'terapia-ocupacional',
  },
]

export default function ServicesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#8B6914] mb-3">
            Residencial Geriátrico em Porto Alegre - Novo Lar
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#2C3E6B] mb-6">
            Residencial Geriátrico da Novo Lar
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto mb-12">
            A Residencial Geriátrico da Novo Lar é um espaço pensado para oferecer acolhimento, conforto e cuidados
            especializados a idosos que necessitam de assistência contínua. Com uma equipe altamente qualificada,
            proporcionamos um ambiente seguro e humanizado.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {SERVICES.map((service) => (
            <Link
              key={service.title}
              href={`/servicos/${service.slug}`}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-[#8B6914]"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                  quality={75}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2C3E6B]/90 via-[#2C3E6B]/40 to-transparent"></div>
              </div>

              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-[#2C3E6B] mb-3 group-hover:text-[#2E7B7F] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-base mb-4">{service.desc}</p>
                <span className="inline-flex items-center gap-2 text-[#8B6914] font-semibold text-sm group-hover:gap-3 transition-all">
                  Saiba Mais
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/servicos"
            className="inline-flex items-center gap-2 bg-[#2C3E6B] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#1f2d4f] transition-all shadow-lg hover:shadow-xl"
          >
            Ver Todos os Serviços
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}

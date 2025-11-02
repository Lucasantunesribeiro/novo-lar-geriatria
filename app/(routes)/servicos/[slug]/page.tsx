import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { COMPANY_CONTACT } from '@/lib/site-data'
import { SERVICE_DETAILS, getServiceBySlug } from '@/lib/services-data'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { ArrowRight, CheckCircle2, Phone } from 'lucide-react'

type ServicePageProps = {
  params: {
    slug: string
  }
}

export function generateStaticParams() {
  return SERVICE_DETAILS.map((service) => ({
    slug: service.slug,
  }))
}

export function generateMetadata({ params }: ServicePageProps): Metadata {
  const service = getServiceBySlug(params.slug)

  if (!service) {
    return {
      title: 'Serviço não encontrado · Novo Lar Geriatria',
    }
  }

  const pageTitle = `${service.title} · Novo Lar Geriatria`

  return {
    title: pageTitle,
    description: service.summary,
    openGraph: {
      title: pageTitle,
      description: service.summary,
      images: [
        {
          url: service.heroImage,
          alt: service.heroImageAlt,
        },
      ],
    },
  }
}

export default function ServiceDetailPage({ params }: ServicePageProps) {
  const service = getServiceBySlug(params.slug)

  if (!service) {
    notFound()
  }

  const relatedServices = SERVICE_DETAILS.filter((item) => item.slug !== service.slug).slice(0, 3)

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden py-24 text-white">
        <Image
          src={service.heroImage}
          alt={service.heroImageAlt}
          fill
          priority
          className="absolute inset-0 h-full w-full object-cover"
          sizes="(min-width: 1280px) 100vw, 100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f1e3f]/95 via-[#1d3364]/85 to-[#4A9B9F]/80"></div>
        <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] opacity-10 mix-blend-soft-light"></div>
        <div className="relative z-10 mx-auto flex max-w-5xl flex-col gap-8 px-4 text-center md:px-6">
          <div className="inline-flex items-center gap-2 self-center rounded-full bg-white/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/80">
            Serviços Novo Lar
          </div>
          <div>
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">{service.title}</h1>
            <p className="mt-4 text-lg text-white/85 sm:text-xl">{service.subtitle}</p>
          </div>
          <p className="mx-auto max-w-3xl text-base text-white/80 sm:text-lg">{service.summary}</p>
          <div className="mt-4 flex flex-wrap justify-center gap-4">
            <Link
              href="/contato"
              className="inline-flex items-center gap-2 rounded-xl bg-[#C49943] px-8 py-4 text-base font-semibold text-[#1a2745] shadow-lg transition hover:-translate-y-0.5 hover:bg-[#c49943]"
            >
              Agendar visita guiada
              <ArrowRight className="h-5 w-5" />
            </Link>
            <a
              href={`https://wa.me/${COMPANY_CONTACT.whatsappDigits}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/40 px-6 py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
            >
              <i className="bi bi-whatsapp text-lg" aria-hidden="true"></i>
              Falar pelo WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Descrição detalhada */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">
            <div className="space-y-6 text-lg leading-relaxed text-gray-700">
              {service.description.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="rounded-3xl border border-[#4A9B9F]/20 bg-[#4A9B9F]/5 p-8 shadow-sm">
              <div className="flex items-center gap-3 text-[#2C3E6B]">
                <CheckCircle2 className="h-6 w-6" />
                <span className="text-sm font-semibold uppercase tracking-[0.3em]">
                  Diferenciais do programa
                </span>
              </div>
              <ul className="mt-6 space-y-3 text-sm text-gray-700">
                {service.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-4 w-4 text-[#4A9B9F]" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Estrutura e infraestrutura */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#4A9B9F]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#2C3E6B]">
              Estrutura completa
            </span>
            <h2 className="mt-4 text-4xl font-bold text-[#2C3E6B] sm:text-5xl">
              Infraestrutura pensada para o bem-estar
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Cada detalhe foi planejado para proporcionar conforto, segurança e qualidade de vida aos nossos residentes.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
            <div className="rounded-2xl bg-white border border-gray-200 p-6 shadow-sm hover:shadow-lg transition">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#4A9B9F]/10">
                  <CheckCircle2 className="h-6 w-6 text-[#4A9B9F]" />
                </div>
                <h3 className="text-lg font-semibold text-[#2C3E6B]">Quartos acessíveis</h3>
              </div>
              <p className="text-gray-600">
                Acomodações individuais ou compartilhadas, climatizadas, com banheiro adaptado e mobiliário ergonômico para máximo conforto.
              </p>
            </div>

            <div className="rounded-2xl bg-white border border-gray-200 p-6 shadow-sm hover:shadow-lg transition">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#4A9B9F]/10">
                  <CheckCircle2 className="h-6 w-6 text-[#4A9B9F]" />
                </div>
                <h3 className="text-lg font-semibold text-[#2C3E6B]">Áreas de convivência</h3>
              </div>
              <p className="text-gray-600">
                Salas amplas e aconchegantes para atividades em grupo, receber visitas e promover a socialização entre residentes.
              </p>
            </div>

            <div className="rounded-2xl bg-white border border-gray-200 p-6 shadow-sm hover:shadow-lg transition">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#4A9B9F]/10">
                  <CheckCircle2 className="h-6 w-6 text-[#4A9B9F]" />
                </div>
                <h3 className="text-lg font-semibold text-[#2C3E6B]">Jardins arborizados</h3>
              </div>
              <p className="text-gray-600">
                Áreas verdes seguras e acessíveis para caminhadas, contemplação e atividades ao ar livre supervisionadas.
              </p>
            </div>

            <div className="rounded-2xl bg-white border border-gray-200 p-6 shadow-sm hover:shadow-lg transition">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#4A9B9F]/10">
                  <CheckCircle2 className="h-6 w-6 text-[#4A9B9F]" />
                </div>
                <h3 className="text-lg font-semibold text-[#2C3E6B]">Refeitório equipado</h3>
              </div>
              <p className="text-gray-600">
                Espaço planejado para refeições em grupo, com cardápio balanceado supervisionado por nutricionista.
              </p>
            </div>

            <div className="rounded-2xl bg-white border border-gray-200 p-6 shadow-sm hover:shadow-lg transition">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#4A9B9F]/10">
                  <CheckCircle2 className="h-6 w-6 text-[#4A9B9F]" />
                </div>
                <h3 className="text-lg font-semibold text-[#2C3E6B]">Salas terapêuticas</h3>
              </div>
              <p className="text-gray-600">
                Ambientes dedicados para fisioterapia, terapia ocupacional e atividades recreativas supervisionadas.
              </p>
            </div>

            <div className="rounded-2xl bg-white border border-gray-200 p-6 shadow-sm hover:shadow-lg transition">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#4A9B9F]/10">
                  <CheckCircle2 className="h-6 w-6 text-[#4A9B9F]" />
                </div>
                <h3 className="text-lg font-semibold text-[#2C3E6B]">Segurança 24h</h3>
              </div>
              <p className="text-gray-600">
                Sistema de monitoramento, equipe de plantão e protocolos de emergência para garantir tranquilidade total.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Como funciona o dia a dia */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#4A9B9F]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#2C3E6B]">
              Rotina de cuidados
            </span>
            <h2 className="mt-4 text-4xl font-bold text-[#2C3E6B] sm:text-5xl">
              Como funciona o dia a dia
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Uma rotina estruturada que respeita as individualidades e promove qualidade de vida.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
              <div className="mb-4">
                <div className="inline-flex items-center justify-center rounded-lg bg-[#2C3E6B] px-4 py-2 text-sm font-semibold text-white">
                  Manhã
                </div>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-[#4A9B9F]" />
                  <span>Despertar assistido com higiene pessoal e cuidados de enfermagem</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-[#4A9B9F]" />
                  <span>Café da manhã balanceado com administração de medicações prescritas</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-[#4A9B9F]" />
                  <span>Atividades terapêuticas e estimulação cognitiva em grupo</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-[#4A9B9F]" />
                  <span>Avaliação médica conforme programação semanal</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
              <div className="mb-4">
                <div className="inline-flex items-center justify-center rounded-lg bg-[#2C3E6B] px-4 py-2 text-sm font-semibold text-white">
                  Tarde
                </div>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-[#4A9B9F]" />
                  <span>Almoço supervisionado e momento de descanso</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-[#4A9B9F]" />
                  <span>Fisioterapia e terapia ocupacional conforme plano individual</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-[#4A9B9F]" />
                  <span>Atividades recreativas, musicoterapia ou passeios nos jardins</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-[#4A9B9F]" />
                  <span>Lanche da tarde e monitoramento de sinais vitais</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
              <div className="mb-4">
                <div className="inline-flex items-center justify-center rounded-lg bg-[#2C3E6B] px-4 py-2 text-sm font-semibold text-white">
                  Noite
                </div>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-[#4A9B9F]" />
                  <span>Jantar supervisionado com atenção às necessidades individuais</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-[#4A9B9F]" />
                  <span>Atividades tranquilas de socialização e entretenimento</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-[#4A9B9F]" />
                  <span>Preparação para repouso com cuidados de higiene e conforto</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-[#4A9B9F]" />
                  <span>Plantão noturno com rondas regulares de enfermagem</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
              <div className="mb-4">
                <div className="inline-flex items-center justify-center rounded-lg bg-[#2C3E6B] px-4 py-2 text-sm font-semibold text-white">
                  Comunicação com família
                </div>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-[#4A9B9F]" />
                  <span>Relatórios diários sobre alimentação, medicação e atividades realizadas</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-[#4A9B9F]" />
                  <span>Comunicação imediata em caso de intercorrências ou mudanças no quadro</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-[#4A9B9F]" />
                  <span>Reuniões periódicas com equipe para discutir evolução e ajustes no plano</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-[#4A9B9F]" />
                  <span>Visitas sem restrição de horários, respeitando o bem-estar do residente</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Galeria ilustrativa */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#4A9B9F]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#2C3E6B]">
              Acolhimento em imagens
            </span>
            <h2 className="mt-4 text-4xl font-bold text-[#2C3E6B] sm:text-5xl">
              Como esse serviço acontece na prática
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Registros reais das unidades Novo Lar reforçam o cuidado próximo, os ambientes humanizados e a rotina
              de carinho com residentes e familiares.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {service.gallery.map((item) => (
              <div
                key={item.src}
                className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="relative h-60 w-full overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(min-width: 1024px) 33vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                </div>
                <div className="p-4">
                  <p className="text-sm text-gray-600">{item.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA de contato */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="rounded-3xl bg-gradient-to-br from-[#102041] via-[#1d3364] to-[#4A9B9F] p-10 text-white shadow-xl">
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/80">
                Atendimento especializado
              </span>
              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                Fale com nossa equipe e monte um plano personalizado
              </h2>
              <p className="mt-4 text-base text-white/80">
                Estamos disponíveis para apresentar as unidades, explicar protocolos e orientar sobre documentação,
                valores e disponibilidade de vagas.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href={`tel:${COMPANY_CONTACT.centralPhoneDigits}`}
                className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-4 text-sm font-semibold text-[#1a2745] shadow-lg transition hover:-translate-y-0.5 hover:bg-white/90"
              >
                <Phone className="h-5 w-5" />
                Ligar para {COMPANY_CONTACT.centralPhoneDisplay}
              </a>
              <a
                href={`https://wa.me/${COMPANY_CONTACT.whatsappDigits}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/40 px-6 py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
              >
                <i className="bi bi-whatsapp text-lg" aria-hidden="true"></i>
                Conversar no WhatsApp
              </a>
              <Link
                href="/contato"
                className="inline-flex items-center gap-2 rounded-xl border border-white/40 px-6 py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
              >
                <ArrowRight className="h-5 w-5" />
                Agendar visita presencial
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços relacionados */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#4A9B9F]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#2C3E6B]">
              Outros serviços
            </span>
            <h2 className="mt-4 text-3xl font-bold text-[#2C3E6B] sm:text-4xl">
              Explore outros cuidados Novo Lar
            </h2>
            <p className="mt-3 text-base text-gray-600">
              Combine diferentes modalidades de atendimento para garantir conforto e segurança em todas as fases da
              jornada do idoso.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {relatedServices.map((related) => (
              <Link
                key={related.slug}
                href={`/servicos/${related.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={related.heroImage}
                    alt={related.heroImageAlt}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(min-width: 1024px) 33vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-semibold text-[#2C3E6B] group-hover:text-[#4A9B9F] transition-colors">
                    {related.title}
                  </h3>
                  <p className="mt-3 text-sm text-gray-600 flex-1">{related.summary}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#4A9B9F] transition group-hover:translate-x-1">
                    Conhecer serviço
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

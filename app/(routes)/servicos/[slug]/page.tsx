import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import GoogleReviews from '@/components/sections/GoogleReviews'
import { COMPANY_CONTACT } from '@/lib/site-data'
import { SERVICE_DETAILS, getServiceBySlug } from '@/lib/services-data'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { ArrowRight, CheckCircle2, Phone } from 'lucide-react'
import { ServiceSchema } from '@/components/seo/JsonLd'
import Breadcrumb from '@/components/ui/Breadcrumb'
import ServiceContactForm from '@/components/forms/ServiceContactForm'

type ServicePageParams = {
  slug: string
}

type ServicePageProps = {
  params: Promise<ServicePageParams>
}

export function generateStaticParams() {
  return SERVICE_DETAILS.map((service) => ({
    slug: service.slug,
  }))
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params
  const service = getServiceBySlug(slug)

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

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) {
    notFound()
  }

  const relatedServices = SERVICE_DETAILS.filter((item) => item.slug !== service.slug).slice(0, 3)

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <ServiceSchema
        name={service.title}
        description={service.summary}
        url={`https://novolargeriatria.com.br/servicos/${service.slug}`}
      />

      {/* Subheader */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#2C3E6B] via-[#1d3364] to-[#2E7B7F] py-12 text-white">
        <Image
          src={service.heroImage}
          alt={service.heroImageAlt}
          fill
          priority
          className="absolute inset-0 h-full w-full object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#2C3E6B]/95 via-[#1d3364]/90 to-[#2E7B7F]/85"></div>
        <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] opacity-5"></div>
        <div className="container relative z-10 mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <p className="text-sm font-medium uppercase tracking-wider text-white/80">
              Residencial Geriátrico e Hospedagem Assistida em Porto Alegre - Novo Lar
            </p>
            <h1 className="mt-3 text-4xl font-bold text-white md:text-5xl">{service.title}</h1>

            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mt-4">
              <ol className="flex flex-wrap items-center gap-2 text-sm">
                <li>
                  <Link href="/" className="text-white/80 transition hover:text-white">
                    Home
                  </Link>
                </li>
                <li className="text-white/50">/</li>
                <li>
                  <Link href="/servicos" className="text-white/80 transition hover:text-white">
                    Serviços
                  </Link>
                </li>
                <li className="text-white/50">/</li>
                <li className="font-medium text-white" aria-current="page">
                  {service.title}
                </li>
              </ol>
            </nav>

            <div className="mt-6 h-px w-24 bg-[#B8842F]"></div>
          </div>
        </div>
      </section>

      {/* Conteúdo principal com sidebar */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-12">
            {/* Coluna principal - Conteúdo */}
            <div className="lg:col-span-8">
              {/* Imagem destaque */}
              {service.gallery[0] && (
                <div className="mb-8">
                  <Image
                    src={service.gallery[0].src}
                    alt={service.gallery[0].alt}
                    width={1200}
                    height={600}
                    className="w-full rounded-2xl shadow-lg"
                    sizes="(min-width: 1024px) 66vw, 100vw"
                  />
                </div>
              )}

              {/* Título do serviço */}
              <h2 className="mb-6 text-3xl font-bold text-[#2C3E6B] sm:text-4xl">
                {service.title}
              </h2>

              {/* Descrição detalhada */}
              <div className="space-y-6 text-base leading-relaxed text-gray-700">
                {service.description.map((paragraph, index) => (
                  <p
                    key={index}
                    dangerouslySetInnerHTML={{ __html: paragraph }}
                  />
                ))}
              </div>

              {/* Diferenciais do serviço */}
              <div className="mt-12">
                <h3 className="mb-6 text-2xl font-bold text-[#2C3E6B]">
                  Diferenciais do Programa
                </h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  {service.highlights.map((highlight, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition hover:border-[#2E7B7F]/40 hover:shadow-md"
                    >
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#2E7B7F]" />
                      <p className="text-sm text-gray-700">{highlight}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Galeria de imagens */}
              {service.gallery.length > 1 && (
                <div className="mt-12">
                  <h3 className="mb-6 text-2xl font-bold text-[#2C3E6B]">
                    Como esse serviço acontece na prática
                  </h3>
                  <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                    {service.gallery.slice(1).map((item, index) => (
                      <div
                        key={index}
                        className="group overflow-hidden rounded-2xl border border-gray-200 shadow-sm transition hover:shadow-lg"
                      >
                        <div className="relative h-48 overflow-hidden">
                          <Image
                            src={item.src}
                            alt={item.alt}
                            fill
                            className="object-cover transition duration-500 group-hover:scale-105"
                            sizes="(min-width: 1024px) 25vw, 50vw"
                          />
                        </div>
                        <div className="bg-white p-3">
                          <p className="text-xs text-gray-600">{item.alt}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-24 space-y-6">
                {/* Formulário de contato */}
                <div className="rounded-2xl bg-gradient-to-br from-[#2C3E6B] to-[#2E7B7F] p-8 text-white shadow-xl">
                  <div className="mb-6 text-center">
                    <h4 className="text-2xl font-bold">AGENDE UMA VISITA</h4>
                    <p className="mt-2 text-sm text-white/90">
                      Venha conhecer nosso espaço e nossos serviços
                    </p>
                  </div>
                  <ServiceContactForm serviceName={service.title} />
                </div>

                {/* Contatos diretos */}
                <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                  <h3 className="mb-4 text-center text-base font-semibold text-[#2C3E6B]">
                    Se preferir entre em contato por WhatsApp ou Telefone
                  </h3>
                  <div className="space-y-3">
                    <a
                      href={`https://wa.me/${COMPANY_CONTACT.whatsappDigits}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 rounded-lg bg-[#25D366] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#20c157]"
                    >
                      <i className="bi bi-whatsapp text-lg" aria-hidden="true"></i>
                      Fale por WhatsApp
                    </a>
                    <a
                      href={`tel:${COMPANY_CONTACT.centralPhoneDigits}`}
                      className="flex items-center justify-center gap-2 rounded-lg border-2 border-[#2C3E6B] px-4 py-3 text-sm font-semibold text-[#2C3E6B] transition hover:bg-[#2C3E6B] hover:text-white"
                    >
                      <Phone className="h-4 w-4" />
                      {COMPANY_CONTACT.centralPhoneDisplay}
                    </a>
                  </div>
                </div>

                {/* Serviços relacionados */}
                <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                  <h3 className="mb-4 text-lg font-bold text-[#2C3E6B]">
                    Outros Serviços
                  </h3>
                  <ul className="space-y-2">
                    {relatedServices.map((related) => (
                      <li key={related.slug}>
                        <Link
                          href={`/servicos/${related.slug}`}
                          className="block rounded-lg px-3 py-2 text-sm text-gray-700 transition hover:bg-[#2E7B7F]/10 hover:text-[#2C3E6B]"
                        >
                          {related.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Avaliações do Google */}
      <GoogleReviews />

      <Footer />
    </div>
  )
}



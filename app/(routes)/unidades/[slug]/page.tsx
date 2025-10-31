import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Phone, MessageCircle, Mail, Clock, Users, CheckCircle2 } from 'lucide-react'
import { getUnitBySlug, getAllUnits } from '@/lib/sanity/queries'
import GoogleReviews from '@/components/sections/GoogleReviews'
import LocalBusinessSchema from '@/components/seo/LocalBusinessSchema'

interface PageProps {
  params: Promise<{ slug: string }>
}

// Generate static params for all units
export async function generateStaticParams() {
  const units = await getAllUnits()
  return units.map((unit: any) => ({
    slug: unit.slug.current,
  }))
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const unit = await getUnitBySlug(slug)

  if (!unit) {
    return {
      title: 'Unidade não encontrada',
    }
  }

  const seoTitle = unit.seoTitle || `${unit.name} - Novo Lar Geriatria`
  const seoDescription = unit.seoDescription || unit.description
  const seoImage = unit.seoImage?.asset?.url || unit.featuredImage?.asset?.url

  return {
    title: seoTitle,
    description: seoDescription,
    keywords: unit.seoKeywords || [],
    openGraph: {
      title: seoTitle,
      description: seoDescription,
      images: seoImage ? [{ url: seoImage }] : [],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: seoTitle,
      description: seoDescription,
      images: seoImage ? [seoImage] : [],
    },
  }
}

export default async function UnitPage({ params }: PageProps) {
  const { slug } = await params
  const unit = await getUnitBySlug(slug)

  if (!unit) {
    notFound()
  }

  const statusBadge = {
    active: { label: 'Vagas Disponíveis', color: 'bg-green-100 text-green-800 border-green-300' },
    'coming-soon': { label: 'Em Breve', color: 'bg-blue-100 text-blue-800 border-blue-300' },
    inactive: { label: 'Sem Vagas', color: 'bg-gray-100 text-gray-800 border-gray-300' },
  }

  const currentStatus = statusBadge[unit.status as keyof typeof statusBadge] || statusBadge.active

  // Prepare URL for schema
  const unitUrl = `${process.env.NEXT_PUBLIC_SITE_URL || 'https://novolargeriatria.com.br'}/unidades/${slug}`

  return (
    <>
      {/* LocalBusiness Structured Data */}
      <LocalBusinessSchema
        name={unit.name}
        description={unit.description}
        address={unit.address}
        neighborhood={unit.neighborhood}
        city={unit.city}
        state={unit.state}
        postalCode={unit.postalCode}
        phone={unit.phone}
        email={unit.email}
        coordinates={unit.coordinates}
        hours={unit.hours}
        googlePlaceId={unit.googlePlaceId}
        image={unit.featuredImage?.asset?.url || unit.photos?.[0]?.asset?.url}
        url={unitUrl}
      />

      <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
        {unit.featuredImage?.asset?.url && (
          <Image
            src={unit.featuredImage.asset.url}
            alt={unit.featuredImage.alt || unit.name}
            fill
            priority
            className="object-cover"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1530]/95 via-[#142553]/85 to-[#233d75]/45"></div>

        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <div className={`mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm backdrop-blur ${currentStatus.color}`}>
                {currentStatus.label}
              </div>

              <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
                {unit.name}
              </h1>

              <p className="mb-6 text-lg text-white/90 md:text-xl">
                {unit.description}
              </p>

              <div className="flex flex-wrap gap-4 text-white/90">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-[#D4A853]" />
                  <span>{unit.address}, {unit.neighborhood}</span>
                </div>
                {unit.capacity && (
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-[#D4A853]" />
                    <span>Capacidade: {unit.capacity} hóspedes</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Bar */}
      <div className="sticky top-20 z-40 bg-gradient-to-r from-[#2C3E6B] to-[#1a2745] shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-4 text-white">
              {unit.phone && (
                <a
                  href={`tel:${unit.phone.replace(/\D/g, '')}`}
                  className="flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2 transition hover:bg-white/20"
                  onClick={() => {
                    ;(window as any).dataLayer?.push({
                      event: 'click_tel',
                      unit_name: unit.name,
                      button_location: 'unit_contact_bar',
                    })
                  }}
                >
                  <Phone className="h-4 w-4" />
                  {unit.phone}
                </a>
              )}
              {unit.whatsapp && (
                <a
                  href={`https://wa.me/${unit.whatsapp.replace(/\D/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-lg bg-[#25D366] px-4 py-2 transition hover:bg-[#20BD5C]"
                  onClick={() => {
                    ;(window as any).dataLayer?.push({
                      event: 'click_whatsapp',
                      unit_name: unit.name,
                      button_location: 'unit_contact_bar',
                    })
                  }}
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
              )}
            </div>
            <Link
              href="/contato"
              className="rounded-lg bg-[#D4A853] px-6 py-2 font-semibold text-[#1a2745] transition hover:bg-[#c49943]"
            >
              Solicitar Visita
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-16 lg:grid-cols-[2fr_1fr]">
          {/* Left Column */}
          <div>
            {/* Detailed Description */}
            {unit.detailedDescription && (
              <section className="mb-16">
                <h2 className="mb-6 text-3xl font-bold text-[#2C3E6B]">Sobre a Unidade</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed">{unit.detailedDescription}</p>
                </div>
              </section>
            )}

            {/* Features */}
            {unit.features && unit.features.length > 0 && (
              <section className="mb-16">
                <h2 className="mb-6 text-3xl font-bold text-[#2C3E6B]">Diferenciais</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {unit.features.map((feature: string, index: number) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-sm"
                    >
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#D4A853]" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Photo Gallery */}
            {unit.photos && unit.photos.length > 0 && (
              <section className="mb-16">
                <h2 className="mb-6 text-3xl font-bold text-[#2C3E6B]">Galeria de Fotos</h2>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {unit.photos.map((photo: any, index: number) => (
                    <div key={index} className="group relative aspect-[4/3] overflow-hidden rounded-xl shadow-lg">
                      <Image
                        src={photo.asset.url}
                        alt={photo.alt || `Foto ${index + 1} - ${unit.name}`}
                        fill
                        className="object-cover transition duration-500 group-hover:scale-110"
                      />
                      {photo.caption && (
                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                          <p className="text-sm text-white">{photo.caption}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* FAQ */}
            {unit.faq && unit.faq.length > 0 && (
              <section className="mb-16">
                <h2 className="mb-6 text-3xl font-bold text-[#2C3E6B]">Perguntas Frequentes</h2>
                <div className="space-y-4">
                  {unit.faq.map((item: any, index: number) => (
                    <details
                      key={index}
                      className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
                    >
                      <summary className="flex cursor-pointer items-center justify-between font-semibold text-[#2C3E6B]">
                        {item.question}
                        <span className="ml-4 text-2xl text-[#D4A853] transition group-open:rotate-45">
                          +
                        </span>
                      </summary>
                      <p className="mt-4 text-gray-700 leading-relaxed">{item.answer}</p>
                    </details>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Right Column - Sidebar */}
          <aside className="space-y-8">
            {/* Contact Card */}
            <div className="sticky top-36 rounded-2xl border border-gray-200 bg-white p-6 shadow-lg">
              <h3 className="mb-4 text-xl font-bold text-[#2C3E6B]">Informações de Contato</h3>

              <div className="space-y-4 text-sm">
                {unit.address && (
                  <div>
                    <div className="flex items-start gap-3">
                      <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#D4A853]" />
                      <div>
                        <p className="font-medium text-gray-900">Endereço</p>
                        <p className="text-gray-600">
                          {unit.address}, {unit.neighborhood}
                          <br />
                          {unit.city} - {unit.state}
                          {unit.postalCode && <><br />CEP: {unit.postalCode}</>}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {unit.phone && (
                  <div className="flex items-start gap-3">
                    <Phone className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#D4A853]" />
                    <div>
                      <p className="font-medium text-gray-900">Telefone</p>
                      <a
                        href={`tel:${unit.phone.replace(/\D/g, '')}`}
                        className="text-[#2C3E6B] hover:underline"
                      >
                        {unit.phone}
                      </a>
                    </div>
                  </div>
                )}

                {unit.email && (
                  <div className="flex items-start gap-3">
                    <Mail className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#D4A853]" />
                    <div>
                      <p className="font-medium text-gray-900">E-mail</p>
                      <a
                        href={`mailto:${unit.email}`}
                        className="text-[#2C3E6B] hover:underline"
                      >
                        {unit.email}
                      </a>
                    </div>
                  </div>
                )}

                {unit.hours && (
                  <div className="flex items-start gap-3">
                    <Clock className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#D4A853]" />
                    <div>
                      <p className="font-medium text-gray-900">Horário</p>
                      <p className="text-gray-600">{unit.hours}</p>
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-6 space-y-3">
                <Link
                  href="/contato"
                  className="block w-full rounded-lg bg-[#D4A853] py-3 text-center font-semibold text-[#1a2745] transition hover:bg-[#c49943]"
                >
                  Agendar Visita
                </Link>
                {unit.whatsapp && (
                  <a
                    href={`https://wa.me/${unit.whatsapp.replace(/\D/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full rounded-lg bg-[#25D366] py-3 text-center font-semibold text-white transition hover:bg-[#20BD5C]"
                  >
                    Falar no WhatsApp
                  </a>
                )}
              </div>
            </div>

            {/* Map */}
            {unit.coordinates && (
              <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-lg">
                <iframe
                  src={`https://www.google.com/maps?q=${unit.coordinates.lat},${unit.coordinates.lng}&z=15&output=embed`}
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Mapa - ${unit.name}`}
                ></iframe>
              </div>
            )}
          </aside>
        </div>
      </div>

      {/* Google Reviews */}
      {unit.googlePlaceId && (
        <GoogleReviews placeId={unit.googlePlaceId} />
      )}

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#2C3E6B] to-[#1a2745] py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Agende uma Visita e Conheça Nossa Estrutura
          </h2>
          <p className="mb-8 text-lg text-white/90">
            Venha conhecer pessoalmente nossas instalações e equipe especializada.
          </p>
          <Link
            href="/contato"
            className="inline-flex items-center justify-center rounded-xl bg-[#D4A853] px-8 py-4 text-lg font-semibold text-[#1a2745] shadow-lg transition hover:bg-[#c49943]"
          >
            Solicitar Agendamento
          </Link>
        </div>
      </section>
    </main>
    </>
  )
}

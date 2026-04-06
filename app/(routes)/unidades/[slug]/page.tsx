import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Phone, Mail, Clock, CheckCircle2, MessageCircle } from 'lucide-react'
import { getUnitBySlug, getAllUnits } from '@/lib/sanity/queries'
import UnidadesCTA from '@/components/unidades/UnidadesCTA'
import LocalBusinessSchema from '@/components/seo/LocalBusinessSchema'
import HeaderWrapper from '@/components/layout/HeaderWrapper'
import FooterWrapper from '@/components/layout/FooterWrapper'
import UnitHeroFigma from '@/components/unidades/UnitHeroFigma'

interface PageProps {
  params: Promise<{ slug: string }>
}

// Generate static params for all units
export async function generateStaticParams() {
  const units = await getAllUnits()
  return units
    .map((unit: any) => {
      const slugValue = unit?.slug?.current ?? unit?.slug
      return slugValue ? { slug: slugValue } : null
    })
    .filter(Boolean) as Array<{ slug: string }>
}

export const dynamicParams = true

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

  // Prepare URL for schema
  const unitUrl = `${process.env.NEXT_PUBLIC_SITE_URL || 'https://novolargeriatria.com.br'}/unidades/${slug}`

  const contactCard = (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-lg">
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
                  {unit.postalCode && (
                    <>
                      <br />
                      CEP: {unit.postalCode}
                    </>
                  )}
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
              <a href={`mailto:${unit.email}`} className="text-[#2C3E6B] hover:underline">
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
          className="block w-full rounded-lg bg-[#D4A853] py-3 text-center font-semibold text-[#1a2745] transition hover:bg-[#D4A853]"
        >
          Agendar Visita
        </Link>
        {unit.whatsapp && (
          <a
            href={`https://wa.me/${unit.whatsapp.replace(/\D/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full rounded-lg bg-[#10B981] py-3 text-center font-semibold text-white transition hover:bg-[#059669]"
          >
            Falar no WhatsApp
          </a>
        )}
      </div>
    </div>
  )

  const mapEmbed = unit.coordinates ? (
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
  ) : null

  let defaultImage = '/placeholders/unidade-moinhos-luciana.jpg'
  if (slug === 'moinhos-luciana-de-abreu') defaultImage = encodeURI('/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/10.jpeg')
  if (slug === 'passo-dareia') defaultImage = encodeURI('/fotos-sobre/Passos de Areia - R. Brg. Oliveira Neri, 175/7.jpeg')
  if (slug === 'moinhos-barao-de-santo-angelo') defaultImage = encodeURI('/fotos-sobre/Moinhos de Vento -R. Barão de Santo Ângelo, 406/1.jpeg')

  return (
    <>
      <HeaderWrapper />

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
        image={defaultImage}
        url={unitUrl}
      />

      <main className="min-h-screen">
      {/* Hero Section */}
      <UnitHeroFigma
        name={unit.name}
        address={unit.address}
        neighborhood={unit.neighborhood}
        capacity={unit.capacity}
        whatsapp={unit.whatsapp}
        image={defaultImage}
      />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-16 lg:grid-cols-[3fr_2fr]">
          {/* Left Column */}
          <div className="space-y-16">
            {/* Detailed Description */}
            {unit.detailedDescription && (
              <section>
                <div>
                  <h2 className="mb-6 text-3xl font-bold text-[#2C3E6B]">Sobre a Unidade</h2>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 leading-relaxed">{unit.detailedDescription}</p>
                  </div>
                </div>

                <div className="mt-8 space-y-6 lg:hidden">
                  {contactCard}
                  {mapEmbed}
                </div>
              </section>
            )}

            {/* Features */}
            {unit.features && unit.features.length > 0 && (
              <section>
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
              <section>
                <h2 className="mb-6 text-3xl font-bold text-[#2C3E6B]">Galeria de Fotos</h2>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {unit.photos.map((photo: any, index: number) => (
                    <div key={index} className="group relative aspect-[4/3] overflow-hidden rounded-xl shadow-lg">
                      <Image
                        src={photo.asset.url}
                        alt={photo.alt || 'Foto ' + (index + 1) + ' - ' + unit.name}
                        fill
                        className="object-cover transition duration-500 group-hover:scale-110"
                        loading="lazy"
                        quality={85}
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
              <section>
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
          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-6">
              {contactCard}
              {mapEmbed}
            </div>
          </aside>
        </div>
      </div>
      {/* Chamada para Ação CTA */}
      <UnidadesCTA />
    </main>

    <FooterWrapper />
  </>
  )
}




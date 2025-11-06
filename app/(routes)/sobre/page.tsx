import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import GoogleReviews from '@/components/sections/GoogleReviews'
import Image from 'next/image'
import Link from 'next/link'

const HIGHLIGHTS = [
  {
    title: 'Hospedagem acolhedora',
    description:
      'Suites amplas, áreas externas arborizadas e ambientes personalizados para acolher diferentes níveis de dependência.',
    image: '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/1.jpeg',
  },
  {
    title: 'Equipe multidisciplinar 24h',
    description:
      'Médicos geriatras, enfermeiros, fisioterapeutas, terapeutas ocupacionais e musicoterapeutas atuam em regime integral.',
    image: '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/11.jpeg',
  },
  {
    title: 'Famílias próximas',
    description:
      'Processos transparentes, visitas guiadas frequentes e acompanhamento das rotinas para deixar a família sempre por perto.',
    image: '/fotos-sobre/Passos de Areia - R. Brg. Oliveira Neri, 175/1.jpeg',
  },
]

const EXPERIENCE_STEPS = [
  {
    title: 'Tour guiado pelas unidades',
    description:
      'Agende um horário, percorra suítes, jardins e espaços de convivência e conheça nossa equipe de perto.',
  },
  {
    title: 'Plano personalizado de cuidado',
    description:
      'Avaliações clínicas e sociais para entender o perfil do residente e montar um plano que respeita a história da família.',
  },
  {
    title: 'Integração e acompanhamento contínuo',
    description:
      'Relatórios recorrentes, adaptações da rotina e participação da família para garantir conforto e segurança em cada fase.',
  },
]

const GALLERY_IMAGES = [
  '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/2.jpeg',
  '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/3.jpeg',
  '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/5.jpeg',
  '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/8.jpeg',
  '/fotos-sobre/Moinhos de Vento -R. Barão de Santo Ângelo, 406/1.jpeg',
  '/fotos-sobre/Passos de Areia - R. Brg. Oliveira Neri, 175/12.jpeg',
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="relative">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/14.jpeg"
              alt="Ambiente acolhedor em uma unidade da Novo Lar Geriatria"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0d1a36]/90 via-[#1d3364]/80 to-[#2E7B7F]/70" />
            <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] opacity-20" />
          </div>

          <div className="relative z-10 mx-auto max-w-6xl px-4 py-24 sm:py-28 lg:py-32">
            <div className="max-w-3xl text-white">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em]">
                Experiência Novo Lar
              </span>
              <h1 className="mt-6 text-4xl font-bold leading-snug sm:text-5xl lg:text-6xl">
                Um lar seguro, humano e cheio de vida para quem você ama
              </h1>
              <p className="mt-6 text-lg text-white/85 sm:text-xl">
                Há mais de duas décadas, a Novo Lar Geriatria oferece hospedagem assistida e cuidados especializados
                em Porto Alegre, unindo estrutura, equipe multidisciplinar e proximidade com as famílias.
              </p>
              <div className="mt-8 flex flex-col gap-3 text-sm text-white/80 sm:flex-row sm:items-center sm:gap-6">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#F5D481]" />
                  3 unidades em bairros nobres
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#F5D481]" />
                  Equipe 24 horas e planos personalizados
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#F5D481]" />
                  Tour guiado e avaliação sem compromisso
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Destaques */}
        <section className="bg-white py-16 sm:py-20">
          <div className="container">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold text-[#1a2745] sm:text-4xl">
                Cuidamos de cada detalhe da experiência
              </h2>
              <p className="mt-4 text-base text-gray-600 sm:text-lg">
                Conheça os pilares que fazem da Novo Lar referência em hospedagem assistida, reabilitação e home care
                para idosos e pacientes de alta complexidade.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {HIGHLIGHTS.map((item) => (
                <div
                  key={item.title}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-lg font-semibold text-[#1a2745]">{item.title}</h3>
                    <p className="mt-3 text-sm text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Jornada */}
        <section className="bg-[#f7f9fc] py-16 sm:py-20">
          <div className="container">
            <div className="max-w-3xl text-center mx-auto">
              <h2 className="text-3xl font-bold text-[#1a2745] sm:text-4xl">
                Como preparamos a chegada da sua família
              </h2>
              <p className="mt-4 text-base text-gray-600 sm:text-lg">
                Transparência e cuidado em cada etapa para garantir uma transição tranquila e acolhedora.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {EXPERIENCE_STEPS.map((step, index) => (
                <div
                  key={step.title}
                  className="relative flex h-full flex-col rounded-2xl border border-[#e3e8f5] bg-white p-6 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <span className="absolute -top-4 left-6 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#1d3364] text-sm font-bold text-white shadow-md">
                    {index + 1}
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-[#1a2745]">{step.title}</h3>
                  <p className="mt-3 flex-1 text-sm text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Galeria */}
        <section className="bg-white py-16 sm:py-20">
          <div className="container">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <h2 className="text-3xl font-bold text-[#1a2745] sm:text-4xl">
                  Ambientes pensados para acolher famílias inteiras
                </h2>
                <p className="mt-4 text-base text-gray-600 sm:text-lg">
                  As unidades Novo Lar possuem suítes individuais e duplas, espaços de convivência banhados por luz
                  natural, jardins, salas terapêuticas e estruturas completas para reabilitação e cuidados clínicos.
                </p>
              </div>
              <Link
                href="/fotos"
                className="inline-flex items-center gap-2 self-start rounded-full border border-[#1d3364] px-5 py-2 text-sm font-semibold text-[#1d3364] transition hover:bg-[#1d3364] hover:text-white"
              >
                Ver tour completo
              </Link>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {GALLERY_IMAGES.map((src) => (
                <div key={src} className="group relative h-56 overflow-hidden rounded-2xl">
                  <Image
                    src={src}
                    alt="Ambientes da Novo Lar Geriatria"
                    fill
                    sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Avaliações do Google */}
        <GoogleReviews />
      </main>

      <Footer />
    </div>
  )
}


'use client'

import { MapPin, CheckCircle2, Phone } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function EstruturaUnitsShowcase() {
  return (
    <section
      className="py-20 px-8 md:px-24 lg:px-36"
      style={{ background: 'linear-gradient(180deg, #F9FAFB 0%, #FFFFFF 100%)' }}
    >
      <div className="max-w-[1180px] mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center gap-4 mb-12 text-center">
          <h2 className="text-[#2C3E6B] font-bold text-4xl md:text-5xl leading-tight">
            Unidades Novo Lar Geriatria
          </h2>

          <p className="text-[#4A5565] text-lg leading-relaxed max-w-[1026px]">
            Escolha a unidade mais próxima para conhecer de perto nossa estrutura e os ambientes preparados para acolher o seu familiar.
          </p>
        </div>

        {/* Units Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Unit 1: Moinhos de Vento - Luciana de Abreu */}
          <div className="flex flex-col bg-white rounded-3xl border border-[#E5E7EB] shadow-sm overflow-hidden">
            {/* Image */}
            <div className="relative h-56">
              <Image
                src="/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/10.jpeg"
                alt="Moinhos de Vento · Rua Luciana de Abreu, 151"
                fill
                className="object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0) 100%)',
                }}
              />
              <div className="absolute bottom-4 left-4 flex items-center gap-2 px-3 py-1 bg-white/90 rounded-full">
                <MapPin className="w-3.5 h-3.5 text-[#2C3E6B]" />
                <span className="text-[#2C3E6B] font-bold text-xs tracking-[3.6px] uppercase">
                  Porto Alegre
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col gap-4">
              <h3 className="text-[#2C3E6B] font-bold text-xl leading-7">
                Moinhos de Vento · Rua Luciana de Abreu, 151
              </h3>

              <p className="text-[#4A5565] text-sm leading-5">
                Rua Luciana de Abreu, 151 · Porto Alegre - RS
              </p>

              {/* Features List */}
              <div className="flex flex-col gap-2">
                <div className="flex gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2E7B7F] flex-shrink-0 mt-0.5" />
                  <p className="text-[#4A5565] text-sm">Ambiente arborizado e acolhedor</p>
                </div>
                <div className="flex gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2E7B7F] flex-shrink-0 mt-0.5" />
                  <p className="text-[#4A5565] text-sm">Suítes individuais e duplas</p>
                </div>
                <div className="flex gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2E7B7F] flex-shrink-0 mt-0.5" />
                  <p className="text-[#4A5565] text-sm">Próximo aos serviços do bairro Moinhos</p>
                </div>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-[#E5E7EB]">
                <span className="text-[#2C3E6B] font-bold text-sm">(51) 3346.7620</span>
                <Link
                  href="/unidade-luciana-de-abreu"
                  className="text-[#2E7B7F] font-bold text-sm hover:underline"
                >
                  Ver unidade
                </Link>
              </div>
            </div>
          </div>

          {/* Unit 2: Passo d&apos;Areia */}
          <div className="flex flex-col bg-white rounded-3xl border border-[#E5E7EB] shadow-sm overflow-hidden">
            {/* Image */}
            <div className="relative h-56">
              <Image
                src="/fotos-sobre/Passos de Areia - R. Brg. Oliveira Neri, 175/6.jpeg"
                alt="Passo d&apos;Areia · Rua Brigadeiro Oliveira Neri, 175"
                fill
                className="object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0) 100%)',
                }}
              />
              <div className="absolute bottom-4 left-4 flex items-center gap-2 px-3 py-1 bg-white/90 rounded-full">
                <MapPin className="w-3.5 h-3.5 text-[#2C3E6B]" />
                <span className="text-[#2C3E6B] font-bold text-xs tracking-[3.6px] uppercase">
                  Porto Alegre
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col gap-4">
              <h3 className="text-[#2C3E6B] font-bold text-xl leading-7">
                Passo d&apos;Areia · Rua Brigadeiro Oliveira Neri, 175
              </h3>

              <p className="text-[#4A5565] text-sm leading-5">
                Rua Brigadeiro Oliveira Neri, 175 · Porto Alegre - RS
              </p>

              {/* Features List */}
              <div className="flex flex-col gap-2">
                <div className="flex gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2E7B7F] flex-shrink-0 mt-0.5" />
                  <p className="text-[#4A5565] text-sm">Espaços amplos e iluminados</p>
                </div>
                <div className="flex gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2E7B7F] flex-shrink-0 mt-0.5" />
                  <p className="text-[#4A5565] text-sm">Fácil acesso pelas principais vias da zona norte</p>
                </div>
                <div className="flex gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2E7B7F] flex-shrink-0 mt-0.5" />
                  <p className="text-[#4A5565] text-sm">Rotina integrada de terapias e atividades</p>
                </div>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-[#E5E7EB]">
                <span className="text-[#2C3E6B] font-bold text-sm">(51) 3376.9462</span>
                <Link
                  href="/unidade-novo-lar-geriatria"
                  className="text-[#2E7B7F] font-bold text-sm hover:underline"
                >
                  Ver unidade
                </Link>
              </div>
            </div>
          </div>

          {/* Unit 3: Moinhos de Vento - Barão */}
          <div className="flex flex-col bg-white rounded-3xl border border-[#E5E7EB] shadow-sm overflow-hidden">
            {/* Image */}
            <div className="relative h-56">
              <Image
                src="/fotos-sobre/Moinhos de Vento -R. Barão de Santo Ângelo, 406/1.jpeg"
                alt="Moinhos de Vento · R. Barão de Santo Ângelo, 406"
                fill
                className="object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0) 100%)',
                }}
              />
              <div className="absolute bottom-4 left-4 flex items-center gap-2 px-3 py-1 bg-white/90 rounded-full">
                <MapPin className="w-3.5 h-3.5 text-[#2C3E6B]" />
                <span className="text-[#2C3E6B] font-bold text-xs tracking-[3.6px] uppercase">
                  Porto Alegre
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col gap-4">
              <h3 className="text-[#2C3E6B] font-bold text-xl leading-7">
                Moinhos de Vento · R. Barão de Santo Ângelo, 406
              </h3>

              <p className="text-[#4A5565] text-sm leading-5">
                Rua Barão de Santo Ângelo, 406 · Porto Alegre - RS
              </p>

              {/* Features List */}
              <div className="flex flex-col gap-2">
                <div className="flex gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2E7B7F] flex-shrink-0 mt-0.5" />
                  <p className="text-[#4A5565] text-sm">Estrutura moderna em região central</p>
                </div>
                <div className="flex gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2E7B7F] flex-shrink-0 mt-0.5" />
                  <p className="text-[#4A5565] text-sm">Áreas de convivência integradas com jardins</p>
                </div>
                <div className="flex gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2E7B7F] flex-shrink-0 mt-0.5" />
                  <p className="text-[#4A5565] text-sm">Equipe de referência em reabilitação e acolhimento</p>
                </div>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-[#E5E7EB]">
                <span className="text-[#2C3E6B] font-bold text-sm">(51) 3346.7620</span>
                <Link
                  href="/unidade-barao-sto-angelo"
                  className="text-[#2E7B7F] font-bold text-sm hover:underline"
                >
                  Ver unidade
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

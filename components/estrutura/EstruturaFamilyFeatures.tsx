'use client'

import { Users, Heart, CheckCircle2, Building } from 'lucide-react'

export default function EstruturaFamilyFeatures() {
  return (
    <section className="py-20 px-8 md:px-24 lg:px-36">
      <div className="max-w-[1156px] mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center gap-4 mb-12 text-center">
          <h2 className="text-[#2C3E6B] font-bold text-4xl md:text-5xl leading-tight">
            Estrutura que acolhe famílias inteiras
          </h2>

          <p className="text-[#4A5565] text-lg leading-relaxed max-w-[1150px]">
            A combinação entre ambiente planejado, equipe próxima e rotinas humanizadas garante tranquilidade para o idoso e para quem acompanha de perto.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Feature 1 */}
          <div className="flex flex-col p-6 bg-white rounded-2xl border border-[#E5E7EB] shadow-sm">
            {/* Icon */}
            <div className="w-12 h-12 flex items-center justify-center bg-[#2E7B7F]/10 rounded-xl mb-6">
              <Users className="w-6 h-6 text-[#2E7B7F]" />
            </div>

            {/* Title */}
            <h3 className="text-[#2C3E6B] font-bold text-lg leading-7 mb-4">
              Equipe multidisciplinar
            </h3>

            {/* Description */}
            <p className="text-[#4A5565] text-sm leading-5">
              Médicos, enfermeiros, nutricionistas, terapeutas ocupacionais, musicoterapeutas e cuidadores atuando de forma integrada.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col p-6 bg-white rounded-2xl border border-[#E5E7EB] shadow-sm">
            {/* Icon */}
            <div className="w-12 h-12 flex items-center justify-center bg-[#2E7B7F]/10 rounded-xl mb-6">
              <Heart className="w-6 h-6 text-[#2E7B7F]" />
            </div>

            {/* Title */}
            <h3 className="text-[#2C3E6B] font-bold text-lg leading-7 mb-4">
              Rotinas acolhedoras
            </h3>

            {/* Description */}
            <p className="text-[#4A5565] text-sm leading-5">
              Programações que estimulam autonomia, socialização e bem-estar emocional em um ambiente familiar e seguro.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col p-6 bg-white rounded-2xl border border-[#E5E7EB] shadow-sm">
            {/* Icon */}
            <div className="w-12 h-12 flex items-center justify-center bg-[#2E7B7F]/10 rounded-xl mb-6">
              <CheckCircle2 className="w-6 h-6 text-[#2E7B7F]" />
            </div>

            {/* Title */}
            <h3 className="text-[#2C3E6B] font-bold text-lg leading-7 mb-4">
              Planos personalizados
            </h3>

            {/* Description */}
            <p className="text-[#4A5565] text-sm leading-5">
              Planos de cuidados construídos com cada família, respeitando históricos clínicos, preferências e objetivos individuais.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="flex flex-col p-6 bg-white rounded-2xl border border-[#E5E7EB] shadow-sm">
            {/* Icon */}
            <div className="w-12 h-12 flex items-center justify-center bg-[#2E7B7F]/10 rounded-xl mb-6">
              <Building className="w-6 h-6 text-[#2E7B7F]" />
            </div>

            {/* Title */}
            <h3 className="text-[#2C3E6B] font-bold text-lg leading-7 mb-4">
              Estruturas completas
            </h3>

            {/* Description */}
            <p className="text-[#4A5565] text-sm leading-5">
              Unidades com acessibilidade total, jardins, salas de convivência, elevadores e espaços terapêuticos preparados para diferentes perfis.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

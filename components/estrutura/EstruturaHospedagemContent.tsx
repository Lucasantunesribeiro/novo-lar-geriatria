'use client'

import { CheckCircle2, List } from 'lucide-react'
import Image from 'next/image'

export default function EstruturaHospedagemContent() {
  return (
    <section className="py-20 px-8 md:px-24 lg:px-36">
      <div className="max-w-[1156px] mx-auto flex flex-col lg:flex-row gap-12">
        {/* Left Content */}
        <div className="flex-1 max-w-[682px]">
          <div className="flex flex-col gap-8">
            {/* First Paragraph */}
            <p className="text-[#364153] text-base leading-relaxed">
              A hospedagem assistida 24 horas é muito mais do que um espaço de moradia: trata-se de um modelo de cuidado integral que combina assistência médica, enfermagem especializada, suporte nutricional, atividades terapêuticas e acolhimento humanizado. Na Novo Lar Geriatria, proporcionamos um ambiente preparado para atender idosos em diferentes graus de dependência, desde aqueles que buscam autonomia e convivência social até pacientes que necessitam de cuidados intensivos e monitoramento contínuo.
            </p>

            {/* Second Paragraph with Bold Text */}
            <div className="text-[#364153] text-base leading-relaxed">
              <p>
                Diferente do cuidado domiciliar, a hospedagem assistida oferece{' '}
                <strong className="font-bold">infraestrutura completa, equipe multidisciplinar integrada e protocolos de segurança</strong>{' '}
                que garantem resposta imediata a qualquer necessidade. Cada residente recebe um{' '}
                <strong className="font-bold">plano de cuidado personalizado</strong>, elaborado com base em avaliação clínica detalhada, histórico de saúde, preferências pessoais e orientações da família. Esse plano é constantemente revisado pela equipe, assegurando evolução e bem-estar em cada etapa do envelhecimento.
              </p>
            </div>

            {/* Image Grid */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="aspect-[3/2] rounded-2xl border border-[#E5E7EB] overflow-hidden shadow-sm relative">
                <Image
                  src="/placeholders/area-externa.jpg"
                  alt="Área externa arborizada da Novo Lar com moradores em atividade"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="aspect-[3/2] rounded-2xl border border-[#E5E7EB] overflow-hidden shadow-sm relative">
                <Image
                  src="/placeholders/equipe-enfermagem.jpg"
                  alt="Equipe de enfermagem acompanhando residente durante a rotina diária"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="aspect-[3/2] rounded-2xl border border-[#E5E7EB] overflow-hidden shadow-sm relative">
                <Image
                  src="/placeholders/suite-climatizada.jpg"
                  alt="Suíte climatizada e acessível da Novo Lar Geriatria"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="aspect-[3/2] rounded-2xl border border-[#E5E7EB] overflow-hidden shadow-sm relative">
                <Image
                  src="/placeholders/ambiente-acolhedor.jpg"
                  alt="Ambiente acolhedor com equipe multidisciplinar presente"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div
          className="w-full lg:w-[426px] p-8 flex flex-col gap-4 rounded-3xl border"
          style={{
            background: 'rgba(46, 123, 127, 0.05)',
            borderColor: 'rgba(46, 123, 127, 0.2)',
            boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px -1px rgba(0, 0, 0, 0.1)',
          }}
        >
          {/* Header */}
          <div className="flex items-center gap-3">
            <List className="w-6 h-6 text-[#2C3E6B]" />
            <h3 className="text-[#2C3E6B] font-bold text-sm tracking-[4.2px] uppercase">
              Cuidado que se adapta a cada família
            </h3>
          </div>

          {/* List Items */}
          <div className="flex flex-col gap-3">
            <div className="flex gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#2E7B7F] flex-shrink-0 mt-0.5" />
              <p className="text-[#364153] text-sm leading-5">
                Planos permanentes ou temporários totalmente personalizados conforme perfil clínico e necessidades de cada família
              </p>
            </div>

            <div className="flex gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#2E7B7F] flex-shrink-0 mt-0.5" />
              <p className="text-[#364153] text-sm leading-5">
                Equipe multidisciplinar completa presente 24h: médico geriatra, enfermeiros, fisioterapeutas, nutricionistas, psicólogos e terapeutas ocupacionais
              </p>
            </div>

            <div className="flex gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#2E7B7F] flex-shrink-0 mt-0.5" />
              <p className="text-[#364153] text-sm leading-5">
                Ambientes totalmente acessíveis com pisos antiderrapantes, corrimãos, áreas verdes arborizadas e salas de convivência climatizadas
              </p>
            </div>

            <div className="flex gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#2E7B7F] flex-shrink-0 mt-0.5" />
              <p className="text-[#364153] text-sm leading-5">
                Quartos individuais ou compartilhados com camas hospitalares, climatização, banheiros adaptados e sistema de chamada de emergência
              </p>
            </div>

            <div className="flex gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#2E7B7F] flex-shrink-0 mt-0.5" />
              <p className="text-[#364153] text-sm leading-5">
                Programação diária supervisionada: atividades terapêuticas, recreativas, culturais, fisioterapia em grupo e celebrações especiais
              </p>
            </div>

            <div className="flex gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#2E7B7F] flex-shrink-0 mt-0.5" />
              <p className="text-[#364153] text-sm leading-5">
                Alimentação balanceada com seis refeições diárias elaboradas por nutricionistas especializados em geriatria
              </p>
            </div>

            <div className="flex gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#2E7B7F] flex-shrink-0 mt-0.5" />
              <p className="text-[#364153] text-sm leading-5">
                Administração controlada de medicamentos com checklist de enfermagem, controle de horários e integração com farmácias parceiras
              </p>
            </div>

            <div className="flex gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#2E7B7F] flex-shrink-0 mt-0.5" />
              <p className="text-[#364153] text-sm leading-5">
                Monitoramento contínuo de sinais vitais, glicemia, pressão arterial e demais parâmetros clínicos conforme necessidade individual
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

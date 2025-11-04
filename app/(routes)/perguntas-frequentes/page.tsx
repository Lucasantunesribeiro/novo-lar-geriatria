import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'
import { HelpCircle, ArrowRight } from 'lucide-react'
import { FAQPageSchema } from '@/components/seo/JsonLd'

export const metadata: Metadata = {
  title: 'Perguntas Frequentes (FAQ) - Tire suas Dúvidas | Novo Lar Geriatria',
  description: 'Encontre respostas para as principais dúvidas sobre hospedagem assistida, cuidados com idosos, valores, estrutura e serviços da Novo Lar Geriatria em Porto Alegre.',
  keywords: ['faq residencial geriátrico', 'perguntas casa de repouso', 'dúvidas hospedagem idosos', 'como funciona clínica geriátrica', 'valores casa de repouso porto alegre'],
  openGraph: {
    title: 'Perguntas Frequentes (FAQ) | Novo Lar Geriatria',
    description: 'Tire suas dúvidas sobre hospedagem assistida e cuidados com idosos em Porto Alegre.',
    url: 'https://novolargeriatria.com.br/perguntas-frequentes',
    type: 'website',
  },
  alternates: {
    canonical: 'https://novolargeriatria.com.br/perguntas-frequentes',
  },
}

const FAQS = [
  {
    question: 'Como funciona a hospedagem assistida para idosos na Novo Lar?',
    answer: 'A hospedagem assistida da Novo Lar oferece cuidado integral 24 horas com equipe multidisciplinar incluindo médicos geriatras, enfermeiros, fisioterapeutas, nutricionistas e terapeutas ocupacionais. Oferecemos planos permanentes ou temporários adaptados ao grau de dependência de cada residente, com acompanhamento individualizado e ambiente acolhedor.',
  },
  {
    question: 'Quais são os diferenciais da Novo Lar Geriatria?',
    answer: 'Nossos principais diferenciais incluem: mais de 20 anos de experiência, equipe multidisciplinar 24h, três unidades em bairros nobres de Porto Alegre (Moinhos de Vento e Passo d\'Areia), estrutura moderna e acessível, programação diária de atividades terapêuticas, nutrição individualizada, e atendimento humanizado com comunicação transparente com familiares.',
  },
  {
    question: 'Posso visitar as unidades antes de decidir pela hospedagem?',
    answer: 'Sim! Incentivamos visitas presenciais para que familiares conheçam nossa estrutura, equipe e rotina de cuidados. Entre em contato pelo telefone (51) 3346.7620 ou WhatsApp para agendar uma visita guiada. As visitas podem ser realizadas de segunda a domingo.',
  },
  {
    question: 'Qual é a localização das unidades?',
    answer: 'Possuímos três unidades em Porto Alegre: duas no bairro Moinhos de Vento (Rua Luciana de Abreu, 151 e R. Barão de Santo Ângelo, 406) e uma no Passo d\'Areia (R. Brigadeiro Oliveira Neri, 175). Todas as unidades estão próximas a parques, hospitais e têm fácil acesso.',
  },
  {
    question: 'Quais serviços estão inclusos na hospedagem?',
    answer: 'A hospedagem inclui: acomodação em quarto individual ou compartilhado, seis refeições diárias balanceadas, acompanhamento médico geriatra, enfermagem 24h, administração de medicamentos, fisioterapia, terapia ocupacional, atividades recreativas, lavanderia de roupas pessoais e de cama, higiene pessoal assistida, e monitoramento contínuo da saúde.',
  },
  {
    question: 'Como funciona o acompanhamento médico?',
    answer: 'Cada residente recebe acompanhamento semanal de médico geriatra, com avaliações individuais e integração com especialistas da família. Mantemos histórico de saúde atualizado e comunicação ativa com familiares. A enfermagem técnica atua 24h monitorando sinais vitais, administrando medicações e prestando todos os cuidados necessários.',
  },
  {
    question: 'Aceitam idosos com Alzheimer ou demência?',
    answer: 'Sim, temos experiência e estrutura para receber idosos com Alzheimer, demência e outras condições neurodegenerativas. Nossa equipe é treinada para oferecer cuidados especializados, com protocolos específicos de segurança, atividades de estimulação cognitiva e ambiente adaptado.',
  },
  {
    question: 'Como funciona a comunicação com a família?',
    answer: 'Mantemos comunicação transparente através de relatórios diários sobre alimentação, medicação e atividades, comunicação imediata em caso de intercorrências, reuniões periódicas com a equipe para discutir evolução, e canais diretos de contato via telefone e WhatsApp. Visitas são permitidas todos os dias, respeitando o bem-estar do residente.',
  },
  {
    question: 'Qual é o valor da hospedagem?',
    answer: 'Os valores variam conforme o tipo de acomodação (individual ou compartilhada), grau de dependência e serviços necessários. Entre em contato conosco para receber um orçamento personalizado e detalhado. Oferecemos planos flexíveis para atender diferentes necessidades e orçamentos.',
  },
  {
    question: 'Posso trazer objetos pessoais do meu familiar?',
    answer: 'Sim! Incentivamos que o residente traga objetos pessoais como fotos, quadros, roupas preferidas e itens que tragam conforto emocional. Isso ajuda a tornar o ambiente mais familiar e acolhedor, facilitando a adaptação.',
  },
  {
    question: 'Há período de adaptação?',
    answer: 'Sim, oferecemos um período de adaptação gradual, respeitando o tempo de cada residente. Nossa equipe está preparada para acolher e auxiliar neste processo de transição, mantendo contato próximo com a família e ajustando a rotina conforme necessário.',
  },
  {
    question: 'Como são as atividades recreativas e terapêuticas?',
    answer: 'Oferecemos programação diária variada incluindo musicoterapia, artes e artesanato, leitura, jogos de memória, exercícios físicos supervisionados, atividades sociais, confraternizações e passeios nas áreas verdes. Todas as atividades são supervisionadas por terapeutas ocupacionais e adaptadas às capacidades de cada residente.',
  },
]

export default function PerguntasFrequentesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <FAQPageSchema faqs={FAQS} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#2C3E6B] to-[#4A9B9F] py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-6">
              <HelpCircle className="w-4 h-4" />
              <span className="text-sm font-semibold">Central de Ajuda</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Perguntas Frequentes
            </h1>
            <p className="text-lg text-white/90">
              Encontre respostas para as principais dúvidas sobre nossos serviços
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {FAQS.map((faq, index) => (
                <details
                  key={index}
                  className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <summary className="flex cursor-pointer items-start justify-between gap-4 font-semibold text-[#2C3E6B] text-lg">
                    <span className="flex-1">{faq.question}</span>
                    <span className="text-3xl text-[#C49943] transition-transform group-open:rotate-45 flex-shrink-0">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 text-gray-700 leading-relaxed text-base">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#2C3E6B] mb-4">
              Ainda tem dúvidas?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Nossa equipe está pronta para esclarecer todas as suas questões e ajudar você a encontrar a melhor solução
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contato"
                className="inline-flex items-center gap-2 bg-[#2C3E6B] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#1f2d4f] transition-all shadow-lg"
              >
                Entrar em Contato
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:+555133467620"
                className="inline-flex items-center gap-2 border-2 border-[#2C3E6B] text-[#2C3E6B] px-8 py-4 rounded-xl font-semibold hover:bg-[#2C3E6B] hover:text-white transition-all"
              >
                Ligar: (51) 3346.7620
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

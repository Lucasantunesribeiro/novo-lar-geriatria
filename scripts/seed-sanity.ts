/**
 * Script para popular o Sanity Studio com dados iniciais de todas as páginas
 *
 * Uso: npx tsx scripts/seed-sanity.ts
 */

import { createClient } from '@sanity/client'
import { config } from 'dotenv'
import { resolve } from 'path'

// Carrega variáveis de ambiente do .env.local
config({ path: resolve(process.cwd(), '.env.local') })

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
const token = process.env.SANITY_API_TOKEN

if (!projectId || !token) {
  console.error('❌ ERRO: Variáveis de ambiente do Sanity não encontradas!\n')
  console.log('Verifique se o arquivo .env.local existe e contém:')
  console.log('  NEXT_PUBLIC_SANITY_PROJECT_ID')
  console.log('  NEXT_PUBLIC_SANITY_DATASET')
  console.log('  SANITY_API_TOKEN\n')
  console.log(`Status atual:`)
  console.log(`  PROJECT_ID: ${projectId ? '✅ Configurado' : '❌ Ausente'}`)
  console.log(`  DATASET: ${dataset ? '✅ Configurado' : '❌ Ausente'}`)
  console.log(`  TOKEN: ${token ? '✅ Configurado' : '❌ Ausente'}\n`)
  process.exit(1)
}

const client = createClient({
  projectId,
  dataset,
  token,
  useCdn: false,
  apiVersion: '2024-01-01',
})

const faqPageData = {
  _type: 'faqPage',
  _id: 'faqPage-singleton',
  title: 'Perguntas Frequentes',
  hero: {
    badge: 'Central de Ajuda',
    title: 'Perguntas Frequentes',
    description: 'Encontre respostas para as principais dúvidas sobre nossos serviços',
  },
  faqs: [
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
  ],
  ctaSection: {
    title: 'Ainda tem dúvidas?',
    description: 'Nossa equipe está pronta para esclarecer todas as suas questões e ajudar você a encontrar a melhor solução',
    buttons: [
      { label: 'Entrar em Contato', href: '/contato', variant: 'primary' },
      { label: 'Ligar: (51) 3346.7620', href: 'tel:+555133467620', variant: 'secondary' },
    ],
  },
  seo: {
    title: 'Perguntas Frequentes (FAQ) - Tire suas Dúvidas | Novo Lar Geriatria',
    description: 'Encontre respostas para as principais dúvidas sobre hospedagem assistida, cuidados com idosos, valores, estrutura e serviços da Novo Lar Geriatria em Porto Alegre.',
  },
}

async function seedFaqPage() {
  try {
    console.log('📝 Criando página FAQ...')
    await client.createOrReplace(faqPageData)
    console.log('✅ Página FAQ criada com sucesso!')
  } catch (error) {
    console.error('❌ Erro ao criar página FAQ:', error)
  }
}

async function main() {
  console.log('🚀 Iniciando seed do Sanity...\n')
  console.log(`📋 Configuração:`)
  console.log(`   Project: ${projectId}`)
  console.log(`   Dataset: ${dataset}`)
  console.log(`   Token: ${token?.substring(0, 10)}...\n`)

  await seedFaqPage()

  console.log('\n✅ Seed concluído!')
  console.log('📝 Acesse o Sanity Studio para ver os dados: npm run sanity:dev')
}

main()

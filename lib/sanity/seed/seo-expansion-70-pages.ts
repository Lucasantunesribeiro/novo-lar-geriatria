/**
 * Seed — 70 SEO Expansion Pages
 *
 * Usage:
 *   npx tsx lib/sanity/seed/seo-expansion-70-pages.ts
 *
 * Requires: NEXT_PUBLIC_SANITY_PROJECT_ID, NEXT_PUBLIC_SANITY_DATASET, SANITY_API_TOKEN
 */

import { createClient } from '@sanity/client'

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  token: process.env.SANITY_API_TOKEN!,
  apiVersion: '2024-01-01',
  useCdn: false,
})

// ─── HELPERS ──────────────────────────────────────────────────────────────────

const hero = (opts: {
  eyebrow: string
  heading: string
  description: string
  badges: { value: string; label: string }[]
  breadcrumbs: { label: string; href?: string }[]
}) => ({
  _type: 'seoHeroSection',
  _key: 'hero',
  eyebrow: opts.eyebrow,
  heading: opts.heading,
  description: opts.description,
  trustBadges: opts.badges.map((b, i) => ({ _key: `b${i}`, ...b })),
  primaryCta: { type: 'whatsapp', label: 'Falar por WhatsApp' },
  secondaryCta: { type: 'phone', label: 'Ligar agora' },
  breadcrumbs: opts.breadcrumbs.map((b, i) => ({ _key: `bc${i}`, ...b })),
})

const twoCol = (opts: {
  leftEyebrow?: string
  leftHeading: string
  leftParagraphs: string[]
  rightHeading: string
  rightType?: 'checklist' | 'cards' | 'distanceTable'
  checklistItems?: string[]
  cardItems?: { title: string; text: string }[]
  background?: 'white' | 'gray'
}) => ({
  _type: 'twoColumnSection',
  _key: `two-${Math.random().toString(36).slice(2, 7)}`,
  ...opts,
  checklistItems: opts.checklistItems,
  cardItems: opts.cardItems?.map((c, i) => ({ _key: `c${i}`, ...c })),
})

const faq = (items: { question: string; answer: string }[]) => ({
  _type: 'faqSection',
  _key: 'faq',
  title: 'Perguntas Frequentes',
  faqs: items.map((f, i) => ({ _key: `f${i}`, ...f })),
})

const cta = (heading: string, description: string) => ({
  _type: 'ctaSection',
  _key: 'cta',
  heading,
  description,
  style: 'gradient',
  ctas: [
    { _key: 'cta1', label: 'Falar por WhatsApp', href: '#whatsapp', variant: 'primary' },
    { _key: 'cta2', label: 'Ligar agora', href: '#phone', variant: 'secondary' },
  ],
})

const relatedLinks = (heading: string, links: { label: string; href: string }[]) => ({
  _type: 'relatedLinksSection',
  _key: 'links',
  heading,
  links: links.map((l, i) => ({ _key: `l${i}`, ...l })),
})

const stdBadges = [
  { value: '30+', label: 'anos de experiência' },
  { value: '3', label: 'unidades em Porto Alegre' },
  { value: '24h', label: 'equipe clínica presente' },
  { value: '5,0', label: 'estrelas no Google' },
]

// ─── PAGES ────────────────────────────────────────────────────────────────────

const pages: any[] = [

  // ── ONDA 1: CONDIÇÃO ────────────────────────────────────────────────────────

  {
    _id: 'seo-page-cuidados-parkinson',
    _type: 'page', title: 'Cuidados Parkinson', path: '/cuidados-parkinson', published: true,
    seo: {
      title: 'Cuidados para Idosos com Parkinson em Porto Alegre | Novo Lar Geriatria',
      description: 'Residencial geriátrico especializado em Parkinson em Porto Alegre. Fisioterapia 24h, fonoaudiologia, equipe treinada para mobilidade, tremores e prevenção de quedas.',
    },
    serviceSchema: { name: 'Cuidados para Parkinson', description: 'Assistência 24h para idosos com Parkinson em Porto Alegre.', areaServed: 'Porto Alegre' },
    sections: [
      hero({
        eyebrow: 'Cuidados Especializados · Parkinson · Porto Alegre',
        heading: 'Cuidados Especializados para Idosos com Parkinson',
        description: 'A Novo Lar Geriatria oferece cuidados especializados 24h para idosos com Parkinson em Porto Alegre, com fisioterapia diária, fonoaudiologia e ambiente adaptado para segurança e mobilidade.',
        badges: stdBadges,
        breadcrumbs: [{ label: 'Home', href: '/' }, { label: 'Cuidados para Parkinson' }],
      }),
      twoCol({
        leftEyebrow: 'Parkinson e cuidado especializado',
        leftHeading: 'Por que o Parkinson exige equipe treinada?',
        leftParagraphs: [
          'O Parkinson é uma doença neurodegenerativa que progride com o tempo, afetando mobilidade, equilíbrio, fala e deglutição. Cada fase exige ajustes no cuidado.',
          'Na Novo Lar, nossa equipe é treinada especificamente para as manifestações do Parkinson: prevenção de quedas, adaptação alimentar para disfagia, fisioterapia de marcha e comunicação com pacientes em fases avançadas.',
        ],
        rightHeading: 'O que oferecemos para residentes com Parkinson',
        rightType: 'checklist',
        checklistItems: [
          'Fisioterapia diária com foco em marcha, equilíbrio e treino de força',
          'Fonoaudiologia para disfagia e comunicação',
          'Ambiente adaptado: pisos antiderrapantes, barras de apoio e sem obstáculos',
          'Administração correta e horária dos medicamentos antiparkinsonianos',
          'Nutrição adaptada para texturas e necessidades calóricas',
          'Monitoramento de sinais de progressão e comunicação com a família',
        ],
      }),
      faq([
        { question: 'A Novo Lar aceita idosos com Parkinson em todas as fases?', answer: 'Sim. Atendemos residentes em fases iniciais, moderadas e avançadas do Parkinson, adaptando o plano de cuidados à evolução de cada caso.' },
        { question: 'Como é feita a prevenção de quedas?', answer: 'Combinamos ambiente adaptado, fisioterapia de equilíbrio, uso de auxiliares de marcha e monitoramento contínuo da equipe de enfermagem.' },
        { question: 'O que é disfagia e como vocês lidam?', answer: 'Disfagia é a dificuldade de engolir, frequente no Parkinson avançado. Nossa equipe de fonoaudiologia avalia e adapta texturas alimentares e líquidos para prevenir pneumonia aspirativa.' },
      ]),
      cta('Fale com a nossa equipe especializada em Parkinson', 'Agende uma visita gratuita e conheça nossas unidades em Porto Alegre.'),
      relatedLinks('Páginas relacionadas', [
        { label: 'Cuidados para Alzheimer', href: '/cuidados-alzheimer' },
        { label: 'Cuidados para Demência', href: '/cuidados-demencia' },
        { label: 'Reabilitação Geriátrica', href: '/cuidados-reabilitacao-geriatrica' },
        { label: 'Casa de Repouso em Porto Alegre', href: '/porto-alegre' },
      ]),
    ],
  },

  {
    _id: 'seo-page-cuidados-paliativos',
    _type: 'page', title: 'Cuidados Paliativos', path: '/cuidados-paliativos-idosos', published: true,
    seo: {
      title: 'Cuidados Paliativos para Idosos em Porto Alegre | Novo Lar Geriatria',
      description: 'Cuidados paliativos humanizados para idosos em Porto Alegre. Conforto, dignidade e suporte integral à família em fase de fragilidade avançada.',
    },
    serviceSchema: { name: 'Cuidados Paliativos para Idosos', description: 'Cuidados paliativos humanizados em Porto Alegre com foco em conforto e dignidade.', areaServed: 'Porto Alegre' },
    sections: [
      hero({
        eyebrow: 'Cuidados Paliativos · Porto Alegre · Dignidade',
        heading: 'Cuidados Paliativos Humanizados para Idosos',
        description: 'Na Novo Lar Geriatria, os cuidados paliativos são um compromisso com o conforto, a dignidade e a presença acolhedora nas fases mais delicadas da vida do idoso e da sua família.',
        badges: stdBadges,
        breadcrumbs: [{ label: 'Home', href: '/' }, { label: 'Cuidados Paliativos' }],
      }),
      twoCol({
        leftEyebrow: 'O que são cuidados paliativos?',
        leftHeading: 'Conforto, dignidade e presença',
        leftParagraphs: [
          'Cuidados paliativos são cuidados ativos e totais para idosos com doenças avançadas ou progressivas, com foco no controle de sintomas, no bem-estar emocional e no suporte à família.',
          'Não são sinônimo de desistência. São o compromisso de acompanhar o idoso e sua família com toda a estrutura clínica e humana disponível, garantindo que o final de vida seja vivido com qualidade.',
        ],
        rightHeading: 'Pilares do cuidado paliativo na Novo Lar',
        rightType: 'checklist',
        checklistItems: [
          'Controle de dor e sintomas com equipe médica especializada',
          'Suporte emocional e psicológico ao residente e à família',
          'Comunicação honesta e respeitosa em todas as etapas',
          'Ambiente acolhedor com visitas abertas à família',
          'Nutrição e hidratação adaptadas ao estágio da doença',
          'Suporte ao luto antecipado para familiares',
        ],
      }),
      faq([
        { question: 'A Novo Lar aceita idosos em cuidados paliativos?', answer: 'Sim. Nossa equipe está preparada para oferecer cuidados paliativos de qualidade, com foco em conforto, controle de sintomas e suporte à família.' },
        { question: 'A família pode ficar com o residente?', answer: 'Sim. Valorizamos a presença da família e temos política de visitas ampla, especialmente para residentes em cuidados paliativos.' },
        { question: 'Cuidados paliativos significam que não haverá mais tratamento?', answer: 'Não. Cuidados paliativos são complementares ao tratamento, não excludentes. O foco muda para o conforto, mas todos os cuidados necessários continuam.' },
      ]),
      cta('Fale com nossa equipe sobre cuidados paliativos', 'Estamos disponíveis para orientar sua família neste momento com acolhimento e respeito.'),
      relatedLinks('Saiba mais', [
        { label: 'Cuidados para Idosos Acamados', href: '/cuidados-idosos-acamados' },
        { label: 'Acolhimento Pós-Alta Hospitalar', href: '/acolhimento-pos-alta-hospitalar-idosos' },
        { label: 'Cuidados para Pacientes Oncológicos', href: '/cuidados-pacientes-oncologicos' },
      ]),
    ],
  },

  {
    _id: 'seo-page-cuidados-pos-avc',
    _type: 'page', title: 'Cuidados Pós-AVC', path: '/cuidados-pos-avc', published: true,
    seo: {
      title: 'Cuidados Pós-AVC para Idosos em Porto Alegre | Novo Lar Geriatria',
      description: 'Reabilitação e cuidados pós-AVC para idosos em Porto Alegre. Fisioterapia neurológica, fonoaudiologia e acompanhamento 24h para recuperação funcional.',
    },
    serviceSchema: { name: 'Cuidados Pós-AVC', description: 'Reabilitação e cuidados especializados pós-AVC em Porto Alegre.', areaServed: 'Porto Alegre' },
    sections: [
      hero({
        eyebrow: 'Reabilitação Pós-AVC · Porto Alegre · 24h',
        heading: 'Cuidados Especializados para Idosos Pós-AVC',
        description: 'Após um AVC, a reabilitação precoce é decisiva para a recuperação funcional. Na Novo Lar Geriatria, oferecemos fisioterapia neurológica, fonoaudiologia e cuidados de enfermagem 24h em Porto Alegre.',
        badges: stdBadges,
        breadcrumbs: [{ label: 'Home', href: '/' }, { label: 'Cuidados Pós-AVC' }],
      }),
      twoCol({
        leftHeading: 'Por que o cuidado pós-AVC exige especialização?',
        leftParagraphs: [
          'O AVC pode causar sequelas que vão da hemiplegia à afasia, passando por disfagia, incontinência e alterações cognitivas. A reabilitação adequada começa nas primeiras semanas — quando a neuroplasticidade é maior.',
          'Na Novo Lar, a equipe multidisciplinar desenvolve um plano de reabilitação individualizado para cada residente pós-AVC, ajustando progressivamente os objetivos conforme a recuperação avança.',
        ],
        rightHeading: 'Cuidados específicos para pós-AVC',
        rightType: 'checklist',
        checklistItems: [
          'Fisioterapia neurológica diária: marcha, transferências e função motora',
          'Fonoaudiologia para afasia e disfagia',
          'Terapia ocupacional para independência nas AVDs',
          'Enfermagem 24h: posicionamento, prevenção de escaras e sinais vitais',
          'Acompanhamento médico e ajuste de medicações',
          'Comunicação regular com família e orientações para visitas',
        ],
      }),
      faq([
        { question: 'Quanto tempo dura o período de reabilitação pós-AVC?', answer: 'Depende da extensão do AVC e da resposta de cada idoso. A reabilitação pode durar semanas a meses. Na Novo Lar, o plano é revisado regularmente com a equipe e a família.' },
        { question: 'A Novo Lar atende idosos com sequelas permanentes de AVC?', answer: 'Sim. Para residentes com sequelas permanentes, o foco muda da reabilitação para a manutenção funcional e a qualidade de vida.' },
      ]),
      cta('Precisa de cuidados pós-AVC para um familiar?', 'Entre em contato com nossa equipe para uma avaliação inicial sem compromisso.'),
      relatedLinks('Páginas relacionadas', [
        { label: 'Reabilitação Geriátrica', href: '/cuidados-reabilitacao-geriatrica' },
        { label: 'Acolhimento Pós-Alta Hospitalar', href: '/acolhimento-pos-alta-hospitalar-idosos' },
        { label: 'Cuidados para Pacientes Neurológicos', href: '/cuidados-pacientes-neurologicos' },
      ]),
    ],
  },

  {
    _id: 'seo-page-cuidados-pos-cirurgicos',
    _type: 'page', title: 'Cuidados Pós-Cirúrgicos', path: '/cuidados-pos-cirurgicos-idosos', published: true,
    seo: {
      title: 'Cuidados Pós-Cirúrgicos para Idosos em Porto Alegre | Novo Lar Geriatria',
      description: 'Hospedagem e cuidados pós-cirúrgicos para idosos em Porto Alegre. Recuperação segura com enfermagem 24h, fisioterapia e acompanhamento médico.',
    },
    serviceSchema: { name: 'Cuidados Pós-Cirúrgicos para Idosos', description: 'Recuperação pós-cirúrgica para idosos com suporte 24h em Porto Alegre.', areaServed: 'Porto Alegre' },
    sections: [
      hero({
        eyebrow: 'Pós-Cirúrgico · Recuperação Segura · Porto Alegre',
        heading: 'Recuperação Pós-Cirúrgica Segura para Idosos',
        description: 'A recuperação pós-cirúrgica do idoso exige monitoramento constante. A Novo Lar Geriatria oferece hospedagem e cuidados especializados para idosos em recuperação de cirurgias em Porto Alegre.',
        badges: stdBadges,
        breadcrumbs: [{ label: 'Home', href: '/' }, { label: 'Cuidados Pós-Cirúrgicos' }],
      }),
      twoCol({
        leftHeading: 'Por que o pós-operatório em idosos exige cuidado especial?',
        leftParagraphs: [
          'O organismo do idoso responde de forma diferente às cirurgias: recuperação mais lenta, maior risco de complicações (infecção, embolia, delirium) e necessidade de monitoramento contínuo.',
          'Uma hospedagem pós-cirúrgica especializada garante que o idoso não ficará sozinho em casa durante a fase mais crítica da recuperação.',
        ],
        rightHeading: 'O que incluímos nos cuidados pós-cirúrgicos',
        rightType: 'checklist',
        checklistItems: [
          'Enfermagem 24h: curativos, medicamentos e sinais vitais',
          'Fisioterapia respiratória e motora desde o primeiro dia',
          'Acompanhamento médico e comunicação com o cirurgião responsável',
          'Nutrição adaptada à fase de recuperação',
          'Prevenção de complicações: TVP, pneumonia e delirium',
          'Reporte diário para a família',
        ],
      }),
      faq([
        { question: 'Qual o período mínimo de hospedagem pós-cirúrgica?', answer: 'Trabalhamos com estadias de curta duração. O período depende do tipo de cirurgia e da evolução clínica do idoso.' },
        { question: 'A Novo Lar comunica com o médico que realizou a cirurgia?', answer: 'Sim. Nossa equipe médica mantém contato com o cirurgião responsável para garantir continuidade do protocolo de recuperação.' },
      ]),
      cta('Precisa de suporte para recuperação pós-cirúrgica?', 'Fale com nossa equipe e saiba como podemos ajudar na recuperação segura do seu familiar.'),
      relatedLinks('Veja também', [
        { label: 'Acolhimento Pós-Alta Hospitalar', href: '/acolhimento-pos-alta-hospitalar-idosos' },
        { label: 'Hospedagem Temporária', href: '/hospedagem-temporaria-idosos-porto-alegre' },
        { label: 'Cuidados Pós-AVC', href: '/cuidados-pos-avc' },
      ]),
    ],
  },

  {
    _id: 'seo-page-cuidados-cronicos',
    _type: 'page', title: 'Cuidados Pacientes Crônicos', path: '/cuidados-pacientes-cronicos', published: true,
    seo: {
      title: 'Cuidados para Idosos com Doenças Crônicas | Novo Lar Geriatria Porto Alegre',
      description: 'Cuidado contínuo para idosos com diabetes, hipertensão, DPOC e outras condições crônicas em Porto Alegre. Equipe multidisciplinar e monitoramento diário.',
    },
    serviceSchema: { name: 'Cuidados para Doenças Crônicas', description: 'Monitoramento contínuo para idosos com doenças crônicas em Porto Alegre.', areaServed: 'Porto Alegre' },
    sections: [
      hero({
        eyebrow: 'Doenças Crônicas · Monitoramento 24h · Porto Alegre',
        heading: 'Cuidado Especializado para Idosos com Doenças Crônicas',
        description: 'Diabetes, hipertensão, insuficiência cardíaca, DPOC e outras condições crônicas exigem monitoramento diário e equipe preparada. A Novo Lar Geriatria cuida de residentes crônicos com protocolo clínico rigoroso.',
        badges: stdBadges,
        breadcrumbs: [{ label: 'Home', href: '/' }, { label: 'Cuidados para Crônicos' }],
      }),
      twoCol({
        leftHeading: 'Doenças crônicas no idoso: o que exige atenção diária?',
        leftParagraphs: [
          'Idosos com condições crônicas precisam de monitoramento constante: glicemia, pressão arterial, saturação de oxigênio, peso e edemas são verificados diariamente na Novo Lar.',
          'Nossa equipe de enfermagem administra medicações nos horários corretos, identifica variações precoces e aciona o médico geriatra quando necessário.',
        ],
        rightHeading: 'Condições crônicas que atendemos',
        rightType: 'checklist',
        checklistItems: [
          'Diabetes mellitus — controle glicêmico e dieta específica',
          'Hipertensão arterial — monitoramento pressórico diário',
          'Insuficiência cardíaca — controle de líquidos e peso',
          'DPOC — fisioterapia respiratória e oxigenoterapia quando prescrita',
          'Insuficiência renal — dieta e controle laboratorial',
          'Hipotireoidismo, artrite e outras condições associadas',
        ],
      }),
      faq([
        { question: 'A Novo Lar administra insulina e medicações de alta complexidade?', answer: 'Sim. Nossa equipe de enfermagem é treinada para administrar insulina, anticoagulantes e outras medicações de protocolo, sempre conforme prescrição médica.' },
        { question: 'O médico geriatra da Novo Lar acompanha idosos com múltiplas comorbidades?', answer: 'Sim. Nosso médico geriatra faz visitas regulares e é acionado sempre que há variação clínica, coordenando o cuidado de residentes com múltiplas condições crônicas.' },
      ]),
      cta('Fale com nossa equipe sobre cuidados para condições crônicas', 'Avaliamos o grau de dependência e as necessidades clínicas do seu familiar gratuitamente.'),
      relatedLinks('Veja também', [
        { label: 'Cuidados para Pacientes Neurológicos', href: '/cuidados-pacientes-neurologicos' },
        { label: 'Internação para Crônicos em Porto Alegre', href: '/internacao-para-pacientes-cronicos-porto-alegre' },
        { label: 'Cuidado Integral ao Idoso', href: '/cuidado-integral-ao-idoso-em-porto-alegre' },
      ]),
    ],
  },

  {
    _id: 'seo-page-cuidados-neurologicos',
    _type: 'page', title: 'Cuidados Pacientes Neurológicos', path: '/cuidados-pacientes-neurologicos', published: true,
    seo: {
      title: 'Cuidados para Idosos com Condições Neurológicas | Novo Lar Geriatria',
      description: 'Residencial geriátrico com expertise em condições neurológicas em Porto Alegre. Esclerose, epilepsia, neuropatias e declínio cognitivo com suporte 24h.',
    },
    serviceSchema: { name: 'Cuidados Neurológicos Geriátricos', description: 'Cuidado especializado para idosos com condições neurológicas em Porto Alegre.', areaServed: 'Porto Alegre' },
    sections: [
      hero({
        eyebrow: 'Neurologia Geriátrica · Porto Alegre · 24h',
        heading: 'Cuidados para Idosos com Condições Neurológicas',
        description: 'Além do Alzheimer e do Parkinson, diversas condições neurológicas exigem equipe treinada e ambiente adaptado. A Novo Lar Geriatria possui expertise para atender idosos com diferentes quadros neurológicos.',
        badges: stdBadges,
        breadcrumbs: [{ label: 'Home', href: '/' }, { label: 'Cuidados Neurológicos' }],
      }),
      twoCol({
        leftHeading: 'Condições neurológicas no idoso vão além do Alzheimer',
        leftParagraphs: [
          'Esclerose lateral amiotrófica (ELA), epilepsia no idoso, neuropatia periférica, corpos de Lewy, paralisia supranuclear progressiva e hidrocefalia de pressão normal são exemplos de condições que exigem protocolos específicos.',
          'Na Novo Lar, a equipe trabalha em conjunto com neurologistas externos quando necessário, garantindo que o plano de cuidados esteja alinhado com o tratamento médico em curso.',
        ],
        rightHeading: 'O que oferecemos para idosos com condições neurológicas',
        rightType: 'checklist',
        checklistItems: [
          'Avaliação inicial detalhada com histórico neurológico',
          'Ambiente seguro adaptado para prevenção de quedas e crises',
          'Administração correta de antiepilépticos e outros medicamentos neurológicos',
          'Fisioterapia neurológica e terapia ocupacional',
          'Monitoramento de progressão e comunicação com neurologista',
          'Suporte emocional à família',
        ],
      }),
      faq([
        { question: 'A Novo Lar atende idosos com epilepsia?', answer: 'Sim. Temos protocolo para manejo de crises epilépticas e administração correta de antiepilépticos, com equipe de enfermagem 24h preparada.' },
        { question: 'Vocês trabalham com neurologistas externos?', answer: 'Sim. Mantemos comunicação com o neurologista responsável pelo paciente e agendamos consultas quando necessário.' },
      ]),
      cta('Fale com nossa equipe sobre condições neurológicas', 'Avaliamos cada caso individualmente e desenvolvemos um plano de cuidados adequado.'),
      relatedLinks('Veja também', [
        { label: 'Cuidados para Alzheimer', href: '/cuidados-alzheimer' },
        { label: 'Cuidados para Parkinson', href: '/cuidados-parkinson' },
        { label: 'Cuidados Pós-AVC', href: '/cuidados-pos-avc' },
        { label: 'Internação Neurológica em Porto Alegre', href: '/internacao-para-pacientes-neurologicos-porto-alegre' },
      ]),
    ],
  },

  {
    _id: 'seo-page-cuidados-oncologicos',
    _type: 'page', title: 'Cuidados Pacientes Oncológicos', path: '/cuidados-pacientes-oncologicos', published: true,
    seo: {
      title: 'Cuidados para Idosos com Câncer em Porto Alegre | Novo Lar Geriatria',
      description: 'Suporte especializado para idosos em tratamento oncológico em Porto Alegre. Gestão de sintomas, conforto, nutrição oncológica e apoio emocional 24h.',
    },
    serviceSchema: { name: 'Cuidados para Idosos Oncológicos', description: 'Suporte para idosos em tratamento ou pós-tratamento oncológico em Porto Alegre.', areaServed: 'Porto Alegre' },
    sections: [
      hero({
        eyebrow: 'Oncologia · Suporte Geriátrico · Porto Alegre',
        heading: 'Suporte para Idosos em Tratamento Oncológico',
        description: 'O idoso em tratamento oncológico precisa de suporte clínico e emocional especializado. A Novo Lar Geriatria oferece ambiente adequado, nutrição adaptada e equipe presente 24h.',
        badges: stdBadges,
        breadcrumbs: [{ label: 'Home', href: '/' }, { label: 'Cuidados Oncológicos' }],
      }),
      twoCol({
        leftHeading: 'O que muda no cuidado do idoso com câncer?',
        leftParagraphs: [
          'O tratamento oncológico — quimioterapia, radioterapia ou imunoterapia — frequentemente causa efeitos colaterais que exigem suporte específico: náusea, imunossupressão, fadiga extrema, mucosite e neuropatia periférica.',
          'O idoso oncológico também tem necessidades nutricionais particulares e requer monitoramento clínico próximo, especialmente durante os ciclos de tratamento.',
        ],
        rightHeading: 'Como cuidamos de residentes em tratamento oncológico',
        rightType: 'checklist',
        checklistItems: [
          'Nutrição oncológica individualizada com nutricionista',
          'Controle de sintomas: náusea, dor e fadiga',
          'Acompanhamento de leucócitos e precauções de isolamento quando necessário',
          'Apoio emocional e psicológico ao residente e à família',
          'Logística de transporte para consultas e sessões de tratamento',
          'Comunicação com oncologista responsável',
        ],
      }),
      faq([
        { question: 'A Novo Lar auxilia no transporte para quimioterapia e radioterapia?', answer: 'Sim. Apoiamos a logística de transporte para consultas e sessões de tratamento, em coordenação com a família.' },
        { question: 'Idosos em cuidados paliativos oncológicos também são atendidos?', answer: 'Sim. Para idosos em fase paliativa, oferecemos cuidados focados em conforto, controle de dor e dignidade.' },
      ]),
      cta('Fale com nossa equipe sobre suporte oncológico', 'Avaliamos as necessidades específicas do seu familiar em tratamento.'),
      relatedLinks('Veja também', [
        { label: 'Cuidados Paliativos', href: '/cuidados-paliativos-idosos' },
        { label: 'Cuidado Integral ao Idoso', href: '/cuidado-integral-ao-idoso-em-porto-alegre' },
      ]),
    ],
  },

  {
    _id: 'seo-page-cuidados-acamados',
    _type: 'page', title: 'Cuidados Idosos Acamados', path: '/cuidados-idosos-acamados', published: true,
    seo: {
      title: 'Cuidados para Idosos Acamados em Porto Alegre | Novo Lar Geriatria',
      description: 'Cuidado especializado para idosos acamados em Porto Alegre. Prevenção de escaras, fisioterapia passiva, higiene e mobilização com equipe 24h.',
    },
    serviceSchema: { name: 'Cuidados para Idosos Acamados', description: 'Assistência 24h para idosos acamados com prevenção de complicações em Porto Alegre.', areaServed: 'Porto Alegre' },
    sections: [
      hero({
        eyebrow: 'Idosos Acamados · Prevenção · Porto Alegre',
        heading: 'Cuidados Completos para Idosos Acamados',
        description: 'O cuidado do idoso acamado exige protocolo rigoroso de prevenção de escaras, mobilização regular e higiene especializada. A equipe de enfermagem da Novo Lar está presente 24h para cada necessidade.',
        badges: stdBadges,
        breadcrumbs: [{ label: 'Home', href: '/' }, { label: 'Cuidados para Acamados' }],
      }),
      twoCol({
        leftHeading: 'Quais são os principais riscos do idoso acamado?',
        leftParagraphs: [
          'A imobilidade prolongada gera riscos sérios: escaras (úlceras de pressão), trombose venosa profunda (TVP), pneumonia aspirativa, contratura muscular e atrofia por desuso.',
          'O cuidado adequado inclui mudança de decúbito a cada 2-3 horas, hidratação adequada da pele, fisioterapia passiva e mobilização assistida — rotinas que requerem equipe treinada 24h.',
        ],
        rightHeading: 'Protocolo Novo Lar para idosos acamados',
        rightType: 'checklist',
        checklistItems: [
          'Mudança de decúbito sistemática (cronograma por turno)',
          'Curativo especializado para lesões por pressão já existentes',
          'Fisioterapia passiva diária para manutenção de amplitude articular',
          'Fisioterapia respiratória para prevenção de pneumonia',
          'Higiene corporal completa com produtos adequados',
          'Colchões e coxins terapêuticos',
        ],
      }),
      faq([
        { question: 'A Novo Lar aceita idosos com escaras já formadas?', answer: 'Sim. Nossa equipe de enfermagem tem protocolo para tratamento de lesões por pressão, em diferentes estágios, com curativos especializados e comunicação com o médico.' },
        { question: 'Como funciona a fisioterapia para idosos acamados?', answer: 'A fisioterapia passiva e respiratória é realizada diariamente, com mobilizações suaves para manter amplitude articular, prevenir pneumonia e estimular a circulação.' },
      ]),
      cta('Fale com nossa equipe sobre cuidados para idosos acamados', 'Avaliamos o grau de dependência e desenvolvemos um plano de cuidados adequado.'),
      relatedLinks('Páginas relacionadas', [
        { label: 'Cuidados Paliativos', href: '/cuidados-paliativos-idosos' },
        { label: 'Cuidados para Mobilidade Reduzida', href: '/cuidados-mobilidade-reduzida' },
        { label: 'Passo d\'Areia — Idosos Acamados', href: '/porto-alegre/passo-dareia/idosos-acamados' },
      ]),
    ],
  },

  {
    _id: 'seo-page-cuidados-mobilidade',
    _type: 'page', title: 'Cuidados Mobilidade Reduzida', path: '/cuidados-mobilidade-reduzida', published: true,
    seo: {
      title: 'Cuidados para Idosos com Mobilidade Reduzida | Novo Lar Geriatria Porto Alegre',
      description: 'Residencial adaptado para idosos com mobilidade reduzida em Porto Alegre. Estrutura acessível, fisioterapia, auxílios de locomoção e autonomia assistida.',
    },
    serviceSchema: { name: 'Cuidados para Mobilidade Reduzida', description: 'Cuidados e estrutura adaptada para idosos com mobilidade reduzida em Porto Alegre.', areaServed: 'Porto Alegre' },
    sections: [
      hero({
        eyebrow: 'Mobilidade Reduzida · Acessibilidade · Porto Alegre',
        heading: 'Cuidados e Estrutura para Idosos com Mobilidade Reduzida',
        description: 'As unidades Novo Lar Geriatria são projetadas para idosos com mobilidade reduzida: rampa de acesso, pisos antiderrapantes, barras de apoio e equipe treinada para transferências seguras.',
        badges: stdBadges,
        breadcrumbs: [{ label: 'Home', href: '/' }, { label: 'Mobilidade Reduzida' }],
      }),
      twoCol({
        leftHeading: 'Mobilidade reduzida não significa dependência total',
        leftParagraphs: [
          'Muitos idosos com mobilidade reduzida podem manter um nível significativo de autonomia com o suporte correto: auxílios de locomoção, ambiente adaptado e fisioterapia regular.',
          'Na Novo Lar, trabalhamos para preservar a independência de cada residente dentro dos seus limites, evitando a dependência desnecessária que pode surgir quando o ambiente não é adequado.',
        ],
        rightHeading: 'Como oferecemos suporte à mobilidade',
        rightType: 'checklist',
        checklistItems: [
          'Estrutura acessível: rampas, corrimãos e banheiros adaptados',
          'Fisioterapia para manutenção e melhora da mobilidade',
          'Auxílios de locomoção: andadores, bengalas e cadeiras de rodas adequadas',
          'Transferências seguras pela equipe de enfermagem',
          'Prevenção de quedas com monitoramento ambiental contínuo',
          'Atividades físicas adaptadas ao nível de mobilidade de cada residente',
        ],
      }),
      cta('Conheça nossa estrutura acessível', 'Agende uma visita e veja como nossas unidades são adaptadas para idosos com diferentes graus de mobilidade.'),
      relatedLinks('Veja também', [
        { label: 'Cuidados para Idosos Acamados', href: '/cuidados-idosos-acamados' },
        { label: 'Reabilitação Geriátrica', href: '/cuidados-reabilitacao-geriatrica' },
        { label: 'Casa de Repouso em Porto Alegre', href: '/porto-alegre' },
      ]),
    ],
  },

  {
    _id: 'seo-page-cuidados-perda-cognitiva',
    _type: 'page', title: 'Cuidados Perda Cognitiva', path: '/cuidados-perda-cognitiva', published: true,
    seo: {
      title: 'Cuidados para Idosos com Perda Cognitiva | Novo Lar Geriatria Porto Alegre',
      description: 'Cuidado especializado para idosos com comprometimento cognitivo leve e moderado em Porto Alegre. Estimulação cognitiva, rotina estruturada e ambiente seguro.',
    },
    serviceSchema: { name: 'Cuidados para Perda Cognitiva', description: 'Estimulação e cuidados para idosos com declínio cognitivo em Porto Alegre.', areaServed: 'Porto Alegre' },
    sections: [
      hero({
        eyebrow: 'Perda Cognitiva · Estimulação · Porto Alegre',
        heading: 'Cuidados para Idosos com Perda Cognitiva',
        description: 'O comprometimento cognitivo leve (MCI) e as demências em fase inicial exigem estimulação estruturada e ambiente seguro. Na Novo Lar, cada residente com perda cognitiva tem um programa individualizado.',
        badges: stdBadges,
        breadcrumbs: [{ label: 'Home', href: '/' }, { label: 'Perda Cognitiva' }],
      }),
      twoCol({
        leftHeading: 'Perda cognitiva leve e moderada: o que diferencia?',
        leftParagraphs: [
          'O Comprometimento Cognitivo Leve (MCI) afeta a memória e atenção sem comprometer a independência. Já na demência leve a moderada, o idoso começa a precisar de suporte em atividades complexas e, progressivamente, nas básicas.',
          'A intervenção precoce — estimulação cognitiva, rotina estruturada e cuidado multidisciplinar — pode retardar a progressão e manter qualidade de vida por mais tempo.',
        ],
        rightHeading: 'Programa cognitivo na Novo Lar',
        rightType: 'checklist',
        checklistItems: [
          'Avaliação neuropsicológica inicial para baseline',
          'Atividades de estimulação cognitiva diárias: memória, atenção e linguagem',
          'Musicoterapia e reminiscência',
          'Rotina estruturada que reduz ansiedade e desorientação',
          'Monitoramento de progressão pela equipe e médico geriatra',
          'Orientação e suporte para a família',
        ],
      }),
      faq([
        { question: 'Qual a diferença entre perda cognitiva normal do envelhecimento e demência?', answer: 'A perda cognitiva do envelhecimento normal não interfere significativamente na vida diária. Quando a memória começa a comprometer atividades cotidianas, é sinal de que vale investigar com um médico.' },
        { question: 'A estimulação cognitiva funciona para idosos com demência?', answer: 'Sim. Mesmo em estágios moderados, a estimulação cognitiva adaptada ao nível do idoso contribui para manutenção de funções, melhora do humor e qualidade de vida.' },
      ]),
      cta('Fale com nossa equipe sobre perda cognitiva', 'Ajudamos sua família a entender o momento e o cuidado mais adequado para o seu familiar.'),
      relatedLinks('Veja também', [
        { label: 'Cuidados para Alzheimer', href: '/cuidados-alzheimer' },
        { label: 'Cuidados para Demência', href: '/cuidados-demencia' },
        { label: 'Cuidados para Fragilidade', href: '/cuidados-fragilidade-do-idoso' },
      ]),
    ],
  },

  {
    _id: 'seo-page-cuidados-fragilidade',
    _type: 'page', title: 'Cuidados Fragilidade do Idoso', path: '/cuidados-fragilidade-do-idoso', published: true,
    seo: {
      title: 'Cuidados para Síndrome de Fragilidade do Idoso | Novo Lar Geriatria',
      description: 'Residencial geriátrico especializado na síndrome de fragilidade em Porto Alegre. Prevenção de quedas, reabilitação, nutrição e sarcopenia com equipe 24h.',
    },
    serviceSchema: { name: 'Cuidados para Fragilidade do Idoso', description: 'Cuidado especializado para idosos com síndrome de fragilidade em Porto Alegre.', areaServed: 'Porto Alegre' },
    sections: [
      hero({
        eyebrow: 'Fragilidade · Sarcopenia · Prevenção de Quedas',
        heading: 'Cuidados Especializados para a Síndrome de Fragilidade',
        description: 'A síndrome de fragilidade do idoso é uma condição clínica que aumenta o risco de quedas, hospitalizações e dependência. A Novo Lar oferece cuidado preventivo e reabilitador para residentes frágeis.',
        badges: stdBadges,
        breadcrumbs: [{ label: 'Home', href: '/' }, { label: 'Fragilidade do Idoso' }],
      }),
      twoCol({
        leftHeading: 'O que é a síndrome de fragilidade?',
        leftParagraphs: [
          'A fragilidade é caracterizada por perda de peso involuntária, fadiga, força reduzida, lentidão e baixa atividade física. Um idoso frágil tem risco aumentado de quedas, hospitalização e declínio funcional rápido.',
          'A sarcopenia — perda de massa muscular associada ao envelhecimento — é um dos principais componentes da fragilidade e responde bem à intervenção precoce com exercício e nutrição adequada.',
        ],
        rightHeading: 'Abordagem Novo Lar para idosos frágeis',
        rightType: 'checklist',
        checklistItems: [
          'Exercício físico supervisionado e progressivo',
          'Nutrição hipercalórica e hiperproteica para combater sarcopenia',
          'Prevenção de quedas: avaliação ambiental e de risco individual',
          'Fisioterapia para força, equilíbrio e marcha',
          'Monitoramento contínuo de peso, força e funcionalidade',
          'Revisão medicamentosa: polifarmácia aumenta risco de quedas',
        ],
      }),
      cta('Avalie a fragilidade do seu familiar com nossa equipe', 'Oferecemos avaliação geriátrica ampla e gratuita para novos residentes.'),
      relatedLinks('Veja também', [
        { label: 'Cuidados para Mobilidade Reduzida', href: '/cuidados-mobilidade-reduzida' },
        { label: 'Reabilitação Geriátrica', href: '/cuidados-reabilitacao-geriatrica' },
        { label: 'Cuidados para Crônicos', href: '/cuidados-pacientes-cronicos' },
      ]),
    ],
  },

  {
    _id: 'seo-page-cuidados-reabilitacao',
    _type: 'page', title: 'Reabilitação Geriátrica', path: '/cuidados-reabilitacao-geriatrica', published: true,
    seo: {
      title: 'Reabilitação Geriátrica em Porto Alegre | Novo Lar Geriatria',
      description: 'Reabilitação geriátrica completa em Porto Alegre após AVC, cirurgia ou evento agudo. Fisioterapia, fonoaudiologia, terapia ocupacional e enfermagem 24h.',
    },
    serviceSchema: { name: 'Reabilitação Geriátrica', description: 'Programa completo de reabilitação geriátrica em Porto Alegre.', areaServed: 'Porto Alegre' },
    sections: [
      hero({
        eyebrow: 'Reabilitação Geriátrica · Porto Alegre · 24h',
        heading: 'Reabilitação Geriátrica Completa em Porto Alegre',
        description: 'Após AVC, cirurgia ortopédica, fratura de fêmur ou qualquer evento agudo, a reabilitação geriátrica precoce é decisiva. A Novo Lar oferece equipe multidisciplinar completa para a recuperação funcional do idoso.',
        badges: stdBadges,
        breadcrumbs: [{ label: 'Home', href: '/' }, { label: 'Reabilitação Geriátrica' }],
      }),
      twoCol({
        leftHeading: 'Por que a reabilitação geriátrica é diferente?',
        leftParagraphs: [
          'O organismo do idoso responde de forma mais lenta e requer abordagem multidisciplinar coordenada. Fisioterapia isolada não é suficiente — fonoaudiologia, terapia ocupacional, nutrição e suporte psicológico atuam juntos.',
          'A reabilitação geriátrica também considera comorbidades, medicações, risco de delirium e a realidade funcional pré-evento para definir metas realistas e progressivas.',
        ],
        rightHeading: 'Equipe de reabilitação na Novo Lar',
        rightType: 'checklist',
        checklistItems: [
          'Fisioterapia neurológica e ortopédica diária',
          'Fonoaudiologia: fala, linguagem e deglutição',
          'Terapia ocupacional: independência nas atividades de vida diária',
          'Enfermagem 24h: monitoramento e prevenção de complicações',
          'Médico geriatra: coordenação clínica e ajuste de tratamento',
          'Nutrição: suporte calórico e proteico para recuperação',
        ],
      }),
      faq([
        { question: 'A Novo Lar aceita pacientes diretamente da UTI ou hospital?', answer: 'Sim. Recebemos residentes com encaminhamento hospitalar, realizando avaliação clínica prévia para garantir que nossa estrutura atende as necessidades do paciente.' },
        { question: 'Quanto tempo dura a reabilitação?', answer: 'Depende do evento e da resposta individual. Trabalhamos com metas progressivas, revisadas com a equipe e a família regularmente.' },
      ]),
      cta('Fale com nossa equipe sobre reabilitação geriátrica', 'Avaliamos o caso do seu familiar e apresentamos o plano de reabilitação adequado.'),
      relatedLinks('Veja também', [
        { label: 'Cuidados Pós-AVC', href: '/cuidados-pos-avc' },
        { label: 'Cuidados Pós-Cirúrgicos', href: '/cuidados-pos-cirurgicos-idosos' },
        { label: 'Acolhimento Pós-Alta Hospitalar', href: '/acolhimento-pos-alta-hospitalar-idosos' },
      ]),
    ],
  },

  // ── INTENÇÃO COMERCIAL ───────────────────────────────────────────────────────

  {
    _id: 'seo-page-hospedagem-temporaria',
    _type: 'page', title: 'Hospedagem Temporária Porto Alegre', path: '/hospedagem-temporaria-idosos-porto-alegre', published: true,
    seo: {
      title: 'Hospedagem Temporária para Idosos em Porto Alegre | Novo Lar Geriatria',
      description: 'Hospedagem temporária para idosos em Porto Alegre. Curta ou média estadia com cuidados completos para viagens da família, pós-hospitalar ou respiro do cuidador.',
    },
    serviceSchema: { name: 'Hospedagem Temporária para Idosos', description: 'Hospedagem temporária para idosos em Porto Alegre com cuidados completos.', areaServed: 'Porto Alegre' },
    sections: [
      hero({
        eyebrow: 'Hospedagem Temporária · Porto Alegre · Curta Estadia',
        heading: 'Hospedagem Temporária para Idosos em Porto Alegre',
        description: 'Precise viajar? O cuidador principal precisa descansar? O idoso está se recuperando de cirurgia? A Novo Lar oferece hospedagem temporária com os mesmos cuidados da residência permanente.',
        badges: stdBadges,
        breadcrumbs: [{ label: 'Home', href: '/' }, { label: 'Hospedagem Temporária' }],
      }),
      twoCol({
        leftHeading: 'Quando a hospedagem temporária é a solução certa?',
        leftParagraphs: [
          'Viagem de férias da família, recuperação pós-cirúrgica sem estrutura domiciliar, internação programada do cuidador, ou simplesmente um período de adaptação gradual antes de uma decisão definitiva.',
          'A hospedagem temporária também serve como "teste" — permite que o idoso e a família conheçam a rotina da unidade antes de optar pela residência permanente.',
        ],
        rightHeading: 'O que está incluso na hospedagem temporária',
        rightType: 'checklist',
        checklistItems: [
          'Acomodação em quarto confortável com todas as refeições',
          'Enfermagem 24h e administração de medicamentos',
          'Atividades terapêuticas e recreativas diárias',
          'Fisioterapia (quando prescrita ou avaliada como necessária)',
          'Monitoramento médico e comunicação com a família',
          'Lavanderia e higiene pessoal',
        ],
      }),
      faq([
        { question: 'Qual o período mínimo de hospedagem temporária?', answer: 'Trabalhamos com estadias a partir de uma semana, sujeitas à disponibilidade de vagas. Entre em contato para verificar disponibilidade.' },
        { question: 'A hospedagem temporária pode ser convertida em permanente?', answer: 'Sim. Se durante a estadia o idoso e a família decidirem pela residência permanente, facilitamos a transição sem necessidade de nova admissão formal.' },
        { question: 'O idoso pode levar objetos pessoais?', answer: 'Sim. Incentivamos que o idoso traga objetos queridos — fotos, cobertores, pequenos itens — para tornar o ambiente mais familiar.' },
      ]),
      cta('Consulte disponibilidade para hospedagem temporária', 'Entre em contato com nossa equipe e verifique datas e vagas disponíveis.'),
      relatedLinks('Veja também', [
        { label: 'Acolhimento Pós-Alta Hospitalar', href: '/acolhimento-pos-alta-hospitalar-idosos' },
        { label: 'Cuidados Pós-Cirúrgicos', href: '/cuidados-pos-cirurgicos-idosos' },
        { label: 'Casa de Repouso em Porto Alegre', href: '/porto-alegre' },
      ]),
    ],
  },

  {
    _id: 'seo-page-residencia-assistida',
    _type: 'page', title: 'Residência Assistida Porto Alegre', path: '/residencia-assistida-porto-alegre', published: true,
    seo: {
      title: 'Residência Assistida em Porto Alegre | Novo Lar Geriatria',
      description: 'Residência assistida em Porto Alegre para idosos com autonomia parcial. Moradia segura, suporte assistencial sob demanda e qualidade de vida preservada.',
    },
    serviceSchema: { name: 'Residência Assistida', description: 'Residência assistida em Porto Alegre para idosos com autonomia parcial.', areaServed: 'Porto Alegre' },
    sections: [
      hero({
        eyebrow: 'Residência Assistida · Porto Alegre · Autonomia',
        heading: 'Residência Assistida em Porto Alegre',
        description: 'Para idosos com autonomia parcial que precisam de suporte, mas valorizam independência, a residência assistida da Novo Lar combina segurança e liberdade em um ambiente que respeita o ritmo de cada residente.',
        badges: stdBadges,
        breadcrumbs: [{ label: 'Home', href: '/' }, { label: 'Residência Assistida' }],
      }),
      twoCol({
        leftHeading: 'O que diferencia a residência assistida de uma ILPI?',
        leftParagraphs: [
          'Na prática, a residência assistida é voltada para idosos com menor grau de dependência — que ainda se locomovem, participam das refeições e realizam parte das AVDs com pequeno suporte.',
          'Na Novo Lar, adaptamos o nível de assistência conforme a evolução de cada residente: quem entra mais independente pode receber suporte adicional ao longo do tempo, sem precisar trocar de instituição.',
        ],
        rightHeading: 'Serviços da residência assistida Novo Lar',
        rightType: 'checklist',
        checklistItems: [
          'Moradia em quarto individual ou compartilhado',
          'Refeições balanceadas com nutricionista',
          'Suporte de enfermagem disponível 24h',
          'Atividades terapêuticas, cognitivas e recreativas',
          'Visitas diárias liberadas para família',
          'Fisioterapia e acompanhamento médico quando necessário',
        ],
      }),
      cta('Conheça nossa residência assistida em Porto Alegre', 'Agende uma visita e avalie se nossa proposta é a ideal para o seu familiar.'),
      relatedLinks('Veja também', [
        { label: 'ILPI em Porto Alegre', href: '/ilpi-porto-alegre' },
        { label: 'Residência para Idosos', href: '/residencia-para-idosos-porto-alegre' },
        { label: 'Comparativo: ILPI ou Residência Assistida', href: '/comparativos/ilpi-ou-residencia-assistida' },
      ]),
    ],
  },

  {
    _id: 'seo-page-clinica-geriatrica',
    _type: 'page', title: 'Clínica Geriátrica Porto Alegre', path: '/clinica-geriatrica-porto-alegre', published: true,
    seo: {
      title: 'Clínica Geriátrica em Porto Alegre | Novo Lar Geriatria',
      description: 'Clínica geriátrica residencial em Porto Alegre com médico geriatra, enfermagem 24h, fisioterapia e acompanhamento multidisciplinar completo.',
    },
    serviceSchema: { name: 'Clínica Geriátrica Residencial', description: 'Clínica geriátrica residencial em Porto Alegre com equipe clínica completa.', areaServed: 'Porto Alegre' },
    sections: [
      hero({
        eyebrow: 'Clínica Geriátrica · Porto Alegre · Médico Geriatra',
        heading: 'Clínica Geriátrica Residencial em Porto Alegre',
        description: 'A Novo Lar Geriatria funciona como clínica geriátrica residencial: médico geriatra, enfermagem 24h, fisioterapia, nutrição e psicologia em um único ambiente seguro e humanizado.',
        badges: stdBadges,
        breadcrumbs: [{ label: 'Home', href: '/' }, { label: 'Clínica Geriátrica' }],
      }),
      twoCol({
        leftHeading: 'O que esperar de uma clínica geriátrica de qualidade?',
        leftParagraphs: [
          'Uma clínica geriátrica vai além do cuidado básico: ela oferece abordagem clínica especializada para as particularidades do envelhecimento, como polifarmácia, multimorbidade e síndromes geriátricas.',
          'Na Novo Lar, o médico geriatra lidera o plano de cuidados de cada residente, integrando as demais especialidades da equipe multidisciplinar para um cuidado coerente e completo.',
        ],
        rightHeading: 'Estrutura clínica da Novo Lar',
        rightType: 'checklist',
        checklistItems: [
          'Médico geriatra com visitas regulares e disponível para intercorrências',
          'Enfermagem 24h com técnicos de enfermagem e enfermeiras plantonistas',
          'Fisioterapia individual e em grupo',
          'Nutricionista com avaliação e acompanhamento periódico',
          'Psicólogo para residentes e suporte familiar',
          'Fonoaudiologia quando necessário',
        ],
      }),
      cta('Conheça a estrutura clínica da Novo Lar', 'Agende uma visita e veja como cuidamos clinicamente de cada residente.'),
      relatedLinks('Veja também', [
        { label: 'ILPI em Porto Alegre', href: '/ilpi-porto-alegre' },
        { label: 'Cuidado Integral ao Idoso', href: '/cuidado-integral-ao-idoso-em-porto-alegre' },
        { label: 'Casa de Repouso em Porto Alegre', href: '/porto-alegre' },
      ]),
    ],
  },

  {
    _id: 'seo-page-internacao-geriatrica',
    _type: 'page', title: 'Internação Geriátrica Porto Alegre', path: '/internacao-geriatrica-porto-alegre', published: true,
    seo: {
      title: 'Internação Geriátrica em Porto Alegre | Novo Lar Geriatria',
      description: 'Internação geriátrica em Porto Alegre para idosos com alta necessidade de cuidado clínico. Equipe médica, enfermagem e suporte 24h em ambiente residencial.',
    },
    serviceSchema: { name: 'Internação Geriátrica', description: 'Cuidados de internação geriátrica em ambiente residencial em Porto Alegre.', areaServed: 'Porto Alegre' },
    sections: [
      hero({
        eyebrow: 'Internação Geriátrica · Porto Alegre · Alta Complexidade',
        heading: 'Internação Geriátrica em Ambiente Residencial',
        description: 'Para idosos que precisam de cuidados de internação sem a impessoalidade hospitalar, a Novo Lar Geriatria oferece o suporte clínico necessário em um ambiente residencial humanizado.',
        badges: stdBadges,
        breadcrumbs: [{ label: 'Home', href: '/' }, { label: 'Internação Geriátrica' }],
      }),
      twoCol({
        leftHeading: 'Quando um idoso precisa de internação geriátrica?',
        leftParagraphs: [
          'Idosos com necessidade de cuidados clínicos intensivos — monitoramento frequente, medicações complexas, curativos especializados ou risco elevado de intercorrências — precisam de internação geriátrica.',
          'A diferença da internação geriátrica em um residencial é a humanização: o idoso tem quarto próprio, rotina preservada ao máximo, visitas liberadas e não fica no anonimato de um leito hospitalar.',
        ],
        rightHeading: 'Suporte clínico disponível',
        rightType: 'checklist',
        checklistItems: [
          'Médico geriatra com acesso 24h para intercorrências',
          'Enfermagem intensiva com passagem de plantão estruturada',
          'Monitoramento de sinais vitais com frequência definida por protocolo',
          'Gerenciamento de medicações complexas e polimedicação',
          'Curativos e procedimentos de enfermagem especializados',
          'Comunicação médica diária com a família',
        ],
      }),
      cta('Fale com nossa equipe sobre internação geriátrica', 'Avaliamos as necessidades clínicas do seu familiar e confirmamos se temos a estrutura adequada.'),
      relatedLinks('Veja também', [
        { label: 'Acolhimento Pós-Alta Hospitalar', href: '/acolhimento-pos-alta-hospitalar-idosos' },
        { label: 'Cuidados para Crônicos', href: '/cuidados-pacientes-cronicos' },
        { label: 'Clínica Geriátrica Porto Alegre', href: '/clinica-geriatrica-porto-alegre' },
      ]),
    ],
  },

  {
    _id: 'seo-page-casa-de-repouso',
    _type: 'page', title: 'Casa de Repouso em Porto Alegre', path: '/casa-de-repouso-em-porto-alegre', published: true,
    seo: {
      title: 'Casa de Repouso em Porto Alegre — Guia Completo | Novo Lar Geriatria',
      description: 'Guia completo sobre casas de repouso em Porto Alegre: o que são, como escolher, o que avaliar e por que a Novo Lar Geriatria é referência há 30 anos na cidade.',
    },
    serviceSchema: { name: 'Casa de Repouso em Porto Alegre', description: 'Guia e serviços de casa de repouso em Porto Alegre.', areaServed: 'Porto Alegre' },
    sections: [
      hero({
        eyebrow: 'Casa de Repouso · Porto Alegre · 30 anos',
        heading: 'Casa de Repouso em Porto Alegre: Como Escolher Bem',
        description: 'A Novo Lar Geriatria é referência em casas de repouso em Porto Alegre há mais de 30 anos. Este guia ajuda famílias a entender o que é uma casa de repouso de qualidade e como avaliar as opções disponíveis.',
        badges: stdBadges,
        breadcrumbs: [{ label: 'Home', href: '/' }, { label: 'Casa de Repouso em Porto Alegre' }],
      }),
      twoCol({
        leftHeading: 'O que é uma casa de repouso de qualidade?',
        leftParagraphs: [
          'Uma casa de repouso de qualidade é regulamentada pela ANVISA, tem alvará sanitário em dia, equipe multidisciplinar completa, plano de cuidados individualizado e política de visitas transparente.',
          'O termo "casa de repouso" é popular, mas engloba estabelecimentos de qualidade muito variada. Saber o que exigir na visita é o diferencial entre uma boa escolha e uma experiência frustrante.',
        ],
        rightHeading: 'O que avaliar na visita à casa de repouso',
        rightType: 'checklist',
        checklistItems: [
          'Alvará sanitário da ANVISA atualizado',
          'Turnos de enfermagem: existe profissional de nível superior 24h?',
          'Presença de médico geriatra: com que frequência visita?',
          'Política de visitas: são livres ou com restrições?',
          'Como são os quartos? Têm ventilação, janela e espaço adequado?',
          'Qual a rotina de atividades? É genuína ou decorativa?',
        ],
      }),
      faq([
        { question: 'Casa de repouso é o mesmo que ILPI?', answer: 'Popularmente são usados como sinônimos, mas ILPI é o termo técnico-legal. Uma casa de repouso séria opera como ILPI regulamentada pela ANVISA.' },
        { question: 'Qual o custo de uma casa de repouso em Porto Alegre?', answer: 'Os valores variam conforme o grau de dependência, tipo de quarto e serviços incluídos. Entre em contato com a Novo Lar para receber uma proposta personalizada.' },
        { question: 'Como posso saber se a casa de repouso é confiável?', answer: 'Peça o alvará sanitário, visite pessoalmente e converse com familiares de outros residentes. Transparência é o principal indicador de qualidade.' },
      ]),
      cta('Agende uma visita à Novo Lar Geriatria', 'Conheça nossas unidades em Porto Alegre e tire todas as dúvidas com nossa equipe.'),
      relatedLinks('Saiba mais', [
        { label: 'O que é uma ILPI?', href: '/ilpi-em-porto-alegre' },
        { label: 'Como Escolher — Blog', href: '/blog/como-escolher-casa-de-repouso-em-porto-alegre' },
        { label: 'ILPI em Porto Alegre', href: '/ilpi-porto-alegre' },
        { label: 'Casa de Repouso em Moinhos de Vento', href: '/porto-alegre/moinhos-de-vento' },
      ]),
    ],
  },

  {
    _id: 'seo-page-lar-idosos',
    _type: 'page', title: 'Lar para Idosos em Porto Alegre', path: '/lar-para-idosos-em-porto-alegre', published: true,
    seo: {
      title: 'Lar para Idosos em Porto Alegre | Novo Lar Geriatria',
      description: 'Lar para idosos em Porto Alegre com acolhimento familiar, rotina humanizada e cuidado integral. Um segundo lar para o seu familiar, não uma instituição fria.',
    },
    serviceSchema: { name: 'Lar para Idosos em Porto Alegre', description: 'Ambiente de lar com cuidado geriátrico em Porto Alegre.', areaServed: 'Porto Alegre' },
    sections: [
      hero({
        eyebrow: 'Lar · Acolhimento · Porto Alegre',
        heading: 'Um Lar para o Seu Familiar Idoso em Porto Alegre',
        description: 'Na Novo Lar Geriatria, queremos que cada residente sinta que está em casa — não em uma instituição. Ambiente acolhedor, equipe humana e rotina que respeita a história de cada pessoa.',
        badges: stdBadges,
        breadcrumbs: [{ label: 'Home', href: '/' }, { label: 'Lar para Idosos' }],
      }),
      twoCol({
        leftHeading: 'Um lar de verdade, não só um lugar para ficar',
        leftParagraphs: [
          'O nome Novo Lar não é por acaso. Acreditamos que envelhecer com qualidade começa com sentir-se em casa: ambiente familiar, relacionamentos genuínos com a equipe e respeito à individualidade de cada residente.',
          'Cada unidade tem áreas de convivência, jardim, espaços para visitas e rotinas que simulam a vida em uma residência — não em um hospital.',
        ],
        rightHeading: 'O que faz da Novo Lar um lar de verdade',
        rightType: 'checklist',
        checklistItems: [
          'Equipe que conhece cada residente pelo nome e gosta do que faz',
          'Decoração personalizada: o residente pode trazer seus objetos',
          'Visitas abertas para família e amigos',
          'Aniversários e datas comemorativas celebrados',
          'Rotina flexível que respeita horários e hábitos individuais',
          'Comunicação próxima: família sempre informada',
        ],
      }),
      cta('Venha conhecer o Novo Lar pessoalmente', 'Agende uma visita e sinta o acolhimento que diferencia a Novo Lar de outras opções em Porto Alegre.'),
      relatedLinks('Veja também', [
        { label: 'Residência para Idosos', href: '/residencia-para-idosos-porto-alegre' },
        { label: 'Casa de Repouso em Porto Alegre', href: '/porto-alegre' },
        { label: 'Nossas Unidades', href: '/sobre/estrutura' },
      ]),
    ],
  },

  {
    _id: 'seo-page-residencia-idosos',
    _type: 'page', title: 'Residência para Idosos Porto Alegre', path: '/residencia-para-idosos-porto-alegre', published: true,
    seo: {
      title: 'Residência para Idosos em Porto Alegre | Novo Lar Geriatria',
      description: 'Residência para idosos em Porto Alegre que preserva autonomia, qualidade de vida e dignidade. Moradia segura com suporte médico e atividades terapêuticas diárias.',
    },
    serviceSchema: { name: 'Residência para Idosos Porto Alegre', description: 'Moradia para idosos com suporte clínico e qualidade de vida em Porto Alegre.', areaServed: 'Porto Alegre' },
    sections: [
      hero({
        eyebrow: 'Residência para Idosos · Porto Alegre · Qualidade de Vida',
        heading: 'Residência para Idosos em Porto Alegre com Qualidade de Vida',
        description: 'A Novo Lar Geriatria é muito mais que um local de cuidado — é uma residência que preserva a dignidade, estimula a autonomia e promove qualidade de vida para cada residente em Porto Alegre.',
        badges: stdBadges,
        breadcrumbs: [{ label: 'Home', href: '/' }, { label: 'Residência para Idosos' }],
      }),
      twoCol({
        leftHeading: 'O que define uma boa residência para idosos?',
        leftParagraphs: [
          'Segurança é o mínimo esperado. Uma residência para idosos de qualidade vai além: preserva autonomia, estimula sociabilidade, oferece atividades com propósito e mantém o idoso como protagonista da própria vida.',
          'Na Novo Lar, o plano de cuidados considera não apenas as necessidades clínicas do residente, mas também seus gostos, história de vida, hábitos e preferências pessoais.',
        ],
        rightHeading: 'Pilares da residência Novo Lar',
        rightType: 'checklist',
        checklistItems: [
          'Moradia digna: quartos confortáveis com privacidade',
          'Alimentação: 6 refeições balanceadas com nutricionista',
          'Cuidado clínico: enfermagem 24h e médico geriatra',
          'Atividades diárias: terapêuticas, cognitivas e recreativas',
          'Socialização: convivência e atividades em grupo',
          'Família integrada: visitas livres e comunicação aberta',
        ],
      }),
      cta('Agende uma visita à nossa residência', 'Conheça o espaço, a equipe e a rotina antes de qualquer decisão.'),
      relatedLinks('Veja também', [
        { label: 'Lar para Idosos em Porto Alegre', href: '/lar-para-idosos-em-porto-alegre' },
        { label: 'ILPI em Porto Alegre', href: '/ilpi-porto-alegre' },
        { label: 'Nossas Unidades', href: '/sobre/estrutura' },
      ]),
    ],
  },

  {
    _id: 'seo-page-pos-alta-hospitalar',
    _type: 'page', title: 'Acolhimento Pós-Alta Hospitalar', path: '/acolhimento-pos-alta-hospitalar-idosos', published: true,
    seo: {
      title: 'Acolhimento Pós-Alta Hospitalar para Idosos | Novo Lar Geriatria Porto Alegre',
      description: 'Acolhimento pós-alta hospitalar para idosos em Porto Alegre. Recuperação segura após cirurgia ou internação com enfermagem, fisioterapia e médico geriatra.',
    },
    serviceSchema: { name: 'Acolhimento Pós-Alta Hospitalar', description: 'Cuidados de transição pós-alta hospitalar para idosos em Porto Alegre.', areaServed: 'Porto Alegre' },
    sections: [
      hero({
        eyebrow: 'Pós-Alta · Transição Hospital-Residencial · Porto Alegre',
        heading: 'Acolhimento Pós-Alta Hospitalar para Idosos',
        description: 'A transição do hospital para casa nem sempre é segura para o idoso. A Novo Lar Geriatria oferece acolhimento pós-alta com toda a estrutura clínica para uma recuperação segura e monitorada.',
        badges: stdBadges,
        breadcrumbs: [{ label: 'Home', href: '/' }, { label: 'Pós-Alta Hospitalar' }],
      }),
      twoCol({
        leftHeading: 'Por que a transição pós-alta é crítica para o idoso?',
        leftParagraphs: [
          'A alta hospitalar não significa que o idoso está completamente recuperado. As primeiras semanas após a alta são de alto risco para reinternações, especialmente em idosos com múltiplas comorbidades.',
          'Um acolhimento pós-alta bem estruturado — com equipe preparada, medicações corretas e monitoramento contínuo — reduz significativamente o risco de complicações e reinternação hospitalar.',
        ],
        rightHeading: 'Como funciona o acolhimento pós-alta na Novo Lar',
        rightType: 'checklist',
        checklistItems: [
          'Recepção com leitura completa do relatório hospitalar',
          'Plano de cuidados alinhado ao protocolo de alta',
          'Enfermagem 24h: medicamentos, curativos e monitoramento',
          'Fisioterapia de reabilitação desde o primeiro dia',
          'Comunicação com médico hospitalar responsável',
          'Reporte diário à família sobre evolução',
        ],
      }),
      faq([
        { question: 'Com qual antecedência devo contatar a Novo Lar para o pós-alta?', answer: 'Idealmente 48-72h antes da alta planejada. Em emergências, avaliamos conforme disponibilidade de vagas.' },
        { question: 'A Novo Lar aceita pacientes com cateter, sonda ou outras necessidades especializadas?', answer: 'Avaliamos cada caso individualmente. Nossa equipe de enfermagem é habilitada para manuseio de diversos dispositivos. Entre em contato para avaliação.' },
      ]),
      cta('Planeje o acolhimento pós-alta com nossa equipe', 'Entre em contato com antecedência para garantir vaga e preparar a chegada do seu familiar.'),
      relatedLinks('Veja também', [
        { label: 'Hospedagem Temporária', href: '/hospedagem-temporaria-idosos-porto-alegre' },
        { label: 'Cuidados Pós-Cirúrgicos', href: '/cuidados-pos-cirurgicos-idosos' },
        { label: 'Reabilitação Geriátrica', href: '/cuidados-reabilitacao-geriatrica' },
      ]),
    ],
  },

  // ── CIDADES ──────────────────────────────────────────────────────────────────

  ...[
    { id: 'gravatai', path: '/gravatai', city: 'Gravataí', via: 'pela BR-290', citySlug: 'gravatai' },
    { id: 'cachoeirinha', path: '/cachoeirinha', city: 'Cachoeirinha', via: 'pelo acesso da Zona Norte', citySlug: 'cachoeirinha' },
    { id: 'esteio', path: '/esteio', city: 'Esteio', via: 'pela BR-116', citySlug: 'esteio' },
    { id: 'sapucaia-do-sul', path: '/sapucaia-do-sul', city: 'Sapucaia do Sul', via: 'pela BR-116', citySlug: 'sapucaia-do-sul' },
    { id: 'alvorada', path: '/alvorada', city: 'Alvorada', via: 'pelo acesso Leste', citySlug: 'alvorada' },
    { id: 'viamao', path: '/viamao', city: 'Viamão', via: 'pelo acesso Sul', citySlug: 'viamao' },
  ].map(({ id, path, city, via }) => ({
    _id: `seo-page-${id}`,
    _type: 'page',
    title: `${city} — Casa de Repouso Próxima`,
    path,
    published: true,
    seo: {
      title: `Casa de Repouso Próxima a ${city} | Novo Lar Geriatria Porto Alegre`,
      description: `Famílias de ${city} escolhem a Novo Lar Geriatria em Porto Alegre para cuidados especializados 24h. Acesso fácil ${via}, visitas diárias liberadas.`,
    },
    sections: [
      hero({
        eyebrow: `${city} · Porto Alegre · Cuidado Especializado`,
        heading: `Para Famílias de ${city}: Cuidado Geriátrico em Porto Alegre`,
        description: `Atendemos famílias de ${city} em nossas unidades em Porto Alegre. Equipe multidisciplinar 24h, médico geriatra e estrutura completa para idosos em diferentes graus de dependência.`,
        badges: stdBadges,
        breadcrumbs: [{ label: 'Home', href: '/' }, { label: city }],
      }),
      twoCol({
        leftHeading: `Cuidados geriátricos para famílias de ${city}`,
        leftParagraphs: [
          `Muitas famílias de ${city} escolhem a Novo Lar Geriatria por ser a opção mais próxima com estrutura clínica completa em Porto Alegre. O deslocamento ${via} leva poucos minutos.`,
          'Oferecemos visitas diárias livres, comunicação ativa com a família e relatórios de evolução regulares — para que a distância geográfica não se converta em distância afetiva.',
        ],
        rightHeading: 'Por que famílias de fora de Porto Alegre escolhem a Novo Lar',
        rightType: 'checklist',
        checklistItems: [
          `Acesso fácil ${via} de ${city}`,
          'Visitas diárias abertas — sem restrição de horário',
          'Comunicação proativa: família sempre informada',
          'Equipe multidisciplinar 24h: médico, enfermagem, fisio e nutrição',
          'Estrutura completa em 3 unidades em Porto Alegre',
          'Mais de 30 anos de experiência em geriatria',
        ],
      }),
      faq([
        { question: `A Novo Lar tem alguma unidade em ${city}?`, answer: `Não temos unidades físicas em ${city}, mas atendemos muitas famílias da região em nossas unidades em Porto Alegre. O acesso ${via} facilita as visitas regulares.` },
        { question: 'Como funciona a visita antes da admissão?', answer: 'Agende uma visita guiada gratuita. Nossa equipe apresenta as instalações, explica a rotina e responde todas as dúvidas antes de qualquer decisão.' },
      ]),
      cta(`Fale com nossa equipe — atendemos famílias de ${city}`, 'Agende uma visita às nossas unidades em Porto Alegre.'),
      relatedLinks('Veja também', [
        { label: 'Região Metropolitana', href: '/regiao-metropolitana' },
        { label: 'Porto Alegre — Casa de Repouso', href: '/porto-alegre' },
        { label: 'ILPI em Porto Alegre', href: '/ilpi-porto-alegre' },
      ]),
    ],
  })),

  {
    _id: 'seo-page-vale-do-sinos',
    _type: 'page', title: 'Vale do Sinos — Cuidados Geriátricos', path: '/vale-do-sinos', published: true,
    seo: {
      title: 'Residencial Geriátrico para Famílias do Vale do Sinos | Novo Lar',
      description: 'Famílias do Vale dos Sinos escolhem a Novo Lar Geriatria em Porto Alegre. Cuidados especializados 24h com acesso fácil pela BR-116 e RS-020.',
    },
    sections: [
      hero({
        eyebrow: 'Vale do Sinos · Porto Alegre · Cuidado Especializado',
        heading: 'Para Famílias do Vale do Sinos: Cuidado Geriátrico em Porto Alegre',
        description: 'Atendemos famílias de toda a região do Vale do Sinos — Novo Hamburgo, São Leopoldo, Sapucaia do Sul e cidades vizinhas — em nossas unidades em Porto Alegre.',
        badges: stdBadges,
        breadcrumbs: [{ label: 'Home', href: '/' }, { label: 'Vale do Sinos' }],
      }),
      twoCol({
        leftHeading: 'Cuidados geriátricos para o Vale do Sinos',
        leftParagraphs: [
          'Famílias de toda a região do Vale do Sinos que buscam uma ILPI de qualidade geralmente encontram na Novo Lar Geriatria a estrutura clínica e o cuidado humanizado que procuram.',
          'O acesso pela BR-116 e RS-020 facilita as visitas regulares, e nossa política de visitas abertas garante que a família possa estar presente sempre que quiser.',
        ],
        rightHeading: 'O que oferecemos para famílias da região',
        rightType: 'checklist',
        checklistItems: [
          'Acesso fácil pela BR-116 e RS-020',
          'Visitas diárias liberadas — sem restrição',
          'Equipe multidisciplinar completa 24h',
          '3 unidades em Porto Alegre para escolher',
          'Comunicação ativa com familiares de fora da capital',
          'Avaliação gratuita antes da admissão',
        ],
      }),
      cta('Fale com nossa equipe — atendemos o Vale do Sinos', 'Agende uma visita às nossas unidades em Porto Alegre.'),
      relatedLinks('Cidades do Vale do Sinos que atendemos', [
        { label: 'Novo Hamburgo', href: '/novo-hamburgo' },
        { label: 'São Leopoldo', href: '/sao-leopoldo' },
        { label: 'Sapucaia do Sul', href: '/sapucaia-do-sul' },
        { label: 'Esteio', href: '/esteio' },
      ]),
    ],
  },

  {
    _id: 'seo-page-zona-norte',
    _type: 'page', title: 'Zona Norte Porto Alegre — Casa de Repouso', path: '/zona-norte-porto-alegre', published: true,
    seo: {
      title: 'Casa de Repouso na Zona Norte de Porto Alegre | Novo Lar Geriatria',
      description: 'Residencial geriátrico na Zona Norte de Porto Alegre com unidade no Passo d\'Areia. Cuidados 24h, médico geriatra e atividades terapêuticas diárias.',
    },
    sections: [
      hero({
        eyebrow: 'Zona Norte · Passo d\'Areia · Porto Alegre',
        heading: 'Casa de Repouso na Zona Norte de Porto Alegre',
        description: 'A Novo Lar Geriatria tem unidade no Passo d\'Areia, no coração da Zona Norte de Porto Alegre. Cuidado geriátrico completo próximo de casa.',
        badges: stdBadges,
        breadcrumbs: [{ label: 'Home', href: '/' }, { label: 'Zona Norte Porto Alegre' }],
      }),
      twoCol({
        leftHeading: 'Cuidado geriátrico na Zona Norte',
        leftParagraphs: [
          'Nossa unidade no Passo d\'Areia atende famílias da Zona Norte de Porto Alegre e região — Sarandi, Rubem Berta, Jardim Itú, Jardim Lindóia e bairros vizinhos.',
          'Além da unidade no Passo d\'Areia, temos duas unidades em Moinhos de Vento para famílias que preferem a Zona Centro-Sul da cidade.',
        ],
        rightHeading: 'Unidade Novo Lar no Passo d\'Areia',
        rightType: 'checklist',
        checklistItems: [
          'Localização: Zona Norte de Porto Alegre (Passo d\'Areia)',
          'Equipe multidisciplinar 24h no local',
          'Quartos individuais e compartilhados',
          'Áreas de convivência e jardim',
          'Atividades terapêuticas e recreativas diárias',
          'Visitas diárias abertas para família',
        ],
      }),
      cta('Conheça nossa unidade no Passo d\'Areia', 'Agende uma visita e conheça o espaço pessoalmente.'),
      relatedLinks('Veja também', [
        { label: 'Passo d\'Areia — Unidade', href: '/porto-alegre/passo-dareia' },
        { label: 'Porto Alegre — Todas as Unidades', href: '/porto-alegre' },
        { label: 'Alvorada', href: '/alvorada' },
      ]),
    ],
  },

  // ── TERMOS TÉCNICOS ──────────────────────────────────────────────────────────

  {
    _id: 'seo-page-ilpi-em-poa',
    _type: 'page', title: 'ILPI em Porto Alegre — Guia', path: '/ilpi-em-porto-alegre', published: true,
    seo: {
      title: 'ILPI em Porto Alegre — Guia Completo 2025 | Novo Lar Geriatria',
      description: 'Guia completo sobre ILPIs em Porto Alegre: o que são, regulamentação, como avaliar e por que a Novo Lar é referência na cidade há 30 anos.',
    },
    sections: [
      hero({
        eyebrow: 'ILPI · Guia · Porto Alegre',
        heading: 'ILPI em Porto Alegre: Guia Completo',
        description: 'Tudo que você precisa saber sobre ILPIs em Porto Alegre: o que é, como é regulamentada, o que exigir em uma visita e como a Novo Lar Geriatria se posiciona como referência.',
        badges: stdBadges,
        breadcrumbs: [{ label: 'Home', href: '/' }, { label: 'ILPI em Porto Alegre' }],
      }),
      twoCol({
        leftHeading: 'O que é uma ILPI e como é regulamentada?',
        leftParagraphs: [
          'ILPI significa Instituição de Longa Permanência para Idosos — é o termo técnico e legal regulamentado pela ANVISA (RDC 283/2005) para qualquer estabelecimento que preste cuidados a idosos em regime residencial.',
          'Uma ILPI em Porto Alegre deve ter alvará sanitário da ANVISA, registro no CNAS e cumprir as exigências da RDC 283 em relação a estrutura física, equipe mínima e protocolos de cuidado.',
        ],
        rightHeading: 'O que exigir de uma ILPI em Porto Alegre',
        rightType: 'checklist',
        checklistItems: [
          'Alvará sanitário da ANVISA atualizado',
          'Registro no CNAS (Conselho Nacional de Assistência Social)',
          'Equipe de enfermagem de nível superior plantonista',
          'Médico geriatra responsável técnico',
          'Plano de cuidados individualizado por residente',
          'Política de visitas clara e sem restrições abusivas',
        ],
      }),
      faq([
        { question: 'Como verificar se uma ILPI em Porto Alegre é regulamentada?', answer: 'Solicite o alvará sanitário da ANVISA/VISA RS e o registro no CNAS. Você também pode consultar o CNES (Cadastro Nacional de Estabelecimentos de Saúde) online.' },
        { question: 'A Novo Lar é uma ILPI regulamentada?', answer: 'Sim. A Novo Lar Geriatria opera como ILPI regulamentada em Porto Alegre, com todos os alvarás e registros exigidos pela legislação.' },
      ]),
      cta('Conheça a ILPI de referência em Porto Alegre', 'Agende uma visita à Novo Lar e veja por que somos referência há mais de 30 anos.'),
      relatedLinks('Veja também', [
        { label: 'ILPI Porto Alegre (landing)', href: '/ilpi-porto-alegre' },
        { label: 'Casa de Repouso em Porto Alegre', href: '/casa-de-repouso-em-porto-alegre' },
        { label: 'Diferença entre ILPI e Casa de Repouso', href: '/blog/diferenca-entre-ilpi-casa-de-repouso-e-residencial-geriatrico' },
      ]),
    ],
  },

  {
    _id: 'seo-page-residencial-geriatrico-em',
    _type: 'page', title: 'Residencial Geriátrico em Porto Alegre', path: '/residencial-geriatrico-em-porto-alegre', published: true,
    seo: {
      title: 'Residencial Geriátrico em Porto Alegre — O Que é e Como Escolher | Novo Lar',
      description: 'Saiba o que diferencia um residencial geriátrico de qualidade em Porto Alegre. Estrutura, equipe, serviços e como a Novo Lar se posiciona no mercado.',
    },
    sections: [
      hero({
        eyebrow: 'Residencial Geriátrico · Porto Alegre · Referência',
        heading: 'Residencial Geriátrico em Porto Alegre: O Que é e Como Escolher',
        description: 'Entenda o que define um residencial geriátrico de qualidade em Porto Alegre, quais são os critérios de escolha e por que a Novo Lar Geriatria é referência há 30 anos na cidade.',
        badges: stdBadges,
        breadcrumbs: [{ label: 'Home', href: '/' }, { label: 'Residencial Geriátrico em Porto Alegre' }],
      }),
      twoCol({
        leftHeading: 'O que define um residencial geriátrico?',
        leftParagraphs: [
          'Um residencial geriátrico se diferencia de uma simples casa de repouso pelo nível de especialização clínica: médico geriatra, equipe de enfermagem com formação específica e protocolos baseados nas diretrizes da Sociedade Brasileira de Geriatria.',
          'A Novo Lar Geriatria opera como residencial geriátrico com foco clínico — mas sem perder o acolhimento e a humanização que fazem cada residente sentir-se em casa.',
        ],
        rightHeading: 'Diferenciais do residencial geriátrico Novo Lar',
        rightType: 'checklist',
        checklistItems: [
          'Médico geriatra responsável por cada plano de cuidados',
          'Equipe multidisciplinar integrada (enfermagem, fisio, fonoaudiologia, nutri, psicologia)',
          'Protocolos clínicos baseados em medicina baseada em evidências',
          '3 unidades em Porto Alegre com estruturas diferenciadas',
          'Mais de 30 anos de especialização em geriatria',
          'Avaliação inicial gratuita e visita guiada',
        ],
      }),
      cta('Conheça o residencial geriátrico de referência em Porto Alegre', 'Agende uma visita e veja de perto a diferença da especialização clínica.'),
      relatedLinks('Veja também', [
        { label: 'Residencial Geriátrico Porto Alegre (landing)', href: '/residencial-geriatrico-porto-alegre' },
        { label: 'Clínica Geriátrica Porto Alegre', href: '/clinica-geriatrica-porto-alegre' },
        { label: 'ILPI em Porto Alegre', href: '/ilpi-em-porto-alegre' },
      ]),
    ],
  },

  {
    _id: 'seo-page-clinica-idosos',
    _type: 'page', title: 'Clínica para Idosos Porto Alegre', path: '/clinica-para-idosos-em-porto-alegre', published: true,
    seo: {
      title: 'Clínica para Idosos em Porto Alegre | Novo Lar Geriatria',
      description: 'Clínica residencial para idosos em Porto Alegre com médico geriatra, enfermagem 24h, fisioterapia e cuidados personalizados por grau de dependência.',
    },
    sections: [
      hero({
        eyebrow: 'Clínica para Idosos · Porto Alegre · Especializada',
        heading: 'Clínica para Idosos em Porto Alegre',
        description: 'A Novo Lar Geriatria combina a estrutura clínica de uma clínica para idosos com o acolhimento de um lar. Médico geriatra, enfermagem 24h e equipe multidisciplinar em um único ambiente.',
        badges: stdBadges,
        breadcrumbs: [{ label: 'Home', href: '/' }, { label: 'Clínica para Idosos' }],
      }),
      twoCol({
        leftHeading: 'A expectativa de quem busca uma clínica para idosos',
        leftParagraphs: [
          'Quem busca uma "clínica para idosos" geralmente tem em mente um nível de assistência médica mais rigoroso: médico geriatra presente, protocolos clínicos definidos e equipe capaz de lidar com situações de saúde mais complexas.',
          'É exatamente isso que a Novo Lar oferece — dentro de um ambiente residencial humano, sem a impessoalidade de um hospital.',
        ],
        rightHeading: 'Estrutura clínica disponível',
        rightType: 'checklist',
        checklistItems: [
          'Médico geriatra: responsável técnico e visitas regulares',
          'Enfermagem 24h com técnicos e enfermeiros plantonistas',
          'Fisioterapia individual e em grupo',
          'Fonoaudiologia disponível',
          'Nutricionista com avaliação periódica',
          'Psicólogo para residentes e familiares',
        ],
      }),
      cta('Fale com nossa equipe clínica', 'Avaliamos as necessidades do seu familiar e apresentamos o plano de cuidados adequado.'),
      relatedLinks('Veja também', [
        { label: 'Clínica Geriátrica Porto Alegre', href: '/clinica-geriatrica-porto-alegre' },
        { label: 'Cuidado Integral ao Idoso', href: '/cuidado-integral-ao-idoso-em-porto-alegre' },
        { label: 'ILPI em Porto Alegre', href: '/ilpi-porto-alegre' },
      ]),
    ],
  },

  {
    _id: 'seo-page-cuidado-integral',
    _type: 'page', title: 'Cuidado Integral ao Idoso Porto Alegre', path: '/cuidado-integral-ao-idoso-em-porto-alegre', published: true,
    seo: {
      title: 'Cuidado Integral ao Idoso em Porto Alegre | Novo Lar Geriatria',
      description: 'Cuidado integral ao idoso em Porto Alegre: saúde física, cognitiva, emocional e social em um único ambiente. Equipe multidisciplinar e plano individualizado.',
    },
    sections: [
      hero({
        eyebrow: 'Cuidado Integral · Porto Alegre · Multidisciplinar',
        heading: 'Cuidado Integral ao Idoso em Porto Alegre',
        description: 'O envelhecimento saudável exige atenção a todas as dimensões: física, cognitiva, emocional e social. A Novo Lar Geriatria oferece cuidado integral com equipe multidisciplinar integrada.',
        badges: stdBadges,
        breadcrumbs: [{ label: 'Home', href: '/' }, { label: 'Cuidado Integral' }],
      }),
      twoCol({
        leftHeading: 'O que é cuidado integral ao idoso?',
        leftParagraphs: [
          'Cuidado integral é a abordagem que considera o idoso em sua totalidade — não apenas a doença ou a dependência, mas também sua história de vida, preferências, relações afetivas e bem-estar emocional.',
          'Na Novo Lar, o plano de cuidados de cada residente é construído com a participação da família, revisado regularmente e ajustado conforme a evolução clínica e pessoal do idoso.',
        ],
        rightHeading: 'As dimensões do cuidado integral na Novo Lar',
        rightType: 'cards',
        cardItems: [
          { title: 'Saúde Física', text: 'Médico geriatra, enfermagem 24h, fisioterapia, nutrição e controle rigoroso de medicações.' },
          { title: 'Saúde Cognitiva', text: 'Estimulação cognitiva diária, atividades de memória, atenção e linguagem com terapeuta ocupacional.' },
          { title: 'Saúde Emocional', text: 'Acompanhamento psicológico, musicoterapia, grupos de reminiscência e vínculo próximo com a equipe.' },
          { title: 'Vida Social', text: 'Atividades em grupo, celebrações, passeios e política de visitas aberta para família e amigos.' },
        ],
      }),
      cta('Conheça o cuidado integral da Novo Lar', 'Agende uma visita e veja como integramos todas as dimensões do cuidado ao idoso.'),
      relatedLinks('Veja também', [
        { label: 'Clínica Geriátrica Porto Alegre', href: '/clinica-geriatrica-porto-alegre' },
        { label: 'Residencial Geriátrico Porto Alegre', href: '/residencial-geriatrico-porto-alegre' },
        { label: 'Nossas Atividades', href: '/sobre/atividades' },
      ]),
    ],
  },

  {
    _id: 'seo-page-internacao-cronicos',
    _type: 'page', title: 'Internação Pacientes Crônicos Porto Alegre', path: '/internacao-para-pacientes-cronicos-porto-alegre', published: true,
    seo: {
      title: 'Internação para Pacientes Crônicos em Porto Alegre | Novo Lar Geriatria',
      description: 'Residencial especializado em pacientes crônicos em Porto Alegre. Diabetes, hipertensão, insuficiências e DPOC com monitoramento contínuo e equipe 24h.',
    },
    sections: [
      hero({
        eyebrow: 'Pacientes Crônicos · Porto Alegre · Monitoramento 24h',
        heading: 'Internação para Idosos com Doenças Crônicas em Porto Alegre',
        description: 'Para idosos com condições crônicas que exigem monitoramento contínuo, a Novo Lar Geriatria oferece o suporte clínico necessário em ambiente residencial humanizado.',
        badges: stdBadges,
        breadcrumbs: [{ label: 'Home', href: '/' }, { label: 'Internação Crônicos Porto Alegre' }],
      }),
      twoCol({
        leftHeading: 'Doenças crônicas e necessidade de internação',
        leftParagraphs: [
          'Idosos com múltiplas comorbidades crônicas frequentemente chegam a um ponto em que o cuidado domiciliar — mesmo com cuidador particular — não é mais suficientemente seguro.',
          'A internação em um residencial geriátrico permite monitoramento contínuo de sinais vitais, administração correta de medicamentos e resposta rápida a qualquer intercorrência clínica.',
        ],
        rightHeading: 'Condições crônicas que atendemos',
        rightType: 'checklist',
        checklistItems: [
          'Diabetes mellitus — controle glicêmico rigoroso',
          'Insuficiência cardíaca congestiva',
          'Hipertensão arterial sistêmica',
          'DPOC e insuficiência respiratória crônica',
          'Insuficiência renal crônica',
          'Artrite reumatoide e condições musculoesqueléticas',
        ],
      }),
      cta('Fale com nossa equipe sobre pacientes crônicos', 'Avaliamos as necessidades clínicas e desenvolvemos um plano personalizado.'),
      relatedLinks('Veja também', [
        { label: 'Cuidados para Pacientes Crônicos', href: '/cuidados-pacientes-cronicos' },
        { label: 'Internação Geriátrica', href: '/internacao-geriatrica-porto-alegre' },
        { label: 'Cuidado Integral ao Idoso', href: '/cuidado-integral-ao-idoso-em-porto-alegre' },
      ]),
    ],
  },

  {
    _id: 'seo-page-internacao-neurologicos',
    _type: 'page', title: 'Internação Pacientes Neurológicos Porto Alegre', path: '/internacao-para-pacientes-neurologicos-porto-alegre', published: true,
    seo: {
      title: 'Internação para Pacientes Neurológicos em Porto Alegre | Novo Lar Geriatria',
      description: 'Cuidados especializados para idosos com condições neurológicas em Porto Alegre. Alzheimer, Parkinson, AVC, demências e esclerose com equipe treinada 24h.',
    },
    sections: [
      hero({
        eyebrow: 'Neurologia · Porto Alegre · Especialização 24h',
        heading: 'Internação para Idosos com Condições Neurológicas',
        description: 'Para idosos com Alzheimer, Parkinson, AVC, demências e outras condições neurológicas que exigem suporte 24h, a Novo Lar Geriatria oferece estrutura clínica e equipe especializada.',
        badges: stdBadges,
        breadcrumbs: [{ label: 'Home', href: '/' }, { label: 'Internação Neurológicos Porto Alegre' }],
      }),
      twoCol({
        leftHeading: 'Por que condições neurológicas exigem internação especializada?',
        leftParagraphs: [
          'Condições neurológicas progressivas — como Alzheimer avançado, Parkinson com disfagia ou sequelas graves de AVC — chegam a um ponto em que o cuidado domiciliar não oferece a segurança necessária.',
          'Na Novo Lar, a equipe é treinada especificamente para as particularidades de cada condição neurológica, adaptando protocolos e ambiente para cada residente.',
        ],
        rightHeading: 'Condições neurológicas que atendemos',
        rightType: 'checklist',
        checklistItems: [
          'Doença de Alzheimer — todas as fases',
          'Doença de Parkinson — com ou sem demência associada',
          'Sequelas de AVC isquêmico e hemorrágico',
          'Demência com corpos de Lewy',
          'Demência vascular',
          'Outras condições neurodegenerativas',
        ],
      }),
      cta('Fale com nossa equipe neurológica especializada', 'Avaliamos o histórico neurológico do seu familiar e apresentamos o plano de cuidados adequado.'),
      relatedLinks('Veja também', [
        { label: 'Cuidados para Alzheimer', href: '/cuidados-alzheimer' },
        { label: 'Cuidados para Parkinson', href: '/cuidados-parkinson' },
        { label: 'Cuidados Pós-AVC', href: '/cuidados-pos-avc' },
        { label: 'Cuidados Neurológicos', href: '/cuidados-pacientes-neurologicos' },
      ]),
    ],
  },

  // ── BAIRRO × CONDIÇÃO ────────────────────────────────────────────────────────

  {
    _id: 'seo-page-moinhos-demencia',
    _type: 'page', title: 'Moinhos de Vento — Cuidados Demência', path: '/porto-alegre/moinhos-de-vento/cuidados-demencia', published: true,
    seo: {
      title: 'Cuidados para Demência em Moinhos de Vento, Porto Alegre | Novo Lar',
      description: 'Cuidado especializado para idosos com demência na unidade Novo Lar em Moinhos de Vento, Porto Alegre. Ambiente seguro, equipe treinada e rotina estruturada 24h.',
    },
    sections: [
      hero({
        eyebrow: 'Demência · Moinhos de Vento · Porto Alegre',
        heading: 'Cuidados para Demência em Moinhos de Vento',
        description: 'A unidade Novo Lar em Moinhos de Vento oferece cuidados especializados para idosos com demência em diferentes estágios — em um ambiente seguro, estruturado e humanizado no coração de Porto Alegre.',
        badges: stdBadges,
        breadcrumbs: [{ label: 'Home', href: '/' }, { label: 'Moinhos de Vento', href: '/porto-alegre/moinhos-de-vento' }, { label: 'Cuidados para Demência' }],
      }),
      twoCol({
        leftHeading: 'Cuidado especializado em demência na nossa unidade de Moinhos de Vento',
        leftParagraphs: [
          'Nossa unidade em Moinhos de Vento é especialmente adequada para idosos com demência por combinar localização privilegiada, ambiente seguro e equipe com experiência específica nessa condição.',
          'Oferecemos rotina estruturada — fator fundamental para reduzir ansiedade e desorientação — com estimulação cognitiva, atividades sensoriais e ambiente pensado para minimizar riscos.',
        ],
        rightHeading: 'Cuidados específicos para demência',
        rightType: 'checklist',
        checklistItems: [
          'Ambiente com saídas monitoradas e segurança adequada',
          'Rotina estruturada e previsível: reduz ansiedade',
          'Estimulação cognitiva adaptada ao estágio da demência',
          'Equipe treinada em manejo de agitação e desorientação',
          'Comunicação familiar: relatórios e contato proativo',
          'Integração com médico geriatra e neurologista',
        ],
      }),
      cta('Conheça nossa unidade em Moinhos de Vento', 'Agende uma visita e veja o ambiente onde o seu familiar será cuidado.'),
      relatedLinks('Veja também', [
        { label: 'Moinhos de Vento — Unidade', href: '/porto-alegre/moinhos-de-vento' },
        { label: 'Cuidados para Demência', href: '/cuidados-demencia' },
        { label: 'Moinhos — Alzheimer', href: '/porto-alegre/moinhos-de-vento/cuidados-alzheimer' },
      ]),
    ],
  },

  {
    _id: 'seo-page-moinhos-parkinson',
    _type: 'page', title: 'Moinhos de Vento — Cuidados Parkinson', path: '/porto-alegre/moinhos-de-vento/cuidados-parkinson', published: true,
    seo: {
      title: 'Cuidados para Parkinson em Moinhos de Vento, Porto Alegre | Novo Lar',
      description: 'Residencial em Moinhos de Vento especializado em Parkinson. Fisioterapia, fonoaudiologia e acompanhamento 24h para idosos com Parkinson em Porto Alegre.',
    },
    sections: [
      hero({
        eyebrow: 'Parkinson · Moinhos de Vento · Porto Alegre',
        heading: 'Cuidados para Parkinson em Moinhos de Vento',
        description: 'A unidade Novo Lar em Moinhos de Vento combina fisioterapia especializada, ambiente adaptado e equipe treinada para oferecer o melhor cuidado para idosos com Parkinson em Porto Alegre.',
        badges: stdBadges,
        breadcrumbs: [{ label: 'Home', href: '/' }, { label: 'Moinhos de Vento', href: '/porto-alegre/moinhos-de-vento' }, { label: 'Cuidados para Parkinson' }],
      }),
      twoCol({
        leftHeading: 'Por que Moinhos de Vento para idosos com Parkinson?',
        leftParagraphs: [
          'Nossa unidade em Moinhos de Vento tem estrutura adaptada para mobilidade reduzida: pisos antiderrapantes, barras de apoio em todos os ambientes e espaços que facilitam o uso de andadores e cadeiras de rodas.',
          'A equipe de fisioterapia atua diariamente com cada residente com Parkinson, adaptando os exercícios à fase da doença e comunicando a evolução regularmente com a família.',
        ],
        rightHeading: 'Cuidados para Parkinson na unidade Moinhos',
        rightType: 'checklist',
        checklistItems: [
          'Fisioterapia diária: marcha, equilíbrio e força',
          'Fonoaudiologia para fala e deglutição',
          'Ambiente adaptado para mobilidade reduzida',
          'Administração correta de medicamentos antiparkinsonianos',
          'Prevenção de quedas: protocolos e monitoramento',
          'Comunicação com neurologista do residente',
        ],
      }),
      cta('Conheça a unidade Moinhos de Vento', 'Agende uma visita e veja a estrutura adaptada para Parkinson.'),
      relatedLinks('Veja também', [
        { label: 'Cuidados para Parkinson', href: '/cuidados-parkinson' },
        { label: 'Moinhos de Vento — Unidade', href: '/porto-alegre/moinhos-de-vento' },
        { label: 'Reabilitação Geriátrica', href: '/cuidados-reabilitacao-geriatrica' },
      ]),
    ],
  },

  {
    _id: 'seo-page-moinhos-paliativos',
    _type: 'page', title: 'Moinhos de Vento — Cuidados Paliativos', path: '/porto-alegre/moinhos-de-vento/cuidados-paliativos', published: true,
    seo: {
      title: 'Cuidados Paliativos em Moinhos de Vento, Porto Alegre | Novo Lar Geriatria',
      description: 'Cuidados paliativos humanizados na unidade Novo Lar em Moinhos de Vento. Conforto, dignidade e suporte à família em ambiente acolhedor em Porto Alegre.',
    },
    sections: [
      hero({
        eyebrow: 'Cuidados Paliativos · Moinhos de Vento · Humanização',
        heading: 'Cuidados Paliativos em Moinhos de Vento',
        description: 'Para idosos em fase avançada de doença, nossa unidade em Moinhos de Vento oferece cuidados paliativos humanizados — priorizando conforto, dignidade e presença da família.',
        badges: stdBadges,
        breadcrumbs: [{ label: 'Home', href: '/' }, { label: 'Moinhos de Vento', href: '/porto-alegre/moinhos-de-vento' }, { label: 'Cuidados Paliativos' }],
      }),
      twoCol({
        leftHeading: 'Cuidados paliativos em um ambiente de qualidade',
        leftParagraphs: [
          'A unidade em Moinhos de Vento combina localização central, ambiente acolhedor e equipe preparada para oferecer cuidados paliativos de qualidade em Porto Alegre.',
          'Para famílias que vivem na Zona Centro-Sul de Porto Alegre ou em regiões próximas, nossa unidade em Moinhos facilita as visitas frequentes — essenciais na fase paliativa.',
        ],
        rightHeading: 'O que inclui nossos cuidados paliativos',
        rightType: 'checklist',
        checklistItems: [
          'Controle de dor e sintomas com suporte médico',
          'Ambiente acolhedor com visitas amplas para família',
          'Suporte emocional e psicológico ao residente',
          'Apoio à família: orientações e suporte ao luto antecipado',
          'Comunicação honesta e respeitosa em todas as etapas',
          'Equipe presente 24h para qualquer necessidade',
        ],
      }),
      cta('Fale com nossa equipe sobre cuidados paliativos', 'Estamos disponíveis para orientar sua família com acolhimento e respeito.'),
      relatedLinks('Veja também', [
        { label: 'Cuidados Paliativos', href: '/cuidados-paliativos-idosos' },
        { label: 'Moinhos de Vento — Unidade', href: '/porto-alegre/moinhos-de-vento' },
      ]),
    ],
  },

  {
    _id: 'seo-page-passo-dareia-demencia',
    _type: 'page', title: 'Passo d\'Areia — Cuidados Demência', path: '/porto-alegre/passo-dareia/cuidados-demencia', published: true,
    seo: {
      title: 'Cuidados para Demência no Passo d\'Areia, Porto Alegre | Novo Lar',
      description: 'Cuidado especializado para idosos com demência na unidade Novo Lar no Passo d\'Areia, Porto Alegre. Rotina terapêutica, ambiente seguro e equipe 24h.',
    },
    sections: [
      hero({
        eyebrow: 'Demência · Passo d\'Areia · Porto Alegre',
        heading: 'Cuidados para Demência no Passo d\'Areia',
        description: 'Nossa unidade no Passo d\'Areia, Zona Norte de Porto Alegre, oferece cuidados especializados para idosos com demência — com ambiente seguro, rotina estruturada e equipe treinada 24h.',
        badges: stdBadges,
        breadcrumbs: [{ label: 'Home', href: '/' }, { label: 'Passo d\'Areia', href: '/porto-alegre/passo-dareia' }, { label: 'Cuidados para Demência' }],
      }),
      twoCol({
        leftHeading: 'Cuidado para demência na Zona Norte de Porto Alegre',
        leftParagraphs: [
          'Para famílias da Zona Norte de Porto Alegre, nossa unidade no Passo d\'Areia é a opção mais próxima para cuidado especializado em demência — sem precisar se deslocar para outras regiões da cidade.',
          'O ambiente da unidade é estruturado para minimizar riscos e reduzir a desorientação: rotina previsível, espaços bem iluminados e equipe que conhece cada residente profundamente.',
        ],
        rightHeading: 'Cuidados para demência na unidade Passo d\'Areia',
        rightType: 'checklist',
        checklistItems: [
          'Ambiente adaptado e seguro para idosos com demência',
          'Rotina estruturada e previsível',
          'Estimulação cognitiva e atividades sensoriais',
          'Equipe treinada em manejo de comportamentos desafiadores',
          'Monitoramento médico e comunicação com neurologista',
          'Próximo à Zona Norte: facilita visitas da família',
        ],
      }),
      cta('Conheça nossa unidade no Passo d\'Areia', 'Agende uma visita e veja o ambiente adaptado para idosos com demência.'),
      relatedLinks('Veja também', [
        { label: 'Passo d\'Areia — Unidade', href: '/porto-alegre/passo-dareia' },
        { label: 'Cuidados para Demência', href: '/cuidados-demencia' },
        { label: 'Zona Norte Porto Alegre', href: '/zona-norte-porto-alegre' },
      ]),
    ],
  },

  {
    _id: 'seo-page-passo-dareia-parkinson',
    _type: 'page', title: 'Passo d\'Areia — Cuidados Parkinson', path: '/porto-alegre/passo-dareia/cuidados-parkinson', published: true,
    seo: {
      title: 'Cuidados para Parkinson no Passo d\'Areia, Porto Alegre | Novo Lar',
      description: 'Residencial especializado em Parkinson na Zona Norte de Porto Alegre. Fisioterapia, suporte à mobilidade e acompanhamento médico na unidade Passo d\'Areia.',
    },
    sections: [
      hero({
        eyebrow: 'Parkinson · Passo d\'Areia · Zona Norte',
        heading: 'Cuidados para Parkinson no Passo d\'Areia',
        description: 'A unidade Novo Lar no Passo d\'Areia oferece fisioterapia especializada, ambiente adaptado e suporte contínuo para idosos com Parkinson na Zona Norte de Porto Alegre.',
        badges: stdBadges,
        breadcrumbs: [{ label: 'Home', href: '/' }, { label: 'Passo d\'Areia', href: '/porto-alegre/passo-dareia' }, { label: 'Cuidados para Parkinson' }],
      }),
      twoCol({
        leftHeading: 'Cuidado para Parkinson na Zona Norte de Porto Alegre',
        leftParagraphs: [
          'Para famílias da Zona Norte que precisam de cuidado especializado para Parkinson sem se deslocar para outras regiões da cidade, a unidade Passo d\'Areia é a escolha natural.',
          'Fisioterapia diária, ambiente adaptado e equipe treinada em mobilidade e prevenção de quedas fazem da unidade Passo d\'Areia uma referência no cuidado ao Parkinson na Zona Norte.',
        ],
        rightHeading: 'Protocolo Parkinson na unidade Passo d\'Areia',
        rightType: 'checklist',
        checklistItems: [
          'Fisioterapia de marcha e equilíbrio — diária',
          'Ambiente adaptado: pisos, barras de apoio e iluminação',
          'Administração correta de antiparkinsonianos',
          'Fonoaudiologia para disfagia e fala',
          'Monitoramento e resposta rápida a quedas',
          'Próximo à Zona Norte: facilita visitas regulares',
        ],
      }),
      cta('Conheça a unidade Passo d\'Areia', 'Agende uma visita e veja nossa estrutura adaptada para Parkinson.'),
      relatedLinks('Veja também', [
        { label: 'Passo d\'Areia — Unidade', href: '/porto-alegre/passo-dareia' },
        { label: 'Cuidados para Parkinson', href: '/cuidados-parkinson' },
        { label: 'Zona Norte Porto Alegre', href: '/zona-norte-porto-alegre' },
      ]),
    ],
  },

  {
    _id: 'seo-page-passo-dareia-acamados',
    _type: 'page', title: 'Passo d\'Areia — Idosos Acamados', path: '/porto-alegre/passo-dareia/idosos-acamados', published: true,
    seo: {
      title: 'Cuidados para Idosos Acamados no Passo d\'Areia, Porto Alegre | Novo Lar',
      description: 'Cuidado completo para idosos acamados na unidade Novo Lar no Passo d\'Areia. Prevenção de escaras, fisioterapia passiva e enfermagem 24h em Porto Alegre.',
    },
    sections: [
      hero({
        eyebrow: 'Idosos Acamados · Passo d\'Areia · Porto Alegre',
        heading: 'Cuidados para Idosos Acamados no Passo d\'Areia',
        description: 'Nossa unidade no Passo d\'Areia tem equipe e estrutura preparadas para o cuidado de idosos acamados: protocolo de prevenção de escaras, fisioterapia passiva e enfermagem 24h.',
        badges: stdBadges,
        breadcrumbs: [{ label: 'Home', href: '/' }, { label: 'Passo d\'Areia', href: '/porto-alegre/passo-dareia' }, { label: 'Idosos Acamados' }],
      }),
      twoCol({
        leftHeading: 'Por que o cuidado do acamado exige protocolo rigoroso?',
        leftParagraphs: [
          'Idosos acamados apresentam alto risco de escaras, trombose, pneumonia aspirativa e contratura muscular. O cuidado adequado exige protocolo rigoroso e equipe presente em todos os turnos.',
          'Na unidade Passo d\'Areia, temos equipe treinada para mudança de decúbito sistemática, curativos especializados e fisioterapia passiva diária para manter amplitude articular.',
        ],
        rightHeading: 'Cuidados para acamados na unidade Passo d\'Areia',
        rightType: 'checklist',
        checklistItems: [
          'Mudança de decúbito a cada 2-3 horas por turno',
          'Colchões e coxins terapêuticos anti-escaras',
          'Curativos especializados para lesões já existentes',
          'Fisioterapia passiva e respiratória diária',
          'Higiene corporal completa por equipe especializada',
          'Monitoramento de sinais vitais e comunicação médica',
        ],
      }),
      cta('Fale com nossa equipe sobre idosos acamados', 'Avaliamos as necessidades e confirmamos nossa capacidade de atendimento.'),
      relatedLinks('Veja também', [
        { label: 'Cuidados para Acamados', href: '/cuidados-idosos-acamados' },
        { label: 'Passo d\'Areia — Unidade', href: '/porto-alegre/passo-dareia' },
        { label: 'Cuidados Paliativos', href: '/cuidados-paliativos-idosos' },
      ]),
    ],
  },

  // ── CIDADE + ILPI EM PORTO ALEGRE ─────────────────────────────────────────────

  ...['canoas', 'sao-leopoldo', 'novo-hamburgo', 'gravatai', 'cachoeirinha', 'viamao'].map((citySlug) => {
    const cityNames: Record<string, { name: string; via: string }> = {
      'canoas': { name: 'Canoas', via: 'pela Freeway' },
      'sao-leopoldo': { name: 'São Leopoldo', via: 'pela BR-116' },
      'novo-hamburgo': { name: 'Novo Hamburgo', via: 'pela BR-116' },
      'gravatai': { name: 'Gravataí', via: 'pela BR-290' },
      'cachoeirinha': { name: 'Cachoeirinha', via: 'pelo acesso da Zona Norte' },
      'viamao': { name: 'Viamão', via: 'pelo acesso Sul' },
    }
    const { name, via } = cityNames[citySlug]
    return {
      _id: `seo-page-${citySlug}-ilpi`,
      _type: 'page',
      title: `${name} — ILPI em Porto Alegre`,
      path: `/${citySlug}/ilpi-em-porto-alegre`,
      published: true,
      seo: {
        title: `ILPI em Porto Alegre para Famílias de ${name} | Novo Lar Geriatria`,
        description: `Famílias de ${name} encontram na Novo Lar Geriatria, em Porto Alegre, uma ILPI de referência com cuidados 24h. Acesso fácil ${via}.`,
      },
      sections: [
        hero({
          eyebrow: `${name} · ILPI · Porto Alegre`,
          heading: `Famílias de ${name}: ILPI de Referência em Porto Alegre`,
          description: `A Novo Lar Geriatria é a escolha de muitas famílias de ${name} que buscam uma ILPI de confiança em Porto Alegre. Acesso fácil ${via}, visitas diárias e cuidados especializados 24h.`,
          badges: stdBadges,
          breadcrumbs: [{ label: 'Home', href: '/' }, { label: name, href: `/${citySlug}` }, { label: 'ILPI em Porto Alegre' }],
        }),
        twoCol({
          leftHeading: `Por que famílias de ${name} escolhem a Novo Lar em Porto Alegre?`,
          leftParagraphs: [
            `Muitas famílias de ${name} que precisam de uma ILPI de qualidade optam pela Novo Lar Geriatria em Porto Alegre pela combinação de estrutura clínica completa, humanização no cuidado e facilidade de acesso ${via}.`,
            'Nossa política de visitas abertas garante que a família possa estar presente sempre que quiser — a distância de poucos quilômetros não precisa ser uma barreira.',
          ],
          rightHeading: 'O que a Novo Lar oferece',
          rightType: 'checklist',
          checklistItems: [
            `Acesso fácil ${via} de ${name}`,
            'ILPI regulamentada pela ANVISA',
            'Médico geriatra responsável técnico',
            'Enfermagem 24h',
            'Equipe multidisciplinar completa',
            'Visitas diárias liberadas sem restrição',
          ],
        }),
        cta(`Fale com nossa equipe — atendemos famílias de ${name}`, 'Agende uma visita e conheça nossas unidades em Porto Alegre.'),
        relatedLinks('Veja também', [
          { label: name, href: `/${citySlug}` },
          { label: 'ILPI em Porto Alegre', href: '/ilpi-em-porto-alegre' },
          { label: 'Porto Alegre', href: '/porto-alegre' },
        ]),
      ],
    }
  }),

  // ── PERGUNTAS (6 páginas) ────────────────────────────────────────────────────

  {
    _id: 'seo-page-pergunta-custo',
    _type: 'page', title: 'Pergunta: Quanto Custa Casa de Repouso', path: '/perguntas/casa-de-repouso-quanto-custa', published: true,
    seo: {
      title: 'Casa de Repouso: Quanto Custa em Porto Alegre? | Novo Lar Geriatria',
      description: 'Entenda os valores de uma casa de repouso em Porto Alegre, o que está incluso, como calcular e por que o custo-benefício de uma ILPI pode surpreender.',
    },
    sections: [
      hero({
        eyebrow: 'Pergunta Frequente · Custo · Porto Alegre',
        heading: 'Casa de Repouso: Quanto Custa em Porto Alegre?',
        description: 'O custo de uma casa de repouso em Porto Alegre depende do grau de dependência, tipo de quarto e serviços incluídos. Este guia ajuda a entender e comparar os valores com honestidade.',
        badges: stdBadges,
        breadcrumbs: [{ label: 'Home', href: '/' }, { label: 'Perguntas', href: '/perguntas-frequentes' }, { label: 'Quanto custa?' }],
      }),
      twoCol({
        leftHeading: 'O que influencia o custo de uma casa de repouso?',
        leftParagraphs: [
          'O principal fator é o grau de dependência do idoso. Residentes com maior necessidade de cuidados de enfermagem, fisioterapia intensiva ou cuidados paliativos têm custos maiores.',
          'Outros fatores: tipo de acomodação (quarto individual ou compartilhado), serviços adicionais (fonoaudiologia, psicologia) e localização da unidade.',
        ],
        rightHeading: 'O que geralmente está incluso',
        rightType: 'checklist',
        checklistItems: [
          'Acomodação (quarto individual ou compartilhado)',
          'Todas as refeições — 5 a 6 por dia',
          'Cuidados de enfermagem 24h',
          'Medicamentos de uso contínuo (verificar apólice)',
          'Atividades terapêuticas e recreativas',
          'Fisioterapia básica e acompanhamento médico',
        ],
      }),
      faq([
        { question: 'Quanto custa uma casa de repouso em Porto Alegre?', answer: 'Os valores variam amplamente. Para uma proposta personalizada da Novo Lar Geriatria, entre em contato com nossa equipe. A avaliação inicial é gratuita.' },
        { question: 'O plano de saúde cobre casa de repouso?', answer: 'A maioria dos planos de saúde não cobre internação em ILPI. Alguns cobrem serviços específicos como fisioterapia ou acompanhamento médico. Verifique com sua operadora.' },
        { question: 'Comparado ao cuidador 24h, a ILPI é mais cara?', answer: 'Na maioria dos casos, uma ILPI de qualidade tem custo similar ou menor que um cuidador 24h profissional — e oferece equipe multiprofissional completa.' },
      ]),
      cta('Solicite uma proposta personalizada', 'Entre em contato para receber os valores atualizados conforme as necessidades do seu familiar.'),
      relatedLinks('Veja também', [
        { label: 'ILPI ou Cuidador Particular', href: '/perguntas/ilpi-ou-cuidador-particular' },
        { label: 'Como Escolher Casa de Repouso', href: '/blog/como-escolher-casa-de-repouso-em-porto-alegre' },
      ]),
    ],
  },

  {
    _id: 'seo-page-pergunta-visitas',
    _type: 'page', title: 'Pergunta: Visitas em ILPI', path: '/perguntas/visitas-em-ilpi-como-funciona', published: true,
    seo: {
      title: 'Visitas em ILPI: Como Funciona? | Novo Lar Geriatria',
      description: 'Saiba como funcionam as visitas em uma ILPI em Porto Alegre. Horários, frequência, regras e como a família mantém vínculo próximo com o residente.',
    },
    sections: [
      hero({
        eyebrow: 'Pergunta Frequente · Visitas · ILPI',
        heading: 'Visitas em ILPI: Como Funciona na Prática?',
        description: 'A dúvida sobre visitas é uma das mais comuns de famílias que estão considerando uma ILPI. Aqui explicamos como funciona na Novo Lar Geriatria e o que você pode esperar.',
        badges: stdBadges,
        breadcrumbs: [{ label: 'Home', href: '/' }, { label: 'Perguntas', href: '/perguntas-frequentes' }, { label: 'Visitas em ILPI' }],
      }),
      twoCol({
        leftHeading: 'Como funcionam as visitas na Novo Lar Geriatria',
        leftParagraphs: [
          'Na Novo Lar Geriatria, as visitas são abertas e bem-vindas. Não impomos restrições de horário além das necessárias para a rotina de cuidados e descanso dos residentes.',
          'Acreditamos que a presença da família é parte fundamental do cuidado. O vínculo afetivo é terapêutico — e priorizamos um ambiente onde família e equipe trabalham juntos.',
        ],
        rightHeading: 'O que saber sobre visitas',
        rightType: 'checklist',
        checklistItems: [
          'Visitas diárias liberadas — sem necessidade de agendamento prévio',
          'Horários de refeição e descanso são respeitados pela equipe',
          'Crianças e animais de estimação podem visitar (avalie cada caso)',
          'Passeios externos: possíveis conforme estado clínico do residente',
          'Em casos de condições infecciosas: protocolos específicos de higiene',
          'Família sempre informada sobre estado clínico e rotina',
        ],
      }),
      faq([
        { question: 'Posso visitar todos os dias?', answer: 'Sim. Na Novo Lar Geriatria, as visitas diárias são bem-vindas. Incentivamos a presença da família como parte do cuidado.' },
        { question: 'Posso levar o idoso para passear fora da ILPI?', answer: 'Depende do estado clínico. Para residentes com boa saúde e mobilidade, passeios externos são possíveis. Informe sempre a equipe com antecedência.' },
        { question: 'Existem horários proibidos para visita?', answer: 'Respeitamos o período de descanso dos residentes, mas não impedimos visitas em horário algum se houver necessidade. A equipe orienta sobre o melhor momento.' },
      ]),
      cta('Venha conhecer a Novo Lar pessoalmente', 'Agende uma visita guiada e veja como é a rotina de visitação nas nossas unidades.'),
      relatedLinks('Veja também', [
        { label: 'Adaptação na ILPI', href: '/perguntas/como-funciona-a-adaptacao-na-ilpi' },
        { label: 'Quando Procurar uma ILPI', href: '/blog/quando-procurar-uma-ilpi' },
      ]),
    ],
  },

  {
    _id: 'seo-page-pergunta-alzheimer-internar',
    _type: 'page', title: 'Pergunta: Quando Internar Idoso com Alzheimer', path: '/perguntas/idoso-com-alzheimer-quando-internar', published: true,
    seo: {
      title: 'Idoso com Alzheimer: Quando Considerar uma ILPI? | Novo Lar',
      description: 'Sinais de que chegou a hora de buscar uma ILPI para um familiar com Alzheimer. Orientações para famílias enfrentando esta decisão difícil.',
    },
    sections: [
      hero({
        eyebrow: 'Alzheimer · Quando Buscar ILPI · Orientação Familiar',
        heading: 'Idoso com Alzheimer: Quando Considerar uma ILPI?',
        description: 'Esta é uma das decisões mais difíceis que uma família enfrenta. Não existe resposta perfeita, mas existem sinais claros que orientam quando o cuidado especializado 24h é o mais responsável.',
        badges: stdBadges,
        breadcrumbs: [{ label: 'Home', href: '/' }, { label: 'Perguntas', href: '/perguntas-frequentes' }, { label: 'Alzheimer: quando internar?' }],
      }),
      twoCol({
        leftHeading: 'Sinais de que chegou a hora',
        leftParagraphs: [
          'Não existe um marcador único. A decisão costuma ser um conjunto de sinais: o cuidador está exausto, o idoso se coloca em risco repetidamente, há episódios frequentes de desorientação noturna ou o comportamento ficou incontrolável em casa.',
          'Importante: considerar uma ILPI não é abandono. É reconhecer que a fase da doença exige mais do que qualquer família pode oferecer isoladamente — e que um ambiente especializado pode trazer mais qualidade de vida para o idoso.',
        ],
        rightHeading: 'Sinais concretos para observar',
        rightType: 'checklist',
        checklistItems: [
          'Deambulação noturna com risco de queda ou saída de casa',
          'Agressividade que a família não consegue manejar',
          'Incontinência dupla com necessidade de higiene especializada',
          'Recusa alimentar que leva à perda de peso significativa',
          'Cuidador com exaustão grave, depressão ou problemas de saúde',
          'O idoso não reconhece mais o ambiente doméstico',
        ],
      }),
      faq([
        { question: 'Meu familiar vai piorar se for para uma ILPI?', answer: 'Ao contrário: com estimulação cognitiva, rotina estruturada e equipe treinada, muitos residentes com Alzheimer apresentam melhor qualidade de vida na ILPI do que no ambiente domiciliar sobrecarregado.' },
        { question: 'Quem deve tomar a decisão?', answer: 'É uma decisão familiar, idealmente tomada com orientação médica. O médico geriatra ou neurologista pode ajudar a avaliar o momento certo.' },
      ]),
      cta('Fale com nossa equipe sobre Alzheimer', 'Nossa equipe pode orientar sua família nesta decisão com respeito e sem pressão.'),
      relatedLinks('Veja também', [
        { label: 'Cuidados para Alzheimer', href: '/cuidados-alzheimer' },
        { label: 'Alzheimer: quando a família não consegue', href: '/blog/alzheimer-quando-a-familia-nao-consegue-cuidar-sozinha' },
        { label: 'Quando Procurar uma ILPI', href: '/blog/quando-procurar-uma-ilpi' },
      ]),
    ],
  },

  {
    _id: 'seo-page-pergunta-ilpi-vs-cuidador',
    _type: 'page', title: 'Pergunta: ILPI ou Cuidador Particular', path: '/perguntas/ilpi-ou-cuidador-particular', published: true,
    seo: {
      title: 'ILPI ou Cuidador Particular: Qual Escolher? | Novo Lar Geriatria',
      description: 'Comparativo honesto entre ILPI e cuidador domiciliar. Custo, segurança, qualidade de vida e quando cada opção faz mais sentido para o idoso.',
    },
    sections: [
      hero({
        eyebrow: 'ILPI vs Cuidador · Decisão · Orientação',
        heading: 'ILPI ou Cuidador Particular: Como Escolher?',
        description: 'Esta é uma das comparações mais frequentes feitas por famílias. A resposta depende do grau de dependência do idoso, das condições da família e do que cada opção realmente oferece.',
        badges: stdBadges,
        breadcrumbs: [{ label: 'Home', href: '/' }, { label: 'Perguntas', href: '/perguntas-frequentes' }, { label: 'ILPI ou Cuidador?' }],
      }),
      twoCol({
        leftHeading: 'Quando o cuidador domiciliar faz sentido',
        leftParagraphs: [
          'O cuidador domiciliar funciona bem para idosos com dependência leve a moderada, que ainda valorizam a rotina em casa e têm família presente para supervisão.',
          'Limitações do cuidador domiciliar: não tem equipe de suporte para folgas e férias, não pode lidar isoladamente com intercorrências clínicas complexas e não oferece estímulo social com outros residentes.',
        ],
        rightHeading: 'Quando a ILPI é mais indicada',
        rightType: 'checklist',
        checklistItems: [
          'Dependência moderada a total: necessita de equipe, não de um único cuidador',
          'Condições clínicas complexas que exigem equipe multidisciplinar',
          'Risco de segurança que o cuidador sozinho não consegue gerir',
          'Idoso com demência avançada ou comportamentos desafiadores',
          'Família sem condições de supervisão diária',
          'Custo similar ou menor do que cuidador 24h profissional',
        ],
      }),
      faq([
        { question: 'Um cuidador 24h é realmente mais barato que uma ILPI?', answer: 'Nem sempre. Considerando custo do cuidador 24h (incluindo encargos, alimentação e cobertura de folgas), o valor pode ser igual ou superior ao de uma ILPI de qualidade.' },
        { question: 'O idoso vai se sentir abandonado em uma ILPI?', answer: 'Com visitas regulares e uma ILPI que prioriza vínculo afetivo, a maioria dos residentes se adapta bem. A Novo Lar incentiva visitas diárias e comunicação familiar ativa.' },
      ]),
      cta('Fale com nossa equipe para uma avaliação gratuita', 'Ajudamos a avaliar o grau de dependência e qual modelo de cuidado é mais indicado.'),
      relatedLinks('Veja também', [
        { label: 'ILPI ou Cuidador — Comparativo', href: '/comparativos/ilpi-ou-cuidador-24h' },
        { label: 'Quando Procurar uma ILPI', href: '/blog/quando-procurar-uma-ilpi' },
      ]),
    ],
  },

  {
    _id: 'seo-page-pergunta-admissao',
    _type: 'page', title: 'Pergunta: O Que Levar na Admissão', path: '/perguntas/o-que-levar-na-admissao-do-idoso', published: true,
    seo: {
      title: 'O Que Levar na Admissão do Idoso na ILPI | Novo Lar Geriatria',
      description: 'Lista completa do que levar na admissão do idoso em uma casa de repouso em Porto Alegre. Documentos, roupas, medicamentos e objetos pessoais.',
    },
    sections: [
      hero({
        eyebrow: 'Admissão · ILPI · Lista Completa',
        heading: 'O Que Levar na Admissão do Idoso na ILPI?',
        description: 'Para que a chegada do seu familiar seja tranquila e organizada, preparamos uma lista completa do que levar na admissão em nossas unidades em Porto Alegre.',
        badges: stdBadges,
        breadcrumbs: [{ label: 'Home', href: '/' }, { label: 'Perguntas', href: '/perguntas-frequentes' }, { label: 'Admissão: o que levar' }],
      }),
      twoCol({
        leftHeading: 'Documentação necessária',
        leftParagraphs: [
          'Nossa equipe precisa de uma série de documentos para montar o prontuário do residente e o plano de cuidados. Preparar tudo com antecedência evita idas e vindas desnecessárias.',
        ],
        rightHeading: 'Documentos — lista completa',
        rightType: 'checklist',
        checklistItems: [
          'RG e CPF do residente',
          'Cartão do plano de saúde (se houver)',
          'Cartão do SUS',
          'Relatório médico atualizado com diagnósticos e medicações',
          'Exames recentes (últimos 3-6 meses)',
          'Contato do médico assistente e neurologista (se houver)',
        ],
      }),
      twoCol({
        leftHeading: 'Itens pessoais e roupas',
        leftParagraphs: [
          'Incentivamos que o residente traga objetos queridos para personalizar seu espaço. Fotos, cobertores, travesseiro favorito e pequenos itens decorativos fazem diferença na adaptação.',
        ],
        rightHeading: 'Itens pessoais recomendados',
        rightType: 'checklist',
        checklistItems: [
          'Roupas suficientes para 7-10 dias (etiquetar com nome)',
          'Artigos de higiene pessoal (escova, creme, desodorante)',
          'Calçados antiderrapantes',
          'Fotos de família e objetos com valor afetivo',
          'Rádio ou aparelho de música favorito (quando pertinente)',
          'Medicamentos em uso com prescrição médica',
        ],
      }),
      cta('Dúvidas sobre a admissão? Fale conosco', 'Nossa equipe orienta a família em cada etapa do processo de admissão.'),
      relatedLinks('Veja também', [
        { label: 'Adaptação na ILPI', href: '/perguntas/como-funciona-a-adaptacao-na-ilpi' },
        { label: 'Visitas em ILPI', href: '/perguntas/visitas-em-ilpi-como-funciona' },
      ]),
    ],
  },

  {
    _id: 'seo-page-pergunta-adaptacao',
    _type: 'page', title: 'Pergunta: Adaptação na ILPI', path: '/perguntas/como-funciona-a-adaptacao-na-ilpi', published: true,
    seo: {
      title: 'Como Funciona a Adaptação do Idoso na ILPI? | Novo Lar Geriatria',
      description: 'Entenda o processo de adaptação do idoso ao ingressar em uma ILPI. Fases, dificuldades comuns e como a família pode ajudar na transição.',
    },
    sections: [
      hero({
        eyebrow: 'Adaptação · ILPI · Transição',
        heading: 'Como Funciona a Adaptação do Idoso na ILPI?',
        description: 'A adaptação a um novo ambiente é um processo natural. Entender o que esperar nas primeiras semanas ajuda a família a apoiar o seu familiar da forma mais eficaz.',
        badges: stdBadges,
        breadcrumbs: [{ label: 'Home', href: '/' }, { label: 'Perguntas', href: '/perguntas-frequentes' }, { label: 'Adaptação na ILPI' }],
      }),
      twoCol({
        leftHeading: 'Fases típicas da adaptação',
        leftParagraphs: [
          'A adaptação acontece em fases. Nas primeiras semanas, é comum que o idoso expresse resistência, tristeza ou saudade de casa — especialmente em idosos com plena cognição.',
          'Idosos com demência frequentemente se adaptam de forma diferente: a rotina estruturada, os estímulos e o ambiente seguro tendem a reduzir a agitação mais rapidamente do que em casa.',
        ],
        rightHeading: 'Como a família pode ajudar na adaptação',
        rightType: 'checklist',
        checklistItems: [
          'Visitar regularmente nos primeiros dias — presença é fundamental',
          'Trazer objetos queridos para o quarto desde o primeiro dia',
          'Manter comunicação por videochamada entre as visitas',
          'Não demonstrar culpa ou ansiedade durante as visitas (o idoso percebe)',
          'Confiar na equipe e comunicar observações construtivas',
          'Dar tempo: a adaptação pode levar de 2 a 6 semanas',
        ],
      }),
      faq([
        { question: 'É normal o idoso querer voltar para casa nas primeiras semanas?', answer: 'Sim, é muito comum. A equipe Novo Lar está preparada para acolher essas situações com paciência e sem dramatizar. Com o tempo e a presença da família, a maioria dos residentes se adapta.' },
        { question: 'Devo reduzir as visitas para o idoso se adaptar mais rápido?', answer: 'Não. A ausência da família piora a sensação de abandono. Visitar frequentemente, especialmente no início, acelera a adaptação.' },
      ]),
      cta('Fale com nossa equipe sobre o processo de adaptação', 'Orientamos as famílias em cada etapa, antes e depois da admissão.'),
      relatedLinks('Veja também', [
        { label: 'Visitas em ILPI', href: '/perguntas/visitas-em-ilpi-como-funciona' },
        { label: 'O Que Levar na Admissão', href: '/perguntas/o-que-levar-na-admissao-do-idoso' },
        { label: 'Quando Procurar uma ILPI', href: '/blog/quando-procurar-uma-ilpi' },
      ]),
    ],
  },

  // ── COMPARATIVOS (8 páginas) ─────────────────────────────────────────────────

  {
    _id: 'seo-page-comp-home-care',
    _type: 'page', title: 'Comparativo: ILPI ou Home Care', path: '/comparativos/ilpi-ou-home-care', published: true,
    seo: {
      title: 'ILPI ou Home Care: Qual a Melhor Opção para o Idoso? | Novo Lar',
      description: 'Comparativo completo entre ILPI e home care. Custos, segurança, qualidade de vida e quando cada modelo é mais adequado para o idoso e a família.',
    },
    sections: [
      hero({
        eyebrow: 'Comparativo · ILPI vs Home Care · Decisão Informada',
        heading: 'ILPI ou Home Care: Qual a Melhor Opção?',
        description: 'ILPI e home care são modelos diferentes, não opostos. A melhor escolha depende do grau de dependência, da estrutura familiar e das condições clínicas do idoso.',
        badges: stdBadges,
        breadcrumbs: [{ label: 'Home', href: '/' }, { label: 'Comparativos' }, { label: 'ILPI ou Home Care' }],
      }),
      twoCol({
        leftHeading: 'Home care: vantagens e limitações',
        leftParagraphs: [
          'O home care mantém o idoso em casa — o que pode ser uma vantagem significativa para quem tem forte vínculo com o ambiente doméstico e dependência ainda leve a moderada.',
          'Limitações: o home care depende de um único profissional (ou pequena equipe) que pode faltar, adoecer ou não ter capacidade para intercorrências complexas. O custo para cobertura 24h é, em geral, elevado.',
        ],
        rightHeading: 'ILPI: quando é a melhor escolha',
        rightType: 'checklist',
        checklistItems: [
          'Dependência moderada a total com necessidade de equipe',
          'Condições clínicas que exigem monitoramento especializado 24h',
          'Necessidade de estimulação social e cognitiva estruturada',
          'Família sem condições de supervisão e suporte frequente',
          'Custo do home care 24h equivalente ou superior à ILPI',
          'Risco de segurança que um cuidador isolado não controla',
        ],
      }),
      faq([
        { question: 'O home care é sempre mais barato que a ILPI?', answer: 'Não necessariamente. Um cuidador 24h com encargos, alimentação e cobertura de folgas pode custar tanto ou mais que uma ILPI de qualidade.' },
        { question: 'Posso combinar home care e ILPI temporária?', answer: 'Sim. A hospedagem temporária na Novo Lar permite períodos de descanso do cuidador domiciliar, mantendo a estrutura do home care como base.' },
      ]),
      cta('Avalie qual modelo é mais adequado para o seu familiar', 'Nossa equipe faz uma avaliação gratuita e orientação sem compromisso.'),
      relatedLinks('Veja também', [
        { label: 'ILPI ou Cuidador 24h', href: '/comparativos/ilpi-ou-cuidador-24h' },
        { label: 'Hospedagem Temporária', href: '/hospedagem-temporaria-idosos-porto-alegre' },
        { label: 'ILPI em Porto Alegre', href: '/ilpi-porto-alegre' },
      ]),
    ],
  },

  {
    _id: 'seo-page-comp-cuidador-24h',
    _type: 'page', title: 'Comparativo: ILPI ou Cuidador 24h', path: '/comparativos/ilpi-ou-cuidador-24h', published: true,
    seo: {
      title: 'ILPI ou Cuidador 24h: O Que Considerar? | Novo Lar Geriatria',
      description: 'Entenda as diferenças entre internar em uma ILPI e contratar um cuidador domiciliar 24h. Veja prós, contras e qual opção oferece mais segurança.',
    },
    sections: [
      hero({
        eyebrow: 'Comparativo · ILPI vs Cuidador 24h',
        heading: 'ILPI ou Cuidador 24h: O Que Considerar?',
        description: 'A comparação mais comum. ILPI e cuidador 24h têm custos similares na prática, mas oferecem estruturas muito diferentes de segurança e cuidado.',
        badges: stdBadges,
        breadcrumbs: [{ label: 'Home', href: '/' }, { label: 'Comparativos' }, { label: 'ILPI ou Cuidador 24h' }],
      }),
      twoCol({
        leftHeading: 'Cuidador 24h: o que a família não vê',
        leftParagraphs: [
          'Um cuidador domiciliar 24h real precisa de folgas, férias, saúde e energia. Na prática, uma cobertura 24h de qualidade requer pelo menos dois cuidadores em escala — o que dobra o custo e a complexidade de gestão para a família.',
          'Além disso, o cuidador não é médico, enfermeiro ou fisioterapeuta. Ele pode identificar um problema, mas não tem capacidade de resolvê-lo sozinho em uma emergência clínica.',
        ],
        rightHeading: 'O que a ILPI oferece além do cuidado básico',
        rightType: 'checklist',
        checklistItems: [
          'Equipe multidisciplinar: não depende de uma única pessoa',
          'Cobertura de folgas, férias e imprevistos sem impacto no cuidado',
          'Protocolo clínico para intercorrências',
          'Estimulação social e cognitiva estruturada',
          'Ambiente adaptado para segurança do idoso',
          'Custo geralmente similar ao cuidador 24h profissional com encargos',
        ],
      }),
      faq([
        { question: 'Um cuidador 24h em casa é mais seguro para o idoso?', answer: 'Depende do perfil do idoso. Para dependência leve e idoso sem riscos clínicos graves, o cuidador pode ser suficiente. Para dependência moderada-alta, a ILPI geralmente oferece mais segurança.' },
      ]),
      cta('Fale com nossa equipe para uma avaliação', 'Avaliamos o grau de dependência gratuitamente e orientamos a decisão mais adequada.'),
      relatedLinks('Veja também', [
        { label: 'ILPI ou Home Care', href: '/comparativos/ilpi-ou-home-care' },
        { label: 'ILPI ou Cuidador Particular', href: '/perguntas/ilpi-ou-cuidador-particular' },
      ]),
    ],
  },

  {
    _id: 'seo-page-comp-residencia-assistida',
    _type: 'page', title: 'Comparativo: ILPI ou Residência Assistida', path: '/comparativos/ilpi-ou-residencia-assistida', published: true,
    seo: {
      title: 'ILPI ou Residência Assistida: Qual é a Diferença? | Novo Lar Geriatria',
      description: 'Descubra as diferenças entre ILPI e residência assistida em Porto Alegre e qual modelo atende melhor o nível de dependência do seu familiar.',
    },
    sections: [
      hero({
        eyebrow: 'Comparativo · ILPI vs Residência Assistida',
        heading: 'ILPI ou Residência Assistida: Qual a Diferença?',
        description: 'ILPI e residência assistida são termos diferentes que descrevem modelos de cuidado para diferentes graus de dependência. Entenda as distinções práticas.',
        badges: stdBadges,
        breadcrumbs: [{ label: 'Home', href: '/' }, { label: 'Comparativos' }, { label: 'ILPI ou Residência Assistida' }],
      }),
      twoCol({
        leftHeading: 'Residência assistida: para quem é?',
        leftParagraphs: [
          'A residência assistida é mais adequada para idosos com autonomia parcial — que ainda se locomovem, participam das refeições de forma independente e precisam de suporte leve a moderado.',
          'Na prática, a Novo Lar funciona como ambas: oferece residência assistida para residentes mais independentes e ILPI completa para os que precisam de cuidados intensivos — sem que o idoso precise mudar de instituição.',
        ],
        rightHeading: 'ILPI: para quem é?',
        rightType: 'checklist',
        checklistItems: [
          'Dependência moderada a total nas atividades de vida diária',
          'Necessidade de equipe de enfermagem 24h',
          'Condições clínicas que exigem monitoramento contínuo',
          'Alzheimer, demência ou outras condições neurodegenerativas avançadas',
          'Idosos acamados ou com mobilidade muito reduzida',
          'Qualquer condição que torne o cuidado domiciliar inseguro',
        ],
      }),
      cta('Descubra qual modelo é mais adequado', 'Nossa equipe avalia o grau de dependência e orienta a família gratuitamente.'),
      relatedLinks('Veja também', [
        { label: 'Residência Assistida Porto Alegre', href: '/residencia-assistida-porto-alegre' },
        { label: 'ILPI em Porto Alegre', href: '/ilpi-porto-alegre' },
      ]),
    ],
  },

  {
    _id: 'seo-page-comp-hospedagem-temporaria',
    _type: 'page', title: 'Comparativo: ILPI ou Hospedagem Temporária', path: '/comparativos/ilpi-ou-hospedagem-temporaria', published: true,
    seo: {
      title: 'ILPI ou Hospedagem Temporária: Quando Cada Uma Faz Sentido? | Novo Lar',
      description: 'Saiba quando escolher hospedagem temporária e quando uma ILPI é a melhor solução para o idoso. Critérios práticos para tomar a decisão certa.',
    },
    sections: [
      hero({
        eyebrow: 'Comparativo · ILPI vs Hospedagem Temporária',
        heading: 'ILPI ou Hospedagem Temporária?',
        description: 'Hospedagem temporária e ILPI de longa permanência atendem necessidades diferentes. Saber distinguir evita escolhas precipitadas — e arrependimentos.',
        badges: stdBadges,
        breadcrumbs: [{ label: 'Home', href: '/' }, { label: 'Comparativos' }, { label: 'ILPI ou Hospedagem Temporária' }],
      }),
      twoCol({
        leftHeading: 'Quando a hospedagem temporária é a escolha certa',
        leftParagraphs: [
          'Viagem da família, pós-hospitalar de curta duração, período de descanso do cuidador ou necessidade de "testar" o ambiente antes de uma decisão definitiva — a hospedagem temporária serve bem para todos esses casos.',
          'A vantagem da Novo Lar: a hospedagem temporária oferece os mesmos cuidados da residência permanente, sem diferença de qualidade.',
        ],
        rightHeading: 'Quando a ILPI de longa permanência é necessária',
        rightType: 'checklist',
        checklistItems: [
          'Dependência estável que tornará o retorno a casa inseguro',
          'Cuidador familiar sem condições de continuar após o período temporário',
          'Condição progressiva que exige cuidado especializado indefinidamente',
          'Idoso que se adapta bem e demonstra preferência pelo ambiente',
          'Família que percebe que o modelo temporário virou permanente',
          'Avaliação médica recomendando longa permanência',
        ],
      }),
      cta('Comece com hospedagem temporária — sem pressão', 'A Novo Lar aceita estadias temporárias com opção de conversão para permanente.'),
      relatedLinks('Veja também', [
        { label: 'Hospedagem Temporária', href: '/hospedagem-temporaria-idosos-porto-alegre' },
        { label: 'Acolhimento Pós-Alta Hospitalar', href: '/acolhimento-pos-alta-hospitalar-idosos' },
      ]),
    ],
  },

  {
    _id: 'seo-page-comp-nomes',
    _type: 'page', title: 'Comparativo: Casa de Repouso ou Residencial Geriátrico', path: '/comparativos/casa-de-repouso-ou-residencial-geriatrico', published: true,
    seo: {
      title: 'Casa de Repouso ou Residencial Geriátrico: Qual a Diferença? | Novo Lar',
      description: 'Entenda a diferença entre casa de repouso e residencial geriátrico, o que cada termo significa na prática e como escolher o modelo certo.',
    },
    sections: [
      hero({
        eyebrow: 'Comparativo · Casa de Repouso vs Residencial Geriátrico',
        heading: 'Casa de Repouso ou Residencial Geriátrico: Qual a Diferença?',
        description: 'Esses termos são frequentemente usados como sinônimos, mas há diferenças de expectativa, especialização e posicionamento que valem ser entendidas.',
        badges: stdBadges,
        breadcrumbs: [{ label: 'Home', href: '/' }, { label: 'Comparativos' }, { label: 'Casa de Repouso vs Residencial Geriátrico' }],
      }),
      twoCol({
        leftHeading: '"Casa de repouso" vs "residencial geriátrico"',
        leftParagraphs: [
          '"Casa de repouso" é o termo popular, associado historicamente a um lugar de descanso para idosos — sem necessariamente implicar equipe clínica especializada.',
          '"Residencial geriátrico" carrega uma expectativa de especialização clínica: médico geriatra, equipe treinada em geriatria e protocolos específicos para as condições do envelhecimento.',
        ],
        rightHeading: 'O que realmente importa avaliar',
        rightType: 'checklist',
        checklistItems: [
          'Alvará sanitário da ANVISA (obrigatório para ambos)',
          'Equipe de enfermagem de nível superior 24h',
          'Médico geriatra responsável técnico',
          'Plano de cuidados individualizado',
          'Política de visitas transparente',
          'Atividades terapêuticas genuínas (não apenas decorativas)',
        ],
      }),
      cta('Conheça a Novo Lar: referência em ambos os modelos', 'Agende uma visita e entenda por que somos classificados como os dois.'),
      relatedLinks('Veja também', [
        { label: 'Casa de Repouso em Porto Alegre', href: '/casa-de-repouso-em-porto-alegre' },
        { label: 'Residencial Geriátrico Porto Alegre', href: '/residencial-geriatrico-porto-alegre' },
        { label: 'ILPI em Porto Alegre', href: '/ilpi-em-porto-alegre' },
      ]),
    ],
  },

  {
    _id: 'seo-page-comp-alzheimer-casa',
    _type: 'page', title: 'Comparativo: Alzheimer em Casa ou ILPI', path: '/comparativos/alzheimer-em-casa-ou-ilpi', published: true,
    seo: {
      title: 'Alzheimer: Cuidar em Casa ou em uma ILPI? | Novo Lar Geriatria',
      description: 'Quando cuidar de um familiar com Alzheimer em casa deixa de ser seguro? Entenda os sinais e quando uma ILPI especializada é a escolha mais responsável.',
    },
    sections: [
      hero({
        eyebrow: 'Comparativo · Alzheimer · Casa vs ILPI',
        heading: 'Alzheimer: Cuidar em Casa ou em uma ILPI?',
        description: 'Não há uma resposta única. Depende da fase da doença, da estrutura familiar e do que o idoso realmente precisa. Este guia ajuda a avaliar com clareza.',
        badges: stdBadges,
        breadcrumbs: [{ label: 'Home', href: '/' }, { label: 'Comparativos' }, { label: 'Alzheimer em Casa ou ILPI' }],
      }),
      twoCol({
        leftHeading: 'Cuidar em casa: quando ainda é possível',
        leftParagraphs: [
          'Nas fases iniciais do Alzheimer, o cuidado em casa com suporte profissional é viável e pode ser o mais adequado para o idoso, especialmente se ele tem forte vínculo com o ambiente doméstico.',
          'A família precisa estar preparada para aumentar progressivamente o suporte à medida que a doença avança — e reconhecer o momento em que o cuidado domiciliar deixa de ser seguro.',
        ],
        rightHeading: 'Sinais de que a ILPI é mais indicada',
        rightType: 'checklist',
        checklistItems: [
          'Deambulação noturna com risco de queda ou fuga',
          'Agressividade que a família não consegue manejar',
          'Incontinência dupla com necessidade de higiene especializada',
          'Recusa alimentar e perda de peso',
          'Cuidador familiar exausto ou com saúde comprometida',
          'O idoso não reconhece mais o ambiente doméstico',
        ],
      }),
      faq([
        { question: 'Uma ILPI especializada em Alzheimer vai melhorar a qualidade de vida do meu familiar?', answer: 'Frequentemente sim. Rotina estruturada, estimulação cognitiva, ambiente seguro e equipe treinada reduzem agitação e melhoram o estado geral do idoso com Alzheimer.' },
      ]),
      cta('Fale com nossa equipe especializada em Alzheimer', 'Orientamos sua família sobre o momento certo da transição, sem pressão.'),
      relatedLinks('Veja também', [
        { label: 'Cuidados para Alzheimer', href: '/cuidados-alzheimer' },
        { label: 'Alzheimer: quando a família não consegue', href: '/blog/alzheimer-quando-a-familia-nao-consegue-cuidar-sozinha' },
        { label: 'Quando Internar Idoso com Alzheimer', href: '/perguntas/idoso-com-alzheimer-quando-internar' },
      ]),
    ],
  },

  {
    _id: 'seo-page-comp-demencia-casa',
    _type: 'page', title: 'Comparativo: Demência em Casa ou ILPI', path: '/comparativos/demencia-em-casa-ou-ilpi', published: true,
    seo: {
      title: 'Demência: Cuidar em Casa ou em uma ILPI? | Novo Lar Geriatria',
      description: 'Comparativo honesto entre cuidar de um familiar com demência em casa ou em uma ILPI. Segurança, estrutura, custo e qualidade de vida do idoso.',
    },
    sections: [
      hero({
        eyebrow: 'Comparativo · Demência · Casa vs ILPI',
        heading: 'Demência: Cuidar em Casa ou em uma ILPI?',
        description: 'A demência é um espectro amplo — cada tipo e fase exige cuidado diferente. Este comparativo ajuda a entender quando a ILPI é a opção mais segura e adequada.',
        badges: stdBadges,
        breadcrumbs: [{ label: 'Home', href: '/' }, { label: 'Comparativos' }, { label: 'Demência em Casa ou ILPI' }],
      }),
      twoCol({
        leftHeading: 'Tipos de demência e necessidades diferentes',
        leftParagraphs: [
          'Alzheimer, demência vascular, demência com corpos de Lewy e demência frontotemporal têm progressões e necessidades distintas. Algumas progredem rapidamente; outras são mais estáveis por anos.',
          'O ponto comum: em todas as formas, a progressão da doença eventualmente exige cuidado que vai além do que uma família pode oferecer sozinha em casa.',
        ],
        rightHeading: 'Quando a ILPI é mais adequada para a demência',
        rightType: 'checklist',
        checklistItems: [
          'Comportamentos desafiadores que a família não consegue manejar',
          'Risco de segurança: fogão, eletricidade, saídas não controladas',
          'Necessidade de rotina altamente estruturada',
          'Incontinência dupla com higiene especializada',
          'Família sem condições de supervisão 24h',
          'Progressão rápida com necessidade clínica crescente',
        ],
      }),
      cta('Fale com nossa equipe especializada em demência', 'Avaliamos o estágio da demência e orientamos a decisão mais adequada.'),
      relatedLinks('Veja também', [
        { label: 'Cuidados para Demência', href: '/cuidados-demencia' },
        { label: 'Alzheimer em Casa ou ILPI', href: '/comparativos/alzheimer-em-casa-ou-ilpi' },
        { label: 'Demência Senil — Blog', href: '/blog/demencia-senil-cuidados-e-sinais-de-alerta' },
      ]),
    ],
  },

  {
    _id: 'seo-page-comp-parkinson-casa',
    _type: 'page', title: 'Comparativo: Parkinson em Casa ou ILPI', path: '/comparativos/parkinson-em-casa-ou-ilpi', published: true,
    seo: {
      title: 'Parkinson: Cuidar em Casa ou em uma ILPI? | Novo Lar Geriatria',
      description: 'Quando o Parkinson avança, cuidar em casa pode não ser suficiente. Entenda quando uma ILPI especializada oferece mais segurança e qualidade de vida.',
    },
    sections: [
      hero({
        eyebrow: 'Comparativo · Parkinson · Casa vs ILPI',
        heading: 'Parkinson: Cuidar em Casa ou em uma ILPI?',
        description: 'O Parkinson progride de forma previsível — mas o momento em que o cuidado domiciliar se torna insuficiente pode chegar mais cedo do que a família espera.',
        badges: stdBadges,
        breadcrumbs: [{ label: 'Home', href: '/' }, { label: 'Comparativos' }, { label: 'Parkinson em Casa ou ILPI' }],
      }),
      twoCol({
        leftHeading: 'Parkinson: quando o cuidado em casa ainda funciona',
        leftParagraphs: [
          'Nas fases iniciais e moderadas do Parkinson, o cuidado em casa com fisioterapia, fonoaudiologia externas e adaptações no ambiente pode ser suficiente — especialmente com um cuidador de suporte.',
          'A virada acontece quando as quedas se tornam frequentes, a disfagia avança, o controle de medicamentos fica complexo ou a demência associada ao Parkinson começa a exigir supervisão contínua.',
        ],
        rightHeading: 'Sinais de que a ILPI é necessária',
        rightType: 'checklist',
        checklistItems: [
          'Quedas frequentes que o ambiente domiciliar não previne',
          'Disfagia grave com risco de pneumonia aspirativa',
          'Demência associada com desorientação e comportamentos desafiadores',
          'Medicamentos de janela terapêutica estreita que exigem administração precisa',
          'Cuidador domiciliar sobrecarregado ou incapaz de manejar as demandas',
          'Necessidade de fisioterapia diária que o home care não consegue suprir',
        ],
      }),
      cta('Fale com nossa equipe sobre Parkinson', 'Avaliamos o estágio e orientamos sobre o momento ideal para a transição.'),
      relatedLinks('Veja também', [
        { label: 'Cuidados para Parkinson', href: '/cuidados-parkinson' },
        { label: 'Parkinson em Idosos — Blog', href: '/blog/parkinson-em-idosos-cuidados-diarios' },
        { label: 'Reabilitação Geriátrica', href: '/cuidados-reabilitacao-geriatrica' },
      ]),
    ],
  },
]

// ─── SEED RUNNER ──────────────────────────────────────────────────────────────

async function seed() {
  console.log(`\nSeeding ${pages.length} SEO expansion pages to Sanity...\n`)

  let success = 0
  for (const page of pages) {
    try {
      await client.createOrReplace(page as any)
      console.log(`✓  ${page.path}`)
      success++
    } catch (err) {
      console.error(`✗  ${page.path}`, err)
    }
  }

  console.log(`\nDone. ${success}/${pages.length} pages seeded.\n`)
}

seed()

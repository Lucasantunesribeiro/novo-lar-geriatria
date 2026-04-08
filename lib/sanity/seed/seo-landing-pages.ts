/**
 * Seed script — 12 SEO Landing Pages
 *
 * Usage:
 *   npx tsx lib/sanity/seed/seo-landing-pages.ts
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

const pages = [

  // ────────────────────────────────────────────────────
  // 1. /porto-alegre
  // ────────────────────────────────────────────────────
  {
    _id: 'seo-page-porto-alegre',
    _type: 'page',
    title: 'Porto Alegre — Casa de Repouso',
    path: '/porto-alegre',
    published: true,
    seo: {
      title: 'Casa de Repouso em Porto Alegre | Novo Lar Geriatria',
      description: "Residencial geriátrico e ILPI em Porto Alegre com cuidados 24h, médico geriatra e equipe multidisciplinar. 3 unidades em Moinhos de Vento e Passo d'Areia. Hospedagem permanente e temporária.",
    },
    serviceSchema: {
      name: 'Residencial Geriátrico em Porto Alegre',
      description: 'Cuidados especializados 24h para idosos em Porto Alegre, com médico geriatra, enfermagem, fisioterapia e atividades terapêuticas em 3 unidades.',
      areaServed: 'Porto Alegre',
    },
    sections: [
      {
        _type: 'seoHeroSection', _key: 'hero',
        eyebrow: 'ILPI · Residencial Geriátrico · Casa de Repouso',
        heading: 'Casa de Repouso em Porto Alegre',
        description: "A Novo Lar Geriatria oferece cuidados especializados 24 horas para idosos em Porto Alegre, com equipe multidisciplinar completa e três unidades em Moinhos de Vento e Passo d'Areia.",
        trustBadges: [
          { _key: 'b1', value: '30+', label: 'anos de experiência' },
          { _key: 'b2', value: '3', label: 'unidades em Porto Alegre' },
          { _key: 'b3', value: '24h', label: 'equipe clínica presente' },
          { _key: 'b4', value: '5,0', label: 'estrelas no Google' },
        ],
        primaryCta: { type: 'whatsapp', label: 'Falar por WhatsApp' },
        secondaryCta: { type: 'phone', label: 'Ligar agora' },
        breadcrumbs: [
          { _key: 'bc1', label: 'Home', href: '/' },
          { _key: 'bc2', label: 'Porto Alegre' },
        ],
      },
      {
        _type: 'twoColumnSection', _key: 'intro',
        leftEyebrow: 'Referência em Porto Alegre desde 1994',
        leftHeading: 'O cuidado integral que o seu familiar merece',
        leftParagraphs: [
          'A Novo Lar é uma das ILPIs (Instituições de Longa Permanência para Idosos) mais experientes de Porto Alegre, com mais de 30 anos dedicados ao cuidado humanizado de idosos em diferentes graus de dependência.',
          "Nossas três unidades funcionam como residências geriátricas completas — combinando hotelaria de qualidade, assistência médica e de enfermagem 24 horas, fisioterapia, nutrição individualizada e atividades terapêuticas diárias.",
        ],
        rightHeading: 'Por que escolher a Novo Lar',
        rightType: 'checklist',
        checklistItems: [
          'Equipe multidisciplinar 24h: médico geriatra, enfermeiros, fisioterapeutas e terapeutas',
          'Hospedagem permanente ou temporária com plano individualizado',
          'Estrutura completa: quartos acessíveis, áreas verdes e sala de convivência',
          'Nutrição especializada em geriatria com 6 refeições diárias',
          'Atividades terapêuticas, cognitivas e recreativas diárias',
          'Comunicação transparente e visitas diárias com a família',
        ],
      },
      {
        _type: 'relatedLinksSection', _key: 'links',
        heading: 'Nossas unidades e páginas relacionadas',
        links: [
          { _key: 'l1', label: 'Moinhos de Vento', href: '/porto-alegre/moinhos-de-vento' },
          { _key: 'l2', label: "Passo d'Areia", href: '/porto-alegre/passo-dareia' },
          { _key: 'l3', label: 'ILPI em Porto Alegre', href: '/ilpi-porto-alegre' },
          { _key: 'l4', label: 'Residencial Geriátrico', href: '/residencial-geriatrico-porto-alegre' },
          { _key: 'l5', label: 'Ver todos os serviços', href: '/servicos' },
        ],
        background: 'gray',
      },
      {
        _type: 'ctaSection', _key: 'cta',
        title: 'Agende uma visita gratuita',
        description: 'Conheça pessoalmente nossas unidades em Porto Alegre e entenda como podemos cuidar do seu familiar com segurança, conforto e atenção integral.',
        style: 'gradient',
        ctas: [
          { _key: 'c1', label: 'Falar por WhatsApp', href: '#whatsapp', variant: 'primary' },
          { _key: 'c2', label: 'Agendar pelo formulário', href: '/contato', variant: 'secondary' },
        ],
      },
    ],
  },

  // ────────────────────────────────────────────────────
  // 2. /cuidados-alzheimer
  // ────────────────────────────────────────────────────
  {
    _id: 'seo-page-cuidados-alzheimer',
    _type: 'page',
    title: 'Cuidados para Alzheimer',
    path: '/cuidados-alzheimer',
    published: true,
    seo: {
      title: 'Cuidados para Alzheimer em Porto Alegre | Novo Lar Geriatria',
      description: 'Residencial geriátrico especializado no cuidado de idosos com Alzheimer em Porto Alegre. Equipe treinada 24h, ambiente seguro, estimulação cognitiva e suporte à família.',
    },
    serviceSchema: {
      name: 'Cuidados Especializados para Alzheimer',
      description: 'Residencial geriátrico especializado no cuidado de idosos com Alzheimer em Porto Alegre, com equipe treinada 24h, ambiente seguro e estimulação cognitiva.',
      areaServed: 'Porto Alegre',
    },
    sections: [
      {
        _type: 'seoHeroSection', _key: 'hero',
        eyebrow: 'Residencial Geriátrico Especializado · Porto Alegre',
        heading: 'Cuidados para Idosos com Alzheimer',
        description: 'A Novo Lar Geriatria oferece atendimento especializado para idosos com Alzheimer em Porto Alegre, com equipe treinada, ambiente seguro e rotina estruturada que preserva a dignidade e o bem-estar do seu familiar.',
        trustBadges: [
          { _key: 'b1', value: '30+', label: 'anos de experiência' },
          { _key: 'b2', value: '24h', label: 'equipe especializada' },
          { _key: 'b3', value: '3', label: 'unidades em Porto Alegre' },
        ],
        primaryCta: { type: 'whatsapp', label: 'Falar com especialista' },
        secondaryCta: { type: 'phone', label: 'Ligar agora' },
        breadcrumbs: [
          { _key: 'bc1', label: 'Home', href: '/' },
          { _key: 'bc2', label: 'Cuidados para Alzheimer' },
        ],
      },
      {
        _type: 'twoColumnSection', _key: 'info',
        leftIcon: 'Brain',
        leftHeading: 'O Alzheimer exige cuidado especializado',
        leftParagraphs: [
          'A doença de Alzheimer é a forma mais comum de demência, responsável por 60 a 80% dos casos. É progressiva, irreversível e afeta memória, raciocínio, comportamento e a capacidade de realizar atividades básicas do dia a dia.',
          'Com o avanço da doença, o idoso passa a exigir supervisão constante e cuidados cada vez mais especializados. Na Novo Lar Geriatria, nossa equipe é treinada especificamente para o manejo do Alzheimer em todas as suas fases.',
        ],
        rightHeading: 'Cuidado em cada fase da doença',
        rightType: 'cards',
        cardItems: [
          { _key: 'c1', title: 'Fase leve', text: 'Esquecimentos frequentes, dificuldade de concentração e leve desorientação. O residente mantém boa parte da autonomia com supervisão.' },
          { _key: 'c2', title: 'Fase moderada', text: 'Confusão aumentada, dificuldade em reconhecer familiares e alterações comportamentais. Requer supervisão constante e rotina bem estruturada.' },
          { _key: 'c3', title: 'Fase avançada', text: 'Dependência total para atividades básicas. Exige cuidados intensivos de enfermagem, prevenção de complicações e cuidados paliativos integrados.' },
        ],
      },
      {
        _type: 'checklistSection', _key: 'protocolo',
        eyebrow: 'Nosso protocolo',
        heading: 'Como cuidamos de idosos com Alzheimer',
        items: [
          { _key: 'i1', text: 'Equipe treinada especificamente para o manejo de sintomas cognitivos e comportamentais do Alzheimer' },
          { _key: 'i2', text: 'Ambiente físico seguro com controle de acesso, pisos antiderrapantes e sinalização adaptada' },
          { _key: 'i3', text: 'Rotina estruturada e previsível que reduz a ansiedade e a agitação dos residentes' },
          { _key: 'i4', text: 'Estimulação cognitiva com musicoterapia, reminiscência e atividades sensoriais adaptadas' },
          { _key: 'i5', text: 'Monitoramento contínuo de sinais vitais e evolução clínica com prontuário eletrônico' },
          { _key: 'i6', text: 'Comunicação transparente com a família e orientações sobre como lidar com a doença' },
          { _key: 'i7', text: 'Administração rigorosa de medicamentos com sistema de checklist duplo' },
          { _key: 'i8', text: 'Fisioterapia e terapia ocupacional para preservar a autonomia funcional pelo maior tempo possível' },
        ],
        columns: 2,
        background: 'gray',
      },
      {
        _type: 'relatedLinksSection', _key: 'links',
        heading: 'Serviços e páginas relacionadas',
        links: [
          { _key: 'l1', label: 'Terapia Ocupacional', href: '/servicos/terapia-ocupacional' },
          { _key: 'l2', label: 'Musicoterapia', href: '/servicos/musicoterapia-socializacao' },
          { _key: 'l3', label: 'Enfermagem 24h', href: '/servicos/enfermagem-medico-24h' },
          { _key: 'l4', label: 'Cuidados para Demência', href: '/cuidados-demencia' },
          { _key: 'l5', label: 'Alzheimer em Moinhos de Vento', href: '/porto-alegre/moinhos-de-vento/cuidados-alzheimer' },
        ],
      },
      {
        _type: 'ctaSection', _key: 'cta',
        title: 'Fale com nossa equipe especializada',
        description: 'Tem dúvidas sobre como cuidar de um familiar com Alzheimer? Nossa equipe está pronta para orientá-lo e, se for o momento certo, apresentar nossas unidades em Porto Alegre.',
        style: 'gradient',
        ctas: [
          { _key: 'c1', label: 'Falar por WhatsApp', href: '#whatsapp', variant: 'primary' },
          { _key: 'c2', label: 'Ligar agora', href: '#phone', variant: 'secondary' },
        ],
      },
    ],
  },

  // ────────────────────────────────────────────────────
  // 3. /cuidados-demencia
  // ────────────────────────────────────────────────────
  {
    _id: 'seo-page-cuidados-demencia',
    _type: 'page',
    title: 'Cuidados para Demência',
    path: '/cuidados-demencia',
    published: true,
    seo: {
      title: 'Cuidados para Demência em Idosos | Novo Lar Geriatria Porto Alegre',
      description: 'Residencial geriátrico especializado no cuidado de idosos com demência em Porto Alegre. Equipe treinada para demência vascular, senil, Lewy body e outras formas. Ambiente seguro 24h.',
    },
    serviceSchema: {
      name: 'Cuidados Especializados para Demência em Idosos',
      description: 'Residencial geriátrico especializado no cuidado de idosos com demência em Porto Alegre, com equipe treinada para diferentes tipos de demência, ambiente seguro 24h e rotina estruturada.',
      areaServed: 'Porto Alegre',
    },
    sections: [
      {
        _type: 'seoHeroSection', _key: 'hero',
        eyebrow: 'Residencial Geriátrico Especializado · Porto Alegre',
        heading: 'Cuidados para Idosos com Demência',
        description: 'A Novo Lar Geriatria oferece atendimento especializado para idosos com diferentes tipos de demência em Porto Alegre — com equipe treinada, ambiente seguro e rotina estruturada que promove qualidade de vida e dignidade em cada fase da doença.',
        trustBadges: [
          { _key: 'b1', value: '30+', label: 'anos de experiência' },
          { _key: 'b2', value: '24h', label: 'equipe especializada' },
          { _key: 'b3', value: '3', label: 'unidades em Porto Alegre' },
        ],
        primaryCta: { type: 'whatsapp', label: 'Falar por WhatsApp' },
        secondaryCta: { type: 'phone', label: 'Ligar agora' },
        breadcrumbs: [
          { _key: 'bc1', label: 'Home', href: '/' },
          { _key: 'bc2', label: 'Cuidados para Demência' },
        ],
      },
      {
        _type: 'twoColumnSection', _key: 'info',
        leftIcon: 'Brain',
        leftHeading: 'O que é demência e por que exige cuidado especializado?',
        leftParagraphs: [
          'Demência é um termo amplo que descreve um conjunto de sintomas que afetam memória, raciocínio, orientação, linguagem e comportamento. Não é uma doença única, mas sim a manifestação de diversas condições neurológicas — a mais comum delas é o Alzheimer.',
          'A progressão da demência torna o idoso progressivamente dependente de cuidadores especializados. Na Novo Lar Geriatria, nosso protocolo de cuidados para demência é adaptado individualmente a cada residente, considerando o tipo de demência, a fase e o histórico de vida da pessoa.',
        ],
        rightHeading: 'Principais tipos de demência que atendemos',
        rightType: 'cards',
        cardItems: [
          { _key: 'c1', title: 'Demência de Alzheimer', text: 'A mais prevalente, com início gradual de perda de memória, desorientação e dificuldade de raciocínio. Progressiva e sem cura.', link: '/cuidados-alzheimer', linkLabel: 'Saiba mais' },
          { _key: 'c2', title: 'Demência Vascular', text: 'Causada por eventos cerebrovasculares (AVCs ou microAVCs). Progressão em degraus, com sintomas que variam conforme a área afetada.' },
          { _key: 'c3', title: 'Demência com Corpos de Lewy', text: 'Caracterizada por alucinações visuais, parkinsonismo e flutuações cognitivas. Exige manejo cuidadoso de medicamentos.' },
          { _key: 'c4', title: 'Demência Frontotemporal', text: 'Afeta principalmente comportamento, linguagem e personalidade. Mais comum em pessoas entre 45 e 65 anos.' },
        ],
      },
      {
        _type: 'checklistSection', _key: 'protocolo',
        eyebrow: 'Nosso protocolo',
        heading: 'Como cuidamos de idosos com demência',
        items: [
          { _key: 'i1', text: 'Ambiente físico seguro com protocolos de prevenção de quedas e controle de acesso' },
          { _key: 'i2', text: 'Rotina diária estruturada e previsível para reduzir desorientação e agitação' },
          { _key: 'i3', text: 'Estimulação cognitiva com atividades adaptadas ao grau de comprometimento' },
          { _key: 'i4', text: 'Musicoterapia e reminiscência para resgate afetivo e bem-estar emocional' },
          { _key: 'i5', text: 'Monitoramento neurológico e ajuste de medicamentos com médico geriatra presente' },
          { _key: 'i6', text: 'Fisioterapia e terapia ocupacional para preservar mobilidade e autonomia funcional' },
          { _key: 'i7', text: 'Nutrição adaptada com texturas modificadas quando necessário' },
          { _key: 'i8', text: 'Suporte psicológico ao residente e orientações regulares à família' },
        ],
        columns: 2,
        background: 'gray',
      },
      {
        _type: 'twoColumnSection', _key: 'familia',
        leftIcon: 'HeartHandshake',
        leftHeading: 'Suporte integral à família',
        leftParagraphs: [
          'Cuidar de um familiar com demência é uma jornada longa e emocionalmente exigente. Na Novo Lar, não cuidamos apenas do residente — cuidamos também de quem o ama.',
          'Oferecemos comunicação transparente, visitas diárias liberadas, orientações regulares sobre a evolução da doença e canais diretos de contato com nossa equipe para qualquer necessidade.',
        ],
        rightHeading: 'Serviços relacionados',
        rightType: 'cards',
        cardItems: [
          { _key: 'c1', title: 'Terapia Ocupacional', text: 'Estimulação cognitiva e preservação da autonomia funcional.', link: '/servicos/terapia-ocupacional', linkLabel: 'Ver serviço' },
          { _key: 'c2', title: 'Musicoterapia e Socialização', text: 'Atividades terapêuticas com música para resgate afetivo.', link: '/servicos/musicoterapia-socializacao', linkLabel: 'Ver serviço' },
          { _key: 'c3', title: 'Médico e Enfermagem 24h', text: 'Equipe clínica presente em plantão contínuo.', link: '/servicos/enfermagem-medico-24h', linkLabel: 'Ver serviço' },
        ],
      },
      {
        _type: 'ctaSection', _key: 'cta',
        title: 'Fale com nossa equipe especializada',
        description: 'Tem dúvidas sobre como cuidar de um idoso com demência? Nossa equipe está disponível para orientá-lo e apresentar nossas unidades em Porto Alegre.',
        style: 'gradient',
        ctas: [
          { _key: 'c1', label: 'Falar por WhatsApp', href: '#whatsapp', variant: 'primary' },
          { _key: 'c2', label: 'Ligar agora', href: '#phone', variant: 'secondary' },
        ],
      },
    ],
  },

  // ────────────────────────────────────────────────────
  // 4. /ilpi-porto-alegre
  // ────────────────────────────────────────────────────
  {
    _id: 'seo-page-ilpi-porto-alegre',
    _type: 'page',
    title: 'ILPI em Porto Alegre',
    path: '/ilpi-porto-alegre',
    published: true,
    seo: {
      title: 'ILPI em Porto Alegre — Instituição de Longa Permanência para Idosos | Novo Lar',
      description: 'Procurando uma ILPI em Porto Alegre? A Novo Lar Geriatria é uma Instituição de Longa Permanência para Idosos com 30 anos de experiência, 3 unidades e equipe multidisciplinar 24h.',
    },
    sections: [
      {
        _type: 'seoHeroSection', _key: 'hero',
        eyebrow: 'ILPI · Instituição de Longa Permanência para Idosos · Porto Alegre',
        heading: 'ILPI em Porto Alegre — Novo Lar Geriatria',
        description: 'A Novo Lar Geriatria é uma Instituição de Longa Permanência para Idosos (ILPI) com mais de 30 anos de funcionamento regular em Porto Alegre, com 3 unidades registradas e equipe multidisciplinar presente 24 horas.',
        trustBadges: [
          { _key: 'b1', value: '1994', label: 'fundada em' },
          { _key: 'b2', value: '3', label: 'unidades registradas' },
          { _key: 'b3', value: '24h', label: 'equipe presente' },
          { _key: 'b4', value: 'ANVISA', label: 'regularizada' },
        ],
        primaryCta: { type: 'whatsapp', label: 'Falar por WhatsApp' },
        secondaryCta: { type: 'phone', label: 'Ligar agora' },
        breadcrumbs: [
          { _key: 'bc1', label: 'Home', href: '/' },
          { _key: 'bc2', label: 'ILPI em Porto Alegre' },
        ],
      },
      {
        _type: 'twoColumnSection', _key: 'oque',
        leftIcon: 'ClipboardList',
        leftHeading: 'O que é uma ILPI?',
        leftParagraphs: [
          'ILPI — Instituição de Longa Permanência para Idosos — é a denominação técnica e regulatória oficial para residências geriátricas, casas de repouso e lares de idosos que oferecem moradia coletiva e cuidados contínuos a pessoas com 60 anos ou mais.',
          'No Brasil, as ILPIs são regulamentadas pela RDC 283/2005 da ANVISA, que estabelece requisitos mínimos de infraestrutura, equipe técnica, documentação, nutrição e segurança. ILPIs também precisam de alvará da vigilância sanitária municipal para funcionar legalmente.',
        ],
        rightHeading: 'O que verificar ao escolher uma ILPI',
        rightType: 'checklist',
        checklistItems: [
          'Registro e alvará de funcionamento em conformidade com a RDC 283/2005 da ANVISA',
          'Equipe técnica com responsável técnico habilitado (médico ou enfermeiro)',
          'Prontuário individual atualizado para cada residente',
          'Plano de cuidados individualizado revisto periodicamente',
          'Instalações adaptadas: acessibilidade, corrimãos, pisos antiderrapantes, sinalização',
          'Protocolo de emergência e sistema de chamada para os residentes',
          'Alimentação supervisionada por nutricionista com cardápio registrado',
          'Comunicação regular e transparente com os responsáveis legais',
        ],
      },
      {
        _type: 'statsSection', _key: 'stats',
        eyebrow: 'A Novo Lar como ILPI',
        title: 'Por que escolher a Novo Lar Geriatria?',
        stats: [
          { _key: 's1', value: '1994', label: 'Ano de fundação', description: 'Mais de 30 anos de operação regular em Porto Alegre' },
          { _key: 's2', value: '3', label: 'Unidades registradas', description: "Em Moinhos de Vento e Passo d'Areia" },
          { _key: 's3', value: '24h', label: 'Equipe presente', description: 'Médico geriatra, enfermagem e equipe de apoio' },
        ],
      },
      {
        _type: 'faqSection', _key: 'faq',
        title: 'Perguntas frequentes sobre ILPIs',
        faqs: [
          { _key: 'f1', question: 'O que é uma ILPI?', answer: 'ILPI significa Instituição de Longa Permanência para Idosos. É a denominação técnica e regulatória para residências geriátricas, casas de repouso e lares para idosos que oferecem moradia coletiva e serviços de cuidados a pessoas com 60 anos ou mais. No Brasil, as ILPIs são regulamentadas pela RDC 283/2005 da ANVISA.' },
          { _key: 'f2', question: 'Qual a diferença entre ILPI, casa de repouso e residencial geriátrico?', answer: 'São termos diferentes para o mesmo tipo de serviço. ILPI é a denominação técnica oficial usada pela ANVISA e pelo Ministério da Saúde. "Casa de repouso" e "residencial geriátrico" são termos populares. Na prática, todas se referem a instituições que oferecem moradia e cuidados contínuos a idosos com diferentes graus de dependência.' },
          { _key: 'f3', question: 'O que a ANVISA exige de uma ILPI?', answer: 'A RDC 283/2005 da ANVISA estabelece requisitos de infraestrutura (acessibilidade, área mínima por residente), de equipe técnica (responsável técnico habilitado, proporção de cuidadores por residente), de documentação (prontuários, planos de cuidado) e de alimentação (supervisão nutricional, cardápios registrados).' },
          { _key: 'f4', question: 'A Novo Lar Geriatria é uma ILPI regularizada?', answer: 'Sim. A Novo Lar Geriatria é uma ILPI registrada e em conformidade com as exigências da ANVISA e da vigilância sanitária municipal de Porto Alegre, com mais de 30 anos de operação regular em três unidades na cidade.' },
        ],
      },
      {
        _type: 'ctaSection', _key: 'cta',
        title: 'Conheça a Novo Lar pessoalmente',
        description: 'Oferecemos visitas guiadas gratuitas. Venha conhecer nossas unidades em Porto Alegre e entender como funcionamos na prática.',
        style: 'gradient',
        ctas: [
          { _key: 'c1', label: 'Falar por WhatsApp', href: '#whatsapp', variant: 'primary' },
          { _key: 'c2', label: 'Ligar agora', href: '#phone', variant: 'secondary' },
        ],
      },
    ],
  },

  // ────────────────────────────────────────────────────
  // 5. /residencial-geriatrico-porto-alegre
  // ────────────────────────────────────────────────────
  {
    _id: 'seo-page-residencial-geriatrico',
    _type: 'page',
    title: 'Residencial Geriátrico Porto Alegre',
    path: '/residencial-geriatrico-porto-alegre',
    published: true,
    seo: {
      title: 'Residencial Geriátrico em Porto Alegre | Novo Lar Geriatria',
      description: 'Residencial geriátrico em Porto Alegre com equipe clínica completa: médico geriatra, enfermagem 24h, fisioterapia, nutrição e terapia ocupacional. Atendimento especializado para idosos com diferentes condições de saúde.',
    },
    serviceSchema: {
      name: 'Residencial Geriátrico em Porto Alegre',
      description: 'Atendimento clínico especializado em residencial geriátrico em Porto Alegre com médico geriatra, enfermagem 24h, fisioterapia, nutrição e terapia ocupacional.',
      areaServed: 'Porto Alegre',
    },
    sections: [
      {
        _type: 'seoHeroSection', _key: 'hero',
        eyebrow: 'Cuidados Clínicos Especializados · Porto Alegre, RS',
        heading: 'Residencial Geriátrico em Porto Alegre',
        description: 'A Novo Lar Geriatria é um residencial geriátrico especializado em Porto Alegre que combina a qualidade de vida de uma residência com a assistência clínica de uma instituição de saúde — médico geriatra, equipe multidisciplinar 24h e protocolos individualizados para cada residente.',
        trustBadges: [
          { _key: 'b1', value: '30+', label: 'anos de experiência' },
          { _key: 'b2', value: '3', label: 'unidades em Porto Alegre' },
          { _key: 'b3', value: '24h', label: 'equipe multidisciplinar' },
        ],
        primaryCta: { type: 'whatsapp', label: 'Falar por WhatsApp' },
        secondaryCta: { type: 'phone', label: 'Ligar agora' },
        breadcrumbs: [
          { _key: 'bc1', label: 'Home', href: '/' },
          { _key: 'bc2', label: 'Residencial Geriátrico Porto Alegre' },
        ],
      },
      {
        _type: 'twoColumnSection', _key: 'perfis',
        leftHeading: 'Quem atendemos',
        leftParagraphs: [
          'O residencial geriátrico da Novo Lar é voltado para idosos com diferentes graus de dependência e condições clínicas. Nossa equipe é capacitada para oferecer desde supervisão leve até cuidados intensivos de enfermagem.',
          'Cada residente recebe um plano de cuidado individualizado, elaborado pela nossa equipe multidisciplinar e revisado periodicamente com a participação da família.',
        ],
        rightHeading: 'Perfis de idosos que atendemos',
        rightType: 'cards',
        cardItems: [
          { _key: 'c1', title: 'Alta dependência funcional', text: 'Residentes que precisam de auxílio total para atividades básicas (higiene, alimentação, mobilidade) com monitoramento clínico contínuo.' },
          { _key: 'c2', title: 'Doenças neurológicas', text: 'Alzheimer, demência vascular, Parkinson, sequelas de AVC — condições que exigem equipe treinada, ambiente adaptado e rotina estruturada.' },
          { _key: 'c3', title: 'Recuperação pós-hospitalar', text: 'Período de convalescença após cirurgias ou internações, com fisioterapia intensiva, reabilitação e acompanhamento médico.' },
          { _key: 'c4', title: 'Dependência parcial', text: 'Residentes que mantêm autonomia parcial e buscam segurança, convivência social e supervisão clínica sem abrir mão da independência.' },
        ],
      },
      {
        _type: 'checklistSection', _key: 'equipe',
        eyebrow: 'Equipe multidisciplinar',
        heading: 'Profissionais presentes em nossas unidades',
        items: [
          { _key: 'i1', title: 'Médico Geriatra', text: 'Avaliações periódicas, ajuste de prescrições e acompanhamento clínico contínuo.' },
          { _key: 'i2', title: 'Enfermagem 24h', text: 'Técnicos de enfermagem em plantão contínuo para monitoramento e cuidados de rotina.' },
          { _key: 'i3', title: 'Fisioterapeuta', text: 'Sessões individuais e em grupo para reabilitação, prevenção de quedas e mobilidade.' },
          { _key: 'i4', title: 'Nutricionista', text: 'Plano alimentar individualizado com 6 refeições diárias adaptadas às condições clínicas.' },
          { _key: 'i5', title: 'Terapeuta Ocupacional', text: 'Estimulação cognitiva, preservação da autonomia funcional e adaptações ao ambiente.' },
          { _key: 'i6', title: 'Psicólogo', text: 'Suporte emocional ao residente e orientação às famílias durante todas as fases.' },
        ],
        columns: 2,
        background: 'gray',
      },
      {
        _type: 'relatedLinksSection', _key: 'links',
        heading: 'Páginas relacionadas',
        links: [
          { _key: 'l1', label: 'ILPI em Porto Alegre', href: '/ilpi-porto-alegre' },
          { _key: 'l2', label: 'Cuidados para Alzheimer', href: '/cuidados-alzheimer' },
          { _key: 'l3', label: 'Cuidados para Demência', href: '/cuidados-demencia' },
          { _key: 'l4', label: 'Ver todos os serviços', href: '/servicos' },
        ],
      },
      {
        _type: 'ctaSection', _key: 'cta',
        title: 'Agende uma visita ao residencial',
        description: 'Conheça pessoalmente nossas unidades e entenda como o cuidado clínico especializado pode fazer diferença na qualidade de vida do seu familiar.',
        style: 'gradient',
        ctas: [
          { _key: 'c1', label: 'Falar por WhatsApp', href: '#whatsapp', variant: 'primary' },
          { _key: 'c2', label: 'Agendar pelo formulário', href: '/contato', variant: 'secondary' },
        ],
      },
    ],
  },

  // ────────────────────────────────────────────────────
  // 6. /porto-alegre/moinhos-de-vento
  // ────────────────────────────────────────────────────
  {
    _id: 'seo-page-moinhos-de-vento',
    _type: 'page',
    title: 'Casa de Repouso — Moinhos de Vento',
    path: '/porto-alegre/moinhos-de-vento',
    published: true,
    seo: {
      title: 'Casa de Repouso em Moinhos de Vento, Porto Alegre | Novo Lar Geriatria',
      description: 'Residencial geriátrico no bairro Moinhos de Vento em Porto Alegre. A Novo Lar Geriatria tem 2 unidades neste bairro nobre, próximas ao Hospital Moinhos de Vento e à principal rede de saúde da cidade.',
    },
    sections: [
      {
        _type: 'seoHeroSection', _key: 'hero',
        eyebrow: 'Bairro Moinhos de Vento · Porto Alegre, RS',
        heading: 'Casa de Repouso no Moinhos de Vento',
        description: 'A Novo Lar Geriatria está presente no bairro Moinhos de Vento com duas unidades de hospedagem assistida — em localização privilegiada, próximas ao Hospital Moinhos de Vento e à infraestrutura de saúde da zona norte de Porto Alegre.',
        trustBadges: [
          { _key: 'b1', value: '2', label: 'unidades no bairro' },
          { _key: 'b2', value: '24h', label: 'equipe presente' },
          { _key: 'b3', value: '5 min', label: 'do Hospital Moinhos' },
        ],
        primaryCta: { type: 'whatsapp', label: 'Falar por WhatsApp' },
        secondaryCta: { type: 'phone', label: 'Ligar agora' },
        breadcrumbs: [
          { _key: 'bc1', label: 'Home', href: '/' },
          { _key: 'bc2', label: 'Porto Alegre', href: '/porto-alegre' },
          { _key: 'bc3', label: 'Moinhos de Vento' },
        ],
      },
      {
        _type: 'twoColumnSection', _key: 'bairro',
        leftEyebrow: 'Por que Moinhos de Vento?',
        leftHeading: 'Um dos bairros mais valorizados de Porto Alegre',
        leftParagraphs: [
          'Moinhos de Vento é conhecido por sua qualidade de vida, tranquilidade e excelente infraestrutura urbana. Para famílias que buscam um residencial geriátrico em Porto Alegre, o bairro oferece o que é mais importante: segurança, proximidade com referências de saúde de alto nível e um ambiente agradável para o dia a dia.',
          'A presença de duas unidades da Novo Lar neste bairro permite que famílias que residem ou trabalham na região tenham acesso facilitado para visitar seus familiares diariamente — algo que valorizamos e incentivamos ativamente.',
        ],
        rightHeading: 'Vantagens desta localização',
        rightType: 'checklist',
        checklistItems: [
          'Bairro residencial nobre, tranquilo e arborizado — ideal para o bem-estar de idosos',
          'Localização central com fácil acesso de qualquer região de Porto Alegre',
          'Próximo ao Hospital Moinhos de Vento, referência em saúde no Rio Grande do Sul',
          'Bem servido por transporte público e com infraestrutura urbana completa',
          'Vizinhança segura, com praças e áreas de lazer próximas às unidades',
          'Próximo a farmácias, clínicas especializadas e serviços de apoio à saúde',
        ],
      },
      {
        _type: 'twoColumnSection', _key: 'unidades',
        sectionHeading: '2 unidades em Moinhos de Vento',
        background: 'gray',
        leftHeading: 'Unidade Luciana de Abreu',
        leftParagraphs: [
          'Rua Luciana de Abreu, 151 — Moinhos de Vento, Porto Alegre.',
          'Estrutura completa com quartos individuais e coletivos, área verde e sala de convivência.',
        ],
        rightHeading: 'Unidade Barão de Santo Ângelo',
        rightType: 'checklist',
        checklistItems: [
          'Rua Barão de Santo Ângelo, 406 — Moinhos de Vento, Porto Alegre.',
          'Ambiente acolhedor e acessível com equipe multidisciplinar 24h e programação diária de atividades.',
        ],
      },
      {
        _type: 'relatedLinksSection', _key: 'links',
        heading: 'Páginas relacionadas',
        links: [
          { _key: 'l1', label: "Unidade Passo d'Areia", href: '/porto-alegre/passo-dareia' },
          { _key: 'l2', label: 'Alzheimer em Moinhos', href: '/porto-alegre/moinhos-de-vento/cuidados-alzheimer' },
          { _key: 'l3', label: 'Ver todas as unidades', href: '/porto-alegre' },
        ],
      },
      {
        _type: 'ctaSection', _key: 'cta',
        title: 'Agende uma visita em Moinhos de Vento',
        description: 'Conheça pessoalmente nossas unidades no bairro e veja como podemos cuidar do seu familiar com segurança, conforto e atenção integral.',
        style: 'gradient',
        ctas: [
          { _key: 'c1', label: 'Falar por WhatsApp', href: '#whatsapp', variant: 'primary' },
          { _key: 'c2', label: 'Ligar agora', href: '#phone', variant: 'secondary' },
        ],
      },
    ],
  },

  // ────────────────────────────────────────────────────
  // 7. /porto-alegre/passo-dareia
  // ────────────────────────────────────────────────────
  {
    _id: 'seo-page-passo-dareia',
    _type: 'page',
    title: "Casa de Repouso — Passo d'Areia",
    path: '/porto-alegre/passo-dareia',
    published: true,
    seo: {
      title: "Casa de Repouso no Passo d'Areia, Porto Alegre | Novo Lar Geriatria",
      description: "Residencial geriátrico no bairro Passo d'Areia em Porto Alegre. Unidade da Novo Lar Geriatria com atendimento 24h, equipe multidisciplinar e fácil acesso da zona norte de Porto Alegre.",
    },
    sections: [
      {
        _type: 'seoHeroSection', _key: 'hero',
        eyebrow: "Bairro Passo d'Areia · Porto Alegre, RS",
        heading: "Casa de Repouso no Passo d'Areia",
        description: "A Novo Lar Geriatria está presente no bairro Passo d'Areia com uma unidade de hospedagem assistida — localização acessível para famílias da zona norte de Porto Alegre, com o mesmo padrão de cuidado 24h das demais unidades.",
        trustBadges: [
          { _key: 'b1', value: '1', label: 'unidade no bairro' },
          { _key: 'b2', value: '24h', label: 'equipe presente' },
          { _key: 'b3', value: '30+', label: 'anos de experiência' },
        ],
        primaryCta: { type: 'whatsapp', label: 'Falar por WhatsApp' },
        secondaryCta: { type: 'phone', label: 'Ligar agora' },
        breadcrumbs: [
          { _key: 'bc1', label: 'Home', href: '/' },
          { _key: 'bc2', label: 'Porto Alegre', href: '/porto-alegre' },
          { _key: 'bc3', label: "Passo d'Areia" },
        ],
      },
      {
        _type: 'twoColumnSection', _key: 'bairro',
        leftEyebrow: "Por que Passo d'Areia?",
        leftHeading: 'Localização acessível na zona norte de Porto Alegre',
        leftParagraphs: [
          "O bairro Passo d'Areia é uma das escolhas mais práticas para famílias que residem ou trabalham na zona norte de Porto Alegre. Sua localização estratégica permite que filhos, netos e amigos façam visitas frequentes sem enfrentar longas distâncias ou trânsito intenso.",
          "A unidade do Passo d'Areia segue exatamente o mesmo protocolo de cuidado das unidades em Moinhos de Vento: equipe multidisciplinar 24h, rotina individualizada, atividades terapêuticas diárias e comunicação aberta com as famílias.",
        ],
        rightHeading: 'Vantagens desta localização',
        rightType: 'checklist',
        checklistItems: [
          "Bairro residencial da zona norte de Porto Alegre, bem servido por transporte público",
          "Localização acessível para famílias das zonas norte, leste e centro de Porto Alegre",
          "Próximo a serviços de saúde, farmácias e infraestrutura urbana completa",
          "Ambiente tranquilo e familiar, propício ao bem-estar dos residentes",
          "Fácil acesso pela Av. Protásio Alves e outras vias de conexão com a cidade",
          "Bairro consolidado com boa oferta de comércio e serviços no entorno",
        ],
      },
      {
        _type: 'relatedLinksSection', _key: 'links',
        heading: 'Páginas relacionadas',
        links: [
          { _key: 'l1', label: 'Unidades em Moinhos de Vento', href: '/porto-alegre/moinhos-de-vento' },
          { _key: 'l2', label: 'Ver todas as unidades', href: '/porto-alegre' },
          { _key: 'l3', label: 'Ver todos os serviços', href: '/servicos' },
        ],
      },
      {
        _type: 'ctaSection', _key: 'cta',
        title: "Agende uma visita no Passo d'Areia",
        description: 'Conheça pessoalmente nossa unidade e entenda como podemos cuidar do seu familiar com segurança, conforto e atenção integral.',
        style: 'gradient',
        ctas: [
          { _key: 'c1', label: 'Falar por WhatsApp', href: '#whatsapp', variant: 'primary' },
          { _key: 'c2', label: 'Ligar agora', href: '#phone', variant: 'secondary' },
        ],
      },
    ],
  },

  // ────────────────────────────────────────────────────
  // 8. /regiao-metropolitana
  // ────────────────────────────────────────────────────
  {
    _id: 'seo-page-regiao-metropolitana',
    _type: 'page',
    title: 'Região Metropolitana — Casa de Repouso',
    path: '/regiao-metropolitana',
    published: true,
    seo: {
      title: 'Casa de Repouso para Idosos — Região Metropolitana de Porto Alegre | Novo Lar',
      description: 'Procurando casa de repouso na Grande Porto Alegre? A Novo Lar Geriatria tem 3 unidades em Porto Alegre, acessíveis para famílias de toda a região metropolitana — Canoas, São Leopoldo, Novo Hamburgo e cidades próximas.',
    },
    serviceSchema: {
      name: 'Casa de Repouso para idosos da Região Metropolitana de Porto Alegre',
      description: 'Residencial geriátrico em Porto Alegre atendendo famílias de toda a Grande Porto Alegre com cuidados especializados 24h.',
      areaServed: 'Região Metropolitana de Porto Alegre',
    },
    sections: [
      {
        _type: 'seoHeroSection', _key: 'hero',
        eyebrow: 'Grande Porto Alegre · Região Metropolitana, RS',
        heading: 'Casa de Repouso para a Grande Porto Alegre',
        description: 'A Novo Lar Geriatria atende famílias de toda a região metropolitana de Porto Alegre. Nossas 3 unidades ficam em Moinhos de Vento e Passo d\'Areia, com acesso facilitado pela BR-116 e principais vias metropolitanas.',
        trustBadges: [
          { _key: 'b1', value: '3', label: 'unidades em Porto Alegre' },
          { _key: 'b2', value: '8+', label: 'cidades atendidas' },
          { _key: 'b3', value: '24h', label: 'equipe presente' },
        ],
        primaryCta: { type: 'whatsapp', label: 'Falar por WhatsApp' },
        secondaryCta: { type: 'phone', label: 'Ligar agora' },
        breadcrumbs: [
          { _key: 'bc1', label: 'Home', href: '/' },
          { _key: 'bc2', label: 'Região Metropolitana' },
        ],
      },
      {
        _type: 'locationNoticeSection', _key: 'aviso',
        text: 'As unidades da Novo Lar Geriatria ficam em Porto Alegre — nos bairros Moinhos de Vento e Passo d\'Areia. Atendemos famílias de toda a Grande Porto Alegre, com acesso pela BR-116 e demais vias metropolitanas.',
      },
      {
        _type: 'twoColumnSection', _key: 'motivos',
        leftHeading: 'Por que famílias da Grande POA escolhem Porto Alegre',
        leftParagraphs: [
          'A região metropolitana de Porto Alegre é uma das mais populosas do Brasil. Muitas famílias buscam uma ILPI de qualidade para um familiar idoso, e Porto Alegre concentra a melhor infraestrutura de cuidado geriátrico do Rio Grande do Sul.',
          'Com acesso facilitado pelas principais rodovias metropolitanas (BR-116, RS-020, RS-130, RS-040), nossas unidades estão a distâncias razoáveis de todas as principais cidades da Grande Porto Alegre.',
        ],
        rightHeading: 'Por que Porto Alegre?',
        rightType: 'checklist',
        checklistItems: [
          'Porto Alegre concentra os melhores hospitais e clínicas especializadas em geriatria do Rio Grande do Sul',
          'Infraestrutura de saúde completa para casos que exigem encaminhamentos ou internações',
          'Acesso facilitado pela BR-116 e principais vias de interligação metropolitana',
          'Ambiente urbano seguro e familiar, com serviços próximos às unidades',
          'Possibilidade de visitas frequentes — as unidades ficam em bairros de fácil acesso',
        ],
      },
      {
        _type: 'twoColumnSection', _key: 'distancias',
        sectionHeading: 'Tempos de deslocamento estimados',
        background: 'gray',
        leftHeading: 'Cidades do eixo norte (BR-116)',
        leftParagraphs: ['Tempos estimados sem considerar horário de pico.'],
        rightHeading: 'Outras cidades metropolitanas',
        rightType: 'distanceTable',
        distanceRows: [
          { _key: 'r1', city: 'Canoas', time: '20–30 min', via: 'BR-116 / RS-020' },
          { _key: 'r2', city: 'São Leopoldo', time: '35–45 min', via: 'BR-116' },
          { _key: 'r3', city: 'Novo Hamburgo', time: '45–60 min', via: 'BR-116' },
          { _key: 'r4', city: 'Sapucaia do Sul', time: '25–35 min', via: 'BR-116' },
          { _key: 'r5', city: 'Cachoeirinha', time: '20–30 min', via: 'RS-020' },
          { _key: 'r6', city: 'Gravataí', time: '30–40 min', via: 'RS-020 / RS-010' },
          { _key: 'r7', city: 'Alvorada', time: '25–35 min', via: 'RS-130' },
          { _key: 'r8', city: 'Viamão', time: '30–40 min', via: 'RS-040' },
        ],
      },
      {
        _type: 'relatedLinksSection', _key: 'links',
        heading: 'Páginas por cidade',
        links: [
          { _key: 'l1', label: 'Canoas', href: '/canoas' },
          { _key: 'l2', label: 'São Leopoldo', href: '/sao-leopoldo' },
          { _key: 'l3', label: 'Novo Hamburgo', href: '/novo-hamburgo' },
          { _key: 'l4', label: 'Ver todas as unidades', href: '/porto-alegre' },
        ],
      },
      {
        _type: 'ctaSection', _key: 'cta',
        title: 'Agende uma visita gratuita',
        description: 'Venha conhecer nossas unidades em Porto Alegre e entenda como podemos cuidar do seu familiar, independente de onde sua família mora na Grande Porto Alegre.',
        style: 'gradient',
        ctas: [
          { _key: 'c1', label: 'Falar por WhatsApp', href: '#whatsapp', variant: 'primary' },
          { _key: 'c2', label: 'Agendar pelo formulário', href: '/contato', variant: 'secondary' },
        ],
      },
    ],
  },

  // ────────────────────────────────────────────────────
  // 9. /canoas
  // ────────────────────────────────────────────────────
  {
    _id: 'seo-page-canoas',
    _type: 'page',
    title: 'Canoas — Casa de Repouso',
    path: '/canoas',
    published: true,
    seo: {
      title: 'Casa de Repouso para Idosos de Canoas — Residencial em Porto Alegre | Novo Lar',
      description: 'Família em Canoas buscando casa de repouso? A Novo Lar Geriatria fica em Porto Alegre, a 20–30 minutos de Canoas. 3 unidades com equipe 24h, médico geriatra e mais de 30 anos de experiência.',
    },
    serviceSchema: {
      name: 'Casa de Repouso para idosos de Canoas em Porto Alegre',
      description: 'Residencial geriátrico em Porto Alegre, próximo a Canoas, com equipe multidisciplinar 24h e médico geriatra.',
      areaServed: 'Canoas e Grande Porto Alegre',
    },
    sections: [
      {
        _type: 'seoHeroSection', _key: 'hero',
        eyebrow: 'Para famílias de Canoas · Unidades em Porto Alegre, RS',
        heading: 'Casa de Repouso para Idosos de Canoas',
        description: 'A Novo Lar Geriatria fica em Porto Alegre — a 20 a 30 minutos de Canoas pela BR-116. Famílias de Canoas escolhem a Novo Lar pela qualidade do cuidado especializado e pela facilidade de manter visitas regulares ao familiar idoso.',
        trustBadges: [
          { _key: 'b1', value: '20–30', label: 'minutos de Canoas' },
          { _key: 'b2', value: '3', label: 'unidades em Porto Alegre' },
          { _key: 'b3', value: '24h', label: 'equipe especializada' },
        ],
        primaryCta: { type: 'whatsapp', label: 'Falar por WhatsApp' },
        secondaryCta: { type: 'phone', label: 'Ligar agora' },
        breadcrumbs: [
          { _key: 'bc1', label: 'Home', href: '/' },
          { _key: 'bc2', label: 'Canoas' },
        ],
      },
      {
        _type: 'locationNoticeSection', _key: 'aviso',
        text: "As unidades da Novo Lar Geriatria ficam em Porto Alegre, não em Canoas. Moinhos de Vento e Passo d'Areia ficam a aproximadamente 20–30 minutos de Canoas pela BR-116.",
      },
      {
        _type: 'twoColumnSection', _key: 'por-que',
        leftEyebrow: 'Para famílias de Canoas',
        leftHeading: 'Cuidado especializado a 20 minutos de Canoas',
        leftParagraphs: [
          'Canoas é uma das cidades mais populosas da região metropolitana de Porto Alegre. Muitas famílias de Canoas buscam uma ILPI (Instituição de Longa Permanência para Idosos) que ofereça atendimento clínico especializado — algo que a Novo Lar Geriatria oferece desde 1994.',
          'A distância entre Canoas e nossas unidades em Porto Alegre é facilmente vencida pela BR-116. Além da proximidade, Porto Alegre concentra a melhor infraestrutura de saúde do Rio Grande do Sul. Nossas unidades ficam próximas ao Hospital Moinhos de Vento e a outros hospitais de referência.',
        ],
        rightHeading: 'Por que escolher a Novo Lar',
        rightType: 'checklist',
        checklistItems: [
          'Médico geriatra com avaliações periódicas e acompanhamento clínico individualizado',
          'Enfermagem 24h em plantão contínuo para monitoramento e cuidados de rotina',
          'Fisioterapia, nutrição, terapia ocupacional e psicologia na própria unidade',
          'Equipe treinada para demências, Alzheimer, Parkinson e alta dependência funcional',
          'Visitação aberta — famílias de Canoas podem visitar sempre que quiserem',
          'Comunicação transparente e regular com os responsáveis legais',
        ],
      },
      {
        _type: 'relatedLinksSection', _key: 'links',
        heading: 'Páginas relacionadas',
        links: [
          { _key: 'l1', label: 'Região Metropolitana', href: '/regiao-metropolitana' },
          { _key: 'l2', label: 'São Leopoldo', href: '/sao-leopoldo' },
          { _key: 'l3', label: 'Ver todas as unidades', href: '/porto-alegre' },
        ],
      },
      {
        _type: 'ctaSection', _key: 'cta',
        title: 'Fale com nossa equipe',
        description: 'Nossa equipe está disponível para responder dúvidas e agendar uma visita às unidades em Porto Alegre.',
        style: 'gradient',
        ctas: [
          { _key: 'c1', label: 'Falar por WhatsApp', href: '#whatsapp', variant: 'primary' },
          { _key: 'c2', label: 'Ligar agora', href: '#phone', variant: 'secondary' },
        ],
      },
    ],
  },

  // ────────────────────────────────────────────────────
  // 10. /sao-leopoldo
  // ────────────────────────────────────────────────────
  {
    _id: 'seo-page-sao-leopoldo',
    _type: 'page',
    title: 'São Leopoldo — Casa de Repouso',
    path: '/sao-leopoldo',
    published: true,
    seo: {
      title: 'Casa de Repouso para Idosos de São Leopoldo — Residencial em Porto Alegre | Novo Lar',
      description: 'Família em São Leopoldo buscando casa de repouso? A Novo Lar Geriatria fica em Porto Alegre, a 35–45 minutos de São Leopoldo pela BR-116. 3 unidades com médico geriatra, equipe 24h e mais de 30 anos de experiência.',
    },
    serviceSchema: {
      name: 'Casa de Repouso para idosos de São Leopoldo em Porto Alegre',
      description: 'Residencial geriátrico em Porto Alegre para famílias de São Leopoldo, com equipe multidisciplinar 24h e médico geriatra.',
      areaServed: 'São Leopoldo e Grande Porto Alegre',
    },
    sections: [
      {
        _type: 'seoHeroSection', _key: 'hero',
        eyebrow: 'Para famílias de São Leopoldo · Unidades em Porto Alegre, RS',
        heading: 'Casa de Repouso para Idosos de São Leopoldo',
        description: 'A Novo Lar Geriatria fica em Porto Alegre — a cerca de 35 a 45 minutos de São Leopoldo pela BR-116. Famílias de São Leopoldo escolhem a Novo Lar pela qualidade do atendimento clínico especializado e pelo suporte contínuo à família.',
        trustBadges: [
          { _key: 'b1', value: '35–45', label: 'minutos de São Leopoldo' },
          { _key: 'b2', value: '3', label: 'unidades em Porto Alegre' },
          { _key: 'b3', value: '24h', label: 'equipe especializada' },
        ],
        primaryCta: { type: 'whatsapp', label: 'Falar por WhatsApp' },
        secondaryCta: { type: 'phone', label: 'Ligar agora' },
        breadcrumbs: [
          { _key: 'bc1', label: 'Home', href: '/' },
          { _key: 'bc2', label: 'São Leopoldo' },
        ],
      },
      {
        _type: 'locationNoticeSection', _key: 'aviso',
        text: "As unidades da Novo Lar Geriatria ficam em Porto Alegre, não em São Leopoldo. Nossas unidades em Moinhos de Vento e Passo d'Areia ficam a aproximadamente 35–45 minutos de São Leopoldo pela BR-116.",
      },
      {
        _type: 'twoColumnSection', _key: 'por-que',
        leftEyebrow: 'Para famílias do Vale do Sinos',
        leftHeading: 'Por que famílias de São Leopoldo escolhem Porto Alegre',
        leftParagraphs: [
          'Muitas famílias do Vale do Sinos, especialmente de São Leopoldo, optam por um residencial geriátrico em Porto Alegre quando buscam atendimento clínico especializado para seu familiar idoso. A capital concentra a maior rede de saúde do estado — geriatras, neurologistas, hospitais de referência.',
          'O percurso São Leopoldo–Porto Alegre pela BR-116 é rotineiro para muitas famílias que já se deslocam diariamente para trabalhar na capital. Essa familiaridade com o trajeto facilita a manutenção de visitas regulares.',
        ],
        rightHeading: 'Perfis de idosos que atendemos',
        rightType: 'cards',
        cardItems: [
          { _key: 'c1', title: 'Idosos com doenças neurológicas', text: 'Alzheimer, Parkinson, demência vascular e sequelas de AVC exigem equipe especializada e estrutura adaptada — disponíveis em Porto Alegre.' },
          { _key: 'c2', title: 'Alta dependência funcional', text: 'Quando o familiar precisa de auxílio total para atividades básicas, o nível de cuidado na Novo Lar garante segurança e bem-estar contínuos.' },
          { _key: 'c3', title: 'Recuperação pós-hospitalar', text: 'Após cirurgias ou internações, a Novo Lar oferece fisioterapia, reabilitação e acompanhamento médico para uma recuperação segura.' },
          { _key: 'c4', title: 'Dependência parcial', text: 'Para quem mantém alguma autonomia e busca segurança, convivência e supervisão clínica sem abrir mão da qualidade de vida.' },
        ],
      },
      {
        _type: 'relatedLinksSection', _key: 'links',
        heading: 'Páginas relacionadas',
        links: [
          { _key: 'l1', label: 'Canoas', href: '/canoas' },
          { _key: 'l2', label: 'Novo Hamburgo', href: '/novo-hamburgo' },
          { _key: 'l3', label: 'Região Metropolitana', href: '/regiao-metropolitana' },
          { _key: 'l4', label: 'Ver todas as unidades', href: '/porto-alegre' },
        ],
      },
      {
        _type: 'ctaSection', _key: 'cta',
        title: 'Fale com nossa equipe',
        description: 'Nossa equipe está disponível para responder dúvidas de famílias de São Leopoldo e agendar uma visita às unidades em Porto Alegre.',
        style: 'gradient',
        ctas: [
          { _key: 'c1', label: 'Falar por WhatsApp', href: '#whatsapp', variant: 'primary' },
          { _key: 'c2', label: 'Ligar agora', href: '#phone', variant: 'secondary' },
        ],
      },
    ],
  },

  // ────────────────────────────────────────────────────
  // 11. /novo-hamburgo
  // ────────────────────────────────────────────────────
  {
    _id: 'seo-page-novo-hamburgo',
    _type: 'page',
    title: 'Novo Hamburgo — Casa de Repouso',
    path: '/novo-hamburgo',
    published: true,
    seo: {
      title: 'Casa de Repouso para Idosos de Novo Hamburgo — Residencial em Porto Alegre | Novo Lar',
      description: 'Família em Novo Hamburgo buscando casa de repouso? A Novo Lar Geriatria fica em Porto Alegre, a 45–60 minutos de Novo Hamburgo pela BR-116. 3 unidades com médico geriatra, equipe 24h e 30 anos de experiência.',
    },
    serviceSchema: {
      name: 'Casa de Repouso para idosos de Novo Hamburgo em Porto Alegre',
      description: 'Residencial geriátrico em Porto Alegre para famílias de Novo Hamburgo, com médico geriatra e equipe multidisciplinar 24h.',
      areaServed: 'Novo Hamburgo e Vale do Sinos',
    },
    sections: [
      {
        _type: 'seoHeroSection', _key: 'hero',
        eyebrow: 'Para famílias de Novo Hamburgo · Unidades em Porto Alegre, RS',
        heading: 'Casa de Repouso para Idosos de Novo Hamburgo',
        description: 'A Novo Lar Geriatria fica em Porto Alegre — a cerca de 45 a 60 minutos de Novo Hamburgo pela BR-116. Famílias do Vale do Sinos escolhem a Novo Lar quando buscam cuidado geriátrico especializado com a qualidade da capital.',
        trustBadges: [
          { _key: 'b1', value: '45–60', label: 'minutos de Novo Hamburgo' },
          { _key: 'b2', value: '3', label: 'unidades em Porto Alegre' },
          { _key: 'b3', value: '24h', label: 'equipe especializada' },
        ],
        primaryCta: { type: 'whatsapp', label: 'Falar por WhatsApp' },
        secondaryCta: { type: 'phone', label: 'Ligar agora' },
        breadcrumbs: [
          { _key: 'bc1', label: 'Home', href: '/' },
          { _key: 'bc2', label: 'Novo Hamburgo' },
        ],
      },
      {
        _type: 'locationNoticeSection', _key: 'aviso',
        text: "As unidades da Novo Lar Geriatria ficam em Porto Alegre, não em Novo Hamburgo. Nossas unidades em Moinhos de Vento e Passo d'Areia ficam a aproximadamente 45–60 minutos de Novo Hamburgo pela BR-116.",
      },
      {
        _type: 'twoColumnSection', _key: 'por-que',
        leftEyebrow: 'Vale do Sinos e Grande POA',
        leftHeading: 'Por que famílias de Novo Hamburgo escolhem Porto Alegre',
        leftParagraphs: [
          'Novo Hamburgo é a maior cidade do Vale do Sinos, com forte conexão histórica e econômica com Porto Alegre. Muitas famílias novo-hamburguenses se deslocam regularmente para a capital — e essa rotina facilita a manutenção de visitas a um familiar em um residencial geriátrico em Porto Alegre.',
          'A principal razão para essa escolha é a qualidade do cuidado especializado. Porto Alegre concentra geriatras, neurologistas, hospitais como o Moinhos de Vento, o Santa Casa, o São Lucas — uma rede de saúde que faz diferença real quando o idoso tem condições que exigem acompanhamento multidisciplinar.',
        ],
        rightHeading: 'Por que escolher a Novo Lar',
        rightType: 'checklist',
        checklistItems: [
          'Médico geriatra residente com plano de cuidados individualizado para cada morador',
          'Equipe multidisciplinar: enfermagem 24h, fisioterapia, nutrição, terapia ocupacional e psicologia',
          'Estrutura adaptada para idosos com mobilidade reduzida, demências e alta dependência',
          'Visitação aberta — famílias de Novo Hamburgo podem visitar sem restrição de horário',
          'Comunicação direta com a família: atualizações regulares sobre a evolução do familiar',
          'Atividades terapêuticas diárias para estimulação cognitiva e qualidade de vida',
        ],
      },
      {
        _type: 'faqSection', _key: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          { _key: 'f1', question: 'Vale a pena buscar uma ILPI em Porto Alegre estando em Novo Hamburgo?', answer: 'Para muitas famílias, sim. Porto Alegre concentra a melhor infraestrutura de saúde do RS — geriatras, neurologistas, hospitais de referência. Para idosos com condições clínicas complexas, essa proximidade com especialistas faz diferença real no cuidado.' },
          { _key: 'f2', question: 'A família consegue visitar com frequência mesmo morando em Novo Hamburgo?', answer: 'Sim. O trajeto Novo Hamburgo–Porto Alegre pela BR-116 é conhecido por muitas famílias que já se deslocam regularmente. Incentivamos visitas frequentes — não temos restrição de horário para familiares.' },
          { _key: 'f3', question: "Qual a diferença entre as unidades em Moinhos de Vento e no Passo d'Areia?", answer: "Moinhos de Vento tem 2 unidades no bairro nobre central, mais próximas ao Hospital Moinhos de Vento. Passo d'Areia fica na zona norte e tem acesso mais direto para quem vem pelo eixo da BR-116, o que costuma ser mais conveniente para famílias de Novo Hamburgo e São Leopoldo." },
        ],
      },
      {
        _type: 'relatedLinksSection', _key: 'links',
        heading: 'Páginas relacionadas',
        links: [
          { _key: 'l1', label: 'São Leopoldo', href: '/sao-leopoldo' },
          { _key: 'l2', label: 'Canoas', href: '/canoas' },
          { _key: 'l3', label: 'Região Metropolitana', href: '/regiao-metropolitana' },
          { _key: 'l4', label: 'Ver todas as unidades', href: '/porto-alegre' },
        ],
      },
      {
        _type: 'ctaSection', _key: 'cta',
        title: 'Fale com nossa equipe',
        description: 'Nossa equipe está disponível para responder dúvidas de famílias de Novo Hamburgo e agendar uma visita às unidades em Porto Alegre.',
        style: 'gradient',
        ctas: [
          { _key: 'c1', label: 'Falar por WhatsApp', href: '#whatsapp', variant: 'primary' },
          { _key: 'c2', label: 'Ligar agora', href: '#phone', variant: 'secondary' },
        ],
      },
    ],
  },

  // ────────────────────────────────────────────────────
  // 12. /porto-alegre/moinhos-de-vento/cuidados-alzheimer
  // ────────────────────────────────────────────────────
  {
    _id: 'seo-page-moinhos-alzheimer',
    _type: 'page',
    title: 'Alzheimer em Moinhos de Vento',
    path: '/porto-alegre/moinhos-de-vento/cuidados-alzheimer',
    published: true,
    seo: {
      title: 'Cuidados para Alzheimer em Moinhos de Vento, Porto Alegre | Novo Lar Geriatria',
      description: 'Cuidado especializado para idosos com Alzheimer no bairro Moinhos de Vento, Porto Alegre. 2 unidades da Novo Lar no bairro, a 5 minutos do Hospital Moinhos de Vento — referência em neurologia no RS.',
    },
    serviceSchema: {
      name: 'Cuidados para Alzheimer no bairro Moinhos de Vento, Porto Alegre',
      description: 'Residencial geriátrico especializado em Alzheimer no bairro Moinhos de Vento, Porto Alegre, com 2 unidades, equipe treinada em demências e proximidade com o Hospital Moinhos de Vento.',
      areaServed: 'Moinhos de Vento, Porto Alegre',
    },
    sections: [
      {
        _type: 'seoHeroSection', _key: 'hero',
        eyebrow: 'Alzheimer · Bairro Moinhos de Vento · Porto Alegre, RS',
        heading: 'Cuidados para Alzheimer em Moinhos de Vento',
        description: 'A Novo Lar Geriatria tem 2 unidades no bairro Moinhos de Vento especializadas no cuidado de idosos com Alzheimer e outras demências — em um bairro tranquilo de Porto Alegre, a minutos do Hospital Moinhos de Vento, referência em neurologia no Rio Grande do Sul.',
        trustBadges: [
          { _key: 'b1', value: '2', label: 'unidades no bairro' },
          { _key: 'b2', value: '5 min', label: 'do Hospital Moinhos' },
          { _key: 'b3', value: '24h', label: 'equipe especializada' },
          { _key: 'b4', value: '30+', label: 'anos de experiência' },
        ],
        primaryCta: { type: 'whatsapp', label: 'Falar por WhatsApp' },
        secondaryCta: { type: 'phone', label: 'Ligar agora' },
        breadcrumbs: [
          { _key: 'bc1', label: 'Home', href: '/' },
          { _key: 'bc2', label: 'Porto Alegre', href: '/porto-alegre' },
          { _key: 'bc3', label: 'Moinhos de Vento', href: '/porto-alegre/moinhos-de-vento' },
          { _key: 'bc4', label: 'Cuidados Alzheimer' },
        ],
      },
      {
        _type: 'twoColumnSection', _key: 'bairro',
        leftIcon: 'Brain',
        leftHeading: 'Por que Moinhos de Vento é um bairro ideal para idosos com Alzheimer',
        leftParagraphs: [
          'Para idosos com Alzheimer, o ambiente onde vivem importa tanto quanto o cuidado que recebem. O bairro Moinhos de Vento oferece condições únicas: é um dos bairros mais tranquilos de Porto Alegre — silencioso, arborizado, sem o caos de tráfego de bairros comerciais. Esse ambiente calmo contribui diretamente para a redução de episódios de agitação e confusão.',
          'Além do ambiente, a localização estratégica do bairro oferece um diferencial crítico: a proximidade com o Hospital Moinhos de Vento, referência em neurologia e geriatria no Rio Grande do Sul. Em caso de consultas com neurologistas ou situações de emergência clínica, a distância é mínima.',
        ],
        rightHeading: 'Vantagens do bairro para o cuidado com Alzheimer',
        rightType: 'checklist',
        checklistItems: [
          'Moinhos de Vento é um bairro tranquilo e arborizado — ambiente calmo reduz a agitação em pacientes com Alzheimer',
          'Proximidade com o Hospital Moinhos de Vento (referência em neurologia no RS) para consultas e emergências',
          'Bairro central com fácil acesso para famílias de qualquer parte de Porto Alegre e da Grande POA',
          'Infraestrutura completa de saúde no entorno: clínicas, laboratórios, farmácias 24h',
          '2 unidades no mesmo bairro — se uma estiver com capacidade plena, a outra pode estar disponível',
        ],
      },
      {
        _type: 'checklistSection', _key: 'protocolos',
        eyebrow: 'Cuidado especializado',
        heading: 'Como cuidamos de idosos com Alzheimer',
        description: 'Protocolos desenvolvidos ao longo de 30 anos, adaptados a cada fase da doença e às necessidades individuais de cada residente.',
        items: [
          { _key: 'i1', title: 'Ambiente estruturado e previsível', text: 'Rotinas fixas e ambientes sinalizados reduzem a desorientação e a agitação — fundamentais para qualquer fase do Alzheimer.' },
          { _key: 'i2', title: 'Equipe treinada em demências', text: 'Técnicas de comunicação não verbal, manejo de comportamentos desafiadores e protocolos de segurança para deambulação.' },
          { _key: 'i3', title: 'Estimulação cognitiva adaptada', text: 'Atividades de reminiscência, musicoterapia e terapia ocupacional adaptadas à capacidade funcional atual do residente.' },
          { _key: 'i4', title: 'Monitoramento contínuo 24h', text: 'Enfermagem presente em plantão contínuo para monitorar alterações de humor, sono, alimentação e segurança.' },
          { _key: 'i5', title: 'Nutrição para disfagia', text: 'Cardápios adaptados por nutricionista para residentes com dificuldades de deglutição, frequentes em fases avançadas.' },
          { _key: 'i6', title: 'Suporte integral à família', text: 'Orientação periódica ao familiar sobre a evolução da doença, como comunicar-se com o residente e o que esperar de cada fase.' },
        ],
        columns: 2,
        background: 'gray',
      },
      {
        _type: 'relatedLinksSection', _key: 'links',
        heading: 'Páginas relacionadas',
        links: [
          { _key: 'l1', label: 'Cuidados para Alzheimer', href: '/cuidados-alzheimer' },
          { _key: 'l2', label: 'Cuidados para Demência', href: '/cuidados-demencia' },
          { _key: 'l3', label: 'Unidades em Moinhos de Vento', href: '/porto-alegre/moinhos-de-vento' },
          { _key: 'l4', label: 'Terapia Ocupacional', href: '/servicos/terapia-ocupacional' },
          { _key: 'l5', label: 'Musicoterapia', href: '/servicos/musicoterapia-socializacao' },
        ],
      },
      {
        _type: 'ctaSection', _key: 'cta',
        title: 'Fale com nossa equipe especializada em Alzheimer',
        description: 'Tem dúvidas sobre cuidados para Alzheimer no bairro Moinhos de Vento? Nossa equipe está pronta para orientá-lo e apresentar nossas unidades.',
        style: 'gradient',
        ctas: [
          { _key: 'c1', label: 'Falar por WhatsApp', href: '#whatsapp', variant: 'primary' },
          { _key: 'c2', label: 'Ligar agora', href: '#phone', variant: 'secondary' },
        ],
      },
    ],
  },
]

async function seed() {
  console.log(`\nSeeding ${pages.length} SEO landing pages to Sanity...\n`)

  for (const page of pages) {
    try {
      await client.createOrReplace(page as any)
      console.log(`✓  ${page.path}`)
    } catch (err) {
      console.error(`✗  ${page.path}`, err)
    }
  }

  console.log(`\nDone. ${pages.length}/12 pages seeded.\n`)
  console.log('All pages are now editable in Sanity Studio under Conteúdo > Páginas.')
}

seed()

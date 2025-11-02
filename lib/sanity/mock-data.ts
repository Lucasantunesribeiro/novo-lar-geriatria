/**
 * Dados mockados para uso quando Sanity CMS não está configurado
 */

export const mockUnits = [
  {
    _id: 'mock-unit-1',
    name: 'Moinhos de Vento · Rua Luciana de Abreu, 151',
    slug: { current: 'moinhos-luciana-de-abreu' },
    phone: '(51) 3346.7620',
    whatsapp: '5551993467620',
    email: 'contato@novolargeriatria.com.br',
    address: 'Rua Luciana de Abreu, 151',
    neighborhood: 'Moinhos de Vento',
    city: 'Porto Alegre',
    state: 'RS',
    postalCode: '90570-060',
    coordinates: {
      lat: -30.0277,
      lng: -51.2065
    },
    status: 'active',
    capacity: 30,
    featuredImage: {
      asset: {
        _id: 'mock-img-1',
        url: '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/1.jpeg'
      },
      alt: 'Unidade Moinhos de Vento - Rua Luciana de Abreu'
    },
    photos: [
      {
        asset: {
          _id: 'mock-img-1-1',
          url: '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/1.jpeg'
        },
        alt: 'Fachada da unidade',
        caption: 'Fachada da unidade Moinhos de Vento'
      },
      {
        asset: {
          _id: 'mock-img-1-2',
          url: '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/2.jpeg'
        },
        alt: 'Área externa',
        caption: 'Área externa com jardim'
      }
    ],
    description: 'Unidade localizada no coração do bairro Moinhos de Vento, oferecendo cuidado especializado e ambiente acolhedor.',
    detailedDescription: 'Nossa unidade em Moinhos de Vento combina localização privilegiada com infraestrutura completa para cuidados geriátricos. Com equipe multidisciplinar disponível 24 horas e ambiente projetado para o conforto e bem-estar dos nossos hóspedes.',
    features: [
      'Equipe multidisciplinar 24h',
      'Quartos individuais e compartilhados',
      'Área de convivência ampla',
      'Jardim interno',
      'Alimentação balanceada',
      'Fisioterapia e terapia ocupacional',
      'Atividades recreativas diárias',
      'Enfermagem especializada'
    ],
    hours: 'Atendimento 24 horas',
    faq: [
      {
        question: 'Quais são os horários de visita?',
        answer: 'As visitas são permitidas diariamente das 9h às 18h. Recomendamos agendar previamente para melhor atendimento.'
      },
      {
        question: 'Qual é a formação da equipe?',
        answer: 'Nossa equipe é composta por médicos geriatras, enfermeiros, técnicos de enfermagem, fisioterapeutas, terapeutas ocupacionais, nutricionistas e cuidadores especializados.'
      }
    ],
    seoTitle: 'Casa de Repouso Moinhos de Vento - Luciana de Abreu | Novo Lar Geriatria',
    seoDescription: 'Casa de repouso em Moinhos de Vento com equipe multidisciplinar 24h, ambiente acolhedor e cuidado especializado para idosos.',
    seoKeywords: ['casa de repouso moinhos de vento', 'residencial para idosos porto alegre', 'cuidados geriátricos']
  },
  {
    _id: 'mock-unit-2',
    name: 'Moinhos de Vento · Rua Barão de Santo Ângelo, 406',
    slug: { current: 'moinhos-barao-de-santo-angelo' },
    phone: '(51) 3346.7620',
    whatsapp: '5551993467620',
    email: 'contato@novolargeriatria.com.br',
    address: 'Rua Barão de Santo Ângelo, 406',
    neighborhood: 'Moinhos de Vento',
    city: 'Porto Alegre',
    state: 'RS',
    postalCode: '90570-150',
    coordinates: {
      lat: -30.0265,
      lng: -51.2089
    },
    status: 'active',
    capacity: 25,
    featuredImage: {
      asset: {
        _id: 'mock-img-2',
        url: '/fotos-sobre/Moinhos de Vento -R. Barão de Santo Ângelo, 406/1.jpeg'
      },
      alt: 'Unidade Moinhos de Vento - Rua Barão de Santo Ângelo'
    },
    photos: [
      {
        asset: {
          _id: 'mock-img-2-1',
          url: '/fotos-sobre/Moinhos de Vento -R. Barão de Santo Ângelo, 406/1.jpeg'
        },
        alt: 'Fachada da unidade',
        caption: 'Fachada da unidade Barão de Santo Ângelo'
      }
    ],
    description: 'Unidade moderna no Moinhos de Vento, com fácil acesso e estrutura completa para atendimento geriátrico de qualidade.',
    detailedDescription: 'Localizada em uma das ruas mais tradicionais do bairro Moinhos de Vento, nossa unidade oferece ambiente tranquilo e sofisticado, com toda a infraestrutura necessária para cuidados especializados em geriatria.',
    features: [
      'Ambiente familiar e acolhedor',
      'Equipe especializada 24h',
      'Quartos confortáveis',
      'Área de lazer',
      'Alimentação personalizada',
      'Fisioterapia',
      'Atividades terapêuticas',
      'Monitoramento médico constante'
    ],
    hours: 'Atendimento 24 horas',
    faq: [
      {
        question: 'A unidade aceita convênios?',
        answer: 'Trabalhamos com planos particulares. Entre em contato para mais informações sobre valores e formas de pagamento.'
      },
      {
        question: 'Como é a alimentação?',
        answer: 'A alimentação é balanceada e acompanhada por nutricionista, respeitando restrições alimentares e preferências individuais.'
      }
    ],
    seoTitle: 'Casa de Repouso Barão de Santo Ângelo - Moinhos de Vento | Novo Lar',
    seoDescription: 'Residencial para idosos em Moinhos de Vento com ambiente familiar, equipe especializada e cuidado personalizado.',
    seoKeywords: ['casa de repouso barão santo angelo', 'residencial idosos moinhos vento', 'casa geriátrica porto alegre']
  },
  {
    _id: 'mock-unit-3',
    name: "Passo d'Areia · Rua Brigadeiro Oliveira Neri, 175",
    slug: { current: 'passo-dareia' },
    phone: '(51) 3346.7620',
    whatsapp: '5551993467620',
    email: 'contato@novolargeriatria.com.br',
    address: 'Rua Brigadeiro Oliveira Neri, 175',
    neighborhood: "Passo d'Areia",
    city: 'Porto Alegre',
    state: 'RS',
    postalCode: '91340-260',
    coordinates: {
      lat: -30.0089,
      lng: -51.1687
    },
    status: 'active',
    capacity: 35,
    featuredImage: {
      asset: {
        _id: 'mock-img-3',
        url: '/fotos-sobre/Passos de Areia - R. Brg. Oliveira Neri, 175/1.jpeg'
      },
      alt: "Unidade Passo d'Areia"
    },
    photos: [
      {
        asset: {
          _id: 'mock-img-3-1',
          url: '/fotos-sobre/Passos de Areia - R. Brg. Oliveira Neri, 175/1.jpeg'
        },
        alt: 'Fachada da unidade',
        caption: "Fachada da unidade Passo d'Areia"
      }
    ],
    description: "Ampla unidade no Passo d'Areia, com espaços arejados e estrutura completa para cuidados geriátricos especializados.",
    detailedDescription: "Nossa maior unidade, localizada no tradicional bairro Passo d'Areia, oferece amplos espaços de convivência, jardim interno e toda a infraestrutura necessária para proporcionar qualidade de vida e bem-estar aos nossos hóspedes.",
    features: [
      'Maior capacidade de atendimento',
      'Amplos espaços de convivência',
      'Jardim arborizado',
      'Equipe multidisciplinar completa',
      'Quartos amplos e confortáveis',
      'Sala de fisioterapia equipada',
      'Cozinha própria',
      'Estacionamento para visitantes'
    ],
    hours: 'Atendimento 24 horas',
    faq: [
      {
        question: 'A unidade é adaptada para cadeirantes?',
        answer: 'Sim, toda a unidade é acessível, com rampas, elevadores e banheiros adaptados.'
      },
      {
        question: 'Quais atividades são oferecidas?',
        answer: 'Oferecemos atividades físicas, terapia ocupacional, recreação, artesanato, musicoterapia e outras atividades adaptadas às necessidades de cada hóspede.'
      }
    ],
    seoTitle: "Casa de Repouso Passo d'Areia - Porto Alegre | Novo Lar Geriatria",
    seoDescription: "Residencial para idosos no Passo d'Areia com amplos espaços, jardim interno e equipe multidisciplinar especializada.",
    seoKeywords: ['casa repouso passo areia', 'residencial idosos porto alegre', 'casa geriátrica passo dareia']
  }
]

export const mockServices = [
  {
    _id: 'mock-service-1',
    title: 'Cuidados de Enfermagem 24h',
    slug: { current: 'cuidados-enfermagem' },
    description: 'Equipe de enfermagem qualificada disponível 24 horas para cuidados e monitoramento constante.',
    icon: 'heart-pulse',
    featured: true
  },
  {
    _id: 'mock-service-2',
    title: 'Fisioterapia e Reabilitação',
    slug: { current: 'fisioterapia' },
    description: 'Sessões de fisioterapia personalizadas para manutenção da mobilidade e qualidade de vida.',
    icon: 'activity',
    featured: true
  },
  {
    _id: 'mock-service-3',
    title: 'Acompanhamento Médico',
    slug: { current: 'acompanhamento-medico' },
    description: 'Avaliações médicas periódicas e acompanhamento geriátrico especializado.',
    icon: 'stethoscope',
    featured: true
  },
  {
    _id: 'mock-service-4',
    title: 'Alimentação Balanceada',
    slug: { current: 'alimentacao' },
    description: 'Cardápio elaborado por nutricionista, respeitando restrições e preferências individuais.',
    icon: 'utensils',
    featured: false
  },
  {
    _id: 'mock-service-5',
    title: 'Atividades Terapêuticas',
    slug: { current: 'atividades-terapeuticas' },
    description: 'Programação diária de atividades recreativas e terapêuticas para estímulo cognitivo e social.',
    icon: 'palette',
    featured: false
  },
  {
    _id: 'mock-service-6',
    title: 'Terapia Ocupacional',
    slug: { current: 'terapia-ocupacional' },
    description: 'Atividades para manutenção da autonomia e independência nas atividades do dia a dia.',
    icon: 'hand-helping',
    featured: false
  }
]

export const mockTestimonials = [
  {
    _id: 'mock-testimonial-1',
    name: 'Maria Silva',
    role: 'Filha de hóspede',
    rating: 5,
    text: 'Desde que minha mãe chegou ao Novo Lar, percebemos mais sorrisos e tranquilidade. A equipe é atenciosa e o ambiente é acolhedor.',
    publishedAt: '2024-01-15',
    unit: {
      _id: 'mock-unit-1',
      name: 'Moinhos de Vento · Rua Luciana de Abreu, 151',
      slug: { current: 'moinhos-luciana-de-abreu' }
    }
  },
  {
    _id: 'mock-testimonial-2',
    name: 'João Santos',
    role: 'Filho de hóspede',
    rating: 5,
    text: 'Excelente atendimento! Meu pai está muito bem cuidado e feliz. A estrutura é ótima e a equipe é muito profissional.',
    publishedAt: '2024-02-10',
    unit: {
      _id: 'mock-unit-2',
      name: 'Moinhos de Vento · Rua Barão de Santo Ângelo, 406',
      slug: { current: 'moinhos-barao-de-santo-angelo' }
    }
  }
]

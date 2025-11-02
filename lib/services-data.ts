export type ServiceCategoryId = 'residencial' | 'clinico' | 'bem-estar' | 'suporte'

export type ServiceDetail = {
  id: string
  slug: string
  title: string
  subtitle: string
  summary: string
  category: ServiceCategoryId
  description: string[]
  highlights: string[]
  heroImage: string
  heroImageAlt: string
  gallery: Array<{ src: string; alt: string }>
}

const SERVICE_CATEGORY_INFO: Record<ServiceCategoryId, { title: string; description: string }> = {
  residencial: {
    title: 'Cuidado residencial 24h',
    description: 'Hospedagem assistida e monitoramento integral nas unidades Novo Lar.',
  },
  clinico: {
    title: 'Cuidados clínicos e enfermagem',
    description: 'Protocolos médicos e de enfermagem especializados para cada necessidade.',
  },
  'bem-estar': {
    title: 'Bem-estar e terapias',
    description: 'Atividades que estimulam autonomia, cognição e vínculos afetivos.',
  },
  suporte: {
    title: 'Suporte ao familiar',
    description: 'Serviços que facilitam a rotina e garantem continuidade dos cuidados.',
  },
}

export const SERVICE_DETAILS: ServiceDetail[] = [
  {
    id: 'geriatria',
    slug: 'hospedagem-assistida-24h',
    title: 'Hospedagem assistida 24h',
    subtitle: 'Residencial geriátrico com cuidado contínuo e ambiente acolhedor.',
    summary:
      'Planos permanentes ou temporários com acompanhamento integral para idosos que precisam de suporte diário em um ambiente seguro e acolhedor.',
    category: 'residencial',
    description: [
      'A Novo Lar Geriatria oferece hospedagem permanente ou temporária, com estrutura completa para acolher idosos em diferentes graus de dependência. Cada residente recebe atendimento personalizado, respeitando sua história de vida, preferências e necessidades individuais.',
      'Nossas três unidades em Porto Alegre foram projetadas para proporcionar conforto, segurança e autonomia. Os espaços são amplos, climatizados e totalmente acessíveis, com áreas de convivência, jardins arborizados e quartos individuais ou compartilhados, conforme a escolha da família.',
      'A equipe multidisciplinar atua de forma integrada, incluindo médicos geriatras, enfermeiros, técnicos de enfermagem, fisioterapeutas, terapeutas ocupacionais, nutricionistas e cuidadores especializados. Todos trabalham em regime de plantão 24 horas, garantindo assistência contínua e resposta imediata a qualquer necessidade.',
      'Além do cuidado clínico, desenvolvemos programação diária de atividades recreativas, culturais e terapêuticas que estimulam a cognição, a socialização e o bem-estar emocional dos residentes. As famílias são sempre envolvidas no processo, recebendo atualizações frequentes e orientação especializada.',
    ],
    highlights: [
      'Planos permanentes ou temporários personalizados conforme o perfil e necessidade de cada família',
      'Equipe multidisciplinar presente 24h incluindo médico geriatra, enfermagem, fisioterapia e nutrição',
      'Ambientes totalmente acessíveis com áreas verdes, salas de convivência e quartos climatizados',
      'Programação diária de atividades terapêuticas, recreativas e culturais supervisionadas',
      'Infraestrutura completa com refeitório, lavanderia, estacionamento e sistema de segurança 24h',
      'Comunicação transparente com familiares através de relatórios periódicos e canais diretos',
      'Localização privilegiada em bairros nobres de Porto Alegre com fácil acesso',
    ],
    heroImage: '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/1.jpeg',
    heroImageAlt: 'Sala de convivência acolhedora na unidade Novo Lar Moinhos de Vento',
    gallery: [
      {
        src: '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/2.jpeg',
        alt: 'Área externa arborizada da Novo Lar com moradores em atividade',
      },
      {
        src: '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/10.jpeg',
        alt: 'Equipe de enfermagem acompanhando residente durante a rotina diária',
      },
      {
        src: '/fotos-sobre/Moinhos de Vento -R. Barão de Santo Ângelo, 406/1.jpeg',
        alt: 'Suíte climatizada e acessível da Novo Lar Geriatria',
      },
    ],
  },
  {
    id: 'medico-enfermagem',
    slug: 'enfermagem-medico-24h',
    title: 'Enfermagem e médico 24h',
    subtitle: 'Equipe especializada com monitoramento clínico integral.',
    summary:
      'Cobertura médica geriatra e equipe de enfermagem 24 horas com protocolos personalizados para cada residente.',
    category: 'clinico',
    description: [
      'As unidades Novo Lar contam com acompanhamento semanal de médico geriatra, avaliações individuais e integração com especialistas da família. O histórico de saúde é atualizado continuamente para garantir decisões assertivas e humanizadas.',
      'A enfermagem técnica atua em regime integral, monitorando sinais vitais, administração de medicamentos, curativos e orientando familiares. Todo o cuidado é coordenado por enfermeira responsável, com protocolos de segurança e registros em tempo real.',
    ],
    highlights: [
      'Cobertura médica geriatra com avaliações periódicas e comunicação ativa com a família',
      'Enfermagem técnica 24h para administração de medicações, curativos e suporte diário',
      'Integração com médicos particulares e especialistas externos sempre que necessário',
    ],
    heroImage: '/fotos-sobre/Passos de Areia - R. Brg. Oliveira Neri, 175/1.jpeg',
    heroImageAlt: 'Profissional de saúde acompanhando residente em consulta na Novo Lar',
    gallery: [
      {
        src: '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/11.jpeg',
        alt: 'Enfermeira auxiliando residente durante atividade terapêutica',
      },
      {
        src: '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/13.jpeg',
        alt: 'Equipe multidisciplinar reunida revisando protocolos de cuidado',
      },
      {
        src: '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/16.jpeg',
        alt: 'Profissional monitorando sinais vitais em ambiente moderno e seguro',
      },
    ],
  },
  {
    id: 'nutricao',
    slug: 'nutricao-individualizada',
    title: 'Nutrição individualizada',
    subtitle: 'Planos alimentares supervisionados por nutricionistas.',
    summary:
      'Cardápios personalizados, seis refeições diárias e acompanhamento constante de nutricionistas especializados em geriatria.',
    category: 'bem-estar',
    description: [
      'A nutrição da Novo Lar é conduzida por profissionais especializados que realizam avaliações periódicas, acompanham exames e ajustam cardápios conforme a necessidade clínica de cada residente.',
      'As cozinhas seguem protocolos rigorosos de manipulação e preservação dos alimentos, garantindo refeições equilibradas, saborosas e adaptadas a restrições alimentares ou preferências particulares.',
    ],
    highlights: [
      'Seis refeições diárias planejadas com base em dados antropométricos e clínicos',
      'Adequação para dietas específicas, consistências diferenciadas e suplementação quando necessário',
      'Monitoramento constante da aceitação alimentar e da hidratação dos residentes',
    ],
    heroImage: '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/14.jpeg',
    heroImageAlt: 'Refeição colorida e balanceada servida na Novo Lar Geriatria',
    gallery: [
      {
        src: '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/3.jpeg',
        alt: 'Nutricionista conversando com residente sobre o plano alimentar',
      },
      {
        src: '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/15.jpeg',
        alt: 'Mesa posta com refeições variadas e nutritivas',
      },
      {
        src: '/fotos-sobre/sobre-1.jpg',
        alt: 'Ambiente de refeitório acolhedor para convivência durante as refeições',
      },
    ],
  },
  {
    id: 'terapia-ocupacional',
    slug: 'terapia-ocupacional',
    title: 'Terapia ocupacional',
    subtitle: 'Protocolos para estímulo da autonomia e da cognição.',
    summary:
      'Programas terapêuticos personalizados para resgatar habilidades, promover socialização e fortalecer a autonomia.',
    category: 'bem-estar',
    description: [
      'A terapia ocupacional na Novo Lar é estruturada para estimular coordenação motora, funções cognitivas e a autonomia nas atividades do dia a dia, respeitando a história e as preferências de cada residente.',
      'As sessões individuais e em grupo são planejadas por terapeutas especializados, integrando familiares sempre que possível para manter vínculos e reforçar conquistas.',
    ],
    highlights: [
      'Planos terapêuticos personalizados com objetivos claros e acompanhamento contínuo',
      'Atividades que fortalecem coordenação motora, memória afetiva e habilidades sociais',
      'Integração com fisioterapia, musicoterapia e enfermagem para evolução global',
    ],
    heroImage: '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/4.jpeg',
    heroImageAlt: 'Residentes participando de oficina terapêutica em grupo',
    gallery: [
      {
        src: '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/5.jpeg',
        alt: 'Terapeuta ocupacional conduzindo atividade manual com residente',
      },
      {
        src: '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/6.jpeg',
        alt: 'Residentes realizando exercícios de coordenação motora fina',
      },
      {
        src: '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/7.jpeg',
        alt: 'Ambiente preparado para terapia ocupacional com materiais didáticos',
      },
    ],
  },
  {
    id: 'musicoterapia',
    slug: 'musicoterapia-socializacao',
    title: 'Musicoterapia e socialização',
    subtitle: 'Atividades que fortalecem vínculos e bem-estar emocional.',
    summary:
      'Sessões musicais terapêuticas que estimulam memória afetiva, expressão emocional e convivência entre residentes.',
    category: 'bem-estar',
    description: [
      'A musicoterapia promove comunicação, mobilização e organização emocional, utilizando a música como recurso terapêutico para atender necessidades físicas, mentais e sociais.',
      'Os encontros em grupo despertam memórias afetivas, reduzem quadros de ansiedade e estimulam vínculos com familiares, cuidadores e outros residentes.',
    ],
    highlights: [
      'Sessões conduzidas por musicoterapeutas especializados em geriatria',
      'Estímulo à memória afetiva, expressão emocional e integração social',
      'Integração com outras terapias para resultados mais abrangentes',
    ],
    heroImage: '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/8.jpeg',
    heroImageAlt: 'Grupo de residentes participando de atividade musical com terapeuta',
    gallery: [
      {
        src: '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/9.jpeg',
        alt: 'Residente tocando instrumento acompanhado por profissional de musicoterapia',
      },
      {
        src: '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/12.jpeg',
        alt: 'Atividade musical coletiva em espaço de convivência',
      },
      {
        src: '/fotos-sobre/Moinhos de Vento -R. Barão de Santo Ângelo, 406/3.jpeg',
        alt: 'Ambiente acolhedor com instrumentos disponíveis para sessões de musicoterapia',
      },
    ],
  },
  {
    id: 'lavanderia',
    slug: 'servicos-lavanderia',
    title: 'Serviços de lavanderia',
    subtitle: 'Conforto diário com enxoval organizado em cada unidade.',
    summary:
      'Processos padronizados para higienização de roupas pessoais e de cama, garantindo conforto e praticidade aos residentes.',
    category: 'suporte',
    description: [
      'Cada unidade da Novo Lar possui equipe dedicada ao cuidado da rouparia, com procedimentos que asseguram higienização, organização e conservação das peças pessoais e do enxoval.',
      'O serviço permite que familiares tenham tranquilidade em relação à rotina de roupas, mantendo ambientes personalizados e acolhedores para cada residente.',
    ],
    highlights: [
      'Lavagem e higienização cuidadosa de roupas pessoais, cama e banho',
      'Processos padronizados que preservam peças delicadas e identificadas individualmente',
      'Equipe em cada unidade para atendimento rápido e personalizado',
    ],
    heroImage: '/fotos-sobre/Moinhos de Vento -R. Barão de Santo Ângelo, 406/2.jpeg',
    heroImageAlt: 'Equipe organizando enxoval em lavanderia da Novo Lar Geriatria',
    gallery: [
      {
        src: '/fotos-sobre/Moinhos de Vento -R. Barão de Santo Ângelo, 406/5.jpeg',
        alt: 'Equipe dobrando enxoval na lavanderia com processos padronizados',
      },
      {
        src: '/fotos-sobre/Moinhos de Vento -R. Barão de Santo Ângelo, 406/6.jpeg',
        alt: 'Detalhe de enxoval identificado pronto para cada residente',
      },
      {
        src: '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/15.jpeg',
        alt: 'Quarto com roupas de cama organizadas e higienizadas',
      },
    ],
  },
  {
    id: 'convenio-farmacia',
    slug: 'convenio-farmacia',
    title: 'Convênio com farmácia',
    subtitle: 'Gestão facilitada das medicações e reposições rápidas.',
    summary:
      'Parcerias com farmácias para entrega programada de medicamentos e insumos diretamente nas unidades.',
    category: 'suporte',
    description: [
      'O convênio com farmácias agiliza a reposição de medicamentos prescritos, reduz deslocamentos e garante controle compartilhado entre enfermagem e fornecedores.',
      'As entregas são monitoradas pela equipe de enfermagem, que confere prescrições, validade e condições de armazenamento para manter o tratamento seguro.',
    ],
    highlights: [
      'Entrega programada de medicamentos e insumos diretamente na unidade escolhida',
      'Controle conjunto entre enfermagem e farmacêuticos parceiros para evitar faltas',
      'Comunicação contínua com familiares sobre reposições, prescrições e custos',
    ],
    heroImage: '/fotos-sobre/Passos de Areia - R. Brg. Oliveira Neri, 175/12.jpeg',
    heroImageAlt: 'Profissional conferindo medicações e insumos em unidade Novo Lar',
    gallery: [
      {
        src: '/fotos-sobre/Passos de Areia - R. Brg. Oliveira Neri, 175/13.jpeg',
        alt: 'Controle de estoque com medicações identificadas por residente',
      },
      {
        src: '/fotos-sobre/Passos de Areia - R. Brg. Oliveira Neri, 175/14.jpeg',
        alt: 'Enfermeira utilizando checklist para conferência de medicação',
      },
      {
        src: '/fotos-sobre/Moinhos de Vento -R. Barão de Santo Ângelo, 406/4.jpeg',
        alt: 'Sala de medicação equipada com armários e controle de estoque',
      },
    ],
  },
]

export const SERVICE_MENU_GROUPS = (
  Object.entries(SERVICE_CATEGORY_INFO) as Array<[
    ServiceCategoryId,
    { title: string; description: string }
  ]>
).map(([categoryId, info]) => ({
  id: categoryId,
  title: info.title,
  description: info.description,
  items: SERVICE_DETAILS.filter((service) => service.category === categoryId).map((service) => ({
    id: service.id,
    title: service.title,
    summary: service.subtitle,
    href: `/servicos/${service.slug}`,
  })),
})).filter((group) => group.items.length > 0)

export const SERVICE_NAV = SERVICE_DETAILS.map((service) => ({
  id: service.id,
  title: service.title,
}))

export const getServiceBySlug = (slug: string) =>
  SERVICE_DETAILS.find((service) => service.slug === slug)

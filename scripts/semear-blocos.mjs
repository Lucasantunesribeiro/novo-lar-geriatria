/**
 * Semeia os "blocos espelho" das paginas com layout proprio.
 *
 *   node scripts/semear-blocos.mjs --dry     (so mostra o que faria)
 *   node scripts/semear-blocos.mjs           (escreve no Sanity)
 *   node scripts/semear-blocos.mjs --pagina /sobre
 *
 * Regra: os textos aqui sao copia FIEL do que esta no codigo dos componentes
 * hoje. Semear nao muda uma virgula do site — so faz o Studio mostrar o que a
 * pagina realmente tem, para o cliente poder editar.
 *
 * Precisa de SANITY_API_TOKEN com permissao de escrita no .env.local.
 */
import fs from 'node:fs'
import path from 'node:path'
import {randomUUID} from 'node:crypto'

// ── env ──────────────────────────────────────────────────────────
const envPath = path.resolve(process.cwd(), '.env.local')
if (fs.existsSync(envPath)) {
  for (const linha of fs.readFileSync(envPath, 'utf8').split(/\r?\n/)) {
    const m = linha.match(/^([A-Z0-9_]+)=(.*)$/)
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2].trim()
  }
}

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
const token = process.env.SANITY_API_TOKEN
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-11-04'

const dry = process.argv.includes('--dry')
const filtroIndice = process.argv.indexOf('--pagina')
const filtro = filtroIndice > -1 ? process.argv[filtroIndice + 1] : null

if (!projectId) {
  console.error('Falta NEXT_PUBLIC_SANITY_PROJECT_ID')
  process.exit(1)
}
if (!dry && !token) {
  console.error('Falta SANITY_API_TOKEN (com permissao de escrita)')
  process.exit(1)
}

const k = () => randomUUID().replace(/-/g, '').slice(0, 12)

// ── conteudo atual das paginas ───────────────────────────────────
// Copiado dos componentes. Se um texto mudar no codigo, atualize aqui.

const SOBRE = [
  {
    _type: 'sobreHero',
    _key: k(),
    eyebrow: 'SOBRE NÓS',
    titulo: 'Gestão profissional a serviço do cuidado',
    descricao:
      'Por trás do cuidado humanizado da Novo Lar existe uma gestão administrativa sólida, ética e profissional, responsável por garantir que cada detalhe funcione com excelência. A administração é conduzida por especialistas com formação em saúde, gestão e finanças, unindo conhecimento técnico, visão estratégica e experiência no setor da saúde. Essa estrutura de gestão permite que a Novo Lar atue com organização, transparência e responsabilidade, assegurando estabilidade operacional e criando um ambiente seguro tanto para os residentes quanto para suas famílias.',
  },
  {
    _type: 'sobreVitrineEstrutura',
    _key: k(),
    titulo: 'Cuidar de pessoas sempre foi a nossa essência',
    descricao:
      'Escolher um lar para um pai ou uma mãe é uma das decisões mais sensíveis que uma família pode enfrentar. Envolve amor, responsabilidade e, acima de tudo, confiança. A Novo Lar Geriatria nasceu com um propósito claro: oferecer cuidado humano, seguro e especializado para idosos, respeitando histórias de vida, individualidades e necessidades específicas de cada residente.',
  },
  {
    _type: 'sobreExperiencia',
    _key: k(),
    mostrarEstrelas: true,
    titulo: 'Mais de três décadas de experiência em cuidado geriátrico',
    descricao:
      'Com mais de 30 anos de atuação em Porto Alegre, a Novo Lar construiu uma trajetória baseada em ética, profissionalismo e dedicação contínua ao cuidado com a pessoa idosa. Ao longo desse tempo, acompanhamos de perto as transformações do envelhecimento, da medicina e das necessidades das famílias, evoluindo constantemente nossos processos, estrutura e equipe para oferecer um atendimento cada vez mais completo. Hoje, somos referência em hospedagem assistida, cuidados especializados, reabilitação e cuidados paliativos, atendendo idosos com diferentes graus de dependência.',
    cartoes: [
      {
        _key: k(),
        titulo: 'Cuidado humanizado',
        descricao: 'Atenção individual e respeito à história de cada residente',
      },
      {
        _key: k(),
        titulo: 'Equipe multidisciplinar 24h',
        descricao: 'Médicos, enfermagem e terapeutas sempre presentes',
      },
      {
        _key: k(),
        titulo: 'Estrutura acolhedora e segura',
        descricao: 'Ambientes adaptados, confortáveis e acessíveis',
      },
      {
        _key: k(),
        titulo: 'Rotina ativa e terapêutica',
        descricao: 'Estímulo físico, cognitivo e emocional',
      },
      {
        _key: k(),
        titulo: 'Alimentação saudável e balanceada',
        descricao: 'Planos nutricionais individualizados',
      },
    ],
  },
  {
    _type: 'sobreTresPilares',
    _key: k(),
    titulo: 'Cuidado humanizado, com base técnica sólida',
    descricao:
      'Conheça os pilares que fazem da Novo Lar referência em hospedagem assistida, reabilitação para idosos e residentes de alta complexidade.',
    pilares: [
      {
        _key: k(),
        titulo: 'Hospedagem acolhedora',
        descricao:
          'Suítes amplas, áreas externas arborizadas e ambientes personalizados para acolher diferentes níveis de dependência.',
      },
      {
        _key: k(),
        titulo: 'Equipe multidisciplinar 24h',
        descricao:
          'Médicos geriatras, enfermeiros, fisioterapeutas, terapeutas ocupacionais e musicoterapeutas atuam em regime integral.',
      },
      {
        _key: k(),
        titulo: 'Famílias próximas',
        descricao:
          'Processos transparentes, visitas guiadas frequentes e acompanhamento das rotinas para deixar a família sempre por perto.',
      },
    ],
  },
  {
    _type: 'sobreAmbientes',
    _key: k(),
    titulo: 'Ambientes pensados para acolher famílias inteiras',
    descricao:
      'As unidades da Novo Lar possuem quartos privativos, suítes e quartos semi privativos. Espaços de convivência banhados por luz natural, jardins, salas de convívio e estrutura completa para atender os residentes, reabilitar e promover cuidados clínicos.',
    botaoTexto: 'Ver tour completo',
    botaoHref: '/sobre/fotos',
  },
  {
    _type: 'sobreEtapas',
    _key: k(),
    titulo: 'Proximidade e transparência com as famílias',
    descricao:
      'Transparência e cuidado em cada etapa para garantir uma transição tranquila e acolhedora.',
    etapas: [
      {
        _key: k(),
        titulo: 'Tour guiado pelas unidades',
        descricao:
          'Agende um horário, percorra suítes, jardins e espaços de convivência e conheça nossa equipe de perto.',
      },
      {
        _key: k(),
        titulo: 'Plano personalizado de cuidado',
        descricao:
          'Avaliações clínicas e sociais para entender o perfil do residente e montar um plano que respeita a história da família.',
      },
      {
        _key: k(),
        titulo: 'Integração e acompanhamento contínuo',
        descricao:
          'Relatórios recorrentes, adaptações da rotina e participação da família para garantir conforto e segurança em cada fase.',
      },
    ],
  },
  {
    _type: 'sobreCompromisso',
    _key: k(),
    titulo: 'Nosso compromisso',
    descricao:
      'Na Novo Lar, cuidar vai além de atender necessidades clínicas. É sobre preservar dignidade, promover conforto e oferecer qualidade de vida, mesmo nos momentos mais delicados. Seguimos firmes no compromisso de acolher cada pessoa com respeito, responsabilidade e humanidade — como gostaríamos que alguém que amamos fosse cuidado.',
  },
  {
    _type: 'sobreCtaFinal',
    _key: k(),
    etiqueta: 'Atendimento próximo',
    titulo: 'Conheça a Novo Lar de perto.',
    descricao:
      'Depois de entender nossa história, o próximo passo é conhecer a estrutura real, conversar com a equipe e validar se a rotina faz sentido para sua família.',
    cartoes: [
      {
        _key: k(),
        titulo: 'Central Novo Lar',
        descricao:
          'Converse com a equipe e entenda qual unidade faz mais sentido para o seu familiar.',
        icone: 'telefone',
        href: 'tel:5133769462',
        label: '(51) 3376.9462',
      },
      {
        _key: k(),
        titulo: 'WhatsApp',
        descricao:
          'Fale pelo WhatsApp para tirar dúvidas, pedir retorno e receber orientação inicial.',
        icone: 'whatsapp',
        href: 'https://wa.me/5551920011523',
        label: 'Abrir conversa',
      },
      {
        _key: k(),
        titulo: 'Agendar visita guiada',
        descricao:
          'Escolha a unidade de preferência e conheça a operação de perto com apoio da equipe.',
        icone: 'calendario',
        href: '/contato',
        label: 'Agendar agora',
      },
    ],
  },
]


const ESTRUTURA = [
  {
    _type: 'estruturaHero',
    _key: k(),
    eyebrow: 'Hospedagem assistida em Porto Alegre',
    titulo: 'Estrutura completa para cuidar com segurança, conforto e tranquilidade',
    descricao:
      'Conheça os ambientes e a organização da Novo Lar, planejados para oferecer segurança, acessibilidade e acolhimento em todas as fases do envelhecimento. Aqui, a estrutura faz parte do cuidado, promovendo bem-estar ao residente e tranquilidade à família todos os dias.',
  },
  {
    _type: 'estruturaHospedagem',
    _key: k(),
    paragrafo1:
      'A hospedagem assistida 24 horas é muito mais do que um espaço de moradia: trata-se de um modelo de cuidado integral que combina assistência médica, enfermagem especializada, suporte nutricional, atividades terapêuticas e acolhimento humanizado. Na Novo Lar Geriatria, proporcionamos um ambiente preparado para atender idosos em diferentes graus de dependência, desde aqueles que buscam autonomia e convivência social até pacientes que necessitam de cuidados intensivos e monitoramento contínuo.',
    paragrafo2: [
      {
        _type: 'block',
        _key: k(),
        style: 'normal',
        markDefs: [],
        children: [
          {
            _type: 'span',
            _key: k(),
            marks: [],
            text: 'Diferente do cuidado domiciliar, a hospedagem assistida oferece ',
          },
          {
            _type: 'span',
            _key: k(),
            marks: ['strong'],
            text: 'infraestrutura completa, equipe multidisciplinar integrada e protocolos de segurança',
          },
          {
            _type: 'span',
            _key: k(),
            marks: [],
            text: ' que garantem resposta imediata a qualquer necessidade. Cada residente recebe um ',
          },
          {
            _type: 'span',
            _key: k(),
            marks: ['strong'],
            text: 'plano de cuidado personalizado',
          },
          {
            _type: 'span',
            _key: k(),
            marks: [],
            text: ', elaborado com base em avaliação clínica detalhada, histórico de saúde, preferências pessoais e orientações da família. Esse plano é constantemente revisado pela equipe, assegurando evolução e bem-estar em cada etapa do envelhecimento.',
          },
        ],
      },
    ],
    tituloLista: 'Cuidado que se adapta a cada família',
    itens: [
      'Planos permanentes ou temporários totalmente personalizados conforme perfil clínico e necessidades de cada família',
      'Equipe multidisciplinar completa presente 24h: médico geriatra, enfermeiros, fisioterapeutas, nutricionistas, psicólogos e terapeutas ocupacionais',
      'Ambientes totalmente acessíveis com pisos antiderrapantes, corrimãos, áreas verdes arborizadas e salas de convivência climatizadas',
      'Quartos individuais ou compartilhados com camas hospitalares, climatização, banheiros adaptados e sistema de chamada de emergência',
      'Programação diária supervisionada: atividades terapêuticas, recreativas, culturais, fisioterapia em grupo e celebrações especiais',
      'Alimentação balanceada com seis refeições diárias elaboradas por nutricionistas especializados em geriatria',
      'Administração controlada de medicamentos com checklist de enfermagem, controle de horários e integração com farmácias parceiras',
      'Monitoramento contínuo de sinais vitais, glicemia, pressão arterial e demais parâmetros clínicos conforme necessidade individual',
    ],
  },
  {
    _type: 'estruturaProcesso',
    _key: k(),
    etiqueta: 'Como cuidamos',
    titulo: 'Processo acolhedor do primeiro contato ao dia a dia',
    descricao:
      'Transparência e proximidade com a família em todas as etapas. Nossa metodologia foi desenhada para garantir transições suaves e acompanhamento frequente.',
    cartoes: [
      {
        _key: k(),
        icone: 'prancheta',
        titulo: 'Avaliação completa',
        descricao:
          'Reunião inicial com família e residente para entender histórico de saúde, preferências, expectativas e necessidades específicas.',
      },
      {
        _key: k(),
        icone: 'pessoas',
        titulo: 'Plano individualizado',
        descricao:
          'Construção conjunta do plano de cuidados com definição de terapias, alimentação, acompanhamento médico e rotinas personalizadas.',
      },
      {
        _key: k(),
        icone: 'coracao',
        titulo: 'Cuidado multidisciplinar',
        descricao:
          'Equipe de enfermagem 24h, médico geriatra, terapeuta ocupacional, nutricionista e musicoterapeuta atuando em sincronia.',
      },
      {
        _key: k(),
        icone: 'conversa',
        titulo: 'Acompanhamento e diálogo',
        descricao:
          'Monitoramento contínuo com atualizações à família, ajustes de protocolos e acolhimento para dúvidas a qualquer momento.',
      },
    ],
  },
  {
    _type: 'estruturaFamilias',
    _key: k(),
    titulo: 'Estrutura que acolhe famílias inteiras',
    descricao:
      'A combinação entre ambiente planejado, equipe próxima e rotinas humanizadas garante tranquilidade para o idoso e para quem acompanha de perto.',
    cartoes: [
      {
        _key: k(),
        icone: 'pessoas',
        titulo: 'Equipe multidisciplinar',
        descricao:
          'Médicos, enfermeiros, nutricionistas, terapeutas ocupacionais, musicoterapeutas e cuidadores atuando de forma integrada.',
      },
      {
        _key: k(),
        icone: 'coracao',
        titulo: 'Rotinas acolhedoras',
        descricao:
          'Programações que estimulam autonomia, socialização e bem-estar emocional em um ambiente familiar e seguro.',
      },
      {
        _key: k(),
        icone: 'check',
        titulo: 'Planos personalizados',
        descricao:
          'Planos de cuidados construídos com cada família, respeitando históricos clínicos, preferências e objetivos individuais.',
      },
      {
        _key: k(),
        icone: 'predio',
        titulo: 'Estruturas completas',
        descricao:
          'Unidades com acessibilidade total, jardins, salas de convivência, elevadores e espaços terapêuticos preparados para diferentes perfis.',
      },
    ],
  },
  {
    _type: 'estruturaAmbientes',
    _key: k(),
    titulo: 'Ambientes Preparados para o Seu Conforto',
    descricao:
      'Nossas instalações foram projetadas pensando no bem-estar e na segurança dos nossos residentes',
  },
  {
    _type: 'estruturaConforto',
    _key: k(),
    titulo: 'Conforto e Segurança em Cada Detalhe',
    descricao:
      'Cada ambiente foi cuidadosamente planejado para proporcionar segurança, acessibilidade e conforto aos nossos residentes.',
    itens: [
      { _key: k(), icone: 'expandir', titulo: 'Ambientes amplos e acolhedores' },
      { _key: k(), icone: 'banheiro', titulo: 'Banheiros adaptados e seguros' },
      { _key: k(), icone: 'poltrona', titulo: 'Salas de convivência confortáveis' },
      { _key: k(), icone: 'talheres', titulo: 'Refeitórios climatizados' },
      { _key: k(), icone: 'cama', titulo: 'Quartos individuais e compartilhados' },
    ],
  },
  {
    _type: 'estruturaGaleriaFinal',
    _key: k(),
  },
  {
    _type: 'estruturaUnidades',
    _key: k(),
    titulo: 'Unidades Novo Lar Geriatria',
    descricao:
      'Escolha a unidade mais próxima para conhecer de perto nossa estrutura e os ambientes preparados para acolher o seu familiar.',
    unidades: [
      {
        _key: k(),
        titulo: 'Moinhos de Vento · Rua Luciana de Abreu, 151',
        endereco: 'Rua Luciana de Abreu, 151 · Porto Alegre - RS',
        destaques: [
          'Ambiente arborizado e acolhedor',
          'Suítes individuais e duplas',
          'Próximo aos serviços do bairro Moinhos',
        ],
        href: '/unidade-luciana-de-abreu',
        telefone: '(51) 2797.0901',
        cidade: 'Porto Alegre',
      },
      {
        _key: k(),
        titulo: "Passo d'Areia · Rua Brigadeiro Oliveira Neri, 175",
        endereco: 'Rua Brigadeiro Oliveira Neri, 175 · Porto Alegre - RS',
        destaques: [
          'Espaços amplos e iluminados',
          'Fácil acesso pelas principais vias da zona norte',
          'Rotina integrada de terapias e atividades',
        ],
        href: '/unidade-novo-lar-geriatria',
        telefone: '(51) 3376.9462',
        cidade: 'Porto Alegre',
      },
      {
        _key: k(),
        titulo: 'Moinhos de Vento · R. Barão de Santo Ângelo, 406',
        endereco: 'Rua Barão de Santo Ângelo, 406 · Porto Alegre - RS',
        destaques: [
          'Estrutura moderna em região central',
          'Áreas de convivência integradas com jardins',
          'Equipe de referência em reabilitação e acolhimento',
        ],
        href: '/unidade-barao-sto-angelo',
        telefone: '(51) 2797.0901',
        cidade: 'Porto Alegre',
      },
    ],
  },
  {
    _type: 'estruturaCareCta',
    _key: k(),
    etiqueta: 'Atendimento próximo',
    titulo: 'Estamos prontos para planejar a melhor solução para a sua família',
    descricao:
      'Escolha o canal que preferir para falar com nossa equipe. Responderemos rapidamente para orientar sobre vagas, documentação, valores e visitas.',
    cartoes: [
      {
        _key: k(),
        icone: 'telefone',
        titulo: 'Central Novo Lar',
        descricao:
          'Converse com nossa equipe e tire todas as dúvidas sobre as modalidades de hospedagem.',
        href: 'tel:5133769462',
        label: 'Ligar agora',
      },
      {
        _key: k(),
        icone: 'whatsapp',
        titulo: 'WhatsApp 24h',
        descricao:
          'Envie uma mensagem e receba retorno rápido da equipe de plantão para orientações imediatas.',
        href: 'https://wa.me/5551920011523',
        label: 'Abrir conversa',
      },
      {
        _key: k(),
        icone: 'calendario',
        titulo: 'Agendar visita guiada',
        descricao:
          'Escolha a unidade de preferência e conheça pessoalmente nossa estrutura e protocolos de cuidado.',
        href: '/contato',
        label: 'Agendar agora',
      },
    ],
  },
  {
    _type: 'estruturaCtaFinal',
    _key: k(),
    titulo: 'Pronto para conhecer a Novo Lar pessoalmente?',
    descricao:
      'Nossa equipe está disponível para apresentar cada unidade, compartilhar o plano de cuidados e orientar sua família na escolha ideal.',
    botaoTexto: 'Conversar pelo WhatsApp',
    // Mesmo numero que este botao ja usa no ar (vem do CMS antigo). Repare que
    // ele difere do WhatsApp do cabecalho — trocar aqui e decisao de negocio.
    botaoHref: 'https://wa.me/555133467620',
  },
]


const SERVICOS = [
  {
    _type: 'servicosModalidades',
    _key: k(),
    etiqueta: 'Modalidades disponíveis',
    titulo: 'Cuidado que acompanha cada fase da família',
    descricao:
      'Escolha a modalidade que mais combina com a sua necessidade e conte com nossas equipes para garantir conforto, segurança e autonomia na rotina do idoso.',
    modalidades: [
      {
        _key: k(),
        icone: 'casa',
        titulo: 'Hospedagem permanente',
        descricao:
          'Acolhimento contínuo com acompanhamento 24h da equipe de enfermagem, médico geriatra e profissionais de apoio. Ideal para quem busca rotina estável, estímulos diários e convivência em um ambiente seguro.',
        itens: [
          'Planos personalizados que respeitam preferências e histórico clínico',
          'Rotinas com terapias, alimentação supervisionada e estímulos cognitivos',
          'Ambientes aconchegantes que acolhem residentes com diferentes níveis de dependência',
        ],
      },
      {
        _key: k(),
        icone: 'calendario',
        titulo: 'Hospedagem temporária',
        descricao:
          'Períodos flexíveis para famílias que precisam de suporte em viagens, férias ou diante de mudanças na rotina. A equipe garante continuidade dos cuidados e integração com o plano já adotado pelos familiares.',
        itens: [
          'Estadas planejadas com acompanhamento médico e de enfermagem integral',
          'Atividades diárias que estimulam autonomia e socialização',
          'Transição tranquila entre o lar e a clínica, com orientação à família',
        ],
      },
      {
        _key: k(),
        icone: 'batimento',
        titulo: 'Cuidados pós-operatórios e reabilitação',
        descricao:
          'Assistência especializada para alta hospitalar, reabilitação de traumas e recuperação funcional. A equipe multidisciplinar acompanha cada etapa para acelerar a retomada das atividades com segurança.',
        itens: [
          'Monitoramento clínico, administração de medicamentos e curativos',
          'Apoio de fisioterapia, terapia ocupacional e musicoterapia conforme indicação',
          'Adequação de cardápio e rotina conforme orientações médicas',
        ],
      },
    ],
  },
  {
    _type: 'servicosLista',
    _key: k(),
    titulo: 'Serviços especializados',
    descricao:
      'Atendimento multidisciplinar com protocolos exclusivos para promover segurança, autonomia e qualidade de vida.',
  },
]

const CONTATO = [
  {
    _type: 'contatoHero',
    _key: k(),
    eyebrow:
      'Residencial Geriátrico e Hospedagem Assistida em Porto Alegre - Novo Lar',
    titulo: 'Entre em Contato',
    descricao:
      'Estamos prontos para atendê-lo. Preencha o formulário abaixo ou entre em contato diretamente com uma de nossas unidades.',
  },
  {
    _type: 'contatoFormulario',
    _key: k(),
  },
]


const HOME = [
  {
    _type: 'homeHero',
    _key: k(),
    eyebrow: '+30 anos sendo referência em cuidado humanizado',
    titulo: 'Um lar seguro, humano e acolhedor para quem você mais ama',
    descricao:
      'Cuidamos de idosos com diferentes graus de dependência, oferecendo atenção individual, equipe multidisciplinar 24 horas e ambientes preparados para promover bem-estar, segurança e tranquilidade às famílias.',
    botaoTexto: 'Fale Conosco',
    botaoHref: '/contato',
  },
  {
    _type: 'homePorQue',
    _key: k(),
    titulo: 'Por que escolher a Novo Lar?',
    beneficios: [
      {
        _key: k(),
        titulo: 'Cuidado humanizado',
        descricao: 'Atenção individual e respeito à história de cada residente',
      },
      {
        _key: k(),
        titulo: 'Equipe multidisciplinar 24h',
        descricao: 'Médicos, enfermagem e terapeutas sempre presentes',
      },
      {
        _key: k(),
        titulo: 'Estrutura acolhedora e segura',
        descricao: 'Ambientes adaptados, confortáveis e acessíveis',
      },
      {
        _key: k(),
        titulo: 'Rotina ativa e terapêutica',
        descricao: 'Estímulo físico, cognitivo e emocional',
      },
      {
        _key: k(),
        titulo: 'Alimentação saudável e balanceada',
        descricao: 'Comida prazerosa, afetiva e adaptada a dietas restritivas.',
      },
      {
        _key: k(),
        titulo: 'Comunicação Estruturada com a Família',
        descricao:
          'Boletins, retorno proativo, fotos autorizadas, atualização de intercorrências, canais de contato, e muito mais.',
      },
      {
        _key: k(),
        titulo: 'Combate ao Isolamento Social',
        descricao:
          'Buscamos promover a redução do sentimento de solidão estimulando a interação entre os residentes e familiares.',
      },
    ],
  },
  {_type: 'homeUnidades', _key: k()},
  {_type: 'homeServicos', _key: k(), titulo: 'Nossos Serviços', descricao: 'Cuidado integral e personalizado para cada fase da vida.'},
  {
    _type: 'homeEstrutura',
    _key: k(),
    titulo: 'Veja Nossa Estrutura',
    descricao:
      'Ambientes amplos, seguros e preparados para oferecer conforto, acessibilidade e bem-estar no dia a dia. Cada espaço foi pensado para que o residente se sinta em casa e para que a família tenha a tranquilidade de saber que tudo foi cuidadosamente planejado.',
    botaoTexto: 'Conheça nossa estrutura',
    botaoHref: '/sobre/estrutura',
  },
  {
    _type: 'homeBlog',
    _key: k(),
    titulo: 'Conteúdos e Orientações',
    descricao:
      'Artigos e dicas para ajudar a família a cuidar melhor de quem mais importa.',
  },
  {
    _type: 'homeExperiencia',
    _key: k(),
    etiqueta: 'Cuidado especializado com mais de 30 anos de experiência',
    titulo: 'Experiência e Confiança',
    paragrafo1:
      'A Novo Lar nasceu da vontade de oferecer um lar verdadeiramente acolhedor para idosos que precisam de cuidados especializados. Com mais de três décadas de experiência, construímos unidades que combinam infraestrutura moderna, equipe multidisciplinar e um olhar humanizado sobre o envelhecimento.',
    paragrafo2:
      'Cada residente é acompanhado de forma individualizada, com rotina personalizada e atenção constante. A família participa ativamente e tem acesso transparente a tudo que acontece no dia a dia. Aqui, o cuidado vai além do técnico — é sobre respeito, dignidade e qualidade de vida.',
  },
  {_type: 'homeDepoimentos', _key: k(), titulo: 'O que dizem as famílias'},
  {
    _type: 'homeCtaFinal',
    _key: k(),
    etiqueta: 'Decisão assistida',
    titulo:
      'Estamos prontos para ajudar sua família a decidir com segurança, sem pressa e com contexto real.',
    descricao:
      'Este bloco fecha a home conectando contato imediato, visita presencial e páginas de apoio para quem ainda está comparando opções.',
    cartoes: [
      {
        _key: k(),
        icone: 'telefone',
        titulo: 'Central Novo Lar',
        descricao:
          'Atendimento humano para orientar sobre perfil clínico, unidades e disponibilidade.',
        href: 'tel:5133769462',
        label: '(51) 3376.9462',
      },
      {
        _key: k(),
        icone: 'whatsapp',
        titulo: 'WhatsApp',
        descricao:
          'Canal rápido para tirar dúvidas, pedir retorno e combinar a primeira visita.',
        href: 'https://wa.me/5551920011523',
        label: 'Abrir conversa',
      },
      {
        _key: k(),
        icone: 'calendario',
        titulo: 'Agendar visita guiada',
        descricao:
          'Leve sua família para conhecer a estrutura, a equipe e as opções de cuidado.',
        href: '/contato',
        label: 'Solicitar horario',
      },
    ],
    linksApoio: [
      {_key: k(), label: 'Ver depoimentos', href: '/depoimentos'},
      {_key: k(), label: 'Comparar unidades', href: '/sobre/localizacao'},
      {_key: k(), label: 'Ler FAQ', href: '/perguntas-frequentes'},
    ],
  },
]

// ── Paginas institucionais ───────────────────────────────────────

const A_NOVO_LAR = [
  {
    _type: 'paginaHero',
    _key: k(),
    etiqueta: 'Desde 1994',
    titulo: 'A Novo Lar Geriatria',
    descricao:
      'Tradição e excelência em hospedagem assistida para idosos em Porto Alegre desde 1994.',
    botao1Texto: 'Agendar visita',
    botao1Href: '/contato',
    botao2Texto: 'Falar com especialista',
    botao2Href: 'tel:5133769462',
  },
  {
    _type: 'paginaHistoria',
    _key: k(),
    etiqueta: 'Nossa história',
    paragrafos: [
      'A NOVO LAR — Hospedagem Assistida com Qualidade®, empresa gaúcha fundada em 1994, foi idealizada para proporcionar conforto, tranquilidade e a melhor qualidade de vida na 3ª idade. Nasceu da visão empreendedora de seus sócios, cuja experiência técnica e administrativa de mais de 40 anos na área da saúde e hospitalar garante seriedade e transparência.',
      'Nosso compromisso é dar suporte integral ao idoso e sua família com carinho e respeito. Combinamos hotelaria com assistência médica e de enfermagem 24 horas por dia, funcionando como clínica geriátrica e casa de repouso com equipe multidisciplinar dedicada e experiente.',
      'Na geriatria Novo Lar você encontra hospedagem permanente ou temporária em Porto Alegre. Cada unidade conta com estrutura completa e profissionais focados no atendimento integral ao idoso e suas necessidades, para que o conforto e o bem-estar estejam sempre presentes.',
      "Atualmente, a NOVO LAR — Hospedagem Assistida com Qualidade® dispõe de três estabelecimentos em Porto Alegre, situados nos bairros Moinhos de Vento e Passo d'Areia, integrados ao cotidiano da cidade e próximos aos principais serviços de saúde.",
    ],
    destaques: [
      {
        _key: k(),
        value: '1994',
        label: 'Ano de fundação',
        description: 'Tradição gaúcha em cuidado especializado para idosos.',
      },
      {
        _key: k(),
        value: '3',
        label: 'Unidades em Porto Alegre',
        description:
          "Estrutura presencial nos bairros Moinhos de Vento e Passo d'Areia.",
      },
      {
        _key: k(),
        value: '40+',
        label: 'Anos de experiência',
        description:
          'Direção com vivência em gestão hospitalar e assistência à saúde.',
      },
      {
        _key: k(),
        value: '24h',
        label: 'Suporte de enfermagem',
        description:
          'Cuidado integral e monitoramento contínuo para residentes e famílias.',
      },
    ],
  },
  {
    _type: 'paginaPilares',
    _key: k(),
    titulo: 'Nossos pilares',
    descricao: 'Princípios que orientam cada cuidado prestado às famílias',
    tituloMissao: 'Missão',
    textoMissao:
      'Garantir e trabalhar com excelência, prestando serviços de assistência de enfermagem 24h aos residentes, oferecendo conforto e tranquilidade também aos familiares.',
    tituloVisao: 'Visão',
    textoVisao:
      'Ser a melhor empresa do segmento e referência pela excelência em serviços de hospedagem assistida para idosos em Porto Alegre e região.',
    tituloValores: 'Valores',
    valores: [
      'Garantir a satisfação e a confiança de nossos clientes.',
      'Trabalhar com dignidade, transparência e ética.',
      'Manter uma equipe sinérgica com foco em excelência.',
      'Praticar a sustentabilidade social, econômica e ambiental.',
    ],
  },
]

const EQUIPE = [
  {
    _type: 'paginaHero',
    _key: k(),
    etiqueta:
      'Residencial Geriátrico e Hospedagem Assistida em Porto Alegre - Novo Lar',
    titulo: 'Equipe Multidisciplinar 24h',
  },
  {
    _type: 'paginaCartoes',
    _key: k(),
    titulo: 'Profissionais Qualificados e Dedicados',
    descricao:
      'Nossa equipe multidisciplinar trabalha de forma integrada para garantir o melhor cuidado',
    cartoes: [
      {_key: k(), titulo: 'Médicos Geriátras', descricao: 'Acompanhamento especializado'},
      {_key: k(), titulo: 'Enfermagem 24h', descricao: 'Cuidado contínuo e atencioso'},
      {_key: k(), titulo: 'Fisioterapeutas', descricao: 'Reabilitação e mobilidade'},
      {_key: k(), titulo: 'Nutricionistas', descricao: 'Alimentação balanceada'},
      {_key: k(), titulo: 'Psicólogos', descricao: 'Apoio emocional e mental'},
      {_key: k(), titulo: 'Terapeutas Ocupacionais', descricao: 'Atividades e estímulos'},
    ],
  },
  {
    _type: 'paginaHistoria',
    _key: k(),
    etiqueta: 'Cuidado Humanizado e Profissional',
    paragrafos: [
      'Nossa equipe multidisciplinar está presente 24 horas por dia, trabalhando de forma integrada para proporcionar o melhor cuidado aos nossos residentes.',
      'Cada profissional é cuidadosamente selecionado e capacitado para oferecer um atendimento personalizado, respeitando as necessidades individuais de cada residente.',
    ],
    destaques: [
      {
        _key: k(),
        label: 'Atendimento 24 Horas',
        description:
          'Nossa equipe está sempre disponível para garantir segurança, conforto e bem-estar em tempo integral.',
      },
    ],
  },
]

const LOCALIZACAO = [
  {
    _type: 'paginaHero',
    _key: k(),
    etiqueta:
      'Residencial Geriátrico e Hospedagem Assistida em Porto Alegre - Novo Lar',
    titulo: 'Localização Privilegiada',
  },
  {
    _type: 'paginaCartoes',
    _key: k(),
    titulo: 'Entre em Contato com Nossas Unidades',
    cartoes: [
      {_key: k(), titulo: 'Bairros nobres e seguros'},
      {_key: k(), titulo: 'Próximo a parques e áreas verdes'},
      {_key: k(), titulo: 'Acesso rápido a hospitais'},
      {_key: k(), titulo: 'Fácil acesso para visitantes'},
    ],
  },
]

const FOTOS = [
  {
    _type: 'paginaHero',
    _key: k(),
    etiqueta:
      'Residencial Geriátrico e Hospedagem Assistida em Porto Alegre - Novo Lar',
    titulo: 'Galeria de Fotos',
  },
]

const ATIVIDADES = [
  {
    _type: 'paginaHero',
    _key: k(),
    etiqueta:
      'Residencial Geriátrico e Hospedagem Assistida em Porto Alegre - Novo Lar',
    titulo: 'Atividades e Terapia Ocupacional',
  },
  {
    _type: 'paginaCartoes',
    _key: k(),
    titulo: 'Uma rotina que estimula corpo, mente e convivência',
    cartoes: [
      {
        _key: k(),
        icone: 'musica',
        titulo: 'Musicoterapia',
        descricao:
          'Sessões com música, ritmo e canto para estimular memória, humor e conexão emocional.',
      },
      {
        _key: k(),
        icone: 'paleta',
        titulo: 'Artes e expressão',
        descricao:
          'Pintura, desenho e trabalhos manuais que reforçam coordenação, concentração e autoestima.',
      },
      {
        _key: k(),
        icone: 'livro',
        titulo: 'Leitura e jogos cognitivos',
        descricao:
          'Atividades adaptadas para atenção, memória, linguagem e raciocínio no ritmo de cada residente.',
      },
      {
        _key: k(),
        icone: 'pessoas',
        titulo: 'Convivência social',
        descricao:
          'Rodas de conversa, comemorações e encontros que fortalecem vínculos e senso de pertencimento.',
      },
      {
        _key: k(),
        icone: 'coracao',
        titulo: 'Movimento assistido',
        descricao:
          'Alongamentos, exercícios leves e estímulos motores integrados à rotina com segurança.',
      },
      {
        _key: k(),
        icone: 'sorriso',
        titulo: 'Lazer e bem-estar',
        descricao:
          'Momentos prazerosos que aliviam a rotina, reduzem ociosidade e ampliam a participação.',
      },
    ],
  },
  {
    _type: 'paginaCartoes',
    _key: k(),
    titulo: 'Atividades não são passatempo. São parte do cuidado.',
    cartoes: [
      {
        _key: k(),
        titulo: 'Planejamento individual',
        descricao:
          'A equipe considera cognição, mobilidade, humor, repertório pessoal e condição clínica antes de propor qualquer atividade.',
      },
      {
        _key: k(),
        titulo: 'Participação respeitosa',
        descricao:
          'Ninguém é exposto ou forçado. O objetivo é estimular sem desorganizar a rotina e sem desrespeitar limites.',
      },
      {
        _key: k(),
        titulo: 'Constância que gera resultado',
        descricao:
          'A repetição organizada ajuda a manter engajamento, previsibilidade e mais estabilidade emocional no dia a dia.',
      },
    ],
  },
  {
    _type: 'paginaCartoes',
    _key: k(),
    titulo: 'O que a família percebe na prática',
    cartoes: [
      {
        _key: k(),
        titulo: 'Mais engajamento no dia a dia',
        descricao:
          'A rotina deixa de ser apenas assistencial e passa a ter momentos significativos de participação, vínculo e estímulo.',
      },
      {
        _key: k(),
        titulo: 'Menos apatia e mais convivência',
        descricao:
          'Atividades bem conduzidas favorecem interação social, reduzem isolamento e tornam o ambiente mais leve para o residente.',
      },
      {
        _key: k(),
        titulo: 'Autonomia preservada por mais tempo',
        descricao:
          'Mesmo quando há limitações, o trabalho contínuo ajuda a manter capacidades funcionais e a sensação de utilidade.',
      },
    ],
  },
  {
    _type: 'paginaCta',
    _key: k(),
    titulo: 'Quer entender como essa rotina se encaixa no perfil do seu familiar?',
    descricao:
      'Nossa equipe pode explicar como a programação terapêutica se integra ao cuidado diário, ao acompanhamento clínico e à adaptação de cada residente.',
    botao1Texto: 'Agendar visita',
    botao1Href: '/contato',
  },
]

const DEPOIMENTOS = [
  {
    _type: 'paginaHero',
    _key: k(),
    etiqueta: 'Histórias reais de famílias satisfeitas',
    titulo: 'Depoimentos',
    descricao: 'Veja o que dizem as famílias que confiam em nosso trabalho',
  },
  {
    _type: 'paginaCartoes',
    _key: k(),
    titulo: 'Depoimentos em Destaque',
    descricao: 'Histórias que nos motivam a continuar',
  },
  {
    _type: 'paginaCartoes',
    _key: k(),
    titulo: 'Mais Depoimentos',
    descricao: 'Centenas de famílias satisfeitas',
  },
]

const TERMOS = [
  {
    _type: 'paginaHero',
    _key: k(),
    etiqueta: 'Termos e Condições',
    titulo: 'Termos de Uso',
    descricao: 'Última atualização: Janeiro de 2025',
  },
  {_type: 'paginaTextoLongo', _key: k(), titulo: 'Termos de Uso'},
]

const PRIVACIDADE = [
  {
    _type: 'paginaHero',
    _key: k(),
    titulo: 'Política de Privacidade',
    descricao: 'Segurança e transparência no tratamento dos seus dados',
  },
  {_type: 'paginaTextoLongo', _key: k(), titulo: 'Política de Privacidade'},
]

const FAQ = [
  {
    _type: 'paginaHero',
    _key: k(),
    etiqueta: 'Central de Ajuda',
    titulo: 'Perguntas Frequentes',
    descricao:
      'Encontre respostas para as principais dúvidas sobre nossos serviços',
  },
]

const BLOG = [
  {
    _type: 'paginaHero',
    _key: k(),
    etiqueta: 'Residencial Geriátrico e Hospedagem Assistida',
    titulo: 'Blog Novo Lar',
    descricao:
      'Dicas, cuidados e informações especializadas sobre geriatria e bem-estar na terceira idade',
  },
]

const PAGINAS = [
  {path: '/', id: 'page-home', blocos: HOME},
  {path: '/sobre', id: 'page-sobre', blocos: SOBRE},
  {path: '/sobre/estrutura', id: 'page-sobre-estrutura', blocos: ESTRUTURA},
  {path: '/servicos', id: 'page-servicos', blocos: SERVICOS},


  {path: '/contato', id: 'page-contato', blocos: CONTATO},
  {path: '/sobre/a-novo-lar', id: 'page-sobre-a-novo-lar', blocos: A_NOVO_LAR},
  {path: '/sobre/equipe', id: 'page-sobre-equipe', blocos: EQUIPE},
  {path: '/sobre/localizacao', id: 'page-sobre-localizacao', blocos: LOCALIZACAO},
  {path: '/sobre/fotos', id: 'page-sobre-fotos', blocos: FOTOS},
  {path: '/sobre/atividades', id: 'page-sobre-atividades', blocos: ATIVIDADES},
  {path: '/depoimentos', id: 'page-depoimentos', blocos: DEPOIMENTOS},
  {path: '/termos-de-uso', id: 'page-termos-de-uso', blocos: TERMOS},
  {
    path: '/politica-de-privacidade',
    id: 'page-politica-de-privacidade',
    blocos: PRIVACIDADE,
  },
  {
    path: '/perguntas-frequentes',
    id: 'page-perguntas-frequentes',
    titulo: 'Perguntas frequentes',
    blocos: FAQ,
  },
  {path: '/blog', id: 'page-blog', blocos: BLOG},
]

// ── execucao ─────────────────────────────────────────────────────
const alvos = filtro ? PAGINAS.filter((p) => p.path === filtro) : PAGINAS

if (alvos.length === 0) {
  console.error(`Nenhuma pagina cadastrada para "${filtro}".`)
  process.exit(1)
}

// `createIfNotExists` antes do `patch`: assim funciona tanto para paginas que
// ja existem no Studio quanto para as que ainda nao foram criadas.
const mutations = alvos.flatMap((pagina) => [
  {
    createIfNotExists: {
      _id: pagina.id,
      _type: 'page',
      title: pagina.titulo || pagina.path,
      path: pagina.path,
      published: true,
    },
  },
  {
    patch: {
      id: pagina.id,
      set: {blocos: pagina.blocos},
    },
  },
])

for (const pagina of alvos) {
  console.log(`${pagina.path} (${pagina.id}) -> ${pagina.blocos.length} blocos`)
  for (const bloco of pagina.blocos) {
    console.log(`   · ${bloco._type}${bloco.titulo ? ` — ${bloco.titulo}` : ''}`)
  }
}

if (dry) {
  console.log('\n--dry: nada foi escrito.')
  process.exit(0)
}

const url = `https://${projectId}.api.sanity.io/v${apiVersion}/data/mutate/${dataset}?returnIds=true`
const resposta = await fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  },
  body: JSON.stringify({mutations}),
})

const corpo = await resposta.json()

if (!resposta.ok) {
  console.error('\nFalhou:', JSON.stringify(corpo, null, 2))
  process.exit(1)
}

console.log('\nOK —', JSON.stringify(corpo.results ?? corpo))

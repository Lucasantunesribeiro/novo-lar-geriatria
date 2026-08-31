export type BlogContentBlock = {
  type: 'heading' | 'paragraph'
  text: string
}

export type BlogPost = {
  slug: string
  title: string
  category: string
  excerpt: string
  excerptHtml: string
  date: string
  author: string
  readTime: string
  featured: boolean
  image: {
    src: string
    alt: string
  }
  content: BlogContentBlock[]
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'cuidados-inverno',
    title: 'Cuidados Essenciais com Idosos no Inverno',
    category: 'Saúde',
    excerpt:
      'O inverno exige monitoramento constante da saúde do idoso, garantindo ambientes aquecidos, hidratação adequada e imunização em dia.',
    excerptHtml:
      'O inverno exige <strong>monitoramento constante da saúde do idoso</strong>, garantindo ambientes aquecidos, <strong>hidratação adequada</strong> e <strong>imunização em dia</strong>.',
    date: '2025-01-20',
    author: 'Dra. Maria Santos',
    readTime: '5 min',
    featured: true,
    image: {
      src: '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/6.jpeg',
      alt: 'Ambiente acolhedor e aquecido do Novo Lar Geriatria no inverno',
    },
    content: [
      {
        type: 'paragraph',
        text: 'O inverno pode intensificar desafios para a terceira idade. É essencial manter o <strong>ambiente entre 20°C e 22°C</strong> e evitar choques térmicos que debilitam a imunidade.',
      },
      {
        type: 'heading',
        text: 'Hidratação e Rotina Alimentar',
      },
      {
        type: 'paragraph',
        text: 'Mesmo com temperaturas baixas, a <strong>hidratação diária</strong> não deve ser negligenciada. Invista em chás, caldos ricos em nutrientes e acompanhamento nutricional.',
      },
      {
        type: 'heading',
        text: 'Vacinação e Mobilidade',
      },
      {
        type: 'paragraph',
        text: 'Manter a carteira vacinal atualizada e incentivar <strong>exercícios leves em ambientes seguros</strong> reduz riscos respiratórios e preserva a autonomia.',
      },
      {
        type: 'paragraph',
        text: 'Na Novo Lar Geriatria monitoramos sinais vitais, personalizamos cardápios e oferecemos suporte 24h para atravessar o inverno com conforto.',
      },
    ],
  },
  {
    slug: 'alimentacao-saudavel',
    title: 'Alimentação Saudável para a Terceira Idade',
    category: 'Nutrição',
    excerpt:
      'Planos alimentares individualizados, com supervisão constante, garantem energia, imunidade e prazer à mesa para cada residente.',
    excerptHtml:
      'Planos alimentares <strong>individualizados</strong>, com <strong>supervisão constante</strong>, garantem energia, imunidade e prazer à mesa para cada residente.',
    date: '2025-01-15',
    author: 'Nutricionista Ana Costa',
    readTime: '6 min',
    featured: true,
    image: {
      src: '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/10.jpeg',
      alt: 'Refeição balanceada servida em mesa posta para idosos',
    },
    content: [
      {
        type: 'paragraph',
        text: 'Uma <strong>nutrição geriátrica bem estruturada</strong> preserva imunidade, disposição e recuperação clínica. Avaliações frequentes identificam carências e ajustes necessários.',
      },
      {
        type: 'heading',
        text: 'Frequência e Variedade',
      },
      {
        type: 'paragraph',
        text: 'Oferecemos <strong>seis refeições equilibradas</strong> por dia, com texturas adaptadas, controle de sódio e monitoramento de glicemia para cada perfil.',
      },
      {
        type: 'heading',
        text: 'Dietas Especiais',
      },
      {
        type: 'paragraph',
        text: 'Dietas para <strong>diabetes, disfagia, hipertensão e restrições alimentares</strong> são supervisionadas por nutricionistas especializados em geriatria.',
      },
      {
        type: 'paragraph',
        text: 'Na Novo Lar Geriatria, alimentação significa segurança clínica, acolhimento e prazer em cada refeição compartilhada.',
      },
    ],
  },
  {
    slug: 'exercicios-fisicos',
    title: 'Importância dos Exercícios Físicos na Terceira Idade',
    category: 'Atividades',
    excerpt:
      'Rotinas de exercícios monitoradas fortalecem músculos, equilíbrio e autoestima, prevenindo quedas e isolamento social.',
    excerptHtml:
      'Rotinas de exercícios monitoradas <strong>fortalecem músculos, equilíbrio e autoestima</strong>, prevenindo quedas e isolamento social.',
    date: '2025-01-10',
    author: 'Fisioterapeuta Carlos Silva',
    readTime: '5 min',
    featured: false,
    image: {
      src: '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/8.jpeg',
      alt: 'Grupo de idosos realizando alongamentos com suporte profissional',
    },
    content: [
      {
        type: 'paragraph',
        text: 'A prática regular de <strong>exercícios acompanhados</strong> favorece a circulação, preserva a massa muscular e mantém a autonomia funcional.',
      },
      {
        type: 'heading',
        text: 'Atividades Personalizadas',
      },
      {
        type: 'paragraph',
        text: 'Planos incluem <strong>fisioterapia individual, exercícios respiratórios</strong> e caminhadas assistidas, sempre adaptadas à avaliação clínica.',
      },
      {
        type: 'heading',
        text: 'Benefícios Emocionais',
      },
      {
        type: 'paragraph',
        text: 'Movimentar-se em grupo reduz a ansiedade, fortalece vínculos e estimula o senso de pertencimento.',
      },
      {
        type: 'paragraph',
        text: 'As unidades Novo Lar oferecem espaços seguros, equipamentos adequados e profissionais presentes em todas as sessões.',
      },
    ],
  },
  {
    slug: 'saude-mental',
    title: 'Saúde Mental: Cuidando do Emocional',
    category: 'Psicologia',
    excerpt:
      'O cuidado emocional constante previne depressão, ansiedade e fortalece laços familiares durante o envelhecimento.',
    excerptHtml:
      'O cuidado emocional constante <strong>previne depressão, ansiedade</strong> e fortalece laços familiares durante o envelhecimento.',
    date: '2025-01-05',
    author: 'Psicóloga Patricia Lima',
    readTime: '7 min',
    featured: false,
    image: {
      src: '/fotos-sobre/Passos de Areia - R. Brg. Oliveira Neri, 175/5.jpeg',
      alt: 'Espaço de convivência acolhedor da unidade Passo da Areia',
    },
    content: [
      {
        type: 'paragraph',
        text: 'Envelhecer com bem-estar passa por <strong>acolhimento emocional contínuo</strong>, presença de psicólogos e atividades que valorizem histórias de vida.',
      },
      {
        type: 'heading',
        text: 'Estimulação Cognitiva',
      },
      {
        type: 'paragraph',
        text: 'Rotinas com <strong>grupos de conversa, musicoterapia e oficinas de memória</strong> minimizam isolamento e estimulam autoestima.',
      },
      {
        type: 'heading',
        text: 'Rede de Apoio',
      },
      {
        type: 'paragraph',
        text: 'Acompanhamos familiares, compartilhamos evoluções e orientamos estratégias para fortalecer vínculos no dia a dia.',
      },
      {
        type: 'paragraph',
        text: 'Nosso compromisso é garantir experiência acolhedora que respeite emoções, valores e individualidade de cada residente.',
      },
    ],
  },
  {
    slug: 'escolher-clinica',
    title: 'Como Escolher uma Clínica Geriátrica',
    category: 'Orientações',
    excerpt:
      'Avalie estrutura, protocolos clínicos, equipe multidisciplinar e proximidade para eleger o lar ideal para sua família.',
    excerptHtml:
      'Avalie <strong>estrutura, protocolos clínicos, equipe multidisciplinar</strong> e proximidade para eleger o lar ideal para sua família.',
    date: '2024-12-28',
    author: 'Equipe Novo Lar',
    readTime: '8 min',
    featured: false,
    image: {
      src: '/fotos-sobre/Moinhos de Vento -R. Barão de Santo Ângelo, 406/3.jpeg',
      alt: 'Área interna da unidade Novo Lar Barão de Santo Ângelo, Porto Alegre',
    },
    content: [
      {
        type: 'paragraph',
        text: 'A decisão envolve visitar espaços, compreender protocolos de segurança e validar referências de outras famílias.',
      },
      {
        type: 'heading',
        text: 'Critérios Essenciais',
      },
      {
        type: 'paragraph',
        text: 'Observe <strong>equipes com profissionais 24h, estrutura acessível</strong>, planos de cuidado personalizados e comunicação transparente.',
      },
      {
        type: 'heading',
        text: 'Visitas Guiadas',
      },
      {
        type: 'paragraph',
        text: 'Durante a visita, questione rotina de higiene, administração de medicamentos e planejamento alimentar.',
      },
      {
        type: 'paragraph',
        text: 'Na Novo Lar oferecemos visitas guiadas e avaliação gratuita para entender qual unidade atende melhor sua família.',
      },
    ],
  },
  {
    slug: 'atividades-cognitivas',
    title: 'Atividades Cognitivas para Estimular a Mente',
    category: 'Atividades',
    excerpt:
      'Jogos, artes e tecnologia assistiva preservam memória, atenção e alegria ao estimular conexões neurais diariamente.',
    excerptHtml:
      'Jogos, artes e tecnologia assistiva preservam <strong>memória, atenção e alegria</strong> ao estimular conexões neurais diariamente.',
    date: '2024-12-20',
    author: 'Terapeuta Ocupacional João Oliveira',
    readTime: '6 min',
    featured: false,
    image: {
      src: '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/5.jpeg',
      alt: 'Idosos em atividade cognitiva com jogos de memória',
    },
    content: [
      {
        type: 'paragraph',
        text: 'Estimular a mente diariamente promove <strong>plasticidade cerebral</strong> e previne o declínio cognitivo.',
      },
      {
        type: 'heading',
        text: 'Programação Variada',
      },
      {
        type: 'paragraph',
        text: 'Incluímos oficinas de artes, leitura guiada, jogos digitais e técnicas de reminiscência com suporte de terapeutas.',
      },
      {
        type: 'heading',
        text: 'Resultados Monitorados',
      },
      {
        type: 'paragraph',
        text: 'Relatórios periódicos mostram evolução de atenção, humor e independência nas atividades cotidianas.',
      },
      {
        type: 'paragraph',
        text: 'Nosso foco é transformar cada sessão em um momento de sucesso, autoestima e conexão afetiva.',
      },
    ],
  },

  // ── EXPANSÃO ONDA 1 — 10 posts high-intent ─────────────────────────────────
  {
    slug: 'quando-procurar-uma-ilpi',
    title: 'Quando Procurar uma ILPI para um Familiar Idoso?',
    category: 'Orientações',
    excerpt: 'Reconhecer os sinais certos de que chegou a hora de buscar uma ILPI é um ato de responsabilidade e amor — não de abandono.',
    excerptHtml: 'Reconhecer os sinais certos de que chegou a hora de buscar uma ILPI é um <strong>ato de responsabilidade e amor</strong> — não de abandono.',
    date: '2026-02-10',
    author: 'Equipe Novo Lar',
    readTime: '7 min',
    featured: false,
    image: {
      src: '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/2.jpeg',
      alt: 'Equipe de cuidados prestando atenção individualizada a residente',
    },
    content: [
      { type: 'paragraph', text: 'A decisão de buscar uma ILPI costuma chegar cercada de culpa. Mas ela é, na maioria dos casos, a mais cuidadosa que uma família pode tomar.' },
      { type: 'heading', text: 'Sinais de que o cuidado em casa não é mais seguro' },
      { type: 'paragraph', text: 'Quedas frequentes, desorientação noturna, perda de controle esfincteriano, dificuldade de alimentação e isolamento social severo são alertas concretos.' },
      { type: 'heading', text: 'Quando o cuidador familiar também adoece' },
      { type: 'paragraph', text: '<strong>Esgotamento do cuidador</strong> é uma das principais causas de internação de emergência em idosos. Cuidar bem do familiar exige cuidar de si também.' },
      { type: 'heading', text: 'O papel da equipe multidisciplinar' },
      { type: 'paragraph', text: 'Uma ILPI de qualidade oferece o que nenhum cuidador isolado consegue: médico geriatra, enfermagem, fisioterapia, nutrição e psicologia integrados em um único cuidado.' },
      { type: 'paragraph', text: 'Na Novo Lar Geriatria, fazemos uma avaliação inicial gratuita para ajudar a família a entender o momento certo da transição.' },
    ],
  },
  {
    slug: 'sinais-de-que-o-idoso-precisa-de-cuidados-24h',
    title: 'Sinais de que o Idoso Precisa de Cuidados 24h',
    category: 'Saúde',
    excerpt: 'Alguns comportamentos do idoso indicam que o cuidado esporádico ou parcial não é mais suficiente. Reconhecer esses sinais é urgente.',
    excerptHtml: 'Alguns comportamentos indicam que o <strong>cuidado parcial não é mais suficiente</strong>. Reconhecer esses sinais é urgente.',
    date: '2026-02-05',
    author: 'Equipe Novo Lar',
    readTime: '6 min',
    featured: false,
    image: {
      src: '/fotos-sobre/Passos de Areia - R. Brg. Oliveira Neri, 175/7.jpeg',
      alt: 'Enfermagem realizando monitoramento de residente na unidade Passo da Areia',
    },
    content: [
      { type: 'paragraph', text: 'Nem sempre a necessidade de cuidados 24h surge de forma dramática. Muitas vezes ela se instala gradualmente, e a família vai adaptando a rotina sem perceber o risco acumulado.' },
      { type: 'heading', text: 'Sinais físicos mais comuns' },
      { type: 'paragraph', text: '<strong>Quedas recorrentes, perda de peso involuntária, dificuldade de deglutição</strong> e feridas que não cicatrizam são sinais de que o idoso precisa de monitoramento constante.' },
      { type: 'heading', text: 'Sinais cognitivos e comportamentais' },
      { type: 'paragraph', text: 'Desorientação noturna, episódios de agressividade, confusão com medicamentos e incapacidade de realizar as atividades básicas de vida diária indicam grau elevado de dependência.' },
      { type: 'heading', text: 'O que muda com o cuidado 24h especializado' },
      { type: 'paragraph', text: 'Na Novo Lar, cada residente tem um plano de cuidados individualizado, com monitoramento contínuo e equipe presente em todos os turnos para responder a qualquer intercorrência.' },
    ],
  },
  {
    slug: 'diferenca-entre-ilpi-casa-de-repouso-e-residencial-geriatrico',
    title: 'ILPI, Casa de Repouso e Residencial Geriátrico: Qual a Diferença?',
    category: 'Orientações',
    excerpt: 'Esses três termos são usados muitas vezes como sinônimos, mas há diferenças importantes que afetam a qualidade do cuidado oferecido.',
    excerptHtml: 'Esses três termos são usados como sinônimos, mas há <strong>diferenças importantes que afetam a qualidade do cuidado</strong>.',
    date: '2026-01-28',
    author: 'Equipe Novo Lar',
    readTime: '8 min',
    featured: false,
    image: {
      src: '/fotos-sobre/Moinhos de Vento -R. Barão de Santo Ângelo, 406/6.jpeg',
      alt: 'Estrutura interna da unidade Novo Lar Moinhos de Vento',
    },
    content: [
      { type: 'paragraph', text: 'Para quem está pesquisando opções de cuidado para um familiar idoso, a terminologia pode ser confusa. Entender as diferenças ajuda a fazer uma escolha mais informada.' },
      { type: 'heading', text: 'O que é uma ILPI?' },
      { type: 'paragraph', text: '<strong>ILPI significa Instituição de Longa Permanência para Idosos</strong> — é o termo técnico e legal regulado pela ANVISA (RDC 502/2021). Toda casa de repouso ou residencial geriátrico sério deveria operar como ILPI.' },
      { type: 'heading', text: 'Casa de Repouso' },
      { type: 'paragraph', text: '"Casa de repouso" é o termo popular. Pode ou não ser uma ILPI regulamentada. Ao escolher, verifique se o estabelecimento possui alvará sanitário e registro no CNAS.' },
      { type: 'heading', text: 'Residencial Geriátrico' },
      { type: 'paragraph', text: '"Residencial geriátrico" geralmente indica um estabelecimento com foco mais clínico e equipe especializada em geriatria — médico geriatra, enfermagem especializada e fisioterapia geriátrica.' },
      { type: 'paragraph', text: 'A Novo Lar Geriatria opera como ILPI regulamentada com estrutura de residencial geriátrico: equipe clínica completa, atividades terapêuticas e personalização do cuidado.' },
    ],
  },
  {
    slug: 'como-escolher-casa-de-repouso-em-porto-alegre',
    title: 'Como Escolher uma Casa de Repouso em Porto Alegre',
    category: 'Orientações',
    excerpt: 'Uma visita bem preparada e os critérios certos de avaliação fazem toda a diferença na hora de escolher onde seu familiar vai viver.',
    excerptHtml: 'Uma <strong>visita bem preparada</strong> e os critérios certos de avaliação fazem toda a diferença na escolha certa.',
    date: '2026-01-20',
    author: 'Equipe Novo Lar',
    readTime: '9 min',
    featured: false,
    image: {
      src: '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/13.jpeg',
      alt: 'Corredor e ambientes internos da unidade Luciana de Abreu do Novo Lar',
    },
    content: [
      { type: 'paragraph', text: 'Escolher uma casa de repouso em Porto Alegre exige mais do que uma pesquisa no Google. Visitar pessoalmente, fazer as perguntas certas e observar o ambiente são etapas insubstituíveis.' },
      { type: 'heading', text: '1. Regularização e alvará sanitário' },
      { type: 'paragraph', text: 'Verifique se o estabelecimento possui <strong>alvará sanitário atualizado</strong> e registro no CNAS (Conselho Nacional de Assistência Social). Sem isso, funciona na informalidade.' },
      { type: 'heading', text: '2. Equipe e turnos de trabalho' },
      { type: 'paragraph', text: 'Pergunte sobre <strong>plantão de enfermagem 24h, presença de médico geriatra</strong> e frequência de visitas de fisioterapeuta, nutricionista e psicólogo.' },
      { type: 'heading', text: '3. Plano de cuidados individualizado' },
      { type: 'paragraph', text: 'Cada residente deve ter um plano próprio. Desconfie de instituições que oferecem apenas cuidado genérico, sem avaliação inicial e metas individuais.' },
      { type: 'heading', text: '4. Política de visitas' },
      { type: 'paragraph', text: 'Visitas livres são sinal de transparência. Estabelecimentos que restringem visitas sem justificativa clínica merecem atenção.' },
      { type: 'paragraph', text: 'Na Novo Lar Geriatria, oferecemos visita guiada gratuita e avaliação inicial sem compromisso. Você pode conhecer o espaço, a equipe e a rotina antes de qualquer decisão.' },
    ],
  },
  {
    slug: 'alzheimer-quando-a-familia-nao-consegue-cuidar-sozinha',
    title: 'Alzheimer: Quando a Família Não Consegue Mais Cuidar Sozinha',
    category: 'Saúde',
    excerpt: 'Cuidar de um familiar com Alzheimer em casa é possível por um tempo. Mas há uma linha tênue entre dedicação e risco real para o idoso e para o cuidador.',
    excerptHtml: 'Há uma linha tênue entre <strong>dedicação e risco real</strong> para o idoso e para o cuidador familiar.',
    date: '2026-01-15',
    author: 'Equipe Novo Lar',
    readTime: '8 min',
    featured: false,
    image: {
      src: '/fotos-sobre/Passos de Areia - R. Brg. Oliveira Neri, 175/3.jpeg',
      alt: 'Cuidadora prestando atenção personalizada a residente com Alzheimer',
    },
    content: [
      { type: 'paragraph', text: 'O Alzheimer avança em estágios. No início, o cuidado domiciliar é viável. Com a progressão, as demandas aumentam em uma velocidade que nenhuma família consegue acompanhar sozinha sem suporte profissional.' },
      { type: 'heading', text: 'Fases que exigem atenção' },
      { type: 'paragraph', text: 'Deambulação noturna, agressividade, incontinência dupla e incapacidade de se alimentar sozinho marcam a transição para uma fase que exige equipe especializada em tempo integral.' },
      { type: 'heading', text: 'O peso invisível do cuidador familiar' },
      { type: 'paragraph', text: '<strong>Burnout do cuidador</strong> é reconhecido pela medicina como síndrome. Privação de sono, isolamento e abandono da própria saúde comprometem quem cuida — e indiretamente, quem é cuidado.' },
      { type: 'heading', text: 'O que uma ILPI especializada oferece' },
      { type: 'paragraph', text: 'Equipe treinada para Alzheimer, ambiente seguro com saídas monitoradas, estimulação cognitiva estruturada e comunicação regular com a família — a ILPI não substitui o amor da família, mas protege o familiar.' },
      { type: 'paragraph', text: 'Na Novo Lar, a equipe é treinada especificamente para as diferentes fases do Alzheimer e adapta o cuidado conforme a progressão de cada residente.' },
    ],
  },
  {
    slug: 'demencia-senil-cuidados-e-sinais-de-alerta',
    title: 'Demência Senil: Cuidados e Sinais de Alerta',
    category: 'Saúde',
    excerpt: 'Demência senil não é parte normal do envelhecimento — é uma condição que exige diagnóstico precoce e cuidado especializado contínuo.',
    excerptHtml: 'Demência senil <strong>não é parte normal do envelhecimento</strong> — exige diagnóstico precoce e cuidado especializado.',
    date: '2026-01-08',
    author: 'Equipe Novo Lar',
    readTime: '7 min',
    featured: false,
    image: {
      src: '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/3.jpeg',
      alt: 'Ambiente seguro e estruturado para idosos com demência no Novo Lar',
    },
    content: [
      { type: 'paragraph', text: 'Esquecer onde colocou as chaves é diferente de esquecer o nome dos filhos. Saber distinguir o envelhecimento normal da demência é o primeiro passo para buscar ajuda no momento certo.' },
      { type: 'heading', text: 'Tipos de demência mais comuns em idosos' },
      { type: 'paragraph', text: '<strong>Alzheimer, demência vascular, demência com corpos de Lewy e demência frontotemporal</strong> têm características distintas, mas todas exigem cuidado especializado e ambiente adaptado.' },
      { type: 'heading', text: 'Sinais de alerta que merecem avaliação médica' },
      { type: 'paragraph', text: 'Perda de memória que interfere na vida diária, dificuldade com tarefas conhecidas, desorientação de tempo e espaço, mudanças de humor e retraimento social devem ser investigados.' },
      { type: 'heading', text: 'Como a Novo Lar cuida de idosos com demência' },
      { type: 'paragraph', text: 'Rotina estruturada, ambiente seguro, estimulação cognitiva adaptada ao estágio e comunicação ativa com a família são pilares do nosso cuidado para residentes com demência.' },
    ],
  },
  {
    slug: 'parkinson-em-idosos-cuidados-diarios',
    title: 'Parkinson em Idosos: Cuidados do Dia a Dia',
    category: 'Saúde',
    excerpt: 'O Parkinson exige adaptações constantes na rotina do idoso. Fisioterapia, fonoaudiologia e ambiente seguro fazem diferença real na qualidade de vida.',
    excerptHtml: 'O Parkinson exige <strong>adaptações constantes na rotina</strong>. Fisioterapia e ambiente seguro fazem diferença real.',
    date: '2026-01-02',
    author: 'Equipe Novo Lar',
    readTime: '7 min',
    featured: false,
    image: {
      src: '/fotos-sobre/Moinhos de Vento -R. Barão de Santo Ângelo, 406/4.jpeg',
      alt: 'Espaço adaptado para mobilidade e fisioterapia na unidade Barão de Santo Ângelo',
    },
    content: [
      { type: 'paragraph', text: 'O Parkinson é uma doença neurodegenerativa que afeta o movimento, o equilíbrio e, ao longo do tempo, a deglutição e a fala. O cuidado especializado reduz complicações e preserva qualidade de vida.' },
      { type: 'heading', text: 'Fisioterapia: o pilar central' },
      { type: 'paragraph', text: '<strong>Fisioterapia diária</strong>, com foco em marcha, equilíbrio e treino de força, é fundamental para retardar a progressão da dependência motora no Parkinson.' },
      { type: 'heading', text: 'Fonoaudiologia e deglutição' },
      { type: 'paragraph', text: 'A <strong>disfagia</strong> (dificuldade de engolir) é uma complicação frequente no Parkinson avançado. Acompanhamento fonoaudiológico previne pneumonias aspirativas e adapta texturas alimentares.' },
      { type: 'heading', text: 'Ambiente e prevenção de quedas' },
      { type: 'paragraph', text: 'Pisos antiderrapantes, barras de apoio, iluminação adequada e ausência de obstáculos são essenciais. Quedas são a principal complicação que acelera a dependência no Parkinson.' },
      { type: 'paragraph', text: 'Na Novo Lar Geriatria, o plano de cuidados de cada residente com Parkinson inclui avaliação fisioterapêutica semanal, acompanhamento fonoaudiológico e ambiente totalmente adaptado.' },
    ],
  },
  {
    slug: 'cuidados-paliativos-idosos-como-funciona',
    title: 'Cuidados Paliativos para Idosos: Como Funciona na Prática',
    category: 'Saúde',
    excerpt: 'Cuidados paliativos não são sinônimo de desistência. São o compromisso de garantir conforto, dignidade e qualidade de vida até o fim.',
    excerptHtml: 'Cuidados paliativos não são sinônimo de desistência. São o <strong>compromisso com conforto e dignidade até o fim</strong>.',
    date: '2025-12-20',
    author: 'Equipe Novo Lar',
    readTime: '8 min',
    featured: false,
    image: {
      src: '/fotos-sobre/Passos de Areia - R. Brg. Oliveira Neri, 175/13.jpeg',
      alt: 'Quarto confortável e acolhedor para cuidados paliativos no Novo Lar',
    },
    content: [
      { type: 'paragraph', text: 'A palavra "paliativo" vem do latim pallium — manto, proteção. Cuidados paliativos são sobre envolver o idoso em conforto, segurança e presença amorosa na fase mais delicada da vida.' },
      { type: 'heading', text: 'O que são cuidados paliativos na prática?' },
      { type: 'paragraph', text: 'São cuidados voltados ao <strong>controle de sintomas</strong> (dor, dispneia, náusea), ao bem-estar emocional e espiritual do paciente e ao suporte ativo à família — não à cura.' },
      { type: 'heading', text: 'Quem precisa de cuidados paliativos?' },
      { type: 'paragraph', text: 'Idosos com doenças avançadas — câncer, insuficiência cardíaca grave, demência em estágio terminal ou outras condições degenerativas — se beneficiam de cuidados paliativos desde o diagnóstico.' },
      { type: 'heading', text: 'O papel da família' },
      { type: 'paragraph', text: 'A família é parte central dos cuidados paliativos. Orientação, presença, ritualização e suporte ao luto antecipado fazem parte do cuidado integral que a equipe Novo Lar oferece.' },
    ],
  },
  {
    slug: 'idoso-pos-avc-quais-cuidados-sao-necessarios',
    title: 'Idoso Pós-AVC: Quais Cuidados São Necessários?',
    category: 'Saúde',
    excerpt: 'O AVC pode mudar completamente a rotina do idoso e da família. A reabilitação precoce e o cuidado especializado contínuo são decisivos para a recuperação.',
    excerptHtml: 'A <strong>reabilitação precoce</strong> e o cuidado especializado contínuo são decisivos para a recuperação pós-AVC.',
    date: '2025-12-10',
    author: 'Equipe Novo Lar',
    readTime: '7 min',
    featured: false,
    image: {
      src: '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/14.jpeg',
      alt: 'Área de reabilitação e fisioterapia da unidade Luciana de Abreu',
    },
    content: [
      { type: 'paragraph', text: 'Após um AVC, o idoso pode apresentar sequelas que variam de leves alterações de memória até hemiplegia completa. O tipo de cuidado necessário depende da área do cérebro afetada e da extensão do evento.' },
      { type: 'heading', text: 'Reabilitação na fase aguda e subaguda' },
      { type: 'paragraph', text: '<strong>Fisioterapia neurológica, fonoaudiologia e terapia ocupacional</strong> devem começar o mais cedo possível após a alta hospitalar. A neuroplasticidade é maior nas primeiras semanas.' },
      { type: 'heading', text: 'Cuidados de enfermagem contínuos' },
      { type: 'paragraph', text: 'Posicionamento correto, prevenção de escaras, controle de medicações e monitoramento de sinais vitais são responsabilidades da equipe de enfermagem 24h no pós-AVC.' },
      { type: 'heading', text: 'Suporte à família na adaptação' },
      { type: 'paragraph', text: 'A família também precisa de suporte: orientações sobre comunicação com o idoso afásico, adaptações no lar (quando aplicável) e acompanhamento psicológico para lidar com o luto funcional.' },
      { type: 'paragraph', text: 'A Novo Lar Geriatria tem experiência consolidada no cuidado pós-AVC, com equipe treinada em reabilitação geriátrica e plano de cuidados ajustado à progressão de cada residente.' },
    ],
  },
  {
    slug: 'hospedagem-temporaria-para-idosos-como-funciona',
    title: 'Hospedagem Temporária para Idosos: Como Funciona?',
    category: 'Orientações',
    excerpt: 'A hospedagem temporária é uma solução segura para períodos específicos — viagens da família, pós-hospitalar ou descanso do cuidador. Saiba como funciona.',
    excerptHtml: 'A hospedagem temporária é solução segura para <strong>viagens, pós-hospitalar ou respiro do cuidador</strong>. Saiba como funciona.',
    date: '2025-11-28',
    author: 'Equipe Novo Lar',
    readTime: '6 min',
    featured: false,
    image: {
      src: '/fotos-sobre/Moinhos de Vento -R. Barão de Santo Ângelo, 406/1.jpeg',
      alt: 'Quarto privativo aconchegante da unidade Barão de Santo Ângelo para hospedagem',
    },
    content: [
      { type: 'paragraph', text: 'A hospedagem temporária permite que o idoso seja bem cuidado por um período determinado — dias, semanas ou meses — enquanto a família viaja, descansa ou se recupera do cuidado intensivo.' },
      { type: 'heading', text: 'Quando a hospedagem temporária faz sentido?' },
      { type: 'paragraph', text: 'Viagem de férias da família, pós-alta hospitalar sem suporte domiciliar suficiente, <strong>respiro do cuidador principal</strong> ou adaptação gradual ao ambiente de longa permanência.' },
      { type: 'heading', text: 'O que está incluso?' },
      { type: 'paragraph', text: 'Na Novo Lar, a hospedagem temporária inclui os mesmos cuidados da residência permanente: enfermagem 24h, alimentação, atividades, fisioterapia e acompanhamento médico quando necessário.' },
      { type: 'heading', text: 'Como funciona a adaptação?' },
      { type: 'paragraph', text: 'A equipe faz uma avaliação prévia do idoso, monta um plano de cuidados específico para o período e mantém comunicação regular com a família durante toda a estadia.' },
      { type: 'paragraph', text: 'Para saber sobre disponibilidade e valores da hospedagem temporária em nossas unidades, entre em contato com a equipe Novo Lar.' },
    ],
  },
]

export const FEATURED_BLOG_POSTS = BLOG_POSTS.filter((post) => post.featured)
export const REGULAR_BLOG_POSTS = BLOG_POSTS.filter((post) => !post.featured)

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug)
}

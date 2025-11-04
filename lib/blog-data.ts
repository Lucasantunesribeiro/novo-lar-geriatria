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
      src: '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/18.jpeg',
      alt: 'Idosa recebendo auxílio de cuidadora em ambiente aquecido',
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
      src: '/fotos-sobre/Passos de Areia - R. Brg. Oliveira Neri, 175/11.jpeg',
      alt: 'Psicóloga conversando com idosa em ambiente acolhedor',
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
      src: '/fotos-sobre/Moinhos de Vento - Rua Barão de Santo Ângelo, 406/19.jpeg',
      alt: 'Fachada iluminada de unidade geriátrica em Porto Alegre',
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
]

export const FEATURED_BLOG_POSTS = BLOG_POSTS.filter((post) => post.featured)
export const REGULAR_BLOG_POSTS = BLOG_POSTS.filter((post) => !post.featured)

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug)
}

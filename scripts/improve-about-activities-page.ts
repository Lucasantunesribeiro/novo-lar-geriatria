import './loadEnv'

import { writeClient } from '../lib/sanity/client'

if (!writeClient) {
  console.error('Sanity write client is not configured. Check SANITY_API_TOKEN and public project settings.')
  process.exit(1)
}

const client = writeClient

type PortableTextBlock = {
  _type: 'block'
  _key: string
  style: 'normal' | 'h2'
  children: Array<{ _type: 'span'; _key: string; text: string; marks: string[] }>
}

function toSlugValue(input: string) {
  return input
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

function block(text: string, key: string, style: 'normal' | 'h2' = 'normal'): PortableTextBlock {
  return {
    _type: 'block',
    _key: key,
    style,
    children: [
      {
        _type: 'span',
        _key: `${key}-span`,
        text,
        marks: [],
      },
    ],
  }
}

function richTextSection(title: string, paragraphs: string[]) {
  const key = toSlugValue(title)

  return {
    _key: `rich-${key}`,
    _type: 'richTextSection',
    title,
    alignment: 'left',
    body: paragraphs.map((paragraph, index) => block(paragraph, `${key}-${index}`)),
  }
}

const sections = [
  {
    _key: 'hero-atividades-terapia-ocupacional',
    _type: 'heroSection',
    variant: 'carousel',
    eyebrow: 'Rotina terapêutica e convivência assistida',
    title: 'Atividades que estimulam autonomia, cognição e vínculos',
    description:
      'A programação diária da Novo Lar combina terapia ocupacional, estímulos cognitivos, atividades sociais e momentos de convivência pensados para preservar funcionalidade, humor e qualidade de vida.',
    slides: [
      {
        _key: 'hero-slide-0',
        imagePath: '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/4.jpeg',
        alt: 'Atividade terapêutica em grupo na Novo Lar',
      },
      {
        _key: 'hero-slide-1',
        imagePath: '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/8.jpeg',
        alt: 'Exercício assistido para mobilidade e autonomia',
      },
    ],
    ctas: [
      {
        _key: 'hero-cta-0',
        label: 'Agendar visita',
        href: '/contato',
        variant: 'primary',
      },
      {
        _key: 'hero-cta-1',
        label: 'Conhecer unidades',
        href: '/#unidades',
        variant: 'secondary',
      },
    ],
  },
  richTextSection('Atividades não são passatempo. São parte do cuidado.', [
    'Na Novo Lar, as atividades terapêuticas não existem para apenas preencher o dia. Elas fazem parte do cuidado assistido e ajudam a preservar autonomia, participação, vínculos sociais e bem-estar emocional.',
    'Cada proposta é pensada considerando cognição, mobilidade, condição clínica e repertório pessoal do residente. O objetivo é estimular sem desrespeitar limites e manter a rotina mais significativa e acolhedora.',
  ]),
  richTextSection('Como a programação é adaptada a cada residente', [
    'Nem todos participam da mesma forma. A equipe ajusta ritmo, duração, nível de estímulo e tipo de atividade de acordo com o perfil funcional de cada pessoa, sempre buscando segurança e boa adesão.',
    'Entre as práticas mais frequentes estão musicoterapia, oficinas manuais, jogos cognitivos, rodas de conversa, exercícios leves supervisionados e momentos de convivência que reforçam pertencimento e reduzem ociosidade.',
  ]),
  {
    _key: 'gallery-momentos-da-rotina-assistida',
    _type: 'gallerySection',
    title: 'Momentos da rotina assistida',
    description:
      'Imagens de atividades que fazem parte do dia a dia dos residentes nas unidades Novo Lar.',
    layout: 'grid',
    images: [
      {
        _key: 'gallery-image-0',
        imagePath: '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/4.jpeg',
        alt: 'Atividade terapêutica em grupo',
      },
      {
        _key: 'gallery-image-1',
        imagePath: '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/5.jpeg',
        alt: 'Atividade manual com residente',
      },
      {
        _key: 'gallery-image-2',
        imagePath: '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/8.jpeg',
        alt: 'Exercício leve supervisionado',
      },
      {
        _key: 'gallery-image-3',
        imagePath: '/fotos-sobre/Moinhos de Vento - Rua Luciana de Abreu 151/11.jpeg',
        alt: 'Convivência social em ambiente acolhedor',
      },
      {
        _key: 'gallery-image-4',
        imagePath: '/fotos-sobre/Moinhos de Vento -R. Barão de Santo Ângelo, 406/3.jpeg',
        alt: 'Rotina terapêutica em grupo',
      },
      {
        _key: 'gallery-image-5',
        imagePath: '/fotos-sobre/Passos de Areia - R. Brg. Oliveira Neri, 175/1.jpeg',
        alt: 'Momento de convivência entre residentes',
      },
    ],
  },
  richTextSection('O que a família percebe na prática', [
    'Uma rotina terapêutica consistente ajuda o residente a participar mais do dia a dia, reduz apatia, favorece convivência e reforça a sensação de utilidade e pertencimento dentro da unidade.',
    'Para a família, isso significa acompanhar uma rotina mais viva, com momentos significativos além do cuidado clínico. A programação não substitui assistência médica, mas amplia a qualidade da experiência diária.',
  ]),
  {
    _key: 'cta-quer-entender-como-essa-rotina-se-encaixa',
    _type: 'ctaSection',
    title: 'Quer entender como essa rotina se encaixa no perfil do seu familiar?',
    description:
      'Agende uma visita e veja como a programação terapêutica se integra ao cuidado diário, ao acompanhamento clínico e à adaptação de cada residente.',
    style: 'gradient',
    ctas: [
      {
        _key: 'cta-item-0',
        label: 'Agendar visita',
        href: '/contato',
        variant: 'primary',
      },
      {
        _key: 'cta-item-1',
        label: 'Conhecer serviços',
        href: '/servicos',
        variant: 'secondary',
      },
    ],
  },
]

async function main() {
  const page = await client.fetch<{ _id: string } | null>(
    `*[_type == "page" && path == $path][0]{_id}`,
    { path: '/sobre/atividades' }
  )

  if (!page?._id) {
    throw new Error('Page not found for path "/sobre/atividades".')
  }

  await client
    .patch(page._id)
    .set({
      title: 'Atividades e Terapia Ocupacional',
      lastReviewedAt: new Date().toISOString(),
      seo: {
        title: 'Atividades e Terapia Ocupacional para Idosos | Novo Lar Geriatria',
        description:
          'Entenda como a rotina terapêutica da Novo Lar combina terapia ocupacional, estímulo cognitivo, socialização e atividades adaptadas para preservar autonomia e bem-estar dos residentes.',
      },
      sections,
    })
    .commit()

  console.log('Updated Sanity page: /sobre/atividades')
}

main().catch((error) => {
  console.error('Failed to improve /sobre/atividades.', error)
  process.exit(1)
})

import './loadEnv'

import { writeClient } from '../lib/sanity/client'

if (!writeClient) {
  console.error('Sanity write client is not configured. Check SANITY_API_TOKEN and public project settings.')
  process.exit(1)
}

type Section = {
  _key?: string
  _type: string
  [key: string]: unknown
}

type PageDocument = {
  _id: string
  path: string
  sections: Section[]
}

const client = writeClient

function withSectionUpdate(
  sections: Section[],
  type: string,
  fields: Record<string, unknown>
): Section[] {
  let updated = false

  const nextSections = sections.map((section) => {
    if (updated || section._type !== type) {
      return section
    }

    updated = true

    const nextSection: Section = {
      ...section,
    }

    for (const [key, value] of Object.entries(fields)) {
      if (typeof value === 'undefined') {
        delete nextSection[key]
        continue
      }

      nextSection[key] = value
    }

    return nextSection
  })

  if (!updated) {
    throw new Error(`Section of type "${type}" not found.`)
  }

  return nextSections
}

async function getPageByPath(path: string) {
  const page = await client.fetch<PageDocument | null>(
    `*[_type == "page" && path == $path][0]{_id, path, sections}`,
    { path }
  )

  if (!page) {
    throw new Error(`Page not found for path "${path}".`)
  }

  return page
}

async function updatePage(path: string, updater: (sections: Section[]) => Section[]) {
  const page = await getPageByPath(path)
  const nextSections = updater(page.sections || [])

  await client.patch(page._id).set({ sections: nextSections }).commit()
  console.log(`Updated page copy: ${path}`)
}

async function syncLegacyPageCopy() {
  await updatePage('/', (sections) => {
    let next = withSectionUpdate(sections, 'heroSection', {
      eyebrow: '+30 anos sendo referência em cuidado humanizado',
      title: 'Um lar seguro, humano e acolhedor para quem você mais ama',
      description:
        'Cuidamos de idosos com diferentes graus de dependência, oferecendo atenção individual, equipe multidisciplinar 24 horas e ambientes preparados para promover bem-estar, segurança e tranquilidade às famílias.',
      ctas: [
        {
          _key: 'hero-cta-0',
          label: 'Fale Conosco',
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
      stats: [
        {
          _key: 'hero-stat-0',
          description: '+30 anos de experiência em cuidado geriátrico',
        },
        {
          _key: 'hero-stat-1',
          description: 'Unidades em bairros nobres de Porto Alegre',
        },
        {
          _key: 'hero-stat-2',
          description: 'Equipe multidisciplinar 24 horas por dia',
        },
      ],
    })

    next = withSectionUpdate(next, 'unitsSection', {
      title: 'Nossas Unidades',
      description:
        'Unidades estrategicamente localizadas em Porto Alegre, pensadas para facilitar o acesso da família e oferecer ambientes tranquilos, seguros e acolhedores. Cada unidade possui características próprias, mas todas seguem o mesmo padrão de cuidado, qualidade e atenção individual.',
    })

    next = withSectionUpdate(next, 'servicesSection', {
      title: 'Nossos Serviços',
      description: 'Cuidado integral e personalizado para cada fase da vida.',
    })

    next = withSectionUpdate(next, 'blogPostsSection', {
      title: 'Conteúdos e Orientações',
      description:
        'Artigos e dicas para ajudar a família a cuidar melhor de quem mais importa.',
    })

    next = withSectionUpdate(next, 'testimonialsSection', {
      title: 'O que dizem as famílias',
      description: '',
    })

    next = withSectionUpdate(next, 'ctaSection', {
      title:
        'Estamos prontos para ajudar sua família a decidir com segurança, sem pressa e com contexto real.',
      description:
        'Este bloco fecha a home conectando contato imediato, visita presencial e páginas de apoio para quem ainda está comparando opções.',
    })

    return next
  })

  await updatePage('/sobre', (sections) => {
    let next = withSectionUpdate(sections, 'heroSection', {
      eyebrow: 'SOBRE NÓS',
      title: 'Gestão profissional a serviço do cuidado',
      description:
        'Por trás do cuidado humanizado da Novo Lar existe uma gestão administrativa sólida, ética e profissional, responsável por garantir que cada detalhe funcione com excelência. A administração é conduzida por especialistas com formação em saúde, gestão e finanças, unindo conhecimento técnico, visão estratégica e experiência no setor da saúde. Essa estrutura de gestão permite que a Novo Lar atue com organização, transparência e responsabilidade, assegurando estabilidade operacional e criando um ambiente seguro tanto para os residentes quanto para suas famílias.',
    })

    next = withSectionUpdate(next, 'ctaSection', {
      title: 'Conheça a Novo Lar de perto.',
      description:
        'Depois de entender nossa história, o próximo passo é conhecer a estrutura real, conversar com a equipe e validar se a rotina faz sentido para sua família.',
    })

    return next
  })

  await updatePage('/sobre/estrutura', (sections) => {
    let next = withSectionUpdate(sections, 'heroSection', {
      eyebrow: 'Hospedagem assistida em Porto Alegre',
      title: 'Estrutura completa para cuidar com segurança, conforto e tranquilidade',
      description:
        'Conheça os ambientes e a organização da Novo Lar, planejados para oferecer segurança, acessibilidade e acolhimento em todas as fases do envelhecimento. Aqui, a estrutura faz parte do cuidado, promovendo bem-estar ao residente e tranquilidade à família todos os dias.',
    })

    next = withSectionUpdate(next, 'ctaSection', {
      title: 'Pronto para conhecer a Novo Lar pessoalmente?',
      description:
        'Nossa equipe está disponível para apresentar cada unidade, compartilhar o plano de cuidados e orientar sua família na escolha ideal.',
      ctas: [
        {
          _key: 'cta-item-0',
          label: 'Conversar pelo WhatsApp',
          href: 'https://wa.me/555133467620',
          variant: 'primary',
        },
      ],
    })

    return next
  })

  await updatePage('/servicos', (sections) => {
    return withSectionUpdate(sections, 'heroSection', {
      title: 'Serviços especializados',
      description:
        'Atendimento multidisciplinar com protocolos exclusivos para promover segurança, autonomia e qualidade de vida.',
    })
  })

  await updatePage('/blog', (sections) => {
    return withSectionUpdate(sections, 'heroSection', {
      eyebrow: 'Residencial Geriátrico e Hospedagem Assistida',
      title: 'Blog Novo Lar',
      description:
        'Dicas, cuidados e informações especializadas sobre geriatria e bem-estar na terceira idade',
    })
  })

  await updatePage('/contato', (sections) => {
    return withSectionUpdate(sections, 'heroSection', {
      eyebrow: 'Residencial Geriátrico e Hospedagem Assistida em Porto Alegre - Novo Lar',
      title: 'Entre em Contato',
      description:
        'Estamos prontos para atendê-lo. Preencha o formulário abaixo ou entre em contato diretamente com uma de nossas unidades.',
    })
  })
}

async function main() {
  console.log('Syncing legacy-approved copy to Sanity...')
  await syncLegacyPageCopy()
  console.log('Legacy-approved copy synced successfully.')
}

main().catch((error) => {
  console.error('Failed to sync legacy-approved copy.', error)
  process.exit(1)
})

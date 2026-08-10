import {defineField, defineType} from 'sanity'

// Sem limite de caracteres aqui de proposito: os textos de SEO foram escritos
// pelo cliente e um aviso amarelo em 60 paginas so gera ruido, sem quebrar nada
// (o Google simplesmente corta o excedente).
const seoFields = [
  defineField({
    name: 'title',
    title: 'Título no Google',
    type: 'string',
    description: 'O texto azul que aparece no resultado de busca.',
  }),
  defineField({
    name: 'description',
    title: 'Descrição no Google',
    type: 'text',
    rows: 2,
    description: 'O textinho cinza embaixo do título no Google.',
  }),
  defineField({
    name: 'keywords',
    title: 'Palavras-chave',
    type: 'array',
    of: [{type: 'string'}],
    description: 'Opcional. Termos que descrevem a página.',
  }),
  defineField({
    name: 'ogImage',
    title: 'Imagem de compartilhamento',
    type: 'image',
    description: 'Imagem que aparece quando o link é enviado no WhatsApp ou redes sociais.',
    options: {hotspot: true},
  }),
]

export default defineType({
  name: 'page',
  title: 'Página',
  type: 'document',
  groups: [
    {name: 'conteudo', title: 'Conteúdo', default: true},
    {name: 'seo', title: 'Google e SEO'},
    {name: 'avancado', title: 'Avançado'},
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Nome da página',
      type: 'string',
      group: 'conteudo',
      description: 'Só para você se achar aqui no painel. Não aparece no site.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'path',
      title: 'Endereço da página (URL)',
      type: 'string',
      group: 'conteudo',
      description:
        'Comece com "/" e use letras minúsculas, sem acento e sem espaço. Ex.: /cuidados-diabetes. Depois de publicar, a página fica no ar em novolar.com.br + esse endereço.',
      validation: (Rule) =>
        Rule.required()
          .regex(/^\/(?!\/).*$/).error('O endereco deve comecar com /')
          .custom((value) => {
            if (value === '/') return true
            if (value?.endsWith('/') && value !== '/') return 'Remova a barra final'
            if (value && /[A-Z]/.test(value)) return 'Use apenas letras minusculas'
            if (value && /\s/.test(value)) return 'Nao use espacos — troque por hifen (-)'
            return true
          }),
    }),
    defineField({
      name: 'sections',
      title: 'Blocos da página',
      type: 'array',
      group: 'conteudo',
      description:
        'Monte a página como um Lego: clique em "Add item" para somar um bloco, arraste para trocar a ordem e use o "..." para apagar.',
      of: [
        {type: 'seoHeroSection'},
        {type: 'heroSection'},
        {type: 'richTextSection'},
        {type: 'featureCardsSection'},
        {type: 'checklistSection'},
        {type: 'twoColumnSection'},
        {type: 'statsSection'},
        {type: 'unitsSection'},
        {type: 'servicesSection'},
        {type: 'testimonialsSection'},
        {type: 'gallerySection'},
        {type: 'faqSection'},
        {type: 'blogPostsSection'},
        {type: 'locationNoticeSection'},
        {type: 'relatedLinksSection'},
        {type: 'contactSection'},
        {type: 'ctaSection'},
      ],
      validation: (Rule) => Rule.min(1).error('Adicione pelo menos um bloco'),
    }),
    defineField({
      name: 'published',
      title: 'Página no ar',
      type: 'boolean',
      group: 'conteudo',
      description: 'Desligue para tirar a página do site sem apagar o conteúdo.',
      initialValue: true,
    }),

    defineField({
      name: 'seo',
      title: 'Google e SEO',
      type: 'object',
      group: 'seo',
      options: {collapsible: false},
      fields: seoFields,
    }),
    defineField({
      name: 'indexable',
      title: 'Aparecer no Google',
      type: 'boolean',
      group: 'seo',
      description:
        'Desligue para manter a página no ar, mas fora do Google e do sitemap.',
      initialValue: true,
    }),

    defineField({
      name: 'serviceSchema',
      title: 'Ficha de serviço (opcional)',
      type: 'object',
      group: 'seo',
      description:
        'Preencha em páginas de serviço, condição ou cidade. Ajuda o Google a entender do que a página trata.',
      options: {collapsible: true, collapsed: true},
      fields: [
        defineField({name: 'name', title: 'Nome do serviço/página', type: 'string'}),
        defineField({name: 'description', title: 'Descrição', type: 'text', rows: 2}),
        defineField({
          name: 'areaServed',
          title: 'Cidade/região atendida',
          type: 'string',
          initialValue: 'Porto Alegre',
        }),
      ],
    }),

    defineField({
      name: 'primaryIntent',
      title: 'Intenção principal',
      type: 'string',
      group: 'avancado',
      description: 'Organização interna de SEO. Pode deixar em branco.',
      options: {
        list: [
          {title: 'Comercial', value: 'commercial'},
          {title: 'Local (cidade/bairro)', value: 'local'},
          {title: 'Informativa', value: 'informational'},
          {title: 'Comparativo', value: 'comparison'},
          {title: 'Perguntas frequentes', value: 'faq'},
        ],
      },
    }),
    defineField({
      name: 'cluster',
      title: 'Grupo editorial',
      type: 'string',
      group: 'avancado',
      description: 'Organização interna para agrupar páginas irmãs. Pode deixar em branco.',
    }),
    defineField({
      name: 'lastReviewedAt',
      title: 'Última revisão do texto',
      type: 'datetime',
      group: 'avancado',
    }),
  ],
  preview: {
    select: {title: 'title', path: 'path', published: 'published', indexable: 'indexable'},
    prepare({title, path, published, indexable}) {
      const flags = [published === false ? 'fora do ar' : null, indexable === false ? 'fora do Google' : null]
        .filter(Boolean)
        .join(' · ')

      return {
        title,
        subtitle: `${path || ''}${flags ? ` · ${flags}` : ''}`,
      }
    },
  },
})

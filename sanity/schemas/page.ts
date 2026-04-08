import {defineField, defineType} from 'sanity'

const seoFields = [
  defineField({
    name: 'title',
    title: 'Meta title',
    type: 'string',
    validation: (Rule) => Rule.max(65).warning('Ideal ate 65 caracteres'),
  }),
  defineField({
    name: 'description',
    title: 'Meta description',
    type: 'text',
    rows: 2,
    validation: (Rule) => Rule.max(160).warning('Ideal ate 160 caracteres'),
  }),
  defineField({name: 'keywords', title: 'Palavras-chave', type: 'array', of: [{type: 'string'}]}),
  defineField({
    name: 'ogImage',
    title: 'Imagem social',
    type: 'image',
    options: {hotspot: true},
  }),
]

export default defineType({
  name: 'page',
  title: 'Pagina',
  type: 'document',
  fields: [
    defineField({name: 'title', title: 'Titulo', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({
      name: 'path',
      title: 'Path (URL)',
      type: 'string',
      validation: (Rule) =>
        Rule.required()
          .regex(/^\/(?!\/).*$/).error('O caminho deve comecar com /')
          .custom((value) => {
            if (value === '/') return true
            if (value?.endsWith('/') && value !== '/') return 'Remova a barra final'
            return true
          }),
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: seoFields,
    }),
    defineField({
      name: 'indexable',
      title: 'Indexavel',
      type: 'boolean',
      description: 'Desative para manter a pagina publicada, mas fora do sitemap e dos resultados de busca.',
      initialValue: true,
    }),
    defineField({
      name: 'primaryIntent',
      title: 'Intencao principal',
      type: 'string',
      options: {
        list: [
          {title: 'Commercial', value: 'commercial'},
          {title: 'Local', value: 'local'},
          {title: 'Informational', value: 'informational'},
          {title: 'Comparison', value: 'comparison'},
          {title: 'FAQ', value: 'faq'},
        ],
      },
    }),
    defineField({
      name: 'cluster',
      title: 'Cluster editorial',
      type: 'string',
      description: 'Use para agrupar paginas irmas e facilitar a governanca SEO.',
    }),
    defineField({
      name: 'lastReviewedAt',
      title: 'Ultima revisao editorial',
      type: 'datetime',
    }),
    defineField({
      name: 'sections',
      title: 'Secoes',
      type: 'array',
      of: [
        {type: 'heroSection'},
        {type: 'featureCardsSection'},
        {type: 'statsSection'},
        {type: 'unitsSection'},
        {type: 'servicesSection'},
        {type: 'testimonialsSection'},
        {type: 'gallerySection'},
        {type: 'richTextSection'},
        {type: 'faqSection'},
        {type: 'ctaSection'},
        {type: 'contactSection'},
        {type: 'blogPostsSection'},
        {type: 'seoHeroSection'},
        {type: 'checklistSection'},
        {type: 'twoColumnSection'},
        {type: 'locationNoticeSection'},
        {type: 'relatedLinksSection'},
      ],
      validation: (Rule) => Rule.min(1),
    }),
    defineField({
      name: 'serviceSchema',
      title: 'Schema de Servico (SEO - opcional)',
      type: 'object',
      description: 'Preencha para paginas de servicos, condicoes e localizacao. Gera JSON-LD ServiceSchema para melhor indexacao.',
      fields: [
        defineField({name: 'name', title: 'Nome do servico/pagina', type: 'string'}),
        defineField({name: 'description', title: 'Descricao', type: 'text', rows: 2}),
        defineField({name: 'areaServed', title: 'Area de atuacao', type: 'string', initialValue: 'Porto Alegre'}),
      ],
    }),
    defineField({
      name: 'published',
      title: 'Publicado',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  preview: {
    select: {title: 'title', path: 'path', published: 'published', indexable: 'indexable'},
    prepare({title, path, published, indexable}) {
      const flags = [published === false ? 'rascunho' : null, indexable === false ? 'noindex' : null]
        .filter(Boolean)
        .join(' · ')

      return {
        title,
        subtitle: `${path || ''}${flags ? ` · ${flags}` : ''}`,
      }
    },
  },
})

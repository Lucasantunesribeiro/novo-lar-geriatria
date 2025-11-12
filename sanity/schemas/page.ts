import {defineField, defineType} from 'sanity'

const seoFields = [
  defineField({name: 'title', title: 'Meta title', type: 'string'}),
  defineField({name: 'description', title: 'Meta description', type: 'text', rows: 2}),
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
  title: 'Página',
  type: 'document',
  fields: [
    defineField({name: 'title', title: 'Título', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({
      name: 'path',
      title: 'Path (URL)',
      type: 'string',
      validation: (Rule) =>
        Rule.required()
          .regex(/^\/(?!\/).*$/).error('O caminho deve começar com /')
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
      name: 'sections',
      title: 'Seções',
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
      ],
      validation: (Rule) => Rule.min(1),
    }),
    defineField({
      name: 'published',
      title: 'Publicado',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  preview: {
    select: {title: 'title', path: 'path', published: 'published'},
    prepare({title, path, published}) {
      return {
        title,
        subtitle: `${path || ''}${published === false ? ' · rascunho' : ''}`,
      }
    },
  },
})

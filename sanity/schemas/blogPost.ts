import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'blogPost',
  title: 'Post do Blog',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
      validation: (Rule) => Rule.required().min(10).max(150),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Resumo',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required().min(50).max(200),
    }),
    defineField({
      name: 'content',
      title: 'Conteúdo',
      type: 'array',
      of: [
        { type: 'block' },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Texto Alternativo',
            },
            {
              name: 'caption',
              type: 'string',
              title: 'Legenda',
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'coverImage',
      title: 'Imagem de Capa',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'coverImagePath',
      title: 'Caminho da imagem de capa',
      type: 'string',
      description: 'Alternativa ao upload no Sanity. Ex: /fotos-sobre/exemplo.jpg',
    }),
    defineField({
      name: 'category',
      title: 'Categoria',
      type: 'string',
      options: {
        list: [
          { title: 'Cuidados', value: 'cuidados' },
          { title: 'Saúde', value: 'saude' },
          { title: 'Atividades', value: 'atividades' },
          { title: 'Notícias', value: 'noticias' },
          { title: 'Dicas', value: 'dicas' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'author',
      title: 'Autor',
      type: 'reference',
      to: [{ type: 'teamMember' }],
    }),
    defineField({
      name: 'authorName',
      title: 'Nome do autor',
      type: 'string',
      description: 'Usado quando o post não referenciar um membro da equipe.',
    }),
    defineField({
      name: 'readTime',
      title: 'Tempo de leitura',
      type: 'string',
      validation: (Rule) => Rule.max(30),
    }),
    defineField({
      name: 'views',
      title: 'Visualizações',
      type: 'number',
      initialValue: 0,
    }),
    defineField({
      name: 'publishedAt',
      title: 'Data de Publicação',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        {
          name: 'metaTitle',
          type: 'string',
          title: 'Meta Title',
          validation: (Rule: any) => Rule.max(60),
        },
        {
          name: 'metaDescription',
          type: 'text',
          title: 'Meta Description',
          rows: 2,
          validation: (Rule: any) => Rule.max(160),
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      media: 'coverImage',
    },
  },
})

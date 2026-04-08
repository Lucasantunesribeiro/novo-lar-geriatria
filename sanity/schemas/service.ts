import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'service',
  title: 'Serviço',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título do Serviço',
      type: 'string',
      validation: (Rule) => Rule.required().min(3).max(100),
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
      name: 'description',
      title: 'Descrição',
      type: 'text',
      rows: 5,
      validation: (Rule) => Rule.required().min(50).max(500),
    }),
    defineField({
      name: 'subtitle',
      title: 'SubtÃ­tulo',
      type: 'string',
      validation: (Rule) => Rule.max(140),
    }),
    defineField({
      name: 'summary',
      title: 'Resumo Curto',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.max(220),
    }),
    defineField({
      name: 'detailParagraphs',
      title: 'DescriÃ§Ã£o Completa',
      type: 'array',
      of: [{type: 'text'}],
      description: 'ParÃ¡grafos usados na pÃ¡gina de detalhe do serviÃ§o.',
    }),
    defineField({
      name: 'highlights',
      title: 'Diferenciais',
      type: 'array',
      of: [{type: 'string'}],
      validation: (Rule) => Rule.max(20),
    }),
    defineField({
      name: 'heroImagePath',
      title: 'Caminho da imagem principal',
      type: 'string',
      description: 'Use um caminho local do projeto quando nÃ£o houver upload no Sanity.',
    }),
    defineField({
      name: 'heroImage',
      title: 'Imagem principal',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'heroImageAlt',
      title: 'Texto alternativo da imagem principal',
      type: 'string',
      validation: (Rule) => Rule.max(180),
    }),
    defineField({
      name: 'gallery',
      title: 'Galeria do serviÃ§o',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'image',
              title: 'Imagem',
              type: 'image',
              options: {hotspot: true},
            }),
            defineField({
              name: 'imagePath',
              title: 'Caminho da imagem',
              type: 'string',
              description: 'Alternativa ao upload. Ex: /fotos-sobre/exemplo.jpg',
            }),
            defineField({
              name: 'alt',
              title: 'Texto alternativo',
              type: 'string',
              validation: (Rule) => Rule.required().max(180),
            }),
          ],
          preview: {
            select: {
              title: 'alt',
              media: 'image',
              subtitle: 'imagePath',
            },
          },
        },
      ],
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Meta Title',
          type: 'string',
          validation: (Rule) => Rule.max(60),
        }),
        defineField({
          name: 'description',
          title: 'Meta Description',
          type: 'text',
          rows: 2,
          validation: (Rule) => Rule.max(160),
        }),
      ],
    }),
    defineField({
      name: 'category',
      title: 'Categoria',
      type: 'reference',
      to: [{type: 'serviceCategory'}],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'icon',
      title: 'Ícone (nome do Lucide React)',
      type: 'string',
      description: 'Ex: Heart, Activity, Users, Shield',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'unitAvailability',
      title: 'Disponível nas Unidades',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'unit' }] }],
    }),
    defineField({
      name: 'featured',
      title: 'Serviço em Destaque?',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
    },
    prepare({ title, subtitle }) {
      return {
        title,
        subtitle: subtitle?.slice(0, 60) + '...',
      }
    },
  },
})

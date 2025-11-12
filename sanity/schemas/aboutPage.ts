import {defineField, defineType} from 'sanity'
import {Info} from 'lucide-react'

export default defineType({
  name: 'aboutPage',
  title: 'Página · Sobre',
  type: 'document',
  icon: Info,
  fields: [
    defineField({
      name: 'title',
      title: 'Título da Página',
      type: 'string',
      initialValue: 'Sobre',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      fields: [
        {name: 'badge', title: 'Badge', type: 'string'},
        {name: 'title', title: 'Título', type: 'string', validation: (Rule) => Rule.required()},
        {name: 'description', title: 'Descrição', type: 'text', rows: 3},
        {
          name: 'highlights',
          title: 'Destaques',
          type: 'array',
          of: [{type: 'string'}],
        },
      ],
    }),
    defineField({
      name: 'highlightsSection',
      title: 'Seção Destaques',
      type: 'object',
      fields: [
        {name: 'title', title: 'Título', type: 'string'},
        {
          name: 'cards',
          title: 'Cards',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {name: 'title', title: 'Título', type: 'string'},
                {name: 'description', title: 'Descrição', type: 'text', rows: 2},
                {name: 'image', title: 'Imagem', type: 'image', options: {hotspot: true}},
              ],
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'experienceSection',
      title: 'Seção Experiência',
      type: 'object',
      fields: [
        {name: 'title', title: 'Título', type: 'string'},
        {
          name: 'steps',
          title: 'Passos',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {name: 'number', title: 'Número', type: 'string'},
                {name: 'title', title: 'Título', type: 'string'},
                {name: 'description', title: 'Descrição', type: 'text', rows: 2},
              ],
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'gallerySection',
      title: 'Seção Galeria',
      type: 'object',
      fields: [
        {name: 'title', title: 'Título', type: 'string'},
        {name: 'description', title: 'Descrição', type: 'text', rows: 2},
        {name: 'buttonLabel', title: 'Label do Botão', type: 'string'},
        {name: 'buttonHref', title: 'Link do Botão', type: 'string'},
      ],
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        {name: 'title', title: 'Meta Title', type: 'string'},
        {name: 'description', title: 'Meta Description', type: 'text', rows: 2},
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Página Sobre',
        subtitle: 'Página singleton',
      }
    },
  },
})

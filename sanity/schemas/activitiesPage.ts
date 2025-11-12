import {defineField, defineType} from 'sanity'
import {Music} from 'lucide-react'

export default defineType({
  name: 'activitiesPage',
  title: 'Página · Atividades',
  type: 'document',
  icon: Music,
  fields: [
    defineField({
      name: 'title',
      title: 'Título da Página',
      type: 'string',
      initialValue: 'Atividades e Terapia Ocupacional',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      fields: [
        {name: 'breadcrumb', title: 'Breadcrumb Badge', type: 'string'},
        {name: 'title', title: 'Título', type: 'string', validation: (Rule) => Rule.required()},
      ],
    }),
    defineField({
      name: 'activityTypes',
      title: 'Tipos de Atividades',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'icon', title: 'Ícone', type: 'string', options: {list: ['Music', 'Palette', 'BookOpen', 'Users', 'Heart', 'Smile']}},
            {name: 'title', title: 'Título', type: 'string'},
            {name: 'description', title: 'Descrição', type: 'string'},
          ],
          preview: {
            select: {title: 'title', subtitle: 'description'},
          },
        },
      ],
    }),
    defineField({
      name: 'diverseSection',
      title: 'Seção Programação Diversificada',
      type: 'object',
      fields: [
        {name: 'title', title: 'Título', type: 'string', initialValue: 'Programação Diversificada e Estimulante'},
        {name: 'description', title: 'Descrição', type: 'text', rows: 3},
      ],
    }),
    defineField({
      name: 'cognitiveSection',
      title: 'Seção Estímulo Cognitivo',
      type: 'object',
      fields: [
        {name: 'title', title: 'Título', type: 'string', initialValue: 'Estímulo Cognitivo e Social'},
        {name: 'description', title: 'Descrição', type: 'text', rows: 3},
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
              ],
            },
          ],
        },
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
        title: 'Página Atividades',
        subtitle: 'Página singleton',
      }
    },
  },
})

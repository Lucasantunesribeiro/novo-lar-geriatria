import {defineField, defineType} from 'sanity'
import {Building} from 'lucide-react'

export default defineType({
  name: 'aboutNovoLarPage',
  title: 'Página · A Novo Lar',
  type: 'document',
  icon: Building,
  fields: [
    defineField({
      name: 'title',
      title: 'Título da Página',
      type: 'string',
      initialValue: 'A Novo Lar',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      fields: [
        {name: 'breadcrumb', title: 'Breadcrumb Badge', type: 'string'},
        {name: 'title', title: 'Título', type: 'string', validation: (Rule) => Rule.required()},
        {name: 'subtitle', title: 'Subtítulo', type: 'text', rows: 2},
      ],
    }),
    defineField({
      name: 'mainContent',
      title: 'Conteúdo Principal',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'H2', value: 'h2'},
            {title: 'H3', value: 'h3'},
          ],
          lists: [{title: 'Lista', value: 'bullet'}],
          marks: {
            decorators: [
              {title: 'Negrito', value: 'strong'},
              {title: 'Itálico', value: 'em'},
            ],
          },
        },
      ],
    }),
    defineField({
      name: 'timelineSection',
      title: 'Seção Linha do Tempo',
      type: 'object',
      fields: [
        {name: 'title', title: 'Título', type: 'string'},
        {
          name: 'events',
          title: 'Eventos',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {name: 'year', title: 'Ano', type: 'string'},
                {name: 'title', title: 'Título', type: 'string'},
                {name: 'description', title: 'Descrição', type: 'text', rows: 2},
              ],
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'valuesSection',
      title: 'Seção Valores',
      type: 'object',
      fields: [
        {name: 'title', title: 'Título', type: 'string'},
        {
          name: 'values',
          title: 'Valores',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {name: 'icon', title: 'Ícone', type: 'string'},
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
        title: 'Página A Novo Lar',
        subtitle: 'Página singleton',
      }
    },
  },
})

import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'statsSection',
  title: 'Seção · Indicadores',
  type: 'object',
  fields: [
    defineField({name: 'eyebrow', title: 'Etiqueta', type: 'string'}),
    defineField({name: 'title', title: 'Título', type: 'string'}),
    defineField({name: 'description', title: 'Descrição', type: 'text', rows: 3}),
    defineField({
      name: 'stats',
      title: 'Indicadores',
      type: 'array',
      of: [
        defineField({
          name: 'stat',
          title: 'Indicador',
          type: 'object',
          fields: [
            defineField({name: 'value', title: 'Valor', type: 'string', validation: (Rule) => Rule.required()}),
            defineField({name: 'label', title: 'Legenda', type: 'string'}),
            defineField({name: 'description', title: 'Descrição', type: 'string'}),
          ],
        }),
      ],
      validation: (Rule) => Rule.min(1),
    }),
  ],
  preview: {
    select: {title: 'title', count: 'stats.length'},
    prepare({title, count}) {
      return {
        title: title || 'Indicadores',
        subtitle: `${count || 0} itens`,
      }
    },
  },
})

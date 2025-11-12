import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'unitsSection',
  title: 'Seção · Unidades',
  type: 'object',
  fields: [
    defineField({name: 'title', title: 'Título', type: 'string'}),
    defineField({name: 'description', title: 'Descrição', type: 'text', rows: 3}),
    defineField({
      name: 'mode',
      title: 'Origem dos dados',
      type: 'string',
      options: {
        list: [
          {title: 'Todas as unidades', value: 'all'},
          {title: 'Selecionar unidades', value: 'selected'},
        ],
        layout: 'radio',
      },
      initialValue: 'all',
    }),
    defineField({
      name: 'units',
      title: 'Unidades',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'unit'}]}],
      hidden: ({parent}) => parent?.mode !== 'selected',
    }),
  ],
  preview: {
    select: {title: 'title', mode: 'mode'},
    prepare({title, mode}) {
      return {
        title: title || 'Unidades',
        subtitle: mode === 'selected' ? 'Lista manual' : 'Todas as unidades',
      }
    },
  },
})

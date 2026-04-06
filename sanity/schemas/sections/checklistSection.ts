import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'checklistSection',
  title: 'Seção · Lista com Checkmarks',
  type: 'object',
  fields: [
    defineField({name: 'eyebrow', title: 'Etiqueta (texto pequeno acima do título)', type: 'string'}),
    defineField({name: 'heading', title: 'Título da seção', type: 'string'}),
    defineField({name: 'description', title: 'Descrição (opcional)', type: 'text', rows: 2}),
    defineField({
      name: 'items',
      title: 'Itens da lista',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({name: 'title', title: 'Texto em destaque (opcional)', type: 'string'}),
            defineField({
              name: 'text',
              title: 'Texto',
              type: 'text',
              rows: 2,
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {title: 'title', text: 'text'},
            prepare({title, text}) {
              return {title: title || text?.substring(0, 60) || 'Item'}
            },
          },
        },
      ],
      validation: (Rule) => Rule.min(1),
    }),
    defineField({
      name: 'columns',
      title: 'Número de colunas',
      type: 'number',
      options: {
        list: [
          {title: '1 coluna', value: 1},
          {title: '2 colunas', value: 2},
          {title: '3 colunas', value: 3},
        ],
      },
      initialValue: 1,
    }),
    defineField({
      name: 'background',
      title: 'Fundo',
      type: 'string',
      options: {
        list: [
          {title: 'Branco', value: 'white'},
          {title: 'Cinza claro', value: 'gray'},
        ],
        layout: 'radio',
      },
      initialValue: 'white',
    }),
  ],
  preview: {
    select: {heading: 'heading', count: 'items.length'},
    prepare({heading, count}) {
      return {title: heading || 'Lista com checkmarks', subtitle: `${count || 0} itens`}
    },
  },
})

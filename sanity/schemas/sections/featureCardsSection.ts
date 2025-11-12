import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'featureCardsSection',
  title: 'Seção · Cards em Destaque',
  type: 'object',
  fields: [
    defineField({name: 'eyebrow', title: 'Etiqueta', type: 'string'}),
    defineField({name: 'title', title: 'Título', type: 'string'}),
    defineField({name: 'description', title: 'Descrição', type: 'text', rows: 3}),
    defineField({
      name: 'cards',
      title: 'Cards',
      type: 'array',
      of: [
        defineField({
          name: 'card',
          title: 'Card',
          type: 'object',
          fields: [
            defineField({name: 'title', title: 'Título', type: 'string', validation: (Rule) => Rule.required()}),
            defineField({name: 'description', title: 'Descrição', type: 'text', rows: 3}),
            defineField({name: 'image', title: 'Imagem', type: 'image', options: {hotspot: true}}),
            defineField({name: 'icon', title: 'Ícone (Lucide)', type: 'string'}),
            defineField({name: 'linkLabel', title: 'Texto do Link', type: 'string'}),
            defineField({name: 'href', title: 'Link', type: 'string'}),
          ],
        }),
      ],
      validation: (Rule) => Rule.min(1),
    }),
    defineField({
      name: 'columns',
      title: 'Número de colunas',
      type: 'number',
      options: {list: [1, 2, 3, 4]},
      initialValue: 3,
    }),
  ],
  preview: {
    select: {title: 'title', count: 'cards.length'},
    prepare({title, count}) {
      return {
        title: title || 'Cards em Destaque',
        subtitle: `${count || 0} cards`,
      }
    },
  },
})

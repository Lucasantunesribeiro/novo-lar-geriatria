import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'richTextSection',
  title: 'Seção · Texto Rico',
  type: 'object',
  fields: [
    defineField({name: 'title', title: 'Título', type: 'string'}),
    defineField({
      name: 'body',
      title: 'Conteúdo',
      type: 'array',
      of: [{type: 'block'}],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'alignment',
      title: 'Alinhamento',
      type: 'string',
      options: {
        list: [
          {title: 'Esquerda', value: 'left'},
          {title: 'Centro', value: 'center'},
        ],
      },
      initialValue: 'left',
    }),
  ],
  preview: {
    select: {title: 'title'},
    prepare({title}) {
      return {
        title: title || 'Texto',
        subtitle: 'Bloco de texto rico',
      }
    },
  },
})

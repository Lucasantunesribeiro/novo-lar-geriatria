import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'faqSection',
  title: 'Seção · FAQ',
  type: 'object',
  fields: [
    defineField({name: 'title', title: 'Título', type: 'string'}),
    defineField({name: 'description', title: 'Descrição', type: 'text', rows: 3}),
    defineField({
      name: 'faqs',
      title: 'Perguntas',
      type: 'array',
      of: [
        defineField({
          name: 'faq',
          title: 'Pergunta',
          type: 'object',
          fields: [
            defineField({name: 'question', title: 'Pergunta', type: 'string', validation: (Rule) => Rule.required()}),
            defineField({name: 'answer', title: 'Resposta', type: 'text', rows: 5, validation: (Rule) => Rule.required()}),
          ],
        }),
      ],
      validation: (Rule) => Rule.min(1),
    }),
  ],
  preview: {
    select: {title: 'title', count: 'faqs.length'},
    prepare({title, count}) {
      return {
        title: title || 'Perguntas frequentes',
        subtitle: `${count || 0} perguntas`,
      }
    },
  },
})

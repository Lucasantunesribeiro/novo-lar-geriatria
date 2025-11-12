import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'ctaSection',
  title: 'Seção · CTA',
  type: 'object',
  fields: [
    defineField({name: 'title', title: 'Título', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'description', title: 'Descrição', type: 'text', rows: 3}),
    defineField({
      name: 'style',
      title: 'Estilo',
      type: 'string',
      options: {
        list: [
          {title: 'Claro', value: 'light'},
          {title: 'Escuro', value: 'dark'},
          {title: 'Gradiente', value: 'gradient'},
        ],
      },
      initialValue: 'light',
    }),
    defineField({
      name: 'ctas',
      title: 'Botões',
      type: 'array',
      of: [
        defineField({
          name: 'cta',
          title: 'CTA',
          type: 'object',
          fields: [
            defineField({name: 'label', title: 'Label', type: 'string', validation: (Rule) => Rule.required()}),
            defineField({name: 'href', title: 'Link', type: 'string', validation: (Rule) => Rule.required()}),
            defineField({
              name: 'variant',
              title: 'Estilo',
              type: 'string',
              options: {
                list: [
                  {title: 'Primário', value: 'primary'},
                  {title: 'Secundário', value: 'secondary'},
                ],
              },
              initialValue: 'primary',
            }),
          ],
        }),
      ],
      validation: (Rule) => Rule.min(1),
    }),
  ],
  preview: {
    select: {title: 'title'},
    prepare({title}) {
      return {
        title: title || 'CTA',
        subtitle: 'Bloco de chamada',
      }
    },
  },
})

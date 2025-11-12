import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'testimonialsSection',
  title: 'Seção · Depoimentos',
  type: 'object',
  fields: [
    defineField({name: 'title', title: 'Título', type: 'string'}),
    defineField({name: 'description', title: 'Descrição', type: 'text', rows: 3}),
    defineField({
      name: 'mode',
      title: 'Origem dos depoimentos',
      type: 'string',
      options: {
        list: [
          {title: 'Sanity · Depoimentos', value: 'manual'},
          {title: 'Google Reviews', value: 'google'},
        ],
        layout: 'radio',
      },
      initialValue: 'manual',
    }),
    defineField({
      name: 'testimonials',
      title: 'Depoimentos',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'testimonial'}]}],
      hidden: ({parent}) => parent?.mode !== 'manual',
    }),
    defineField({
      name: 'placeId',
      title: 'Google Place ID',
      type: 'string',
      hidden: ({parent}) => parent?.mode !== 'google',
    }),
  ],
  preview: {
    select: {title: 'title', mode: 'mode'},
    prepare({title, mode}) {
      return {
        title: title || 'Depoimentos',
        subtitle: mode === 'google' ? 'Google Reviews' : 'Depoimentos internos',
      }
    },
  },
})

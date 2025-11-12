import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'gallerySection',
  title: 'Seção · Galeria',
  type: 'object',
  fields: [
    defineField({name: 'title', title: 'Título', type: 'string'}),
    defineField({name: 'description', title: 'Descrição', type: 'text', rows: 3}),
    defineField({
      name: 'layout',
      title: 'Layout',
      type: 'string',
      options: {
        list: [
          {title: 'Colagem', value: 'collage'},
          {title: 'Grade', value: 'grid'},
          {title: 'Carrossel', value: 'carousel'},
        ],
      },
      initialValue: 'collage',
    }),
    defineField({
      name: 'images',
      title: 'Imagens',
      type: 'array',
      of: [
        defineField({
          name: 'galleryImage',
          title: 'Imagem',
          type: 'object',
          fields: [
            defineField({
              name: 'asset',
              title: 'Arquivo',
              type: 'image',
              options: {hotspot: true},
              validation: (Rule) => Rule.required(),
            }),
            defineField({name: 'alt', title: 'Texto Alternativo', type: 'string'}),
            defineField({name: 'caption', title: 'Legenda', type: 'string'}),
          ],
        }),
      ],
      validation: (Rule) => Rule.min(1),
    }),
  ],
  preview: {
    select: {title: 'title', count: 'images.length'},
    prepare({title, count}) {
      return {
        title: title || 'Galeria',
        subtitle: `${count || 0} imagens`,
      }
    },
  },
})

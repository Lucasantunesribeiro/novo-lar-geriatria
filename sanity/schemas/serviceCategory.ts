import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'serviceCategory',
  title: 'Categoria de Serviço',
  type: 'document',
  fields: [
    defineField({name: 'title', title: 'Título', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title', maxLength: 80},
      validation: (Rule) => Rule.required(),
    }),
    defineField({name: 'description', title: 'Descrição', type: 'text', rows: 3}),
    defineField({name: 'icon', title: 'Ícone (Lucide)', type: 'string'}),
  ],
})

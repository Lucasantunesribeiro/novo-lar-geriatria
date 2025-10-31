import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'service',
  title: 'Serviço',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título do Serviço',
      type: 'string',
      validation: (Rule) => Rule.required().min(3).max(100),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Descrição',
      type: 'text',
      rows: 5,
      validation: (Rule) => Rule.required().min(50).max(500),
    }),
    defineField({
      name: 'icon',
      title: 'Ícone (nome do Lucide React)',
      type: 'string',
      description: 'Ex: Heart, Activity, Users, Shield',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'unitAvailability',
      title: 'Disponível nas Unidades',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'unit' }] }],
    }),
    defineField({
      name: 'featured',
      title: 'Serviço em Destaque?',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
    },
    prepare({ title, subtitle }) {
      return {
        title,
        subtitle: subtitle?.slice(0, 60) + '...',
      }
    },
  },
})

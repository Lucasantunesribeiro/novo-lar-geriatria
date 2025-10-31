import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'testimonial',
  title: 'Depoimento',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nome',
      type: 'string',
      validation: (Rule) => Rule.required().min(3).max(100),
    }),
    defineField({
      name: 'role',
      title: 'Relação (ex: Filha, Familiar, Paciente)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'unit',
      title: 'Unidade',
      type: 'reference',
      to: [{ type: 'unit' }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'rating',
      title: 'Avaliação (1-5 estrelas)',
      type: 'number',
      validation: (Rule) => Rule.required().min(1).max(5).integer(),
    }),
    defineField({
      name: 'text',
      title: 'Depoimento',
      type: 'text',
      rows: 5,
      validation: (Rule) => Rule.required().min(50).max(800),
    }),
    defineField({
      name: 'photo',
      title: 'Foto (opcional)',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'videoUrl',
      title: 'URL do Vídeo (YouTube, opcional)',
      type: 'url',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Data de Publicação',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'role',
      media: 'photo',
    },
  },
})

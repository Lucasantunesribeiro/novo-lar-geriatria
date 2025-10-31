import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'teamMember',
  title: 'Membro da Equipe',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nome Completo',
      type: 'string',
      validation: (Rule) => Rule.required().min(3).max(100),
    }),
    defineField({
      name: 'role',
      title: 'Cargo/Função',
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
      name: 'bio',
      title: 'Biografia',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.max(500),
    }),
    defineField({
      name: 'photo',
      title: 'Foto',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'specialties',
      title: 'Especialidades',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'certifications',
      title: 'Certificações',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'crm',
      title: 'CRM/COREN (se aplicável)',
      type: 'string',
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

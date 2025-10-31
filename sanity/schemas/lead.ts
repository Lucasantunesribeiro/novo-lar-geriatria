import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'lead',
  title: 'Lead',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nome',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: 'phone',
      title: 'Telefone',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'unit',
      title: 'Unidade de Interesse',
      type: 'reference',
      to: [{ type: 'unit' }],
    }),
    defineField({
      name: 'message',
      title: 'Mensagem',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'source',
      title: 'Origem',
      type: 'string',
      description: 'De onde veio o lead (formulário contato, unidade específica, etc)',
    }),
    defineField({
      name: 'createdAt',
      title: 'Data de Criação',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'email',
    },
  },
})

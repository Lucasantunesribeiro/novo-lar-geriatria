import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Configurações do Site',
  type: 'document',
  fields: [
    defineField({
      name: 'globalPhone',
      title: 'Telefone Global',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'globalWhatsapp',
      title: 'WhatsApp Global',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'globalEmail',
      title: 'Email Global',
      type: 'string',
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: 'socialLinks',
      title: 'Redes Sociais',
      type: 'object',
      fields: [
        { name: 'facebook', type: 'url', title: 'Facebook' },
        { name: 'instagram', type: 'url', title: 'Instagram' },
        { name: 'linkedin', type: 'url', title: 'LinkedIn' },
        { name: 'youtube', type: 'url', title: 'YouTube' },
      ],
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'favicon',
      title: 'Favicon',
      type: 'image',
    }),
    defineField({
      name: 'defaultOgImage',
      title: 'Imagem Padrão para Compartilhamento (Open Graph)',
      type: 'image',
      options: { hotspot: true },
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Configurações do Site',
      }
    },
  },
})

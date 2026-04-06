import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'relatedLinksSection',
  title: 'Seção · Links Relacionados',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Título (opcional)',
      type: 'string',
      description: 'Ex: "Páginas que podem ajudar". Aparece acima dos links.',
    }),
    defineField({
      name: 'links',
      title: 'Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({name: 'label', title: 'Texto do link', type: 'string', validation: (Rule) => Rule.required()}),
            defineField({name: 'href', title: 'URL (ex: /servicos)', type: 'string', validation: (Rule) => Rule.required()}),
          ],
          preview: {
            select: {label: 'label', href: 'href'},
            prepare({label, href}) {
              return {title: label, subtitle: href}
            },
          },
        },
      ],
      validation: (Rule) => Rule.min(1),
    }),
    defineField({
      name: 'background',
      title: 'Fundo',
      type: 'string',
      options: {
        list: [
          {title: 'Branco', value: 'white'},
          {title: 'Cinza claro', value: 'gray'},
        ],
        layout: 'radio',
      },
      initialValue: 'white',
    }),
  ],
  preview: {
    select: {heading: 'heading', count: 'links.length'},
    prepare({heading, count}) {
      return {
        title: heading || 'Links relacionados',
        subtitle: `${count || 0} links`,
      }
    },
  },
})

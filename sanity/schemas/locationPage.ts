import {defineField, defineType} from 'sanity'
import {MapPin} from 'lucide-react'

export default defineType({
  name: 'locationPage',
  title: 'Página · Localização',
  type: 'document',
  icon: MapPin,
  fields: [
    defineField({
      name: 'title',
      title: 'Título da Página',
      type: 'string',
      initialValue: 'Localização',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      fields: [
        {name: 'breadcrumb', title: 'Breadcrumb Badge', type: 'string'},
        {name: 'title', title: 'Título', type: 'string', validation: (Rule) => Rule.required()},
        {name: 'subtitle', title: 'Subtítulo', type: 'text', rows: 2},
      ],
    }),
    defineField({
      name: 'introSection',
      title: 'Seção Introdução',
      type: 'object',
      fields: [
        {name: 'title', title: 'Título', type: 'string'},
        {name: 'description', title: 'Descrição', type: 'text', rows: 3},
      ],
    }),
    defineField({
      name: 'mapSection',
      title: 'Seção Mapa',
      type: 'object',
      fields: [
        {name: 'title', title: 'Título', type: 'string'},
        {name: 'description', title: 'Descrição', type: 'text', rows: 2},
      ],
    }),
    defineField({
      name: 'ctaSection',
      title: 'Seção CTA',
      type: 'object',
      fields: [
        {name: 'title', title: 'Título', type: 'string'},
        {name: 'description', title: 'Descrição', type: 'text', rows: 2},
        {
          name: 'buttons',
          title: 'Botões',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {name: 'label', title: 'Label', type: 'string'},
                {name: 'href', title: 'Link', type: 'string'},
                {name: 'variant', title: 'Variant', type: 'string'},
              ],
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        {name: 'title', title: 'Meta Title', type: 'string'},
        {name: 'description', title: 'Meta Description', type: 'text', rows: 2},
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Página Localização',
        subtitle: 'Página singleton',
      }
    },
  },
})

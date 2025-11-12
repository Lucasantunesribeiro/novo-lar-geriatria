import {defineField, defineType} from 'sanity'
import {Image as ImageIcon} from 'lucide-react'

export default defineType({
  name: 'photosPage',
  title: 'Página · Fotos',
  type: 'document',
  icon: ImageIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Título da Página',
      type: 'string',
      initialValue: 'Fotos',
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
      name: 'galleries',
      title: 'Galerias por Unidade',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'unit',
              title: 'Unidade',
              type: 'reference',
              to: [{type: 'unit'}],
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'photos',
              title: 'Fotos',
              type: 'array',
              of: [
                {
                  type: 'image',
                  options: {hotspot: true},
                  fields: [
                    {name: 'caption', title: 'Legenda', type: 'string'},
                    {name: 'category', title: 'Categoria', type: 'string'},
                  ],
                },
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
        title: 'Página Fotos',
        subtitle: 'Página singleton',
      }
    },
  },
})

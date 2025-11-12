import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'heroSection',
  title: 'Seção · Hero',
  type: 'object',
  fields: [
    defineField({
      name: 'variant',
      title: 'Layout',
      type: 'string',
      initialValue: 'highlight',
      options: {
        list: [
          {title: 'Destaque com imagem', value: 'highlight'},
          {title: 'Carrossel', value: 'carousel'},
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'eyebrow',
      title: 'Etiqueta',
      type: 'string',
    }),
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
      validation: (Rule) => Rule.required().max(160),
    }),
    defineField({
      name: 'highlight',
      title: 'Texto em destaque',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Descrição',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'slides',
      title: 'Slides / Imagens',
      type: 'array',
      of: [
        defineField({
          name: 'slide',
          title: 'Slide',
          type: 'object',
          fields: [
            defineField({
              name: 'image',
              title: 'Imagem',
              type: 'image',
              options: {hotspot: true},
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'alt',
              title: 'Texto Alternativo',
              type: 'string',
            }),
          ],
        }),
      ],
      validation: (Rule) => Rule.min(1),
    }),
    defineField({
      name: 'ctas',
      title: 'Chamadas para ação',
      type: 'array',
      of: [
        defineField({
          name: 'cta',
          title: 'CTA',
          type: 'object',
          fields: [
            defineField({name: 'label', title: 'Label', type: 'string', validation: (Rule) => Rule.required()}),
            defineField({name: 'href', title: 'Link', type: 'string', validation: (Rule) => Rule.required()}),
            defineField({
              name: 'variant',
              title: 'Estilo',
              type: 'string',
              options: {
                list: [
                  {title: 'Primário', value: 'primary'},
                  {title: 'Secundário', value: 'secondary'},
                  {title: 'Ghost', value: 'ghost'},
                ],
              },
              initialValue: 'primary',
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'stats',
      title: 'Indicadores',
      type: 'array',
      of: [
        defineField({
          name: 'stat',
          title: 'Indicador',
          type: 'object',
          fields: [
            defineField({name: 'label', title: 'Legenda', type: 'string'}),
            defineField({name: 'value', title: 'Valor', type: 'string'}),
            defineField({name: 'description', title: 'Descrição', type: 'string'}),
          ],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'variant',
    },
    prepare({title, subtitle}) {
      return {
        title: title || 'Hero',
        subtitle: `Hero · ${subtitle || 'highlight'}`,
      }
    },
  },
})

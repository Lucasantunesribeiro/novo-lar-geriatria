import {defineField, defineType} from 'sanity'

const ctaFields = [
  defineField({
    name: 'type',
    title: 'Tipo de botão',
    type: 'string',
    options: {
      list: [
        {title: 'WhatsApp', value: 'whatsapp'},
        {title: 'Telefone', value: 'phone'},
        {title: 'Link', value: 'link'},
      ],
      layout: 'radio',
    },
    initialValue: 'whatsapp',
    validation: (Rule) => Rule.required(),
  }),
  defineField({
    name: 'label',
    title: 'Texto do botão',
    type: 'string',
    validation: (Rule) => Rule.required(),
  }),
  defineField({
    name: 'href',
    title: 'URL (somente para tipo "Link")',
    type: 'string',
    description: 'Preencha apenas se o tipo for "Link".',
  }),
]

export default defineType({
  name: 'seoHeroSection',
  title: 'Hero · Landing Page SEO',
  type: 'object',
  fields: [
    defineField({
      name: 'eyebrow',
      title: 'Etiqueta (texto pequeno acima do título)',
      type: 'string',
      description: 'Ex: "ILPI · Residencial Geriátrico · Casa de Repouso"',
    }),
    defineField({
      name: 'heading',
      title: 'Título da página (H1)',
      type: 'string',
      validation: (Rule) => Rule.required().max(100),
    }),
    defineField({
      name: 'description',
      title: 'Descrição (subtítulo)',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'trustBadges',
      title: 'Selos de confiança',
      description: 'Aparecem abaixo da descrição. Ex: "30 anos · de experiência". Máximo 4.',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({name: 'value', title: 'Valor em destaque (ex: 30 anos)', type: 'string', validation: (Rule) => Rule.required()}),
            defineField({name: 'label', title: 'Legenda (ex: de experiência)', type: 'string', validation: (Rule) => Rule.required()}),
          ],
          preview: {
            select: {value: 'value', label: 'label'},
            prepare({value, label}) {
              return {title: `${value || ''} ${label || ''}`}
            },
          },
        },
      ],
      validation: (Rule) => Rule.max(4),
    }),
    defineField({
      name: 'primaryCta',
      title: 'Botão principal',
      type: 'object',
      fields: ctaFields,
    }),
    defineField({
      name: 'secondaryCta',
      title: 'Botão secundário (opcional)',
      type: 'object',
      fields: ctaFields,
    }),
    defineField({
      name: 'breadcrumbs',
      title: 'Trilha de navegação (breadcrumb)',
      description: 'Deixe o campo "Link" em branco no último item (página atual).',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({name: 'label', title: 'Texto', type: 'string', validation: (Rule) => Rule.required()}),
            defineField({name: 'href', title: 'Link (vazio = item atual)', type: 'string'}),
          ],
          preview: {
            select: {label: 'label', href: 'href'},
            prepare({label, href}) {
              return {title: label, subtitle: href || '(página atual)'}
            },
          },
        },
      ],
    }),
  ],
  preview: {
    select: {heading: 'heading'},
    prepare({heading}) {
      return {title: heading || 'Hero SEO', subtitle: 'Hero · Landing Page SEO'}
    },
  },
})

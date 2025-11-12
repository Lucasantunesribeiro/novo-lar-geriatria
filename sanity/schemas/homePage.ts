import {defineField, defineType} from 'sanity'
import {Home as HomeIcon} from 'lucide-react'

export default defineType({
  name: 'homePage',
  title: 'Página · Home',
  type: 'document',
  icon: HomeIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Título da Página',
      type: 'string',
      initialValue: 'Home',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'hero',
      title: 'Hero Section (Carrossel)',
      type: 'object',
      fields: [
        {
          name: 'slides',
          title: 'Slides do Carrossel',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {name: 'image', title: 'Imagem', type: 'image', options: {hotspot: true}},
                {name: 'alt', title: 'Texto Alternativo', type: 'string'},
                {name: 'title', title: 'Título (opcional)', type: 'string'},
                {name: 'description', title: 'Descrição (opcional)', type: 'text', rows: 2},
              ],
            },
          ],
          validation: (Rule) => Rule.min(1).max(10),
        },
      ],
    }),
    defineField({
      name: 'aboutSection',
      title: 'Seção Sobre',
      type: 'object',
      fields: [
        {name: 'title', title: 'Título', type: 'string'},
        {name: 'subtitle', title: 'Subtítulo', type: 'string'},
        {name: 'description', title: 'Descrição', type: 'text', rows: 4},
        {name: 'buttonLabel', title: 'Label do Botão', type: 'string'},
        {name: 'buttonHref', title: 'Link do Botão', type: 'string'},
        {
          name: 'stats',
          title: 'Estatísticas',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {name: 'value', title: 'Valor', type: 'string'},
                {name: 'label', title: 'Label', type: 'string'},
              ],
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'featuresSection',
      title: 'Seção Diferenciais',
      type: 'object',
      fields: [
        {name: 'title', title: 'Título', type: 'string'},
        {name: 'subtitle', title: 'Subtítulo', type: 'string'},
        {
          name: 'features',
          title: 'Diferenciais',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {name: 'icon', title: 'Ícone', type: 'string'},
                {name: 'title', title: 'Título', type: 'string'},
                {name: 'description', title: 'Descrição', type: 'text', rows: 2},
              ],
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'unitsSection',
      title: 'Seção Unidades',
      type: 'object',
      fields: [
        {name: 'title', title: 'Título', type: 'string'},
        {name: 'subtitle', title: 'Subtítulo', type: 'string'},
        {name: 'description', title: 'Descrição', type: 'text', rows: 2},
      ],
    }),
    defineField({
      name: 'servicesSection',
      title: 'Seção Serviços',
      type: 'object',
      fields: [
        {name: 'title', title: 'Título', type: 'string'},
        {name: 'subtitle', title: 'Subtítulo', type: 'string'},
        {name: 'buttonLabel', title: 'Label do Botão', type: 'string'},
        {name: 'buttonHref', title: 'Link do Botão', type: 'string'},
      ],
    }),
    defineField({
      name: 'testimonialsSection',
      title: 'Seção Depoimentos',
      type: 'object',
      fields: [
        {name: 'title', title: 'Título', type: 'string'},
        {name: 'subtitle', title: 'Subtítulo', type: 'string'},
      ],
    }),
    defineField({
      name: 'blogSection',
      title: 'Seção Blog',
      type: 'object',
      fields: [
        {name: 'title', title: 'Título', type: 'string'},
        {name: 'subtitle', title: 'Subtítulo', type: 'string'},
        {name: 'buttonLabel', title: 'Label do Botão', type: 'string'},
        {name: 'buttonHref', title: 'Link do Botão', type: 'string'},
      ],
    }),
    defineField({
      name: 'ctaSection',
      title: 'Seção CTA Final',
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
                {name: 'icon', title: 'Ícone', type: 'string', options: {list: ['Phone', 'MessageCircle', 'MapPin', 'ArrowRight']}},
                {name: 'variant', title: 'Variant', type: 'string', options: {list: ['primary', 'secondary', 'outline']}},
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
        {name: 'keywords', title: 'Keywords', type: 'array', of: [{type: 'string'}]},
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Página Home',
        subtitle: 'Página principal do site (singleton)',
      }
    },
  },
})

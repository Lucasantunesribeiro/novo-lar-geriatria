import {defineField, defineType} from 'sanity'
import {Briefcase} from 'lucide-react'

export default defineType({
  name: 'servicesIndexPage',
  title: 'Página · Serviços (Index)',
  type: 'document',
  icon: Briefcase,
  fields: [
    defineField({
      name: 'title',
      title: 'Título da Página',
      type: 'string',
      initialValue: 'Serviços',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      fields: [
        {name: 'badge', title: 'Badge', type: 'string'},
        {name: 'title', title: 'Título', type: 'string', validation: (Rule) => Rule.required()},
        {name: 'description', title: 'Descrição', type: 'text', rows: 3},
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
      name: 'statsSection',
      title: 'Seção Estatísticas',
      type: 'object',
      fields: [
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
                {name: 'description', title: 'Descrição', type: 'text', rows: 2},
              ],
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'supportSection',
      title: 'Seção Suporte',
      type: 'object',
      fields: [
        {name: 'title', title: 'Título', type: 'string'},
        {
          name: 'features',
          title: 'Features',
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
      name: 'careProgramsSection',
      title: 'Seção Programas de Cuidado',
      type: 'object',
      fields: [
        {name: 'title', title: 'Título', type: 'string'},
        {name: 'subtitle', title: 'Subtítulo', type: 'string'},
        {
          name: 'programs',
          title: 'Programas',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {name: 'title', title: 'Título', type: 'string'},
                {name: 'description', title: 'Descrição', type: 'text', rows: 2},
                {name: 'icon', title: 'Ícone', type: 'string'},
              ],
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'journeySection',
      title: 'Seção Jornada de Cuidado',
      type: 'object',
      fields: [
        {name: 'title', title: 'Título', type: 'string'},
        {name: 'subtitle', title: 'Subtítulo', type: 'string'},
        {
          name: 'steps',
          title: 'Passos',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {name: 'number', title: 'Número', type: 'string'},
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
      ],
    }),
    defineField({
      name: 'contactSection',
      title: 'Seção Contato Final',
      type: 'object',
      fields: [
        {name: 'title', title: 'Título', type: 'string'},
        {name: 'description', title: 'Descrição', type: 'text', rows: 2},
        {
          name: 'options',
          title: 'Opções de Contato',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {name: 'icon', title: 'Ícone', type: 'string'},
                {name: 'title', title: 'Título', type: 'string'},
                {name: 'description', title: 'Descrição', type: 'string'},
                {name: 'href', title: 'Link', type: 'string'},
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
        title: 'Página Serviços (Index)',
        subtitle: 'Página singleton',
      }
    },
  },
})

import {defineField, defineType} from 'sanity'
import {Home} from 'lucide-react'

export default defineType({
  name: 'structurePage',
  title: 'Página · Estrutura',
  type: 'document',
  icon: Home,
  fields: [
    defineField({
      name: 'title',
      title: 'Título da Página',
      type: 'string',
      initialValue: 'Estrutura',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      fields: [
        {name: 'breadcrumb', title: 'Breadcrumb Badge', type: 'string'},
        {name: 'title', title: 'Título', type: 'string', validation: (Rule) => Rule.required()},
      ],
    }),
    defineField({
      name: 'features',
      title: 'Características da Estrutura',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'icon', title: 'Ícone', type: 'string', options: {list: ['Home', 'Sofa', 'Bath', 'Utensils', 'Bed']}},
            {name: 'text', title: 'Texto', type: 'string'},
          ],
          preview: {
            select: {title: 'text'},
          },
        },
      ],
    }),
    defineField({
      name: 'mainSection',
      title: 'Seção Principal',
      type: 'object',
      fields: [
        {name: 'title', title: 'Título', type: 'string', initialValue: 'Ambientes Preparados para o Seu Conforto'},
        {name: 'description', title: 'Descrição', type: 'text', rows: 3},
      ],
    }),
    defineField({
      name: 'highlightsSection',
      title: 'Seção Destaques',
      type: 'object',
      fields: [
        {name: 'title', title: 'Título', type: 'string', initialValue: 'Conforto e Segurança em Cada Detalhe'},
        {name: 'description', title: 'Descrição', type: 'text', rows: 3},
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
        title: 'Página Estrutura',
        subtitle: 'Página singleton',
      }
    },
  },
})

import {defineField, defineType} from 'sanity'
import {Quote} from 'lucide-react'

export default defineType({
  name: 'testimonialsPage',
  title: 'Página · Depoimentos',
  type: 'document',
  icon: Quote,
  fields: [
    defineField({
      name: 'title',
      title: 'Título da Página',
      type: 'string',
      initialValue: 'Depoimentos',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      fields: [
        {name: 'badge', title: 'Badge', type: 'string', initialValue: 'Histórias reais de famílias satisfeitas'},
        {name: 'title', title: 'Título', type: 'string', validation: (Rule) => Rule.required(), initialValue: 'Depoimentos'},
        {name: 'subtitle', title: 'Subtítulo', type: 'text', rows: 2},
      ],
    }),
    defineField({
      name: 'ratingSection',
      title: 'Seção de Avaliação',
      type: 'object',
      fields: [
        {name: 'rating', title: 'Avaliação (ex: 5.0)', type: 'string', initialValue: '5.0'},
        {name: 'description', title: 'Descrição', type: 'string', initialValue: 'Avaliação média de nossos residentes e familiares'},
      ],
    }),
    defineField({
      name: 'featuredSection',
      title: 'Seção Destaques',
      type: 'object',
      fields: [
        {name: 'title', title: 'Título', type: 'string', initialValue: 'Depoimentos em Destaque'},
        {name: 'subtitle', title: 'Subtítulo', type: 'string', initialValue: 'Histórias que nos motivam a continuar'},
      ],
    }),
    defineField({
      name: 'moreTestimonialsSection',
      title: 'Seção Mais Depoimentos',
      type: 'object',
      fields: [
        {name: 'title', title: 'Título', type: 'string', initialValue: 'Mais Depoimentos'},
        {name: 'subtitle', title: 'Subtítulo', type: 'string', initialValue: 'Centenas de famílias satisfeitas'},
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
        title: 'Página de Depoimentos',
        subtitle: 'Página singleton',
      }
    },
  },
})

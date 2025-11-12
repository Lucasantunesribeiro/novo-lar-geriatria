import {defineField, defineType} from 'sanity'
import {HelpCircle} from 'lucide-react'

export default defineType({
  name: 'faqPage',
  title: 'Página · Perguntas Frequentes',
  type: 'document',
  icon: HelpCircle,
  fields: [
    defineField({
      name: 'title',
      title: 'Título da Página',
      type: 'string',
      initialValue: 'Perguntas Frequentes',
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
      ],
    }),
    defineField({
      name: 'faqs',
      title: 'Perguntas e Respostas',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'question', title: 'Pergunta', type: 'string', validation: (Rule) => Rule.required()},
            {name: 'answer', title: 'Resposta', type: 'text', rows: 4, validation: (Rule) => Rule.required()},
            {name: 'order', title: 'Ordem', type: 'number'},
          ],
          preview: {
            select: {title: 'question', subtitle: 'answer'},
          },
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'ctaSection',
      title: 'Seção CTA (Ainda tem dúvidas?)',
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
                {name: 'variant', title: 'Variant', type: 'string', options: {list: ['primary', 'secondary']}},
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
        title: 'Perguntas Frequentes',
        subtitle: 'Página singleton',
      }
    },
  },
})

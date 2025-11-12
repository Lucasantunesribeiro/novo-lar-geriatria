import {defineField, defineType} from 'sanity'
import {CheckCircle} from 'lucide-react'

export default defineType({
  name: 'thankYouPage',
  title: 'Página · Obrigado',
  type: 'document',
  icon: CheckCircle,
  fields: [
    defineField({
      name: 'title',
      title: 'Título da Página',
      type: 'string',
      initialValue: 'Obrigado',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      fields: [
        {name: 'title', title: 'Título', type: 'string', validation: (Rule) => Rule.required(), initialValue: 'Mensagem Enviada com Sucesso!'},
        {name: 'description', title: 'Descrição', type: 'text', rows: 3},
      ],
    }),
    defineField({
      name: 'badges',
      title: 'Badges',
      type: 'object',
      fields: [
        {name: 'unitSelected', title: 'Badge Unidade', type: 'string', initialValue: 'Unidade Selecionada'},
        {name: 'nextSteps', title: 'Badge Próximos Passos', type: 'string', initialValue: 'Próximos Passos'},
      ],
    }),
    defineField({
      name: 'contactTime',
      title: 'Texto Tempo de Contato',
      type: 'text',
      rows: 2,
      initialValue: 'Entraremos em contato dentro de 24 horas úteis',
    }),
    defineField({
      name: 'backButton',
      title: 'Label Botão Voltar',
      type: 'string',
      initialValue: 'Voltar para Home',
    }),
    defineField({
      name: 'quickActionsSection',
      title: 'Seção Ações Rápidas',
      type: 'object',
      fields: [
        {name: 'title', title: 'Título', type: 'string', initialValue: 'Precisa de Atendimento Imediato?'},
        {name: 'description', title: 'Descrição', type: 'text', rows: 2},
        {
          name: 'cards',
          title: 'Cards',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {name: 'title', title: 'Título', type: 'string'},
                {name: 'description', title: 'Descrição', type: 'string'},
                {name: 'href', title: 'Link', type: 'string'},
                {name: 'icon', title: 'Ícone', type: 'string', options: {list: ['Phone', 'MessageSquare']}},
              ],
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'exploreSection',
      title: 'Seção Explore Mais',
      type: 'object',
      fields: [
        {name: 'title', title: 'Título', type: 'string', initialValue: 'Enquanto Aguarda, Conheça Mais'},
        {
          name: 'cards',
          title: 'Cards',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {name: 'title', title: 'Título', type: 'string'},
                {name: 'description', title: 'Descrição', type: 'text', rows: 2},
                {name: 'href', title: 'Link', type: 'string'},
                {name: 'icon', title: 'Ícone', type: 'string', options: {list: ['Building2', 'HeartHandshake', 'FileText']}},
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
        title: 'Página Obrigado',
        subtitle: 'Página singleton',
      }
    },
  },
})

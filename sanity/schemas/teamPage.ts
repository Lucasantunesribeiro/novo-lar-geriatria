import {defineField, defineType} from 'sanity'
import {Users} from 'lucide-react'

export default defineType({
  name: 'teamPage',
  title: 'Página · Equipe',
  type: 'document',
  icon: Users,
  fields: [
    defineField({
      name: 'title',
      title: 'Título da Página',
      type: 'string',
      initialValue: 'Nossa Equipe',
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
      name: 'specialists',
      title: 'Especialidades da Equipe',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'icon', title: 'Ícone', type: 'string', options: {list: ['Stethoscope', 'Heart', 'Activity', 'Users', 'Brain', 'Apple']}},
            {name: 'title', title: 'Título', type: 'string'},
            {name: 'description', title: 'Descrição', type: 'string'},
          ],
          preview: {
            select: {title: 'title', subtitle: 'description'},
          },
        },
      ],
    }),
    defineField({
      name: 'presentationSection',
      title: 'Seção Apresentação',
      type: 'object',
      fields: [
        {name: 'title', title: 'Título', type: 'string', initialValue: 'Profissionais Qualificados e Dedicados'},
        {name: 'description', title: 'Descrição', type: 'text', rows: 3},
      ],
    }),
    defineField({
      name: 'differentialSection',
      title: 'Seção Diferencial',
      type: 'object',
      fields: [
        {name: 'title', title: 'Título', type: 'string', initialValue: 'Cuidado Humanizado e Profissional'},
        {name: 'description', title: 'Descrição', type: 'text', rows: 3},
        {
          name: 'box',
          title: 'Box Destaque',
          type: 'object',
          fields: [
            {name: 'title', title: 'Título', type: 'string'},
            {name: 'description', title: 'Descrição', type: 'string'},
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
        title: 'Página Equipe',
        subtitle: 'Página singleton',
      }
    },
  },
})

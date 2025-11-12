import {defineField, defineType} from 'sanity'
import {BookOpen} from 'lucide-react'

export default defineType({
  name: 'blogIndexPage',
  title: 'Página · Blog (Index)',
  type: 'document',
  icon: BookOpen,
  fields: [
    defineField({
      name: 'title',
      title: 'Título da Página',
      type: 'string',
      initialValue: 'Blog',
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
      name: 'featuredSection',
      title: 'Seção Em Destaque',
      type: 'object',
      fields: [
        {name: 'title', title: 'Título', type: 'string'},
        {name: 'showIcon', title: 'Mostrar Ícone', type: 'boolean', initialValue: true},
      ],
    }),
    defineField({
      name: 'allPostsSection',
      title: 'Seção Todos os Posts',
      type: 'object',
      fields: [
        {name: 'title', title: 'Título', type: 'string'},
        {name: 'showIcon', title: 'Mostrar Ícone', type: 'boolean', initialValue: true},
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
        title: 'Página Blog (Index)',
        subtitle: 'Página singleton',
      }
    },
  },
})

import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'blogPostsSection',
  title: 'Seção · Blog',
  type: 'object',
  fields: [
    defineField({name: 'title', title: 'Título', type: 'string'}),
    defineField({name: 'description', title: 'Descrição', type: 'text', rows: 3}),
    defineField({
      name: 'mode',
      title: 'Origem dos posts',
      type: 'string',
      options: {
        list: [
          {title: 'Últimos posts', value: 'latest'},
          {title: 'Selecionar posts', value: 'selected'},
        ],
      },
      initialValue: 'latest',
    }),
    defineField({
      name: 'limit',
      title: 'Quantidade (quando últimos posts)',
      type: 'number',
      initialValue: 3,
      hidden: ({parent}) => parent?.mode !== 'latest',
    }),
    defineField({
      name: 'posts',
      title: 'Posts',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'blogPost'}]}],
      hidden: ({parent}) => parent?.mode !== 'selected',
    }),
  ],
  preview: {
    select: {title: 'title', mode: 'mode'},
    prepare({title, mode}) {
      return {
        title: title || 'Blog',
        subtitle: mode === 'selected' ? 'Seleção manual' : 'Últimos posts',
      }
    },
  },
})

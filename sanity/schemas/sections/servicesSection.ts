import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'servicesSection',
  title: 'Seção · Serviços',
  type: 'object',
  fields: [
    defineField({name: 'title', title: 'Título', type: 'string'}),
    defineField({name: 'description', title: 'Descrição', type: 'text', rows: 3}),
    defineField({
      name: 'mode',
      title: 'Origem dos dados',
      type: 'string',
      options: {
        list: [
          {title: 'Serviços em destaque', value: 'featured'},
          {title: 'Selecionar manualmente', value: 'selected'},
          {title: 'Todos os serviços', value: 'all'},
        ],
        layout: 'radio',
      },
      initialValue: 'featured',
    }),
    defineField({
      name: 'services',
      title: 'Serviços',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'service'}]}],
      hidden: ({parent}) => parent?.mode !== 'selected',
    }),
  ],
  preview: {
    select: {title: 'title', mode: 'mode'},
    prepare({title, mode}) {
      let subtitle = 'Todos os serviços'
      if (mode === 'featured') subtitle = 'Serviços em destaque'
      if (mode === 'selected') subtitle = 'Lista manual'
      return {
        title: title || 'Serviços',
        subtitle,
      }
    },
  },
})

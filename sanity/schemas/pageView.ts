import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'pageView',
  title: 'Estatísticas de Visualização',
  type: 'document',
  fields: [
    defineField({
      name: 'slug',
      title: 'Slug da Página',
      type: 'string',
    }),
    defineField({
      name: 'views',
      title: 'Visualizações',
      type: 'number',
      initialValue: 0,
    }),
  ],
  preview: {
    select: {
      title: 'slug',
      subtitle: 'views',
    },
    prepare({ title, subtitle }) {
      return {
        title: `Página: ${title}`,
        subtitle: `${subtitle || 0} visualizações`,
      }
    }
  }
})

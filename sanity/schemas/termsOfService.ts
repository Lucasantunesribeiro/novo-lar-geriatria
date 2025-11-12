import {defineField, defineType} from 'sanity'
import {FileText} from 'lucide-react'

export default defineType({
  name: 'termsOfService',
  title: 'Termos de Uso',
  type: 'document',
  icon: FileText,
  fields: [
    defineField({
      name: 'title',
      title: 'Título da Página',
      type: 'string',
      initialValue: 'Termos de Uso',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'lastUpdated',
      title: 'Data de Atualização',
      type: 'string',
      initialValue: 'Janeiro de 2025',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      fields: [
        {name: 'title', title: 'Título', type: 'string', validation: (Rule) => Rule.required()},
      ],
    }),
    defineField({
      name: 'sections',
      title: 'Seções de Conteúdo',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'title', title: 'Título da Seção', type: 'string', validation: (Rule) => Rule.required()},
            {
              name: 'content',
              title: 'Conteúdo',
              type: 'array',
              of: [
                {
                  type: 'block',
                  styles: [
                    {title: 'Normal', value: 'normal'},
                    {title: 'H3', value: 'h3'},
                    {title: 'H4', value: 'h4'},
                  ],
                  lists: [
                    {title: 'Lista', value: 'bullet'},
                    {title: 'Lista numerada', value: 'number'},
                  ],
                  marks: {
                    decorators: [
                      {title: 'Negrito', value: 'strong'},
                      {title: 'Itálico', value: 'em'},
                    ],
                  },
                },
              ],
            },
          ],
          preview: {
            select: {title: 'title'},
            prepare({title}) {
              return {
                title: title || 'Seção sem título',
              }
            },
          },
        },
      ],
    }),
    defineField({
      name: 'contactInfo',
      title: 'Informações de Contato',
      type: 'object',
      fields: [
        {name: 'email', title: 'E-mail', type: 'string'},
        {name: 'phone', title: 'Telefone', type: 'string'},
        {name: 'address', title: 'Endereço', type: 'text', rows: 2},
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
        title: 'Termos de Uso',
        subtitle: 'Documento singleton',
      }
    },
  },
})

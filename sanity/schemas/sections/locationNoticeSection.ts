import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'locationNoticeSection',
  title: 'Aviso de Localização',
  type: 'object',
  fields: [
    defineField({
      name: 'text',
      title: 'Texto do aviso',
      description: 'Aparece em um banner amarelo/âmbar. Use para informar que as unidades ficam em Porto Alegre.',
      type: 'text',
      rows: 2,
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {text: 'text'},
    prepare({text}) {
      return {
        title: text?.substring(0, 60) || 'Aviso de localização',
        subtitle: 'Aviso · Banner âmbar',
      }
    },
  },
})

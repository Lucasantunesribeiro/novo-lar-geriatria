import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'contactSection',
  title: 'Seção · Contato',
  type: 'object',
  fields: [
    defineField({name: 'title', title: 'Título', type: 'string'}),
    defineField({name: 'description', title: 'Descrição', type: 'text', rows: 3}),
    defineField({
      name: 'contacts',
      title: 'Canais de contato',
      type: 'array',
      of: [
        defineField({
          name: 'contact',
          title: 'Canal',
          type: 'object',
          fields: [
            defineField({
              name: 'type',
              title: 'Tipo',
              type: 'string',
              options: {
                list: [
                  {title: 'Telefone', value: 'phone'},
                  {title: 'WhatsApp', value: 'whatsapp'},
                  {title: 'E-mail', value: 'email'},
                  {title: 'Endereço', value: 'address'},
                  {title: 'Outro', value: 'custom'},
                ],
              },
              initialValue: 'phone',
            }),
            defineField({name: 'label', title: 'Label', type: 'string'}),
            defineField({name: 'value', title: 'Valor', type: 'string', validation: (Rule) => Rule.required()}),
            defineField({name: 'href', title: 'Link', type: 'string'}),
            defineField({name: 'icon', title: 'Ícone (Lucide)', type: 'string'}),
          ],
        }),
      ],
    }),
    defineField({
      name: 'showForm',
      title: 'Exibir formulário padrão',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  preview: {
    select: {title: 'title', count: 'contacts.length'},
    prepare({title, count}) {
      return {
        title: title || 'Contato',
        subtitle: `${count || 0} canais`,
      }
    },
  },
})

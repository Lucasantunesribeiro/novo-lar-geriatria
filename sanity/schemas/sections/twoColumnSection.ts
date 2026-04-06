import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'twoColumnSection',
  title: 'Seção · Duas Colunas',
  type: 'object',
  fields: [
    // Nível da seção
    defineField({name: 'eyebrow', title: 'Etiqueta da seção (opcional)', type: 'string'}),
    defineField({name: 'sectionHeading', title: 'Título centralizado da seção (opcional)', type: 'string'}),
    defineField({
      name: 'background',
      title: 'Fundo',
      type: 'string',
      options: {
        list: [
          {title: 'Branco', value: 'white'},
          {title: 'Cinza claro', value: 'gray'},
        ],
        layout: 'radio',
      },
      initialValue: 'white',
    }),

    // Coluna esquerda
    defineField({name: 'leftEyebrow', title: 'Etiqueta coluna esquerda', type: 'string'}),
    defineField({
      name: 'leftHeading',
      title: 'Título coluna esquerda',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'leftIcon',
      title: 'Ícone coluna esquerda (nome Lucide, ex: Brain)',
      type: 'string',
      description: 'Nome exato do ícone do Lucide React. Ex: Brain, MapPin, Users, Stethoscope.',
    }),
    defineField({
      name: 'leftParagraphs',
      title: 'Parágrafos coluna esquerda',
      type: 'array',
      of: [{type: 'text', rows: 3}],
      validation: (Rule) => Rule.min(1),
    }),

    // Coluna direita
    defineField({
      name: 'rightHeading',
      title: 'Título coluna direita',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'rightType',
      title: 'Tipo de conteúdo — coluna direita',
      type: 'string',
      options: {
        list: [
          {title: 'Lista com checkmarks', value: 'checklist'},
          {title: 'Cards com destaque', value: 'cards'},
          {title: 'Tabela de distâncias', value: 'distanceTable'},
        ],
        layout: 'radio',
      },
      initialValue: 'checklist',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'checklistItems',
      title: 'Itens da lista (checkmarks)',
      description: 'Ativo apenas quando "Tipo" é "Lista com checkmarks".',
      type: 'array',
      of: [{type: 'string'}],
      hidden: ({parent}) => parent?.rightType !== 'checklist',
    }),
    defineField({
      name: 'cardItems',
      title: 'Cards com destaque',
      description: 'Ativo apenas quando "Tipo" é "Cards com destaque".',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({name: 'title', title: 'Título do card', type: 'string', validation: (Rule) => Rule.required()}),
            defineField({name: 'text', title: 'Descrição', type: 'text', rows: 2, validation: (Rule) => Rule.required()}),
            defineField({name: 'link', title: 'Link (opcional)', type: 'string'}),
            defineField({name: 'linkLabel', title: 'Texto do link', type: 'string'}),
          ],
          preview: {
            select: {title: 'title'},
            prepare({title}) {
              return {title: title || 'Card'}
            },
          },
        },
      ],
      hidden: ({parent}) => parent?.rightType !== 'cards',
    }),
    defineField({
      name: 'distanceRows',
      title: 'Linhas de distância',
      description: 'Ativo apenas quando "Tipo" é "Tabela de distâncias". Para páginas de cidades vizinhas.',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({name: 'city', title: 'Cidade', type: 'string', validation: (Rule) => Rule.required()}),
            defineField({name: 'time', title: 'Tempo (ex: 20–30 min)', type: 'string', validation: (Rule) => Rule.required()}),
            defineField({name: 'via', title: 'Via (ex: BR-116)', type: 'string'}),
          ],
          preview: {
            select: {city: 'city', time: 'time'},
            prepare({city, time}) {
              return {title: city, subtitle: time}
            },
          },
        },
      ],
      hidden: ({parent}) => parent?.rightType !== 'distanceTable',
    }),
  ],
  preview: {
    select: {leftHeading: 'leftHeading', rightHeading: 'rightHeading'},
    prepare({leftHeading, rightHeading}) {
      return {
        title: `${leftHeading || 'Col. Esq.'} / ${rightHeading || 'Col. Dir.'}`,
        subtitle: 'Seção · Duas Colunas',
      }
    },
  },
})

import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'service',
  title: 'Serviço',
  type: 'document',
  groups: [
    {name: 'conteudo', title: 'Conteúdo', default: true},
    {name: 'fotos', title: 'Fotos'},
    {name: 'avancado', title: 'Avançado'},
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Título do Serviço',
      type: 'string',
      group: 'conteudo',
      validation: (Rule) => Rule.required().min(3).max(100),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      group: 'conteudo',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Descrição',
      type: 'text',
      rows: 5,
      group: 'conteudo',
      validation: (Rule) => Rule.required().min(50).max(500),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtítulo',
      type: 'string',
      group: 'conteudo',
      validation: (Rule) => Rule.max(140),
    }),
    defineField({
      name: 'summary',
      title: 'Resumo Curto',
      type: 'text',
      rows: 3,
      group: 'conteudo',
      validation: (Rule) => Rule.max(220),
    }),
    defineField({
      name: 'detailParagraphs',
      title: 'Descrição Completa',
      type: 'array',
      of: [{type: 'text'}],
      group: 'conteudo',
      description: 'Parágrafos usados na página de detalhe do serviço.',
    }),
    defineField({
      name: 'highlights',
      title: 'Diferenciais',
      type: 'array',
      of: [{type: 'string'}],
      group: 'conteudo',
      validation: (Rule) => Rule.max(20),
    }),
    // Escondido de proposito: guarda a foto que ja estava no ar. Enquanto
    // ninguem enviar uma foto nova, e ela que aparece. Assim que houver
    // upload, o upload ganha (ver o coalesce em lib/sanity/queries.ts).
    defineField({
      name: 'heroImagePath',
      title: 'Caminho da imagem principal',
      type: 'string',
      group: 'fotos',
      hidden: true,
    }),
    defineField({
      name: 'heroImage',
      title: 'Imagem principal',
      type: 'image',
      group: 'fotos',
      options: {hotspot: true},
      description: 'Foto grande do topo da página do serviço.',
    }),
    defineField({
      name: 'heroImageAlt',
      title: 'Texto alternativo da imagem principal',
      type: 'string',
      group: 'fotos',
      description: 'Descrição curta da foto, para quem não enxerga. Se ficar vazio, usamos o nome do serviço.',
      validation: (Rule) => Rule.max(180),
    }),
    defineField({
      name: 'gallery',
      title: 'Galeria do serviço',
      type: 'array',
      group: 'fotos',
      description:
        'As quatro fotos que aparecem em mosaico na página /servicos. Arraste a foto nova sobre o quadro "Imagem" para trocar.',
      of: [
        {
          type: 'object',
          title: 'Foto',
          fields: [
            defineField({
              name: 'image',
              title: 'Imagem',
              type: 'image',
              options: {hotspot: true},
            }),
            defineField({
              name: 'imagePath',
              title: 'Caminho da imagem',
              type: 'string',
              hidden: true,
            }),
            defineField({
              name: 'alt',
              title: 'Texto alternativo',
              type: 'string',
              description:
                'Opcional. Descrição curta da foto, para quem não enxerga. Vazio, usamos o nome do serviço.',
              validation: (Rule) => Rule.max(180),
            }),
          ],
          preview: {
            select: {
              title: 'alt',
              media: 'image',
              caminho: 'imagePath',
            },
            prepare({title, media, caminho}) {
              const arquivo = caminho
                ? decodeURIComponent(String(caminho).split('/').pop() || '')
                : null
              return {
                title: title || 'Foto do serviço',
                subtitle: media
                  ? 'foto enviada aqui'
                  : arquivo
                    ? `foto atual do site: ${arquivo}`
                    : 'sem foto',
                media,
              }
            },
          },
        },
      ],
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      group: 'avancado',
      fields: [
        defineField({
          name: 'title',
          title: 'Meta Title',
          type: 'string',
          validation: (Rule) => Rule.max(60),
        }),
        defineField({
          name: 'description',
          title: 'Meta Description',
          type: 'text',
          rows: 2,
          validation: (Rule) => Rule.max(160),
        }),
      ],
    }),
    defineField({
      name: 'category',
      title: 'Categoria',
      type: 'reference',
      to: [{type: 'serviceCategory'}],
      group: 'avancado',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'icon',
      title: 'Ícone (nome do Lucide React)',
      type: 'string',
      description: 'Ex: Heart, Activity, Users, Shield',
      group: 'avancado',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'unitAvailability',
      title: 'Disponível nas Unidades',
      type: 'array',
      group: 'avancado',
      of: [{ type: 'reference', to: [{ type: 'unit' }] }],
    }),
    defineField({
      name: 'featured',
      title: 'Serviço em Destaque?',
      type: 'boolean',
      group: 'avancado',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
    },
    prepare({ title, subtitle }) {
      return {
        title,
        subtitle: subtitle?.slice(0, 60) + '...',
      }
    },
  },
})

import { defineField, defineType } from 'sanity'

/**
 * Rodape do site — 100% editavel.
 *
 * Os campos aqui espelham, um a um, o rodape que esta no ar
 * (components/layout/FooterLight.tsx). Campo vazio = fica como esta hoje.
 */
export default defineType({
  name: 'footerConfig',
  title: 'Rodapé do site',
  type: 'document',
  // @ts-ignore - __experimental_singleton is valid
  __experimental_singleton: true,
  groups: [
    { name: 'marca', title: 'Logo e descrição', default: true },
    { name: 'colunas', title: 'Colunas de links' },
    { name: 'unidades', title: 'Unidades e redes sociais' },
    { name: 'rodape', title: 'Linha final' },
    { name: 'aparencia', title: 'Tamanhos e cores' },
  ],
  fields: [
    // ── Logo e descricao ─────────────────────────────────────────
    defineField({
      name: 'logo',
      title: 'Logo do rodapé',
      type: 'image',
      description: 'Vazio = usa a logo atual.',
      group: 'marca',
      options: { hotspot: true },
    }),
    defineField({
      name: 'logoAlt',
      title: 'Texto alternativo da logo',
      type: 'string',
      group: 'marca',
    }),
    defineField({
      name: 'estiloLogo',
      title: 'Tamanho da logo',
      type: 'estiloImagem',
      group: 'marca',
    }),
    defineField({
      name: 'descricao',
      title: 'Texto abaixo da logo',
      type: 'text',
      rows: 3,
      group: 'marca',
    }),
    defineField({
      name: 'mostrarTelefone',
      title: 'Mostrar botão de telefone',
      type: 'boolean',
      group: 'marca',
      initialValue: true,
    }),
    defineField({
      name: 'telefoneTexto',
      title: 'Texto do botão de telefone',
      type: 'string',
      description: 'Vazio = telefone central atual.',
      group: 'marca',
    }),
    defineField({
      name: 'telefoneLink',
      title: 'Link de discagem',
      type: 'string',
      description: 'Ex: tel:+555133769462',
      group: 'marca',
    }),
    defineField({
      name: 'mostrarEmail',
      title: 'Mostrar botão de e-mail',
      type: 'boolean',
      group: 'marca',
      initialValue: true,
    }),
    defineField({
      name: 'emailTexto',
      title: 'Texto do botão de e-mail',
      type: 'string',
      group: 'marca',
    }),

    // ── Colunas de links ─────────────────────────────────────────
    defineField({
      name: 'colunas',
      title: 'Colunas de links',
      type: 'array',
      description:
        'Cada coluna vira uma lista no rodapé. Vazio = as colunas atuais (Institucional e Explore).',
      group: 'colunas',
      of: [
        defineField({
          name: 'coluna',
          type: 'object',
          fields: [
            defineField({
              name: 'titulo',
              title: 'Título da coluna',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'links',
              title: 'Links',
              type: 'array',
              of: [
                defineField({
                  name: 'link',
                  type: 'object',
                  fields: [
                    defineField({ name: 'label', title: 'Texto', type: 'string' }),
                    defineField({ name: 'href', title: 'Endereço', type: 'string' }),
                  ],
                  preview: { select: { title: 'label', subtitle: 'href' } },
                }),
              ],
            }),
          ],
          preview: {
            select: { title: 'titulo', links: 'links' },
            prepare({ title, links }) {
              const n = Array.isArray(links) ? links.length : 0
              return { title: title || 'Coluna', subtitle: `${n} link(s)` }
            },
          },
        }),
      ],
    }),

    // ── Unidades e redes ─────────────────────────────────────────
    defineField({
      name: 'mostrarUnidades',
      title: 'Mostrar a coluna de unidades',
      type: 'boolean',
      group: 'unidades',
      initialValue: true,
    }),
    defineField({
      name: 'tituloUnidades',
      title: 'Título da coluna de unidades',
      type: 'string',
      description: 'Ex: "Unidades"',
      group: 'unidades',
    }),
    defineField({
      name: 'linksUnidades',
      title: 'Unidades listadas',
      type: 'array',
      description: 'Vazio = as unidades cadastradas hoje.',
      group: 'unidades',
      of: [
        defineField({
          name: 'unidadeLink',
          type: 'object',
          fields: [
            defineField({ name: 'label', title: 'Nome', type: 'string' }),
            defineField({ name: 'href', title: 'Endereço', type: 'string' }),
          ],
          preview: { select: { title: 'label', subtitle: 'href' } },
        }),
      ],
    }),
    defineField({
      name: 'facebook',
      title: 'Link do Facebook',
      type: 'string',
      description: 'Vazio = esconde o ícone.',
      group: 'unidades',
    }),
    defineField({
      name: 'instagram',
      title: 'Link do Instagram',
      type: 'string',
      description: 'Vazio = esconde o ícone.',
      group: 'unidades',
    }),

    // ── Linha final ──────────────────────────────────────────────
    defineField({
      name: 'textoCopyright',
      title: 'Texto da linha final',
      type: 'string',
      description:
        'Vazio = "© <ano> Novo Lar Geriatria. Porto Alegre - RS. Todos os direitos reservados."',
      group: 'rodape',
    }),
    defineField({
      name: 'mostrarAno',
      title: 'Colocar o ano atual antes do texto',
      type: 'boolean',
      group: 'rodape',
      initialValue: true,
    }),

    // ── Aparencia ────────────────────────────────────────────────
    defineField({
      name: 'estiloTitulos',
      title: 'Títulos das colunas',
      type: 'estiloTexto',
      group: 'aparencia',
    }),
    defineField({
      name: 'estiloLinks',
      title: 'Links',
      type: 'estiloTexto',
      group: 'aparencia',
    }),
    defineField({
      name: 'estiloDescricao',
      title: 'Texto abaixo da logo',
      type: 'estiloTexto',
      group: 'aparencia',
    }),
    defineField({
      name: 'corDeFundo',
      title: 'Cor de fundo do rodapé',
      type: 'string',
      description: 'Ex: #FFFFFF. Vazio = cor atual.',
      group: 'aparencia',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Rodapé do site',
        subtitle: 'Logo, colunas, unidades e redes',
      }
    },
  },
})

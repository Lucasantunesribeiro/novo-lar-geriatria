import { defineField, defineType } from 'sanity'

/**
 * Cabecalho do site — 100% editavel.
 *
 * Todo campo e opcional. Campo vazio = o cabecalho fica exatamente como esta no
 * ar hoje (os valores atuais vivem em components/layout/HeaderWrapper.tsx como
 * padrao). Quem consome: HeaderWrapper -> Header.
 */
export default defineType({
  name: 'headerConfig',
  title: 'Cabeçalho do site',
  type: 'document',
  // @ts-ignore - __experimental_singleton is valid
  __experimental_singleton: true,
  groups: [
    { name: 'topo', title: 'Barra de cima', default: true },
    { name: 'menu', title: 'Menu' },
    { name: 'contato', title: 'Telefones e WhatsApp' },
    { name: 'logo', title: 'Logo' },
    { name: 'aparencia', title: 'Tamanhos e cores' },
  ],
  fields: [
    // ── Barra de cima ────────────────────────────────────────────
    defineField({
      name: 'showTopBar',
      title: 'Mostrar a barra de cima',
      type: 'boolean',
      description: 'A faixa azul escura acima do menu.',
      group: 'topo',
      initialValue: true,
    }),
    defineField({
      name: 'topBarBusinessHours',
      title: 'Horário (lado esquerdo)',
      type: 'string',
      description: 'Ex: "Atendimento Comercial 9h-19h · Equipe 24h"',
      group: 'topo',
    }),
    defineField({
      name: 'topBarText',
      title: 'Frase do meio',
      type: 'string',
      description: 'Ex: "Residencial Geriátrico em Porto Alegre - Novo Lar"',
      group: 'topo',
    }),
    defineField({
      name: 'topBarLinks',
      title: 'Links do lado direito',
      type: 'array',
      description: 'Arraste para reordenar. Adicione ou remova quantos quiser.',
      group: 'topo',
      of: [
        defineField({
          name: 'topBarLink',
          type: 'object',
          fields: [
            defineField({
              name: 'label',
              title: 'Texto do link',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'href',
              title: 'Endereço',
              type: 'string',
              description: 'Ex: /contato',
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: { select: { title: 'label', subtitle: 'href' } },
        }),
      ],
    }),

    // ── Menu ─────────────────────────────────────────────────────
    defineField({
      name: 'mainNavigation',
      title: 'Itens do menu',
      type: 'array',
      description:
        'O menu principal do site. Arraste para reordenar; adicione ou remova itens à vontade.',
      group: 'menu',
      of: [
        defineField({
          name: 'navItem',
          type: 'object',
          fields: [
            defineField({
              name: 'label',
              title: 'Texto do item',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'href',
              title: 'Endereço',
              type: 'string',
              description: 'Ex: /sobre. Deixe vazio se este item for só um menu suspenso.',
            }),
            defineField({
              name: 'type',
              title: 'Tipo',
              type: 'string',
              options: {
                list: [
                  { title: 'Link simples', value: 'link' },
                  { title: 'Menu suspenso', value: 'customDropdown' },
                ],
                layout: 'radio',
              },
              initialValue: 'link',
            }),
            defineField({
              name: 'customDropdownItems',
              title: 'Itens do menu suspenso',
              type: 'array',
              hidden: ({ parent }) => parent?.type !== 'customDropdown',
              of: [
                defineField({
                  name: 'dropdownItem',
                  type: 'object',
                  fields: [
                    defineField({ name: 'label', title: 'Texto', type: 'string' }),
                    defineField({ name: 'href', title: 'Endereço', type: 'string' }),
                    defineField({
                      name: 'description',
                      title: 'Descrição (opcional)',
                      type: 'string',
                    }),
                  ],
                  preview: { select: { title: 'label', subtitle: 'href' } },
                }),
              ],
            }),
          ],
          preview: {
            select: { title: 'label', subtitle: 'href', type: 'type' },
            prepare({ title, subtitle, type }) {
              return {
                title: title || 'Sem texto',
                subtitle: type === 'customDropdown' ? 'Menu suspenso' : subtitle,
              }
            },
          },
        }),
      ],
    }),
    defineField({
      name: 'showUnitsDropdown',
      title: 'Mostrar o menu "Unidades"',
      type: 'boolean',
      group: 'menu',
      initialValue: true,
    }),
    defineField({
      name: 'unitsDropdownLabel',
      title: 'Texto do menu de unidades',
      type: 'string',
      description: 'Ex: "Unidades"',
      group: 'menu',
      hidden: ({ document }) => document?.showUnitsDropdown === false,
    }),
    defineField({
      name: 'unitsDropdownItems',
      title: 'Unidades listadas no menu',
      type: 'array',
      description: 'Vazio = usa as unidades atuais do site.',
      group: 'menu',
      hidden: ({ document }) => document?.showUnitsDropdown === false,
      of: [
        defineField({
          name: 'unitLink',
          type: 'object',
          fields: [
            defineField({ name: 'label', title: 'Nome da unidade', type: 'string' }),
            defineField({ name: 'href', title: 'Endereço', type: 'string' }),
          ],
          preview: { select: { title: 'label', subtitle: 'href' } },
        }),
      ],
    }),
    defineField({
      name: 'mobileMenuTitle',
      title: 'Título do menu no celular',
      type: 'string',
      group: 'menu',
    }),

    // ── Telefones e WhatsApp ─────────────────────────────────────
    defineField({
      name: 'showPhoneButton',
      title: 'Mostrar botão(ões) de telefone',
      type: 'boolean',
      group: 'contato',
      initialValue: true,
    }),
    defineField({
      name: 'phones',
      title: 'Telefones do cabeçalho',
      type: 'array',
      description:
        'Adicione quantos telefones quiser — cada um vira um botão no cabeçalho (ex.: Central, Plantão 24h).',
      group: 'contato',
      hidden: ({ document }) => document?.showPhoneButton === false,
      of: [
        defineField({
          name: 'headerPhone',
          type: 'object',
          title: 'Telefone',
          fields: [
            defineField({
              name: 'label',
              title: 'Texto do botão',
              type: 'string',
              description: 'Ex: (51) 3346.7620',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'href',
              title: 'Link de discagem',
              type: 'string',
              description: 'Ex: tel:+555133467620',
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: { select: { title: 'label', subtitle: 'href' } },
        }),
      ],
    }),
    defineField({
      name: 'phoneButtonLabel',
      title: 'Texto do botão quando não há telefones cadastrados',
      type: 'string',
      group: 'contato',
      hidden: ({ document }) => document?.showPhoneButton === false,
    }),
    defineField({
      name: 'showWhatsappButton',
      title: 'Mostrar botão de WhatsApp',
      type: 'boolean',
      group: 'contato',
      initialValue: true,
    }),
    defineField({
      name: 'whatsappButtonLabel',
      title: 'Texto do botão de WhatsApp',
      type: 'string',
      group: 'contato',
      hidden: ({ document }) => document?.showWhatsappButton === false,
    }),
    defineField({
      name: 'whatsappNumber',
      title: 'Número do WhatsApp',
      type: 'string',
      description: 'Só números, com país e DDD. Ex: 5551920011523',
      group: 'contato',
      hidden: ({ document }) => document?.showWhatsappButton === false,
    }),
    defineField({
      name: 'whatsappDefaultMessage',
      title: 'Mensagem já escrita ao abrir o WhatsApp',
      type: 'text',
      rows: 3,
      group: 'contato',
      hidden: ({ document }) => document?.showWhatsappButton === false,
    }),

    // ── Logo ─────────────────────────────────────────────────────
    defineField({
      name: 'logo',
      title: 'Imagem da logo',
      type: 'image',
      description: 'Vazio = usa a logo atual do site.',
      group: 'logo',
      options: { hotspot: true },
    }),
    defineField({
      name: 'logoHeight',
      title: 'Altura da logo (px)',
      type: 'number',
      description: 'Ex: 48. Vazio = tamanho atual.',
      group: 'logo',
      validation: (Rule) => Rule.min(16).max(200),
    }),
    defineField({
      name: 'logoAlt',
      title: 'Texto alternativo da logo',
      type: 'string',
      description: 'Descrição da imagem para leitores de tela e para o Google.',
      group: 'logo',
    }),

    // ── Tamanhos e cores ─────────────────────────────────────────
    defineField({
      name: 'alturaBarra',
      title: 'Altura da barra do menu (px)',
      type: 'number',
      description: 'Ex: 100. Vazio = altura atual.',
      group: 'aparencia',
      validation: (Rule) => Rule.min(48).max(220),
    }),
    defineField({
      name: 'estiloTopo',
      title: 'Texto da barra de cima',
      type: 'estiloTexto',
      group: 'aparencia',
    }),
    defineField({
      name: 'estiloMenu',
      title: 'Texto do menu',
      type: 'estiloTexto',
      group: 'aparencia',
    }),
    defineField({
      name: 'estiloBotoes',
      title: 'Texto dos botões de contato',
      type: 'estiloTexto',
      group: 'aparencia',
    }),
    defineField({
      name: 'corFundoTopo',
      title: 'Cor de fundo da barra de cima',
      type: 'string',
      description: 'Ex: #2C3E6B. Vazio = cor atual.',
      group: 'aparencia',
    }),
    defineField({
      name: 'corFundoMenu',
      title: 'Cor de fundo da barra do menu',
      type: 'string',
      description: 'Ex: #FFFFFF. Vazio = cor atual.',
      group: 'aparencia',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Cabeçalho do site',
        subtitle: 'Menu, telefones, logo e tamanhos',
      }
    },
  },
})

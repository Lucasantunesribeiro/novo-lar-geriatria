import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'headerConfig',
  title: 'Configuração do Header',
  type: 'document',
  // @ts-ignore - __experimental_singleton is valid
  __experimental_singleton: true,
  fields: [
    // Top Bar
    defineField({
      name: 'showTopBar',
      title: 'Exibir Barra Superior',
      type: 'boolean',
      description: 'Mostrar/ocultar a barra superior com links',
      initialValue: true,
    }),
    defineField({
      name: 'topBarText',
      title: 'Texto da Barra Superior',
      type: 'string',
      description: 'Texto opcional à esquerda da barra superior',
    }),
    defineField({
      name: 'topBarLinks',
      title: 'Links da Barra Superior',
      type: 'array',
      description: 'Links exibidos na barra superior (Tour, Fotos, etc.)',
      of: [
        defineField({
          name: 'topBarLink',
          type: 'object',
          fields: [
            defineField({
              name: 'label',
              title: 'Texto do Link',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'href',
              title: 'URL',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {
              title: 'label',
              subtitle: 'href',
            },
          },
        }),
      ],
    }),
    defineField({
      name: 'topBarBusinessHours',
      title: 'Horário de Funcionamento',
      type: 'string',
      description: 'Ex: "Seg a Sex: 8h às 18h"',
    }),

    // Main Navigation
    defineField({
      name: 'mainNavigation',
      title: 'Navegação Principal',
      type: 'array',
      description: 'Menu principal do header (Serviços, Unidades, etc.)',
      of: [
        defineField({
          name: 'navItem',
          type: 'object',
          fields: [
            defineField({
              name: 'type',
              title: 'Tipo de Item',
              type: 'string',
              options: {
                list: [
                  { title: 'Link Simples', value: 'link' },
                  { title: 'Dropdown de Serviços', value: 'servicesDropdown' },
                  { title: 'Dropdown de Unidades', value: 'unitsDropdown' },
                  { title: 'Dropdown Customizado', value: 'customDropdown' },
                ],
              },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'id',
              title: 'ID Único',
              type: 'string',
              description: 'Identificador único para analytics e tracking',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'label',
              title: 'Texto do Menu',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'href',
              title: 'URL (para link simples)',
              type: 'string',
              hidden: ({ parent }) => parent?.type !== 'link',
            }),
            defineField({
              name: 'description',
              title: 'Descrição',
              type: 'string',
              description: 'Texto descritivo para dropdowns',
              hidden: ({ parent }) => parent?.type === 'link',
            }),
            defineField({
              name: 'serviceGroups',
              title: 'Grupos de Serviços',
              type: 'array',
              description: 'Referências para categorias de serviços',
              of: [{ type: 'reference', to: [{ type: 'serviceCategory' }] }],
              hidden: ({ parent }) => parent?.type !== 'servicesDropdown',
            }),
            defineField({
              name: 'customDropdownItems',
              title: 'Itens do Dropdown Customizado',
              type: 'array',
              of: [
                defineField({
                  name: 'dropdownItem',
                  type: 'object',
                  fields: [
                    defineField({
                      name: 'label',
                      title: 'Texto',
                      type: 'string',
                      validation: (Rule) => Rule.required(),
                    }),
                    defineField({
                      name: 'href',
                      title: 'URL',
                      type: 'string',
                      validation: (Rule) => Rule.required(),
                    }),
                    defineField({
                      name: 'description',
                      title: 'Descrição',
                      type: 'string',
                    }),
                  ],
                }),
              ],
              hidden: ({ parent }) => parent?.type !== 'customDropdown',
            }),
          ],
          preview: {
            select: {
              title: 'label',
              type: 'type',
              href: 'href',
            },
            prepare({ title, type, href }) {
              const typeLabels: Record<string, string> = {
                link: '🔗 Link',
                servicesDropdown: '📋 Serviços',
                unitsDropdown: '🏢 Unidades',
                customDropdown: '📂 Dropdown',
              }
              return {
                title: title || 'Sem título',
                subtitle: href || typeLabels[type as string] || type,
              }
            },
          },
        }),
      ],
    }),

    // Contact Buttons & Phones
    defineField({
      name: 'phones',
      title: 'Telefones e Contatos do Header',
      type: 'array',
      description: 'Adicione um ou mais números de telefone para exibir no header (ex.: Central, Plantão 24h, Ouvidoria).',
      of: [
        defineField({
          name: 'headerPhone',
          type: 'object',
          title: 'Telefone',
          fields: [
            defineField({
              name: 'label',
              title: 'Texto / Rótulo',
              type: 'string',
              description: 'Ex: (51) 3346-7620 ou Central Moinhos',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'href',
              title: 'Link de Discagem',
              type: 'string',
              description: 'Ex: tel:+555133467620 ou tel:+5551920011523',
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: { title: 'label', subtitle: 'href' },
          },
        }),
      ],
    }),
    defineField({
      name: 'showPhoneButton',
      title: 'Exibir Botão de Telefone',
      type: 'boolean',
      description: 'Mostrar botão de ligação no header',
      initialValue: true,
    }),
    defineField({
      name: 'phoneButtonLabel',
      title: 'Texto do Botão de Telefone',
      type: 'string',
      description: 'Ex: "Central Novo Lar"',
      hidden: ({ document }) => !document?.showPhoneButton,
    }),
    defineField({
      name: 'showWhatsappButton',
      title: 'Exibir Botão de WhatsApp',
      type: 'boolean',
      description: 'Mostrar botão de WhatsApp no header',
      initialValue: true,
    }),
    defineField({
      name: 'whatsappButtonLabel',
      title: 'Texto do Botão de WhatsApp',
      type: 'string',
      description: 'Ex: "Fale Conosco"',
      hidden: ({ document }) => !document?.showWhatsappButton,
    }),
    defineField({
      name: 'whatsappDefaultMessage',
      title: 'Mensagem Padrão do WhatsApp',
      type: 'text',
      rows: 3,
      description: 'Mensagem pré-preenchida ao abrir o WhatsApp',
      hidden: ({ document }) => !document?.showWhatsappButton,
    }),

    // Units Dropdown
    defineField({
      name: 'showUnitsDropdown',
      title: 'Exibir Dropdown de Unidades',
      type: 'boolean',
      description: 'Mostrar dropdown com lista de unidades',
      initialValue: true,
    }),
    defineField({
      name: 'unitsDropdownLabel',
      title: 'Texto do Dropdown de Unidades',
      type: 'string',
      description: 'Ex: "Nossas Unidades"',
      hidden: ({ document }) => !document?.showUnitsDropdown,
    }),

    // Logo
    defineField({
      name: 'logo',
      title: 'Logo do Header',
      type: 'image',
      description: 'Logo exibido no header (deixe vazio para usar o padrão)',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'logoHeight',
      title: 'Altura da Logo (px)',
      type: 'number',
      description: 'Ajuste o tamanho/altura da imagem da logo no header (em pixels, ex: 48).',
      initialValue: 48,
    }),

    // Mobile Menu
    defineField({
      name: 'mobileMenuTitle',
      title: 'Título do Menu Mobile',
      type: 'string',
      description: 'Texto exibido no topo do menu mobile',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Configuração do Header',
        subtitle: 'Menu, links e botões de contato',
      }
    },
  },
})

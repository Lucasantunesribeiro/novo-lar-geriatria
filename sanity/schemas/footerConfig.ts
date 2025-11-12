import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'footerConfig',
  title: 'Configuração do Footer',
  type: 'document',
  // @ts-ignore - __experimental_singleton is valid
  __experimental_singleton: true,
  fields: [
    // Logo
    defineField({
      name: 'logo',
      title: 'Logo do Footer',
      type: 'image',
      description: 'Logo exibido no footer (deixe vazio para usar o padrão)',
      options: {
        hotspot: true,
      },
    }),

    // Columns
    defineField({
      name: 'columns',
      title: 'Colunas do Footer',
      type: 'array',
      description: 'Estrutura de colunas do footer (máximo 5 colunas recomendado)',
      of: [
        defineField({
          name: 'column',
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Título da Coluna',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'type',
              title: 'Tipo de Coluna',
              type: 'string',
              options: {
                list: [
                  { title: 'Links Customizados', value: 'links' },
                  { title: 'Informações de Contato', value: 'contact' },
                  { title: 'Unidades', value: 'units' },
                  { title: 'Redes Sociais', value: 'social' },
                ],
              },
              validation: (Rule) => Rule.required(),
            }),

            // Para type = 'links'
            defineField({
              name: 'links',
              title: 'Links',
              type: 'array',
              description: 'Lista de links da coluna',
              of: [
                defineField({
                  name: 'link',
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
              hidden: ({ parent }) => parent?.type !== 'links',
            }),

            // Para type = 'contact'
            defineField({
              name: 'showEmail',
              title: 'Exibir Email',
              type: 'boolean',
              description: 'Mostrar email de contato (usa siteSettings.globalEmail)',
              hidden: ({ parent }) => parent?.type !== 'contact',
              initialValue: true,
            }),
            defineField({
              name: 'showPhone',
              title: 'Exibir Telefone',
              type: 'boolean',
              description: 'Mostrar telefone de contato (usa siteSettings.globalPhone)',
              hidden: ({ parent }) => parent?.type !== 'contact',
              initialValue: true,
            }),
            defineField({
              name: 'showAddress',
              title: 'Exibir Endereço',
              type: 'boolean',
              description: 'Mostrar endereço principal',
              hidden: ({ parent }) => parent?.type !== 'contact',
              initialValue: false,
            }),
            defineField({
              name: 'customAddress',
              title: 'Endereço Customizado',
              type: 'text',
              rows: 3,
              description: 'Endereço para exibir (se showAddress estiver ativo)',
              hidden: ({ parent }) => parent?.type !== 'contact' || !parent?.showAddress,
            }),
            defineField({
              name: 'showBusinessHours',
              title: 'Exibir Horário de Funcionamento',
              type: 'boolean',
              description: 'Mostrar horário de funcionamento',
              hidden: ({ parent }) => parent?.type !== 'contact',
              initialValue: false,
            }),
            defineField({
              name: 'businessHours',
              title: 'Horário de Funcionamento',
              type: 'string',
              description: 'Ex: "Seg a Sex: 8h às 18h"',
              hidden: ({ parent }) => parent?.type !== 'contact' || !parent?.showBusinessHours,
            }),

            // Para type = 'units'
            defineField({
              name: 'showAllUnits',
              title: 'Exibir Todas as Unidades',
              type: 'boolean',
              description: 'Mostrar automaticamente todas as unidades cadastradas',
              hidden: ({ parent }) => parent?.type !== 'units',
              initialValue: true,
            }),
            defineField({
              name: 'selectedUnits',
              title: 'Unidades Selecionadas',
              type: 'array',
              description: 'Escolha unidades específicas (se showAllUnits estiver desativado)',
              of: [{ type: 'reference', to: [{ type: 'unit' }] }],
              hidden: ({ parent }) => parent?.type !== 'units' || parent?.showAllUnits,
            }),
            defineField({
              name: 'showUnitPhone',
              title: 'Exibir Telefone das Unidades',
              type: 'boolean',
              description: 'Mostrar telefone de cada unidade',
              hidden: ({ parent }) => parent?.type !== 'units',
              initialValue: true,
            }),
            defineField({
              name: 'showUnitAddress',
              title: 'Exibir Endereço das Unidades',
              type: 'boolean',
              description: 'Mostrar endereço de cada unidade',
              hidden: ({ parent }) => parent?.type !== 'units',
              initialValue: false,
            }),

            // Para type = 'social'
            defineField({
              name: 'socialPlatforms',
              title: 'Plataformas Sociais',
              type: 'array',
              description: 'Redes sociais a exibir (usa URLs de siteSettings.socialLinks)',
              of: [
                {
                  type: 'string',
                  options: {
                    list: [
                      { title: 'Facebook', value: 'facebook' },
                      { title: 'Instagram', value: 'instagram' },
                      { title: 'LinkedIn', value: 'linkedin' },
                      { title: 'YouTube', value: 'youtube' },
                      { title: 'Twitter/X', value: 'twitter' },
                    ],
                  },
                },
              ],
              hidden: ({ parent }) => parent?.type !== 'social',
            }),
            defineField({
              name: 'socialTitle',
              title: 'Título da Seção Social',
              type: 'string',
              description: 'Ex: "Siga-nos nas redes sociais"',
              hidden: ({ parent }) => parent?.type !== 'social',
            }),
            defineField({
              name: 'socialLayout',
              title: 'Layout dos Ícones',
              type: 'string',
              options: {
                list: [
                  { title: 'Horizontal', value: 'horizontal' },
                  { title: 'Vertical', value: 'vertical' },
                ],
              },
              hidden: ({ parent }) => parent?.type !== 'social',
              initialValue: 'horizontal',
            }),
          ],
          preview: {
            select: {
              title: 'title',
              type: 'type',
            },
            prepare({ title, type }) {
              const typeIcons: Record<string, string> = {
                links: '🔗',
                contact: '📞',
                units: '🏢',
                social: '👥',
              }
              return {
                title: title || 'Sem título',
                subtitle: `${typeIcons[type as string] || ''} ${type}`,
              }
            },
          },
        }),
      ],
      validation: (Rule) =>
        Rule.max(5).warning('Recomendado máximo de 5 colunas para melhor visualização'),
    }),

    // Bottom Section
    defineField({
      name: 'bottomSection',
      title: 'Seção Inferior',
      type: 'object',
      description: 'Copyright e links inferiores',
      fields: [
        defineField({
          name: 'copyrightText',
          title: 'Texto de Copyright',
          type: 'string',
          description: 'Ex: "© 2024 Novo Lar Geriatria. Todos os direitos reservados."',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'showYear',
          title: 'Exibir Ano Atual',
          type: 'boolean',
          description: 'Atualizar automaticamente o ano no copyright',
          initialValue: true,
        }),
        defineField({
          name: 'bottomLinks',
          title: 'Links Inferiores',
          type: 'array',
          description: 'Links legais (Privacidade, Termos, etc.)',
          of: [
            defineField({
              name: 'bottomLink',
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
          name: 'showDeveloperCredit',
          title: 'Exibir Crédito de Desenvolvimento',
          type: 'boolean',
          description: 'Mostrar "Desenvolvido por..."',
          initialValue: false,
        }),
        defineField({
          name: 'developerName',
          title: 'Nome do Desenvolvedor',
          type: 'string',
          hidden: ({ parent }) => !parent?.showDeveloperCredit,
        }),
        defineField({
          name: 'developerUrl',
          title: 'URL do Desenvolvedor',
          type: 'url',
          hidden: ({ parent }) => !parent?.showDeveloperCredit,
        }),
      ],
    }),

    // Advanced Settings
    defineField({
      name: 'backgroundColor',
      title: 'Cor de Fundo',
      type: 'string',
      description: 'Cor de fundo do footer (deixe vazio para usar padrão #2C3E6B)',
    }),
    defineField({
      name: 'textColor',
      title: 'Cor do Texto',
      type: 'string',
      description: 'Cor do texto (deixe vazio para usar padrão white)',
    }),
    defineField({
      name: 'accentColor',
      title: 'Cor de Destaque',
      type: 'string',
      description: 'Cor de títulos e destaques (deixe vazio para usar padrão #8B6914)',
    }),
  ],
  preview: {
    select: {
      columns: 'columns',
    },
    prepare({ columns }) {
      const columnCount = columns?.length || 0
      return {
        title: 'Configuração do Footer',
        subtitle: `${columnCount} coluna${columnCount !== 1 ? 's' : ''} configurada${columnCount !== 1 ? 's' : ''}`,
      }
    },
  },
})

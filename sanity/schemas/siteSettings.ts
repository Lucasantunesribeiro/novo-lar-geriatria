import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Configurações do Site',
  type: 'document',
  // @ts-ignore - __experimental_singleton is valid
  __experimental_singleton: true,
  fields: [
    // SEO & Branding
    defineField({
      name: 'siteName',
      title: 'Nome do Site',
      type: 'string',
      description: 'Nome completo do site para SEO',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'siteUrl',
      title: 'URL do Site',
      type: 'url',
      description: 'URL principal do site (ex: https://novolargeriatra.com.br)',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'defaultMetaDescription',
      title: 'Descrição Padrão (Meta Description)',
      type: 'text',
      rows: 3,
      description: 'Descrição padrão para SEO (até 160 caracteres)',
      validation: (Rule) => Rule.max(160),
    }),
    defineField({
      name: 'globalPhone',
      title: 'Telefone Global',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'globalWhatsapp',
      title: 'WhatsApp Global',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'globalEmail',
      title: 'Email Global',
      type: 'string',
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: 'socialLinks',
      title: 'Redes Sociais',
      type: 'object',
      fields: [
        { name: 'facebook', type: 'url', title: 'Facebook' },
        { name: 'instagram', type: 'url', title: 'Instagram' },
        { name: 'linkedin', type: 'url', title: 'LinkedIn' },
        { name: 'youtube', type: 'url', title: 'YouTube' },
      ],
    }),
    defineField({
      name: 'topLinks',
      title: 'Links superiores',
      type: 'array',
      of: [
        defineField({
          name: 'link',
          title: 'Link',
          type: 'object',
          fields: [
            defineField({name: 'label', title: 'Label', type: 'string', validation: (Rule) => Rule.required()}),
            defineField({name: 'href', title: 'URL', type: 'string', validation: (Rule) => Rule.required()}),
          ],
        }),
      ],
    }),
    defineField({
      name: 'footerLinks',
      title: 'Links do rodapé',
      type: 'array',
      of: [
        defineField({
          name: 'footerGroup',
          title: 'Grupo',
          type: 'object',
          fields: [
            defineField({name: 'title', title: 'Título', type: 'string'}),
            defineField({
              name: 'links',
              title: 'Links',
              type: 'array',
              of: [
                defineField({
                  name: 'link',
                  title: 'Link',
                  type: 'object',
                  fields: [
                    defineField({name: 'label', title: 'Label', type: 'string'}),
                    defineField({name: 'href', title: 'URL', type: 'string'}),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'contactInfo',
      title: 'Contato',
      type: 'object',
      fields: [
        defineField({name: 'centralPhoneDisplay', title: 'Telefone principal (exibição)', type: 'string'}),
        defineField({name: 'centralPhoneDigits', title: 'Telefone principal (apenas dígitos)', type: 'string'}),
        defineField({name: 'whatsappDigits', title: 'WhatsApp (apenas dígitos)', type: 'string'}),
        defineField({name: 'visitation', title: 'Horário de visita', type: 'string'}),
        defineField({name: 'city', title: 'Cidade', type: 'string'}),
      ],
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'favicon',
      title: 'Favicon',
      type: 'image',
    }),
    defineField({
      name: 'defaultOgImage',
      title: 'Imagem Padrão para Compartilhamento (Open Graph)',
      type: 'image',
      options: { hotspot: true },
    }),

    // Header & Footer Configuration
    defineField({
      name: 'headerConfig',
      title: 'Configuração do Header',
      type: 'reference',
      to: [{ type: 'headerConfig' }],
      description: 'Referência para a configuração do header do site',
    }),
    defineField({
      name: 'footerConfig',
      title: 'Configuração do Footer',
      type: 'reference',
      to: [{ type: 'footerConfig' }],
      description: 'Referência para a configuração do footer do site',
    }),

    // Google Analytics & Tracking
    defineField({
      name: 'googleAnalyticsId',
      title: 'Google Analytics ID',
      type: 'string',
      description: 'ID do Google Analytics (ex: G-XXXXXXXXXX)',
    }),
    defineField({
      name: 'googleTagManagerId',
      title: 'Google Tag Manager ID',
      type: 'string',
      description: 'ID do Google Tag Manager (ex: GTM-XXXXXXX)',
    }),
    defineField({
      name: 'facebookPixelId',
      title: 'Facebook Pixel ID',
      type: 'string',
      description: 'ID do Facebook Pixel para tracking',
    }),
  ],
  preview: {
    select: {
      siteName: 'siteName',
      globalPhone: 'globalPhone',
    },
    prepare({ siteName, globalPhone }) {
      return {
        title: siteName || 'Configurações do Site',
        subtitle: globalPhone ? `📞 ${globalPhone}` : 'Configure o site',
      }
    },
  },
})

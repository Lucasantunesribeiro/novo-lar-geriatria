import {defineField, defineType} from 'sanity'
import {Mail} from 'lucide-react'

export default defineType({
  name: 'contactPage',
  title: 'Página · Contato',
  type: 'document',
  icon: Mail,
  fields: [
    defineField({
      name: 'title',
      title: 'Título da Página',
      type: 'string',
      initialValue: 'Contato',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      fields: [
        {name: 'title', title: 'Título', type: 'string', validation: (Rule) => Rule.required()},
        {name: 'subtitle', title: 'Subtítulo', type: 'text', rows: 2},
      ],
    }),
    defineField({
      name: 'formLabels',
      title: 'Labels do Formulário',
      type: 'object',
      fields: [
        {name: 'nameLabel', title: 'Label Nome', type: 'string', initialValue: 'Nome Completo *'},
        {name: 'namePlaceholder', title: 'Placeholder Nome', type: 'string', initialValue: 'Seu nome completo'},
        {name: 'emailLabel', title: 'Label E-mail', type: 'string', initialValue: 'E-mail *'},
        {name: 'emailPlaceholder', title: 'Placeholder E-mail', type: 'string', initialValue: 'seuemail@exemplo.com'},
        {name: 'phoneLabel', title: 'Label Telefone', type: 'string', initialValue: 'Telefone *'},
        {name: 'phonePlaceholder', title: 'Placeholder Telefone', type: 'string', initialValue: '(51) 99999-9999'},
        {name: 'unitLabel', title: 'Label Unidade', type: 'string', initialValue: 'Unidade de Interesse *'},
        {name: 'unitPlaceholder', title: 'Placeholder Unidade', type: 'string', initialValue: 'Selecione uma unidade'},
        {name: 'unitNotSure', title: 'Opção "Ainda não sei"', type: 'string', initialValue: 'Ainda não sei'},
        {name: 'messageLabel', title: 'Label Mensagem', type: 'string', initialValue: 'Mensagem *'},
        {name: 'messagePlaceholder', title: 'Placeholder Mensagem', type: 'string', initialValue: 'Conte-nos como podemos ajudá-lo...'},
        {name: 'submitButton', title: 'Botão Enviar', type: 'string', initialValue: 'Enviar Mensagem'},
        {name: 'successMessage', title: 'Mensagem Sucesso', type: 'string', initialValue: 'Mensagem enviada com sucesso!'},
        {name: 'redirectingMessage', title: 'Mensagem Redirecionando', type: 'string', initialValue: 'Redirecionando...'},
        {name: 'errorMessage', title: 'Mensagem Erro', type: 'string', initialValue: 'Erro ao enviar mensagem'},
        {name: 'responseTime', title: 'Tempo de Resposta', type: 'string', initialValue: 'Responderemos em até 24 horas úteis'},
      ],
    }),
    defineField({
      name: 'unitsSection',
      title: 'Seção Nossas Unidades',
      type: 'object',
      fields: [
        {name: 'title', title: 'Título', type: 'string', initialValue: 'Nossas Unidades'},
        {name: 'description', title: 'Descrição', type: 'text', rows: 2},
        {
          name: 'labels',
          title: 'Labels dos Cards',
          type: 'object',
          fields: [
            {name: 'phone', title: 'Label Telefone', type: 'string', initialValue: 'Telefone'},
            {name: 'whatsapp', title: 'Label WhatsApp', type: 'string', initialValue: 'WhatsApp'},
            {name: 'address', title: 'Label Endereço', type: 'string', initialValue: 'Endereço'},
            {name: 'hours', title: 'Label Horário', type: 'string', initialValue: 'Horário de Atendimento'},
          ],
        },
      ],
    }),
    defineField({
      name: 'phoneCtaSection',
      title: 'Seção CTA Telefone',
      type: 'object',
      fields: [
        {name: 'title', title: 'Título', type: 'string', initialValue: 'Prefere falar por telefone?'},
        {name: 'description', title: 'Descrição', type: 'text', rows: 2},
        {name: 'buttonLabel', title: 'Label Botão', type: 'string', initialValue: 'Ligar Agora'},
        {name: 'phone', title: 'Telefone', type: 'string', initialValue: '(51) 3346.7620'},
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
        title: 'Página de Contato',
        subtitle: 'Página singleton',
      }
    },
  },
})

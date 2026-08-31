import { defineField, defineType } from 'sanity'

/**
 * Textos que aparecem em varias paginas ao mesmo tempo.
 *
 * Ficam aqui porque nao pertencem a uma pagina so: o formulario de contato, o
 * aviso de cookies, a pagina de "nao encontrado" e a de agradecimento.
 * Como sempre: campo vazio = o texto que o site ja usa.
 */
export default defineType({
  name: 'textosGlobais',
  title: 'Textos do site',
  type: 'document',
  // @ts-ignore - __experimental_singleton is valid
  __experimental_singleton: true,
  groups: [
    { name: 'formulario', title: 'Formulário de contato', default: true },
    { name: 'cookies', title: 'Aviso de cookies' },
    { name: 'naoEncontrado', title: 'Página não encontrada' },
    { name: 'obrigado', title: 'Página de agradecimento' },
    { name: 'botoes', title: 'Botões flutuantes' },
    { name: 'rotulos', title: 'Rótulos e botões das páginas' },
  ],
  fields: [
    // ── Formulario ───────────────────────────────────────────────
    defineField({
      name: 'formTitulo',
      title: 'Título do formulário',
      type: 'string',
      description: 'Ex: "Envie sua Mensagem"',
      group: 'formulario',
    }),
    defineField({
      name: 'formLabelNome',
      title: 'Rótulo do campo Nome',
      type: 'string',
      group: 'formulario',
    }),
    defineField({
      name: 'formPlaceholderNome',
      title: 'Texto de exemplo no campo Nome',
      type: 'string',
      group: 'formulario',
    }),
    defineField({
      name: 'formLabelEmail',
      title: 'Rótulo do campo E-mail',
      type: 'string',
      group: 'formulario',
    }),
    defineField({
      name: 'formPlaceholderEmail',
      title: 'Texto de exemplo no campo E-mail',
      type: 'string',
      group: 'formulario',
    }),
    defineField({
      name: 'formLabelTelefone',
      title: 'Rótulo do campo Telefone',
      type: 'string',
      group: 'formulario',
    }),
    defineField({
      name: 'formPlaceholderTelefone',
      title: 'Texto de exemplo no campo Telefone',
      type: 'string',
      group: 'formulario',
    }),
    defineField({
      name: 'formLabelUnidade',
      title: 'Rótulo do campo Unidade',
      type: 'string',
      group: 'formulario',
    }),
    defineField({
      name: 'formOpcaoUnidadeVazia',
      title: 'Primeira opção da lista de unidades',
      type: 'string',
      description: 'Ex: "Selecione uma unidade"',
      group: 'formulario',
    }),
    defineField({
      name: 'formOpcaoNaoSei',
      title: 'Opção "ainda não sei"',
      type: 'string',
      group: 'formulario',
    }),
    defineField({
      name: 'formLabelMensagem',
      title: 'Rótulo do campo Mensagem',
      type: 'string',
      group: 'formulario',
    }),
    defineField({
      name: 'formPlaceholderMensagem',
      title: 'Texto de exemplo no campo Mensagem',
      type: 'string',
      group: 'formulario',
    }),
    defineField({
      name: 'formBotao',
      title: 'Texto do botão de enviar',
      type: 'string',
      group: 'formulario',
    }),
    defineField({
      name: 'formSucesso',
      title: 'Mensagem de sucesso',
      type: 'string',
      group: 'formulario',
    }),
    defineField({
      name: 'formSucessoDetalhe',
      title: 'Texto abaixo da mensagem de sucesso',
      type: 'string',
      group: 'formulario',
    }),
    defineField({
      name: 'formErro',
      title: 'Mensagem de erro',
      type: 'string',
      group: 'formulario',
    }),
    defineField({
      name: 'formRodape',
      title: 'Frase abaixo do botão de enviar',
      type: 'string',
      description: 'Ex: "Responderemos em até 24 horas úteis"',
      group: 'formulario',
    }),
    defineField({
      name: 'formSubtituloUnidades',
      title: 'Texto abaixo do título das unidades',
      type: 'text',
      rows: 2,
      group: 'formulario',
    }),
    defineField({
      name: 'formTituloTelefone',
      title: 'Título do bloco "prefere falar por telefone"',
      type: 'string',
      group: 'formulario',
    }),
    defineField({
      name: 'formTituloUnidades',
      title: 'Título da coluna de unidades',
      type: 'string',
      group: 'formulario',
    }),

    // ── Cookies ──────────────────────────────────────────────────
    defineField({
      name: 'cookiesMostrar',
      title: 'Mostrar o aviso de cookies',
      type: 'boolean',
      group: 'cookies',
      initialValue: true,
    }),
    defineField({
      name: 'cookiesTexto',
      title: 'Texto do aviso',
      type: 'text',
      rows: 3,
      group: 'cookies',
    }),
    defineField({
      name: 'cookiesAceitar',
      title: 'Texto do botão "aceitar"',
      type: 'string',
      group: 'cookies',
    }),
    defineField({
      name: 'cookiesRejeitar',
      title: 'Texto do botão "rejeitar"',
      type: 'string',
      group: 'cookies',
    }),
    defineField({
      name: 'cookiesPersonalizar',
      title: 'Texto do botão "personalizar"',
      type: 'string',
      group: 'cookies',
    }),

    // ── 404 ──────────────────────────────────────────────────────
    defineField({
      name: 'erroTitulo',
      title: 'Título da página não encontrada',
      type: 'string',
      group: 'naoEncontrado',
    }),
    defineField({
      name: 'erroDescricao',
      title: 'Texto da página não encontrada',
      type: 'text',
      rows: 3,
      group: 'naoEncontrado',
    }),
    defineField({
      name: 'erroBotao',
      title: 'Texto do botão',
      type: 'string',
      group: 'naoEncontrado',
    }),

    // ── Obrigado ─────────────────────────────────────────────────
    defineField({
      name: 'obrigadoTitulo',
      title: 'Título da página de agradecimento',
      type: 'string',
      group: 'obrigado',
    }),
    defineField({
      name: 'obrigadoDescricao',
      title: 'Texto da página de agradecimento',
      type: 'text',
      rows: 3,
      group: 'obrigado',
    }),

    // ── Botoes flutuantes ────────────────────────────────────────
    defineField({
      name: 'whatsappFlutuanteMostrar',
      title: 'Mostrar o botão flutuante de WhatsApp',
      type: 'boolean',
      group: 'botoes',
      initialValue: true,
    }),
    defineField({
      name: 'whatsappFlutuanteTexto',
      title: 'Texto do botão flutuante',
      type: 'string',
      group: 'botoes',
    }),
    defineField({
      name: 'barraCelularMostrar',
      title: 'Mostrar a barra fixa no celular',
      type: 'boolean',
      group: 'botoes',
      initialValue: true,
    }),
    defineField({
      name: 'barraCelularTextoLigar',
      title: 'Texto do botão de ligar (celular)',
      type: 'string',
      group: 'botoes',
    }),
    defineField({
      name: 'barraCelularTextoWhatsapp',
      title: 'Texto do botão de WhatsApp (celular)',
      type: 'string',
      group: 'botoes',
    }),
    // ── Rotulos de interface ─────────────────────────────────────
    defineField({
      name: 'rotuloVerServicos',
      title: 'Botão "ver todos os serviços" (página inicial)',
      type: 'string',
      group: 'rotulos',
    }),
    defineField({
      name: 'rotuloBuscaFamilia',
      title: 'Frase acima da lista de benefícios do serviço',
      type: 'string',
      description: 'Ex: "Cuidado importante quando a família busca:"',
      group: 'rotulos',
    }),
    defineField({
      name: 'rotuloBeneficios',
      title: 'Título da lista de benefícios (cartão de serviço)',
      type: 'string',
      description: 'Ex: "Principais benefícios"',
      group: 'rotulos',
    }),
    defineField({
      name: 'rotuloComoAcontece',
      title: 'Título "como o serviço acontece" (página do serviço)',
      type: 'string',
      group: 'rotulos',
    }),
    defineField({
      name: 'rotuloOutrosServicos',
      title: 'Título "outros serviços" (página do serviço)',
      type: 'string',
      group: 'rotulos',
    }),
    defineField({
      name: 'rotuloContatoUnidade',
      title: 'Título "informações de contato" (página da unidade)',
      type: 'string',
      group: 'rotulos',
    }),
    defineField({
      name: 'rotuloAcessarBlog',
      title: 'Botão "Acessar Blog" (página inicial)',
      type: 'string',
      group: 'rotulos',
    }),
    defineField({
      name: 'rotuloFaleWhatsapp',
      title: 'Texto do botão flutuante de WhatsApp',
      type: 'string',
      group: 'botoes',
    }),
    defineField({
      name: 'rotuloEtiquetaGoogle',
      title: 'Etiqueta acima dos depoimentos',
      type: 'string',
      group: 'rotulos',
    }),
    defineField({
      name: 'rotuloAvaliacoesGoogle',
      title: 'Texto das avaliações do Google',
      type: 'string',
      group: 'rotulos',
    }),
    defineField({
      name: 'artigoCtaTitulo',
      title: 'Título da chamada no fim do artigo',
      type: 'string',
      group: 'rotulos',
    }),
    defineField({
      name: 'artigoCtaDescricao',
      title: 'Texto da chamada no fim do artigo',
      type: 'text',
      rows: 3,
      group: 'rotulos',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Textos do site',
        subtitle: 'Formulário, cookies, 404 e agradecimento',
      }
    },
  },
})

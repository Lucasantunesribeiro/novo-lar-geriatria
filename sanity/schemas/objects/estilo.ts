import {defineField, defineType} from 'sanity'

/**
 * Ajustes visuais reutilizaveis.
 *
 * Regra de ouro: TODO campo aqui e opcional e, quando vazio, o site usa
 * exatamente o tamanho/cor que ja tinha. Ninguem precisa preencher nada para o
 * site continuar identico ao que esta no ar hoje.
 */

export const estiloTexto = defineType({
  name: 'estiloTexto',
  title: 'Tamanho e aparencia do texto',
  type: 'object',
  options: {collapsible: true, collapsed: true},
  fields: [
    defineField({
      name: 'tamanho',
      title: 'Tamanho da letra (px)',
      type: 'number',
      description: 'Deixe vazio para manter o tamanho atual do site.',
      validation: (Rule) => Rule.min(8).max(160),
    }),
    defineField({
      name: 'tamanhoMobile',
      title: 'Tamanho da letra no celular (px)',
      type: 'number',
      description: 'Opcional. Se vazio, usa o mesmo tamanho do computador.',
      validation: (Rule) => Rule.min(8).max(120),
    }),
    defineField({
      name: 'peso',
      title: 'Espessura',
      type: 'string',
      options: {
        list: [
          {title: 'Padrao', value: ''},
          {title: 'Fina', value: '300'},
          {title: 'Normal', value: '400'},
          {title: 'Media', value: '500'},
          {title: 'Semi-negrito', value: '600'},
          {title: 'Negrito', value: '700'},
          {title: 'Extra-negrito', value: '800'},
        ],
      },
    }),
    defineField({
      name: 'alinhamento',
      title: 'Alinhamento',
      type: 'string',
      options: {
        list: [
          {title: 'Padrao', value: ''},
          {title: 'Esquerda', value: 'left'},
          {title: 'Centro', value: 'center'},
          {title: 'Direita', value: 'right'},
          {title: 'Justificado', value: 'justify'},
        ],
      },
    }),
    defineField({
      name: 'cor',
      title: 'Cor do texto',
      type: 'string',
      description: 'Codigo da cor, ex: #2C3E6B. Vazio = cor atual.',
      validation: (Rule) =>
        Rule.regex(/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/, {name: 'cor hexadecimal'})
          .warning('Use o formato #RRGGBB'),
    }),
    defineField({
      name: 'alturaLinha',
      title: 'Espaco entre linhas',
      type: 'number',
      description: 'Ex: 1.5. Vazio = padrao.',
      validation: (Rule) => Rule.min(0.8).max(3),
    }),
  ],
})

export const estiloImagem = defineType({
  name: 'estiloImagem',
  title: 'Tamanho e aparencia da imagem',
  type: 'object',
  options: {collapsible: true, collapsed: true},
  fields: [
    defineField({
      name: 'largura',
      title: 'Largura (px)',
      type: 'number',
      description: 'Deixe vazio para manter a largura atual.',
      validation: (Rule) => Rule.min(16).max(3000),
    }),
    defineField({
      name: 'altura',
      title: 'Altura (px)',
      type: 'number',
      description: 'Deixe vazio para manter a altura atual.',
      validation: (Rule) => Rule.min(16).max(3000),
    }),
    defineField({
      name: 'ajuste',
      title: 'Como a imagem preenche o espaco',
      type: 'string',
      options: {
        list: [
          {title: 'Padrao', value: ''},
          {title: 'Preencher cortando as bordas', value: 'cover'},
          {title: 'Caber inteira', value: 'contain'},
        ],
      },
    }),
    defineField({
      name: 'arredondamento',
      title: 'Cantos arredondados (px)',
      type: 'number',
      validation: (Rule) => Rule.min(0).max(400),
    }),
  ],
})

export const estiloBloco = defineType({
  name: 'estiloBloco',
  title: 'Espacamento e fundo do bloco',
  type: 'object',
  options: {collapsible: true, collapsed: true},
  fields: [
    defineField({
      name: 'espacoTopo',
      title: 'Espaco acima (px)',
      type: 'number',
      validation: (Rule) => Rule.min(0).max(400),
    }),
    defineField({
      name: 'espacoBaixo',
      title: 'Espaco abaixo (px)',
      type: 'number',
      validation: (Rule) => Rule.min(0).max(400),
    }),
    defineField({
      name: 'corDeFundo',
      title: 'Cor de fundo',
      type: 'string',
      description: 'Codigo da cor, ex: #FFFFFF. Vazio = fundo atual.',
    }),
    defineField({
      name: 'oculto',
      title: 'Esconder este bloco do site',
      type: 'boolean',
      description: 'Marque para tirar o bloco do ar sem apagar o conteudo.',
      initialValue: false,
    }),
  ],
})

export const estiloTypes = [estiloTexto, estiloImagem, estiloBloco]

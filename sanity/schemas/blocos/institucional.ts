import { defineField, defineType } from 'sanity'

import {
  GRUPOS_DO_BLOCO,
  campoDescricao,
  campoEstiloBloco,
  campoEstiloDescricao,
  campoEstiloTitulo,
  campoImagem,
  campoTitulo,
  previewBloco,
} from './comuns'

/**
 * Blocos das paginas institucionais (/sobre/a-novo-lar, /sobre/equipe,
 * /sobre/localizacao, /sobre/fotos, /sobre/atividades, /depoimentos,
 * /termos-de-uso, /politica-de-privacidade).
 *
 * Sao blocos reutilizaveis: o layout continua sendo o da propria pagina; estes
 * campos so trocam textos, fotos e tamanhos.
 */

export const paginaHero = defineType({
  name: 'paginaHero',
  title: 'Abertura da página (faixa colorida)',
  type: 'object',
  groups: GRUPOS_DO_BLOCO,
  fields: [
    defineField({ name: 'etiqueta', title: 'Etiqueta acima do título', type: 'string', group: 'conteudo' }),
    campoTitulo(),
    campoDescricao('Texto abaixo do título', 4),
    defineField({ name: 'botao1Texto', title: 'Texto do 1º botão', type: 'string', group: 'conteudo' }),
    defineField({ name: 'botao1Href', title: 'Endereço do 1º botão', type: 'string', group: 'conteudo' }),
    defineField({ name: 'botao2Texto', title: 'Texto do 2º botão', type: 'string', group: 'conteudo' }),
    defineField({ name: 'botao2Href', title: 'Endereço do 2º botão', type: 'string', group: 'conteudo' }),
    campoImagem('imagem', 'Foto de fundo'),
    campoEstiloTitulo,
    campoEstiloDescricao,
    campoEstiloBloco,
  ],
  preview: previewBloco('Abertura da página'),
})

export const paginaHistoria = defineType({
  name: 'paginaHistoria',
  title: 'Texto corrido + números em destaque',
  type: 'object',
  groups: GRUPOS_DO_BLOCO,
  fields: [
    defineField({ name: 'etiqueta', title: 'Etiqueta acima do texto', type: 'string', group: 'conteudo' }),
    defineField({
      name: 'paragrafos',
      group: 'conteudo',
      title: 'Parágrafos',
      type: 'array',
      of: [{ type: 'text', rows: 5 }],
    }),
    defineField({
      name: 'destaques',
      group: 'conteudo',
      title: 'Números em destaque',
      type: 'array',
      of: [
        defineField({
          name: 'destaque',
          type: 'object',
          fields: [
            defineField({ name: 'value', title: 'Número', type: 'string' }),
            defineField({ name: 'label', title: 'Legenda', type: 'string' }),
            defineField({ name: 'description', title: 'Texto', type: 'text', rows: 2 }),
          ],
          preview: { select: { title: 'value', subtitle: 'label' } },
        }),
      ],
    }),
    campoEstiloDescricao,
    campoEstiloBloco,
  ],
  preview: previewBloco('Texto corrido + números'),
})

export const paginaPilares = defineType({
  name: 'paginaPilares',
  title: 'Missão, visão e valores',
  type: 'object',
  groups: GRUPOS_DO_BLOCO,
  fields: [
    campoTitulo(),
    campoDescricao('Texto abaixo do título', 3),
    defineField({ name: 'tituloMissao', title: 'Título da Missão', type: 'string', group: 'conteudo' }),
    defineField({ name: 'textoMissao', title: 'Texto da Missão', type: 'text', rows: 4, group: 'conteudo' }),
    defineField({ name: 'tituloVisao', title: 'Título da Visão', type: 'string', group: 'conteudo' }),
    defineField({ name: 'textoVisao', title: 'Texto da Visão', type: 'text', rows: 4, group: 'conteudo' }),
    defineField({ name: 'tituloValores', title: 'Título dos Valores', type: 'string', group: 'conteudo' }),
    defineField({
      name: 'valores',
      group: 'conteudo',
      title: 'Lista de valores',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    campoEstiloTitulo,
    campoEstiloDescricao,
    campoEstiloBloco,
  ],
  preview: previewBloco('Missão, visão e valores'),
})

export const paginaCartoes = defineType({
  name: 'paginaCartoes',
  title: 'Título + cartões',
  type: 'object',
  groups: GRUPOS_DO_BLOCO,
  fields: [
    campoTitulo(),
    campoDescricao('Texto abaixo do título', 3),
    defineField({
      name: 'cartoes',
      group: 'conteudo',
      title: 'Cartões',
      type: 'array',
      of: [
        defineField({
          name: 'cartao',
          type: 'object',
          fields: [
            defineField({
              name: 'icone',
              title: 'Ícone (opcional)',
              type: 'string',
              options: {
                list: [
                  { title: 'Música', value: 'musica' },
                  { title: 'Paleta / artes', value: 'paleta' },
                  { title: 'Livro', value: 'livro' },
                  { title: 'Pessoas', value: 'pessoas' },
                  { title: 'Coração', value: 'coracao' },
                  { title: 'Sorriso', value: 'sorriso' },
                  { title: 'Estetoscópio', value: 'estetoscopio' },
                  { title: 'Atividade', value: 'atividade' },
                  { title: 'Maçã', value: 'maca' },
                  { title: 'Cérebro', value: 'cerebro' },
                  { title: 'Prédio', value: 'predio' },
                  { title: 'Árvore', value: 'arvore' },
                  { title: 'Hospital', value: 'hospital' },
                  { title: 'Mapa', value: 'mapa' },
                  { title: 'Check', value: 'check' },
                ],
              },
            }),
            defineField({ name: 'titulo', title: 'Título', type: 'string' }),
            defineField({ name: 'descricao', title: 'Texto', type: 'text', rows: 3 }),
            defineField({
              name: 'itens',
              title: 'Itens da lista (opcional)',
              type: 'array',
              of: [{ type: 'string' }],
            }),
            campoImagem('imagem', 'Foto do cartão (opcional)', null),
          ],
          preview: { select: { title: 'titulo', subtitle: 'descricao' } },
        }),
      ],
    }),
    campoEstiloTitulo,
    campoEstiloDescricao,
    campoEstiloBloco,
  ],
  preview: previewBloco('Título + cartões'),
})

export const paginaGaleria = defineType({
  name: 'paginaGaleria',
  title: 'Galeria de fotos',
  type: 'object',
  groups: GRUPOS_DO_BLOCO,
  fields: [
    campoTitulo(),
    campoDescricao('Texto abaixo do título', 3),
    defineField({
      name: 'imagens',
      group: 'conteudo',
      title: 'Fotos',
      type: 'array',
      description: 'Vazio = as fotos atuais.',
      of: [
        defineField({
          name: 'foto',
          type: 'object',
          fields: [
            defineField({
              name: 'arquivo',
              title: 'Imagem',
              type: 'image',
              options: { hotspot: true },
            }),
            defineField({ name: 'alt', title: 'Descrição da imagem', type: 'string' }),
            defineField({ name: 'legenda', title: 'Legenda', type: 'string' }),
          ],
          preview: { select: { title: 'alt', media: 'arquivo' } },
        }),
      ],
    }),
    campoEstiloTitulo,
    campoEstiloDescricao,
    campoEstiloBloco,
  ],
  preview: previewBloco('Galeria de fotos'),
})

export const paginaTextoLongo = defineType({
  name: 'paginaTextoLongo',
  title: 'Texto longo (termos, política)',
  type: 'object',
  groups: GRUPOS_DO_BLOCO,
  fields: [
    campoTitulo(),
    defineField({
      name: 'corpo',
      group: 'conteudo',
      title: 'Conteúdo',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Vazio = o texto que já está na página.',
    }),
    campoEstiloTitulo,
    campoEstiloDescricao,
    campoEstiloBloco,
  ],
  preview: previewBloco('Texto longo'),
})

export const paginaCta = defineType({
  name: 'paginaCta',
  title: 'Chamada com botões',
  type: 'object',
  groups: GRUPOS_DO_BLOCO,
  fields: [
    campoTitulo(),
    campoDescricao('Texto abaixo do título', 3),
    defineField({ name: 'botao1Texto', title: 'Texto do 1º botão', type: 'string', group: 'conteudo' }),
    defineField({ name: 'botao1Href', title: 'Endereço do 1º botão', type: 'string', group: 'conteudo' }),
    defineField({ name: 'botao2Texto', title: 'Texto do 2º botão', type: 'string', group: 'conteudo' }),
    defineField({ name: 'botao2Href', title: 'Endereço do 2º botão', type: 'string', group: 'conteudo' }),
    campoEstiloTitulo,
    campoEstiloDescricao,
    campoEstiloBloco,
  ],
  preview: previewBloco('Chamada com botões'),
})

export const paginaDepoimentos = defineType({
  name: 'paginaDepoimentos',
  title: 'Lista de depoimentos',
  type: 'object',
  groups: GRUPOS_DO_BLOCO,
  fields: [
    campoTitulo(),
    campoDescricao('Texto abaixo do título', 3),
    defineField({
      name: 'depoimentos',
      group: 'conteudo',
      title: 'Depoimentos',
      type: 'array',
      description: 'Vazio = os depoimentos que já estão na página.',
      of: [
        defineField({
          name: 'depoimento',
          type: 'object',
          fields: [
            defineField({ name: 'nome', title: 'Nome de quem escreveu', type: 'string' }),
            defineField({
              name: 'texto',
              title: 'Depoimento',
              type: 'text',
              rows: 5,
            }),
            defineField({
              name: 'nota',
              title: 'Estrelas (1 a 5)',
              type: 'number',
              initialValue: 5,
              validation: (Rule) => Rule.min(1).max(5),
            }),
            defineField({
              name: 'destaque',
              title: 'Mostrar em destaque',
              type: 'boolean',
              description: 'Ligado: aparece na seção de cima, em cartão grande.',
              initialValue: false,
            }),
          ],
          preview: { select: { title: 'nome', subtitle: 'texto' } },
        }),
      ],
    }),
    campoEstiloTitulo,
    campoEstiloDescricao,
    campoEstiloBloco,
  ],
  preview: previewBloco('Lista de depoimentos'),
})

export const blocosInstitucional = [
  paginaDepoimentos,
  paginaHero,
  paginaHistoria,
  paginaPilares,
  paginaCartoes,
  paginaGaleria,
  paginaTextoLongo,
  paginaCta,
]

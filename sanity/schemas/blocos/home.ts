import { defineField, defineType } from 'sanity'

import {
  GRUPOS_DO_BLOCO,
  campoDescricao,
  campoImagem,
  campoEstiloBloco,
  campoEstiloDescricao,
  campoEstiloTitulo,
  campoTitulo,
  previewBloco,
} from './comuns'

/**
 * Blocos da pagina inicial.
 * Cada tipo corresponde a um componente real em components/home/.
 */

export const homeHero = defineType({
  name: 'homeHero',
  title: 'Abertura da página inicial',
  type: 'object',
  groups: GRUPOS_DO_BLOCO,
  fields: [
    defineField({ name: 'eyebrow', title: 'Etiqueta acima do título', type: 'string', group: 'conteudo' }),
    campoTitulo(),
    campoDescricao('Texto abaixo do título', 4),
    defineField({ name: 'botaoTexto', title: 'Texto do botão', type: 'string', group: 'conteudo' }),
    defineField({ name: 'botaoHref', title: 'Endereço do botão', type: 'string', group: 'conteudo' }),
    campoImagem('imagem', 'Foto de fundo'),
    defineField({
      name: 'numeros',
      group: 'conteudo',
      title: 'Números em destaque',
      type: 'array',
      of: [
        defineField({
          name: 'numero',
          type: 'object',
          fields: [
            defineField({ name: 'value', title: 'Número', type: 'string' }),
            defineField({ name: 'label', title: 'Legenda', type: 'string' }),
          ],
          preview: { select: { title: 'value', subtitle: 'label' } },
        }),
      ],
    }),
    campoEstiloTitulo,
    campoEstiloDescricao,
    campoEstiloBloco,
  ],
  preview: previewBloco('Abertura'),
})

export const homePorQue = defineType({
  name: 'homePorQue',
  title: 'Por que escolher a Novo Lar',
  type: 'object',
  groups: GRUPOS_DO_BLOCO,
  fields: [
    campoTitulo(),
    defineField({
      name: 'descricaoRica',
      group: 'conteudo',
      title: 'Texto abaixo do título',
      type: 'array',
      description: 'Você pode deixar trechos em negrito.',
      of: [{ type: 'block', styles: [{ title: 'Normal', value: 'normal' }], lists: [] }],
    }),
    defineField({
      name: 'beneficios',
      group: 'conteudo',
      title: 'Cartões de benefício',
      type: 'array',
      of: [
        defineField({
          name: 'beneficio',
          type: 'object',
          fields: [
            defineField({ name: 'titulo', title: 'Título', type: 'string' }),
            defineField({ name: 'descricao', title: 'Texto', type: 'text', rows: 3 }),
          ],
          preview: { select: { title: 'titulo', subtitle: 'descricao' } },
        }),
      ],
    }),
    campoEstiloTitulo,
    campoEstiloDescricao,
    campoEstiloBloco,
  ],
  preview: previewBloco('Por que escolher a Novo Lar'),
})

export const homeUnidades = defineType({
  name: 'homeUnidades',
  title: 'Unidades',
  type: 'object',
  groups: GRUPOS_DO_BLOCO,
  fields: [
    campoTitulo(),
    campoDescricao('Texto abaixo do título', 3),
    defineField({
      name: 'itens',
      group: 'conteudo',
      title: 'Quais unidades aparecem',
      type: 'array',
      description: 'Vazio = todas as unidades cadastradas. Arraste para ordenar.',
      of: [{ type: 'reference', to: [{ type: 'unit' }] }],
    }),
    campoEstiloTitulo,
    campoEstiloDescricao,
    campoEstiloBloco,
  ],
  preview: previewBloco('Unidades'),
})

export const homeServicos = defineType({
  name: 'homeServicos',
  title: 'Serviços',
  type: 'object',
  groups: GRUPOS_DO_BLOCO,
  fields: [
    campoTitulo(),
    campoDescricao('Texto abaixo do título', 3),
    defineField({
      name: 'itens',
      group: 'conteudo',
      title: 'Quais serviços aparecem',
      type: 'array',
      description: 'Vazio = todos os serviços cadastrados. Arraste para ordenar.',
      of: [{ type: 'reference', to: [{ type: 'service' }] }],
    }),
    campoEstiloTitulo,
    campoEstiloDescricao,
    campoEstiloBloco,
  ],
  preview: previewBloco('Serviços'),
})

export const homeEstrutura = defineType({
  name: 'homeEstrutura',
  title: 'Veja nossa estrutura (faixa escura)',
  type: 'object',
  groups: GRUPOS_DO_BLOCO,
  fields: [
    campoTitulo(),
    campoDescricao('Texto do card', 5),
    defineField({ name: 'botaoTexto', title: 'Texto do botão', type: 'string', group: 'conteudo' }),
    defineField({ name: 'botaoHref', title: 'Endereço do botão', type: 'string', group: 'conteudo' }),
    campoEstiloTitulo,
    campoEstiloDescricao,
    campoEstiloBloco,
  ],
  preview: previewBloco('Veja nossa estrutura'),
})

export const homeBlog = defineType({
  name: 'homeBlog',
  title: 'Notícias',
  type: 'object',
  groups: GRUPOS_DO_BLOCO,
  fields: [
    campoTitulo(),
    campoDescricao('Texto abaixo do título', 3),
    defineField({
      name: 'itens',
      group: 'conteudo',
      title: 'Quais artigos aparecem',
      type: 'array',
      description: 'Vazio = os 3 artigos mais recentes. Arraste para ordenar.',
      of: [{ type: 'reference', to: [{ type: 'blogPost' }] }],
    }),
    campoEstiloTitulo,
    campoEstiloDescricao,
    campoEstiloBloco,
  ],
  preview: previewBloco('Notícias'),
})

export const homeExperiencia = defineType({
  name: 'homeExperiencia',
  title: 'Experiência e confiança',
  type: 'object',
  groups: GRUPOS_DO_BLOCO,
  fields: [
    defineField({ name: 'etiqueta', title: 'Etiqueta acima do título', type: 'string', group: 'conteudo' }),
    campoTitulo(),
    defineField({ name: 'paragrafo1', title: 'Primeiro parágrafo', type: 'text', rows: 5, group: 'conteudo' }),
    defineField({ name: 'paragrafo2', title: 'Segundo parágrafo', type: 'text', rows: 5, group: 'conteudo' }),
    campoEstiloTitulo,
    campoEstiloDescricao,
    campoEstiloBloco,
  ],
  preview: previewBloco('Experiência e confiança'),
})

export const homeDepoimentos = defineType({
  name: 'homeDepoimentos',
  title: 'Depoimentos',
  type: 'object',
  groups: GRUPOS_DO_BLOCO,
  fields: [
    campoTitulo(),
    campoDescricao('Texto abaixo do título', 3),
    defineField({
      name: 'itens',
      group: 'conteudo',
      title: 'Quais depoimentos aparecem',
      type: 'array',
      description: 'Vazio = os depoimentos cadastrados. Arraste para ordenar.',
      of: [{ type: 'reference', to: [{ type: 'testimonial' }] }],
    }),
    campoEstiloTitulo,
    campoEstiloDescricao,
    campoEstiloBloco,
  ],
  preview: previewBloco('Depoimentos'),
})

export const homeCtaFinal = defineType({
  name: 'homeCtaFinal',
  title: 'Chamada final',
  type: 'object',
  groups: GRUPOS_DO_BLOCO,
  fields: [
    defineField({ name: 'etiqueta', title: 'Etiqueta acima do título', type: 'string', group: 'conteudo' }),
    campoTitulo(),
    campoDescricao('Texto abaixo do título', 3),
    defineField({
      name: 'cartoes',
      group: 'conteudo',
      title: 'Cartões de contato',
      type: 'array',
      of: [
        defineField({
          name: 'cartao',
          type: 'object',
          fields: [
            defineField({
              name: 'icone',
              title: 'Ícone',
              type: 'string',
              options: {
                list: [
                  { title: 'Telefone', value: 'telefone' },
                  { title: 'WhatsApp', value: 'whatsapp' },
                  { title: 'Calendário', value: 'calendario' },
                ],
              },
            }),
            defineField({ name: 'titulo', title: 'Título', type: 'string' }),
            defineField({ name: 'descricao', title: 'Texto', type: 'text', rows: 2 }),
            defineField({ name: 'href', title: 'Endereço do link', type: 'string' }),
            defineField({ name: 'label', title: 'Texto do link', type: 'string' }),
          ],
          preview: { select: { title: 'titulo', subtitle: 'label' } },
        }),
      ],
    }),
    defineField({
      name: 'linksApoio',
      group: 'conteudo',
      title: 'Links de apoio (embaixo)',
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
    campoEstiloTitulo,
    campoEstiloDescricao,
    campoEstiloBloco,
  ],
  preview: previewBloco('Chamada final'),
})

export const blocosHome = [
  homeHero,
  homePorQue,
  homeUnidades,
  homeServicos,
  homeEstrutura,
  homeBlog,
  homeExperiencia,
  homeDepoimentos,
  homeCtaFinal,
]

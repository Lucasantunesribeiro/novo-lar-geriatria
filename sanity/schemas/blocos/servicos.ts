import { defineField, defineType } from 'sanity'

import {
  GRUPOS_DO_BLOCO,
  campoDescricao,
  campoEstiloBloco,
  campoEstiloDescricao,
  campoEstiloTitulo,
  campoTitulo,
  previewBloco,
} from './comuns'

/**
 * Blocos das paginas /servicos e /contato.
 * Cada tipo corresponde a um componente real da pagina.
 */

export const servicosModalidades = defineType({
  name: 'servicosModalidades',
  title: 'Modalidades (3 cartões)',
  type: 'object',
  groups: GRUPOS_DO_BLOCO,
  fields: [
    defineField({ name: 'etiqueta', title: 'Etiqueta acima do título', type: 'string', group: 'conteudo' }),
    campoTitulo(),
    campoDescricao('Texto abaixo do título', 3),
    defineField({
      name: 'modalidades',
      group: 'conteudo',
      title: 'Modalidades',
      type: 'array',
      of: [
        defineField({
          name: 'modalidade',
          type: 'object',
          fields: [
            defineField({
              name: 'icone',
              title: 'Ícone',
              type: 'string',
              options: {
                list: [
                  { title: 'Casa', value: 'casa' },
                  { title: 'Calendário', value: 'calendario' },
                  { title: 'Batimento cardíaco', value: 'batimento' },
                  { title: 'Coração', value: 'coracao' },
                  { title: 'Pessoas', value: 'pessoas' },
                ],
              },
            }),
            defineField({ name: 'titulo', title: 'Título', type: 'string' }),
            defineField({ name: 'descricao', title: 'Texto', type: 'text', rows: 4 }),
            defineField({
              name: 'itens',
              title: 'Itens da lista',
              type: 'array',
              of: [{ type: 'string' }],
            }),
          ],
          preview: { select: { title: 'titulo', subtitle: 'descricao' } },
        }),
      ],
    }),
    campoEstiloTitulo,
    campoEstiloDescricao,
    campoEstiloBloco,
  ],
  preview: previewBloco('Modalidades'),
})

export const servicosLista = defineType({
  name: 'servicosLista',
  title: 'Título e lista de serviços',
  type: 'object',
  groups: GRUPOS_DO_BLOCO,
  description:
    'Os serviços em si são cadastrados em "Serviços", no menu principal do painel. Aqui você escolhe quais aparecem e em que ordem.',
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
  preview: previewBloco('Lista de serviços'),
})

export const contatoHero = defineType({
  name: 'contatoHero',
  title: 'Abertura da página Contato',
  type: 'object',
  groups: GRUPOS_DO_BLOCO,
  fields: [
    defineField({ name: 'eyebrow', title: 'Etiqueta acima do título', type: 'string', group: 'conteudo' }),
    campoTitulo(),
    campoDescricao('Texto abaixo do título', 3),
    campoEstiloTitulo,
    campoEstiloDescricao,
    campoEstiloBloco,
  ],
  preview: previewBloco('Abertura'),
})

export const contatoFormulario = defineType({
  name: 'contatoFormulario',
  title: 'Formulário de contato',
  type: 'object',
  groups: GRUPOS_DO_BLOCO,
  description: 'O formulário em si não muda de lugar; aqui você controla só se ele aparece.',
  fields: [campoEstiloBloco],
  preview: { prepare: () => ({ title: 'Formulário de contato' }) },
})

export const blocosServicos = [
  servicosModalidades,
  servicosLista,
  contatoHero,
  contatoFormulario,
]

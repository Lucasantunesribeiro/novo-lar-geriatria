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
 * Blocos da pagina /sobre/estrutura.
 * Cada tipo corresponde a um componente real em components/estrutura/.
 */

/** Lista de icones que os cartoes desta pagina ja usam. */
const OPCOES_ICONE = [
  { title: 'Prancheta', value: 'prancheta' },
  { title: 'Pessoas', value: 'pessoas' },
  { title: 'Coração', value: 'coracao' },
  { title: 'Balão de conversa', value: 'conversa' },
  { title: 'Check', value: 'check' },
  { title: 'Prédio', value: 'predio' },
  { title: 'Expandir', value: 'expandir' },
  { title: 'Banheiro', value: 'banheiro' },
  { title: 'Poltrona', value: 'poltrona' },
  { title: 'Talheres', value: 'talheres' },
  { title: 'Cama', value: 'cama' },
  { title: 'Telefone', value: 'telefone' },
  { title: 'WhatsApp', value: 'whatsapp' },
  { title: 'Calendário', value: 'calendario' },
]

const campoIcone = defineField({
  name: 'icone',
  title: 'Ícone',
  type: 'string',
  options: { list: OPCOES_ICONE },
})

/** Array de cartoes com icone, titulo e texto. */
const campoCartoes = (titulo = 'Cartões') =>
  defineField({
    name: 'cartoes',
    group: 'conteudo',
    title: titulo,
    type: 'array',
    of: [
      defineField({
        name: 'cartao',
        type: 'object',
        fields: [
          campoIcone,
          defineField({ name: 'titulo', title: 'Título', type: 'string' }),
          defineField({ name: 'descricao', title: 'Texto', type: 'text', rows: 3 }),
        ],
        preview: { select: { title: 'titulo', subtitle: 'descricao' } },
      }),
    ],
  })

export const estruturaHero = defineType({
  name: 'estruturaHero',
  title: 'Abertura da página Estrutura',
  type: 'object',
  groups: GRUPOS_DO_BLOCO,
  fields: [
    defineField({ name: 'eyebrow', title: 'Etiqueta acima do título', type: 'string', group: 'conteudo' }),
    campoTitulo(),
    campoDescricao('Texto de apresentação', 6),
    campoEstiloTitulo,
    campoEstiloDescricao,
    campoEstiloBloco,
  ],
  preview: previewBloco('Abertura'),
})

export const estruturaHospedagem = defineType({
  name: 'estruturaHospedagem',
  title: 'Texto sobre hospedagem + lista lateral',
  type: 'object',
  groups: GRUPOS_DO_BLOCO,
  fields: [
    defineField({
      name: 'paragrafo1',
      group: 'conteudo',
      title: 'Primeiro parágrafo',
      type: 'text',
      rows: 6,
    }),
    defineField({
      name: 'paragrafo2',
      group: 'conteudo',
      title: 'Segundo parágrafo',
      type: 'array',
      description: 'Aqui você pode deixar trechos em negrito.',
      of: [{ type: 'block', styles: [{ title: 'Normal', value: 'normal' }], lists: [] }],
    }),
    campoImagem('imagem1', 'Foto 1'),
    campoImagem('imagem2', 'Foto 2'),
    campoImagem('imagem3', 'Foto 3'),
    campoImagem('imagem4', 'Foto 4'),
    defineField({
      name: 'tituloLista',
      group: 'conteudo',
      title: 'Título da caixa ao lado',
      type: 'string',
    }),
    defineField({
      name: 'itens',
      group: 'conteudo',
      title: 'Itens da caixa ao lado',
      type: 'array',
      of: [{ type: 'text', rows: 3 }],
    }),
    campoEstiloDescricao,
    campoEstiloBloco,
  ],
  preview: previewBloco('Texto sobre hospedagem'),
})

export const estruturaProcesso = defineType({
  name: 'estruturaProcesso',
  title: 'Como cuidamos (4 cartões)',
  type: 'object',
  groups: GRUPOS_DO_BLOCO,
  fields: [
    defineField({ name: 'etiqueta', title: 'Etiqueta acima do título', type: 'string', group: 'conteudo' }),
    campoTitulo(),
    campoDescricao('Texto abaixo do título', 4),
    campoCartoes('Etapas'),
    campoEstiloTitulo,
    campoEstiloDescricao,
    campoEstiloBloco,
  ],
  preview: previewBloco('Como cuidamos'),
})

export const estruturaFamilias = defineType({
  name: 'estruturaFamilias',
  title: 'Estrutura que acolhe famílias (4 cartões)',
  type: 'object',
  groups: GRUPOS_DO_BLOCO,
  fields: [
    campoTitulo(),
    campoDescricao('Texto abaixo do título', 4),
    campoCartoes(),
    campoEstiloTitulo,
    campoEstiloDescricao,
    campoEstiloBloco,
  ],
  preview: previewBloco('Estrutura que acolhe famílias'),
})

export const estruturaAmbientes = defineType({
  name: 'estruturaAmbientes',
  title: 'Mosaico de ambientes (9 fotos)',
  type: 'object',
  groups: GRUPOS_DO_BLOCO,
  fields: [
    campoTitulo(),
    campoDescricao('Texto abaixo do título', 3),
    defineField({
      name: 'imagens',
      group: 'conteudo',
      title: 'Fotos do mosaico',
      type: 'array',
      description: 'Vazio = as 9 fotos atuais. A ordem preenche as colunas da esquerda para a direita.',
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
          ],
          preview: { select: { title: 'alt', media: 'arquivo' } },
        }),
      ],
    }),
    campoEstiloTitulo,
    campoEstiloDescricao,
    campoEstiloBloco,
  ],
  preview: previewBloco('Mosaico de ambientes'),
})

export const estruturaConforto = defineType({
  name: 'estruturaConforto',
  title: 'Conforto e segurança (foto + lista)',
  type: 'object',
  groups: GRUPOS_DO_BLOCO,
  fields: [
    campoTitulo(),
    campoDescricao('Texto abaixo do título', 3),
    campoImagem('imagem', 'Foto'),
    defineField({
      name: 'itens',
      group: 'conteudo',
      title: 'Itens da lista',
      type: 'array',
      of: [
        defineField({
          name: 'item',
          type: 'object',
          fields: [campoIcone, defineField({ name: 'titulo', title: 'Texto', type: 'string' })],
          preview: { select: { title: 'titulo', subtitle: 'icone' } },
        }),
      ],
    }),
    campoEstiloTitulo,
    campoEstiloDescricao,
    campoEstiloBloco,
  ],
  preview: previewBloco('Conforto e segurança'),
})

export const estruturaGaleriaFinal = defineType({
  name: 'estruturaGaleriaFinal',
  title: 'Duas fotos grandes',
  type: 'object',
  groups: GRUPOS_DO_BLOCO,
  fields: [
    campoImagem('imagem1', 'Foto da esquerda'),
    campoImagem('imagem2', 'Foto da direita'),
    campoEstiloBloco,
  ],
  preview: { prepare: () => ({ title: 'Duas fotos grandes' }) },
})

export const estruturaUnidades = defineType({
  name: 'estruturaUnidades',
  title: 'Unidades (3 cartões)',
  type: 'object',
  groups: GRUPOS_DO_BLOCO,
  fields: [
    campoTitulo(),
    campoDescricao('Texto abaixo do título', 3),
    defineField({
      name: 'unidades',
      group: 'conteudo',
      title: 'Unidades',
      type: 'array',
      of: [
        defineField({
          name: 'unidade',
          type: 'object',
          fields: [
            defineField({ name: 'titulo', title: 'Nome da unidade', type: 'string' }),
            defineField({ name: 'endereco', title: 'Endereço', type: 'string' }),
            defineField({
              name: 'destaques',
              title: 'Destaques',
              type: 'array',
              of: [{ type: 'string' }],
            }),
            defineField({ name: 'href', title: 'Endereço da página', type: 'string' }),
            defineField({ name: 'telefone', title: 'Telefone', type: 'string' }),
            defineField({
              name: 'cidade',
              title: 'Etiqueta sobre a foto',
              type: 'string',
              description: 'Ex: Porto Alegre',
            }),
            campoImagem('imagem', 'Foto da unidade'),
          ],
          preview: { select: { title: 'titulo', subtitle: 'endereco' } },
        }),
      ],
    }),
    campoEstiloTitulo,
    campoEstiloDescricao,
    campoEstiloBloco,
  ],
  preview: previewBloco('Unidades'),
})

export const estruturaCareCta = defineType({
  name: 'estruturaCareCta',
  title: 'Caixa azul de contato (3 cartões)',
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
            campoIcone,
            defineField({ name: 'titulo', title: 'Título', type: 'string' }),
            defineField({ name: 'descricao', title: 'Texto', type: 'text', rows: 2 }),
            defineField({ name: 'href', title: 'Endereço do link', type: 'string' }),
            defineField({ name: 'label', title: 'Texto do link', type: 'string' }),
          ],
          preview: { select: { title: 'titulo', subtitle: 'label' } },
        }),
      ],
    }),
    campoEstiloTitulo,
    campoEstiloDescricao,
    campoEstiloBloco,
  ],
  preview: previewBloco('Caixa azul de contato'),
})

export const estruturaCtaFinal = defineType({
  name: 'estruturaCtaFinal',
  title: 'Chamada final com botão de WhatsApp',
  type: 'object',
  groups: GRUPOS_DO_BLOCO,
  fields: [
    campoTitulo(),
    campoDescricao('Texto abaixo do título', 3),
    defineField({ name: 'botaoTexto', title: 'Texto do botão', type: 'string', group: 'conteudo' }),
    defineField({
      name: 'botaoHref',
      group: 'conteudo',
      title: 'Link do botão',
      type: 'string',
      description: 'Ex: https://wa.me/5551920011523',
    }),
    campoEstiloTitulo,
    campoEstiloDescricao,
    campoEstiloBloco,
  ],
  preview: previewBloco('Chamada final'),
})

export const blocosEstrutura = [
  estruturaHero,
  estruturaHospedagem,
  estruturaProcesso,
  estruturaFamilias,
  estruturaAmbientes,
  estruturaConforto,
  estruturaGaleriaFinal,
  estruturaUnidades,
  estruturaCareCta,
  estruturaCtaFinal,
]

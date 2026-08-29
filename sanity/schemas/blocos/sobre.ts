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
 * Blocos da pagina /sobre.
 *
 * Cada tipo aqui corresponde a um componente real em components/about/.
 * A ordem em que aparecem no Studio e a ordem em que aparecem no site.
 */

export const sobreHero = defineType({
  name: 'sobreHero',
  title: 'Abertura da página Sobre',
  type: 'object',
  groups: GRUPOS_DO_BLOCO,
  fields: [
    defineField({ name: 'eyebrow', title: 'Etiqueta acima do título', type: 'string', group: 'conteudo' }),
    campoTitulo(),
    campoDescricao('Texto de apresentação', 8),
    campoEstiloTitulo,
    campoEstiloDescricao,
    campoEstiloBloco,
  ],
  preview: previewBloco('Abertura'),
})

export const sobreVitrineEstrutura = defineType({
  name: 'sobreVitrineEstrutura',
  title: 'Faixa escura com fotos e card',
  type: 'object',
  groups: GRUPOS_DO_BLOCO,
  fields: [
    campoTitulo(),
    campoDescricao('Texto do card', 6),
    campoImagem('imagem1', 'Foto 1 (coluna esquerda, de cima)'),
    campoImagem('imagem2', 'Foto 2 (coluna esquerda, de baixo)'),
    campoImagem('imagem3', 'Foto 3 (coluna direita, de cima)'),
    campoImagem('imagem4', 'Foto 4 (coluna direita, de baixo)'),
    campoEstiloTitulo,
    campoEstiloDescricao,
    campoEstiloBloco,
  ],
  preview: previewBloco('Faixa escura com fotos'),
})

export const sobreExperiencia = defineType({
  name: 'sobreExperiencia',
  title: 'Três décadas de experiência',
  type: 'object',
  groups: GRUPOS_DO_BLOCO,
  fields: [
    defineField({
      name: 'mostrarEstrelas',
      group: 'conteudo',
      title: 'Mostrar as 5 estrelas',
      type: 'boolean',
      initialValue: true,
    }),
    campoTitulo(),
    campoDescricao('Texto ao lado da primeira foto', 8),
    campoImagem('imagem1', 'Primeira foto'),
    defineField({
      name: 'cartoes',
      group: 'conteudo',
      title: 'Cartões da lista',
      type: 'array',
      of: [
        defineField({
          name: 'cartao',
          type: 'object',
          fields: [
            defineField({ name: 'titulo', title: 'Título', type: 'string' }),
            defineField({ name: 'descricao', title: 'Texto', type: 'string' }),
          ],
          preview: { select: { title: 'titulo', subtitle: 'descricao' } },
        }),
      ],
    }),
    campoImagem('imagem2', 'Segunda foto'),
    campoEstiloTitulo,
    campoEstiloDescricao,
    campoEstiloBloco,
  ],
  preview: previewBloco('Três décadas de experiência'),
})

export const sobreTresPilares = defineType({
  name: 'sobreTresPilares',
  title: 'Pilares do cuidado (3 cartões com foto)',
  type: 'object',
  groups: GRUPOS_DO_BLOCO,
  fields: [
    campoTitulo(),
    campoDescricao('Texto abaixo do título', 3),
    defineField({
      name: 'pilares',
      group: 'conteudo',
      title: 'Cartões',
      type: 'array',
      of: [
        defineField({
          name: 'pilar',
          type: 'object',
          fields: [
            defineField({ name: 'titulo', title: 'Título', type: 'string' }),
            defineField({ name: 'descricao', title: 'Texto', type: 'text', rows: 3 }),
            campoImagem('imagem', 'Foto do cartão'),
          ],
          preview: { select: { title: 'titulo', subtitle: 'descricao' } },
        }),
      ],
    }),
    campoEstiloTitulo,
    campoEstiloDescricao,
    campoEstiloBloco,
  ],
  preview: previewBloco('Pilares do cuidado'),
})

export const sobreAmbientes = defineType({
  name: 'sobreAmbientes',
  title: 'Galeria de ambientes',
  type: 'object',
  groups: GRUPOS_DO_BLOCO,
  fields: [
    campoTitulo(),
    campoDescricao('Texto abaixo do título', 4),
    defineField({ name: 'botaoTexto', title: 'Texto do botão', type: 'string', group: 'conteudo' }),
    defineField({ name: 'botaoHref', title: 'Endereço do botão', type: 'string', group: 'conteudo' }),
    defineField({
      name: 'imagens',
      group: 'conteudo',
      title: 'Fotos da galeria',
      type: 'array',
      description: 'Vazio = as 6 fotos atuais.',
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
  preview: previewBloco('Galeria de ambientes'),
})

export const sobreEtapas = defineType({
  name: 'sobreEtapas',
  title: 'Etapas (1, 2, 3)',
  type: 'object',
  groups: GRUPOS_DO_BLOCO,
  fields: [
    campoTitulo(),
    campoDescricao('Texto abaixo do título', 3),
    defineField({
      name: 'etapas',
      group: 'conteudo',
      title: 'Etapas',
      type: 'array',
      of: [
        defineField({
          name: 'etapa',
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
  preview: previewBloco('Etapas'),
})

export const sobreCompromisso = defineType({
  name: 'sobreCompromisso',
  title: 'Nosso compromisso (foto + texto)',
  type: 'object',
  groups: GRUPOS_DO_BLOCO,
  fields: [
    campoTitulo(),
    campoDescricao('Texto', 6),
    campoImagem('imagem', 'Foto'),
    campoEstiloTitulo,
    campoEstiloDescricao,
    campoEstiloBloco,
  ],
  preview: previewBloco('Nosso compromisso'),
})

export const sobreCtaFinal = defineType({
  name: 'sobreCtaFinal',
  title: 'Chamada final (caixa azul com 3 cartões)',
  type: 'object',
  groups: GRUPOS_DO_BLOCO,
  fields: [
    defineField({ name: 'etiqueta', title: 'Etiqueta acima do título', type: 'string', group: 'conteudo' }),
    campoTitulo(),
    campoDescricao('Texto abaixo do título', 4),
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
            defineField({ name: 'titulo', title: 'Título', type: 'string' }),
            defineField({ name: 'descricao', title: 'Texto', type: 'text', rows: 2 }),
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
  preview: previewBloco('Chamada final'),
})

export const blocosSobre = [
  sobreHero,
  sobreVitrineEstrutura,
  sobreExperiencia,
  sobreTresPilares,
  sobreAmbientes,
  sobreEtapas,
  sobreCompromisso,
  sobreCtaFinal,
]

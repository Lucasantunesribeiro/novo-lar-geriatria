import { defineField } from 'sanity'

/**
 * Pecas repetidas dos blocos espelho.
 *
 * "Bloco espelho" = um bloco do Studio que corresponde a UM componente real da
 * pagina. O que o cliente ve no painel e exatamente o que existe na tela.
 *
 * Todo bloco tem duas abas: "Conteudo" (o que ele mexe todo dia) e "Aparencia"
 * (tamanho de letra, cor, espacamento). Assim a tela de edicao abre limpa, so
 * com texto e foto.
 */

/** As duas abas que todo bloco usa. */
export const GRUPOS_DO_BLOCO = [
  { name: 'conteudo', title: 'Conteúdo', default: true },
  { name: 'aparencia', title: 'Aparência' },
]

export const campoTitulo = (titulo = 'Título') =>
  defineField({ name: 'titulo', title: titulo, type: 'string', group: 'conteudo' })

export const campoDescricao = (titulo = 'Texto', rows = 4) =>
  defineField({
    name: 'descricao',
    title: titulo,
    type: 'text',
    rows,
    group: 'conteudo',
  })

export const campoEstiloTitulo = defineField({
  name: 'estiloTitulo',
  title: 'Tamanho e cor do título',
  type: 'estiloTexto',
  group: 'aparencia',
})

export const campoEstiloDescricao = defineField({
  name: 'estiloDescricao',
  title: 'Tamanho e cor do texto',
  type: 'estiloTexto',
  group: 'aparencia',
})

export const campoEstiloBloco = defineField({
  name: 'estilo',
  title: 'Espaçamento, fundo e visibilidade',
  type: 'estiloBloco',
  group: 'aparencia',
})

/**
 * Imagem com tamanho ajustavel.
 *
 * A foto e o texto alternativo ficam em "Conteudo" (e o que o cliente troca);
 * o tamanho fica recolhido dentro do proprio campo.
 */
export const campoImagem = (nome: string, titulo: string) =>
  defineField({
    name: nome,
    title: titulo,
    type: 'object',
    group: 'conteudo',
    options: { collapsible: true, collapsed: false },
    fields: [
      defineField({
        name: 'arquivo',
        title: 'Foto',
        type: 'image',
        description: 'Arraste a foto aqui. Vazio = o site mantém a imagem atual.',
        options: { hotspot: true },
      }),
      defineField({
        name: 'alt',
        title: 'Descrição da foto',
        type: 'string',
        description: 'Para quem usa leitor de tela e para o Google.',
      }),
      defineField({
        name: 'estilo',
        title: 'Tamanho da foto',
        type: 'estiloImagem',
      }),
    ],
    preview: {
      select: { media: 'arquivo', subtitle: 'alt' },
      prepare(selecao: Record<string, unknown>) {
        return {
          title: titulo,
          subtitle: (selecao.subtitle as string) || 'sem foto definida',
          media: selecao.media as never,
        }
      },
    },
  })

/** Preview padrao: mostra o titulo do bloco e o nome do bloco embaixo. */
export const previewBloco = (nomeDoBloco: string) => ({
  select: { title: 'titulo' },
  prepare({ title }: { title?: string }) {
    return { title: nomeDoBloco, subtitle: title || '' }
  },
})

/** Projecao GROQ das imagens do bloco (resolve a URL do arquivo). */
export const groqImagem = (nome: string) => `
  ${nome}{
    "url": arquivo.asset->url,
    alt,
    estilo
  }`

import type {EstiloBloco, EstiloImagem, EstiloTexto} from '@/lib/cms/estilo'

/**
 * Tipos dos "blocos espelho" — cada um corresponde a UM componente real da
 * pagina. Todos os campos sao opcionais: vazio = o componente usa o valor que
 * ja estava no codigo.
 */

export type ImagemBloco = {
  url?: string
  alt?: string
  estilo?: EstiloImagem
}

type Base = {
  _type: string
  _key?: string
  titulo?: string
  descricao?: string
  estiloTitulo?: EstiloTexto
  estiloDescricao?: EstiloTexto
  estilo?: EstiloBloco
}

export type SobreHero = Base & {
  _type: 'sobreHero'
  eyebrow?: string
}

export type SobreVitrineEstrutura = Base & {
  _type: 'sobreVitrineEstrutura'
  imagem1?: ImagemBloco
  imagem2?: ImagemBloco
  imagem3?: ImagemBloco
  imagem4?: ImagemBloco
}

export type SobreExperiencia = Base & {
  _type: 'sobreExperiencia'
  mostrarEstrelas?: boolean
  imagem1?: ImagemBloco
  imagem2?: ImagemBloco
  cartoes?: Array<{_key?: string; titulo?: string; descricao?: string}>
}

export type SobreTresPilares = Base & {
  _type: 'sobreTresPilares'
  pilares?: Array<{
    _key?: string
    titulo?: string
    descricao?: string
    imagem?: ImagemBloco
  }>
}

export type SobreAmbientes = Base & {
  _type: 'sobreAmbientes'
  botaoTexto?: string
  botaoHref?: string
  imagens?: Array<{_key?: string; url?: string; alt?: string}>
}

export type SobreEtapas = Base & {
  _type: 'sobreEtapas'
  etapas?: Array<{_key?: string; titulo?: string; descricao?: string}>
}

export type SobreCompromisso = Base & {
  _type: 'sobreCompromisso'
  imagem?: ImagemBloco
}

export type SobreCtaFinal = Base & {
  _type: 'sobreCtaFinal'
  etiqueta?: string
  cartoes?: Array<{
    _key?: string
    titulo?: string
    descricao?: string
    icone?: string
    href?: string
    label?: string
  }>
}

export type EstruturaHero = Base & {
  _type: 'estruturaHero'
  eyebrow?: string
}

export type EstruturaHospedagem = Base & {
  _type: 'estruturaHospedagem'
  paragrafo1?: string
  paragrafo2?: unknown[]
  imagem1?: ImagemBloco
  imagem2?: ImagemBloco
  imagem3?: ImagemBloco
  imagem4?: ImagemBloco
  tituloLista?: string
  itens?: string[]
}

type CartaoComIcone = {
  _key?: string
  icone?: string
  titulo?: string
  descricao?: string
}

export type EstruturaProcesso = Base & {
  _type: 'estruturaProcesso'
  etiqueta?: string
  cartoes?: CartaoComIcone[]
}

export type EstruturaFamilias = Base & {
  _type: 'estruturaFamilias'
  cartoes?: CartaoComIcone[]
}

export type EstruturaAmbientes = Base & {
  _type: 'estruturaAmbientes'
  imagens?: Array<{_key?: string; url?: string; alt?: string}>
}

export type EstruturaConforto = Base & {
  _type: 'estruturaConforto'
  imagem?: ImagemBloco
  itens?: Array<{_key?: string; icone?: string; titulo?: string}>
}

export type EstruturaGaleriaFinal = Base & {
  _type: 'estruturaGaleriaFinal'
  imagem1?: ImagemBloco
  imagem2?: ImagemBloco
}

export type EstruturaUnidades = Base & {
  _type: 'estruturaUnidades'
  unidades?: Array<{
    _key?: string
    titulo?: string
    endereco?: string
    destaques?: string[]
    href?: string
    telefone?: string
    cidade?: string
    imagem?: ImagemBloco
  }>
}

export type EstruturaCareCta = Base & {
  _type: 'estruturaCareCta'
  etiqueta?: string
  cartoes?: Array<CartaoComIcone & {href?: string; label?: string}>
}

export type EstruturaCtaFinal = Base & {
  _type: 'estruturaCtaFinal'
  botaoTexto?: string
  botaoHref?: string
}

export type ServicosModalidades = Base & {
  _type: 'servicosModalidades'
  etiqueta?: string
  modalidades?: Array<{
    _key?: string
    icone?: string
    titulo?: string
    descricao?: string
    itens?: string[]
  }>
}

export type ServicosLista = Base & {
  _type: 'servicosLista'
  itens?: ItemReferenciado[]
  itensServico?: ItemReferenciado[]
}

export type ContatoHero = Base & {
  _type: 'contatoHero'
  eyebrow?: string
}

export type ContatoFormulario = Base & {
  _type: 'contatoFormulario'
}

type ItemReferenciado = {_id?: string; [chave: string]: unknown}

export type HomeHero = Base & {
  _type: 'homeHero'
  eyebrow?: string
  botaoTexto?: string
  botaoHref?: string
  imagem?: ImagemBloco
  numeros?: Array<{_key?: string; value?: string; label?: string; description?: string}>
}

export type HomePorQue = Base & {
  _type: 'homePorQue'
  descricaoRica?: unknown[]
  beneficios?: Array<{_key?: string; titulo?: string; descricao?: string}>
}

export type HomeUnidades = Base & {
  _type: 'homeUnidades'
  itens?: ItemReferenciado[]
  /** Unidades ja resolvidas pela query (com nome, endereco, telefone...). */
  itensUnidade?: ItemReferenciado[]
}
export type HomeServicos = Base & {
  _type: 'homeServicos'
  itens?: ItemReferenciado[]
  itensServico?: ItemReferenciado[]
}
export type HomeBlog = Base & {
  _type: 'homeBlog'
  itens?: ItemReferenciado[]
  itensArtigo?: ItemReferenciado[]
}
export type HomeDepoimentos = Base & {
  _type: 'homeDepoimentos'
  itens?: ItemReferenciado[]
  itensDepoimento?: ItemReferenciado[]
}
export type HomeCtaFinal = Base & {
  _type: 'homeCtaFinal'
  etiqueta?: string
  cartoes?: Array<{
    _key?: string
    icone?: string
    titulo?: string
    descricao?: string
    href?: string
    label?: string
  }>
  linksApoio?: Array<{_key?: string; label?: string; href?: string}>
}

export type HomeEstrutura = Base & {
  _type: 'homeEstrutura'
  botaoTexto?: string
  botaoHref?: string
}

export type HomeExperiencia = Base & {
  _type: 'homeExperiencia'
  etiqueta?: string
  paragrafo1?: string
  paragrafo2?: string
}

// ── Blocos reutilizaveis das paginas institucionais ────────────

export type PaginaHero = Base & {
  _type: 'paginaHero'
  etiqueta?: string
  botao1Texto?: string
  botao1Href?: string
  botao2Texto?: string
  botao2Href?: string
  imagem?: ImagemBloco
}

export type PaginaHistoria = Base & {
  _type: 'paginaHistoria'
  etiqueta?: string
  paragrafos?: string[]
  destaques?: Array<{
    _key?: string
    value?: string
    label?: string
    description?: string
  }>
}

export type PaginaPilares = Base & {
  _type: 'paginaPilares'
  tituloMissao?: string
  textoMissao?: string
  tituloVisao?: string
  textoVisao?: string
  tituloValores?: string
  valores?: string[]
}

export type PaginaCartoes = Base & {
  _type: 'paginaCartoes'
  cartoes?: Array<{
    _key?: string
    icone?: string
    titulo?: string
    descricao?: string
    itens?: string[]
    imagem?: ImagemBloco
  }>
}

export type PaginaGaleria = Base & {
  _type: 'paginaGaleria'
  imagens?: Array<{_key?: string; url?: string; alt?: string; legenda?: string}>
}

export type PaginaTextoLongo = Base & {
  _type: 'paginaTextoLongo'
  corpo?: unknown[]
}

export type PaginaCta = Base & {
  _type: 'paginaCta'
  botao1Texto?: string
  botao1Href?: string
  botao2Texto?: string
  botao2Href?: string
}

export type PaginaDepoimentos = Base & {
  _type: 'paginaDepoimentos'
  depoimentos?: Array<{
    _key?: string
    nome?: string
    texto?: string
    nota?: number
    destaque?: boolean
  }>
}

export type ServicosListaItens = {itens?: ItemReferenciado[]; itensServico?: ItemReferenciado[]}

export type PaginaListaBlog = Base & {
  _type: 'paginaListaBlog'
  itens?: ItemReferenciado[]
  itensArtigo?: ItemReferenciado[]
}

export type BlocoDaPagina =
  | SobreHero
  | SobreVitrineEstrutura
  | SobreExperiencia
  | SobreTresPilares
  | SobreAmbientes
  | SobreEtapas
  | SobreCompromisso
  | SobreCtaFinal
  | EstruturaHero
  | EstruturaHospedagem
  | EstruturaProcesso
  | EstruturaFamilias
  | EstruturaAmbientes
  | EstruturaConforto
  | EstruturaGaleriaFinal
  | EstruturaUnidades
  | EstruturaCareCta
  | EstruturaCtaFinal
  | ServicosModalidades
  | ServicosLista
  | ContatoHero
  | ContatoFormulario
  | HomeHero
  | HomePorQue
  | HomeUnidades
  | HomeServicos
  | HomeEstrutura
  | HomeBlog
  | HomeExperiencia
  | HomeDepoimentos
  | HomeCtaFinal
  | PaginaHero
  | PaginaHistoria
  | PaginaPilares
  | PaginaCartoes
  | PaginaGaleria
  | PaginaTextoLongo
  | PaginaCta
  | PaginaDepoimentos
  | PaginaListaBlog

/**
 * Todos os blocos de um tipo, na ordem do Studio.
 *
 * Paginas que repetem o mesmo formato (varias secoes de cartoes, por exemplo)
 * pegam o 1o, o 2o, o 3o... por posicao.
 */
export function blocosDoTipo<T extends BlocoDaPagina['_type']>(
  blocos: BlocoDaPagina[] | undefined,
  tipo: T
): Array<Extract<BlocoDaPagina, {_type: T}>> {
  return (blocos ?? []).filter(
    (bloco): bloco is Extract<BlocoDaPagina, {_type: T}> => bloco._type === tipo
  )
}

/** Acha o primeiro bloco de um tipo dentro da lista vinda do Sanity. */
export function acharBloco<T extends BlocoDaPagina['_type']>(
  blocos: BlocoDaPagina[] | undefined,
  tipo: T
): Extract<BlocoDaPagina, {_type: T}> | undefined {
  return blocos?.find(
    (bloco): bloco is Extract<BlocoDaPagina, {_type: T}> => bloco._type === tipo
  )
}

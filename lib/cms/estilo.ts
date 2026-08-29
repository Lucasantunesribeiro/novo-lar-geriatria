import type {CSSProperties} from 'react'

/**
 * Converte os ajustes visuais do Sanity em `style` do React.
 *
 * Contrato: campo vazio no Studio => propriedade AUSENTE no style => o site
 * mantem exatamente a aparencia que ja tinha (a do CSS/Tailwind do componente).
 * Nunca devolvemos um valor "padrao" inventado.
 */

export type EstiloTexto = {
  tamanho?: number
  tamanhoMobile?: number
  peso?: string
  alinhamento?: string
  cor?: string
  alturaLinha?: number
}

export type EstiloImagem = {
  largura?: number
  altura?: number
  ajuste?: string
  arredondamento?: number
}

export type EstiloBloco = {
  espacoTopo?: number
  espacoBaixo?: number
  corDeFundo?: string
  oculto?: boolean
}

function numeroValido(valor: unknown): valor is number {
  return typeof valor === 'number' && Number.isFinite(valor)
}

function textoValido(valor: unknown): valor is string {
  return typeof valor === 'string' && valor.trim().length > 0
}

/** Estilo de texto. Passe `estilo` vindo do Sanity; undefined devolve `{}`. */
export function styleTexto(estilo?: EstiloTexto | null): CSSProperties {
  if (!estilo) return {}

  const style: CSSProperties = {}

  if (numeroValido(estilo.tamanho)) style.fontSize = `${estilo.tamanho}px`
  if (textoValido(estilo.peso)) style.fontWeight = Number(estilo.peso) || undefined
  if (textoValido(estilo.alinhamento)) style.textAlign = estilo.alinhamento as CSSProperties['textAlign']
  if (textoValido(estilo.cor)) style.color = estilo.cor
  if (numeroValido(estilo.alturaLinha)) style.lineHeight = estilo.alturaLinha

  return style
}

/**
 * Variavel CSS para o tamanho no celular.
 *
 * O componente usa `style={{...styleTexto(e), ...varTextoMobile(e)}}` e a regra
 * global em app/globals.css aplica `--fs-mobile` abaixo de 768px.
 */
export function varTextoMobile(estilo?: EstiloTexto | null): CSSProperties {
  if (!estilo || !numeroValido(estilo.tamanhoMobile)) return {}
  return {['--fs-mobile' as string]: `${estilo.tamanhoMobile}px`} as CSSProperties
}

/** Estilo de texto completo (desktop + variavel do celular). */
export function estiloDeTexto(estilo?: EstiloTexto | null): CSSProperties {
  return {...styleTexto(estilo), ...varTextoMobile(estilo)}
}

/**
 * Classe que ativa o tamanho de celular.
 *
 * So retorna a classe quando existe um tamanho de celular definido — sem isso o
 * seletor em globals.css nunca casa e o texto fica com o tamanho original.
 */
export function classeTexto(estilo?: EstiloTexto | null): string {
  return estilo && numeroValido(estilo.tamanhoMobile) ? 'cms-texto' : ''
}

export function styleImagem(estilo?: EstiloImagem | null): CSSProperties {
  if (!estilo) return {}

  const style: CSSProperties = {}

  if (numeroValido(estilo.largura)) style.width = `${estilo.largura}px`
  if (numeroValido(estilo.altura)) style.height = `${estilo.altura}px`
  if (textoValido(estilo.ajuste)) style.objectFit = estilo.ajuste as CSSProperties['objectFit']
  if (numeroValido(estilo.arredondamento)) style.borderRadius = `${estilo.arredondamento}px`

  return style
}

export function styleBloco(estilo?: EstiloBloco | null): CSSProperties {
  if (!estilo) return {}

  const style: CSSProperties = {}

  if (numeroValido(estilo.espacoTopo)) style.paddingTop = `${estilo.espacoTopo}px`
  if (numeroValido(estilo.espacoBaixo)) style.paddingBottom = `${estilo.espacoBaixo}px`
  if (textoValido(estilo.corDeFundo)) style.backgroundColor = estilo.corDeFundo

  return style
}

export function blocoOculto(estilo?: EstiloBloco | null): boolean {
  return estilo?.oculto === true
}

/**
 * Primeiro valor util. Usado para "texto do Sanity, senao o texto atual".
 * String vazia conta como vazio — no Studio o cliente apaga o campo e espera
 * ver o texto original de volta.
 */
export function ou<T>(...valores: Array<T | null | undefined>): T | undefined {
  for (const valor of valores) {
    if (valor === null || valor === undefined) continue
    if (typeof valor === 'string' && valor.trim() === '') continue
    if (Array.isArray(valor) && valor.length === 0) continue
    return valor
  }
  return undefined
}

/**
 * Junta classes ignorando as vazias.
 *
 * Existe para nao sobrar espaco no atributo class quando `classeTexto` devolve
 * string vazia — o HTML gerado fica byte a byte igual ao de antes.
 */
export function cx(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(' ')
}

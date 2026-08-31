import { createClient } from 'next-sanity'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const isConfigured = projectId && projectId !== 'placeholder-project-id' && projectId !== ''
const useSanityCdn = process.env.NEXT_PUBLIC_SANITY_USE_CDN === 'true'

// Client para leitura (com CDN em produção)
export const client = isConfigured
  ? createClient({
      projectId: projectId!,
      dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
      apiVersion: '2024-01-01',
      useCdn: useSanityCdn,
    })
  : null

// Client para escrita (sem CDN, com token).
//
// Escrever sem token devolve 401 do Sanity. Antes o cliente era criado assim
// mesmo, o erro era engolido pelo try/catch de quem chamava e o visitante via
// "mensagem enviada com sucesso" enquanto nada era gravado. Agora, sem token,
// nao existe cliente de escrita nenhum — e quem chama consegue perceber isso.
const temToken = Boolean(process.env.SANITY_API_TOKEN)

export const writeClient =
  isConfigured && temToken
    ? createClient({
        projectId: projectId!,
        dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
        apiVersion: '2024-01-01',
        useCdn: false,
        token: process.env.SANITY_API_TOKEN,
      })
    : null

/** Da para gravar no CMS? Falso quando falta o token de escrita. */
export const podeEscreverNoSanity = Boolean(isConfigured && temToken)

export const isSanityConfigured = isConfigured

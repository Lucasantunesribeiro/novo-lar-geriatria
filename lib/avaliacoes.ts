import { client } from '@/lib/sanity/client'

/**
 * De onde saem os Place IDs do Google.
 *
 * Ordem: primeiro o que estiver escrito no Studio, em cada unidade (campo
 * "Google Place ID"); depois as variaveis de ambiente, para o caso de alguem
 * preferir configurar por la. Sem nenhum dos dois, devolve lista vazia — e
 * quem chama simplesmente nao mostra o carrossel, em vez de mostrar caixa
 * quebrada.
 */
export async function placeIdsDasUnidades(): Promise<string[]> {
  const ids: string[] = []

  if (client) {
    try {
      const doCms: Array<string | null> = await client.fetch(
        '*[_type=="unit" && defined(googlePlaceId)].googlePlaceId'
      )
      for (const id of doCms || []) if (id) ids.push(id)
    } catch {
      // CMS fora do ar nao pode derrubar a pagina inteira: seguimos para as
      // variaveis de ambiente.
    }
  }

  const doAmbiente = [
    process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID,
    process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID_MOINHOS_LUCIANA,
    process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID_MOINHOS_BARAO,
    process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID_PASSO_DAREIA,
  ]
  for (const id of doAmbiente) if (id && id.trim()) ids.push(id.trim())

  return [...new Set(ids)]
}

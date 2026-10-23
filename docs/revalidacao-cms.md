# Publicação do CMS sem esperar uma hora

## Estado desta entrega

Foi adicionado `POST /api/revalidate`, com assinatura de webhook do Sanity. O código foi testado localmente com `next build` + `next start`, incluindo o cache real do Next.

Após autorização expressa do usuário, o webhook **Novo Lar - revalidacao de conteudo** foi criado e conferido na API do Sanity: projeto `h3afqywn`, dataset `production`, ID `gb3NqrRwtKmdcC5C`, destino `https://geriatrianovolar.com.br/api/revalidate`. O segredo foi configurado sem registro do valor neste documento. Create/Update/Delete estão selecionados; rascunhos e versões estão excluídos. Filtro e projeção foram conferidos após salvar.

**O webhook está desativado:** o teste do receptor público retornou HTTP 404. Não houve deploy. Depois de publicar o código com autorização, validar a assinatura no receptor e ativar esse webhook existente, sem criar outro. O usuário informou que já configurou o segredo na Netlify; essa variável não foi inspecionada pelo agente.

Sem o webhook, permanece o prazo de uma hora da correção anterior. Com ele, após o evento ser recebido e processado, o próximo acesso busca os dados novos, inclusive quando o endereço estava guardado como 404. Uma aba já aberta não recebe atualização automática: é preciso recarregar ou navegar novamente. A propagação pela CDN da Netlify depende do adaptador publicado e deve ser conferida em produção após autorização; o teste local não simula essa infraestrutura.

## Referência de configuração e ativação pendente

1. Criar um segredo aleatório forte e exclusivo (por exemplo, 32 bytes aleatórios). Guardá-lo como **`SANITY_REVALIDATE_SECRET`** nas variáveis de ambiente do site na Netlify. Não usar prefixo `NEXT_PUBLIC_`, URL com segredo ou token de escrita do CMS. Não colocar o valor no Git.
2. No gerenciamento do projeto Sanity, abrir API → Webhooks e preparar um webhook POST para `https://geriatrianovolar.com.br/api/revalidate`, no mesmo dataset usado pelo site. Se o domínio efetivo for outro, usar aquele domínio.
3. Marcar Create, Update e Delete. Deixar eventos de rascunhos e versões **desativados**. Usar o mesmo segredo no campo Secret, que faz o Sanity assinar o corpo da mensagem.
4. Usar o filtro e a projeção abaixo. Manter o webhook desativado enquanto o receptor não estiver publicado. Depois de um deploy autorizado, ativá-lo e conferir o histórico de entregas.

Filtro GROQ:

```groq
!(_id in path("drafts.**")) &&
!(_id in path("versions.**")) &&
_type in [
  "page", "unit", "service", "serviceCategory", "blogPost", "teamMember",
  "testimonial", "faqPage", "siteSettings", "headerConfig", "footerConfig",
  "textosGlobais", "contactPage", "testimonialsPage", "thankYouPage",
  "privacyPolicy", "termsOfService", "activitiesPage", "teamPage",
  "structurePage", "homePage", "aboutPage", "aboutNovoLarPage", "photosPage",
  "locationPage", "servicesIndexPage", "blogIndexPage",
  "sanity.imageAsset", "sanity.fileAsset"
] &&
!(_type in ["sanity.imageAsset", "sanity.fileAsset"] && delta::operation() == "create")
```

Projeção GROQ:

```groq
{
  "_id": coalesce(after()._id, before()._id),
  "_type": coalesce(after()._type, before()._type),
  "operation": delta::operation(),
  "path": after().path,
  "previousPath": before().path
}
```

O `previousPath` é necessário para tirar o endereço antigo do cache ao renomear ou excluir. A projeção inclui somente os campos necessários, sem dados de contatos. Leads e visualizações não passam pelo filtro; o receptor também os ignora como segunda proteção. Uploads novos só provocam atualização quando o documento que os usa é publicado. Alterações/exclusões de arquivos existentes continuam cobertas.

## Como o cache funciona

- As consultas têm prazo de uma hora como reserva para falhas de entrega, além de tags para invalidação sob demanda.
- Páginas do tipo `page` usam uma tag por caminho. O webhook expira os caminhos antigo e novo, o índice de páginas e o sitemap. Isso cobre edição, publicação, despublicação, exclusão e 404 anteriormente cacheado.
- Consultas de artigos, serviços, unidades e outros documentos usam tags por tipo. As projeções de páginas também têm tags dos tipos que podem aparecer em seus cartões e listas. Essas dependências são conservadoras: a edição de um artigo ou unidade pode invalidar páginas cujas projeções permitem referências a esse tipo, mesmo quando não o exibem naquele momento. Não há consulta adicional ao CMS para descobrir referências a cada publicação.
- Cabeçalho, rodapé e textos globais invalidam as consultas compartilhadas que os usam. Alterações globais podem exigir nova geração em várias páginas; é necessário para manter o conteúdo correto.
- A leitura usa a origem do Sanity (`useCdn: false`), com cache do Next. Reutilizar também a CDN do Sanity logo após invalidar o Next poderia guardar de novo uma resposta antiga.
- O receptor aguarda três segundos após validar o evento, seguindo a margem de consistência usada pelo helper instalado do `next-sanity`. Depois usa `revalidateTag(tag, { expire: 0 })`, para que o próximo acesso aguarde os dados novos. O perfil `max` serviria uma versão antiga primeiro e não atenderia à atualização no primeiro acesso.
- O receptor não faz GET de páginas nem dispara rebuild. A reconstrução acontece por acesso. Rascunhos, leads e `pageView` não invalidam nada. A contagem e ordenação do blog continuam funcionando, com a atualização periódica existente.

## Custo e limites

Há uma execução do receptor por evento entregue, com a espera de três segundos, mais eventuais regenerações das páginas invalidadas e visitadas. Isso depende de publicações, e não do número de visitantes ou de teclas digitadas no Studio. Eventos repetidos/reentregas também contam. Não foi adicionado polling nem `SanityLive` por visitante.

Não é possível garantir um teto de consumo sem medir frequência de publicações, páginas acessadas e logs reais da Netlify. Eventos de conteúdo compartilhado podem afetar muitas rotas. Uma garantia de “zero Functions” seria incompatível com as APIs e a geração sob demanda preservadas neste projeto.

O sitemap agora também consulta os slugs de artigos e serviços do CMS, além das listas estáticas antigas. Essas consultas são cacheadas e recebem as tags correspondentes. Artigos e serviços novos podem entrar no sitemap sem rebuild.

## Validação e repetição

```powershell
npm run build
npm run lint
npm run validar:studio
npm run test:cache
npm run test:revalidation
# Em outro terminal:
npm run start -- -p 3100
# Com o servidor acima ativo:
npm run test:http
```

`test:revalidation` executa a política e um servidor Next de produção isolado, com segredo aleatório apenas em memória. Simula a leitura de conteúdo em endereços exclusivos e não grava nada no Sanity. Verifica assinatura ausente/incorreta, JSON inválido, segredo ausente, 404 → publicação, edição no primeiro acesso, renomeação, exclusão, sitemap, novas entradas de artigos/serviços, preservação do cache de outra página e ausência de invalidação por rascunhos/leads/views.

As APIs de contato e views, o carrossel e o cache de uma hora continuam sendo verificados pelos testes anteriores. Google Places/Resend reais continuam fora da validação local por ausência de chaves.

Resultado da auditoria final local: build e TypeScript aprovados; lint aprovado; 74 tipos do Studio válidos; 125 rotas prontas preservadas; 117 URLs do sitemap com HTTP 200, título, canonical e JSON-LD válidos. Os cenários de revalidação acima passaram contra o servidor de produção. O teste usa uma cópia temporária do build e confirma que não alterou o sitemap de trabalho. A ausência de conteúdo simulado no sitemap final foi conferida. No Chrome, carrossel/mobile passaram novamente, sem erros JavaScript, sem chamadas a reviews e com a contagem de leitura interceptada para não escrever no CMS.

Fontes: [revalidateTag](https://nextjs.org/docs/app/api-reference/functions/revalidateTag), [revalidatePath](https://nextjs.org/docs/app/api-reference/functions/revalidatePath), [webhooks Sanity](https://www.sanity.io/docs/content-lake/webhooks), [filtros de publicação e rascunhos](https://www.sanity.io/docs/developer-guides/filters-in-groq-powered-webhooks), [suporte da Netlify a invalidação por tags/caminhos](https://docs.netlify.com/build/frameworks/framework-setup-guides/nextjs/overview/). O comportamento do helper e as assinaturas aceitas foram conferidos no `next-sanity` 11.6.4 instalado.

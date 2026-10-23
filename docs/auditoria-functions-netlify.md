# Consumo de Functions — investigação local de 23/10/2026

> Atualização da auditoria final: foi implementada revalidação sob demanda autenticada, e o sitemap passou a incluir artigos/serviços do CMS. O prazo de uma hora descrito abaixo passa a ser a reserva quando não houver aviso de publicação. Ver [configuração, limites e testes da revalidação](./revalidacao-cms.md). Posteriormente, a pedido do usuário, o webhook foi criado no Sanity e mantido desativado porque o receptor público respondeu 404. Nenhum deploy foi realizado.

## Conclusão e limites da evidência

O build original já gerava 125 rotas prontas. Dessas, **121 venciam em 60 segundos**; quatro não tinham revalidação por tempo. Não era um site inteiro em SSR. A rota genérica `/[...slug]` e as APIs `/api/contact`, `/api/views` e `/api/reviews` eram dinâmicas.

O usuário informou 137 mil requisições em outubro e confirmou que não dispõe dos logs. Não há vínculo local com o site da Netlify, logs de acesso nem identificação do adaptador/commit efetivamente publicado. Portanto, a auditoria comprova os mecanismos de consumo deste código, mas não atribui percentuais históricos a cada mecanismo, não comprova tráfego de bots e não garante que este repositório explique sozinho o consumo da conta.

Foram examinados os caminhos de execução em `app`, componentes usados pelas páginas, fontes do CMS, APIs, rastreamento, imagens, metadados, configurações de build e regras de redirecionamento. A comprovação usa builds de produção, manifests gerados e respostas HTTP, além da leitura do código.

## Causas identificadas

| Mecanismo | Evidência anterior | Consequência |
| --- | --- | --- |
| ISR de um minuto | `getHeaderConfig`, `getFooterConfig`, `getTextosGlobais` e configurações do site pediam `revalidate: 60`; o sitemap também. Manifest: 121 rotas com TTL 60. HTTP da home e contato: `s-maxage=60`. | A menor validade compartilhada reduzia a validade das páginas. Uma visita após a expiração pode pedir trabalho ao Server Handler. Isso não significa execução automática a cada minuto sem visitas. |
| Rota genérica do CMS | Sem `generateStaticParams`; build classificava `/[...slug]` como dinâmica. | Caminhos não atendidos por rotas próprias eram processados em tempo de requisição. |
| Erros 404 sem cache | `/endereco-inexistente-auditoria` e `/wp-login.php` respondiam `private, no-cache, no-store`. | Repetições de caminhos inexistentes podiam voltar ao servidor. Scanners são um risco compatível com o código, não uma origem de tráfego comprovada. |
| Avaliações no navegador | O carrossel usado em serviços, equipe, fotos, atividades, localização, obrigado e landings fazia `fetch('/api/reviews')` ao montar. | Uma requisição adicional por montagem, sujeita ao cache da CDN. A API tem cache de uma hora, portanto não se pode equiparar toda chamada do navegador a uma execução de Function. |
| Visualizações do blog | `ViewTracker` faz um POST a `/api/views` a cada montagem de artigo e grava no Sanity. | Operação dinâmica por leitura. Esses números também ordenam os artigos do blog; remover a chamada perderia uma funcionalidade. |
| Contatos | POST em `/api/contact` salva no Sanity e pode enviar pelo Resend. | Operação dinâmica necessária ao envio. Não há polling ou chamadas de envio em cada visita. O aviso antigo de que a API apenas registrava logs está desatualizado. |
| Sitemap | O código gerado pelo Next 16.1.6 envia `Cache-Control: public, max-age=0, must-revalidate`, apesar do cache interno. | O cache interno sozinho não fornece prazo de reutilização à CDN. Foi acrescentado um cabeçalho específico para a Netlify. |

Não foram encontrados middleware/proxy de execução, Server Actions, uso de `cookies`, `headers` ou Draft Mode nas páginas, nem polling de APIs no navegador. O intervalo de seis segundos do carrossel apenas troca os cartões. `sanity/lib/live.ts` existe, mas o aplicativo não importa `SanityLive` ou `sanityFetch` desse arquivo. Código não utilizado não explica chamadas de produção.

Imagens usam `next/image`. O `minimumCacheTTL: 60` não é o TTL das páginas. Na integração moderna da Netlify, a otimização usa Image CDN; não há evidência local para culpar imagens pelo consumo do Server Handler ou desativar sua otimização. O adaptador efetivamente publicado precisaria ser confirmado nos logs do deploy.

## Alterações

1. As 34 leituras de conteúdo/Place IDs pelo cliente Sanity agora recebem uma política explícita e compartilhada de cache do Next com `revalidate: 3600`. A configuração de escrita não foi alterada. A CDN do Sanity, sozinha, não evita a execução do aplicativo na Netlify.
2. O sitemap usa revalidação de uma hora e recebe `Netlify-CDN-Cache-Control: public, s-maxage=3600, stale-while-revalidate=60` em `next.config.ts`.
3. A rota genérica enumera caminhos publicados do CMS no build, excluindo os atendidos por rotas próprias e prefixos reservados. `dynamicParams: true` preserva a publicação de novos caminhos sem rebuild. No dataset consultado, os 86 documentos de página já são atendidos pelas rotas próprias; por isso não há aumento artificial do número de rotas geradas.
4. O carrossel foi movido de `components/sections` para `components/reviews`. Um componente de servidor fornece os mesmos dados da fonte de avaliações existente; o componente do navegador mantém animação, botões, responsividade e fotos. Não faz mais chamadas HTTP. A API antiga permanece disponível para compatibilidade.
5. Foram adicionados `npm run test:cache` e `npm run test:http`, para conferir o build real e o servidor local. Nenhuma dependência foi adicionada ao projeto.

Títulos, canonicals, dados estruturados, arquivos de imagens, redirecionamentos e aliases foram preservados. A captura de contatos e a contagem no Sanity continuam com os mesmos caminhos de entrega.

## Validação executada

- **Antes:** build de produção; 125 rotas prontas, 121 com TTL 60; rota genérica dinâmica. O novo teste de cache falhou no build original, identificando o TTL de 60 segundos.
- **Depois:** `npm run build` terminou com código 0; 125 rotas prontas, 121 com TTL 3600 e quatro sem revalidação por tempo. A rota genérica passou a SSG. As únicas rotas classificadas como dinâmicas na tabela final são as três APIs.
- **TypeScript:** `tsc --noEmit --incremental false` passou; o build final também executou a verificação de tipos.
- **Lint:** `npm run lint` passou. Há um aviso de dados antigos do pacote `baseline-browser-mapping`; não é falha de lint/build e não explica invocações.
- **Studio:** `npm run validar:studio` passou, com 74 tipos conferidos.
- **Regressão do build:** `npm run test:cache` passou. Nenhuma das 125 rotas anteriores desapareceu.
- **HTTP:** `npm run test:http` passou contra `next start` na porta 3100. Todas as 112 URLs do sitemap responderam 200 com título, canonical e JSON-LD válido. Home, contato e equipe devolveram `s-maxage=3600`. O sitemap devolveu o cabeçalho específico da Netlify.
- **404:** caminhos inexistentes de CMS, arquivo e artigo devolveram 404 com cache de uma hora e `x-nextjs-cache: HIT` na segunda consulta.
- **APIs:** dados vazios em contato e views foram rejeitados com 400, sem criar leads ou visualizações; reviews respondeu com avaliações de cinco estrelas. Não foram feitos envios válidos de contato nem escritas de teste no CMS.
- **Compatibilidade:** redirect permanente `/sobre/a-novo-lar` → `/sobre` e os três aliases antigos de unidades passaram.
- **Navegador:** Chrome headless com Playwright temporário fora do repositório. Carrossel visível, botão funcionando, sem transbordamento horizontal a 390px e sem erros JavaScript. Zero chamadas a `/api/reviews`. A leitura de um artigo fez uma chamada a `/api/views`, interceptada pelo teste para não gravar no CMS. Tráfego de analytics foi bloqueado no teste.

O ambiente local tem Sanity configurado, mas não tem chave Google Places nem Resend. A execução de avaliações foi validada com a reserva de depoimentos reais existente. Entrega real de email e consulta autenticada ao Google não foram testadas. Nenhuma configuração, documento ou dado foi escrito em serviços externos.

Para repetir as verificações:

```powershell
npm run build
npm run lint
npm run validar:studio
npm run test:cache
# Em outro terminal:
npm run start -- -p 3100
# Com o servidor acima rodando:
npm run test:http
```

## Impacto esperado e operações restantes

- Em rotas com acesso suficiente para provocar cada expiração, o intervalo de revalidação passa de um minuto para uma hora: **até 60 vezes menos oportunidades de regeneração por tempo (98,3%)**, por rota. Isso não é uma previsão de redução de 98,3% das 137 mil invocações totais.
- As chamadas do navegador para avaliações são eliminadas. O conteúdo também passa a estar disponível no HTML inicial.
- Erros repetidos do mesmo caminho podem usar cache. Caminhos aleatórios sempre diferentes ainda podem exigir uma primeira execução. Não foram criados bloqueios de bots sem evidência de tráfego.
- Contatos e visualizações continuam consumindo Functions. Novos caminhos do CMS são gerados no primeiro acesso e depois cacheados. Primeiras visitas após deploy/cache frio e revalidações continuam podendo invocar o Server Handler, inclusive para SSG na Netlify.
- Publicações e edições podem levar cerca de uma hora, mais o próximo acesso e o tempo de regeneração, para aparecer. O cache funciona por acesso, não por um cronômetro que dispara sozinho. Isso também vale para um caminho que antes estava cacheado como 404.

Uma exportação `output: 'export'` não é uma troca compatível com todas as funções atuais: APIs POST, criação de páginas sem rebuild, ISR e otimização padrão de imagens exigiriam substituições. Não foi adotada. A solução conserva o CMS e os recursos existentes e reduz o trabalho repetitivo do servidor.

**Nenhum deploy foi realizado.** Após autorização e publicação, a confirmação operacional deve usar `Cache-Status`, logs por caminho/método/User-Agent e contagem do Server Handler. O cache real na infraestrutura da Netlify não pode ser comprovado por um servidor local. Também devem ser conferidos adaptador, cabeçalhos personalizados, proteção por senha (que pode desativar cache) e regras configuradas no painel.

## Referências oficiais

- [Next.js na Netlify](https://docs.netlify.com/build/frameworks/framework-setup-guides/nextjs/overview/): SSR/ISR/APIs usam Function; SSG também pode ter invocação inicial; imagens usam Image CDN.
- [Cache da Netlify](https://docs.netlify.com/build/caching/caching-overview/): cache de respostas dinâmicas, cabeçalhos específicos, variações e limitações.
- [Exportação estática do Next.js](https://nextjs.org/docs/app/guides/static-exports): recursos incompatíveis com exportação pura.
- [generateStaticParams](https://nextjs.org/docs/app/api-reference/functions/generate-static-params): geração antecipada e caminhos dinâmicos.
- [Cliente Sanity](https://github.com/sanity-io/client): opções `next`/`cache` por consulta. A implementação instalada em `@sanity/client/src/data/dataMethods.ts` repassa essas opções ao fetch.

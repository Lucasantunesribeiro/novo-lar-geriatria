# URLs Faltantes para Acesso Completo do Cliente

Data da análise: 2026-04-09  
Projeto: Novo Lar Geriatria  
Objetivo: identificar quais URLs ou áreas ainda impedem o cliente de ter controle editorial completo pelo Sanity Studio.

## Resumo direto

O site tem 120 URLs concretas detectadas.

Status atual:

| Status | Quantidade |
|---|---:|
| URLs com acesso editorial completo pelo Sanity | 117 |
| URLs com acesso parcial | 1 |
| URLs que são apenas redirect | 1 |
| URLs que não devem ser editáveis/indexáveis pelo cliente | 1 |
| URLs públicas sem cobertura Sanity | 0 |

Conclusão: não há uma lista grande de páginas públicas totalmente sem Sanity. O que falta para acesso completo são ajustes pontuais em 3 URLs especiais e em áreas globais do site, principalmente header, footer e configurações gerais.

## O que significa acesso completo

Considero acesso completo quando o cliente consegue, pelo Sanity Studio:

- editar título e textos principais;
- editar SEO title e SEO description;
- editar imagens e textos alternativos;
- editar blocos/seções da página;
- publicar ou despublicar conteúdo;
- controlar se a página deve ser indexável;
- revisar a URL sem depender de alteração de código;
- editar conteúdo relacionado, como serviços, blog, unidades e depoimentos.

## URLs que ainda faltam para acesso completo

### 1. `/perguntas-frequentes`

Status: acesso parcial  
URL: `https://novolargeriatria.com.br/perguntas-frequentes`  
Origem atual: documento Sanity do tipo `faqPage`.

O cliente consegue editar o conteúdo da página de FAQ se o documento `faqPage` estiver preenchido, mas essa página não está no mesmo modelo flexível das páginas do tipo `Pagina`, que usam seções editáveis e controle editorial completo por `path`.

O que falta:

- decidir se `/perguntas-frequentes` deve continuar como página singleton `faqPage`;
- ou migrar para o modelo `Pagina`, com `path: /perguntas-frequentes`;
- garantir edição completa de SEO, hero, FAQ, CTA, seções e indexação no mesmo padrão das outras páginas.

Recomendação:

Migrar `/perguntas-frequentes` para o modelo `Pagina` ou adaptar a rota para aceitar o documento `Pagina` como fonte principal. Isso padroniza a edição para o cliente e evita dois modelos diferentes para páginas públicas.

### 2. `/fotos`

Status: redirect  
URL: `https://novolargeriatria.com.br/fotos`  
Destino atual: `/sobre/fotos`.

Essa URL não é uma página editável. Ela apenas redireciona para a página real de fotos.

O cliente já edita a página real aqui:

```text
https://novolargeriatria.com.br/sobre/fotos
```

O que falta:

- decidir se `/fotos` continua existindo apenas como redirect;
- ou remover a rota se não houver uso histórico;
- ou transformar `/fotos` em página editável própria, se o cliente quiser uma galeria independente.

Recomendação:

Manter `/fotos` como redirect e fora do sitemap. Não precisa virar página editável, porque a URL canônica correta é `/sobre/fotos`.

### 3. `/obrigado`

Status: não recomendado para acesso editorial completo  
URL: `https://novolargeriatria.com.br/obrigado`

Essa página é uma tela técnica de pós-conversão, exibida depois de envio de formulário. Ela já está configurada como `noindex`.

O que falta:

- nada obrigatório para SEO;
- se o cliente quiser alterar textos da página de obrigado pelo Studio, criar ou ativar uma fonte Sanity para esse conteúdo.

Recomendação:

Não dar controle completo como página SEO comum. O ideal é permitir apenas edição de textos e links da página de obrigado, mantendo:

- `noindex`;
- fora do sitemap;
- sem alteração livre de URL;
- sem publicação como página indexável.

## URLs administrativas

### `/studio`

Status: área administrativa  
URL: `https://novolargeriatria.com.br/studio`

Essa URL é o painel do Sanity Studio, não uma página pública de conteúdo.

O que falta:

- bloquear explicitamente `/studio/` no `robots.txt`;
- garantir acesso apenas para usuários autorizados;
- orientar o cliente a usar essa URL como painel, não como página editável.

Recomendação:

Adicionar regra no `robots.txt`:

```text
Disallow: /studio/
```

## Itens globais que faltam para acesso completo

Mesmo não sendo URLs públicas, estes itens afetam o controle do cliente sobre o site inteiro.

### 1. Header

Status atual: sem documento `headerConfig` no Sanity.

O site usa fallback de código para links, textos e botões do header.

O que falta:

- criar documento `Configuração do Header`;
- preencher top bar, navegação principal, botões de telefone/WhatsApp, dropdown de unidades e logo;
- referenciar esse documento em `siteSettings`.

Impacto:

Sem isso, o cliente não tem controle completo do menu e links globais pelo Sanity.

### 2. Footer

Status atual: sem documento `footerConfig` no Sanity.

O site usa fallback de código para links, contatos e redes sociais do footer.

O que falta:

- criar documento `Configuração do Footer`;
- preencher colunas, links, unidades, contatos, redes sociais e rodapé inferior;
- referenciar esse documento em `siteSettings`.

Impacto:

Sem isso, o cliente não tem controle completo do rodapé pelo Sanity.

### 3. Configurações do Site

Status atual: existe `siteSettings`, mas está incompleto.

Campos faltando ou nulos:

- `siteName`;
- `siteUrl`;
- `googleAnalyticsId`;
- `googleTagManagerId`.

O que falta:

- completar dados institucionais;
- preencher URL principal do site;
- decidir se GA/GTM serão controlados pelo Sanity ou apenas por variáveis de ambiente;
- preencher imagem social padrão, logo e favicon se o cliente precisar controlar isso no Studio.

Impacto:

Sem isso, parte das configurações globais continua dependente de código ou variáveis de ambiente.

## URLs que já têm acesso completo

As demais URLs públicas têm cobertura por um destes tipos no Sanity:

- `Pagina`;
- `Serviço`;
- `Post do Blog`;
- `Unidade`.

Isso inclui:

- home;
- páginas institucionais;
- páginas de serviços;
- páginas de localidades;
- páginas comerciais;
- páginas de cuidados;
- perguntas individuais;
- comparativos;
- blog;
- unidades;
- contato;
- depoimentos;
- política de privacidade;
- termos de uso.

## Ajustes recomendados para acesso 100%

1. Padronizar `/perguntas-frequentes` como documento `Pagina` ou adaptar a rota para edição completa equivalente.
2. Manter `/fotos` como redirect para `/sobre/fotos`, sem tratar como página editável separada.
3. Manter `/obrigado` como página técnica `noindex`, com edição limitada apenas de conteúdo se necessário.
4. Criar e vincular `headerConfig`.
5. Criar e vincular `footerConfig`.
6. Completar `siteSettings`.
7. Bloquear `/studio/` no `robots.txt`.
8. Criar uma rotina de conferência: toda URL pública indexável deve ter documento Sanity claro, SEO preenchido e responsável editorial.

## Prioridade de execução

### Prioridade alta

- Criar `headerConfig`.
- Criar `footerConfig`.
- Completar `siteSettings`.
- Bloquear `/studio/` no `robots.txt`.

### Prioridade média

- Padronizar `/perguntas-frequentes`.
- Definir se `/obrigado` terá textos editáveis pelo Sanity.

### Prioridade baixa

- Manter ou remover `/fotos`, dependendo de backlinks e uso histórico.

## Status final

Para páginas públicas comuns, o cliente já tem acesso editorial quase completo. O acesso só não é 100% porque ainda existem exceções de rota (`/perguntas-frequentes`, `/fotos`, `/obrigado`) e porque header, footer e configurações globais ainda não estão totalmente controlados por documentos Sanity preenchidos.

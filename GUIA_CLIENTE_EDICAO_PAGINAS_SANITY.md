# Guia do Cliente para Editar Páginas no Sanity

Este guia explica como editar o conteúdo do site Novo Lar Geriatria pelo Sanity Studio, sem mexer em código.

## Acesso ao painel

1. Acesse o site no ambiente informado pela equipe técnica.
2. Entre em `/studio`.
3. Faça login com o usuário autorizado do Sanity.
4. No painel lateral, procure o tipo de conteúdo que deseja editar.

Exemplo:

```text
https://novolargeriatria.com.br/studio
```

Em ambiente local de desenvolvimento:

```text
http://localhost:3000/studio
```

## O que pode ser editado

O cliente pode editar conteúdos cadastrados no Sanity, principalmente:

- Páginas do site, no tipo `Pagina`.
- Serviços, no tipo `Serviço`.
- Unidades, no tipo `Unidade`.
- Posts do blog, no tipo `Post do Blog`.
- Depoimentos, no tipo `Depoimento`.
- Membros da equipe, no tipo `Membro da Equipe`.
- Configurações gerais do site, no tipo `Configurações do Site`.
- Header e footer, quando os documentos `Configuração do Header` e `Configuração do Footer` estiverem cadastrados.

Nem toda URL nova funciona automaticamente só por criar uma página no Sanity. Para editar páginas já existentes, basta usar o `Path (URL)` correto. Para criar uma URL totalmente nova que ainda não existe no site, a equipe técnica precisa confirmar se a rota já está preparada no código.

## Como editar uma página existente

1. No Sanity Studio, abra `Pagina`.
2. Use a busca do Studio para encontrar a página pelo nome ou pelo campo `Path (URL)`.
3. Abra a página desejada.
4. Edite os campos necessários.
5. Clique em `Publish` para publicar.
6. Abra a URL no site e revise o resultado.

Campos principais de uma página:

| Campo | Para que serve |
|---|---|
| `Titulo` | Nome interno e título principal da página no Studio. |
| `Path (URL)` | URL da página. Exemplo: `/sobre/equipe`. |
| `SEO > Meta title` | Título que aparece no Google e nas abas do navegador. |
| `SEO > Meta description` | Descrição que aparece no Google. |
| `SEO > Palavras-chave` | Lista de termos editoriais usados como apoio. |
| `SEO > Imagem social` | Imagem usada ao compartilhar a página. |
| `Indexavel` | Define se a página pode aparecer no Google. |
| `Intencao principal` | Classificação da intenção SEO da página. |
| `Cluster editorial` | Grupo de conteúdo da página. |
| `Ultima revisao editorial` | Data da última revisão do conteúdo. |
| `Secoes` | Blocos visuais e textuais que formam a página. |
| `Publicado` | Define se a página está publicada. |

## Cuidados ao editar o Path

O campo `Path (URL)` é sensível.

Pode editar quando:

- A equipe decidiu mudar a URL da página.
- Existe uma estratégia de redirecionamento.
- A nova URL já foi validada pela equipe técnica.

Evite editar quando:

- A página já está indexada no Google.
- A página recebe tráfego.
- Existem links internos apontando para a URL atual.

Exemplos corretos:

```text
/
/sobre
/sobre/equipe
/servicos
/cuidados-alzheimer
/porto-alegre/moinhos-de-vento
```

Exemplos a evitar:

```text
sobre
/sobre/
//sobre
https://novolargeriatria.com.br/sobre
```

O path deve começar com `/`, não deve ter domínio completo e não deve terminar com barra final, exceto a home `/`.

## Como editar as seções de uma página

Dentro de `Secoes`, cada item é um bloco da página.

Para editar uma seção:

1. Abra a página.
2. Vá até `Secoes`.
3. Clique na seção que deseja alterar.
4. Edite textos, imagens, links, cards, perguntas ou botões.
5. Salve e publique.

Para reordenar seções:

1. Arraste a seção para cima ou para baixo dentro da lista.
2. Publique.
3. Revise no site.

Para adicionar uma seção:

1. Clique em `Add item` ou `Adicionar item`.
2. Escolha o tipo de seção.
3. Preencha todos os campos importantes.
4. Publique.

Para remover uma seção:

1. Abra a lista de seções.
2. Remova o item desejado.
3. Publique.
4. Confira se a página continua clara e completa.

## Tipos de seção mais usados

| Seção | Uso recomendado |
|---|---|
| `seoHeroSection` | Hero de páginas SEO, com título, subtítulo e breadcrumbs. |
| `heroSection` | Hero institucional ou visual. |
| `richTextSection` | Texto livre, explicações e conteúdo editorial. |
| `featureCardsSection` | Cards de benefícios, diferenciais ou serviços. |
| `statsSection` | Números e dados de autoridade. |
| `unitsSection` | Lista de unidades. |
| `servicesSection` | Lista de serviços. |
| `testimonialsSection` | Depoimentos. |
| `gallerySection` | Galeria de imagens. |
| `faqSection` | Perguntas frequentes. |
| `ctaSection` | Chamada para ação. |
| `contactSection` | Bloco de contato. |
| `blogPostsSection` | Lista de posts do blog. |
| `checklistSection` | Lista de critérios, documentos ou passos. |
| `twoColumnSection` | Conteúdo em duas colunas. |
| `locationNoticeSection` | Aviso ou contexto de localização. |
| `relatedLinksSection` | Links para páginas relacionadas. |

## Como editar SEO de uma página

Abra a página e vá até `SEO`.

Preencha:

- `Meta title`: idealmente até 60 ou 65 caracteres.
- `Meta description`: idealmente até 150 ou 160 caracteres.
- `Palavras-chave`: termos principais da página.
- `Imagem social`: imagem usada em WhatsApp, Facebook, LinkedIn e outros compartilhamentos.

Boas práticas:

- Cada página deve ter um título único.
- Cada página deve ter uma descrição única.
- Evite repetir o mesmo título em páginas parecidas.
- Inclua a cidade ou bairro quando for uma página local.
- Inclua o serviço ou condição quando for uma página específica.
- Não prometa algo que a empresa não entrega.

Exemplo de bom meta title:

```text
Cuidados para Alzheimer em Porto Alegre | Novo Lar Geriatria
```

Exemplo de boa meta description:

```text
Hospedagem assistida para idosos com Alzheimer em Porto Alegre, com equipe multidisciplinar, rotina segura e acompanhamento familiar.
```

## Como usar o campo Indexavel

Use `Indexavel` como `true` quando a página deve aparecer no Google.

Use `Indexavel` como `false` quando a página não deve aparecer no Google, por exemplo:

- Página de obrigado.
- Página de teste.
- Página duplicada.
- Página temporária.
- Página sem conteúdo final.

Antes de tirar uma página importante do índice, confirme com a equipe responsável por SEO.

## Como editar páginas institucionais

Normalmente ficam no tipo `Pagina`.

Exemplos:

- `/`
- `/sobre`
- `/sobre/a-novo-lar`
- `/sobre/equipe`
- `/sobre/estrutura`
- `/sobre/atividades`
- `/sobre/fotos`
- `/sobre/localizacao`
- `/contato`
- `/depoimentos`
- `/perguntas-frequentes`
- `/politica-de-privacidade`
- `/termos-de-uso`

Procedimento:

1. Abra `Pagina`.
2. Busque pelo path.
3. Edite título, SEO e seções.
4. Publique.
5. Revise a página no site.

## Como editar páginas SEO comerciais, locais e de cuidados

Essas páginas também ficam no tipo `Pagina`.

Exemplos:

- `/casa-de-repouso-em-porto-alegre`
- `/clinica-geriatrica-porto-alegre`
- `/cuidados-alzheimer`
- `/cuidados-demencia`
- `/cuidados-parkinson`
- `/porto-alegre`
- `/canoas`
- `/sao-leopoldo`
- `/porto-alegre/moinhos-de-vento`
- `/porto-alegre/passo-dareia`

Para esse tipo de página, revise principalmente:

- Título principal.
- Subtítulo.
- Conteúdo explicativo.
- Links para páginas relacionadas.
- Perguntas frequentes.
- CTA de contato.
- SEO title.
- SEO description.
- Breadcrumbs.
- `serviceSchema`, quando existir.

## Como editar serviços

1. Abra `Serviço`.
2. Escolha o serviço desejado.
3. Edite os campos.
4. Publique.
5. Revise a URL do serviço.

Campos principais:

| Campo | Para que serve |
|---|---|
| `Título do Serviço` | Nome do serviço. |
| `Slug` | Parte final da URL. |
| `Descrição` | Descrição principal. |
| `Subtítulo` | Texto curto de apoio. |
| `Resumo Curto` | Resumo para cards e SEO. |
| `Descrição Completa` | Parágrafos da página de detalhe. |
| `Diferenciais` | Lista de pontos fortes. |
| `Imagem principal` | Imagem da página. |
| `Texto alternativo da imagem principal` | Descrição acessível da imagem. |
| `Galeria do serviço` | Imagens adicionais. |
| `SEO` | Título e descrição para Google. |
| `Categoria` | Grupo do serviço. |
| `Disponível nas Unidades` | Unidades que oferecem o serviço. |
| `Serviço em Destaque?` | Define se aparece em áreas destacadas. |

Evite mudar o `Slug` sem validação, pois ele muda a URL.

Exemplo:

```text
/servicos/hospedagem-assistida-24h
```

## Como editar unidades

1. Abra `Unidade`.
2. Escolha a unidade.
3. Atualize dados de contato, endereço, fotos, descrição e SEO.
4. Publique.
5. Revise a página da unidade.

Campos importantes:

- Nome da unidade.
- Slug.
- Status.
- Telefone.
- WhatsApp.
- E-mail.
- Endereço.
- Bairro.
- CEP.
- Coordenadas.
- Google Place ID.
- Horários.
- Imagem destaque.
- Galeria de fotos.
- Descrição curta.
- Descrição completa.
- Diferenciais.
- FAQ.
- SEO title.
- SEO description.

URLs atuais de unidades:

- `/unidades/passo-dareia`
- `/unidades/moinhos-barao-de-santo-angelo`
- `/unidades/moinhos-luciana-de-abreu`

## Como editar posts do blog

1. Abra `Post do Blog`.
2. Escolha o post.
3. Edite título, resumo, conteúdo, categoria, autor, imagem e SEO.
4. Publique.
5. Revise a URL no blog.

Campos importantes:

- `Título`.
- `Slug`.
- `Resumo`.
- `Conteúdo`.
- `Imagem de Capa`.
- `Categoria`.
- `Autor`.
- `Nome do autor`.
- `Tempo de leitura`.
- `Data de Publicação`.
- `SEO`.

Evite mudar o slug de posts já publicados sem combinar redirect.

## Como editar depoimentos

1. Abra `Depoimento`.
2. Edite nome, texto, nota, unidade relacionada e data.
3. Publique.
4. Revise onde o depoimento aparece no site.

Boas práticas:

- Mantenha textos reais e autorizados.
- Evite expor dados sensíveis.
- Use nomes abreviados se houver necessidade de privacidade.
- Priorize depoimentos específicos e úteis para famílias.

## Como editar imagens

Ao enviar imagens:

- Prefira fotos reais da estrutura, equipe e unidades.
- Use imagens nítidas e bem iluminadas.
- Evite imagens muito pesadas.
- Sempre preencha texto alternativo quando o campo existir.
- Use legenda quando a imagem precisar de contexto.

Exemplo de texto alternativo:

```text
Sala de convivência da unidade Novo Lar no bairro Moinhos de Vento
```

Evite:

```text
foto
imagem
IMG_1234
```

## Como criar uma nova página

1. Confirme se a URL desejada já existe ou se a equipe técnica preparou essa rota.
2. No Studio, abra `Pagina`.
3. Clique em criar novo documento.
4. Preencha `Titulo`.
5. Preencha `Path (URL)`.
6. Preencha SEO.
7. Marque `Indexavel` conforme a estratégia.
8. Defina `Intencao principal`.
9. Defina `Cluster editorial`.
10. Adicione as seções necessárias.
11. Publique.
12. Abra a URL no site.

Se a URL abrir 404 após publicar, a rota provavelmente ainda não existe no código. Nesse caso, acione a equipe técnica.

## Como criar um novo serviço, post ou unidade

Serviços, posts e unidades usam rotas dinâmicas. Isso significa que, em geral, criar um novo documento publicado com slug válido cria uma nova URL.

Exemplos:

```text
Novo serviço com slug fisioterapia-geriatrica
URL: /servicos/fisioterapia-geriatrica
```

```text
Novo post com slug cuidados-com-idosos-no-verao
URL: /blog/cuidados-com-idosos-no-verao
```

```text
Nova unidade com slug unidade-exemplo
URL: /unidades/unidade-exemplo
```

Mesmo assim, antes de publicar uma nova URL importante, valide com a equipe técnica ou SEO para garantir sitemap, links internos e qualidade editorial.

## Checklist antes de publicar

Antes de clicar em `Publish`, confira:

- O título está claro.
- O texto não tem erro de digitação.
- O telefone e WhatsApp estão corretos.
- Links internos abrem páginas existentes.
- Imagens carregam corretamente.
- Imagens têm texto alternativo.
- O SEO title é único.
- A SEO description é única.
- A página tem CTA de contato.
- A página tem conteúdo suficiente para a intenção dela.
- O campo `Indexavel` está correto.
- O `Path (URL)` não foi alterado por engano.

## Checklist depois de publicar

Depois de publicar:

1. Abra a URL em uma aba anônima.
2. Revise desktop e celular.
3. Clique nos botões principais.
4. Confira WhatsApp e telefone.
5. Confira links internos.
6. Compartilhe a URL no WhatsApp para revisar prévia social, quando necessário.
7. Avise a equipe técnica se algo não aparecer em até alguns minutos.

## Quando chamar a equipe técnica

Chame a equipe técnica quando:

- A URL publicada abre 404.
- O layout quebrou.
- Uma seção não aparece no site.
- Uma imagem não carrega.
- O Studio mostra erro ao publicar.
- Precisa criar uma URL totalmente nova.
- Precisa mudar uma URL já publicada.
- Precisa redirecionar uma página antiga.
- Precisa esconder uma página do Google.
- Precisa alterar header, footer ou navegação global.
- Precisa alterar formulário, integrações, WhatsApp, Analytics ou scripts.

## Regras simples para o cliente

- Edite conteúdo pelo Studio.
- Não altere paths sem validação.
- Não duplique slugs.
- Não publique página incompleta como indexável.
- Sempre revise no site depois de publicar.
- Para novas URLs estratégicas, valide com SEO antes.
- Para problemas de rota, layout ou integração, chame a equipe técnica.

## Fluxo recomendado para qualquer edição

```text
Entrar no Studio
-> Encontrar o documento
-> Editar conteúdo
-> Revisar SEO
-> Publicar
-> Abrir a página no site
-> Validar links, imagens e CTA
```

## Fluxo recomendado para página nova

```text
Definir objetivo da página
-> Confirmar se a rota existe
-> Criar documento no Sanity
-> Preencher path e SEO
-> Adicionar seções
-> Publicar
-> Revisar no site
-> Solicitar inclusão em sitemap ou links internos, se necessário
```

## Observação final

O Sanity controla o conteúdo, mas o código do site controla quais tipos de URL existem e como cada conteúdo é renderizado. Por isso, alterações de texto, imagens, SEO e seções são tarefas normais do cliente; criação de URLs novas, redirects, navegação global e ajustes de layout devem ser validados com a equipe técnica.

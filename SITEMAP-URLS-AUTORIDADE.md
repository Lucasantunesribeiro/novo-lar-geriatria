# URLs do Sitemap e Autoridade Editorial

Gerado em: 2026-04-07T17:02:00.000Z

## Resumo

- Total de URLs no sitemap: 113
- URLs com autoridade total no CMS: 113
- URLs com autoridade parcial: 0
- URLs hardcoded: 0

## Legenda de governanca

- `autoridade total`: o cliente pode alterar conteudo e metadados principais sem editar codigo.
- `autoridade parcial`: existe edicao via CMS, mas a rota ainda depende de layout, hero, imagens ou estrutura em codigo.
- `hardcoded`: a rota depende majoritariamente de codigo, constantes locais ou componentes nao governados pelo CMS.

## Status atual

Todas as 113 URLs presentes no sitemap passaram a operar com `autoridade total` para o cliente.

- Home, institucionais, contato, depoimentos, legal, blog hub e servicos hub agora sao `CMS-first` via documentos `_type == "page"`.
- Detalhes de servicos agora sao governados por `service` no Sanity.
- Artigos do blog agora sao governados por `blogPost` no Sanity.
- Detalhes de unidades agora sao governados por `unit` no Sanity.
- FAQ continua governada pelo singleton `faqPage`.

## Inventario completo

| URL | Cluster | Fonte de verdade | Nivel de autoridade | Observacao |
| --- | --- | --- | --- | --- |
| / | home | Sanity page | autoridade total | Home publicada em `_type == "page"` e renderizada em modo CMS-first. |
| /sobre | institucional | Sanity page | autoridade total | Conteudo, metadados e selecao de secoes governados por `_type == "page"`. |
| /sobre/equipe | institucional | Sanity page | autoridade total | Conteudo, metadados e selecao de secoes governados por `_type == "page"`. |
| /sobre/estrutura | institucional | Sanity page | autoridade total | Conteudo, metadados e selecao de secoes governados por `_type == "page"`. |
| /sobre/atividades | institucional | Sanity page | autoridade total | Conteudo, metadados e selecao de secoes governados por `_type == "page"`. |
| /sobre/fotos | institucional | Sanity page | autoridade total | Conteudo, metadados e selecao de secoes governados por `_type == "page"`. |
| /sobre/localizacao | institucional | Sanity page | autoridade total | Conteudo, metadados e selecao de secoes governados por `_type == "page"`. |
| /sobre/a-novo-lar | institucional | Sanity page | autoridade total | Conteudo, metadados e selecao de secoes governados por `_type == "page"`. |
| /servicos | servicos hub | Sanity page + service | autoridade total | Hub governado por `_type == "page"` e cards alimentados por documentos `service`. |
| /servicos/hospedagem-assistida-24h | servico detalhe | Sanity service | autoridade total | Conteudo, metadados, destaques e midia principal governados por `service`. |
| /servicos/enfermagem-medico-24h | servico detalhe | Sanity service | autoridade total | Conteudo, metadados, destaques e midia principal governados por `service`. |
| /servicos/nutricao-individualizada | servico detalhe | Sanity service | autoridade total | Conteudo, metadados, destaques e midia principal governados por `service`. |
| /servicos/terapia-ocupacional | servico detalhe | Sanity service | autoridade total | Conteudo, metadados, destaques e midia principal governados por `service`. |
| /servicos/musicoterapia-socializacao | servico detalhe | Sanity service | autoridade total | Conteudo, metadados, destaques e midia principal governados por `service`. |
| /servicos/servicos-lavanderia | servico detalhe | Sanity service | autoridade total | Conteudo, metadados, destaques e midia principal governados por `service`. |
| /servicos/convenio-farmacia | servico detalhe | Sanity service | autoridade total | Conteudo, metadados, destaques e midia principal governados por `service`. |
| /porto-alegre | local / cidade | Sanity page | autoridade total | Conteudo e metadados principais publicados via _type page. |
| /cuidados-alzheimer | condicao | Sanity page | autoridade total | Conteudo e metadados principais publicados via _type page. |
| /cuidados-demencia | condicao | Sanity page | autoridade total | Conteudo e metadados principais publicados via _type page. |
| /porto-alegre/moinhos-de-vento | local / bairro | Sanity page | autoridade total | Conteudo e metadados principais publicados via _type page. |
| /porto-alegre/moinhos-de-vento/cuidados-alzheimer | local / bairro | Sanity page | autoridade total | Conteudo e metadados principais publicados via _type page. |
| /porto-alegre/passo-dareia | local / bairro | Sanity page | autoridade total | Conteudo e metadados principais publicados via _type page. |
| /ilpi-porto-alegre | comercial | Sanity page | autoridade total | Conteudo e metadados principais publicados via _type page. |
| /residencial-geriatrico-porto-alegre | comercial | Sanity page | autoridade total | Conteudo e metadados principais publicados via _type page. |
| /regiao-metropolitana | local / regional | Sanity page | autoridade total | Conteudo e metadados principais publicados via _type page. |
| /canoas | local / regional | Sanity page | autoridade total | Conteudo e metadados principais publicados via _type page. |
| /sao-leopoldo | local / regional | Sanity page | autoridade total | Conteudo e metadados principais publicados via _type page. |
| /novo-hamburgo | local / regional | Sanity page | autoridade total | Conteudo e metadados principais publicados via _type page. |
| /hospedagem-temporaria-idosos-porto-alegre | comercial | Sanity page | autoridade total | Conteudo e metadados principais publicados via _type page. |
| /casa-de-repouso-em-porto-alegre | comercial | Sanity page | autoridade total | Conteudo e metadados principais publicados via _type page. |
| /ilpi-em-porto-alegre | local captacao | Sanity page | autoridade total | Conteudo e metadados principais publicados via _type page. |
| /residencial-geriatrico-em-porto-alegre | comercial | Sanity page | autoridade total | Conteudo e metadados principais publicados via _type page. |
| /residencia-para-idosos-porto-alegre | comercial | Sanity page | autoridade total | Conteudo e metadados principais publicados via _type page. |
| /lar-para-idosos-em-porto-alegre | comercial | Sanity page | autoridade total | Conteudo e metadados principais publicados via _type page. |
| /clinica-geriatrica-porto-alegre | comercial | Sanity page | autoridade total | Conteudo e metadados principais publicados via _type page. |
| /acolhimento-pos-alta-hospitalar-idosos | comercial | Sanity page | autoridade total | Conteudo e metadados principais publicados via _type page. |
| /cuidados-parkinson | condicao | Sanity page | autoridade total | Conteudo e metadados principais publicados via _type page. |
| /cuidados-fragilidade-do-idoso | condicao | Sanity page | autoridade total | Conteudo e metadados principais publicados via _type page. |
| /cuidados-idosos-acamados | condicao | Sanity page | autoridade total | Conteudo e metadados principais publicados via _type page. |
| /cuidados-mobilidade-reduzida | condicao | Sanity page | autoridade total | Conteudo e metadados principais publicados via _type page. |
| /cuidados-pacientes-cronicos | condicao | Sanity page | autoridade total | Conteudo e metadados principais publicados via _type page. |
| /cuidados-pacientes-neurologicos | condicao | Sanity page | autoridade total | Conteudo e metadados principais publicados via _type page. |
| /cuidados-pacientes-oncologicos | condicao | Sanity page | autoridade total | Conteudo e metadados principais publicados via _type page. |
| /cuidados-paliativos-idosos | condicao | Sanity page | autoridade total | Conteudo e metadados principais publicados via _type page. |
| /cuidados-perda-cognitiva | condicao | Sanity page | autoridade total | Conteudo e metadados principais publicados via _type page. |
| /cuidados-pos-avc | condicao | Sanity page | autoridade total | Conteudo e metadados principais publicados via _type page. |
| /cuidados-pos-cirurgicos-idosos | condicao | Sanity page | autoridade total | Conteudo e metadados principais publicados via _type page. |
| /cuidados-reabilitacao-geriatrica | condicao | Sanity page | autoridade total | Conteudo e metadados principais publicados via _type page. |
| /gravatai | local / regional | Sanity page | autoridade total | Conteudo e metadados principais publicados via _type page. |
| /cachoeirinha | local / regional | Sanity page | autoridade total | Conteudo e metadados principais publicados via _type page. |
| /esteio | local / regional | Sanity page | autoridade total | Conteudo e metadados principais publicados via _type page. |
| /sapucaia-do-sul | local / regional | Sanity page | autoridade total | Conteudo e metadados principais publicados via _type page. |
| /alvorada | local / regional | Sanity page | autoridade total | Conteudo e metadados principais publicados via _type page. |
| /viamao | local / regional | Sanity page | autoridade total | Conteudo e metadados principais publicados via _type page. |
| /vale-do-sinos | local / regional | Sanity page | autoridade total | Conteudo e metadados principais publicados via _type page. |
| /zona-norte-porto-alegre | local / regional | Sanity page | autoridade total | Conteudo e metadados principais publicados via _type page. |
| /clinica-para-idosos-em-porto-alegre | comercial | Sanity page | autoridade total | Conteudo e metadados principais publicados via _type page. |
| /cuidado-integral-ao-idoso-em-porto-alegre | comercial | Sanity page | autoridade total | Conteudo e metadados principais publicados via _type page. |
| /residencia-assistida-porto-alegre | comercial | Sanity page | autoridade total | Conteudo e metadados principais publicados via _type page. |
| /internacao-geriatrica-porto-alegre | comercial | Sanity page | autoridade total | Conteudo e metadados principais publicados via _type page. |
| /internacao-para-pacientes-cronicos-porto-alegre | comercial | Sanity page | autoridade total | Conteudo e metadados principais publicados via _type page. |
| /internacao-para-pacientes-neurologicos-porto-alegre | comercial | Sanity page | autoridade total | Conteudo e metadados principais publicados via _type page. |
| /perguntas/casa-de-repouso-quanto-custa | pergunta | Sanity page | autoridade total | Conteudo e metadados principais publicados via _type page. |
| /perguntas/visitas-em-ilpi-como-funciona | pergunta | Sanity page | autoridade total | Conteudo e metadados principais publicados via _type page. |
| /perguntas/idoso-com-alzheimer-quando-internar | pergunta | Sanity page | autoridade total | Conteudo e metadados principais publicados via _type page. |
| /perguntas/ilpi-ou-cuidador-particular | pergunta | Sanity page | autoridade total | Conteudo e metadados principais publicados via _type page. |
| /perguntas/o-que-levar-na-admissao-do-idoso | pergunta | Sanity page | autoridade total | Conteudo e metadados principais publicados via _type page. |
| /perguntas/como-funciona-a-adaptacao-na-ilpi | pergunta | Sanity page | autoridade total | Conteudo e metadados principais publicados via _type page. |
| /porto-alegre/moinhos-de-vento/cuidados-demencia | local / bairro | Sanity page | autoridade total | Conteudo e metadados principais publicados via _type page. |
| /porto-alegre/moinhos-de-vento/cuidados-paliativos | local / bairro | Sanity page | autoridade total | Conteudo e metadados principais publicados via _type page. |
| /porto-alegre/moinhos-de-vento/cuidados-parkinson | local / bairro | Sanity page | autoridade total | Conteudo e metadados principais publicados via _type page. |
| /porto-alegre/passo-dareia/cuidados-demencia | local / bairro | Sanity page | autoridade total | Conteudo e metadados principais publicados via _type page. |
| /porto-alegre/passo-dareia/cuidados-parkinson | local / bairro | Sanity page | autoridade total | Conteudo e metadados principais publicados via _type page. |
| /porto-alegre/passo-dareia/idosos-acamados | local / bairro | Sanity page | autoridade total | Conteudo e metadados principais publicados via _type page. |
| /canoas/ilpi-em-porto-alegre | local captacao | Sanity page | autoridade total | Conteudo e metadados principais publicados via _type page. |
| /sao-leopoldo/ilpi-em-porto-alegre | local captacao | Sanity page | autoridade total | Conteudo e metadados principais publicados via _type page. |
| /novo-hamburgo/ilpi-em-porto-alegre | local captacao | Sanity page | autoridade total | Conteudo e metadados principais publicados via _type page. |
| /gravatai/ilpi-em-porto-alegre | local captacao | Sanity page | autoridade total | Conteudo e metadados principais publicados via _type page. |
| /cachoeirinha/ilpi-em-porto-alegre | local captacao | Sanity page | autoridade total | Conteudo e metadados principais publicados via _type page. |
| /viamao/ilpi-em-porto-alegre | local captacao | Sanity page | autoridade total | Conteudo e metadados principais publicados via _type page. |
| /comparativos/ilpi-ou-home-care | comparativo | Sanity page | autoridade total | Conteudo e metadados principais publicados via _type page. |
| /comparativos/ilpi-ou-cuidador-24h | comparativo | Sanity page | autoridade total | Conteudo e metadados principais publicados via _type page. |
| /comparativos/ilpi-ou-residencia-assistida | comparativo | Sanity page | autoridade total | Conteudo e metadados principais publicados via _type page. |
| /comparativos/ilpi-ou-hospedagem-temporaria | comparativo | Sanity page | autoridade total | Conteudo e metadados principais publicados via _type page. |
| /comparativos/casa-de-repouso-ou-residencial-geriatrico | comparativo | Sanity page | autoridade total | Conteudo e metadados principais publicados via _type page. |
| /comparativos/alzheimer-em-casa-ou-ilpi | comparativo | Sanity page | autoridade total | Conteudo e metadados principais publicados via _type page. |
| /comparativos/demencia-em-casa-ou-ilpi | comparativo | Sanity page | autoridade total | Conteudo e metadados principais publicados via _type page. |
| /comparativos/parkinson-em-casa-ou-ilpi | comparativo | Sanity page | autoridade total | Conteudo e metadados principais publicados via _type page. |
| /blog | blog hub | Sanity page + blogPost | autoridade total | Hub governado por `_type == "page"` e lista de artigos governada por `blogPost`. |
| /contato | contato | Sanity page | autoridade total | Conteudo, metadados e canais principais governados por `_type == "page"`. |
| /depoimentos | depoimentos | Sanity page + testimonial | autoridade total | Pagina governada por `_type == "page"` com prova social vinda de `testimonial`. |
| /perguntas-frequentes | faq | Sanity faqPage | autoridade total | Titulo, blocos e FAQ podem ser alterados pelo singleton faqPage. |
| /politica-de-privacidade | legal | Sanity page | autoridade total | Conteudo legal e metadados principais governados por `_type == "page"`. |
| /termos-de-uso | legal | Sanity page | autoridade total | Conteudo legal e metadados principais governados por `_type == "page"`. |
| /blog/cuidados-inverno | blog artigo | Sanity blogPost | autoridade total | Conteudo, capa, categoria, autor, leitura e SEO governados por `blogPost`. |
| /blog/alimentacao-saudavel | blog artigo | Sanity blogPost | autoridade total | Conteudo, capa, categoria, autor, leitura e SEO governados por `blogPost`. |
| /blog/exercicios-fisicos | blog artigo | Sanity blogPost | autoridade total | Conteudo, capa, categoria, autor, leitura e SEO governados por `blogPost`. |
| /blog/saude-mental | blog artigo | Sanity blogPost | autoridade total | Conteudo, capa, categoria, autor, leitura e SEO governados por `blogPost`. |
| /blog/escolher-clinica | blog artigo | Sanity blogPost | autoridade total | Conteudo, capa, categoria, autor, leitura e SEO governados por `blogPost`. |
| /blog/atividades-cognitivas | blog artigo | Sanity blogPost | autoridade total | Conteudo, capa, categoria, autor, leitura e SEO governados por `blogPost`. |
| /blog/quando-procurar-uma-ilpi | blog artigo | Sanity blogPost | autoridade total | Conteudo, capa, categoria, autor, leitura e SEO governados por `blogPost`. |
| /blog/sinais-de-que-o-idoso-precisa-de-cuidados-24h | blog artigo | Sanity blogPost | autoridade total | Conteudo, capa, categoria, autor, leitura e SEO governados por `blogPost`. |
| /blog/diferenca-entre-ilpi-casa-de-repouso-e-residencial-geriatrico | blog artigo | Sanity blogPost | autoridade total | Conteudo, capa, categoria, autor, leitura e SEO governados por `blogPost`. |
| /blog/como-escolher-casa-de-repouso-em-porto-alegre | blog artigo | Sanity blogPost | autoridade total | Conteudo, capa, categoria, autor, leitura e SEO governados por `blogPost`. |
| /blog/alzheimer-quando-a-familia-nao-consegue-cuidar-sozinha | blog artigo | Sanity blogPost | autoridade total | Conteudo, capa, categoria, autor, leitura e SEO governados por `blogPost`. |
| /blog/demencia-senil-cuidados-e-sinais-de-alerta | blog artigo | Sanity blogPost | autoridade total | Conteudo, capa, categoria, autor, leitura e SEO governados por `blogPost`. |
| /blog/parkinson-em-idosos-cuidados-diarios | blog artigo | Sanity blogPost | autoridade total | Conteudo, capa, categoria, autor, leitura e SEO governados por `blogPost`. |
| /blog/cuidados-paliativos-idosos-como-funciona | blog artigo | Sanity blogPost | autoridade total | Conteudo, capa, categoria, autor, leitura e SEO governados por `blogPost`. |
| /blog/idoso-pos-avc-quais-cuidados-sao-necessarios | blog artigo | Sanity blogPost | autoridade total | Conteudo, capa, categoria, autor, leitura e SEO governados por `blogPost`. |
| /blog/hospedagem-temporaria-para-idosos-como-funciona | blog artigo | Sanity blogPost | autoridade total | Conteudo, capa, categoria, autor, leitura e SEO governados por `blogPost`. |
| /unidades/moinhos-barao-de-santo-angelo | unidade | Sanity unit | autoridade total | Nome, midia principal, endereco, FAQ, galerias e metadados da unidade sao governados por `unit`. |
| /unidades/moinhos-luciana-de-abreu | unidade | Sanity unit | autoridade total | Nome, midia principal, endereco, FAQ, galerias e metadados da unidade sao governados por `unit`. |
| /unidades/passo-dareia | unidade | Sanity unit | autoridade total | Nome, midia principal, endereco, FAQ, galerias e metadados da unidade sao governados por `unit`. |

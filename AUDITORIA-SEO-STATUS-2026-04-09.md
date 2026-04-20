# Auditoria SEO - Status Completo

Data da auditoria: 2026-04-09  
Projeto: Novo Lar Geriatria  
Base canonica: `https://novolargeriatria.com.br`

## Resumo executivo

O projeto tem uma base SEO forte para busca local e termos comerciais de geriatria em Porto Alegre: metadata por rota, canonical, sitemap dinamico, robots, manifest, JSON-LD, paginas por localidades, paginas por condicao, perguntas frequentes, comparativos, blog e unidades.

O principal risco atual e governanca. Ha 120 URLs concretas disponiveis, 113 no sitemap buildado e 7 fora do sitemap. A maioria das paginas SEO expandidas existe no Sanity e esta indexavel, mas 72 paginas ainda nao tem campos editoriais de governanca preenchidos (`primaryIntent`, `cluster`, `lastReviewedAt`, `indexable`). Tambem ha risco de canibalizacao por termos muito proximos e servicos antigos fora do sitemap.

## Status tecnico SEO

- Sitemap buildado: 113 URLs.
- URLs concretas disponiveis detectadas: 120.
- URLs disponiveis fora do sitemap: 7.
- Rotas dinamicas detectadas: `/blog/[slug]`, `/comparativos/[slug]`, `/perguntas/[slug]`, `/servicos/[slug]`, `/unidades/[slug]`, `/studio/[[...tool]]`.
- `robots.txt` permite `/`, bloqueia `/api/`, `/_next/`, `/admin/` e `/obrigado`.
- `robots.txt` nao bloqueia explicitamente `/studio`.
- `/obrigado` tem `robots: { index: false, follow: false }` e nao aparece no sitemap.
- `/fotos` e uma rota de redirect para `/sobre/fotos` e nao aparece no sitemap.
- Canonicals sao usados nas rotas principais via metadata ou `withCanonicalPath`.
- JSON-LD existe para WebSite, Organization, Breadcrumb, FAQ, Service, Article e unidades.
- Open Graph e Twitter metadata existem, mas algumas rotas ainda dependem de imagem generica/fallback.

## URLs disponiveis em ordem

### URLs no sitemap atual

1. https://novolargeriatria.com.br
2. https://novolargeriatria.com.br/sobre
3. https://novolargeriatria.com.br/sobre/equipe
4. https://novolargeriatria.com.br/sobre/estrutura
5. https://novolargeriatria.com.br/sobre/atividades
6. https://novolargeriatria.com.br/sobre/fotos
7. https://novolargeriatria.com.br/sobre/localizacao
8. https://novolargeriatria.com.br/sobre/a-novo-lar
9. https://novolargeriatria.com.br/servicos
10. https://novolargeriatria.com.br/servicos/hospedagem-assistida-24h
11. https://novolargeriatria.com.br/servicos/enfermagem-medico-24h
12. https://novolargeriatria.com.br/servicos/nutricao-individualizada
13. https://novolargeriatria.com.br/servicos/terapia-ocupacional
14. https://novolargeriatria.com.br/servicos/musicoterapia-socializacao
15. https://novolargeriatria.com.br/servicos/servicos-lavanderia
16. https://novolargeriatria.com.br/servicos/convenio-farmacia
17. https://novolargeriatria.com.br/porto-alegre
18. https://novolargeriatria.com.br/cuidados-alzheimer
19. https://novolargeriatria.com.br/cuidados-demencia
20. https://novolargeriatria.com.br/porto-alegre/moinhos-de-vento
21. https://novolargeriatria.com.br/porto-alegre/moinhos-de-vento/cuidados-alzheimer
22. https://novolargeriatria.com.br/porto-alegre/passo-dareia
23. https://novolargeriatria.com.br/ilpi-porto-alegre
24. https://novolargeriatria.com.br/residencial-geriatrico-porto-alegre
25. https://novolargeriatria.com.br/regiao-metropolitana
26. https://novolargeriatria.com.br/canoas
27. https://novolargeriatria.com.br/sao-leopoldo
28. https://novolargeriatria.com.br/novo-hamburgo
29. https://novolargeriatria.com.br/hospedagem-temporaria-idosos-porto-alegre
30. https://novolargeriatria.com.br/casa-de-repouso-em-porto-alegre
31. https://novolargeriatria.com.br/ilpi-em-porto-alegre
32. https://novolargeriatria.com.br/residencial-geriatrico-em-porto-alegre
33. https://novolargeriatria.com.br/residencia-para-idosos-porto-alegre
34. https://novolargeriatria.com.br/lar-para-idosos-em-porto-alegre
35. https://novolargeriatria.com.br/clinica-geriatrica-porto-alegre
36. https://novolargeriatria.com.br/acolhimento-pos-alta-hospitalar-idosos
37. https://novolargeriatria.com.br/cuidados-parkinson
38. https://novolargeriatria.com.br/cuidados-fragilidade-do-idoso
39. https://novolargeriatria.com.br/cuidados-idosos-acamados
40. https://novolargeriatria.com.br/cuidados-mobilidade-reduzida
41. https://novolargeriatria.com.br/cuidados-pacientes-cronicos
42. https://novolargeriatria.com.br/cuidados-pacientes-neurologicos
43. https://novolargeriatria.com.br/cuidados-pacientes-oncologicos
44. https://novolargeriatria.com.br/cuidados-paliativos-idosos
45. https://novolargeriatria.com.br/cuidados-perda-cognitiva
46. https://novolargeriatria.com.br/cuidados-pos-avc
47. https://novolargeriatria.com.br/cuidados-pos-cirurgicos-idosos
48. https://novolargeriatria.com.br/cuidados-reabilitacao-geriatrica
49. https://novolargeriatria.com.br/gravatai
50. https://novolargeriatria.com.br/cachoeirinha
51. https://novolargeriatria.com.br/esteio
52. https://novolargeriatria.com.br/sapucaia-do-sul
53. https://novolargeriatria.com.br/alvorada
54. https://novolargeriatria.com.br/viamao
55. https://novolargeriatria.com.br/vale-do-sinos
56. https://novolargeriatria.com.br/zona-norte-porto-alegre
57. https://novolargeriatria.com.br/clinica-para-idosos-em-porto-alegre
58. https://novolargeriatria.com.br/cuidado-integral-ao-idoso-em-porto-alegre
59. https://novolargeriatria.com.br/residencia-assistida-porto-alegre
60. https://novolargeriatria.com.br/internacao-geriatrica-porto-alegre
61. https://novolargeriatria.com.br/internacao-para-pacientes-cronicos-porto-alegre
62. https://novolargeriatria.com.br/internacao-para-pacientes-neurologicos-porto-alegre
63. https://novolargeriatria.com.br/perguntas/casa-de-repouso-quanto-custa
64. https://novolargeriatria.com.br/perguntas/visitas-em-ilpi-como-funciona
65. https://novolargeriatria.com.br/perguntas/idoso-com-alzheimer-quando-internar
66. https://novolargeriatria.com.br/perguntas/ilpi-ou-cuidador-particular
67. https://novolargeriatria.com.br/perguntas/o-que-levar-na-admissao-do-idoso
68. https://novolargeriatria.com.br/perguntas/como-funciona-a-adaptacao-na-ilpi
69. https://novolargeriatria.com.br/porto-alegre/moinhos-de-vento/cuidados-demencia
70. https://novolargeriatria.com.br/porto-alegre/moinhos-de-vento/cuidados-paliativos
71. https://novolargeriatria.com.br/porto-alegre/moinhos-de-vento/cuidados-parkinson
72. https://novolargeriatria.com.br/porto-alegre/passo-dareia/cuidados-demencia
73. https://novolargeriatria.com.br/porto-alegre/passo-dareia/cuidados-parkinson
74. https://novolargeriatria.com.br/porto-alegre/passo-dareia/idosos-acamados
75. https://novolargeriatria.com.br/canoas/ilpi-em-porto-alegre
76. https://novolargeriatria.com.br/sao-leopoldo/ilpi-em-porto-alegre
77. https://novolargeriatria.com.br/novo-hamburgo/ilpi-em-porto-alegre
78. https://novolargeriatria.com.br/gravatai/ilpi-em-porto-alegre
79. https://novolargeriatria.com.br/cachoeirinha/ilpi-em-porto-alegre
80. https://novolargeriatria.com.br/viamao/ilpi-em-porto-alegre
81. https://novolargeriatria.com.br/comparativos/ilpi-ou-home-care
82. https://novolargeriatria.com.br/comparativos/ilpi-ou-cuidador-24h
83. https://novolargeriatria.com.br/comparativos/ilpi-ou-residencia-assistida
84. https://novolargeriatria.com.br/comparativos/ilpi-ou-hospedagem-temporaria
85. https://novolargeriatria.com.br/comparativos/casa-de-repouso-ou-residencial-geriatrico
86. https://novolargeriatria.com.br/comparativos/alzheimer-em-casa-ou-ilpi
87. https://novolargeriatria.com.br/comparativos/demencia-em-casa-ou-ilpi
88. https://novolargeriatria.com.br/comparativos/parkinson-em-casa-ou-ilpi
89. https://novolargeriatria.com.br/blog
90. https://novolargeriatria.com.br/contato
91. https://novolargeriatria.com.br/depoimentos
92. https://novolargeriatria.com.br/perguntas-frequentes
93. https://novolargeriatria.com.br/politica-de-privacidade
94. https://novolargeriatria.com.br/termos-de-uso
95. https://novolargeriatria.com.br/blog/cuidados-inverno
96. https://novolargeriatria.com.br/blog/alimentacao-saudavel
97. https://novolargeriatria.com.br/blog/exercicios-fisicos
98. https://novolargeriatria.com.br/blog/saude-mental
99. https://novolargeriatria.com.br/blog/escolher-clinica
100. https://novolargeriatria.com.br/blog/atividades-cognitivas
101. https://novolargeriatria.com.br/blog/quando-procurar-uma-ilpi
102. https://novolargeriatria.com.br/blog/sinais-de-que-o-idoso-precisa-de-cuidados-24h
103. https://novolargeriatria.com.br/blog/diferenca-entre-ilpi-casa-de-repouso-e-residencial-geriatrico
104. https://novolargeriatria.com.br/blog/como-escolher-casa-de-repouso-em-porto-alegre
105. https://novolargeriatria.com.br/blog/alzheimer-quando-a-familia-nao-consegue-cuidar-sozinha
106. https://novolargeriatria.com.br/blog/demencia-senil-cuidados-e-sinais-de-alerta
107. https://novolargeriatria.com.br/blog/parkinson-em-idosos-cuidados-diarios
108. https://novolargeriatria.com.br/blog/cuidados-paliativos-idosos-como-funciona
109. https://novolargeriatria.com.br/blog/idoso-pos-avc-quais-cuidados-sao-necessarios
110. https://novolargeriatria.com.br/blog/hospedagem-temporaria-para-idosos-como-funciona
111. https://novolargeriatria.com.br/unidades/moinhos-barao-de-santo-angelo
112. https://novolargeriatria.com.br/unidades/moinhos-luciana-de-abreu
113. https://novolargeriatria.com.br/unidades/passo-dareia

### URLs disponiveis fora do sitemap

114. https://novolargeriatria.com.br/fotos
115. https://novolargeriatria.com.br/obrigado
116. https://novolargeriatria.com.br/servicos/acompanhamento-medico
117. https://novolargeriatria.com.br/servicos/alimentacao
118. https://novolargeriatria.com.br/servicos/atividades-terapeuticas
119. https://novolargeriatria.com.br/servicos/cuidados-enfermagem
120. https://novolargeriatria.com.br/servicos/fisioterapia

### Rotas tecnicas/dinamicas que exigem regra especial

- https://novolargeriatria.com.br/studio
- https://novolargeriatria.com.br/studio/*

## Recomendacoes de adicionar, remover ou manter

### Adicionar ao sitemap apos revisao de qualidade

- `https://novolargeriatria.com.br/servicos/acompanhamento-medico`
- `https://novolargeriatria.com.br/servicos/alimentacao`
- `https://novolargeriatria.com.br/servicos/atividades-terapeuticas`
- `https://novolargeriatria.com.br/servicos/cuidados-enfermagem`
- `https://novolargeriatria.com.br/servicos/fisioterapia`

Motivo: sao paginas de servico disponiveis por rota dinamica e documentos Sanity, mas ficaram fora do sitemap porque `app/sitemap.ts` usa `SERVICE_DETAILS`, que hoje lista apenas 7 servicos locais. Antes de adicionar, resolver o slug duplicado `cuidados-enfermagem` e confirmar se essas paginas antigas nao competem com os servicos novos.

### Manter fora do sitemap

- `https://novolargeriatria.com.br/obrigado`

Motivo: pagina de conversao/pos-envio, ja esta `noindex` e bloqueada no `robots.txt`.

### Remover, redirecionar ou manter apenas como redirect

- `https://novolargeriatria.com.br/fotos`

Motivo: a rota apenas redireciona para `/sobre/fotos`. Para SEO, a URL canonica deve continuar sendo `/sobre/fotos`. Se houver backlinks antigos para `/fotos`, manter redirect 308/307 e fora do sitemap. Se nao houver uso historico, pode remover a rota.

### Bloquear/proteger

- `https://novolargeriatria.com.br/studio`
- `https://novolargeriatria.com.br/studio/*`

Motivo: Studio e ambiente administrativo/autoral. Recomendo adicionar regra explicita em `robots.txt` para `/studio/` e garantir protecao de acesso adequada no ambiente publicado.

### Avaliar consolidacao por canibalizacao

- `/ilpi-porto-alegre` e `/ilpi-em-porto-alegre`
- `/residencial-geriatrico-porto-alegre` e `/residencial-geriatrico-em-porto-alegre`
- `/porto-alegre`, `/casa-de-repouso-em-porto-alegre`, `/clinica-geriatrica-porto-alegre`, `/clinica-para-idosos-em-porto-alegre`
- Paginas de cidades com sufixo `/ilpi-em-porto-alegre`, como `/canoas/ilpi-em-porto-alegre`

Motivo: sao clusters semanticamente proximos. Podem performar bem se cada uma tiver intencao, conteudo e links internos distintos; se forem muito parecidas, podem dividir autoridade.

## Observacoes para aumentar SEO

1. Resolver governanca editorial das 72 paginas sem `primaryIntent`, `cluster`, `lastReviewedAt` e `indexable` explicito.
2. Criar uma matriz de intencao por cluster: comercial, local, condicao, comparativo, pergunta, institucional e legal.
3. Definir pagina pilar para cada termo principal e usar links internos consistentes para evitar canibalizacao.
4. Revisar todas as paginas de cidade e bairro para garantir conteudo local unico, com referencias reais de deslocamento, unidade recomendada e contexto geografico.
5. Adicionar os 5 servicos fora do sitemap somente se tiverem conteudo robusto e nao duplicarem os servicos novos.
6. Remover duplicidade de slug `cuidados-enfermagem` no Sanity.
7. Adicionar `/studio/` ao `robots.txt` e confirmar que o Studio nao esta indexavel.
8. Preencher `siteSettings.siteName`, `siteSettings.siteUrl`, imagem OG padrao, GA/GTM e dados sociais no Sanity.
9. Adicionar `googlePlaceId` nas 3 unidades para reforcar dados locais e reviews.
10. Criar JSON-LD mais especifico por pagina local, conectando unidade, endereco, telefone, coordenadas e servicos oferecidos.
11. Melhorar imagens sociais: usar OG images contextuais por cluster em vez de logo generico.
12. Revisar titles de paginas similares para diferenciar promessa, localidade e intencao.
13. Adicionar breadcrumbs visiveis e consistentes em todas as paginas de SEO programatico.
14. Medir performance de Core Web Vitals nas paginas longas e galerias, especialmente imagens de unidades.
15. Criar testes automatizados para sitemap, robots, canonical, metadata e existencia de slugs dinamicos.
16. Criar redirects 301 para qualquer URL antiga que tenha sido substituida por URL canonica.
17. Fazer auditoria de links internos para garantir que paginas mais importantes recebam mais links do header, footer, paginas pilar e blog.
18. Criar conteudos de apoio no blog para termos de familia e decisao: custo, adaptacao, sinais de alerta, checklist de admissao, comparativos e cuidados por condicao.
19. Revisar paginas legais: `politica-de-privacidade` e `termos-de-uso` podem permanecer indexadas, mas normalmente nao precisam receber prioridade alta no link building interno.
20. Monitorar Search Console por impressao sem clique, canibalizacao de queries e paginas descobertas mas nao indexadas.

## Status final

SEO esta forte em cobertura e estrutura tecnica, mas precisa de saneamento de sitemap, governanca editorial e consolidacao de clusters. A prioridade imediata e alinhar sitemap, Sanity e intencao das paginas para que a expansao de URLs aumente autoridade em vez de diluir sinais.

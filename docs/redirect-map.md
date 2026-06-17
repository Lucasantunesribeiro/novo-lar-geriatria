# Mapeamento de Redirecionamentos 301 (URLs Antigas -> URLs Novas)

Este documento descreve o mapeamento sistemático e a estratégia de redirecionamento aplicada para a transição do site antigo da **Novo Lar Geriatria** para a nova plataforma. Todos os redirecionamentos estão configurados no arquivo `public/_redirects` no formato de compatibilidade nativa com a **Netlify** e respondem com status HTTP **301 (Moved Permanently)**, garantindo a preservação da autoridade de SEO (link juice).

---

## 1. Tabela de Mapeamento

| URL Antiga (`geriatrianovolar.com.br/*`) | URL Nova Equivalente (`/path`) | Status | Observação / Raciocínio Semântico |
| :--- | :--- | :---: | :--- |
| `/` | `/` | 301 | Página inicial (Home) |
| `/blog-novo-lar` | `/blog` | 301 | Feed principal do blog |
| `/contato-clinica-geriatrica-em-porto-alegre` | `/contato` | 301 | Página de contatos e agendamento |
| `/mensagem-enviada-com-sucesso` | `/obrigado` | 301 | Landing page de sucesso do formulário |
| `/sobre-a-novo-lar-clinica-geriatrica` | `/sobre` | 301 | Quem somos / História institucional |
| `/estrutura-clinica-geriatrica-em-porto-alegre-rs` | `/sobre/estrutura` | 301 | Estrutura das clínicas e acessibilidade |
| `/depoimentos-novo-lar-geriatria-em-porto-alegre-rs` | `/depoimentos` | 301 | Depoimentos e relatos de familiares |
| `/fotos-geriatria-novo-lar-porto-alegre` | `/sobre/fotos` | 301 | Galeria de fotos das unidades |
| `/politica-privacidade` | `/politica-de-privacidade` | 301 | Política de Privacidade adaptada à LGPD |
| `/medico-e-enfermagem-para-idosos-em-porto-alegre-rs` | `/servicos/enfermagem-medico-24h` | 301 | Serviço de enfermagem e acompanhamento médico |
| `/nutricao-e-alimentacao-para-idosos-em-porto-alegre` | `/servicos/nutricao-individualizada` | 301 | Serviço de nutrição e dietas especiais |
| `/terapia-ocupacional-para-idosos-em-porto-alegre-rs` | `/servicos/terapia-ocupacional` | 301 | Serviço de terapia ocupacional e estimulação |
| `/musicoterapia-para-idosos-em-porto-alegre-rs` | `/servicos/musicoterapia-socializacao` | 301 | Serviço de musicoterapia e reabilitação cognitiva |
| `/servicos-de-lavanderia-para-idosos-em-porto-alegre-rs` | `/servicos/servicos-lavanderia` | 301 | Serviço de higienização de enxoval e rouparia |
| `/convenio-com-farmacia` | `/servicos/convenio-farmacia` | 301 | Gestão integrada de insumos e medicamentos |
| `/hospedagem-assistida-em-porto-alegre` | `/servicos/hospedagem-assistida-24h` | 301 | Mapeamento direto de hospedagem integral |
| `/geriatria-e-clinica-geriatrica-em-porto-alegre` | `/clinica-geriatrica-porto-alegre` | 301 | Rota otimizada para intenção de busca clínica |
| `/geriatria-em-porto-alegre` | `/porto-alegre` | 301 | Página hub de localização Porto Alegre |
| `/lar-de-idosos-em-porto-alegre` | `/lar-para-idosos-em-porto-alegre` | 301 | Otimização semântica do termo "lar de idosos" |
| `/lar-geriatrico-em-porto-alegre` | `/residencial-geriatrico-porto-alegre` | 301 | Equivalente institucional para residência |
| `/casa-geriatrica-em-porto-alegre` | `/residencial-geriatrico-porto-alegre` | 301 | Equivalência semântica de termo popular |
| `/casa-de-idosos-em-porto-alegre` | `/lar-para-idosos-em-porto-alegre` | 301 | Equivalência semântica de termo popular |
| `/clinica-geriatrica-em-porto-alegre` | `/clinica-geriatrica-porto-alegre` | 301 | Correção de duplicidade e mapeamento otimizado |
| `/clinica-de-repouso-em-porto-alegre` | `/casa-de-repouso-em-porto-alegre` | 301 | Otimização semântica de termo popular |
| `/centro-geriatrico-em-porto-alegre` | `/porto-alegre` | 301 | Redirecionamento ao hub regional de Porto Alegre |
| `/residencial-para-idosos-em-porto-alegre` | `/residencia-para-idosos-porto-alegre` | 301 | Equivalente institucional de residencial |
| `/assistencia-em-clinica-de-idosos` | `/clinica-para-idosos-em-porto-alegre` | 301 | Rota para serviços de clínica de idosos |
| `/escolha-uma-instituicao-geriatrica` | `/blog/quando-procurar-uma-ilpi` | 301 | Post novo equivalente sobre orientação familiar |
| `/conheca-o-estatuto-do-idoso` | `/blog` | 301 | Redirecionamento para o feed geral de blog |
| `/reinventando-a-convivencia-familiar-em-tempos-de-covid-19` | `/blog/saude-mental` | 301 | Direcionado ao post sobre saúde mental/emocional |
| `/quando-a-busca-por-um-residencial-geriatrico-significa-cuidado` | `/blog/quando-procurar-uma-ilpi` | 301 | Post novo equivalente sobre momento da transição |
| `/cinco-passos-na-busca-por-um-residencial-geriatrico` | `/blog/como-escolher-casa-de-repouso-em-porto-alegre` | 301 | Post novo sobre passos e critérios de escolha |
| `/quatro-itens-para-observar-durante-a-ambientacao-em-um-residencial-geriatrico` | `/blog/diferenca-entre-ilpi-casa-de-repouso-e-residencial-geriatrico` | 301 | Post novo sobre as tipologias de moradia geriátrica |
| `/como-entender-a-finitude-em-um-residencial-geriatrico` | `/blog/cuidados-paliativos-idosos-como-funciona` | 301 | Post temático sobre acolhimento e paliativismo |
| `/saude-e-longevidade-prevencao-em-todas-as-idades` | `/blog/cuidados-inverno` | 301 | Post temático de prevenção e monitoramento de saúde |
| `/cuidados-essenciais-na-escolha-de-uma-geriatria` | `/blog/como-escolher-casa-de-repouso-em-porto-alegre` | 301 | Post novo sobre critérios de qualidade e escolha |
| `/como-escolher-a-clinica-geriatrica-certa` | `/blog/como-escolher-casa-de-repouso-em-porto-alegre` | 301 | Post novo sobre critérios de qualidade e escolha |
| `/lar-de-idosos-pegadinhas-na-hora-da-venda` | `/blog/escolher-clinica` | 301 | Post novo sobre como avaliar de forma imparcial |
| `/encontrando-o-melhor-residencial-geriatrico-para-seus-pais` | `/blog/quando-procurar-uma-ilpi` | 301 | Post novo sobre orientação para tomada de decisão |
| `/tag/idoso/` | `/blog` | 301 | Tags legadas redirecionadas ao feed geral do blog |
| `/posts/estatuto-do-idoso/` | `/blog` | 301 | Redirecionamento de post antigo para o feed do blog |
| `/home` | `/` | 301 | Home antiga redirecionando para a raiz principal |
| `www.geriatrianovolar.com.br/home` | `https://geriatrianovolar.com.br/` | 301! | Força o redirecionamento com www para a raiz principal |

---

## 2. Padrões Técnicos Aplicados

* **Status HTTP 301**: Informa aos mecanismos de busca que a URL mudou permanentemente. Isso preserva a pontuação de ranqueamento da URL antiga no Google e a transfere inteiramente para a nova.
* **Remoção de Duplicidades**: A URL antiga `/clinica-geriatrica-em-porto-alegre` constava duas vezes no sitemap legado e foi unificada em um único redirecionamento.
* **Ajuste de Slugs**: URLs antigas que possuíam pequenas variações ortográficas ou estruturas mais longas foram mapeadas para seus equivalentes exatos no novo site.
* **Tratamento de Posts do Blog**: Posts legados sem equivalência idêntica foram direcionados a artigos da nova expansão do blog com proximidade semântica para evitar a frustração de erros 404 para o usuário final.

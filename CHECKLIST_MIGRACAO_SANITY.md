# ✅ Checklist: Migração de Dados para Sanity CMS

## Status Atual: 🟡 Pronto para Configuração

---

## 📦 Fase 1: Preparação dos Dados ✅

- [x] **Análise das páginas do site**
  - [x] Leitura de todas as páginas em `/app/(routes)/`
  - [x] Extração de conteúdos textuais
  - [x] Identificação de campos e estruturas
  - [x] Mapeamento de metadados SEO

- [x] **Criação do JSON estruturado**
  - [x] Arquivo: `/scripts/sanity-data/pages-content.json`
  - [x] 13 documentos mapeados (10 singletons + 3 units)
  - [x] Estrutura validada e organizada
  - [x] Todos os campos essenciais incluídos

- [x] **Script de migração desenvolvido**
  - [x] Arquivo: `/scripts/populate-sanity.js`
  - [x] Suporte a dry-run mode
  - [x] Logs coloridos e detalhados
  - [x] Tratamento de erros robusto
  - [x] Operações de create/update/clean

- [x] **Documentação completa**
  - [x] Arquivo: `/DADOS_PAGINAS_SANITY.md` (documentação detalhada)
  - [x] Arquivo: `/scripts/README.md` (guia de uso)
  - [x] Mapeamento de todos os campos
  - [x] Instruções passo a passo

---

## 🔧 Fase 2: Configuração do Ambiente ⏳

- [ ] **Configurar variáveis de ambiente**
  ```env
  NEXT_PUBLIC_SANITY_PROJECT_ID=seu-project-id
  NEXT_PUBLIC_SANITY_DATASET=production
  SANITY_API_TOKEN=seu-token-aqui
  ```

  **Como obter:**
  1. Acesse: https://www.sanity.io/manage
  2. Selecione o projeto "Novo Lar Geriatria"
  3. Vá em "API" → "Tokens"
  4. Crie token com permissão "Editor"
  5. Copie e cole no `.env.local`

- [ ] **Instalar dependências (se necessário)**
  ```bash
  npm install @sanity/client
  ```

- [ ] **Verificar schemas no Sanity Studio**
  - [ ] siteSettings.ts
  - [ ] homePage.ts
  - [ ] aboutPage.ts
  - [ ] aboutNovoLarPage.ts
  - [ ] servicesIndexPage.ts
  - [ ] teamPage.ts
  - [ ] structurePage.ts
  - [ ] activitiesPage.ts
  - [ ] faqPage.ts
  - [ ] contactPage.ts
  - [ ] unit.ts

---

## 🧪 Fase 3: Testes ⏳

- [ ] **Teste 1: Dry-Run Inicial**
  ```bash
  node scripts/populate-sanity.js --dry-run
  ```
  - [ ] Script executa sem erros
  - [ ] Todos os 13 documentos são listados
  - [ ] Log indica "Criaria" para novos documentos

- [ ] **Teste 2: Verificar Conexão**
  - [ ] Token válido
  - [ ] Project ID correto
  - [ ] Dataset acessível
  - [ ] Permissões adequadas

- [ ] **Teste 3: Schemas Compatíveis**
  - [ ] Todos os campos existem nos schemas
  - [ ] Tipos de dados compatíveis
  - [ ] Campos obrigatórios presentes

---

## 🚀 Fase 4: Execução da Migração ⏳

- [ ] **Backup (Recomendado)**
  ```bash
  npm run sanity -- dataset export production backup-$(date +%Y%m%d).tar.gz
  ```

- [ ] **Executar Migração Real**
  ```bash
  node scripts/populate-sanity.js
  ```

  **Verificar:**
  - [ ] Todos os documentos criados
  - [ ] Zero erros no relatório
  - [ ] Stats corretos (13 criados)

- [ ] **Verificar no Sanity Studio**
  - [ ] Abrir Studio: `npm run dev` → http://localhost:3000/studio
  - [ ] Verificar cada singleton
  - [ ] Confirmar dados das 3 units
  - [ ] Testar edição de documentos

---

## 🖼️ Fase 5: Migração de Imagens ⏳

> **Nota**: As imagens atualmente estão em `/public/fotos-sobre/`

- [ ] **Upload Manual de Imagens**
  - [ ] Acessar Sanity Studio
  - [ ] Ir em "Media" → "Upload"
  - [ ] Upload de todas as imagens de `/public/fotos-sobre/`
  - [ ] Organizar em pastas por unidade

- [ ] **Atualizar Referências nos Documentos**
  - [ ] Home Page hero images
  - [ ] About Page gallery
  - [ ] Team Page photos
  - [ ] Structure Page gallery
  - [ ] Activities Page photos
  - [ ] Units featured images

- [ ] **Ou: Criar Script de Upload** (Avançado)
  ```bash
  node scripts/upload-images.js
  ```

---

## 🔗 Fase 6: Integração com Frontend ⏳

- [ ] **Criar Queries Sanity**
  - [ ] Query para home page
  - [ ] Query para about pages
  - [ ] Query para services
  - [ ] Query para team
  - [ ] Query para structure
  - [ ] Query para activities
  - [ ] Query para FAQs
  - [ ] Query para contact
  - [ ] Query para units

- [ ] **Atualizar Páginas**
  - [ ] `/app/page.tsx` → usar dados do Sanity
  - [ ] `/app/(routes)/sobre/page.tsx`
  - [ ] `/app/(routes)/sobre/a-novo-lar/page.tsx`
  - [ ] `/app/(routes)/servicos/page.tsx`
  - [ ] `/app/(routes)/sobre/equipe/page.tsx`
  - [ ] `/app/(routes)/sobre/estrutura/page.tsx`
  - [ ] `/app/(routes)/sobre/atividades/page.tsx`
  - [ ] `/app/(routes)/perguntas-frequentes/page.tsx`
  - [ ] `/app/(routes)/contato/page.tsx`

- [ ] **Remover Dados Hardcoded**
  - [ ] Constantes em arquivos
  - [ ] Mock data em `/lib/sanity/mock-data.ts`
  - [ ] Arrays inline nos componentes

---

## ✅ Fase 7: Testes Finais ⏳

- [ ] **Testes de Funcionamento**
  - [ ] Home page carrega corretamente
  - [ ] Todas as páginas acessíveis
  - [ ] Dados aparecem corretamente
  - [ ] Imagens carregam
  - [ ] Links funcionando

- [ ] **Testes de Performance**
  - [ ] Lighthouse score mantido/melhorado
  - [ ] Tempo de carregamento < 2s
  - [ ] Core Web Vitals OK

- [ ] **Testes de SEO**
  - [ ] Meta tags preenchidas
  - [ ] Open Graph tags corretas
  - [ ] Schema.org JSON-LD OK
  - [ ] Sitemap atualizado

---

## 🌐 Fase 8: Deploy ⏳

- [ ] **Ambiente de Staging**
  - [ ] Deploy em staging
  - [ ] Testes completos
  - [ ] Validação pelo cliente

- [ ] **Ambiente de Produção**
  - [ ] Deploy em produção
  - [ ] Monitorar erros
  - [ ] Verificar analytics
  - [ ] Backup de segurança

---

## 📊 Resumo do Progresso

| Fase | Status | Progresso |
|------|--------|-----------|
| 1. Preparação dos Dados | ✅ Completo | 100% |
| 2. Configuração do Ambiente | ⏳ Pendente | 0% |
| 3. Testes | ⏳ Pendente | 0% |
| 4. Execução da Migração | ⏳ Pendente | 0% |
| 5. Migração de Imagens | ⏳ Pendente | 0% |
| 6. Integração com Frontend | ⏳ Pendente | 0% |
| 7. Testes Finais | ⏳ Pendente | 0% |
| 8. Deploy | ⏳ Pendente | 0% |

**Progresso Total**: 12.5% (1/8 fases completas)

---

## 🎯 Próximo Passo Recomendado

### Configurar Token de API do Sanity

1. Acesse: https://www.sanity.io/manage
2. Selecione o projeto "Novo Lar Geriatria"
3. Vá em "API" → "Tokens"
4. Clique em "Add API Token"
5. Configure:
   - **Label**: "Migration Script"
   - **Permissions**: "Editor"
   - **Expiry**: Sem expiração (ou defina data)
6. Copie o token gerado
7. Adicione ao `.env.local`:
   ```env
   SANITY_API_TOKEN=seu-token-aqui
   ```

### Executar Primeiro Teste

```bash
node scripts/populate-sanity.js --dry-run
```

Se tudo estiver OK, você verá:
```
✅ Migração concluída com sucesso!
📊 13 documentos processados
```

---

## 📚 Recursos Úteis

### Arquivos Criados
- `/scripts/sanity-data/pages-content.json` - Dados estruturados
- `/scripts/populate-sanity.js` - Script de migração
- `/DADOS_PAGINAS_SANITY.md` - Documentação completa
- `/scripts/README.md` - Guia de uso do script
- `/CHECKLIST_MIGRACAO_SANITY.md` - Este checklist

### Comandos Principais
```bash
# Testar sem modificar
node scripts/populate-sanity.js --dry-run

# Executar migração
node scripts/populate-sanity.js

# Limpar dados (CUIDADO!)
node scripts/populate-sanity.js --clean --dry-run
node scripts/populate-sanity.js --clean
```

### Links Importantes
- [Sanity Manage](https://www.sanity.io/manage)
- [Sanity Docs](https://www.sanity.io/docs)
- [Sanity Client API](https://www.sanity.io/docs/js-client)

---

**Última Atualização**: 2025-01-11
**Status**: 🟡 Pronto para configuração e testes
**Responsável**: Lucas Antunes Ferreira + Claude Code

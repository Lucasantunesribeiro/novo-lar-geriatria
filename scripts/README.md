# Scripts de Migração Sanity CMS

## 📁 Estrutura

```
/scripts/
  ├── populate-sanity.js           # Script principal de migração
  ├── README.md                    # Esta documentação
  └── /sanity-data/
      └── pages-content.json       # Dados estruturados das páginas
```

## 🚀 Quick Start

### 1. Configuração

**Pré-requisitos:**
- Node.js 18+
- Acesso ao projeto Sanity
- Token de API com permissões de escrita

**Instalar dependências:**
```bash
npm install @sanity/client
```

**Configurar variáveis de ambiente:**

Adicione ao `.env.local`:
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your-write-token
```

> **Como obter o token:**
> 1. Acesse https://www.sanity.io/manage
> 2. Selecione seu projeto
> 3. Vá em "API" → "Tokens"
> 4. Crie um novo token com permissão de "Editor"

### 2. Teste em Dry-Run

```bash
node scripts/populate-sanity.js --dry-run
```

Este comando irá:
- ✅ Validar conexão com Sanity
- ✅ Carregar dados do JSON
- ✅ Simular criação/atualização de documentos
- ❌ NÃO modificar dados reais

**Output esperado:**
```
============================================================
📦 POPULANDO SANITY CMS
============================================================

⚠ MODO DRY-RUN: Nenhuma alteração será feita

============================================================
1. Site Settings
============================================================

ℹ [DRY-RUN] Criaria: siteSettings (siteSettings)

...

============================================================
📊 RESUMO DA EXECUÇÃO
============================================================

┌────────────────────┬────────┐
│ Criados            │ 10     │
│ Atualizados        │ 0      │
│ Ignorados          │ 0      │
│ Erros              │ 0      │
│ Total Processados  │ 10     │
└────────────────────┴────────┘

⚠ MODO DRY-RUN: Nenhuma alteração foi feita
ℹ Execute sem --dry-run para aplicar as mudanças
```

### 3. Executar Migração Real

**⚠️ ATENÇÃO: Esta operação irá modificar dados no Sanity!**

```bash
node scripts/populate-sanity.js
```

Este comando irá:
- ✅ Conectar ao Sanity
- ✅ Carregar dados do JSON
- ✅ Criar novos documentos
- ✅ Atualizar documentos existentes
- ✅ Exibir relatório final

### 4. Limpar Dados (Opcional)

**⚠️ EXTREMO CUIDADO: Esta operação DELETE dados permanentemente!**

```bash
# Simular limpeza (recomendado primeiro)
node scripts/populate-sanity.js --clean --dry-run

# Limpar dados reais
node scripts/populate-sanity.js --clean
```

## 📊 Dados Migrados

### Documentos Singleton (1 documento cada)

| Schema | _id | Descrição |
|--------|-----|-----------|
| `siteSettings` | siteSettings | Configurações globais do site |
| `homePage` | homePage | Página inicial |
| `aboutPage` | aboutPage | Página "Sobre" |
| `aboutNovoLarPage` | aboutNovoLarPage | Página "A Novo Lar" |
| `servicesIndexPage` | servicesIndexPage | Índice de serviços |
| `teamPage` | teamPage | Página da equipe |
| `structurePage` | structurePage | Página de estrutura |
| `activitiesPage` | activitiesPage | Página de atividades |
| `faqPage` | faqPage | Página de FAQ |
| `contactPage` | contactPage | Página de contato |

### Documentos Múltiplos

| Schema | Quantidade | Descrição |
|--------|------------|-----------|
| `unit` | 3 | Unidades físicas |

**Total**: 13 documentos

## 🔍 Estrutura do JSON

O arquivo `sanity-data/pages-content.json` está estruturado assim:

```json
{
  "siteSettings": {
    "_type": "siteSettings",
    "_id": "siteSettings",
    "siteName": "Novo Lar Geriatria",
    // ...
  },
  "homePage": {
    "_type": "homePage",
    "_id": "homePage",
    "seo": { /* ... */ },
    "hero": { /* ... */ },
    // ...
  },
  "units": [
    {
      "_type": "unit",
      "slug": "moinhos-luciana-de-abreu",
      // ...
    }
  ]
}
```

### Validação de Dados

O script valida:
- ✅ Presença de `_id` e `_type`
- ✅ Formato correto dos objetos
- ✅ Conexão com Sanity
- ✅ Permissões de escrita

## 🛠️ Troubleshooting

### Erro: "SANITY_API_TOKEN não configurado"

**Solução:**
1. Crie um token em https://www.sanity.io/manage
2. Adicione ao `.env.local`
3. Reinicie o terminal

### Erro: "Project not found"

**Solução:**
1. Verifique o `NEXT_PUBLIC_SANITY_PROJECT_ID`
2. Confirme que está no projeto correto
3. Verifique conectividade com internet

### Erro: "Insufficient permissions"

**Solução:**
1. Token precisa ter permissão de "Editor" ou superior
2. Recrie o token com permissões corretas
3. Atualize o `.env.local`

### Documentos não aparecem no Studio

**Possíveis causas:**
1. **Schemas não configurados**: Verifique se todos os schemas existem no Sanity Studio
2. **Dataset errado**: Confirme que está no dataset correto
3. **Cache do Studio**: Recarregue o Studio (Ctrl+Shift+R)

**Soluções:**
```bash
# Verificar dataset
npm run sanity -- dataset list

# Reconstruir Studio
npm run sanity -- build
```

## 📝 Logs e Debugging

O script fornece logs coloridos e detalhados:

- 🟢 **Verde**: Operação bem-sucedida
- 🟡 **Amarelo**: Aviso (dry-run, etc)
- 🔴 **Vermelho**: Erro
- 🔵 **Azul**: Informação
- ⚪ **Ciano**: Seções

**Exemplo de log de erro:**
```
✗ Erro ao processar homePage (homePage): Missing required field 'title'
```

## 🔄 Workflow Recomendado

### Primeira Execução

1. **Backup** (se aplicável):
   ```bash
   # Exportar dados atuais do Sanity
   npm run sanity -- dataset export production backup.tar.gz
   ```

2. **Dry-Run**:
   ```bash
   node scripts/populate-sanity.js --dry-run
   ```

3. **Revisar Output**: Verifique se todos os documentos serão criados corretamente

4. **Executar Real**:
   ```bash
   node scripts/populate-sanity.js
   ```

5. **Verificar no Studio**: Abra o Sanity Studio e confirme os dados

### Atualizações Futuras

1. **Editar JSON**: Modifique `sanity-data/pages-content.json`

2. **Dry-Run**: Teste as mudanças
   ```bash
   node scripts/populate-sanity.js --dry-run
   ```

3. **Aplicar**: Execute a migração
   ```bash
   node scripts/populate-sanity.js
   ```

## 🎯 Próximos Passos

Após executar este script, você precisará:

### 1. Upload de Imagens

As imagens estão em `/public/fotos-sobre/` e precisam ser:
- Uploaded para Sanity Assets
- Referenciadas nos documentos

**Script sugerido** (criar separadamente):
```bash
node scripts/upload-images.js
```

### 2. Verificar Schemas

Certifique-se de que todos os schemas existem no Sanity Studio:

```bash
# Schemas necessários:
- siteSettings.ts
- homePage.ts
- aboutPage.ts
- aboutNovoLarPage.ts
- servicesIndexPage.ts
- teamPage.ts
- structurePage.ts
- activitiesPage.ts
- faqPage.ts
- contactPage.ts
- unit.ts
```

### 3. Testar Queries

Teste as queries no frontend:

```typescript
// Exemplo: Buscar home page
const homePage = await client.fetch(`*[_type == "homePage"][0]`)
```

### 4. Atualizar Frontend

Remova dados hardcoded e use dados do Sanity:

```typescript
// Antes (hardcoded)
const title = "Cuidado humanizado..."

// Depois (Sanity)
const { hero } = await getHomePage()
const title = hero.title
```

## 📚 Documentação Adicional

- [Documentação Sanity Client](https://www.sanity.io/docs/js-client)
- [Guia de Migração de Dados](https://www.sanity.io/docs/migrating-data)
- [DADOS_PAGINAS_SANITY.md](../DADOS_PAGINAS_SANITY.md) - Mapeamento completo dos dados

## 🤝 Contribuindo

Para adicionar novos dados ao JSON:

1. Siga a estrutura existente
2. Inclua `_type` e `_id` em cada documento
3. Valide o JSON antes de commitar
4. Execute dry-run para testar
5. Documente mudanças no commit

---

**Criado em**: 2025-01-11
**Autor**: Claude Code + Lucas Antunes Ferreira
**Versão**: 1.0.0

# Guia de Migração para Sanity CMS

## ✅ O que já foi feito

### 1. Schemas Criados

Todos os schemas necessários foram criados em `/sanity/schemas/`:

- ✅ `faqPage.ts` - Página de Perguntas Frequentes
- ✅ `contactPage.ts` - Página de Contato
- ✅ `testimonialsPage.ts` - Página de Depoimentos
- ✅ `thankYouPage.ts` - Página de Obrigado
- ✅ `privacyPolicy.ts` - Política de Privacidade
- ✅ `termsOfService.ts` - Termos de Uso
- ✅ `activitiesPage.ts` - Página de Atividades
- ✅ `teamPage.ts` - Página da Equipe
- ✅ `structurePage.ts` - Página de Estrutura

Todos registrados em `/sanity/schemas/index.ts`

### 2. Queries Criadas

Todas as queries necessárias foram criadas em `/lib/sanity/queries.ts`:

- `getFaqPage()`
- `getContactPage()`
- `getTestimonialsPage()`
- `getThankYouPage()`
- `getPrivacyPolicy()`
- `getTermsOfService()`
- `getActivitiesPage()`
- `getTeamPage()`
- `getStructurePage()`

### 3. Página Migrada (Exemplo)

✅ `/app/(routes)/perguntas-frequentes/page.tsx` - **COMPLETA**

Serve como modelo para migrar as demais páginas.

## 📋 Próximos Passos

### 1. Popular o Sanity Studio

Antes de migrar as outras páginas, você precisa criar os documentos no Sanity Studio:

1. Acesse o Sanity Studio:
   ```bash
   npm run sanity:dev
   ```

2. Acesse `http://localhost:3333` (ou a porta configurada)

3. **Criar documentos singleton** (um de cada):
   - Página · Perguntas Frequentes
   - Página · Contato
   - Página · Depoimentos
   - Página · Obrigado
   - Política de Privacidade
   - Termos de Uso
   - Página · Atividades
   - Página · Equipe
   - Página · Estrutura

4. **Copiar conteúdo** dos arquivos atuais para os campos do Sanity
   - Todos os textos estão nos arquivos page.tsx atuais
   - Copie o conteúdo exato mantendo a formatação

### 2. Migrar Páginas Restantes

Use a página FAQ como referência. O padrão é:

```tsx
import { getPageData } from '@/lib/sanity/queries'

// 1. Criar FALLBACK_DATA com conteúdo atual
const FALLBACK_DATA = {
  // ... copie os dados hardcoded atuais
}

// 2. Criar generateMetadata() async
export async function generateMetadata(): Promise<Metadata> {
  const pageData = await getPageData()
  const data = pageData || FALLBACK_DATA

  return {
    title: data.seo?.title || 'Título Padrão',
    // ... resto do SEO
  }
}

// 3. Transformar component em async e buscar dados
export default async function PageName() {
  const pageData = await getPageData()
  const data = pageData || FALLBACK_DATA

  // Use 'data' em vez de constantes hardcoded
  return (
    <div>
      <h1>{data.hero.title}</h1>
      {/* ... */}
    </div>
  )
}
```

### Ordem Sugerida de Migração:

1. ✅ `/perguntas-frequentes` - **CONCLUÍDA**
2. `/contato` - Use `getContactPage()`
3. `/depoimentos` - Use `getTestimonialsPage()`
4. `/obrigado` - Use `getThankYouPage()`
5. `/politica-de-privacidade` - Use `getPrivacyPolicy()`
6. `/termos-de-uso` - Use `getTermsOfService()`
7. `/sobre/atividades` - Use `getActivitiesPage()`
8. `/sobre/equipe` - Use `getTeamPage()`
9. `/sobre/estrutura` - Use `getStructurePage()`

### 3. Checklist por Página

Para cada página migrada, verificar:

- [ ] Import da query correta do Sanity
- [ ] FALLBACK_DATA criado com conteúdo atual
- [ ] `generateMetadata()` async implementada
- [ ] Component principal transformado em async
- [ ] Todos os textos hardcoded substituídos por `data.*`
- [ ] Fallbacks (`|| FALLBACK_DATA`) em todos os acessos
- [ ] Testar página sem Sanity (deve usar fallback)
- [ ] Popular dados no Sanity Studio
- [ ] Testar página com Sanity populado

## 🔧 Troubleshooting

### Página em branco
- Verifique se o Sanity está configurado em `.env`
- Verifique se o documento foi criado no Studio
- Verifique console do navegador para erros

### Dados não aparecem
- Verifique se o documento está criado no Studio
- Verifique se a query está retornando dados (console.log)
- Verifique se os nomes dos campos batem com o schema

### Erro de tipo TypeScript
- Adicione tipos apropriados para os dados
- Use optional chaining (`?.`) para campos opcionais
- Use fallbacks com `||` para garantir valores

## 📝 Notas Importantes

1. **Sempre mantenha FALLBACK_DATA** - Garante que o site funcione mesmo sem Sanity
2. **Teste ambos os cenários** - Com e sem dados no Sanity
3. **Copie textos exatos** - Não altere conteúdo ao migrar, apenas mova para CMS
4. **SEO preservado** - Todos os schemas têm campos SEO

## 🎯 Resultado Final

Após concluir todas as migrações:

- ✅ Cliente pode editar 100% dos textos via Sanity Studio
- ✅ Site funciona com fallback se Sanity falhar
- ✅ SEO completamente editável
- ✅ Zero alteração visual no site
- ✅ Manutenção de conteúdo não precisa mais de desenvolvedor

## 📚 Referências

- Schema FAQ: `/sanity/schemas/faqPage.ts`
- Query FAQ: `/lib/sanity/queries.ts` (linha ~511)
- Página FAQ: `/app/(routes)/perguntas-frequentes/page.tsx`
- Documentação Sanity: https://www.sanity.io/docs

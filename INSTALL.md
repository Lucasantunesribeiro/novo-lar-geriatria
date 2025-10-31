# Guia de Instalação - Novo Lar Geriatria

## ⚠️ Problemas Comuns e Soluções

### 1. Erro ERESOLVE (Conflito de Dependências)

**Erro:**
```
npm error ERESOLVE unable to resolve dependency tree
```

**Solução:**
```bash
npm install --legacy-peer-deps
```

### 2. Erro de Permissões no WSL

**Sintoma:** Operações travando ou erros EACCES

**Solução:** Execute no PowerShell do Windows:
```powershell
cd G:\.programacao\novo-lar-geriatria
npm install
```

### 3. Tailwind CSS 4 Experimental

Se houver erros com Tailwind, use `--legacy-peer-deps`:
```bash
npm install --legacy-peer-deps
```

---

## ✅ Passo a Passo Completo

### 1. Instalar Dependências

```bash
cd G:\.programacao\novo-lar-geriatria
npm install --legacy-peer-deps
```

**Tempo estimado:** 2-3 minutos

### 2. Inicializar Sanity

```bash
npx sanity init
```

Respostas:
- **Login?** Sim (use conta Google/GitHub)
- **Criar novo projeto?** Sim
- **Nome:** Novo Lar Geriatria
- **Dataset:** production
- **Schema?** Não (já temos os schemas)

**Anote o Project ID!**

### 3. Criar Token Sanity

1. Acesse: https://www.sanity.io/manage
2. Selecione o projeto "Novo Lar Geriatria"
3. **API → Tokens → Add API Token**
4. Nome: `Next.js Production`
5. Permissions: **Editor**
6. **Copie o token** (não será mostrado novamente!)

### 4. Configurar .env.local

```bash
cp .env.local.example .env.local
```

Edite `.env.local`:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=abc123xyz
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=skAbCdEfGhIjKlMnOpQrStUvWxYz
```

### 5. Deploy Sanity Studio

```bash
cd sanity
npx sanity deploy
```

Escolha um nome único:
- ✅ `novo-lar-geriatria` 
- ✅ `novolar-studio`
- ❌ `studio` (já usado)

URL gerada: `https://seu-nome.sanity.studio`

### 6. Popular Dados no Studio

Acesse o Studio e crie:

**Site Settings (obrigatório - SINGLETON):**
- Telefone global: (51) 3346.7620
- WhatsApp global: 555133467620
- Email: contato@novolargeriatria.com.br
- Facebook, Instagram (opcional)

**1 Unidade (exemplo):**
- Nome: Unidade Moinhos de Vento - Luciana de Abreu
- Slug: moinhos-luciana-de-abreu (auto-gerado)
- Telefone: (51) 3346.7620
- WhatsApp: 555133467620
- Endereço: Rua Luciana de Abreu, 151 - Moinhos de Vento, Porto Alegre
- Coordenadas: 
  - Lat: -22.9519
  - Lng: -43.1825
- Fotos: Upload 2-3 fotos
- Descrição: "Nossa unidade em Botafogo oferece ambiente acolhedor..."
- Horário: Segunda a Sexta: 8h às 18h | Sábado: 8h às 12h

**2-3 Serviços:**
- Hospedagem Assistida / Heart / featured: true
- Fisioterapia / Activity
- Acompanhamento Médico / Stethoscope

**1-2 Depoimentos:**
- Nome: Maria Silva
- Relação: Filha
- Unidade: Botafogo (referência)
- Avaliação: 5
- Texto: "Excelente atendimento, equipe muito atenciosa..."

### 7. Testar Localmente

```bash
npm run dev
```

**Abra:** http://localhost:3000

**Teste:**
- Página inicial deve carregar
- `/unidades/moinhos-luciana-de-abreu` deve mostrar dados da unidade

---

## 🔍 Verificação de Sucesso

### Checklist

- [ ] `npm install` concluído sem erros críticos
- [ ] `.env.local` criado com Project ID e Token
- [ ] Sanity Studio acessível em `https://seu-nome.sanity.studio`
- [ ] 1 Site Settings criado no Studio
- [ ] 1 Unidade criada com fotos
- [ ] `npm run dev` executa sem erros
- [ ] http://localhost:3000 carrega

---

## 🆘 Troubleshooting

### Erro: "Project ID is required"

**Causa:** `.env.local` não configurado

**Solução:**
```bash
# Verifique se existe
cat .env.local

# Se não existir
cp .env.local.example .env.local
# Edite e adicione as credenciais
```

### Erro: "Failed to fetch from Sanity"

**Causa:** Token inválido ou sem permissões

**Solução:**
1. Gere novo token com permissões **Editor**
2. Atualize `SANITY_API_TOKEN` no `.env.local`
3. Reinicie `npm run dev`

### Página /unidades/botafogo retorna 404

**Causa:** Dados não populados ou slug incorreto

**Solução:**
1. Acesse Sanity Studio
2. Verifique se a unidade existe
3. Confirme slug: `botafogo` (exatamente)
4. Publique o documento (botão Publish)

### Imagens não carregam

**Causa:** Configuração de domínio do Next.js

**Solução:** Adicione em `next.config.ts`:

```typescript
const nextConfig = {
  images: {
    domains: ['cdn.sanity.io'],
  },
}
```

---

## 📞 Suporte

**Erro não listado aqui?**

Contate: lucas.afvr@gmail.com  
WhatsApp: (21) 99680-5944

---

## ✨ Próximos Passos

Após instalação bem-sucedida:

1. Execute `npm run dev`
2. Acesse http://localhost:3000/unidades/moinhos-luciana-de-abreu
3. Continue desenvolvimento (MARCO 2)

**Boa sorte!** 🚀

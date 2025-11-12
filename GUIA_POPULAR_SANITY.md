# Guia para Popular Dados no Sanity Studio

## 🎯 Objetivo
Popular o Sanity CMS com os dados atuais do site para completar a migração.

---

## 📋 Pré-requisitos

1. Sanity Studio rodando:
```bash
npm run dev
```

2. Acessar: `http://localhost:3000/studio`

3. Login autenticado no Sanity

---

## 🔧 Opções de População

### Opção 1: Popular Manualmente (Recomendado para Primeira Vez)
### Opção 2: Script Automático (Avançado)

---

## 📝 OPÇÃO 1: POPULAÇÃO MANUAL

### 1. Configurações do Site (siteSettings)

**Caminho:** Studio → Configurações do Site

#### Dados Básicos:
```
Site Name: Novo Lar Geriatria
Site URL: https://novolargeriatria.com.br
Default Meta Description: Casa de repouso em Porto Alegre com atendimento humanizado 24h. Equipe multidisciplinar, estrutura completa e ambiente acolhedor.
```

#### Contact Info:
```
Central Phone Display: (51) 3346.7620
Central Phone Digits: 5133467620
WhatsApp Digits: 555133467620
Email: contato@novolargeriatria.com.br
Visitation: Visitas diárias das 9h às 19h com agendamento prévio
City: Porto Alegre - RS
```

#### Social Links:
```json
{
  "facebook": "https://www.facebook.com/novolarhospedagemassistida/",
  "instagram": "https://www.instagram.com/novolarhospedagemassistida/",
  "linkedin": "",
  "youtube": ""
}
```

#### Analytics:
```
Google Analytics ID: [deixar vazio ou adicionar se houver]
Google Tag Manager ID: [deixar vazio ou adicionar se houver]
Facebook Pixel ID: [deixar vazio ou adicionar se houver]
```

---

### 2. Configuração do Header (headerConfig)

**Caminho:** Studio → Configuração do Header

#### Logo:
- Upload: `/public/Novo-Lar-Logo-7.png`

#### Top Bar:
```
Show Top Bar: ✅ true
Top Bar Text: Residencial Geriátrico em Porto Alegre - Novo Lar
Top Bar Business Hours: Atendimento Comercial 9h-19h · Equipe 24h
```

#### Top Bar Links:
```javascript
[
  { label: "Tour e contato", href: "/sobre" },
  { label: "Fotos", href: "/fotos" },
  { label: "Notícias", href: "/blog" },
  { label: "Fale Conosco", href: "/contato" }
]
```

#### Main Navigation:
**Item 1: Serviços Gerais (Dropdown)**
```
Type: dropdown
Label: Serviços Gerais
Description: Cuidados essenciais e infraestrutura completa

Items:
- Hospedagem Assistida 24h
  Summary: Residência com suporte integral
  Link: /servicos/hospedagem-assistida-24h

- Enfermagem e Médico 24h
  Summary: Equipe de saúde presente sempre
  Link: /servicos/enfermagem-medico-24h
```

**Item 2: Serviços Especializados (Dropdown)**
```
Type: dropdown
Label: Serviços Especializados
Description: Terapias e atendimentos personalizados

Items:
- Nutrição Individualizada
  Summary: Cardápio adaptado às necessidades
  Link: /servicos/nutricao-individualizada

- Fisioterapia e Terapia Ocupacional
  Summary: Reabilitação e atividades terapêuticas
  Link: /servicos/fisioterapia-terapia-ocupacional
```

**Item 3: Atividades e Lazer (Dropdown)**
```
Type: dropdown
Label: Atividades e Lazer
Description: Programação recreativa diária

Items:
- Musicoterapia
  Summary: Terapia através da música
  Link: /servicos/musicoterapia

- Lavanderia
  Summary: Serviço de higienização de roupas
  Link: /servicos/lavanderia
```

**Item 4: Fotos (Link Direto)**
```
Type: link
Label: Fotos
Href: /fotos
```

#### Contact Buttons:
```
Show Phone Button: ✅ true
Phone Button Label: Ligue agora

Show WhatsApp Button: ✅ true
WhatsApp Button Label: Fale conosco
WhatsApp Default Message: Olá! Gostaria de mais informações sobre a Novo Lar Geriatria.
```

#### Units Dropdown:
```
Show Units Dropdown: ✅ true
Units Dropdown Label: Unidades
```

---

### 3. Configuração do Footer (footerConfig)

**Caminho:** Studio → Configuração do Footer

#### Logo:
- Upload: `/public/Novo-Lar-Logo-7.png`

#### Columns (Colunas):

**Coluna 1: Atendimento (Contact)**
```
Type: contact
Title: Atendimento
Show Units: ✅ true
Show Email: ✅ true
Show Phone: ✅ true
```

**Coluna 2: Serviços (Links)**
```
Type: links
Title: Serviços

Links:
- Hospedagem Assistida → /servicos/hospedagem-assistida-24h
- Enfermagem 24h → /servicos/enfermagem-medico-24h
- Nutrição → /servicos/nutricao-individualizada
- Fisioterapia → /servicos/fisioterapia-terapia-ocupacional
```

**Coluna 3: Sobre Nós (Links)**
```
Type: links
Title: Sobre Nós

Links:
- A Novo Lar → /sobre/a-novo-lar
- Nossa Equipe → /sobre/equipe
- Estrutura → /sobre/estrutura
- Atividades → /sobre/atividades
- Localização → /sobre/localizacao
```

**Coluna 4: Links Úteis (Links)**
```
Type: links
Title: Links Úteis

Links:
- Blog → /blog
- Depoimentos → /depoimentos
- FAQ → /perguntas-frequentes
- Contato → /contato
```

**Coluna 5: Redes Sociais (Social)**
```
Type: social
Title: Siga-nos

Social Platforms:
- facebook
- instagram
```

#### Bottom Section:
```
Copyright Text: © 2024 Novo Lar Geriatria. Todos os direitos reservados.

Bottom Links:
- Política de Privacidade → /politica-de-privacidade
- Termos de Uso → /termos-de-uso

Developer Credit Name: Lucas Antunes Ferreira
Developer Credit URL: https://lucasantunesferreira.com
```

---

### 4. Unidades (Units)

**Caminho:** Studio → Unidades (já deve existir)

Verificar se existem as 3 unidades:

**Unidade 1: Moinhos de Vento - Luciana de Abreu**
```
Slug: moinhos-luciana-de-abreu
Name: Moinhos de Vento · Rua Luciana de Abreu, 151
Title: Moinhos de Vento - Luciana de Abreu
Address: Rua Luciana de Abreu, 151 - Moinhos de Vento, Porto Alegre - RS
Neighborhood: Moinhos de Vento
Phone Display: (51) 3346.7620
Phone Digits: 5133467620
WhatsApp: 555133467620
Group: moinhos
```

**Unidade 2: Moinhos de Vento - Barão de Santo Ângelo**
```
Slug: moinhos-barao-de-santo-angelo
Name: Moinhos de Vento · Rua Barão de Santo Ângelo, 406
Title: Moinhos de Vento - Barão de Santo Ângelo
Address: Rua Barão de Santo Ângelo, 406 - Moinhos de Vento, Porto Alegre - RS
Neighborhood: Moinhos de Vento
Phone Display: (51) 3346.7620
Phone Digits: 5133467620
WhatsApp: 555133467620
Group: moinhos
```

**Unidade 3: Passo d'Areia**
```
Slug: passo-dareia
Name: Passo d'Areia · Rua Brigadeiro Oliveira Neri, 175
Title: Passo d'Areia
Address: Rua Brigadeiro Oliveira Neri, 175 - Passo d'Areia, Porto Alegre - RS
Neighborhood: Passo d'Areia
Phone Display: (51) 3376.9462
Phone Digits: 5133769462
WhatsApp: 555133769462
Group: passo-dareia
```

---

## ✅ Checklist de Validação

Após popular os dados, verificar:

### No Sanity Studio:
- [ ] siteSettings existe e está preenchido
- [ ] headerConfig existe e está preenchido
- [ ] footerConfig existe e está preenchido
- [ ] 3 unidades existem e estão corretas
- [ ] Todos os serviços existem
- [ ] Logos foram uploadadas

### No Site (localhost:3000):
- [ ] Header carrega sem erros
- [ ] Top bar aparece com texto correto
- [ ] Links do top bar funcionam
- [ ] Dropdown de unidades funciona
- [ ] Dropdown de serviços funciona
- [ ] Botões de contato funcionam
- [ ] Footer carrega sem erros
- [ ] Colunas do footer aparecem corretas
- [ ] Links do footer funcionam
- [ ] Redes sociais aparecem

### Console/Terminal:
- [ ] Nenhum erro no console do browser
- [ ] Nenhum erro no terminal do Next.js
- [ ] Build passa sem erros: `npm run build`

---

## 🐛 Troubleshooting

### Problema: Header/Footer não aparecem
**Solução:** Verificar se siteSettings está publicado no Sanity Studio

### Problema: Dados não atualizam
**Solução:**
1. Forçar revalidação: restart do servidor `npm run dev`
2. Limpar cache do Sanity: `rm -rf .next && npm run dev`

### Problema: Imagens não carregam
**Solução:** Verificar se as imagens foram uploadadas no Sanity (não apenas referenciadas)

### Problema: Dropdowns não funcionam
**Solução:** Verificar se os itens dos dropdowns estão vinculados aos documentos de serviços corretos

---

## 📚 Próximos Passos

Após popular os dados:

1. ✅ Testar todas as páginas do site
2. ✅ Verificar responsividade (mobile, tablet, desktop)
3. ✅ Validar SEO e acessibilidade
4. ✅ Fazer deploy para produção
5. ✅ Atualizar documentação

---

## 🎉 Conclusão

Após seguir este guia, seu site estará 100% editável via Sanity CMS mantendo o design original!

**Tempo estimado:** 30-45 minutos

**Dificuldade:** Intermediária

**Suporte:** Consultar `/docs/SANITY_QUERIES_GUIDE.md` para mais detalhes técnicos

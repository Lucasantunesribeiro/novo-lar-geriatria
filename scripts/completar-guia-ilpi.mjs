/**
 * Completa o guia de ILPI com o que o cliente pediu no PDF (paginas 7 e 8).
 *
 *   node scripts/completar-guia-ilpi.mjs --dry
 *   node scripts/completar-guia-ilpi.mjs
 *
 * O pedido, palavra por palavra:
 *
 *  - "Importante identificar o que pode ocorrer (causas ao paciente) se a ILPI
 *    nao possuir estas caracteristicas, pois o titulo e GUIA COMPLETO"
 *  - "Identificar mais coisas sobre as obrigacoes como: numero adequado de
 *    tecnicos/cuidadores; quantidade maxima de 4 pessoas por quarto; apoio
 *    emergencial, servico particular de emergencia (nao consta na RDC, mas
 *    separadamente ter esta observacao e motivo); possuir corrimao; elevador;
 *    rampa de acesso; cadeiras de rodas; andador"
 *  - "Acrescentar em diferenciais:" seguido de seis paragrafos que ele mesmo
 *    escreveu.
 *
 * Cada item da lista agora diz o requisito E o que acontece com o idoso sem
 * ele — que era exatamente a queixa: o titulo prometia guia completo e a
 * pagina so listava exigencias soltas.
 *
 * Idempotente: se ja estiver escrito, nao mexe.
 */
import fs from 'node:fs'
import path from 'node:path'

const raiz = process.cwd()
const envPath = path.resolve(raiz, '.env.local')
if (fs.existsSync(envPath)) {
  for (const linha of fs.readFileSync(envPath, 'utf8').split(/\r?\n/)) {
    const m = linha.match(/^([A-Z0-9_]+)=(.*)$/)
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2].trim()
  }
}

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
const token = process.env.SANITY_API_TOKEN
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-11-04'
const dry = process.argv.includes('--dry')
const DOC = 'seo-page-ilpi-porto-alegre'

if (!projectId || (!dry && !token)) {
  console.error('Falta NEXT_PUBLIC_SANITY_PROJECT_ID ou SANITY_API_TOKEN')
  process.exit(1)
}

const base = `https://${projectId}.api.sanity.io/v${apiVersion}/data`

async function consultar(query) {
  const r = await fetch(`${base}/query/${dataset}?query=${encodeURIComponent(query)}`)
  const corpo = await r.json()
  if (corpo.error) throw new Error(JSON.stringify(corpo.error))
  return corpo.result
}

// ── a lista, agora com a consequencia de cada falta ──────────────
const EXIGENCIAS = [
  'Registro e alvará de funcionamento conforme a RDC 502/2021 da ANVISA — sem isso a casa funciona na informalidade, não passa por fiscalização e a família não tem a quem recorrer se algo der errado.',
  'Responsável técnico habilitado, médico ou enfermeiro, com registro no conselho — sem ele ninguém responde tecnicamente por medicação, agravamento clínico ou decisão de encaminhamento ao hospital.',
  'Número de cuidadores proporcional ao grau de dependência dos residentes — equipe curta significa banho apressado, troca de fralda demorada, refeição sem quem ajude a comer, e queda de quem não pode ser deixado sozinho.',
  'No máximo quatro pessoas por quarto — acima disso somem a privacidade e o sono, e uma infecção respiratória se espalha muito mais rápido.',
  'Prontuário individual atualizado — sem registro escrito, medicação é repetida ou esquecida, e o médico que atende de fora não sabe o que aconteceu na semana.',
  'Plano de cuidados individual revisto periodicamente — sem revisão, o cuidado congela no perfil da admissão e não acompanha a perda de força, de memória ou de apetite.',
  'Corrimão nos corredores e nos banheiros — é o apoio que separa um desequilíbrio de uma fratura de fêmur, a lesão que mais tira autonomia do idoso.',
  'Rampa de acesso e elevador quando há mais de um pavimento — sem eles o idoso que usa cadeira de rodas fica preso a um andar e perde o convívio, as refeições coletivas e a área externa.',
  'Cadeiras de rodas e andadores disponíveis na casa — quem está em recuperação precisa do apoio no dia em que precisa, não no dia em que a família conseguir comprar.',
  'Piso antiderrapante, sinalização e boa iluminação — a maioria das quedas acontece à noite, no caminho curto entre a cama e o banheiro.',
  'Sistema de chamada de emergência ao alcance da cama e do banheiro — sem ele, uma queda de madrugada só é descoberta na próxima ronda.',
  'Protocolo escrito de emergência, com quem chamar e para onde levar — na hora do AVC ou da queda, o tempo perdido decidindo é tempo de sequela.',
  'Serviço particular de remoção de emergência contratado — isto não é exigido pela RDC 502/2021, e é justamente por isso que perguntamos: sem um serviço próprio, o atendimento depende da fila da rede pública, e em quadro cardíaco ou neurológico cada minuto conta.',
  'Alimentação supervisionada por nutricionista, com cardápio registrado — sem acompanhamento, aparecem desnutrição, desidratação e engasgo em quem já tem dificuldade de engolir.',
  'Comunicação regular e transparente com os responsáveis — quando a família só é avisada na emergência, ela descobre tarde demais o que vinha mudando aos poucos.',
]

// ── os seis paragrafos de diferenciais, do proprio cliente ───────
const DIFERENCIAIS = [
  'Aliamos mais de 30 anos de experiência em cuidados à pessoa idosa com as modernidades técnicas que nossos hóspedes necessitam. Possuímos estruturas modernas e cuidado verdadeiramente individualizado. Nossa equipe multidisciplinar presta assistência 24 horas por dia, oferecendo acompanhamento contínuo e personalizado para atender às necessidades de cada residente.',
  'Tendo como principal diferencial o investimento permanente na qualificação da equipe. Nossos profissionais participam de treinamentos contínuos em cuidados geriátricos, manejo de lesões, curativos, prevenção e tratamento de lesões, cuidados pós-operatórios e outras práticas assistenciais baseadas em protocolos atualizados, garantindo um atendimento seguro e tecnicamente qualificado.',
  'Buscando sempre proporcionar a melhor experiência ao residente, nossa equipe de enfermagem é supervisionada diariamente por enfermeira responsável, assegurando acompanhamento constante da equipe, avaliação clínica dos residentes, planejamento dos cuidados e rápida tomada de decisão sempre que necessário.',
  'E nosso atendimento vai além da vida do residente. Nossa equipe atua constantemente em conjunto com a família, prestando o melhor serviço possível a quem em nós confia seu ente querido. Temos como missão remover a sobrecarga e o peso das dificuldades dos cuidados diários e necessários para a boa qualidade de vida da pessoa idosa: a rotina de cozinhar, passar, lavar roupa, limpar e cuidar da casa, manutenção, compra de medicamentos e suplementos, gerenciamento das consultas e receitas médicas, higiene íntima e conforto.',
  'Acima de tudo, acreditamos que um cuidado de excelência deve ser também humanizado. Por isso, valorizamos o acolhimento, o respeito à individualidade, a preservação da autonomia e da dignidade da pessoa idosa, mantendo comunicação transparente e frequente com os familiares, para que participem ativamente do acompanhamento de seus entes.',
  'Nossa rotina contempla atividades terapêuticas, cognitivas, físicas e de socialização, planejadas de acordo com as capacidades e objetivos de cada residente. A alimentação é individualizada, respeitando prescrições médicas, necessidades nutricionais e preferências alimentares.',
]

function chave() {
  return Math.random().toString(36).slice(2, 14)
}

/** Paragrafos viram blocos de texto rico do Sanity. */
function paraTextoRico(paragrafos) {
  return paragrafos.map((texto) => ({
    _key: chave(),
    _type: 'block',
    style: 'normal',
    markDefs: [],
    children: [{ _key: chave(), _type: 'span', text: texto, marks: [] }],
  }))
}

// ── executar ─────────────────────────────────────────────────────
const doc = await consultar(`*[_id=="${DOC}"][0]`)
if (!doc) throw new Error(`${DOC} nao encontrado`)

const secoes = doc.sections || []
const oque = secoes.find((s) => s._key === 'oque')
if (!oque) throw new Error('secao "oque" nao encontrada')

const mutations = []
const relatorio = []

// 1) lista de exigencias com consequencia
const listaIgual = JSON.stringify(oque.checklistItems) === JSON.stringify(EXIGENCIAS)
if (listaIgual) {
  relatorio.push('lista de exigencias: ja esta atualizada')
} else {
  relatorio.push(
    `lista de exigencias: ${(oque.checklistItems || []).length} itens -> ${EXIGENCIAS.length}, cada um agora diz o que acontece sem ele`
  )
  mutations.push({
    patch: { id: DOC, set: { 'sections[_key=="oque"].checklistItems': EXIGENCIAS } },
  })
  mutations.push({
    patch: {
      id: DOC,
      set: {
        'sections[_key=="oque"].rightHeading':
          'O que verificar ao escolher uma ILPI — e o que acontece se faltar',
      },
    },
  })
}

// 2) secao de diferenciais
const jaTemDiferenciais = secoes.some(
  (s) => s._type === 'richTextSection' && /diferenc/i.test(s.title || '')
)
if (jaTemDiferenciais) {
  relatorio.push('secao de diferenciais: ja existe')
} else {
  relatorio.push('secao de diferenciais: criando com os 6 paragrafos do cliente')
  mutations.push({
    patch: {
      id: DOC,
      insert: {
        // Depois de "Por que escolher a Novo Lar Geriatria?", que e onde o
        // leitor ja esta perguntando o que a casa tem de diferente.
        after: 'sections[_key=="stats"]',
        items: [
          {
            _key: 'diferenciais',
            _type: 'richTextSection',
            title: 'Nossos diferenciais',
            alignment: 'left',
            body: paraTextoRico(DIFERENCIAIS),
          },
        ],
      },
    },
  })
}

for (const linha of relatorio) console.log('  ' + linha)

if (mutations.length === 0) {
  console.log('\nNada a fazer.')
  process.exit(0)
}

if (dry) {
  console.log('\n--dry: nada foi escrito.')
  process.exit(0)
}

// backup antes de escrever
const carimbo = new Date().toISOString().replace(/[:.]/g, '-')
const dirBackup = path.resolve(raiz, 'backups')
fs.mkdirSync(dirBackup, { recursive: true })
fs.writeFileSync(path.join(dirBackup, `guia-ilpi-${carimbo}.json`), JSON.stringify(doc, null, 2), 'utf8')
console.log(`\nbackup: backups/guia-ilpi-${carimbo}.json`)

const r = await fetch(`${base}/mutate/${dataset}?returnIds=true`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
  body: JSON.stringify({ mutations }),
})
const corpo = await r.json()
if (!r.ok) {
  console.error('Falhou:', JSON.stringify(corpo, null, 2))
  process.exit(1)
}
console.log('OK — guia atualizado.')

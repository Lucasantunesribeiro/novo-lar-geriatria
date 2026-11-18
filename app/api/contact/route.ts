import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { Resend } from 'resend'
import { getStore } from '@netlify/blobs'
import { COMPANY_CONTACT } from '@/lib/site-data'

// Schema de validação Zod
const contactSchema = z.object({
  name: z.string().min(3, 'Nome deve ter pelo menos 3 caracteres').max(100, 'Nome muito longo'),
  email: z.string().email('E-mail inválido'),
  phone: z.string().min(10, 'Telefone inválido').max(20, 'Telefone inválido'),
  unit: z.string().optional(), // Opcional para formulários de serviço
  service: z.string().optional(), // Opcional para formulários de unidade
  message: z.string().optional(),
  // Honeypot field - deve estar vazio
  website: z.string().max(0, 'Campo inválido').optional().default(''),
}).refine((data) => data.unit || data.service, {
  message: 'Informe a unidade ou serviço de interesse',
  path: ['unit'],
})

// O texto vem de um formulário público e vai para dentro de um e-mail HTML.
// Sem escapar, qualquer pessoa conseguiria injetar links ou marcação no
// e-mail que chega à equipe.
function escapar(texto: string): string {
  return texto
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

export async function POST(request: NextRequest) {
  try {
    // Parse do body
    const body = await request.json()

    // Validação com Zod
    const validatedData = contactSchema.parse(body)

    // Verificar honeypot - se preenchido, é spam
    if (validatedData.website && validatedData.website.length > 0) {
      console.warn('⚠️ Possível spam detectado (honeypot preenchido)')
      // Retornar sucesso falso para não dar dica ao bot
      return NextResponse.json(
        { success: true, message: 'Mensagem enviada com sucesso!' },
        { status: 200 }
      )
    }

    const now = new Date().toISOString()
    const source = validatedData.service ? 'service_page' : 'contact_page'

    // Log seguro: nenhum nome, telefone, e-mail ou mensagem vai para o log.
    console.log('📧 Novo contato recebido:', {
      unit: validatedData.unit,
      service: validatedData.service,
      source,
      hasMessage: !!validatedData.message,
      timestamp: now,
    })

    const errors: string[] = []

    // Cópia privada no Netlify Blobs.
    //
    // O lead NÃO é mais gravado no Sanity: o dataset production é público e
    // qualquer pessoa conseguia ler os contatos pela API. O Blobs não tem
    // leitura pública — só a conta do Netlify e o próprio site leem.
    // É uma cópia de segurança: quem confirma a entrega é o e-mail.
    // Fora do Netlify (npm run dev) o Blobs não existe; a falha é só anotada.
    try {
      const store = getStore({ name: 'leads', consistency: 'strong' })
      await store.setJSON(`${now}-${crypto.randomUUID()}`, {
        name: validatedData.name,
        email: validatedData.email,
        phone: validatedData.phone,
        unit: validatedData.unit || null,
        service: validatedData.service || null,
        message: validatedData.message || null,
        source,
        createdAt: now,
      })
    } catch (err) {
      console.error('❌ Cópia do lead no Netlify Blobs falhou:', err instanceof Error ? err.name : 'erro')
      errors.push('blobs')
    }

    // Enviar email de notificação via Resend.
    //
    // Os dois dominios sao diferentes de proposito, confirmado pelo cliente:
    //   o SITE fica em geriatrianovolar.com.br
    //   a CAIXA DE EMAIL fica em novolargeriatria.com.br
    // O destino estava apontando para o dominio do site, onde nao ha caixa.
    // O remetente precisa ser de um dominio verificado na conta do Resend —
    // por isso e o dominio do email, e nao o do site.
    const resendKey = process.env.RESEND_API_KEY
    const remetente =
      process.env.RESEND_FROM || 'Novo Lar Geriatria <noreply@novolargeriatria.com.br>'
    const toEmail =
      process.env.RESEND_TO_EMAIL || process.env.CONTACT_EMAIL || 'contato@novolargeriatria.com.br'

    let emailEnviado = false

    if (resendKey) {
      try {
        const resend = new Resend(resendKey)
        const subject = validatedData.unit
          ? `Novo Lead — Unidade ${validatedData.unit}`
          : `Novo Lead — Serviço ${validatedData.service}`

        const linha = (rotulo: string, valor: string, fundo: boolean) =>
          `<tr${fundo ? ' style="background:#f9f9f9;"' : ''}><td style="padding:8px; font-weight:bold; color:#555;">${rotulo}</td><td style="padding:8px;">${escapar(valor)}</td></tr>`

        // O SDK do Resend devolve { error } em vez de lançar exceção quando a
        // API recusa o envio (domínio não verificado, chave inválida). Sem
        // checar, o visitante veria "enviado" com o e-mail recusado.
        const { error } = await resend.emails.send({
          from: remetente,
          to: [toEmail],
          replyTo: validatedData.email,
          subject,
          html: `
            <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #2C3E6B;">Novo contato recebido</h2>
              <table style="width:100%; border-collapse: collapse;">
                ${linha('Nome', validatedData.name, false)}
                ${linha('E-mail', validatedData.email, true)}
                ${linha('Telefone', validatedData.phone, false)}
                ${validatedData.unit ? linha('Unidade', validatedData.unit, true) : ''}
                ${validatedData.service ? linha('Serviço', validatedData.service, false) : ''}
                ${validatedData.message ? linha('Mensagem', validatedData.message, true) : ''}
                ${linha('Data', new Date(now).toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' }), false)}
              </table>
            </div>
          `,
        })
        if (error) {
          console.error('❌ Resend recusou o envio:', error.name)
          errors.push('resend')
        } else {
          emailEnviado = true
        }
      } catch (err) {
        console.error('❌ Erro ao enviar email via Resend:', err instanceof Error ? err.name : 'erro')
        errors.push('resend')
      }
    } else {
      console.error('❌ RESEND_API_KEY ausente: o contato não chega por e-mail.')
      errors.push('resend-sem-chave')
    }

    // O e-mail não saiu: o visitante precisa saber, e precisa de uma saída
    // que sempre funciona. O WhatsApp não depende de chave nenhuma.
    if (!emailEnviado) {
      console.error('❌ Contato não entregue por e-mail:', errors.join(', '))

      return NextResponse.json(
        {
          success: false,
          message:
            'Não conseguimos registrar sua mensagem agora. Fale com a gente pelo WhatsApp que respondemos na hora.',
          whatsapp: `https://wa.me/${COMPANY_CONTACT.whatsappDigits}`,
          telefone: COMPANY_CONTACT.centralPhoneDisplay,
        },
        { status: 503 }
      )
    }

    if (errors.length > 0) {
      console.warn('⚠️ E-mail enviado, mas com falha parcial:', errors.join(', '))
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.',
      },
      { status: 200 }
    )
  } catch (error) {
    // Erro de validação Zod
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: 'Erro de validação',
          errors: error.errors.map((err) => ({
            field: err.path.join('.'),
            message: err.message,
          })),
        },
        { status: 400 }
      )
    }

    // Erro genérico
    console.error('❌ Erro ao processar contato:', error instanceof Error ? error.name : 'erro')
    return NextResponse.json(
      {
        success: false,
        message: 'Erro ao enviar mensagem. Tente novamente mais tarde.',
      },
      { status: 500 }
    )
  }
}

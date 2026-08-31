import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { Resend } from 'resend'
import { writeClient, podeEscreverNoSanity } from '@/lib/sanity/client'
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

    // Log seguro (não inclui dados sensíveis completos)
    console.log('📧 Novo contato recebido:', {
      unit: validatedData.unit,
      service: validatedData.service,
      source: validatedData.service ? 'service_page' : 'contact_page',
      hasMessage: !!validatedData.message,
      timestamp: new Date().toISOString(),
    })

    const now = new Date().toISOString()
    const errors: string[] = []
    // Quantos caminhos realmente entregaram a mensagem. Se ficar em zero, o
    // visitante NAO pode ver "enviado com sucesso" — foi assim que contatos
    // sumiram sem ninguem perceber.
    let entregue = 0

    // Salvar lead no Sanity
    if (podeEscreverNoSanity && writeClient) {
      try {
        await writeClient.create({
          _type: 'lead',
          name: validatedData.name,
          email: validatedData.email,
          phone: validatedData.phone,
          unit: validatedData.unit || null,
          service: validatedData.service || null,
          message: validatedData.message || null,
          source: validatedData.service ? 'service_page' : 'contact_page',
          createdAt: now,
        })
        entregue++
      } catch (err) {
        console.error('❌ Erro ao salvar lead no Sanity:', err)
        errors.push('sanity')
      }
    } else {
      console.error(
        '❌ SANITY_API_TOKEN ausente: nao ha onde gravar o lead. ' +
          'Sem essa variavel no ambiente, todo contato do site se perde.'
      )
      errors.push('sanity-sem-token')
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

    if (resendKey) {
      try {
        const resend = new Resend(resendKey)
        const subject = validatedData.unit
          ? `Novo Lead — Unidade ${validatedData.unit}`
          : `Novo Lead — Serviço ${validatedData.service}`

        await resend.emails.send({
          from: remetente,
          to: [toEmail],
          subject,
          html: `
            <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #2C3E6B;">Novo contato recebido</h2>
              <table style="width:100%; border-collapse: collapse;">
                <tr><td style="padding:8px; font-weight:bold; color:#555;">Nome</td><td style="padding:8px;">${validatedData.name}</td></tr>
                <tr style="background:#f9f9f9;"><td style="padding:8px; font-weight:bold; color:#555;">E-mail</td><td style="padding:8px;">${validatedData.email}</td></tr>
                <tr><td style="padding:8px; font-weight:bold; color:#555;">Telefone</td><td style="padding:8px;">${validatedData.phone}</td></tr>
                ${validatedData.unit ? `<tr style="background:#f9f9f9;"><td style="padding:8px; font-weight:bold; color:#555;">Unidade</td><td style="padding:8px;">${validatedData.unit}</td></tr>` : ''}
                ${validatedData.service ? `<tr><td style="padding:8px; font-weight:bold; color:#555;">Serviço</td><td style="padding:8px;">${validatedData.service}</td></tr>` : ''}
                ${validatedData.message ? `<tr style="background:#f9f9f9;"><td style="padding:8px; font-weight:bold; color:#555;">Mensagem</td><td style="padding:8px;">${validatedData.message}</td></tr>` : ''}
                <tr><td style="padding:8px; font-weight:bold; color:#555;">Data</td><td style="padding:8px;">${new Date(now).toLocaleString('pt-BR')}</td></tr>
              </table>
            </div>
          `,
        })
        entregue++
      } catch (err) {
        console.error('❌ Erro ao enviar email via Resend:', err)
        errors.push('resend')
      }
    } else {
      errors.push('resend-sem-chave')
    }

    // Nenhum caminho entregou: o visitante precisa saber, e precisa de uma
    // saida que sempre funciona. O WhatsApp nao depende de chave nenhuma.
    if (entregue === 0) {
      console.error(
        '❌ CONTATO PERDIDO — nenhuma via de entrega funcionou:',
        errors.join(', '),
        '| dados:',
        { nome: validatedData.name, email: validatedData.email, telefone: validatedData.phone }
      )

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
      console.warn('⚠️ Contato entregue, mas com falha parcial:', errors.join(', '))
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
    console.error('❌ Erro ao processar contato:', error)
    return NextResponse.json(
      {
        success: false,
        message: 'Erro ao enviar mensagem. Tente novamente mais tarde.',
      },
      { status: 500 }
    )
  }
}

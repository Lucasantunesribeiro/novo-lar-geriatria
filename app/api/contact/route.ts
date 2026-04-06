import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { Resend } from 'resend'
import { writeClient, isSanityConfigured } from '@/lib/sanity/client'

// Schema de validação Zod
const contactSchema = z.object({
  name: z.string().min(3, 'Nome deve ter pelo menos 3 caracteres').max(100, 'Nome muito longo'),
  email: z.string().email('E-mail inválido'),
  phone: z.string().min(10, 'Telefone inválido').max(20, 'Telefone inválido'),
  unit: z.string().optional(), // Opcional para formulários de serviço
  service: z.string().optional(), // Opcional para formulários de unidade
  message: z.string().optional(),
  // Honeypot field - deve estar vazio
  website: z.string().max(0, 'Campo inválido'),
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

    // Salvar lead no Sanity
    if (isSanityConfigured && writeClient) {
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
      } catch (err) {
        console.error('❌ Erro ao salvar lead no Sanity:', err)
        errors.push('sanity')
      }
    }

    // Enviar email de notificação via Resend
    const resendKey = process.env.RESEND_API_KEY
    const toEmail = process.env.RESEND_TO_EMAIL || 'contato@novolargeriatria.com.br'

    if (resendKey) {
      try {
        const resend = new Resend(resendKey)
        const subject = validatedData.unit
          ? `Novo Lead — Unidade ${validatedData.unit}`
          : `Novo Lead — Serviço ${validatedData.service}`

        await resend.emails.send({
          from: 'Novo Lar Geriatria <noreply@novolargeriatria.com.br>',
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
      } catch (err) {
        console.error('❌ Erro ao enviar email via Resend:', err)
        errors.push('resend')
      }
    }

    // Retornar sucesso (mesmo se integrações falharem — lead pode ser recuperado dos logs)
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

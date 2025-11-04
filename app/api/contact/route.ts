import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

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
      userAgent: request.headers.get('user-agent'),
    })

    // TODO: Integrar com Sanity para salvar lead
    // const client = createClient({ ... })
    // await client.create({
    //   _type: 'lead',
    //   name: validatedData.name,
    //   email: validatedData.email,
    //   phone: validatedData.phone,
    //   unit: validatedData.unit,
    //   message: validatedData.message,
    //   createdAt: new Date().toISOString(),
    // })

    // TODO: Enviar email de notificação
    // await sendEmail({
    //   to: 'contato@novolargeriatria.com.br',
    //   subject: `Novo Lead - Unidade ${validatedData.unit}`,
    //   html: formatEmailTemplate(validatedData),
    // })

    // Simular delay de processamento
    await new Promise((resolve) => setTimeout(resolve, 800))

    // Retornar sucesso
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

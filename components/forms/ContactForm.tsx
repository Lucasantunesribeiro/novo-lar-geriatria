'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { MessageCircle, Loader2 } from 'lucide-react'
import { useRouter } from 'next/navigation'

// Função para aplicar máscara de telefone
function phoneMask(value: string) {
  if (!value) return ''
  return value
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '($1) $2')
    .replace(/(\d{5})(\d)/, '$1-$2')
    .replace(/(-\d{4})\d+?$/, '$1')
}

// Schema de validação
const contactSchema = z.object({
  name: z.string().min(3, 'Nome deve ter pelo menos 3 caracteres').max(100),
  email: z.string().email('E-mail inválido'),
  phone: z.string().min(14, 'Telefone inválido'),
  unit: z.string().min(1, 'Selecione uma unidade'),
  message: z.string().optional(),
  // Honeypot field - deve permanecer vazio
  website: z.string().max(0, 'Campo inválido'),
})

type ContactFormData = z.infer<typeof contactSchema>

interface ContactFormProps {
  units: Array<{ slug: string; name: string }>
  defaultUnit?: string
}

export default function ContactForm({ units, defaultUnit }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      unit: defaultUnit || '',
      website: '', // honeypot
    },
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitError(null)

    // Analytics event
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: 'lead_submit',
        form_location: 'contact_form',
        unit_selected: data.unit,
      })
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error('Erro ao enviar formulário')
      }

      const result = await response.json()

      // Redirecionar para página de obrigado com unidade selecionada
      router.push(`/obrigado?unit=${data.unit}`)
      reset()
    } catch (error) {
      console.error('Erro ao enviar formulário:', error)
      setSubmitError('Erro ao enviar formulário. Por favor, tente novamente.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-semibold text-[#1a2745]">
            Nome completo <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            {...register('name')}
            className={`w-full rounded-xl border px-4 py-3 text-gray-900 shadow-sm transition focus:outline-none focus:ring-2 ${
              errors.name
                ? 'border-red-500 focus:border-red-500 focus:ring-red-500/50'
                : 'border-gray-200 focus:border-[#2C3E6B] focus:ring-[#D4A853]/50'
            }`}
            placeholder="Seu nome"
            aria-invalid={errors.name ? 'true' : 'false'}
            aria-describedby={errors.name ? 'name-error' : undefined}
          />
          {errors.name && (
            <p id="name-error" className="text-sm text-red-600" role="alert">
              {errors.name.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-semibold text-[#1a2745]">
            E-mail <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            {...register('email')}
            className={`w-full rounded-xl border px-4 py-3 text-gray-900 shadow-sm transition focus:outline-none focus:ring-2 ${
              errors.email
                ? 'border-red-500 focus:border-red-500 focus:ring-red-500/50'
                : 'border-gray-200 focus:border-[#2C3E6B] focus:ring-[#D4A853]/50'
            }`}
            placeholder="seu@email.com"
            aria-invalid={errors.email ? 'true' : 'false'}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email && (
            <p id="email-error" className="text-sm text-red-600" role="alert">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-semibold text-[#1a2745]">
            Telefone <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            {...register('phone')}
            onChange={(e) => {
              e.target.value = phoneMask(e.target.value)
            }}
            maxLength={15}
            className={`w-full rounded-xl border px-4 py-3 text-gray-900 shadow-sm transition focus:outline-none focus:ring-2 ${
              errors.phone
                ? 'border-red-500 focus:border-red-500 focus:ring-red-500/50'
                : 'border-gray-200 focus:border-[#2C3E6B] focus:ring-[#D4A853]/50'
            }`}
            placeholder="(51) 99999-9999"
            aria-invalid={errors.phone ? 'true' : 'false'}
            aria-describedby={errors.phone ? 'phone-error' : undefined}
          />
          {errors.phone && (
            <p id="phone-error" className="text-sm text-red-600" role="alert">
              {errors.phone.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <label htmlFor="unit" className="text-sm font-semibold text-[#1a2745]">
            Unidade de interesse <span className="text-red-500">*</span>
          </label>
          <select
            id="unit"
            {...register('unit')}
            className={`w-full rounded-xl border px-4 py-3 text-gray-900 shadow-sm transition focus:outline-none focus:ring-2 ${
              errors.unit
                ? 'border-red-500 focus:border-red-500 focus:ring-red-500/50'
                : 'border-gray-200 focus:border-[#2C3E6B] focus:ring-[#D4A853]/50'
            }`}
            aria-invalid={errors.unit ? 'true' : 'false'}
            aria-describedby={errors.unit ? 'unit-error' : undefined}
          >
            <option value="">Selecione uma unidade</option>
            {units.map((unit) => (
              <option key={unit.slug} value={unit.slug}>
                {unit.name}
              </option>
            ))}
            <option value="nao-sei">Ainda não sei</option>
          </select>
          {errors.unit && (
            <p id="unit-error" className="text-sm text-red-600" role="alert">
              {errors.unit.message}
            </p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-semibold text-[#1a2745]">
          Mensagem (opcional)
        </label>
        <textarea
          id="message"
          {...register('message')}
          rows={3}
          className="w-full resize-none rounded-xl border border-gray-200 px-4 py-3 text-gray-900 shadow-sm transition focus:border-[#2C3E6B] focus:outline-none focus:ring-2 focus:ring-[#D4A853]/50"
          placeholder="Conte-nos suas necessidades..."
        ></textarea>
      </div>

      {/* Honeypot field - escondido do usuário */}
      <input
        type="text"
        {...register('website')}
        style={{
          position: 'absolute',
          left: '-9999px',
          width: '1px',
          height: '1px',
        }}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      {submitError && (
        <div className="rounded-xl bg-red-50 border border-red-200 p-4 text-sm text-red-600" role="alert">
          {submitError}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-xl bg-[#2C3E6B] py-4 text-lg font-semibold text-white shadow-lg shadow-[#2C3E6B]/25 transition hover:-translate-y-0.5 hover:bg-[#223560] disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-4 focus:ring-[#2C3E6B]/30"
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center gap-2">
            <Loader2 className="w-5 h-5 animate-spin" />
            Enviando...
          </span>
        ) : (
          'Receber contato'
        )}
      </button>

      <p className="text-xs text-center text-gray-500">
        Ao enviar, você concorda com nossa{' '}
        <a href="/politica-de-privacidade" className="font-semibold text-[#2C3E6B] hover:underline">
          Política de Privacidade
        </a>
      </p>
    </form>
  )
}

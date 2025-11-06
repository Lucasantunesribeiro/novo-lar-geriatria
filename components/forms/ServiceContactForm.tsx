'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Loader2, Send } from 'lucide-react'
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
const serviceContactSchema = z.object({
  name: z.string().min(3, 'Nome muito curto').max(100),
  email: z.string().email('E-mail inválido'),
  phone: z.string().min(14, 'Telefone inválido'),
  message: z.string().optional(),
  service: z.string(),
  // Honeypot field
  website: z.string().max(0),
})

type ServiceContactFormData = z.infer<typeof serviceContactSchema>

interface ServiceContactFormProps {
  serviceName: string
}

export default function ServiceContactForm({ serviceName }: ServiceContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm<ServiceContactFormData>({
    resolver: zodResolver(serviceContactSchema),
    defaultValues: {
      service: serviceName,
      website: '',
    },
  })

  const onSubmit = async (data: ServiceContactFormData) => {
    setIsSubmitting(true)
    setSubmitError(null)

    // Analytics event
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      ;(window as any).dataLayer.push({
        event: 'lead_submit',
        form_location: 'service_sidebar',
        service_name: serviceName,
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
        throw new Error('Erro ao enviar')
      }

      router.push('/obrigado')
      reset()
    } catch (error) {
      console.error('Erro:', error)
      setSubmitError('Erro ao enviar. Tente novamente.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* Nome */}
      <div>
        <input
          type="text"
          {...register('name')}
          className={`w-full rounded-lg border-0 bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-500 shadow-sm transition focus:outline-none focus:ring-2 ${
            errors.name ? 'ring-2 ring-red-400' : 'focus:ring-[#8B6914]'
          }`}
          placeholder="Nome Completo *"
          aria-invalid={errors.name ? 'true' : 'false'}
        />
        {errors.name && <p className="mt-1 text-xs text-red-200">{errors.name.message}</p>}
      </div>

      {/* E-mail */}
      <div>
        <input
          type="email"
          {...register('email')}
          className={`w-full rounded-lg border-0 bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-500 shadow-sm transition focus:outline-none focus:ring-2 ${
            errors.email ? 'ring-2 ring-red-400' : 'focus:ring-[#8B6914]'
          }`}
          placeholder="Seu Melhor E-mail *"
          aria-invalid={errors.email ? 'true' : 'false'}
        />
        {errors.email && <p className="mt-1 text-xs text-red-200">{errors.email.message}</p>}
      </div>

      {/* Telefone */}
      <div>
        <input
          type="tel"
          {...register('phone')}
          onChange={(e) => {
            const masked = phoneMask(e.target.value)
            e.target.value = masked
            setValue('phone', masked)
          }}
          maxLength={15}
          className={`w-full rounded-lg border-0 bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-500 shadow-sm transition focus:outline-none focus:ring-2 ${
            errors.phone ? 'ring-2 ring-red-400' : 'focus:ring-[#8B6914]'
          }`}
          placeholder="Telefone/WhatsApp *"
          aria-invalid={errors.phone ? 'true' : 'false'}
        />
        {errors.phone && <p className="mt-1 text-xs text-red-200">{errors.phone.message}</p>}
      </div>

      {/* Mensagem */}
      <div>
        <textarea
          {...register('message')}
          rows={3}
          className="w-full resize-none rounded-lg border-0 bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-500 shadow-sm transition focus:outline-none focus:ring-2 focus:ring-[#8B6914]"
          placeholder="Mensagem (opcional)"
        ></textarea>
      </div>

      {/* Honeypot */}
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

      {/* Erro */}
      {submitError && (
        <div className="rounded-lg bg-red-100 p-3 text-xs text-red-800" role="alert">
          {submitError}
        </div>
      )}

      {/* Botão */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="group relative w-full overflow-hidden rounded-lg bg-[#8B6914] px-6 py-3.5 font-semibold text-[#1a2745] shadow-lg transition-all hover:bg-[#d4a84d] hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60 focus:outline-none focus:ring-2 focus:ring-[#8B6914] focus:ring-offset-2"
      >
        <span className="relative z-10 flex items-center justify-center gap-2">
          {isSubmitting ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              <span>Enviando...</span>
            </>
          ) : (
            <>
              <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              <span>Agendar Visita</span>
            </>
          )}
        </span>
        <div className="absolute inset-0 -z-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
      </button>

      {/* Termos */}
      <p className="text-center text-xs leading-relaxed text-white/80">
        Ao enviar, você aceita nossa{' '}
        <a href="/politica-de-privacidade" className="font-medium underline hover:text-white">
          Política de Privacidade
        </a>
      </p>
    </form>
  )
}




'use client'

import { Phone, Mail, MapPin, Clock, MessageSquare, User, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { COMPANY_CONTACT } from '@/lib/site-data'

/** Textos do formulario. Vazio no Studio = o texto que ja estava aqui. */
export type TextosDoFormulario = {
  formTitulo?: string
  formLabelNome?: string
  formPlaceholderNome?: string
  formLabelEmail?: string
  formPlaceholderEmail?: string
  formLabelTelefone?: string
  formPlaceholderTelefone?: string
  formLabelUnidade?: string
  formOpcaoUnidadeVazia?: string
  formOpcaoNaoSei?: string
  formLabelMensagem?: string
  formPlaceholderMensagem?: string
  formBotao?: string
  formSucesso?: string
  formSucessoDetalhe?: string
  formErro?: string
  formTituloUnidades?: string
  formRodape?: string
  formSubtituloUnidades?: string
  formTituloTelefone?: string
}

const UNITS = [
  {
    slug: 'moinhos-luciana-de-abreu',
    name: 'Moinhos de Vento - Luciana de Abreu',
    phone: '(51) 2797.0901',
    whatsapp: '555127970901',
    address: 'Rua Luciana de Abreu, 151 - Moinhos de Vento, Porto Alegre - RS',
    hours: 'Atendimento 24h | Visitas mediante agendamento',
  },
  {
    slug: 'passo-dareia',
    name: "Passo d'Areia",
    phone: '(51) 3376.9462',
    whatsapp: '5551920011523',
    address: "Rua Brigadeiro Oliveira Neri, 175 - Passo d'Areia, Porto Alegre - RS",
    hours: 'Atendimento 24h | Visitas mediante agendamento',
  },
  {
    slug: 'moinhos-barao-de-santo-angelo',
    name: 'Moinhos de Vento - Barão de Santo Ângelo',
    phone: '(51) 2797.0901',
    whatsapp: '555127970901',
    address: 'Rua Barão de Santo Ângelo, 406 - Moinhos de Vento, Porto Alegre - RS',
    hours: 'Atendimento 24h | Visitas mediante agendamento',
  },
]

// Schema de validação Zod
const contactSchema = z.object({
  name: z.string().min(3, 'Nome deve ter pelo menos 3 caracteres').max(100, 'Nome muito longo'),
  email: z.string().email('E-mail inválido'),
  phone: z.string().min(10, 'Telefone inválido').max(20, 'Telefone inválido'),
  unit: z.string().min(1, 'Selecione uma unidade'),
  message: z.string().min(10, 'Mensagem deve ter pelo menos 10 caracteres').max(1000, 'Mensagem muito longa'),
  // Honeypot field - deve permanecer vazio
  website: z.string().max(0, 'Campo inválido').optional().default(''),
})

type ContactFormData = z.infer<typeof contactSchema>

export default function ContactForm({ textos }: { textos?: TextosDoFormulario } = {}) {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      website: '',
    },
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (response.ok && result.success) {
        setSubmitStatus('success')
        reset()
        // Redirecionar após 1.5 segundos
        setTimeout(() => {
          router.push('/obrigado')
        }, 1500)
      } else {
        setSubmitStatus('error')
        setErrorMessage(result.message || 'Erro ao enviar mensagem')
      }
    } catch (error) {
      console.error('Erro ao enviar formulário:', error)
      setSubmitStatus('error')
      setErrorMessage('Erro ao enviar mensagem. Tente novamente.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Formulário */}
          <div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <MessageSquare className="w-8 h-8 text-[#D4A853]" />
                <h2 className="text-2xl font-bold text-[#2C3E6B]">
                  {textos?.formTitulo || 'Envie sua Mensagem'}
                </h2>
              </div>

              {/* Success Message */}
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3 animate-in fade-in slide-in-from-top-2 duration-300">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-green-800 font-semibold">
                      {textos?.formSucesso || 'Mensagem enviada com sucesso!'}
                    </p>
                    <p className="text-green-700 text-sm mt-1">
                      {textos?.formSucessoDetalhe || 'Redirecionando...'}
                    </p>
                  </div>
                </div>
              )}

              {/* Error Message */}
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3 animate-in fade-in slide-in-from-top-2 duration-300">
                  <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-red-800 font-semibold">
                      {textos?.formErro || 'Erro ao enviar mensagem'}
                    </p>
                    <p className="text-red-700 text-sm mt-1">{errorMessage}</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    {textos?.formLabelNome || 'Nome Completo *'}
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      id="name"
                      {...register('name')}
                      className={`w-full pl-12 pr-4 py-3 border rounded-lg transition focus:ring-2 focus:ring-[#2E7B7F] focus:border-transparent ${
                        errors.name ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder={textos?.formPlaceholderNome || 'Seu nome completo'}
                      disabled={isSubmitting}
                    />
                  </div>
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    E-mail *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      id="email"
                      {...register('email')}
                      className={`w-full pl-12 pr-4 py-3 border rounded-lg transition focus:ring-2 focus:ring-[#2E7B7F] focus:border-transparent ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder={textos?.formPlaceholderEmail || 'seuemail@exemplo.com'}
                      disabled={isSubmitting}
                    />
                  </div>
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                  )}
                </div>

                {/* Phone Field */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Telefone *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="tel"
                      id="phone"
                      {...register('phone')}
                      className={`w-full pl-12 pr-4 py-3 border rounded-lg transition focus:ring-2 focus:ring-[#2E7B7F] focus:border-transparent ${
                        errors.phone ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder={textos?.formPlaceholderTelefone || '(51) 99999-9999'}
                      disabled={isSubmitting}
                    />
                  </div>
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                  )}
                </div>

                {/* Unit Field */}
                <div>
                  <label htmlFor="unit" className="block text-sm font-medium text-gray-700 mb-2">
                    Unidade de Interesse *
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <select
                      id="unit"
                      {...register('unit')}
                      className={`w-full pl-12 pr-4 py-3 border rounded-lg transition focus:ring-2 focus:ring-[#2E7B7F] focus:border-transparent appearance-none bg-white ${
                        errors.unit ? 'border-red-500' : 'border-gray-300'
                      }`}
                      disabled={isSubmitting}
                    >
                      <option value="">{textos?.formOpcaoUnidadeVazia || 'Selecione uma unidade'}</option>
                      {UNITS.map((unit) => (
                        <option key={unit.slug} value={unit.slug}>
                          {unit.name}
                        </option>
                      ))}
                      <option value="nao-sei">{textos?.formOpcaoNaoSei || 'Ainda não sei'}</option>
                    </select>
                  </div>
                  {errors.unit && (
                    <p className="mt-1 text-sm text-red-600">{errors.unit.message}</p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    id="message"
                    {...register('message')}
                    rows={6}
                    className={`w-full px-4 py-3 border rounded-lg transition focus:ring-2 focus:ring-[#2E7B7F] focus:border-transparent resize-none ${
                      errors.message ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder={textos?.formPlaceholderMensagem || 'Conte-nos como podemos ajudá-lo...'}
                    disabled={isSubmitting}
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                  )}
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

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#D4A853] text-white py-4 rounded-lg font-semibold hover:bg-[#D4A853] transition flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      {textos?.formBotao || 'Enviar Mensagem'}
                    </>
                  )}
                </button>

                <p className="text-sm text-gray-500 text-center">
                  {textos?.formRodape || 'Responderemos em até 24 horas úteis'}
                </p>
              </form>
            </div>
          </div>

          {/* Informações de Contato */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-[#2C3E6B] mb-6">
                {textos?.formTituloUnidades || 'Nossas Unidades'}
              </h2>
              <p className="text-gray-600 mb-8">
                {textos?.formSubtituloUnidades ||
                  'Entre em contato diretamente com a unidade de sua preferência. Estamos prontos para atendê-lo.'}
              </p>
            </div>

            {UNITS.map((unit) => (
              <div key={unit.name} className="bg-gray-50 rounded-lg p-6 border-l-4 border-[#2E7B7F] hover:shadow-md transition">
                <h3 className="text-xl font-bold text-[#2C3E6B] mb-4">
                  Unidade {unit.name}
                </h3>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-[#2E7B7F] flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-sm text-gray-500">Telefone</p>
                      <a
                        href={`tel:${unit.phone.replace(/\D/g, '')}`}
                        className="text-[#2C3E6B] font-semibold hover:text-[#2E7B7F] transition"
                      >
                        {unit.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MessageSquare className="w-5 h-5 text-[#2E7B7F] flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-sm text-gray-500">WhatsApp</p>
                      <a
                        href={`https://wa.me/${unit.whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#2C3E6B] font-semibold hover:text-[#2E7B7F] transition"
                      >
                        {unit.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#2E7B7F] flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-sm text-gray-500">Endereço</p>
                      <p className="text-gray-700">{unit.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-[#2E7B7F] flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-sm text-gray-500">Horário de Atendimento</p>
                      <p className="text-gray-700">{unit.hours}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* CTA Box */}
            <div className="bg-[#2C3E6B] text-white rounded-lg p-6 mt-8">
              <h3 className="text-xl font-bold mb-3">
                {textos?.formTituloTelefone || 'Prefere falar por telefone?'}
              </h3>
              <p className="text-gray-200 mb-4">
                Nossa equipe está pronta para esclarecer todas as suas dúvidas e agendar uma visita.
              </p>
              <a
                href={`tel:${COMPANY_CONTACT.centralPhoneDigits}`}
                className="inline-flex items-center gap-2 bg-[#D4A853] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#D4A853] transition"
              >
                <Phone className="w-5 h-5" />
                Ligar Agora
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

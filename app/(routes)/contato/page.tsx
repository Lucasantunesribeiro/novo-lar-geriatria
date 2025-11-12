'use client'

import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, MessageSquare, User, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import HeaderWrapper from '@/components/layout/HeaderWrapper'
import FooterWrapper from '@/components/layout/FooterWrapper'
import { COMPANY_CONTACT } from '@/lib/site-data'

const UNITS = [
  {
    slug: 'moinhos-luciana-de-abreu',
    name: 'Moinhos de Vento - Luciana de Abreu',
    phone: '(51) 3346.7620',
    whatsapp: '555133467620',
    address: 'Rua Luciana de Abreu, 151 - Moinhos de Vento, Porto Alegre - RS',
    hours: 'Atendimento 24h | Visitas mediante agendamento',
  },
  {
    slug: 'passo-dareia',
    name: "Passo d'Areia",
    phone: '(51) 3376.9462',
    whatsapp: '555133769462',
    address: "Rua Brigadeiro Oliveira Neri, 175 - Passo d'Areia, Porto Alegre - RS",
    hours: 'Atendimento 24h | Visitas mediante agendamento',
  },
  {
    slug: 'moinhos-barao-de-santo-angelo',
    name: 'Moinhos de Vento - Barão de Santo Ângelo',
    phone: '(51) 3346.7620',
    whatsapp: '555133467620',
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
})

type ContactFormData = z.infer<typeof contactSchema>

export default function ContatoPage() {
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
    <div className="min-h-screen bg-white">
      <HeaderWrapper />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#2C3E6B] to-[#2E7B7F] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-wider text-white/80 mb-3">
              Residencial Geriátrico e Hospedagem Assistida em Porto Alegre - Novo Lar
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Entre em Contato</h1>
            <p className="text-xl text-gray-100">
              Estamos prontos para atendê-lo. Preencha o formulário abaixo ou entre em contato
              diretamente com uma de nossas unidades.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Formulário */}
            <div>
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex items-center gap-3 mb-6">
                  <MessageSquare className="w-8 h-8 text-[#8B6914]" />
                  <h2 className="text-2xl font-bold text-[#2C3E6B]">Envie sua Mensagem</h2>
                </div>

                {/* Success Message */}
                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3 animate-in fade-in slide-in-from-top-2 duration-300">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-green-800 font-semibold">Mensagem enviada com sucesso!</p>
                      <p className="text-green-700 text-sm mt-1">Redirecionando...</p>
                    </div>
                  </div>
                )}

                {/* Error Message */}
                {submitStatus === 'error' && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3 animate-in fade-in slide-in-from-top-2 duration-300">
                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-red-800 font-semibold">Erro ao enviar mensagem</p>
                      <p className="text-red-700 text-sm mt-1">{errorMessage}</p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nome Completo *
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
                        placeholder="Seu nome completo"
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
                        placeholder="seuemail@exemplo.com"
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
                        placeholder="(51) 99999-9999"
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
                        <option value="">Selecione uma unidade</option>
                        {UNITS.map((unit) => (
                          <option key={unit.slug} value={unit.slug}>
                            {unit.name}
                          </option>
                        ))}
                        <option value="nao-sei">Ainda não sei</option>
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
                      placeholder="Conte-nos como podemos ajudá-lo..."
                      disabled={isSubmitting}
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#8B6914] text-white py-4 rounded-lg font-semibold hover:bg-[#8B6914] transition flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Enviar Mensagem
                      </>
                    )}
                  </button>

                  <p className="text-sm text-gray-500 text-center">
                    Responderemos em até 24 horas úteis
                  </p>
                </form>
              </div>
            </div>

            {/* Informações de Contato */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-[#2C3E6B] mb-6">Nossas Unidades</h2>
                <p className="text-gray-600 mb-8">
                  Entre em contato diretamente com a unidade de sua preferência.
                  Estamos prontos para atendê-lo.
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
                <h3 className="text-xl font-bold mb-3">Prefere falar por telefone?</h3>
                <p className="text-gray-200 mb-4">
                  Nossa equipe está pronta para esclarecer todas as suas dúvidas e agendar uma visita.
                </p>
                <a
                  href={`tel:${COMPANY_CONTACT.centralPhoneDigits}`}
                  className="inline-flex items-center gap-2 bg-[#8B6914] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#8B6914] transition"
                >
                  <Phone className="w-5 h-5" />
                  Ligar Agora
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterWrapper />
    </div>
  )
}





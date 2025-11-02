'use client'

import { useState, useEffect } from 'react'
import { X, Settings, Shield, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'

interface CookiePreferences {
  essential: boolean
  analytics: boolean
  marketing: boolean
}

interface CookieBannerProps {
  companyName?: string
}

export default function CookieBanner({ companyName = 'Novo Lar Geriatria' }: CookieBannerProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true,
    analytics: false,
    marketing: false,
  })

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      // Mostrar banner após 1 segundo para não ser intrusivo
      const timer = setTimeout(() => setIsVisible(true), 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  const savePreferences = (prefs: CookiePreferences) => {
    localStorage.setItem('cookie-consent', JSON.stringify(prefs))
    localStorage.setItem('cookie-consent-date', new Date().toISOString())

    // Push evento para Google Tag Manager
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: 'cookie_consent',
        consent_essential: prefs.essential,
        consent_analytics: prefs.analytics,
        consent_marketing: prefs.marketing,
      })
    }
  }

  const handleAcceptAll = () => {
    const allAccepted: CookiePreferences = {
      essential: true,
      analytics: true,
      marketing: true,
    }
    savePreferences(allAccepted)
    setIsVisible(false)
  }

  const handleRejectAll = () => {
    const onlyEssential: CookiePreferences = {
      essential: true,
      analytics: false,
      marketing: false,
    }
    savePreferences(onlyEssential)
    setIsVisible(false)
  }

  const handleSaveCustom = () => {
    savePreferences(preferences)
    setShowSettings(false)
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <>
      {/* Overlay para modal de configurações */}
      {showSettings && (
        <div
          className="fixed inset-0 bg-black/50 z-[60] animate-in fade-in duration-300"
          onClick={() => setShowSettings(false)}
        />
      )}

      {/* Modal de Configurações */}
      {showSettings && (
        <div className="fixed inset-x-4 top-1/2 -translate-y-1/2 md:left-1/2 md:-translate-x-1/2 md:max-w-2xl z-[70] bg-white rounded-xl shadow-2xl animate-in slide-in-from-bottom-4 duration-300">
          <div className="p-6">
            {/* Header do Modal */}
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-[#2C3E6B]/10 rounded-lg">
                  <Shield className="w-6 h-6 text-[#2C3E6B]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Configurações de Cookies
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Escolha quais cookies você deseja permitir
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowSettings(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                aria-label="Fechar configurações"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            {/* Lista de Cookies */}
            <div className="space-y-4 mb-6">
              {/* Cookies Essenciais */}
              <div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="font-semibold text-gray-900">
                        Cookies Essenciais
                      </h4>
                      <span className="text-xs bg-[#2C3E6B] text-white px-2 py-0.5 rounded-full">
                        Sempre ativos
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">
                      Necessários para o funcionamento básico do site. Incluem segurança,
                      navegação e preferências do usuário.
                    </p>
                  </div>
                  <input
                    type="checkbox"
                    checked={true}
                    disabled
                    className="mt-1 w-5 h-5 text-[#2C3E6B] rounded cursor-not-allowed opacity-50"
                  />
                </div>
              </div>

              {/* Cookies de Análise */}
              <div className="p-4 border border-gray-200 rounded-lg hover:border-[#2C3E6B]/30 transition-colors">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Cookies de Análise e Desempenho
                    </h4>
                    <p className="text-sm text-gray-600">
                      Coletam informações sobre como você usa nosso site para
                      melhorarmos a experiência. Exemplos: Google Analytics.
                    </p>
                  </div>
                  <input
                    type="checkbox"
                    checked={preferences.analytics}
                    onChange={(e) =>
                      setPreferences((prev) => ({
                        ...prev,
                        analytics: e.target.checked,
                      }))
                    }
                    className="mt-1 w-5 h-5 text-[#2C3E6B] rounded focus:ring-2 focus:ring-[#2C3E6B] cursor-pointer"
                  />
                </div>
              </div>

              {/* Cookies de Marketing */}
              <div className="p-4 border border-gray-200 rounded-lg hover:border-[#2C3E6B]/30 transition-colors">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Cookies de Marketing
                    </h4>
                    <p className="text-sm text-gray-600">
                      Utilizados para exibir anúncios relevantes e medir a
                      eficácia de campanhas publicitárias.
                    </p>
                  </div>
                  <input
                    type="checkbox"
                    checked={preferences.marketing}
                    onChange={(e) =>
                      setPreferences((prev) => ({
                        ...prev,
                        marketing: e.target.checked,
                      }))
                    }
                    className="mt-1 w-5 h-5 text-[#2C3E6B] rounded focus:ring-2 focus:ring-[#2C3E6B] cursor-pointer"
                  />
                </div>
              </div>
            </div>

            {/* Botões de Ação do Modal */}
            <div className="flex flex-col-reverse sm:flex-row gap-3">
              <button
                onClick={() => setShowSettings(false)}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors"
              >
                Cancelar
              </button>
              <button
                onClick={handleSaveCustom}
                className="flex-1 px-4 py-3 bg-[#2C3E6B] text-white rounded-lg font-medium hover:bg-[#2C3E6B]/90 transition-colors flex items-center justify-center gap-2"
              >
                <CheckCircle2 className="w-5 h-5" />
                Salvar Preferências
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Banner Principal */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t-4 border-[#2C3E6B] shadow-2xl animate-in slide-in-from-bottom-full duration-500">
        <div className="container mx-auto px-4 py-6 md:py-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            {/* Texto e Ícone */}
            <div className="flex items-start gap-4">
              <div className="hidden sm:block p-2 bg-[#2C3E6B]/10 rounded-lg flex-shrink-0">
                <Shield className="w-6 h-6 text-[#2C3E6B]" />
              </div>
              <div className="flex-1">
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  Utilizamos <strong>cookies essenciais</strong> e tecnologias para oferecer{' '}
                  <strong>melhor experiência</strong> e <strong>conteúdos personalizados</strong>.{' '}
                  Ao continuar navegando, você concorda com nossa{' '}
                  <Link
                    href="/politica-de-privacidade"
                    className="text-[#2C3E6B] hover:text-[#4A9B9F] font-medium underline decoration-2 underline-offset-2 transition-colors"
                  >
                    Política de Privacidade
                  </Link>
                  .
                </p>
              </div>
            </div>

            {/* Botões de Ação */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 flex-shrink-0">
              {/* Customizar */}
              <button
                onClick={() => setShowSettings(true)}
                className="px-4 py-2.5 border-2 border-gray-300 rounded-lg text-gray-700 font-medium hover:border-[#2C3E6B] hover:text-[#2C3E6B] transition-all flex items-center justify-center gap-2 text-sm whitespace-nowrap"
                aria-label="Customizar preferências de cookies"
              >
                <Settings className="w-4 h-4" />
                Customizar
              </button>

              {/* Rejeitar */}
              <button
                onClick={handleRejectAll}
                className="px-4 py-2.5 border-2 border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors text-sm whitespace-nowrap"
                aria-label="Rejeitar cookies não essenciais"
              >
                Rejeitar
              </button>

              {/* Aceitar */}
              <button
                onClick={handleAcceptAll}
                className="px-6 py-2.5 bg-[#2C3E6B] text-white rounded-lg font-medium hover:bg-[#2C3E6B]/90 transition-all shadow-lg hover:shadow-xl text-sm whitespace-nowrap flex items-center justify-center gap-2"
                aria-label="Aceitar todos os cookies"
              >
                <CheckCircle2 className="w-4 h-4" />
                Aceitar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

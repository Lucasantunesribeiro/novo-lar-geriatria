import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/ui/WhatsAppButton'
import MobileBottomBar from '@/components/ui/MobileBottomBar'
import { COMPANY_CONTACT } from '@/lib/site-data'
import { Shield, Lock, Eye, FileText, Mail, Phone, Check } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Política de Privacidade | Novo Lar Geriatria',
  description:
    'Política de Privacidade e Proteção de Dados da Novo Lar Geriatria. Saiba como coletamos, usamos e protegemos suas informações pessoais de acordo com a LGPD.',
  alternates: {
    canonical: '/politica-de-privacidade',
  },
  openGraph: {
    title: 'Política de Privacidade | Novo Lar Geriatria',
    description:
      'Política de Privacidade e Proteção de Dados da Novo Lar Geriatria. Saiba como coletamos, usamos e protegemos suas informações pessoais de acordo com a LGPD.',
    url: '/politica-de-privacidade',
  },
}

export default function PoliticaPrivacidadePage() {
  const lastUpdate = '01 de novembro de 2025'

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <section className="bg-[#2C3E6B] text-white py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-2xl mb-6">
                <Shield className="w-8 h-8" />
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Política de Privacidade
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-6">
                Segurança e transparência no tratamento dos seus dados
              </p>
              <div className="inline-flex items-center gap-2 text-sm bg-white/10 px-4 py-2 rounded-full">
                <FileText className="w-4 h-4" />
                Última atualização: {lastUpdate}
              </div>
            </div>
          </div>
        </section>

        {/* Introdução */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-blue-50 border-l-4 border-[#2C3E6B] p-6 rounded-r-lg mb-8">
                <p className="text-gray-700 leading-relaxed">
                  Este documento apresenta as políticas de privacidade de dados do site da{' '}
                  <strong>Geriatria Novo Lar</strong>. As condições são válidas para os usuários
                  do site <strong>www.novolargeriatria.com.br</strong> e suas respectivas landing
                  pages e formulários, sendo os usuários do público em geral, clientes,
                  fornecedores e colaboradores.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  A segurança das suas informações é muito importante para nós. Por isso, seguimos
                  as normas e padrões de segurança previstos na{' '}
                  <strong>Lei Geral de Proteção de Dados (LEI Nº 13.709/2018)</strong>.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  <strong>
                    Uma vez que você forneça seus dados ou navegue em nosso site, você está
                    concordando com os termos e regras de utilização, segurança e proteção
                    dispostos a seguir.
                  </strong>
                </p>
              </div>

              {/* Cards de Destaque */}
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-[#2C3E6B]/10 rounded-lg flex items-center justify-center mb-4">
                    <Lock className="w-6 h-6 text-[#2C3E6B]" />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-gray-900">Segurança</h3>
                  <p className="text-sm text-gray-600">
                    Seus dados são protegidos com as melhores práticas de segurança digital
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-[#2E7B7F]/10 rounded-lg flex items-center justify-center mb-4">
                    <Eye className="w-6 h-6 text-[#2E7B7F]" />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-gray-900">Transparência</h3>
                  <p className="text-sm text-gray-600">
                    Explicamos claramente como usamos suas informações pessoais
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-[#B8842F]/10 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-[#B8842F]" />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-gray-900">Conformidade</h3>
                  <p className="text-sm text-gray-600">
                    100% em conformidade com a LGPD e legislação vigente
                  </p>
                </div>
              </div>

              {/* Conteúdo da Política */}
              <div className="prose prose-lg max-w-none">
                {/* 1. Bases Legais para Tratamento de Dados */}
                <section className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 bg-[#2C3E6B] text-white rounded-lg text-sm">
                      1
                    </span>
                    Bases Legais para Tratamento de Dados
                  </h2>
                  <div className="bg-white p-6 rounded-xl border border-gray-200">
                    <p className="text-gray-700 mb-4">
                      A LGPD prevê 10 bases legais que justificam o tratamento de dados pela
                      empresa. O tratamento de dados pessoais somente poderá ser realizado nas
                      seguintes hipóteses:
                    </p>

                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 bg-[#2C3E6B] text-white rounded-full flex items-center justify-center text-xs font-bold">
                          1
                        </span>
                        <p className="text-gray-700 text-sm">
                          Mediante o fornecimento de <strong>consentimento pelo titular</strong>
                        </p>
                      </div>

                      <div className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 bg-[#2C3E6B] text-white rounded-full flex items-center justify-center text-xs font-bold">
                          2
                        </span>
                        <p className="text-gray-700 text-sm">
                          Para o <strong>cumprimento de obrigação legal ou regulatória</strong> pelo
                          controlador
                        </p>
                      </div>

                      <div className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 bg-[#2C3E6B] text-white rounded-full flex items-center justify-center text-xs font-bold">
                          3
                        </span>
                        <p className="text-gray-700 text-sm">
                          Pela administração pública, para o tratamento e uso compartilhado de dados
                          necessários à <strong>execução de políticas públicas</strong> previstas em
                          leis e regulamentos
                        </p>
                      </div>

                      <div className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 bg-[#2C3E6B] text-white rounded-full flex items-center justify-center text-xs font-bold">
                          4
                        </span>
                        <p className="text-gray-700 text-sm">
                          Para a <strong>realização de estudos por órgão de pesquisa</strong>,
                          garantida, sempre que possível, a anonimização dos dados pessoais
                        </p>
                      </div>

                      <div className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 bg-[#2C3E6B] text-white rounded-full flex items-center justify-center text-xs font-bold">
                          5
                        </span>
                        <p className="text-gray-700 text-sm">
                          Quando necessário para a <strong>execução de contrato</strong> ou de
                          procedimentos preliminares relacionados a contrato do qual seja parte o
                          titular
                        </p>
                      </div>

                      <div className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 bg-[#2C3E6B] text-white rounded-full flex items-center justify-center text-xs font-bold">
                          6
                        </span>
                        <p className="text-gray-700 text-sm">
                          Para o <strong>exercício regular de direitos</strong> em processo judicial,
                          administrativo ou arbitral
                        </p>
                      </div>

                      <div className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 bg-[#2C3E6B] text-white rounded-full flex items-center justify-center text-xs font-bold">
                          7
                        </span>
                        <p className="text-gray-700 text-sm">
                          Para a <strong>proteção da vida ou da incolumidade física</strong> do
                          titular ou de terceiro
                        </p>
                      </div>

                      <div className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 bg-[#2C3E6B] text-white rounded-full flex items-center justify-center text-xs font-bold">
                          8
                        </span>
                        <p className="text-gray-700 text-sm">
                          Para a <strong>tutela da saúde</strong>, exclusivamente, em procedimento
                          realizado por profissionais de saúde, serviços de saúde ou autoridade
                          sanitária
                        </p>
                      </div>

                      <div className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 bg-[#2C3E6B] text-white rounded-full flex items-center justify-center text-xs font-bold">
                          9
                        </span>
                        <p className="text-gray-700 text-sm">
                          Quando necessário para atender aos{' '}
                          <strong>interesses legítimos do controlador</strong> ou de terceiro, exceto
                          no caso de prevalecerem direitos e liberdades fundamentais do titular
                        </p>
                      </div>

                      <div className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 bg-[#2C3E6B] text-white rounded-full flex items-center justify-center text-xs font-bold">
                          10
                        </span>
                        <p className="text-gray-700 text-sm">
                          Para a <strong>proteção do crédito</strong>, inclusive quanto ao disposto
                          na legislação pertinente
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* 2. Proteção de Dados de Clientes */}
                <section className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 bg-[#2C3E6B] text-white rounded-lg text-sm">
                      2
                    </span>
                    Proteção de Dados de Clientes
                  </h2>
                  <div className="bg-white p-6 rounded-xl border border-gray-200">
                    <p className="text-gray-700 mb-4">Considera-se:</p>

                    <div className="space-y-4">
                      <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-[#2C3E6B]">
                        <h4 className="font-semibold text-gray-900 mb-2">Cliente</h4>
                        <p className="text-sm text-gray-700">
                          Pessoa física, funcionário de outra empresa, que possui algum interesse em
                          contratar os serviços da Geriatria Novo Lar para promover os negócios do
                          seu empregador
                        </p>
                      </div>

                      <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-[#2E7B7F]">
                        <h4 className="font-semibold text-gray-900 mb-2">Leitor</h4>
                        <p className="text-sm text-gray-700">
                          Pessoa física que consome informações de artigos, blog, e-books, site,
                          live, etc, como fonte de conhecimento
                        </p>
                      </div>

                      <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-[#B8842F]">
                        <h4 className="font-semibold text-gray-900 mb-2">Seguidores</h4>
                        <p className="text-sm text-gray-700">
                          Pessoa física, que consome informações da Geriatria Novo Lar através das
                          redes sociais
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* 3. Utilização das Informações */}
                <section className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 bg-[#2C3E6B] text-white rounded-lg text-sm">
                      3
                    </span>
                    Utilização das Informações
                  </h2>
                  <div className="bg-white p-6 rounded-xl border border-gray-200">
                    <p className="text-gray-700 mb-4">
                      Ao preencher os formulários da Geriatria Novo Lar, você aceita que suas
                      informações sejam utilizadas para:
                    </p>

                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-[#2C3E6B] flex-shrink-0 mt-0.5" />
                        <p className="text-gray-700 text-sm">
                          Possibilitar o encaminhamento de informações via telefone e e-mail a
                          respeito de nossos produtos e serviços, solicitados através do site ou
                          outro meio
                        </p>
                      </div>

                      <div className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-[#2C3E6B] flex-shrink-0 mt-0.5" />
                        <p className="text-gray-700 text-sm">
                          Identificar o perfil, preferência e necessidade do usuário para refinar a
                          oferta de produtos e serviços oferecidos pela Geriatria Novo Lar
                        </p>
                      </div>

                      <div className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-[#2C3E6B] flex-shrink-0 mt-0.5" />
                        <p className="text-gray-700 text-sm">
                          Encaminhar material comercial ou de comunicação sobre conteúdos, produtos
                          e/ou serviços que possam ser de interesse do usuário
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* 4. Consentimento Explícito */}
                <section className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 bg-[#2C3E6B] text-white rounded-lg text-sm">
                      4
                    </span>
                    Consentimento Explícito
                  </h2>
                  <div className="bg-white p-6 rounded-xl border border-gray-200">
                    <p className="text-gray-700 mb-4">
                      É necessário o <strong>consentimento explícito pelo titular dos dados</strong>{' '}
                      para que nós possamos utilizar suas informações. Essa informação está disposta
                      em nossos formulários, com um link para este documento.
                    </p>
                    <p className="text-gray-700">
                      Essas informações serão tratadas apenas em softwares homologados para o devido
                      tratamento conforme a finalidade do contato.
                    </p>
                  </div>
                </section>

                {/* 5. Site */}
                <section className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 bg-[#2C3E6B] text-white rounded-lg text-sm">
                      5
                    </span>
                    Site
                  </h2>
                  <div className="bg-white p-6 rounded-xl border border-gray-200">
                    <p className="text-gray-700">
                      Utilizamos o site <strong>www.novolargeriatria.com.br</strong> para captação
                      de contatos comerciais sobre os nossos serviços, webinars e materiais
                      produzidos para download.
                    </p>
                  </div>
                </section>

                {/* 6. Opt-out */}
                <section className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 bg-[#2C3E6B] text-white rounded-lg text-sm">
                      6
                    </span>
                    Opt-out (Descadastro)
                  </h2>
                  <div className="bg-white p-6 rounded-xl border border-gray-200">
                    <p className="text-gray-700 mb-4">
                      Todos os nossos e-mails enviados pelas ferramentas de marketing contém a{' '}
                      <strong>opção de descadastro</strong>. Quando o usuário optar pelo
                      descadastro, ele será automaticamente excluído da base.
                    </p>
                    <div className="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded-r-lg">
                      <p className="text-sm text-gray-700">
                        <strong>Importante:</strong> Caso você receba um e-mail sem link de
                        descadastro e deseja ser excluído da nossa base, responda o e-mail recebido,
                        com cópia para{' '}
                        <a
                          href={`mailto:${COMPANY_CONTACT.email}`}
                          className="text-[#2C3E6B] font-semibold hover:underline"
                        >
                          {COMPANY_CONTACT.email}
                        </a>
                      </p>
                    </div>
                  </div>
                </section>

                {/* 7. Divulgação de Dados */}
                <section className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 bg-[#2C3E6B] text-white rounded-lg text-sm">
                      7
                    </span>
                    Divulgação de Dados
                  </h2>
                  <div className="bg-white p-6 rounded-xl border border-gray-200">
                    <p className="text-gray-700 text-lg font-semibold">
                      A Geriatria Novo Lar <strong className="text-[#2C3E6B]">não fornece</strong>{' '}
                      dados dos usuários a terceiros, salvo casos em que o usuário autorize de forma
                      expressa.
                    </p>
                  </div>
                </section>

                {/* 8. Bases de Parceiros */}
                <section className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 bg-[#2C3E6B] text-white rounded-lg text-sm">
                      8
                    </span>
                    Bases de Parceiros
                  </h2>
                  <div className="bg-white p-6 rounded-xl border border-gray-200">
                    <div className="space-y-4">
                      <p className="text-gray-700">
                        Bases de contatos oriundas de parceiros somente serão aceitas com{' '}
                        <strong>consentimento do usuário</strong> sobre o compartilhamento de suas
                        informações.
                      </p>

                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-2">Regras de Aceitação:</h4>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li className="flex items-start gap-2">
                            <Check className="w-4 h-4 text-[#2C3E6B] flex-shrink-0 mt-0.5" />
                            <span>
                              Somente serão aceitas as informações necessárias para a devida
                              comunicação
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="w-4 h-4 text-[#2C3E6B] flex-shrink-0 mt-0.5" />
                            <span>Após o uso, estes contatos serão excluídos</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="w-4 h-4 text-[#2C3E6B] flex-shrink-0 mt-0.5" />
                            <span>Somente serão aceitas bases de contatos recebidas por e-mail</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="w-4 h-4 text-[#2C3E6B] flex-shrink-0 mt-0.5" />
                            <span>
                              O e-mail com a base anexa deve ser enviado por um endereço comercial
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="w-4 h-4 text-[#2C3E6B] flex-shrink-0 mt-0.5" />
                            <span>
                              Deverá conter a origem explícita da base e a assinatura do remetente
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                {/* 9. Princípios de Não Aceitação de Dados */}
                <section className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 bg-[#2C3E6B] text-white rounded-lg text-sm">
                      9
                    </span>
                    Princípios de Não Aceitação de Dados
                  </h2>
                  <div className="bg-white p-6 rounded-xl border border-gray-200">
                    <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                      <h4 className="font-semibold text-gray-900 mb-3">
                        NÃO são aceitas as seguintes práticas:
                      </h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start gap-2">
                          <span className="text-red-500 font-bold">✕</span>
                          <span>
                            Bases enviadas por Skype, Slack, WhatsApp, Telegram ou quaisquer outros
                            meios de comunicação que não o e-mail
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-500 font-bold">✕</span>
                          <span>
                            Bases recebidas por e-mails com domínio gratuito, como Gmail, Outlook,
                            Terra, Hotmail ou outros provedores não comerciais
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-500 font-bold">✕</span>
                          <span>Bases compradas ou recebidas de forma ilícita</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* 10. Uso de Cookies */}
                <section className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 bg-[#2C3E6B] text-white rounded-lg text-sm">
                      10
                    </span>
                    Uso de Cookies
                  </h2>
                  <div className="bg-white p-6 rounded-xl border border-gray-200">
                    <p className="text-gray-700 mb-4">
                      Utilizamos <strong>cookies de navegação</strong> para melhorar sua experiência
                      em nosso site. O uso de cookies de navegação devem ser consentidos pelo
                      usuário através de um aceite no Cookie Banner.
                    </p>

                    <div className="bg-blue-50 p-4 rounded-lg mb-4">
                      <p className="text-sm text-gray-700">
                        <strong>Importante:</strong> O fato de o usuário não aceitar o uso de
                        cookies não impede a sua navegação.
                      </p>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <Shield className="w-5 h-5 text-[#2C3E6B] flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-gray-700">
                          Os dados de cookies serão <strong>expirados após 12 meses</strong> -
                          conforme indica a GDPR - ou após não serem mais necessários
                        </p>
                      </div>

                      <div className="flex items-start gap-3">
                        <Shield className="w-5 h-5 text-[#2C3E6B] flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-gray-700">
                          A LGPD não estipula uma data limite para expiração dos cookies, porém é
                          baseada no <strong>princípio da necessidade</strong>: se o dado não é mais
                          necessário, ele se torna inválido perante a lei
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* 11. Alterações na Política de Privacidade */}
                <section className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 bg-[#2C3E6B] text-white rounded-lg text-sm">
                      11
                    </span>
                    Alterações na Política de Privacidade
                  </h2>
                  <div className="bg-white p-6 rounded-xl border border-gray-200">
                    <p className="text-gray-700">
                      A Geriatria Novo Lar se reserva o direito de{' '}
                      <strong>alterar os termos e a política de uso e privacidade</strong> a
                      qualquer momento, sem necessidade de aviso prévio. Todas as alterações e
                      atualizações serão redigidas neste documento.
                    </p>
                  </div>
                </section>

                {/* Contato */}
                <section className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 bg-[#2C3E6B] text-white rounded-lg text-sm">
                      <Mail className="w-5 h-5" />
                    </span>
                    Entre em Contato
                  </h2>
                  <div className="bg-gradient-to-br from-[#2C3E6B] to-[#2E7B7F] p-8 rounded-xl text-white">
                    <p className="mb-6">
                      Para dúvidas sobre esta Política de Privacidade, exercer seus direitos ou
                      questões sobre proteção de dados, entre em contato:
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Mail className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-sm text-white/80 mb-1">E-mail</p>
                          <a
                            href={`mailto:${COMPANY_CONTACT.email}`}
                            className="font-semibold hover:text-white/90 transition-colors"
                          >
                            {COMPANY_CONTACT.email}
                          </a>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Phone className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-sm text-white/80 mb-1">Telefone</p>
                          <a
                            href={`tel:${COMPANY_CONTACT.centralPhoneDigits}`}
                            className="font-semibold hover:text-white/90 transition-colors"
                          >
                            {COMPANY_CONTACT.centralPhoneDisplay}
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 pt-6 border-t border-white/20">
                      <p className="text-sm text-white/90">
                        <strong>Encarregado de Proteção de Dados (DPO):</strong> Geriatria Novo Lar
                        <br />
                        Responderemos às solicitações conforme previsto na LGPD.
                      </p>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton
        phoneNumber={COMPANY_CONTACT.whatsappDigits}
        ariaLabel="Entre em contato via WhatsApp"
      />
      <MobileBottomBar
        phoneNumber={COMPANY_CONTACT.centralPhoneDigits}
        phoneDisplay={COMPANY_CONTACT.centralPhoneDisplay}
        whatsappNumber={COMPANY_CONTACT.whatsappDigits}
      />
    </>
  )
}

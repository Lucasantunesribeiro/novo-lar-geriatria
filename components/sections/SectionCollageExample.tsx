/**
 * SectionCollageExample.tsx
 *
 * Exemplo de uso do componente SectionCollage
 *
 * Este arquivo demonstra como usar o SectionCollage em diferentes contextos,
 * com layout padrão (colagem à esquerda) e invertido (colagem à direita).
 */

import SectionCollage from './SectionCollage'

export default function ExampleUsage() {
  return (
    <div>
      {/* Exemplo 1: Layout padrão (colagem à esquerda) */}
      <SectionCollage
        title="Nossa Estrutura Moderna"
        description="Ambientes projetados pensando no conforto e bem-estar de nossos residentes, com infraestrutura completa e acessível."
        cta={{
          label: 'Conheça nossas instalações',
          href: '/instalacoes',
        }}
        images={[
          {
            src: '/images/estrutura-principal.jpg',
            alt: 'Vista geral da estrutura principal',
          },
          {
            src: '/images/sala-convivencia.jpg',
            alt: 'Sala de convivência',
          },
          {
            src: '/images/jardim-externo.jpg',
            alt: 'Jardim externo',
          },
          {
            src: '/images/quarto-individual.jpg',
            alt: 'Quarto individual',
          },
        ]}
      />

      {/* Exemplo 2: Layout invertido (colagem à direita, texto à esquerda) */}
      <SectionCollage
        title="Nossa Equipe Especializada"
        description="Profissionais altamente qualificados dedicados ao cuidado integral de cada residente."
        cta={{
          label: 'Conheça nossa equipe',
          href: '/equipe',
        }}
        images={[
          {
            src: '/images/equipe-medica.jpg',
            alt: 'Equipe médica',
          },
          {
            src: '/images/enfermagem.jpg',
            alt: 'Equipe de enfermagem',
          },
          {
            src: '/images/fisioterapia.jpg',
            alt: 'Sessão de fisioterapia',
          },
          {
            src: '/images/cuidadores.jpg',
            alt: 'Cuidadores especializados',
          },
        ]}
        reverse={true}
      />

      {/* Exemplo 3: Sem CTA */}
      <SectionCollage
        title="Atividades e Lazer"
        description="Programação diversificada de atividades para manter nossos residentes ativos e felizes."
        images={[
          {
            src: '/images/atividade-1.jpg',
            alt: 'Atividade recreativa',
          },
          {
            src: '/images/atividade-2.jpg',
            alt: 'Oficina de artesanato',
          },
          {
            src: '/images/atividade-3.jpg',
            alt: 'Sessão de música',
          },
          {
            src: '/images/atividade-4.jpg',
            alt: 'Exercícios em grupo',
          },
        ]}
      />
    </div>
  )
}

/**
 * NOTAS DE IMPLEMENTAÇÃO:
 *
 * 1. Cores do CTA:
 *    O componente NÃO define cores. Para estilizar o botão CTA, adicione
 *    CSS global com a classe .section-collage-cta na página pai:
 *
 *    <style jsx global>{`
 *      .section-collage-cta {
 *        background: linear-gradient(135deg, #2E7B7F 0%, #2C3E6B 100%);
 *        color: white;
 *      }
 *      .section-collage-cta:hover {
 *        background: linear-gradient(135deg, #3d8b8f 0%, #1f2d4f 100%);
 *      }
 *    `}</style>
 *
 * 2. Responsividade:
 *    - Mobile (<= md): Stack vertical com colagem em grid 2x2
 *    - Desktop (> md): Grid 12 colunas com colagem e texto lado a lado
 *
 * 3. Imagens:
 *    - Ideal: 4 imagens
 *    - Mínimo: 1 imagem (componente preenche automaticamente)
 *    - Primeira imagem: maior e destacada
 *    - Demais: auxiliares com offsets para criar profundidade
 *
 * 4. Acessibilidade:
 *    - Sempre forneça alt text descritivo
 *    - Hierarquia semântica mantida (h2 para título)
 *    - Focus visível no CTA
 */


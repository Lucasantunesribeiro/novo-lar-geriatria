import type { ReactElement } from 'react'

import AboutExperienceSection from '@/components/about/AboutExperienceSection'
import AboutHero from '@/components/about/AboutHero'
import AboutStructureShowcase from '@/components/about/AboutStructureShowcase'
import CommitmentSection from '@/components/about/CommitmentSection'
import EnvironmentShowcaseSection from '@/components/about/EnvironmentShowcaseSection'
import FinalCTASection from '@/components/about/FinalCTASection'
import ProcessStepsSection from '@/components/about/ProcessStepsSection'
import ThreePillarsSection from '@/components/about/ThreePillarsSection'
import EstruturaAmbientesMasonry from '@/components/estrutura/EstruturaAmbientesMasonry'
import EstruturaCareCTA from '@/components/estrutura/EstruturaCareCTA'
import EstruturaCareProcess from '@/components/estrutura/EstruturaCareProcess'
import EstruturaConfortoDetalhe from '@/components/estrutura/EstruturaConfortoDetalhe'
import EstruturaFamilyFeatures from '@/components/estrutura/EstruturaFamilyFeatures'
import EstruturaFigmaHero from '@/components/estrutura/EstruturaFigmaHero'
import EstruturaFinalCTA from '@/components/estrutura/EstruturaFinalCTA'
import EstruturaGaleriaFinal from '@/components/estrutura/EstruturaGaleriaFinal'
import EstruturaHospedagemContent from '@/components/estrutura/EstruturaHospedagemContent'
import EstruturaModalidades from '@/components/estrutura/EstruturaModalidades'
import EstruturaUnitsShowcase from '@/components/estrutura/EstruturaUnitsShowcase'
import { blocoOculto } from '@/lib/cms/estilo'
import type { BlocoDaPagina } from '@/types/cms-blocos'

/**
 * Traducao de um bloco do Studio para o componente real da pagina.
 *
 * Ponto central da correcao: o Studio NAO define mais o layout — ele so
 * preenche os componentes que a pagina ja tinha. Um bloco desconhecido e
 * simplesmente ignorado, nunca substitui a pagina por outra coisa.
 */
export function renderBloco(bloco: BlocoDaPagina, chave: string): ReactElement | null {
  if (blocoOculto(bloco.estilo)) {
    return null
  }

  switch (bloco._type) {
    case 'sobreHero':
      return (
        <AboutHero
          key={chave}
          eyebrow={bloco.eyebrow}
          title={bloco.titulo}
          description={bloco.descricao}
          estiloTitulo={bloco.estiloTitulo}
          estiloDescricao={bloco.estiloDescricao}
          estilo={bloco.estilo}
        />
      )

    case 'sobreVitrineEstrutura':
      return (
        <AboutStructureShowcase
          key={chave}
          titulo={bloco.titulo}
          descricao={bloco.descricao}
          imagem1={bloco.imagem1}
          imagem2={bloco.imagem2}
          imagem3={bloco.imagem3}
          imagem4={bloco.imagem4}
          estiloTitulo={bloco.estiloTitulo}
          estiloDescricao={bloco.estiloDescricao}
          estilo={bloco.estilo}
        />
      )

    case 'sobreExperiencia':
      return (
        <AboutExperienceSection
          key={chave}
          titulo={bloco.titulo}
          descricao={bloco.descricao}
          mostrarEstrelas={bloco.mostrarEstrelas}
          cartoes={bloco.cartoes}
          imagem1={bloco.imagem1}
          imagem2={bloco.imagem2}
          estiloTitulo={bloco.estiloTitulo}
          estiloDescricao={bloco.estiloDescricao}
          estilo={bloco.estilo}
        />
      )

    case 'sobreTresPilares':
      return (
        <ThreePillarsSection
          key={chave}
          titulo={bloco.titulo}
          descricao={bloco.descricao}
          pilares={bloco.pilares}
          estiloTitulo={bloco.estiloTitulo}
          estiloDescricao={bloco.estiloDescricao}
          estilo={bloco.estilo}
        />
      )

    case 'sobreAmbientes':
      return (
        <EnvironmentShowcaseSection
          key={chave}
          titulo={bloco.titulo}
          descricao={bloco.descricao}
          botaoTexto={bloco.botaoTexto}
          botaoHref={bloco.botaoHref}
          imagens={bloco.imagens}
          estiloTitulo={bloco.estiloTitulo}
          estiloDescricao={bloco.estiloDescricao}
          estilo={bloco.estilo}
        />
      )

    case 'sobreEtapas':
      return (
        <ProcessStepsSection
          key={chave}
          titulo={bloco.titulo}
          descricao={bloco.descricao}
          etapas={bloco.etapas}
          estiloTitulo={bloco.estiloTitulo}
          estiloDescricao={bloco.estiloDescricao}
          estilo={bloco.estilo}
        />
      )

    case 'sobreCompromisso':
      return (
        <CommitmentSection
          key={chave}
          titulo={bloco.titulo}
          descricao={bloco.descricao}
          imagem={bloco.imagem}
          estiloTitulo={bloco.estiloTitulo}
          estiloDescricao={bloco.estiloDescricao}
          estilo={bloco.estilo}
        />
      )

    case 'sobreCtaFinal':
      return (
        <FinalCTASection
          key={chave}
          title={bloco.titulo}
          description={bloco.descricao}
          etiqueta={bloco.etiqueta}
          cartoes={bloco.cartoes}
          estiloTitulo={bloco.estiloTitulo}
          estiloDescricao={bloco.estiloDescricao}
          estilo={bloco.estilo}
        />
      )

    // ── /sobre/estrutura ──────────────────────────────────────
    case 'estruturaHero':
      return (
        <EstruturaFigmaHero
          key={chave}
          eyebrow={bloco.eyebrow}
          title={bloco.titulo}
          description={bloco.descricao}
          estiloTitulo={bloco.estiloTitulo}
          estiloDescricao={bloco.estiloDescricao}
          estilo={bloco.estilo}
        />
      )

    case 'estruturaHospedagem':
      return (
        <EstruturaHospedagemContent
          key={chave}
          paragrafo1={bloco.paragrafo1}
          paragrafo2={bloco.paragrafo2 as never}
          imagem1={bloco.imagem1}
          imagem2={bloco.imagem2}
          imagem3={bloco.imagem3}
          imagem4={bloco.imagem4}
          tituloLista={bloco.tituloLista}
          itens={bloco.itens}
          estiloDescricao={bloco.estiloDescricao}
          estilo={bloco.estilo}
        />
      )

    case 'estruturaProcesso':
      return (
        <EstruturaCareProcess
          key={chave}
          etiqueta={bloco.etiqueta}
          titulo={bloco.titulo}
          descricao={bloco.descricao}
          cartoes={bloco.cartoes}
          estiloTitulo={bloco.estiloTitulo}
          estiloDescricao={bloco.estiloDescricao}
          estilo={bloco.estilo}
        />
      )

    case 'estruturaFamilias':
      return (
        <EstruturaFamilyFeatures
          key={chave}
          titulo={bloco.titulo}
          descricao={bloco.descricao}
          cartoes={bloco.cartoes}
          estiloTitulo={bloco.estiloTitulo}
          estiloDescricao={bloco.estiloDescricao}
          estilo={bloco.estilo}
        />
      )

    case 'estruturaAmbientes':
      return (
        <EstruturaAmbientesMasonry
          key={chave}
          titulo={bloco.titulo}
          descricao={bloco.descricao}
          imagens={bloco.imagens}
          estiloTitulo={bloco.estiloTitulo}
          estiloDescricao={bloco.estiloDescricao}
          estilo={bloco.estilo}
        />
      )

    case 'estruturaConforto':
      return (
        <EstruturaConfortoDetalhe
          key={chave}
          titulo={bloco.titulo}
          descricao={bloco.descricao}
          imagem={bloco.imagem}
          itens={bloco.itens}
          estiloTitulo={bloco.estiloTitulo}
          estiloDescricao={bloco.estiloDescricao}
          estilo={bloco.estilo}
        />
      )

    case 'estruturaGaleriaFinal':
      return (
        <EstruturaGaleriaFinal
          key={chave}
          imagem1={bloco.imagem1}
          imagem2={bloco.imagem2}
          estilo={bloco.estilo}
        />
      )

    case 'estruturaUnidades':
      return (
        <EstruturaUnitsShowcase
          key={chave}
          titulo={bloco.titulo}
          descricao={bloco.descricao}
          unidades={bloco.unidades}
          estiloTitulo={bloco.estiloTitulo}
          estiloDescricao={bloco.estiloDescricao}
          estilo={bloco.estilo}
        />
      )

    case 'estruturaCareCta':
      return (
        <EstruturaCareCTA
          key={chave}
          etiqueta={bloco.etiqueta}
          titulo={bloco.titulo}
          descricao={bloco.descricao}
          cartoes={bloco.cartoes}
          estiloTitulo={bloco.estiloTitulo}
          estiloDescricao={bloco.estiloDescricao}
          estilo={bloco.estilo}
        />
      )

    case 'estruturaCtaFinal':
      return (
        <EstruturaFinalCTA
          key={chave}
          title={bloco.titulo}
          description={bloco.descricao}
          buttonLabel={bloco.botaoTexto}
          whatsappHref={bloco.botaoHref}
          estiloTitulo={bloco.estiloTitulo}
          estiloDescricao={bloco.estiloDescricao}
          estilo={bloco.estilo}
        />
      )

    // ── /servicos e /contato ──────────────────────────────────
    case 'servicosModalidades':
      return (
        <EstruturaModalidades
          key={chave}
          etiqueta={bloco.etiqueta}
          titulo={bloco.titulo}
          descricao={bloco.descricao}
          modalidades={bloco.modalidades}
          estiloTitulo={bloco.estiloTitulo}
          estiloDescricao={bloco.estiloDescricao}
          estilo={bloco.estilo}
        />
      )

    // `servicosLista`, `contatoHero` e `contatoFormulario` sao desenhados
    // dentro da propria pagina (dependem de dados que so ela tem), por isso
    // nao aparecem aqui. Ver app/(routes)/servicos/page.tsx e /contato.
    default:
      return null
  }
}

/**
 * Renderiza os blocos vindos do Studio.
 *
 * Devolve `null` quando nao ha nada util — a pagina entao desenha o layout
 * padrao dela, exatamente como sempre foi.
 */
export function renderBlocos(
  blocos: BlocoDaPagina[] | undefined,
  tiposDaPagina: ReadonlyArray<BlocoDaPagina['_type']>
): ReactElement[] | null {
  if (!blocos || blocos.length === 0) {
    return null
  }

  // So blocos que pertencem a esta pagina — um bloco de outra pagina colado
  // aqui por engano nao entra no ar.
  const permitidos = new Set<string>(tiposDaPagina)
  const elementos = blocos
    .filter((bloco) => permitidos.has(bloco._type))
    .map((bloco, i) => renderBloco(bloco, bloco._key || `${bloco._type}-${i}`))
    .filter((elemento): elemento is ReactElement => elemento !== null)

  return elementos.length > 0 ? elementos : null
}

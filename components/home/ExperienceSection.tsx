export default function ExperienceSection() {
  return (
    <section
      className="flex flex-col items-start lg:items-end px-5 py-10 lg:px-[208px] lg:py-[80px]"
      style={{
        background: 'linear-gradient(180deg, #FFFFFF 0%, #F9FAFB 100%)',
        width: '100%',
      }}
    >
      <div
        className="flex flex-col items-start gap-5 lg:gap-[24px] w-full lg:w-auto"
        style={{
          maxWidth: '522px',
        }}
      >
        {/* Badge */}
        <span
          className="text-xs lg:text-[14px]"
          style={{
            fontFamily: 'Arial',
            fontWeight: 700,
            lineHeight: '1.4',
            letterSpacing: '0.7px',
            textTransform: 'uppercase',
            color: '#D4A853',
          }}
        >
          Cuidado especializado com mais de 30 anos de experiência
        </span>

        {/* Heading */}
        <h2
          className="text-3xl lg:text-[36px]"
          style={{
            fontFamily: 'Arial',
            fontWeight: 700,
            lineHeight: '1.1',
            color: '#2C3E6B',
          }}
        >
          Experiência e Confiança
        </h2>

        {/* Texto Institucional */}
        <p
          className="text-base lg:text-[18px]"
          style={{
            fontFamily: 'Arial',
            fontWeight: 400,
            lineHeight: '1.6',
            color: '#364153',
          }}
        >
          A Novo Lar nasceu da vontade de oferecer um lar verdadeiramente acolhedor para idosos que precisam de cuidados especializados. Com mais de três décadas de experiência, construímos unidades que combinam infraestrutura moderna, equipe multidisciplinar e um olhar humanizado sobre o envelhecimento.
        </p>

        <p
          className="text-base lg:text-[18px]"
          style={{
            fontFamily: 'Arial',
            fontWeight: 400,
            lineHeight: '1.6',
            color: '#364153',
          }}
        >
          Cada residente é acompanhado de forma individualizada, com rotina personalizada e atenção constante. A família participa ativamente e tem acesso transparente a tudo que acontece no dia a dia. Aqui, o cuidado vai além do técnico — é sobre respeito, dignidade e qualidade de vida.
        </p>
      </div>
    </section>
  )
}

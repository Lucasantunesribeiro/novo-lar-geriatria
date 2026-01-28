export default function StructureShowcase() {
  return (
    <div
      style={{
        width: '100%',
        background: 'linear-gradient(135deg, rgba(13, 26, 54, 0.95) 0%, rgba(29, 51, 100, 0.9) 50%, rgba(46, 123, 127, 0.85) 100%)',
      }}
    >
      <section
        className="flex flex-col lg:flex-row justify-center items-center px-5 py-10 lg:px-[112px] lg:py-[120px] gap-8 lg:gap-[48px]"
        style={{
          width: '100%',
          maxWidth: '1440px',
          margin: '0 auto',
        }}
      >
        {/* Group 2 - Grid de Imagens */}
        <div
          className="w-full max-w-[280px] h-[260px] lg:w-[484px] lg:h-[454px]"
          style={{
            position: 'relative',
            flex: 'none',
            order: 0,
            flexGrow: 0,
          }}
        >
          {/* Área comum - Moinhos de Vento */}
          <div
            style={{
              position: 'absolute',
              left: '0%',
              right: '52%',
              top: '0%',
              bottom: '52%',
              background: 'linear-gradient(135deg, #F3F4F6 0%, #F9FAFB 50%, #FFFFFF 100%)',
              boxShadow: '0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 8px 10px -6px rgba(0, 0, 0, 0.1)',
              borderRadius: '16px',
            }}
          />

          {/* Sala de estar */}
          <div
            style={{
              position: 'absolute',
              left: '0%',
              right: '52%',
              top: '52%',
              bottom: '0%',
              background: 'linear-gradient(135deg, #F3F4F6 0%, #F9FAFB 50%, #FFFFFF 100%)',
              boxShadow: '0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 8px 10px -6px rgba(0, 0, 0, 0.1)',
              borderRadius: '16px',
            }}
          />

          {/* Recepção - Passo d'Areia */}
          <div
            style={{
              position: 'absolute',
              left: '52%',
              right: '0%',
              top: '68%',
              bottom: '0%',
              background: 'linear-gradient(135deg, #F3F4F6 0%, #F9FAFB 50%, #FFFFFF 100%)',
              boxShadow: '0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 8px 10px -6px rgba(0, 0, 0, 0.1)',
              borderRadius: '16px',
            }}
          />

          {/* Área externa - Moinhos de Vento */}
          <div
            style={{
              position: 'absolute',
              left: '52%',
              right: '0%',
              top: '0%',
              bottom: '32%',
              background: 'linear-gradient(135deg, #F3F4F6 0%, #F9FAFB 50%, #FFFFFF 100%)',
              boxShadow: '0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 8px 10px -6px rgba(0, 0, 0, 0.1)',
              borderRadius: '16px',
            }}
          />
        </div>

        {/* Card de Informação */}
        <div className="w-full lg:w-auto">
          <div
            className="w-full lg:w-[452px] p-6 lg:p-[32px]"
            style={{
              boxSizing: 'border-box',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: '16px',
              background: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -4px rgba(0, 0, 0, 0.1)',
              backdropFilter: 'blur(4px)',
              borderRadius: '24px',
            }}
          >
            {/* Veja Nossa Estrutura */}
            <h2
              className="text-2xl lg:text-[32px]"
              style={{
                fontFamily: 'Arial',
                fontWeight: 700,
                lineHeight: '1.2',
                letterSpacing: '-1.2px',
                color: '#FFFFFF',
              }}
            >
              Veja Nossa Estrutura
            </h2>

            {/* Texto descritivo */}
            <p
              className="text-sm lg:text-[14px]"
              style={{
                fontFamily: 'Arial',
                fontWeight: 400,
                lineHeight: '1.8',
                color: '#FFFFFF',
              }}
            >
              Ambientes amplos, seguros e preparados para oferecer conforto, acessibilidade e bem-estar no dia a dia. Cada espaço foi pensado para que o residente se sinta em casa e para que a família tenha a tranquilidade de saber que tudo foi cuidadosamente planejado.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

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
          className="flex flex-row gap-[16px] w-[312px] h-[300px]"
          style={{
            flex: 'none',
            order: 0,
            flexGrow: 0,
          }}
        >
          {/* Coluna 1 (Esquerda) */}
          <div className="flex flex-col gap-[16px] w-[148px]">
            {/* Área comum - Moinhos de Vento */}
            <div
              className="w-full h-[89px] rounded-2xl shadow-xl overflow-hidden"
              style={{ background: '#E5E7EB' }}
            >
              <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('/placeholder-image.jpg')", background: 'linear-gradient(135deg, #F3F4F6 0%, #E5E7EB 50%, #D1D5DB 100%)' }} />
            </div>

            {/* Sala de estar */}
            <div
              className="w-full h-[195px] rounded-2xl shadow-xl overflow-hidden"
              style={{ background: '#E5E7EB' }}
            >
              <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('/placeholder-image.jpg')", background: 'linear-gradient(135deg, #F3F4F6 0%, #E5E7EB 50%, #D1D5DB 100%)' }} />
            </div>
          </div>

          {/* Coluna 2 (Direita) */}
          <div className="flex flex-col gap-[16px] w-[148px]">
            {/* Área externa - Moinhos de Vento */}
            <div
              className="w-full h-[189px] rounded-2xl shadow-xl overflow-hidden"
              style={{ background: '#E5E7EB' }}
            >
              <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('/placeholder-image.jpg')", background: 'linear-gradient(135deg, #F3F4F6 0%, #E5E7EB 50%, #D1D5DB 100%)' }} />
            </div>

            {/* Recepção - Passo d'Areia */}
            <div
              className="w-full h-[95px] rounded-2xl shadow-xl overflow-hidden"
              style={{ background: '#E5E7EB' }}
            >
              <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('/placeholder-image.jpg')", background: 'linear-gradient(135deg, #F3F4F6 0%, #E5E7EB 50%, #D1D5DB 100%)' }} />
            </div>
          </div>
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

export default function EnvironmentShowcase() {
  return (
    <div
      style={{
        width: '100%',
        background: 'linear-gradient(119.72deg, #F8F9FA 0%, #E9ECEF 100%)',
      }}
    >
      <section
        className="flex flex-col items-center px-5 py-10 lg:px-[130px] lg:py-[80px]"
        style={{
          width: '100%',
        }}
      >
        <div
          className="flex flex-col items-center gap-8 lg:gap-[48px] w-full"
          style={{
            maxWidth: '1180px',
          }}
        >
          {/* Header */}
          <div className="flex flex-col items-center gap-4 w-full">
            <h2
              className="text-2xl lg:text-[36px] lg:leading-[40px] text-center"
              style={{
                fontFamily: 'Arial',
                fontWeight: 700,
                color: '#2C3E6B',
              }}
            >
              Ambientes pensados para acolher
            </h2>

            <p
              className="text-base lg:text-[18px] lg:leading-[29px] text-center"
              style={{
                fontFamily: 'Arial',
                fontWeight: 400,
                color: '#4A5565',
                maxWidth: '800px',
              }}
            >
              As unidades Novo Lar possuem suítes individuais e duplas, espaços de convivência banhados por luz natural, jardins, salas terapêuticas e estruturas completas para reabilitação e cuidados clínicos.
            </p>
          </div>

          {/* Grid de Imagens - 6 placeholders */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-[16px] w-full">
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <div
                key={index}
                className="w-full h-48 lg:h-[220px]"
                style={{
                  background: 'linear-gradient(135deg, #F3F4F6 0%, #F9FAFB 50%, #FFFFFF 100%)',
                  boxShadow: '0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -2px rgba(0, 0, 0, 0.1)',
                  borderRadius: '16px',
                }}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

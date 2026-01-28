export default function FinalStructureImages() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: '0px',
        width: '100%',
        background: '#FFFFFF',
      }}
    >
      <section
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '80px 130px',
          gap: '24px',
          width: '1440px',
          height: '602px',
          margin: '0 auto',
        }}
      >
        {/* Image 1 */}
        <div
          style={{
            width: '578px',
            height: '442px',
            background: 'linear-gradient(135deg, #F3F4F6 0%, #F9FAFB 50%, #FFFFFF 100%)',
            boxShadow: '0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -4px rgba(0, 0, 0, 0.1)',
            borderRadius: '24px',
            flex: 'none',
            order: 0,
            flexGrow: 0,
          }}
        />

        {/* Image 2 */}
        <div
          style={{
            width: '578px',
            height: '442px',
            background: 'linear-gradient(135deg, #F3F4F6 0%, #F9FAFB 50%, #FFFFFF 100%)',
            boxShadow: '0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -4px rgba(0, 0, 0, 0.1)',
            borderRadius: '24px',
            flex: 'none',
            order: 1,
            flexGrow: 0,
          }}
        />
      </section>
    </div>
  )
}

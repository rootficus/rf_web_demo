'use client'

const logos = ['/Group-1561529838-1.png']

const LogoCarousel = () => (
  <div className="relative z-[5] flex items-center justify-center w-full max-w-screen-xl mx-auto px-4">
    {logos.map((src, idx) => (
      <div key={idx} className="relative w-full max-w-[924px]">
        {/* Background Image */}
        <img
          src={src}
          alt={`Client Logo ${idx + 1}`}
          className="w-full h-auto rounded-[40px] object-contain"
        />

        {/* Gradient Button */}
        <div
          className="absolute top-0 right-[-58px] flex items-center justify-center p-7 gap-2"
          style={{
            width: '116px',
            height: '116px',
            background: 'linear-gradient(225deg, #F76680 0%, #57007B 100%)',
            boxShadow: '0px 7.96px 97.52px rgba(0, 0, 0, 0.15)',
            borderRadius: '30px',
          }}
        >
          <div
            style={{
              width: '60px',
              height: '60px',
              background: '#FFFFFF',
              transform: 'rotate(45deg)',
            }}
          />
        </div>
      </div>
    ))}
  </div>
)

export default LogoCarousel

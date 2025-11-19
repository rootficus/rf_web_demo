'use client'

export default function AndroidHeroSection() {
  return (
    <section className="w-full flex justify-center items-center px-4 py-24">
      <div className="flex flex-col justify-center items-center gap-[22px] max-w-[1390px] text-center">
        <h1 className="text-[48px] md:text-[90px] leading-[60px] md:leading-[112px] font-bold font-inter text-[#1D1D21]">
          Leading{' '}
          <span className="bg-gradient-to-br from-[#6675F7] to-[#57007B] bg-clip-text text-transparent">
            Android App Development
          </span>{' '}
          Firm
        </h1>
        <p className="max-w-[1033px] text-[18px] md:text-[24px] leading-[36px] md:leading-[48px] text-[#718096] font-inter font-normal">
          Our Android application development company creates enterprise-grade, user friendly, and impactful iOS apps
          by using ‘state of the art’ technologies that perfectly facilitate the digital transformation of enterprises.
        </p>
      </div>
    </section>
  )
}

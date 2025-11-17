'use client'

import Image from 'next/image'

export default function FooterCTA() {
  return (
    <section className="relative w-full flex flex-row items-center gap-[90px] px-4 md:px-12 lg:px-24 pb-[140px] max-w-[1790.46px] h-[1027px] mx-auto overflow-hidden">
      {/* Left Visual Group */}
      <div className="relative w-[763px] h-[887px] flex-shrink-0">
        {/* Rectangle 2941 */}
        <div className="absolute top-[0.28px] left-[0.08px] w-[693.69px] h-[886.15px] bg-[#D9D9D9] rounded-[41.5384px]" />
        {/* Rectangle 2942 */}
        <div className="absolute top-[30.65px] left-[89.23px] w-[607.85px] h-[776.77px] bg-[rgba(66,84,246,0.1)] rounded-[41.5384px] rotate-[5deg]" />
        {/* Group 1171274652 */}
        <Image
          src="/Group 1171274652.png"
          alt="Decorative Graphic"
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Right Content Block */}
      <div className="flex flex-col items-start gap-[76.15px] w-[937.46px] h-[760.31px]">
        {/* Heading and Description */}
        <div className="flex flex-col justify-center items-start gap-[30.46px] w-[919.38px] h-[251.46px]">
          <h2 className="w-[708px] h-[77px] text-[64px] leading-[77px] font-bold tracking-[-0.04em] font-inter bg-gradient-to-br from-[#F76680] to-[#57007B] bg-clip-text text-transparent">
            Simple Steps, Big Moves
          </h2>
          <p className="w-[919.38px] h-[144px] text-[24px] leading-[48px] font-medium text-[#718096] font-inter">
            Lorem ipsum dolor sit amet consectetur. Aliquet fames neque turpis morbi amet proin nunc commodo pretium.
            Faucibus at cum ac auctor. Quis vestibulum pharetra arcu platea. Egestas ultrices dictum sit.
          </p>
        </div>

        {/* Action Cards */}
        <div className="flex flex-row items-start gap-[33.23px] w-[937.46px] h-[280px]">
          {/* Card 1: Schedule a Meeting */}
          <div className="relative flex flex-col justify-between items-start p-[40px] gap-[13.85px] w-[290.33px] h-[280px] bg-[#1D1D21] rounded-[30px] text-white">
            <div className="relative w-[76.58px] h-[76.58px] mx-auto">
              <div className="absolute w-full h-full bg-gradient-to-br from-[#F76680] to-[#57007B] rounded-[14.3592px]" />
              <div className="absolute w-[53.13px] h-[53.13px] top-[30.9px] left-[33.03px] rotate-[105deg] opacity-40 bg-gradient-to-br from-white to-transparent rounded-full" />
              <div className="absolute w-[53.13px] h-[53.13px] top-[-14.32px] left-[-22.72px] rotate-[105deg] opacity-40 bg-gradient-to-br from-white to-transparent rounded-full" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[38.77px] h-[38.77px] bg-white rounded" />
              </div>
            </div>
            <div className="mx-auto text-[28px] leading-[39px] font-bold font-inter text-center w-[220.15px] h-[78px]">
              Schedule a Meeting
            </div>
          </div>

          {/* Card 2: Call Us Now */}
          <div className="relative flex flex-col justify-between items-start p-[40px] gap-[13.85px] w-[290.33px] h-[280px] bg-white rounded-[30px] text-[#1D1D21]">
            <div className="relative w-[76.58px] h-[76.58px] mx-auto bg-[rgba(12,11,72,0.1)] rounded-[14.3592px]">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[38.29px] h-[38.29px] bg-[#1D1D21] border border-[#1D1D21] rounded" />
              </div>
            </div>
            <div className="mx-auto text-[28px] leading-[39px] font-medium font-inter text-center w-[210.33px] h-[78px]">
              Call Us Now
            </div>
          </div>

          {/* Card 3: Request a Quote */}
          <div className="relative flex flex-col justify-between items-start p-[40px] gap-[13.85px] w-[290.33px] h-[280px] bg-white rounded-[30px] text-[#1D1D21]">
            <div className="relative w-[76.58px] h-[76.58px] mx-auto bg-[rgba(12,11,72,0.1)] rounded-[14.3592px]">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[38.29px] h-[38.29px] bg-[#1D1D21] rounded" />
              </div>
            </div>
            <div className="mx-auto text-[28px] leading-[39px] font-medium font-inter text-center w-[210.33px] h-[78px]">
              Request a Quote
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="relative w-[304.54px] h-[76.54px] mt-[-96.923px] flex flex-col items-center justify-center">
          <button className="flex flex-row justify-center items-center gap-[13.85px] px-[48.4615px] py-[20.7692px] w-full h-full bg-gradient-to-br from-[#6675F7] to-[#57007B] rounded-[16.6154px] text-white text-[22.1538px] font-bold font-manrope">
            Contact Us Now
            <span className="w-[20.77px] h-[16.62px] bg-white transform rotate-180" />
          </button>
          <div className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 w-[170.31px] h-[23.54px] bg-[#4254F6] opacity-60 blur-[44.3077px] rounded-full" />
        </div>
      </div>
    </section>
  )
}

'use client'

export default function FooterCTA() {
  return (
    <section className="w-full bg-[#FAFAFA] py-[140px] px-4 md:px-12 lg:px-24 flex flex-col items-center gap-[76px]">
      {/* Heading and Description */}
      <div className="flex flex-col items-start gap-[30px] max-w-[919px]">
        <h2 className="text-[64px] leading-[77px] font-bold tracking-[-0.04em] font-inter bg-gradient-to-br from-[#F76680] to-[#57007B] bg-clip-text text-transparent">
          Simple Steps, Big Moves
        </h2>
        <p className="text-[24px] leading-[48px] text-[#718096] font-inter font-medium">
          Lorem ipsum dolor sit amet consectetur. Aliquet fames neque turpis morbi amet proin nunc commodo pretium.
          Faucibus at cum ac auctor. Quis vestibulum pharetra arcu platea. Egestas ultrices dictum sit.
        </p>
      </div>

      {/* Action Cards */}
      <div className="flex flex-wrap justify-start gap-[33px] max-w-[937px]">
        {/* Card 1: Schedule a Meeting */}
        <div className="flex flex-col justify-between bg-[#1D1D21] text-white rounded-[30px] p-10 w-[290px] h-[280px]">
          <div className="w-[76px] h-[76px] bg-gradient-to-br from-[#F76680] to-[#57007B] rounded-[14px] relative mx-auto">
            <div className="absolute w-[53px] h-[53px] top-[30px] left-[33px] opacity-40 rotate-[105deg] bg-gradient-to-br from-white to-transparent rounded-full" />
            <div className="absolute w-[53px] h-[53px] top-[-14px] left-[-22px] opacity-40 rotate-[105deg] bg-gradient-to-br from-white to-transparent rounded-full" />
            {/* Icon placeholder */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[38px] h-[38px] bg-white rounded" />
            </div>
          </div>
          <div className="mt-4 text-[28px] leading-[39px] font-bold font-inter text-center mx-auto">
            Schedule a Meeting
          </div>
        </div>

        {/* Card 2: Call Us Now */}
        <div className="flex flex-col justify-between bg-white text-[#1D1D21] rounded-[30px] p-10 w-[290px] h-[280px]">
          <div className="w-[76px] h-[76px] bg-[rgba(12,11,72,0.1)] rounded-[14px] relative mx-auto">
            {/* Icon placeholder */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[38px] h-[38px] bg-[#1D1D21] border border-[#1D1D21] rounded" />
            </div>
          </div>
          <div className="mt-4 text-[28px] leading-[39px] font-medium font-inter text-center mx-auto">
            Call Us Now
          </div>
        </div>

        {/* Card 3: Request a Quote */}
        <div className="flex flex-col justify-between bg-white text-[#1D1D21] rounded-[30px] p-10 w-[290px] h-[280px]">
          <div className="w-[76px] h-[76px] bg-[rgba(12,11,72,0.1)] rounded-[14px] relative mx-auto">
            {/* Icon placeholder */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[38px] h-[38px] bg-[#1D1D21] rounded" />
            </div>
          </div>
          <div className="mt-4 text-[28px] leading-[39px] font-medium font-inter text-center mx-auto">
            Request a Quote
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <div className="relative mt-[-96px]">
        <button className="flex items-center justify-center gap-[14px] px-[48px] py-[21px] bg-gradient-to-br from-[#6675F7] to-[#57007B] text-white text-[22px] font-bold font-manrope rounded-[16px] w-[304px] h-[76px]">
          Contact Us Now
          <span className="w-[20px] h-[16px] bg-white transform rotate-180" />
        </button>
        <div className="absolute bottom-[-20px] left-[50%] translate-x-[-50%] w-[170px] h-[24px] bg-[#4254F6] opacity-60 blur-[44px] rounded-full" />
      </div>
    </section>
  )
}

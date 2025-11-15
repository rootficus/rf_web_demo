'use client'

import Image from 'next/image'

export default function FooterVisualBlock() {
  return (
    <section className="relative w-full h-[1027px] flex flex-row items-center gap-[90px] px-0 pb-[140px] overflow-hidden">
      {/* Left Visual Layer */}
      <div className="relative w-[763px] h-[887px] flex-shrink-0">
        {/* Background Rectangle */}
        <div className="absolute top-[30px] left-[89px] w-[608px] h-[777px] bg-[rgba(66,84,246,0.1)] rounded-[41px] rotate-[5deg]" />
        {/* Base Rectangle */}
        <div className="absolute top-[0px] left-[0px] w-[694px] h-[886px] bg-[#D9D9D9] rounded-[41px]" />
        {/* Image Group */}
        <div className="absolute top-0 left-0 w-[763px] h-[887px]">
          <Image
            src="/images/group-1171274652.png" // Replace with actual image path
            alt="Visual Group"
            width={763}
            height={887}
            className="object-cover rounded-[41px]"
          />
        </div>
      </div>

      {/* Right Content */}
      <div className="flex flex-col items-start gap-[76px] w-[937px] h-[760px]">
        {/* Heading & Description */}
        <div className="flex flex-col justify-center items-start gap-[30px] w-[919px] h-[251px]">
          <h2 className="text-[64px] leading-[77px] font-bold tracking-[-0.04em] font-inter bg-gradient-to-br from-[#F76680] to-[#57007B] bg-clip-text text-transparent">
            Simple Steps, Big Moves
          </h2>
          <p className="text-[24px] leading-[48px] text-[#718096] font-inter font-medium">
            Lorem ipsum dolor sit amet consectetur. Aliquet fames neque turpis morbi amet proin nunc commodo pretium.
            Faucibus at cum ac auctor. Quis vestibulum pharetra arcu platea. Egestas ultrices dictum sit.
          </p>
        </div>

        {/* CTA Cards */}
        <div className="flex flex-row gap-[33px] w-[937px] h-[280px]">
          {/* Card 1 */}
          <div className="flex flex-col justify-between bg-[#1D1D21] text-white rounded-[30px] p-10 w-[290px] h-[280px]">
            <div className="w-[76px] h-[76px] bg-gradient-to-br from-[#F76680] to-[#57007B] rounded-[14px] mx-auto" />
            <div className="mt-4 text-[28px] leading-[39px] font-bold font-inter text-center">
              Schedule a Meeting
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col justify-between bg-white text-[#1D1D21] rounded-[30px] p-10 w-[290px] h-[280px]">
            <div className="w-[76px] h-[76px] bg-[rgba(12,11,72,0.1)] rounded-[14px] mx-auto" />
            <div className="mt-4 text-[28px] leading-[39px] font-medium font-inter text-center">
              Call Us Now
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col justify-between bg-white text-[#1D1D21] rounded-[30px] p-10 w-[290px] h-[280px]">
            <div className="w-[76px] h-[76px] bg-[rgba(12,11,72,0.1)] rounded-[14px] mx-auto" />
            <div className="mt-4 text-[28px] leading-[39px] font-medium font-inter text-center">
              Request a Quote
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

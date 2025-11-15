'use client'

import Heading from '@/components/atoms/Heading'
import ExpertiseText from './ExpertiseText'
import { expertiseIcons } from './expertiseData'
import Image from 'next/image'

export default function ExpertiseSection() {
  return (
    <section className="relative w-full max-w-[1990px] mx-auto px-4 pb-[140px] flex flex-col items-center gap-10 text-center overflow-hidden">
      {/* Blurred Gradient Strip */}
      <div className="absolute bottom-[200px] left-1/2 -translate-x-1/2 w-[1570px] h-[96px] rounded-full bg-gradient-to-br from-[#6675F7] to-[#57007B] blur-[62px] z-0" />

      {/* Radial Background Layer */}
      <div className="absolute inset-0 -z-10 w-[2563px] h-[2563px] left-1/2 -translate-x-1/2 top-[-735px] bg-[#FAFAFA] rounded-[60px]" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-[42px] w-[920px] mx-auto">
        <Heading
          text="Our Expertise has Many Faces"
          level={2}
          className="text-[#1D1D21] font-inter text-[64px] leading-[77px] font-bold"
        />
        <ExpertiseText />

        {/* Icon Grid */}
        <div className="flex flex-wrap justify-center gap-[250px] mt-10">
          {expertiseIcons.map((icon, idx) => (
            <div
              key={idx}
              className="w-[80px] h-[80px] rounded-full bg-[#EDEDED] flex items-center justify-center shadow-md"
            >
              <Image src={icon.src} alt={icon.name} width={40} height={40} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

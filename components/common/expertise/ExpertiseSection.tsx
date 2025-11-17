'use client'

import Image from 'next/image'

export default function ExpertiseSection() {
  return (
    <section className="relative w-full max-w-[1990px] mx-auto px-4 pb-[140px] flex flex-col items-center text-center overflow-hidden">
      {/* Blurred Gradient Strip */}
      {/* <div className="absolute bottom-[200px] left-1/2 -translate-x-1/2 w-[1570px] h-[96px] rounded-full bg-gradient-to-br from-[#6675F7] to-[#57007B] blur-[62px] z-0" /> */}

      {/* Radial Background Layer */}
      {/* <div className="absolute inset-0 -z-10 w-[2563px] h-[2563px] left-1/2 -translate-x-1/2 top-[-735px] bg-[#FAFAFA] rounded-[60px]" /> */}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-[1200px] mx-auto">
        {/* Heading */}
        {/* <Heading
          text="Our Expertise has Many Faces"
          level={2}
          className="text-[#1D1D21] font-inter text-[64px] leading-[77px] font-bold"
        /> */}

        {/* Expertise Text */}
        {/* <ExpertiseText /> */}

        {/* Uploaded Image */}
        <div className="relative w-full h-[600px] mt-10">
          <Image
            src="/Frame 1000004497.png"   // 👈 your uploaded image in /public
            alt="Expertise visual"
            fill
            className="object-cover rounded-xl shadow-lg"
            priority
          />
        </div>
      </div>
    </section>
  )
}

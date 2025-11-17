'use client'
import React from 'react'
import Box from '@/components/common/Box'

type HeroSectionProps = {
  title: string
  subtitle: string
  ctaText: string
}

export default function HeroSection({ title, subtitle, ctaText }: HeroSectionProps) {
  return (
    <section className="absolute top-[286px] left-1/2 -translate-x-1/2 w-[1390px] h-auto flex flex-col items-center justify-center gap-[22px] z-10">
      <h1
        className="w-full text-center font-inter font-bold text-[90px] leading-[112px] text-[#1D1D21] px-4 border border-solid"
        style={{
          borderImageSource: 'linear-gradient(225deg, #F76680 0%, #57007B 100%)',
          borderImageSlice: 1,
        }}
      >
        {title}
      </h1>
      <p className="w-[1033px] text-center font-inter text-[24px] leading-[48px] text-[#718096]">
        {subtitle}
      </p>
      <button className="mt-4 px-8 py-4 rounded-lg text-white font-medium text-[18px] bg-gradient-to-r from-[#1D1D21] to-[#718096] hover:opacity-90 transition uppercase tracking-wide">
        {ctaText}
      </button>

      {/* ⬇️ Box component rendered directly below CTA */}
      <div className="w-full flex justify-center mt-12">
        <Box />
      </div>
    </section>
  )
}

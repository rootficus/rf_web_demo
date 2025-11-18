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
    <section className="w-full px-4 py-24 flex flex-col items-center gap-16 bg-[#FAFAFA]">
      {/* Text Content */}
      <div className="w-full max-w-screen-xl mx-auto flex flex-col items-center text-center gap-6">
        <h1
          className="font-inter font-bold text-[48px] md:text-[90px] leading-[60px] md:leading-[112px] text-[#1D1D21] border border-solid"
          style={{
            borderImageSource: 'linear-gradient(225deg, #F76680 0%, #57007B 100%)',
            borderImageSlice: 1,
          }}
        >
          {title}
        </h1>
        <p className="max-w-[1033px] font-inter text-[18px] md:text-[24px] leading-[32px] md:leading-[48px] text-[#718096]">
          {subtitle}
        </p>
        <button
          className="px-8 py-4 rounded-lg text-white font-medium text-[18px] hover:opacity-90 transition uppercase tracking-wide"
          style={{
            background: 'linear-gradient(87.37deg, #3245FF 0%, #B845ED 100%)',
          }}
        >
          {ctaText}
        </button>
      </div>

      {/* ✅ Centered Box Image */}
      <div className="w-full flex justify-center">
        <div className="w-full max-w-[1000px] px-4">
          <Box />
        </div>
      </div>
    </section>
  )
}

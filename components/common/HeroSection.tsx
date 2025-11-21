'use client'
import React from 'react'
import Box from '@/components/common/Box'
import AndroidHeroSection from '@/components/common/AndroidHeroSection'

type HeroSectionProps = {
  ctaText?: string
}

export default function HeroSection({ ctaText = "Consult Our Android Team" }: HeroSectionProps) {
  return (
    <section className="relative w-full px-4 py-24 flex flex-col items-center gap-16 bg-transparent overflow-hidden">
      {/* ✅ Subtract Background Layer (with reduced opacity so eclipse layers show through) */}
      <div
        className="absolute w-[1750px] h-[750px] left-[121px] top-[30px] bg-no-repeat bg-cover pointer-events-none z-0 opacity-70"
        style={{ backgroundImage: 'url("/Subtract.png")' }}
      />

      {/* ✅ Android Hero Section integrated */}
      <div className="relative z-[1] w-full max-w-screen-xl mx-auto flex flex-col items-center text-center gap-6">
        <AndroidHeroSection />

        {/* ✅ CTA Button Block */}
        <div className="relative w-[545px] h-[134px] -mt-4">
          <div className="absolute w-[545px] h-[134px] left-[-35px] top-[-23px] bg-[#FAFAFA] rounded-[20px]" />
          <button
            className="absolute w-[475px] h-[88px] left-1/2 -translate-x-1/2 top-0 flex justify-center items-center px-[59px] py-[30px] gap-[20px] text-[#FAFAFA] font-inter font-semibold text-[14px] leading-[14px] rounded-[15px] shadow-[0px_4px_49px_rgba(0,0,0,0.15)] hover:opacity-90 transition uppercase tracking-wide"
            style={{ background: 'linear-gradient(225deg, #F76680 0%, #57007B 100%)' }}
          >
            {ctaText}
          </button>
        </div>
      </div>

      {/* ✅ Centered Box Image */}
      <div className="relative z-[1] w-full flex justify-center">
        <div className="w-full max-w-[1000px] px-4">
          <Box />
        </div>
      </div>
    </section>
  )
}

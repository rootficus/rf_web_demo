'use client'
import React from 'react'
import Box from '@/components/common/Box'

type HeroSectionProps = {
  title: string
  subtitle: string
  ctaText?: string
}

export default function HeroSection({
  title,
  subtitle,
  ctaText = "Consult Our Android Team",
}: HeroSectionProps) {
  return (
    <section className="relative w-full px-4 py-24 flex flex-col items-center gap-16 bg-[#FAFAFA] overflow-hidden">
      {/* ✅ Subtract Background Layer */}
      <div
        className="absolute w-[1750px] h-[750px] left-[121px] top-[30px] bg-no-repeat bg-cover pointer-events-none z-0"
        style={{
          backgroundImage: 'url("/Subtract.png")',
        }}
      />

      {/* Text Content */}
      <div className="relative z-[1] w-full max-w-screen-xl mx-auto flex flex-col items-center text-center gap-6">
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

        {/* ✅ CTA Button Block */}
        <div className="relative w-[545px] h-[134px] -mt-4">
          <div className="absolute w-[545px] h-[134px] left-[-35px] top-[-23px] bg-[#FAFAFA] rounded-[20px]" />
          <button
            className="absolute w-[475px] h-[88px] left-1/2 -translate-x-1/2 top-0 flex justify-center items-center px-[59px] py-[30px] gap-[20px] text-[#FAFAFA] font-inter font-semibold text-[14px] leading-[14px] rounded-[15px] shadow-[0px_4px_49px_rgba(0,0,0,0.15)] hover:opacity-90 transition uppercase tracking-wide"
            style={{
              background: 'linear-gradient(225deg, #F76680 0%, #57007B 100%)',
            }}
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

'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function CallToActionBanner() {
  return (
    <section className="relative w-full max-w-[1770px] mx-auto min-h-[500px] rounded-[50px] border border-[#343841] bg-gradient-to-r from-[#3245FF] to-[#B845ED] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] flex items-center justify-center px-6 py-16 isolate overflow-hidden">
      {/* Optional SVG overlay */}
      <div className="absolute w-[1129px] h-[433px] opacity-30 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0">
        <Image src="/vectors/cta-overlay.svg" alt="Decorative Vector" fill />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-12 w-full max-w-[769px] text-white text-center">
        <h2 className="text-[40px] md:text-[54px] leading-tight font-bold font-inter">
          Start Developing More<br />Effectively in the Mobile Age.
        </h2>

        <div className="flex flex-wrap justify-center gap-6">
          {['Lorem ipsum dolor', 'Dolor sit amet', 'Consectetur adipiscing'].map((text, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <div className="w-[17px] h-[12px] bg-white rounded-sm" />
              <span className="text-[17.9px] leading-[25px] font-normal">{text}</span>
            </div>
          ))}
        </div>

        <Link
          href="/contact"
          className="flex items-center justify-center px-10 py-5 gap-4 w-[300px] md:w-[381px] h-[88px] rounded-[15px] border border-white bg-gradient-to-br from-[#FFC656] to-[#F16063] shadow-[0px_34px_94px_rgba(0,0,0,0.45)] hover:scale-105 transition-transform"
        >
          <span className="text-[#FAFAFA] text-[18px] leading-[22px] font-bold tracking-[-0.005em]">
            Contact us
          </span>
        </Link>
      </div>
    </section>
  )
}

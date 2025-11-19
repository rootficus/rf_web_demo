'use client'
import React from 'react'
import { FaArrowUp } from 'react-icons/fa6'

export default function PortfolioShowcaseHeader() {
  return (
    <div className="w-full flex justify-between items-end gap-[13.66px] max-w-[1750px] h-[239.79px] mx-auto">
      {/* Left Column */}
      <div className="flex flex-col items-start gap-[40.99px] w-[1172px] h-[239.79px]">
        {/* Label + Line */}
        <div className="relative w-[735.14px] h-[32.79px]">
          <span className="absolute left-0 top-0 text-[27.33px] leading-[33px] font-inter font-normal text-[rgba(12,11,72,0.8)]">
            Our Portfolio
          </span>
          <div className="absolute left-[191.3px] top-[16.4px] w-[543.84px] border-t border-[1.36643px] border-[rgba(12,11,72,0.8)]" />
        </div>

        {/* Heading */}
        <h2 className="w-[1172px] h-[166px] font-inter font-bold text-[64px] leading-[130%] text-[#1D1D21] capitalize flex items-center">
          Discover the Extensive Array of Cutting-Edge IT Services We Offer
        </h2>
      </div>

      {/* Arrows */}
      <div className="flex gap-[40.99px] w-[259.62px] h-[109.31px] relative">
        {/* Left Arrow */}
        <div className="absolute left-0 top-0 w-[109.31px] h-[109.31px] rounded-full border border-[#E2E8F0] flex items-center justify-center">
          <FaArrowUp
            className="text-[#1D1D21]"
            style={{
              width: '46.46px',
              height: '46.46px',
              transform: 'matrix(0, 1, 1, 0, 0, 0)',
            }}
          />
        </div>

        {/* Right Arrow */}
        <div
          className="absolute left-[150.31px] top-0 w-[109.31px] h-[109.31px] rounded-full flex items-center justify-center"
          style={{
            background: 'linear-gradient(225deg, #F76680 0%, #57007B 100%)',
          }}
        >
          <FaArrowUp
            className="text-white"
            style={{
              width: '46.46px',
              height: '46.46px',
              transform: 'rotate(90deg)',
              border: '2.73286px solid #FFFFFF',
              padding: '4px',
              borderRadius: '50%',
            }}
          />
        </div>
      </div>
    </div>
  )
}

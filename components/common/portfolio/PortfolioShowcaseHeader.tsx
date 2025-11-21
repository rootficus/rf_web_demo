'use client'
import React from 'react'
import { FaArrowUp } from 'react-icons/fa6'

export default function PortfolioShowcaseHeader() {
  return (
    <div className="w-full max-w-[1750px] h-[240px] mx-auto flex justify-between items-end gap-4">
      {/* Left Column */}
      <div className="flex flex-col items-start gap-10 w-full max-w-[1172px] h-full">
        {/* Label + Line */}
        <div className="relative w-full max-w-[735px] h-[33px]">
          <span className="absolute left-0 top-0 text-[27px] leading-[33px] font-inter font-normal text-[rgba(12,11,72,0.8)]">
            Our Portfolio
          </span>
          <div className="absolute left-[191px] top-[16px] w-[544px] border-t border-[1.4px] border-[rgba(12,11,72,0.8)]" />
        </div>

        {/* Heading */}
        <h2 className="w-full max-w-[1172px] font-inter font-bold text-[64px] leading-[130%] text-[#1D1D21] capitalize">
          Discover the Extensive IT&nbsp;
          <span className="bg-gradient-to-br from-[#F76680] to-[#57007B] bg-clip-text text-transparent">
            Services
          </span>{' '}
          We Offer
        </h2>
      </div>

      {/* Arrows */}
      <div className="flex gap-10 w-[260px] h-[110px] relative">
        {/* Left Arrow */}
        <div className="absolute left-0 top-0 w-[110px] h-[110px] rounded-full border border-[#E2E8F0] flex items-center justify-center">
          <FaArrowUp
            className="text-[#1D1D21]"
            style={{ width: '46px', height: '46px', transform: 'rotate(-90deg)' }}
          />
        </div>

        {/* Right Arrow */}
        <div
          className="absolute left-[150px] top-0 w-[110px] h-[110px] rounded-full flex items-center justify-center"
          style={{ background: 'linear-gradient(225deg, #F76680 0%, #57007B 100%)' }}
        >
          <FaArrowUp
            className="text-white"
            style={{
              width: '46px',
              height: '46px',
              transform: 'rotate(90deg)',
              border: '2.7px solid #FFFFFF',
              padding: '4px',
              borderRadius: '50%',
            }}
          />
        </div>
      </div>
    </div>
  )
}

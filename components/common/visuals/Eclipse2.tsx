'use client'
import React from 'react'
import Image from 'next/image'

const Eclipse2: React.FC = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
      {/* Responsive container */}
      <div className="absolute right-0 top-[390px] w-[218px] h-[218px] rounded-full bg-[rgba(217,223,157,0.3)] backdrop-blur-[30px]" />

      {/* Android Image */}
      <div className="absolute right-[20px] top-[412.15px] w-[173.7px] h-[173.7px]">
        <Image
          src="/android.png"
          alt="Android"
          width={173.7}
          height={173.7}
          className="object-contain"
        />
      </div>
    </div>
  )
}

export default Eclipse2

'use client'
import React from 'react'
import Image from 'next/image'

const Eclipse: React.FC = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
      {/* ✅ Group 1561529833 */}
      <div
        className="absolute rounded-full"
        style={{
          width: '218px',
          height: '218px',
          left: '166px',
          top: '501px',
          background: 'rgba(217, 223, 157, 0.3)',
          backdropFilter: 'blur(32px)',
        }}
      />

      {/* Android Image */}
      <div
        className="absolute"
        style={{
          width: '173.7px',
          height: '173.7px',
          left: '188.15px',
          top: '523.15px',
        }}
      >
        <Image
          src="/android.png" // ✅ Ensure this exists in /public
          alt="Android"
          width={173.7}
          height={173.7}
          className="object-contain"
        />
      </div>
    </div>
  )
}

export default Eclipse

'use client'

import Image from 'next/image'
import PortfolioShowcaseHeader from './PortfolioShowcaseHeader'

const portfolioItems = [
  {
    title: 'Concert Booking App',
    date: 'Aug 09, 2024',
    duration: '20 Weeks',
    services: ['UI/UX Design', 'Research', 'Development', 'Quality Analyst'],
    description:
      'Lorem ipsum dolor sit amet consectetur. Risus iaculis sit tortor lorem sit sodales suspendisse velit ac.',
    image: '/Concert.png',
  },
  {
    title: 'Travel Booking App',
    date: 'Aug 09, 2024',
    duration: '10 Weeks',
    services: ['UI/UX Design', 'Research', 'Development', 'Quality Analyst'],
    description:
      'Arcu viverra bibendum facilisis integer et orci aliquam non molestie. Dictum in pharetra odio porta.',
    image: '/Travel.png',
  },
]

export default function PortfolioShowcase() {
  return (
    <section className="w-full px-4 md:px-12 lg:px-24 py-24 space-y-16">
      {/* Header Section */}
      <PortfolioShowcaseHeader />

      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-screen-xl mx-auto">
        {portfolioItems.map((item, index) => (
          <div
            key={index}
            className={`rounded-[40px] shadow-md p-8 space-y-6 flex flex-col justify-between ${
              item.title === 'Travel Booking App' ? 'bg-[#F2E6E6]' : 'bg-[#F2F2F2]'
            }`}
          >
            <div className="space-y-4">
              <h3 className="text-[35px] leading-[43px] font-bold text-[#1D1D21] font-inter">
                {item.title}
              </h3>

              <div className="flex items-center gap-3 text-[19px] leading-[23px] text-[rgba(26,32,44,0.5)] font-inter">
                <span>{item.date}</span>
                <span className="w-[5px] h-[5px] rounded-full bg-[rgba(26,32,44,0.5)]" />
                <span className="font-bold">{item.duration}</span>
              </div>

              <div className="flex flex-wrap gap-[13.66px]">
                {item.services.map((service, idx) => (
                  <span
                    key={idx}
                    className={`px-[16px] py-[6px] text-[21px] leading-[26px] font-medium text-[#1D1D21] rounded-full font-inter ${
                      item.title === 'Travel Booking App' ? 'bg-[#EFD8D8]' : 'bg-[#E1E0E0]'
                    }`}
                  >
                    {service}
                  </span>
                ))}
              </div>

              <p className="text-[19px] leading-[34px] text-[#1D1D21] opacity-60 font-inter">
                {item.description}
              </p>
            </div>

            {/* Mockup Image */}
            <div className="relative w-full h-[400px] mt-6">
              <Image
                src={item.image}
                alt={`${item.title} mockup`}
                fill
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

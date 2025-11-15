'use client'

import Image from 'next/image'

const portfolioItems = [
  {
    title: 'E-Commerce App',
    description: 'A scalable Android e-commerce platform with real-time inventory, payment gateway, and user analytics.',
    image: '/images/portfolio/ecommerce.png',
  },
  {
    title: 'Fitness Tracker',
    description: 'Tracks workouts, calories, and progress using Jetpack Compose and Firebase integration.',
    image: '/images/portfolio/fitness.png',
  },
  {
    title: 'Food Delivery App',
    description: 'Built with MVVM, Retrofit, and Room DB. Supports live tracking and dynamic menus.',
    image: '/images/portfolio/food-delivery.png',
  },
]

export default function PortfolioShowcase() {
  return (
    <section className="w-full max-w-[1359px] mx-auto px-4 py-16 text-center">
      <h2 className="text-[48px] leading-[56px] font-bold text-[#1D1D21] font-poppins mb-6">
        Portfolio Showcase
      </h2>
      <p className="text-[20px] leading-[32px] text-[rgba(113,128,150,0.9)] font-poppins mb-12">
        Explore our recent Android projects built with modern architecture and scalable design principles.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioItems.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:scale-[1.02]"
          >
            <div className="relative w-full h-[220px]">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 text-left">
              <h3 className="text-[22px] font-semibold text-[#1D1D21] mb-2 font-poppins">
                {item.title}
              </h3>
              <p className="text-[16px] text-[rgba(113,128,150,0.9)] font-poppins">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

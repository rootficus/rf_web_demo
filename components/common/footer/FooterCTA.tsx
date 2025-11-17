'use client'
import Image from 'next/image'

export default function FooterCTA() {
  return (
    <section className="relative w-full px-4 md:px-12 lg:px-24 py-24 bg-white overflow-hidden">
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Visual Group */}
        <div className="relative w-full max-w-md h-[400px] lg:h-[600px] flex-shrink-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[#D9D9D9] rounded-3xl" />
          <div className="absolute top-[30px] left-[10%] w-[80%] h-[90%] bg-[rgba(66,84,246,0.1)] rounded-3xl rotate-[5deg]" />
          <Image
            src="/Group 1171274652.png"
            alt="Decorative Graphic"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Right Content Block */}
        <div className="w-full flex flex-col items-start gap-12">
          <div className="flex flex-col gap-6">
            <h2 className="text-[32px] md:text-[48px] leading-tight font-bold tracking-tight font-inter bg-gradient-to-br from-[#F76680] to-[#57007B] bg-clip-text text-transparent">
              Simple Steps, Big Moves
            </h2>
            <p className="text-[18px] md:text-[20px] leading-relaxed font-medium text-[#718096] font-inter">
              Lorem ipsum dolor sit amet consectetur. Aliquet fames neque turpis morbi amet proin nunc commodo pretium.
              Faucibus at cum ac auctor. Quis vestibulum pharetra arcu platea. Egestas ultrices dictum sit.
            </p>
          </div>

          {/* Action Cards */}
          <div className="flex flex-wrap gap-6 justify-start">
            {[
              { text: 'Schedule a Meeting', dark: true },
              { text: 'Call Us Now', dark: false },
              { text: 'Request a Quote', dark: false },
            ].map(({ text, dark }, i) => (
              <div
                key={i}
                className={`flex flex-col justify-between items-center p-6 w-full max-w-[280px] h-[260px] rounded-2xl ${
                  dark ? 'bg-[#1D1D21] text-white' : 'bg-white text-[#1D1D21]'
                }`}
              >
                <div className="relative w-[76px] h-[76px] bg-[rgba(12,11,72,0.1)] rounded-xl flex items-center justify-center">
                  <div
                    className={`w-[38px] h-[38px] rounded ${
                      dark ? 'bg-white' : 'bg-[#1D1D21] border border-[#1D1D21]'
                    }`}
                  />
                </div>
                <div className="text-[20px] leading-[30px] font-inter text-center mt-4">{text}</div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="w-full flex justify-start mt-[-48px]">
            <div className="relative w-full max-w-[304px] h-[76px]">
              <button className="flex flex-row justify-center items-center gap-4 px-8 py-4 w-full h-full bg-gradient-to-br from-[#6675F7] to-[#57007B] rounded-xl text-white text-[20px] font-bold font-manrope">
                Contact Us Now
                <svg
                  width="20"
                  height="16"
                  viewBox="0 0 20 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M0 8H18M18 8L10 1M18 8L10 15" stroke="white" strokeWidth="2" />
                </svg>
              </button>
              <div className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 w-[170px] h-[24px] bg-[#4254F6] opacity-60 blur-[44px] rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

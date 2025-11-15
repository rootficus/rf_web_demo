'use client'

import Heading from '@/components/atoms/Heading'

const TrustedBySection = () => (
  <section
    className="flex flex-col items-center px-[120px] py-[80px] gap-[60px] bg-[#F4F4F4] w-full z-[4]"
    style={{ maxWidth: '1990px', height: '294px' }}
  >
    <Heading
      text="Trusted by the bigger enterprises and startups alike"
      level={2}
      className="text-[#718096] font-inter font-medium text-[28px] leading-[34px] w-[695px]"
    />
  </section>
)

export default TrustedBySection

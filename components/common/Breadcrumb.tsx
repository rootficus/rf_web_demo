'use client'

export default function Breadcrumb() {
  return (
    <div className="relative z-[10] w-full px-8 md:px-16 lg:px-32 xl:px-48 py-6">
      <p className="font-poppins font-normal text-[22px] md:text-[24px] leading-[36px] text-[rgba(29,29,33,0.5)]">
        Home &gt; Services &gt;{' '}
        <span className="font-semibold text-[#1D1D21]">
          Android App Development
        </span>
      </p>
    </div>
  )
}

'use client'

export default function Breadcrumb() {
  return (
    <div className="relative z-[10] w-full px-4 md:px-12 lg:px-24 py-4">
      <p className="font-poppins font-normal text-[21px] leading-[36px] text-[rgba(29,29,33,0.5)]">
        Home &gt; Services &gt;{' '}
        <span className="font-semibold text-[#1D1D21]">
          Android App Development
        </span>
      </p>
    </div>
  )
}

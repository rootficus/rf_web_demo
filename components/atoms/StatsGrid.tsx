'use client'

interface Stat {
  value: string
  label: string
}

interface StatsGridProps {
  stats: Stat[]
}

const StatsGrid = ({ stats }: StatsGridProps) => (
  <div className="flex flex-wrap justify-center items-center gap-8 px-6 py-12 w-full max-w-screen-xl mx-auto z-[6]">
    {stats.map((stat, idx) => (
      <div
        key={idx}
        className="flex flex-col justify-center items-center px-[40px] py-[40px] gap-[30px] w-[300px] sm:w-[360px] md:w-[400px] h-[240px] bg-[#FAFAFA] shadow-[0px_40px_50px_rgba(133,29,125,0.1)] rounded-[30px]"
      >
        <h3 className="text-[64px] leading-[80px] font-bold text-[#1D1D21] font-inter">
          {stat.value}
        </h3>
        <p className="text-[24px] leading-[32px] font-medium text-[#1D1D21] font-inter text-center">
          {stat.label}
        </p>
      </div>
    ))}
  </div>
)

export default StatsGrid

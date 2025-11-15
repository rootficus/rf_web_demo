interface StatCardProps {
  value: string
  label: string
}

const StatCard = ({ value, label }: StatCardProps) => (
  <div className="flex flex-col items-center text-center px-6 py-8 bg-white shadow-md rounded-lg">
    <h3 className="text-[48px] font-bold text-[#1D1D21]">{value}</h3>
    <p className="text-lg text-gray-500 mt-2">{label}</p>
  </div>
)

export default StatCard
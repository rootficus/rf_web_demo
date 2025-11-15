interface CTAButtonGroupProps {
  buttons: { label: string; onClick?: () => void }[]
}

const CTAButtonGroup = ({ buttons }: CTAButtonGroupProps) => (
  <div className="flex flex-wrap justify-center gap-4 mt-6">
    {buttons.map((btn, idx) => (
      <button
        key={idx}
        onClick={btn.onClick}
        className="px-6 py-3 bg-[#1D1D21] text-white font-medium rounded-md hover:bg-[#333]"
      >
        {btn.label}
      </button>
    ))}
  </div>
)

export default CTAButtonGroup
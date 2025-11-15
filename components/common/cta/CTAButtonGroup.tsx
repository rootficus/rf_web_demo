import Button from '@/components/atoms/Button'

interface CTAButtonGroupProps {
  buttons: { label: string; onClick?: () => void; variant?: 'primary' | 'outline' }[]
}

const CTAButtonGroup = ({ buttons }: CTAButtonGroupProps) => (
  <div className="flex flex-wrap justify-center gap-4 mt-6">
    {buttons.map((btn, idx) => (
      <Button key={idx} label={btn.label} onClick={btn.onClick} variant={btn.variant} />
    ))}
  </div>
)

export default CTAButtonGroup
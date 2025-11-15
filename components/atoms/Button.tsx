interface ButtonProps {
  label: string
  onClick?: () => void
  variant?: 'primary' | 'outline'
}

const Button = ({ label, onClick, variant = 'primary' }: ButtonProps) => {
  const base = 'px-6 py-3 rounded-md font-medium transition-all duration-300'
  const styles = {
    primary: `${base} bg-[#1D1D21] text-white hover:bg-[#2D2D2D]`,
    outline: `${base} border border-[#1D1D21] text-[#1D1D21] hover:bg-[#F7F7F7]`,
  }

  return (
    <button onClick={onClick} className={styles[variant]}>
      {label}
    </button>
  )
}

export default Button
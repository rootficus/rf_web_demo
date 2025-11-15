interface TextProps {
  children: React.ReactNode
  size?: 'sm' | 'md' | 'lg' | 'xl'
  weight?: 'normal' | 'medium' | 'semibold'
  color?: string
  align?: 'left' | 'center' | 'right'
  className?: string
}

const Text = ({
  children,
  size = 'md',
  weight = 'normal',
  color = 'text-gray-700',
  align = 'center',
  className = '',
}: TextProps) => {
  const sizes = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
  }

  const weights = {
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
  }

  return (
    <p className={`${sizes[size]} ${weights[weight]} ${color} text-${align} ${className}`}>
      {children}
    </p>
  )
}

export default Text
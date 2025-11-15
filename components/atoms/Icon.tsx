interface IconProps {
  src: string
  alt?: string
  size?: number
  className?: string
}

const Icon = ({ src, alt = 'icon', size = 32, className = '' }: IconProps) => (
  <img
    src={src}
    alt={alt}
    width={size}
    height={size}
    className={`inline-block ${className}`}
    loading="lazy"
  />
)

export default Icon
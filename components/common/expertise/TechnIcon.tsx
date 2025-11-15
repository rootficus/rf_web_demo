import Image from 'next/image'

interface TechIconProps {
  name: string
  src: string
  size?: number
}

export default function TechIcon({ name, src, size = 80 }: TechIconProps) {
  return (
    <div
      className="rounded-full bg-[#EDEDED] flex items-center justify-center shadow-md"
      style={{ width: size, height: size }}
    >
      <Image src={src} alt={name} width={size / 2} height={size / 2} />
    </div>
  )
}

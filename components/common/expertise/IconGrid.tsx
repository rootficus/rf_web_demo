import Image from 'next/image';

interface TechIconProps {
  name: string;
  src: string;
  size?: number;
}

export default function TechIcon({ name, src, size = 80 }: TechIconProps) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className="rounded-full bg-[#EDEDED] flex items-center justify-center shadow-md hover:scale-105 transition-transform duration-200"
        style={{ width: size, height: size }}
      >
        <Image
          src={src}
          alt={name}
          width={size / 2}
          height={size / 2}
          className="object-contain"
        />
      </div>
      <span className="text-sm font-manrope font-medium text-[#1D1D21]">{name}</span>
    </div>
  );
}

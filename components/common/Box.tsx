'use client';
import Image from 'next/image';

export default function Box() {
  return (
    <section className="relative w-[1752px] h-[797px] z-[1]">
      {/* Background Image Layer */}
      <div className="absolute w-[1750px] h-[750px] left-[121px] top-[30px]">
        <Image
          src="/Substract.png"
          alt="Background"
          width={1750}
          height={750}
          className="rounded-[50px]"
        />
      </div>
    </section>
  );
}
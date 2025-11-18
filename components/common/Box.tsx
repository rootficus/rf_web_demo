'use client';
import Image from 'next/image';

export default function Box() {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-full max-w-[1000px] px-4">
        <Image
          src="/hello.png"
          alt="Centered image"
          width={1000}
          height={500}
          className="w-full h-auto object-contain mx-auto rounded-[30px]"
          priority
        />
      </div>
    </div>
  );
}

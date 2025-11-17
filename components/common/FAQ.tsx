// faq/FAQItem.tsx
import React, { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

interface FAQItemProps {
  number: string;
  question: string;
  answer: string;
  index?: number;
}

const FAQItem: React.FC<FAQItemProps> = ({ number, question, answer, index }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="py-6 px-4 md:px-8 bg-white border-b cursor-pointer"
      onClick={() => setOpen(!open)}
      style={index !== undefined ? { transitionDelay: `${index * 100}ms` } : {}}
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-6">
          <span className="text-[#4254F6] text-lg font-medium font-manrope">{number}</span>
          <h3 className="text-[#1D1D21] text-base md:text-lg font-semibold font-manrope">
            {question}
          </h3>
        </div>
        <ChevronDownIcon
          className={`w-5 h-5 text-[#1D1D21]/50 transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </div>
      {open && (
        <p className="mt-4 text-[#1D1D21] text-sm md:text-base font-manrope">{answer}</p>
      )}
    </div>
  );
};

export default FAQItem;

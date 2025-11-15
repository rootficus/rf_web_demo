import React from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

interface FAQItemProps {
  number: string;
  question: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ number, question }) => {
  return (
    <div className="py-6 px-4 md:px-8 flex justify-between items-center bg-white">
      <div className="flex items-center gap-6">
        <span className="text-[#4254F6] text-lg font-medium font-manrope">{number}</span>
        <h3 className="text-[#1D1D21] text-base md:text-lg font-semibold font-manrope">
          {question}
        </h3>
      </div>
      <ChevronDownIcon className="w-5 h-5 text-[#1D1D21]/50 transform rotate-180" />
    </div>
  );
};

export default FAQItem;

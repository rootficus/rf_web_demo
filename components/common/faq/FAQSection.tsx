'use client';

import React from 'react';
import FAQItem from './FAQItem';

const FAQSection = () => {
  return (
    <section className="w-full max-w-screen-xl mx-auto px-4 py-16 flex flex-col items-center gap-10 relative">
      <div className="absolute inset-0 mx-auto max-w-screen-xl rounded-[40px] bg-gradient-to-br from-[#6675F70D] to-[#57007B0D] pointer-events-none" />

      <div className="text-center z-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1D1D21] font-inter capitalize">
          Frequently Asked Questions
        </h2>
        <p className="mt-4 text-lg md:text-xl text-[#718096] font-manrope">
          Learn more about us and the services we offer.
        </p>
      </div>

      <div className="w-full z-10 flex flex-col divide-y divide-[#EDEDED]">
        <FAQItem
          number="01"
          question="What banks are you currently partnered with?"
        />
        <FAQItem
          number="02"
          question="How long has Fintech X been in business for?"
        />
        <FAQItem
          number="03"
          question="What are your current banking security standards?"
        />
        <FAQItem
          number="04"
          question="Can I speak with an account executive?"
        />
      </div>
    </section>
  );
};

export default FAQSection;

'use client';
import React from 'react';
import FAQItem from './faq/FAQItem';

const faqs = [
  {
    question: 'What technologies do you use for Android development?',
    answer: 'We use Kotlin, Java, Jetpack Compose, and modern Android SDKs.',
  },
  {
    question: 'Can I hire a dedicated Android team?',
    answer: 'Yes, we offer flexible engagement models including dedicated teams.',
  },
];

export default function FAQ() {
  return (
    <section className="max-w-4xl mx-auto space-y-8">
      <h2 className="text-[64px] font-bold text-[#1D1D21] text-center">
        Frequently Asked Questions
      </h2>
      {faqs.map((faq, index) => (
        <FAQItem key={index} index={index} {...faq} />
      ))}
    </section>
  );
}

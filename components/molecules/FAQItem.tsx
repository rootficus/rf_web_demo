'use client'

import { useState } from 'react'

interface FAQItemProps {
  question: string
  answer: string
  index: number
}

const FAQItem = ({ question, answer, index }: FAQItemProps) => {
  const [open, setOpen] = useState(false)

  return (
    <div className="w-full border-b border-gray-200 py-4">
      <button
        onClick={() => setOpen(!open)}
        className="flex justify-between items-center w-full text-left"
      >
        <span className="text-xl font-semibold text-[#1D1D21]">
          {String(index).padStart(2, '0')} {question}
        </span>
        <span className="text-2xl text-gray-400">{open ? '−' : '+'}</span>
      </button>
      {open && (
        <p className="mt-3 text-gray-600 text-base leading-relaxed">{answer}</p>
      )}
    </div>
  )
}

export default FAQItem
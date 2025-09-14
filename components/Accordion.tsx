'use client'
import { useState } from 'react'

interface AccordionItem {
  title: string
  content: string
}

export default function Accordion({ items }: { items: AccordionItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="divide-y divide-gray-200 border border-gray-200 rounded-lg">
      {items.map((item, index) => (
        <div key={index}>
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full flex justify-between items-center p-4 text-left hover:bg-gray-50 transition-colors"
          >
            <span className="font-medium">{item.title}</span>
            <span className="text-xl text-gray-500">{openIndex === index ? '−' : '+'}</span>
          </button>
          {openIndex === index && (
            <div className="p-4 pt-0 text-gray-700 whitespace-pre-line">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

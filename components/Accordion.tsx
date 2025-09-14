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
      {items.map((item, index) => {
        const isOpen = openIndex === index
        return (
          <div key={index} className={`transition-colors ${isOpen ? 'bg-blue-50' : ''}`}>
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className={`w-full flex justify-between items-center p-4 text-left hover:bg-gray-50 transition-colors ${
                isOpen ? 'bg-blue-50 hover:bg-blue-100' : ''
              }`}
            >
              <span className={`font-medium ${isOpen ? 'text-blue-900' : ''}`}>{item.title}</span>
              <span className={`text-xl transition-colors ${
                isOpen ? 'text-blue-600 rotate-0' : 'text-gray-500'
              }`}>
                {isOpen ? '−' : '+'}
              </span>
            </button>
            {isOpen && (
              <div className="p-4 pt-0 bg-blue-50 border-t border-blue-100">
                <div className="bg-white p-4 rounded-lg border border-blue-200 text-gray-700 whitespace-pre-line shadow-sm">
                  {item.content}
                </div>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

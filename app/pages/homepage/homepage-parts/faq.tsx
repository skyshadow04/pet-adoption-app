"use client";
import { useState } from "react";

const faqData = [
  {
    question: "What is the adoption process?",
    answer:
      "The adoption process typically involves filling out an application, meeting the pet, and completing an adoption agreement.",
  },
  {
    question: "What are the adoption fees?",
    answer:
      "Adoption fees vary by organization but generally cover vaccinations, spaying/neutering, and other care costs.",
  },
  {
    question: "Can I adopt a pet if I have other animals?",
    answer:
      "Yes, many organizations allow adoptions to homes with other pets, but they may require a meet-and-greet first.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions</h1>
      <div className="space-y-4">
        {faqData.map((item, idx) => (
          <div key={idx} className="border rounded">
            <button
              className="w-full text-left px-4 py-3 font-semibold focus:outline-none flex justify-between items-center"
              onClick={() => toggle(idx)}
              aria-expanded={openIndex === idx}
            >
              <span>{item.question}</span>
              <span>{openIndex === idx ? "−" : "+"}</span>
            </button>
            {openIndex === idx && (
              <div className="px-4 pb-4 text-gray-700">{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
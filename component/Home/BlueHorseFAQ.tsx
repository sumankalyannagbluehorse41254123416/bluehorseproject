"use client";

import { useState } from "react";
import { FaArrowDown } from "react-icons/fa";

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "What services does BlueHorse Software offer?",
    answer:
      "BlueHorse Software offers end-to-end web and mobile app development including eCommerce, D2C platforms, AI solutions and scalable digital products.",
  },
  {
    question: "What industries has BlueHorse Software worked with?",
    answer:
      "We’ve worked across eCommerce, Fashion, Food & QSR, Retail, Startups, Healthcare and Enterprise solutions.",
  },
  {
    question: "What platforms and technologies do you specialise in?",
    answer:
      "Our expertise includes React, Next.js, Node.js, Shopify, Magento, hybrid apps and cloud architectures.",
  },
  {
    question: "Do you provide maintenance and ongoing technical support?",
    answer:
      "Yes, we provide long-term maintenance, upgrades and dedicated support plans post launch.",
  },
  {
    question:
      "Can you build quick commerce or high-performance eCommerce platforms?",
    answer:
      "Yes. We specialise in fast, scalable mobile-first eCommerce and Q-commerce platforms.",
  },
  {
    question:
      "Do you offer organic marketing or growth support after development?",
    answer:
      "Yes, we provide SEO, AEO, CRO and organic growth strategies after development.",
  },
];

export default function BlueHorseFAQ() {
  const [expanded, setExpanded] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-5xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-semibold uppercase text-gray-700">
            Frequently Asked Question
          </h2>
          <p className="mt-3 text-gray-500">
            Your key questions – answered to help you make informed decisions.
          </p>
        </div>

        <div className="relative border-t border-gray-300">

          {/* Overlay only for hidden FAQ */}
          {!expanded && (
            <div className="absolute left-0 right-0 top-[210px] bottom-0 z-20 flex flex-col items-center justify-center bg-white/20 backdrop-blur-sm">
              <button
                onClick={() => setExpanded(true)}
                className="bg-sky-700 hover:bg-sky-800 text-white px-6 py-3 rounded-md font-semibold">
                CLICK TO EXPAND
              </button>

              <FaArrowDown className="mt-5 text-sky-600 animate-bounce " />
            </div>
          )}

          {/* FAQ List */}
          {faqs.map((faq, index) => {
            const isLocked = !expanded && index >= 3;
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`border-b border-gray-300 transition ${
                  isLocked ? "blur-sm pointer-events-none" : ""
                }`}
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full flex items-center justify-between py-6 text-left"
                >
                  <span className="text-lg font-medium text-gray-900">
                    {faq.question}
                  </span>

                  <span className="text-2xl">
                    {isOpen ? "×" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="pb-6 pr-10 text-gray-600">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}


"use client";

import { useState } from "react";

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "What services does BlueHorse Software offer?",
    answer:
      "BlueHorse Software offers end-to-end web and mobile app development, including eCommerce, D2C platforms, AI-powered solutions, and scalable digital products.",
  },
  {
    question: "What industries has BlueHorse Software worked with?",
    answer:
      "We’ve worked across eCommerce, Fashion & Lifestyle, Food & QSR, Retail, Startups, Healthcare, and Enterprise solutions.",
  },
  {
    question: "What platforms and technologies do you specialise in?",
    answer:
      "Our expertise includes React, Next.js, Node.js, Shopify, Magento, hybrid mobile apps, and cloud-based architectures.",
  },
  {
    question: "Do you provide maintenance and ongoing technical support?",
    answer:
      "Yes, we offer long-term maintenance, monitoring, upgrades, and dedicated support plans post-launch.",
  },
  {
    question:
      "Can you build quick commerce or high-performance eCommerce platforms?",
    answer:
      "Absolutely. We specialise in fast, scalable, mobile-first eCommerce and Q-commerce platforms.",
  },
  {
    question:
      "Do you offer organic marketing or growth support after development?",
    answer:
      "Yes, we provide SEO, AEO, CRO, and organic growth strategies after development.",
  },
  {
    question:
      "Do you work with agencies and IT companies for outsourced development?",
    answer:
      "Yes, we partner with agencies and IT firms for white-label and outsourced development.",
  },
  {
    question:
      "How long does it take to build a website or mobile app with BlueHorse?",
    answer:
      "A website can take around 7 days, while mobile apps typically take 20–25 days depending on scope.",
  },
  {
    question:
      "How affordable are your web and mobile app development services?",
    answer:
      "Our pricing is competitive and startup-friendly without compromising on quality.",
  },
];

export default function BlueHorseFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-5xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-wide uppercase text-gray-700">
            Frequently Asked Question
          </h2>
          <p className="mt-3 text-gray-500">
            Your key questions – answered to help you make informed decisions.
          </p>
        </div>

        {/* FAQ List */}
        <div className="border-t border-gray-300">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            // const isOpen = openIndex === index;

            return (
              <div key={index} className="border-b border-gray-300">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between py-6 text-left">
                  <span className="text-lg font-medium text-gray-900">
                    {faq.question}
                  </span>

                  <span className="text-2xl font-light text-gray-900">
                    {isOpen ? "x" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="pb-6 pr-10 text-gray-600 leading-relaxed">
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

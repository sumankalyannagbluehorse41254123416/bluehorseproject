'use client';

import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
  {
    id: "01",
    question: "What are Shopify development services?",
    answer:
      "Shopify development services involve designing, building, customizing, and optimizing online stores on Shopify to improve performance and conversions. These services include custom theme development, app integrations, performance optimization, migration, and scalable architecture planning for growing eCommerce businesses and agencies."
  },
  {
    id: "02",
    question: "How does custom Shopify development improve business performance?",
    answer:
      "Custom Shopify development improves business performance by optimizing speed, user experience, and conversion-focused functionality."
  },
  {
    id: "03",
    question: "How does Shopify customization increase conversion rates?",
    answer:
      "Shopify customization increases conversion rates by improving the user journey and checkout flow."
  },
  {
    id: "04",
    question: "Can Shopify development improve SEO and organic traffic?",
    answer:
      "Yes, Shopify development improves SEO by enhancing technical structure, page speed, and mobile performance."
  },
  {
    id: "05",
    question: "What is white-label Shopify development for agencies?",
    answer:
      "White-label Shopify development allows agencies to outsource Shopify projects while delivering them under their own brand."
  },
  {
    id: "06",
    question: "How much do Shopify development services cost in India?",
    answer:
      "Shopify development services in India typically cost between INR 40,000 and INR 5,00,000 depending on complexity."
  },
  {
    id: "07",
    question: "How long does it take to build a Shopify store?",
    answer:
      "A basic Shopify store can be launched within one week, while custom Shopify development usually takes 3–6 weeks."
  }
];

export default function ShopifyFAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="container">

      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-[40px] md:text-5xl font-normal tracking-tight text-[#515253] big-noodle">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-500 mt-2">Exploring Common Inquiries</p>
      </div>

      <div className="space-y-3">

        {faqs.map((faq, index) => {
          const active = open === index;

          return (
            <div
              key={index}
              className={`border-b border-[#dfeef2] rounded-md transition-all ${active ? "bg-[rgb(57,172,241,0.1)]" : "bg-white"
                }`}
            >
              {/* Question */}
              <div
                onClick={() => setOpen(active ? -1 : index)}
                className="flex items-center justify-between p-6 cursor-pointer"
              >
                <div className="flex items-center gap-6">

                  {/* Number */}
                  <span className="text-[#0C83D1] text-[48px] font-bold">
                    {faq.id}
                  </span>

                  {/* Question */}
                  <h3 className="text-[24px] text-[#515253] font-medium">
                    {faq.question}
                  </h3>

                </div>

                {/* Icon */}
                <div
                  className={`w-12 h-12 flex items-center justify-center rounded-full 
  ${active ? "bg-white text-black" : "bg-[#0C83D1] text-white"}`}
                >
                  {active ? <FaMinus size={25} /> : <FaPlus size={25} />}
                </div>
              </div>

              {/* Answer */}
              {active && (
                <div className="px-16 pb-6 text-[#515253] leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}

      </div>
    </section>
  );
}
"use client";

import { useState } from "react";
import { FiPlus, FiX } from "react-icons/fi";

const faqs = [
  {
    question: "Why do startups need custom software development services?",
    answer:
      "Startups need custom solutions to address unique business models, rapid growth needs, and limited budgets. Our custom software development for startups ensures your product is lean, scalable, and aligned with your specific goals.",
  },
  {
    question: "How long does it take to build an MVP for a startup?",
    answer:
      "Your MVP can be ready in as little as 6–8 weeks using agile methodologies and rapid prototyping.",
  },
  {
    question: "What technologies do you use in startup software development?",
    answer:
      "We use React, Node.js, Flutter, and AWS. Our approach is tech-agnostic based on your needs.",
  },
  {
    question: "Do you offer mobile and web app development for startups?",
    answer:
      "Yes! We build fast, scalable, and responsive mobile and web applications.",
  },
  {
    question: "How does your agile development model benefit startups?",
    answer:
      "Agile allows fast iteration, quick feedback, and reduced risk.",
  },
  {
    question: "Do you offer affordable MVP development for tech startups?",
    answer:
      "Yes, we focus on lean development to reduce cost and maximize impact.",
  },
  {
    question: "How does BlueHorse stand out in software development for startups?",
    answer:
      "We combine experience, speed, flexibility, and scalability.",
  },
  {
    question: "What is software development for startups?",
    answer:
      "It’s the process of building tailored digital products like MVPs and apps for early-stage companies.",
  },
  {
    question: "What startup industries do you support?",
    answer:
      "We support fintech, healthtech, edtech, SaaS, and eCommerce.",
  },
  {
    question:
      "What makes your software development different from traditional IT vendors?",
    answer:
      "We are agile, flexible, cost-efficient, and startup-focused.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-[#f9fafb] py-20">
      <div className="max-w-4xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-12">
          <h2 className="text-40 font-semibold text-[#515253] uppercase tracking-wide big-noodle">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500 mt-4">
            Get answers to common questions about our Shopify app development services.
          </p>
        </div>

        {/* ACCORDION */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg bg-white overflow-hidden transition-all duration-300"
            >
              {/* QUESTION */}
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <h3 className="text-[#515253] font-bold text-[18px]">
                  {faq.question}
                </h3>

                {/* ICON */}
                <span className="text-xl text-gray-500 transition-all duration-300">
                  {activeIndex === index ? <FiX /> : <FiPlus />}
                </span>
              </button>

              {/* ANSWER */}
              <div
                className={`px-6 text-gray-600 text-[17px] leading-relaxed transition-all duration-300 ${
                  activeIndex === index
                    ? "max-h-40 pb-5 opacity-100"
                    : "max-h-0 opacity-0 overflow-hidden"
                }`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
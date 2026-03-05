'use client';

import React, { useState } from 'react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const ShopifyFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number>(0); // First item open by default (matches image)

  const faqs: FAQItem[] = [
    {
      id: 1,
      question: 'What are Shopify development services?',
      answer:
        'Shopify development services involve designing, building, customizing, and optimizing online stores on Shopify to improve performance and conversions. These services include custom theme development, app integrations, performance optimization, migration, and scalable architecture planning for growing eCommerce businesses and agencies.',
    },
    {
      id: 2,
      question: 'How does custom Shopify development improve business performance?',
      answer:
        'Custom Shopify development tailors your store to your exact business needs, resulting in faster load times, seamless user experience, better mobile performance, and higher conversion rates.',
    },
    {
      id: 3,
      question: 'How does Shopify customization increase conversion rates?',
      answer:
        'Professional customization improves navigation, checkout flow, branding, and trust signals — all of which reduce cart abandonment and boost conversions.',
    },
    {
      id: 4,
      question: 'Can Shopify development improve SEO and organic traffic?',
      answer:
        'Yes. Custom Shopify development includes clean code, fast loading speeds, proper schema markup, and mobile optimization that significantly improve search rankings and organic traffic.',
    },
    {
      id: 5,
      question: 'What is white-label Shopify development for agencies?',
      answer:
        'White-label Shopify development allows agencies to offer fully custom Shopify stores under their own brand while we handle the technical development and support.',
    },
    {
      id: 6,
      question: 'How much do Shopify development services cost in India?',
      answer:
        'Costs typically range from ₹50,000 to ₹5,00,000+ depending on complexity, custom features, apps, and ongoing support. We provide free quotes tailored to your needs.',
    },
    {
      id: 7,
      question: 'How long does it take to build a Shopify store?',
      answer:
        'A standard Shopify store takes 3–6 weeks. A fully custom Shopify Plus store with advanced integrations usually takes 8–12 weeks.',
    },
    {
      id: 8,
      question: 'What is Shopify Plus and who should use it?',
      answer:
        'Shopify Plus is the enterprise plan for high-volume brands. It offers unlimited staff accounts, advanced reporting, dedicated support, and custom checkout — perfect for businesses doing $1M+ annually.',
    },
    {
      id: 9,
      question: 'Do you provide Shopify store migration and integrations?',
      answer:
        'Yes! We specialize in seamless migration from WooCommerce, Magento, BigCommerce, etc., and integrate ERP, CRM, payment gateways, and third-party apps.',
    },
    {
      id: 10,
      question: 'What results can businesses expect from professional Shopify development?',
      answer:
        'Businesses typically see 2–5x sales growth, 40–60% faster load times, 30%+ higher conversion rates, and significantly reduced cart abandonment.',
    },
    {
      id: 11,
      question: 'Is Shopify better than Magento?',
      answer:
        'For most D2C and mid-size businesses, Shopify is better due to its ease of use, faster development, lower maintenance, and excellent app ecosystem. Magento is more suitable only for extremely complex enterprise needs.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index); // Click again to close (matches clean design)
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-5 sm:px-6">
        {/* Header - Exact match to image */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className="mt-3 text-lg text-gray-600">Exploring Common Inquiries</p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.id}
                className={`rounded-2xl overflow-hidden border transition-all duration-300 ${
                  isOpen
                    ? 'border-sky-200 bg-sky-50 shadow-sm'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                {/* Question Row */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-start justify-between px-6 py-6 text-left group focus:outline-none"
                >
                  <div className="flex gap-6 flex-1">
                    {/* Blue Number */}
                    <span className="font-semibold text-sky-600 text-2xl min-w-[38px]">
                      {String(faq.id).padStart(2, '0')}
                    </span>

                    {/* Question Text */}
                    <h3 className="text-[17px] font-medium text-gray-900 leading-relaxed pr-8">
                      {faq.question}
                    </h3>
                  </div>

                  {/* Blue Circle Icon */}
                  <div
                    className={`w-9 h-9 flex-shrink-0 flex items-center justify-center rounded-full border-2 transition-all duration-300
                      ${isOpen
                        ? 'bg-sky-600 border-sky-600 text-white'
                        : 'border-gray-300 group-hover:border-sky-500'
                      }`}
                  >
                    <span className="text-3xl font-light leading-none transition-transform duration-300">
                      {isOpen ? '−' : '+'}
                    </span>
                  </div>
                </button>

                {/* Answer - Smooth slide down */}
                <div
                  className={`overflow-hidden transition-all duration-300 px-6 ${
                    isOpen ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="pl-[54px] text-[15.5px] text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ShopifyFAQ;
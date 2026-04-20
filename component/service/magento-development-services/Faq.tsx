'use client';

import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

/* ✅ Styled Table (Matches Your Screenshot) */
const MagentoComparisonTable = () => {
    const data = [
        {
            feature: "Performance",
            magento: "Slower performance",
            magento2: "50% faster load times",
        },
        {
            feature: "Admin Interface",
            magento: "Complex and outdated",
            magento2: "Modern, user-friendly UI",
        },
        {
            feature: "Mobile-Friendly",
            magento: "Limited mobile responsiveness",
            magento2: "Fully responsive design",
        },
        {
            feature: "Extensions & Plugins",
            magento: "Fewer modern extensions",
            magento2: "Rich extension marketplace",
        },
        {
            feature: "Security Features",
            magento: "Basic security patches",
            magento2: "Advanced security protocols",
        },
        {
            feature: "Scalability",
            magento: "Moderate",
            magento2: "Highly scalable for large stores",
        },
        {
            feature: "Checkout Process",
            magento: "Multi-step, less efficient",
            magento2: "Simplified 2-step checkout",
        },
        {
            feature: "Support",
            magento: "Limited official support",
            magento2: "Improved support channels",
        },
    ];

    return (
        <div className="overflow-x-auto mt-4">
            <table className="w-full border border-gray-300 text-sm text-left">

                {/* Header */}
                <thead className="bg-gray-200 text-gray-800">
                    <tr>
                        <th className="border border-gray-300 px-4 py-3 font-bold text-base md:text-lg">
                            Feature
                        </th>
                        <th className="border border-gray-300 px-4 py-3 font-bold text-base md:text-lg">
                            Magento
                        </th>
                        <th className="border border-gray-300 px-4 py-3 font-bold text-base md:text-lg">
                            Magento 2
                        </th>
                    </tr>
                </thead>

                {/* Body */}
                <tbody className="bg-transparent text-gray-700">
                    {data.map((row, i) => (
                        <tr key={i}>
                            <td className="border border-gray-300 px-4 py-3 text-base md:text-lg">
                                {row.feature}
                            </td>
                            <td className="border border-gray-300 px-4 py-3 text-base md:text-lg">
                                {row.magento}
                            </td>
                            <td className="border border-gray-300 px-4 py-3 text-base md:text-lg">
                                {row.magento2}
                            </td>
                        </tr>
                    ))}
                </tbody>

            </table>
        </div>
    );
};

/* ✅ FAQ DATA */
const faqs = [
    {
        id: "01",
        question: "What’s the use of Magento development services ?",
        answer:
            "With over 14 years of industry experience, we are experts in Magento development. Our team of certified Magento developers specializes in designing and developing your website, ensuring it meets the highest standards. We offer flexible business models tailored to different business verticals, and our developers strictly follow international coding guidelines and standards."
    },
    {
        id: "02",
        question: "Why do I need to upgrade to Magento 2 ?",
        answer:
            "Keeping your website up-to-date is essential for delivering a seamless user experience and enhancing security. Upgrading to Magento 2 can reduce page load time by 30-50% and handle 39% more orders per hour compared to Magento 1, making it a powerful eCommerce platform. This upgrade allows you to engage with more customers and streamline the checkout process."
    },
    {
        id: "03",
        question: "How do I keep my Magento store secure ?",
        answer:
            "Our development team ensures that all necessary security measures are thoroughly implemented with the latest Magento 2 version during the website development phase. Additionally, we offer a regular maintenance package that includes security updates, keeping your website current and protected against vulnerabilities."
    },
    {
        id: "04",
        question: "What are the benefits of integrating third-party extensions with Magento 2?",
        answer:
            "Integrating third-party extensions with Magento 2 enhances your store's functionality by adding features like advanced search options, payment gateways, and marketing tools. Our team carefully selects and customizes extensions to fit your specific business needs, ensuring seamless integration without compromising performance or security."
    },
    {
        id: "05",
        question: "How can Magento 2 help improve my website's SEO?",
        answer:
            "Magento 2 is designed with built-in SEO features that optimize your website for search engines. With capabilities like customizable URLs, meta tags, and sitemaps, it helps your site rank higher in search results. Our developers fine-tune these features to align with the latest SEO practices, driving more organic traffic to your store."
    },
    {
        id: "06",
        question: "Can Magento 2 handle a high volume of traffic and transactions?",
        answer:
            "Magento 2 is built to handle large-scale eCommerce operations, supporting thousands of products and high traffic volumes without compromising performance. Our developers optimize your store to ensure fast loading times and efficient processing, even during peak traffic periods, ensuring a smooth shopping experience for your customers."
    },

    /* ✅ TABLE ANSWERS */
    {
        id: "07",
        question: "Which is better eCommerce platform - Magento 2 or WooCommerce?",
        answer: <MagentoComparisonTable />
    },
    {
        id: "08",
        question: "Which is better eCoomerce platform- Magento2 or Shopify?",
        answer: <MagentoComparisonTable />
    },
    {
        id: "09",
        question: "Which is better eCoomerce platform- Magento or Magento2 ?",
        answer: <MagentoComparisonTable />
    }
];

/* ✅ MAIN COMPONENT */
export default function MagentoFAQ() {
    const [open, setOpen] = useState(0);

    return (
        <section className="container">

            {/* Heading */}
            <div className="text-center mb-12">
                <h2 className="Section-Title text-[#292930]">
                    Frequently Asked Questions
                </h2>
                <p className="mt-4 Section-Details text-[#606060]! md:text-[18px]!">Exploring Common Inquiries</p>
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
                                <div className="flex gap-3 flex-col md:flex-row items-center">

                                    <span className="text-[#0C83D1] text-48 font-bold relative -left-25.75 md:left-0">
                                        {faq.id}
                                    </span>

                                    <h3 className="text-[24px] text-[#515253] font-medium">
                                        {faq.question}
                                    </h3>

                                </div>

                                <div
                                    className={`w-12 h-12 flex items-center justify-center rounded-full flex-shrink-0 
                  ${active ? "bg-white text-black" : "bg-[#0C83D1] text-white"}`}
                                >
                                    {active ? <FaMinus size={25} /> : <FaPlus size={25} />}
                                </div>
                            </div>

                            {/* Answer */}
                            <div
                                className={`grid transition-all duration-500 ease-in-out ${active ? "grid-rows-[1fr] opacity-100 mt-2" : "grid-rows-[0fr] opacity-0"
                                    }`}
                            >
                                <div className="overflow-hidden">
                                    <div className="px-16 pb-6 text-[#515253] leading-relaxed">
                                        {faq.answer}
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

        </section>
    );
}
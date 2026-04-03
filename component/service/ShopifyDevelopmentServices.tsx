'use client';

import React from 'react';
import Image from 'next/image';
import { FiArrowRight } from "react-icons/fi";
interface Service {
    id: number;
    title: string;
    description: string;
    iconUrl: string;
    link: string;
}

const ShopifyDevelopmentServices: React.FC = () => {
    const services: Service[] = [
        {
            id: 1,
            title: "Shopify App Development",
            description: "Develop tailored public or private Shopify apps to extend store functionality, streamline operations, and deliver a personalized experience for your customers.",
            iconUrl: "https://www.bluehorse.in/bluehorse-html/ecommercedevelopmentassets/image/so-icon.svg",
            link: "https://www.bluehorse.in/services/ecommerce-development-services/shopify-development-services/shopify-app-development-services",
        },
        {
            id: 2,
            title: "Shopify Mobile App Development",
            description: "Build intuitive and engaging mobile apps for your Shopify store using technologies like React Native and Flutter. Deliver a seamless mobile shopping experience to your users.",
            iconUrl: "https://www.bluehorse.in/bluehorse-html/ecommercedevelopmentassets/image/ece-icon.svg",
            link: "https://www.bluehorse.in/services/ecommerce-development-services/shopify-development-services/shopify-mobile-app-development",
        },
        {
            id: 3,
            title: "Headless Commerce with Shopify Hydrogen",
            description: "Go beyond traditional storefronts. Build blazing-fast, customizable front-ends using Shopify’s Hydrogen and Oxygen for headless commerce.",
            iconUrl: "https://www.bluehorse.in/bluehorse-html/ecommercedevelopmentassets/image/mci-icon.svg",
            link: "#",
        },
        {
            id: 4,
            title: "Shopify Theme Customization & Development",
            description: "Design and develop responsive, fast-loading, and conversion-optimized themes that reflect your brand identity and engage customers.",
            iconUrl: "https://www.bluehorse.in/bluehorse-html/ecommercedevelopmentassets/image/so-icon.svg",
            link: "#",
        },
        {
            id: 5,
            title: "Shopify Plus Enterprise Solutions",
            description: "Scale your enterprise store with Shopify Plus by enabling advanced features, automation, and seamless third-party integrations tailored for high-growth performance.",
            iconUrl: "https://www.bluehorse.in/bluehorse-html/ecommercedevelopmentassets/image/ece-icon.svg",
            link: "#",
        },
        {
            id: 6,
            title: "Shopify Store Migration & Upgrade",
            description: "Migrate your existing eCommerce store from WooCommerce, Magento, BigCommerce, or custom platforms to Shopify with zero data loss and minimal downtime.",
            iconUrl: "https://www.bluehorse.in/bluehorse-html/ecommercedevelopmentassets/image/mci-icon.svg",
            link: "#",
        },
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Header - matching the screenshot style */}
                <div className="text-center mb-8 md:mb-10 lg:mb-16 ">
                    <h2 className="md:text-20 lg:text-40 font-normal text-[#515253] tracking-[2px] uppercase big-noodle">
                        OUR SHOPIFY DEVELOPMENT SERVICES
                    </h2>
                    <p className="mt-5 text-xl text-gray-600 mx-auto">
                        We offer a complete suite of Shopify services designed to meet the needs of fast-growing eCommerce brands:
                    </p>
                </div>

                {/* Services Grid - 1 / 2 / 3 columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="group bg-white border border-gray-200 rounded-[10px] p-6.25 hover:border-[#079bcb] border-2  flex flex-col m-4"
                        >
                            {/* Icon - matches the light blue rounded box from screenshot */}
                            <div className="w-20 h-20 bg-[#F5F5F5] rounded-2xl flex items-center justify-center mb-8">
                                <Image
                                    src={service.iconUrl}
                                    alt={service.title}
                                    width={52}
                                    height={52}
                                    className="object-contain"
                                />
                            </div>

                            {/* Title with blue underline */}
                            <div className="mb-6">
                                <h3 className="text-[18px] font-semibold text-gray-900 leading-tight">
                                    {service.title}
                                </h3>
                                <div className="mt-3 h-1.5 w-37.5 bg-[#0b83d1] rounded-full" />
                            </div>

                            {/* Description */}
                            <p className="text-gray-600 text-[15px] leading-relaxed flex-1 mb-8">
                                {service.description}
                            </p>

                            {/* View More link - matches screenshot */}
                            <a
                                href={service.link}
                                className="inline-flex items-center font-medium text-base text-[#079bcb] transition-all group-hover:gap-x-1"
                            >
                                View More
                                <FiArrowRight className="text-lg transition-transform group-hover:translate-x-1" />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ShopifyDevelopmentServices;
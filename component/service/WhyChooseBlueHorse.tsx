'use client';

import Image from 'next/image';
import React from 'react';

const WhyChooseBlueHorse = () => {
    const stats = [
        { number: '15', label: 'Years of experience in eCommerce Development', isBlue: false },
        { number: '10', label: 'Online only Store with Million Dollar Plus', isBlue: true },
        { number: '100', label: 'eCommerce Website Development', isBlue: false },
        { label: 'End to end', subLabel: 'eCommerce Solutions', isBlue: true, isSpecial: true },
        { number: '10', label: 'Retail Brands with Billion Dollar turnover', isBlue: false },
        { number: '50', label: 'eCommerce Experts', isBlue: true },
    ];

    const features = [
        {
            title: 'Platform Expertise',
            description:
                'Bluehorse excels in popular eCommerce platforms like Magento, Shopify, and WooCommerce, allowing us to develop custom eCommerce solutions that perfectly align with your business requirements.',
            icon: '/assest/images/sliderlogo/Paltform.png',
        },
        {
            title: 'Customization & Robust Architecture',
            description:
                'With Bluehorse, you can expect tailored eCommerce solutions that are highly customizable and built on a robust architecture, ensuring a scalable and secure online store for your business.',
            icon: '/assest/images/sliderlogo/Customization.png',
        },
        {
            title: 'Proven Track Record',
            description:
                'Bluehorse has a proven track record of delivering successful eCommerce projects, helping businesses achieve their online goals and drive significant growth in sales and revenue.',
            icon: '/assest/images/sliderlogo/Proven.png',
        },
        {
            title: 'Open Communication',
            description:
                'We prioritize open and transparent communication throughout the development process, keeping you informed and involved at every stage to ensure your vision is realized.',
            icon: '/assest/images/sliderlogo/Open.png',
        },
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
                        WHY CHOOSE BLUEHORSE FOR SHOPIFY DEVELOPMENT?
                    </h2>
                    <p className="mt-6 text-xl text-gray-600 max-w-4xl mx-auto">
                        BlueHorse Software is a trusted Shopify development partner, committed to transforming your eCommerce
                        vision into a scalable, profitable, and sustainable business.
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className={`rounded-3xl p-10 text-center ${stat.isBlue
                                    ? 'bg-[#0C83D1] text-white'
                                    : 'bg-white border border-gray-200'
                                }`}
                        >
                            {stat.isSpecial ? (
                                <>
                                    <div className="text-5xl font-bold mb-4 tracking-wide">{stat.label}</div>
                                    <div className="text-[18px] text-blue-100 font-medium">{stat.subLabel}</div>
                                </>
                            ) : (
                                <>
                                    <div className="text-[48px] leading-none font-bold">
                                        {stat.number}
                                        <span className="text-[48px]">+</span>
                                    </div>
                                    <p
                                        className={`mt-8 text-lg leading-tight font-medium ${stat.isBlue ? 'text-blue-100' : 'text-gray-700'
                                            }`}
                                    >
                                        {stat.label}
                                    </p>
                                </>
                            )}
                        </div>
                    ))}
                </div>

                {/* Features Grid - Now with YOUR custom images */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group bg-white border border-gray-100 rounded-[5px] p-5 m-2.5 hover:border-blue-200"
                        >
                            <div className="mb-8 flex justify-center">
                                <Image
                                    src={feature.icon}
                                    alt={feature.title}
                                    width={60}
                                    height={60}
                                    className="object-contain"
                                    priority={false}
                                />
                            </div>

                            <h3 className="text-2xl font-medium text-gray-900 mb-4 text-center">
                                {feature.title}
                            </h3>

                            <p className="text-gray-600 text-center leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseBlueHorse;
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
            <div className="container">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="Section-Title text-[#292930]">
                        Why BlueHorse Software
                    </h2>
                    <p className="mt-4 Section-Details text-[#606060]! md:text-[18px]!">
                        Explore How We Stand Out in Turning Your eCommerce Dreams into a Profitable and Sustainable Reality.
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-3 mb-20 max-w-230 mx-auto">
                    {stats.map((stat, index) => {
                        const isBlue =
                            Math.floor(index / 2) % 1 === 0
                                ? index % 2 !== 0
                                : index % 2 === 0;

                        return (
                            <div
                                key={index}
                                className={`
          py-7.5 px-6.25 text-center
          ${isBlue ? 'bg-[#0C83D1] text-white' : 'bg-white'}
        `}
                            >
                                {stat.isSpecial ? (
                                    <>
                                        <div className="text-3xl md:text-5xl font-bold mb-2 md:mb-4 tracking-wide">
                                            {stat.label}
                                        </div>
                                        <div
                                            className={`text-[14px] md:text-[18px] font-medium ${isBlue ? 'text-blue-100' : 'text-gray-600'
                                                }`}
                                        >
                                            {stat.subLabel}
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className="text-[32px] md:text-[48px] leading-none font-bold">
                                            {stat.number}
                                            <span>+</span>
                                        </div>

                                        <p
                                            className={`mt-4 md:mt-8 text-sm md:text-lg leading-tight font-medium ${isBlue ? 'text-blue-100' : 'text-gray-700'
                                                }`}
                                        >
                                            {stat.label}
                                        </p>
                                    </>
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* Features Grid - Now with YOUR custom images */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group bg-white border border-[rgb(212,224,237,0.7)]  p-5 md:m-2.5 hover:border-blue-200"
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

                            <h3 className="text-base md:text-lg font-normal text-gray-900 mb-4 text-center">
                                {feature.title}
                            </h3>

                            <p className="text-heading text-center leading-relaxed text-sm md:text-base">
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
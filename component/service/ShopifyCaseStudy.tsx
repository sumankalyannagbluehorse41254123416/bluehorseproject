'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ShopifyCaseStudy = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900">
            SHOPIFY DEVELOPMENT CASE STUDY
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Content - Fully responsive text */}
          <div className="space-y-6 sm:space-y-8">
            {/* KISAH Logo */}
            
              <Image
                src="/assest/images/sliderlogo/Group.avif"
                alt="KISAH Logo"
                width={240}
                height={76}
                className=""
                priority
              /> 
            {/* Main Heading */}
            <h3 className="text-2xl sm:text-3xl lg:text-[29px] leading-tight font-semibold text-gray-900 text-center lg:text-left">
              Empowering a D2C Fashion Brand with a Scalable Shopify Store
            </h3>

            {/* Description */}
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed text-center lg:text-left max-w-prose mx-auto lg:mx-0">
              BlueHorse Software collaborated with Kisah, a premium ethnic menswear brand, to build a strong 
              direct-to-consumer (D2C) identity by launching a fully functional and customized Shopify store. 
              Kisah, which initially sold exclusively through marketplaces like Flipkart and Myntra, aimed to 
              create a distinct online brand presence in the men’s ethnic wear category.
            </p>

            {/* Button - Full width on mobile for better touch target */}
            <div className="flex justify-center lg:justify-start pt-2">
              <Link
                href="https://www.bluehorse.in/work/kisah"
                target="_blank"
                className="inline-block w-full sm:w-auto bg-blue-600 hover:bg-blue-700 transition-all text-white font-medium text-lg px-10 py-4 rounded-2xl text-center"
              >
                View Full Case Study
              </Link>
            </div>
          </div>

          {/* Right Side – Laptop Mockup (fully responsive circles & image) */}
          <div className="relative flex justify-center lg:justify-end pt-6 lg:pt-0">
            {/* Blue Circle Background - Responsive size */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] lg:w-[520px] lg:h-[520px] bg-blue-600 rounded-full z-0" />
            
            {/* Decorative Ring - Responsive size */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] sm:w-[440px] sm:h-[440px] lg:w-[580px] lg:h-[580px] border-2 border-blue-300/40 rounded-full z-0" />

            {/* Laptop Image - Responsive width + perfect aspect ratio */}
            <div className="relative z-10 w-full max-w-[340px] sm:max-w-[420px] lg:max-w-[650px]">
              <Image
                src="/assest/images/sliderlogo/kisha_banner.png"
                alt="Kisah Shopify Store on Laptop"
                width={650}
                height={410}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default ShopifyCaseStudy;
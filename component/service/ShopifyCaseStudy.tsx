'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ShopifyCaseStudy = () => {
  return (
    <section className="py-41 sm:py-8 lg:py-10 bg-white relative overflow-hidden">
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
                className="inline-block w-full sm:w-auto bg-[text-blue] transition-all text-white font-medium text-base px-7.5 py-2.5 rounded-[5px] text-center"
              >
                View Full Case Study
              </Link>
            </div>
          </div>

          {/* Right Side – Laptop Mockup (fully responsive circles & image) */}
          <div className="relative flex justify-center lg:justify-end pt-6 lg:pt-0">
            {/* Blue Circle Background - Responsive size */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-[#079bcb] rounded-full " />
            
            {/* Decorative Ring - Responsive size */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[456px] h-[456px] border-2 border-blue-300/40 rounded-full z-0" />

            {/* Laptop Image - Responsive width + perfect aspect ratio */}
            <div className="relative z-10 w-[450px] -left-15.5">
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
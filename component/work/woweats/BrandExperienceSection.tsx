"use client";

import Image from "next/image";

export default function BrandExperienceSection() {
  return (
    <section className="w-full py-24 bg-white">
      <div className="container">
        <div className="grid grid-cols-2 gap-16">
          
          {/* Left Image (7/12) */}
          <div className="">
            <Image
              src="https://www.bluehorse.in/wowmomo_case_study/asset/img/resolvechallange.jfif"
              alt="Unified Omnichannel Experience"
              width={700}
              height={600}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Right Content (5/12) */}
          <div className="">
            <h2 className="text-4xl font-semibold text-gray-800 mb-6 leading-snug">
              Unified Omnichannel Experience Across All Wow! Brands
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              We created an omnichannel experience for customers across all
              six Wow! Brands and 600+ stores. This simplifies the ordering
              process and enhances customer convenience. For example,
              customers can view their orders in real time when shopping at
              any Wow! store, keeping them informed and engaged. The app
              provides a seamless connection across various touchpoints,
              resulting in a more satisfying and engaging customer journey.
              The team implemented a system that allows loyalty points to be
              transferred between brands (e.g., from Wow! China to Wow!
              Chicken or any other store). This feature enhances customer
              satisfaction by providing flexibility in how they can use their
              rewards.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

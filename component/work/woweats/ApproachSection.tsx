"use client";

import Image from "next/image";

export default function ApproachSection() {
  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
          
          {/* Left Image */}
          <div
            className="md:w-7/12"
            data-aos="fade-left"
            data-aos-duration="3000"
          >
            <Image
              src="https://bluehorse.in/wowmomo_case_study/asset/img/tripple.svg"
              alt="App Preview"
              width={700}
              height={600}
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Right Content */}
          <div
            className="md:w-5/12"
            data-aos="fade-right"
            data-aos-duration="3000"
          >
            <h2 className="text-4xl font-semibold text-gray-800 mb-6 leading-snug">
              Swiggy and Zomato-like Solutions with Advanced Tracking and Optimization
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              BlueHorse Software developed a Swiggy/Zomato-like platform for
              all Wow brands, offering a seamless online ordering experience
              for delivery, dine-in, and takeaway services. This platform
              integrates an advanced tracking system that ensures accurate
              distance calculations and seamless navigation, utilizing
              real-time latitude and longitude data for precise customer and
              store distance mapping. To enhance user experience, the system
              features smooth and responsive navigation, guaranteeing timely
              deliveries and efficient route management, similar to the
              accuracy and efficiency of Swiggy and Zomato.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

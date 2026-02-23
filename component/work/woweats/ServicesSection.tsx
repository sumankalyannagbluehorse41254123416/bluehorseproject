"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const ServicesSection = () => {
  return (
    <section className="w-full bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-3 gap-12">

        {/* LEFT SIDE */}
        <div className="lg:col-span-2 grid md:grid-cols-2 gap-12">

          {/* Column 1 */}
          <div>
            <h2 className="inline-block text-[20px] font-semibold border-b border-black pb-3 mb-6 hover:border-[#0c83d1] transition-colors duration-300">
              eCommerce Development Services
            </h2>

            {["Shopify", "Magento", "TezCommerce"].map((item, index) => (
              <Link
                key={index}
                href="#"
                className="flex justify-between items-center py-5 border-b border-gray-200 text-gray-700 
                 hover:text-[#0c83d1] hover:border-[#0c83d1] 
                 transition-all duration-300 hover:translate-x-[10px]"
              >
                <span>{item}</span>
                <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                  ›
                </span>
              </Link>
            ))}
          </div>

          {/* Column 2 */}
          <div>
            <h2 className="text-[20px] font-semibold pb-3 mb-6 
                  transition-colors duration-300">
              Other Services
            </h2>

            {[
              "Software development for Startups",
              "Mobile App Development",
              "AI Development",
              "Organic Marketing",
            ].map((item, index) => (
              <Link
                key={index}
                href="#"
                className="group flex justify-between items-center py-5 border-b border-gray-200 
                 text-gray-700 transition-all duration-300
                 hover:text-[#0c83d1] hover:border-[#0c83d1] hover:translate-x-[10px]"
              >
                <span className="transition-all duration-300">
                  {item}
                </span>

                <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                  ›
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE SLIDER */}
        <div>
          <Swiper
            modules={[Pagination, Autoplay]}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 3000, 
              disableOnInteraction: false, 
            }}
            pagination={{
              clickable: true,
            }}
            className="nav custom-swiper rounded-2xl overflow-hidden"
          >
            {/* Slide 1 */}
            <SwiperSlide>
              <div className="bg-[#0c83d1] text-white p-8 rounded-2xl min-h-[320px] flex flex-col justify-between">

                <div>
                  <h3 className="text-xl font-semibold">
                    7-Day Go Live
                  </h3>

                  {/* Pagination will appear here */}
                  <div className="mt-3">
                    <div className="swiper-pagination"></div>
                  </div>

                  <p className="text-lg leading-relaxed mt-6">
                    Register your brand on our platform and launch a fully
                    optimized Shopify store in 1 week.
                  </p>
                </div>

                <div className="border-t border-white/40 pt-4 mt-6">
                  <Link
                    href="#"
                    className="inline-flex items-center gap-2 hover:underline"
                  >
                    Go digital in 7 days →
                  </Link>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 2 */}
            <SwiperSlide>
              <div className="bg-[#0c83d1] text-white p-8 rounded-2xl min-h-[320px] flex flex-col justify-between">

                <div>
                  <h3 className="text-xl font-semibold">
                    7-Day Go Live
                  </h3>

                  {/* Pagination will appear here */}
                  <div className="mt-3">
                    <div className="swiper-pagination"></div>
                  </div>

                  <p className="text-lg leading-relaxed mt-6">
                    Register your brand on our platform and launch a fully
                    optimized Shopify store in 1 week.
                  </p>
                </div>

                <div className="border-t border-white/40 pt-4 mt-6">
                  <Link
                    href="#"
                    className="inline-flex items-center gap-2 hover:underline"
                  >
                    Go digital in 7 days →
                  </Link>
                </div>
              </div>
            </SwiperSlide>

          </Swiper>
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;

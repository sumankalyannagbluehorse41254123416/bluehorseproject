"use client";

import { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    logo: "https://www.bluehorse.in/BH%20WORK%20PAGE/assets/images/eazydinner_logo.png",
    title: "Made Food Discovery Smarter with a Scalable Dining Experience",
    desc: "EazyDiner is a dining application that allows users to explore restaurants based on curated categories and top and new restaurant recommendations.",
    image: "https://www.bluehorse.in/bluehorse-html/ecommercedevelopmentassets/image/eazydiner_banner.png",
    link: "#",
  },
  {
    logo: "https://www.bluehorse.in/bluehorse-html/ecommercedevelopmentassets/image/creoo-logo.png",
    title: "Transforming Student Futures with Scalable Mentorship & Internship Solutions",
    desc: "Creoo is a dynamic digital platform that offers personalized mentorship, career guidance, and internship support.",
    image: "https://www.bluehorse.in/bluehorse-html/ecommercedevelopmentassets/image/creeo_banner.png",
    link: "#",
  },
  {
    logo: "https://www.bluehorse.in/bluehorse-html/ecommercedevelopmentassets/image/lypten-logo.png",
    title: "Transforming a Healthcare Vision into a Scalable Digital Platform",
    desc: "Leptyn is an innovative healthcare startup providing science-based weight loss solutions.",
    image: "https://www.bluehorse.in/bluehorse-html/ecommercedevelopmentassets/image/lypten_banner.png",
    link: "#",
  },
];

export default function CaseStudySlider() {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  return (
    <section className="bg-[#f3f4f6] py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <h2 className="text-center text-3xl font-semibold text-gray-700 mb-16 uppercase tracking-wide">
          Case Studies
        </h2>

        <Swiper
          modules={[Navigation, Pagination]}
          loop={true}
          pagination={{ clickable: true }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}

          /* 🔥 MAIN FIX */
          onSwiper={(swiper) => {
            setTimeout(() => {
              if (
                swiper.params.navigation &&
                typeof swiper.params.navigation !== "boolean"
              ) {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;

                swiper.navigation.destroy();
                swiper.navigation.init();
                swiper.navigation.update();
              }
            });
          }}

          className="relative caseStudySwiper pb-10!"
        >
          {slides.map((slide, i) => (
            <SwiperSlide key={i}>
              <div className="flex flex-col lg:flex-row items-center gap-10 min-h-112.5">

                {/* LEFT */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center">

                  <Image
                    src={slide.logo}
                    alt="logo"
                    width={150}
                    height={50}
                    className="mb-6"
                  />

                  <h3 className="text-3xl lg:text-4xl font-semibold text-gray-800 leading-snug mb-6">
                    {slide.title}
                  </h3>

                  <p className="text-gray-600 text-lg leading-relaxed mb-8">
                    {slide.desc}
                  </p>

                  <a
                    href={slide.link}
                    className="inline-flex items-center gap-2 bg-[#0C83D1] text-white px-6 py-3 rounded-lg hover:bg-[#0966a3] transition w-fit"
                  >
                    View Full Case Study →
                  </a>
                </div>

                {/* RIGHT */}
                <div className="relative w-full lg:w-1/2 flex justify-center items-center h-100">

                  {/* Border Circle */}
                  <div className="absolute w-105 h-105 rounded-full border border-[#0C83D1]/40"></div>

                  {/* Blue Circle */}
                  <div className="absolute w-[320px] h-80 rounded-full bg-[#0C83D1]"></div>

                  {/* Image */}
                  <Image
                    src={slide.image}
                    alt="case"
                    width={500}
                    height={300}
                    className="relative z-10 object-contain"
                  />
                </div>

              </div>
            </SwiperSlide>
          ))}

          {/* ✅ CUSTOM BUTTONS */}
          <div className="casstudy_slider-nav-arrows absolute bottom-0 right-0 flex gap-3 z-20">
            <button
              ref={prevRef}
              className="casstudy_slider-nav-arrow-btn "
            >
              ←
            </button>
            <button
              ref={nextRef}
              className="casstudy_slider-nav-arrow-btn "
            >
              →
            </button>
          </div>

        </Swiper>
      </div>
    </section>
  );
}
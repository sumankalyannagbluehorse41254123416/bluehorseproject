"use client";

import { useState } from "react";
import Image from "next/image";
import { MoveLeft, MoveRightIcon } from "lucide-react";

const slides = [
  {
    logo: "https://www.bluehorse.in/bluehorse-html/ecommercedevelopmentassets/image/Wow_logo_website-removebg-preview.png",
    title:
      "Unifying Multiple Brands into a Seamless Omnichannel Experience",
    description:
      "Wow Eats is an all-in-one food ordering app developed for Wow! Momo, Wow! China, and Wow! Chicken. The platform brings together all Wow brands under one roof—allowing customers to order from any outlet via a single interface.",
    image: "https://www.bluehorse.in/bluehorse-html/ecommercedevelopmentassets/image/Wow_momo_logoimg.png",
    link: "https://www.bluehorse.in/work/creoo",
  },
  {
    logo: "/images/aseemaa-logo.png",
    title:
      "Empowering Digital Publishers Through a Scalable Subscription-Driven Platform",
    description:
      "Aseemaa is a feature-rich digital publishing platform designed for modern brands, content creators, and media houses.",
    image: "/images/aseemaa.png",
    link: "https://www.bluehorse.in/work/eazydiner-tech-solution-for-food-industry",
  },
  {
    logo: "/images/leptyn-logo.png",
    title:
      "Transforming a Healthcare Vision into a Scalable Digital Platform",
    description:
      "Leptyn is an innovative healthcare startup led by top doctors and weight-loss experts.",
    image: "/images/leptyn.png",
    link: "https://www.bluehorse.in/work/leptyn",
  },
];

export default function CaseStudySlider() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="bg-gray-50 py-16">
      <div className="text-center mb-10">
        <h2 className="Section-Title">
          Case Studies
        </h2>
      </div>

      <div className="container mx-auto relative overflow-hidden rounded-xl">
        {/* Slides Wrapper */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="min-w-full flex flex-col-reverse md:flex-row items-center py-10 px-4"
            >
              {/* Content */}
              <div className="flex-1 md:pr-6 text-center md:text-left">
                <Image
                  src={slide.logo}
                  alt="logo"
                  width={180}
                  height={80}
                  className="mb-6 mx-auto md:mx-0"
                />

                <h3 className="text-2xl md:text-[34px] mb-3 leading-tight text-heading open-sans font-bold">
                  {slide.title}
                </h3>

                <p className="text-gray-700 text-base md:text-lg mb-6 leading-relaxed">
                  {slide.description}
                </p>

                <a
                  href={slide.link}
                  target="_blank"
                  className="group flex w-fit gap-2 items-center bg-blue text-white px-6 py-2 rounded-md hover:bg-blue/80 transition duration-300 ease-in-out"
                >
                  View Full Case Study <MoveRightIcon className="w-5 group-hover:translate-x-1.5 transition duration-300 ease-in-out"/>
                </a>
              </div>

              {/* Image */}
              <div className="flex-1 flex justify-center items-center relative mb-6 md:mb-0">
                <div className="hidden md:block w-[450px] h-[450px] border border-blue-500 rounded-full absolute"></div>
                <div className="hidden md:block w-[320px] h-[320px] bg-blue-500 rounded-full absolute"></div>

                <Image
                  src={slide.image}
                  alt="case study"
                  width={250}
                  height={250}
                  className="relative z-10"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Arrows */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-6">
          <button
            onClick={prevSlide}
            className="hover:text-blue-600"
          >
            <MoveLeft className="w-8"/>
          </button>
          <button
            onClick={nextSlide}
            className="hover:text-blue-600"
          >
            <MoveRightIcon className="w-8"/>
          </button>
        </div>

        {/* Dots */}
        {/* <div className="absolute bottom-4 left-4 hidden md:flex gap-2">
          {slides.map((_, i) => (
            <div
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                current === i ? "bg-blue-600" : "bg-gray-300"
              }`}
            />
          ))}
        </div> */}
      </div>
    </section>
  );
}
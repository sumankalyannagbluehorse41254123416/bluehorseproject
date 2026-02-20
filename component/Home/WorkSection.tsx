"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const WorkSection = () => {
  const cardRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.4 },
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="bh_work_details custom_home py-16">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h2 className="text-[40px] text-center font-semibold">
          Our Work Defines Our Success
        </h2>

        <p className="text-center text-[16px] max-w-3xl mx-auto mt-4 mb-10 font-medium">
          As a top web and mobile app development company, our success is
          written in the solutions we build — not in what we say.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* WORK CARD */}
          <div className="flex flex-col">
            {/* CARD */}
            <div
              ref={cardRef}
              className="bh_work_img relative group h-175 overflow-hidden bg-cover bg-center rounded-md"
              style={{
                backgroundImage: "url('/assest/images/wow_momo.jpeg')",
              }}>
              {/* BLUE SLIDE LAYER */}
              <div
                className={`absolute inset-0 bg-cyan-600 z-20 transform ${
                  inView ? "translate-x-full" : "translate-x-0"
                } transition-transform duration-1200 ease-in-out`}
              />

              {/* HOVER OVERLAY */}
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-center items-center p-8 text-center z-30">
                <div className="mb-6">
                  <Image
                    src="https://www.bluehorse.in/BH WORK PAGE/assets/images/wowmomo_logo.png"
                    className="w-37.5 mx-auto"
                    alt="logo"
                    width={100}
                    height={100}
                  />
                </div>

                <a
                  target="_blank"
                  href="https://www.bluehorse.in/work/woweats"
                  className="text-white text-lg leading-relaxed">
                  Wow! Momo Foods, known for Wow! Momo, Wow! China, and Wow!
                  Chicken, is one of India’s fastest-growing QSR brands.
                </a>
              </div>

              {/* TAGS */}
              <div className="absolute bottom-10 left-10 flex gap-2 flex-wrap z-40">
                <span className="bg-white/20 backdrop-blur-md text-white text-sm px-3 py-1 rounded-md">
                  Top QSR Brand
                </span>
                <span className="bg-white/20 backdrop-blur-md text-white text-sm px-3 py-1 rounded-md">
                  Dine-in-app
                </span>
                <span className="bg-white/20 backdrop-blur-md text-white text-sm px-3 py-1 rounded-md">
                  Flutter
                </span>
              </div>
            </div>

            {/* LINK BELOW CARD */}
            <Link
              href="#"
              className="mt-12.5 text-gray-700 text-lg font-medium hover:text-black transition">
              View case study →
            </Link>
          </div>

          {/* WORK CARD */}
          <div className="flex flex-col">
            {/* CARD */}
            <div
              ref={cardRef}
              className="bh_work_img relative group h-175 overflow-hidden bg-cover bg-center rounded-md"
              style={{
                backgroundImage: "url('/assest/images/wow_momo.jpeg')",
              }}>
              {/* BLUE SLIDE LAYER */}
              <div
                className={`absolute inset-0 bg-cyan-600 z-20 transform ${
                  inView ? "translate-x-full" : "translate-x-0"
                } transition-transform duration-1200 ease-in-out`}
              />

              {/* HOVER OVERLAY */}
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-center items-center p-8 text-center z-30">
                <div className="mb-6">
                  <Image
                    src="https://www.bluehorse.in/BH WORK PAGE/assets/images/wowmomo_logo.png"
                    className="w-37.5 mx-auto"
                    alt="logo"
                    width={100}
                    height={100}
                  />
                </div>

                <a
                  target="_blank"
                  href="https://www.bluehorse.in/work/woweats"
                  className="text-white text-lg leading-relaxed">
                  Wow! Momo Foods, known for Wow! Momo, Wow! China, and Wow!
                  Chicken, is one of India’s fastest-growing QSR brands.
                </a>
              </div>

              {/* TAGS */}
              <div className="absolute bottom-10 left-10 flex gap-2 flex-wrap z-40">
                <span className="bg-white/20 backdrop-blur-md text-white text-sm px-3 py-1 rounded-md">
                  Top QSR Brand
                </span>
                <span className="bg-white/20 backdrop-blur-md text-white text-sm px-3 py-1 rounded-md">
                  Dine-in-app
                </span>
                <span className="bg-white/20 backdrop-blur-md text-white text-sm px-3 py-1 rounded-md">
                  Flutter
                </span>
              </div>
            </div>

            {/* LINK BELOW CARD */}
            <Link
              href="#"
              className="mt-12.5 text-gray-700 text-lg font-medium hover:text-black transition">
              View case study →
            </Link>
          </div>
        </div>

        {/* CTA BUTTON */}
        <div className="more_works mt-14 flex justify-center">
          <Link
            href="https://www.bluehorse.in/work.html"
            target="_blank"
            className="inline-block bg-cyan-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-cyan-700 transition">
            View All Case Studies
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;

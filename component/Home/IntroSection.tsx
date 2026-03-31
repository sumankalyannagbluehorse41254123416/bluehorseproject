"use client";

import React from "react";

const IntroSection: React.FC = () => {
  return (
    <section className="relative w-full aspect-2/1 overflow-hidden">

      {/* Background Video */}
      <video
        className="aspect-2/1 absolute inset-0 w-full h-auto object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/assest/images/Default_image.jpg"
      >
        <source
          src="/assest/video/HomapgebannervideoFaded.mp4"
          type="video/mp4"
        />
      </video>

      {/* Dark Overlay (Optional but recommended) */}
      {/* <div className="absolute inset-0 bg-black/40"></div> */}

      {/* Content */}
      <div className="relative z-10 h-full flex items-end">
        <div className="container mx-auto pr-0 pb-[5%] lg:pl-[20%]! flex justify-end">
          <div className="text-white text-right ">

            {/* Heading */}
            <h1 className="uppercase big-noodle text-4xl lg:text-6xl xl:text-8xl leading-tight font-bold tracking-wide">
              Trusted Web and Mobile App 
              Development Company
            </h1>


            {/* Description */}
            <p className="mt-6 text-sm md:text-base lg:text-lg leading-relaxed text-white/90 text-end">
              At BlueHorse, we specialize in crafting scalable,
              high-performing digital solutions. As a top-tier web
              and mobile app development company, we bring our
              clients’ visions to life through clear communication
              and expert guidance at every stage of the development process.
            </p>

            {/* CTA */}
            <a
              href="https://www.bluehorse.in/work.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg big-noodle inline-flex items-center justify-center mt-8 px-8 py-3 bg-white text-black font-semibold uppercase tracking-wide rounded-md hover:bg-[#0c83d1] hover:text-white transition-all duration-300"
            >
              Case Studies
            </a>

          </div>
        </div>
      </div>

    </section>
  );
};

export default IntroSection;




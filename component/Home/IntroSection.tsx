"use client";

import React from "react";

const IntroSection: React.FC = () => {
  return (
    <section className="Intro-Wrapper">
      {/* Desktop Video */}
      <video
  className="w-full h-screen object-cover"
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
  Your browser does not support the video tag.
</video>

      <div className="absolute inset-0 z-10 flex items-center">
  <div className="container mx-auto flex justify-end">
    <div className="container text-white text-right mt-57">

      {/* Heading */}
      <h1
        className="uppercase big-noodle text-[95px] ">
        Trusted Web and Mobile App <br />
        Development Company
      </h1>

      {/* Description */}
      <p
        className="
          mt-6
          text-sm
          sm:text-base
          md:text-lg
          leading-relaxed
          text-white/90
          max-w-3xl
          ml-auto
        "
      >
        At BlueHorse, we specialize in crafting scalable, high-performing
        digital solutions. As a top-tier web and mobile app development
        company, we bring our clients’ visions to life through clear
        communication and expert guidance at every stage of the development
        process.
      </p>

      {/* CTA Button */}
      <a
        href="https://www.bluehorse.in/work.html"
        target="_blank"
        rel="noopener noreferrer"
        className="
          inline-flex
          items-center
          justify-center
          mt-8
          px-8
          py-3
          bg-white
          text-black
          font-semibold
          uppercase
          tracking-wide
          rounded-md
          hover:bg-black
          hover:text-white
          transition-all
          duration-300
          ml-auto
        "
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



"use client";

import React from "react";

const IntroSection: React.FC = () => {
  return (
    <section className="Intro-Wrapper">
      {/* Desktop Video */}
      <video
        className="Intro-BG"
        autoPlay
        muted
        loop
        preload="auto"
        poster="/assest/images/Default_image.jpg">
        <source
          src="/assest/video/HomapgebannervideoFaded.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Mobile Video */}
      {/* <video
        className="mobile-bg"
        autoPlay
        muted
        loop
        preload="auto"
        poster="https://www.bluehorse.in/assets/video/Default_image.jpg">
        <source
          src="https://www.bluehorse.in/assets/video/Video(Mobile).mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video> */}

      <div className="Intro-Content">
        <h1 className="Highlight">
          Trusted Web and Mobile App Development company
        </h1>

        <div className="Details">
          At BlueHorse, we specialize in crafting scalable, high-performing
          digital solutions. As a top-tier web and mobile app development
          company, we bring our clients’ visions to life through clear
          communication and expert guidance at every stage of the development
          process.
        </div>

        <a
          href="https://www.bluehorse.in/work.html"
          target="_blank"
          rel="noopener noreferrer"
          className="Button">
          Case Studies
        </a>

        {/* Logo Slider */}
        {/* <div className="logo_slider mobile">
          <div className="slide-track">
            {logos.map((logo, index) => (
              <div className="slide_logo" key={index}>
                <a href={logo.href} target="_blank" rel="noopener noreferrer">
                  <img src={logo.img} alt="client-logo" />
                </a>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default IntroSection;

/* ---------------------------------- */
/* Logo Data                           */
/* ---------------------------------- */

// const logos = [
//   {
//     href: "https://koranm.com",
//     img: "https://www.bluehorse.in/images/kora_logo-white.png",
//   },
//   {
//     href: "https://www.thesouledstore.com",
//     img: "https://www.bluehorse.in/images/tss_logo 1.png",
//   },
//   {
//     href: "https://www.royalcanin.com",
//     img: "https://www.bluehorse.in/images/royalchain_logo.png",
//   },
//   {
//     href: "https://www.muftijeans.in",
//     img: "https://www.bluehorse.in/images/mufti_logo-white.png",
//   },
//   {
//     href: "https://madoverdonuts.com",
//     img: "https://www.bluehorse.in/images/MOD_logo-white.png",
//   },
//   {
//     href: "https://www.manyavar.com",
//     img: "https://www.bluehorse.in/images/manyavar_logo.png",
//   },
//   {
//     href: "https://theformart.com",
//     img: "https://www.bluehorse.in/images/formart_logo-white.png",
//   },
//   {
//     href: "https://www.eurekaforbes.com",
//     img: "https://www.bluehorse.in/images/eureka-forbes_logo-white.png",
//   },
//   {
//     href: "https://celloworld.com",
//     img: "https://www.bluehorse.in/images/cello_logo.png",
//   },
//   {
//     href: "https://www.ekartlogistics.in",
//     img: "https://www.bluehorse.in/images/ekart-logo.png",
//   },
//   {
//     href: "https://play.google.com/store/apps/details?id=com.wowmomo.woweats",
//     img: "https://www.bluehorse.in/images/woweats_logo-white.png",
//   },
// ];

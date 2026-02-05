"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const logos = [
  {
    href: "https://koranm.com",
    img: "https://www.bluehorse.in/images/kora_logo.png",
  },
  {
    href: "https://www.royalcanin.com",
    img: "https://www.bluehorse.in/images/royalchain_logo.png",
  },
  {
    href: "https://www.muftijeans.in",
    img: "https://www.bluehorse.in/images/mufti_logo.png",
  },
  {
    href: "https://madoverdonuts.com",
    img: "https://www.bluehorse.in/images/mod_logo.png",
  },
  {
    href: "https://www.manyavar.com",
    img: "https://www.bluehorse.in/images/manyavar_logo.png",
  },
  {
    href: "https://theformart.com",
    img: "https://www.bluehorse.in/images/formart_logo.png",
  },
  {
    href: "https://www.eurekaforbes.com",
    img: "https://www.bluehorse.in/images/eureka_logo.png",
  },
  {
    href: "https://celloworld.com",
    img: "https://www.bluehorse.in/images/cello_logo.png",
  },
  {
    href: "https://www.ekartlogistics.in",
    img: "https://www.bluehorse.in/images/ekart-logo.png",
  },
  {
    href: "https://play.google.com/store/apps/details?id=com.wowmomo.woweats",
    img: "https://www.bluehorse.in/images/woweats_logo1.png",
  },
];

export default function LogoMarquee() {
  return (
    <div className="logoMarquee mt-10 p-7">
      <div className="logoTrack">
        {[...logos, ...logos].map((logo, index) => (
          <a
            key={index}
            href={logo.href}
            target="_blank"
            rel="noreferrer"
            className="slide_logo">
            <img src={logo.img} alt="brand-logo" />
          </a>
        ))}
      </div>
    </div>
  );
}

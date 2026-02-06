import Image from "next/image";
import React from "react";

const brands = [
  {
    name: "Eureka Forbes",
    logo: "https://www.bluehorse.in/assets/image/eureka_logo.webp",
    link: "https://www.eurekaforbes.com/",
  },
  {
    name: "Mufti",
    logo: "https://www.bluehorse.in/assets/image/mufti_logo.webp",
    link: "https://www.muftijeans.in/",
  },
  {
    name: "Manyavar",
    logo: "https://www.bluehorse.in/assets/image/manyavar_logo.webp",
    link: "https://www.manyavar.com/",
  },
  {
    name: "Wow Momo",
    logo: "https://www.bluehorse.in/assets/image/Wow_logo_website.png",
    link: "https://play.google.com/store/apps/details?id=com.wowmomo.woweats",
  },
  {
    name: "Mad Over Donuts",
    logo: "https://www.bluehorse.in/assets/image/Black Logo.png",
    link: "https://madoverdonuts.com/",
  },
  {
    name: "EazyDiner",
    logo: "https://www.bluehorse.in/assets/image/easydinner_logo.webp",
    link: "https://www.eazydiner.com/",
  },
  {
    name: "Ekart",
    logo: "https://www.bluehorse.in/assets/image/ekart-logo.png",
    link: "https://www.ekartlogistics.in/",
  },
  {
    name: "Royal Canin",
    logo: "https://www.bluehorse.in/assets/image/royal_canin_logo.webp",
    link: "https://www.royalcanin.com/",
  },
  {
    name: "Souled Store",
    logo: "https://www.bluehorse.in/assets/image/tss_logo.png",
    link: "https://www.thesouledstore.com/",
  },
  {
    name: "Cello",
    logo: "https://www.bluehorse.in/assets/image/cello_logo.webp",
    link: "https://celloworld.com/",
  },
];

const BrandLogos: React.FC = () => {
  return (
    <section className="bg-slate-200 py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-center text-2xl md:text-3xl font-semibold tracking-widest text-gray-700 mb-12 uppercase">
          We Serve Clients Globally in Diverse Industries
        </h2>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {brands.map((brand, index) => (
            <a
              key={index}
              href={brand.link}
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center justify-center
                p-8
                border-gray-400
               
              "
              style={{
                borderRight: (index + 1) % 5 !== 0 ? "1px solid #9ca3af" : "",
                borderBottom:
                  index < brands.length - 5 ? "1px solid #9ca3af" : "",
              }}>
              <Image
                src={brand.logo}
                alt={brand.name}
                className="max-h-12 object-contain grayscale hover:grayscale-0 transition"
                width={200}
                height={200}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandLogos;

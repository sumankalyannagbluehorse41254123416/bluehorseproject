"use client";

import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      className="py-10 md:py-12 lg:py-16 bg-cover bg-center text-center"
      style={{ backgroundImage: "url('/assest/images/sliderlogo/hero-bg-1.jpg')" }}
    >
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Logo */}
        <div className="flex justify-center">
          <Link href="#">
            <Image
              src="/assest/images/sliderlogo/tezlogo.gif"
              alt="TezCommerce Logo"
              width={250}
              height={80}
              className="w-[120px] md:w-[180px] lg:w-[250px]"
              priority
            />
          </Link>
        </div>

        {/* Content Box */}
        <div className="py-6 md:py-10 lg:py-16 max-w-[900px] mx-auto">
          
          {/* Title */}
          <h1 className="text-white font-bold leading-tight 
                         text-[22px] 
                         sm:text-[28px] 
                         md:text-[32px] 
                         lg:text-[48px] 
                         mb-4 md:mb-6">
            Custom eCommerce Web Development Built for Speed, Scale, and Innovation
          </h1>

          {/* Paragraph */}
          <p className="text-white/90 
                        text-[15px] 
                        sm:text-16 
                        md:text-[18px] 
                        lg:text-[24px] 
                        mb-6 md:mb-10">
            We build what Shopify can’t. From complex storefronts to high-performance marketplaces and D2C AI integrations — TezCommerce delivers custom ecommerce web development solutions as the tech partner built for serious eCommerce growth.
          </p>

          {/* Button */}
          <Link
            href="#"
            className="inline-block bg-white text-blue-900 font-bold 
                       px-4 py-2 
                       sm:px-6 sm:py-3 
                       rounded-lg 
                       hover:bg-gray-100 
                       transition duration-300"
          >
            Let's Talk
          </Link>

        </div>
      </div>
    </section>
  );
}
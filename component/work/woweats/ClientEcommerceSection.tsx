"use client";

import Link from "next/link";

export default function ClientEcommerceSection() {
  return (
    <section className="w-full py-24 ">
      <div className="container">
        <div className="flex flex-col md:flex-row gap-10">

          {/* Mobile App Development */}
          <div
            className="md:w-1/2 p-10 rounded-md bg-cover bg-center text-white relative"
            style={{
              backgroundImage: "url('/assest/images/sliderlogo/kisha_last1.jpg')",
            }}
          >
            <div className="absolute rounded-md"></div>

            <div className="relative z-10">
              <h3 className="text-[32px] font-semibold pb-4">
                Mobile App Development
              </h3>

              <p className="text-lg leading-relaxed pb-24">
                We specialize in Flutter, the leading mobile app development
                framework known for its user-friendliness, extensive
                customization options, and unparalleled scalability.
              </p>

              <Link
                href="https://www.bluehorse.in/services/mobile-app-development"
                target="_blank"
                className="font-medium bg-white text-black px-4 py-2"
              >
                Find out more
              </Link>
            </div>
          </div>

          {/* eCommerce Development */}
          <div
            className="md:w-1/2 p-10 rounded-md bg-cover bg-center text-white relative"
            style={{
              backgroundImage: "url('/assest/images/sliderlogo/kisha_last2.jpg')",
            }}
          >
            <div className="absolute rounded-md"></div>

            <div className="relative z-10">
              <h3 className="text-[32px] font-semibold pb-4">
                eCommerce Development
              </h3>

              <p className="text-lg leading-relaxed pb-24">
                We excel in crafting eCommerce solutions, offering unparalleled
                user-friendliness, extensive customization features, and
                limitless scalability.
              </p>

              <Link
                href="https://www.bluehorse.in/services/ecommerce-development-services"
                target="_blank"
                className="font-medium bg-white text-black px-4 py-2"
              >
                Find out more
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";

export default function TheBackgroundSection() {
  return (
    <section className="w-full  py-20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-30">
          
          {/* Left Image */}
          <div
            data-aos="fade-left"
            data-aos-duration="3000"
            className="w-full"
          >
            <Image
              src="/assest/images/sliderlogo/thebackground.jfif"
              alt="Wow Momo Background"
              width={525}
              height={525}
              className="w-131.25 h-131.25 object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="text-gray-700">
            <h2 className="text-4xl font-semibold text-gray-800 mb-6">
              The Background
            </h2>
            <p className="text-lg leading-relaxed">
              Wow! Momo was founded in 2008 by two college friends, Sagar
              Daryani and Binod Homagai, from Kolkata, India. The idea
              originated from their shared love for momos, a popular Tibetan
              delicacy. As the brand gained traction, the founders saw an
              opportunity to expand beyond momos and diversify their offerings.
              This led to the creation of other brands under the Wow! Momo
              Foods umbrella –{" "}
              <span className="font-semibold">
                Wow! China, Wow! Chicken, Wow! Kulfi.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

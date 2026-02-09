"use client";

import Image from "next/image";
import React from "react";

const JoinTeam: React.FC = () => {
  return (
    <section className="w-full py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Grid Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <div className="text-center lg:text-left">
            <h4 className="text-3xl md:text-4xl font-semibold text-gray-700 uppercase tracking-wide mb-6">
              Looking for Jockeys to Ride
            </h4>

            <p className="text-gray-600">
              If you re passionate about Design and Technology, drop in for a
              cup of Coffee at our office.
              <br />
              PS: Dump those fancy degrees when you meet us. Our founders aren’t
              big fans of it.
            </p>

            {/* Button */}
            <a
              href="https://www.bluehorse.in/careers.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-[#1e73be] text-[#1e73be] px-6 py-3 rounded-md font-medium hover:bg-[#1e73be] hover:text-white transition">
              AVAILABLE POSITIONS
            </a>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center lg:justify-end">
            <div className="max-w-md w-full">
              <Image
                src="https://www.bluehorse.in/assets/image/abt-career.jpg"
                alt="Careers at BlueHorse Software"
                width={500}
                height={400}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinTeam;

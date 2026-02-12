"use client";

import React from "react";
import Image from "next/image";

const WinSection: React.FC = () => {
  return (
    <section className="w-full py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h2 className="text-[63px] font-bold text-[#1e73be] uppercase tracking-wide">
              Win Win Win
            </h2>
            <div className="mx-auto lg:mx-0 my-8 max-w-md w-full item">
              <Image
                src="https://www.bluehorse.in/assets/image/win_win_win_design.png"
                alt="Win Win Win Design"
                width={500}
                height={350}
                className="w-full h-auto"
              />
            </div>

            <p className="text-gray-600 text-lg mb-6">
              An inclusive success mantra for all stakeholders.
            </p>

            <button className="inline-flex items-center gap-2 bg-[#1e73be] text-white px-6 py-3 rounded-md shadow hover:bg-[#155a96] transition">
              ▶ Play on Video Win Win Win
            </button>
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">

              {/* BOX 1 */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <Image
                  src="https://www.bluehorse.in/assets/image/about1.webp"
                  alt="The Expectations"
                  width={60}
                  height={60}
                  className="mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  The Expectations
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Clients: Return on investment.<br />
                  Team: Career growth and work-life balance<br />
                  Founders: Business growth
                </p>
              </div>

              {/* BOX 2 */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <Image
                  src="https://www.bluehorse.in/assets/image/about2.webp"
                  alt="The Framework"
                  width={60}
                  height={60}
                  className="mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  The Framework
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  A joint responsibility where one wins only by enabling the success of others.
                </p>
              </div>

              {/* BOX 3 CENTER */}
              <div className="sm:col-span-2 flex justify-center">
                <div className="bg-white border border-gray-200 rounded-lg p-6 w-full sm:w-[48%]">
                  <Image
                    src="https://www.bluehorse.in/assets/image/about3.webp"
                    alt="The Results"
                    width={60}
                    height={60}
                    className="mb-4"
                  />
                  <h3 className="text-xl font-semibold text-gray-700 mb-2">
                    The Results
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    All stakeholders – Clients, Team, and Founders accomplish their desired outcomes as they engage with BlueHorse.
                  </p>
                </div>
              </div>

            </div>


          </div>
        </div>
      </div>
    </section>
  );
};

export default WinSection;

"use client";

import {
  FiCheckCircle,
  FiClock,
  FiUsers,
} from "react-icons/fi";
import { HiOutlineLightBulb } from "react-icons/hi";
import { GiScales } from "react-icons/gi";

export default function WhyChoose() {
  return (
    <section className="py-20 bg-[#f5f7f9]">
      <div className="max-w-7xl mx-auto px-6">

        {/* GRID */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* LEFT SIDE */}
          <div>
            <h2 className="text-4xl font-bold text-gray-800 leading-tight uppercase mb-6">
              Why Startup Founders Trust BlueHorse for Software Development
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              We’ve worked with over 20+ startups globally. We know the challenges,
              and we know how to build solutions that actually help you grow.
              Our approach to software development for startups focuses on delivering
              real outcomes—fast.
            </p>

            {/* BENEFITS */}
            <div className="grid grid-cols-2 gap-y-5 gap-x-10">

              {[
                "Real Product Thinking",
                "Weekly progress updates",
                "Flexible engagement models",
                "Post-launch support",
                "Clear Pricing",
                "Regular security audits",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <FiCheckCircle className="text-[#0C83D1] text-xl" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}

            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="grid sm:grid-cols-2 gap-6">

            {/* CARD 1 */}
            <div className=" rounded-2xl p-6 shadow-sm hover:shadow-md transition relative overflow-hidden">
              <div className="w-14 h-14 flex items-center justify-center bg-blue-100 rounded-xl mb-4">
                <HiOutlineLightBulb className="text-[#0C83D1] text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                MVP-First Strategy
              </h3>
              <p className="text-gray-600 text-sm">
                We build lean MVPs that validate your idea early and support faster go-to-market execution.
              </p>
            </div>

            {/* CARD 2 */}
            <div className=" rounded-2xl p-6 shadow-sm hover:shadow-md transition">
              <div className="w-14 h-14 flex items-center justify-center bg-blue-100 rounded-xl mb-4">
                <FiClock className="text-[#0C83D1] text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Mobile-First Approach
              </h3>
              <p className="text-gray-600 text-sm">
                Our approach ensures mobile-optimized experiences to drive engagement and reach.
              </p>
            </div>

            {/* CARD 3 */}
            <div className=" rounded-2xl p-6 shadow-sm hover:shadow-md transition">
              <div className="w-14 h-14 flex items-center justify-center bg-blue-100 rounded-xl mb-4">
                <GiScales className="text-[#0C83D1] text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Your Tech Co-Founder
              </h3>
              <p className="text-gray-600 text-sm">
                BlueHorse acts as your tech lead, guiding product strategy, architecture, and delivery.
              </p>
            </div>

            {/* CARD 4 (Highlighted like screenshot) */}
            <div className=" rounded-2xl p-6 shadow-inner">
              <div className="w-14 h-14 flex items-center justify-center bg-blue-100 rounded-xl mb-4">
                <FiUsers className="text-[#0C83D1] text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Fast Turnaround & Agile Execution
              </h3>
              <p className="text-gray-600 text-sm">
                We use agile frameworks for quicker MVP development and iterative enhancements.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
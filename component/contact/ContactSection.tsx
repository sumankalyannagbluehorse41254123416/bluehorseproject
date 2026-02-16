"use client";

import Image from "next/image";
import { FaUserTie, FaPhoneAlt, FaEnvelope, FaHandsHelping } from "react-icons/fa";
import { MdOutlineCampaign } from "react-icons/md";

export default function ContactSection() {
  return (
    <section className=" py-20 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h1 className="text-[48px] font-bold uppercase tracking-wide text-gray-700 mb-4">
          Let's Work Together
        </h1>

        <p className="text-gray-500 mb-14 max-w-2xl">
          We're curious to hear about your next project. Get in touch and we'll
          make it happen
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Human Resources */}
          <div className="bg-[#f4f4f4] rounded-xl p-10 text-center shadow-sm">
            <div className="w-24 h-24 bg-[#1f77b4] rounded-full flex items-center justify-center mx-auto mb-6">
              <FaUserTie className="text-white text-3xl" />
            </div>

            <h2 className="uppercase tracking-wide text-lg font-semibold text-gray-700 mb-2">
              Human Resources
            </h2>

            <p className="text-gray-500 mb-6">
              Unlock Your Career Opportunities
            </p>

            <div className="space-y-2 text-gray-600">
              <div className="flex justify-center gap-2 items-center">
                <FaPhoneAlt className="text-[#1f77b4]" />
                <a href="tel:+918537941549">+91 8537941549</a>
              </div>

              <div className="flex justify-center gap-2 items-center">
                <FaEnvelope className="text-[#1f77b4]" />
                <a href="mailto:hr@bluehorse.in">hr@bluehorse.in</a>
              </div>
            </div>
          </div>

          {/* Sales */}
          <div className="bg-[#f4f4f4] rounded-xl p-10 text-center shadow-sm">
            <div className="w-24 h-24 bg-[#1f77b4] rounded-full flex items-center justify-center mx-auto mb-6">
              <MdOutlineCampaign className="text-white text-3xl" />
            </div>

            <h2 className="uppercase tracking-wide text-lg font-semibold text-gray-700 mb-2">
              Sales
            </h2>

            <p className="text-gray-500 mb-6">
              Business empowerment promotion
            </p>

            <div className="space-y-2 text-gray-600">
              <div className="flex justify-center gap-2 items-center">
                <FaPhoneAlt className="text-[#1f77b4]" />
                <a href="tel:+918001869103">+91 8001869103</a>
              </div>

              <div className="flex justify-center gap-2 items-center">
                <FaEnvelope className="text-[#1f77b4]" />
                <a href="mailto:info@bluehorse.in">info@bluehorse.in</a>
              </div>
            </div>
          </div>

          {/* Support */}
          <div className="bg-[#f4f4f4] rounded-xl p-10 text-center shadow-sm">
            <div className="w-24 h-24 bg-[#1f77b4] rounded-full flex items-center justify-center mx-auto mb-6">
              <FaHandsHelping className="text-white text-3xl" />
            </div>

            <h2 className="uppercase tracking-wide text-lg font-semibold text-gray-700 mb-2">
              Support
            </h2>

            <p className="text-gray-500 mb-6">
              We're Here to Help
            </p>

            <div className="flex justify-center gap-2 items-center text-gray-600">
              <FaEnvelope className="text-[#1f77b4]" />
              <a href="mailto:support@bluehorse.in">
                support@bluehorse.in
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

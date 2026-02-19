"use client";

import Image from "next/image";
import Link from "next/link";

const GetQuerySection = () => {
  return (
    <section className="w-ful py-16 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 relative bg-[#f2f6fd] rounded-xl py-14 flex items-center justify-center">

        {/* Left Image */}
        <div className="hidden md:block absolute left-10 bottom-0">
          <Image
            src="https://bluehorse.in/assets/image/left-job-head.svg"
            alt="Left Illustration"
            width={200}
            height={200}
            className="object-contain"
          />
        </div>

        {/* Right Image */}
        <div className="hidden md:block absolute right-10 bottom-0">
          <Image
            src="https://bluehorse.in/assets/image/right-job-head.svg"
            alt="Right Illustration"
            width={200}
            height={200}
            className="object-contain"
          />
        </div>

        {/* Content */}
        <div className="text-center max-w-xl">
          <h3 className="text-3xl md:text-4xl font-semibold uppercase tracking-wide text-gray-700">
            Get a Query
          </h3>

          <p className="mt-4 text-gray-600 text-lg">
            Share your queries and get free Consulting from our experts
          </p>

          <Link
            href="/contact#mainForm"
            className="inline-block mt-8 px-8 py-3 border border-[#079bcb] text-[#079bcb] rounded-md hover:bg-[#079bcb] hover:text-white transition-all duration-300"
          >
            Talk to Our Expert
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GetQuerySection;

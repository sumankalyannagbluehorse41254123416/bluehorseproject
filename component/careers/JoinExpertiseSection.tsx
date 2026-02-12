"use client";

import { useState } from "react";
import Image from "next/image";
import ApplyModal from "./ApplyModal";

export default function JoinExpertiseSection() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="px-6">
        <div className="max-w-7xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-10 py-12 flex flex-col md:flex-row items-center justify-between gap-6">

            <Image
              src="https://www.bluehorse.in/assets/image/career_bg.png"
              alt="bg"
              fill
              className="object-cover opacity-20"
            />

            <div className="absolute w-[300px] h-[300px] bg-white/20 rounded-full left-20 top-1/2 -translate-y-1/2"></div>
            <div className="absolute left-6 top-1/2 -translate-y-1/2 w-[6px] h-[80px] bg-white rounded-full"></div>

            <div className="relative z-10 max-w-3xl text-white">
              <h3 className="text-3xl font-bold uppercase">
                Expertise In Something Else?
              </h3>

              <p className="mt-4 text-lg text-white/90">
                We offer the opportunity to work on the latest technologies to
                showcase your expertise and get a chance to expand your knowledge.
              </p>
            </div>

            <button
              onClick={() => setOpen(true)}
              className="relative z-10 bg-white text-blue-600 px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition"
            >
              Apply Here →
            </button>

          </div>
        </div>
      </section>

      {open && <ApplyModal onClose={() => setOpen(false)} />}
    </>
  );
}


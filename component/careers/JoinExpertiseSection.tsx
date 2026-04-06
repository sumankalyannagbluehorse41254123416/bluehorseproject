"use client";

import { useState } from "react";
import Image from "next/image";
import ApplyModal from "./ApplyModal";

export default function JoinExpertiseSection() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="px-6">
        <div className="container">
          <div className="relative w-329.5 h-62.5 overflow-hidden rounded-2xl bg-gradient-to-br from-[#08bde8] to-[#0982b6] px-10 py-12 flex flex-col md:flex-row items-center justify-between gap-6">

            <Image
              src="https://www.bluehorse.in/assets/image/career_bg.png"
              alt="bg"
              fill
              className="object-cover opacity-20"
            />
            
            <div className="absolute left-15 top-1/2 -translate-y-1/2 w-1.5 h-32 bg-white rounded-full"></div>

            <div className="relative z-10  text-white ml-20">
              <h3 className="text-3xl font-bold uppercase">
                Expertise In Something Else?
              </h3>

              <p className="mt-4 text-sm text-white/90">
                We offer the opportunity to work on the latest technologies to
                showcase your expertise and get a chance to expand your knowledge.
              </p>
            </div>

            <button
              onClick={() => setOpen(true)}
              className="relative z-10 bg-white text-deepblue px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition"
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


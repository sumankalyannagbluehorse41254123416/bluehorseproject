"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Workowo() {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.3 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (


    <div className="container grid grid-cols-2 space-x-25 space-y-0   pt-30">
      {/*card 1 */}
      <div className="flex flex-col">
        <Link
          href=""
          target=""
          rel=""
          className=""
        >
          <h3 className="text-[30px] font-bold mb-7.5">Wow Eats</h3>
        </Link>

        <div
          ref={cardRef}
          className="bh_work_img relative group h-150 overflow-hidden bg-cover bg-center rounded-md"
          style={{
            backgroundImage: "url('/assest/images/wow_momo.jpeg')",
          }}
        >
          {/* BLUE SLIDE LAYER */}
          <div
            className={`absolute inset-0 bg-cyan-600 z-20 transform ${inView ? "translate-x-full" : "translate-x-0"
              } transition-transform duration-1200 ease-in-out`}
          />

          {/* HOVER OVERLAY */}
          <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-center items-center p-8 text-center z-30">
            <div className="mb-6">
              <Image
                src="https://www.bluehorse.in/BH WORK PAGE/assets/images/wowmomo_logo.png"
                alt="Wow Momo Logo"
                width={150}
                height={80}
                className="mx-auto"
              />
            </div>

            <a
              href="/work/woweats"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-lg leading-relaxed"
            >
              Wow! Momo Foods, known for Wow! Momo, Wow! China, and Wow!
              Chicken, is one of India’s fastest-growing QSR brands.
            </a>
          </div>

          {/* TAGS */}
          <div className="absolute bottom-10 left-4 flex gap-2 flex-wrap z-40">
            <span className="bg-white/20 backdrop-blur-md text-white text-sm px-3 py-1 rounded-md">
              Top QSR Brand
            </span>
            <span className="bg-white/20 backdrop-blur-md text-white text-sm px-3 py-1 rounded-md">
              Dine-in-app
            </span>
            <span className="bg-white/20 backdrop-blur-md text-white text-sm px-3 py-1 rounded-md">
              Flutter
            </span>
            <span className="bg-white/20 backdrop-blur-md text-white text-sm px-3 py-1 rounded-md">
              Food Teach Apps
            </span>
          </div>
        </div>

        {/* LINK BELOW CARD */}
        <Link
          href="https://www.bluehorse.in/work/woweats"
          target="_blank"
          className="mt-12.5 text-gray-700 text-lg font-medium"
        >
          View case study →
        </Link>
      </div>

      {/*card 2 */}
      <div className="flex flex-col mt-25">
        <Link
          href=""
          target=""
          rel=""
          className=""
        >
          <h3 className="text-[30px] font-bold mb-7.5">Wow Eats</h3>
        </Link>
        <div
          ref={cardRef}
          className="bh_work_img relative group h-150 overflow-hidden bg-cover bg-center rounded-md"
          style={{
            backgroundImage: "url('/assest/images/wow_momo.jpeg')",
          }}
        >
          {/* BLUE SLIDE LAYER */}
          <div
            className={`absolute inset-0 bg-cyan-600 z-20 transform ${inView ? "translate-x-full" : "translate-x-0"
              } transition-transform duration-1200 ease-in-out`}
          />

          {/* HOVER OVERLAY */}
          <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-center items-center p-8 text-center z-30">
            <div className="mb-6">
              <Image
                src="https://www.bluehorse.in/BH WORK PAGE/assets/images/wowmomo_logo.png"
                alt="Wow Momo Logo"
                width={150}
                height={80}
                className="mx-auto"
              />
            </div>

            <a
              href="/work/woweats"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-lg leading-relaxed"
            >
              Wow! Momo Foods, known for Wow! Momo, Wow! China, and Wow!
              Chicken, is one of India’s fastest-growing QSR brands.
            </a>
          </div>

          {/* TAGS */}
          <div className="absolute bottom-10 left-4 flex gap-2 flex-wrap z-40">
            <span className="bg-white/20 backdrop-blur-md text-white text-sm px-3 py-1 rounded-md">
              Top QSR Brand
            </span>
            <span className="bg-white/20 backdrop-blur-md text-white text-sm px-3 py-1 rounded-md">
              Dine-in-app
            </span>
            <span className="bg-white/20 backdrop-blur-md text-white text-sm px-3 py-1 rounded-md">
              Flutter
            </span>
          </div>
        </div>

        {/* LINK BELOW CARD */}
        <Link
          href="https://www.bluehorse.in/work/woweats"
          target="_blank"
          className="mt-12.5 text-gray-700 text-lg font-medium"
        >
          View case study →
        </Link>
      </div>
      {/*card 3 */}
      <div className="flex flex-col">
        <Link
          href=""
          target=""
          rel=""
          className=""
        >
          <h3 className="text-[30px] font-bold mb-7.5">Wow Eats</h3>
        </Link>

        <div
          ref={cardRef}
          className="bh_work_img relative group h-150 overflow-hidden bg-cover bg-center rounded-md"
          style={{
            backgroundImage: "url('/assest/images/wow_momo.jpeg')",
          }}
        >
          {/* BLUE SLIDE LAYER */}
          <div
            className={`absolute inset-0 bg-cyan-600 z-20 transform ${inView ? "translate-x-full" : "translate-x-0"
              } transition-transform duration-1200 ease-in-out`}
          />

          {/* HOVER OVERLAY */}
          <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-center items-center p-8 text-center z-30">
            <div className="mb-6">
              <Image
                src="https://www.bluehorse.in/BH WORK PAGE/assets/images/wowmomo_logo.png"
                alt="Wow Momo Logo"
                width={150}
                height={80}
                className="mx-auto"
              />
            </div>

            <a
              href="/work/woweats"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-lg leading-relaxed"
            >
              Wow! Momo Foods, known for Wow! Momo, Wow! China, and Wow!
              Chicken, is one of India’s fastest-growing QSR brands.
            </a>
          </div>

          {/* TAGS */}
          <div className="absolute bottom-10 left-4 flex gap-2 flex-wrap z-40">
            <span className="bg-white/20 backdrop-blur-md text-white text-sm px-3 py-1 rounded-md">
              Top QSR Brand
            </span>
            <span className="bg-white/20 backdrop-blur-md text-white text-sm px-3 py-1 rounded-md">
              Dine-in-app
            </span>
            <span className="bg-white/20 backdrop-blur-md text-white text-sm px-3 py-1 rounded-md">
              Flutter
            </span>
            <span className="bg-white/20 backdrop-blur-md text-white text-sm px-3 py-1 rounded-md">
              Food Teach Apps
            </span>
          </div>
        </div>

        {/* LINK BELOW CARD */}
        <Link
          href="https://www.bluehorse.in/work/woweats"
          target="_blank"
          className="mt-12.5 text-gray-700 text-lg font-medium"
        >
          View case study →
        </Link>
      </div>
      {/*card 4 */}
      <div className="flex flex-col mt-25">
        <Link
          href=""
          target=""
          rel=""
          className=""
        >
          <h3 className="text-[30px] font-bold mb-7.5">Wow Eats</h3>
        </Link>
        <div
          ref={cardRef}
          className="bh_work_img relative group h-150 overflow-hidden bg-cover bg-center rounded-md"
          style={{
            backgroundImage: "url('/assest/images/wow_momo.jpeg')",
          }}
        >
          {/* BLUE SLIDE LAYER */}
          <div
            className={`absolute inset-0 bg-cyan-600 z-20 transform ${inView ? "translate-x-full" : "translate-x-0"
              } transition-transform duration-1200 ease-in-out`}
          />

          {/* HOVER OVERLAY */}
          <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-center items-center p-8 text-center z-30">
            <div className="mb-6">
              <Image
                src="https://www.bluehorse.in/BH WORK PAGE/assets/images/wowmomo_logo.png"
                alt="Wow Momo Logo"
                width={150}
                height={80}
                className="mx-auto"
              />
            </div>

            <a
              href="/work/woweats"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-lg leading-relaxed"
            >
              Wow! Momo Foods, known for Wow! Momo, Wow! China, and Wow!
              Chicken, is one of India’s fastest-growing QSR brands.
            </a>
          </div>

          {/* TAGS */}
          <div className="absolute bottom-10 left-4 flex gap-2 flex-wrap z-40">
            <span className="bg-white/20 backdrop-blur-md text-white text-sm px-3 py-1 rounded-md">
              Top QSR Brand
            </span>
            <span className="bg-white/20 backdrop-blur-md text-white text-sm px-3 py-1 rounded-md">
              Dine-in-app
            </span>
            <span className="bg-white/20 backdrop-blur-md text-white text-sm px-3 py-1 rounded-md">
              Flutter
            </span>
          </div>
        </div>

        {/* LINK BELOW CARD */}
        <Link
          href="https://www.bluehorse.in/work/woweats"
          target="_blank"
          className="mt-12.5 text-gray-700 text-lg font-medium"
        >
          View case study →
        </Link>
      </div>

    </div>
  );
}

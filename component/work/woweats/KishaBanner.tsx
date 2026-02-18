"use client";

import Image from "next/image";

export default function KishaBanner() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 flex justify-center">
        <Image
          src="/assest/images/sliderlogo/mobile.svg"
          alt="Three Mobile Preview"
          width={900}
          height={600}
          className="w-full max-w-4xl h-auto"
        />
      </div>
    </section>
  );
}

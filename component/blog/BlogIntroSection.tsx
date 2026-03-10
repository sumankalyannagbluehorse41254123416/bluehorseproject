"use client";

import Image from "next/image";
import Link from "next/link";

export default function BlogIntroSection() {
  const socialLinks = [
    { name: "LinkedIn", img: "/assest/images/sliderlogo/linkedin.png" },
    { name: "Facebook", img: "/assest/images/sliderlogo/facebook.png" },
    { name: "Instagram", img: "/assest/images/sliderlogo/instagram.png" },
    { name: "Twitter", img: "/assest/images/sliderlogo/twitter.png" },
    { name: "Youtube", img: "/assest/images/sliderlogo/youtube.png" },
  ];

  return (
    <section
      className="w-full py-16 lg:py-28 bg-cover bg-top bg-no-repeat"
      style={{
        backgroundImage: "url('/assest/images/sliderlogo/into-bg.jpg')",
      }}
    >
      <div className="container mx-auto px-4">

        {/* Heading */}
        <h1 className="text-3xl md:text-4xl lg:text-[48px] font-bold uppercase tracking-wide mb-2">
          Blog
        </h1>

        <p className="text-gray-600 text-base md:text-lg mb-10 lg:mb-12 max-w-2xl">
          Explore insightful blogs, industry trends, and expert tips to stay informed and inspired in the tech world.
        </p>

        <div className="flex flex-col lg:flex-row gap-10">

          {/* LEFT BLOG */}
          <div className="w-full lg:flex-1">
            <article>

              <Link href="#">
                <Image
                  src="/assest/images/sliderlogo/Blog.jpg"
                  alt="blog"
                  width={900}
                  height={450}
                  className="rounded-xl w-full h-auto"
                />
              </Link>

              <Link href="#">
                <h2 className="text-xl md:text-2xl lg:text-[28px] mt-6 mb-4 font-medium text-gray-800">
                  How to Empower MSMEs with Cost-Effective IT Solutions for Growth
                </h2>
              </Link>

              <p className="text-gray-600 leading-relaxed mb-6 text-sm md:text-base">
                Micro, Small, and Medium Enterprises (MSMEs), which are businesses with limited resources but high potential...
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

                <span className="px-5 py-2 bg-[#f5f3fe] text-black text-sm w-fit">
                  MSME
                </span>

                <div className="flex items-center gap-3">
                  <Image
                    src="/assest/images/sliderlogo/sir.jpg"
                    alt="author"
                    width={45}
                    height={45}
                    className="rounded-full"
                  />
                  <p className="text-gray-700 text-sm md:text-base">
                    Vineet Agarwala
                  </p>
                </div>

              </div>

            </article>
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="w-full lg:w-[320px] flex flex-col gap-10">

            {/* NEWSLETTER */}
            <div>
              <p className="font-bold tracking-wide mb-3 text-sm">
                NEWSLETTER
              </p>

              <div className="flex rounded-md overflow-hidden border">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="flex-1 px-4 py-3 outline-none text-sm"
                />

                <button className="bg-[#f0f0f0] px-5 font-semibold text-black 
                hover:bg-[#0c83d1] hover:text-white 
                transition-all duration-300">
                  JOIN
                </button>
              </div>
            </div>

            {/* SOCIAL */}
            <div>
              <p className="font-bold tracking-wide mb-4 text-sm">
                FOLLOW US
              </p>

              <div className="flex flex-col gap-4">

                {socialLinks.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 bg-gray-100 px-5 py-4 rounded-md
                    border-2 border-transparent
                    hover:border-[#0c83d1]
                    transition-all duration-300 cursor-pointer"
                  >
                    <Image
                      src={item.img}
                      alt={item.name}
                      width={28}
                      height={28}
                      className="object-contain"
                    />

                    <p className="text-gray-700 text-sm md:text-base">
                      {item.name}
                    </p>

                  </div>
                ))}

              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
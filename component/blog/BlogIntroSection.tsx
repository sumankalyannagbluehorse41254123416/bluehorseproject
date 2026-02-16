"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

export default function BlogIntroSection() {
  const socialLinks = [
    { name: "LinkedIn", icon: <FaLinkedinIn />, color: "text-[#0A66C2]", bg: "bg-[#0A66C2]"  },
    { name: "Facebook", icon: <FaFacebookF />, color: "text-[#1877F2]" },
    { name: "Instagram", icon: <FaInstagram />, color: "text-[#E4405F]" },
    { name: "Twitter", icon: <FaTwitter />, color: "text-[#1DA1F2]" },
    { name: "Youtube", icon: <FaYoutube />, color: "text-[#FF0000]" },
  ];

  return (
    <section
      className="w-full py-37.5 pb-12.5 bg-cover bg-top bg-no-repeat"
      style={{
        backgroundImage: "url('/assest/images/Blog/into-bg.jpg')",
      }}
    >
      <div className="container">

        <h1 className="text-[48px] font-bold uppercase tracking-wide mb-2">
          Blog
        </h1>

        <p className="text-gray-600 text-lg mb-12">
          Explore insightful blogs, industry trends, and expert tips to stay informed and inspired in the tech world.
        </p>

        <div className="flex flex-wrap gap-10">

          {/* LEFT BLOG */}
          <div className="flex-1 min-w-[650px]">
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
                <h2 className="text-[28px] mt-6 mb-4 font-medium text-gray-800">
                  How to Empower MSMEs with Cost-Effective IT Solutions for Growth
                </h2>
              </Link>

              <p className="text-gray-600 leading-relaxed mb-6">
                Micro, Small, and Medium Enterprises (MSMEs), which are businesses with limited resources but high potential...
              </p>

              <div className="flex items-center justify-between flex-wrap gap-4">
                <span className="px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                  MSME
                </span>

                <div className="flex items-center gap-3">
                  <Image
                    src="/assest/images/sliderlogo/author.jpg"
                    alt="author"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <p className="text-gray-700">Vineet Agarwala</p>
                </div>
              </div>

            </article>
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="w-87.5 flex flex-col gap-10">

            {/* NEWSLETTER */}
            <div>
              <p className="font-bold tracking-wide mb-3">NEWSLETTER</p>

              <div className="flex rounded-md overflow-hidden border">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="flex-1 px-4 py-3 outline-none"
                />
                <button className="bg-gray-200 px-6 font-semibold">
                  JOIN
                </button>
              </div>
            </div>

            {/* SOCIAL */}
            <div>
              <p className="font-bold tracking-wide mb-4">FOLLOW US</p>

              <div className="flex flex-col gap-4">
                {socialLinks.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 bg-gray-100 px-5 py-4 rounded-md"
                  >
                    <div
                      className={`w-8 h-8 flex items-center justify-center rounded-full bg-white ${item.color}`}
                    >
                      {item.icon}
                    </div>

                    <p className="text-gray-700">{item.name}</p>
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

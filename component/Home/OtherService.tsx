"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
// import { ArrowRight } from "lucide-react";

export default function OtherService() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* LEFT CARD */}
          <div className="border rounded-2xl p-8 bg-gray-50  transition duration-300">
            <Link
              href="https://www.bluehorse.in/services/software-development-for-startups"
              target="_blank"
              className="flex items-center gap-3 mb-5">
              <h3 className="text-2xl font-semibold">Services For Startups</h3>
              <ArrowRight size={22} />
            </Link>

            <p className="text-gray-600 leading-7">
              We act as your virtual CTO — combining innovation and AI-powered
              tools to develop powerful web and mobile applications that fuel
              growth and maximize ROI. From scalable web platforms to
              cost-effective hybrid mobile apps, we design solutions that
              deliver seamless performance across devices. With tailored
              features, intuitive interfaces, and future-ready architecture, we
              enhance user experience, boost conversions, and drive long-term
              success. Whether for startups or enterprises, we transform ideas
              into impactful digital products built to scale.
            </p>

            <div className="flex flex-wrap items-center gap-6 mt-8">
              <Image
                src="https://www.bluehorse.in/servicess-page/assets/images-2/eazy.png"
                alt=""
                width={200}
                height={42}
                className="h-10.5 w-auto object-contain"
              />
              <Image
                src="https://www.bluehorse.in/servicess-page/assets/images-2/wow.png"
                alt=""
                width={200}
                height={42}
                className="h-10.5 w-auto object-contain"
              />
              <Image
                src="https://www.bluehorse.in/servicess-page/assets/images-2/creoo.png"
                alt=""
                width={200}
                height={42}
                className="h-10.5 w-auto object-contain"
              />
              <Image
                src="https://www.bluehorse.in/servicess-page/assets/images-2/e.png"
                alt=""
                width={200}
                height={42}
                className="h-10.5 w-auto object-contain"
              />
            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col gap-6">
            {/* AI CARD */}
            <div className="border rounded-2xl p-8 bg-gray-50 transition duration-300">
              <div className="flex items-center gap-3 mb-5">
                <h3 className="text-2xl font-semibold">Growth with AI</h3>
                <ArrowRight size={22} />
              </div>

              <p className="text-gray-600 leading-7">
                We provide an all-in-one AI-powered solution that empowers D2C
                brands by automating systems, making processes faster, more
                organised, and consistently efficient — all designed to fit
                seamlessly into your existing workflows.
              </p>

              <div className="flex items-center gap-6 mt-6">
                <Image
                  src="https://www.bluehorse.in/servicess-page/assets/images-2/creoo.png"
                  alt=""
                  width={200}
                  height={42}
                  className="h-10.5 w-auto object-contain"
                />

                <Image
                  src="https://www.bluehorse.in/servicess-page/assets/images-2/tez.ai.png"
                  alt=""
                  width={200}
                  height={42}
                  className="h-10.5 w-auto object-contain"
                />
              </div>

            </div>

            {/* MARKETING CARD */}
            <div className="border rounded-2xl p-8 bg-gray-50  transition duration-300">
              <Link
                href="https://www.bluehorse.in/services/organic-marketing"
                target="_blank"
                className="flex items-center gap-3 mb-5">
                <h3 className="text-2xl font-semibold">Organic Marketing</h3>
                <ArrowRight size={22} />
              </Link>

              <p className="text-gray-600 leading-7">
                We help brands achieve organic sales and sustainable growth by
                optimizing visibility in AI platform search results driving
                long-term ROI and building trust, all without paid advertising.
              </p>

              <div className="flex items-center gap-6 mt-6">
                <Image
                  src="https://www.bluehorse.in/servicess-page/assets/images-2/ekart.png"
                  alt=""
                  width={200}
                  height={42}
                  className="h-10.5 w-auto object-contain"
                />

                <Image
                  src="https://www.bluehorse.in/servicess-page/assets/images-2/tss_logo%201.png"
                  alt=""
                  width={200}
                  height={42}
                  className="h-10.5 w-auto object-contain"
                />
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

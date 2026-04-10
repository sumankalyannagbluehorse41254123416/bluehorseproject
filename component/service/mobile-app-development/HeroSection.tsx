"use client";

import { MoveRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
    return (
        <section className="pt-[90px] pb-10 relative overflow-hidden bg-gradient-to-b from-[#E6F0FA] to-white sm:pt-[160px] sm:pb-20">
            <div className="container mx-auto px-4">

                {/* Breadcrumb */}
                <div className="mb-5">
                    <ul className="flex flex-wrap text-black text-sm">
                        <li className="flex items-center gap-1">
                            <Link href="/" className="hover:underline">HOME</Link>
                            <span>›</span>
                        </li>
                        <li className="flex items-center gap-1">
                            <Link href="/services" className="hover:underline">SERVICES</Link>
                            <span>›</span>
                        </li>
                        <li>
                            <span>MOBILE APP DEVELOPMENT</span>
                        </li>
                    </ul>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 md:gap-20">

                    {/* Left Content */}
                    <div className="flex flex-col gap-8">

                        <div>
                            <h1 className="hero-title ">
                                Trusted Mobile App Development for Growing Brands & Startups
                            </h1>

                            <p className="hero-description pt-5">
                                Turn your app ideas into powerful, high-performing mobile products with expert-led mobile app development. At BlueHorse Software, we help startups, D2C brands, and enterprises build fast, scalable, and user-friendly mobile apps using Flutter and cross-platform technologies. Whether you're validating an MVP or scaling your product, we deliver with speed, precision, and a mobile-first mindset.
                            </p>
                        </div>

                        {/* Buttons */}
                        <div className="flex flex-wrap gap-4 ">
                            <a href="#contact-us" className="flex gap-2 group bg-[#0C83D1] text-white px-6 py-3 rounded-lg font-medium shadow-md hover:bg-[#3d9ddd] transition">Let's Build Your Product <MoveRightIcon className="w-5 group-hover:translate-x-1.5 transition duration-300 ease-in-out"/></a>
                            <a href="#services" className="flex gap-2 group border border-gray-300 px-6 py-3 rounded-lg font-medium text-blue bg-white hover:bg-[#e0e8ee] transition">Our Services <MoveRightIcon className="w-5 group-hover:translate-x-1.5 transition duration-300 ease-in-out"/></a>
                            </div>


                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-4 pt-8 border-t border-[#E5E7EB]">
                            <div className="text-center">
                                <p className="text-3xl md:text-4xl font-semibold">15+</p>
                                <p className="text-base pt-2 text-grey">Years Experience</p>
                            </div>

                            <div className="text-center">
                                <p className="text-3xl md:text-4xl font-bold">200+</p>
                                <p className="text-base pt-2 text-grey">Projects Delivered</p>
                            </div>

                            <div className="text-center">
                                <p className="text-3xl md:text-4xl font-bold">20+</p>
                                <p className="text-base pt-2 text-grey">Successful launches</p>
                            </div>
                        </div>

                    </div>

                    {/* Right Image */}
                    <div>
                        <Image
                            src="https://www.bluehorse.in/bluehorse-html/ecommercedevelopmentassets/image/mob_app.jpg"
                            alt="Hero Image"
                            width={600}
                            height={400}
                            className="w-full rounded-md"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
}
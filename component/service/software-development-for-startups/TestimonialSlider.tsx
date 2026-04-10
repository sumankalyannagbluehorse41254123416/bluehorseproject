"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
    {
        id: 1,
        name: "Kapil Chopra",
        designation: "Founder, EazyDiner and The Postcard Hotel",
        quote:
            "BlueHorse is an exceptional IT company. They are a team of committed and passionate professionals. We are currently working with them and would recommend them highly. Thanks BlueHorse.",
        image: "https://www.bluehorse.in/handcrafted/image/client.jpeg",
    },
    {
        id: 2,
        name: "Ayesha R Goyal",
        designation: "Founder, Creoo",
        quote:
            "What I really enjoyed about working with the BlueHorse team was their can-do attitude. Even when things were stuck, there was never a blame game. Everyone was super committed to the product and the outcome we wanted to achieve.",
        image: "https://www.bluehorse.in/testimonial-image/Aiyesha.jpg",
    },
];

export default function TestimonialSlider() {
    return (
        <section className="py-16 bg-white">
            <div className="container">

                {/* TITLE */}
                <h2 className="text-center text-4xl font-bold text-gray-700 mb-12 tracking-wide uppercase">
                    Testimonial
                </h2>

                <Swiper
                    modules={[Navigation]}
                    loop={true}
                    navigation={{
                        nextEl: ".custom-next",
                        prevEl: ".custom-prev",
                    }}
                    className="relative testimonialSwiper"
                >
                    {testimonials.map((t) => (
                        <SwiperSlide key={t.id}>

                            <div
                                className="relative mt-10 rounded-2xl p-10 h-95 flex items-center overflow-hidden"
                                style={{
                                    backgroundImage:
                                        "url('/assest/images/sliderlogo/testimonials_banner.png')",
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                }}
                            >
                                {/* GRID */}
                                <div className="grid md:grid-cols-12 gap-10 items-center w-full">

                                    {/* LEFT CONTENT */}
                                    <div className="md:col-span-7 relative z-10">

                                        <h3 className="text-[26px] font-semibold text-gray-800 mb-2">
                                            {t.name} - {t.designation}
                                        </h3>

                                        {/* QUOTE SECTION */}
                                        <div className="flex gap-4 mt-6">
                                            <div className="w-0.75 bg-[#0C83D1]"></div>

                                            <blockquote className="text-gray-600 text-[17px] leading-relaxed italic">
                                                {t.quote}
                                            </blockquote>
                                        </div>

                                        {/* BIG QUOTE ICON */}
                                        <div className="absolute left-0 top-16 text-[120px] text-blue-100 font-bold opacity-30 select-none">
                                            “
                                        </div>
                                    </div>

                                    {/* RIGHT IMAGE */}
                                    <div className="md:col-span-5 flex justify-end">
                                        <div className="relative w-75 h-75 rounded-xl overflow-hidden shadow-lg">
                                            <Image
                                                src={t.image}
                                                alt={t.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* NAVIGATION BUTTONS */}
                                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-6 z-10">

                                    <button className="custom-prev w-12 h-12 rounded-full border border-[#0C83D1] text-[#0C83D1] flex items-center justify-center hover:bg-[#0C83D1] hover:text-white transition">
                                        <FiChevronLeft className="text-40" />
                                    </button>

                                    <button className="custom-next w-12 h-12 rounded-full border border-[#0C83D1] text-[#0C83D1] flex items-center justify-center hover:bg-[#0C83D1] hover:text-white transition">
                                        <FiChevronRight className="text-40" />
                                    </button>

                                </div>

                            </div>

                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>
        </section>
    );
}
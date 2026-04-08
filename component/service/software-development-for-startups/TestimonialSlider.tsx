// components/TestimonialSlider.tsx
'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';

const testimonials = [
    {
        id: 1,
        name: "Kapil Chopra",
        designation: "Founder, EazyDiner and The Postcard Hotel",
        quote: "BlueHorse is an exceptional IT company. They are a team of committed and passionate professionals. We are currently working with them and would recommend them highly. Thanks BlueHorse.",
        image: "https://www.bluehorse.in/handcrafted/image/client.jpeg",
    },
    {
        id: 2,
        name: "Ayesha R Goyal",
        designation: "Founder, Creoo",
        quote: "What I really enjoyed about working with the BlueHorse team was their can-do attitude. Even when things were stuck, there was never a blame game. Everyone was super committed to the product and the outcome we wanted to achieve. Vineet and his team didn’t just execute—they suggested new features I hadn’t even thought of, and they’d go ahead and build them.",
        image: "https://www.bluehorse.in/testimonial-image/Aiyesha.jpg",
    },
];

export default function TestimonialSlider() {
    return (
        <section className="py-16 bg-white">
            <div className="container px-6">
                <h2 className="text-center text-4xl font-bold text-gray-800 mb-12 tracking-wide">
                    TESTIMONIAL
                </h2>

                <Swiper
                    modules={[Navigation]}
                    loop={true}
                    navigation={{
                        nextEl: '.custom-next',
                        prevEl: '.custom-prev',
                    }}
                    className="relative"
                >
                    {testimonials.map((t) => (
                        <SwiperSlide key={t.id}>
                            <div className="mt-10 rounded-xl p-10 object-cover" style={{
                                backgroundImage: "url('/assest/images/sliderlogo/testimonials_banner.png')",
                            }}>
                                <div className="grid md:grid-cols-12 gap-10 items-center">
                                    {/* Left Content */}
                                    <div className="md:col-span-7 space-y-6">
                                        <div>
                                            <h3 className="text-2xl font-semibold text-gray-900">
                                                {t.name}
                                            </h3>
                                            <p className="text-gray-600 mt-1 text-lg">{t.designation}</p>
                                        </div>

                                        <div className="relative">
                                            {/* Large Quote Mark */}
                                            <blockquote className="text-gray-700 text-[17px] leading-relaxed ">
                                                {t.quote}
                                            </blockquote>
                                        </div>
                                    </div>

                                    {/* Right Image */}
                                    <div className="md:col-span-5 flex justify-center md:justify-end">
                                        <div className="relative w-full max-w-95 aspect-[4/3.2] rounded-2xl overflow-hidden shadow-2xl border border-white">
                                            <Image
                                                src={t.image}
                                                alt={t.name}
                                                fill
                                                className="object-cover"
                                                priority
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Bottom Navigation Arrows (centered) */}
                                <div className="flex justify-center gap-4 mt-10 md:mt-12">
                                    <button className="custom-prev w-11 h-11 rounded-full border border-gray-300 hover:border-blue-400 flex items-center justify-center text-xl transition-all hover:bg-white">
                                        ←
                                    </button>
                                    <button className="custom-next w-11 h-11 rounded-full border border-gray-300 hover:border-blue-400 flex items-center justify-center text-xl transition-all hover:bg-white">
                                        →
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
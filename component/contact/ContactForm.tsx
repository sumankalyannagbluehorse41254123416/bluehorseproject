"use client";

import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactSection() {
    return (
        <section className="relative grid lg:grid-cols-[35%_65%] ">

            {/* LEFT MAP */}
            <div className="relative">
                <iframe
                    className="absolute inset-0 w-full h-full"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3688.368788500176!2d87.31141992369326!3d22.41514114438189!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1d5b398c19fb15%3A0xddc3e9527ea31096!2sBlueHorse%20Software%20Solutions%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1670224414460!5m2!1sen!2sin"
                    loading="lazy"
                />

                {/* FLOAT CARD */}
                <div className="absolute right-[-300px] top-1/2 -translate-y-1/2 bg-white rounded-xl shadow-xl w-[380px] p-8 z-10">

                    <h2 className="text-blue-600 font-bold text-2xl mb-3 tracking-wide">
                        GET IN TOUCH
                    </h2>

                    <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                        Please Send Us A Message To Discuss More.
                        We Will Get Back To you Within 24 hours.
                    </p>

                    <div className="flex items-start gap-3 mb-5">
                        <FaEnvelope className="text-blue-600 mt-1" />
                        <p className="text-gray-700 text-sm">
                            vineet.agarwala@bluehorse.in
                        </p>
                    </div>

                    <div className="flex items-start gap-3">
                        <FaMapMarkerAlt className="text-blue-600 mt-1" />
                        <p className="text-gray-700 text-sm leading-relaxed">
                            BlueHorse Software Solution Pvt.Ltd.
                            <br />
                            2nd Floor (Zbrdst Express), B8
                            Aurabinda Nagar, Midnapore - 721101
                        </p>
                    </div>

                    {/* TRIANGLE */}
                    <span className="absolute -left-2.5 top-1/2 -translate-y-1/2 w-5 h-5 bg-blue-600 rotate-45"></span>
                </div>
            </div>

            {/* RIGHT FORM SECTION */}
            <div
                className="relative flex items-center justify-center p-10 "
                style={{
                    backgroundImage: "url('/assest/images/sliderlogo/BG.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <form className="w-full max-w-5xl mx-auto grid grid-cols-2 gap-x-10 gap-y-6 pl-[375px] pt-[75px] pb-[75px] pr-[75px]">

                    {/* NAME */}
                    <div className="w-full">
                        <label className="block mb-2 text-black text-lg">
                            Your Name <span className="text-red-500">*</span>
                        </label>
                        <input className="w-full h-[55px] px-4 rounded-lg bg-white/60 backdrop-blur-md border-2 border-white outline-none" />
                    </div>

                    {/* BRAND */}
                    <div className="w-full">
                        <label className="block mb-2 text-black text-lg">
                            Brand (Optional)
                        </label>
                        <input className="w-full h-[55px] px-4 rounded-lg bg-white/60 backdrop-blur-md border-2 border-white outline-none" />
                    </div>

                    {/* EMAIL */}
                    <div className="w-full">
                        <label className="block mb-2 text-black text-lg">
                            Email ID <span className="text-red-500">*</span>
                        </label>
                        <input className="w-full h-[55px] px-4 rounded-lg bg-white/60 backdrop-blur-md border-2 border-white outline-none" />
                    </div>

                    {/* MOBILE */}
                    <div className="w-full">
                        <label className="block mb-2 text-black text-lg">
                            Mobile Number <span className="text-red-500">*</span>
                        </label>
                        <input className="w-full h-[55px] px-4 rounded-lg bg-white/60 backdrop-blur-md border-2 border-white outline-none" />
                    </div>

                    {/* MESSAGE */}
                    <div className="col-span-2">
                        <label className="block mb-2 text-black text-lg">
                            Message <span className="text-red-500">*</span>
                        </label>
                        <textarea
                            rows={6}
                            className="w-full px-4 py-3 rounded-lg bg-white/60 backdrop-blur-md border-2 border-white outline-none"
                        />
                    </div>

                    {/* BUTTON */}
                    <button className="col-span-2 w-full h-[60px] bg-[#1f7db6] text-white text-xl rounded-lg hover:bg-[#166a9a] transition">
                        Send
                    </button>

                </form>

            </div>
        </section>
    );
}


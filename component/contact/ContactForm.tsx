"use client";

import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactForm() {
  return (
    <section
      className="w-full grid lg:grid-cols-[35%_65%] grid-cols-1 bg-cover bg-center relative"
      style={{ backgroundImage: "url('/assets/image/Contact/BG.jpg')" }}
    >
      {/* LEFT SIDE MAP + INFO */}
      <div className="relative w-full h-[600px] lg:h-full">

        {/* MAP */}
        <iframe
          className="w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3688.368788500176!2d87.31141992369326!3d22.41514114438189!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1d5b398c19fb15%3A0xddc3e9527ea31096!2sBlueHorse%20Software%20Solutions%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1670224414460!5m2!1sen!2sin"
          loading="lazy"
        />

        {/* INFO CARD */}
        <div className="absolute right-[-60px] top-1/2 -translate-y-1/2 bg-white rounded-xl shadow-lg p-8 max-w-sm hidden lg:block">

          <h2 className="text-blue-600 font-semibold text-xl uppercase mb-4">
            Get In Touch
          </h2>

          <p className="text-gray-600 text-sm mb-6">
            Please Send Us A Message To Discuss More. We Will Get Back To you Within 24 hours.
          </p>

          <div className="flex items-center gap-3 mb-4">
            <FaEnvelope className="text-blue-600 text-lg" />
            <p className="text-gray-700 text-sm">
              vineet.agarwala@bluehorse.in
            </p>
          </div>

          <div className="flex items-start gap-3">
            <FaMapMarkerAlt className="text-blue-600 mt-1" />
            <p className="text-gray-700 text-sm">
              BlueHorse Software Solution Pvt.Ltd. <br />
              2nd Floor (Zbrdst Express), B8 Aurabinda Nagar,
              Midnapore - 721101
            </p>
          </div>

        </div>
      </div>

      {/* RIGHT SIDE FORM */}
      <form className="p-10 lg:p-16 backdrop-blur-sm bg-white/20">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div>
            <label className="block mb-2 font-medium">
              Your Name <span className="text-red-500">*</span>
            </label>
            <input type="text" className="w-full p-3 rounded-md border border-white/50 bg-white/40 outline-none"/>
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Brand (Optional)
            </label>
            <input type="text" className="w-full p-3 rounded-md border border-white/50 bg-white/40 outline-none"/>
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Email ID <span className="text-red-500">*</span>
            </label>
            <input type="email" className="w-full p-3 rounded-md border border-white/50 bg-white/40 outline-none"/>
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Mobile Number <span className="text-red-500">*</span>
            </label>
            <input type="tel" className="w-full p-3 rounded-md border border-white/50 bg-white/40 outline-none"/>
          </div>

        </div>

        <div className="mt-6">
          <label className="block mb-2 font-medium">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            rows={5}
            className="w-full p-3 rounded-md border border-white/50 bg-white/40 outline-none"
          />
        </div>

        <button
          type="submit"
          className="mt-8 w-full bg-[#1f77b4] text-white py-3 rounded-md text-lg hover:opacity-90 transition"
        >
          Send
        </button>

      </form>
    </section>
  );
}

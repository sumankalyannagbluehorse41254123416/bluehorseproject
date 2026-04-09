"use client";

import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="bg-gray-100 py-16 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl big-noodle font-semibold tracking-wide text-[#515253]">
            CONTACT US
          </h2>
          <p className="text-gray-500 mt-2">
            Let’s Turn Your Idea Into Reality
          </p>
        </div>

        {/* Grid */}
        <div className="grid lg:grid-cols-2 gap-8">

          {/* LEFT SIDE */}
          <div className="bg-[#168AAD] text-white p-5 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
            <p className="mb-8 text-white/90">
              We'd love to hear from you. Here's how you can reach us.
            </p>

            {/* Email */}
            <div className="flex items-start gap-4 mb-6">
              <Mail className="w-6 h-6 mt-1" />
              <a href="mailto:info@bluehorse.in" className="">
                info@bluehorse.in
              </a>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4 mb-6">
              <Phone className="w-6 h-6 mt-1" />
              <a href="tel:+919647000580" className="">
                +91 9647000580
              </a>
            </div>

            {/* Address */}
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 mt-1" />
              <a
                href="https://www.google.com/maps/search/?api=1&query=BlueHorse+Software+Solution+Pvt.Ltd."
                target="_blank"
                className=""
              >
                BlueHorse Software Solution Pvt.Ltd. 2nd Floor (Zbrdst Express),
                B8 Aurabinda Nagar, Midnapore - 721101
              </a>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="bg-white p-5 rounded-xl shadow-sm">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">
              Send Us a Message
            </h3>

            <form className="space-y-5">

              {/* Name Row */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-gray-600">First Name</label>
                  <input
                    type="text"
                    placeholder="Your First name"
                    className="w-full mt-1 p-3 border border-[#ccc] rounded-md focus:outline-none focus:ring-1 focus:ring-[#079bcb]"
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-600">Last Name</label>
                  <input
                    type="text"
                    placeholder="Your Last name"
                    className="w-full mt-1 p-3 border border-[#ccc] rounded-md focus:outline-none focus:ring-1 focus:ring-[#079bcb]"
                  />
                </div>
              </div>

              {/* Email + Phone */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-gray-600">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Email Id"
                    className="w-full mt-1 p-3 border border-[#ccc] rounded-md focus:outline-none focus:ring-1 focus:ring-[#079bcb]"
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-600">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    placeholder="Your mobile number"
                    className="w-full mt-1 p-3 border border-[#ccc] rounded-md focus:outline-none focus:ring-1 focus:ring-[#079bcb]"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="text-sm text-gray-600">Message</label>
                <textarea
                  rows={5}
                  placeholder="Please Write a Message"
                  className="w-full h-25 mt-1 p-3 border border-[#ccc] rounded-md focus:outline-none focus:ring-1 focus:ring-[#079bcb]"
                />
              </div>

              {/* Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-[#168AAD] text-white px-8 py-3 rounded-md hover:bg-[#136f8c] transition"
                >
                  Submit
                </button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
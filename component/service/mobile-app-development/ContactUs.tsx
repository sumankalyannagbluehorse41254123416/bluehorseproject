"use client";

import React from "react";

const ContactUs = () => {
  return (
    <section id="contact-us" className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="Section-Title">
            Contact Us
          </h2>
          <p className="Section-Details mt-2">
            Let’s Build Your Mobile App
          </p>
        </div>

        {/* Flex Wrapper */}
        <div className="flex flex-wrap gap-8 mt-10">
          
          {/* Contact Info */}
          <div className="flex-1 min-w-[300px] bg-blue text-white p-6 rounded-lg shadow">
            <p className="text-lg font-medium open-sans mb-6">
              Looking for reliable mobile app development services tailored to your business? Whether it's a fresh app idea or upgrading an existing one — we’re here to help.
            </p>

            <div className="space-y-5 mt-10">
              
              {/* Email */}
              <div className="flex items-center gap-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@bluehorse.in" className="text-sm md:text-base">
                  info@bluehorse.in
                </a>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+919647000580" className="text-sm md:text-base">
                  +91 9647000580
                </a>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3">
                <svg className="w-7 h-7 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=BlueHorse+Software+Solution+Pvt.Ltd.,+Midnapore"
                  target="_blank"
                  className="text-sm md:text-base leading-relaxed"
                >
                  BlueHorse Software Solution Pvt.Ltd. 2nd Floor (Zbrdst Express), B8 Aurabinda Nagar, Midnapore - 721101
                </a>
              </div>

            </div>
          </div>

          {/* Contact Form */}
          <div className="flex-1 min-w-[300px] bg-gray-50 p-6 rounded-lg shadow-lg relative">
            <h2 className="text-xl md:text-2xl font-bold text-black mb-4">
              Send Us a Message
            </h2>

            <form className="flex flex-col gap-5">
              
              {/* Name */}
              <div className="flex gap-3">
                <div className="w-full relative">
                  <label className="text-sm text-black font-bold">First Name</label>
                  <input
                    type="text"
                    placeholder="Your First name"
                    className="text-sm w-full mt-1 p-2 border border-[#ccc] rounded focus:outline-none focus:ring-1 bg-white focus:ring-blue-500"
                  />
                </div>

                <div className="w-full relative">
                  <label className="text-sm text-black font-bold">Last Name</label>
                  <input
                    type="text"
                    placeholder="Your Last name"
                    className="text-sm w-full mt-1 p-2 border border-[#ccc] rounded focus:outline-none focus:ring-1 bg-white focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Email + Phone */}
              <div className="flex gap-3">
                <div className="w-full relative">
                  <label className="text-sm text-black font-bold">Email Address</label>
                  <input
                    type="email"
                    placeholder="Email Id"
                    className="text-sm w-full mt-1 p-2 border border-[#ccc] rounded focus:outline-none focus:ring-1 bg-white focus:ring-blue-500"
                  />
                </div>

                <div className="w-full relative">
                  <label className="text-sm text-black font-bold">Phone Number</label>
                  <input
                    type="text"
                    placeholder="Your mobile number"
                    className="text-sm w-full mt-1 p-2 border border-[#ccc] rounded focus:outline-none focus:ring-1 bg-white focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="text-sm font-bold text-black">Message</label>
                <textarea
                  placeholder="Please Write a Message"
                  className="w-full mt-1 p-2 border border-[#ccc] rounded min-h-[100px] resize-y focus:outline-none focus:ring-1 bg-white focus:ring-blue-500"
                />
              </div>

              {/* Button */}
              <button
                type="button"
                className="cta-blue text-base! mx-auto text-white! rounded hover:bg-blue-500 transition"
              >
                Submit
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactUs;
"use client";

import { useState } from "react";
import type { Dispatch, SetStateAction } from "react";
import Link from "next/link";
import {
  FaX,
  FaChevronDown,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

type NavItem = { name: string; link: string };

interface MobileMenuProps {
  mobileMenu: boolean;
  setMobileMenu: Dispatch<SetStateAction<boolean>>;
  navItems: NavItem[];
}

export default function MobileMenu({
  mobileMenu,
  setMobileMenu,
  navItems,
}: MobileMenuProps) {
  const [showServices, setShowServices] = useState(false);

  if (!mobileMenu) return null;

  return (
    <div className="fixed inset-0 bg-[#f2f2f2] z-50 flex flex-col items-center justify-center text-center lg:hidden">
      
      {/* Close Button */}
      <button
        onClick={() => setMobileMenu(false)}
        className="absolute top-6 right-6 text-[text-blue] text-2xl"
      >
        <FaX />
      </button>

      {/* Menu Links */}
      <nav className="space-y-6 text-blue font-semibold tracking-[4px] text-30 big-noodle">

        {navItems.map((item) => {

          if (item.name === "Services") {
            return (
              <div key={item.name} className="flex flex-col items-center">

                {/* Services Button */}
                <button
                  onClick={() => setShowServices(!showServices)}
                  className="flex items-center justify-center gap-2"
                >
                  {item.name.toUpperCase()}

                  <FaChevronDown
                    size={14}
                    className={`transition-transform duration-300 ${
                      showServices ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Services Card */}
                {showServices && (
                  <div className="mt-6 w-[90%] max-w-90 font-poppins ">
                    <div className="bg-[#0c83d1] text-white p-8 rounded-2xl min-h-[320px] flex flex-col justify-between">
                      
                      <div>
                        <h3 className="text-xl font-poppins">
                          7-Day Go Live
                        </h3>

                        <div className="mt-3">
                          <div className="swiper-pagination"></div>
                        </div>

                        <p className="text-lg leading-relaxed mt-6">
                          Register your brand on our platform and launch a
                          fully optimized Shopify store in 1 week.
                        </p>
                      </div>

                      <div className="border-t border-white/40 pt-4 mt-6">
                        <Link
                          href="#"
                          className="inline-flex items-center gap-2 hover:underline"
                        >
                          Go digital in 7 days →
                        </Link>
                      </div>

                    </div>
                  </div>

                )}

              </div>
            );
          }

          return (
            <Link
              key={item.name}
              href={item.link}
              onClick={() => setMobileMenu(false)}
              className="block"
            >
              {item.name.toUpperCase()}
            </Link>
          );
        })}

      </nav>

      {/* Social Icons */}
      <div className="flex mt-10 gap-4">

        <div className="w-9 h-9 text-blue flex items-center justify-center">
          <FaFacebookF size={30} />
        </div>

        <div className="w-9 h-9 text-blue  flex items-center justify-center">
          <FaLinkedinIn size={30} />
        </div>

        <div className="w-9 h-9 text-blue  flex items-center justify-center">
          <FaInstagram size={30} />
        </div>

        <div className="w-9 h-9 text-blue  flex items-center justify-center">
          <FaXTwitter size={30} />
        </div>

        <div className="w-9 h-9 text-blue  flex items-center justify-center">
          <FaYoutube size={30} />
        </div>

      </div>

    </div>
  );
}
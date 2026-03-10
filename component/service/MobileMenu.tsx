"use client";

import type { Dispatch, SetStateAction } from "react";
import Link from "next/link";
import { FaX, FaChevronDown, FaFacebookF, FaLinkedinIn, FaInstagram, FaXTwitter, FaYoutube } from "react-icons/fa6";

type NavItem = { name: string; link: string };

interface MobileMenuProps {
  mobileMenu: boolean;
  setMobileMenu: Dispatch<SetStateAction<boolean>>;
  navItems: NavItem[];
}

export default function MobileMenu({ mobileMenu, setMobileMenu, navItems }: MobileMenuProps) {

  if (!mobileMenu) return null;

  return (
    <div className="fixed inset-0 bg-[#f2f2f2] z-50 flex flex-col items-center justify-center text-center lg:hidden">

      {/* Close Button */}
      <button
        onClick={() => setMobileMenu(false)}
        className="absolute top-6 right-6 text-[#079bcb] text-2xl"
      >
        <FaX />
      </button>

      {/* Menu Links */}
      <nav className="space-y-6 text-[#079bcb] font-semibold tracking-[4px] text-xl big-noodle">

        {navItems.map((item) => {

          if (item.name === "Services") {
            return (
              <div key={item.name} className="flex items-center justify-center gap-2">
                <Link href={item.link} onClick={() => setMobileMenu(false)}>
                  {item.name.toUpperCase()}
                </Link>
                <FaChevronDown size={14} />
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
      <div className="flex mt-10">

        <div className="w-9 h-9  text-[#079bcb]">
          <FaFacebookF size={20} />
        </div>

        <div className="w-9 h-9  text-[#079bcb]">
          <FaLinkedinIn size={20} />
        </div>

        <div className="w-9 h-9 text-[#079bcb]">
          <FaInstagram size={20} />
        </div>

        <div className="w-9 h-9  text-[#079bcb]">
          <FaXTwitter size={20} />
        </div>

        <div className="w-9 h-9 text-[#079bcb]">
          <FaYoutube size={20} />
        </div>

      </div>

    </div>
  );
}
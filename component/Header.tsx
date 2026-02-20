"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import ServicesSection from "@/component/work/woweats/ServicesSection";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showServices, setShowServices] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Work", link: "/work" },
    { name: "Services", link: "/services", hasArrow: true },
    { name: "About Us", link: "/about-us" },
    { name: "Careers", link: "/careers" },
    { name: "Contact", link: "/contact" },
    { name: "Blog", link: "/blog" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-white"
      }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-20">

          {/* LOGO */}
          <Link href="/">
            <img
              src="https://www.bluehorse.in/assets/image/Common/Logo.png"
              alt="Logo"
              className="h-auto w-28"
            />
          </Link>

          {/* NAV LINKS */}
          <div className="flex gap-14 text-[18px] items-center">

            {navItems.map((item) => {

              // ================= SERVICES MENU =================
              if (item.name === "Services") {
                return (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => setShowServices(true)}
                    onMouseLeave={() => setShowServices(false)}
                  >
                    <Link
                      href={item.link}
                      className={`relative group flex items-center gap-2 transition-all duration-300 ${
                        scrolled ? "text-[#0c83d1]" : "text-[#515253]"
                      }`}
                    >
                      {/* TEXT */}
                      <span className="relative">
                        {item.name}

                        {/* Underline */}
                        <span
                          className={`absolute left-0 -bottom-1 h-[2px] w-0 transition-all duration-300 group-hover:w-full ${
                            scrolled
                              ? "bg-[#0c83d1]"
                              : "bg-[#515253]"
                          }`}
                        ></span>
                      </span>

                      {/* Arrow */}
                      <FaChevronDown
                        className={`text-xs transition-transform duration-300 ${
                          showServices ? "rotate-180" : ""
                        }`}
                      />
                    </Link>

                    {/* DROPDOWN */}
                    {showServices && (
                      <div className="absolute left-1/2 -translate-x-1/2 top-full pt-6 w-screen">
                        <ServicesSection />
                      </div>
                    )}
                  </div>
                );
              }

              // ================= OTHER NAV ITEMS =================
              return (
                <Link
                  key={item.name}
                  href={item.link}
                  className={`relative group transition-all duration-300 ${
                    scrolled ? "text-[#0c83d1]" : "text-[#515253]"
                  }`}
                >
                  <span className="relative">
                    {item.name}

                    {/* Underline */}
                    <span
                      className={`absolute left-0 -bottom-1 h-[2px] w-0 transition-all duration-300 group-hover:w-full ${
                        scrolled
                          ? "bg-[#0c83d1]"
                          : "bg-[#515253]"
                      }`}
                    ></span>
                  </span>
                </Link>
              );
            })}

          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;

"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import ServicesSection from "@/component/work/woweats/ServicesSection";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

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
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-white shadow-md" : "bg-white"
        }`}
      >
        <div
          className="container mx-auto px-4 relative"
          onMouseLeave={() => setShowServices(false)}
        >
          <nav className="flex items-center justify-between h-20">

            {/* LOGO */}
            <Link href="/">
              <img
                src="https://www.bluehorse.in/assets/image/Common/Logo.png"
                alt="Logo"
                className="w-28"
              />
            </Link>

            {/* DESKTOP MENU */}
            <div className="hidden lg:flex gap-14 text-[18px] items-center">
              {navItems.map((item) => {

                if (item.name === "Services") {
                  return (
                    <div
                      key={item.name}
                      onMouseEnter={() => setShowServices(true)}
                    >
                      <Link
                        href={item.link}
                        className="flex items-center gap-2 text-[#515253]"
                      >
                        {item.name}
                        <FaChevronDown className="text-xs" />
                      </Link>
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.name}
                    href={item.link}
                    className="text-[#515253]"
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setMobileMenu(true)}
              className="lg:hidden text-2xl"
            >
              <FaBars />
            </button>

          </nav>

          {/* SERVICES POPUP */}
          {showServices && (
            <div className="absolute left-0 right-0 top-full">
              <div className="bg-white p-8">
                <ServicesSection />
              </div>
            </div>
          )}
        </div>
      </header>

      {/* MOBILE SIDEBAR */}
      <div
        className={`fixed top-0 right-0 h-full w-[280px] bg-white z-50 shadow-lg transform transition-transform duration-300 ${
          mobileMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >

        {/* CLOSE BUTTON */}
        <div className="flex justify-end p-5">
          <button onClick={() => setMobileMenu(false)}>
            <FaTimes className="text-2xl" />
          </button>
        </div>

        {/* MOBILE NAV LINKS */}
        <div className="flex flex-col gap-6 px-6 text-lg">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              onClick={() => setMobileMenu(false)}
              className="border-b pb-3"
            >
              {item.name}
            </Link>
          ))}
        </div>

      </div>

      {/* BACKDROP */}
      {mobileMenu && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setMobileMenu(false)}
        />
      )}
    </>
  );
};

export default Header;
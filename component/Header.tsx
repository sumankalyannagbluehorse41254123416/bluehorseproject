"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import ServicesSection from "@/component/work/woweats/ServicesSection";
import MobileMenu from "@/component/service/MobileMenu";

export default function Header() {

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

  // lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = mobileMenu ? "hidden" : "auto";
  }, [mobileMenu]);

  const navItems = [
    { name: "Work", link: "/work" },
    { name: "Services", link: "/services" },
    { name: "About Us", link: "/about-us" },
    { name: "Careers", link: "/careers" },
    { name: "Contact", link: "/contact" },
    { name: "Blog", link: "/blog" },
  ];

  return (
    <>
      {/* HEADER */}
      <header className={`fixed top-0 left-0 w-full z-50  transition-all duration-300
        ${scrolled ? "bg-white/80 shadow-sm backdrop-blur-xl" : "bg-white"}`}>

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
            <div className="hidden lg:flex gap-14 text-[18px] items-center big-noodle">

              {navItems.map((item) => {

                const textColor = scrolled ? "text-blue" : "text-black";
                const underlineColor = scrolled
                  ? "after:bg-blue"
                  : "after:bg-black";

                if (item.name === "Services") {
                  return (
                    <div
                      key={item.name}
                      onMouseEnter={() => setShowServices(true)}
                      className="relative group "
                    >

                      <Link
                        href={item.link}
                        className={`flex items-center gap-2 ${textColor}`}
                      >

                        <span
                          className={`relative
                          after:absolute after:left-0 after:-bottom-1
                          after:h-0.5 after:w-0 hover:after:w-full
                          ${underlineColor} after:transition-all after:duration-300 text-[20px] tracking-[1px]`}
                        >
                          {item.name}
                        </span>

                        <FaChevronDown className="text-[14px] transition-transform duration-300 group-hover:rotate-180" />

                      </Link>
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.name}
                    href={item.link}
                    className={`${textColor} relative
                    after:absolute after:left-0 after:-bottom-1
                    after:h-0.5 after:w-0 hover:after:w-full
                    ${underlineColor} after:transition-all after:duration-300 text-[20px] tracking-[1px]`}
                  >
                    {item.name}
                  </Link>
                );

              })}

            </div>

            {/* MOBILE BUTTON */}
            <button
              onClick={() => setMobileMenu(true)}
              className="lg:hidden text-30 height-7.5"
            >
              <CiMenuFries />
            </button>

          </nav>

          {/* SERVICES DROPDOWN */}
          {/* {showServices && (
            <div className="absolute left-0 right-0 top-full">
              <div className="bg-white p-8 shadow-lg">
                <ServicesSection />
              </div>
            </div>
          )} */}
          {/* SERVICES DROPDOWN */}
          <div
            className={`absolute left-0 right-0 top-full transition-all duration-500 ease-out
    ${showServices
                ? "opacity-100 translate-y-1 pointer-events-auto"
                : "opacity-0 translate-y-3 pointer-events-none"
              }`}
          >
            <div className="bg-white p-8 shadow-lg">
              <ServicesSection />
            </div>
          </div>

        </div>

      </header>

      {/* MOBILE MENU */}
      <MobileMenu
        mobileMenu={mobileMenu}
        setMobileMenu={setMobileMenu}
        navItems={navItems}
      />

    </>
  );
}
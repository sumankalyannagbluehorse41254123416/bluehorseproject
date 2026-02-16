"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${scrolled ? "bg-white shadow-md" : "bg-transparent"}
      `}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-20">

          {/* LOGO */}
          <Link href="/">
            <img
              src="https://www.bluehorse.in/assets/image/Common/Logo.png"
              alt="BlueHorse Softwares logo"
              className="h-auto w-27.5"
            />
          </Link>

          {/* NAV LINKS */}
          <div className="flex gap-8 text-[20px] big-noodle font-normal items-center leading-6 tracking-[1px]">
            {navItems.map((item) => (

              <Link
                key={item.name}
                href={item.link}
                className={`relative flex items-center gap-2 transition-all duration-300 group
        ${scrolled ? "text-[#0c83d1]" : "text-[#515253]"}
      `}
              >

                {/* TEXT WRAPPER (underline only here) */}
                <span className="relative">
                  {item.name}

                  {/* Underline */}
                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#0c83d1] transition-all duration-300 group-hover:w-full"></span>
                </span>

                {/* Arrow only for Services */}
                {item.hasArrow && (
                  <FaChevronDown className="text-xs transition-transform duration-300 group-hover:rotate-180" />
                )}

              </Link>

            ))}
          </div>



        </nav>
      </div>
    </header>
  );
};

export default Header;


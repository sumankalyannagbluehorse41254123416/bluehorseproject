"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
          ${scrolled ? "bg-white" : "bg-transparent"}
        `}>
        <div className="mx-20">
          <nav className="flex items-center justify-between h-20">
            {/* LOGO */}
            <Link href="/">
              <img
                src="https://www.bluehorse.in/assets/image/Common/Logo.png"
                alt="BlueHorse Softwares logo"
                className="h-auto w-[110px]"
              />
            </Link>

            {/* NAV LINKS */}
            <div className="flex gap-8 text-sm font-semibold">
              {[
                { name: "Work", link: "/work" },
                { name: "About Us", link: "/about-us" },
                { name: "Careers", link: "/careers" },
                { name: "Contact", link: "/contact" },
                { name: "Blog", link: "/blog" },
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.link}
                  className={`transition-colors duration-300
                    ${
                      scrolled ?
                        "text-blue-600 hover:text-blue-800"
                      : "text-white hover:text-blue-300"
                    }
                  `}>
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;

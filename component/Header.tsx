"use client";
import  { useEffect, useState } from "react";

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
          ${
            scrolled
              ? "bg-white "
              : "bg-transparent"
          }
        `}
      >
        <div className="mx-20">
          <nav className="flex items-center justify-between h-20">
            {/* LOGO */}
            <a href="https://www.bluehorse.in">
              <img
                src="https://www.bluehorse.in/assets/image/Common/Logo.png"
                alt="BlueHorse Softwares logo"
                className="h-10"
              />
            </a>

            {/* NAV LINKS */}
            <div className="flex gap-8 text-sm font-semibold">
              <a href="https://www.bluehorse.in/work.html" className="hover:text-blue-600">
                Work
              </a>
              <a href="https://www.bluehorse.in/about-us.html" className="hover:text-blue-600">
                About Us
              </a>
              <a href="https://www.bluehorse.in/careers.html" className="hover:text-blue-600">
                Careers
              </a>
              <a href="https://www.bluehorse.in/contact.html" className="hover:text-blue-600">
                Contact
              </a>
              <a href="https://www.bluehorse.in/blog.html" className="hover:text-blue-600">
                Blog
              </a>
            </div>
          </nav>
        </div>
      </header>

      {/* Spacer for fixed header */}
      <div className="h-20"></div>
    </>
  );
};

export default Header;

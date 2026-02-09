// export default Footer;
import Image from "next/image";
import React from "react";
import { FaFacebook, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";


const Footer: React.FC = () => {
  return (
    <footer className=" container">
      {/* Top Section */}
      <div className="flex justify-between gap-10 flex-wrap">
        {/* Left */}
        <div className="max-w-[400px]">
          <div className="flex items-center gap-5 mb-5">
            <img
              src="https://www.bluehorse.in/imagesnew/bh_logo.png"
              alt="Bluehorse Logo"
              className="w-auto h-17 border-r-[3px] border-sky-500 pr-5"
            />
            <h3 className="text-sky-600 font-semibold tracking-wide text-[20px]">
              EMPOWERING <br /> BUSINESS ONLINE
            </h3>
          </div>

          <p className="text-gray-600 text-[16px]">
            Empowering D2C brands with AI-driven, scalable web and mobile apps
          </p>
        </div>
        {/* Right */}
        <div className="flex justify-between gap-10 flex-wrap">
          {/* eCommerce Services */}
          <div>
            <h4 className="text-sky-600 font-semibold mb-4 text-[18px] relative inline-block 
after:content-[''] after:absolute after:left-0 after:bottom-0 
after:h-[2px] after:w-full after:bg-sky-600 
after:scale-x-0 after:origin-left 
after:transition-transform after:duration-300 
hover:after:scale-x-100">
              eCommerce Development Services
            </h4>

            <ul className="space-y-2 text-gray-600 text-sm">
              <li>
                <a href="#" className="hover:text-sky-600">
                  Shopify
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-sky-600">
                  Magento
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-sky-600">
                  TezCommerce
                </a>
              </li>
            </ul>

            <h4 className="text-sky-600 font-semibold mb-4 mt-4 text-[18px] relative inline-block 
after:content-[''] after:absolute after:left-0 after:bottom-0 
after:h-[2px] after:w-full after:bg-sky-600 
after:scale-x-0 after:origin-left 
after:transition-transform after:duration-300 
hover:after:scale-x-100">
              Shopify Development Services
            </h4>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>
                <a href="#" className="hover:text-sky-600">
                  Shopify App Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-sky-600">
                  Shopify Mobile App Development
                </a>
              </li>
            </ul>
          </div>

          {/* Other Services */}
          <div>
            <h4 className="text-sky-600 font-semibold mb-4 text-[18px] relative inline-block 
after:content-[''] after:absolute after:left-0 after:bottom-0 
after:h-[2px] after:w-full after:bg-sky-600 
after:scale-x-0 after:origin-left 
after:transition-transform after:duration-300 
hover:after:scale-x-100">
              Our Other Services
            </h4>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>
                <a href="#" className="hover:text-sky-600">
                  Services For Startups
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-sky-600">
                  Our AI-Powered Solution
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-sky-600">
                  Mobile App Development
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sky-600 font-semibold mb-4 text-[18px] relative inline-block 
after:content-[''] after:absolute after:left-0 after:bottom-0 
after:h-[2px] after:w-full after:bg-sky-600 
after:scale-x-0 after:origin-left 
after:transition-transform after:duration-300 
hover:after:scale-x-100">Quick links</h4>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>
                <a href="#" className="hover:text-sky-600">
                  Work
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-sky-600">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-sky-600">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Products + Social */}
      <div className="flex flex-col lg:flex-row justify-between items-center mt-5 mb-10 gap-6">
        {/* Products */}
        <div className="flex items-center gap-6">
          <h3 className="text-sky-600 font-semibold text-[22px]">Our Products</h3>

          <div className="flex items-center gap-6">
            <Image
              src="https://www.bluehorse.in/imagesnew/d2c.png"
              alt="D2C"
              className="h-12 w-auto object-contain border-r border-sky-500 pr-6"
              width={120}
              height={50}
            />

            <Image
              src="https://www.bluehorse.in/imagesnew/tezco.png"
              alt="TezCommerce"
              className="h-10 w-auto object-contain border-r border-sky-500 pr-6"
              width={120}
              height={50}
            />

            <Image
              src="https://www.bluehorse.in/imagesnew/secondinnings.png"
              alt="Second Innings"
              className="h-10 w-auto object-contain"
              width={120}
              height={50}
            />
          </div>

        </div>

        {/* Social Icons */}
        <div className="flex gap-4 text-white">
          <a href="#" className="bg-sky-600 w-10 h-10 flex items-center justify-center rounded-full">
            <FaFacebook size={20} />
          </a>

          <a href="#" className="bg-sky-600 w-10 h-10 flex items-center justify-center rounded-full">
            <FaYoutube size={20} />
          </a>

          <a href="#" className="bg-sky-600 w-10 h-10 flex items-center justify-center rounded-full">
            <RiTwitterXLine size={20} />
          </a>

          <a href="#" className="bg-sky-600 w-10 h-10 flex items-center justify-center rounded-full">
            <FaLinkedinIn size={20} />
          </a>
        </div>

      </div>

      {/* Bottom */}
      <div className="flex flex-col lg:flex-row justify-between items-center text-sm text-gray-600 py-5 border-t border-[#079bcb]">
        <p className="text-[14px]">
          © 2026{" "}
          <span className="text-sky-600 font-medium text-[16px]">
            BLUEHORSE SOFTWARE SOLUTIONS PRIVATE LIMITED
          </span>{" "}
          | All Rights Reserved.
        </p>

        <div className="flex gap-6">
          <a href="#" className="hover:text-sky-600">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-sky-600">
            Terms Of Use
          </a>
        </div>
      </div>

    </footer>
  );
};

export default Footer;

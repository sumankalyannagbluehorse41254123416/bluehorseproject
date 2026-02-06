
// export default Footer;
import Image from "next/image";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 border-t border-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Top Section */}
        <div className="grid grid-cols-2 gap-10">
          {/* Left */}
          <div>
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
          <div className="grid grid-cols-3">
            {/* eCommerce Services */}
            <div>
              <h4 className="text-sky-600 font-semibold mb-4">
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

              <h4 className="text-sky-600 font-semibold mt-6 mb-3">
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
              <h4 className="text-sky-600 font-semibold mb-4">
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
              <h4 className="text-sky-600 font-semibold mb-4">Quick links</h4>
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
        <div className="flex flex-col lg:flex-row justify-between items-center border-t border-sky-500 mt-10 pt-6 gap-6">
          {/* Products */}
          <div className="flex items-center gap-6">
            <h3 className="text-sky-600 font-semibold">Our Products</h3>

            <div className="flex items-center gap-6">
              <Image
                src="https://www.bluehorse.in/imagesnew/d2c.png"
                alt="D2C"
                className="h-8 border-r border-sky-500 pr-6"
                width={50}
                height={50}
              />
              <Image
                src="https://www.bluehorse.in/imagesnew/tezco.png"
                alt="TezCommerce"
                className="h-8 border-r border-sky-500 pr-6"
                width={50}
                height={50}
              />
              <Image
                src="https://www.bluehorse.in/imagesnew/secondinnings.png"
                alt="Second Innings"
                className="h-8"
                width={50}
                height={50}
              />
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 text-white">
            <a
              href="#"
              className="bg-sky-600 w-10 h-10 flex items-center justify-center rounded-full">
              <i className="ri-facebook-fill"></i>
            </a>
            <a
              href="#"
              className="bg-sky-600 w-10 h-10 flex items-center justify-center rounded-full">
              <i className="ri-youtube-fill"></i>
            </a>
            <a
              href="#"
              className="bg-sky-600 w-10 h-10 flex items-center justify-center rounded-full">
              <i className="ri-twitter-x-line"></i>
            </a>
            <a
              href="#"
              className="bg-sky-600 w-10 h-10 flex items-center justify-center rounded-full">
              <i className="ri-linkedin-fill"></i>
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col lg:flex-row justify-between items-center text-sm text-gray-600 mt-6 gap-3">
          <p>
            © 2026{" "}
            <span className="text-sky-600 font-medium">
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
      </div>
    </footer>
  );
};

export default Footer;

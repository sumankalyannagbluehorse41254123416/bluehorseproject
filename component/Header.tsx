import React from "react";

const Header = () => {
  return (
    <header className="main_header">
      <nav className="Nav">
        <a href="https://www.bluehorse.in">
          <img
            src="https://www.bluehorse.in/assets/image/Common/Logo.png"
            alt="BlueHorse Softwares light logo"
            className="Logo"
          />
          <img
            src="https://www.bluehorse.in/assets/image/Common/Logo.png"
            alt="BlueHorse Softwares dark logo"
            className="Logo logo_sticky"
          />
        </a>
        <div className="Nav-Link-Container">
          <a href="https://www.bluehorse.in/work.html" className="Nav-Link">
            Work
          </a>

          <div className="MegaMenu-Wrapper">
            <a
              href="https://www.bluehorse.in/services.html"
              className="Nav-Link">
              Services
            </a>
            <i className="ri-arrow-down-s-line toggle-mega Nav-Link"></i>

            <div className="MegaMenu">
              <div className="MegaMenu-Column">
                <h4>
                  <a
                    href="https://www.bluehorse.in/services/ecommerce-development-services"
                    target="_blank">
                    eCommerce Development Services
                  </a>
                </h4>
                <a
                  href="https://www.bluehorse.in/services/shopify-development-services"
                  target="_blank">
                  Shopify <i className="ri-arrow-right-s-line"></i>
                </a>
                <a
                  href="https://www.bluehorse.in/services/ecommerce-development-services/magento2-development-services"
                  target="_blank">
                  Magento <i className="ri-arrow-right-s-line"></i>
                </a>
                <a href="https://tezcommerce.com" target="_blank">
                  TezCommerce <i className="ri-arrow-right-s-line"></i>
                </a>
              </div>

              <div className="MegaMenu-Column">
                <h4>Other Services</h4>
                <a
                  href="https://www.bluehorse.in/services/software-development-for-startups"
                  target="_blank">
                  Software development for Startups{" "}
                  <i className="ri-arrow-right-s-line"></i>
                </a>
                <a
                  href="https://www.bluehorse.in/services/mobile-app-development"
                  target="_blank">
                  Mobile App Development{" "}
                  <i className="ri-arrow-right-s-line"></i>
                </a>
                <a href="https://tezcommerce.ai" target="_blank">
                  AI Development <i className="ri-arrow-right-s-line"></i>
                </a>
              </div>

              <div className="carousel-container">
                <div className="carousel">
                  <div className="slide">
                    <div className="slide-title">Website Audit</div>
                    <div className="slide-quote">
                      Get a 360° website audit and uncover hidden issues holding
                      back your online growth.
                    </div>
                    <a
                      href="https://www.bluehorse.in/website-audit"
                      target="_blank"
                      className="view-achievements">
                      Audit your website now{" "}
                      <i className="ri-arrow-right-line"></i>
                    </a>
                  </div>

                  <div className="slide">
                    <div className="slide-title">7-Day Go Live</div>
                    <div className="slide-quote">
                      Register your brand on our platform and launch a fully
                      optimized Shopify store in 1 week.
                    </div>
                    <a
                      href="https://www.bluehorse.in/d2c-ecommerce-solutions-launch-in-7-days"
                      target="_blank"
                      className="view-achievements">
                      Go digital in 7 days{" "}
                      <i className="ri-arrow-right-line"></i>
                    </a>
                  </div>
                </div>

                <div className="dots">
                  <span className="dot active"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                </div>
              </div>
            </div>
          </div>

          <a href="https://www.bluehorse.in/about-us.html" className="Nav-Link">
            About Us
          </a>
          <a href="https://www.bluehorse.in/careers.html" className="Nav-Link">
            Careers
          </a>
          <a href="https://www.bluehorse.in/contact.html" className="Nav-Link">
            Contact
          </a>
          <a href="https://www.bluehorse.in/blog.html" className="Nav-Link">
            Blog
          </a>
        </div>
      </nav>

      <nav className="Side-Nav-Container">
        <div className="Side-Nav">
          <div className="Side-Nav-Btn">
            <i className="ri-menu-3-fill Side-Nav-Open-Btn"></i>
            <p className="Side-Nav-Menu-Text">Menu</p>
            <a className="Side-Nav-Logo" href="https://www.bluehorse.in">
              <img
                src="https://www.bluehorse.in/assets/image/Common/Logo-White.png"
                alt="white-logo"
              />
            </a>
          </div>
        </div>

        <div className="Side-Nav-Links-Container">
          <div className="mobile_menu_wrap">
            <i className="ri-close-line Side-Nav-Close-Btn"></i>
            <img
              className="horse_logo"
              src="https://www.bluehorse.in/assets/image/megamenuBG.jpg"
              alt="megamenuBG"
            />
            <ul className="mobile_menu">
              <li>
                <a href="https://www.bluehorse.in/work.html">Work</a>
              </li>
              <li className="collapsible">
                <a href="javascript:void(0);">
                  <i
                    className="ri-arrow-down-s-line"
                    style={{ opacity: 0 }}></i>
                  Services
                  <i className="ri-arrow-down-s-line"></i>
                </a>
              </li>

              <li>
                <a href="https://www.bluehorse.in/about-us.html">About Us</a>
              </li>
              <li>
                <a href="https://www.bluehorse.in/careers.html">Careers</a>
              </li>
              <li>
                <a href="https://www.bluehorse.in/contact.html">Contact</a>
              </li>
              <li>
                <a href="https://www.bluehorse.in/blog.html">Blog</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="Side-Nav-Overlay"></div>
      </nav>
    </header>
  );
};

export default Header;

"use client";

import React from "react";

const WorkSection = () => {
  return (
    <section className="bh_work_details custom_home">
      <div className="pt-10 container">
        <h2 className="text-[40px] text-center ">Our Work Defines Our Success</h2>
        <p className="text-center text-[16px] max-w-3xl mx-auto mt-4 mb-10 font-medium">
          As a top web and mobile app development company, our success is
          written in the solutions we build — not in what we say.
        </p>

        <div className="grid grid-cols-2 gap-25">
          {/* Wow Eats */}
          <div
  className="bh_work_img animate bg-no-repeat bg-cover bg-center relative group h-[600px]"
  style={{
    backgroundImage: "url('/assest/images/wow_momo.jpeg')",
  }}
>

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-center items-center p-8 text-center">

    {/* Logo (SHOW ON HOVER) */}
    <div className="mb-6">
      <img
        src="https://www.bluehorse.in/BH WORK PAGE/assets/images/wowmomo_logo.png"
        className="w-[150px] mx-auto"
      />
    </div>

    {/* Text */}
    <a
      target="_blank"
      href="https://www.bluehorse.in/work/woweats"
      className="text-white text-lg leading-relaxed"
    >
      Wow! Momo Foods, known for Wow! Momo, Wow! China, and Wow! Chicken,
      is one of India’s fastest-growing QSR brands, boasting over 800 stores
      across eight unique offerings.
    </a>
  </div>

  {/* Always Visible Buttons */}
  <div className="absolute bottom-4 left-4 flex gap-2 flex-wrap z-10">
    <span className="bg-white/20 backdrop-blur-md text-white text-sm px-3 py-1 rounded-md">
      Top QSR Brand
    </span>
    <span className="bg-white/20 backdrop-blur-md text-white text-sm px-3 py-1 rounded-md">
      Dine-in-app
    </span>
    <span className="bg-white/20 backdrop-blur-md text-white text-sm px-3 py-1 rounded-md">
      Flutter
    </span>
  </div>

</div>


          {/* Manyavar */}
          <div className="mt-25">
            <div className="work_name">
              <a
                target="_blank"
                href="https://www.bluehorse.in/work/manyavar-brand-for-ethnic-wear-collection"
                className="text">
                <h3 className="text-4xl mb-5">Manyavar</h3>
              </a>
            </div>

            <div
              className="bh_work_img animate"
              style={{
                backgroundImage:
                  "url('/assest/images/manyavar.jpeg')",
              }}>
              <div className="work_logo visible">
                <a
                  target="_blank"
                  href="https://www.bluehorse.in/work/manyavar-brand-for-ethnic-wear-collection"
                  className="text">
                  <img src="https://www.bluehorse.in/BH WORK PAGE/assets/images/manyavar_logo.png" />
                </a>
              </div>

              <div className="work_tagline visible">
                <a
                  target="_blank"
                  href="https://www.bluehorse.in/work/manyavar-brand-for-ethnic-wear-collection"
                  className="text">
                  <p>
                    Manyavar’s partnership with BlueHorse began with swiftly
                    resolving Manyavar&apos;s ecommerce challenges
                  </p>
                </a>
              </div>

              <div className="link_tag">
                <a href="https://www.bluehorse.in/works/Retail">Retail</a>
                <a href="https://www.bluehorse.in/works/Fashion">Fashion</a>
                <a href="https://www.bluehorse.in/works/laravel">Laravel</a>
              </div>
            </div>

            <div className="read-btn">
              <a
                target="_blank"
                href="https://www.bluehorse.in/work/manyavar-brand-for-ethnic-wear-collection">
                View case study<i className="fa fa-arrow-right"></i>
              </a>
            </div>
          </div>

          {/* EazyDiner */}
          <div className="image_wrap">
            <div className="work_name">
              <a
                href="https://www.bluehorse.in/work/eazydiner-tech-solution-for-food-industry"
                target="_blank"
                className="text">
                <h3 className="text-4xl mb-5">EazyDiner</h3>
              </a>
            </div>

            <div
              className="bh_work_img"
              style={{
                backgroundImage:
                  "url('/assest/images/eazydinner.jpeg')",
              }}>
              <div className="work_logo visible">
                <a
                  href="https://www.bluehorse.in/work/eazydiner-tech-solution-for-food-industry"
                  target="_blank"
                  className="text">
                  <img src="https://www.bluehorse.in/BH WORK PAGE/assets/images/eazydinerlogo.png" />
                </a>
              </div>

              <div className="work_tagline visible">
                <a
                  href="https://www.bluehorse.in/work/eazydiner-tech-solution-for-food-industry"
                  target="_blank"
                  className="text">
                  <p>
                    EazyDiner is a dining application that allows users to
                    explore restaurants based on curated categories and top and
                    new restaurant
                  </p>
                </a>
              </div>

              <div className="link_tag">
                <a href="https://www.bluehorse.in/works/Food">Food</a>
                <a href="https://www.bluehorse.in/works/DiningApp">
                  Dine-in-app
                </a>
                <a href="https://www.bluehorse.in/works/Hospitality">
                  Hospitality
                </a>
                <a href="https://www.bluehorse.in/works/laravel">Laravel</a>
              </div>
            </div>

            <div className="read-btn">
              <a href="https://www.bluehorse.in/work/eazydiner-tech-solution-for-food-industry">
                View case study<i className="fa fa-arrow-right"></i>
              </a>
            </div>
          </div>

          {/* Creoo */}
          <div className="image_wrap">
            <div className="work_name">
              <a
                href="https://www.bluehorse.in/work/creoo"
                target="_blank"
                className="text">
                <h3 className="text-4xl mb-5">Creoo</h3>
              </a>
            </div>

            <div
              className="bh_work_img"
              style={{
                backgroundImage:
                  "url('/assest/images/creoo_banner.jpeg')",
              }}>
              <div className="work_logo visible">
                <a
                  href="https://www.bluehorse.in/work/creoo"
                  target="_blank"
                  className="text">
                  <img src="https://www.bluehorse.in/BH WORK PAGE/assets/images/creoo_logo.png" />
                </a>
              </div>

              <div className="work_tagline visible">
                <a
                  href="https://www.bluehorse.in/work/creoo"
                  target="_blank"
                  className="text">
                  <p>
                    Creoo is a dynamic digital platform that offers personalized
                    mentorship, career guidance, and hands-on internship support
                    to empower international students and Indian graduates in
                    building successful careers in the UK.
                  </p>
                </a>
              </div>

              <div className="link_tag">
                <a href="https://www.bluehorse.in/works/startup">
                  Tech for startup
                </a>
                <a href="https://www.bluehorse.in/works/online-consulting">
                  Online consulting
                </a>
                <a href="https://www.bluehorse.in/works/video-conferencing">
                  Video Conferencing
                </a>
              </div>
            </div>

            <div className="read-btn">
              <a href="https://www.bluehorse.in/work/creoo" target="_blank">
                View case study<i className="fa fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="more_works">
          <a href="https://www.bluehorse.in/work.html" target="_blank">
            View All Case Studies
          </a>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;

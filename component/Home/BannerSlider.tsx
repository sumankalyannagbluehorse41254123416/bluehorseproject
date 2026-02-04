"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

const BannerSlider = () => {
  return (
    <section id="banner_slider">
      <div className="container">
        <Swiper
          className="banner_slider"
          modules={[Autoplay, Pagination, EffectFade]}
          slidesPerView={1}
          loop={true}
          effect="fade"
          speed={3000}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}>
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="slide_img">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.bluehorse.in/services/organic-marketing">
                <figure>
                  <img
                    src="https://www.bluehorse.in/assets/image/slider3.jpg"
                    alt="slider_img"
                  />
                </figure>
              </a>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div className="slide_img">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.bluehorse.in/website-audit">
                <figure>
                  <img
                    src="https://www.bluehorse.in/assets/image/slide2.jpg"
                    alt="slider_img"
                  />
                </figure>
              </a>
            </div>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide>
            <div className="slide_img">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.bluehorse.in/d2c-ecommerce-solutions-launch-in-7-days">
                <figure>
                  <img
                    src="https://www.bluehorse.in/assets/image/slide1.jpg"
                    alt="slider_img"
                  />
                </figure>
              </a>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default BannerSlider;

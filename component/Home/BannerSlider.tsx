"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const BannerSlider = () => {
  return (
    <section id="banner_slider">
      <div className="container pt-10 mx-auto">

        <Swiper
          modules={[Autoplay, Pagination, EffectFade]}
          slidesPerView={1}
          loop={true}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          speed={1200}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          className="banner_slider customBannerSwiper"
        >
          <SwiperSlide>
            <a href="#" className="block">
              <img
                src="https://www.bluehorse.in/assets/image/slider3.jpg"
                alt="Slider 3"
                className="w-full py-10"
              />
            </a>
          </SwiperSlide>

          <SwiperSlide>
            <a href="#" className="block">
              <img
                src="https://www.bluehorse.in/assets/image/slide2.jpg"
                alt="Slider 2"
                className="w-full py-10"
              />
            </a>
          </SwiperSlide>

          <SwiperSlide>
            <a href="#" className="block">
              <img
                src="https://www.bluehorse.in/assets/image/slide1.jpg"
                alt="Slider 1"
                className="w-full py-10"
              />
            </a>
          </SwiperSlide>

        </Swiper>

      </div>
    </section>
  );
};

export default BannerSlider;
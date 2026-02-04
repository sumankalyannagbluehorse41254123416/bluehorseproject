"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const BannerSlider = () => {
  return (
    <section id="banner_slider">
      <div className="container pt-10 ml-auto mr-auto">
        <Swiper
          modules={[Autoplay, Pagination, EffectFade]}
          slidesPerView={1}
          loop={true}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          speed={1200}
          // autoplay={{
          //   delay: 4000,
          //   disableOnInteraction: false,
          // }}
          pagination={{ clickable: true }}
          className="banner_slider"
        >
          <SwiperSlide>
            <a href="#" className="slide_img">
              <img src="https://www.bluehorse.in/assets/image/slider3.jpg" />
            </a>
          </SwiperSlide>

          <SwiperSlide>
            <a href="#" className="slide_img">
              <img src="https://www.bluehorse.in/assets/image/slide2.jpg" />
            </a>
          </SwiperSlide>

          <SwiperSlide>
            <a href="#" className="slide_img">
              <img src="https://www.bluehorse.in/assets/image/slide1.jpg" />
            </a>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default BannerSlider;




import BannerSlider from "@/component/Home/BannerSlider";
import BlueHorseFAQ from "@/component/Home/BlueHorseFAQ";
import CuratedProducts from "@/component/Home/CuratedProducts";
import EcommerceServiceSection from "@/component/Home/EcommerceServiceSection";
import HomeService from "@/component/Home/HomeService";
import IntroSection from "@/component/Home/IntroSection";
import LogoSwiper from "@/component/Home/logoSliderdesktop";
import OtherService from "@/component/Home/OtherService";
import TestimonialsSection from "@/component/Home/TestimonialsSection";
import TezcommerceBanner from "@/component/Home/TezcommerceBanner";
import WorkSection from "@/component/Home/WorkSection";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <IntroSection />
      <LogoSwiper />
      <BannerSlider />
      <WorkSection />
      <HomeService />
      <EcommerceServiceSection />
      <OtherService />
      <TestimonialsSection />
      <CuratedProducts />
      <TezcommerceBanner />
      <BlueHorseFAQ />
    </>
  );
}

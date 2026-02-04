import BannerSlider from "@/component/Home/BannerSlider";
import EcommerceServiceSection from "@/component/Home/EcommerceServiceSection";
import HomeService from "@/component/Home/HomeService";
import IntroSection from "@/component/Home/IntroSection";
import LogoSwiper from "@/component/Home/logoSliderdesktop";
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
    </>
  );
}

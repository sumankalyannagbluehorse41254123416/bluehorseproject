import BlogIntroSection from "@/component/blog/BlogIntroSection";
import BlogCategories from "@/component/blog/BlogCategories";
import BlogList from "@/component/blog/BlogList";
import BrandLogos from "@/component/UI/brand_wrap";
export default function blogpage() {
  return (
    <>
      <BlogIntroSection />
      <BlogCategories />
      <BlogList />
      <BrandLogos />
    </>
  );
}
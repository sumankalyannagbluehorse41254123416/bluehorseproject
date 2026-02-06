import CuratedProducts from "@/component/Home/CuratedProducts";
import EcommerceServiceSection from "@/component/Home/EcommerceServiceSection";
import OtherService from "@/component/Home/OtherService";
import BrandLogos from "@/component/UI/brand_wrap";
import React from "react";

const SoftwareDevelopmentHeader: React.FC = () => {
  return (
    <>
      <section className="header pt-30">
        <div className="container">
          <div className="main-title ">
            <h1 className="sectionTitle text-[40px]">
              Software Development Services
            </h1>
            <p className="p-10">
              We provide end-to-end Software Development Services tailored for
              startups and enterprises, combining next-gen tech, organic
              marketing, and growth with AI. Our solutions drive innovation,
              scalability, and measurable business impact—empowering brands to
              accelerate growth through smart, future-ready services
            </p>
          </div>
        </div>
      </section>
      <EcommerceServiceSection />
      <OtherService />
      <CuratedProducts />
      <BrandLogos />
    </>
  );
};

export default SoftwareDevelopmentHeader;

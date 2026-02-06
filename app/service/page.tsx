import EcommerceServiceSection from "@/component/Home/EcommerceServiceSection";
import React from "react";

const SoftwareDevelopmentHeader: React.FC = () => {
  return (
    <>
      <section className="header">
        <div className="container">
          <div className="main-title">
            <h1 className="sectionTitle">Software Development Services</h1>
            <p>
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
    </>
  );
};

export default SoftwareDevelopmentHeader;

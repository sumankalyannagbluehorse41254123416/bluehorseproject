'use client';

import React from 'react';

const ShopifyExpertiseSection: React.FC = () => {
  return (
    <section id="Why_BlueHorse" className="py-24 bg-white relative">
      <div className=" px-6 lg:px-8">
        <div className=" text-center">
          {/* Heading - exactly matches screenshot size & style */}
          <h2 className="text-[40px] font-normal text-[#515253] leading-[1.15] tracking-[-0.02em] uppercase">
            MAXIMIZE YOUR ONLINE STORE’S POTENTIAL WITH SHOPIFY EXPERTISE
          </h2>

          {/* Paragraph - clean, readable, centered */}
          <p className="mt-10 text-lg md:text-xl text-gray-600 leading-relaxed">
            In today’s fast-paced eCommerce landscape, Shopify stands out as a powerful platform that drives significant online sales. At BlueHorse, our Shopify development services are designed to help businesses harness this potential — optimizing store performance, elevating customer experiences, and enabling long-term growth.
          </p>
        </div>
      </div>

    </section>
  );
};

export default ShopifyExpertiseSection;
"use client";

import { useState } from "react";
import Image from "next/image";

type Service = {
  title: string;
  description: string;
  icon: string;
};

const services: Service[] = [
  {
    title: "Magento Web Development",
    description:
      "Looking for a feature-rich, highly customized B2B or B2C eCommerce store? Our Magento developers can harness the power of Magento CMS to provide seamless 3rd party integrations for Magento CE and EE, as well as ERP and POS systems.",
    icon: "https://www.bluehorse.in/bluehorse-html/ecommercedevelopmentassets/image/so-icon.svg",
  },
  {
    title: "Magento Theme Development",
    description:
      "Need a white-labeled Magento theme for your eCommerce website? Our experts specialize in creating highly functional, comprehensive, and fully admin-manageable frontend themes from PSDs, JPGs, and PNGs.",
    icon: "https://www.bluehorse.in/bluehorse-html/ecommercedevelopmentassets/image/ece-icon.svg",
  },
  {
    title: "Magento Extension Development",
    description:
      "If you need a Magento extension for your eCommerce store or to support your SaaS services, we're here to help. Our extensions are built to Magento standards, ensuring bug-free code.",
    icon: "https://www.bluehorse.in/bluehorse-html/ecommercedevelopmentassets/image/mci-icon.svg",
  },
  {
    title: "Customized Web Design",
    description:
      "Our team creates streamlined navigation paths to deliver a stunning and exceptional UI design. The design is highly responsive, offering visitors a superior and engaging experience.",
    icon: "https://www.bluehorse.in/bluehorse-html/ecommercedevelopmentassets/image/so-icon.svg",
  },
  {
    title: "Payment Gateway Integration",
    description:
      "We understand that Magento supports multiple currencies, so our team ensures your payment gateway integration is fully optimized to meet your specific requirements.",
    icon: "https://www.bluehorse.in/bluehorse-html/ecommercedevelopmentassets/image/ece-icon.svg",
  },
  {
    title: "Support And Maintenance",
    description:
      "If your customers are experiencing issues with your website or you need to customize the theme or design, we're here to assist you. As a trusted Magento  development company, our developers are dedicated to monitoring and optimizing your eStore around the clock.",
    icon: "https://www.bluehorse.in/bluehorse-html/ecommercedevelopmentassets/image/mci-icon.svg",
  },
];

export default function MagentoServices() {
  const [open, setOpen] = useState(false);

  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="Section-Title">
            Magento eCommerce Development Services
          </h2>
          <p className="mt-4 Section-Details text-[#606060]! md:text-[18px]!">
            Our Magento eCommerce development services are tailored to meet the unique needs of your business. We specialize in creating custom features that align with your brand identity and business goals, ensuring a seamless customer experience. Our team’s deep expertise in Magento allows us to build scalable, secure, and high-performing online stores that drive conversions.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <div key={i} className="h-full p-3">
              <div className="border-2 border-gray-200 rounded-xl p-6 h-full hover:border-blue-500 transition-all duration-300">

                {/* Icon */}
                <div className="w-20 h-20 flex items-center justify-center bg-gray-100 rounded-lg mb-5">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={40}
                    height={40}
                  />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 relative pb-4 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[6px] after:w-[120px] after:bg-deepblue after:rounded-full hover:after:w-[160px] after:transition-all">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-heading text-base md:text-[19px] md:leading-8">
                  {service.description}
                </p>

                {/* Button (only last item) */}
                {/* {i === services.length - 1 && (
                  <button
                    onClick={() => setOpen(true)}
                    className="mt-5 text-blue-600 font-medium"
                  >
                    View More
                  </button>
                )} */}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-xl max-w-lg w-full p-6 relative">
            
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-4 text-2xl"
            >
              ×
            </button>

            <div className="border-0">
              <div className="w-20 h-20 flex items-center justify-center bg-gray-100 rounded-lg mb-5">
                <Image
                  src="/icons/mci-icon.svg"
                  alt="Support"
                  width={40}
                  height={40}
                />
              </div>

              <h3 className="text-xl font-bold mb-4">
                Support And Maintenance
              </h3>

              <p className="text-gray-600 leading-7">
                If your customers are experiencing issues or you need ongoing
                improvements, our team ensures your Magento store stays optimized,
                secure, and high-performing 24/7.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
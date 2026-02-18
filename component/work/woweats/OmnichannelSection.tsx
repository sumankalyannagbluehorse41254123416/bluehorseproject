import React from "react";

const OmnichannelSection: React.FC = () => {
  return (
    <section className="w-full py-16 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-10">
          
          {/* Left Content */}
          <div className="w-full lg:w-7/12">
            <div >
              <h6 className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-700 leading-relaxed mt-32.5">
                BlueHorse Software developed an all-in-one omnichannel app that
                integrates all Wow Brands under a single platform, ensuring a
                seamless customer experience. The app allows users to order from
                any Wow store or brand—whether for delivery, takeaway, or
                dine-in—through a unified interface.
              </h6>
            </div>
          </div>

          {/* Right Hashtag Box */}
          <div className="w-full lg:w-5/12">
            <div className="bg-[#0C83D1] text-white pt-10 pl-10 pb-10 rounded-sm shadow-md">
              <h4 className="text-3xl font-bold mb-8">Hashtags</h4>

              <ul className="space-y-6 text-xl">
                <li>#Wow_Momo</li>
                <li>#Wow_Eats</li>
                <li>#Wow_China</li>
                <li>#Wow_Chicken</li>
                <li>#Wow_Kulfi</li>
                <li>#Swiggy</li>
                <li>#Zomato</li>
                <li>#TechnologyForFoodBrands</li>
                <li>#TechnologForQSR</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OmnichannelSection;

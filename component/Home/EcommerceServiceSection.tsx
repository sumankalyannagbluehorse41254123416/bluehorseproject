// "use client";

// import React from "react";

// const EcommerceServiceSection = () => {
//   return (
//     <section className="service-section">
//       <div className="container">
//         <div className="sub-title">
//           <h2>eCommerce Development</h2>
//           <div className="lern">
//             <p className="text">
//               Trusted by 200+ brands, we specialize in eCommerce solutions that
//               deliver real results and measurable growth. By leveraging
//               cutting-edge technologies, we offer tailored eCommerce development
//               services designed to elevate your digital presence and unlock new
//               opportunities.
//               <a
//                 href="https://www.bluehorse.in/services/ecommerce-development-services"
//                 target="_blank">
//                 View More <i className="fa-solid fa-arrow-right"></i>
//               </a>
//             </p>
//           </div>
//         </div>

//         <div className="commerce">
//           {/* Shopify */}
//           <div className="commerce-box">
//             <div className="icon">
//               <div className="img">
//                 <img src="https://www.bluehorse.in/servicess-page/assets/images-2/shopify.png" />
//               </div>
//               <div className="icon-name">
//                 <a
//                   href="https://www.bluehorse.in/services/shopify-development-services"
//                   target="_blank">
//                   <h3>Shopify</h3>
//                 </a>
//               </div>
//             </div>

//             <ul>
//               <li>
//                 <strong>Affordable &amp; High-Quality:</strong> <br />
//                 Professional stores at the best price.
//               </li>
//               <li>
//                 <strong>Effortless Growth:</strong> <br />
//                 Scales seamlessly with your business.
//               </li>
//               <li>
//                 <strong>Fast &amp; Secure Transactions:</strong> <br />
//                 Optimized checkout &amp; payment security.
//               </li>
//             </ul>
//           </div>

//           {/* Magento */}
//           <div className="commerce-box">
//             <div className="icon">
//               <div className="img">
//                 <img src="https://www.bluehorse.in/servicess-page/assets/images-2/mezento.png" />
//               </div>
//               <div className="icon-name">
//                 <a
//                   href="https://www.bluehorse.in/service/magento-development-services"
//                   target="_blank">
//                   <h3>Magento</h3>
//                 </a>
//               </div>
//             </div>

//             <ul>
//               <li>
//                 <strong>Open-Source Freedom:</strong> <br />
//                 Fully customizable eCommerce platform.
//               </li>
//               <li>
//                 <strong>Feature-Rich &amp; Scalable:</strong> <br />
//                 High performance with advanced features
//               </li>
//               <li>
//                 <strong>Full Control &amp; Cost Efficiency:</strong> <br />
//                 Scales affordably with your needs.
//               </li>
//             </ul>
//           </div>

//           {/* TezCommerce */}
//           <div className="commerce-box">
//             <div className="icon">
//               <div className="img">
//                 <img src="https://www.bluehorse.in/servicess-page/assets/images-2/tezcommerce.png" />
//               </div>
//               <div className="icon-name">
//                 <a href="https://tezcommerce.com/" target="_blank">
//                   <h3>TezCommerce</h3>
//                 </a>
//               </div>
//             </div>

//             <ul>
//               <li>
//                 <strong>Open-Source Freedom:</strong> <br />
//                 Fully customizable eCommerce platform.
//               </li>
//               <li>
//                 <strong>Feature-Rich &amp; Scalable:</strong> <br />
//                 High performance with advanced features
//               </li>
//               <li>
//                 <strong>Full Control &amp; Cost Efficiency:</strong> <br />
//                 Scales affordably with your needs.
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* Brand Logos */}
//         <div className="logo-box">
//           <a
//             href="https://www.bluehorse.in/work/the-souled-store"
//             target="_blank">
//             <img src="https://www.bluehorse.in/servicess-page/assets/images-2/tss-white.png" />
//           </a>

//           <a href="https://www.bluehorse.in/work/mufti-jeans" target="_blank">
//             <img src="https://www.bluehorse.in/servicess-page/assets/images-2/mufti-white.png" />
//           </a>

//           <a
//             href="https://www.bluehorse.in/work/manyavar-brand-for-ethnic-wear-collection"
//             target="_blank">
//             <img src="https://www.bluehorse.in/servicess-page/assets/images-2/many-white.png" />
//           </a>

//           <a href="https://www.bluehorse.in/work/eureka-fobes" target="_blank">
//             <img src="https://www.bluehorse.in/servicess-page/assets/images-2/eureka-white.png" />
//           </a>

//           <a href="https://www.bluehorse.in/work/madoverdonuts" target="_blank">
//             <img src="https://www.bluehorse.in/servicess-page/assets/images-2/mod-white.png" />
//           </a>

//           <a href="https://www.royalcanin.com" target="_blank">
//             <img src="https://www.bluehorse.in/servicess-page/assets/images-2/royal-white.png" />
//           </a>

//           <a
//             href="https://www.bluehorse.in/work/kora-ecommerce-solutions-for-ethnic-brand"
//             target="_blank">
//             <img src="https://www.bluehorse.in/servicess-page/assets/images-2/kora-white.png" />
//           </a>

//           <a href="https://celloworld.com" target="_blank">
//             <img src="https://www.bluehorse.in/servicess-page/assets/images-2/cello-white.png" />
//           </a>

//           <a href="https://www.bluehorse.in/work/theformart" target="_blank">
//             <img src="https://www.bluehorse.in/servicess-page/assets/images-2/form-whitee.png" />
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default EcommerceServiceSection;

import Image from "next/image";

export default function EcommerceServiceSection() {
  return (
    <main className="font-poppins">
      {/* Header */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <h1 className="font-shoulders text-4xl md:text-5xl uppercase tracking-wider">
            Software Development Services
          </h1>
          <p className="mt-6 text-base leading-7 max-w-4xl text-gray-700">
            We provide end-to-end Software Development Services tailored for
            startups and enterprises, combining next-gen tech, organic
            marketing, and growth with AI.
          </p>
        </div>
      </section>

      {/* eCommerce Section */}
      <section className="bg-blueDark py-12 text-white ">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold border-b-2 inline-block pb-2">
            eCommerce Development
          </h2>

          <p className="mt-6 max-w-4xl leading-7">
            Trusted by 200+ brands, we specialize in eCommerce solutions that
            deliver measurable growth.
            <a
              href="https://www.bluehorse.in/services/ecommerce-development-services"
              className="ml-2 font-bold underline inline-flex items-center gap-1">
              View More →
            </a>
          </p>

          {/* Commerce Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-14">
            {[
              {
                title: "Shopify",
                img: "/images/shopify.png",
                points: [
                  "Affordable & High-Quality",
                  "Effortless Growth",
                  "Fast & Secure Transactions",
                ],
              },
              {
                title: "Magento",
                img: "/images/mezento.png",
                points: [
                  "Open-Source Freedom",
                  "Feature-Rich & Scalable",
                  "Full Control & Cost Efficiency",
                ],
              },
              {
                title: "TezCommerce",
                img: "/images/tezcommerce.png",
                points: [
                  "Open-Source Freedom",
                  "Feature-Rich & Scalable",
                  "Full Control & Cost Efficiency",
                ],
              },
            ].map((item) => (
              <div
                key={item.title}
                className="border border-white/40 rounded-lg p-6">
                <div className="flex items-center gap-4">
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={60}
                    height={60}
                  />
                  <h3 className="text-xl font-bold border-b pb-1">
                    {item.title}
                  </h3>
                </div>

                <ul className="mt-8 space-y-6">
                  {item.points.map((p) => (
                    <li
                      key={p}
                      className="pl-4 border-l border-white/60 leading-7">
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Brand Logos */}
          <div className="flex gap-8 overflow-x-auto mt-16 pb-4">
            {[
              "tss-white.png",
              "mufti-white.png",
              "many-white.png",
              "eureka-white.png",
              "mod-white.png",
            ].map((logo) => (
              <Image
                key={logo}
                src={`/images/${logo}`}
                alt="brand"
                width={120}
                height={40}
                className="shrink-0"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-shoulders text-3xl text-center uppercase mb-10">
            Other Services
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Startups */}
            <div className="bg-gray-100 border border-blueDark rounded-2xl p-8">
              <h3 className="text-2xl font-bold border-b-4 border-blueDark inline-block">
                Services For Startups
              </h3>
              <p className="mt-6 text-gray-600 leading-7">
                We act as your <strong>virtual CTO</strong>, building scalable
                web & mobile products powered by AI.
              </p>
            </div>

            {/* Right Side */}
            <div className="flex flex-col gap-6">
              <div className="bg-gray-100 border border-blueDark rounded-2xl p-6">
                <h3 className="text-xl font-bold border-b-4 border-blueDark inline-block">
                  Growth with AI
                </h3>
                <p className="mt-4 text-gray-600">
                  All-in-one AI-powered solution for D2C brands.
                </p>
              </div>

              <div className="bg-gray-100 border border-blueDark rounded-2xl p-6">
                <h3 className="text-xl font-bold border-b-4 border-blueDark inline-block">
                  Organic Marketing
                </h3>
                <p className="mt-4 text-gray-600">
                  Sustainable organic growth without paid ads.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

// "use client";

// import Image from "next/image";
// import Link from "next/link";

// interface Product {
//   name: string;
//   title: string;
//   description: string[];
//   website: string;
//   image: string;
//   imageClass: string;
//   linkColor: string;
// }

// const products: Product[] = [
//   {
//     name: "Second Innings",
//     title: "Empowering military veterans for successful careers",
//     description: [
//       "Provides a user-friendly platform for resume building and professional networking",
//       "Ex-veterans working in corporates mentor peers for smooth career transitions",
//       "Offers job-matching support tailored to veterans' skills and values",
//       "Collaborates with companies to promote veteran hiring and workforce inclusion",
//     ],
//     website: "https://secondinnings.org",
//     image:
//       "https://www.bluehorse.in/servicess-page/assets/images/secondinnings.png",
//     imageClass: "secondinning",
//     linkColor: "rgba(254, 110, 40, 1)",
//   },
//   {
//     name: "TezCommerce",
//     title:
//       "Empowering Businesses with Speed, Flexibility, and Seamless Integration",
//     description: [
//       "Custom-built eCommerce aligned with unique workflows",
//       "Mobile-First Commerce Built for Seamless Android & iOS Experiences",
//       "Quick commerce and marketplace-ready architecture",
//       "AI-driven automation built to scale D2C efficiency and growth",
//     ],
//     website: "https://www.tezcommerce.com",
//     image: "https://www.bluehorse.in/servicess-page/assets/images/tezco.png",
//     imageClass: "tezcommerce",
//     linkColor: "#0174F5",
//   },
//   {
//     name: "D2C Stories",
//     title: "Creating a strong D2C community goes beyond just selling",
//     description: [
//       "Provides a platform for D2C brands to share their brand journey",
//       "Builds a connected community of D2C brands with their audiences",
//       "Creates engaging content to strengthen brand voice and visibility",
//       "Hosts insightful podcast sessions sharing real brand experiences and growth stories",
//     ],
//     website: "https://d2cstories.com",
//     image: "https://www.bluehorse.in/servicess-page/assets/images/d2c.png",
//     imageClass: "d2c",
//     linkColor: "rgba(97, 51, 133, 1)",
//   },
// ];

// const CuratedProducts = () => {
//   return (
//     <section className="curated_product">
//       <div className="container">
//         <h2 className="sectionTitle text-center">Our Curated Products</h2>
//         <p className="sectionDetails text-center">
//           We create digital solutions such as secure quick commerce platform,
//           military career transition platform, and D2C brand storytelling
//           platform to empower D2C brands.
//         </p>

//         <div className="product_grid">
//           {products.map((product, index) => (
//             <div className="product_box" key={index}>
//               <div className="brand_image">
//                 <Link href={product.website} target="_blank">
//                   <Image
//                     src={product.image}
//                     alt={product.name}
//                     width={220}
//                     height={120}
//                     className={product.imageClass}
//                   />
//                 </Link>
//               </div>

//               <div className="product_info">
//                 <h3 className="title">{product.title}</h3>
//                 <ul className="para">
//                   {product.description.map((item, i) => (
//                     <li key={i}>{item}</li>
//                   ))}
//                 </ul>
//               </div>

//               <div className="pvisit_btn">
//                 <Link
//                   href={product.website}
//                   target="_blank"
//                   style={{ color: product.linkColor }}>
//                   {new URL(product.website).hostname}
//                   <i className="fa fa-arrow-right"></i>
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CuratedProducts;
import React from "react";

const products = [
  {
    name: "Second Innings",
    logo: "https://www.bluehorse.in/servicess-page/assets/images/secondinnings.png",
    link: "https://secondinnings.org",
    color: "text-orange-500",
    title: "Empowering military veterans for successful careers",
    points: [
      "Provides a user-friendly platform for resume building and professional networking",
      "Ex-veterans working in corporates mentor peers for smooth career transitions",
      "Offers job-matching support tailored to veterans' skills and values",
      "Collaborates with companies to promote veteran hiring and workforce inclusion",
    ],
  },
  {
    name: "TezCommerce",
    logo: "https://www.bluehorse.in/servicess-page/assets/images/tezco.png",
    link: "https://www.tezcommerce.com",
    color: "text-blue-600",
    title:
      "Empowering Businesses with Speed, Flexibility, and Seamless Integration",
    points: [
      "Custom-built eCommerce aligned with unique workflows",
      "Mobile-First Commerce Built for Seamless Android & iOS Experiences",
      "Quick commerce and marketplace-ready architecture",
      "AI-driven automation built to scale D2C efficiency and growth",
    ],
  },
  {
    name: "D2C Stories",
    logo: "https://www.bluehorse.in/servicess-page/assets/images/d2c.png",
    link: "https://d2cstories.com",
    color: "text-purple-700",
    title: "Creating a strong D2C community goes beyond just selling",
    points: [
      "Provides a platform for D2C brands to share their brand journey",
      "Builds a connected community of D2C brands with their audiences",
      "Creates engaging content to strengthen brand voice and visibility",
      "Hosts insightful podcast sessions sharing real brand experiences and growth stories",
    ],
  },
];

const CuratedProducts: React.FC = () => {
  return (
    <section className=" py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-semibold tracking-wide text-gray-800">
            OUR CURATED PRODUCTS
          </h2>
          <p className="text-gray-600 mt-4 text-sm leading-relaxed">
            We create digital solutions such as secure quick commerce platform,
            military career transition platform, and D2C brand storytelling
            platform to empower D2C brands.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm hover:shadow-md transition p-8 flex flex-col">
              {/* Logo */}
              <div className="mb-6">
                <img
                  src={product.logo}
                  alt={product.name}
                  className="h-12 object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-800 leading-snug mb-4">
                {product.title}
              </h3>

              {/* Points */}
              <ul className="space-y-3 text-sm text-gray-600 flex-1">
                {product.points.map((point, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="mt-1 text-gray-400">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* Visit Link */}
              <div className="mt-6">
                <a
                  href={product.link}
                  target="_blank"
                  className={`font-medium text-sm ${product.color} hover:underline`}>
                  {product.link.replace("https://", "")} →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CuratedProducts;

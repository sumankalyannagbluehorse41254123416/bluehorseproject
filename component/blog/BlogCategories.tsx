"use client";

import Link from "next/link";

export default function BlogCategories() {
  const categories = [
    { name: "AEO", slug: "aeo" },
    { name: "Shopify", slug: "shopify" },
    { name: "Magento", slug: "magento" },
    { name: "Node js", slug: "node-js" },
    { name: "Flutter", slug: "flutter" },
    { name: "Next.js", slug: "next.js" },
    { name: "D2C", slug: "d2c" },
    { name: "SEO", slug: "seo" },
    { name: "eCommerce", slug: "eCommerce" },
    { name: "Digital Marketing", slug: "digital-marketing" },
    { name: "Tech Buzz", slug: "Tech-Buzz" },
    { name: "Design", slug: "design" },
    { name: "Testing", slug: "testing" },
    { name: "Server", slug: "server" },
    { name: "MSME", slug: "msme" },
    { name: "Personal Improvement", slug: "personal-improvement" },
  ];
 
  return (
    <section className=" py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap gap-4">
          {categories.map((cat, index) => (
            <Link
              key={index}
              href={`/blog_category/${cat.slug}`}
              className="px-6 py-3 bg-[#f8f7fc] text-gray-700 rounded-md
                         text-sm font-medium
                         hover:bg-[#0c83d1] hover:text-white
                         transition-all duration-300"
            >
              {cat.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

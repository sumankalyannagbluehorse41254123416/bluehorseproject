import Image from "next/image";

export default function EcommerceServiceSection() {
  return (
    <main className="font-poppins bg-sky-300 text-white">
      {/* eCommerce Section */}
      <section>
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
                img: "/assest/images/sliderlogo/shopify.png",
                points: [
                  "Affordable & High-Quality",
                  "Effortless Growth",
                  "Fast & Secure Transactions",
                ],
              },
              {
                title: "Magento",
                img: "/assest/images/sliderlogo/mezento.png",
                points: [
                  "Open-Source Freedom",
                  "Feature-Rich & Scalable",
                  "Full Control & Cost Efficiency",
                ],
              },
              {
                title: "TezCommerce",
                img: "/assest/images/sliderlogo/tezcommerce.png",
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
                    priority
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
          <div className="logo-box flex flex-wrap gap-8 mt-16">
            {[
              {
                href: "https://www.bluehorse.in/work/the-souled-store",
                img: "tss-white.png",
                alt: "The Souled Store",
              },
              {
                href: "https://www.bluehorse.in/work/mufti-jeans",
                img: "mufti-white.png",
                alt: "Mufti",
              },
              {
                href: "https://www.bluehorse.in/work/manyavar-brand-for-ethnic-wear-collection",
                img: "many-white.png",
                alt: "Manyavar",
              },
              {
                href: "https://www.bluehorse.in/work/eureka-fobes",
                img: "eureka-white.png",
                alt: "Eureka Forbes",
              },
              {
                href: "https://www.bluehorse.in/work/madoverdonuts",
                img: "mod-white.png",
                alt: "Mad Over Donuts",
              },
              {
                href: "https://www.royalcanin.com",
                img: "royal-white.png",
                alt: "Royal Canin",
              },
              {
                href: "https://www.bluehorse.in/work/kora-ecommerce-solutions-for-ethnic-brand",
                img: "kora-white.png",
                alt: "Kora",
              },
              {
                href: "https://celloworld.com",
                img: "cello-white.png",
                alt: "Cello",
              },
              {
                href: "https://www.bluehorse.in/work/theformart",
                img: "form-whitee.png",
                alt: "The Formart",
              },
            ].map((brand) => (
              <a
                key={brand.alt}
                href={brand.href}
                target="_blank"
                rel="noopener noreferrer">
                <Image
                  src={`https://www.bluehorse.in/servicess-page/assets/images-2/${brand.img}`}
                  alt={brand.alt}
                  width={120}
                  height={40}
                  className="object-contain"
                />
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

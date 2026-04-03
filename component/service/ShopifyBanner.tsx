import Link from "next/link";

export default function ShopifyBanner() {
  return (
    <section className="shopify-banner relative sm:pb-7.5 lg:py-17.5">
      <div className="relative max-w-7xl mx-auto px-6 text-white">
        
        {/* Breadcrumb */}
        <div className="mb-2.5 text-sm text-[#515253]">
          <ul className="flex flex-wrap items-center gap-2 pt-8 md:pt-9 lg:pt-12">
            <li>
              <Link href="/" className="hover:text-blue-300">
                HOME
              </Link>
            </li>
            <li>{">"}</li>
            <li>
              <Link href="/services" className="hover:text-blue-300">
                SERVICES
              </Link>
            </li>
            <li>{">"}</li>
            <li>
              <Link href="/services/ecommerce-development-services" className="hover:text-blue-300">
                ECOMMERCE DEVELOPMENT SERVICES
              </Link>
            </li>
            <li>{">"}</li>
            <li className="font-medium">
              SHOPIFY DEVELOPMENT SERVICES
            </li>
          </ul>
        </div>

        {/* Title */}
        <header className="">
          <h1 className=" text-40 lg:text-[50px] text-[#515253] font-normal leading-tight mb-2.5/ big-noodle">
            Expert Shopify Development Services to Power Your eCommerce Growth
          </h1>

          <p className="text-[18px] md:text-xl text-[#606060] leading-relaxed mb-8 sm:pt-4.5">
            Shopify powers over 4.4 million websites worldwide and accounts for 32% of all online stores globally. BlueHorse Software’s end-to-end Shopify development services from custom store setup to app development will bring your vision to life and help you shine in the crowd.
          </p>

          <button className="bg-[#0C83D1] text-white px-8 py-3 rounded-lg text-lg font-medium shadow-lg">
            Request Free Consultation
          </button>
        </header>
      </div>
    </section>
  );
}
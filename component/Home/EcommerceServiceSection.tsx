import Image from "next/image";

export default function EcommerceServiceSection() {
  const services = [
    {
      title: "Shopify",
      img: "/assest/images/sliderlogo/shopify.png",
      points: [
        {
          head: "Affordable & High-Quality:",
          text: "Professional stores at the best price.",
        },
        {
          head: "Effortless Growth:",
          text: "Scales seamlessly with your business.",
        },
        {
          head: "Fast & Secure Transactions:",
          text: "Optimized checkout & payment security.",
        },
      ],
    },
    {
      title: "Magento",
      img: "/assest/images/sliderlogo/mezento.png",
      points: [
        {
          head: "Open-Source Freedom:",
          text: "Fully customizable eCommerce platform.",
        },
        {
          head: "Feature-Rich & Scalable:",
          text: "High performance with advanced features",
        },
        {
          head: "Full Control & Cost Efficiency:",
          text: "Scales affordably with your needs.",
        },
      ],
    },
    {
      title: "TezCommerce",
      img: "/assest/images/sliderlogo/tezcommerce.png",
      points: [
        {
          head: "Open-Source Freedom:",
          text: "Fully customizable eCommerce platform.",
        },
        {
          head: "Feature-Rich & Scalable:",
          text: "High performance with advanced features",
        },
        {
          head: "Full Control & Cost Efficiency:",
          text: "Scales affordably with your needs.",
        },
      ],
    },
  ];

  return (
    <section className="bg-[#1e93b3] text-white py-16 lg:py-20">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold border-b-2 border-white inline-block pb-3">
          eCommerce Development
        </h2>

        <p className="mt-6 max-w-3xl text-sm md:text-base leading-7 text-white/90">
          Trusted by 200+ brands, we specialize in eCommerce solutions that
          deliver real results and measurable growth.
          <a
            href="#"
            className="ml-3 font-semibold inline-flex items-center text-base group"
          >
            <span className="underline">View More</span>

            <span className="transition-transform duration-300 group-hover:rotate-45 text-[15px]">
              ↗
            </span>
          </a>
        </p>

        {/* SERVICES GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 mt-12 lg:mt-16 gap-10">

          {services.map((item, i) => (
            <div
              key={item.title}
              className={`px-4 lg:px-8 ${
                i !== services.length - 1
                  ? "lg:border-r border-white/40"
                  : ""
              }`}
            >
              {/* Header */}
              <div className="flex items-center gap-4 mb-10">

                <div className="h-[50px]">
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={200}
                    height={60}
                    className="h-full w-auto object-contain"
                  />
                </div>

                <h3 className="text-2xl lg:text-3xl font-semibold">
                  {item.title}
                </h3>

              </div>

              {/* Points */}
              <div className="space-y-8">

                {item.points.map((p) => (
                  <div
                    key={p.head}
                    className="pl-5 border-l border-white/40"
                  >
                    <h4 className="font-semibold text-base mb-2">
                      {p.head}
                    </h4>

                    <p className="text-white/90 text-sm leading-6">
                      {p.text}
                    </p>
                  </div>
                ))}

              </div>
            </div>
          ))}

        </div>

        {/* LOGO ROW */}
        <div className="mt-16 overflow-x-auto scrollbar-hide">

          <div className="flex items-center gap-10 min-w-max">

            {[
              "tss-white.png",
              "mufti-white.png",
              "many-white.png",
              "eureka-white.png",
              "mod-white.png",
              "royal-white.png",
              "kora-white.png",
              "cello-white.png",
              "form-whitee.png",
            ].map((logo) => (
              <Image
                key={logo}
                src={`https://www.bluehorse.in/servicess-page/assets/images-2/${logo}`}
                alt="brand"
                width={120}
                height={50}
                className="h-[38px] w-auto object-contain opacity-90"
              />
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}
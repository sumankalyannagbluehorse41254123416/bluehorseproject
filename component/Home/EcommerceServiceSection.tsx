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
    <section className="bg-[#1e93b3] text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl font-semibold border-b-2 border-white inline-block pb-3">
          eCommerce Development
        </h2>

        <p className="mt-6 max-w-5xl text-lg leading-8 text-white/90">
          Trusted by 200+ brands, we specialize in eCommerce solutions that
          deliver real results and measurable growth.
          <a
            href="#"
            className="ml-3 underline font-semibold inline-flex items-center gap-2">
            View More ↗
          </a>
        </p>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 mt-16">
          {services.map((item, i) => (
            <div
              key={item.title}
              className={`px-8 ${
                i !== services.length - 1
                  ? "lg:border-r border-white/40"
                  : ""
              }`}>
              {/* Header */}
              <div className="flex items-center gap-4 mb-12">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={60}
                  height={60}
                />
                <h3 className="text-3xl font-semibold">{item.title}</h3>
              </div>

              {/* Points */}
              <div className="space-y-10">
                {item.points.map((p) => (
                  <div
                    key={p.head}
                    className="pl-6 border-l border-white/40">
                    <h4 className="font-semibold text-lg mb-2">
                      {p.head}
                    </h4>
                    <p className="text-white/90">{p.text}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Logo Row */}
        <div className="flex flex-no-wrap items-center justify-between gap-5 mt-20 opacity-90">
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
              width={130}
              height={90}
              className="object-contain"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

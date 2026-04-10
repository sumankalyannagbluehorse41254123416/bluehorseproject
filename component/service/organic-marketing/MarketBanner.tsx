import Link from "next/link";

export default function MarketBanner() {
    return (
        <section className="bg-gradient-to-b from-[#E6F0FA] to-white py-20">
            <div className="max-w-7xl mx-auto px-4">

                {/* Breadcrumb */}
                <div className="mb-6 text-sm text-gray-600">
                    <ul className="flex flex-wrap items-center gap-2 pt-20">
                        <li>
                            <a href="/" className="hover:text-black">HOME</a>
                        </li>
                        <li>›</li>
                        <li>
                            <a href="/services" className="hover:text-black">SERVICES</a>
                        </li>
                        <li>›</li>
                        <li className="text-gray-800 font-medium">
                            ORGANIC MARKETING
                        </li>
                    </ul>
                </div>

                {/* Grid */}
                <div className="grid lg:grid-cols-2 gap-20">

                    {/* LEFT CONTENT */}
                    <div>
                        <h1 className="text-[50px] uppercase big-noodle text-[#515253] leading-none">
                            Are You Struggling with Organic Marketing Despite Heavy Ad Spend?
                        </h1>

                        <p className="text-gray-600 text-[20px] mb-8 leading-relaxed pt-5">
                            In today’s digital-first world, ads can give quick clicks—but true growth comes from organic marketing. A future-proof marketing strategy built on SEO, AEO, and GEO can help your brand achieve consistent organic growth, higher trust, and long-term visibility. With the right approach, your business can turn search presence into real, scalable organic sales without relying on paid campaigns.
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-wrap gap-4 mb-8">
                            <a
                                href="#contact-us"
                                className="bg-[#0C83D1] text-white px-6 py-3 rounded-lg font-medium shadow-md hover:bg-[#0a6fb3] transition"
                            >
                                Let's Build Your Product →
                            </a>

                            <a
                                href="#services"
                                className="border border-gray-300 px-6 py-3 rounded-lg font-medium text-gray-700 hover:bg-gray-100 transition"
                            >
                                Our Services →
                            </a>
                        </div>

                        {/* Stats */}
                        <div className="flex gap-4 text-center border-t border-gray-200 pt-10">
                            <div>
                                <p className="text-40 font-bold text-[#515253]">6.5%</p>
                                <p className="text-gray-500 text-sm">traffic growth in first
                                    8 weeks</p>
                            </div>

                            <div>
                                <p className="text-40 font-bold text-[#515253]">60%</p>
                                <p className="text-gray-500 text-sm">more keywords ranking in
                                    3 months</p>
                            </div>

                            <div>
                                <p className="text-40 font-bold  text-[#515253]">95%</p>
                                <p className="text-gray-500 text-sm">stronger visibility in search results</p>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div>
                        <img
                            src="/assest/images/sliderlogo/orgnaic_banner.jpg"
                            alt="Hero"
                            className="w-full h-[420px] object-cover rounded-xl shadow-lg"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
}
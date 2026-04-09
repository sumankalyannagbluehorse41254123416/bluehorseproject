import Link from "next/link";

export default function SolutionBanner() {
    return (
        <section className="shopify-banner relative py-20">
            <div className="relative container text-white pt-7 md:pt-10 lg:pt-20">

                {/* Breadcrumb */}
                <div className="mb-6 text-sm text-[#515253]">
                    <ul className="flex flex-wrap items-center gap-2">
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
                            MAGENTO DEVELOPMENT SERVICES
                        </li>
                    </ul>
                </div>

                {/* Title Content */}
                <header className="">
                    <h1 className="text-[#515253]! mb-4 hero-title">
                        Magento development services
                    </h1>

                    <p className="text-[#606060]! mb-8! hero-description">
                        Magento offers new opportunities for online stores, offering improved performance, advanced features, and greater scalability. Leverage Magento 2 development services to harness the full potential of this platform and provide your customers with an enhanced shopping experience.
                    </p>

                    <button className="cta-blue">
                        Request Free Consultation
                    </button>
                </header>

            </div>
        </section>
    );
}
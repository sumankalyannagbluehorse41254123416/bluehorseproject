import React from "react";

const services = [
    {
        title: "Cross-Platform App Development",
        description:
            "Deliver an app experience that feels native on any platform. Our cross-platform mobile app development ensures consistent performance and UI while reducing your costs.",
        icon: (
            <svg
                className="w-12 h-12 text-blue-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
            >
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
            </svg>
        ),
    },
    {
        title: "UI/UX Design for Mobile Apps",
        description:
            "Good design drives user retention. Our team creates sleek, intuitive interfaces that reflect your brand and keep users engaged.",
        icon: (
            <svg
                className="w-12 h-12 text-blue-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
            >
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                <line x1="12" y1="18" x2="12" y2="18"></line>
            </svg>
        ),
    },
    {
        title: "App Maintenance & Support",
        description:
            "We don’t stop at launch. We offer long-term support, performance optimization, and upgrades to keep your app competitive.",
        icon: (
            <svg
                className="w-12 h-12 text-blue-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
            >
                <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path>
                <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path>
                <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"></path>
            </svg>
        ),
    },
];

export default function Services() {
    return (
        <section id="services" className="bg-white py-16">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="max-w-xl mx-auto text-center">
                    <h2 className="Section-Title">
                        Our Mobile App Development Services
                    </h2>
                    <p className="Section-Details">
                        We offer full-cycle mobile app development services — from idea to
                        post-launch support — all using Flutter, one of the fastest-growing
                        cross-platform frameworks.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8 mt-16">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="border-2 border-gray-200 rounded-lg p-6 hover:border-blue-600 transition-all duration-300"
                        >
                            {/* Icon */}
                            <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-xl mb-6">
                                {service.icon}
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-semibold text-heading mb-2">
                                {service.title}
                            </h3>
                            <p className="text-grey">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
"use client";

import Image from "next/image";
import Link from "next/link";

export default function BlogList() {
    const blogs = [
        {
            title:
                "Why Image Optimization Is Critical for Every Shopify Store’s Performance and Growth",
            slug: "why-image-optimization",
            category: "Shopify",
            date: "12 Feb 2026",
            description:
                "In today’s highly competitive eCommerce landscape, speed is no longer a luxury—it’s a necessity.",
            image: "/assest/images/sliderlogo/blogone.jpg",
            author: "Shalari Ghorai",
            authorImg: "/assest/images/sliderlogo/Shalari.png",
        },
        {
            title:
                "How AI Decides Which Brand to Show First: A Technical Guide for Modern Websites",
            slug: "how-ai-decides",
            category: "Tech Buzz",
            date: "06 Feb 2026",
            description:
                "Search is no longer just about ranking on Google. Today, AI-powered search engines decide which brand gets shown first.",
            image: "/assest/images/sliderlogo/blogtwo.jpg",
            author: "Shabana Fatima",
            authorImg: "/assest/images/sliderlogo/shabana.jpeg",
        },
        {
            title: "Why Hyperlocal Discovery Is the Future of Online Shopping",
            slug: "hyperlocal-discovery",
            category: "SEO",
            date: "05 Feb 2026",
            description:
                "Online shopping is no longer just about being visible online. Customers today want solutions that are near them.",
            image: "/assest/images/sliderlogo/blogthree.jpg",
            author: "Shabana Fatima",
            authorImg: "/assest/images/sliderlogo/shabana.jpeg",
        },

    ];

    return (
        <section className="py-16 ">
            <div className="max-w-7xl mx-auto px-4">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogs.map((blog, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl"
                        >
                            {/* Blog Image */}
                            <Link href={`/blog/${blog.slug}`}>
                                <div className="relative h-56 w-full">
                                    <Image
                                        src={blog.image}
                                        alt={blog.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </Link>

                            <div className="p-6">

                                {/* Category + Date */}
                                <div className="flex items-center justify-between mb-4">
                                    <span className="px-4 py-1 bg-gray-200 rounded-md text-sm font-medium">
                                        {blog.category}
                                    </span>
                                    <span className="text-sm text-gray-500">
                                        {blog.date}
                                    </span>
                                </div>

                                {/* Title */}
                                <Link href={`/blog/${blog.slug}`}>
                                    <h3 className="text-lg font-semibold text-gray-800 hover:text-[#0c83d1] transition">
                                        {blog.title}
                                    </h3>
                                </Link>

                                {/* Description */}
                                <p className="text-gray-600 text-sm mt-3 mb-6">
                                    {blog.description}
                                </p>

                                {/* Author */}
                                <div className="flex items-center gap-3">
                                    <Image
                                        src={blog.authorImg}
                                        alt={blog.author}
                                        width={40}
                                        height={40}
                                        className="rounded-full object-cover"
                                    />
                                    <span className="text-gray-700 text-sm font-medium">
                                        {blog.author}
                                    </span>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>

            </div>
            <div className="flex justify-center mt-12">
                <button className="px-6 py-3 bg-[#0c83d1] text-white rounded-md">
                    View More Blogs
                </button>
            </div>

        </section>
    );
}

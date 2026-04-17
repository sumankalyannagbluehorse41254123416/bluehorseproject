"use client";

import { FaBullseye, FaCode, FaDatabase } from "react-icons/fa";
import { MdRocketLaunch } from "react-icons/md";

export default function StartupChallenges() {
    return (
        <section className="bg-[#f3f6fb] py-20">
            <div className="container px-4 text-center">

                {/* Heading */}
                <h2 className="text-40 uppercase font-semibold text-[#515253] mb-6 tracking-wide big-noodle">
                    We Help You Overcome Common Startup Tech Challenges
                </h2>

                {/* Description */}
                <p className="text-gray-500 max-w-3xl mx-auto mb-14 leading-relaxed">
                    Every startup faces the same core problem: how to turn a brilliant idea into a working product—fast, and without breaking the bank. Our software development for startups process is designed to remove stress from early-stage product building and help you launch faster with confidence.
                </p>

                {/* Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-7.5">

                    {/* Card 1 */}
                    <div className="bg-linear-to-r from-[#eff6ff] to-[#eef2ff] border border-gray-200 rounded-2xl p-4 text-left  transition">
                        <div className="flex items-center justify-center w-14 h-14 bg-[#dbeafe] rounded-xl mb-5">
                            <svg
                                className="w-8 h-8 text-[#0C83D1]"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 10c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm0-14C6.48 4 2 8.48 2 14s4.48 10 10 10 10-4.48 10-10S17.52 4 12 4z"
                                />
                            </svg>
                        </div>

                        <h3 className="text-xl font-semibold text-[#515253] mb-3">
                            Build MVPs That Scale
                        </h3>

                        <p className="text-gray-600 text-sm leading-relaxed pb-5">
                            Get a functional MVP that focuses on core features, built to test and grow with your startup. Our MVP development services prioritize speed and scalability.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-linear-to-r from-[#eff6ff] to-[#eef2ff] border border-gray-200 rounded-2xl p-4 text-left  transition">
                        <div className="flex items-center justify-center w-14 h-14 bg-[#dbeafe] rounded-xl mb-5">
                            <svg
                                className="w-8 h-8 text-[#0C83D1]"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M19.428 15.428a2 2 0 00-1.414-.586l-4.5-4.5a2 2 0 00-2.828 0L3.757 17.257a2 2 0 000 2.828l4.5 4.5a2 2 0 002.828 0l7.071-7.071a2 2 0 00.586-1.414zM12 4v4m0 4v4m-4-4h8"
                                />
                            </svg>
                        </div>

                        <h3 className="text-xl font-semibold text-[#515253] mb-3">
                            Launch Fast, Learn Faster
                        </h3>

                        <p className="text-gray-600 text-sm leading-relaxed">
                            We follow a rapid release model so you can test, learn, and adapt quickly—ideal for startups aiming for product-market fit.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-linear-to-r from-[#eff6ff] to-[#eef2ff] border border-gray-200 rounded-2xl p-4 text-left  transition">
                        <div className="flex items-center justify-center w-14 h-14 bg-[#dbeafe] rounded-xl mb-5">
                            <svg
                                className="w-8 h-8 text-[#0C83D1]"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                                />
                            </svg>
                        </div>

                        <h3 className="text-xl font-semibold text-[#515253] mb-3">
                            Cross-Platform Development
                        </h3>

                        <p className="text-gray-600 text-sm leading-relaxed">
                            Using mobile & web app development for startups, we ensure your product works smoothly across platforms and devices—without extra cost.
                        </p>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-linear-to-r from-[#eff6ff] to-[#eef2ff] border border-gray-200 rounded-2xl p-4 text-left  transition">
                        <div className="flex items-center justify-center w-14 h-14 bg-[#dbeafe] rounded-xl mb-5">
                            <svg
                                className="w-8 h-8 text-[#0C83D1]"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                                />
                            </svg>
                        </div>

                        <h3 className="text-xl font-semibold text-[#515253] mb-3">
                            System Integration
                        </h3>

                        <p className="text-gray-600 text-sm leading-relaxed">
                            Whether it's payment gateways, CRMs, or third-party tools—we make sure your app plays nicely with everything you already use.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}
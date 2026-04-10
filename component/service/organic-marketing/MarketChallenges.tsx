"use client";

import { FaBullseye, FaCode, FaDatabase } from "react-icons/fa";
import { MdRocketLaunch } from "react-icons/md";

export default function MarketChallenges() {
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
                            <svg className="w-8 h-8 text-[#079bcb]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM13 9l-4 4"></path>
                            </svg>
                        </div>

                        <h3 className="text-xl font-semibold text-[#515253] mb-3">
                            Low Search Visibility
                        </h3>

                        <p className="text-gray-600 text-sm leading-relaxed pb-5">
                            Many brands get buried in search results, struggling against competition and changing algorithms that limit visibility and make it harder to convert traffic into organic sales.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-linear-to-r from-[#eff6ff] to-[#eef2ff] border border-gray-200 rounded-2xl p-4 text-left  transition">
                        <div className="flex items-center justify-center w-14 h-14 bg-[#dbeafe] rounded-xl mb-5">
                            <svg className="w-8 h-8 text-[#079bcb]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8V4m0 16v-4"></path>
                            </svg>
                        </div>

                        <h3 className="text-xl font-semibold text-[#515253] mb-3">
                            Ad Dependence
                        </h3>

                        <p className="text-gray-600 text-sm leading-relaxed">
                            Relying only on ads drains budgets and delivers short-term results, making growth unsustainable and limiting lasting visibility. Growth stops when ads stop.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-linear-to-r from-[#eff6ff] to-[#eef2ff] border border-gray-200 rounded-2xl p-4 text-left  transition">
                        <div className="flex items-center justify-center w-14 h-14 bg-[#dbeafe] rounded-xl mb-5">
                            <svg className="w-8 h-8 text-[#079bcb]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 1v10m0 0a4 4 0 004-4V5a4 4 0 10-8 0v2a4 4 0 004 4zM5 10v2a7 7 0 0014 0v-2"></path>
                            </svg>
                        </div>

                        <h3 className="text-xl font-semibold text-[#515253] mb-3">
                            Weak AI & Voice Presence
                        </h3>

                        <p className="text-gray-600 text-sm leading-relaxed">
                            Brands risk losing visibility and organic sales opportunities on emerging discovery platforms when not optimized—missed on voice & AI searches.

                        </p>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-linear-to-r from-[#eff6ff] to-[#eef2ff] border border-gray-200 rounded-2xl p-4 text-left  transition">
                        <div className="flex items-center justify-center w-14 h-14 bg-[#dbeafe] rounded-xl mb-5">
                            <svg className="w-8 h-8 text-[#079bcb]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5 9 6.343 9 8s1.343 3 3 3z"></path>
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 22s8-7.582 8-12a8 8 0 10-16 0c0 4.418 8 12 8 12z"></path>
                            </svg>
                        </div>

                        <h3 className="text-xl font-semibold text-[#515253] mb-3">
                            Weak Local Presence
                        </h3>

                        <p className="text-gray-600 text-sm leading-relaxed">
                            Local competition makes it tough for brands to stand out, limiting visibility in key regions and reducing the chance of turning nearby buyers into steady organic sales.                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}
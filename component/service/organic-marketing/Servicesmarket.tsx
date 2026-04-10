"use client";

import { Search, Monitor, Sparkles } from "lucide-react";

export default function Servicesmarket() {
  return (
    <section className="py-20 bg-gradient-to-r from-[#f8fafc] to-[#eef2ff]">
      <div className="container">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-[640px] md:text-40 big-noodle font-normal tracking-wide text-[#515253] uppercase">
            Future-Ready Organic Marketing Solutions
          </h2>
          <p className="mt-5 text-gray-500 leading-relaxed text-[15px]">
            We deliver scalable and sustainable strategies for brands struggling with growth beyond ads. Whether you’re fighting low visibility or chasing consistency, we build what drives organic sales—nothing wasted, everything purposeful.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition">
            <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-[#dbeafe] mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        <path d="M11 7a4 4 0 0 1 0 8 4 4 0 0 1 0-8z"></path>
                    </svg>
            </div>

            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              SEO (Search Engine Optimization)
            </h3>

            <p className="text-gray-500 text-[15px] leading-relaxed">
              We help you dominate traditional search engines by optimizing your on-page and off-page SEO, targeting relevant keywords, and building authority that translates into higher organic sales.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition">
            <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-[#dbeafe] mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <rect x="2" y="4" width="20" height="14" rx="2" ry="2"></rect>
                        <path d="M7 20h10M12 14v6"></path>
                        <circle cx="8" cy="10" r="1"></circle>
                        <circle cx="12" cy="10" r="1"></circle>
                        <circle cx="16" cy="10" r="1"></circle>
                    </svg>
            </div>

            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              AEO (Answer Engine Optimization)
            </h3>

            <p className="text-gray-500 text-[15px] leading-relaxed">
              As AI platforms like ChatGPT, Perplexity, Gemini, and voice assistants redefine how customers search, we optimize your brand for AI-driven search results. This ensures you’re discoverable in the era of intelligent search.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition">
            <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-[#dbeafe] mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364-6.364-1.414 1.414M6.05 17.95l-1.414 1.414m0-13.414L6.05 6.05m12.728 12.728-1.414-1.414"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                    </svg>
            </div>

            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              GEO (Generative Engine Optimization)
            </h3>

            <p className="text-gray-500 text-[15px] leading-relaxed">
              We optimize your brand for generative AI platforms, ensuring visibility in AI-generated responses, driving discovery and organic sales through tailored content crafted for evolving generative search experiences.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
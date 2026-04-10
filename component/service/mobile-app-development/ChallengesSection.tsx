"use client";

import React from "react";

const challenges = [
  {
    title: "Build User-Centric Mobile Apps",
    description:
      "We help you define and prioritize the right features to deliver an app that solves real user problems — not just checks off a tech wishlist.",
    icon: (
      <svg
        className="w-8 h-8 text-blue-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 10c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm0-14C6.48 4 2 8.48 2 14s4.48 10 10 10 10-4.48 10-10S17.52 4 12 4z"
        />
      </svg>
    ),
  },
  {
    title: "Launch Your App More Quickly",
    description:
      "Our agile mobile app development process is built to get you from idea to app store quickly, so you can start getting feedback and traction early.",
    icon: (
      <svg
        className="w-8 h-8 text-blue-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.428 15.428a2 2 0 00-1.414-.586l-4.5-4.5a2 2 0 00-2.828 0L3.757 17.257a2 2 0 000 2.828l4.5 4.5a2 2 0 002.828 0l7.071-7.071a2 2 0 00.586-1.414zM12 4v4m0 4v4m-4-4h8"
        />
      </svg>
    ),
  },
  {
    title: "Cross-Platform App Solutions",
    description:
      "Using Flutter, we deliver mobile app solutions that work smoothly on Android and iOS — all from a single codebase, without doubling your cost.",
    icon: (
      <svg
        className="w-8 h-8 text-blue-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    ),
  },
  {
    title: "Seamless Integration with Your Systems",
    description:
      "Need Stripe? Firebase? WhatsApp Business API? We integrate the tools you already use into your mobile app — so your tech stack works in harmony.",
    icon: (
      <svg
        className="w-8 h-8 text-blue-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
        />
      </svg>
    ),
  },
];

export default function ChallengesSection() {
  return (
    <section id="challenges" className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="max-w-210 mx-auto text-center">
          <h2 className="Section-Title">
            We Help You Overcome Mobile App Development Roadblocks
          </h2>
          <p className="mt-4 Section-Details">
            From missed deadlines to bloated budgets, mobile app projects often go off track. At BlueHorse, we solve these common pain points by combining a Flutter-first, cross-platform approach with agile, startup-friendly execution. The result? Faster launch, fewer headaches, and apps that truly work.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {challenges.map((item, index) => (
            <div
              key={index}
              className="p-4 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50"
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-blue-100 mb-6">
                {item.icon}
              </div>

              <h3 className="text-lg lg:text-[20px] font-bold leading-6 text-heading mb-2" style={{fontFamily:'Open Sans, sans-serif'}}>
                {item.title}
              </h3>

              <p className="text-base text-heading leading-6">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
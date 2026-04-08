import { CircleCheckBig, Lightbulb, Clock, Users, Scale } from "lucide-react";
import React from "react";

const benefits = [
  "Fast, Focused App Launches",
  "One Codebase",
  "Designed for Early Traction",
  "Tech That Scales Easily",
  "Built-In Analytics & Feedback",
  "Ongoing Support After Launch",
];

const reasons = [
  {
    title: "Brand-First App Strategy",
    desc: "We craft mobile apps that align with your brand’s identity and delight users at every step.",
    icon: <Lightbulb className="w-7" />,
  },
  {
    title: "One App for All Platforms",
    desc: "With Flutter, we deliver Android and iOS apps using a single codebase—faster and more cost-effective.",
    icon: <Clock className="w-7" />,
  },
  {
    title: "Designed to Drive Engagement",
    desc: "We focus on smooth navigation, fast loading, and intuitive UI to increase user retention and activity.",
    icon: <Scale className="w-7" />,
  },
  {
    title: "Fast Delivery and Ongoing Support",
    desc: "From build to launch and beyond, we ensure quick turnaround and reliable post-launch maintenance.",
    icon: <Users className="w-7" />,
  },
];

export default function WhyChoose() {
  return (
    <section className="bg-gray-50 py-16" id="why-us">
      <div className="container mx-auto px-4">
        <div className="grid gap-16 lg:grid-cols-[5fr_7fr]">
          
          {/* LEFT COLUMN */}
          <div>
            <h2 className="Section-Title text-left! mb-6">
              Why Startup Founders Trust BlueHorse for Mobile App Development
            </h2>

            <p className="Section-Details text-left! mb-8">
              We’ve helped startups and growing brands to launch scalable apps.
              Our focus is always on delivering real value, fast — not bloated
              features. We think like partners, not vendors.
            </p>

            {/* BENEFITS */}
            <div className="grid gap-4 sm:grid-cols-2">
              {benefits.map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CircleCheckBig className="w-5 text-blue" />
                  <span className="text-grey text-sm md:text-base">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="grid gap-8 sm:grid-cols-2">
            {reasons.map((item, i) => (
              <div
                key={i}
                className="relative group rounded-xl p-2 transition"
              >
                {/* Gradient hover */}
                <div className="absolute inset-[-16px] rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition"></div>

                <div className="relative">
                  {/* Icon */}
                  <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-blue/10 text-blue mb-4 text-2xl">
                    {item.icon}
                  </div>

                  <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 text-sm">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
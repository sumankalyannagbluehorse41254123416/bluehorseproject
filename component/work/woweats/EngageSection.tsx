"use client";

export default function EngageSection() {
  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          
          {/* Left Empty Column (3/12) */}
          <div className="md:w-3/12">
            <div className="w-65 h-8 bg-[#0c83d1] absolute left-0 mt-15"></div>
          </div>

          {/* Right Content (9/12) */}
          <div className="md:w-9/12">
            <h3 className="text-4xl font-semibold text-gray-800 mb-6 leading-snug">
              Wow Club: Exclusive Benefits for&nbsp;Wow&nbsp;Eats&nbsp;Users
            </h3>

            <p className="text-lg text-gray-600 leading-relaxed">
              Wow Club is a unique, paid membership program designed for Wow
              Eats, offering exclusive benefits to its members. The app’s
              loyalty integration allows members to receive cashback on
              orders, special discounts, and reduced delivery and packaging
              charges. It also incorporates gamification elements to boost
              user engagement. This program strengthens customer engagement
              and loyalty while fostering deeper relationships with customers.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

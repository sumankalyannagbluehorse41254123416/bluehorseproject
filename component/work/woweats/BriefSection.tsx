"use client";

export default function BriefSection() {
  return (
    <section className="w-full py-24">
      <div className=" container">
        <div className="flex flex-col md:flex-row gap-12">
          
          {/* Left Side */}
          <div className="md:w-7/12">
            <h2 className="text-5xl font-semibold text-gray-700 mb-8">
              The Brief
            </h2>

            <p className="text-lg leading-relaxed text-gray-600">
              Wow! Momo Foods wanted to develop an engaging and seamless
              online ordering platform, Wow Eats, to cater to dine-in,
              delivery, and takeaway services across all its brands. The goal
              was to simplify order management and provide users with a
              streamlined experience. The platform also included gamification
              elements to enhance user engagement, making the app more
              enjoyable. Additionally, a loyalty program to encourage repeat
              customers and improve brand retention.
            </p>
          </div>

          {/* Right Side */}
          <div className="md:w-5/12">
            <div className="bg-[#e9e9e9] p-10">
              <h4 className="text-4xl font-semibold text-blue-600 mb-8">
                Requirements
              </h4>

              <ul className="space-y-5 text-lg text-gray-700 list-disc pl-6">
                <li>Swiggy/Zomato-like functionality for Wow Brands</li>
                <li>One app for all Wow Brands</li>
                <li>Available on all platforms: Android, iOS, and web</li>
                <li>User-friendly design</li>
                <li>PoS integration</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

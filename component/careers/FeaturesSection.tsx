import Image from "next/image";

export default function FeaturesSection() {
  return (
    <section className="w-full bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-start">
        
        {/* LEFT TEXT */}
        <div className="pt-10">
          <h2 className="text-2xl font-semibold text-gray-700 uppercase tracking-wide">
            Fun Life At
          </h2>

          <h3 className="text-5xl font-bold text-blue-600 mt-2">
            BlueHorse
          </h3>

          <p className="mt-6 text-gray-600 leading-relaxed max-w-md">
            An intensity to challenge limits, acting with innovative thoughts and
            working with unyielding integrity, experience the Spirit of BlueHorse
            and take your career to new heights.
          </p>
        </div>

        {/* RIGHT GRID */}
        <div className="grid grid-cols-2 gap-6">
          
          {/* IMAGE */}
          <div className="rounded-xl overflow-hidden">
            <Image
              src="/assest/images/sliderlogo/funLife.webp"
              alt=""
              width={400}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>

          {/* TEXT CARD */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <Image
              src="/assest/images/sliderlogo/User.png"
              alt=""
              width={40}
              height={40}
            />
            <h3 className="font-bold mt-3 text-gray-800">
              Diversity & Transparency
            </h3>
            <p className="text-sm text-gray-600 mt-2 leading-relaxed">
              We empower people by respecting & appreciating them. We believe
              in a diverse work environment that promotes equality.
            </p>
          </div>

          {/* TEXT CARD */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <Image
              src="/assest/images/sliderlogo/User.png"
              alt=""
              width={40}
              height={40}
            />
            <h3 className="font-bold mt-3 text-gray-800">
              Career Growth
            </h3>
            <p className="text-sm text-gray-600 mt-2 leading-relaxed">
              We offer training while working on the latest technologies to grow
              skills and competencies helping you lead the future.
            </p>
          </div>

          {/* IMAGE */}
          <div className="rounded-xl overflow-hidden">
            <Image
              src="/assest/images/sliderlogo/funLife_image.jpg"
              alt=""
              width={400}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>

          {/* IMAGE */}
          <div className="rounded-xl overflow-hidden">
            <Image
              src="/assest/images/sliderlogo/funLife_image_3.webp"
              alt=""
              width={600}
              height={300}
              className="w-full h-56 object-cover"
            />
          </div>

          {/* TEXT CARD */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <Image
              src="/assest/images/sliderlogo/User.png"
              alt=""
              width={40}
              height={40}
            />
            <h3 className="font-bold mt-3 text-gray-800">
              Recognition & Feedback
            </h3>
            <p className="text-sm text-gray-600 mt-2 leading-relaxed">
              Challenging the norm and transcending beyond boundaries to achieve
              what is expected and be rewarded for the value delivered.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}


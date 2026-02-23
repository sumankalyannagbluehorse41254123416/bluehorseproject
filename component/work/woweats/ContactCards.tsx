"use client";

import { Phone, Mail, User, Briefcase, Headphones } from "lucide-react";

const ContactCards = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">

          {/* Human Resources */}
          <div className="group bg-gray-100 rounded-2xl p-10 text-center 
                          transition-all duration-300 ease-in-out
                          hover:-translate-y-3 hover:shadow-2xl">

            <div className="w-20 h-20 mx-auto mb-6 bg-blue-600 rounded-full 
                            flex items-center justify-center
                            transition-transform duration-300
                            group-hover:scale-110">
              <User className="text-white w-8 h-8" />
            </div>

            <h3 className="text-lg font-semibold tracking-widest text-gray-800">
              HUMAN RESOURCES
            </h3>

            <p className="mt-4 text-gray-600">
              Unlock Your Career Opportunities
            </p>

            <div className="mt-6 space-y-3 text-gray-700">
              <div className="flex items-center justify-center gap-2">
                <Phone className="w-4 h-4 text-blue-600" />
                <span>+91 8537941549</span>
              </div>

              <div className="flex items-center justify-center gap-2">
                <Mail className="w-4 h-4 text-blue-600" />
                <span>hr@bluehorse.in</span>
              </div>
            </div>
          </div>

          {/* Sales */}
          <div className="group bg-gray-100 rounded-2xl p-10 text-center 
                          transition-all duration-300 ease-in-out
                          hover:-translate-y-3 hover:shadow-2xl">

            <div className="w-20 h-20 mx-auto mb-6 bg-blue-600 rounded-full 
                            flex items-center justify-center
                            transition-transform duration-300
                            group-hover:scale-110">
              <Briefcase className="text-white w-8 h-8" />
            </div>

            <h3 className="text-lg font-semibold tracking-widest text-gray-800">
              SALES
            </h3>

            <p className="mt-4 text-gray-600">
              Business empowerment promotion
            </p>

            <div className="mt-6 space-y-3 text-gray-700">
              <div className="flex items-center justify-center gap-2">
                <Phone className="w-4 h-4 text-blue-600" />
                <span>+91 8001869103</span>
              </div>

              <div className="flex items-center justify-center gap-2">
                <Mail className="w-4 h-4 text-blue-600" />
                <span>info@bluehorse.in</span>
              </div>
            </div>
          </div>

          {/* Support */}
          <div className="group bg-gray-100 rounded-2xl p-10 text-center 
                          transition-all duration-300 ease-in-out
                          hover:-translate-y-3 hover:shadow-2xl">

            <div className="w-20 h-20 mx-auto mb-6 bg-blue-600 rounded-full 
                            flex items-center justify-center
                            transition-transform duration-300
                            group-hover:scale-110">
              <Headphones className="text-white w-8 h-8" />
            </div>

            <h3 className="text-lg font-semibold tracking-widest text-gray-800">
              SUPPORT
            </h3>

            <p className="mt-4 text-gray-600">
              We're Here to Help
            </p>

            <div className="mt-6 space-y-3 text-gray-700">
              <div className="flex items-center justify-center gap-2">
                <Mail className="w-4 h-4 text-blue-600" />
                <span>support@bluehorse.in</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactCards;
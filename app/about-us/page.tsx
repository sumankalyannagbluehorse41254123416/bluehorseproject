"use client";

import JoinTeam from "@/component/about-us/JoinTeam";
import LearnPlayGrow from "@/component/about-us/LearnPlayGrow";
import MeetTeam from "@/component/about-us/MeetTeam";
import WinSection from "@/component/about-us/WinSection";
import BrandLogos from "@/component/UI/brand_wrap";
import React from "react";

const AboutVideo: React.FC = () => {
  return (
    <>
      <section className="w-full py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-10">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-wide text-gray-700 uppercase">
              About BlueHorse Software
            </h1>

            <p className="mt-4 text-gray-500 text-base ">
              We’re a team of thinkers, designers, architects, geeks, and
              engineers working together to breathe life into your ideas.
            </p>
          </div>
          <div className="w-full h-full overflow-hidden shadow-lg ">
            <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/LCHfQ4eavQ0?rel=0"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          {/* Bottom Content */}
          <div className="text-center mt-10">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-700 uppercase tracking-wide">
              Choose a job you love and you’ll never have to work a day in your
              life
            </h3>

            <p className="mt-4 text-gray-500 max-w-4xl mx-auto leading-relaxed">
              We at{" "}
              <span className="text-gray-700 font-medium">
                BlueHorse Software
              </span>{" "}
              live, breathe and dream about technology. We create innovative
              products and deliver excellence in services with a constant
              emphasis on process quality and customer satisfaction. We are here
              to empower your business online.
            </p>
          </div>
        </div>
      </section>
      <WinSection />
      <MeetTeam />
      <LearnPlayGrow />
      <JoinTeam />
      <BrandLogos />
    </>
  );
};

export default AboutVideo;

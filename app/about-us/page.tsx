"use client";

import JoinTeam from "@/component/about-us/JoinTeam";
import LearnPlayGrow from "@/component/about-us/LearnPlayGrow";
import MeetTeam from "@/component/about-us/MeetTeam";
import WinSection from "@/component/about-us/WinSection";
import React from "react";

const AboutVideo: React.FC = () => {
  return (
    <>
      <div className="video_wrap common_padding pb-0">
        <div className="container">
          {/* Banner Content */}
          <div className="banner_inner">
            <h1 className="title">About BlueHorse Software</h1>
            <p className="sub_title">
              We’re a team of thinkers, designers, architects, geeks, and
              engineers working together to breathe life into your ideas.
            </p>
          </div>

          {/* Video Section */}
          <figure className="video_holder">
            <iframe
              src="https://www.youtube.com/embed/LCHfQ4eavQ0?rel=0"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </figure>

          {/* Bottom Content */}
          <div className="video_con">
            <h3>
              Choose a job you love and you'll never have to work a day in your
              life
            </h3>

            <div className="sub_title">
              We at <span className="inherit_text">BlueHorse Software</span>{" "}
              live, breathe and dream about technology. We create innovative
              products and deliver excellence in services with a constant
              emphasis on process quality and customer satisfaction. We are here
              to empower your business online.
            </div>
          </div>
        </div>
      </div>
      <WinSection />
      <MeetTeam />
      <LearnPlayGrow />
      <JoinTeam />
    </>
  );
};

export default AboutVideo;

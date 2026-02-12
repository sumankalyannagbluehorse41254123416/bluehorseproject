"use client";

import React from "react";
import Image from "next/image";

const LearnPlayGrow: React.FC = () => {
  return (
    <section className="w-full py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Intro Text */}
        <h4 className="text-center text-gray-600 max-w-[942px] mx-auto leading-relaxed text-lg mb-16">
          As an organisation, we aim to create a Google-like fun culture which
          we call ‘Learn-Play-Grow’. Our purpose is to offer a work-life balance
          by creating an environment where our people thrive by having the best
          time of their day while at play.
        </h4>

        {/* LEARN */}
        <div className="grid grid-cols-2 items-center">
          {/* Image */}
          <div>
            <Image
              src="https://www.bluehorse.in/assets/image/About/learn.webp"
              alt="Learn"
              width={700}
              height={450}
              className="w-full h-auto shadow"
            />
          </div>

          {/* Content */}
          <div className="text-center p-12.5">
            <h3 className="text-3xl font-semibold text-gray-700 uppercase tracking-wide mb-4 text-center">
              Learn
            </h3>

            <p className="text-gray-600 leading-relaxed text-center">
              Team members learn the latest technologies stack working on
              challenging projects to meet our clients’ business goals.
            </p>
          </div>
        </div>

        {/* PLAY */}
        <div className="grid grid-cols-2 items-center">
          {/* Content */}
          <div className="text-center p-12.5">
            <h3 className="text-3xl font-semibold text-gray-700 uppercase tracking-wide mb-4 text-center">
              Play
            </h3>

            <p className="text-gray-600 leading-relaxed text-center">
              Through our passion for software development and approachable work
              culture, our work is play in real terms for our team.
            </p>
          </div>

          {/* Image */}
          <div className="order-1 order-2">
            <Image
              src="https://www.bluehorse.in/assets/image/About/Play.webp"
              alt="Play"
              width={700}
              height={450}
              className="w-full h-auto shadow"
            />
          </div>
        </div>

        {/* GROW */}
        <div className="grid grid-cols-2 items-center">
          {/* Image */}
          <div>
            <Image
              src="https://www.bluehorse.in/assets/image/About/Grow.webp"
              alt="Grow"
              width={700}
              height={450}
              className="w-full h-auto  shadow"
            />
          </div>

          {/* Content */}
          <div className="text-center p-12.5">
            <h3 className="text-3xl font-semibold text-gray-700 uppercase tracking-wide mb-4 text-center">
              Grow
            </h3>

            <p className="text-gray-600 leading-relaxed text-center">
              Growth is the obvious output as our inspired team work together,
              following their passion in a challenging and fun environment.
            </p>
          </div>
        </div>

      </div>

    </section>
  );
};

export default LearnPlayGrow;

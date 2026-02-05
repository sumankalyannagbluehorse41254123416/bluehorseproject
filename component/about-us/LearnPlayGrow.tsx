"use client";

import React from "react";

const LearnPlayGrow: React.FC = () => {
  return (
    <section className="learn_wrap common_padding pb-0">
      <div className="container">
        {/* Intro Text */}
        <h4 className="learn_intro">
          As an organisation, we aim to create a Google-like fun culture which
          we call ‘Learn-Play-Grow’. Our purpose is to offer a work-life balance
          by creating an environment where our people thrive by having the best
          time of their day while at play.
        </h4>

        <div className="learn_inner">
          {/* Learn */}
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <img
                src="https://www.bluehorse.in/assets/image/About/learn.webp"
                alt="Learn"
              />
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="learn_con">
                <h3>Learn</h3>
                <p>
                  Team members learn the latest technologies stack working on
                  challenging projects to meet our clients’ business goals.
                </p>
              </div>
            </div>
          </div>

          {/* Play */}
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="learn_con">
                <h3>Play</h3>
                <p>
                  Through our passion for software development and approachable
                  work culture, our work is play in real terms for our team.
                </p>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <img
                src="https://www.bluehorse.in/assets/image/About/Play.webp"
                alt="Play"
              />
            </div>
          </div>

          {/* Grow */}
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <img
                src="https://www.bluehorse.in/assets/image/About/Grow.webp"
                alt="Grow"
              />
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="learn_con">
                <h3>Grow</h3>
                <p>
                  Growth is the obvious output as our inspired team work
                  together, following their passion in a challenging and fun
                  environment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearnPlayGrow;

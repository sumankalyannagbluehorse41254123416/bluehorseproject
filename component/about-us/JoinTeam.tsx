"use client";

import React from "react";

const JoinTeam: React.FC = () => {
  return (
    <section className="join_wrap common_padding look">
      <div className="container">
        <div className="row">
          {/* Left Content */}
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="join_con">
              <h4>
                <span>Looking for Jockeys to ride</span>
              </h4>

              <p>
                If you're passionate about Design and Technology, drop in for a
                cup of Coffee at our office. PS: Dump those fancy degrees when
                you meet us. Our founders aren't big fans of it.
              </p>

              <a
                className="btn_join"
                href="https://www.bluehorse.in/careers.html"
                target="_blank"
                rel="noopener noreferrer">
                Available Positions
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <figure>
              <img
                src="https://www.bluehorse.in/assets/image/abt-career.jpg"
                alt="Careers at BlueHorse Software"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinTeam;

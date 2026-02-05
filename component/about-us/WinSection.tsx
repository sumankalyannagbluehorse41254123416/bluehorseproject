"use client";

import React from "react";

const WinSection: React.FC = () => {
  return (
    <section className="win_wrap common_padding pb-0">
      <div className="container">
        <div className="row">
          {/* Left Content */}
          <div className="col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="win_con">
              <h2>Win Win Win</h2>

              <img
                src="https://www.bluehorse.in/assets/image/win_win_win_design.png"
                alt="Win Win Win Design"
              />

              <p>An inclusive success mantra for all stakeholders.</p>

              <button
                className="btn_play youtubepopupmodel"
                data-src="https://www.youtube.com/embed/0UNDBVVowAU"
                type="button">
                <i className="ri-play-fill" /> Play on Video Win Win Win
              </button>
            </div>
          </div>

          {/* Right Content */}
          <div className="col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="win_right">
              <div className="row">
                {/* Box 1 */}
                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                  <div className="win_box">
                    <img
                      src="https://www.bluehorse.in/assets/image/about1.webp"
                      alt="The Expectations"
                    />
                    <h3>The Expectations</h3>
                    <p>
                      Clients: Return on investment. <br />
                      Team: Career growth and work-life balance <br />
                      Founders: Business growth
                    </p>
                  </div>
                </div>

                {/* Box 2 */}
                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                  <div className="win_box">
                    <img
                      src="https://www.bluehorse.in/assets/image/about2.webp"
                      alt="The Framework"
                    />
                    <h3>The Framework</h3>
                    <p>
                      A joint responsibility where one wins only by enabling the
                      success of others.
                    </p>
                  </div>
                </div>

                {/* Box 3 */}
                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                  <div className="win_box">
                    <img
                      src="https://www.bluehorse.in/assets/image/about3.webp"
                      alt="The Results"
                    />
                    <h3>The Results</h3>
                    <p>
                      All stakeholders – Clients, Team, and Founders accomplish
                      their desired outcomes as they engage with BlueHorse.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WinSection;

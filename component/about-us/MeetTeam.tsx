"use client";

import React from "react";

const MeetTeam: React.FC = () => {
  return (
    <section className="meet_team common_padding pb-0">
      <div className="container">
        {/* Section Title */}
        <h3 className="sectionTitle">Meet Our Team</h3>

        {/* Section Details */}
        <p className="sectionDetails">
          Meet Our Team Our team inspires continuous excellence, driving our
          values and leading our <span className="inherit_text">company</span>{" "}
          to the next level.
        </p>

        {/* Team Image */}
        <figure>
          <img
            src="https://www.bluehorse.in/assets/image/About/about_team.webp"
            alt="Meet Our Team"
          />
        </figure>
      </div>
    </section>
  );
};

export default MeetTeam;

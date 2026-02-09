"use client";

import Image from "next/image";
import React from "react";

const MeetTeam: React.FC = () => {
  return (
    <section className="meet_team common_padding pb-0">
      <div className="container items-center">
        <h3 className="sectionTitle text-center">Meet Our Team</h3>
        <p className="sectionDetails text-center">
          Meet Our Team Our team inspires continuous excellence, driving our
          values and leading our <span className="inherit_text">company</span>{" "}
          to the next level.
        </p>
        <figure>
          <Image
            src="https://www.bluehorse.in/assets/image/About/about_team.webp"
            alt="Meet Our Team"
            width={1500}
            height={200}
          />
        </figure>
      </div>
    </section>
  );
};

export default MeetTeam;

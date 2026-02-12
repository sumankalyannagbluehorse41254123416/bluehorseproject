"use client";

import Image from "next/image";
import React from "react";

const MeetTeam: React.FC = () => {
  return (
    <section className="meet_team common_padding pb-0">
      <div className="container items-center">
        <div className="text-center max-w-3xl mx-auto">
          <h3 className="text-[40px] font-normal text-gray-700">
            MEET OUR TEAM
          </h3>

          <p className="mt-4 text-gray-500 text-base md:text-lg leading-relaxed">
            Meet Our Team Our team inspires continuous excellence, driving our values
            and leading our <span className="text-gray-700">company</span> to the next
            level.
          </p>
        </div>

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

import React, { useState } from "react";
import Experience from "./Experience";
import experiences from "../Experiences.json";

const ExperienceContainer = () => {
  return (
    <div className="md:w-full h-auto border border-slate-300 bg-white rounded-xl p-4 relative mb-5">
      <h3 className=" text-lg font-semibold mb-2">Experience</h3>
      <div className="flex-wrap md:flex md:justify-around">
        {/* Work Experience Content */}
        {experiences.map((experience) => {
          return (
            <div key={experience.id}>
              <Experience
                title={experience.title}
                company={experience.company}
                company_type={experience.company_type}
                duration={experience.duration}
                city={experience.city}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExperienceContainer;

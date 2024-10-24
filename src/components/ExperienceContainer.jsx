import React, { useState } from "react";
import Experience from "./Experience";
import experiences from "../Experiences.json";

const ExperienceContainer = (props) => {
  const [modal, setModal] = useState(true);

  const onModalClick = () => {
    setModal(true);
    props.onModalClick(modal);
  };

  return (
    <div className="md:w-full h-auto border border-slate-300 bg-white rounded-xl p-4 relative mb-5">
      <h3 className=" text-lg font-semibold mb-2">Experience</h3>
      <div className="flex-wrap md:flex md:justify-around">
        {/* Work Experience Content */}
        {experiences.map(
          ({ id, title, company, company_type, duration, city }) => {
            return (
              <div key={id} onClick={onModalClick}>
                <Experience
                  {...{ title, company, company_type, duration, city }}
                />
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default ExperienceContainer;

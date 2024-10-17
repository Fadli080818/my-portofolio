import React, { useState } from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import Experience from "./Experience";

const ResumeComp = () => {
  const [experiences, setExperiences] = useState([
    {
      id: "1",
      company: "ABC Corp",
      title: "Senior Software Engineer",
      duration: "2018 - 2021",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam, commodi!",
    },
    {
      id: "2",
      company: "XYZ Corp",
      title: "Software Engineer",
      duration: "2016 - 2018",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam, commodi!",
    },
  ]);

  return (
    <div className="flex justify-center w-full h-auto p-5 pt-24 ">
      <div className="md:w-full h-auto shadow-2xl  rounded-md border p-4 relative">
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold mb-1">Resume</h1>
          <a
            href="https://api.whatsapp.com/send?phone=6282213648742"
            className="w-30 text-green-700 w-8 h-8 rounded-full hover:shadow-2xl animate-bounce text-sm absolute -top-4 right-2"
            target="_blank"
          >
            <IoLogoWhatsapp size={50} />
          </a>
        </div>

        <p className="text-sm">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima,
          blanditiis?
        </p>

        {/* Experience */}
        <h3 className=" text-lg font-semibold pt-6 mb-2">Work Experience</h3>
        <div className="flex-wrap md:flex md:justify-start">
          {/* Work Experience Content */}
          <Experience />
        </div>

        {/* Formal Education */}
        <h3 className=" text-lg font-semibold pt-6 mb-2">Work Experience</h3>
        <div className="flex-wrap md:flex md:justify-start">
          {/* Work Experience Content */}
          <Experience />
        </div>
        {/* Non Formal Education */}
      </div>
    </div>
  );
};

export default ResumeComp;

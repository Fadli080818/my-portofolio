import React, { useState } from "react";
import { IoLogoWhatsapp, IoMdClose } from "react-icons/io";
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
      img: "/src/assets/img2.svg",
    },
    {
      id: "2",
      company: "XYZ Corp",
      title: "Software Engineer",
      duration: "2016 - 2018",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam, commodi!",
      img: "/src/assets/img1.svg",
    },
  ]);

  return (
    <>
      <div className=" w-full h-max p-5 pt-24 relative">
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold mb-1">Resume</h1>
        </div>

        <p className="text-sm mb-2">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima,
          blanditiis?
        </p>

        {/* Content Experience*/}
        <div className="md:w-full h-auto shadow-lg  rounded-xl p-4 relative mb-5">
          <h3 className=" text-lg font-semibold mb-2">Work Experience</h3>
          <div className="flex-wrap md:flex md:justify-start">
            {/* Work Experience Content */}
            {experiences.map((experience) => {
              return (
                <Experience
                  key={experience.id}
                  img={experience.img}
                  title={experience.title}
                  company={experience.company}
                  duration={experience.duration}
                />
              );
            })}
          </div>
        </div>

        {/* Content Experience*/}
        <div className="md:w-full h-auto shadow-lg  rounded-xl p-4 relative mb-5">
          <h3 className=" text-lg font-semibold mb-2">Work Experience</h3>
          <div className="flex-wrap md:flex md:justify-start">
            {/* Work Experience Content */}
            {experiences.map((experience) => {
              return (
                <Experience
                  key={experience.id}
                  img={experience.img}
                  title={experience.title}
                  company={experience.company}
                  duration={experience.duration}
                />
              );
            })}
          </div>
        </div>
      </div>

      <div className=" bg-black w-full h-screen absolute bg-opacity-75 transition-all hidden ">
        <div className="flex justify-center items-center h-screen">
          <div className="bg-white w-11/12 h-auto p-2 rounded-md md:w-2/4 text-sm relative">
            <IoMdClose
              size={20}
              className="absolute top-2 right-2 cursor-pointer"
            />
            <h4 className="text-lg font-bold text-orange-700 mb-3">Detail</h4>
            <p>Title : </p>
            <p>Company :</p>
            <p className="mb-2">Duration : </p>
            <p>Description :</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResumeComp;

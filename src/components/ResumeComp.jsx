import React, { useState } from "react";
import { IoLogoJavascript, IoMdClose } from "react-icons/io";
import ExperienceContainer from "./ExperienceContainer";
import SkillContainer from "./SkillContain";
import LanguangeContain from "./LanguangeContain";

const ResumeComp = () => {
  const [modal, setModal] = useState(false);
  return (
    <>
      <div className=" w-full h-max p-5 pt-24 relative">
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold mb-1">Resume</h1>
        </div>

        <p className="text-sm mb-2">Hi there, This is my Resume.</p>

        {/* Content*/}
        <ExperienceContainer />
        <SkillContainer />
        <LanguangeContain />
      </div>

      {/* Pop Up Modal */}
      <div
        className={`${
          modal ? "visible" : "invisible"
        } bg-black w-full h-screen absolute bg-opacity-50`}
      >
        <div className="flex justify-center items-center h-screen">
          <div className="bg-white w-11/12 h-auto p-2 rounded-md md:w-2/4 text-sm relative">
            <IoMdClose
              size={20}
              className="absolute top-4 right-4 cursor-pointer hover:scale-110"
              onClick={() => setModal(!modal)}
            />
            <h4 className="text-lg font-semibold py-1  text-slate-800 shadow-sm">
              Detail
            </h4>
            <hr className="border border-dashed mb-2 border-slate-300" />
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

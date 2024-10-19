import React, { useState } from "react";
import { FaExpandAlt } from "react-icons/fa";
import ResumeComp from "./ResumeComp";

const Experience = (props) => {
  return (
    <>
      <div className=" mb-4 p-4 shadow-md bg-slate-50 text-slate-800 border border-slate-200 hover:cursor-pointer hover:bg-slate-600 hover:text-white hover:scale-95 transition-all ease-in-out duration-200 md:w-96 h-auto md:mr-3 rounded-lg">
        <div className="w-full ">
          <p className="font-semibold">{props.title}</p>
          <p className="text-sm   ">{props.company}</p>
          <p className="text-sm">{props.company_type}</p>
          <p className="text-sm ">{props.duration}</p>
          <p className="text-sm ">{props.city}</p>
        </div>
      </div>
    </>
  );
};

export default Experience;

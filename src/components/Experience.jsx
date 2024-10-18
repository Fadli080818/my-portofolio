import React from "react";
import { FaExpandAlt } from "react-icons/fa";

const Experience = (props) => {
  return (
    <>
      <div className=" mb-4 p-4 shadow-md bg-slate-700 text-white md:w-96 h-auto md:mr-3 rounded-lg relative">
        <div className="absolute top-2 right-2 hover:text-orange-500 cursor-pointer">
          <FaExpandAlt />
        </div>

        <div className="w-full ">
          <p className="font-semibold">{props.title}</p>
          <p className="text-sm   ">{props.company}</p>
          <p className="text-sm ">{props.duration}</p>
        </div>
      </div>
    </>
  );
};

export default Experience;

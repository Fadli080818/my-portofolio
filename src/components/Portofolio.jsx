import React from "react";
import { MdOpenInNew } from "react-icons/md";

const Portofolio = (props) => {
  return (
    <div className=" mb-4 p-4 shadow-md bg-slate-50 text-slate-800 border border-slate-200 transition-all ease-in-out duration-200 md:w-96 h-auto md:mr-3 rounded-lg">
      <div className="w-full ">
        <img
          className="w-full h-52 object-cover rounded-lg hover:scale-110 transition-all ease-in-out duration-200 hover:shadow-xl"
          src={props.img}
          alt="Img"
        />
        <div className="flex items-center mt-3 justify-between">
          <p className="font-semibold">{props.title}</p>
          <a target="_blank" className="text-sm" href={props.link}>
            <MdOpenInNew
              className="hover:scale-110 hover:text-orange-600"
              size={20}
            />
          </a>
        </div>
        <p className="text-sm mt-3">{props.description}</p>
      </div>
    </div>
  );
};

export default Portofolio;

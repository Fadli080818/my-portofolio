import React from "react";
import { IoLogoWhatsapp } from "react-icons/io";

const PortofolioComp = () => {
  return (
    <div className="flex justify-center w-full h-auto p-5 bg-[url('/src/assets/background.jpg')] bg-cover bg-no-repeat sm:pt-12 ">
      <div className=" lg:w-3/4 md:w-3/4 h-auto shadow-2xl  rounded-md border p-4 relative">
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold mb-1">Portofolio</h1>
          <a
            href="https://api.whatsapp.com/send?phone=6282213648742"
            className="w-30 text-slate-900 w-8 h-8 rounded-full hover:text-orange-700 hover:shadow-2xl animate-bounce text-sm absolute -top-4 right-2"
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
        <h3 className=" text-lg font-semibold pt-6 mb-3">Programming Skill</h3>
        <div className="flex-wrap md:flex">
          <div className="flex w-full m-3">
            <img
              className=" w-full rounded-xl"
              src="src/assets/react.jpg"
              alt=""
            />
          </div>

          <div className="flex w-1/2 m-3">
            <img
              className="w-full rounded-xl"
              src="src/assets/javascript.jpg"
              alt=""
            />
          </div>

          <div className="flex w-1/2 m-3">
            <img
              className="w-full rounded-xl"
              src="src/assets/tailwind.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortofolioComp;

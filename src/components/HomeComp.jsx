import React from "react";

const HomeComp = () => {
  return (
    <div className="container flex justify-center  w-full h-screen pt-10">
      <div className="flex-wrap justify-center items-center w-4/5  my-14 md:flex md:justify-evenly md:items-center">
        <div className="md:w-1/2">
          <h3 className="text-4xl mb-1 font-bold">Hello!</h3>
          <h2 className="text-2xl mb-1">
            I'm <span className="font-bold">Fadli</span>
          </h2>
          <p className="text-lg text-orange-600 mb-3">
            Junior Full Stack Developer
          </p>
          <p className="mb-5 mr-5">
            I'm a junior Full Stack Developer focused for Company System
            Development. If you need system for your Company contact me on
            Button bellow
          </p>
          <a
            href="https://api.whatsapp.com/send?phone=6282213648742"
            className="w-24 text-white bg-orange-600 px-4 py-2 rounded-md hover:bg-slate-700 text-sm"
            target="_blank"
          >
            Contact Me!
          </a>
        </div>

        <div className=" flex justify-center mt-12 mb-10 md:w-1/2 ">
          <img
            src="src/assets/me2.png"
            alt=""
            className="rounded-full shadow-2xl w-60 h-60 hover:scale-125 transition-all ease-in-out duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeComp;

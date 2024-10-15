import React from "react";

const HomeComp = () => {
  return (
    <div className="flex justify-evenly items-center h-screen w-full  sm:flex-wrap bg-[url('./src/assets/background.jpg')] bg-cover bg-no-repeat">
      <div className="w-96 sm:ml-5">
        <h3 className="text-4xl mb-1 font-bold">Hello!</h3>
        <h2 className="text-2xl mb-1">
          I'm <span className="font-bold">Fadli</span>
        </h2>
        <p className="text-lg text-orange-600 mb-3">
          Junior Full Stack Developer
        </p>
        <p className="mb-5 sm:mr-5 sm:text-sm">
          I'm a junior Full Stack Developer focused for Company System
          Development. If you need system for your Company contact me on Button
          bellow
        </p>
        <a
          href="#"
          className="w-24 text-white bg-orange-600 px-4 py-2 rounded-md hover:bg-orange-500 text-sm"
        >
          Contact Me!
        </a>
      </div>

      <div className="">
        <img
          src="./src/assets/me2.png"
          alt=""
          className="rounded-full shadow-2xl w-72 h-72 "
        />
      </div>
    </div>
  );
};

export default HomeComp;

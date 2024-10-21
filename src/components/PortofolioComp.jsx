import React from "react";
import PortofolioContain from "./PortofolioContain";

const PortofolioComp = () => {
  return (
    <div className=" w-full h-max p-5 pt-24 relative">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold mb-1">Portofolio</h1>
      </div>

      <p className="text-sm mb-2">
        Hi there, This is all my project i've been done
      </p>

      {/* Content*/}
      <PortofolioContain />
    </div>
  );
};

export default PortofolioComp;

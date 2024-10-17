import React from "react";
import Sidebar from "../components/Sidebar";
import Portofolio from "../components/PortofolioComp";

const PortofolioPages = () => {
  return (
    <div className="flex">
      <Portofolio />
      <Sidebar />
    </div>
  );
};

export default PortofolioPages;

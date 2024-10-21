import React from "react";
import Sidebar from "../components/Sidebar";
import Portofolio from "../components/PortofolioComp";
import Navbar from "../components/Navbar";

const PortofolioPages = () => {
  return (
    <div className="flex">
      <Portofolio />
      <Navbar />
      <Sidebar />
    </div>
  );
};

export default PortofolioPages;

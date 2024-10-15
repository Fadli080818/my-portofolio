import React from "react";
import Sidebar from "../components/Sidebar";
import HomeComp from "../components/HomeComp";

const HomePages = () => {
  return (
    <div className="flex relative">
      <Sidebar />
      <HomeComp />
    </div>
  );
};

export default HomePages;

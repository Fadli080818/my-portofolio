import React from "react";
import Sidebar from "../components/Sidebar";
import HomeComp from "../components/HomeComp";
import Navbar from "../components/Navbar";

const HomePages = () => {
  return (
    <div className="flex justify-center bg-[url('/src/assets/background.jpg')] bg-cover bg-no-repeat relative">
      <HomeComp />

      <Navbar />
      <Sidebar />
    </div>
  );
};

export default HomePages;

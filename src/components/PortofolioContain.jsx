import React, { useState } from "react";
import Portofolio from "./Portofolio";

const PortofolioContain = () => {
  const [portofolios, setPortofolios] = useState([
    {
      id: "1",
      img: "/src/assets/web_portofolio.png",
      title: "My portofolio",
      description:
        "This is Website for my portofolio, Using Framework React.js & Tailwind Css",
      link: "/",
    },
    {
      id: "2",
      img: "/src/assets/tailwind.jpg",
      title: "My Website",
      description: "Test Website",
      link: "https://google.com",
    },
    {
      id: "3",
      img: "/src/assets/javascript.jpg",
      title: "My Website",
      description: "Test Website",
      link: "https://google.com",
    },
  ]);
  return (
    <div>
      <div className="md:w-full h-auto border border-slate-300 bg-white rounded-xl p-4 relative mb-5">
        <h3 className=" text-lg font-semibold mb-2">My Project</h3>
        <div className="flex-wrap md:flex md:justify-start">
          {/* Work Experience Content */}
          {portofolios.map((portofolio) => {
            return (
              <>
                <Portofolio
                  key={portofolio.id}
                  img={portofolio.img}
                  title={portofolio.title}
                  description={portofolio.description}
                  link={portofolio.link}
                />
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PortofolioContain;

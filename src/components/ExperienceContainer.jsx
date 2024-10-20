import React, { useState } from "react";
import Experience from "./Experience";

const ExperienceContainer = () => {
  const [experiences, setExperiences] = useState([
    {
      id: "1",
      company: "CV. Sumber Harapan",
      company_type: "Dealer & Service Center Authorized Toyota",
      title: "Administration",
      duration: "2015 - 2016",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam, commodi!",
      city: "Kota Tarakan, Kalimantan Utara",
    },
    {
      id: "2",
      company: "CV. Sumber Harapan",
      company_type: "Dealer & Service Center Authorized Toyota",
      title: "Partsman (Inventory)",
      duration: "2016 - 2019",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam, commodi!",
      city: "Kota Tarakan, Kalimantan Utara",
    },
    {
      id: "3",
      company: "PT. Premium Eternal Utama",
      company_type: "Cash & Credit Elektronik Retail Store",
      title: "Collector",
      duration: "2019 - 2020",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam, commodi!",
      city: "Kota Samarinda, Kalimantan Timur",
    },
    {
      id: "4",
      company: "PT. Premium Eternal Utama",
      company_type: "Cash & Credit Elektronik Retail Store",
      title: "Credit Analys",
      duration: "2021 - 2022",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam, commodi!",
      city: "Kota Samarinda, Kalimantan Timur",
    },
    {
      id: "5",
      company: "PT. Premium Eternal Utama",
      company_type: "Cash & Credit Elektronik Retail Store",
      title: "RTM (Recruitment)",
      duration: "2022 - 2023",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam, commodi!",
      city: "Kota Samarinda, Kalimantan Timur",
    },
    {
      id: "6",
      company: "PT. Home Center Indonesia",
      company_type: "Furniture Retail Company",
      title: "Sales Multi Talents",
      duration: "2023 - Now",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam, commodi!",
      city: "Kota Samarinda, Kalimantan Timur",
    },
  ]);

  return (
    <div className="md:w-full h-auto border border-slate-300 bg-white rounded-xl p-4 relative mb-5">
      <h3 className=" text-lg font-semibold mb-2">Experience</h3>
      <div className="flex-wrap md:flex md:justify-around">
        {/* Work Experience Content */}
        {experiences.map((experience) => {
          return (
            <>
              <Experience
                key={experience.id}
                title={experience.title}
                company={experience.company}
                company_type={experience.company_type}
                duration={experience.duration}
                city={experience.city}
              />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default ExperienceContainer;

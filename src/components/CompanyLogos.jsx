import React from "react";
import { companyLogos } from "../constants";

const CompanyLogos = ({ className }) => {
  return (
    <div className={`${className || ""}`}>
      <p className="tagline text-center mb-6 text-n-1/50">
        HELPING PEOPLE CREATE BEAUTIFUL CONTENT AT
      </p>
      <ul className="flex items-center justify-around mt-24">
        {companyLogos.map((logo, index) => (
          <li key={index}>
            <img
              src={logo}
              alt="logo"
              className="cursor-pointer p-4 rounded-xl transition duration-700 ease-in-out hover:scale-110"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyLogos;

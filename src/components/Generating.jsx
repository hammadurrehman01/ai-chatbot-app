import React from "react";
import { loading } from "../assets";

const Generating = ({ className }) => {
  return (
    <div
      className={`flex items-center h-[3.5rem] px-6 rounded-[1.7rem] bg-n-8/80 ${
        className || ""
      }`}
    >
      <img src={loading} alt="loading" className="mr-4 h-5 w-5" />
      AI is generating|
    </div>
  );
};

export default Generating;

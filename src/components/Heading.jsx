import React from "react";
import Tagline from "./Tagline";

const Heading = ({ className, title, text, tag }) => {
  return (
    <div className={`${className} mb-12 lg:mb-20 max-w-[50rem] mx-auto`}>
      {tag && <Tagline className="mb-4 md:justify-center">{tag}</Tagline>}
      <h2 className="h2">{title}</h2>
      {text && <p className="text-n-4 mt-4 body-2 text-center">{text}</p>}
    </div>
  );
};

export default Heading;

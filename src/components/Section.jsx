import React from "react";
import SectionSvg from "../assets/svg/SectionSvg";

const Section = ({
  className,
  id,
  crosses,
  crossesOffset,
  customPaddings,
  children,
}) => {
  return (
    <div
      id={id}
      className={`relative ${customPaddings || "py-10 lg:py-16 xl:py-20"} ${
        crosses ? "lg:py-32 xl:py-40" : ""
      } ${className || ""}`}
    >
      {children}

      <div className="hidden md:block absolute top-0 left-5 lg:left-7.5 xl:left-10 w-0.25 h-full bg-stroke-1 pointer-events-none" />
      <div className="hidden md:block absolute top-0 right-5 lg:right-7.5 xl:right-10 w-0.25 h-full bg-stroke-1 pointer-events-none" />

      {crosses && (
        <>
          <div
            className={`hidden lg:block absolute right-7.5 xl:right-10 left-7.5 xl:left-10 h-0.25 bg-stroke-1 ${
              crossesOffset && crossesOffset
            } pointer-events-none`}
          />
          <SectionSvg crossesOffset={crossesOffset} />
        </>
      )}
    </div>
  );
};

export default Section;

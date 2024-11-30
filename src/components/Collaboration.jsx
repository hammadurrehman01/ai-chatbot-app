import React from "react";
import Section from "./Section";
import { collabApps, collabContent, collabText } from "../constants";
import { brainwaveSymbol, check } from "../assets";
import Button from "./Button";
import { LeftCurve, RightCurve } from "./design/Collaboration";

const Collaboration = () => {
  return (
    <Section crosses>
      <div className="container lg:flex pb-16">
        <div className="leftDiv max-w-[25rem]">
          <h2 className="h2 mb-4 md:mb-8">
            AI chat app for seamless collaboration
          </h2>
          <ul className="max-w-[22rem] mb-10 md:mb-14">
            {collabContent.map((item, index) => (
              <li key={item.id} className="py-3 mb-3">
                <div className="flex items-center">
                  <img src={check} alt="check" width={24} height={24} />
                  <h6 className="body-2 ml-5">{item.title}</h6>
                </div>
                {item.text && (
                  <p className="body-2 text-n-4 mt-3">{item.text}</p>
                )}
              </li>
            ))}
          </ul>
          <Button>Try it now</Button>
        </div>
        <div className="rightDiv lg:ml-auto xl:w-[38rem] mt-4">
          <p className="body-2 text-n-4 mb-4 md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto">
            {collabText}
          </p>
          <div className="relative flex left-1/2 w-[22rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale:75 md:scale-100">
            <div className="flex w-60  aspect-square m-auto border border-n-6 rounded-full">
              <div className="flex w-[6rem]  aspect-square m-auto bg-conic-gradient p-[0.2rem] rounded-full">
                <div className="flex items-center justify-center bg-n-8 w-full h-full rounded-full">
                  <img src={brainwaveSymbol} alt="" width={48} height={48} />
                </div>
              </div>
            </div>
            <ul>
              {collabApps.map((app, index) => (
                <li
                  key={app.id}
                  className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${
                    index * 45
                  }`}
                >
                  <div
                    className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl -rotate-${
                      index * 45
                    }`}
                  >
                    <img
                      src={app.icon}
                      alt={app.title}
                      className="m-auto "
                      width={app.width}
                      height={app.height}
                    />
                  </div>
                </li>
              ))}
            </ul>
            <LeftCurve />
            <RightCurve />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Collaboration;

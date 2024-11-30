import React from "react";
import Section from "./Section";
import Heading from "./Heading";
import { service1, service2, service3, check } from "../assets";
import { brainwaveServices, brainwaveServicesIcons } from "../constants";
import Generating from "./Generating";
import {
  PhotoChatMessage,
  VideoBar,
  VideoChatMessage,
  Gradient,
} from "./design/Services";

const Services = () => {
  return (
    <Section id="how-to-use">
      <div className="container">
        <Heading
          title="Generative AI made for creators."
          text="Brainwave unlocks the potential of AI-powered applications"
        />
        <div className="relative">
          <div className="box-1-top relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <img
                src={service1}
                alt="Smartest AI"
                className="w-full h-full object-cover md:object-left"
                width={800}
                height={730}
              />
            </div>
            <div className="relative z-1 max-w-[17rem] ml-auto">
              <h4>Smartest AI</h4>
              <p className="body-2 mb-12 text-n-3">
                Brainwave unlocks the potential of AI-powered applications
              </p>
              <ul className="body-2">
                {brainwaveServices.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start py-4 border-t borer-n-6"
                  >
                    <img src={check} alt="check" width={24} height={24} />
                    <p className="ml-4">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
            <Generating className="absolute lg:w-1/2 left-4 right-4 bottom-4 border border-n-1/10 lg:left-1/2 lg:right-auto lg:bottom-8 lg:-translate-x-1/2" />
          </div>
          <div className="box-bottom-parent relative z-1 grid lg:grid-cols-2 gap-5">
            <div className="box-left-bottom relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src={service2}
                  alt="Service 2"
                  className="w-full h-full object-cover "
                  width={630}
                  height={750}
                />
              </div>
              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                <h4 className="h4 mb-4">Photo editing</h4>
                <p className="body-2 mb-12 text-n-3">
                  Automatically enhance your photos using our AI app's photo
                  editing feature. Try it now!
                </p>
              </div>
              <PhotoChatMessage />
            </div>
            <div className="box-right-bottom p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]">
              <div className="py-12 px-4 xl:px-8">
                <h4 className="h5 mb-4">Video generation</h4>
                <p className="body-2 mb-8">
                  The world’s most powerful AI photo and video art generation
                  engine.What will you create?
                </p>
                <ul className="flex items-center justify-between">
                  {brainwaveServicesIcons.map((item, index) => (
                    <li
                      className={`rounded-2xl flex items-center justify-center ${
                        index === 2
                          ? "w-12 h-12 p-[1px] bg-conic-gradient rounded-2xl md:w-[4.5rem] md:h-[4.5rem]"
                          : "flex w-10 h-10 bg-n-6 md:w-15 md:h-15"
                      }`}
                      key={index}
                    >
                      <div
                        className={`${
                          index === 2
                            ? "flex items-center justify-center w-full h-full bg-n-7 rounded-2xl"
                            : ""
                        }`}
                      >
                        <img src={item} alt="icon" height={24} width={24} />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative h-[20rem] md:h-[25rem] bg-n-8 rounded-xl overflow-hidden ">
                <img
                  src={service3}
                  alt="service 3"
                  className="w-full h-full object-cover"
                  height={400}
                  width={520}
                />
                <VideoChatMessage />
                <VideoBar />
              </div>
            </div>
          </div>
          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Services;

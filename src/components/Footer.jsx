import React from "react";
import Section from "./Section";
import { socials } from "../constants";

const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10">
      <div className="container pb-4 flex max-sm:flex-col items-center justify-center sm:justify-between  gap-10">
        <p className="caption text-n-4 lg:block">
          {new Date().getFullYear()}. ©All rights reserved
        </p>
        <ul className="flex gap-5 flex-wrap">
          {socials.map((item, index) => (
            <a
              href={item.url}
              key={item.id}
              target="_blank"
              className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
            >
              <img src={item.iconUrl} alt={item.title} height={16} width={16} />
            </a>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Footer;

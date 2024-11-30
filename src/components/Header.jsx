import React, { useState } from "react";
import { brainwave } from "../assets";
import { navigation } from "../constants/index";
import { useLocation } from "react-router-dom";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

const Header = () => {
  const [openNavigation, SetopenNavigation] = useState(false);
  const pathname = useLocation();

  const toggleNavigation = () => {
    if (openNavigation) {
      SetopenNavigation(false);
      enablePageScroll();
    } else {
      SetopenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;
    enablePageScroll();
    SetopenNavigation(false);
  };

  return (
    <div
      className={`fixed flex items-center justify-around w-full top-0 left-0 z-50 border-b border-n-6 lg:bg-n-8/90 ${
        openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a href="#hero" className="block w-[12rem] xl:mr-8 ">
          <img src={brainwave} alt="logo" height={40} width={190} />
        </a>
      </div>
      <nav
        className={`${
          openNavigation ? "flex" : "hidden"
        }  lg:flex fixed lg:static top-[5rem] left-0 bottom-0 right-0 bg-n-8 lg:bg-transparent`}
      >
        <div className="relative z-2 flex flex-col lg:flex-row items-center justify-center m-auto px-4 lg:px-0">
          {navigation.map((item) => (
            <a
              onClick={handleClick}
              href={item.url}
              key={item.id}
              className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
                item.onlyMobile && "lg:hidden"
              } px-6 py-6 md:py-8 lg:mr-0.25 lg:text-xs lg:fontsemibold ${
                pathname.hash === item.url
                  ? "z-2 lg:text-n-1"
                  : "lg:text-n-1/50"
              } lg:leading-5 lg:hover:text-n-1`}
            >
              {item.title}
            </a>
          ))}
        </div>
        {openNavigation && <HamburgerMenu />}
      </nav>
      <div className="flex items-center">
        <a
          href="#signup"
          className="button hidden lg:block mr-8 text-n-1/50 hover:text-n-1 transition-colors"
        >
          New account
        </a>
        <Button className="hidden lg:flex" href="#login">
          Sign in
        </Button>

        {/* Hamburger */}

        <Button
          className="ml-auto lg:hidden"
          px="px-3"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;

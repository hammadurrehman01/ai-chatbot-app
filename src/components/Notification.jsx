import React from "react";
import { notificationImages } from "../constants";
import { notification1 } from "../assets";

const Notification = ({ className, title }) => {
  return (
    <div
      className={`${
        className || ""
      } p-4 pr-6 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl`}
    >
      <img src={notification1} alt="img" className="w-16 h-16 rounded-xl" />
      <div className="w-full">
        <h6 className="font-semibold mb-1 text-base text-n-13">{title}</h6>
        <div className="flex items-center justify-between w-[full">
          <ul className="flex items-center">
            {notificationImages.map((item, index) => (
              <li key={index} className="-mr-2">
                <img
                  src={item}
                  alt="users"
                  className="flex rounded-full border-2 border-n-12 w-6 h-6"
                />
              </li>
            ))}
          </ul>
          <p className="text-n-13">1m ago</p>
        </div>
      </div>
    </div>
  );
};

export default Notification;

import React from "react";
import { tech } from "../constants";

interface TechType {
  name: string;
  icon: string;
}
const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-5 bg-[#141c27] pb-[4rem] pt-[2rem] md:pt-[8rem]">
      {tech.map(({ name, icon }) => {
        return (
          <div
            key={name}
            className="w-28 h-28 flex justify-center items-center"
          >
            <img src={`${icon}`} alt="name" className="w-20 h-20" />
          </div>
        );
      })}
    </div>
  );
};

export { Tech };

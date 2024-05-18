/* eslint-disable react/no-unescaped-entities */
import {
  CodeBracketIcon,
  CommandLineIcon,
  RocketLaunchIcon,
} from "@heroicons/react/20/solid";
import React from "react";
import { testimonies } from "../constants";

const Testimonies = () => {
  return (
    <div className="bg-[#141c27] pb-[4rem] pt-[2rem] md:pt-[8rem]">
      <h2 className="heading">
        My <span className="text-blue-400">Testimonies</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto items-center gap-[3rem] mt-[4rem] text-white">
        <div>
          <div className="bg-blue-700 hover:scale-110 transform transition-all duration-300 hover:-rotate-6 font-semibold text-center p-[2rem]">
            <CodeBracketIcon className="w-[4rem] h-[4rem] mx-auto text-[#d3fae8]" />
            <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] uppercase">
              {testimonies[0].name}
            </h1>
            <h1 className="text-[10px] md:text-[20px] mb-[1.5rem] uppercase">
              {testimonies[0].title}
            </h1>
            <p className="text-[16px] text-[#d3d2d2] font-normal">
              {testimonies[0].content}
            </p>
          </div>
        </div>
        <div>
          <div className="bg-blue-700 hover:scale-110 transform transition-all duration-300 font-semibold text-center p-[2rem]">
            <RocketLaunchIcon className="w-[4rem] h-[4rem] mx-auto text-[#d3fae8]" />
            <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] uppercase">
              {testimonies[1].name}
            </h1>
            <h1 className="text-[10px] md:text-[20px] mb-[1.5rem] uppercase">
              {testimonies[1].title}
            </h1>
            <p className="text-[16px] text-[#d3d2d2] font-normal">
              {testimonies[1].content}
            </p>
          </div>
        </div>
        <div>
          <div className="bg-blue-700 hover:scale-110 transform transition-all duration-300 hover:rotate-6 font-semibold text-center p-[2rem]">
            <CommandLineIcon className="w-[4rem] h-[4rem] mx-auto text-[#d3fae8]" />
            <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] uppercase">
              {testimonies[2].name}
            </h1>
            <h1 className="text-[10px] md:text-[20px] mb-[1.5rem] uppercase">
              {testimonies[2].title}
            </h1>
            <p className="text-[16px] text-[#d3d2d2] font-normal">
              {testimonies[2].content}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Testimonies };

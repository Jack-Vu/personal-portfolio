/* eslint-disable react/no-unescaped-entities */
import { ArrowDownTrayIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="bg-[#141c27] pb-[4rem] pt-[2rem] md:pt-[8rem]">
      <div className="grid grid-cols-1 md:grid-cols-2 w-[85%] mx-auto gap-[3rem] items-center">
        <div>
          <h1 className="text-[20px] font-bold uppercase text-[#55e6a5] md-[1rem]">
            ABOUT ME
          </h1>
          <h2 className="text-[25px] md:text-[35px] lg:text-[45px] md:leading-[3rem] leading-[2rem] capitalize mb-[3rem] font-bold text-white">
            Transforming <span className="text-blue-400">Visions</span>
          </h2>
          <div className="mb-[3rem] flex items-center md:space-x-10">
            <span className="w-[100px] hidden md:block h-[5px] bg-slate-400 rounded-sm"></span>
            <p className="text-[19px] text-slate-300 w-[80%]">
              I'm a software developer with a background in healthcare and
              biotechnology. After realizing my passion for coding, I
              transitioned to software development full-time. Outside of work, I
              enjoy board games, puzzles, and powerlifting. Feel free to explore
              my projects and work experience, and don't hesitate to reach out
              if you'd like to connect.
            </p>
          </div>
          <button className="px-[2rem] hover:bg-blue-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#55e6a5] text-black flex items-centers space-x-2">
            <p>Download CV</p>
            <ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem] text-black" />
          </button>
        </div>
        <div className="lg:w-[500px] mx-auto  mt-[2rem] lg:mt-0 lg:h-[500px] md:w-[400px] md:h-[400px] w-[300px] h-[300px] relative">
          <Image
            src="/img/Profilepic2.jpg"
            fill
            className="relative z-[11] object-cover rounded-3xl"
            alt="alt profile picture"
          />
          <div className="absolute w-[100%] h-[100%] z-[10] bg-[#55e6a5] top-[-2rem] right-[-2rem] rounded-3xl"></div>
        </div>
      </div>
    </div>
  );
};

export { About };

/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Particle } from "./Particle";
import { TextEffect } from "./TextEffect";
import Image from "next/image";
import { ArrowDownTrayIcon } from "@heroicons/react/20/solid";

const Hero = () => {
  return (
    <div className="h-[88vh] bg-[url('/img/banner-bg.png')] mt-[10vh] bg-cover bg-center">
      <Particle />
      <div className="w-[85%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center">
        <div>
          <h1 className="text-[35px] md:text-[50px] text-white font-bold">
            HI, I'M <span className="text-blue-400">JACK!</span>
          </h1>
          <TextEffect />
          <p className="mt-[1.5rem] text-[20px] text-[#ffffff92]">
            Welcome to my website! Here, you'll find a showcase of my projects
            and work experience, reflecting my journey and passion for software
            development. Whether you're here to explore my work or learn more
            about my skills, I invite you to browse through and see what I've
            accomplished. If you have any questions or would like to get in
            touch, please feel free to contact me at any time. I'm always open
            to new opportunities and connections!
          </p>
          {/* <div className="mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6">
            <button className="px-[2rem] hover:bg-blue-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#55e6a5] text-black flex items-centers space-x-2">
              <p>Download CV</p>
              <ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem] text-black" />
            </button>
          </div> */}
        </div>
        <div className="w-[500px] hidden bg-[#55e6a5] relative lg:flex items-center mx-auto rounded-full h-[500px]">
          <Image
            src="/img/Profilepic1.jpg"
            alt="profile picture"
            fill
            className="object-cover rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export { Hero };

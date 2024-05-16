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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
            recusandae et ipsum, suscipit cupiditate adipisci esse minus modi
            pariatur? Mollitia suscipit tempora, dicta quas ea harum
            consequuntur neque sit voluptas.
          </p>
          <div className="mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6">
            <button className="px-[2rem] hover:bg-blue-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#55e6a5] text-black flex items-centers space-x-2">
              <p>Download CV</p>
              <ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem] text-black" />
            </button>
          </div>
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

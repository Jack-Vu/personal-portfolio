/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from "react";
import { Particle } from "./Particle";
import { TextEffect } from "./TextEffect";
import Image from "next/image";
import { ArrowDownTrayIcon } from "@heroicons/react/20/solid";
import { intro } from "../constants";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="pb-[25px] md:pb-[75px] pt-[75px] md:pt[150px] bg-[url('/assets/img/banner-bg.png')] mt-[10vh] bg-cover bg-center">
      <Particle />
      <div className="w-[85%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center">
        <div>
          <h1 className="text-[35px] md:text-[50px] text-white font-bold">
            HI, I'M <span className="text-blue-400">JACK!</span>
          </h1>
          <TextEffect />
          <p className="my-[1.5rem] text-[20px] text-[#ffffff92]">{intro}</p>
          <div className="mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6">
            <Link
              href="assets/Software_Developer_Jack_Vu.pdf"
              download={true}
              rel="noopener noreferrer"
              target="_blank"
            >
              <button className="px-[2rem] hover:bg-blue-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-blue-600 text-black flex items-centers rounded-3xl space-x-2">
                <p>Download CV</p>
                <ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem] text-black" />
              </button>
            </Link>
          </div>
        </div>
        <div className="w-[500px] hidden bg-blue-600 relative lg:flex items-center mx-auto rounded-full h-[500px]">
          <Image
            src="/assets/img/Profilepic1.jpg"
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

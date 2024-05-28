import { Bars3Icon } from "@heroicons/react/20/solid";
import Link from "next/link";
import React from "react";

interface Props {
  openNav: () => void;
}

const Navbar = ({ openNav }: Props) => {
  return (
    <div className="w-[100%] fixed z-[1000] top-0 h-[12vh] bg-[#141c27] shadow-md">
      <div className="flex items-center justify-between w-[80%] mx-auto h-[100%]">
        <h1 className="flex-[0.6] cursor-pointer text-[25px] text-white font-bold">
          J<span className="text-blue-400">V</span>
        </h1>
        <div className="nav-link">
          <Link href="#home" scroll={false}>
            HOME
          </Link>
        </div>
        <div className="nav-link">
          <Link href="#about-section" scroll={false}>
            ABOUT
          </Link>
        </div>
        <div className="nav-link">
          <Link href="#experience-section" scroll={false}>
            EXPERIENCE
          </Link>
        </div>
        <div className="nav-link">
          <Link href="#project-section" scroll={false}>
            PROJECT
          </Link>
        </div>
        <div className="nav-link">
          <Link href="#testimonies-section" scroll={false}>
            TESTIMONIES
          </Link>
        </div>
        <div className="nav-link">
          <Link href="#contact-section" scroll={false}>
            CONTACT
          </Link>
        </div>
        <div onClick={openNav}>
          <Bars3Icon className="w-[2rem] md:hidden h-[2rem] cursor-pointer text-blue-400" />
        </div>
      </div>
    </div>
  );
};

export { Navbar };

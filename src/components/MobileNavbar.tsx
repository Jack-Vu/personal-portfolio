import { XMarkIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import React from "react";

interface Props {
  nav: boolean;
  closeNav: () => void;
}

const MobileNavbar = ({ nav, closeNav }: Props) => {
  const navAnimation = nav ? "translate-x-0" : `translate-x-[-100%]`;

  return (
    <div
      className={`fixed transform ${navAnimation} transition-all duration-300 top-0 left-0 right-0 bottom-0 z-[1000000] bg-[#09101a]`}
    >
      <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center">
        <div className="nav-link">
          <Link href="/">HOME</Link>
        </div>
        <div className="nav-link">
          <Link href="#about-section">ABOUT</Link>
        </div>
        <div className="nav-link">
          <Link href="#experience-section">EXPERIENCE</Link>
        </div>
        <div className="nav-link">
          <Link href="#project-section"> PROJECT</Link>
        </div>
        <div className="nav-link">
          <Link href="#testimonies-section">TESTIMONIES</Link>
        </div>
        <div className="nav-link">
          <Link href="#contact-section">CONTACT</Link>
        </div>
      </div>
      <div
        onClick={closeNav}
        className="absolute cursor-pointer z-[10000000] top-[2rem] right-[2rem] w-[2rem] h-[2rem] text-blue-400"
      >
        <XMarkIcon />
      </div>
    </div>
  );
};

export { MobileNavbar };

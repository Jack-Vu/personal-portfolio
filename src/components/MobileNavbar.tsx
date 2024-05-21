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
      className={`fixed transform ${navAnimation} transition-all duration-300 top-0 left-0 right-0 bottom-0 z-[10000000] bg-[#09101a]`}
    >
      <div className="h-[100vh] flex flex-col items-center justify-center z-[10000000]">
        <div className="nav-link-mobile" onClick={closeNav}>
          <Link href="/" scroll={false}>
            HOME
          </Link>
        </div>
        <div className="nav-link-mobile" onClick={closeNav}>
          <Link href="#about-section" scroll={false}>
            ABOUT
          </Link>
        </div>
        <div className="nav-link-mobile" onClick={closeNav}>
          <Link href="#experience-section" scroll={false}>
            EXPERIENCE
          </Link>
        </div>
        <div className="nav-link-mobile" onClick={closeNav}>
          <Link href="#project-section" scroll={false}>
            PROJECT
          </Link>
        </div>
        <div className="nav-link-mobile" onClick={closeNav}>
          <Link href="#testimonies-section" scroll={false}>
            TESTIMONIES
          </Link>
        </div>
        <div className="nav-link-mobile" onClick={closeNav}>
          <Link href="#contact-section" scroll={false}>
            CONTACT
          </Link>
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

import {
  About,
  Experience,
  Hero,
  MobileNavbar,
  Navbar,
  Tech,
  Testimonies,
} from "@/src/components";
import { Projects } from "@/src/components/Projects";
import React, { useState } from "react";

const HomePage = () => {
  const [nav, setNav] = useState(false);

  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);

  return (
    <div className="overflow-x-hidden">
      <div>
        <MobileNavbar nav={nav} closeNav={closeNav} />
        <Navbar openNav={openNav} />
        <Hero />
        <div className="relative z-[30]">
          <About />
          <Experience />
          <Projects />
          <Tech />
          <Testimonies />
        </div>
      </div>
    </div>
  );
};

export default HomePage;

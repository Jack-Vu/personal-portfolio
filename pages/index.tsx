import {
  About,
  Experience,
  Hero,
  MobileNavbar,
  Navbar,
  Tech,
  Testimonies,
} from "@/src/components";
import Contact from "@/src/components/Contact";
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
        <div id="home">
          <Hero />
        </div>
        <div className="relative z-[30]">
          <div id="about-section">
            <About />
          </div>
          <div id="experience-section">
            <Experience />
          </div>
          <div id="project-section">
            <Projects />
          </div>
          <Tech />
          <div id="testimonies-section">
            <Testimonies />
          </div>
          <div id="contact-section">
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

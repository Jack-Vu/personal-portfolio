import { About, Hero, MobileNavbar, Navbar, Testimonies } from "@/components";
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
        Hello
        <Hero />
        <div className="relative z-[30]">
          <About />
          <Testimonies />
        </div>
      </div>
    </div>
  );
};

export default HomePage;

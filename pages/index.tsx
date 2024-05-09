import { About, Hero, MobileNavbar, Navbar } from "@/components";
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
        </div>
      </div>
    </div>
  );
};

export default HomePage;

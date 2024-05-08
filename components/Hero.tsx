import React from "react";
import { Particle } from "./Particle";

const Hero = () => {
  return (
    <div className="h-[88vh] bg-[url('/img/banner-bg.png')] bg-cover bg-center">
      <Particle />
    </div>
  );
};

export { Hero };

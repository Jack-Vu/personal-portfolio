/* eslint-disable react/no-unescaped-entities */
import {
  CodeBracketIcon,
  CommandLineIcon,
  RocketLaunchIcon,
} from "@heroicons/react/20/solid";
import React from "react";

const Testimonies = () => {
  return (
    <div className="bg-[#141c27] pb-[4rem] pt-[2rem] md:pt-[8rem]">
      <h2 className="heading">
        My <span className="text-blue-400">Testimonies</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto items-center gap-[3rem] mt-[4rem] text-white">
        <div>
          <div className="bg-blue-700 hover:scale-110 transform transition-all duration-300 hover:-rotate-6 uppercase font-semibold text-center p-[2rem]">
            <CodeBracketIcon className="w-[4rem] h-[4rem] mx-auto text-[#d3fae8]" />
            <h1 className="text-[20px] md:text-[30px] mt-[1.5rem]">Hye Lee</h1>
            <h1 className="text-[10px] md:text-[20px] mb-[1.5rem]">
              Re:boot Colleague
            </h1>
            <p className="text-[15px] text-[#d3d2d2] font-normal">
              "Jack is a dependable colleague, always ready to assist and offer
              guidance. His patience and willingness to help, even with basic
              questions, highlight his admirable demeanor. With his knowledge
              and support, he will undoubtedly contribute to the success of any
              team he joins."
            </p>
          </div>
        </div>
        <div>
          <div className="bg-blue-700 hover:scale-110 transform transition-all duration-300 uppercase font-semibold text-center p-[2rem]">
            <RocketLaunchIcon className="w-[4rem] h-[4rem] mx-auto text-[#d3fae8]" />
            <h1 className="text-[20px] md:text-[30px] mt-[1.5rem]">
              Muradil Erkin
            </h1>
            <h1 className="text-[10px] md:text-[20px] mb-[1.5rem]">
              Re:boot Instructor & CEO
            </h1>
            <p className="text-[15px] text-[#d3d2d2] font-normal">
              "Couldn't have completed class projects without all of his
              contributions and help; Jack is well on his way to being a Full
              Stack Web Developer and, furthermore, he is a teammate we all can
              count on. His dedication and hard work are truly admirable. I have
              no doubt he'll continue to excel in the future!"
            </p>
          </div>
        </div>
        <div>
          <div className="bg-blue-700 hover:scale-110 transform transition-all duration-300 hover:rotate-6 uppercase font-semibold text-center p-[2rem]">
            <CommandLineIcon className="w-[4rem] h-[4rem] mx-auto text-[#d3fae8]" />
            <h1 className="text-[20px] md:text-[30px] mt-[1.5rem]">Shin Kim</h1>
            <h1 className="text-[10px] md:text-[20px] mb-[1.5rem]">
              Re:boot Colleague
            </h1>
            <p className="text-[15px] text-[#d3d2d2] font-normal">
              "Jack's performance is consistently exceptional! It fills me with
              pride to have collaborated with him on multiple projects.
              Observing his rapid learning speed, akin to a sponge absorbing
              water, inspires me to redouble my efforts. I'm looking forward to
              seeing him achieve great things."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Testimonies };

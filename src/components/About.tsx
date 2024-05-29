/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { about } from "../constants";
import Link from "next/link";

const About = () => {
  const [profilePicture, setProfilePicture] = useState(
    "/assets/img/Profilepic2.jpg"
  );
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setProfilePicture("/assets/img/Profilepic1.jpg");
      } else {
        setProfilePicture("/assets/img/Profilepic2.jpg");
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="bg-[#141c27] pb-[4rem] pt-[2rem] md:pt-[8rem]">
      <div className="grid grid-cols-1 md:grid-cols-2 w-[85%] mx-auto gap-[3rem] items-center">
        <div>
          <h1 className="text-[20px] font-bold uppercase text-blue-400 md-[1rem]">
            ABOUT ME
          </h1>
          <h2 className="text-[25px] md:text-[35px] lg:text-[45px] md:leading-[3rem] leading-[2rem] capitalize mb-[3rem] font-bold text-white">
            Transforming <span className="text-blue-400">Visions</span>
          </h2>
          <div className="mb-[3rem] flex items-center md:space-x-10">
            <p className="text-[19px] text-slate-300 w-[80%]">{about}</p>
          </div>
          <div className="px-[2rem] text-[18px] md:text-[20px] font-bold uppercase bg-blue-600 py-[1rem] text-black flex items-center justify-start space-x-2 w-fit gap-2 rounded-3xl">
            Social Medias:
            <Link
              href={"https://www.linkedin.com/in/jack-vu-1b4358274/"}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Image
                src={"/assets/img/linkedin.svg"}
                width="41"
                height="41"
                alt="linkedin logo"
              />
            </Link>
            <Link
              href="https://github.com/Jack-Vu"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Image
                src={"/assets/img/github2.svg"}
                width="40"
                height="40"
                alt="github logo"
              />
            </Link>
          </div>
        </div>
        <div className="lg:w-[500px] mx-auto  mt-[2rem] lg:mt-0 lg:h-[500px] md:w-[400px] md:h-[400px] w-[300px] h-[300px] relative">
          <Image
            src={`${profilePicture}`}
            fill
            className="relative z-[11] object-cover rounded-3xl"
            alt="alt profile picture"
          />
        </div>
      </div>
    </div>
  );
};

export { About };

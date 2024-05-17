import React, { useEffect, useState } from "react";
import { projects } from "../constants";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

type tagsType = {
  name: string;
  color: string;
};
interface ProjectCardType {
  index: number;
  name: string;
  description: string;
  tags: tagsType[];
  image: string;
  source_code_link: string;
  website_link?: string;
}

const ProjectCard = ({
  name,
  description,
  tags,
  image,
  source_code_link,
  website_link,
}: ProjectCardType) => {
  return (
    <div className="bg-blue-600 p-5 rounded-2xl min-h-[450px] w-full">
      <div className="relative">
        <img
          src={image}
          alt="project_image"
          className="w-full h-[200px] md:h-[250px] object-cover rounded-2xl"
        />
        <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
          <div
            onClick={() => window.open(source_code_link, "_blank")}
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <img
              src="/img/github2.svg"
              alt="source code"
              className="w-12 h-12 object-contain"
            />
          </div>
        </div>
      </div>

      <div className="mt-5">
        <h3 className="text-white font-bold text-[24px]">{name}</h3>
        <p className={`mt-2 text-[16px] ${website_link ? "" : "mb-6 mt-[18px]"}`}>
          {description}
        </p>
        {website_link && (
          <>
          <span>Link: </span>
          <Link
            className="text-[15px] text-purple-400 underline"
            href={website_link}
          >
            {website_link}
          </Link>
          </>
        )}
      </div>

      <div className="mt-3 flex flex-wrap gap-1">
        {tags.map((tag) => (
          <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
            #{tag.name}
          </p>
        ))}
      </div>
    </div>
  );
};

const Projects = () => {
  const [first, setFirst] = useState(0);
  const [second, setSecond] = useState(1);
  const [third, setThird] = useState(2);

  const [viewedCards, setViewedCards] = useState([
    projects[first],
    projects[second],
    projects[third],
  ]);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1280) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleLeftClick = () => {
    setFirst((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
    setSecond((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
    setThird((prev) => (prev === 0 ? projects.length - 1 : prev - 1));

    setViewedCards((prevViewedCards) => {
      const newFirst = first === 0 ? projects.length - 1 : first - 1;
      const newSecond = second === 0 ? projects.length - 1 : second - 1;
      const newThird = third === 0 ? projects.length - 1 : third - 1;

      return [projects[newFirst], projects[newSecond], projects[newThird]];
    });
  };

  const handleRightClick = () => {
    setFirst((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
    setSecond((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
    setThird((prev) => (prev === projects.length - 1 ? 0 : prev + 1));

    setViewedCards((prevViewedCards) => {
      const newFirst = first === projects.length - 1 ? 0 : first + 1;
      const newSecond = second === projects.length - 1 ? 0 : second + 1;
      const newThird = third === projects.length - 1 ? 0 : third + 1;

      return [projects[newFirst], projects[newSecond], projects[newThird]];
    });
  };

  return (
    <div className="bg-[#141c27] pb-[4rem] pt-[2rem] md:pt-[8rem]">
      <div className="w-[85%] mx-auto gap-[3rem] items-center">
        <h1 className="text-[20px] font-bold uppercase text-[#55e6a5] md-[1rem]">
          A COLLECTION OF MY DEVELOPMENT WORK
        </h1>
        <h2 className="text-[25px] md:text-[35px] lg:text-[45px] md:leading-[3rem] leading-[2rem] capitalize mb-[3rem] font-bold text-white">
          Software <span className="text-blue-400">Projects</span>
        </h2>
        <div className="flex items-center justify-center gap-2 md:gap-16">
          <button onClick={handleLeftClick}>
            <ArrowLeftIcon className="w-5 h- 5 md:w-10 md:h-10 text-white" />
          </button>
          {viewedCards.slice(0, visibleCount).map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
          <button onClick={handleRightClick}>
            <ArrowRightIcon className="w-5 h- 5 md:w-10 md:h-10 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export { Projects };

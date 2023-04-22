import React from "react";
import { urlFor } from "../lib/client";

const Skill = ({ skill, directionLeft }) => {
  return (
    <div className="group relative flex cursor-pointer ">
      <img
        src={urlFor(skill.icon).url()}
        alt="skillImages"
        className="rounded-full border border-gray-500 object-cover w-10 h-10 md:w-24 md:h-24  filter
    group-hover:grayscale transition duration-300 ease-in-out"
      />
      <div
        className="absolute opacity-0 group-hover:opacity-80 transition 
    duration-300 ease-in-out group-hover:bg-white h-16 w-16  md:h-24 md:w-24 rounded-full z-0"
      ></div>
    </div>
  );
};

export default Skill;

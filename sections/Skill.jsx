"use client";

import React from "react";
import { urlFor } from "../lib/client";
import Image from "next/image";

const Skill = ({ skillicon, skillProgress }) => {
  return (
    <div className="group relative flex cursor-pointer ">
      {skillicon && (
        <Image
          src={urlFor(skillicon).url()}
          alt="skillImages"
          width={10}
          height={10}
          unoptimized={true}
          objectFit="contain"
          className="rounded-full border border-gray-500  w-16 h-16 md:w-24 md:h-24  filter
    group-hover:grayscale transition duration-300 object-contain ease-in-out"
        />
      )}

      <div
        className="absolute  opacity-0 group-hover:opacity-80 transition 
    duration-300 ease-in-out group-hover:bg-white h-16 w-16  md:h-24 md:w-24 rounded-full z-0"
      >
        <p className=" text-center mt-5 md:mt-[2.3rem] text-[15px] font-semibold">
          {skillProgress}%
        </p>
      </div>
    </div>
  );
};

export default Skill;

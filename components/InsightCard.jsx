"use client";

import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import Image from "next/image";
import { urlFor ,url } from "../lib/client";

const InsightCard = (props) => {
   console.log(props.certificate.name);
  return (
  <motion.div
   
    className="flex md:flex-row flex-col gap-4"
  >
    <Image
      src={urlFor(props.certificate.image).url()}
      width={100}
      height={250}
      unoptimized={true}
      alt="planet-01"
      className="md:w-[270px] w-full h-[250px] rounded-[32px] object-cover "
    />
    <div className="w-full flex justify-between items-center">
      <div className="flex-1 md:ml-[62px] flex flex-col max-w-[650px]">
        <h4 className="font-normal lg:text-[42px] text-[26px] text-white">
          {props.certificate.name}
        </h4>
        <p className="mt-[16px] font-normal lg:text-[20px] text-[14px] text-secondary-white">
          {props.certificate.description}
        </p>
      </div>
      <div
        className="lg:flex hidden items-center justify-center w-[100px] h-[100px] rounded-full bg-transparent
      border-[1px] border-white
      "
      >
        <img
          src="arrow.svg"
          alt="arrow"
          className="w-[40%] h-[40px] object-contain "
        />
      </div>
    </div>
  </motion.div>
)};

export default InsightCard;

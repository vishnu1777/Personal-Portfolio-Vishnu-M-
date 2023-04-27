import React from "react";
import { motion } from "framer-motion";
const BackgroundCircles = () => {
  return (
    <motion.div
      initial={{
        opacity: 1,
      }}
      animate={{
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{
        duration: 2.5,
      }}
      className="relative flex justify-center items-center "
    >
      <div className=" absolute border border-[#696969] rounded-full h-[200px] w-[200px] mt-52 animate-ping " />
      <div className="  border border-[#696969] rounded-full h-[300px] w-[300px] absolute mt-52 animate-ping " />
      <div className="  border border-[#696969] rounded-full h-[600px] w-[600px] absolute mt-52 animate-ping " />
      <div
        className="rounded-full border border-[#696969] opacity-20 h-[1280px] w-[1280px] absolute mt-52 
        animate-pulse"
      />
      <div />
    </motion.div>
  );
};

export default BackgroundCircles;

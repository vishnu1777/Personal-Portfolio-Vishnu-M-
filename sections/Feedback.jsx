"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import Image from "next/image";
import { useState, useEffect } from "react";
import { client } from "../lib/client";

import { fadeIn, staggerContainer, zoomIn } from "../utils/motion";

const Feedback = () => {
  const [testimony, setTestimony] = useState([]);

  useEffect(() => {
    const testimonyQuery = '*[_type == "testimonials"]';

    client.fetch(testimonyQuery).then((data) => {
      setTestimony(data);
    });
  }, []);
  console.log(testimony);
  <section className={`${styles.paddings} relative z-10 `}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row  flex-col gap-6`}
    >
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className="flex-[0.5] lg:max-w-[370px] flex justify-end flex-col gradient-05 sm:p-8 p-4
    rounded-[32px] border-[1px] border-[#6a6a6a] relative "
      >
        <div className="feedback-gradient" />
        <div>
          <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40px] leading-[36px] text-white ">
            {testimony.name}
          </h4>
          <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22px] leading-[16px] text-white ">
           {testimony.company}
          </p>
        </div>
        <p className="mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45.6px] leading-[39.6px] text-white">
         {testimony.feedback}
        </p>
      </motion.div>
      <motion.div
        variants={fadeIn("left", "tween", 0.2, 1)}
        className="relative flex-1 flex justify-center items-center"
      >
        <Image
          width={100}
          height={610}
          unoptimized={true}
          src={testimony[0].imageUrl}
          alt="planet-09"
          className="w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px] "
        />
      </motion.div>
    </motion.div>
  </section>;
};

export default Feedback;

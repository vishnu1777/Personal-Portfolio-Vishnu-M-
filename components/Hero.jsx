"use client";

import { motion } from "framer-motion";
import { useTypewriter } from "react-simple-typewriter";
import Image from "next/image";
import { BackgroundCircles } from "../sections";
import styles from "../styles";
import { myProfile } from "../assets";
import { staggerContainer, textVariant } from "../utils/motion";
const Hero = () => {
  const [text, count] = useTypewriter({
    words: [
      `Hii,The Name's Vishnu M`,
      "Full-Stack-Dev",
      "Guy-who-loves-Tech",
      "<CodeIsLove/>",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <section className={`${styles.yPaddings}   mx-auto`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <BackgroundCircles />
        <div className="flex justify-center items-center flex-col relative z-10">
          <motion.div
            variants={textVariant(1.1)}
            className="font-bold lg:text-[144px] md:text-[100px] sm:text-[60px] text-[44px] lg:leading-[158.4px] md:leading-[114.4px] sm:leading-[74.4px] leading-[64.4px] uppercase text-white"
          >
            <Image
              className="relative rounded-full h-40 w-40  mx-auto object-cover"
              src={myProfile}
              alt="my-profile"
            />
          </motion.div>

          <motion.div
            variants={textVariant(1.2)}
            className="flex mt-4 md:mt-0 flex-row justify-center items-center"
          >
            <p className="text-white lg:text-[80px] font-bold text-[30px]">
              {text} |
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
export default Hero;

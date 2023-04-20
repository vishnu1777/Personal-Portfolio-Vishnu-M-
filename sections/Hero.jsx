"use client";
import { motion } from "framer-motion";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Image from "next/image";
import BackgroundCircles from "./BackgroundCircles";
import styles from "../styles";
import { myProfile } from "../assets";
import { slideIn, staggerContainer, textVariant } from "../utils/motion";
const Hero = () => {
  const [text, count] = useTypewriter({
    words: [`Hii, The Name's Vishnu M`, "Guy-who-loves-Tech", "<CodeIsLove/>"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <section className={`${styles.yPaddings} sm:pl-16 pl-6 `}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <BackgroundCircles />
        <div className="flex justify-center items-center flex-col relative z-10">
          <motion.h1
            variants={textVariant(1.1)}
            className="font-bold lg:text-[144px] md:text-[100px] sm:text-[60px] text-[44px] lg:leading-[158.4px] md:leading-[114.4px] sm:leading-[74.4px] leading-[64.4px] uppercase text-white"
          >
            <Image
              className="relative rounded-full h-40 w-40  mx-auto object-cover"
              src={myProfile}
              alt="my-profile"
            />
          </motion.h1>
          {/* <motion.div
          variants={textVariant(1.2)}
          className="flex flex-row justify-center items-center"
        >
          <h1 className={`${styles.heroHeading}`}>Ma</h1>
          <div className={`${styles.heroDText}`} />
          <h1 className={`${styles.heroHeading}`}>Ness</h1>
        </motion.div> */}

          <motion.div
            variants={textVariant(1.2)}
            className="flex mt-4 md:mt-0 flex-row justify-center items-center"
          >
            <p className="text-white lg:text-[80px] font-bold text-[30px]">
              {text}
            </p>
          </motion.div>
        </div>
        {/* <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="relative w-full md:-mt-[20px] -mt-[12px] "
        >
          <div className="absolute w-full h-[300px]  hero-gradient rounded-tl-[140px] z-[0] -top-[30px] " />
          <img
            src="/cover.png"
            alt="cover"
            className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative " */}
        {/* /> */}
        {/* <a href="#explore"> */}
        {/* <div className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10 ">
              <img
                src="/stamp.png"
                alt="stamp"
                className="sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain "
              />
            </div> */}
        {/* </a> */}
        {/* </motion.div> */}
      </motion.div>
    </section>
  );
};
export default Hero;

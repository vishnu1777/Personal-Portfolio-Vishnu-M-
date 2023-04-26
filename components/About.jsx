"use client";

import { motion } from "framer-motion";
import { TypingText } from ".";
import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Me" textStyles="text-center" />
      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white "
      >
        <span className="font-extrabold text-white">Hii,</span> my name is
        <span className="font-extrabold text-white"> Vishnu M</span> , a
        self-taught{" "}
        <span className="font-extrabold text-white"> Full Stack</span> developer
        and student. I specialize in{" "}
        <span className="font-extrabold text-white"> MERN Stack </span>
        development and have a keen interest in
        <span className="font-extrabold text-white"> Blockchain </span>
        technology.With a year of experience in{" "}
        <span className="font-extrabold text-white"> Javascript</span>,{" "}
        <span className="font-extrabold text-white"> React</span>,{" "}
        <span className="font-extrabold text-white"> NodeJs</span>,{" "}
        <span className="font-extrabold text-white"> MongoDB</span>,I enjoy
        tackling challenging projects that require creative problem-solving.
        When I'm not coding, I stay up-to-date with industry trends and love
        reading about new technologies. Thanks for checking out my portfolio
      </motion.p>
      <motion.img
        variants={fadeIn("up", "tween", 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow-down"
        className="w-[18px] h-[28px] object-contain mt-[28px] "
      />
    </motion.div>
  </section>
);

export default About;

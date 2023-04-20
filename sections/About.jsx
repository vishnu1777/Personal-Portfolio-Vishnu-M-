"use client";
import { motion } from "framer-motion";
import { TypingText } from "../components";
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
        <span className="font-extrabold text-white"> Vishnu M</span> , a student
        who has a keen interest in{" "}
        <span className="font-extrabold text-white"> Solving Problems</span> and
        creating visually appealing{" "}
        <span className="font-extrabold text-white">Websites</span>. As a
        technology enthusiast, I loves to explore new and innovative ways to
        tackle challenges in his field of study.And on a mission to create
        impactful solutions that are both{" "}
        <span className="font-extrabold text-white"> Creative</span> and
        <span className="font-extrabold text-white"> User-friendly</span>.
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

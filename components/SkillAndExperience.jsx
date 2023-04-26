"use client";
import React from "react";
import { motion } from "framer-motion";
import { Skill } from "../sections";
import { TitleText, TypingText } from "./CustomTexts";
import StartSteps from "./StartSteps";
import styles from "../styles";
import { fadeIn, planetVariants, staggerContainer } from "../utils/motion";
const SkillAndExperience = ({ skills, experience }) => {
  return (
    <section id="skills" className={`${styles.paddings} relative z-10 `}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
      >
        <motion.div
          variants={planetVariants("left")}
          className={`flex-1 ${styles.flexCenter}`}
        >
          <div className="grid grid-cols-4  gap-5 ">
            {skills?.slice(0, skills?.length / 2).map((skill) => (
              <Skill
                key={skill?._id}
                skillicon={skill?.icon}
                skillProgress={skill?.progress}
                directionLeft={true}
              />
            ))}
            {skills
              ?.slice(skills?.length / 2, skills.length)
              .map((skill, idx) => (
                <Skill
                  key={`skill?._id-${idx}`}
                  skillicon={skill?.icon}
                  skillProgress={skill?.progress}
                  directionLeft={false}
                />
              ))}
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] flex justify-center flex-col "
        >
          <TypingText title="| Skills & Experiences" />
          <TitleText title={<>Experience</>} />

          <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px] ">
            {experience?.map((feature, i) => (
              <div key={`${feature}-${i}`}>
                {feature?.works?.map((work) => (
                  <StartSteps
                    key={`${i}+${feature}`}
                    number={i}
                    year={feature?.year}
                    name={work?.name}
                    company={work?.company}
                    desc={work?.desc}
                  />
                ))}
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default SkillAndExperience;

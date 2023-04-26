"use client";
import React, { useState } from "react";
import { TitleText, TypingText } from "./CustomTexts";
import WorkCard from "./WorkCard";
import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";
import styles from "../styles";
const Works = ({ filterWork }) => {
  const [active, setActive] = useState("world-2");
  return (
    <section className={`${styles.paddings} `}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        {" "}
        <TypingText title="| Projects" textStyles="text-center" />
        <TitleText
          title={
            <>
              My Creative{" "}
              <span className="font-extrabold text-white underline">
                Portfolio
              </span>{" "}
              <br className="md:block hidden" />
              Section
            </>
          }
          textStyles="text-center"
        />
        <div
          id="works"
          className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5"
        >
          {filterWork.map((work, i) => (
            <WorkCard
              key={work?._id}
              title={work?.title}
              imgUrl={work?.imgUrl}
              description={work?.description}
              index={i}
              projectLink={work?.projectLink}
              active={active}
              id={work?.id}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Works;

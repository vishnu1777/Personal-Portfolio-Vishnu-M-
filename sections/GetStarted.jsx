import { motion } from "framer-motion";
import { StartSteps, TitleText, TypingText } from "../components";
import styles from "../styles";
import { staggerContainer, fadeIn, planetVariants } from "../utils/motion";
import { startingFeatures } from "../constants";
import { urlFor, client } from "../lib/client";
import Skill from "./Skill";

import { useState, useEffect } from "react";

const GetStarted = () => {
  const [experience, setExperience] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const skillsQuery = '*[_type == "skills"]';
    const experienceQuery = '*[_type == "experiences"]';

    client.fetch(experienceQuery).then((data) => {
      setExperience(data);
    });

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);

  console.log(experience);

  return (
    <section className={`${styles.paddings} relative z-10 `}>
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
              <Skill key={skill?._id} skill={skill} directionLeft={true} />
            ))}
            {skills?.slice(skills?.length / 2, skills.length).map((skill) => (
              <Skill key={skill?._id} skill={skill} directionLeft={false} />
            ))}
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] flex justify-center flex-col "
        >
          <TypingText title="| A Skills None Can Reject" />
          <TitleText title={<>Skills and Experience</>} />
          <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px] ">
            {startingFeatures.map((feature, i) => (
              <>
                {feature?.works?.map((work) => (
                 
                  <StartSteps
                    key={feature}
                    year={feature?.year}
                    name={work?.name}
                    company={work?.company}
                    desc={work?.desc}
                  />
                ))}
              </>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default GetStarted;

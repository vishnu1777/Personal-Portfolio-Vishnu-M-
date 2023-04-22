import { client } from "../lib/client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ExploreCard, TitleText, TypingText } from "../components";
import styles from "../styles";
import { staggerContainer } from "../utils/motion";

const Explore = () => {
  const [active, setActive] = useState("world-2");
  const [filterWork, setFilterWork] = useState([]);

  useEffect(() => {
    const query = '*[_type == "works"]';
    client.fetch(query).then((data) => {
      setFilterWork(data);
    });
  }, []);

  return (
    <section className={`${styles.paddings}`} id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
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
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {filterWork.map((work, i) => (
            <ExploreCard
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

export default Explore;

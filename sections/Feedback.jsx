"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import Image from "next/image";
import { useState, useEffect } from "react";
import { client } from "../lib/client";
import { urlFor, url } from "../lib/client";
import { fadeIn, staggerContainer, zoomIn } from "../utils/motion";
import Testimonial from "./Testimonial";

const Feedback = () => {
  const [testimony, setTestimony] = useState([]);

  useEffect(() => {
    const testimonyQuery = '*[_type == "testimonials"]';

    client.fetch(testimonyQuery).then((data) => {
      setTestimony(data);
    });
  }, []);
  console.log(testimony);
  return (
    <section className={`${styles.paddings} relative z-10 `}>
      {testimony.map((test, idx) => {
        return (
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className={`${styles.innerWidth} mx-auto flex lg:flex-row  flex-col gap-6`}
          >
            <motion.div
              variants={fadeIn("right", "tween", 0.2, 1)}
              className="flex-[0.5] lg:max-w-[370px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6a6a6a] relative "
            >
              <Testimonial key={idx} test={test} />
            </motion.div>
            <motion.div
              variants={fadeIn("left", "tween", 0.2, 1)}
              className="relative flex-1 flex justify-center items-center"
            >
              <Image
                width={100}
                height={610}
                unoptimized={true}
                src={urlFor(test?.imageUrl).url()}
                alt="planet-09"
                className="w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px] "
              />
            </motion.div>
          </motion.div>
        );
      })}
    </section>
  );
};

export default Feedback;

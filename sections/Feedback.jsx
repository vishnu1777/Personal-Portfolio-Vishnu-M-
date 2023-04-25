"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import Image from "next/image";
import { useState, useEffect } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { client } from "../lib/client";
import { urlFor } from "../lib/client";
import { fadeIn, staggerContainer, zoomIn } from "../utils/motion";
import Testimonial from "./Testimonial";

const Feedback = () => {
  const [testimony, setTestimony] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const testimonyQuery = '*[_type == "testimonials"]';

    client.fetch(testimonyQuery).then((data) => {
      setTestimony(data);
    });
  }, []);

  return (
    <section className={`${styles.paddings} relative z-10 `}>
      {testimony.length && (
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
            <Testimonial
              currentIndex={currentIndex}
              setCurrentIndex={setCurrentIndex}
              testimonial={testimony}
            />
          </motion.div>
          <motion.div
            variants={fadeIn("left", "tween", 0.2, 1)}
            className="relative flex-1 flex justify-center items-center"
          >
            <Image
              width={100}
              height={610}
              unoptimized={true}
              src={urlFor(testimony[currentIndex]?.imageUrl)?.url()}
              alt="planet-09"
              className="w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px] "
            />
          </motion.div>
        </motion.div>
      )}

      <div className="flex justify-center  items-center mt-4">
        <div
          className="flex justify-center text-[#25618b] hover:text-white hover:bg-[#25618b] bg-white items-center w-[50px] h-[50px] rounded-full m-4 transition-all ease-in-out  duration-[0.3s]"
          onClick={() =>
            handleClick(
              currentIndex === 0 ? testimony.length - 1 : currentIndex - 1
            )
          }
        >
          <HiChevronLeft className="w-[20px] h-[20px] " />
        </div>
        <div
          className="flex justify-center text-[#25618b] hover:text-white hover:bg-[#25618b] bg-white items-center w-[50px] h-[50px] rounded-full m-4 transition-all ease-in-out  duration-[0.3s]"
          onClick={() =>
            handleClick(
              currentIndex === testimony.length - 1 ? 0 : currentIndex + 1
            )
          }
        >
          <HiChevronRight className="w-[20px] h-[20px]" />
        </div>
      </div>
    </section>
  );
};

export default Feedback;

"use client";
import { motion } from "framer-motion";
import styles from "../styles";
import Image from "next/image";
import { useState, useEffect } from "react";
import { client } from "../lib/client";

const Testimonial = ({ testimonial, currentIndex, setCurrentIndex }) => {
  return (
    <section>
      <div className="feedback-gradient" />
      <div>
        <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40px] leading-[36px] text-white ">
          {testimonial[currentIndex]?.name}
        </h4>
        <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22px] leading-[16px] text-white ">
          {testimonial[currentIndex]?.company}
        </p>
      </div>
      <p className="mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45.6px] leading-[39.6px] text-white">
        {testimonial[currentIndex]?.feedback}
      </p>
    </section>
  );
};

export default Testimonial;

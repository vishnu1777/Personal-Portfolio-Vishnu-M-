"use client";
import { useState,useEffect } from "react";
import { motion } from "framer-motion";
import { InsightCard, TitleText, TypingText } from "../components";
import styles from "../styles";
import { staggerContainer } from "../utils/motion";
import { insights } from "../constants";
import { client } from "../lib/client";
const Insights = () => {

  const [certificates, setCertificates] = useState([]);

  useEffect(() => {

    const certificateQuery = '*[_type == "certificates"]';

    client.fetch(certificateQuery).then((data) => {
      setCertificates(data);
    });

  }, [])
  
  console.log(certificates);
   return (
  <section className={`${styles.paddings} relative z-10 `}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex  flex-col`}
    >
      <TypingText title="| Proof of work" textStyles="text-center" />
      <TitleText title="Certifications" textStyles="text-center" />
      <div className="mt-[50px] flex flex-col gap-[30px]">
        {certificates.map((certificate, i) => (
          <InsightCard  certificate={certificate} />
        ))}
      </div>
    </motion.div>
  </section>
)};

export default Insights;

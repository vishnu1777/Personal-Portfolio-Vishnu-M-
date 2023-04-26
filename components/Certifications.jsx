"use client";
import { motion } from "framer-motion";
import { CertificateCard, TitleText, TypingText } from ".";
import styles from "../styles";
import { staggerContainer } from "../utils/motion";

const Certifications = ({ certificates }) => {
  return (
    <section id="certificates" className={`${styles.paddings} relative z-10 `}>
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
          {certificates?.map((certificate, i) => (
            <CertificateCard
              key={`${certificate?.name}-${i}`}
              certificateImage={certificate?.image}
              certificateName={certificate?.name}
              certificateDesc={certificate?.description}
              certificateLink={certificate?.link}
              index={i}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Certifications;

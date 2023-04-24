"use client";

import styles from "../styles";
const StartSteps = ({ name, desc, number }) => (
  <div className={`${styles.flexCenter}   flex-row`}>
    <div
      className={`${styles.flexCenter}   w-[200px]  h-[70px] rounded-[24px] bg-[#323f5d]`}
    >
      <p className="font-bold text-[20px]   text-white">0{number + 1}</p>
    </div>
    <div className="w-[550px] ">
      <p className="flex-1  ml-[30px] font-bold text-[18px] text-[#B0B0B0] leading-[32px]">
        {name}
      </p>
      <p className="flex-1 ml-[30px] font-normal text-[18px] text-[#B0B0B0] leading-[32px]">
        {desc}
      </p>
    </div>
  </div>
);

export default StartSteps;

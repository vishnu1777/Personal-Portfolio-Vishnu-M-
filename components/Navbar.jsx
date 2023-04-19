"use client";
import { motion } from "framer-motion";
import styles from "../styles";
import { navVariants } from "../utils/motion";
import { useState } from "react";
import Link from "next/link";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative`}
    >
      <div className="absolute w-[50%] inset-0 gradient-01" />
      <div
        className={`${styles.innerWidth} mx-auto flex  justify-between gap-8`}
      >
        {/* <img
        src="/search.svg"
        alt="search"
        className="w-[24px] h-[24px] object-contain "
      /> */}
        <h2 className="font-extrabold text-24px leading-30px text-white">
          Portfolio
        </h2>
        <div className="hidden md:flex">
          <ul className=" md:flex gap-4 font-extrabold text-24px leading-30px text-white">
            <li className="py-1 px-2 cursor-pointer">
              <Link href="/">Home</Link>
            </li>
            <li className="py-1 px-2 cursor-pointer">
              <Link href="#about">About</Link>
            </li>
            <li className="py-1 px-2 cursor-pointer">
              <Link href="#works">Works</Link>
            </li>
            <li className="py-1 px-2 cursor-pointer">
              <Link href="#skills">Skills</Link>
            </li>
            <li className="py-1 px-2 cursor-pointer">
              <Link href="#contact">Contact</Link>
            </li>
          </ul>
        </div>
        <img
          src={toggle ? "/menu.svg" : "/menu.svg"}
          alt="menu"
          onClick={() => setToggle((prev) => !prev)}
          className="w-[24px] h-[24px] object-contain md:hidden flex"
        />
      </div>
    </motion.nav>
  );
};

export default Navbar;

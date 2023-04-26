"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";
import styles from "../styles";
import { navVariants } from "../utils/motion";
import { close, menu } from "../assets";
import { useState } from "react";
import Link from "next/link";
const Navbar = () => {
  const router = useRouter();
  const [toggle, setToggle] = useState(false);
  return (
    <motion.nav
      id="home"
      variants={navVariants}
      initial="hidden"
      // viewport={{ once: true }}
      whileInView="show"
      className={`${styles.xPaddings} py-6 relative mt-6  `}
    >
      <div className="absolute w-[50%]  inset-0 gradient-01" />

      <div
        className={`${styles.innerWidth} mx-auto flex  justify-between gap-8`}
      >
        <h2 className="font-extrabold text-24px leading-30px text-white">
          Portfolio
        </h2>
        <div className="hidden md:flex  z-50">
          <ul className=" md:flex gap-4 font-extrabold  text-24px leading-30px text-white">
            <li
              className="py-1 px-2  cursor-pointer "
              onClick={() => router.push("/#")}
            >
              <a href="#home">Home</a>
            </li>

            <li className="py-1 px-2 cursor-pointer">
              <a href="#skills" legacyBehavior>
                Skils
              </a>
            </li>
            <li className="py-1 px-2 cursor-pointer">
              <a href="#certificates">Certificates</a>
            </li>

            <li className="py-1 px-2 cursor-pointer">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        <div
          onClick={() => setToggle((prev) => !prev)}
          className="sm:hidden flex flex-1 justify-end items-center"
        >
          <Image
            src={toggle ? close : menu}
            alt="menu-bar"
            height="28px"
            width="28px"
            className="z-20"
            objectFit="contain"
          />
          <div
            className={`${
              toggle ? "flex" : "hidden"
            } p-6 bg-black-gradient z-40 overflow-hidden absolute top-[5rem] right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
          >
            <ul className="list-none justify-end items-center flex-1 flex flex-col">
              {["Home", "Skills", "Certificates", "Contact"].map(
                (navLink, idx) => (
                  <li
                    key={navLink + idx}
                    className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${
                      idx == 5 - 1 ? "mb-0" : "mb-4"
                    }`}
                  >
                    <a href={`${"#" + navLink.toLowerCase()}`}>{navLink}</a>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;

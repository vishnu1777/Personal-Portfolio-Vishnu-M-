"use client";

import { motion } from "framer-motion";
import { socials } from "../constants";
import React, { useState } from "react";
import { client } from "../lib/client";
import styles from "../styles";
import Image from "next/image";
import { emails, mobile } from "../assets";
import { footerVariants } from "../utils/motion";

const Footer = () => {
  // Other content
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;
  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);
    const contact = {
      _type: "contact",
      name: name,
      email: email,
      message: message,
    };

    client.create(contact).then(() => {
      setLoading(false);
      setIsFormSubmitted(true);
    });
  };
  // ends here
  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.paddings} py-8 relative`}
    >
      <div className="footer-gradient" />
      <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
        <div className="flex items-center justify-between flex-wrap gap-5">
          <h4 className="font-bold md:text-[64px] text-[44px] text-white">
            Enter The MetaVerse
          </h4>
          <button
            type="button"
            className="flex items-center h-fit py-4 px-6 bg-[#25618b] rounded-[32px] gap-[12px]"
          >
            <Image
              src="/headset.svg"
              alt="headset"
              width="24"
              height="24"
              className="w-[24px] h-[24px] object-contain "
            />
            <span className="font-normal text-[16px] text-white uppercase">
              Enter Metaverse
            </span>
          </button>
        </div>

        {/* Here goes the form from my first portfolio */}
        <div className="flex-1 w-full flex flex-col max-w-5xl mx-auto">
          <h2 className="text-center text-white text-3xl font-semibold">
            Take a coffee and chat with me
          </h2>
          {/* cards */}
          <div className="flex justify-evenly items-center flex-wrap w-[60%] mt-[4rem] mx-auto  mb-[2rem] md:w-full">
            {/* card  */}
            <div className="min-w-[290px]  hover:shadow-md  hover:scale-110 flex flex-row justify-start items-center my-4 mx-0 p-4 rounded-[10px] cursor-pointer bg-[#fef4f5] transition-all ease-in-out duration-[0.3s]">
              <Image
                height="40"
                width="40"
                className="w-[40px] h-[40px] mx-[0.7rem]"
                src={emails}
                alt="email"
              />
              <a href="mailto:vappu5429@gmail.com" className=" font-extrabold">
                vappu5429@gmail.com
              </a>
            </div>
            {/* card */}
            <div className="min-w-[290px] hover:shadow-md  hover:scale-110 flex flex-row justify-start items-center my-4 mx-0 p-4 rounded-[10px] cursor-pointer bg-[#fef4f5] transition-all ease-in-out duration-[0.3s]">
              <Image
                height="40"
                width="40"
                className="w-[40px] h-[40px] mx-[0.7rem]"
                src={mobile}
                alt="mobile"
              />
              <a href="tel:+91 8296574053" className="font-extrabold">
                +91 8296574053
              </a>
            </div>
          </div>
          {/* finsihed cards */}

          {!isFormSubmitted ? (
            <div className="w-[60%]  flex-col my-4 mx-8 flex items-center justify-center">
              <div className="w-full  my-3 mx-0 rounded-[10px] cursor-pointer transition-all ease-in-out duration-[0.3s] ">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  name="name"
                  onChange={handleChangeInput}
                  className="w-full p-4 border-none rounded-lg outline-none"
                />
              </div>
              <div className="flex items-center justify-center w-full my-3 rounded-[10px] cursor-pointer bg-[#edf2f8] transition-all ease-in-out duration-[0.3s]">
                <input
                  type="text"
                  placeholder="Your email"
                  value={email}
                  name="email"
                  onChange={handleChangeInput}
                  className="text-left text-[#6b7688] text-xl outline-none"
                />
              </div>
              <div>
                <textarea
                  className="p-text"
                  placeholder="Your message"
                  value={message}
                  name="message"
                  onChange={handleChangeInput}
                ></textarea>
              </div>
              <button type="button" onClick={handleSubmit} className="p-text">
                {loading ? "Sending" : "Send message"}
              </button>
            </div>
          ) : (
            <div>
              <h3 className="head-text">Thank You For Getting In Touch</h3>
            </div>
          )}
        </div>
        {/* here the form ends */}
        <div className="flex flex-col">
          <div className="mb-[50px] h-[2px] bg-white opacity-10 " />
          <div className="flex items-center justify-between flex-wrap gap-4">
            <h4 className="font-extrabold text-[24px] text-white ">
              MetaVerses
            </h4>
            <p className="font-normal text-[14px] text-white opacity-50">
              Copyright @ 2022 - 2023 Metaverse. All rights reserved.
            </p>
            <div className="flex gap-4">
              {socials.map((social) => (
                <img
                  key={social.name}
                  src={social.url}
                  alt={social.name}
                  className="w-[24px] h-[24px] object-contain cursor-pointer "
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};
export default Footer;

import Link from "next/link";
import React from "react";

const NavigationDots = ({ active }) => {
  return (
    <div className="hidden md:flex justify-center items-center flex-col p-4  ">
      {["home", "about", "works", "skills", "testimonial", "contact"].map(
        (item, i) => (
          <Link
            href={`${item == "home" ? "/" : "#" + item}`}
            key={item + i}
            className="w-5 h-5 rounded-full bg-[#cbcbcb] m-2 transition lg:w-3 lg:h-3 ease-in-out duration-[0.2s] hover:bg-white"
            style={active === item ? { backgroundColor: "#313BAC" } : {}}
          />
        )
      )}
    </div>
  );
};

export default NavigationDots;

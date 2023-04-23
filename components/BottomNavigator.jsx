"use client";

import { myProfile } from "../assets";
import Link from "next/link";
import Image from "next/image";

const BottomNavigator = () => {
  return (
    <Link href="/">
      <footer className="sticky bottom-5 w-full cursor-pointer">
        <div className="flex items-center justify-center">
          <Image
            height={20}
            unoptimized={true}
            width={20}
            className="h-10 w-10 md:h-14 md:w-14 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
            src={myProfile}
            alt="footer-image"
          />
        </div>
      </footer>
    </Link>
  );
};

export default BottomNavigator;

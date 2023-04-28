"use client";

import { MdKeyboardDoubleArrowUp } from "react-icons/md";

const BottomNavigator = ({ location }) => {
  return (
    <a href={`#${location}`}>
      <footer className="sticky z-10 bottom-5 w-full cursor-pointer">
        <div className="flex items-center justify-center">
          <MdKeyboardDoubleArrowUp className="h-10 w-10 text-white md:h-12 md:w-12 rounded-full filter  opacity-50 hover:opacity-100 cursor-pointer" />
        </div>
      </footer>
    </a>
  );
};

export default BottomNavigator;

import React from "react";
import { NavigationDots, SocialMedia } from "../components";

const AppWrap = (Component, idName, classNames) =>
  function HOC() {
    return (
      <div
        id={idName}
        className={`w-full min-h-[100vh] flex flex-row ${classNames}`}
      >
        <Component />

        <NavigationDots active={idName} />
      </div>
    );
  };

export default AppWrap;

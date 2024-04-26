import React from "react";
import Logo from "./Logo";
import Categories from "./Categories";

const LeftSideBar = () => {
  return (
    <div className="fixed top-[0px] flex flex-col gap-3 desktop:gap-[12px]  desktop-l:max-w-[236px] pb-5 desktop:pb-3 laptop:pb-2 max-h-full">
      <Logo />
      <Categories />
    </div>
  );
};

export default LeftSideBar;

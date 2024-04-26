import React from "react";
import Cart from "./Cart";
import Button from "../../UI/Button";

const RightSideBar = () => {
  return (
    <div className="py-5 desktop:py-3 laptop:py-2 flex flex-col fixed z-[1] gap-3  desktop:gap-[12px] max-w-[416px] desktop-l:max-w-[336px] max-h-screen w-full  top-[0px]">
      <Button size="m" theme="secondary">
        Войти
      </Button>
      <Cart />
    </div>
  );
};

export default RightSideBar;

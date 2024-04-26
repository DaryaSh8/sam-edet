import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="h-[80px] desktop:h-[64px] bg-color-2 pt-[37px] desktop:pt-[25px] pb-3 pl-3 rounded-b-2 ">
      <Link to="/">
        <img src="/images/logo.svg" alt="Самокат" width={153} height={23} />
      </Link>
    </div>
  );
};

export default Logo;

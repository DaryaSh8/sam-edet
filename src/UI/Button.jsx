import React from "react";

const Button = ({
  size = "s",
  theme = "default",
  disabled,
  children,
  ...args
}) => {
  const className = [];
  if (size === "s") {
    className.push("w-fit h-[36px] rounded-5 px-3");
  }
  if (size === "m") {
    className.push("rounded-[56px] w-full h-[56px] px-5");
  }

  if (theme === "default") {
    className.push("bg-color-1 text-color-4");
  }
  if (theme === "primary") {
    className.push("bg-color-3 text-color-3");
  }
  if (theme === "secondary") {
    className.push("bg-color-2 text-color-1");
  }

  if (disabled) {
    className.push(" opacity-[0.6]");
  }

  return (
    <button
      disabled={disabled}
      {...args}
      className={
        "relative max-w-full overflow-hidden  rounded-4 " + className.join(" ")
      }
    >
      {children}
    </button>
    // <div className="w-f"></div>
  );
};

export default Button;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementItemCount,
  incrementItemCount,
  selectCartProductCount,
} from "../../features/cartSlice";

const ProductCounter = ({
  size = "s",
  theme = "default",
  children,
  product,
}) => {
  const productCartCount = useSelector((state) =>
    selectCartProductCount(state, product.id),
  );
  const canIncrement = product.quantity > productCartCount;
  const showDecrement = productCartCount > 0;
  const dispatch = useDispatch();
  const className = [];
  let incrementButtonClassName = ["cursor-pointer"];

  if (size === "s") {
    className.push(" h-[32px] py-[7px] px-[12px]");
  }
  if (size === "m") {
    className.push("h-[56px] w-full gap-x-[6px]");
  }

  if (theme === "default") {
    className.push("bg-color-1 text-color-5");
  }
  if (theme === "primary") {
    className.push("bg-color-3 text-color-3");
  }
  if (theme === "secondery") {
    className.push("text-color-6 bg-color-1");
  }

  if (!canIncrement) {
    incrementButtonClassName = ["cursor-not-allowed opacity-[0.3]"];
  }

  return (
    <div
      className={
        "inline-flex justify-center items-center rounded-5 cursor-pointer select-none " +
        className.join(" ")
      }
      onClick={(e) => {
        canIncrement && dispatch(incrementItemCount(product));
        e.stopPropagation();
        e.preventDefault();
      }}
    >
      {showDecrement && (
        <div
          onClick={(e) => {
            dispatch(decrementItemCount(product.id));
            e.stopPropagation();
            e.preventDefault();
          }}
          className="flex items-center justify-center w-[32px] h-full cursor-pointer"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="2"
              y="13"
              width="2"
              height="20"
              rx="1"
              transform="rotate(-90 2 13)"
              fill="currentColor"
            ></rect>
          </svg>
        </div>
      )}

      <div className="flex flex-col items-center justify-center">
        {children}
      </div>

      <div
        className={
          "flex items-center justify-center w-[32px] h-full " +
          incrementButtonClassName.join(" ")
        }
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.0625 2.9375C11.0625 2.41973 11.4822 2 12 2C12.5178 2 12.9375 2.41973 12.9375 2.9375V8.25V9.4375C12.9375 10.335 13.665 11.0625 14.5625 11.0625H15.75C15.7502 11.0625 15.7504 11.0625 15.7506 11.0625H21.0625C21.5803 11.0625 22 11.4822 22 12C22 12.5178 21.5803 12.9375 21.0625 12.9375H15.7513C15.7508 12.9375 15.7504 12.9375 15.75 12.9375H14.5625C13.665 12.9375 12.9375 13.665 12.9375 14.5625V15.75V21.0625C12.9375 21.5803 12.5178 22 12 22C11.4822 22 11.0625 21.5803 11.0625 21.0625V15.75V14.5625C11.0625 13.665 10.335 12.9375 9.4375 12.9375H8.25C8.24973 12.9375 8.24945 12.9375 8.24918 12.9375H2.9375C2.41973 12.9375 2 12.5178 2 12C2 11.4822 2.41973 11.0625 2.9375 11.0625H8.25H9.4375C9.43778 11.0625 9.43806 11.0625 9.43834 11.0625C10.3354 11.062 11.0625 10.3347 11.0625 9.4375V8.25V2.9375Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default ProductCounter;

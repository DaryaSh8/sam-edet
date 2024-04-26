import { useSelector } from "react-redux";
import { selectCartProductCount } from "../../features/cartSlice";
import ProductCounter from "./ProductCounter";
import React from "react";
import { Link } from "react-router-dom";

export const ProductCard = ({ product }) => {
  const productCount = useSelector((state) =>
    selectCartProductCount(state, product.id),
  );
  return (
    <Link
      to={`/product/${product.id}`}
      key={product.id}
      className="flex flex-col"
    >
      <div className="relative pb-[100%] overflow-hidden bg-color-1 rounded-[18px] flex flex-col">
        <img
          src={product.media[0]?.url}
          alt={product.name}
          className="absolute w-full h-full inset-[0]"
        />
        {productCount > 0 ? (
          <div className="absolute inset-[0] flex flex-col justify-center items-center text-color-3 text-h1 bg-[#4040404c]">
            {productCount}
            {productCount === product.quantity ? (
              <span className="text-h4">Больше нет</span>
            ) : undefined}
          </div>
        ) : undefined}
      </div>
      <div className="flex flex-col flex-grow justify-between">
        <div className="flex-grow  ">
          <div className="leading-[13px] pt-[6px] text-ellipsis line-clamp-2">
            <span className="text-body-2 text-color-4">{product.name}</span>
          </div>
          <span className="text-color-2 text-body-2 ">
            {product.specification}
          </span>
        </div>
        <div className="mt-[6px]">
          <ProductCounter
            product={product}
            theme={productCount > 0 ? "primary" : "default"}
          >
            <span className="whitespace-nowrap">
              {product.prices.current / 100} ₽
            </span>
          </ProductCounter>
        </div>
      </div>
    </Link>
  );
};

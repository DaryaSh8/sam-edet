import React from "react";
import Button from "../../UI/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  removeCartItem,
  selectCartProducts,
  selectCartTotalSum,
} from "../../features/cartSlice";
import ProductCounter from "../products/ProductCounter";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartProducts = useSelector(selectCartProducts);
  const total = useSelector(selectCartTotalSum);

  return (
    <div className="flex flex-col rounded-4 bg-color-2 p-3 max-h-[900px] min-h-[650px] relative">
      {cartProducts.length ? (
        <>
          <div className="flex-grow pb-[170px] overflow-auto scroll-hide">
            {cartProducts.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
        </>
      ) : (
        <div className="flex justify-center flex-col whitespace-pre-wrap text-center flex-grow">
          <span className="text-body-1 text-color-2 font-bold">
            Соберите корзину, а мы всё быстро привезём
          </span>
        </div>
      )}

      <div
        style={{
          background:
            "linear-gradient(180deg,hsla(0,0%,100%,0) 7.81%,#fff 33.85%)",
        }}
        className="absolute right-[0] bottom-[0] left-[0] pt-[86px] px-3 pb-3 rounded-b-4"
      >
        {cartProducts.length ? (
          <div className="flex flex-col items-center h-[50px] mb-[16px] ">
            <span className="text-color-2 mb-[4px] text-body-3">Итого:</span>
            <span className="text-h1 ">{total / 100} ₽</span>
          </div>
        ) : undefined}
        <Button disabled={cartProducts.length < 1} size="m" theme="primary">
          {cartProducts.length ? "Продолжить" : "Заказ от 100 ₽"}
        </Button>
      </div>
    </div>
  );
};

export default Cart;

export const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <>
      <Link to={`/product/${item.id}`} key={item.id} className="">
        <div className="border-b-color-1 border-b-[1px] py-[12px] flex relative">
          <div className="w-[83px] h-[83px] flex-shrink-0 overflow-hidden bg-color-1 rounded-[10px] relative">
            <img
              src={item.media[0]?.url}
              alt={item.name}
              className="absolute w-full h-full inset-[0]"
            />
          </div>

          <div className="flex flex-col justify-between w-full ml-[6px]">
            <div className="line-clamp-2 pr-[56px] text-color-4 text-body-3 ">
              {item.name}
            </div>
            <div className="flex items-center justify-between ">
              <ProductCounter theme="secondery" product={item}>
                {item.count}
              </ProductCounter>
              <div className="text-body-1">{item.prices.current / 100} ₽</div>
            </div>
          </div>

          <div
            className="h-[16px] absolute top-[12px] right-[0px] text-color-4 cursor-pointer"
            onClick={() => dispatch(removeCartItem(item.id))}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.29289 3.29289C3.68342 2.90237 4.31658 2.90237 4.70711 3.29289L5.70685 4.29263C5.70693 4.29272 5.70676 4.29255 5.70685 4.29263L7.43431 6.0201C7.43452 6.0203 7.43411 6.0199 7.43431 6.0201C7.74678 6.33192 8.25347 6.33232 8.56569 6.0201L10.2929 4.29289C10.293 4.29281 10.2928 4.29298 10.2929 4.29289L11.2929 3.29289C11.6834 2.90237 12.3166 2.90237 12.7071 3.29289C13.0976 3.68342 13.0976 4.31658 12.7071 4.70711L9.9799 7.43431C9.97974 7.43448 9.98006 7.43415 9.9799 7.43431C9.66816 7.74658 9.66764 8.25282 9.97933 8.56512C9.97952 8.56531 9.97914 8.56493 9.97933 8.56512L12.7071 11.2929C13.0976 11.6834 13.0976 12.3166 12.7071 12.7071C12.3166 13.0976 11.6834 13.0976 11.2929 12.7071L10.2937 11.7079C10.2934 11.7076 10.2931 11.7074 10.2929 11.7071L8.56569 9.9799C8.25346 9.66767 7.74736 9.66748 7.43489 9.97932C7.4347 9.97951 7.43509 9.97913 7.43489 9.97932L4.70711 12.7071C4.31658 13.0976 3.68342 13.0976 3.29289 12.7071C2.90237 12.3166 2.90237 11.6834 3.29289 11.2929L4.2922 10.2936C4.29243 10.2934 4.29197 10.2938 4.2922 10.2936L6.0201 8.56569C6.33252 8.25327 6.33252 7.74673 6.0201 7.43431L3.29289 4.70711C2.90237 4.31658 2.90237 3.68342 3.29289 3.29289Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </div>
      </Link>
    </>
  );
};

import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../features/productsApi";
import Modal from "../UI/Modal";
import ProductCounter from "../components/products/ProductCounter";
import { useSelector } from "react-redux";
import { selectCartProductCount } from "../features/cartSlice";

const Product = () => {
  const navigate = useNavigate();

  const { productId } = useParams();
  const { data: product } = useGetProductByIdQuery(productId);
  const count = useSelector((state) =>
    selectCartProductCount(state, productId),
  );

  return (
    <>
      {product && (
        <Modal
          width="978px"
          onClose={() => {
            navigate(-1);
          }}
        >
          <div className=" flex gap-5 h-full overflow-hidden">
            <div className="flex flex-col overflow-autoe flex-grow flex-shrink-0 basis-[350px] pt-5 gap-6 scroll-smooth scroll-hide">
              <div className="relative flex-shrink-0 w-[474px] h-[474px] overflow-hidden rounded-3">
                <div className="relative w-full h-full flex-shrink-0 overflow-hidden bg-color-1 ">
                  <img
                    src={product.media[0]?.url}
                    alt={product.name}
                    className="absolute w-full h-full inset-[0px] "
                  />
                </div>
              </div>
              <div>
                <span className="pb-5 text-body-4 ">Что ещё пригодится</span>
                <div>какие-то рекомендации</div>
              </div>
            </div>

            <div className="flex flex-col flex-shrink-[1] flex-grow-[1] basis-[50%] pt-5 overflow-auto  scroll-smooth scroll-hide">
              <div className="pt-[6px] pr-[45px] pb-4">
                <h1 className="text-h3 align-baseline">{product.name}</h1>
                <span className="text-h3 text-color-2 align-baseline ">
                  {product.specification}
                </span>
                <ul className="flex flex-col gap-1 pt-3">
                  {/*{product.highlights.map((item, index) => (*/}
                  {/*  <li*/}
                  {/*    key={index}*/}
                  {/*    className="relative flex items-center pl-[8px] text-color-4 text-body-2"*/}
                  {/*  >*/}
                  {/*    {item}*/}
                  {/*  </li>*/}
                  {/*))}*/}
                </ul>
              </div>
              <div className="border-t-[1px] border-color-1 py-3 ">
                <span className="text-body-2 text-color-4 ">
                  {product.description}
                </span>
              </div>
              <div className="border-t-[1px] border-color-1 py-3 flex flex-col gap-[8px]">
                <span className="text-color-2 text-body-2 ">В 100 граммах</span>
                <div className="flex gap-[8px] ">
                  <div className="flex flex-col basis-[25%]">
                    <span className="text-color-4 text-h4">
                      {product.attributes.kilocalories}
                    </span>
                    <span className="text-color-2 text-body-2 ">Ккал</span>
                  </div>
                  <div className="flex flex-col basis-[25%]">
                    <span className="text-color-4 text-h4">
                      {product.attributes.protein}
                    </span>
                    <span className="text-color-2 text-body-2 ">Белки</span>
                  </div>
                  <div className="flex flex-col basis-[25%]">
                    <span className="text-color-4 text-h4">
                      {product.attributes.fats}
                    </span>
                    <span className="text-color-2 text-body-2 ">Жиры</span>
                  </div>
                  <div className="flex flex-col basis-[25%]">
                    <span className="text-color-4 text-h4">
                      {product.attributes.carbohydrates}
                    </span>
                    <span className="text-color-2 text-body-2 ">Углеводы</span>
                  </div>
                </div>
              </div>
              <div className="pt-3 border-t-[1px] border-color-1 ">
                <div className="pb-3 flex flex-col gap-[6px] ">
                  <span className="text-color-2 text-body-2 ">Состав</span>
                  <span className="text-color-4 text-body-2 ">
                    {product.attributes.ingredients}
                  </span>
                </div>
                <div className="pb-3 flex flex-col gap-[6px] ">
                  <span className="text-color-2 text-body-2 ">
                    Срок хранения
                  </span>
                  <span className="text-color-4 text-body-2 ">
                    {product.attributes.shelfLife} дней
                  </span>
                </div>
                <div className="pb-3 flex flex-col gap-[6px] ">
                  <span className="text-color-2 text-body-2 ">
                    Условия хранения
                  </span>
                  <span className="text-color-4 text-body-2 ">
                    {product.attributes.storageConditions}
                  </span>
                </div>
                <div className="pb-3 flex flex-col gap-[6px] ">
                  <span className="text-color-2 text-body-2 ">
                    Производитель
                  </span>
                  <span className="text-color-4 text-body-2 ">
                    {product.attributes.manufacturer}
                  </span>
                </div>
              </div>
              <div className="flex-grow-[1]"></div>
              <div
                className="sticky pt-7 bottom-[0] pb-[32px]"
                style={{
                  background:
                    "linear-gradient(180deg,hsla(0,0%,100%,0) 4.55%,#fff 41.83%)",
                }}
              >
                <ProductCounter product={product} theme="primary" size="m">
                  <span className="text-body-1">
                    {" "}
                    {count > 0 ? count + " × " : ""}
                    {product.prices.current / 100} ₽
                  </span>
                  {count === product.quantity ? (
                    <span className="text-body-3 text-color-3 opacity-[0.6]">
                      Больше нет
                    </span>
                  ) : undefined}
                </ProductCounter>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default Product;

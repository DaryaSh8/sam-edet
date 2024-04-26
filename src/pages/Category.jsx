import React from "react";
import { ProductCard } from "../components/products/ProductCard";
import { useGetCategoryByIdQuery } from "../features/categoriesApi";
import { useParams } from "react-router-dom";
import { useGetProductsByCategoryIdQuery } from "../features/productsApi";
import categories from "../components/leftSideBar/Categories";

const Category = () => {
  const { categoryId } = useParams();
  const { data: category } = useGetCategoryByIdQuery(categoryId);
  return (
    <>
      {category && (
        <div>
          <h1 className="mb-4 text-color-1 text-h2">{category.name}</h1>
          {category.children.map((item) => (
            <SubCategory key={item.id} category={item} />
          ))}
        </div>
      )}
    </>
  );
};

export const SubCategory = ({ category }) => {
  const { data: products = [] } = useGetProductsByCategoryIdQuery(category.id);
  return (
    <div className=" mb-[40px]">
      <h2 className="mb-4 text-color-1 text-h2">{category.name}</h2>
      <div className="grid grid-cols-5 desktop-l:grid-cols-4 desktop:grid-cols-3 tablet:grid-cols-2 gap-y-4 gap-x-[8px] max-w-full">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Category;

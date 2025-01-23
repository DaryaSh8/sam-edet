import React from "react";
import { ProductCard } from "../products/ProductCard";
import { useSelector } from "react-redux";
import { useSearchProductsQuery } from "../../features/productsApi";
import { selectSearchTerm } from "../../features/searchSlice";

const SearchScreen = () => {
  const searchTerm = useSelector(selectSearchTerm);
  const { data: searchProducts = [] } = useSearchProductsQuery(searchTerm);

  return (
    <>
      {searchProducts.length ? (
        <div>
          <div className="grid grid-cols-5 desktop-l:grid-cols-4 desktop:grid-cols-3 tablet:grid-cols-2 gap-y-4 gap-x-[8px] max-w-full">
            {searchProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center text-color-4 text-h4 pt-[392px] pb-[120px]">
          Ничего такого не нашлось
        </div>
      )}
    </>
  );
};

export default SearchScreen;

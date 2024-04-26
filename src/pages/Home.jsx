import React from "react";
import { useGetCategoriesQuery } from "../features/categoriesApi";
import { Link } from "react-router-dom";

const Home = () => {
  const { data: categories = [] } = useGetCategoriesQuery();

  return (
    <div className="flex flex-col gap-7">
      {categories.map((category) => (
        <div key={category.name} className="">
          <h2 className="text-h2 mb-4">{category.name}</h2>
          <div className="grid grid-cols-6 desktop-l:grid-cols-5 desktop:grid-cols-4 laptop:grid-cols-3 gap-[8px] max-w-full ">
            {category.items.map((child) => (
              <Link to={`/category/${child.id}`} key={child.name}>
                <div className="w-full h-f overflow-hidden rounded-[14px] bg-color-1 relative">
                  <div className="pb-[133%] relative">
                    <img
                      alt={child.name}
                      src={child.image}
                      className="absolute h-full w-full inset-[0px]"
                    />
                  </div>
                  <span className="absolute p-[12px] top-[0px] text-body-1">
                    {child.name}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
